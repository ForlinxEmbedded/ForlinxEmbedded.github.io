# 5.10.209_Forlinx_Desktop22.04_Root Partition Expansion When Booting with TF Card (Modifying File System Partitions after System Boot)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright Notice

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Manual Version** | Revision History |
|----------|----------|----------|
| 4/17/2025| V1.0||

## Description

This document mainly introduces the method of directly deleting the oem and userdata partitions on the OK3588 development board and expanding them to the root partition. There is no need to modify the source code, re - compile and flash.

## Modification Method

When using a 64G TF card for card boot, it is found that the actual root directory is only 15G, and the entire space of the TF card is not fully utilized. Data still needs to be stored in the userdata. Therefore, the following partition expansion methods are provided.

**Note: Operations need to be performed on the debug serial port or on the development board as the root user.**

Linux 5.10.66 has no parted command

### View partitions in parted:

```plain
root@ok3588:~# parted /dev/mmcblk1
GNU Parted 3.4
Using /dev/mmcblk1
Welcome to GNU Parted! Type 'help' to view a list of commands.

(parted) print		// View the partition                                                        
Model: SD SD64G (sd/mmc)
Disk /dev/mmcblk1: 63.9GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name      Flags
 1      8389kB  12.6MB  4194kB               uboot
 2      12.6MB  16.8MB  4194kB               misc
 3      16.8MB  83.9MB  67.1MB               boot
 4      83.9MB  218MB   134MB                recovery
 5      218MB   252MB   33.6MB               backup
 6      252MB   15.3GB  15.0GB  ext4         rootfs
 7      15.3GB  15.4GB  134MB   ext4         oem
 8      15.4GB  63.9GB  48.4GB  ext4         userdata
```

### Delete partitions 7 and 8:

```plain
(parted) rm 8                                                         
Warning: Partition /dev/mmcblk1p8 is being used. Are you sure you want to continue?
Yes/No? yes                                                           
Error: Partition(s) 8 on /dev/mmcblk1 have been written, but we have been unable to inform the kernel of the change, probably because it/they
are in use.  As a result, the old partition(s) will remain in use.  You should reboot now before making further changes.
Ignore/Cancel? ignore                                                 
(parted) rm 7                                                         
Warning: Partition /dev/mmcblk1p7 is being used. Are you sure you want to continue?
Yes/No? yes                                                           
Error: Partition(s) 7, 8 on /dev/mmcblk1 have been written, but we have been unable to inform the kernel of the change, probably because
it/they are in use.  As a result, the old partition(s) will remain in use.  You should reboot now before making further changes.                                                       
Ignore/Cancel? ignore
```

### Expand partition 6:

```plain
(parted) resizepart 6
Warning: Partition /dev/mmcblk1p6 is being used. Are you sure you want to continue?
Yes/No? yes                                                           
End?  [15.3GB]? 100%                                                  
Error: Error informing the kernel about modifications to partition /dev/mmcblk1p6 -- Device or resource busy.  This means Linux won't know
about any changes you made to /dev/mmcblk1p6 until you reboot -- so you shouldn't mount it or use it in any way before rebooting.
Ignore/Cancel? ignore                                                 
Error: Partition(s) 7, 8 on /dev/mmcblk1 have been written, but we have been unable to inform the kernel of the change, probably because
it/they are in use.  As a result, the old partition(s) will remain in use.  You should reboot now before making further changes.
Ignore/Cancel? ignore
```

### **View partitions again:**

```plain
(parted) print                                                        
Model: SD SD64G (sd/mmc)
Disk /dev/mmcblk1: 63.9GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name      Flags
 1      8389kB  12.6MB  4194kB               uboot
 2      12.6MB  16.8MB  4194kB               misc
 3      16.8MB  83.9MB  67.1MB               boot
 4      83.9MB  218MB   134MB                recovery
 5      218MB   252MB   33.6MB               backup
 6      252MB   63.9GB  63.6GB  ext4         rootfs
```

It can be seen that partition 6 has been expanded. Press ctrl + d to exit parted.

### Modify /etc/fstab:

```plain
root@ok3588:~# vi /etc/fstab
屏蔽掉下列两条命令：
/dev/mmcblk0p7                  /oem                    ext4            defaults                0       0
/dev/mmcblk0p8                  /userdata               ext4            defaults                0       0

Linux 则屏蔽掉：
PARTLABEL=oem   /oem    ext4    defaults        0 2
PARTLABEL=userdata      /userdata       ext4    defaults        0 2
```

Note: If the above two lines are not commented out in Ubuntu before restarting, it will cause the system to fail to boot. At this time, you can use Linux to boot, then read the contents of the TF boot card, and thus operate the Ubuntu file system.

```plain
root@ok3588:~# cd /media/sdcard2/etc/			// or/mnt/sdcard/etc/
root@ok3588:/media/sdcard2/etc# vi fstab
屏蔽掉：
/dev/mmcblk0p7                  /oem                    ext4            defaults                0       0
/dev/mmcblk0p8                  /userdata               ext4            defaults                0       0
root@ok3588:/media/sdcard2/etc# sync
```

### Save and restart:

### Expand partition 6:

```plain
root@ok3588:~# resize2fs /dev/mmcblk1p6
resize2fs 1.46.5 (30-Dec-2021)
Filesystem at /dev/mmcblk1p6 is mounted on /run/media/mmcblk1p6; on-line resizing required
old_desc_blocks = 2, new_desc_blocks = 8
The filesystem on /dev/mmcblk1p6 is now 15530491 (4k) blocks long.
```

View partitions:

```plain
root@ok3588:~# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        59G  5.8G   50G  11% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
tmpfs           768M  2.6M  766M   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           1.9G   12K  1.9G   1% /tmp
tmpfs           384M   84K  384M   1% /run/user/1000
tmpfs           384M   56K  384M   1% /run/user/0
```