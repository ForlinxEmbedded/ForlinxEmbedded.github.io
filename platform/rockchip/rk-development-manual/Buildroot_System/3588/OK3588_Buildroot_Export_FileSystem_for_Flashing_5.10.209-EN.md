# OK3588 Buildroot 5.10.209: Exporting the File System from the Development Board for Flashing

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## **Overview**
This document describes how to export the file system from an OK3588 board for image-cloning and flashing workflows.

**Note:**

**Keep the file system on the source development board unchanged during testing. Flash the exported file system to another board, and perform a full change only after the test passes.**

**The test board and system version are OK3588 5.10.209 Buildroot.**

## **Revision History**
| **Date** | **Document Version** | **Changes** |
| :---: | :---: | :---: |
| 26/08/2026 | V1.0 | Initial release |


## Background
① Users are using a Forlinx Desktop image and have installed the required environment in the board image. Due to resource or environment constraints, they do not want to export the file system by connecting to a virtual machine and using incremental rsync synchronization.

② In field working conditions, the file system must be preserved to reproduce an issue. In this case, it is more convenient to operate only through the serial port.

## Preparations
Preparations:

+ An OK3588 development board, a USB flash drive or microSD card with sufficient capacity, a USB Type-C cable, the Rockchip OTG flashing/debug environment, and the related files and source code downloaded from this document.
+ Check that the USB flash drive or microSD card used to store the exported Forlinx Desktop file system is formatted as NTFS; if not, format it as NTFS.

## Attachments
[ok3588_Mirror_Export.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2026/zip/60826624/1792402577586-b4d9f4df-f29d-4060-a945-7bedcbdfe949.zip)

## 1. Unpack the Firmware and Copy the Tools and Image Files to the microSD Card on the PC
Prepare a microSD card of 64 GB or larger (depending on the image size) and format it as NTFS.

Copy ntfs-3g, update.sh and Image_pack_tools to the microSD card.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/001_EN.png)

Unpack the entire update package.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/002_EN.png)

Copy MiniLoaderAll.bin, package-file and parameter.txt from Output/Android to the Image_pack_tools folder.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/003_EN.png)

Copy misc.img, oem.img, recovery.img and uboot.img from Output/Android/Image to the Image_pack_tools folder.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/004_EN.png)

If you have modified the kernel image, copy your generated boot.img to Image_pack_tools. Otherwise, copy the unpacked boot.img to Image_pack_tools.

After copying, the Image_pack_tools folder contains the following files:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/005_EN.png)

## 2. Enter the Recovery System on the Board and Copy the Exported Partition Images
Insert the USB flash drive into the board and enter the recovery system.

There are two ways to enter the recovery system:

First, after the system has started or from the U-Boot command line, run `reboot recovery` through the debug serial port and wait for the system to reboot automatically into Recovery mode;

Second, disconnect the board's Type-C 0 port from the Windows PC, then press and hold the Recovery button and power on the board. Wait for the recovery system to start.

```bash
root@ok3588-recovery:/# cp /media/udisk0/update.sh ./
root@ok3588-recovery:/# chmod 777 update.sh
root@ok3588-recovery:/# ./update.sh
```

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/006_EN.png)

After the copy is complete, the blue LED on the core board changes from steady on to a heartbeat pattern.

## 3. Generate the Complete update.img Image
Insert the microSD card into the PC and attach it to the virtual machine.

```bash
forlinx@ubuntu:~$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0    7:0    0     4K  1 loop /snap/bare/5
loop1    7:1    0    74M  1 loop /snap/core22/2437
loop2    7:2    0  66.8M  1 loop /snap/core24/1643
loop3    7:3    0 266.6M  1 loop /snap/firefox/3836
loop4    7:4    0  74.3M  1 loop /snap/core22/1612
loop5    7:5    0   497M  1 loop /snap/gnome-42-2204/141
loop6    7:6    0 531.5M  1 loop /snap/gnome-42-2204/263
loop7    7:7    0 614.5M  1 loop /snap/gnome-46-2404/164
loop8    7:8    0  91.7M  1 loop /snap/gtk-common-themes/1535
loop9    7:9    0   402M  1 loop /snap/mesa-2404/1839
loop10   7:10   0  12.9M  1 loop /snap/snap-store/1113
loop11   7:11   0  12.2M  1 loop /snap/snap-store/1216
loop12   7:12   0  38.8M  1 loop /snap/snapd/21759
loop13   7:13   0  50.1M  1 loop /snap/snapd/27710
loop14   7:14   0   828K  1 loop /snap/snapd-desktop-integration/391
loop15   7:15   0   452K  1 loop /snap/snapd-desktop-integration/83
sda      8:0    0   200G  0 disk 
├─sda1   8:1    0     1M  0 part 
├─sda2   8:2    0   513M  0 part /boot/efi
└─sda3   8:3    0 199.5G  0 part /var/snap/firefox/common/host-hunspell
                                 /
sdb      8:16   1  59.5G  0 disk 
└─sdb1   8:17   1  59.5G  0 part /media/forlinx/DC60A5B360A59534
sr0     11:0    1  1024M  0 rom 
forlinx@ubuntu:~$ cd /media/forlinx/DC60A5B360A59534
forlinx@ubuntu:/media/forlinx/DC60A5B360A59534$ ls
 Image_pack_tools   ntfs-3g   rootfs  'System Volume Information'   update.sh   userdata
```

Copy the files from the microSD card to the ~/test directory.

```bash
forlinx@ubuntu:/media/forlinx/DC60A5B360A59534$  cd ~/test
forlinx@ubuntu:~/test$ ls
 Image_pack_tools   ntfs-3g   rootfs  'System Volume Information'   update.sh   userdata
forlinx@ubuntu:~/test$ cd Image_pack_tools
forlinx@ubuntu:~/test/Image_pack_tools$ ls
```

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/007_EN.png)

```bash
forlinx@ubuntu:~/test/Image_pack_tools$ ./rk3588-mkupdate.sh   # Run rk3588-mkupdate.sh
```

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/008_EN.png)

Finally, update.img is generated in the Image_pack_tools/Image directory.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3588/OK3588_Buildroot_Export_FileSystem_for_Flashing_5.10.209-EN/009_EN.png)

Flash the generated image to the development board and check whether it is consistent.

## 4. System Partition Sizes Change After Flashing
After reflashing, running `df -h` may show incorrect partition sizes.

```bash
root@ok3588-buildroot:/# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  1.2G   12G   9% /
devtmpfs        1.8G  8.0K  1.8G   1% /dev
tmpfs           1.9G  220K  1.9G   1% /tmp
tmpfs           1.9G  668K  1.9G   1% /run
tmpfs           1.9G  240K  1.9G   1% /var/log
tmpfs           1.9G     0  1.9G   0% /dev/shm
/dev/mmcblk0p7  123M   12M  108M  10% /oem
/dev/mmcblk0p8   14G  290M   13G   3% /userdata
root@ok3588-buildroot:/#
```

Flash the exported image file to another development board and check the system partitions.

```bash
root@ok3588-buildroot:/# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       1.5G  1.2G  148M  90% /
devtmpfs        1.8G  8.0K  1.8G   1% /dev
tmpfs           1.9G  220K  1.9G   1% /tmp
tmpfs           1.9G  668K  1.9G   1% /run
tmpfs           1.9G  240K  1.9G   1% /var/log
tmpfs           1.9G     0  1.9G   0% /dev/shm
/dev/mmcblk0p7  123M   12M  110M  10% /oem
/dev/mmcblk0p8  1.5G  290M  1.1G  22% /userdata
root@ok3588-buildroot:/#

```

You can run `resize2fs` to reset the partition size.

```bash
root@ok3588-buildroot:/# resize2fs /dev/mmcblk0p6
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/mmcblk0p6 is mounted on /; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 2
The filesystem on /dev/mmcblk0p6 is now 3670016 (4k) blocks long.

root@ok3588-buildroot:/# resize2fs /dev/mmcblk0p8
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/mmcblk0p8 is mounted on /userdata; on-line resizing required
old_desc_blocks = 1, new_desc_blocks = 2
The filesystem on /dev/mmcblk0p8 is now 3813371 (4k) blocks long.

root@ok3588-buildroot:/# df -h        // Check the file system partition sizes after adjustment
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  1.2G   12G   9% /
devtmpfs        1.8G  8.0K  1.8G   1% /dev
tmpfs           1.9G  220K  1.9G   1% /tmp
tmpfs           1.9G  668K  1.9G   1% /run
tmpfs           1.9G  240K  1.9G   1% /var/log
tmpfs           1.9G     0  1.9G   0% /dev/shm
/dev/mmcblk0p7  123M   12M  108M  10% /oem
/dev/mmcblk0p8   15G  290M   14G   3% /userdata

```
