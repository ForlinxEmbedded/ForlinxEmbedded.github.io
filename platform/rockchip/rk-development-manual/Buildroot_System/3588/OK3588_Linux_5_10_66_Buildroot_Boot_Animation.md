# OK3588 5.10.66 Buildroot Boot Animation

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 09/22/2025| V1.0| Initial Version|

## Boot Animation

Implement the boot animation in the Linux file system of OK3588.

This project uses the psplash tool, which is a lightweight boot screen program typically used in embedded Linux systems. Its main function is to display a graphical startup screen during system boot to provide user feedback, often featuring a brand logo or progress bar.

Key Features:

1. Lightweight: Designed to be minimal, suitable for resource-constrained embedded devices;
2. Graphical Interface: Capable of displaying static images or simple animations for an enhanced visual experience during startup;
3. Progress Bar Support: Can show a progress bar to indicate system loading status;
4. Flexible Configuration: You can customize boot images, progress bar colors, display duration, etc., via configuration files.

Regarding the progress bar support mentioned, it has not been verified on the RK3588 platform. The primary verification focus has been on displaying images and dynamic logos.

A dynamic logo rapidly displays consecutive images, creating perceived animation.

Below are the operational instructions:

**1\. Image Production**

Place the adapters in the folder into the virtual machine for conversion operations.

Create a folder to store the project you intend to work on:

```plain
forlinx@ubuntu20:~$ mkdir -p psplash_logo/mp4_logo/
```

Please place the video into the mp4\_logo folder.

Start downloading ffmpeg, which will be used later when processing MP4 videos:

```plain
forlinx@ubuntu20:~/psplash_logo/mp4_logo$ sudo apt-get update
forlinx@ubuntu20:~/psplash_logo/mp4_logo$ sudo apt-get install ffmpeg
```

Create a new part0 folder to store the images that will be generated later:

```plain
forlinx@ubuntu20:~/psplash_logo/mp4_logo$ mkdir part0
```

Enter the following command to perform the conversion: 

```plain
forlinx@ubuntu20:~/psplash_logo/mp4_logo$ ffmpeg -i logo.mp4 -f image2 -r 7 part0/%04d.png
```

Now you can take a look at the image content in the part0 folder:

```plain
forlinx@ubuntu20:~/psplash_logo/mp4_logo$ ls part0/
0001.png  0004.png  0007.png  0010.png  0013.png  0016.png  0019.png  0022.png  0025.png  0028.png  0031.png  0034.png  0037.png  0040.png  0043.png  0046.png  0049.png  0052.png
0002.png  0005.png  0008.png  0011.png  0014.png  0017.png  0020.png  0023.png  0026.png  0029.png  0032.png  0035.png  0038.png  0041.png  0044.png  0047.png  0050.png  0053.png
0003.png  0006.png  0009.png  0012.png  0015.png  0018.png  0021.png  0024.png  0027.png  0030.png  0033.png  0036.png  0039.png  0042.png  0045.png  0048.png  0051.png  0054.png
```

**2\. Convert the Image to a .h file**

Before converting the .h file, it is also necessary to check whether the image is in the same resolution as the screen. When using psplash, the image resolution should match the screen resolution.

View command:

```plain
forlinx@ubuntu20:~/psplash_logo/mp4_logo/part0$ file 0001.png 
0001.png: PNG image data, 640 x 360, 8-bit/color RGB, non-interlaced
```

You can see that the resolution is now 640x360, then do the conversion.

Create a "logo\_h" folder, and within it, create three subfolders named "h", "logo\_1024x800", and "master".

```plain
forlinx@ubuntu20:~/psplash_logo$ mkdir logo_h
forlinx@ubuntu20:~/psplash_logo/logo_h$ mkdir h logo_1280x800 master
```

Afterwards, copy the newly generated png file to the master folder for future use. Since this is a self-copying process, it will be demonstrated here.

After the copying is completed, start the resolution conversion:

Create the script “fix\_1280x800.sh” in the “master” folder:

```plain
forlinx@ubuntu20:~/psplash_logo/logo_h/master$ vi fix_1280x800.sh 
/*File content*/
#!/bin/bash

for img in *.png; do
        convert "$img" -resize 1280x800! "../logo_1280x800/$img"
done
```

Grant executable permissions:

```plain
forlinx@ubuntu20:~/psplash_logo/logo_h/master$ chmod +x fix_1280x800.sh
```

After execution is completed, the modified file will be created in logo\_1280x800.

```plain
forlinx@ubuntu20:~/psplash_logo/logo_h/logo_1280x800$ file 0001.png 
0001.png: PNG image data, 1280 x 800, 8-bit/color RGB, non-interlaced
```

Create a script named “make-image-header.sh” in the “h‘ folder and grant it executable permission:

```plain
forlinx@ubuntu20:~/psplash_logo/psplash/logo_test/fix_1024_800$ vi make-image-header.sh 
/*File content*/
#!/bin/sh

# Specify the image directory and name prefix.
img_dir="$1"
name_prefix="$2"

# Check if the directory exists
if [ ! -d "$img_dir" ]; then
  echo "Directory $img_dir doesn't exist"
  exit 1
fi

i=0
# Traverse all PNG files in the directory
for img in "$img_dir"/*.png; do
  # Check if any PNG files are found
  if [ ! -e "$img" ]; then
    echo "No PNG files found"
    break
  fi

  imageh=`basename "$img" .png`-img.h
#  name="${name_prefix}_${imageh}"
        name="${name_prefix}_$(printf "%01d" "$i")_IMG"
  # Generate a C header file
  gdk-pixbuf-csource --macros "$img" > "$imageh.tmp"
  sed -e "s/MY_PIXBUF/${name}/g" -e "s/guint8/uint8/g" "$imageh.tmp" > "$imageh" && rm "$imageh.tmp"

  i=$(expr $i + 1)
  echo "Generated the file $imageh"
done

#./make-image-header.sh resized_images POKY         Reference command                
```

Execute script:

```plain
forlinx@ubuntu20:~/psplash_logo/psplash/logo_test/fix_1024_800$ ./make-image-header.sh resized_images POKY
Generated 0001-img.h
Generated 0002-img.h
Generated 0003-img.h
Generated 0004-img.h
Generated 0005-img.h
Generated 0006-img.h
Generated 0007-img.h
Generated 0008-img.h
Generated 0009-img.h
Generated 0010-img.h
Generated 0011-img.h
Generated 0012-img.h
...
...
...
```

**3\. Source Code Modification**

Before making modifications, you need to copy the psplash source code to the psplash\_logo/ folder. Please copy it yourself.

Next, modify the cross-compiler section of the Makefile.

```plain
AUTOMAKE = ${SHELL} /home/wonhere/zhangqi/OMAP3530/psplash/missing --run automake-1.11
AWK = gawk
#CC = arm-none-linux-gnueabi-gcc
CC = /home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/aarch64-linux-gcc
CCDEPMODE = depmode=gcc3
CFLAGS = -g -O2
CPP = arm-none-linux-gnueabi-gcc -E
```

Here, the CC variable is modified to the cross-compiler used on your own platform.

Create a logo folder, copy all the \*-img.h files that were just generated, and add references in the psplash.c file.

```plain
#include "logo/0001-img.h"
#include "logo/0002-img.h"
#include "logo/0003-img.h"
。。。
。。。
。。。
#include "logo/0047-img.h"
#include "logo/0048-img.h"
#include "logo/0049-img.h"
#include "logo/0050-img.h"
#include "logo/0051-img.h"
#include "logo/0052-img.h"
#include "logo/0053-img.h"
#include "logo/0054-img.h"
```

Add macro definitions below to facilitate writing parameters later:

```plain
#define IMG_WIDTH(x)	POKY_##x##_IMG_WIDTH
#define IMG_HEIGHT(x)	POKY_##x##_IMG_HEIGHT
#define IMG_BYTES_PER_PIXEL(x)	POKY_##x##_IMG_BYTES_PER_PIXEL
#define IMG_RLE_PIXEL_DATA(x)	POKY_##x##_IMG_RLE_PIXEL_DATA
```

Add the following content to the main function:

```plain
 /* Draw the Myir logo  */
/*   psplash_fb_draw_image (fb, 
                         (fb->width  - POKY_IMG_WIDTH)/2, 
                         ((fb->height * 5) / 6 - POKY_IMG_HEIGHT)/2,
                         POKY_IMG_WIDTH,
                         POKY_IMG_HEIGHT,
                         POKY_IMG_BYTES_PER_PIXEL,
                         POKY_IMG_RLE_PIXEL_DATA);

*/ 
      psplash_fb_draw_image (fb, (fb->width  - IMG_WIDTH(0))/2, (fb->height - IMG_HEIGHT(0))/2,IMG_WIDTH(0),IMG_HEIGHT(0),IMG_BYTES_PER_PIXEL(0),IMG_RLE_PIXEL_DATA(0));
    usleep(50000);
。。。
。。。
。。。
        psplash_fb_draw_image (fb, (fb->width  - IMG_WIDTH(0))/2, (fb->height - IMG_HEIGHT(0))/2,IMG_WIDTH(0),IMG_HEIGHT(0),IMG_BYTES_PER_PIXEL(0),IMG_RLE_PIXEL_DATA(50));
        usleep(50000);
        psplash_fb_draw_image (fb, (fb->width  - IMG_WIDTH(0))/2, (fb->height - IMG_HEIGHT(0))/2,IMG_WIDTH(0),IMG_HEIGHT(0),IMG_BYTES_PER_PIXEL(0),IMG_RLE_PIXEL_DATA(51));
        usleep(50000);
        psplash_fb_draw_image (fb, (fb->width  - IMG_WIDTH(0))/2, (fb->height - IMG_HEIGHT(0))/2,IMG_WIDTH(0),IMG_HEIGHT(0),IMG_BYTES_PER_PIXEL(0),IMG_RLE_PIXEL_DATA(52));
        usleep(50000);
        psplash_fb_draw_image (fb, (fb->width  - IMG_WIDTH(0))/2, (fb->height - IMG_HEIGHT(0))/2,IMG_WIDTH(0),IMG_HEIGHT(0),IMG_BYTES_PER_PIXEL(0),IMG_RLE_PIXEL_DATA(53));
        usleep(50000);
```

It includes IMG\_WIDTH width, IMG\_WIDTH height, IMG\_BYTES\_PER\_PIXEL pixel format, and IMG\_RLE\_PIXEL\_DATA image data.

Here, the width, height, and pixel format are all the same, so the same parameter is used, with only the parameter for the IMG\_RLE\_PIXEL\_DATA image data being modified.

Finally, simply execute "make". After the execution is complete, the psplash and psplash-write files will be generated. You need to copy these two files into the /usr/bin/ folder of the board.

**4\. Linux System Configuration**

In the Linux system configuration, it is necessary to create the S50weston\_paplash script in the /etc/init.d/ file.

```plain
root@ok3588:/etc/init.d# cat S50weston_paplash 
/*Script content*/
#!/bin/sh
### BEGIN INIT INFO
# Provides:             psplash
# Required-Start:
# Required-Stop:
# Default-Start:        S
# Default-Stop:
### END INIT INFO

/etc/init.d/S49weston stop

case "$1" in
    start)
        echo "Starting psplash..."
        export TMPDIR=/mnt/.psplash
        mkdir -p $TMPDIR
        mount tmpfs -t tmpfs $TMPDIR -o,size=2M
        rotation=0
        if [ -e /etc/rotation ]; then
            read rotation < /etc/rotation
        fi
        /usr/bin/psplash --angle $rotation &
        ;;
    stop)
        echo "Stopping psplash..."
        killall psplash
        umount $TMPDIR
        rmdir $TMPDIR
        ;;
    *)
        echo "Usage: \$0 {start|stop}"
        exit 1
        ;;
esac

sleep 5

pkill psplash

/etc/init.d/S49weston start
/etc/init.d/S51matrix-browser start
exit 0
```

When configuring executable permissions manually, it is also important to note that the "sleep 5" setting should be adjusted according to your actual playback duration. It is recommended to display a black background image at the end of playback to prevent the dynamic logo image at the bottom from being visible when the device is turned off.

**5\. Verification Results**

After the configuration is complete, simply restart it

**6\. Source Code**

Source code: [psplash.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2024/zip/45533488/1730854172115-a0f32d5e-a102-4d70-aac9-197327eff6a5.zip)

Test video: [logo.mp4](https://forlinx-book.yuque.com/attachments/yuque/0/2024/mp4/45533488/1730854229502-c1771d94-7c50-49c4-b364-404f3f12d760.mp4)