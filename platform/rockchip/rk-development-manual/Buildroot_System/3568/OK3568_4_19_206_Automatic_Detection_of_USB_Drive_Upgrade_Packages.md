# OK3568 4.19.206 Automatic Detection of USB Drive Upgrade Packages

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 08/21/2024| V1.0| Initial Version|

## Automatic Detection of USB Drive Upgrade Packages

This manual describes how to upgrade update via USB disk.

First, prepare a USB drive containing the upgrade package update.img to be flashed. Confirm the USB drive’s auto-mount path. Insert the USB drive.

Take my development board as an example, the default mount path of the USB disk is/run/media/sda1

```plain
[root@ok3568:/]$ ls /run/media/sda1
System Volume Information  update.img			//U disk is automatically mounted, and update. img is available in the disk.
```

Now write the boot script in the/etc/init. d path.

```plain
[root@ok3568:/]$ vi etc/init.d/S99update.sh
```

The script reads as follows:

```plain
#!//bin/sh
        FILE=/run/media/sda1/update.img				//The path is the default mounting path of the USB flash disk.

        if test -f "$FILE";then			//Judge whether there is update. img in the USB flash disk.
                echo"----------------FILE exist----------------"
                cp /run/media/sda1/update.img  /userdata/update.img		
                rm /run/media/sda1/update.img
                update ota /userdata/update.img
        fi
```

The format is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723430547170-0b94b0ea-bea3-4989-9955-86b255a18bb8.png)

Give permission to self-start script execution:

```plain
[root@ok3568:/]# chmod +x /etc/init.d/S99update.sh
```

Test:

```plain
[  128.540609] FAT-fs (sda1): utf8 is not a recommended IO charset for FAT filesystems, filesystem will be case sensitive!
//The development board can identify the USB flash disk normally.
[root@ok3568:/]# reboot		//Restart the development board
[root@ok3568:/]# ----------------FILE exist----------------		//Successfully entered the automatic upgrade script
update: Rockchip Update Tool
### WriteFwData() Enter
===========================
  update recovery start
m_fwOffset = 0x0006f226
fileBufferSize = 0x01ce3800===========================================

================== Update recovery Success ==============
### CheckFwData() Enter
===========================
  Check recovery start
m_fwOffset = 0x0006f226
fileBufferSize = 0x01ce3800
======================================================================
================== Check recovery Success ==============
find /userdata/update.img
command: --update_package=/userdata/update.img
update: write command to command file: done
update: write command to misc file: done
update: reboot!
```

**Note: After the upgrade is completed, the system will automatically restart twice. The first restart updates some information. The operating user is \[root @ buildroot]. You need to wait patiently. The second restart can be used normally. The operating user is \[root @ ok3568].**