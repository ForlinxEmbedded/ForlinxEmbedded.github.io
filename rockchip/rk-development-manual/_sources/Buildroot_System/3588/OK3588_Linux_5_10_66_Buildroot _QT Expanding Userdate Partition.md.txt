# OK3588 Buildroot 5.10.66 QT Expanding Userdate Partition

Document classification: □ Top secret □ Secret □ Internal information ■ Open                            

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

In the OK3588 Linux 5.10.66+qt system, the userdate partition is not expanded by default, resulting in the need to manually expand it each time.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 04/27/2025| V1.0| Initial Version|

## QT Expanding Userdate Partition

In the OK3588 Linux 5.10.66+qt system, the userdate partition is not expanded by default, resulting in the need to manually expand it each time. The following section demonstrates how to achieve automatic expansion of the userdate partition by modifying the source code.

**Modification Method**

Mount the image of the file system in the source code.

Source code: OK3588\_Linux\_fs.

```plain
$ cd linuxfs/
$ mkdir fs
$ sudo mount prebuild_rootfs.img fs/
```

Add file -S99Init.sh.

Add the S99Init.sh file to the /etc/init.d folder.

```shell
#!/bin/sh

start() {
/sbin/resize2fs /dev/mmcblk0p6
/sbin/resize2fs /dev/mmcblk0p8

/bin/umount /dev/mmcblk0p8 
sleep 0.1
/sbin/e2fsck  -f /dev/mmcblk0p8
sleep 0.1
tune2fs -m 1 /dev/mmcblk0p8    #Reduce the reserved partition
/bin/mount /dev/mmcblk0p8 /userdata/

sync
}

case "$1" in
        start)
                "$1";;
        *)
                echo "Usage: $0 {start}"
                exit 1
esac
```

Grant executable permissions:

```plain
$ sudo chmod +x S99Init.sh
```

Configuration file-rcS.

Add the following command to the /etc/init.d/rcS file.

```plain
#!/bin/sh


# Start all init scripts in /etc/init.d
# executing them in numerical order.
#
for i in /etc/init.d/S??* ;do

     # Ignore dangling symlinks (if any).
     [ ! -f "$i" ] && continue

     case "$i" in
        *.sh)
            # Source shell script for speed.
            (
                trap - INT QUIT TSTP
                set start
                . $i
            )
            ;;
        *)
            # No sh extension, so fork subprocess.
            $i start
            ;;
    esac
done

rm /etc/init.d/S99Init.sh && sed -i "\|/etc/init.d/rcS|d" "$0"

```

Mount the image of the file system in the source code.

Source code path: OK3588\_Linux\_fs/linuxfs

```plain
$ sudo umount fs
```

Finally, refer to the compilation manual for source code compilation and verification.

Add a method in the buildroot source code.

Add OK3588-linux-fs/buildroot/board/forlinx/ok3588/fs-overlay to the source code.  
Simply follow the previous method of adding files on this path. You need to recompile Buildroot later.