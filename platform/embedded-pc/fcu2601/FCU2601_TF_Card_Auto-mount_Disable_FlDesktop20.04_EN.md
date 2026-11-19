# TF Card Auto-mount Disable (FlDesktop20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

The factory system of FCU2601 automatically mounts inserted storage devices — USB flash drives, TF cards, SATA hard disks, etc. — to `/run/media/<device name>`. For example, a TF card is mounted to `/run/media/mmcblk1p1`. This path is created by root; for a vfat card, the regular user `forlinx` may not have write permission. The mount path also changes with the device name.

If the application requires a **fixed path** and **read/write access for regular users**, it is recommended to disable the TF card auto-mount and instead mount the TF card at a fixed location via `/etc/fstab`. This note describes:

- The implementation mechanism of auto-mount;
- How to disable TF card auto-mount;
- How to write an fstab entry that mounts the TF card to a readable/writable fixed path.

## 1. Auto-mount Mechanism

The system's auto-mount is **not implemented by udisks2**, but by a udev rule that invokes a script:

| File | Purpose |
| --- | --- |
| `/lib/udev/rules.d/60-persistent-storage.rules` | Matches `sd*[0-9]` and `mmcblk[1-9]p*` block devices, and invokes the mount script on insertion (add) and removal (remove) |
| `/etc/udev/scripts/mount.sh` | Uses `systemd-mount` to mount the device to `/run/media/<device name>`; automatically unmounts on removal |

Excerpt of the rule content:

```plain
KERNEL!="sd*[0-9]|mmcblk[1-9]p*", GOTO="udisk_hotplug_end"
...
ACTION=="add", RUN+="/etc/udev/scripts/mount.sh %k %E{label_uuid_name}"
ACTION=="remove",RUN+="/etc/udev/scripts/mount.sh %k %E{label_uuid_name}"
```

At the beginning of the `automount()` function in `mount.sh` there is a check: **if the device is already listed in `/etc/fstab`, it is skipped directly and not auto-mounted.** The device can be listed in fstab in any of the following forms:

- Device node, e.g. `/dev/mmcblk1p1`
- Any of `LABEL=`, `PARTLABEL=`, `UUID=`, `PARTUUID=`

**This is the basis of the solution recommended in this note**: as long as an fstab entry for the TF card exists, the script skips the TF card automatically — no need to modify system scripts.

**Note: the onboard eMMC is `mmcblk0`, the TF card is `mmcblk1`, and SATA disks and USB drives are `sdX`.**

## 2. Disabling TF Card Auto-mount

Choose one of the following three methods according to your needs.

- **Method 1 (Recommended): Add a TF Card Entry in fstab**

Simply add the fstab entry as described in Chapter 4; `mount.sh` will skip the TF card automatically. Auto-mounting of USB drives and SATA disks is not affected.

If you only want to **disable auto-mount and mount manually instead**, write the mount option as `noauto`:

```plain
/dev/mmcblk1p1  /mnt/tfcard  vfat  noauto,nofail,uid=1000,gid=1000,umask=0022  0  0
```

Then run `sudo mount /mnt/tfcard` when needed.

- **Method 2: Modify the Mount Script to Exclude the TF Card**

Add one line at the beginning of the `automount()` function in `/etc/udev/scripts/mount.sh`:

```bash
automount() {
    case "$DEVNAME" in /dev/mmcblk1*) return ;; esac
    ...
```

With this, the TF card will never be auto-mounted regardless of what fstab says. The drawback is that a system script is modified, so the change must be re-applied after a system upgrade or image re-flash.

- **Method 3: Disable Auto-mount for All Storage Devices**

Comment out the two `RUN+=...mount.sh` lines in `/lib/udev/rules.d/60-persistent-storage.rules`, then reload the rules:

```bash
sudo udevadm control --reload
```

This method disables auto-mounting for USB drives and SATA disks as well, and it modifies system files under `/lib`, which may be overwritten during an upgrade. **Not recommended unless truly needed.**

## 3. Fixed Mounting to a Readable/Writable Path via fstab

- **Querying TF Card Information**

```bash
sudo blkid /dev/mmcblk1p1      # Show file system type and UUID
id forlinx                     # Show uid/gid of the regular user (1000/1000 by default)
```

Sample output:

```plain
/dev/mmcblk1p1: LABEL="..." UUID="32D8-CB79" TYPE="vfat" PARTUUID="3440b514-01"
```

- **Creating the Mount Point**

```bash
sudo mkdir -p /mnt/tfcard
```

- **Editing /etc/fstab**

Append one line at the end of `/etc/fstab`. The recommended entry for a **vfat card** is:

```plain
/dev/mmcblk1p1  /mnt/tfcard  vfat  defaults,nofail,uid=1000,gid=1000,umask=0022,iocharset=utf8,x-systemd.device-timeout=30  0  0
```

If the requirement is to mount **only one specific card** even after swapping cards, replace the first field with the UUID:

```plain
UUID=32D8-CB79  /mnt/tfcard  vfat  defaults,nofail,uid=1000,gid=1000,umask=0022,iocharset=utf8,x-systemd.device-timeout=30  0  0
```

> Note: when a UUID is used, a different card (different UUID) will not be mounted to `/mnt/tfcard`. The new card is also not in fstab, so `mount.sh` will auto-mount it to `/run/media/mmcblk1p1`. If cards need to be swapped frequently on site, it is recommended to use `/dev/mmcblk1p1` in the first field.

Parameter description:

| Parameter | Purpose |
| --- | --- |
| `uid=1000,gid=1000` | After mounting, all files belong to the forlinx user and group. vfat does not store Linux permissions, so this **must be specified at mount time**; otherwise files default to root and regular users cannot write |
| `umask=0022` | Owner has read/write access, other users read-only. To make the card writable by all users, change it to `umask=0000` |
| `iocharset=utf8` | Chinese file names and volume labels display correctly |
| `nofail` | The system boots normally even if no card is inserted; the boot process does not wait for this mount |
| `x-systemd.device-timeout=30` | At boot, wait up to 30 seconds for the TF card device to become ready. **Do not set this too small — see Chapter 5 for details** |

**Cards in ext4 format** do not support the `uid`/`gid`/`umask` options; instead, change the owner of the mount point directory after mounting (needs to be done only once, as the owner is stored on the card):

```plain
/dev/mmcblk1p1  /mnt/tfcard  ext4  defaults,nofail,x-systemd.device-timeout=30  0  2
```

```bash
sudo mount /mnt/tfcard
sudo chown forlinx:forlinx /mnt/tfcard
```

- **Applying and Verifying**

```bash
sudo systemctl daemon-reload
sudo mount -a
mount | grep tfcard
ls -ld /mnt/tfcard
touch /mnt/tfcard/test && rm /mnt/tfcard/test && echo WRITE_OK
```

Expected results:

```plain
/dev/mmcblk1p1 on /mnt/tfcard type vfat (rw,relatime,uid=1000,gid=1000,fmask=0022,dmask=0022,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
drwxr-xr-x 3 forlinx forlinx 8192 ... /mnt/tfcard
WRITE_OK
```

Finally, **reboot the device** and confirm that the card is mounted automatically after boot.


