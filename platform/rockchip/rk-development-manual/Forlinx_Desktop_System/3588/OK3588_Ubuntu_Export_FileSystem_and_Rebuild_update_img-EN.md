# OK3588 Ubuntu: Exporting the File System Image to a Virtual Machine and Rebuilding update.img

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Customer Requirement
Export the already configured file system and rebuild update.img on the virtual machine.

This article describes how to use rsync to synchronize files between a local host and a remote host, including pushing from local to remote and pulling from remote to local.

## Example Network Configuration
Virtual machine development environment IP: 172.20.2.20

OK3588 development board IP: 172.20.2.118

Make sure both hosts can ping each other.

## Configuring the Development Board
1. Set a root password on the development board with `sudo passwd root`.
2. Modify `/etc/ssh/sshd_config` to allow remote SSH login: `vi /etc/ssh/sshd_config`.

```c
#LoginGraceTime 2m
#PermitRootLogin prohibit-password
PermitRootLogin yes  ## Add this line (shown in bold in the original)
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10
```

3. Restart the sshd service with `service sshd restart` or `systemctl restart ssh`.

```shell
root@ok3576-ubuntu24:/# systemctl restart sshd
Failed to restart sshd.service: Unit sshd.service not found.
root@ok3576-ubuntu24:/# systemctl restart ssh
```

## Exporting the File System
[rsync.rar](https://forlinx-book.yuque.com/attachments/yuque/0/2026/rar/45535139/1793779197045-47d02f3d-adef-4368-9b53-5c42c6168c05.rar)

Extract rsync.rar to obtain the rsync executable.

### Copying the Root File System to the Virtual Machine
Copy the rsync tool to `/usr/bin/` on the development board, grant execute permission, then run rsync to confirm it works.

```shell
root@ok3576-ubuntu24:~# cp /run/media/mmcblk1p1/rsync /usr/bin/
root@ok3576-ubuntu24:~# chmod +x /usr/bin/rsync
root@ok3576-ubuntu24:~# rsync
rsync  version 3.0.7  protocol version 30
Copyright (C) 1996-2009 by Andrew Tridgell, Wayne Davison, and others.
Web site: http://rsync.samba.org/
Capabilities:
    64-bit files, 64-bit inums, 64-bit timestamps, 64-bit long ints,
    no socketpairs, hardlinks, symlinks, IPv6, batchfiles, inplace,
    append, no ACLs, xattrs, iconv, symtimes
```

Create a `rootfs` folder on the virtual machine and run the following command.

```shell
mkdir rootfs
sudo rsync -avx root@172.20.2.118:/ rootfs/  
## Type this command manually; copying it may cause errors. Replace the IP with the board's IP.
```

Import all files from the development board's root directory into the `rootfs` folder on the virtual machine.

### Creating the Image
Use `dd` to create the image file, run the command on the virtual machine, and assign a label to the image.

```shell
dd if=/dev/zero of=rk3588.img bs=1M count=8000 
# Create an 8 GB empty image
sudo mkfs.ext4 -F -L linuxroot rk3588.img      
# Format rk3588.img as ext4 and set the linuxroot label
```

Mount the image and copy in the modified file system.

```shell
mkdir ubuntu_mount                    # Create a mount folder
sudo mount rk3588.img ubuntu_mount    
sudo cp -rfp rootfs/* ubuntu_mount 
```

### Modifying the Image
Create `rc.local` under `/etc/` on the system to be exported, add the following code, save and exit, and then grant execute permission.

```shell
#! /bin/sh -e
/etc/init.d/Init.sh

```

Replace the attached `Init.sh` file in `/etc/init.d/` on the system to be exported and grant execute permission.
[Init.sh](https://forlinx-book.yuque.com/attachments/yuque/0/2026/sh/45535139/1793779280297-0e557310-618a-4c55-ae35-0aa9bcef9015.sh)

### Unmounting
**You can modify files in the file system before performing the following step.**

```shell
sudo umount ubuntu_mount            # Unmount
```

### Checking and Repairing the rk3588.img File System
```shell
sudo e2fsck -p -f  rk3588.img     # Check and repair the rk3588.img file system
sudo resize2fs -M rk3588.img     # Shrink the rk3588.img file to its minimum size
```

At this point, `rk3588.img` is the file system image exported from the board.

### Packaging update.img
Next, repackage the `rk3588.img` file system into `update.img`.

File system image paths

```shell
3588
Linux : OK3588_Linux_fs/linuxfs/rootfs.img
Ubuntu 20.04 : OK3588_Linux_fs/ubuntu/focal-rootfs.img
Ubuntu 22.04 : OK3588-linux-source/ubuntu/jammy-rootfs.img
3576
Ubuntu 22.04 : OK3576-linux6.1.84-source/ubuntu/noble-rootfs.img
```

Using Ubuntu 20.04 as an example, back up the original `focal-rootfs.img` as `focal-rootfs_bak.img`, then copy `rk3588.img` to the current directory, as shown below.

```shell
forlinx@ubuntu20:~/3588_ubuntu22/OK3588_Linux_fs/ubuntu$ mv focal-rootfs.img focal-rootfs_bak.img
forlinx@ubuntu20:~/3588_ubuntu22/OK3588_Linux_fs/ubuntu$ cp /home/forlinx/rk3588.img ./
forlinx@ubuntu20:~/3588_ubuntu22/OK3588_Linux_fs/ubuntu$ mv rk3588.img focal-rootfs.img 
forlinx@ubuntu20:~/3588_ubuntu22/OK3588_Linux_fs/ubuntu$ ls
focal-rootfs_bak.img  focal-rootfs.img
```

Return to the source directory and perform a full build by following the online manual to generate `update.img`.

For an Ubuntu 22.04 file system with the 5.10.160 kernel version

Run `sudo ./build.sh` for a full build.

For an Ubuntu 22.04 file system with the 5.10.209 kernel version

Run `./build.sh` for a full build.

## Note

```shell
root@ok3588:~# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  3.2G   10G  25% /
devtmpfs        7.7G     0  7.7G   0% /dev
tmpfs           7.8G     0  7.8G   0% /dev/shm
tmpfs           1.6G  2.4M  1.6G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           7.8G     0  7.8G   0% /sys/fs/cgroup
tmpfs           7.8G   64K  7.8G   1% /tmp
/dev/mmcblk0p7   17M   12M  3.6M  77% /oem
/dev/mmcblk0p8   99G  290M   96G   1% /userdata
tmpfs           1.6G     0  1.6G   0% /run/user/0
tmpfs           1.6G   36K  1.6G   1% /run/user/1000
```

The `oem` and `userdata` partitions are not part of the root file system. To add or modify files in these directories, manually add them to the specified paths in the source tree.

3588

```shell
OK3588-linux-fs/device/forlinx/common/images/oem/oem_normal$
```

```shell
OK3588-linux-fs/device/forlinx/common/images/userdata/userdata_normal
```

3576

```shell
OK3576-linux6.1.84-source/device/rockchip/common/extra-parts/userdata/normal
OK3576-linux6.1.84-source/device/rockchip/common/extra-parts/oem/normal/
```

Then package the image normally.
