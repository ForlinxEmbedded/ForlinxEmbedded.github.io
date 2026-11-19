# Disabling MicroSD Card Auto-Mount (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
The FCU2601 factory system automatically mounts inserted storage devices such as USB drives, microSD cards, and SATA hard drives to `/run/media/<device name>`, for example mounting a microSD card to `/run/media/mmcblk1p1`. This path is created by root; on vfat cards, the regular user `forlinx` may not have write permission. The mount path also changes with the device name.

If your application needs a **fixed path** and **read/write access for regular users**, disable microSD card auto-mounting and instead mount it at a fixed path in `/etc/fstab`. 

This note explains:

- How auto-mounting is implemented;
- How to disable microSD card auto-mounting;
- How to mount the microSD card at a fixed read/write path using fstab.

## 1. Auto-Mount Mechanism

The system's auto-mounting is **not implemented by udisks2**; instead, a udev rule calls a script:

| File | Function |
| --- | --- |
| `/lib/udev/rules.d/60-persistent-storage.rules` | Matches `sd*[0-9]` and `mmcblk[1-9]p*` block devices and calls the mount script on insertion (add) and removal (remove) |
| `/etc/udev/scripts/mount.sh` | Uses `systemd-mount` to mount devices at `/run/media/<device name>`; unmounts automatically on removal |


Rule contents (excerpt):

```plain
KERNEL!="sd*[0-9]|mmcblk[1-9]p*", GOTO="udisk_hotplug_end"
...
ACTION=="add", RUN+="/etc/udev/scripts/mount.sh %k %E{label_uuid_name}"
ACTION=="remove",RUN+="/etc/udev/scripts/mount.sh %k %E{label_uuid_name}"
```

The `automount()` function of `mount.sh` starts with a check: **If a device is already listed in **`/etc/fstab`** the script skips it and does not auto-mount it.** Devices can be listed in fstab in any of these forms:

+ Device node, for example `/dev/mmcblk1p1`
+ Any of `LABEL=`, `PARTLABEL=`, `UUID=`, or `PARTUUID=`

**This is the basis for the approach recommended in this note**: as long as an fstab entry for the microSD card exists, the script automatically skips it, so there is no need to modify system scripts.

**Note: The onboard eMMC is `mmcblk0`, the microSD card is `mmcblk1`, and SATA hard drives and USB drives are `sdX`.**

## 2. Disabling microSD Card Auto-Mount

Choose one of the following three methods as needed.

- **Method 1 (Recommended): Adding a microSD Card Entry to fstab**

Simply add an fstab entry as described in Chapter 4, and `mount.sh` will automatically skip the microSD card. Auto-mounting of USB and SATA drives is unaffected.

If you only want to **disable auto-mounting and mount manually**, set the mount option to `noauto`:

```plain
/dev/mmcblk1p1  /mnt/tfcard  vfat  noauto,nofail,uid=1000,gid=1000,umask=0022  0  0
```

When needed, mount it with `sudo mount /mnt/tfcard`.

- **Method 2: Modifying the Mount Script to Exclude the microSD Card**

Add a line at the start of the `automount()` function in `/etc/udev/scripts/mount.sh`:

```bash
automount() {
    case "$DEVNAME" in /dev/mmcblk1*) return ;; esac
    ...
```

This way, the microSD card is never auto-mounted, regardless of the fstab configuration. The downside is that a system script is modified, so you must reapply the change after upgrades or image reflashing.

- **Method 3: Disabling Auto-Mount for All Storage Devices**

Comment out the two `RUN+=...mount.sh` lines in `/lib/udev/rules.d/60-persistent-storage.rules`, then reload the rules:

```bash
sudo udevadm control --reload
```

This method also disables auto-mounting of USB and SATA drives, and it modifies system files under `/lib`, which may be overwritten during upgrades. **Not recommended unless absolutely necessary.**

## 3. Fixed Read/Write Mounting with Fstab

### 3.1 Querying microSD Card Information
```bash
sudo blkid /dev/mmcblk1p1      # Show the filesystem type and UUID
id forlinx                     # Show the regular user's uid/gid (1000/1000 at the factory)
```

Example output:

```plain
/dev/mmcblk1p1: LABEL="..." UUID="32D8-CB79" TYPE="vfat" PARTUUID="3440b514-01"
```

### 3.2 Creating the Mount Point

```bash
sudo mkdir -p /mnt/tfcard
```

### 3.3 Editing /etc/fstab
Add a line at the end of `/etc/fstab`. The recommended entry for a **vfat card** is:

```plain
/dev/mmcblk1p1  /mnt/tfcard  vfat  defaults,nofail,uid=1000,gid=1000,umask=0022,iocharset=utf8,x-systemd.device-timeout=30  0  0
```

If you need to mount **only a specific card** after card swaps, replace the first column with the UUID:

```plain
UUID=32D8-CB79  /mnt/tfcard  vfat  defaults,nofail,uid=1000,gid=1000,umask=0022,iocharset=utf8,x-systemd.device-timeout=30  0  0
```

**Note: With a UUID, swapping in another card (with a different UUID) will not mount it at `/mnt/tfcard`. The new card is not in fstab either, so `mount.sh` will auto-mount it at `/run/media/mmcblk1p1`. If cards are swapped frequently in the field, use `/dev/mmcblk1p1` in the first column.**


Parameter descriptions:

| Parameter | Function |
| --- | --- |
| `uid=1000,gid=1000` | After mounting, all files belong to the `forlinx` user and group. vfat does not store Linux permissions, so this **must be set at mount time**; otherwise files default to root and regular users cannot write to them |
| `umask=0022` | The owner has read/write access; other users have read-only access. To allow all users to write, change to `umask=0000` |
| `iocharset=utf8` | Displays Chinese filenames and volume labels correctly |
| `nofail` | Boots normally with no card inserted; the boot process does not wait for this mount |
| `x-systemd.device-timeout=30` | Waits up to 30 seconds at boot for the microSD card device to be ready. **Do not set this too low; see Chapter 5** |


**Cards formatted as ext4** do not support the `uid`/`gid`/`umask` options. After mounting, change the owner of the mount point directory (this only needs to be done once, since the owner is stored on the card):

```plain
/dev/mmcblk1p1  /mnt/tfcard  ext4  defaults,nofail,x-systemd.device-timeout=30  0  2
```

```bash
sudo mount /mnt/tfcard
sudo chown forlinx:forlinx /mnt/tfcard
```

### 3.4 Applying and Verifying
```bash
sudo systemctl daemon-reload
sudo mount -a
mount | grep tfcard
ls -ld /mnt/tfcard
touch /mnt/tfcard/test && rm /mnt/tfcard/test && echo WRITE_OK
```

Expected result:

```plain
/dev/mmcblk1p1 on /mnt/tfcard type vfat (rw,relatime,uid=1000,gid=1000,fmask=0022,dmask=0022,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
drwxr-xr-x 3 forlinx forlinx 8192 ... /mnt/tfcard
WRITE_OK
```

Finally, **reboot the device** and verify that it auto-mounts after boot.

## Notes:
- **Hot-plugging**: An fstab entry mounts only once at boot. A microSD card inserted after boot, or reinserted after removal, will not be auto-mounted at `/mnt/tfcard`; you must run `sudo mount /mnt/tfcard`. If hot-plugging is needed in the field, detect the device in your application before mounting it, or try adding the `x-systemd.automount` option (auto-mounts on first access to the mount point). The `x-systemd.automount`** approach has not been tested here; verify it yourself before use;
- **Unmount before removing the card**: Run `sync && sudo umount /mnt/tfcard` before removing the card to avoid FAT filesystem corruption. If corruption occurs, the kernel remounts the card read-only per `errors=remount-ro`;
- **Back up before editing**: Run `sudo cp /etc/fstab /etc/fstab.bak` before editing. A misconfigured fstab is harmless thanks to `nofail`, but incorrectly changing other entries, such as the root partition, may prevent the system from booting;
- **Device name**: This note assumes the factory configuration in which the microSD card is `mmcblk1`. If the device tree or boot medium has been modified, confirm the device name with `lsblk` first;
- **Card format**: Large-capacity microSD cards must be formatted as ext4, and the fstab entry must be changed accordingly: /dev/mmcblk1p1  /mnt/tfcard  ext4  defaults,nofail,x-systemd.device-timeout=30  0  2.

