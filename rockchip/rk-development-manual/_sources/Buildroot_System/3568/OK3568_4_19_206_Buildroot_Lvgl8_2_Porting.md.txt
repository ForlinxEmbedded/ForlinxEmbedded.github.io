# OK3568_4_19_206_Buildroot_Lvgl8_2_Porting

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.   
Overview 

This document takes the migration of lvgl8.2 as an example to provide a reference for users to develop and migrate lightweight graphical interfaces.   

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 12/26/2024| V1.0| Initial Version|

## Lvgl8.2 Porting

1\. Source Code Acquisition Source

git clone -b release/v8.2 [https://github.com/lvgl/lv\_port\_linux\_frame\_buffer.git](https://github.com/lvgl/lv_port_linux_frame_buffer.git)

git clone -b release/v8.2 [https://github.com/lvgl/lvgl.git](https://github.com/lvgl/lvgl.git)

git clone -b release/v8.2 [https://github.com/lvgl/lv\_drivers.git](https://github.com/lvgl/lv_drivers.git)

Copy the lvgl and lv \_ drivers folders to the lv \_ port \_ Linux \_ frame \_ buffer folder.

2\. Compilation Process

 2.1 Modify lv\_port\_linux\_frame\_buffer/lv\_conf.h file

```c
/* clang-format off */
#if 1 /*Set it to "1" to enable content*/
```

```c
/*Color depth: 1 (1 byte per pixel), 8 (RGB332), 16 (RGB565), 32 (ARGB8888)*/
#define LV_COLOR_DEPTH 32
```

```c
/*1: use custom malloc/free, 0: use the built-in `lv_mem_alloc()` and `lv_mem_free()`*/
#define LV_MEM_CUSTOM 1
```

```c
/*Show some widget. It might be required to increase `LV_MEM_SIZE` */
#define LV_USE_DEMO_WIDGETS        1
```

 2.2 Modify lv\_port\_linux\_frame\_buffer/lv\_drv\_conf.h file 

```c
/* clang-format off */
#if 1 /*Set it to "1" to enable the content*/
```

```c
#ifndef USE_FBDEV
#  define USE_FBDEV           1
#endif

#if USE_FBDEV
#  define FBDEV_PATH          "/dev/fb0"
#endif
```

```c
#ifndef USE_EVDEV
#  define USE_EVDEV           1
#endif

#ifndef USE_BSD_EVDEV
#  define USE_BSD_EVDEV       0
#endif
```

```c
#if USE_EVDEV || USE_BSD_EVDEV
#  define EVDEV_NAME   "/dev/input/event1"        /*You can use the "evtest" Linux tool to get the list of devices and test them*/
#  define EVDEV_SWAP_AXES         0               /*Swap the x and y axes of the touchscreen*/
```

```c
#  define EVDEV_CALIBRATE         1               /*Scale and offset the touchscreen coordinates by using maximum and minimum values for each axis*/
```

```c
#  if EVDEV_CALIBRATE
#    define EVDEV_HOR_MIN         0               /*to invert axis swap EVDEV_XXX_MIN by EVDEV_XXX_MAX*/
#    define EVDEV_HOR_MAX      1024               /*"evtest" Linux tool can help to get the correct calibraion values>*/
#    define EVDEV_VER_MIN         0
#    define EVDEV_VER_MAX       600
#  endif  /*EVDEV_CALIBRATE*/
#endif  /*USE_EVDEV*/
```

2.3 Modify lv\_port\_linux\_frame\_buffer/main.c file 

```c
#define DISP_BUF_SIZE (600 * 1024)
```

```c
disp_drv.hor_res    = 1024;
disp_drv.ver_res    = 600;
```

2.4 Modify lv\_port\_linux\_frame\_buffer/Makefile file 

```c
CC ?= aarch64-buildroot-linux-gnu-gcc
```

```c
CFLAGS ?= -O3 -g0 -I$(LVGL_DIR)/ # -Wall -Wshadow -Wundef -Wmissing-prototypes -Wno-discarded-qualifiers -Wall -Wextra -Wno-unused-function -Wno-error=strict-prototypes -
Wpointer-arith -fno-strict-aliasing -Wno-error=cpp -Wuninitialized -Wmaybe-uninitialized
-Wno-unused-parameter -Wno-missing-field-initializers -Wtype-limits -Wsizeof-pointer-
memaccess -Wno-format-nonliteral -Wno-cast-qual -Wunreachable-code -Wno-switch-default -
Wreturn-type -Wmultichar -Wformat-security -Wno-ignored-qualifiers -Wno-error=pedantic -
Wno-sign-compare -Wno-error=missing-prototypes -Wdouble-promotion -Wclobbered -
Wdeprecated -Wempty-body -Wtype-limits -Wshift-negative-value -Wstack-usage=2048 -Wno-
unused-value -Wno-unused-parameter -Wno-missing-field-initializers -Wuninitialized -
Wmaybe-uninitialized -Wall -Wextra -Wno-unused-parameter -Wno-missing-field-initializers
-Wtype-limits -Wsizeof-pointer-memaccess -Wno-format-nonliteral -Wpointer-arith -Wno-
cast-qual -Wmissing-prototypes -Wunreachable-code -Wno-switch-default -Wreturn-type -
Wmultichar -Wno-discarded-qualifiers -Wformat-security -Wno-ignored-qualifiers -Wno-sign-
compare
```

2.5 Specify the cross-compiler to compile the source code

export CC=home/forlinx/OK3568-linux-source/buildroot/output/OK3568/host/bin/aarch64-buildroot-linux-gnu-gcc

Execute make-j4 under the lv \_ port \_ Linux \_ frame \_ buffer directory to compile the source code.

Finally, the demo executable file is generated in the lv \_ port \_ Linux \_ frame \_ buffer directory.

3\. Test Method

Copy the demo to the development board, and close the/etc/init. d/weston before running the demo.

Begin by executing the/etc/init. D/S50weston stop command.

The display effect of running the demo is as follows:

![Image](./images/OK3568_4_19_206_Buildroot_Lvgl8_2_Porting/1735200432204_52ed45aa_5cc7_4a83_b516_f988046aa8fd.jpeg)

4\. Attachments

[lv\_port\_linux\_frame\_buffer.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2024/zip/40395721/1735199320780-c19cb0ae-adb8-4acd-91c2-6fe559f10cd9.zip)