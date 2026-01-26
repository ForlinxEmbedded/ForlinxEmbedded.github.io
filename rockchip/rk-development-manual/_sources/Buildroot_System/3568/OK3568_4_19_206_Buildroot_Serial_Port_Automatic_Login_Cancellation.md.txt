# OK3568 4.19.206 Buildroot Serial Port Automatic Login Cancellation

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Serial Port Automatic Login Cancellation

Modify the/etc/inittab file to add the following command:

Startup system. 

::sysinit:/bin/mount -t proc proc /proc

::sysinit:/bin/mount -o remount,rw /

::sysinit:/bin/mkdir -p /dev/pts

::sysinit:/bin/mkdir -p /dev/shm

::sysinit:/bin/mount -a 2>/dev/null

::sysinit:/bin/hostname -F /etc/hostname

Now run any rc scripts.

<font style="color:#FF0000;">::respawn:-/bin/login</font>

<font style="color:#FF0000;">#::respawn:-/bin/sh</font>

::sysinit:/etc/init.d/rcS

Comment out: respawn:-/bin/sh and add: respawn:-/bin/login.