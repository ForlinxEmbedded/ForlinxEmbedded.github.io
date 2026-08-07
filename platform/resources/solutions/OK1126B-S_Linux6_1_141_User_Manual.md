# Linux6.1.14\_User’s Manual\_V1.0

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, understand interface functions, and learn testing methods. It primarily covers the testing of development board interface functions, methods for flashing the image, and troubleshooting common issues encountered during use. During testing, certain commands have been annotated for better understanding, focusing on practicality and adequacy. For kernel compilation, related application compilation methods, and development environment setup, please refer to the “OK1126B-S\&OK1126BJ-S\_Linux6.1.141\_User’s Compilation Manual” provided by Forlinx.

There are six chapters:

+ Chapter 1. briefly introduces the development board’s interface resources, relevant driver paths in the kernel source code, supported flashing and boot methods, and key points in the documentation;
+ Chapter 2. describes two login methods: serial port login and network login;
+ Chapter 3. covers the testing of desktop and QT interface functions;
+ Chapter 4. explains how to perform functional tests using command line operations;
+ Chapter 5. includes camera playback tests and video hardware encoding/decoding tests;
+ Chapter 6. details methods for updating the image to storage devices, allowing you to choose the appropriate flashing method based on your actual needs.

**Note:**

+ **The OK1126B-S board ships with a pre-installed Linux image. Before use, verify the system is Linux. If not, re-flash the Linux image following the “Flashing the System” guide. After flashing, use the “Serial Port Login” steps to check the kernel version;**
+ **For detailed information, please refer to the OK1126B-S User Materials. All file paths for user materials mentioned in this document are relative to the root directory of the OK1126B-S User Materials.**

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|----------|----------|:-----------|
| 22/12/2025 | V1.0| V1.0| V1.1 and above| Linux6.1.141 User’s Manual Initial Version|

## 1\. OK1126B-S Development Board Description

### 1.1 OK1126B-S/OK1126BJ-S Development Board Description

The OK1126B-S/OK1126BJ-S is a low-power, high-performance processor based on the ARM64 architecture. It integrates a quad-core Cortex-A53 CPU, along with NEON, FPU, NPU, and MCU units, offering NPU computing power up to 3.0 TOPS. It is suitable for AI applications such as intelligent vision.

Connection method: Stamp hole. The main interfaces are shown in the figure below:

Front

Back

Note:

Hardware parameters are not discussed further in this software manual. Before proceeding with software development based on this manual, please read the “OK1126B-S/OK1126BJ-S Hardware Manual” located in the “Hardware Resources\\User Manual” directory. This will help you understand the product naming conventions and the hardware configuration of the unit you are using, thereby facilitating your effective use of this product.

### 1.2 Linux 6.1.141 System Software Resources

| **Device**| **Driver Source Code Location in the Kernel**| **Device Name**|
|----------|----------|----------|
| LCD Backlight Driver| drivers/video/backlight/pwm\_bl.c| /sys/class/backlight|
| USB Interface:| drivers/usb/storage/|
| USB Mouse| drivers/hid/usbhid/| /dev/input/mice|
| Ethernet| drivers/net/ethernet/stmicro/stmmac|
| SD/micro TF card driver| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/block/mmcblk1pX|
| EMMC Driver| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/block/mmcblk2pX|
| OV13850| drivers/media/i2c/ov13850.c| /dev/videoX|
| LCD controller| drivers/gpu/drm/rockchip/rockchip\_drm\_vop.c|
| MIPI CSI| drivers/phy/rockchip/phy-rockchip-mipi-rx.c|
| MIPI DSI| drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c|
| LCD touch driver| drivers/input/touchscreen/gt9xx/\*   drivers/input/touchscreen/edt-ft5x06.c| /dev/input/eventX|
| RTC Real - Time Clock| drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c| /dev/rtc0|
| Serial Port| drivers/tty/serial/8250/8250\_dw.c| /dev/ttySX|
| LED| drivers/leds/leds-gpio.c|
| I2S| sound/soc/rockchip/rockchip\_i2s.c|
| Audio Driver| sound/soc/codecs/rk3506\_codec.c| /dev/snd/|
| PMIC| drivers/mfd/rk808.c|
| Watchdog| drivers/watchdog/dw\_wdt.c|
| SPI| drivers/spi/spi-rockchip.c|

### 1.3 EMMC Storage Partition Table

The table below details the eMMC storage partition information for the Linux operating system (The size of a block is 512 bits when calculating.):

| **Partition Index**| **Name**| **Offset/Block**| **Size/Block**| **Content**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| N/A| loader| 0x00000000| 0x00003fc0| MiniLoaderAll.bin|
| 1| uboot| 0x00004000| 0x00002000| uboot.img|
| 2| env| 0x00006000| 0x00002000| env.img|
| 3| misc| 0x00008000| 0x00002000| misc.img|
| 4| boot| 0x0000a000| 0x00020000| boot.img|
| 5| recovery| 0x0002a000| 0x00040000| recovery.img|
| 6| logo| 0x0006a000| 0x00010000|
| 7| userdata| 0x0007a000| 0x00400000| userdata.img|
| 8| rootfs| 0x0047a000| Remaining Space| rootfs.img|

Use the fdisk -l command on the development board to see the partition size:

```bash
root@OK1126B-S-buildroot:~# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 122224640 sectors, 2336M
Logical sector size: 512
Disk identifier (GUID): 5d630000-0000-4973-8000-088a00005274
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 122224606

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K env
     3           32768           40959 4096K misc
     4           40960          172031 64.0M boot
     5          172032          434175  128M recovery
     6          434176          499711 32.0M logo
     7          499712         4694015 2048M userdata
     8         4694016       122224606 56.0G rootfs
Disk /dev/mmcblk0boot0: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot0 doesn't contain a valid partition table
Disk /dev/mmcblk0boot1: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot1 doesn't contain a valid partition table
```

## 2\. Fast Startup

### 2.1 Preparation Before Startup

+ 5V2A DC Power Cable
+ Debug port cable

![](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20251222131216628.png)

### 2.2 Debugging Serial Port Driver Installation

![](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20251222131216628.png)

OK1126B-S/ The OK1126BJ-S platform features a Type-C port for serial debugging and an onboard USB-to-UART chip. No additional USB-to-serial debugging tool is required, making the setup simple and convenient.

To install the driver, please use the driver package CH343SER.EXE provided in the \\” Table of Contents Tools directory of the software materials.

### 2.3 Serial Port Login

#### 2.3.1 Serial Connection Settings

**Note:**

+ **The serial terminal supports password-free login;**

+ **Settings: Baud rate 115200, 8 data bits, 1 stop bit, no parity/flow control;**

+ **Hardware Requirements:** 

  **Type-C for connecting PC and development board.**

+ **Software Requirements:  
A serial terminal application must be installed on the PC Windows. There are various terminal programs available, and you may choose any one you are familiar with.**

Take putty as an example to introduce the setting mode of the putty terminal:

Step1: Identify the serial port number assigned to the PC. In Device Manager, locate the serial port with the name ending in “SERIAL-”, which corresponds to the actual debug UART. For example, this may appear as COM61; the port number should be based on the actual one detected by the system. 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1718954727852_9c9b1c4a_e1c9_4599_b47f_7248258645a1.png)

Step2: Open the putty and set the serial line according to the com port of the computer used. The baud rate is 115200. 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382045048_1dd66fbc_ad3b_48fa_b4a5_0ba6c9caf9bb.jpeg)

Step 3: After completing the above settings, enter the COM port number used by your computer in the “Saved Sessions” field (as shown in the following figure, using COM61 as an example), and save the configuration. Subsequently, when reopening the serial port, simply click the saved port number to directly apply the settings.

#### 2.3.2 Serial Port Login

After the PC terminal software is configured, connect the PC and the development board using a serial cable, then power on the device after connecting the power supply. The startup information can be viewed through the terminal software.

The following startup message indicates a successful boot, and you can press Enter to create a new command line:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/image.png)

### 2.4 Network Login

OK1126B-S/ In addition to using the debug UART for login, the OK1126BJ-S supports SSH network login to the development board, as well as SFTP file transfer.. Take the development board IP 172.20.0.129 as an example to introduce the network tool. The network IP can be modified through ifconfig eth0 172.20.0.129, and then the development board and the PC are connected to the same switch or directly connected through the network cable.

#### 2.4.1 SSH

OK1126B-S/ The OK1126BJ-S development board supports SSH services, which are enabled automatically upon startup. Once the IP address is configured, the board can be used as an SSH server. You can use SSH to log in to the development board for development and debugging, and you can also use SCP for file transfer.

**Note: **  

- **When logging in, enter the username “root” and no password;**
- **The following tests were carried out using the development board’s IP address 172.20.0.129. Please modify it according to the actual situation. Use the following command in the serial debugging terminal to change the settings.**

```bash
root@OK1126B-S-debian12:~# nmcli con modify eth0 ipv4.method manual ipv4.addresses 172.20.0.129/24 ipv4.gateway 172.20.0.1
root@OK1126B-S-debian12:~# nmcli con up eth0
```

You can log in using the ssh command via the Ubuntu terminal.

```bash
forlinx@ubuntu:~$ ssh root@172.20.0.129
The authenticity of host '172.20.0.129 (172.20.0.129)' can't be established.
ED25519 key fingerprint is SHA256:udJJdvcRWIu0FUoNFPndhpUJxIqnIvFH89mRhbS9/a0.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '172.20.0.129' (ED25519) to the list of known hosts.
Linux OK1126B-S-debian12 6.1.141 #5 SMP Mon Jun  8 08:28:08 UTC 2026 aarch64
```

You can also use other terminal programmes that support SSH logins, such as PuTTY. The setup procedure is as follows:

Open the PuTTY software and configure the following settings (please use your actual IP address): 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382045341_54e6afbd_db82_4adc_a27e_922cc3d8cb98.png)

#### 2.4.2 FTP

OK1126B-S/ The OK1126BJ-S development board supports FTP services, which are enabled automatically upon startup. Once the IP address is configured, the board can be used as an FTP server. The following describes how to utilize the FTP tool for file transfer.

Path: OK1126B-S/ OK1126BJ-S (Linux) User Data\\Tools\\

Install the file Zilla tool on windows and set it up as shown in the following figure.

**Note:** 

- **To use this function, please connect an Ethernet cable to the development board. Ensure that the host IP is configured in the same subnet as the client’s, guaranteeing both are on the same local area network. Use the credentials username: forlinx, password: forlinx to log in. Once logged in, you can upload, download, or delete files in the /home/forlinx/ directory of the filesystem;**

- **The following test uses the development board IP 172.20.0.129. Please modify it according to your actual network setup. You can change the IP in the debug serial terminal using the following command:**

```bash
root@OK1126B-S-debian12:~# nmcli con modify eth0 ipv4.method manual ipv4.addresses 172.20.0.129/24 ipv4.gateway 172.20.0.1
root@OK1126B-S-debian12:~# nmcli con up eth0
```

![image-20260727103315682](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20260727103315682.png)

![image-20260727103532430](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20260727103532430.png)

### 2.5 Screen Switch

The OK1126B-S/OK1126BJ-S supports two types of display interfaces: LCD and MIPI DSI. Currently, the display switching can be controlled in two ways: 1. Dynamic control via the U-Boot menu; 2. Static control specified in the kernel device tree.

#### 2.5.1 Dynamic Control via U-Boot Menu

This method allows you to switch between supported display screens without recompiling or re-flashing the system.

During the U-Boot auto-boot process, pressing Ctrl+C on the serial terminal will bring up the control options.

```bash
Hit key to stop autoboot('CTRL+C'):  0
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type:mipi
3:Ethernet type: rgmii_phy
4:Change kernel loglevel( level 1 )
---------------------------------------------
```

You can choose between two types of screen: MIPI-DSI and RGB. Press the corresponding option to toggle the setting on or off.

| **Terminal Input**| **Screen Selection Parameter**| **Parameters Meaning **|
|:----------:|:----------:|:----------:|
| 0| Exit| Return to the previous menu|
| 1| Reboot| Restart|
| 2| Ethernet type: rgmii\_phy| Switch between rgmii\_phy (Gigabit PHY) and fephy (100 Mbit/s PHY)|
| 3| Display type:mipi| Enable MIPI-DSI/RGB screen output|
| 4| Change kernel loglevel( level 1 )| Toggle kernel print level 1 or 7|

Pressing digit 1 will initiate the restart operation, and the screen option in the U-Boot phase will take effect after reboot.

After selecting the screen, you can also press the reset button on the development board to restart, and the settings will take effect after the system restarts.

#### 2.5.2 Kernel Device Tree Specification

This method does not require a serial terminal connection. The system image is configured with the default desired settings, making it suitable for mass production. However, manual modification of the device tree is required, followed by regeneration of the system image.

**Note: This method takes precedence over the U-Boot screen selection. After modifying the device tree, the U-Boot screen selection will no longer be effective.**

The device tree path is: kernel/arch/arm64/boot/dts/rockchip/OK1126B-S-common.dtsi

In the kernel source code, open the device DTSI file and locate the following node:

The node is disabled by default and needs to be changed to "okay" to enable it. Modify according to the screen requirements.

For example:

Turn on the RGB screen and change the property to “rgb”.

 ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382045720_ebacc5d4_e15c_481a_bec4_90452b9d16d9.png)

After saving, recompile to generate the image.

For MIPI screens, there are many types, and the existing timing and control words may not meet the requirements. You may need to manually modify the display-timings under the DSI node. However, any display-related node's status property should be handled as per the default settings, as the program will automatically control it.

### 2.6 System Shutdown

In general, you can directly power off the system. However, if operations such as data storage or functional usage are in progress, avoid cutting power abruptly to prevent irreversible file damage, which may require re-flashing the firmware. To ensure all data is fully written, you can execute the sync command to complete data synchronization before powering off.

**Note: For products based on the SoM design, if unexpected power loss occurs during use, leading to system shutdown issues, power loss protection measures can be incorporated into the design.**

## 3\. OK1126B-S Platform Interface Function Testing

This section primarily explains how to use the development board’s desktop operating system and the Qt interface; the test programme is provided for reference only, and users should adapt it to their specific circumstances.

Qt Version:`Qt5.15.11`

️ Path to the executable file on the development board: `/usr/bin/*`

️ Path to the source code of the executable file: `User Profile \ 5-Routines and Patches \ QT _ demos.`

️ Test program source code paths: `SDK root directory/debian/packages-forlinx/app/forlinx/forlinx\_debian\_qt`

#### 3.1 Desktop Function Testing

The Debian system is a desktop operating system developed by Forlinx based on Debian 12. It is fully compatible with Debian 12 and supports tools such as apt-get, making it more user-friendly than more traditional Linux systems.

After booting, the development board will display the following desktop: ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048341820_e59cd1ec_2ad4_4680_ad6e_ae836300e03d.png)

#### 3.1.1 Virtual Keyboard Testing

In the desktop environment, the Onboard virtual keyboard plugin has been installed on the OK1126B running Debian to enable users to type without a physical keyboard. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048374807_fa2c5e52_84fe_466f_a911_5310c0496780.png)

Tap the icon in the bottom-left corner, select “Universal Access”, then tap the “Onboard” button. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048447313_2d4d643e_d54f_46fb_8ac6_703603fdb428.png)

#### 3.1.2 Network Configuration Test

The OK1126B board starts up with a static IP address configured by default. To set the IP address for the eth0 interface, follow these steps:

Right-click the network icon in the bottom-right corner and click the “Edit Connections” button. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048692574_b3adaf6f_df43_4904_ab80_a3bcd6f7cdee.png)

Double-click the network card you wish to modify. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048726943_d4daf43d_3b6d_4189_8bcb_6c5904712f15.png)

Taking eth0 as an example, proceed to the network settings interface. Click the “IPv4” tab. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048940069_5a98ba62_b2bf_479b_9c3f_e210bcd99fa9.png)

Configure your IP address according to the following steps, or choose automatic connection mode if preferred. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783048961467_5acc1647_8f4c_4cde_aa26_86c8e4b6a5ee.png)

After saving the settings, restart the board to apply the new IP address.

#### 3.1.3 WiFi Test

The OK1126B platform supports an onboard 6221ASRC (RTL8821CS) Wi-Fi/Bluetooth combo module.

Left-click the network icon in the bottom-right corner.  ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783049474000_80198892_c61a_4d88_a971_dd4dc57c572f.png)

Select the Wi-Fi network you wish to connect to, enter the password, and click Connect. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783049498699_04b72e60_f33e_40a6_97dd_b9979c88d8d2.png)

#### 3.1.4 Bluetooth Test

The OK1126B platform supports an onboard 6221ASRC (RTL8821CS) Wi-Fi/Bluetooth combo module.

Left-click the Bluetooth icon in the bottom-right corner. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783049624546_a77b56ac_439e_4aaf_9b60_0b44808484cc.png)

Click the “Search” button in the top-left corner on the adapter page to scan for devices.

Before each search, please toggle the Bluetooth function by clicking the Bluetooth icon in the top-right corner twice (off and on again). ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783049880188_79aa1d35_9f83_48af_9f20_4f6f533c64c7.png)

After clicking “Search”, the scanned Bluetooth devices will be displayed on the page. Right-click the device you wish to connect to and select “Connect”. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783050081717_a83889e8_6a4b_405e_94d2_44bbc2b0ba7f.png)

A connection dialog will appear. Click “Confirm” and simultaneously perform the pairing operation on your mobile device.

Board Receiving File Test

On the mobile device, choose “Send via Bluetooth” to transfer a file to the development board. The received file will be saved in the /tmp directory on the board. 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783050763358_a0df993d_fcd0_4486_abdf_10fd468a47d7.png)

Board Sending File Test

Left-click “Send File” on the page, then select the file to send. ![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783059627669_c09b9585_6026_41e9_9668_1da1a89f8dec.png)

Accept the file on the mobile device to complete the file transfer from the development board. 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783059694926_59bb1036_6fdc_4f03_8f36_508c35686812.png)

### 3.2 Qt-related Tests

Qt5.15.8 is pre-installed in the default file system of OK1126B. This section will use Qt test programs. To run Qt test programs, open a terminal by entering commands from the desktop applications.

Click the icon in the bottom-left corner, select “System Tools”, and then click the XTerm button to open a command-line terminal.

#### 3.2.1 UART Test

Three serial ports UART0, UART2 and UART5 are led out from the carrier board, wherein UART0 is a debugging serial port and UART2 is a Bluetooth serial port. The user-available serial port is UART5, which operates at TTL levels. On the development board, its corresponding device name is ttyS5.

| **<font style="color:rgb(51, 51, 51);">UART</font>**| **Device Nodes**| **<font style="color:rgb(51, 51, 51);">Description</font>**|
|:----------|:----------|:----------|
| UART0| /dev/ttyFIQ0| Debug serial port; cannot be used directly for this test|
| UART2| /dev/ttyS2| Bluetooth Port|
| UART5| /dev/ttyS5| TTL level, led out via P16, can be used for test.|

For example, to test the UART5 port, short the UART5 transmit and receive pins as indicated in the development board schematic, corresponding to pins 8 and 10 on P16.

After short connection, launch the test program.

```bash
forlinx@OK1126B-S-debian12:~# sudo fltest_qt_terminal
![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783329569787_f95c40ae_6246_445d_be14_3878519ed60b.png)
```

Click the Settings button in the top-left corner to configure the serial port parameters, as shown in the figure below:

After setting the serial port parameters, click the connect button in the upper left corner. At this point, the test program can perform data transmission and receiving tests;

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783329679207_acc5d73c_5930_48b7_b637_9b87fc60012f.png)

You can enter text in the black area; each character entered will be displayed twice. This is because the TX and RX pins are short-circuited, so the characters sent out are received back.

#### 3.2.2 RTC Test

The OK1126B platform features an on-board RX8010 RTC chip; use the following command to launch the test application

```bash
forlinx@OK1126B-S-debian12:~# sudo fltest_qt_rtc
```

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783330076049_3f323983_3003_4355_9481_cee609bdca8e.png)

Click the “Set” button, change the time, then click “Save”.

Powering off and restarting the system will allow you to verify whether the data has been written to the RTC.

#### 3.2.3 Watchdog Test

This application is designed to test whether the watchdog function is working correctly. Use the following command to open the test application

```bash
forlinx@OK1126B-S-debian12:~# sudo fltest_qt_watchdog
```

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1783329812507_cba82d23_cb1e_4964_b37d_e26f686469ec.png)

Check the “feed dog” option and click the “open watchdog” button. This will activate the watchdog function, and the program will continue to feed the dog. Normally, the system should not restart during this time. 

If you uncheck the “feed dog” option and then click the “open watchdog” button, the watchdog function will still be activated, but the program will not feed the dog. After activating the watchdog for about 10 seconds, the system will restart, indicating that the watchdog function is working properly.

## 4\. OK1126B-S Command Function Test

The OK1126B-S/OK1126BJ-S platform comes with a rich set of command-line tools for users to utilize.

Qt Version:`Qt5.15.11`

️Path to the executable file on the development board:`/usr/bin/*`

️Path to the source code of the executable file:`User Profile \ 5-Routines and Patches \ QT _ demos'

️Test program source code paths:

`SDK root directory/debian/packages-forlinx/app/forlinx/forlinx\_cmd`

### 4.1 System Information Query

View kernel and CPU information:

```bash
root@OK1126B-S-debian12:/# uname -a
Linux OK1126B-S-debian12 6.1.141 #23 SMP Fri Jul 24 06:01:36 UTC 2026 aarch64 GNU/Linux
```

View environment variable information:

```bash
root@OK1126B-S-debian12:/# env
GST_V4L2_PREFERRED_FOURCC=NV12:YU12:NV16:YUY2
GST_VIDEO_CONVERT_PREFERRED_FORMAT=NV12:NV16:I420:YUY2
GST_GL_PLATFORM=egl
COGL_DRIVER=gles2
PLAYBIN2_PREFERRED_VIDEOSINK=kmssink
GST_V4L2_USE_LIBV4L2=1
WESTON_DRM_MIN_BUFFERS=2
WL_OUTPUT_VERSION=3
GST_INSPECT_NO_COLORS=1
PULSE_HOME=/userdata/.pulse
WESTON_DRM_KEEP_RATIO=1
GST_DEBUG_NO_COLOR=1
PWD=/
SYSTEMD_EXEC_PID=1434
HOME=/root
LANG=C.UTF-8
ADB_TCP_PORT=5555
WESTON_FREEZE_DISPLAY=/tmp/.freeze_weston
INVOCATION_ID=cb3a6095a3bf4320b68061b65f0dc80b
GST_V4L2SRC_DEFAULT_DEVICE=/dev/video-camera0
AUTOVIDEOSINK_PREFERRED=kmssik
USB_FW_VERSION=0x0310
TERM=vt220
USER=root
XSERVER_FREEZE_DISPLAY=/tmp/.freeze_xserver
ADBD_SHELL=/bin/bash
GST_V4L2SRC_RK_DEVICES=_mainpath:_selfpath:_bypass:_scale
DISPLAY=:0
WESTON_DRM_MIRROR=1
SHLVL=1
GST_VIDEO_FLIP_USE_RGA=1
USB_FUNCS=adb
WESTON_DISABLE_ATOMIC=1
USB_MANUFACTURER=Rockchip
USB_PRODUCT=rk3xxx
GST_GL_API=gles2
XDG_RUNTIME_DIR=/var/run
USB_VENDOR_ID=0x2207
GST_VIDEO_CONVERT_USE_RGA=1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
QTWEBENGINE_CHROMIUM_FLAGS=--no-sandbox --disable-es3-gl-context --ignore-gpu-blacklist --ignore-gpu-blocklist --enable-accelerated-video-decode
GST_V4L2SRC_MAX_RESOLUTION=3840x2160
GST_VIDEO_DECODER_QOS=0
_=/usr/bin/env
```

### 4.2 Frequency Test

The RV1126B utilises a quad-core Cortex-A53 processor; the SoM numbers and frequency adjustment rules are as follows:

| SoM Type| SoM ID| Tuning Strategy|
|----------|----------|----------|
| Cortex-A53| cpu0 ~ cpu3| Share the same frequency domain; adjusting the frequency of any one core causes the other three cores to change synchronously.|

 The types of CPU frequency governors supported by the current kernel:

```bash
root@OK1126B-S-debian12:~# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
interactive conservative ondemand userspace powersave performance schedutil
```

| Tuning Strategy| Description|
|----------|----------|
| interactive| Designed specifically for mobile devices (such as Android).|
| ondemand| Adjusts dynamically based on current CPU utilisation.|
| conservative| Similar to ondemand, but with smoother frequency adjustments. The frequency increases or decreases gradually, rather than jumping directly to the maximum.|
| userspace| Delegate control of the frequency to the user-space programme.|
| powersave| Set the CPU frequency to the minimum.|
| performance| Set the CPU frequency to the maximum.|
| schedutil| It is tightly coupled with the Linux scheduler (such as CFS) and uses the CPU utilisation information (util\_avg) provided by the scheduler to dynamically adjust the frequency.|

Among these, userspace represents user mode, which allows other user programs to adjust CPU frequency in this mode.

View the frequency scaling levels supported by the current CPU.

Commercial-grade CPU (RV1126B):

```bash
root@OK1126B-S-debian12:~# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
594000 816000 1008000 1200000 1296000 1416000 1512000 1608000
```

Industrial-grade CPU（ RV1126BJ）：

```bash
root@OK1126B-S-debian12:~# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
594000 816000 1008000 1200000 1296000
```

Set to userspace mode and modify the frequency to 1296000:

```bash
root@OK1126B-S-debian12:~# echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@OK1126B-S-debian12:~# echo 1296000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed
```

To view the current frequency after modification:

```bash
root@OK1126B-S-debian12:~# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
1296000
```

### 4.3 Temperature Test

To view temperature values:

```bash
root@OK1126B-S-debian12:~# cat /sys/class/thermal/thermal_zone0/temp
40630
```

The temperature value is 40℃.

### 4.4 DDR Bandwidth Test

```bash
root@OK1126B-S-debian12:~# memtester 1024M 1
memtester version 4.5.1_20250326 (32-bit)
Copyright (C) 2001-2020 Charles Cazabon.
Licensed under the GNU General Public License version 2 (only).

pagesize is 4096
pagesizemask is 0xfffffffffffff000
want 1024MB (1073741824 bytes)
got  1024MB (1073741824 bytes), trying mlock ...locked.
testing from phyaddress:0x5183b000
get chip name: rv1126b
no available chip info, using default maping
get ddr bw: bw_x32
io bw x32
Loop 1/1:
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


*************************************************************
memtester result:
Log: had found 0 failures.

Status: PASS.

*************************************************************
```

### 4.5 Serial Port Test

The OK1126B-S / OK1126BJ-S UART ports support odd/even parity, 8 data bits, and 1 stop bit.

Before performing a serial loopback test, ensure the required serial port is shorted. According to the carrier board schematic, three UART ports are exposed: UART0, UART2, and UART5.

UART0 is designated as the debug console.

UART2 is used for Bluetooth communication. The user-available serial port is UART5, which operates at TTL levels. On the development board, its corresponding device name is ttyS5.

| UART| **Device Nodes**| Description|
|----------|----------|----------|
| UART0| /dev/ttyFIQ0| The serial port cannot be directly used for this test.|
| UART2| /dev/ttyS2| Bluetooth Port|
| UART5| /dev/ttyS5| TTL level, P16 led out, can be used for test.|

For example, to test the UART5 port, short the UART5 transmit and receive pins as indicated in the development board schematic, corresponding to pins 8 and 10 on P16.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382052537_b3fd0748_d05b_47f6_b66a_a27be1378bc9.png)

Once the shorting is complete, open the test program.

```bash
root@OK1126B-S-debian12:/# fltest_uarttest -d /dev/ttyS5
Welcome to uart test
Send test data:
forlinx_uart_test.1234567890...
Read Test Data finished,Read:
forlinx_uart_test.1234567890...
```

If the following content is printed on the serial port after execution, it indicates that the serial communication is working normally.

### 4.6 SPI Test

One SPI interface is routed out from the carrier board. By default, the software configures it as spidev for loopback testing. During testing, please refer to the schematic diagram and short-circuit MOSI (PIN19) to MISO (PIN21), then carry out the test using the commands below.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382052628_ca18f828_c09d_4dd7_b03e_54d149e28275.png)

Without shorting SPI1\_MOSI to SPI1\_MISO, execute the test command:

```bash
root@OK1126B-S-debian12:~# fltest_spidev_test -D /dev/spidev1.0
spi mode: 0
bits per word: 8
max speed: 500000 Hz (500 KHz)

FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF
```

Short-circuit SPI1\_MOSI and SPI1\_MISO, then execute the test command:

```bash
root@OK1126B-S-debian12:~# fltest_spidev_test -D /dev/spidev1.0
spi mode: 0
bits per word: 8
max speed: 500000 Hz (500 KHz)

FF FF FF FF FF FF
40 00 00 00 00 95
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
DE AD BE EF BA AD
F0 0D
```

### 4.7 Watchdog Test

The watchdog is a critical feature in embedded systems for system recovery. The device node for the watchdog on OK1126B-S/OK1126BJ-S is /dev/watchdog0. This test provides two testing programs. You can choose one based on the actual situation.

+ Start the watchdog, set the reset time to 10 seconds, and feed the dog at regular intervals.

Use fltest\_watchdog; this command enables the watchdog and performs a feed the dog operation, so the system will not reboot.

```bash
root@OK1126B-S-debian12:~# fltest_watchdog
Watchdog Ticking Away!
```

When using Ctrl+C to end the test program, feeding stops, and the watchdog remains open. After 10s, the system resets.

If you do not want a reset enter the command to close the watchdog within 10s after ending the program:

```bash
root@OK1126B-S-debian12:~# fltest_watchdog -d
Watchdog card disabled.   //Turn off the watchdog
```

+ Start the watchdog, set the reset time to 10s, and do not feed it.

Execute the command fltest\_watchdogrestart. This command will enable the watchdog but will not perform a watchdog feed; the system will reboot after 10 seconds.

```bash
root@OK1126B-S-debian12:~# fltest_watchdog -e
Watchdog card enabled.
```

**Note: Regarding the timeout mechanism: The timeout value set from user space is not directly passed to the hardware. The Watchdog driver internally maintains a table of 16 preset timeout values. The driver selects the closest value from this table as the actual timeout according to the following rules:**

| Request timeout| Watchdog final timeout.|
|----------|----------|
| timeout\_request > 89| timeout\_set = timeout\_request|
| 44 \< timeout\_request \<= 89| timeout\_set = 89|
| 22 \< timeout\_request \<= 44| timeout\_set = 44|
| 11 \< timeout\_request \<= 22| timeout\_set = 22|
| 5 \< timeout\_request \<= 11| timeout\_set = 11|
| 2\< timeout\_request \<= 5| timeout\_set = 5|
| timeout\_request = 2| timeout\_set = 2|
| timeout\_request = 1| timeout\_set = 1|

Therefore, the application request time-out is 10 seconds, whilst the actual final watchdog reset time is 11 seconds.

### 4.8 WiFi Test

The OK1126B-S/OK1126BJ-S supports the on-board 6221ASRC (RTL8821CS) by default, and supports both STA and AP modes.

#### 4.8.1 STA Modes

Before using the Wi-Fi functionality, follow these steps to configure it:

Step 1: Assuming the Wi-Fi hotspot SSID is ChinaNet-Jvgv and the password is asdasd123,

input the following command in the terminal:

```bash
root@OK1126B-S-debian12:~# fltest_wifi.sh -i wlan0 -s "ChinaNet-Jvgv" -p "asdasd123"
```

In the above command:

| **Parameter**| **Meaning**|
|----------|----------|
| -i| The parameters used vary depending on the Wi-Fi module; specify the Wi-Fi device name|
| -s| The actual Wi-Fi hotspot name to connect to.|
| -p| The parameter following -p refers to the password of the actual Wi-Fi hotspot to connect to; if the hotspot has no password, write NONE after -p.|

Step 2: Check if external network access is available by pinging the internet. Input the following command in the terminal:

```bash
root@OK1126B-S-debian12:~# ping www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) 56(84) bytes of data.
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=1 ttl=53 time=43.0 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=2 ttl=53 time=33.9 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=3 ttl=53 time=37.2 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=4 ttl=53 time=43.7 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=5 ttl=53 time=34.9 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=6 ttl=53 time=45.9 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=7 ttl=53 time=35.3 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=8 ttl=53 time=35.6 ms
64 bytes from 211.149.226.120 (211.149.226.120): icmp_seq=9 ttl=53 time=37.3 ms
```

To stop, press Ctrl+C. If the ping is successful, it indicates that the network is now working properly.

#### 4.8.2 AP Modes

Before using the hotspot functionality, ensure that the network interface is connected and can access the internet. 

```bash
root@OK1126B-S-debian12:~# fltest_hostap.sh -i wlan0 -s "OK1126B-AP" -p "123456789"
net.ipv4.ip_forward = 1
Device 'wlan0' successfully activated with 'db1f998b-24e8-4132-840f-e4f027281ceb'.
Hint: "nmcli dev wifi show-password" shows the Wi-Fi name and password.
```

| **Parameter**| **Meaning**|
|----------|----------|
| -i| The parameters used vary depending on the Wi-Fi module; specify the Wi-Fi device name|
| -s| Create the name of the Wi-Fi hotspot.|
| -p| Create the password of the Wi-Fi hotspot.|

WiFi hotspot: OK1126B-AP

Password: 123456789

At this point, a mobile phone can connect to this hotspot and access the internet.

### 4.9 Bluetooth Testing

The 6221ASRC (RTL8821CS) on the OK1126B-S/OK1126BJ-S carrier board integrates Bluetooth functionality. This section demonstrates how to transfer files between a mobile phone and the development board via Bluetooth.

Bluetooth configuration:

```bash
root@OK1126B-S-debian12:~# bluetoothctl // Open the BlueZ Bluetooth utility
Agent registered
[bluetooth]# power on                    // Power on the Bluetooth device
Changing power on succeeded
[bluetooth]# pairable on                 // Enable pairing mode
Changing pairable on succeeded
[bluetooth]# agent on                    // Start the agent
Agent is already registered
[bluetooth]# default-agent               // Set the current agent as the default
Default agent request successful
[bluetooth]# discoverable on             // Enable discoverable mode
Changing discoverable on succeeded
[CHG] Controller 58:E4:EB:56:C7:FB Discoverable: yes
[CHG] Device C8:BC:9C:7D:CA:3C Connected: yes
```

Board Passive Pairing (Standard pairing process).

Turn on Bluetooth search on the mobile phone; a device named`OK1126B-S-debian12`will appear. Select it to pair.

The print information on the development board is as follows. Enter "yes":

```bash
[bluetooth]# discoverable on
hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn
hci0 new_settings: powered connectable discoverable bondable ssp br/edr le secure-conn
Changing discoverable on succeeded
[CHG] Controller 58:E4:EB:88:7D:D3 Discoverable: yes
hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn
[CHG] Controller 58:E4:EB:88:7D:D3 Discoverable: no
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 14
```

View and remove connected devices:

```bash
[Pura 70]# devices
Device C8:BC:9C:7D:CA:3C Pura 70
[Pura 70]# remove C8:BC:9C:7D:CA:3C
[DEL] Player /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/player0 [default]
[DEL] Transport /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/fd0
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep1
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep2
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep3
hci0 C8:BC:9C:7D:CA:3C type BR/EDR disconnected with reason 2
[CHG] Device C8:BC:9C:7D:CA:3C ServicesResolved: no
Device has been removed
[CHG] Device C8:BC:9C:7D:CA:3C Connected: no
[DEL] Device C8:BC:9C:7D:CA:3C Pura 70
```

Development board receives files

After successful pairing, you can send a file from the mobile phone to the OK1126B development board via Bluetooth.

The received files are saved in the`/tmp/`.

```bash
root@OK1126B-S-debian12:~# ls /tmp/*.jpg
/tmp/IMG_20260620_084902_1.jpg
```

Send files from the development board.

You can send a file from the OK1126B development board to a mobile phone. Test as follows:

```bash
root@OK1126B-S-debian12:~# fltest_obexctl.sh
[NEW] Client /org/bluez/obex
[obex]# connect C8:BC:9C:7D:CA:3C
Attempting to connect to C8:BC:9C:7D:CA:3C
[NEW] Session /org/bluez/obex/client/session0 [default]
[NEW] ObjectPush /org/bluez/obex/client/session0
Connection successful
[C8:BC:9C:7D:CA:3C]# send /userdata/piano2-CoolEdit.mp3
Attempting to send /userdata/piano2-CoolEdit.mp3 to /org/bluez/obex/client/session0
[NEW] Transfer /org/bluez/obex/client/session0/transfer0
Transfer /org/bluez/obex/client/session0/transfer0
        Status: queued
        Name: piano2-CoolEdit.mp3
        Size: 101760
        Filename: /userdata/piano2-CoolEdit.mp3
        Session: /org/bluez/obex/client/session0
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: active
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 8024 (@8KB/s 00:11)
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 56498 (@48KB/s 00:00)
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: complete
[DEL] Transfer /org/bluez/obex/client/session0/transfer0
```

**Note: For certain manufacturers' phones, received files must include a file extension; otherwise, they may be rejected by the Android system. Therefore, please try to use files with extensions for testing.**

### 4.10 RTC Function Test

Mainly use the date and hwclock tools to set the software and hardware time. Test whether the software clock is synchronized with the RTC clock when the development board is powered off and then powered on. (Note: Ensure that a button battery is installed on the board and the battery voltage is normal.)

![image-20260727115255234](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20260727115255234.png)

```bash
root@OK1126B-S-debian12:~# date -s "2026-7-9 10:50:00"     // Set system time
Thu Jul  9 10:50:00 UTC 2026
root@OK1126B-S-debian12:~# date                             // Read system time
Thu Jul  9 10:50:04 UTC 2026
root@OK1126B-S-debian12:~# hwclock -w -u                    // Write system time (in UTC) to hardware RTC
root@OK1126B-S-debian12:~# hwclock -r                       // Read hardware RTC time
2026-07-09 10:50:13.075003+00:00
// Reboot the development board. After the system boots, read the system time to check if it matches the previously set time.
// Important: Do not connect to the external network during this test, otherwise automatic time synchronization may interfere.
root@OK1126B-S-debian12:/# date
Thu Jul  9 10:51:08 UTC 2026
```

### 4.11 USB 2.0/USB3.0

The OK1126B-S/OK1126BJ-S development board features one USB 2.0 and one USB 3.0 port, both of which support hot-plugging; you can connect USB devices to either of the on-board USB host ports. In addition, it features a Type-C port, which can be used for flashing the device in Device mode.

The USB 3.0 interface is multiplexed with the OTG functionality. Please switch modes using the S2 DIP switch while the system is powered off:

Setting S2 to OFF: Activates Device (Gadget) Mode. This mode allows connection to a PC via a Type-C cable for firmware flashing.

Setting S2 to ON: Activates Host Mode. In this mode, both the USB 3.0 and USB 2.0 interfaces can function as a host (e.g., for mounting USB drives).

The following demonstration will use the USB 3.0 interface in Host Mode to mount a USB drive as an example:

![image-20260727134119243](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20260727134119243.png)

The USB 3.0 and OTG functions are multiplexed and switched via a DIP switch. When using the USB 3.0 interface in host mode (e.g., for a USB drive), please ensure the S2 switch is in the ON position.

The terminal will print information about the USB drive. Since there are various USB drives, the displayed information may vary.

Step 1: After booting the development board, connect a USB flash drive to one of the USB host interfaces on the development board;

Enter the following command to view the kernel logs.

```bash
root@OK1126B-S-debian12:~# dmesg | tail -10
```

Serial port information:

```bash
root@OK1126B-S-debian12:~# dmesg | tail -10
[  994.443260] scsi 0:0:0:0: Direct-Access      USB      SanDisk 3.2Gen1 1.00 PQ: 0 ANSI: 6
[  994.455433] sd 0:0:0:0: [sda] 60125184 512-byte logical blocks: (30.8 GB/28.7 GiB)
[  994.456426] sd 0:0:0:0: [sda] Write Protect is off
[  994.456439] sd 0:0:0:0: [sda] Mode Sense: 43 00 00 00
[  994.456822] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
[  994.462675]  sda: sda1
[  994.463234] sd 0:0:0:0: [sda] Attached SCSI removable disk
[   56.013567] RTW: rtl8821c_fillh2ccmd(wlan0): id=0x60 buf= 0x08 0x00 0x00 0x00 0x00
[   56.013759] RTW: [H2C] - 60 08 00 00  00 00 00 00
```

Step 2: Check the mount directory:

```bash
root@OK1126B-S-debian12:/# mount | grep "sda1"
/dev/sda1 on /run/media/sda1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

You can see that /run/media/sda1 is the mount path for the USB storage device.

Step 3: View the contents of the USB flash drive:

```bash
root@OK1126B-S-debian12:~# ls -l /run/media/sda1/
drwxrwx--- 3 root disk      8192 Mar  4  2021  Music
```

Before performing read/write tests, ensure the CPU frequency is noted.

Write test:

```bash
root@OK1126B-S-debian12:~# dd if=/dev/zero of=/run/media/sda1/test.bin bs=1M count=100 conv=fsync oflag=direct
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 7.02256 s, 14.9 MB/s
//Write speeds are dependent on the specific storage device.
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK1126B-S-debian12:~# dd if=/run/media/sda1/test.bin of=/dev/null bs=1M iflag=direct
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 4.86827 s, 21.5 MB/s
```

After using the USB drive, use umount to unmount it before unplugging:

```bash
root@OK1126B-S-debian12:~# umount /run/media/sda1
```

**Note: Exit the mount path before unplugging the USB drive.**

### 4.12 Backlight Adjustment

The brightness range for the backlight is (0–255), where 255 indicates the highest brightness and 0 turns off the backlight. Enter the following command in the terminal after system startup for backlight testing.

Check the current screen backlight value:

```bash
root@OK1126B-S-debian12:~# cat /sys/class/backlight/backlight-dsi/brightness	//View the MIPI-DSI screen backlight value
200
root@OK1126B-S-debian12:~# cat /sys/class/backlight/backlight-lcd/brightness	//View RGB screen backlight values\n
200
```

Turn off the backlight:

```bash
root@OK1126B-S-debian12:~# echo 0 > /sys/class/backlight/backlight-dsi/brightness      //Turning off the MIPI-DSI screen backlight
root@OK1126B-S-debian12:~# echo 0 > /sys/class/backlight/backlight-lcd/brightness      //Turn off the RGB screen backlight
```

Turn on the LCD backlight:

```bash
root@OK1126B-S-debian12:~# echo 255 > /sys/class/backlight/backlight-dsi/brightness      //Turning on the MIPI-DSI screen backlight
root@OK1126B-S-debian12:~# echo 255 > /sys/class/backlight/backlight-lcd/brightness      //Turn on the RGB screen backlight
```

### 4.13 TF Test

**Note: The TF card is mounted at /run/media/ and supports hot-swapping.**

Check the mount directory:

```bash
root@OK1126B-S-debian12:~# mount | grep mmcblk1
/dev/mmcblk1p1 on /run/media/mmcblk1p1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

Write test:

```bash
root@OK1126B-S-debian12:~# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=100 conv=fsync
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 2.86775 s, 36.6 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK1126B-S-debian12:~# dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 1.15089 s, 91.1 MB/s
```

After using the TF card, you need to use umount to unmount the TF card before ejecting it.

```bash
root@OK1126B-S-debian12:~# umount /run/media/mmcblk1p1
```

**Note: Exit the TF card mount path before removing the TF card.**

### 4.14 EMMC Test

OK1126B-S/ The eMMC on the OK1126BJ-S platform operates by default in HS400 mode at a clock speed of 200 MHz. Below is a brief test of the eMMC’s read and write speeds, using the ext4 file system as an example.

Write test:

```bash
root@OK1126B-S-debian12:~# dd if=/dev/zero of=/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 6.75077 s, 77.7 MB/s

```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK1126B-S-debian12:~# dd if=/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 2.93138 s, 179 MB/s
```

### 4.15 Ethernet Configuration

The OK1126B-S/OK1126BJ-S is equipped with one Gigabit Ethernet port and one 100 Mbps Ethernet port; however, as the main controller has only one Ethernet controller, only one port can be used at a time. The Gigabit Ethernet port is selected by default; you can switch between the 100 Mbps and Gigabit Ethernet ports via the U-Boot menu. For specific instructions, please refer to section 2.5.1.

#### 4.15.1  Methods for Setting a Static IP Address

**Note: This method sets a static network IP. Once configured, the network interface card (NIC) should obtain the corresponding network IP, which indicates normal operation. If the network is unreachable (ping fails), ensure that multiple NIC in the same subnet are configured correctly. Adjust the routing based on the scenario or use different subnets by default.**

Development board IP: 192.168.0.232

Router IP: 192.168.0.1

Subnet mask: 255.255.255.0

The Ethernet interface is managed by NetworkManager. You can configure a static IP address using either of the following methods:

Enter the following command to set a static IP address for eth0:

```bash
root@OK1126B-S-debian12:~# nmcli connection modify "eth0" ipv4.method manual ipv4.addresses 192.168.0.232/24 ipv4.gateway 192.168.0.1 ipv4.dns "114.114.114.114 8.8.8.8"
```

Reactivate the link:

```bash
root@OK1126B-S-debian12:~# nmcli connection down "eth0"   //Disable the eth0 link
root@OK1126B-S-debian12:~# nmcli connection up "eth0"     //Restart the eth0 connection
```

Set the static IP, or modify it by editing the eth0.nmconnection file: 

The path of the eth0 configuration file is:/etc/Network Manager/system-connections/eth0.nmconnection, and the file contents are as follows:

```bash
[connection]
id=eth0
type=ethernet
interface-name=eth0
autoconnect=true

[ipv4]
method=manual
address1=192.168.0.232/24,192.168.0.1
dns=114.114.114.114;8.8.8.8;

[ipv6]
method=ignore
```

| **Parameter**| **Meaning**|
|:----------:|----------|
| id| The name of the connection, and the name used when reloading and activating.|
| type| Connection type; in this case, ethernet refers to Ethernet.|
| interface-name| Bound NIC device name|
| autoconnect| Does this connection start automatically when power is available|
| method| Methods for obtaining an IPv4 address. Manual is for manual operation and auto is automatic operation.|
| address1| IP address, in the format IP address/subnet mask, gateway|
| DNS| DNS server|

Once you have finished writing the configuration, load the configuration file and apply this configuration.

```bash
root@OK1126B-S-debian12:~# chmod 600 /etc/NetworkManager/system-connections/eth0.nmconnection
root@OK1126B-S-debian12:~# chown root:root /etc/NetworkManager/system-connections/eth0.nmconnection
root@OK1126B-S-debian12:~# nmcli connection reload
```

Reactivate the link:

```bash
root@OK1126B-S-debian12:~# nmcli connection down "eth0"  //Disable the eth0 link
root@OK1126B-S-debian12:~# nmcli connection up "eth0"    //Restart the eth0 connection
```

#### 4.15.2 Automatic IP Acquisition

The default setting at the factory is to obtain an IP address automatically. After changing this to a static IP address as described above, if you wish to revert to automatic IP address acquisition, you can do so as follows:

Make changes via the command line:

```bash
root@OK1126B-S-debian12:~# nmcli connection modify "eth0" ipv4.method auto ipv4.addresses "" ipv4.gateway "" ipv4.dns ""
```

Reactivate the link:

```bash
root@OK1126B-S-debian12:~# nmcli connection down "eth0"   //Disable the eth0 link
root@OK1126B-S-debian12:~# nmcli connection up "eth0"     //Restart the eth0 connection
```

Make changes by editing the eth0.nmconnection file:

```bash
[connection]
id=eth0
type=ethernet
interface-name=eth0
autoconnect=true

[ipv4]
method=auto

[ipv6]
method=ignore
```

| **Parameter**| **Meaning**|
|:----------:|----------|
| id| The name of the connection, and the name used when reloading and activating.|
| type| Connection type; in this case, ethernet refers to Ethernet.|
| interface-name| Bound NIC device name|
| autoconnect| Does this connection start automatically when power is available|
| method| Methods for obtaining an IPv4 address. Manual is for manual operation and auto is automatic operation.|

```bash
root@OK1126B-S-debian12:~# chmod 600 /etc/NetworkManager/system-connections/eth0.nmconnection
root@OK1126B-S-debian12:~# chown root:root /etc/NetworkManager/system-connections/eth0.nmconnection
root@OK1126B-S-debian12:~# nmcli connection reload
```

Reactivation:

```bash
root@OK1126B-S-debian12:~# nmcli connection down "eth0"   //Disable the eth0 link
root@OK1126B-S-debian12:~# nmcli connection up "eth0"     //Restart the eth0 connection
```

### 4.16 Playback/Recording Test

The development board features one white XH2.54-2P socket (P12), capable of driving an 8Ω speaker with a maximum output power of 1.3W. Before conducting an audio playback test, please plug the speaker into the corresponding socket on the carrier board and use the following command to perform the test:

![image-20260727140912558](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/images/image-20260727140912558.png)

```bash
root@OK1126B-S-debian12:~# gst-play-1.0 /userdata/piano2-CoolEdit.mp3
//Speaker audio playback test
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:06.3 / 0:00:06.3
Reached end of play list.
root@OK1126B-S-debian12:~# arecord -c 2 -r 44100 -f cd mic.wav
//Recording test; press Ctrl + C to stop recording.
Recording WAVE 'mic.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
Aborted by signal Interrupt...
root@OK1126B-S-debian12:~# ls    //You will find the generated audio file in the current directory.
mic.wav
```

### 4.17 Sleep and Wake-Up Test

The OK1126B-S/OK1126BJ-S Linux platform supports sleep and wake-up functionality.

Short press the power button (PWRON) to enter sleep mode, and the following printout will appear:

```bash
root@OK1126B-S-debian12:~#
INFO:    BL31: v2.12(release):v2.12.0-84-gbe86983f3:derrick.huang, fwver: v1.13
INFO:    cfg=0x600, sleeptimes:1
INFO:    deep
INFO:    pmualive_32k
INFO:    dis_osc
INFO:    sleep_pin: 0x5 0x1
INFO:    io_0: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_2: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_3: iomux-0, pull-0, dir-0, lvl-0
INFO:    io_4: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_5: iomux-0, pull-1, dir-0, lvl-0
INFO:    io_6: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_7: iomux-0, pull-1, dir-0, lvl-0
INFO:    io_8: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_9: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_10: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_11: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_12: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_20: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_21: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_22: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_23: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_24: iomux-0, pull-2, dir-0, lvl-0
INFO:    io_25: iomux-0, pull-2, dir-0, lvl-0
INFO:    idle,pd(0x500,0x5)
INFO:    GPIO0: 0xffff 0xffff 0xffff 0xfffe 0x0 0xfee0e020
INFO:    IRQ_EN: 60 56 52 48 44 40 36 32 88 74 72 99 97 260
INFO:    IRQ_PED:
012aINFO:    rc_read_freq: 64980khz
bcde345678
INFO:    PMU0_PWR(0x0)
PMU1_PWR(0x2201) PMU1_WAKEUP_INT(0x10)
PMU2_BUS_IDLE_ST(0x700) PMU2_PWR_GT_ST(0x7)
PMU2_BUS_IDLE(0x8a0) PMU2_PWR_GT(0x0)
PMU1_CRU_PWR(0x1c3 0x1fe)
PMU1_DDR_PWR(0x6b 0x0)
PMU1_PLLPD(0xf)
a
Short press the power button to wake the device.
```

### 4.18 NPU Test

The OK1126B-S/OK1126BJ-S platform supports the NPU; you can use the following commands to test the NPU.

```bash
root@OK1126B-S-debian12:~# rknn_common_test  /usr/share/model/RV1126B/mobilenet_v1.rknn /usr/share/model/cat_224x224.jpg
rknn_api/rknnrt version: 2.3.2 (429f97ae6b@2025-04-09T09:09:27), driver version: 0.9.8
model input num: 1, output num: 1
input tensors:
  index=0, name=input, n_dims=4, dims=[1, 224, 224, 3], n_elems=150528, size=150528, fmt=NHWC, type=INT8, qnt_type=AFFINE, zp=0, scale=0.007812
output tensors:
  index=0, name=MobilenetV1/Predictions/Reshape_1, n_dims=2, dims=[1, 1001, 0, 0], n_elems=1001, size=2002, fmt=UNDEFINED, type=FP16, qnt_type=AFFINE, zp=0, scale=1.000000
custom string:
Begin perf ...
   0: Elapse Time = 3.56ms, FPS = 281.29
---- Top5 ----
0.407959 - 283
0.172729 - 282
0.154785 - 286
0.059204 - 278
0.042664 - 279
```

Rockchip provides a comprehensive set of test cases; please refer to the NPU section in the application notes for compilation and testing.

### 4.19 LED Test

The OK1126B-S/OK1126BJ-S SoM features a controllable blue LED; this LED flashes when the board is powered up. You can disable this feature by simply editing the device tree file arch/arm64/boot/dts/rockchip/FET1126B-S.dtsi and changing the linux,default-trigger value for the leds node to "none".

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382053102_04b6b2ed_0a8c_47f6_9225_1fb55e587f72.png)

Testing Procedure:

Change the blue LED to a standard GPIO-controlled LED.

```bash
root@OK1126B-S-debian12:~# cd /sys/class/leds/work/
root@OK1126B-S-debian12:/sys/class/leds/work# echo gpio > trigger
Testing by switching on the LED lights
root@OK1126B-S-debian12:/sys/class/leds/work# echo 1 > brightness
Testing by switching off the LED lights
root@OK1126B-S-debian12:/sys/class/leds/work# echo 0 > brightness
```

Change the blue LED to a heartbeat LED.

```bash
root@OK1126B-S-debian12:/sys/class/leds/work# echo heartbeat > trigger
```

### 4.20 ADC Test

P17 is the ADC pin as shown in the figure below, where SARADC0 \_ IN0-IN6 correspond to 0-6 of the ADC channel respectively.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382053171_c3b89097_f665_4a7d_845a_bb16fa9cf006.png)

Enter the following command to view the value of the ADC channel (range 0–8192):

```bash
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage0_raw
8184
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage1_raw
1474
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage2_raw
862
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage3_raw
604
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage4_raw
883
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage5_raw
1288
root@OK1126B-S-debian12:~# cat /sys/bus/iio/devices/iio\:device0/in_voltage6_raw
1027
```

### 4.21 4G/ 5G Test

The OK1126B/OK1126BJ-S supports the 4G module EM05 and the 5G module RM500U (both connected via USB). The following demonstrates 4G module testing as an example:

Prepare the FIT-4G\&5G adapter board for the 4G module. Before powering on the development board:

Insert the EM05 4G module into the adapter board.

Insert a Micro SIM card into the adapter board.

Connect the antennas: one to the EM05 module and one to the designated port on the adapter board.  
Power the adapter board using a 12V power supply. Power on the development board.

Short-press the power button on the adapter board and wait for the green LED to illuminate.

The numbers in the diagram (from small to large) correspond to:

12V Power Input

Power Button

Micro SIM Card Slot

USB Cable Connector

4G Module EM05

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1766382053238_3517793e_f523_486d_bc16_b7a14d8c045f.png)

After the development board boots, execute the lsusb command in the debug serial console to verify module detection.

```bash
root@OK1126B-S-debian12:~# lsusb
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 09da:2268 A4Tech Co., Ltd. Keyboard (FK11)
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 003 Device 005: ID 2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem  //This is actually the EM05 module
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Check the device node status under /dev.

```bash
root@OK1126B-S-debian12:~# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```

After successful device identification, you can perform dial-up Internet access testing;

```bash
root@OK1126B-S-debian12:~# fltest_quectel.sh &
[1] 1947
root@OK1126B-S-debian12:~# eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
[07-07_06:03:19:776] Quectel_QConnectManager_Linux_V1.6.0.24
[07-07_06:03:19:778] Find /sys/bus/usb/devices/3-1 idVendor=0x2c7c idProduct=0x125, bus=0x003, dev=0x002
[07-07_06:03:19:778] Auto find qmichannel = /dev/cdc-wdm0
[07-07_06:03:19:778] Auto find usbnet_adapter = wwan0
[07-07_06:03:19:778] netcard driver = qmi_wwan_q, driver version = V1.2.9
[07-07_06:03:19:779] Modem works in QMI mode
[07-07_06:03:19:796] cdc_wdm_fd = 7
[07-07_06:03:19:869] Get clientWDS = 5
[07-07_06:03:19:901] Get clientDMS = 1
[07-07_06:03:19:933] Get clientNAS = 2
[07-07_06:03:19:964] Get clientUIM = 1
[07-07_06:03:19:997] Get clientWDA = 1
[07-07_06:03:20:029] requestBaseBandVersion EM05CNFDR08A03M1G_ND
[07-07_06:03:20:157] requestGetSIMStatus SIMStatus: SIM_READY
[07-07_06:03:20:188] requestGetProfile[1] 3gnet///0
[07-07_06:03:20:221] requestRegistrationState2 MCC: 460, MNC: 1, PS: Attached, DataCap: LTE
[07-07_06:03:20:253] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[07-07_06:03:20:253] ifconfig wwan0 0.0.0.0
[07-07_06:03:20:263] ifconfig wwan0 down
[07-07_06:03:20:317] requestSetupDataCall WdsConnectionIPv4Handle: 0x872df6e0
[07-07_06:03:20:445] ifconfig wwan0 up
[07-07_06:03:20:456] dhclient -4 -d --no-pid wwan0
Internet Systems Consortium DHCP Client 4.4.3-P1
Copyright 2004-2022 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/wwan0/be:03:40:cf:2e:16
Sending on   LPF/wwan0/be:03:40:cf:2e:16
Sending on   Socket/fallback
DHCPREQUEST for 10.100.22.138 on wwan0 to 255.255.255.255 port 67
DHCPACK of 10.100.22.138 from 10.100.22.137
/etc/resolvconf/update.d/libc: Warning: /etc/resolv.conf is not a symbolic link to /run/resolvconf/resolv.conf
bound to 10.100.22.138 -- renewal in 2737 seconds.
```

Once connected to the internet, the domain name can be pinged.

```bash
root@OK1126B-S-debian12:~# ping -I wwan0 www.baidu.com -c 3
PING www.wshifen.com (103.235.46.115) from 10.100.22.138 wwan0: 56(84) bytes of data.
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=1 ttl=43 time=224 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=2 ttl=43 time=227 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=3 ttl=43 time=226 ms

--- www.wshifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 223.998/225.523/226.646/1.118 ms
```

For the 5G module, after a successful dial-up connection, the system identifies the network interface name as **`usb0`** (which differs from the eth0 for the 4G module `wwan0`). An example of pinging a domain name is shown below.

```bash
root@OK1126B-S-buildroot:~# ping -I usb0 www.baidu.com -c 3
PING www.a.shifen.com (124.237.178.35) from 10.92.86.37 usb0: 56(84) bytes of data.
64 bytes from 124.237.178.35: icmp_seq=1 ttl=51 time=39.1 ms
64 bytes from 124.237.178.35: icmp_seq=2 ttl=51 time=63.8 ms
64 bytes from 124.237.178.35: icmp_seq=3 ttl=51 time=61.9 ms
--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 36.764/54.995/80.358/18.497 ms
```

To stop the dial-up connection.

```bash
root@OK1126B-S-buildroot:~# pkill quectelCM
```

### 4.22 Changing the Boot Logo

The OK1126B-S/OK1126BJ-S platform supports directly replacing the custom boot logo without recompiling the entire image.

Prepare two BMP files (can be the same image) in the USB driver:

logo.bmp for the U-Boot stage

logo\_kernel.bmp for the kernel stage

Example image resolution: 480x272 (other resolutions are allowed, but bit depth must be 24-bit). Copy these files to a USB drive and insert it into OK1126’s USB port.

```bash
root@OK1126B-S-debian12:~# cd /run/media/sda1/
root@OK1126B-S-debian12:/run/media/sda1# ls
logo.bmp   logo_kernel.bmp
```

Then run the following command to flash the logo onto the system

```bash
root@OK1126B-S-debian12:/run/media/sda1# cat logo.bmp > logo.img
root@OK1126B-S-debian12:/run/media/sda1# truncate -s %512 logo.img
root@OK1126B-S-debian12:/run/media/sda1# cat logo_kernel.bmp >> logo.img
root@OK1126B-S-debian12:/run/media/sda1# dd if=logo.img of=/dev/mmcblk0p6
1531+1 records in
1531+1 records out
783926 bytes (784 kB, 766 KiB) copied, 0.0437682 s, 17.9 MB/s
root@OK1126B-S-debian12:/run/media/sda1# reboot
```

Once you have restarted the system, you will see that the logo has changed.

## 5\. OK1126B-S\_Platform Multimedia Test

### 5.1 Introduction to Codec Functions

The application-layer software for the audio and video components of the OK1126B-S/OK1126BJ-S platform utilises GStreamer and supports hardware-based encoding and decoding. All examples in this section are based on Gstreamer commands. If you need a player with a GUI, you can also use Qt multimedia classes, which also support hardware-accelerated encoding. Please refer to the Qt test section for more details.

The OK1126B-S/OK1126BJ-S platform features a video processing unit (VPU) that supports hardware encoding and decoding of the following video formats:

Video Decoding: H.264, H.265, supports up to 4K@30fps

Video Encoding H.264, H.265, maximum support for 12M@30fps

OK1126B-S/OK1126BJ-S Platform Hardware Codec Parameter Table:

| | Format| Profile| Resolution| Frame rate|
|----------|----------|----------|----------|----------|
| Video Encoder| HEVC| Level 5.0 High Tier| 12M| 30 fps|
| | H.264| Level 5.0| 12M| 30 fps|
| Video Decoder| H.264| yuv400/yuv420/yuv422@L5.1| 3840x2160| 30 fps|
| | H.265| yuv420@L5.0| 3840x2160| 30 fps|

### 5.2 Audio and Video Playback Experience

#### 5.2.1 Playing Video and Audio via Gplay

Gplay is an audio and video player based on Gstreamer. It automatically selects the appropriate plugins for audio and video playback based on the hardware, and it is very easy to use.

```bash
root@OK1126B-S-debian12:~# gst-play-1.0 /userdata/media/1080p_30fps_h265.mp4
//Play a video file with sound and test the audio output through the speakers
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/1080p_30fps_h265.mp4
Redistribute latency...
mpp[2204]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2204]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2204]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2204]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2204]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2204]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Redistribute latency...
mpp[2204]: H265D_PARSER: extradata is encoded as hvcC format
mpp[2204]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2204]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2204]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
mpp[2204]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2204]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2204]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
Redistribute latency...
Redistribute latency...
Redistribute latency...
0:00:30.6 / 0:00:30.6
Reached end of play list.
```

#### 5.2.2 Playing Video via Gst-launch

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265.mp4 ! qtdemux ! queue ! h265parse ! mppvideodec ! autovideosink
//Play video only
mpp[2828]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2828]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2828]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2828]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2828]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2828]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2828]: H265D_PARSER: extradata is encoded as hvcC format
mpp[2828]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2828]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2828]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
mpp[2828]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2828]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2828]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:30.634192999
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.2.3 Playing Audio via Gst-launch

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/test.mp3 ! id3demux ! mpegaudioparse ! mpg123audiodec ! alsasink
//Play audio only; test playback via the speakers,
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
^Chandling interrupt. (6.4 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:19.384650936
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.2.4 Playing Both Video and Audio via Gst-launch

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265.mp4 ! qtdemux name=dec dec. ! queue ! h265parse ! mppvideodec ! autovideosink dec.! queue ! decodebin ! alsasink
//Play a video file with sound and test the audio output through the speakers
mpp[2859]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2859]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2859]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2859]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2859]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2859]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2859]: H265D_PARSER: extradata is encoded as hvcC format
mpp[2859]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2859]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2859]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
mpp[2859]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2859]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2859]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...0 %)
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
Got EOS from element "pipeline0".
Execution ended after 0:00:30.638791036
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.3 Video Hardware Encoding

The OK1126B-S/OK1126BJ-S supports H.264/H.265 video encoding at up to 12M@30fps and high-quality JPEG encoding and decoding.

#### 5.3.1 Video Hardware Encoding H.264

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 mp4mux name=mux ! filesink location=test.mp4  videotestsrc num-buffers=600 ! video/x-raw,framerate=60/1,width=1920,height=1080,format=NV12 ! mpph264enc ! h264parse !  mux.video_0 -e
mpp[2873]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2873]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2873]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2873]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2873]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2873]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2873]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is PREROLLING ...
mpp[2873]: mpp_enc: set prep cfg w:h [1920:1080] stride [1920:1088] fmt 0 rotate 0 mirror 0
mpp[2873]: mpp_enc: set rc cbr bps [15552000:16524000:14580000] fps [60:1:fix] - [60:1:fix] gop 60
mpp[2873]: mpp_enc: mode cbr bps [14580000:15552000:16524000] fps fix [60/1] -> fix [60/1] gop i [60] v [0]
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
EOS received - stopping pipeline...
Execution ended after 0:00:13.031483681
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.3.2 Video Hardware Encoding H.265

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 mp4mux name=mux ! filesink location=test.mp4 videotestsrc num-buffers=600 ! video/x-raw,framerate=60/1,width=1920,height=1080,format=NV12 ! mpph265enc ! h265parse !  mux.video_0 -e
mpp[2896]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2896]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2896]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2896]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2896]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2896]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2896]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is PREROLLING ...
mpp[2896]: mpp_enc: set prep cfg w:h [1920:1080] stride [1920:1088] fmt 0 rotate 0 mirror 0
mpp[2896]: mpp_enc: set rc cbr bps [15552000:16524000:14580000] fps [60:1:fix] - [60:1:fix] gop 60
mpp[2896]: mpp_enc: mode cbr bps [14580000:15552000:16524000] fps fix [60/1] -> fix [60/1] gop i [60] v [0]
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
EOS received - stopping pipeline...
Execution ended after 0:00:12.814226399
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.4 Video Hardware Decoding

The OK1126B-S/OK1126BJ-S supports hardware decoding for H.264 and H.265 video formats.

The H.264 decoder supports up to 4K@30fps.

The H.265 decoder supports up to 4K@30fps.

The OK1126B-S/OK1126BJ-S utilizes the mppvideodec component for hardware video decoding. Its output pixel formats are: NV12, I420, and YV12.

#### 5.4.1 H.264 Video Decoding and Playback

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_h264.mp4 ! qtdemux ! h264parse ! mppvideodec ! autovideosink
mpp[2918]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2918]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2918]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2918]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2918]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2918]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2918]: h264d_api: is_avcC=1
mpp[2918]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2918]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2918]: mpp_buf_slot: mismatch size_total 3237888 - 4177920
mpp[2918]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2918]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2918]: mpp_buf_slot: mismatch size_total 3237888 - 4177920
Pipeline is PREROLLED ...0 %)
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:01:01.017110620
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.4.2 H.264 Video Decoding and Playback with Audio

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_h264.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h264parse ! mppvideodec  ! autovideosink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[2945]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2945]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2945]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2945]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2945]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2945]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2945]: h264d_api: is_avcC=1
mpp[2945]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2945]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2945]: mpp_buf_slot: mismatch size_total 3237888 - 4177920
Redistribute latency...
Redistribute latency...
mpp[2945]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2945]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2945]: mpp_buf_slot: mismatch size_total 3237888 - 4177920
Pipeline is PREROLLED ...0 %)
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
^Chandling interrupt. (17.0 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:10.424502344
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.4.3 H.265 Video Decoding and Playback

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265.mp4 ! qtdemux ! h265parse ! mppvideodec ! autovideosink
mpp[2959]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2959]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2959]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2959]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2959]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2959]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2959]: H265D_PARSER: extradata is encoded as hvcC format
mpp[2959]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2959]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2959]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
mpp[2959]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2959]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2959]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:30.634240897
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.4.4 H.265 Video Decoding and Playback with Audio

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h265parse ! mppvideodec  ! autovideosink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[2982]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2982]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2982]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2982]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2982]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2982]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Redistribute latency...
Redistribute latency...
mpp[2982]: H265D_PARSER: extradata is encoded as hvcC format
mpp[2982]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2982]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2982]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
mpp[2982]: mpp_buf_slot: mismatch h_stride_by_pixel 1984 - 1920
mpp[2982]: mpp_buf_slot: mismatch h_stride_by_byte 1984 - 1920
mpp[2982]: mpp_buf_slot: mismatch size_total 3856896 - 3732480
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
^Chandling interrupt. (35.7 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:11.008415894
Setting pipeline to NULL ...
mpp[2982]: H265D_PARSER: extradata is encoded as hvcC format
Freeing pipeline ...
```

### 5.5 Camera Test

The OK1126B-S/OK1126BJ-S supports the OV13855 MIPI camera.

#### 5.5.1 OV13855 Test

**5.4.1.1 Camera Recognition and Format Support Query**

```bash
root@OK1126B-S-debian12:~# v4l2-ctl --list-devices
//View device nodes
rkaiisp (platform: rkaiisp):
        /dev/video0
        /dev/video1

rkisp-statistics (platform: rkisp):
        /dev/video30
        /dev/video31
        /dev/video38
        /dev/video39

rkaiisp0 (platform:rkaiisp-vir0):
        /dev/media0

rkaiisp1 (platform:rkaiisp-vir1):
        /dev/media1

rkcif (platform:rkcif-mipi-lvds):
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/video6
        /dev/video7
        /dev/video8
        /dev/video9
        /dev/video10
        /dev/video11
        /dev/video12
        /dev/media2

rkcif (platform:rkcif-mipi-lvds2):
        /dev/video13
        /dev/video14
        /dev/video15
        /dev/video16
        /dev/video17
        /dev/video18
        /dev/video19
        /dev/video20
        /dev/video21
        /dev/video22
        /dev/video23
        /dev/media3

rkisp_mainpath (platform:rkisp-vir0):
        /dev/video25
        /dev/video26
        /dev/video27
        /dev/video28
        /dev/video29
        /dev/video32
        /dev/media4

rkisp_mainpath (platform:rkisp-vir1):
        /dev/video33
        /dev/video34
        /dev/video35
        /dev/video36
        /dev/video37
        /dev/video40
        /dev/media5

rkvpss_scale0 (platform:rkvpss-vir0):
        /dev/video42
        /dev/video43
        /dev/video44
        /dev/video45
        /dev/video46
        /dev/video47
        /dev/media6

rkvpss_scale0 (platform:rkvpss-vir1):
        /dev/video48
        /dev/video49
        /dev/video50
        /dev/video51
        /dev/video52
        /dev/video53
        /dev/media7

root@OK1126B-S-debian12:~# v4l2-ctl --list-formats-ext -d /dev/video33
//View the formats and resolutions supported by the camera
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [1]: 'NV16' (Y/UV 4:2:2)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [2]: 'NV61' (Y/VU 4:2:2)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [3]: 'NV21' (Y/VU 4:2:0)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [4]: 'NV12' (Y/UV 4:2:0)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [5]: 'NM21' (Y/VU 4:2:0 (N-C))
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [6]: 'NM12' (Y/UV 4:2:0 (N-C))
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [7]: 'GREY' (8-bit Greyscale)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [8]: 'TIL2' (Rockchip yuv422 tile)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
        [9]: 'TIL0' (Rockchip yuv420 tile)
                Size: Stepwise 32x32 - 4096x3072 with step 8/8
```

**5.4.1.2 Camera Preview**

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 v4l2src device=/dev/video33 ! video/x-raw, format=NV12, width=640, height=480, framerate=30/1 ! autovideosink
//Camera preview
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
^Chandling interrupt.
Interrupt: Stopping pipeline ...
Execution ended after 0:00:11.815056362
Setting pipeline to NULL ...
Freeing pipeline ...
```

**5.4.1.3 Camera Image Capture**

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 v4l2src device=/dev/video33 num-buffers=1 ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
//Camera image capture
mpp[2270]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crashh=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
mpp[2270]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2270]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2270]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2270]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
Using mplane plugin for capture
mpp[2270]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2270]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
mpp[2270]: mpp_enc: set prep cfg w:h [640:480] stride [640:480] fmt 0 rotate 0 mirror 0
mpp[2270]: mpp_enc: set rc cbr bps [4608000:4896000:4320000] fps [120:1:fix] - [120:1:fix] gop 120
mpp[2270]: mpp_enc: set jpeg qfactor [80:1:99]
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:00.220122292
Setting pipeline to NULL ...
Freeing pipeline ...

root@OK1126B-S-debian12:~# ls
//Check whether pic.jpg is generated; you can copy it to your PC to view it.
pic.jpg
```

**5.4.2.4 H.264 Video Recording**

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 v4l2src device=/dev/video33 num-buffers=100 ! video/x-raw,format=NV12, width=640,height=480 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! qtmux ! filesink location=13855_h264.mp4 t. ! queue ! autovideosink
//H.264 encoding during camera preview
mpp[2304]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crashdth=640,height=480 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! qtmux ! mpp[2304]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2304]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2304]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2304]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
Using mplane plugin for capture
mpp[2304]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2304]: mpp: Only rk3588's h264/265/jpeg and rk3576's h264/265 encoder can use frame parallel
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
mpp[2304]: mpp_enc: set prep cfg w:h [640:480] stride [640:480] fmt 0 rotate 0 mirror 0
mpp[2304]: mpp_enc: set rc cbr bps [4608000:4896000:4320000] fps [120:1:fix] - [120:1:fix] gop 120
mpp[2304]: mpp_enc: mode cbr bps [4320000:4608000:4896000] fps fix [120/1] -> fix [120/1] gop i [120] v [0]
Redistribute latency...
Redistribute latency...
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:03.526981168
Setting pipeline to NULL ...
Freeing pipeline ...

root@OK1126B-S-debian12:~# ls
//Check whether an H.264 file has been generated
13855_h264.mp4  pic.jpg
```

**5.4.2.5 H.264 Video Playback**

```bash
root@OK1126B-S-debian12:~# gst-launch-1.0 filesrc location=13855_h264.mp4 ! qtdemux ! queue ! h264parse ! mppvideodec ! autovideosink
//Play H.264 videos
mpp[2342]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2342]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2342]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
mpp[2342]: mpp: unable to create enc vp8 for soc rv1126b unsupported
mpp[2342]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Setting pipeline to PAUSED ...
mpp[2342]: mpp_info: mpp version: 520ab553 author: Herman Chen   2025-12-16 fix[sys_cfg]: Fix decoder sys_cfg crash
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[2342]: h264d_api: is_avcC=1
mpp[2342]: mpp_buf_slot: mismatch h_stride_by_pixel 704 - 640
mpp[2342]: mpp_buf_slot: mismatch h_stride_by_byte 704 - 640
mpp[2342]: mpp_buf_slot: mismatch size_total 506880 - 614400
mpp[2342]: mpp_buf_slot: mismatch h_stride_by_pixel 704 - 640
mpp[2342]: mpp_buf_slot: mismatch h_stride_by_byte 704 - 640
mpp[2342]: mpp_buf_slot: mismatch size_total 506880 - 614400
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:03.322403667
Setting pipeline to NULL ...
Freeing pipeline ...
```

## 6\. Flashing the System

### 6.1 OTG System Flashing

#### 6.1.1 OTG Driver Installation

+ Path: OK1126B-S (Linux) User Data\\Linux\\Tools\\DriverAssistant\_v5.13.zip

Extract the file above to any directory and run it with administrator privileges.

Open the DriverInstall.exe program.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278371049_36807242_44b2_4463_b794_e1bc53500a6d.png)

Click Install Driver.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278371239_c88b99ca_e7f1_452b_a2e9_5e6bfea8bb73.png)

#### 6.1.2 Complete OTG Flashing

**6.1.2.1 RKDevTool Flashing Test**

+ Path: OK1126B-S (Linux) User Data\\Linux\\Tools RKDevTool\_Release\_v3.37.zip

This is a development tool provided by Rockchip. Before use, unzip it into a directory with an all-English path, connect the development board to the host computer using a Type-C cable, hold down the UPDATE button on the development board without releasing it, then press the RESET button once to reset the system; release the UPDATE button approximately two seconds later. The Rockchip development tools will display a message indicating that a MASKROM device has been detected.

**Note:** 

- **The device identification process takes place whilst the UPDATE button is held down when the development board is powered on;**

+ **The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters;**
+ **When performing OTG flashing, two things must be noted: Connect the OTG cable.  
OTG and USB3.0 are multiplexed, so the DIP switch must be adjusted.**

Open the Rockchip development tool:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1735268293437_d10c6629_d1b4_437f_9503_0f35995b4bf9.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img. The programme will analyse the firmware, so please wait a moment.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278372340_48a49afa_af0a_4e29_8b4b_eadc70da5820.png)

Click the "Upgrade Firmware" button -> "Upgrade" to begin upgrading.

**6.1.2.2 FactoryTool Flashing Test**

FactoryTool is used for batch OTG flashing in the factory. It does not require reading an image file and can batch-flash large images. If RKDevTool does not meet compatibility requirements, this method can also be attempted. Before using, extract it to a directory with only English characters. Connect the development board and host using a Type-C cable. Press and hold the UPDATE+ button, press the reset button for the system reset, and after about two seconds, release the UPDATE+ button. The Rockchip development tools will display a message indicating that a MASKROM device has been detected.

**Note:** 

- **The device identification process takes place whilst the UPDATE button is held down when the development board is powered on;**

- **The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters.**

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/8.png)

Click to select the firmware, then click “Start”; the system will automatically begin flashing the MASKROM device once it has been detected.

Downloading firmware:

Upgrade successful. The system will not automatically restart and will require a power cycle to restart.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278373317_68796c78_84ac_4218_92c9_0a30ec517c45.png)

#### 6.1.3 OTG Step-by-Step Flashing Test

During the development phase, performing full flashing every time can be time-consuming. Therefore, here it introduces how to use OTG flashing tools to flash individual partitions.

**Note: The device identification process takes place whilst the UPDATE button is held down when the development board is powered on.**

Firstly, once the OK1126B-S-linux-release build has completed, you will find a separate partition image in the rockdev directory.

Take separate flashing boot. img (including device tree and startup logo) as an example to show the flashing method.

Connect the development board to the host computer using a Type-C cable. Once the development board has booted, run reboot loader, or hold down Ctrl+D whilst powering on until the system prompts that a LOADER device has been detected.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278374098_1e8ed88d_ec1b_4839_9831_a5d20a5f1a8c.png)

Click the "Device Partition Table" button to automatically read the partition . address.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278374098_1e8ed88d_ec1b_4839_9831_a5d20a5f1a8c.png)

It will ask if you want to update the download address. Click "Yes," and the partition table will be read successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278374098_1e8ed88d_ec1b_4839_9831_a5d20a5f1a8c_1786092028075.png)

Click the area to the right of the partition to select the partition image, and tick the partition.

Click the “Execute” button to automatically flash and restart.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278374299_664b1139_5d46_477e_8ec7_3640a0573c20.png)

**MASKROM Mode Introduction**

If Loader mode is inaccessible (loader problem, etc.), press and hold the UPDATE key, then press the reset key to enter maskrom mode for flashing.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278374849_c9e0d481_4360_4856_a155_88cd30e07767.png)

At this point, the system will display a message indicating that a MASKROM device has been detected; the flashing procedure is the same as for LOADER mode, and it is best to use update.img for flashing.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid.**

### 6.2 TF System Flashing

TF card making and testing.

**Note: Testing indicates that the maximum supported TF card capacity is 16 GB. Using a TF card of 32 GB or larger may result in flashing failure.**

Copy SDDiskTool\_v1.78.zip from the user profile tool directory to any windows directory. Run SD\_Firmware\_Tool.exe with administrator privileges.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278375046_ccb93f8c_d97c_4c76_811c_4f0eda82c2e2.png)

Select the disk device, tick the “Firmware Update” box, and select update.img. Click to start creating.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278375213_b0a0a76e_38c8_46a3_8dee_dbd887313527.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Manual/1719278375372_2a2e23f1_1e24_43f9_ba08_803a28b79464.png)

Insert the TF card into the development board and power it on; the system will automatically begin the flashing process. Once the flashing is complete, both the screen and the serial port will display the following message:

Please remove SD CARD!!!, wait for reboot.

At this point, remove the TF card and the system will restart automatically (please do not switch off the power directly).

If the device does not restart automatically after removing the TF card, you can complete the flashing process by restarting it manually. As shown in the figure above, the burning process takes about 7 minutes. Please wait patiently during the burning process.