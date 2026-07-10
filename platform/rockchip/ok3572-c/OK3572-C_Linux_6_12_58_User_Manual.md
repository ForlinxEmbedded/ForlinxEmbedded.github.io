# Linux 6.12.58_User’s Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.  

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, understand interface functions, and learn testing methods. It primarily covers the testing of development board interface functions, methods for flashing the image, and troubleshooting common issues encountered during use. During testing, certain commands have been annotated for better understanding, focusing on practicality and adequacy. For kernel compilation, related application compilation methods, and development environment setup, please refer to the “User’s Compilation Manual” provided by Forlinx..

There are five chapters:

+ Chapter 1. briefly introduces the development board’s interface resources, relevant driver paths in the kernel source code, supported flashing and boot methods, and key points in the documentation;
+ Chapter 2. describes two login methods: serial port login and network login;
+ Chapter 3. explains how to perform functional tests using command line operations;
+ Chapter 4. includes camera playback tests and video hardware encoding/decoding tests;
+ Chapter 5. details methods for updating the image to storage devices, allowing you to choose the appropriate flashing method based on your actual needs.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️️🛤️ ️ | Related paths.|
| <font style="color:blue;">Blue font on gray background</font> | Refers to the command entered on the command line, which needs to be entered manually.|
| Black font on a gray background| Serial output information after command input|
| **Black Bold font on a gray background**| Key information in the serial output:|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@ok3572-buildroot: Development Board Serial Port Login Credentials|

forlinx@ok3572: Development board remote login credentials

forlinx@Linux: Linux account for the development environment

You can use this information to identify the operating environment for functionality.

Example: Checking the Loading Status of the AW-CM358 Module Driver

```bash
root@ok3572-buildroot:/# lsmod                          //View loaded module
Module                  Size  Used by    Not tainted
hci_uart               61440  1
btrtl                  28672  1 hci_uart
btbcm                  20480  1 hci_uart
moal                  876544  0
mlan                  585728  1 moal
```

+ root@ok3572-buildroot: Indicates the username is root and the hostname is ok3572-buildroot, meaning the operation is performed on the development board using the root account;
+ //: Denotes explanatory notes about commands or printed information; no input required;
+ <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">lsmod</font></font>: Displayed with gray background and blue text, indicating commands that need to be manually entered;
+ **moal 876544 0:** Text with gray background and black font represents the output after entering the command. Bolded text indicates key information, showing in this case that the module driver has been loaded.

## Application Scope

This software manual is designed for the OK3572 platform running Linux6.12.58. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 16/06/2026| V1.0| V1.0| V1.0| Initial Version|

1\. OK3572 Development Board Description

RK3572 is a low-power, high-performance processor based on the ARM64 architecture. It integrates six Cortex-A53 cores, two Cortex-A73 cores, and an independent NEON coprocessor, making it suitable for applications in computers, mobile phones, personal mobile internet devices, and digital multimedia equipment.

Connection method: Board-to-board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512294298_de6b9bb0_676c_49ab_a239_e5a7ab4502b1.png)

**Front**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512294464_e5259bd2_b1ab_4eca_99d6_659ea1cc755a.png)

**Back**

**Note: Hardware specifications are not covered in this software manual. Before development, please refer to the “ User’s Hardware Manual” to understand the product naming and hardware configuration.**

### 1.1 Linux 6.12.58 System Software Resources

| **Device**| **Driver Source Code Location in the Kernel**| **Device Name**|
|----------|----------|----------|
| LCD Backlight Driver| drivers/video/backlight/pwm\_bl.c| /sys/class/backlight|
| USB Interface:| drivers/usb/storage/|
| USB Mouse| drivers/hid/usbhid/| /dev/input/mice|
| Ethernet| drivers/net/ethernet/stmicro/stmmac| |
| SD/micro TF card driver| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/block/mmcblk1pX|
| EMMC Driver| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/block/mmcblk0pX|
| OV13855| drivers/media/i2c/ov13855.c| /dev/videoX|
| LCD controller| drivers/gpu/drm/rockchip/rockchip\_drm\_vop.c|
| MIPI CSI| drivers/phy/rockchip/phy-rockchip-mipi-rx.c|
| MIPI DSI| drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c|
| LCD touch driver| drivers/input/touchscreen/edt-ft5x06.c| /dev/input/eventX|
| RTC Real - Time Clock| drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c| /dev/rtc0|
| Serial Port| drivers/tty/serial/8250/8250\_dw.c| /dev/ttySX|
| Button driver| drivers/input/keyboard/adc-keys.c| /dev/input/eventX|
| LED| drivers/leds/leds-gpio.c|
| I2S| sound/soc/rockchip/rockchip\_sai.c|
| Audio Driver| sound/soc/codecs/nau8822.c| /dev/snd/|
| PMIC| drivers/mfd/rk806-core.c   drivers/regulator/rk806-regulator.c|
| PCIE| pci/controller/dwc/pcie-dw-rockchip.c|
| Watchdog| drivers/watchdog/dw\_wdt.c|
| PWM| drivers/pwm/pwm-rockchip.c|

### 1.2 EMMC Storage Partition Table

The table below details the eMMC storage partition information for the Linux operating system (The size of a block is 512 bits when calculating.):

| **Partition Index**| **Name**| **Offset/Block**| **Size/Block**| **Content**|
|----------|----------|----------|----------|----------|
| N/A| Loader| 0x00000000| 0x00004000| MiniLoaderAll.bin|
| 1| uboot| 0x00004000| 0x00004000| uboot.img|
| 2| misc| 0x00008000| 0x00002000| misc.img|
| 3| boot| 0x0000a000| 0x00020000| boot.img|
| 4| recovery| 0x0002a000| 0x00040000| recovery.img|
| 5| backup| 0x0006a000| 0x00010000| backup.img|
| 6| rootfs| 0x0007a000| 0x01c00000| rootfs.img|
| 7| oem| 0x01c7a000| 0x00040000| oem.img|
| 8| userdata| 0x01cba000| Remaining Space| userdata.img|

Use the fdisk -l command on the development board to see the partition size:

```bash
root@OK3572-buildroot:~# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 122224640 sectors, 2336M
Logical sector size: 512
Disk identifier (GUID): 60460000-0000-4021-8000-5fb800006952
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 122224606

Number  Start (sector)    End (sector)  Size Name
     1           16384           32767 8192K uboot
     2           32768           40959 4096K misc
     3           40960          172031 64.0M boot
     4          172032          434175  128M recovery
     5          434176          499711 32.0M backup
     6          499712        29859839 14.0G rootfs
     7        29859840        30121983  128M oem
     8        30121984       122224606 43.9G userdata
Disk /dev/mmcblk0boot0: 4 MB, 4194304 bytes, 8192 sectors

```

## 2\. Fast Startup

### 2.1 Preparation Before Startup

The OK3572 development board supports serial port login.   
Hardware Preparation:

+ 12V-3A DC Power Cable
+ Debug Serial Cable (for serial port login)

The debug serial port on the development board is a Type-C USB port. You can connect the development board to a PC using a USB-to-Type-C cable to monitor the board’s status.

+ Display screen — connect the screen according to the development board interface (optional if display is not needed)

### 2.2 Debugging Serial Port Driver Installation

The OK3572 platform features a Type-C port for serial debugging and an onboard USB-to-UART chip. No additional USB-to-serial debugging tool is required, making the setup simple and convenient.

To install the driver, please use the driver package CP210x\_Windows\_Drivers.zip provided in the \\3-Tools directory of the software materials.

### 2.3 Serial Port Login

#### 2.3.1 Serial Connection Settings

**Note:**

+ **Serial Port: Used for terminal login;  
  Login User: The serial terminal automatically logs in as the root user;**

+ **Settings: Baud rate 1500000, 8 data bits, 1 stop bit, no parity/flow;**

+ **Hardware Requirements:** 

  **Type-C for connecting PC and development board;**

+ **Software Requirements:  
A serial terminal application must be installed on the PC Windows. There are various terminal programs available, and you may choose any one you are familiar with.**

Take putty as an example to introduce the setting mode of the putty terminal:

Step 1: Confirm the serial port number connected to the computer, checking the port number in Device Manager, based on the actual port recognized by the computer;

Step2: Open the putty and set the serial line according to the com port of the computer used. The baud rate is 1500000.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512296307_895ae6fa_8397_4d94_b60c_c7b61b8c8729.png)

Step 3: After completing the above settings, enter the COM port number used by your computer in the “Saved Sessions” field (as shown in the following figure as an example), and save the configuration. Subsequently, when reopening the serial port, simply click the saved port number to directly apply the settings.

#### 2.3.2 Serial Port Login

After the PC terminal software is configured, connect the PC and the development board using a serial cable, then power on the device after connecting the power supply. The startup information can be viewed through the terminal software.

The following startup message indicates a successful boot, and you can press Enter to create a new command line:

```bash
[  574.044089] Freeing drm_logo memory: 2704K
[  574.234560] file system registered
[  574.237883] rk-pcie 29d00000.pcie: PCIe Link Fail, LTSSM is 0x3, hw_retries=1
[  574.243806] rk-pcie 29d10000.pcie: PCIe Link Fail, LTSSM is 0x3, hw_retries=1
[  574.383514] read descriptors
[  574.383563] bcdVersion must be 0x0100, stored in Little Endian order. Userspace driver should be fixed, accepting 0x0001 for compatibility.
[  574.383575] read strings
[  574.455980] dwc3 24000000.usb: failed to enable ep0out
[  575.259839] rk-pcie 29d10000.pcie: failed to initialize host
[  575.259924] rk-pcie 29d00000.pcie: failed to initialize host

root@ok3572-buildroot:/# [  578.594909] dwc3 24000000.usb: failed to enable ep0out

root@ok3572-buildroot:/#
root@ok3572-buildroot:/# [  581.471016] rk_gmac-dwmac 29d20000.ethernet eth0: Link is Up - 100Mbps/Full - flow control rx/tx
[  584.668886] platform bt-sound: deferred probe pending: asoc-simple-card: parse error
[  584.668932] platform mtd_vendor_storage: deferred probe pending: (reason unknown)

root@ok3572-buildroot:/#
```

### 2.4 Network Login

#### 2.4.1 Network Login Test

 **Note:**

+ **When leaving the factory, the default configuration of the network card is static IP, and the IP address is 192.168.0.232. For the method of changing the static IP, please refer to the "Ethernet Configuration" test section;**
+ **The computer and the development board need to be in the same network segment during the test.**

Before logging in to the network, you need to ensure that the network connection between the computer and the development board is normal. You can test the connection status between the computer and the development board through the ping command. Specific Operations:

1\. Connect the eth0 of the development board to the computer via a network cable, power on the development board, and after the kernel starts, the Blue heartbeat light on the SoM will flash. After the network card connected to the computer starts normally, the network card light will flash rapidly. At this point, you can test the network connection;

2\. Disable the computer firewall;

Temporarily disable the computer’s firewall (this is a general operation; specific steps depend on your Windows version);

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1718954728414_9f9a202c_0ba7_47f1_a14e_b10aa678fa01.png)

3\. Open Command Prompt as administrator;

Press Win + R, type cmd, then press Ctrl + Shift + Enter to run Command Prompt as administrator;

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1718954728585_22cc0ffd_0558_45ae_90c2_d581345a261a.png)

#### 2.4.2 SSH the server

 **Note:**

+ **When leaving the factory, the default configuration of the network card is static IP, and the IP address is 192.168.0.232. For the method of changing the static IP, please refer to the "Ethernet Configuration" test section;**
+ **Log in as the root user (password: root).**

1\. Use SSH to log in to the development board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512296693_0eb986ab_dfe6_4fdd_b5a4_631d2f2e3022.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512296764_8e25b7f3_782b_40c7_a489_1ee123381f9d.png)

#### 2.4.3 SFTP

The OK3572 development board supports FTP services, which are enabled automatically upon startup. Once the IP address is configured, the board can be used as an FTP server. The following describes how to utilize the FTP tool for file transfer.

Path: User Profiles\\3-Tools\\FileZilla\* Install the FileZilla tool on Windows and configure it as shown in the image below.

**Note:** 

+ **For this function, you need to connect a network cable to the development board. The host IP setting and the client are in the same network segment. Make sure that the host and the client are in the same LAN. The user name is root and the password is root;**
+ **The following is tested with the development board IP 192.168.0.232. Please modify it according to the actual situation.**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1718954729099_282246fe_f588_46d3_b4ea_4c670fb661bc.png)

### 2.5 Switching Between Screens and Cameras

The OK3572 supports both HDMI and MIPI display interfaces, enabling simultaneous display on two screens; the logo can be displayed on both MIPI and HDMI screens. Supports both the OV13855 and OV5645 MIPI cameras.

There are currently two ways to switch between the screen and the camera:

+ Dynamic control of the U-Boot menu
+ Kernel device tree specification

#### 2.5.1 Dynamic Control via U-Boot Menu

This method allows you to switch between supported display screens without recompiling or re-flashing the system.

During the U-Boot boot process, press the space bar in the serial terminal to bring up the control options:

```bash
Hit key to stop autoboot('SPACE'):  0 
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:csi type
---------------------------------------------
```

<font style="color:rgb(51, 51, 51);">Entering 2 in the terminal, you can access the Screen Control submenu.</font>

```bash
---------------------------------------------
vp0==>hdmi vp1==>mipi 
Select  display
0:Exit
1:vp0 display hdmi
2:vp1 display mipi
---------------------------------------------
```

You can choose whether to enable HDMI or MIPI displays. Press the corresponding option to toggle the setting on or off.

Once you have made your selection, follow the on-screen prompts and press the number 0 to return to the previous menu.

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:csi type
---------------------------------------------
```

Enter 3 at the terminal to access the camera control sub-menu:

```bash
---------------------------------------------
cam_dphy0==>ov5645 
cam_dphy1==>ov5645 
Select camera 
0:Exit
1:cam_dphy0 ov5645
2:cam_dphy1 ov5645
---------------------------------------------
```

In the menu, you can select which cameras are supported by both cam\_dphy0 and cam\_dphy1.

cam\_dphy0 corresponds to CAM1 and CAM2; cam\_dphy1 corresponds to CAM3 and CAM4.

The camera menu supports four options: ov5645, ov13855, ov5645x2 and off.

Both cam\_dphy0 and cam\_dphy1 are configured as OV5645; the CAM2 and CAM3 interfaces support the OV5645. CAM1 and CAM4 are out of service.

Both cam\_dphy0 and cam\_dphy1 are configured as OV13855; the CAM1 and CAM4 interfaces support the OV13855. CAM2 and CAM3 are out of service.

Both cam\_dphy0 and cam\_dphy1 are configured as ov5645x2; the CAM1, CAM2, CAM3 and CAM4 camera interfaces support the OV5645.

**Note:**

+ **The carrier board does not support OV5645x2 mode by default; to enable OV5645 support on CAM1 and CAM4, the carrier board hardware must be modified;**
+ **Modifications to the carrier board: When P23 supports the OV13855 camera, DVDD requires a 1.2V power supply; solder R105 in place and leave R106 unsoldered. When supporting the OV5645 camera, DVDD requires a 1.5V power supply; leave R105 unsoldered and solder R106 in place. The carrier board is set to a 1.2V power supply by default;**
+ **Modifications to the carrier board: When P45 supports the OV13855 camera, DVDD requires a 1.2V power supply; solder R127 in place and leave R140 unsoldered. When supporting the OV5645 camera, DVDD requires a 1.5V power supply; leave R127 unsoldered and solder R140 in place. The carrier board is set to a 1.2V power supply by default.**

Once you have made your selection, follow the on-screen prompts and press the number 0 to return to the previous menu.

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:csi type
---------------------------------------------
```

Pressing digit 1 will initiate the restart operation, and the screen option in the U-Boot phase will take effect after reboot.

After selecting the screen, you can also press the reset button on the development board to restart, and the settings will take effect after the system restarts.

#### 2.5.2 Kernel Device Tree Specification

This method does not require a serial terminal connection. The system image is configured with the default desired settings, making it suitable for mass production. However, manual modification of the device tree is required, followed by regeneration of the system image.

**Note: This method takes precedence over the U-Boot screen selection. After modifying the device tree, the U-Boot screen selection will no longer be effective.**

<font style="color:rgb(51, 51, 51);">The device tree path: arch/arm64/boot/dts/rockchip/OK3572-C-Common.dtsi </font>

In the kernel source code, open the device DTSI file and locate the following node:

```bash
forlinx_control {
        status = "disabled";
        video_hdmi = "hdmi";
        video_mipi = "mipi";
        csi_phy0 = "ov5645";
        csi_phy1 = "ov5645";
    };
```

The node is disabled by default and needs to be changed to "okay" to enable it. Modify according to the screen requirements.

For example:

Turn off the HDMI display; the camera supports the OV5645.

```bash
forlinx_control {
        status = "okay";
        video_hdmi = "off";
        video_mipi = "mipi";
        csi_phy0 = "ov5645";
        csi_phy1 = "ov5645";
    };
```

After saving, recompile to generate the image.

### 2.6 System Shutdown

In general, you can directly power off the system. However, if operations such as data storage or functional usage are in progress, avoid cutting power abruptly to prevent irreversible file damage, which may require re-flashing the firmware. To ensure all data is fully written, you can execute the sync command to complete data synchronization before powering off.

**Note: For products based on the SoM design, if unexpected power loss occurs during use, leading to system shutdown issues, power loss protection measures can be incorporated into the design.**

The OK3572 platform comes with a rich set of command-line tools for users to utilize.

## 3\.  OK3572 Command Line Test

### 3.1 System Information Query

To view kernel and cpu information, enter the following command:

```bash
root@ok3572-buildroot:/# uname -a
Linux ok3572-buildroot 6.12.58 #53 SMP Tue Apr 28 14:24:11 CST 2026 aarch64 GNU/Linux
```

To view environment variable information:

```bash
root@ok3572-buildroot:/# env
SHELL=/bin/sh
GST_V4L2_PREFERRED_FOURCC=NV12:YU12:NV16:YUY2
GST_VIDEO_CONVERT_PREFERRED_FORMAT=NV12:NV16:I420:YUY2
CHROMIUM_FLAGS=--enable-wayland-ime
GST_V4L2_USE_LIBV4L2=1
WESTON_DRM_MIN_BUFFERS=2
WL_OUTPUT_VERSION=3
GST_INSPECT_NO_COLORS=1
EDITOR=/bin/vi
MALI_SCHED_RT_THREAD_PRIORITY=95
WESTON_DRM_KEEP_RATIO=1
GST_DEBUG_NO_COLOR=1
PWD=/
WESTON_VNC_MIN_BUFFERS=4
HOME=/
LANG=en_US.UTF-8
ADB_TCP_PORT=5555
WESTON_FREEZE_DISPLAY=/tmp/.freeze_weston
WAYLANDSINK_FORCE_DMABUF=1
GST_V4L2SRC_DEFAULT_DEVICE=/dev/video-camera0
QT_QPA_PLATFORM=wayland
USB_FW_VERSION=0x0310
TERM=vt102
USER=root
ADBD_SHELL=/bin/bash
GST_V4L2SRC_RK_DEVICES=_mainpath:_selfpath:_bypass:_scale
WESTON_DRM_MIRROR=1
SHLVL=1
USB_FUNCS=adb
WESTON_DISABLE_ATOMIC=1
USB_MANUFACTURER=Rockchip
USB_PRODUCT=rk3xxx
QT_FORLINX_APPS=/usr/share/forlinx/apps.ini
XDG_RUNTIME_DIR=/var/run/xdg
USB_VENDOR_ID=0x2207
PATH=/usr/bin:/usr/sbin
storagemedia=emmc
GST_V4L2SRC_MAX_RESOLUTION=3840x2160
GST_VIDEO_DECODER_QOS=0
_=/usr/bin/env
```

### 3.2 Frequency Test

**Note: The six-core A53 includes CPU0, CPU1, CPU2, CPU3, CPU4, and CPU5; the two-core A73 includes CPU6 and CPU7. This process is demonstrated using CPU0 as an example. In practice, changes made to CPU0 will simultaneously apply to CPU1, CPU2, and CPU3; changes to CPU4 will simultaneously apply to CPU5; and changes to CPU6 will simultaneously apply to CPU7.**

All cpufreq governor types supported in the current kernel:

```bash
root@ok3572-buildroot:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
interactive conservative ondemand userspace powersave performance schedutil
```

Among these, userspace represents user mode, which allows other user programs to adjust CPU frequency in this mode.

To view the current frequency levels supported by the CPU:

```bash
root@ok3572-buildroott:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
408000 600000 816000 1008000 1200000 1416000 1608000 1800000 2016000 2112000
```

Set to user mode and modify the frequency to 2016000:

View the current frequency before making changes:

```bash
root@ok3572-buildroot:/# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
1800000
```

Modify the frequency:

```bash
root@ok3572-buildroot:/# echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@ok3572-buildroot:/# echo 2016000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed
```

To view the current frequency after modification:

```bash
root@ok3572-buildroot:/# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
2016000
```

### 3.3 Temperature Test

To view temperature values:

```bash
root@ok3572-buildroot:/# cat /sys/class/thermal/thermal_zone0/temp
45307
```

The temperature value is 45.3℃.

### 3.4 DDR Test

```bash
root@ok3572-buildroot:/# memtester 1024
memtester version 4.5.1_20231020 (32-bit)
Copyright (C) 2001-2020 Charles Cazabon.
Licensed under the GNU General Public License version 2 (only).

pagesize is 4096
pagesizemask is 0xfffffffffffff000
want 1024MB (1073741824 bytes)
got  1024MB (1073741824 bytes), trying mlock ...locked.
testing from phyaddress:0x11127d000
get chip name: (null)
get ddr bw: (null)
io bw x32
Loop 1:
  Stuck Address       : ok
  Random Value        : ok
  Compare XOR         : ok
  Compare SUB         : ok
  Compare MUL         : ok
  Compare DIV         : ok
  Compare OR          : ok
  Compare AND         : ok
  Sequential Increment: ok
  Solid Bits          : ok
  Block Sequential    : ok
  Checkerboard        : ok
  Bit Spread          : ok
  Bit Flip            : ok
  Walking Ones        : ok
  Walking Zeroes      : ok
  8-bit Writes        : ok
  16-bit Writes       : ok

```

### 3.5 Key Test

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106161121829.png)

Use the fltest\_keytest command-line tool to test the keys. Currently, fltest\_keytest supports testing the four keys on the base plate: VOL+, VOL-, MENU and ESC, with key codes 115, 114, 139 and 158 respectively.

Execute the following command:

```bash
root@ok3572-buildroot:/# fltest_keytest
```

When the keys are pressed and released in sequence, the terminal will d isplay the following output:

```bash
key115 Presse                                                         // VOL+presse
key115 Released                                                       // VOL+released
key114 Presse                                                         // VOL-presse
key114 Released                                                       // VOL-released
key139 Presse                                                         // MENU presse
key139 Released                                                       // MENU released
key158 Presse                                                          // ESC presse
key158 Released                                                        // ESC released
```

### 3.6 UART 485 Test

There are five serial ports routed out from the OK3572 carrier board: UART0, UART4, UART8, UART9 and UART11. UART0 is the debug port, UART4 is the Bluetooth port, UART8 is the TTL port, and UART9 and UART11 are 485 ports.   
The UART supports a maximum baud rate of 8M; actual testing showed 4M. It supports standard stop bits and parity checking, as well as 5, 6, 7 and 8-bit data bits; the 485 does not support 9-bit data.

| **UART**| **Device Nodes**| **Description**|
|:----------:|:----------:|:----------:|
| UART0| | The serial port cannot be directly used for this test.|
| UART4| /dev/ttyS4| Used for Bluetooth, not led out separately, cannot be used directly for this test.|
| UART8| /dev/ttyS8| TTL|
| UART9| /dev/ttyS9| RS485|
| UART11| /dev/ttyS11| RS485|

The UART9 and UART11 RS485 are used for the test. Before the test, the pins A and B of the two RS485 interfaces shall be connected, with A connected to A and B connected to B. The carrier board interfaces for the two RS485 are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_1783583730899.png)

Configure UART9 for reading and UART11 for writing data:

```bash
root@ok3572-buildroot:/# fltest_uarttest -d /dev/ttyS9 -r &
root@ok3572-buildroot:/# fltest_uarttest -d /dev/ttyS11 -w
tx_0: KDyMaiUusi3zKftHOvYikqL1pKzhjT63
rx_0: KDyMaiUusi3zKftHOvYikqL1pKzhjT63
[1]+  Done                    fltest_uarttest -d /dev/ttyS9 -r
```

Configure UART11 for reading and UART9 for writing data:

```bash
root@ok3572-buildroot:~# fltest_uarttest -d /dev/ttyS11 -r & 
root@ok3572-buildroot:~# fltest_uarttest -d /dev/ttyS9 -w  
tx_0: YJmkynAUxb9F6lzZjtYuhlPjlBjwapf8
rx_0: YJmkynAUxb9F6lzZjtYuhlPjlBjwapf8
[1]+  Done                    fltest_uarttest -d /dev/ttyS11 -r
```

The test uses UART8 for loopback testing. Before testing, short PIN7 and PIN8 of connector P17 using a jumper wire.

```bash
root@ok3572-buildroot:/# fltest_uarttest -d /dev/ttyS8
tx_0: an5m5MO1NBsBbb7dDKpiO5FnmX66zgFX
rx_0: an5m5MO1NBsBbb7dDKpiO5FnmX66zgFX
```

### 3.7 Watchdog Test

Watchdog is a commonly used function in embedded systems. The device node for the watchdog in OK3572 is /dev/watchdog. There are two test programs, you can choose any one according to your actual needs.

+ Start the watchdog, set the reset time to 10 seconds, and feed the dog at regular intervals.

Use fltest\_watchdog; this command enables the watchdog and performs a feed the dog operation, so the system will not reboot.

```bash
root@ok3572-buildroot:/# fltest_watchdog -c
Watchdog Ticking Away!

```

When using Ctrl+C to end the test program, feeding stops, and the watchdog remains open. After 10s, the system resets.

If you do not want a reset enter the command to close the watchdog within 10s after ending the program:

```bash
root@ok3572-buildroot:/# fltest_watchdog -d                                          //Turn off the watchdog
```

+ Enable the watchdog; the default reset time is 10 seconds; do not feed the dog

This command will activate the watchdog but will not feed the dog. The system will restart after 10 seconds.

```bash
root@ok3572-buildroot:/# fltest_watchdog -e
```

### 3.8 WiFi Test

**Note: **

- **Due to varying network environments, please configure according to your actual situation when conducting this experiment.**

- **The OK3572 platform supports the AW-CM358 Wi-Fi and Bluetooth combo module;**

- **The device can only operate in one mode (STA mode or AP mode) at any one time; it does not support simultaneous operation in both STA and AP modes.**

#### 3.8.1 STA Modes

Before using the Wi-Fi functionality, follow these steps to configure it:

Step 1: Assume the Wi‑Fi hotspot SSID is forlinx-office and the password is bjfl123456785.

Input the following command in the terminal:

```bash
root@ok3572-buildroot:/# fltest_wifi.sh -i mlan0 -s "forlinx-office" -p "bjfl123456785."
```

In the above command:

| **Parameter**| **Meaning**|
|----------|----------|
| -i| The parameters used vary depending on the Wi-Fi module; specify the Wi-Fi device name|
| -s| The actual Wi-Fi hotspot name to connect to.|
| -p| The parameter following -p refers to the password of the actual Wi-Fi hotspot to connect to; if the hotspot has no password, write NONE after -p.|

Step 2: Check if external network access is available by pinging the internet. Input the following command in the terminal:

```bash
root@ok3572-buildroot:/# ping www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=53 time=134 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=53 time=111 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=53 time=110 ms
64 bytes from 211.149.226.120: icmp_seq=4 ttl=53 time=118 ms
64 bytes from 211.149.226.120: icmp_seq=5 ttl=53 time=118 ms
64 bytes from 211.149.226.120: icmp_seq=6 ttl=53 time=44.1 ms
```

To stop, press Ctrl+C. If the ping is successful, it indicates that the network is now working properly.

#### 3.8.2 AP Mode

Before using the hotspot feature, you must first connect and configure the network interface to ensure that the eth0 interface has internet access.   
The default settings are 2.4 GHz, channel=9, a data rate of 54 Mbps, and a maximum of eight connected devices. Users can configure these settings via /etc/hostapd-5g.conf and /etc/hostapd-2.4g.conf.

```bash
root@ok3572-buildroot:~# fltest_hostapd.sh
killall: hostapd: no process killed
Stopping dnsmasq: no /usr/sbin/dnsmasq found; none killed
FAIL
Starting dnsmasq: OK
done!
HT (IEEE 802.11n) with WPA/WPA2 requires CCMP/GCMP to be enabled, disabling HT capabilities
uap0: interface state UNINITIALIZED->ENABLED
uap0: AP-ENABLED 
uap0: IEEE 802.11 driver had channel switch: iface->freq=2452, freq=2452, ht=0, vht_ch=0x0, he_ch=0x0, eht_ch=0x0, offset=0, width=0 (20 MHz (no HT)), cf1=2452, cf2=0, puncturing_bitmap=0x0
uap0: CTRL-EVENT-CHANNEL-SWITCH freq=2452 ht_enabled=0 ch_offset=0 ch_width=20 MHz (no HT) cf1=2452 cf2=0 is_dfs0=0 dfs=0 puncturing_bitmap=0x0000
```

WIFI hotspot name: OK3572\_WIFI\_2.4G\_AP

WIFI hotspot password: 12345678

At this point, a mobile phone can connect to this hotspot and access the internet.

### 3.9 Bluetooth Testing

In the OK3572 development board, the carrier board AW-CM358 module integrates Bluetooth functionality. This section demonstrates data transmission between a mobile phone and the development board via Bluetooth, which supports Bluetooth 5.0. Note: The firmware used for Bluetooth is a combo firmware shared with Wi‑Fi, which is automatically loaded by the Wi‑Fi driver during device startup.

1\. Bluetooth configuration:

```bash
root@ok3572-buildroot:~# bluetoothctl
[bluetooth]# hci0 new_settings: powered bondable ssp br/edr le secure-conn 
[bluetooth]# Agent registered
[bluetooth]# [CHG] Controller 58:02:05:1D:1A:F0 Pairable: yes
[bluetooth]# power on
[bluetooth]# Changing power on succeeded
[bluetooth]# pairable on
[bluetooth]# Changing pairable on succeeded
[bluetooth]# discoverable on
[bluetooth]# hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn 
[bluetooth]# hci0 new_settings: powered connectable discoverable bondable ssp br/edr le secure-conn 
[bluetooth]# Changing discoverable on succeeded
[bluetooth]# [CHG] Controller 58:02:05:1D:1A:F0 Discoverable: yes
[bluetooth]# agent on
Agent is already registered
[bluetooth]# default-agent
[bluetooth]# Default agent request successful
```

2\. Board Passive Pairing (Standard pairing process).

Turn on Bluetooth search on the mobile phone; a device named`OK3572-C`will appear. Select it to pair.

The print information on the development board is as follows. Enter "yes":

```bash
[bluetooth]# hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn 
[bluetooth]# [CHG] Controller 58:02:05:1D:1A:F0 Discoverable: no
[bluetooth]# hci0 A8:6A:86:B5:43:6A type BR/EDR connected eir_len 14
[bluetooth]# [NEW] Device A8:6A:86:B5:43:6A forlinx
[forlinx]# Request confirmation
[agent] Confirm passkey 147165 (yes/no): yes
[forlinx]# hci0 new_link_key A8:6A:86:B5:43:6A type 0x05 pin_len 0 store_hint 1
[forlinx]# hci0 device_flags_changed: A8:6A:86:B5:43:6A (BR/EDR)
[forlinx]#      supp: 0x00000000  curr: 0x00000000
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Bonded: yes
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Modalias: bluetooth:v038Fp1200d1436
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001105-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001112-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001115-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001116-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000111f-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000112f-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001132-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001200-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001800-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001801-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001855-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000fcc0-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000fcc0-36a2-11ea-8467-484d7e99a198
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000fdaa-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 98b97136-36a2-11ea-8467-484d7e99a198
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: ada499be-27d6-11ec-9427-0a80ff2603de
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A ServicesResolved: yes
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Paired: yes
[forlinx]# hci0 A8:6A:86:B5:43:6A type BR/EDR disconnected with reason 3
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A ServicesResolved: no
```

3\. View and remove connected devices:

```bash
[bluetooth]# devices
Device A8:6A:86:B5:43:6A forlinx
[bluetooth]# remove A8:6A:86:B5:43:6A
[bluetooth]# [DEL] Device A8:6A:86:B5:43:6A forlinx
[bluetooth]# Device has been removed
```

4\. Active pairing of development board.

```bash
[bluetooth]# scan on                                              //Turn on to connect the scan device
[bluetooth]# SetDiscoveryFilter success
[bluetooth]# hci0 type 7 discovering on
[bluetooth]# Discovery started
[bluetooth]# [CHG] Controller 58:02:05:1D:1A:F0 Discovering: yes
[bluetooth]# [NEW] Device 75:9C:34:6C:0C:AC DESKTOP-EDODVS1
[bluetooth]# [NEW] Device 7E:97:08:19:9C:0F 7E-97-08-19-9C-0F
[bluetooth]# [NEW] Device C9:41:03:37:15:6F C9-41-03-37-15-6F
[bluetooth]# [NEW] Device 7F:5D:8F:BB:32:B9 7F-5D-8F-BB-32-B9
[bluetooth]# [NEW] Device 63:9B:E2:96:B9:6B 63-9B-E2-96-B9-6B
[bluetooth]# [NEW] Device A8:6A:86:B5:43:6A forlinx
[bluetooth]# pair A8:6A:86:B5:43:6A                              //Pair with the MAC address of the device to be connected
Attempting to pair with A8:6A:86:B5:43:6A                 
[bluetooth]# hci0 device_flags_changed: A8:6A:86:B5:43:6A (BR/EDR)
[bluetooth]#      supp: 0x00000000  curr: 0x00000000
[bluetooth]# hci0 type 7 discovering off
[bluetooth]# hci0 A8:6A:86:B5:43:6A type BR/EDR connected eir_len 14
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Connected: yes
[forlinx]# Request confirmation
[agent] Confirm passkey 218666 (yes/no): yes
[forlinx]# hci0 new_link_key A8:6A:86:B5:43:6A type 0x05 pin_len 0 store_hint 1
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Bonded: yes
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Modalias: bluetooth:v038Fp1200d1436
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00000000-0000-0000-0000-000000000000
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001105-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001112-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 00001115-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000fcc0-36a2-11ea-8467-484d7e99a198
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 0000fdaa-0000-1000-8000-00805f9b34fb
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: 98b97136-36a2-11ea-8467-484d7e99a198
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A UUIDs: ada499be-27d6-11ec-9427-0a80ff2603de
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A ServicesResolved: yes
[forlinx]# [CHG] Device A8:6A:86:B5:43:6A Paired: yes
[forlinx]# Pairing successful
[forlinx]# hci0 type 7 discovering on
[bluetooth]# scan off                                               //Turn off the scan
[bluetooth]# hci0 type 7 discovering off
[bluetooth]# Discovery stopped
[bluetooth]# [CHG] Device B8:F4:4F:AA:96:0C TxPower is nil
[bluetooth]# [CHG] Device B8:F4:4F:AA:96:0C RSSI is nil
[bluetooth]# [CHG] Device 55:44:17:33:94:AA RSSI is nil
[bluetooth]# [CHG] Device 58:11:7D:E2:7C:63 TxPower is nil
[bluetooth]# [CHG] Device 58:11:7D:E2:7C:63 RSSI is nil
[bluetooth]# [CHG] Device F8:9E:94:A9:5E:24 TxPower is nil
[bluetooth]# [CHG] Device F8:9E:94:A9:5E:24 RSSI is nil
....
```

5\. Development board receives files.

After successful pairing, you can send a file from the mobile phone to the OK3572‑C development board via Bluetooth.

The received files are saved in the`/tmp`.

```bash
root@ok3572-buildroot:~# ls /tmp/*.jpg
/tmp/1778139448174.jpg
```

6\. Send files from the development board.

You can send a file from the OK3572‑C development board to a mobile phone. Test as follows:

```bash
root@ok3572-buildroot:~# fltest_obexctl.sh
[obex]# [NEW] Client /org/bluez/obex 
[obex]# connect A8:6A:86:B5:43:6A
Attempting to connect to A8:6A:86:B5:43:6A
[A8:6A:86:B5:43:6A] #[NEW] Session /org/bluez/obex/client/session0 [default]
[A8:6A:86:B5:43:6A] #[NEW] ObjectPush /org/bluez/obex/client/session0 
[A8:6A:86:B5:43:6A] #Connection successful
[A8:6A:86:B5:43:6A] #send /userdata/piano2-CoolEdit.mp3
Attempting to send /userdata/piano2-CoolEdit.mp3 to /org/bluez/obex/client/session0
[A8:6A:86:B5:43:6A] #[NEW] Transfer /org/bluez/obex/client/session0/transfer0 
[A8:6A:86:B5:43:6A] #Transfer /org/bluez/obex/client/session0/transfer0
[A8:6A:86:B5:43:6A] #   Status: queued
[A8:6A:86:B5:43:6A] #   Name: piano2-CoolEdit.mp3
[A8:6A:86:B5:43:6A] #   Size: 101760
[A8:6A:86:B5:43:6A] #   Filename: /userdata/piano2-CoolEdit.mp3
[A8:6A:86:B5:43:6A] #   Session: /org/bluez/obex/client/session0
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: active
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 8024 (@8KB/s 00:11)
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 64577 (@56KB/s 00:00)
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 72656 (@8KB/s 00:03)
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 80735 (@8KB/s 00:02)
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 96893 (@16KB/s 00:00)
[A8:6A:86:B5:43:6A] #[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: complete
[A8:6A:86:B5:43:6A] #[DEL] Transfer /org/bluez/obex/client/session0/transfer0
```

**Note: For certain manufacturers' phones, received files must include a file extension; otherwise, they may be rejected by the Android system. Therefore, please try to use files with extensions for testing.**

### 3.10 RTC Function Test

**Note: Ensure that a button battery is installed on the board and the battery voltage is normal.**

To perform the RTC test, the date and hwclock tools are used to set the system and hardware clocks. The device is then powered off and on to confirm that the system clock successfully synchronizes with the RTC upon reboot.

Set the time:

```bash
root@ok3572-buildroot:/# date -s “2026-5-6 15:20:00” // Set software time
Wed May 6 15:20:00 CST 2026
root@ok3572-buildroot:/# hwclock -w // Synchronize software time to hardware time
root@ok3572-buildroot:/# hwclock -r // Display hardware time
Wed May  6 15:20:08 2026  0.000000 seconds
```

Then power off and power on the board. After entering the system, read the system time, and you can see that the time is synchronized.

```bash
root@ok3572-buildroot:/# date
Wed May  6 15:21:38 CST 2026
```

### 3.11 USB Mouse Test

Connect a USB mouse to the USB port on the OK3572 platform, then enter the following command to view the kernel output.

```bash
root@ok3572-buildroot:~# dmesg | tail -10
```

Print information as follows:

```bash
[ 7204.108742] usb 1-1.1: new low-speed USB device number 3 using xhci-hcd
[ 7204.201644] usb 1-1.1: New USB device found, idVendor=1c4f, idProduct=0057, bcdDevice= 1.10
[ 7204.201667] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[ 7204.201677] usb 1-1.1: Product: USB Optical Mouse
[ 7204.201686] usb 1-1.1: Manufacturer: SiGmaMicro
[ 7204.255333] input: SiGmaMicro USB Optical Mouse as /devices/platform/soc/24400000.usb/xhci-hcd.3.auto/usb1/1-1/1-1.1/1-1.1:1.0/0003:1C4F:0057.0001/input/input7
[ 7204.255599] hid-generic 0003:1C4F:0057.0001: input,hidraw0: USB HID v1.10 Mouse [SiGmaMicro USB Optical Mouse] on usb-xhci-hcd.3.auto-1.1/input0
[16:07:28.543] event7  - SiGmaMicro USB Optical Mouse: is tagged by udev as: Mouse
[16:07:28.543] event7  - SiGmaMicro USB Optical Mouse: device is a pointer
[16:07:28.544] libinput: configuring device "SiGmaMicro USB Optical Mouse".
[16:07:28.544] associating input device event7 with output DSI-1 (none by udev)
```

An arrow cursor appears on the screen, and the mouse is now working properly.

When the USB mouse is unplugged, the serial terminal will print the following:

```bash
[ 7372.892583] usb 1-1.1: USB disconnect, device number 3
[16:10:17.054] event7  - SiGmaMicro USB Optical Mouse: device removed
```

At this point, the arrow cursor on the screen disappears, indicating that the mouse has been successfully removed.

### 3.12 USB3.0

The OK3572 carrier board uses a USB 3.0 hub to provide three USB 3.0 host ports, allowing connection of devices such as USB mice, USB keyboards and USB flash drives, and supports hot-swapping of these devices. Here, mounting a USB flash drive is used as an example. USB flash drive testing has currently been verified up to 32 GB; capacities above 32 GB have not been tested.

The terminal will print information about the USB drive. Since there are various USB drives, the displayed information may vary.

Step 1: After booting the development board, connect a USB flash drive to one of the USB host interfaces on the development board;

Enter the following command to view the kernel logs.

```bash
root@ok3572-buildroot:~# dmesg | tail -10
```

Serial port information:

```bash
[ 7895.560787] usb 2-1.1: new SuperSpeed USB device number 3 using xhci-hcd
[ 7895.577017] usb 2-1.1: LPM exit latency is zeroed, disabling LPM.
[ 7895.577489] usb 2-1.1: New USB device found, idVendor=346d, idProduct=5678, bcdDevice= 3.20
[ 7895.577502] usb 2-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[ 7895.577511] usb 2-1.1: Product: HIKSEMI
[ 7895.577519] usb 2-1.1: Manufacturer:   
[ 7895.577527] usb 2-1.1: SerialNumber: FC176EBB6E55D
[ 7895.578300] usb-storage 2-1.1:1.0: USB Mass Storage device detected
[ 7895.578642] usb-storage 2-1.1:1.0: Quirks match for vid 346d pid 5678: 420
[ 7895.578788] scsi host0: usb-storage 2-1.1:1.0
[ 7896.589203] scsi 0:0:0:0: Direct-Access              HIKSEMI          3.20 PQ: 0 ANSI: 4
[ 7896.591151] sd 0:0:0:0: [sda] 61440000 512-byte logical blocks: (31.5 GB/29.3 GiB)
[ 7896.591581] sd 0:0:0:0: [sda] Write Protect is off
[ 7896.591961] sd 0:0:0:0: [sda] No Caching mode page found
[ 7896.591983] sd 0:0:0:0: [sda] Assuming drive cache: write through
[ 7896.613664]  sda: sda1
[ 7896.614059] sd 0:0:0:0: [sda] Attached SCSI removable disk
[ 7896.811237] FAT-fs (sda1): utf8 is not a recommended IO charset for FAT filesystems, filesystem will be case sensitive!
[ 7896.814290] FAT-fs (sda1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

Step 2: Check the mount directory:

```bash
root@ok3572-buildroot:~# mount | grep "sda1"
/dev/sda1 on /run/media/sda1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

You can see that /run/media/sda1 is the mount path for the USB storage device.

Step 3: View the contents of the USB flash drive:

```bash
root@ok3572-buildroot:/# ls -l /run/media/sda1
drwxrwx--- 3 root disk      8192 Mar  4  2021  Music
```

Before performing read/write tests, ensure the CPU frequency is noted.

Step 4: Write test.

```bash
root@ok3572-buildroot:/# dd if=/dev/zero of=/run/media/sda1/test.bin bs=1M count=500 conv=fsync oflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 19.2769 s, 27.2 MB/s
```

Step 5: Read test.

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@ok3572-buildroot:/# dd if=/run/media/sda1/test.bin of=/dev/null bs=1M iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 5.21123 s, 101 MB/s
```

Steps 6: After using the USB drive, use umount to unmount it before unplugging:

```bash
root@ok3572-buildroot:/# umount /run/media/sda1
```

**Note: Exit the mount path before unplugging the USB drive.**

### 3.13 Backlight Adjustment

The brightness range for the backlight is (0–255), where 255 indicates the highest brightness and 0 turns off the backlight. Connect a MIPI display to MIPI DSI0 and power on the board. Enter the following command in the terminal after system startup for backlight testing.

1\. Check the current screen backlight value:

```bash
root@ok3572-buildroot:/# cat /sys/class/backlight/backlight/brightness
200                                           //The current backlight value is 200
```

2\. Turn off the backlight:

```bash
root@ok3572-buildroot:/# echo 0 > /sys/class/backlight/backlight/brightness             
```

3\. Turn on the LCD backlight:

```bash
root@ok3572-buildroot:/# echo 125 > /sys/class/backlight/backlight/brightness
```

### 3.14 TF Test

**Note: The TF card is mounted at /run/media/ and supports hot-swapping.**

1\. Check the mount directory:

```bash
root@ok3572-buildroot:/# mount | grep mmcblk1
/dev/mmcblk1p1 on /run/media/mmcblk1p1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

2\. Write test:

```bash
root@ok3572-buildroot:/# dd if=/dev/zero of=/run/media/mmcblk1p1/test.bin bs=1M count=200 conv=fsync oflag=direct
200+0 records in
200+0 records out
209715200 bytes (210 MB, 200 MiB) copied, 4.11959 s, 50.9 MB/s
```

3\. Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@ok3572-buildroot:/# dd if=/run/media/mmcblk1p1/test.bin of=/dev/null bs=1M count=200 iflag=direct
200+0 records in
200+0 records out
209715200 bytes (210 MB, 200 MiB) copied, 2.69267 s, 77.9 MB/s
```

4\. After using the TF card, you need to use umount to unmount the TF card before ejecting it.

```bash
root@ok3572-buildroot:/# umount /run/media/mmcblk1p1
```

**Note: Exit the TF card mount path before removing the TF card.**

### 3.15 EMMC Test

The eMMC on the OK3572 platform operates by default in HS400 mode at a clock speed of 200 MHz. Below is a brief test of the eMMC’s read and write speeds, using the ext4 file system as an example.

Write test:

```bash
root@ok3572-buildroot:/# dd if=/dev/zero of=/test.bin bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 1.95189 s, 269 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@ok3572-buildroot:/# dd if=/test.bin of=/dev/null bs=1M iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 1.61021 s, 326 MB/s
```

### 3.16 Ethernet Configuration

The OK3572 is equipped with two Gigabit network cards; when a network cable is plugged in to connect to the network, eth0 is configured with a static IP by default.

#### 3.16.1  Methods for Setting a Static IP Address

View the eth0 and eth1 configuration files, which are located at: /etc/network/interfaces. The configuration settings for a static IP address are as follows:

**Note: The OK3572 board features two Gigabit Ethernet ports, designated as eth0 and eth1; the default IP address for eth0 is 192.168.0.232.**

```bash
auto lo
iface lo inet loopback
auto eth0
iface eth0 inet static
address 192.168.0.232
netmask 255.255.255.0
gateway 192.168.0.1
```

```bash
iface Used to specify the network card that needs a fixed IP
address Used to specify the fixed IP address
netmask Used to set the subnet mask
gateway Used to specify the gateway
```

#### 3.16.2 Automatic IP Acquisition

**Note: This method sets eth1 to obtain an IP address automatically. If you wish to use eth0, simply set the Name field to eth0.**

```bash
auto lo
iface lo inet loopback
//The following is what needs to be added
auto eth1
iface eth1 inet dhcp
```

Once the configuration is complete, you can manually modify the network interface settings. After making the changes, use the sync command to synchronise the settings, then restart the development board or the service for the changes to take effect.

### 3.17 Playback/Recording Test

The OK3572 features a NAU88C22YG chip, one standard 3.5mm audio socket and one white PH2.0-4P socket (pin 34), capable of driving an 8Ω speaker, with a maximum output power of 1W. Before conducting playback tests, please plug your headphones into the headphone jack or connect a speaker to the corresponding socket on the base plate for testing. Use the following command to perform the test:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106161632530.png)

**Note: Before performing the recording test, please plug in the prepared microphone into the 3.5mm headphone jack.**

```bash
//Headphone or speaker audio playback test
root@ok3572-buildroot:/# gst-play-1.0 /userdata/piano2-CoolEdit.mp3
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:06.3 / 0:00:06.3
Reached end of play list.

// HDMI playback audio test
root@ok3572-buildroot:~# gst-play-1.0 /userdata/piano2-CoolEdit.mp3 --audiosink="alsasink device=hw:0,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:06.3 / 0:00:06.3
Reached end of play list.

//Cannot stop in the middle of a recording test
root@ok3572-buildroot:/# arecord -D hw:1,0 -f S16_LE -r 48000 -c 2 -d 8 test.wav
Recording WAVE 'test.wav' : Signed 16 bit Little Endian, Rate 48000 Hz, Stereo
root@ok3572-buildroot:/# ls      //The test. wav of the generated recording file can be seen in the current directory.
test.wav
root@ok3572-buildroot:/# aplay test.wav  //Use the Speaker Headphone to play the collected sound
```

If you do not plug in headphones, the sound will be played through the speaker socket; simply connect a speaker to hear the sound. Plug the headphones into the headphone socket, and the sound will be played through the headphones.

### 3.18 4G EM05-CE Module Test

The OK3572 supports a 4G module. Connect the 4G module and insert the SIM card before powering on the development board.

**Note:** 

- **Ensure the correct insertion direction for the SIM card, as there are printed markings on the carrier board. Also, connect the antenna and use a micro SIM card for testing;**

- **Use S2 on the carrier baord to switch to 4G.**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106161655958.png)![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106161655959.png)![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106162007999.png)

1\. After connecting the module and powering on the development board and module, you can check the USB status using the lsusb command.

```bash
root@ok3572-buildroot:/# lsusb
Bus 002 Device 002: ID 04b4:6500
Bus 001 Device 001: ID 1d6b:0002 Linux 6.12.58-g33eaeba6eab7 xhci-hcd xHCI Host Controller
Bus 001 Device 002: ID 04b4:6502
Bus 002 Device 001: ID 1d6b:0003 Linux 6.12.58-g33eaeba6eab7 xhci-hcd xHCI Host Controller
Bus 001 Device 003: ID 2c7c:0125 Quectel EM05-CN                 //EM05的VID和PID
```

Check the device node status under /dev.

```bash
root@ok3572-buildroot:/# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```

2\. After successful device identification, you can perform dial-up Internet access testing;

```bash
root@ok3572-buildroot:~# quectelCM &
[1] 1232
root@ok3572-buildroot:~# [01-01_08:00:52:836] Quectel_QConnectManager_Linux_V1.6.0.24
[01-01_08:00:52:837] Find /sys/bus/usb/devices/1-1.4 idVendor=0x2c7c idProduct=0x125, bus=0x001, dev=0x003
[01-01_08:00:52:837] Auto find qmichannel = /dev/cdc-wdm0
[01-01_08:00:52:837] Auto find usbnet_adapter = wwan0
[01-01_08:00:52:837] netcard driver = qmi_wwan_q, driver version = V1.2.9
[01-01_08:00:52:837] Modem works in QMI mode
[01-01_08:00:52:843] cdc_wdm_fd = 7
[01-01_08:00:52:923] Get clientWDS = 5
[01-01_08:00:52:956] Get clientDMS = 1
[01-01_08:00:52:988] Get clientNAS = 2
[01-01_08:00:53:020] Get clientUIM = 1
[01-01_08:00:53:052] Get clientWDA = 1
[01-01_08:00:53:085] requestBaseBandVersion EM05CNFDR08A03M1G_ND
[01-01_08:00:53:212] requestGetSIMStatus SIMStatus: SIM_READY
[01-01_08:00:53:245] requestGetProfile[1] ctlte///0
[01-01_08:00:53:276] requestRegistrationState2 MCC: 460, MNC: 11, PS: Attached, DataCap: LTE
[01-01_08:00:53:308] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[01-01_08:00:53:308] ifconfig wwan0 0.0.0.0
[01-01_08:00:53:314] ifconfig wwan0 down
[01-01_08:00:53:373] requestSetupDataCall WdsConnectionIPv4Handle: 0x86d24270
[01-01_08:00:53:501] ifconfig wwan0 up
[01-01_08:00:53:510] busybox udhcpc -f -n -q -t 5 -i wwan0
udhcpc: started, v1.37.0
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.77.24.68, server 10.77.24.69
udhcpc: lease of 10.77.24.68 obtained from 10.77.24.69, lease time 7200
[01-01_08:00:53:562] deleting routers
[01-01_08:00:53:582] adding dns 219.141.136.10
[01-01_08:00:53:582] adding dns 219.141.140.10

```

3\. The ping domain name test.

```bash
root@ok3572-buildroot:~# ping -I wwan0 www.forlinx.com -c 3
PING s-526319.gotocdn.com (211.149.226.120) from 10.77.24.68 wwan0: 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=54 time=68.7 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=54 time=78.2 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=54 time=77.9 ms

--- s-526319.gotocdn.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 68.659/74.924/78.241/4.432 ms
```

### 3.19 Quectel RM500U-5G Module Test

The default 5G module model supported is the Quectel RM500U.

**Note:** 

- **Ensure the correct insertion direction for the SIM card, as there are printed markings on the carrier board. Also, connect the antenna and use a micro SIM card for testing;**

+ **Use S2 on the carrier baord to switch to 5G.**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106162023190.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512299311_090a00d5_86ef_4f48_bcc2_315175bc97f5.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512299403_c434cb47_9444_40c1_9404_adcc5ff8292d.png)

1\. After connecting the module and powering on the development board and module, you can check the USB status using the lsusb command.

```bash
root@ok3572-buildroot:~# lsusb
Bus 002 Device 002: ID 04b4:6500
Bus 001 Device 001: ID 1d6b:0002 Linux 6.12.58-g33eaeba6eab7 xhci-hcd xHCI Host Controller
Bus 001 Device 002: ID 04b4:6502
Bus 002 Device 001: ID 1d6b:0003 Linux 6.12.58-g33eaeba6eab7 xhci-hcd xHCI Host Controller
Bus 002 Device 003: ID 2c7c:0900 Quectel RM500U-CNV        //RM500U 5G module node

```

Check the device node status under /dev.

```bash
root@ok3572-buildroot:~# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3  /dev/ttyUSB4
```

2\. After successful device identification, you can perform dial-up Internet access testing;

```bash
root@ok3572-buildroot:~# quectelCM &
[1] 1235
root@ok3572-buildroot:~# [01-01_08:00:28:264] Quectel_QConnectManager_Linux_V1.6.0.24
[01-01_08:00:28:265] Find /sys/bus/usb/devices/2-1.4 idVendor=0x2c7c idProduct=0x900, bus=0x002, dev=0x003
[01-01_08:00:28:265] Auto find qmichannel = /dev/ttyUSB2
[01-01_08:00:28:265] Auto find usbnet_adapter = usb0
[01-01_08:00:28:265] netcard driver = cdc_ncm, driver version = 6.12.58-g33eaeba6eab7
[01-01_08:00:28:265] Modem works in ECM_RNDIS_NCM mode
[01-01_08:00:28:270] atc_fd = 7
[01-01_08:00:28:271] AT> ATE0Q0V1
at_send_command_full_nolock errno: 11 (Resource temporarily unavailable)
[01-01_08:00:28:271] AT< +C5GREG: 1,"6301D","065472283",11,9,01.000000
[01-01_08:00:28:271] AT> ATE0Q0V1
[01-01_08:00:28:275] AT< +CME ERROR: 4
[01-01_08:00:28:275] AT< +CME ERROR: 4
[01-01_08:00:28:276] AT< +CME ERROR: 4
[01-01_08:00:29:275] AT> AT+QCFG="NAT",1
[01-01_08:00:29:292] AT< OK
[01-01_08:00:29:293] AT> AT+QCFG="usbnet"
[01-01_08:00:29:294] AT< +QCFG: "usbnet",5
[01-01_08:00:29:294] AT< OK
[01-01_08:00:29:294] AT> AT+QNETDEVCTL=?
[01-01_08:00:29:297] AT< +QNETDEVCTL: (1-8),(0-3),(0,1)
[01-01_08:00:29:297] AT< OK
[01-01_08:00:29:297] AT> AT+CGREG=2
[01-01_08:00:29:301] AT< OK
[01-01_08:00:29:301] AT> AT+QNETDEVSTATUS=?
[01-01_08:00:29:304] AT< +QNETDEVSTATUS: (1-8)
[01-01_08:00:29:304] AT< OK
[01-01_08:00:29:305] AT> AT+CGMR
[01-01_08:00:29:305] AT< RM500UCNVAAR03A06M2G_01.001.01.001
[01-01_08:00:29:306] AT< OK
[01-01_08:00:29:306] AT> AT+CPIN?
[01-01_08:00:29:306] AT< +CPIN: READY
[01-01_08:00:29:307] AT< OK
[01-01_08:00:29:307] AT> AT+QCCID
[01-01_08:00:29:309] AT< +QCCID: 89860324650103722650
[01-01_08:00:29:309] AT< OK
[01-01_08:00:29:309] requestGetICCID 89860324650103722650
[01-01_08:00:29:309] AT> AT+CIMI
[01-01_08:00:29:310] AT< 460115956795568
[01-01_08:00:29:310] AT< OK
[01-01_08:00:29:310] requestGetIMSI 460115956795568
[01-01_08:00:29:310] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[01-01_08:00:29:317] AT< +COPS: 0,0,"CHN-TELECOM",11
[01-01_08:00:29:321] AT< +COPS: 0,1,"CTCC",11
[01-01_08:00:29:324] AT< +COPS: 0,2,"46011",11
[01-01_08:00:29:324] AT< OK
[01-01_08:00:29:324] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:29:392] AT< +CME ERROR: 3
[01-01_08:00:29:392] requestQueryDataCall err=0, call_state=1
[01-01_08:00:29:392] ifconfig usb0 0.0.0.0
[01-01_08:00:29:398] ifconfig usb0 down
[01-01_08:00:29:403] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[01-01_08:00:29:407] AT< +COPS: 0,0,"CHN-TELECOM",11
[01-01_08:00:29:409] AT< +COPS: 0,1,"CTCC",11
[01-01_08:00:29:412] AT< +COPS: 0,2,"46011",11
[01-01_08:00:29:412] AT< OK
[01-01_08:00:29:412] AT> AT+QNETDEVCTL=1,1,0
[01-01_08:00:29:640] AT< OK
[01-01_08:00:29:640] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:29:699] AT< +CME ERROR: 3
[01-01_08:00:30:699] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:30:757] AT< +CME ERROR: 3
[01-01_08:00:31:757] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:31:814] AT< +CME ERROR: 3
[01-01_08:00:32:014] AT< +QNETDEVSTATUS: 1,1,"IPV4V6",0
[01-01_08:00:32:814] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:32:875] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:00:32:875] AT< OK
[01-01_08:00:32:875] requestSetupDataCall err=0
[01-01_08:00:32:875] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:32:934] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:00:32:935] AT< OK
[01-01_08:00:32:935] requestGetIPAddress 10.41.142.245
[01-01_08:00:32:935] requestGetIPAddress err=0
[01-01_08:00:32:935] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:32:995] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:00:32:995] AT< OK
[01-01_08:00:32:995] requestQueryDataCall err=0, call_state=2
[01-01_08:00:32:995] ifconfig usb0 up
[01-01_08:00:33:004] busybox udhcpc -f -n -q -t 5 -i usb0
udhcpc: started, v1.37.0
udhcpc: broadcasting discover
udhcpc: broadcasting discover
udhcpc: broadcasting select for 192.168.42.2, server 192.168.42.1
udhcpc: lease of 192.168.42.2 obtained from 192.168.42.1, lease time 86400
[01-01_08:00:36:094] deleting routers
[01-01_08:00:36:117] adding dns 192.168.42.1
[01-01_08:00:36:118] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:36:178] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:00:36:178] AT< OK
[01-01_08:00:36:178] requestQueryDataCall err=0, call_state=2
[01-01_08:00:51:193] AT> AT+QNETDEVSTATUS=1
[01-01_08:00:51:253] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:00:51:253] AT< OK
[01-01_08:00:51:253] requestQueryDataCall err=0, call_state=2
[01-01_08:00:53:735] AT< +CGREG: 0
[01-01_08:00:53:735] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[01-01_08:00:53:747] AT< +COPS: 0,0,"CHN-TELECOM",11
[01-01_08:00:53:752] AT< +COPS: 0,1,"CTCC",11
[01-01_08:00:53:759] AT< +COPS: 0,0,"CHN-TELECOM",11
[01-01_08:00:53:759] AT< OK
[01-01_08:01:08:774] AT> AT+QNETDEVSTATUS=1
[01-01_08:01:08:836] AT< +QNETDEVSTATUS: 10.41.142.245,255.255.255.0,10.41.142.1,,219.141.136.10,219.141.140.10,240e:0404:1910:0e84:18aa:c934:4ae0:4604,,,,240e:0040:8000:0000:0000:0000:0000:0010,
[01-01_08:01:08:836] AT< OK
[01-01_08:01:08:836] requestQueryDataCall err=0, call_state=2
```

3\. The ping domain name test.

```bash
root@ok3572-buildroot:~# ping -I usb0 www.forlinx.com -c 3
PING www.forlinx.com (211.149.226.120) from 192.168.42.2 usb0: 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=53 time=120 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=53 time=61.1 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=53 time=77.1 ms

--- www.forlinx.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2010ms
rtt min/avg/max/mdev = 61.061/85.913/119.619/24.712 ms
```

### 3.20 CAN Test

Short-circuit CAN0 and CAN1, as shown in the diagram:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_1783583730897.png)

Execute the following command in the terminal on the development board:

1\. CAN Initialisation;  
If you wish to use the standard CAN protocol (not CAN-FD), you must execute the following command;

```bash
root@ok3572-buildroot:/# ip link set can0 down
root@ok3572-buildroot:/# ip link set can0 type can bitrate 100000 fd off
root@ok3572-buildroot:/# ip -details -statistics link show can0
root@ok3572-buildroot:/# ip link set can0 up
```

2\. View CAN network devices;

```bash
root@ok3572-buildroot:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  
          UP RUNNING NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:75 

can1      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:76 

eth0      Link encap:Ethernet  HWaddr 2E:16:FC:0D:B0:35  
          inet addr:192.168.0.232  Bcast:192.168.0.255  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:77 

eth1      Link encap:Ethernet  HWaddr 32:16:FC:0D:B0:35  
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:79 

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:48 errors:0 dropped:0 overruns:0 frame:0
          TX packets:48 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:3456 (3.3 KiB)  TX bytes:3456 (3.3 KiB)

mlan0     Link encap:Ethernet  HWaddr 58:02:05:1D:1A:ED  
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

p2p0      Link encap:Ethernet  HWaddr 5A:02:05:1D:1A:ED  
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

uap0      Link encap:Ethernet  HWaddr 5A:02:05:1D:1B:ED  
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

3\. Short-circuit CAN0 and CAN1, then execute the following command in the development board’s terminal: 
Configure the CAN0 and CAN1 devices to CAN FD mode, with a baud rate of 1 Mbps for the arbitration segment and 5 Mbps for the data segment, and carry out CAN FD testing.

```bash
root@ok3572-buildroot:/# ifconfig can0 down
root@ok3572-buildroot:/# ifconfig can1 down
root@ok3572-buildroot:/# ip link set can0 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
root@ok3572-buildroot:/# ip link set can1 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
root@ok3572-buildroot:/# ifconfig can0 up
root@ok3572-buildroot:/# ifconfig can1 up
root@ok3572-buildroot:/# candump can0&
[1] 1257
root@ok3572-buildroot:/# cansend can1 1F334455#1122334455667788
root@ok3572-buildroot:/#   can0  1F334455   [8]  11 22 33 44 55 66 77 88

```

4\. Other commands  
Set the send queue length:

```bash
root@ok3572-buildroot:/# echo 100 > /sys/class/net/can0/tx_queue_len
root@ok3572-buildroot:/# ip -details -statistics link show can0
2: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 72 qdisc pfifo_fast state UP mode DEFAULT group default qlen 100
    link/can  promiscuity 0 allmulti 0 minmtu 0 maxmtu 0 
    can <FD> state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0 
          bitrate 1000000 sample-point 0.800
          tq 10 prop-seg 39 phase-seg1 40 phase-seg2 20 sjw 10 brp 2
          rk3576_canfd: tseg1 1..128 tseg2 1..128 sjw 1..128 brp 1..256 brp_inc 2
          dbitrate 2000000 dsample-point 0.720
          dtq 20 dprop-seg 8 dphase-seg1 9 dphase-seg2 7 dsjw 3 dbrp 4
          rk3576_canfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp_inc 2
          clock 200000000 
          re-started bus-errors arbit-lost error-warn error-pass bus-off
          0          0          0          0          0          0         numtxqueues 1 numrxqueues 1 gso_max_size 65536 gso_max_segs 65535 tso_max_size 65536 tso_max_segs 65535 gro_max_size 65536 gso_ipv4_max_size 65536 gro_ipv4_max_size 65536 parentbus platform parentdev 2ab00000.can 
    RX:  bytes packets errors dropped  missed   mcast           
             8       1      0       0       0       0 
    TX:  bytes packets errors dropped carrier collsns           
             0       0      0       0       0       0 
```

### 3.21 TYPE-C Test

The OK3572 features one Type-C port, with automatic detection of TYPE-C HOST/DEVICE modes. Device mode can be used for flashing the device, ADB file transfers and debugging, whilst Host mode allows you to connect standard USB devices using a Type-C to Host cable.

Device mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image.png)

Host mode:

Plug in the USB disk to view the insertion details.

```bash
root@ok3572-buildroot:/# [ 1612.828606] phy phy-26054000.syscon:usb2-phy@0.1: set u2phy mode 5
[ 1612.828647] xhci-hcd xhci-hcd.8.auto: xHCI Host Controller
[ 1612.828863] xhci-hcd xhci-hcd.8.auto: new USB bus registered, assigned bus number 3
[ 1612.828943] xhci-hcd xhci-hcd.8.auto: hcc params 0x0220fe64 hci version 0x110 quirks 0x0000808022000010
[ 1612.828976] xhci-hcd xhci-hcd.8.auto: irq 81, io mem 0x24000000
[ 1612.829069] xhci-hcd xhci-hcd.8.auto: xHCI Host Controller
[ 1612.831685] xhci-hcd xhci-hcd.8.auto: new USB bus registered, assigned bus number 4
[ 1612.831702] xhci-hcd xhci-hcd.8.auto: Host supports USB 3.0 SuperSpeed
[ 1612.831818] usb usb3: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.12
[ 1612.831831] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[ 1612.831840] usb usb3: Product: xHCI Host Controller
[ 1612.831848] usb usb3: Manufacturer: Linux 6.12.58-g33eaeba6eab7-dirty xhci-hcd
[ 1612.831856] usb usb3: SerialNumber: xhci-hcd.8.auto
[ 1612.832315] hub 3-0:1.0: USB hub found
[ 1612.832342] hub 3-0:1.0: 1 port detected
[ 1612.832701] usb usb4: We don't know the algorithms for LPM for this host, disabling LPM.
[ 1612.832762] usb usb4: New USB device found, idVendor=1d6b, idProduct=0003, bcdDevice= 6.12
[ 1612.832773] usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[ 1612.832783] usb usb4: Product: xHCI Host Controller
[ 1612.832791] usb usb4: Manufacturer: Linux 6.12.58-g33eaeba6eab7-dirty xhci-hcd
[ 1612.832798] usb usb4: SerialNumber: xhci-hcd.8.auto
[ 1612.833194] hub 4-0:1.0: USB hub found
[ 1612.833218] hub 4-0:1.0: 1 port detected
[ 1613.080143] usb 3-1: new high-speed USB device number 2 using xhci-hcd
[ 1613.220103] usb 3-1: New USB device found, idVendor=05e3, idProduct=0747, bcdDevice= 8.19
[ 1613.220157] usb 3-1: New USB device strings: Mfr=3, Product=4, SerialNumber=5
[ 1613.220166] usb 3-1: Product: USB Storage
[ 1613.220173] usb 3-1: Manufacturer: Generic
[ 1613.220180] usb 3-1: SerialNumber: 000000000819
[ 1613.225109] usb-storage 3-1:1.0: USB Mass Storage device detected
[ 1613.225628] scsi host0: usb-storage 3-1:1.0
[ 1614.245494] scsi 0:0:0:0: Direct-Access     Generic  STORAGE DEVICE   0819 PQ: 0 ANSI: 6
[ 1614.546642] sd 0:0:0:0: [sda] 61270016 512-byte logical blocks: (31.4 GB/29.2 GiB)
[ 1614.547253] sd 0:0:0:0: [sda] Write Protect is off
[ 1614.547838] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
[ 1614.573156]  sda: sda1
[ 1614.573492] sd 0:0:0:0: [sda] Attached SCSI removable disk
[ 1614.802729] FAT-fs (sda1): utf8 is not a recommended IO charset for FAT filesystems, filesystem will be case sensitive!
[ 1614.804996] FAT-fs (sda1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

### 3.22 PCIE Test

The OK3572 feautures two PCIe 2.0 slots.

Due to the variety of PCIe devices, some may not be supported by default by the kernel and may require manual addition of the corresponding device driver.

1\. Before powering on the system, insert the PCIe module into PCIe slot P44 on the carrier board; After power-up and boot, you can see via lspci that the corresponding device has been successfully enumerated.

```bash
root@ok3572-buildroot:/# lspci
0001:10:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3572 (rev 01)
0001:11:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller
```

Take the PCIe network card as an example; the driver is already in the Linux kernel by default. After inserting the network card and powering on, you will see the enumeration information, and the Ethernet interface will appear.

```bash
root@ok3572-buildroot:/# ifconfig
enP1p17s0 Link encap:Ethernet  HWaddr 00:8E:25:72:00:BD
          inet addr:192.168.1.135  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

2\. Before powering on the system, insert the PCIe module into PCIe slot P46 on the carrier board; After power-up and boot, you can see via lspci that the corresponding device has been successfully enumerated.   
Take a PCIe hard drive as an example:

```bash
root@ok3572-buildroot:/# lspci
00:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3572 (rev 01)
01:00.0 Non-Volatile memory controller: Intel Corporation SSD DC P4101/Pro 7600p/760p/E 6100p Series (rev 03)
```

Running ls /dev displays the following NVMe nodes:

```bash
root@ok3572-buildroot:/# ls /dev/nvme*
/dev/nvme0  /dev/nvme0n1  /dev/nvme0n1p1
```

View the mount directory:

```bash
root@ok3572-buildroot:/# ls /run/media/
nvme0n1p1
```

Test the hard drive speed using dd

Write data:

```bash
root@ok3572-buildroot:/# dd if=/dev/zero of=/run/media/nvme0n1p1/test bs=1M count=100 conv=fsync
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.822987 s, 127 MB/s
```

Read data:

```bash
root@ok3572-buildroot:/# dd if=/run/media/nvme0n1p1/test of=/dev/null bs=1M
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.176061 s, 596 MB/s

```

### 3.23 SQLite3 Test

SQLite3 is a lightweight database system, an ACID-compliant relational database management system with low resource consumption. The OK3572 development board uses version 3.48.0 of SQLite3.

```bash
root@ok3572-buildroot:/# sqlite3
SQLite version 3.48.0 2025-01-14 11:05:00
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> create table tbl1 (one varchar(10), two smallint);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite> delete from tbl1 where one = 'hello!';
sqlite> select * from tbl1;
goodbye|20
sqlite> .quit
```

### 3.24 ADC Test

The OK3572 development board features eight internal ADC channels; the saradc4, saradc5 and saradc7 channels are available on port P18. These can be tested by connecting them to pin 4 of the adjacent adjustable resistor using DuPont wires. The hardware diagram for the ADC pins is shown below. The current chip uses a 1.8V reference voltage, corresponding to the 12-bit ADC’s maximum value of 4096. Select saradc4 for testing, and use a DuPont wire to connect pins 1 and 4 of port P18.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20251106174325530.png)

Testing the value of an adjustable resistor

```bash
root@ok3572-buildroot:/# cd /sys/bus/iio/devices/iio:device0
root@ok3572-buildroot:/sys/bus/iio/devices/iio:device0# cat in_voltage4_raw
1095
```

### 3.25 GPIO Test

The extended I/O pins are led out from the carrier board, located on P17.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/image_20260520184416.png)

Taking the GPIO\_P17 pin as an example for testing:

```bash
root@ok3572-buildroot:/# cat /sys/kernel/debug/gpio  | grep i2c
gpiochip6: GPIOs 515-538, parent: i2c/2-0023, 2-0023, can sleep:	//识别到io扩展芯片

root@ok3572-buildroot:/# fltest_extgpio.sh GPIO_P17 1	//GPIO_P17 拉高 
root@ok3572-buildroot:/# fltest_extgpio.sh GPIO_P17 0	//GPIO_P17 拉低
```

Please note: fltest\_extgpio.sh can only test the pins of the I/O expansion chip; please use the fltest\_gpio.sh script to test the GPIO pins of the OK3572 SoC.

### 3.26 Adding a Startup Script

+ **Temporarily Adding a Startup Script**

1\. Modify /etc/forlinx.sh;

```bash
root@ok3572-buildroot:/# cat /etc/forlinx.sh
#! /bin/sh
```

2\. Restart the board for verification;

+ **To add a startup script into the flashed image:**

Modify buildroot/board/rockchip/common/base/etc/forlinx.sh

Recompile, repackage and flash the image (you will need to delete the pre-compiled filesystem; see section 4.2.1 of the user compilation manual).

### 3.27 Changing the Boot Logo

OK3572 supports changing the custom boot logo without recompiling the system image.

Prepare two BMP files (can be the same image) in the USB driver:

logo.bmp for the U-Boot stage

logo\_kernel.bmp for the kernel stage

Example image resolution: 480x272 (other resolutions are allowed, but bit depth must be 24-bit). Copy these files to a USB drive and insert it into OK3572’s USB port.

```bash
root@ok3572-buildroot:~# cd /run/media/sda1/
root@ok3572-buildroot:/run/media/sda1# ls
logo.bmp   logo_kernel.bmp
```

Then run the following command to flash the logo onto the system

```bash
root@ok3572-buildroot:/run/media/sda1# cat logo.bmp > logo.img
root@ok3572-buildroot:/run/media/sda1# truncate -s %512 logo.img
root@ok3572-buildroot:/run/media/sda1# cat logo_kernel.bmp >> logo.img
root@ok3572-buildroot:/run/media/sda1# dd if=logo.img of=/dev/mmcblk0p5
1531+1 records in
1531+1 records out
783926 bytes (784 kB, 766 KiB) copied, 0.0718396 s, 10.9 MB/s
root@ok3572-buildroot:/run/media/sda1# reboot
```

Once you have restarted the system, you will see that the logo has changed.

## 4. OK3572 Platform Multimedia Testing

The OK3572 platform uses Gstreamer for audio and video applications, which supports hardware-accelerated encoding and decoding. All examples in this section are based on Gstreamer commands.

There is a Video Processing Unit (VPU) that supports the following video hardware encoding/decoding formats:

Video Decoding: H.264, H.265, VP9,AV1, AVS2.

Video Encoding H264, H.265.

OK3572 Hardware Encoding and Decoding Parameter Table

| Video Decoder| Format| Profile| Resolution \& Frame rate|
|----------|----------|----------|----------|
| | H.265| main 10| 8K@30fps or 4K@120fps|
| | H.264| main 10| 4K@60fps|
| | VP9| Profile 0/2| 8K@30fps or 4K@120fps|
| | AVS2| Profile 0/2| 8K@30fps or 4K@120fps|
| | AV1| main 10| 8K@30fps or 4K@120fps|
| Video Encoder| H.264| High| 4K@40fps|
| | H.265| Main| 4K@40fps|

### 4.1 Audio and Video Playback Experience

#### 4.1.1 Playing Video and Audio via Gst-play

Gplay is an audio and video player based on Gstreamer. It automatically selects the appropriate plugins for audio and video playback based on the hardware, and it is very easy to use.

```bash
root@OK3572-buildroot:/# gst-play-1.0 /userdata/1080p_30fps_h265-30S.mp4
//Play the video file with sound, and test the sound by the earphone
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/1080p_30fps_h265-30S.mp4
Redistribute latency...
Redistribute latency...
mpp[1246]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1246]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1246]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1246]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[1246]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1246]: mpp_info: mpp version: unknown mpp version for missing VCS info
Redistribute latency...
Redistribute latency...
mpp[1246]: h265d: extradata is encoded as hvcC format
Redistribute latency...
0:00:03.0 / 0:00:30.0
```

#### 4.1.2 Playing Video via Gst-launch

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h265-30S.mp4 ! qtdemux ! queue ! h265parse ! mppvideodec ! waylandsink
//Play video only
mpp[1283]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1283]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1283]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1283]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[1283]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1283]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1283]: h265d: extradata is encoded as hvcC format
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
^Chandling interrupt. (17.9 %)
```

### 4.1.3 Playing Audio via Gst-launch

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/piano2-CoolEdit.mp3 ! id3demux ! mpegaudioparse ! mpg123audiodec ! alsasink
//Audio only, test by headphone
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
handling interrupt..3 (88.5 %)

```

#### 4.1.4 Playing Both Video and Audio via Gst-launch

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h265-30S.mp4 ! qtdemux name=dec dec. ! queue ! h265parse ! mppvideodec ! waylandsink dec.! queue ! decodebin ! alsasink
mpp[18964]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18964]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18964]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18964]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[18964]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[18964]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[18964]: h265d: extradata is encoded as hvcC format
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:00.7 / 0:00:30.0 (2.6 %)
```

### 4.2 Video Hardware Encoding

#### 4.2.1 Video Hardware Encoding H.264

```bash
root@OK3572-buildroot:/# gst-launch-1.0 mp4mux name=mux ! filesink location=test.mp4  videotestsrc num-buffers=600 ! video/x-raw,framerate=60/1,width=1920,height=1080,format=NV12 ! mpph264enc ! h264parse !  mux.video_0 -e
mpp[18720]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18720]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18720]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18720]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[18720]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[18720]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18720]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is PREROLLING ...
mpp[18720]: mpp_enc: set prep cfg w:h [1920:1080] stride [1920:1088] fmt 0 rotate 0 mirror 0
mpp[18720]: mpp_enc: set rc cbr bps [15552000:16524000:14580000] fps [60:1:fix] - [60:1:fix] gop 60
mpp[18720]: mpp_enc: mode cbr bps [14580000:15552000:16524000] fps fix [60/1] -> fix [60/1] gop i [60] v [0]
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:00.9 / 0:00:10.0 (9.3 %)
```

#### 4.2.2 Video Hardware Encoding H.265

```bash
root@OK3572-buildroot:/# gst-launch-1.0 mp4mux name=mux ! filesink location=test.mp4 videotestsrc num-buffers=600 ! video/x-raw,framerate=60/1,width=1920,height=1080,format=NV12 ! mpph265enc ! h265parse !  mux.video_0 -e
mpp[18294]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18294]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18294]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18294]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[18294]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[18294]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[18294]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is PREROLLING ...
mpp[18294]: mpp_enc: set prep cfg w:h [1920:1080] stride [1920:1088] fmt 0 rotate 0 mirror 0
mpp[18294]: mpp_enc: set rc cbr bps [15552000:16524000:14580000] fps [60:1:fix] - [60:1:fix] gop 60
mpp[18294]: mpp_enc: mode cbr bps [14580000:15552000:16524000] fps fix [60/1] -> fix [60/1] gop i [60] v [0]
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:06.8 / 0:00:10.0 (68.7 %)
```

### 4.3 Video Hardware Decoding

#### 4.3.1 H.264 Video Decoding and Playback

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h264-30S.mp4 ! qtdemux ! h264parse ! mppvideodec ! waylandsink
mpp[17897]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[17897]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[17897]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[17897]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[17897]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[17897]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
mpp[17897]: h264d_api: is_avcC=1
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:02.9 / 0:00:30.0 (9.9 %)
```

### 4.3.2 H.264 Video Decoding and Playback with Audio

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h264-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h264parse ! mppvideodec  ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[19490]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19490]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19490]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19490]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[19490]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[19490]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Redistribute latency...
mpp[19490]: h264d_api: is_avcC=1
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:00.7 / 0:00:30.0 (2.6 %)
```

#### 4.3.3 H.265 Video Decoding and Playback

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h265-30S.mp4 ! qtdemux ! h265parse ! mppvideodec ! waylandsink
mpp[19908]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19908]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19908]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[19908]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[19908]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[19908]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[19908]: h265d: extradata is encoded as hvcC format
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:02.8 / 0:00:30.0 (9.6 %)
```

#### 4.3.4 H.265 Video Decoding and Playback with Audio

```bash
root@OK3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h265-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h265parse ! mppvideodec  ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[20420]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20420]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20420]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20420]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[20420]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[20420]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Redistribute latency...
Redistribute latency...
mpp[20420]: h265d: extradata is encoded as hvcC format
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:00.5 / 0:00:30.0 (1.9 %)
```

#### 4.3.5 VP9 Video Decoding and Playback

```bash
root@OK3572-buildroot:~# gst-launch-1.0 filesrc location=/userdata/1080p_60fps_vp9-30S.mp4  ! qtdemux ! vp9parse ! mppvideodec ! waylandsink
mpp[20807]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20807]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20807]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[20807]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[20807]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[20807]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:01.0 / 0:00:30.0 (3.6 %)
```

#### 4.3.6 VP9 Video Decoding and Playback with Audio

```bash
root@OK3572-buildroot:~# gst-launch-1.0 filesrc location=/userdata/1080p_60fps_vp9-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! vp9parse ! mppvideodec ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink device=plughw:1,0
mpp[21394]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[21394]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[21394]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[21394]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[21394]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[21394]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:00.6 / 0:00:30.0 (2.3 %)
```

### 4.4 Camera Test

The OK3572 supports OV13855 MIPI cameras, OV5645 MIPI cameras and UVC cameras. D-PHY2 v1.2 supports up to 4 lanes.

The current versions of CAM1 and CAM4 only support the OV13855, whilst CAM2 and CAM3 only support the OV5645. As CAM1 and CAM2 use dphy0, whilst CAM3 and CAM4 use dphy1, the OV13855 and OV5645 cannot be supported simultaneously. You can use the U-Boot menu to select which camera to support—choosing between the OV13855 and the OV5645. The OV5645 camera is supported by default.

The U-Boot menu options include ov5645x2, which refers to CAM1 and CAM2; CAM3 and CAM4 both support the OV5645. To implement ov5645x2, you need to modify the carrier board, which is not supported by default.

**Methods for hardware modification:**

+ When P23 supports the OV13855 camera, DVDD requires a 1.2V power supply; solder R105 in place and leave R106 unsoldered. When P23 supports the OV5645 camera, DVDD requires a 1.5V power supply; leave R105 unsoldered and solder R106 in place. The carrier board is set to a default 1.2V power supply.
+ When P45 supports the OV13855 camera, DVDD requires a 1.2V power supply; solder R127 in place and leave R140 unsoldered. When P23 supports the OV5645 camera, DVDD requires a 1.5V power supply; leave R127 unsoldered and solder R140 in place. The carrier board is set to a default 1.2V power supply.

First test the UVC camera, insert the USB camera into the development board, and the UVC driver will be installed automatically.

#### 4.4.1 UVC Camera Test

**4.4.1.1 Camera Recognition and Format Support Query**

Camera Recognition

When connecting different numbers of cameras, the node numbers assigned to UVC cameras may vary; you will need to select the appropriate camera node based on the actual situation. Based on the output of v4l2-ctl --list-devices, select the node corresponding to UVC.

```bash
root@ok3572-buildroot:/# v4l2-ctl --list-devices                
rkcif (platform:rkcif-mipi-lvds1):
        /dev/video0
        /dev/video1
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/video6
        /dev/video7
        /dev/video8
        /dev/video9
        /dev/video10
        /dev/media0

rkcif (platform:rkcif-mipi-lvds3):
        /dev/video11
        /dev/video12
        /dev/video13
        /dev/video14
        /dev/video15
        /dev/video16
        /dev/video17
        /dev/video18
        /dev/video19
        /dev/video20
        /dev/video21
        /dev/media1

WIN2 USB2.0 PC Camera: WIN2 USB (usb-xhci-hcd.3.auto-1.2):
        /dev/video23
        /dev/video24
        /dev/media2
```

Format Support Query

```bash
root@OK3572-buildroot:~# v4l2-ctl --list-formats-ext -d /dev/video23
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture

        [0]: 'YUYV' (YUYV 4:2:2)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 176x144
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 160x120
                        Interval: Discrete 0.033s (30.000 fps)

```

**4.4.1.2 Camera Capture Format Query and Modification**

Capture Format Query

```bash
root@OK3572-buildroot:~# v4l2-ctl -V -d /dev/video23
Format Video Capture:
        Width/Height      : 640/480
        Pixel Format      : 'YUYV' (YUYV 4:2:2)
        Field             : None
        Bytes per Line    : 1280
        Size Image        : 614400
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: ITU-R 601
        Quantization      : Default (maps to Limited Range)
        Flags 
```

Capture Format Modification

```bash
root@OK3572-buildroot:~# v4l2-ctl -v width=320,height=240,pixelformat=YUYV -d /dev/video23 //Modify to YUYV
root@OK3572-buildroot:~# v4l2-ctl -V -d /dev/video23              //Query on data collection formats
Format Video Capture:
        Width/Height      : 320/240
        Pixel Format      : 'YUYV' (YUYV 4:2:2)
        Field             : None
        Bytes per Line    : 640
        Size Image        : 153600
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: ITU-R 601
        Quantization      : Default (maps to Limited Range)
        Flags  
```

#### 4.4.1.3 Camera Image Preview and Capture

Camera Image Preview

```bash
root@OK3572-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video23 ! videoconvert ! waylandsink
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
[11:51:21.037] seeing the first app
0:00:19.9 / 99:99:99.

```

Camera Capture

```bash
root@OK3572-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video23 num-buffers=1 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=/pic.jpg
mpp[6094]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[6094]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[6094]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[6094]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[6094]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[6094]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[6094]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
mpp[6094]: mpp_enc: set prep cfg w:h [640:480] stride [640:480] fmt 0 rotate 0 mirror 0
mpp[6094]: mpp_enc: set rc fixqp bps [0:0:0] fps [30:1:fix] - [30:1:fix] gop 30
mpp[6094]: mpp_enc: set jpeg qfactor [80:1:99]
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:01.210291292
Setting pipeline to NULL ...
Freeing pipeline ...
//Once the process has finished, check the root directory for the pic.jpg file.
```

### 4.4.2 OV13855 Test

When an OV13855 is connected to the carrier board and only one dphy is set to 13855 in the U-Boot menu, the supported resolution is 4256 x 3168 at 30 fps.   
When two OV13855 chips are connected to the carrier board and both dphy settings are set to 13855 in the U-Boot menu, the supported resolution is 2112 × 1568 at a frame rate of 18 fps.

In the U-Boot menu, the camera settings are as follows:   
1: cam\_dphy0 ov13855  
2: cam\_dphy1 ov13855

**<font style="color:#000000;">Node corresponding to the camera</font>**

+ CAM1 ：rkcif-mipi-lvds ,  
rkisp-vir0
+ CAM4 ：rkcif-mipi-lvds2 ,  
rkisp-vir1

CAM1 and CAM4 are connected to the OV13855; taking CAM1 as an example.

**4.4.2.1 Camera Recognition and Detection**

```bash
root@OK3572-buildroot:~# v4l2-ctl --list-devices
//View the device node
rkisp-statistics (platform: rkisp):
        /dev/video50
        /dev/video51
        /dev/video59
        /dev/video60

rkcif (platform:rkcif-mipi-lvds):
        /dev/video0
        /dev/video1
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/video6
        /dev/video7
        /dev/video8
        /dev/video9
        /dev/video10
        /dev/media0

rkcif-mipi-lvds1 (platform:rkcif-mipi-lvds1):
        /dev/media1

rkcif (platform:rkcif-mipi-lvds2):
        /dev/video22
        /dev/video23
        /dev/video24
        /dev/video25
        /dev/video26
        /dev/video27
        /dev/video28
        /dev/video29
        /dev/video30
        /dev/video31
        /dev/video32
        /dev/media2

rkcif-mipi-lvds3 (platform:rkcif-mipi-lvds3):
        /dev/media3

rkisp_mainpath (platform:rkisp-vir0):
        /dev/video44
        /dev/video45
        /dev/video46
        /dev/video47
        /dev/video48
        /dev/video49
        /dev/video52
        /dev/media4

rkisp_mainpath (platform:rkisp-vir1):
        /dev/video53
        /dev/video54
        /dev/video55
        /dev/video56
        /dev/video57
        /dev/video58
        /dev/video61
        /dev/media5

rkvpss_scale0 (platform:rkvpss-vir0):
        /dev/video63
        /dev/video64
        /dev/video65
        /dev/video66
        /dev/media6

rkvpss_scale0 (platform:rkvpss-vir1):
        /dev/video67
        /dev/video68
        /dev/video69
        /dev/video70
        /dev/media7

```

**4.4.2.2 Viewing Supported Formats**

```bash
root@OK3572-buildroot:~# v4l2-ctl --list-formats-ext -d /dev/video44
//View the formats and resolutions supported by the camera
v4l2-ctl --list-formats-ext -d /dev/video44
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [1]: 'NV16' (Y/UV 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [2]: 'NV61' (Y/VU 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [3]: 'NV21' (Y/VU 4:2:0)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [4]: 'NV12' (Y/UV 4:2:0)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [5]: 'NM21' (Y/VU 4:2:0 (N-C))
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [6]: 'NM12' (Y/UV 4:2:0 (N-C))
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [7]: 'GREY' (8-bit Greyscale)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
```

**4.4.2.3 Camera Preview**

```bash
root@OK3572-buildroot:~#  gst-launch-1.0 v4l2src device=/dev/video44 ! video/x-raw, format=NV12, width=640, height=480, framerate=30/1 ! waylandsink
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[  402.548889] rkisp_hw 27420000.isp: set isp clk = 396000000Hz
[  402.549190] rkcif-mipi-lvds: rkcif_scale_set_fmt: req(264, 196) src out(4224, 3136)
[  402.568307] rkisp rkisp-vir0: first params buf queue
[  402.578233] rkcif-mipi-lvds: stream[0] start streaming
[  402.582825] rkcif-mipi-lvds: Allocate dummy buffer, size: 0x01944000
[  402.583037] rockchip-mipi-csi2 mipi0-csi2: stream on, src_sd: 00000000c3fd36e8, sd_name:rockchip-csi2-dphy0
[  402.583051] rockchip-mipi-csi2 mipi0-csi2: stream ON
[  402.583089] rockchip-csi2-dphy0: dphy0, data_rate_mbps 1080
[  402.583159] rockchip-csi2-dphy csi2-dphy0: csi2_dphy_s_stream stream on:1, dphy0, ret 0
[  402.583169] ov13855 4-0036: ov13855_s_stream: on: 1, 4224x3136@30
Redistribute latency...
```

**4.4.2.4 Capture a Photo**

```bash
root@OK3572-buildroot:/root# gst-launch-1.0 v4l2src device=/dev/video44 num-buffers=1 ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
mpp[1789]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1789]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1789]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1789]: mpp: unable to create enc vp8 for soc rk3572 unsupported
mpp[1789]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
Using mplane plugin for capture 
mpp[1789]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1789]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[ 1337.456399] rkisp_hw 27420000.isp: set isp clk = 396000000Hz
mpp[1789]: mpp_enc: set prep cfg w:h [640:480] stride [640:480] fmt 0 rotate 0 mirror 0
mpp[1789]: mpp_enc: set rc fixqp bps [0:0:0] fps [120:1:fix] - [120:1:fix] gop 120
mpp[1789]: mpp_enc: set jpeg qfactor [80:1:99]
[ 1337.463076] rkisp rkisp-vir0: first params buf queue
[ 1337.464527] rkcif-mipi-lvds: stream[0] start streaming
[ 1337.469326] rkcif-mipi-lvds: Allocate dummy buffer, size: 0x01944000
[ 1337.469535] rockchip-mipi-csi2 mipi0-csi2: stream on, src_sd: 000000000f036197, sd_name:rockchip-csi2-dphy0
[ 1337.469549] rockchip-mipi-csi2 mipi0-csi2: stream ON
[ 1337.469589] rockchip-csi2-dphy0: dphy0, data_rate_mbps 540
[ 1337.469659] rockchip-csi2-dphy csi2-dphy0: csi2_dphy_s_stream stream on:1, dphy0, ret 0
[ 1337.469670] ov13855 2-0036: ov13855_s_stream: on: 1, 2112x1568@20
[ 1337.614660] (0x27480000)MIPI_CSI2 ERR1:0x10 (fs/fe mis,vc: 0) 
[ 1337.642304] rkcif-mipi-lvds2: not active buffer,skip frame, scale ch[0]
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:00.203125000
Setting pipeline to NULL ...
Freeing pipeline ...
[ 1337.659926] rkcif-mipi-lvds: stream[0] start stopping, total mode 0x1, cur 0x1
root@ok3572-buildroot:/# [ 1337.697743] rkcif-mipi-lvds2: not active buffer,skip frame, scale ch[0]
[ 1337.697757] rockchip-mipi-csi2 mipi0-csi2: stream off, src_sd: 000000000f036197, sd_name:rockchip-csi2-dphy0
[ 1337.697792] rockchip-mipi-csi2 mipi0-csi2: stream OFF
[ 1337.697834] rockchip-csi2-dphy csi2-dphy0: csi2_dphy_s_stream_stop stream stop, dphy0
[ 1337.697847] rockchip-csi2-dphy csi2-dphy0: csi2_dphy_s_stream stream on:0, dphy0, ret 0
[ 1337.697860] ov13855 2-0036: ov13855_s_stream: on: 0, 2112x1568@20
[ 1337.698325] rkcif-mipi-lvds: stream[0] stopping finished, dma_en 0x0

root@ok3572-buildroot:/root# ls
//Check whether pic.jpg is generated; you can copy it to your PC to view it.
pic.jpg
```

#### 4.4.3 OV5645 Test

In the U-Boot menu, the camera settings are as follows:   
1: cam\_dphy0 ov5645  
2: cam\_dphy1 ov5645

**Node corresponding to the camera**

+ CAM2 ：rkcif-mipi-lvds1
+ CAM3 ：rkcif-mipi-lvds3

CAM1 and CAM3 are connected to the OV5645; taking CAM3 as an example..

**4.4.3.1 Camera Recognition and Detection**

```bash
root@ok3572-buildroot:~# v4l2-ctl --list-devices
rkcif-mipi-lvds (platform:rkcif-mipi-lvds):
        /dev/media0

rkcif (platform:rkcif-mipi-lvds1):
        /dev/video11
        /dev/video12
        /dev/video13
        /dev/video14
        /dev/video15
        /dev/video16
        /dev/video17
        /dev/video18
        /dev/video19
        /dev/video20
        /dev/video21
        /dev/media1

rkcif-mipi-lvds2 (platform:rkcif-mipi-lvds2):
        /dev/media2

rkcif (platform:rkcif-mipi-lvds3):
        /dev/video33
        /dev/video34
        /dev/video35
        /dev/video36
        /dev/video37
        /dev/video38
        /dev/video39
        /dev/video40
        /dev/video41
        /dev/video42
        /dev/video43
        /dev/media3

```

**4.4.3.2 Viewing Supported Formats**

```bash
root@ok3572-buildroot:~# v4l2-ctl --list-formats-ext -d /dev/video33
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'NV16' (Y/UV 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [1]: 'NV61' (Y/VU 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [2]: 'NV12' (Y/UV 4:2:0)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [3]: 'NV21' (Y/VU 4:2:0)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [4]: 'YUYV' (YUYV 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [5]: 'YVYU' (YVYU 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [6]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8
        [7]: 'VYUY' (VYUY 4:2:2)
                Size: Stepwise 64x64 - 1920x1080 with step 8/8

```

**4.4.3.3 Camera Preview**

```bash
root@ok3572-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video33 ! videoconvert ! waylandsink
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[  918.680385] rkcif-mipi-lvds3: stream[0] start streaming
[  918.682127] rkcif-mipi-lvds3: Allocate dummy buffer, size: 0x0099d000
[  918.682151] rkcif-mipi-lvds3: get vblank fail, vblank_def 0, vblank_curr 0
[  918.682314] rockchip-mipi-csi2 mipi3-csi2: stream on, src_sd: 0000000046640082, sd_name:rockchip-csi2-dphy5
[  918.682326] rockchip-mipi-csi2 mipi3-csi2: stream ON
[  918.682360] rockchip-csi2-dphy5: dphy5, data_rate_mbps 672
[  918.682425] rockchip-csi2-dphy csi2-dphy5: csi2_dphy_s_stream stream on:1, dphy5, ret 0
Redistribute latency...
0:00:04.0 / 99:99:99.
```

### 4.5 Waylandsink Fixed Position Test

All tests in this chapter for display are done using the waylandsink plugin from Gstreamer. By default, the video or camera window will pop up randomly on the desktop. If you want to display it in a specific position, you can specify the coordinates.

For example, coordinates (0,0), width 480, height 360.

```bash
root@ok3572-buildroot:/# gst-launch-1.0 filesrc location=/userdata/1080p_30fps_h265-30S.mp4 ! qtdemux ! h265parse ! mppvideodec ! waylandsink  "render-rectangle=<0,0,480,360>"
```

## 5\. System Flashing

The OK3572-C development board currently supports flashing through OTG. The corresponding flashing tools are provided in the user materials.

### 5.1 OTG System Flashing

#### 5.1.1 OTG Driver Installation 

+ Path: Software Materials \\ 3-Tools \\DriverAssitant\_v5.14.zip

Extract the file above to any directory and run it with administrator privileges.

Open the DriverInstall.exe program.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1735267645818_f515fa0c_ce94_4d61_a5a0_664ed7c0640a.png)

Click Install Driver.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1735267671413_d07d1e53_8b6f_4559_969f_0d921a473a55.png)

#### 5.1.2 Complete OTG Flashing

**5.1.2.1 RKDevTool Flashing Test**

**Note: You must use version 3.37 or later of the RKDevTool\_Release tool for flashing.**

+ Path: 02-User Files\\01-Software Files\\04-Tools\\RKDevTool\_Release\_v3.37.zip

It is a development tool provided by Rockchip. Extract it to a directory with only English characters, then connect the development board to the host using a Type-C cable. Press and hold the recovery button on the development board, then press the reset button to reset the system. After about two seconds, release the recovery button. There will be prompts on the Rockchip development tool : loader device found

**Note:** 

- **Device detection occurs when the recovery button is pressed during the power-on of the development board;**

+ **The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters;**
+ **When performing an OTG flash, ensure that the OTG cable is connected to the Type-C port on the board, as shown in the figure below:**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512303420_173004f4_506d_4f5a_8c23_6be561abf52d.png)

Open the Rockchip development tool:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1735267787698_646f1b57_da67_431b_b28c_ad14f616217a.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1735267965892_2e0b0d71_79d8_463f_b66a_0f429fabe1a1.png)

Click the "Upgrade" button to upgrade. The flashing process will take some time; the system will restart automatically once the update is complete.

**5.1.2.2 FactoryTool Flashing Test**

FactoryTool is used for batch OTG flashing in the factory. It does not require reading an image file and can batch-flash large images. If RKDevTool does not meet compatibility requirements, this method can also be attempted. Before using, extract it to a directory with only English characters. Connect the development board and host using a Type-C cable. Press and hold the recovery button, press the reset button for the system reset, and after about two seconds, release the recovery button. There will be prompts on the Rockchip development tool : loader device found

**Note:** 

- **Device detection occurs when the recovery button is pressed during the power-on of the development board;**                                       
- **The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters.**

After selecting the firmware, click “Start.” The loader device will be detected, and the flashing process will begin automatically.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1720418374490_7567e660_737f_4218_8cfa_3b7c9be57d3e_1783665464482.png)

Downloading firmware.

Upgrade successful. The system will not automatically restart and will require a power cycle to restart.

#### 5.1.3 OTG Step-by-Step Flashing Test

During the development phase, performing full flashing every time can be time-consuming. Therefore, here it introduces how to use OTG flashing tools to flash individual partitions.

**Note: Device detection occurs when the recovery button is pressed during the power-on of the development board.**

Firstly, once the OK3572-linux-source build has completed, you will find individual partition images in the output/firmware/ directory.

```bash
lrwxrwxrwx  1 root root   40 Apr 30 14:53 MiniLoaderAll.bin -> ../../u-boot/rk3572_loader_v1.01.101.bin
lrwxrwxrwx  1 root root   26 Apr 30 14:53 boot.img -> ../../kernel-6.12/boot.img
lrwxrwxrwx  1 root root   11 Apr 30 14:53 misc.img -> ../misc.img
lrwxrwxrwx  1 root root   22 Apr 30 14:59 oem.img -> ../extra-parts/oem.img
lrwxrwxrwx  1 root root   48 Apr 30 14:59 parameter.txt -> ../../device/forlinx/.chips/ok3572/parameter.txt
lrwxrwxrwx  1 root root   23 Apr 30 14:59 recovery.img -> ../recovery/ramboot.img
lrwxrwxrwx  1 root root   75 Apr 30 14:58 rootfs.img -> ../../buildroot/output/forlinx_ok3572_linux/OK3572-Linux/images/rootfs.ext2
lrwxrwxrwx  1 root root   22 Apr 30 14:53 uboot.img -> ../../u-boot/uboot.img
lrwxrwxrwx  1 root root   26 Apr 30 15:00 update.img -> ../update/Image/update.img
lrwxrwxrwx  1 root root   27 Apr 30 14:59 userdata.img -> ../extra-parts/userdata.img

```

Take the separate flashing boot partition as an example to demonstrate the flashing method.

Connect the development board and host using a Type-C cable, press and hold the recovery button, then press the reset button for system reset. After about two seconds, release the recovery button. The system will prompt “ Find Loader Device”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278373708_bdf8dc9f_cc02_4fed_b2cf_9591ae9f3c87.png)

Click the "Device Partition Table" button to automatically read the partition . address.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278373900_a316251a_0f98_4b69_a2ae_f7eeba24f552.png)

It will ask if you want to update the download address. Click "Yes," and the partition table will be read successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278374098_1e8ed88d_ec1b_4839_9831_a5d20a5f1a8c.png)

Click the area to the right of the partition to select the partition image, and tick the partition.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278374299_664b1139_5d46_477e_8ec7_3640a0573c20.png)

Click the “Execute” button to automatically flash and restart.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278374639_0858efb1_ae3b_4768_af77_983c9286aaff.png)

**MASKROM Mode Introduction**

If the loader is damaged and cannot enter the Loader mode, press and hold the maskrom key (next to the RTC battery) and then press the reset key to enter the maskrom mode for programming.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1781512304845_32d9a73e_536a_49d4_b8d9_98142a017afb.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278374849_c9e0d481_4360_4856_a155_88cd30e07767.png)

At this time, the system will prompt that a maskrom device is found. The programming process is consistent with the loader mode. It is better to use the update. img for programming. When flashing a partition, in addition to selecting the image to be flashed, you must also add MiniLoaderAll.bin.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid.**

### 5.2 TF System Flashing

Flashing TF card making and testing.

**Note:** 

- **The maximum capacity of TF cards tested is 32GB; using a TF card with a capacity greater than 32GB may result in a write failure;**

- **Copy SDDiskTool \_ v1.8.zip from the user profile tool directory to any windows directory. Run as administrator.**

SD\_Firmware\_Tool.exe.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278375046_ccb93f8c_d97c_4c76_811c_4f0eda82c2e2.png)

Select the disk device, tick the “Firmware Update” box, and select update.img. Click to start creating.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278375213_b0a0a76e_38c8_46a3_8dee_dbd887313527.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Manual/1719278375372_2a2e23f1_1e24_43f9_ba08_803a28b79464.png)

Insert the TF card into the development board and power it on; the system will automatically begin the flashing process. Once the flashing is complete, both the screen and the serial port will display the following message:

Please remove SD CARD!!!, wait for reboot. 

At this point, remove the TF card and the system will restart automatically (please do not switch off the power directly).

During mass production, you can determine whether programming is complete by observing the heartbeat LED on the SoM. The changes in the heartbeat LED during the programming process are as follows:

- Kernel boot phase: Heartbeat light mode, flashing at regular intervals;

- Preparation stage for programming: The eMMC indicator light is off;

- Programming in progress: The eMMC indicator light remains lit;

- Post-programming stage: Heartbeat light mode, with regular, intermittent flashing.


Serial port information during the flashing process:

```bash
RKU_IsUfs is_ufs = 0, is_emmc
LOG_INFO:  >>>>>> parameter checking... <<<<<<
LOG_INFO:  >>>>>> uboot checking... <<<<<<
LOG_INFO:  >>>>>> misc checking... <<<<<<
LOG_INFO:  >>>>>> boot checking... <<<<<<
LOG_INFO:  >>>>>> recovery checking... <<<<<<
LOG_INFO:  >>>>>> rootfs checking... <<<<<<
LOG_INFO:  >>>>>> oem checking... <<<<<<
LOG_INFO:  >>>>>> userdata checking... <<<<<<
librkupdate_Finish to upgrade firmware.
[   76.664499] Alternate GPT is invalid, using primary GPT.
[   76.664565]  mmcblk0: p1 p2 p3 p4 p5 p6 p7 p8
LOG_INFO: update.img Installation success.
LOG_INFO: 
Please remove SD CARD!!!, wait for reboot.
LOG_INFO: forlinx zyj not found /mnt/sdcard/forlinx_config.txt
[   82.143816] Alternate GPT is invalid, using primary GPT.
[   82.143865]  mmcblk0: p1 p2 p3 p4 p5 p6 p7 p8
```

If the device does not restart automatically after removing the TF card, you can complete the flashing process by restarting it manually. Please wait patiently whilst the data is being written.