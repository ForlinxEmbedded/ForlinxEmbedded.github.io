# Linux6.1\_User's\_Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Application Scope

This software manual is designed for the OK3576-UP5 platform running Linux6.1. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 09/10/2026| V1.0| V1.1| V1.2 and above| OK3576-UP5 Linux6.1 User’s Manual Initial Version.|

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, understand interface functions, and learn testing methods. It primarily covers the testing of development board interface functions, methods for flashing the image, and troubleshooting common issues encountered during use. During testing, certain commands have been annotated for better understanding, focusing on practicality and adequacy. 

There are eight main chapters:

- Chapter 1. briefly introduce the interface resources of the development board and the source code paths of the kernel drivers;
- Chapter 2. describes two login methods: serial port login and network login;
- Chapter 3. covers the testing of desktop and QT interface functions;
- Chapter 4. explains how to perform functional tests using command line operations;
- Chapter 5. covers product codec testing, including video hardware encoding and decoding testing;
- Chapter 6. covers product camera testing, including camera support capabilities and related commands for playback testing;
- Chapter 7. is product display interface testing, covering display interface support capabilities and related commands for display interface testing;
- Chapter 8. details methods for updating the image to storage devices, allowing you to choose the appropriate flashing method based on your actual needs.

Additionally, the manual includes explanations of some symbols and formats.、

| Format| **Meaning**|
|:--------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️🛤️ ️ | Related paths.|
| <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">Blue font on gray background</font></font> | Serial output information after command input|
| // | Explanation of input commands or output information:|
| Username@Hostname| root@OK3576-UP5-buildroot:~#：<br />Development board serial port and network login account information, Ubuntu account information. <br />You can use this information to determine the functional operating environment. |

Example: Checking the Loading Status of the AW-CM358 Module Driver

```bash
root@OK3576-UP5-buildroot:~# lsmod                              // View loaded modules
Module                  Size  Used by
moal                  970752  0
mlan                  667648  1 moal
```

- root@OK3576-UP5-buildroot: Username “root”, hostname “forlinx”. This denotes executing operations with root privileges on the Forlinx development board.
- //: Denotes explanatory notes about commands or printed information; no input required.

## 1\. OK3576-UP5 Development Board Description

The RK3576 is a low-power, high-performance processor based on the ARM64 architecture. It comprises four Cortex-A53 cores and four Cortex-A72 cores, as well as a dedicated NEON coprocessor and a neural network processing unit (NPU), and is suitable for use in computers, mobile phones, personal mobile internet devices and digital multimedia devices.

Connection method: Board-to-board.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/OK3576-UP5.webp)



**Front**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/OK3576-UP5-back.webp)

**Back** 

**Note: Hardware specifications are not covered in this software manual. Before development, please refer to the “ User’s Hardware Manual” to understand the product naming and hardware configuration.**

### 1.1 Linux 6.1 System Software Resources

| Chip or device| Driver path| Device Nodes|
|----------|----------|----------|
| LCD Backlight Driver| drivers/video/backlight/pwm\_bl.c| /sys/class/backlight|
| USB Interface| drivers/usb/storage/| /dev/sda1|
| USB Mouse| drivers/hid/usbhid/| /dev/input/mice|
| Ethernet| drivers/net/ethernet/stmicro/stmmac| eth0, eth1|
| TF/SD| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/mmcblkXpY|
| EMMC| drivers/mmc/host/dw\_mmc-rockchip.c| /dev/mmcblkXpY|
| OV13855| drivers/media/i2c/ov13855.c| /dev/videoX|
| LCD controller| drivers/gpu/drm/rockchip/rockchip\_drm\_vop.c| /dev/dri/card0|
| MIPI CSI| drivers/phy/rockchip/phy-rockchip-mipi-rx.c| /dev/mediaX, /dev/videoX|
| MIPI DSI| drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c| /dev/dri/card0|
| LCD touch driver| drivers/input/touchscreen/gt9xx/\*   drivers/input/touchscreen/edt-ft5x06.c| /dev/input/eventX|
| RTC Real - Time Clock| drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c| /dev/rtc0|
| Serial Port| drivers/tty/serial/8250/8250\_dw.c| /dev/ttySX|
| Button driver| drivers/input/keyboard/adc-keys.c| /dev/input/eventX|
| LED| drivers/leds/leds-gpio.c| /sys/class/leds|
| I2S| sound/soc/rockchip/rockchip\_i2s.c| /dev/snd/|
| Audio Driver| sound/soc/codecs/nau8822.c| /dev/snd/|
| PMIC| drivers/mfd/rk806.c   drivers/regulator/rk860x-regulator.c| /sys/class/regulator/|
| PCIE| drivers/pci/controller/pcie-rockchip.c| —|
| Watchdog| drivers/watchdog/dw\_wdt.c| /dev/watchdog0|
| SPI| drivers/spi/spi-rockchip.c| /dev/spidevX|
| PWM| drivers/video/backlight/pwm\_bl.c| /sys/class/pwm/pwmchipX|

## 2\. Fast Startup

### 2.1 Preparation Before Startup

Development login methods: serial login and network login.

Hardware preparation before system startup:

- 12V/3A DC power cable

- Type-C debug serial cable (The debug serial port on the development board is a Type-C USB interface. You can use a USB-to-Type-C cable to connect the development board to a PC to check the operating status of the development board).

- Ethernet cable (Used for SSH network login)

- Display screen — connect the screen according to the development board interface (optional if display is not needed)

  ![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-003.png)

### 2.2 Debugging Serial Port Driver Installation

The OK3576-UP5 platform features a Type-C port for serial debugging and an onboard USB-to-UART chip. No additional USB-to-serial debugging tool is required, making the setup simple and convenient.

Path:`CP210x_VCP_Windows_XP_Vista.zip driver package in User Materials\3-Tools`

After decompression, directly run CP210xVCPInstaller \_ x64.exe, the following interface will pop up, and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633374_df5d0eb4_7303_41e3_a36d_c106d53ac9f9.png)

Check "I accept this agreement" and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633464_df760b99_1655_4fcb_ae01_61d1ac52d5e8.png)

Click “Finish”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633557_cf912983_7761_4b6a_ae40_6e579866a44f.png)

To ensure that the latest driver is installed, please click Uninstall Driver before installing the driver.

### 2.3 Serial Port Login

#### 2.3.1 Serial Connection Settings

 **Note:**

- **Hardware Requirements: Type-C for connecting PC and development board;**
- **Software Requirements:  A serial terminal application must be installed on the PC Windows. There are various terminal programs available, and you may choose any one you are familiar with;**
- **Settings: Baud rate 115200, 8 data bits, 1 stop bit, no parity/flow.**
- **Serial Port: Used for terminal login;  
Login User: The serial terminal automatically logs in as the root user.**

Take PuTTY as an example to introduce the setting mode of the putty terminal:

- Confirm the serial port number connected to the computer, checking the port number in Device Manager, based on the actual port recognized by the computer;

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1726214204730_e2277f30_f460_4c2b_8965_b807e4ac62ef.png)

- Open the PuTTY configuration interface. Set the “Serial line” field to the COM port number of your PC, and select 115200 as the baud rate.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633761_2af4faf1_931a_4d93_9161_0a73113119c2.png)

- After completing the above settings, enter the PC’s active COM port number in the “Saved Sessions” field. Taking COM42 as an example in the figure below, save the configuration. When you open the serial port next time, directly select the saved port number and click “Open” to establish the connection.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633855_3aea7145_3c07_4b29_b410_7087569c2846.png)

#### 2.3.2 Serial Port Login

After the PC terminal software is configured, connect the PC and the development board using a serial cable, then power on the device after connecting the power supply. The startup information can be viewed through the terminal software.

The following startup message indicates a successful boot, and you can press Enter to create a new command line:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350633955_368b4dcf_925d_4561_a12f_622f78d0586e.png)

### 2.4 Network Login

#### 2.4.1 Network Login Test

**Note: When leaving the factory, the default configuration of the network card is static IP, and the IP address is 192.168.0.232. For the method of changing the static IP, please refer to the "Ethernet Configuration" test section.**

```bash
root@OK3576-UP5-buildroot:~# ifconfig eth0 192.168.0.232
```

The computer and the development board need to be in the same network segment during the test.

Before logging in to the network, you need to ensure that the network connection between the computer and the development board is normal. You can test the connection status between the computer and the development board through the ping command. 

Specific Operations:

- Connect the eth0 of the development board to the computer via a network cable, power on the development board, and after the kernel starts, the Blue heartbeat light on the SoM will flash. After the network card connected to the computer starts normally, the network card light will flash rapidly. At this point, you can test the network connection;
- Disable your computer’s firewall (this process will not be elaborated here, as it follows general operating procedures for computers). Press the Win+R shortcut keys to open the Run window, type “cmd”, and then click "OK";

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/Image_20261029145559.png)

- Use the ping command to test the network connection between the computer and the development board.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1718954728585_22cc0ffd_0558_45ae_90c2_d581345a261a.png)

Data is returned, indicating that the network connection is normal.

#### 2.4.2 SSH the server

 **Note:**

- **The network card is configured with a static IP address (192.168.0.232) by default when it leaves the factory. For instructions on how to change the static IP address, please refer to the “Testing” section;**
- **Log in as the root user (no password required).**

Logging into the development board via SSH.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350634304_8864122d_7029_4f9b_aa7e_ebf1a1ea4fb8.png)

Click “Accept”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350634417_e4d4c597_fe06_4302_9375_a2e53e5a6737.png)

Open the window and enter the account root.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350634513_d1b6fe10_ffe5_40c2_bb64_2c6f2b869577.png)

#### 2.4.3 SFTP

Path: Install the file Zilla tool on windows and set it up as shown in the following figure.

- **Note:** 
  **For this function, you need to connect a network cable to the development board. The host IP setting and the client are in the same network segment. Make sure that the host and the client are in the same LAN. The user name is root (without password);**
- **The following is tested with the development board IP 192.168.0.232. Please modify it according to the actual situation.**

Install FileZilla on Windows, open the program, and click on “Site Manager”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1718954729099_282246fe_f588_46d3_b4ea_4c670fb661bc.png)

Once connecting, the directory structures of the PC and the development board will be displayed.

### 2.5 Screen Switch

The OK3576-UP5 supports a variety of display interfaces, including HDMI, MIPI and DisplayPort, and can display the same or different content on three screens simultaneously. Currently, the display switching can be controlled in two ways: 1. Dynamic control via the U-Boot menu; 2. Static control specified in the kernel device tree.

#### 2.5.1 Dynamic Control via U-Boot Menu

This method allows you to switch between supported display screens without recompiling or re-flashing the system.

During U-Boot automatic startup, pressing`ctrl+c`on the serial terminal will trigger a control menu:

```bash
Writing to mmc(0)... done
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:Change kernel loglevel( level 1 )
---------------------------------------------
```

Input 2 on the terminal to enter the screen control submenu.

```bash
---------------------------------------------
vp0==>hdmi vp1==>mipi vp2=>dp0
Select  display
0:Exit
1:vp0 display hdmi
2:vp1 display mipi
3:vp2 display dp0
---------------------------------------------
```

Here, you can choose from: HDMI, MIPI, and eDP. Press the corresponding option to toggle the setting on or off.

| **Terminal Input**| **Screen Selection Parameter**| **Parameters Meaning**|
|----------|----------|----------|
| 0| Exit| Return to the previous menu|
| 1| vp0 display hdmi| Enable HDMI screen output|
| 2| vp1 display mipi| Enable MIPI screen output|
| 3| vp2 display dp0| Enable DP screen output|

After the selection, exit and restart according to the menu prompt options, and press the number 0 to print the information change:

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:Change kernel loglevel( level 1 )
---------------------------------------------
```

Pressing digit 1 will initiate the restart operation, and the screen option in the U-Boot phase will take effect after reboot.

After selecting the screen, you can also press the reset button on the development board to restart, and the settings will take effect after the system restarts.

**Note: It is best not to set HDMI as the primary display, as hot-plugging the HDMI cable whilst the system is booting may cause the QT application to close.**

#### 2.5.2 Kernel Device Tree Specification

This method does not require a serial terminal connection. The system image is configured with the default desired settings, making it suitable for mass production. However, manual modification of the device tree is required, followed by regeneration of the system image.

**Note: This method takes precedence over the U-Boot screen selection. After modifying the device tree, the U-Boot screen selection will no longer be effective.**

The device tree path is: `arch/arm64/boot/dts/rockchip/OK3576-UP5-common.dtsi`

In the kernel source code, open the device DTSI file and locate the following node:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350635173_4b575acd_9121_496d_850a_948f64493b8c.png)

The node is disabled by default and needs to be changed to "okay" to enable it. Modify according to the screen requirements.

For example:

Switch off the HDMI screen.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350635266_1640bbca_219d_4e03_aef3_aa666d165f0e.png)

After saving, recompile to generate the image.

For MIPI screens, there are many types, and the existing timing and control words may not meet the requirements. You may need to manually modify the display-timings under the DSI node. However, any display-related node's status property should be handled as per the default settings, as the program will automatically control it.

### 2.6 Printing-level Adjustment

OK3576-UP5 supports dynamic control of the kernel verbosity level via the U-Boot menu during the U-Boot phase.

During U-Boot automatic startup, pressing`ctrl+c`on the serial terminal will trigger a control menu:

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:Change kernel loglevel( level 1 )
---------------------------------------------
```

The default kernel print level is 1; press the number 3 to set the kernel print level to 7：

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
3:Change kernel loglevel( level 7 )
---------------------------------------------
```

Press the number 1 to restart the system.

### 2.7 eMMC Storage Partition Table

The table below details the eMMC storage partition information for the Linux operating system (The size of a block is 512 bytes when calculating.):

| **Partition Index**| **Name**| **Offset/Block**| **Size/Block**| **Content**|
|----------|----------|----------|----------|----------|
| N/A| security| 0x00000000| 0x00004000| MiniLoaderAll.bin|
| 1| uboot| 0x00004000| 0x00002000| uboot.img|
| 2| env| 0x00006000| 0x00002000| env.img|
| 3| misc| 0x00008000| 0x00002000| misc.img|
| 4| boot| 0x0000a000| 0x00020000| boot.img|
| 5| recovery| 0x0002a000| 0x00080000| recovery.img|
| 6| logo| 0x000aa000| 0x00010000| logo.img|
| 7| userdata| 0x000ba000| 0x00400000| userdata.img|
| 8| rootfs| 0x004ba000| Remaining Space| rootfs.img|

You can use the following `fdisk -l`command on the development board to view the partition sizes:

```bash
root@OK3576-UP5-buildroot:~# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 60620800 sectors,  928M
Logical sector size: 512
Disk identifier (GUID): 803a0000-0000-4b51-8000-6bea0000380c
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 60620766

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K env
     3           32768           40959 4096K misc
     4           40960          172031 64.0M boot
     5          172032          696319  256M recovery
     6          696320          761855 32.0M logo
     7          761856         4956159 2048M userdata
     8         4956160        60620766 26.5G rootfs
Disk /dev/mmcblk0boot0: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot0 doesn't contain a valid partition table
Disk /dev/mmcblk0boot1: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot1 doesn't contain a valid partition table
```

Use the following command on the development board to view the partition sizes:

```bash
root@OK3576-UP5-buildroot:~# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       27G  1.4G   24G   6% /
devtmpfs       devtmpfs  1.9G  4.0K  1.9G   1% /dev
tmpfs          tmpfs     2.0G     0  2.0G   0% /dev/shm
tmpfs          tmpfs     780M  1.8M  778M   1% /run
tmpfs          tmpfs     2.0G  4.0K  2.0G   1% /tmp
/dev/mmcblk0p7 ext4      2.0G  170M  1.8G   9% /userdata
```

Use the following command on the development board to view the partition sizes:

```bash
root@OK3576-UP5-buildroot:~# free -h
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       156Mi       3.4Gi       7.0Mi       211Mi       3.6Gi
Swap:             0B          0B          0B
```

### 2.8 System Shutdown

In general, you can directly power off the system. However, if operations such as data storage or functional usage are in progress, avoid cutting power abruptly to prevent irreversible file damage, which may require re-flashing the firmware. To ensure that the data is written completely, you may enter a `sync` command to complete the data synchronisation before switching off the power.

**Note: For products designed based on the SoM:, if unexpected power loss during use leads to system abnormalities, consider implementing measures such as power-loss protection in the design.**

## 3\. OK3576-UP5 Interface Function Test

The display screen must be connected for proper operation; if there are no display requirements, you can skip it. The OK3576-UP5 platform provides excellent support for Qt, particularly for multimedia-related classes such as video decoding and playback, camera integration, video recording, etc. It achieves optimal performance by utilizing hardware encoding/decoding and OpenGL.

**Note: These test utilities are for hardware performance evaluation and interface functional verification only. Direct integration into production products is not advised. For commercial or scenario-specific deployments, please develop custom applications tailored to your actual requirements.**

Qt Version:`Qt5.15.11`

📌 Path to the executable file on the development board: `/usr/bin/*`

📌 Path to the source code of the executable file: `User Materials\5-Demos and Patches\qt_demos`

### 3.1 Interface Function Description

After booting, the development board will display the following desktop:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637049_4e4b9c47_b57e_46dd_9ee7_b409a8ee7ac8.png)

### 3.2 Video Playback Test

Launch the video player by clicking the desktop icon`video player`:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637178_efb09d2e_10d3_453c_9abb_e25cc635490b.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637293_c7a76041_6b7d_4e07_af81_4ab600a2ab01.png)

**Note: Test video files are stored in the directory: /userdata/media/\*.mp4**

### 3.3 Music Playback Test

`musicplayer` is a lightweight audio test application, designed to verify the normal function of the sound card, and can also be used as a basic audio player.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278341970_5c6cd369_0684_4285_9340_adfa65217a71.png)

Click the application icon to bring up the following interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637399_4aa897d8_b1fe_4da2_b53c_3f8230996581.png)

Tap the button at the bottom left corner to select the test audio file.`/userdata/piano2-CoolEdit.mp3`

### 3.4 4G/5G Test

**Note: This test requires inserting a SIM card with internet access. Please refer to section “ Command Line Function Test (4G/5G)”.**

`4G/5G` is used to test the OK3576-UP5 external 5G module (RM500U). Before testing, power off the development board, connect the 5G module, insert the SIM card, power on the development board, and open the test application.

The test supports the 4G module (EM05). Insert the 4G module and SIM card in case of power failure, and open the test application after the power-on system is started.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278342369_aae4c7ce_35ea_4a39_9d07_a58b76a04fb3.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637483_ededab21_2bb2_472c_8637_5089a9e2789f.png)

Click the Start button, and the program will automatically initiate the dial-up process to obtain an IP address, configure DNS, etc. Please wait for a few seconds. Once an IP address is displayed on the screen, you may exit the application. Refer to the Browser Test chapter for testing. If the application can successfully access the Forlinx Embedded official website, it indicates a successful connection..

### 3.5 Network Configuration Test

The OK3576-UP5 supports selecting between DHCP and Static modes through the "`Network`" network configuration application. In Static mode, you can configure the IP address, subnet mask, gateway, and DNS.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350637564_30856ec4_c452_425e_93d4_bbb9d87695ac.png)

Click app icon:

DHCP mode interface is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638103_81ac2b8d_215c_47a2_a195_d3617a47acdc.png)

Select eth0 or eth1, choose DHCP, and click “Setting” at the bottom of the interface to restart the network and automatically obtain an IP address.

Click on “STATIC”, select “Set static IP”, enter the IP address you wish to set in the “IP” field, enter the subnet mask in the “Netmask” field, enter the gateway in the “Gateway” field, and enter the DNS server in the “DNS” field.

Clicking “Setting” will automatically tick the “Enable”, indicating that the network port is active; unticking it will deactivate the network port.

After entering the URL, click ping. The result will be displayed in the left-side prompt box, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789959803534_61ba7780_e305_4e98_8cf3_e9e85b71c89e.png)

**Note: The IP and other information configured in static mode will be saved in the system's relevant configuration files, so the network settings will persist after each reboot. However, the network information configured in DHCP mode does not need to be considered, as an IP address will be dynamically assigned each time the system restarts.**

### 3.6 Browser Test

`DemoBrowser`is a simple and practical web browser. Please ensure you have a stable internet connection whilst using it, and that your DNS is functioning correctly before accessing external websites. Upon launch, the browser will by default open the Forlinx Embedded official website:

**Note: If the development board’s time is abnormal, it may cause certificate issues. After using the browser, avoid turning off the power immediately. If you need to turn off the power, run the sync command in the command line first, otherwise, the browser may crash and fail to operate properly, requiring a re-flash to resolve the issue.**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638409_bd701728_03a4_4bab_8ede_ad91dbaed543.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1718954745936_2b14cb7c_5b24_4d52_b285_03c603531ff6.png)

**Note: Click File-> Quit above to exit the browser.**

### 3.7 Watchdog Test

`Watchdog`is an application designed to test whether the watchdog function is working correctly.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638584_55c483cd_9351_4db8_ae16_b49f8044bfd8.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638672_3c485f52_a7be_4e80_a8eb_280543dd6dcb.png)

Check the Feed dog box, then click the Start button: the watchdog will be enabled, and the program will automatically feed the dog periodically. Under normal conditions, the system will not reboot.

Uncheck the Feed dog box, then click Start: the watchdog will still run normally, but the program will stop feeding the dog. Approximately 5 seconds after clicking, the system will reboot automatically — this confirms the watchdog function works properly.

### 3.8 Key Test

`Keypad`is used to test whether the platform’s built-in buttons are functional:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638752_6a745dfd_1200_4615_89ad_92aca9777757.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638842_fee7b126_6062_4366_988d_1e0e86e2794f.png)

On the OK3576-UP5 platform, the 5 physical buttons are mapped by default as: V+ for Volume+, V- for Volume-, the HOME button, MENU button, and ENTER button. When a key is pressed, the corresponding button in the test application will turn blue, indicating that the key function is working properly.

### 3.9 RTC Test

Using the`RTC`, you can view and set the current system time:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350638923_6cde796b_5f90_4717_b86b_6e370b7967ea.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639003_7dd68295_fde5_4dde_96a7_039c7544fcfa.png)

In Manual mode, enter the target time and click the Apply button to complete the configuration.

With the RTC backup battery installed, power off and restart the development board to verify that the RTC clock has been set correctly.

### 3.10 UART Test

`Terminal` is a tool for testing the on-board UART interface of the OK3576-UP5 board.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639107_b6d9d1cc_b62a_42f1_8cc6_1b07065ebd6e.png)

4 x UART are routed out in total:   
UART0, UART2, UART5 and UART8.

Among them:

UART0 is the dedicated debug serial port;

UART2 and UART5 are RS485 serial ports;

UART8 is a TTL level serial port.

| **UART**| **Device Nodes**| **Description**| **Connector**|
|----------|----------|----------|----------|
| UART0| /dev/ttyS0| Debug serial port, cannot be directly used for this test| —|
| UART2| /dev/ttyS2| RS485| P29|
| UART4| /dev/ttyS4| Used for Bluetooth, not led out separately, cannot be used directly for this test| —|
| UART5| /dev/ttyS5| RS485| P31|
| UART8| /dev/ttyS8| TTL level serial port, led out on P3, can be used for test| P3|

This test utilises UART8 (ttyS8) and requires a loopback connection (via jumper caps or DuPont wires) to perform the serial port test. According to the carrier board schematic, short the SPI2 transmit (TX) and receive (RX) pins, which correspond to PIN20 and PIN22 respectively.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639191_0958efab_114e_4418_8df7_2ca894903701.png)

Once the shorting is complete, open the test program.

In the interface, set the ttyS8, with a baud rate of 115200, 8 data bits and 1 stop bit. Click “Apply”. The parameters will be set successfully. Next, click the first button on the right to establish a connection.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639269_dd4e0516_3d59_4d0d_99ad_ff3c3b52024b.png)

Pressing the “1” key on the keyboard triggers automatic transmission; due to a short circuit, the application will receive the “1” and display it on the terminal.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639401_b613d983_c40e_4293_8510_419e9ce8ff46.png)

### 3.11 Backlight Test

`BackLight`is mipi screen backlight adjustment application:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639488_6d0ffd2b_96d4_45bf_8867_9f8e87589c37.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789959837795_30bc9744_5bee_43fc_961c_813bd95c180e.png)

Drag the slider on the screen to adjust the backlight brightness of the MIPI display; within the app, the minimum brightness setting is 5 and the maximum is 200. If the brightness you wish to adjust falls outside this range, you can adjust it via the command line or refer to the `4. Command Line Function Test/LCD Backlight Adjustment`settings.

### 3.12 Database Test

`Sqlite`is a SQLite database testing application.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639700_6869fc3a_33c5_4798_916f_7a0dc28eb2e1.png)

Click app icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350639776_f0c391d3_9c5e_4322_9efc_6220f555fda3.png)

### 3.13 System Information Test

Clicking the desktop icon displays system information.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1778231447024_7a9d5dc7_3bd7_4e33_a951_ad52c5f04e91.png)

Application Icons

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1778231447150_25235b70_078c_4c8c_831b_e0f86ef34a31.png)

## 4\. OK3576-UP5 Command Line Test
The OK3576-UP5 platform offers a comprehensive set of command-line programs for reference purposes. You can use these programs to verify the interfaces and functions of the development board. However, because these test programs have limited capabilities, it is not advisable to use Forlinx’s test programs directly for developing end products. Instead, it's recommended to create your own applications tailored to actual usage scenarios.

📌 Path to the executable file on the development board:`/usr/bin/*`

📌 Path to the source code of the executable file:`User Materials\5-Demos and Patches\cmd_demos`

### 4.1 System Information Query

To view kernel and CPU information, enter the following command:

```bash
root@OK3576-UP5-buildroot:~# uname -a
Linux OK3576-UP5-buildroot 6.1.141 #2 SMP Tue Jun 23 18:35:50 MST 2026 aarch64 GNU/Linux
```

To view environment variable information:

```bash
root@OK3576-UP5-buildroot:~# env
SHELL=/bin/bash
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
PWD=/root
LOGNAME=root
WESTON_VNC_MIN_BUFFERS=4
HOME=/root
LANG=en_US.UTF-8
ADB_TCP_PORT=5555
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.avif=01;35:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:*~=00;90:*#=00;90:*.bak=00;90:*.old=00;90:*.orig=00;90:*.part=00;90:*.rej=00;90:*.swp=00;90:*.tmp=00;90:*.dpkg-dist=00;90:*.dpkg-old=00;90:*.ucf-dist=00;90:*.ucf-new=00;90:*.ucf-old=00;90:*.rpmnew=00;90:*.rpmorig=00;90:*.rpmsave=00;90:
WESTON_FREEZE_DISPLAY=/tmp/.freeze_weston
WAYLANDSINK_FORCE_DMABUF=1
GST_V4L2SRC_DEFAULT_DEVICE=/dev/video-camera0
QT_QPA_PLATFORM=wayland
USB_FW_VERSION=0x0310
TERM=xterm-color
USER=root
AUTOAUDIOSINK_PREFERRED=pulsesink
ADBD_SHELL=/bin/bash
GST_V4L2SRC_RK_DEVICES=_mainpath:_selfpath:_bypass:_scale
WESTON_DRM_MIRROR=1
SHLVL=1
USB_FUNCS=adb
WESTON_DISABLE_ATOMIC=1
USB_MANUFACTURER=Rockchip
USB_PRODUCT=rk3xxx
XDG_RUNTIME_DIR=/var/run
USB_VENDOR_ID=0x2207
PLAYBIN2_PREFERRED_AUDIOSINK=pulsesink
PATH=/usr/bin:/usr/sbin
GST_V4L2SRC_MAX_RESOLUTION=3840x2160
GST_VIDEO_DECODER_QOS=0
_=/usr/bin/env
```

### 4.2 Frequency Test

**Note: The RK3576 utilises a big.LITTLE architecture, integrating four Cortex-A53 cores (LITTLE) and four Cortex-A72 cores (BIG).** 
The core numbers and clock speed rules are as follows:

| **SoM Type**| **SoM ID**| **Tuning Strategy**|
|----------|----------|----------|
| Cortex-A53 (small cores)| cpu0 ~ cpu3| Share the same frequency domain; adjusting the frequency of any one core causes the other three cores to change synchronously.|
| Cortex-A72 (large cores)| cpu4 ~ cpu7| Share the same frequency domain; adjusting the frequency of any one core causes the other three cores to change synchronously.|

**Note: The operating frequency of the A53 small core must not exceed that of the A72 large core; please bear this constraint in mind when configuring the system.**

Taking the CPU4 frequency of the device as an example:

- All cpufreq governor types supported in the current kernel:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/devices/system/cpu/cpu4/cpufreq/scaling_available_governors
interactive conservative ondemand userspace powersave performance schedutil
```

| **Tuning Strategy**| **Description**|
|----------|----------|
| interactive| Designed specifically for mobile devices (such as Android).|
| ondemand| Adjusts dynamically based on current CPU utilisation.|
| conservative| Similar to ondemand, but with smoother frequency adjustments. The frequency increases or decreases gradually, rather than jumping directly to the maximum.|
| userspace| Delegate control of the frequency to the user-space programme.|
| powersave| Set the CPU frequency to the minimum.|
| performance| Set the CPU frequency to the maximum.|
| schedutil| It is tightly coupled with the Linux scheduler (such as CFS) and uses the CPU utilisation information (util\_avg) provided by the scheduler to dynamically adjust the frequency.|

Among these, userspace represents user mode, which allows other user programs to adjust CPU frequency in this mode.

- Check the frequency steps supported by the current CPU:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/devices/system/cpu/cpu4/cpufreq/scaling_available_frequencies
408000 600000 816000 1008000 1200000 1416000 1608000 1800000 2016000 2112000
```

- Set to user mode and modify the frequency to 1416000:

View the current frequency before making changes:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/devices/system/cpu/cpu4/cpufreq/cpuinfo_cur_freq
2112000
root@OK3576-UP5-buildroot:~# echo userspace > /sys/devices/system/cpu/cpu4/cpufreq/scaling_governor
root@OK3576-UP5-buildroot:~# echo 1416000 > /sys/devices/system/cpu/cpu4/cpufreq/scaling_setspeed
```

- To view the current frequency after modification:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/devices/system/cpu/cpu4/cpufreq/cpuinfo_cur_freq
1416000
```

### 4.3 Temperature Test

To view temperature values:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/class/thermal/thermal_zone0/temp
48076
```

The CPU temperature is 48.076℃.

### 4.4 DDR Test

```bash
root@OK3576-UP5-buildroot:~# memory_bandwidth.sh
```

Taking OK3576-UP5 as an example, the printed information is as follows:

```bash
root@OK3576-UP5-buildroot:~# memory_bandwidth.sh
L1 cache bandwidth rd test with # process
0.008192 34381.94
0.008192 34188.18
0.008192 34210.51
0.008192 34267.59
0.008192 34307.30
L2 cache bandwidth rd test
0.131072 13507.42
0.131072 18588.39
0.131072 18568.14
0.131072 19065.02
0.131072 18571.51
Main mem bandwidth rd test
52.43 3588.56
52.43 8658.76
52.43 3610.30
52.43 3600.38
52.43 3614.78
L1 cache bandwidth wr test with # process
0.008192 25007.16
0.008192 24976.44
0.008192 24985.91
0.008192 24990.65
0.008192 24990.30
L2 cache bandwidth wr test
0.131072 20258.09
0.131072 20328.85
0.131072 20328.08
0.131072 20324.38
0.131072 20328.08
Main mem bandwidth wr test
52.43 1791.89
52.43 1790.05
52.43 1789.13
52.43 5176.62
52.43 3192.60
L1 cache bandwidth rdwr test with # process
0.008192 18902.50
0.008192 18882.29
0.008192 18898.30
0.008192 18884.67
0.008192 18898.42
L2 cache bandwidth rdwr test
0.131072 12461.49
0.131072 12358.08
0.131072 10368.34
0.131072 12351.34
0.131072 12341.50
Main mem bandwidth rdwr test
52.43 1798.46
52.43 1803.72
52.43 5434.73
52.43 5473.31
52.43 5393.91
L1 cache bandwidth cp test with # process
0.008192 22905.22
0.008192 10933.23
0.008192 22922.98
0.008192 22992.53
0.008192 22906.18
L2 cache bandwidth cp test
0.131072 9246.53
0.131072 9280.49
0.131072 9199.29
0.131072 9221.74
0.131072 9297.58
```

### 4.5 Key Test

Use the fltest \_ keytest command line tool to test the keys. Currently, the`fltest_keytest`supports the test of the five keys VOL + (KEY1), VOL- (KEY2), MENU (K1), ENTER (K2), and HOME (K3) on the carrier board is supported, and the key codes are 115, 114, 139, 28, and 102 respectively.

Run the following command:

```bash
root@OK3576-UP5-buildroot:~# fltest_keytest
Available devices:
/dev/input/event4:    adc-keys
```

When the keys are pressed and released in sequence, the terminal will display the following output:

```bash
key115 Presse
key115 Released
key114 Presse
key114 Released
key139 Presse
key139 Released
key28 Presse
key28 Released
key102 Presse
key102 Released
```

### 4.6 UART 485 Test

4 x UART are routed out in total:   
UART0, UART2, UART5 and UART8.

Among them:

UART0 is the dedicated debug serial port;

UART2 and UART5 are RS485 serial ports;

UART8 is a TTL level serial port.

| **UART**| **Device Nodes**| **Description**| **Connector**|
|----------|----------|----------|----------|
| UART0| /dev/ttyS0| Debug serial port, cannot be directly used for this test| —|
| UART2| /dev/ttyS2| RS485| P29|
| UART4| /dev/ttyS4| Used for Bluetooth, not led out separately, cannot be used directly for this test| —|
| UART5| /dev/ttyS5| RS485| P31|
| UART8| /dev/ttyS8| TTL level serial port, led out on P3, can be used for test| P3|

#### 4.6.1 UART Test

This test utilises UART8 (ttyS8) and requires a loopback connection (via jumper caps or DuPont wires) to perform the serial port test. According to the carrier board schematic, short the SPI2 transmit (TX) and receive (RX) pins, which correspond to PIN20 and PIN22 respectively.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364257_c8489e3b_e653_4774_a981_b12565017b2b.png)

Once the shorting is complete, open the test program.

```bash
root@OK3576-UP5-buildroot:~# fltest_uarttest -d /dev/ttyS8
Welcome to uart test
Send test data:
forlinx_uart_test.1234567890...
Read Test Data finished,Read:
forlinx_uart_test.1234567890...
```

If the following content is printed on the serial port after execution, it indicates that the serial communication is working normally.

#### 4.6.2 485 Interface Test

The test uses two RS485 ports, UART2 and UART5, for mutual testing. Before testing, you need to connect the A and B pins of the two RS485 interfaces: connect A to A, B to B, and GND to GND. The two RS485 ports are as follows: UART2 corresponds to PIN2 and PIN3 of P29, while UART5 corresponds to PIN2 and PIN3 of P31.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364426_20d43cd9_b8c3_4790_8696_b1d6d929ad55.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364593_0754d2f9_82f0_4605_ae42_2dc145a7d17d.png)

Use two terminals to log in to the development board: one via the UART0 debug port, and the other via SS	

Start the receiving listener on the serial port terminal;

```bash
root@OK3576-UP5-buildroot:~# cat /dev/ttyS2 &
[1] 1182
```

Sending data via an SSH terminal;

```bash
root@OK3576-UP5-buildroot:~# echo asdsa > /dev/ttyS5
asdsa                 
```

Observe the serial port terminal;

```bash
root@OK3576-UP5-buildroot:~# echo asdsa > /dev/ttyS5
root@OK3576-UP5-buildroot:~# asdsa                     // Data received on the serial terminal
```

Perform the reverse test again: start receiving on the SSH terminal;

```bash
root@OK3576-UP5-buildroot:~# cat /dev/ttyS5 &
[1] 1182
```

Sending data via the serial port terminal.

```bash
root@OK3576-UP5-buildroot:~# echo asdsa > /dev/ttyS2
```

View the SSH terminal.

```bash
root@OK3576-UP5-buildroot:~# echo asdsa > /dev/ttyS2
root@OK3576-UP5-buildroot:~# asdsa                    // Data received on the SSH terminal
```

### 4.7 Watchdog Test

A watchdog is a feature frequently used in embedded systems; the device node for the watchdog in the OK3576-UP5 is`/dev/watchdog`. There are two test programs, you can choose any one according to your actual needs.

Start the watchdog, set the reset time to 10 seconds, and feed the dog at regular intervals.

Use`fltest_watchdog`to open the watchdog and pet it, which will prevent the system from

```bash
root@OK3576-UP5-buildroot:~# fltest_watchdog
Watchdog Ticking Away!
```

When terminating the test program using`ctrl+c`, stop the keep-alive signal. With the watchdog left enabled, the system will reset after a 10-second timeout.

To prevent a reset, you must issue the command to disable the watchdog within 10 seconds after the program ends.

```bash
root@OK3576-UP5-buildroot:~# fltest_watchdog -d  // Disable the watchdog
Watchdog card disabled.
```

Start the watchdog, set the reset time to 10s, and do not feed it.

Execute the`flteset_watchdogrestart`, this will enable the watchdog but will not trigger the feed the dog operation. The system will reboot after 10 seconds.

```bash
root@OK3576-UP5-buildroot:~# fltest_watchdogrestart
```

**Note: Regarding the timeout mechanism: The timeout value set from user space is not directly passed to the hardware. The Watchdog driver internally maintains a table of 16 preset timeout values. The driver selects the closest value from this table as the actual timeout according to the following rules:**

| **Request timeout**| **Watchdog final timeout.**|
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

### 4.8 RTC Function Test

**Note: Before testing the RTC, please ensure that a button cell battery has been fitted to the board and that the battery voltage is within the normal range.**

RTC testing primarily involves setting the software and hardware clocks using `date` and `hwclock` to verify whether the software clock remains synchronised with the RTC clock when the board is powered down and then powered up again.

Set the software time:

```bash
root@OK3576-UP5-buildroot:~# date -s "2026-05-27 10:05:02"
Wed May 27 10:05:02 UTC 2026
```

Synchronise the software time with the hardware time

```bash
root@OK3576-UP5-buildroot:~# hwclock -wu	
```

Displays the hardware time:

```bash
root@OK3576-UP5-buildroot:~# hwclock -r
Wed May 27 10:05:16 2026  0.000000 seconds
```

Then power the board off and on again; once the system has booted up, check the system time and you will see that it has been synchronised:

```bash
root@OK3576-UP5-buildroot:~# date
Wed May 27 10:06:32 UTC 2026
```

### 4.9 USB3.0

OK3576-UP5 supports 1 x USB3.0 interface. Please connect USB devices such as mice, keyboards, and flash drives to any onboard USB HOST port, with full hot-plug support for these devices. Here, mounting a USB flash drive is used as an example. USB flash drive testing has currently been verified up to 32 GB; capacities above 32 GB have not been tested.

The terminal will print the information about the USB flash disk. Since there are many kinds of USB flash disks, the actual information may be different.

After booting the development board, connect a USB drive to the USB host interface on the board;

Enter the following command to view the kernel logs.

```bash
root@OK3576-UP5-buildroot:~# dmesg | tail -10
```

Check the mount directory:

```bash
root@OK3576-UP5-buildroot:~# mount | grep "sda1"
/dev/sda1 on /run/media/sda1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

You can see`/run/media/sda1`is the mount path for the USB storage device

View the contents of the U disk (the`sda1`shall be subject to the actual situation).

```bash
root@OK3576-UP5-buildroot:~# ls -l /run/media/sda1/
total 1024016
-rwxrwx--- 1 root disk         0 Jan 24  2024 logo.img
-rwxrwx--- 1 root disk 524288000 Dec 31  2029 test
-rwxrwx--- 1 root disk 524288000 May  6  2026 test.bin
-rwxrwx--- 1 root disk         2 Jun 11  2026 test.txt
```

Write test. The write speed is limited by the specific storage device:

```bash
root@OK3576-UP5-buildroot:~# dd if=/dev/zero of=/run/media/sda1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 26.2071 s, 20.0 MB/s
```

Read test:

```bash
root@OK3576-UP5-buildroot:~# dd if=/run/media/sda1/test of=/dev/null bs=1M  iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 7.13761 s, 73.5 MB/s
```

After using the USB drive, use umount to unmount it before unplugging:

```bash
root@OK3576-UP5-buildroot:/# umount /run/media/sda1
```

**Note: Exit the mount path before unplugging the USB drive.**

### 4.10 LCD Backlight Adjustment

The backlight brightness setting range is (0— 200), where 200 represents the highest brightness and 0 indicates the backlight is turned off. After connecting a MIPI display to the MIPI DSI A, power up to start the system. Enter the following command in the terminal after system startup for backlight testing.

View the models that support backlight adjustment:

```bash
root@OK3576-UP5-buildroot:~# ls /sys/class/backlight/
backlight
```

Take dsi0 as example:：

- Check the current screen backlight value:

```bash
root@OK3576-UP5-buildroot:~# cat /sys/class/backlight/backlight/brightness
200
```

- Turn off the backlight:

```bash
root@OK3576-UP5-buildroot:~# echo 0 > /sys/class/backlight/backlight/brightness
```

- Turn on the backlight:：

```bash
root@OK3576-UP5-buildroot:~# echo 200 > /sys/class/backlight/backlight/brightness
```

### 4.11 USB Mouse Test

Connect a USB mouse to the USB port on the OK3576-UP5 platform and use the “dmesg” command; the output on the serial terminal is as follows:

```bash
root@OK3576-UP5-buildroot:~# dmesg | grep -i mouse
[  450.567978] usb 1-1.2: Product: USB Mouse
[  450.624289] input: SIGMACHIP USB Mouse as /devices/platform/23400000.usb/xhci-hcd.0.auto/usb1/1-1/1-1.2/1-1.2:1.0/0003:09DA:8736.0001/input/input8
[  450.680153] hid-generic 0003:09DA:8736.0001: input,hidraw0: USB HID v1.10 Mouse [SIGMACHIP USB Mouse] on usb-xhci-hcd.0.auto-1.2/input0
[  458.247967] usb 1-1.2: Product: USB Mouse
[  458.303925] input: SIGMACHIP USB Mouse as /devices/platform/23400000.usb/xhci-hcd.0.auto/usb1/1-1/1-1.2/1-1.2:1.0/0003:09DA:8736.0002/input/input9
[  458.360221] hid-generic 0003:09DA:8736.0002: input,hidraw0: USB HID v1.10 Mouse [SIGMACHIP USB Mouse] on usb-xhci-hcd.0.auto-1.2/input0
```

An arrow cursor appears on the screen, and the mouse is now working properly.

### 4.12 ADC Test

The OK3576-UP5 development board features eight internal ADC channels. An adjustable resistor is connected to the saradc4, saradc5 and saradc6 channels. For the purposes of this test, saradc4 has been selected. The hardware diagram of the ADC pins is shown below; the input voltage is applied to pin 1 of P2. The chip uses a 1.8V reference voltage, corresponding to a maximum digital value of 4096 for its 12-bit ADC.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364751_c97feb94_544d_4b13_8bde_461afd88597b.png)

| **GPADC\_A**| **saradc4**|
|:----------:|:----------:|
| **GPADC\_B**| **saradc5**|
| **GPADC\_C**| **saradc6**|

Test the value of the adjustable resistor; the following example uses GPADC\_A:

```bash
root@OK3576-UP5-buildroot:~# cd /sys/bus/iio/devices/iio\:device0/
```

```bash
root@OK3576-UP5-buildroot:/sys/bus/iio/devices/iio:device0# cat in_voltage4_raw
2455
```

### 4.13 CAN Test

**Note: There is currently an issue with byte alignment between CAN and DMA in 3576, which prevents CAN from using DMA. If you need to use the CAN protocol on the RK3576, please bear the following two points in mind:**

CAN Initialisation:  
To use the standard CAN protocol (not CAN-FD), the following two configurations are required:   
Device Tree Configuration:  
Locate the “can0” and “can1” nodes in the “rk3576.dtsi” file and add the following properties:

```bash
rockchip,rx-max-data = <4>;
```

Disable CAN-FD and configure the baud rate.

```bash
root@OK3576-UP5-buildroot:~# ip link set can0 down
root@OK3576-UP5-buildroot:~# ip link set can0 type can bitrate 100000 fd off
root@OK3576-UP5-buildroot:~# ip -details -statistics link show can0
root@OK3576-UP5-buildroot:~# ip link set can0 up
```

If the CAN-FD protocol is used, the device tree modifications described above are not required; simply refer to the subsequent section on CAN-FD configuration to set it up.

The CAN-FD FIFO is full.

When communicating via CAN-FD, in scenarios where the CPU and memory load are extremely high (over 85% for each core) paired with heavy CAN-FD data traffic, frame loss and frame error issues may occur due to the CAN-FD FIFO buffer overflow. If this problem arises, you can consider reducing the CPU load, or adopting a real-time kernel. The real-time kernel patch is located in the root directory of the SDK. You can apply the patch for testing as needed.

**CAN-FD Test**

The OK3576-UP5 platform features two CAN bus interfaces. The CAN wiring method is as follows: Connect the CAN-H terminal to the H-terminal of other CAN devices; connect the CAN-L terminal to the L-terminal of other CAN devices; connect the CAN-GND terminal to the GND terminal of other CAN devices.

Short-circuit CAN0 and CAN1, as shown in the diagram:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364860_7772cf6d_cd07_4922_a1df_cd79a0e505f9.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607364979_1a075f0c_cf69_4dfe_8257_8154720acc9b.png)

Short-circuit CAN0 and CAN1, then execute the following command in the development board terminal to view CAN network devices:

```bash
root@OK3576-UP5-buildroot:~# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:78

can1      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:79

eth0      Link encap:Ethernet  HWaddr DA:38:D0:9B:6E:1A
          inet addr:172.20.0.145  Bcast:172.20.0.255  Mask:255.255.255.0
          inet6 addr: fd5d:4c21:e8f4:0:d838:d0ff:fe9b:6e1a/64 Scope:Global
          inet6 addr: fe80::d838:d0ff:fe9b:6e1a/64 Scope:Link
          inet6 addr: fda2:e684:2119:0:d838:d0ff:fe9b:6e1a/64 Scope:Global
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:349 errors:0 dropped:10 overruns:0 frame:0
          TX packets:66 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:32753 (31.9 KiB)  TX bytes:5846 (5.7 KiB)
          Interrupt:80

eth1      Link encap:Ethernet  HWaddr 4A:0B:98:65:6C:AE
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:82

eth2      Link encap:Ethernet  HWaddr 46:7C:17:CF:3F:6F
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:2 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:184 (184.0 B)  TX bytes:184 (184.0 B)

mlan0     Link encap:Ethernet  HWaddr 58:02:05:1D:1A:DD
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

p2p0      Link encap:Ethernet  HWaddr 5A:02:05:1D:1A:DD
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

uap0      Link encap:Ethernet  HWaddr 5A:02:05:1D:1B:DD
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

Configure parameters for CAN0 and CAN1:

```bash
root@OK3576-UP5-buildroot:/# ip link set can0 down
```

```bash
root@OK3576-UP5-buildroot:/# ip link set can0 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
```

```bash
root@OK3576-UP5-buildroot:/# ip link set can1 down
```

```bash
root@OK3576-UP5-buildroot:/# ip link set can1 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
```

The above commands configure CAN0 and CAN1 to CAN-FD mode.

Enable the CAN devices:

```bash
root@OK3576-UP5-buildroot:/# ip link set can0 up
```

```bash
root@OK3576-UP5-buildroot:/# echo 4096 > /sys/class/net/can0/tx_queue_len
```

```bash
root@OK3576-UP5-buildroot:/# ip link set can1 up
```

```bash
root@OK3576-UP5-buildroot:/# echo 4096 > /sys/class/net/can1/tx_queue_len
```

Set CAN0 as the server (execute the following command on the server side first):

```bash
root@OK3576-UP5-buildroot:~# candump can0&
[1] 2268
```

Set CAN1 as the client (the client sends data):

```bash
root@OK3576-UP5-buildroot:~# cansend can1 1F334455#1122334455667788
root@OK3576-UP5-buildroot:~#   can0  1F334455   [8]  11 22 33 44 55 66 77 88
```

### 4.14 TF Test

**Note: The SD card mounting directory`/run/media/`supports hot swapping, and currently supports formats including FAT32, exFAT, ext4, etc.**

Insert the TF card into the TF card slot on the carrier board, then enter the following command:

```bash
root@OK3576-UP5-buildroot:~# dmesg | tail -10
```

Under normal circumstances, the following information will be printed:

```bash
[   27.659838] mmc_host mmc1: Bus speed (slot 0) = 200000Hz (slot req 200000Hz, actual 200000HZ div = 0)
[   27.706609] mmc1: error -110 whilst initialising SD card
[   27.719289] mmc_host mmc1: Bus speed (slot 0) = 187500Hz (slot req 187500Hz, actual 187500HZ div = 0)
[   27.887011] mmc_host mmc1: Bus speed (slot 0) = 198000000Hz (slot req 200000000Hz, actual 198000000HZ div = 0)
[   28.006364] dwmmc_rockchip 2a310000.mmc: Successfully tuned phase to 119
[   28.006374] mmc1: new ultra high speed SDR104 SDHC card at address 59b4
[   28.006774] mmcblk1: mmc1:59b4 SDU1  15.0 GiB
[   28.007718]  mmcblk1: p1
[   28.175027] FAT-fs (mmcblk1p1): utf8 is not a recommended IO charset for FAT filesystems, filesystem will be case sensitive!
[   28.177846] FAT-fs (mmcblk1p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

Check the mount directory:

```bash
root@OK3576-UP5-buildroot:~# mount | grep "mmcblk1p1"
/dev/mmcblk1p1 on /run/media/mmcblk1p1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

Write test:

```bash
root@OK3576-UP5-buildroot:~# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 44.1266 s, 11.9 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK3576-UP5-buildroot:~# dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.137512 s, 3.8 GB/s
```

After using the TF card, you need to use umount to unmount the TF card before ejecting it.

```bash
root@OK3576-UP5-buildroot:~# umount /run/media/mmcblk1p1
```

**Note: Exit the TF card mount path before removing the TF card.**

### 4.15 eMMC Test

The eMMC on the OK3576-UP5 platform operates by default in HS400 mode at a clock speed of 200 MHz. Below is a brief test of the eMMC’s read and write speeds, using the ext4 file system as an example.

First, you can check the storage information on the current development board:

```bash
root@OK3576-UP5-buildroot:~# memInfo.sh
-------------------------------------------------------------
Memory Information
-------------------------------------------------------------

               total        used        free      shared  buff/cache   available
Mem:         3990244      164116     3634536        7280      191592     3775240
Swap:              0           0           0

Filesystem      Size  Used Avail Use% Mounted on
/dev/root        27G  1.6G   24G   7% /
devtmpfs        1.9G  4.0K  1.9G   1% /dev
tmpfs           2.0G     0  2.0G   0% /dev/shm
tmpfs           780M  1.8M  778M   1% /run
tmpfs           2.0G  4.0K  2.0G   1% /tmp
/dev/mmcblk0p7  1.9G  170M  1.7G  10% /userdata
```

Write test:

```bash
root@OK3576-UP5-buildroot:~# dd if=/dev/zero of=/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 4.61141 s, 114 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK3576-UP5-buildroot:~# dd if=/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 0.17755 s, 3.0 GB/s
```

### 4.16 Ethernet Configuration

The OK3576-UP5 board is equipped with two Gigabit Ethernet ports. With an Ethernet cable connected, the factory default configuration sets eth0 to a static IP, while eth1 is not configured.

#### 4.16.1 Network Card Test

- Use the ifconfig command to view network interface information.

```bash
root@OK3576-UP5-buildroot:~# ifconfig
eth0      Link encap:Ethernet  HWaddr DA:38:D0:9B:6E:1A
          inet addr:172.20.0.145  Bcast:172.20.0.255  Mask:255.255.255.0
          inet6 addr: fd5d:4c21:e8f4:0:d838:d0ff:fe9b:6e1a/64 Scope:Global
          inet6 addr: fe80::d838:d0ff:fe9b:6e1a/64 Scope:Link
          inet6 addr: fda2:e684:2119:0:d838:d0ff:fe9b:6e1a/64 Scope:Global
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:457 errors:0 dropped:9 overruns:0 frame:0
          TX packets:31 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:36276 (35.4 KiB)  TX bytes:2730 (2.6 KiB)
          Interrupt:80

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

```

Use the Tethtool command to view information such as the network interface’s link status, speed, duplex mode and auto-negotiation.

```bash
root@OK3576-UP5-buildroot:~# ethtool eth0
Settings for eth0:
        Supported ports: [ TP    MII ]
        Supported link modes:   10baseT/Half 10baseT/Full
                                100baseT/Half 100baseT/Full
                                1000baseT/Full
        Supported pause frame use: Symmetric Receive-only
        Supports auto-negotiation: Yes
        Supported FEC modes: Not reported
        Advertised link modes:  10baseT/Half 10baseT/Full
                                100baseT/Half 100baseT/Full
                                1000baseT/Full
        Advertised pause frame use: Symmetric Receive-only
        Advertised auto-negotiation: Yes
        Advertised FEC modes: Not reported
        Link partner advertised link modes:  10baseT/Full
                                             100baseT/Full
                                             1000baseT/Full
        Link partner advertised pause frame use: No
        Link partner advertised auto-negotiation: Yes
        Link partner advertised FEC modes: Not reported
        Speed: 1000Mb/s
        Duplex: Full
        Auto-negotiation: on
        master-slave cfg: preferred slave
        master-slave status: slave
        Port: MII
        PHYAD: 1
        Transceiver: external
        Supports Wake-on: ug
        Wake-on: d
        Current message level: 0x0000003f (63)
                               drv probe link timer ifdown ifup
        Link detected: yes
```

#### 4.16.2 Static IP Setting

**Note:** 

- **This method sets a static network IP. Once configured, the network interface card (NIC) should obtain the corresponding network IP, which indicates normal operation. If the network is unreachable (ping fails), ensure that multiple NIC in the same subnet are configured correctly. Adjust the routing based on the scenario or use different subnets by default;**

- **The OK3576-UP5 board features two Gigabit Ethernet ports, designated as eth0 and eth1; the default IP address for eth0 is 192.168.0.232.**

```bash
root@OK3576-UP5-buildroot:/# vi /etc/systemd/network/10-eth0.network  // Open the configuration file
[Match]
Name=eth0
KernelCommandLine=!root=/dev/nfs
[Network]
Address=192.168.0.232/24
Gateway=192.168.0.1
DNS=114.114.114.114
```

- **Name is used to specify the network card that needs a fixed IP;**
- **Address: Specifies the IP address to be fixed;**
- **Gateway is used to specify the gateway;**
- **DNS is used to specify the domain name resolution server.**

Restart the network service after the setup is completed.

```bash
root@OK3576-UP5-buildroot:~# systemctl restart systemd-networkd
```

#### 4.16.3 Obtaining a Dynamic IP Address

**Note: This method sets eth1 to obtain an IP address automatically. If you wish to use eth0, simply set the Name field to eth0**.

```bash
root@OK3576-UP5-buildroot:~# vi /etc/systemd/network/10-eth1.network   	  // Open the configuration file
[Match]
Name=eth1
KernelCommandLine=!root=/dev/nfs
[Network]
DHCP=yes
```

Restart the network service after the setup is completed

```bash
root@OK3576-UP5-buildroot:~# systemctl restart systemd-networkd
```

#### 4.16.4 Testing Network Performance

📌 Path:`User Materials/3-Tools/iperf3.21_64.zip`

Unzip the iperf3.21\_64.zip file to any location on your PC. Navigate to the iperf3.21\_64\\iperf3.21 directory.

On your PC, navigate to the directory containing iperf3.exe, hold down the Shift key, right-click in the folder, and select Open PowerShell window here. Run the command: .\\iperf3.exe -s.

```bash
PS C:\Users\Administrator\iperf\iperf-3.1.3-win64> .\iperf3.exe -s
-----------------------------------------------------------
Server listening on 5201
-----------------------------------------------------------
Accepted connection from 192.168.0.232, port 51612
[  5] local 192.168.0.100 port 5201 connected to 192.168.0.232 port 51620
[ ID] Interval           Transfer     Bandwidth
[  5]   0.00-1.00   sec   113 MBytes   948 Mbits/sec
[  5]   1.00-2.00   sec   113 MBytes   949 Mbits/sec
[  5]   2.00-3.00   sec   113 MBytes   949 Mbits/sec
[  5]   3.00-4.00   sec   113 MBytes   949 Mbits/sec
[  5]   4.00-5.00   sec   113 MBytes   949 Mbits/sec
[  5]   5.00-6.00   sec   113 MBytes   949 Mbits/sec
[  5]   6.00-7.00   sec   113 MBytes   949 Mbits/sec
[  5]   7.00-8.00   sec   113 MBytes   949 Mbits/sec
[  5]   8.00-9.00   sec   113 MBytes   949 Mbits/sec
[  5]   9.00-10.00  sec   113 MBytes   949 Mbits/sec
[  5]  10.00-10.00  sec   197 KBytes   768 Mbits/sec
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bandwidth
[  5]   0.00-10.00  sec  0.00 Bytes  0.00 bits/sec                  sender
[  5]   0.00-10.00  sec  1.11 GBytes   949 Mbits/sec                  receiver
-----------------------------------------------------------
Server listening on 5201
-----------------------------------------------------------
```

Traffic generation test on the development board.

```bash
root@OK3576-UP5-buildroot:~# iperf3 -c 192.168.0.100 -i 1 -t 10	   // 192.168.0.100 is the PC's IP address
Connecting to host 192.168.0.100, port 5201
[  5] local 192.168.0.232 port 51620 connected to 192.168.0.100 port 5201
[ ID] Interval           Transfer     Bitrate         Retr  Cwnd
[  5]   0.00-1.00   sec   114 MBytes   953 Mbits/sec    0    220 KBytes
[  5]   1.00-2.00   sec   113 MBytes   950 Mbits/sec    0    220 KBytes
[  5]   2.00-3.00   sec   113 MBytes   948 Mbits/sec    0    220 KBytes
[  5]   3.00-4.00   sec   113 MBytes   950 Mbits/sec    0    220 KBytes
[  5]   4.00-5.00   sec   113 MBytes   948 Mbits/sec    0    220 KBytes
[  5]   5.00-6.00   sec   113 MBytes   950 Mbits/sec    0    220 KBytes
[  5]   6.00-7.00   sec   113 MBytes   949 Mbits/sec    0    220 KBytes
[  5]   7.00-8.00   sec   113 MBytes   950 Mbits/sec    0    220 KBytes
[  5]   8.00-9.00   sec   113 MBytes   949 Mbits/sec    0    220 KBytes
[  5]   9.00-10.00  sec   113 MBytes   949 Mbits/sec    0    220 KBytes
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  1.11 GBytes   950 Mbits/sec    0             sender
[  5]   0.00-10.00  sec  1.11 GBytes   949 Mbits/sec                  receiver

iperf Done.
```

The throughput test for the eth0 Gigabit Ethernet port reaches approximately 950 Mbits/sec, which meets the network performance requirements.

### 4.17 Playback/Recording Test

The OK3576-UP5 is equipped with the NAU88C22YG audio codec chip, which integrates one standard 3.5mm audio jack (P38) and two PH2.0-2P white sockets (P36, P37). It supports driving an 8Ω speaker with a maximum output power of 1W. Before starting the playback test, insert a prepared headphone into the handset jack, or connect the speaker to the corresponding slot on the carrier board to proceed with the test.

#### 4.17.1 HDMI Playback

- View the playback audio device:

```bash
root@OK3576-UP5-buildroot:~# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchipdp0 [rockchip-dp0], device 0: rockchip-dp0 spdif-hifi-0 [rockchip-dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi [rockchip-hdmi], device 0: rockchip-hdmi i2s-hifi-0 [rockchip-hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Play audio via HDMI.

```bash
root@OK3576-UP5-buildroot:~# gst-play-1.0 /userdata/piano2-CoolEdit.mp3 --audiosink="alsasink device=hw:rockchiphdmi,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:06.3 / 0:00:06.3
Reached end of play list.
```

#### 4.17.2 SPKOUT Playback

- View the playback audio device:

```bash
root@OK3576-UP5-buildroot:~# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchipdp0 [rockchip-dp0], device 0: rockchip-dp0 spdif-hifi-0 [rockchip-dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi [rockchip-hdmi], device 0: rockchip-hdmi i2s-hifi-0 [rockchip-hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Configure playback parameters:
  
  - Headphone channel setting:

```bash
root@OK3576-UP5-buildroot:~# amixer -c rockchipnau8822 sset 'Headphone' 60% on
Simple mixer control 'Headphone',0
  Capabilities: volume pswitch
  Playback channels: Front Left - Front Right
  Capture channels: Front Left - Front Right
  Limits: 0 - 63
  Front Left: 38 [60%] [-19.00dB] Playback [on]
  Front Right: 38 [60%] [-19.00dB] Playback [on]

```

```bash
root@OK3576-UP5-buildroot:~# amixer -c rockchipnau8822 sset 'hp switch' on
Simple mixer control 'hp switch',0
  Capabilities: pswitch pswitch-joined
  Playback channels: Mono
  Mono: Playback [on]
```

- Speaker channel setting:

```bash
root@OK3576-UP5-buildroot:~# amixer -c rockchipnau8822 sset 'Speaker' 100% on
Simple mixer control 'Speaker',0
  Capabilities: volume pswitch
  Playback channels: Front Left - Front Right
  Capture channels: Front Left - Front Right
  Limits: 0 - 63
  Front Left: 38 [60%] [-19.00dB] Playback [on]
  Front Right: 38 [60%] [-19.00dB] Playback [on]
```

```bash
root@OK3576-UP5-buildroot:~# amixer -c rockchipnau8822 sset 'spk switch' on
Simple mixer control 'spk switch',0
  Capabilities: pswitch pswitch-joined
  Playback channels: Mono
  Mono: Playback [on]
```

Play audio via SPKOUT:

```bash
root@OK3576-UP5-buildroot:~# gst-play-1.0 /userdata/piano2-CoolEdit.mp3 --audiosink="alsasink device=plughw:rockchipnau8822,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:06.3 / 0:00:06.3
Reached end of play list.
```

Plug a headphone into the SPKOUT interface, and you will hear the corresponding audio output.

#### 4.17.3 MIC Input

View the recording audio device:

```bash
root@OK3576-UP5-buildroot:~# arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi [rockchip-hdmi], device 0: rockchip-hdmi i2s-hifi-0 [rockchip-hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

Perform MIC audio recording:

```bash
root@OK3576-UP5-buildroot:~# arecord -D hw:rockchipnau8822,0 -d 5 -f cd -t wav test1.wav
Recording WAVE 'test1.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
```

Playback the recorded audio from the MIC.

```bash
root@OK3576-UP5-buildroot:~# aplay test1.wav
Playing WAVE 'test1.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
```

### 4.18 WiFi Test

**Note:** 

- **Due to varying network environments, please configure according to your actual situation when conducting this experiment;**
- **The OK3576-UP5 platform supports the AW-CM358 Wi-Fi and Bluetooth combo module;**
- **The device can only operate in one mode (STA mode or AP mode) at any one time; it does not support simultaneous operation in both STA and AP modes.**

#### 4.18.1 STA Mode

Before using the Wi-Fi functionality, follow these steps to configure it:

- Assume the WiFi hotspot SSID is forlinx and the password is 123456.

Input the following command in the terminal:

```shell
root@OK3576-UP5-buildroot:~# fltest_wifi.sh -i mlan0 -s "forlinx" -p "123456"
killall: dnsmasq: no process killed
wifi mlan0
ssid forlinx
pasw 123456
waiting...
try to connect again...
udhcpc: started, v1.36.1
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.10.21.94, server 10.10.23.254
udhcpc: lease of 10.10.21.94 obtained from 10.10.23.254, lease time 1800
deleting routers
adding dns 119.29.29.29
adding dns 114.114.114.114
Finshed!
```

In the above command:

| **Parameter**| **Meaning**|
|:-----------|:-----------|
| -i| The parameters used vary depending on the Wi-Fi module; specify the WiFi device name. |
| -s| The actual Wi-Fi hotspot name to connect to.|
| -P| The parameter following -p refers to the password of the actual Wi-Fi hotspot to connect to; if the hotspot has no password, write NONE after -p.|

Check whether you can ping an external network. Enter the following command in the terminal:

```shell
root@OK3576-UP5-buildroot:~# ping www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=53 time=33.5 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=53 time=32.0 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=53 time=31.5 ms
64 bytes from 211.149.226.120: icmp_seq=4 ttl=53 time=31.8 ms
64 bytes from 211.149.226.120: icmp_seq=5 ttl=53 time=32.4 ms
64 bytes from 211.149.226.120: icmp_seq=6 ttl=53 time=31.9 ms
64 bytes from 211.149.226.120: icmp_seq=7 ttl=53 time=31.5 ms
64 bytes from 211.149.226.120: icmp_seq=8 ttl=53 time=32.7 ms
64 bytes from 211.149.226.120: icmp_seq=9 ttl=53 time=32.9 ms

--- s-526319.gotocdn.com ping statistics ---
9 packets transmitted, 9 received, 0% packet loss, time 14576ms
rtt min/avg/max/mdev = 31.530/32.232/33.500/0.635 ms
```

Press Ctrl+C to stop. If the ping is successful, it indicates that the network is now working properly.

#### 4.18.2 AP Mode

Before using the hotspot functionality, ensure that the network interface is connected and can access the internet.

```bash
root@OK3576-UP5-buildroot:~# fltest_hostapd.sh
uap0: interface state ENABLED->DISABLED
uap0: AP-STA-DISCONNECTED 3e:46:85:f4:9c:93
uap0: AP-DISABLED
uap0: CTRL-EVENT-TERMINATING
nl80211: deinit ifname=uap0 disabled_11b_rates=0
HT (IEEE 802.11n) with WPA/WPA2 requires CCMP/GCMP to be enabled, disabling HT capabilities
root@OK3576-UP5-buildroot:~# uap0: interface state UNINITIALIZED->ENABLED
uap0: AP-ENABLED
uap0: IEEE 802.11 driver had channel switch: freq=2452, ht=0, vht_ch=0x0, he_ch=0x0, offset=0, width=0 (20 MHz (no HT)), cf1=2452, cf2=0
uap0: CTRL-EVENT-CHANNEL-SWITCH freq=2452 ht_enabled=0 ch_offset=0 ch_width=20 MHz (no HT) cf1=2452 cf2=0 dfs=0
```

WIFI hotspot name: OK3576\_WIFI\_2.4G\_AP

WIFI hotspot password: 12345678

At this point, a mobile phone can connect to this hotspot and access the internet.

### 4.19 Bluetooth Testing

In the OK3576-UP5 development board, the carrier board AW-CM358 module integrates Bluetooth functionality. This section demonstrates data transmission between a mobile phone and the development board via Bluetooth, which supports Bluetooth 5.0. Please note that before testing Bluetooth, you must first complete the installation of the Wi-Fi module and firmware in accordance with the previous section, Wi-Fi Testing..

- Bluetooth Configuration

```shell
root@OK3576-UP5-buildroot:~# bluetoothctl             // Open the BlueZ Bluetooth tool
[NEW] Controller B8:4D:43:12:43:6F forlinx [default]
Agent registered

[bluetooth]# power on                                    // Power on the Bluetooth device
Changing power on succeeded

[bluetooth]# pairable on                                  // Enable pairing mode
Changing pairable on succeeded

[bluetooth]# discoverable on                              // Enable discoverable mode
hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn
hci0 new_settings: powered connectable discoverable bondable ssp br/edr le secure-conn
Changing discoverable on succeeded
[CHG] Controller 58:02:05:1D:1A:DC Discoverable: yes
[bluetooth]# agent on                                    // Start the agent
Agent is already registered

[bluetooth]# default-agent                                // Set as the default agent
Default agent request successful
```

Passive pairing on the development board:

Turn on your mobile phone’s Bluetooth search function; a device named OK3576-UP5-buildroot will appear. Select it to pair.   
The print information on the development board is as follows. Enter "yes":

```shell
[bluetooth]# default-agent
Default agent request successful
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
[NEW] Device C8:BC:9C:7D:CA:3C C8-BC-9C-7D-CA-3C
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 14
[CHG] Device C8:BC:9C:7D:CA:3C Name: Pura 70
[CHG] Device C8:BC:9C:7D:CA:3C Alias: Pura 70
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
Request confirmation
[agent] Confirm passkey 018975 (yes/no): yes
hci0 new_link_key C8:BC:9C:7D:CA:3C type 0x05 pin_len 0 store_hint 1
hci0 device_flags_changed: C8:BC:9C:7D:CA:3C (BR/EDR)
     supp: 0x00000000  curr: 0x00000000
[CHG] Device C8:BC:9C:7D:CA:3C INFO: 0x0007 (7)
[CHG] Device C8:BC:9C:7D:CA:3C Bonded: yes
```

View and remove connected devices:

```bash
[C8-BC-9C-7D-CA-3C]# devices
Device C8:BC:9C:7D:CA:3C Pura 70
[C8-BC-9C-7D-CA-3C]# remove C8:BC:9C:7D:CA:3C
[DEL] Player /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/player0 [default]
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
[DEL] Transport /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/fd0
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep1
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep2
[DEL] Endpoint /org/bluez/hci0/dev_C8_BC_9C_7D_CA_3C/sep3
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR connected eir_len 5
hci0 C8:BC:9C:7D:CA:3C type BR/EDR disconnected with reason 2
[CHG] Device C8:BC:9C:7D:CA:3C ServicesResolved: no
Device has been removed
[CHG] Device C8:BC:9C:7D:CA:3C INFO: 0x0008 (8)
[CHG] Device C8:BC:9C:7D:CA:3C Connected: no
[DEL] Device C8:BC:9C:7D:CA:3C Pura 70
[bluetooth]#
```

Development board receives files.  
After successful pairing, you can send a file from the mobile phone to the OK3576-UP5 development board via Bluetooth.   
Received files are stored in the /root/ directory.

```bash
root@OK3576-UP5-buildroot:~# ls /root/*.jpg
/root/IMG_20251208_205724.jpg
```

Development board sends files.   
You can send a file from the OK3576-UP5 development board to a mobile phone.   
Test as follows:

```bash
root@OK3576-UP5-buildroot:~# fltest_obexctl.sh
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
[C8:BC:9Status: queued
[C8:BC:9Name: piano2-CoolEdit.mp3
[C8:BC:9Size: 101760
[C8:BC:9Filename: /userdata/piano2-CoolEdit.mp3
[C8:BC:9Session: /org/bluez/obex/client/session0
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: active
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 8024 (@8KB/s 00:11)
```

**Note: For certain manufacturers' phones, received files must include a file extension; otherwise, they may be rejected by the Android system. Therefore, please try to use files with extensions for testing.**

### 4.20 Quectel EM05-CE Module Test

The OK3576-UP5 supports a 4G moduleEM05-CE. Connect the 4G module and insert the SIM card before powering on the development board.

**Note: Ensure the correct insertion direction for the SIM card, as there are printed markings on the carrier board. Also, connect the antenna and use a Micro SIM card for testing.**

4G Module Installation:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789959914853_6a8124fe_cd1f_4d2b_a6df_973935fe90f3.png)

SIM card type:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365078_72355395_c1b0_47b7_ae99_434a7c2af9a3.png)

Installation:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789959929541_2047a4ed_cebb_4cfe_b21d_d8e9cde993cf.png)

After connecting the module and powering on the development board and module, you can check the USB status using the lsusb command.

```bash
root@OK3576-UP5-buildroot:~# lsusb                   // View the 4G module node
Bus 002 Device 002: ID 04b4:6500
Bus 001 Device 001: ID 1d6b:0002 Linux 6.1.141 xhci-hcd xHCI Host Controller
Bus 001 Device 003: ID 2c7c:0125 Quectel EM05-CN     // VID and PID of the EM05
Bus 001 Device 002: ID 04b4:6502
Bus 002 Device 001: ID 1d6b:0003 Linux 6.1.141 xhci-hcd xHCI Host Controller
```

Check the device node status under /dev.

```bash
root@OK3576-UP5-buildroot:~# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```

After successful device identification, you can perform dial-up Internet access testing; fltest\_quectel.sh calls quectelCM; for the specific commands, please refer to /usr/bin/fltest\_quectel.sh, the print information as follows:

```bash
root@OK3576-UP5-buildroot:~# quectelCM &
[1] 3434
root@OK3576-UP5-buildroot:~# [06-13_07:12:31:157] QConnectManager_Linux_V1.6.7
[06-13_07:12:31:158] Find /sys/bus/usb/devices/1-1.1 idVendor=0x2c7c idProduct=0x125, bus=0x001, dev=0x005
[06-13_07:12:31:158] Auto find qmichannel = /dev/cdc-wdm0
[06-13_07:12:31:158] Auto find usbnet_adapter = wwan0
[06-13_07:12:31:158] netcard driver = qmi_wwan_q, driver version = V1.2.9
[06-13_07:12:31:158] Modem works in QMI mode
[06-13_07:12:31:161] cdc_wdm_fd = 7
[06-13_07:12:31:259] Get clientWDS = 5
[06-13_07:12:31:290] Get clientDMS = 1
[06-13_07:12:31:323] Get clientNAS = 2
[06-13_07:12:31:355] Get clientUIM = 1
[06-13_07:12:31:387] Get clientWDA = 1
[06-13_07:12:31:419] requestBaseBandVersion EM05CNFDR08A03M1G_ND
[06-13_07:12:31:546] requestGetSIMStatus SIMStatus: SIM_READY
[06-13_07:12:31:611] requestGetProfile[pdp:1 index:1] cbnet///0/IPV4V6
[06-13_07:12:31:643] requestRegistrationState2 MCC: 460, MNC: 15, PS: Attached, DataCap: LTE
[06-13_07:12:31:675] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[06-13_07:12:31:675] ip addr flush dev wwan0
[06-13_07:12:31:680] ip link set dev wwan0 down
[06-13_07:12:31:740] requestSetupDataCall WdsConnectionIPv4Handle: 0x86d5eb30
[06-13_07:12:31:868] ip link set dev wwan0 up
[06-13_07:12:31:871] busybox udhcpc -f -n -q -t 5 -i wwan0
udhcpc: started, v1.36.1
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.6.110.29, server 10.6.110.30
udhcpc: lease of 10.6.110.29 obtained from 10.6.110.30, lease time 7200
[06-13_07:12:31:904] deleting routers
[06-13_07:12:31:919] adding dns 43.239.172.1
[06-13_07:12:31:919] adding dns 43.239.172.2
```

The ping domain name test.

```bash
root@OK3576-UP5-buildroot:~# ping -I wwan0 www.forlinx.com -c 3     // Ping 3 times via wwan0
PING s-526319.gotocdn.com (211.149.226.120) from 10.6.110.29 wwan0: 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=48 time=145 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=48 time=118 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=48 time=106 ms

--- s-526319.gotocdn.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2681ms
rtt min/avg/max/mdev = 105.732/122.930/144.579/16.168 ms
```

### 4.21 Quectel RM500U-5G Module Test

The OK3576-UP5 supports a 5G moduleRM500U. Connect the 5G module and insert the SIM card before powering on the development board.

**Note: Ensure the correct insertion direction for the SIM card, as there are printed markings on the carrier board. Also, connect the antenna and use a Micro SIM card for testing.**

5G Module Installation:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789960060034_1f26eabc_7d32_4d58_8320_7822cf7c976d.png)

SIM card type:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365293_31b68e03_23d0_4889_b96f_1505fb7d78e6.png)

Installation:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789960381007_9a0a70ed_9715_4d51_9798_ffb46f6035f7.png)

After connecting the module and powering on the development board and module, you can check the USB status using the lsusb command.：

```bash
root@OK3576-UP5-buildroot:~# lsusb                    // View the 5G module node
Bus 002 Device 002: ID 04b4:6500
Bus 001 Device 001: ID 1d6b:0002 Linux 6.1.141 xhci-hcd xHCI Host Controller
Bus 001 Device 002: ID 04b4:6502
Bus 002 Device 003: ID 2c7c:0900 Quectel RM500U-CNV   // RM500U 5G module node
Bus 002 Device 001: ID 1d6b:0003 Linux 6.1.141 xhci-hcd xHCI Host Controller

```

Check the device node:：

```bash
root@OK3576-UP5-buildroot:~# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3  /dev/ttyUSB4
```

After successful device identification. you can perform dial-up Internet access testing;

```bash
root@OK3576-UP5-buildroot:~# quectelCM &
[1] 2893
root@OK3576-UP5-buildroot:~# [06-15_06:30:53:242] QConnectManager_Linux_V1.6.7
[06-15_06:30:53:243] Find /sys/bus/usb/devices/2-1.1 idVendor=0x2c7c idProduct=0x900, bus=0x002, dev=0x003
[06-15_06:30:53:243] Auto find qmichannel = /dev/ttyUSB2
[06-15_06:30:53:243] Auto find usbnet_adapter = eth2
[06-15_06:30:53:243] netcard driver = cdc_ncm, driver version = 6.1.141
[06-15_06:30:53:243] Modem works in ECM_RNDIS_NCM mode
[06-15_06:30:53:249] atc_fd = 7
[06-15_06:30:53:249] AT> ATE0Q0V1
[06-15_06:30:53:267] AT< OK
[06-15_06:30:54:267] AT> AT+QCFG="usbnet"
[06-15_06:30:54:282] AT< +QCFG: "usbnet",5
[06-15_06:30:54:282] AT< OK
[06-15_06:30:54:282] AT> AT+QNETDEVCTL=?
[06-15_06:30:54:287] AT< +QNETDEVCTL: (1-8),(0-3),(0,1)
[06-15_06:30:54:287] AT< OK
[06-15_06:30:54:287] AT> AT+CGREG=2
[06-15_06:30:54:292] AT< OK
[06-15_06:30:54:293] AT> AT+CEREG=2
[06-15_06:30:54:297] AT< OK
[06-15_06:30:54:297] AT> AT+C5GREG=2
[06-15_06:30:54:300] AT< OK
[06-15_06:30:54:300] AT> AT+QNETDEVSTATUS=?
[06-15_06:30:54:306] AT< +QNETDEVSTATUS: (1-8)
[06-15_06:30:54:306] AT< OK
[06-15_06:30:54:306] AT> AT+QCFG="NAT"
[06-15_06:30:54:312] AT< +QCFG: "nat",0
[06-15_06:30:54:312] AT< OK
[06-15_06:30:54:312] AT> AT+CGMR
[06-15_06:30:54:314] AT< RM500UCNVAAR03A10M2G_01.001.01.001
[06-15_06:30:54:314] AT< OK
[06-15_06:30:54:314] AT> AT+CPIN?
[06-15_06:30:54:317] AT< +CPIN: READY
[06-15_06:30:54:317] AT< OK
[06-15_06:30:54:317] AT> AT+QCCID
[06-15_06:30:54:321] AT< +QCCID: 89861501032520224413
[06-15_06:30:54:322] AT< OK
[06-15_06:30:54:322] requestGetICCID 89861501032520224413
[06-15_06:30:54:322] AT> AT+CIMI
[06-15_06:30:54:324] AT< 460151130004158
[06-15_06:30:54:324] AT< OK
[06-15_06:30:54:324] requestGetIMSI 460151130004158
[06-15_06:30:54:324] AT> AT+QICSGP=1
[06-15_06:30:54:332] AT< +QICSGP: 3,"cbnet","","",0
[06-15_06:30:54:332] AT< OK
[06-15_06:30:54:332] requestGetProfile[1] cbnet///0/IPV4V6
[06-15_06:30:54:332] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[06-15_06:30:54:343] AT< +COPS: 0,0,"CHINA BROADNET",11
[06-15_06:30:54:352] AT< +COPS: 0,1,"CBN",11
[06-15_06:30:54:361] AT< +COPS: 0,2,"46015",11
[06-15_06:30:54:361] AT< OK
[06-15_06:30:54:361] AT> AT+C5GREG?
[06-15_06:30:54:366] AT< +C5GREG: 2,1,"220801","1083AF001",11,2,01
[06-15_06:30:54:367] AT< OK
[06-15_06:30:54:367] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:54:459] AT< +CME ERROR: 3
[06-15_06:30:54:459] AT> at+cops?
[06-15_06:30:54:467] AT< +COPS: 0,2,"46015",11
[06-15_06:30:54:467] AT< OK
[06-15_06:30:54:467] AT> at+qeng="servingcell"
[06-15_06:30:54:486] AT< +QENG: "servingcell","NOCONN","NR5G-SA","TDD",460,15,1083AF001,775,220801,504990,41,100,-105,-9,4,21,12,1
[06-15_06:30:54:486] AT< OK
[06-15_06:30:54:486] ip addr flush dev eth2
[06-15_06:30:54:497] ip link set dev eth2 down
[06-15_06:30:54:502] AT> AT+QNETDEVCTL=1,1,1
[06-15_06:30:54:741] AT< OK
[06-15_06:30:54:741] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:54:824] AT< +CME ERROR: 3
[06-15_06:30:55:824] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:55:914] AT< +CME ERROR: 3
[06-15_06:30:56:589] AT< +C5GREG: 1,"220801","1083AF000",11,2,01
[06-15_06:30:56:915] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:57:008] AT< +CME ERROR: 3
[06-15_06:30:57:808] AT< +QNETDEVSTATUS: 1,1,"IPV4V6",0
[06-15_06:30:58:008] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:58:069] AT< +QNETDEVSTATUS: 10.4.117.230,255.255.255.0,10.4.117.1,,43.239.172.1,43.239.172.2,240a:4288:a400:26aa:18b9:2d68:91df:9fa4,,,,2409:8080:2000:0003:0000:0000:0000:0001,2409:8080:2000:0003:0000:0000:0000:0002
[06-15_06:30:58:069] AT< OK
[06-15_06:30:58:069] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:58:133] AT< +QNETDEVSTATUS: 10.4.117.230,255.255.255.0,10.4.117.1,,43.239.172.1,43.239.172.2,240a:4288:a400:26aa:18b9:2d68:91df:9fa4,,,,2409:8080:2000:0003:0000:0000:0000:0001,2409:8080:2000:0003:0000:0000:0000:0002
[06-15_06:30:58:133] AT< OK
[06-15_06:30:58:133] requestGetIPAddress 10.4.117.230
[06-15_06:30:58:134] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[06-15_06:30:58:150] AT< +COPS: 0,0,"CHINA BROADNET",11
[06-15_06:30:58:157] AT< +COPS: 0,1,"CBN",11
[06-15_06:30:58:164] AT< +COPS: 0,2,"46015",11
[06-15_06:30:58:164] AT< OK
[06-15_06:30:58:164] AT> AT+C5GREG?
[06-15_06:30:58:166] AT< +C5GREG: 2,1,"220801","1083AF000",11,2,01
[06-15_06:30:58:166] AT< OK
[06-15_06:30:58:166] AT> at+cops?
[06-15_06:30:58:170] AT< +COPS: 0,2,"46015",11
[06-15_06:30:58:170] AT< OK
[06-15_06:30:58:170] AT> at+qeng="servingcell"
[06-15_06:30:58:179] AT< +QENG: "servingcell","CONNECT","NR5G-SA","TDD",460,15,1083AF000,180,220801,504990,41,100,-104,-8,6,21,0,1
[06-15_06:30:58:179] AT< OK
[06-15_06:30:58:179] AT> AT+QNETDEVSTATUS=1
[06-15_06:30:58:266] AT< +QNETDEVSTATUS: 10.4.117.230,255.255.255.0,10.4.117.1,,43.239.172.1,43.239.172.2,240a:4288:a400:26aa:18b9:2d68:91df:9fa4,,,,2409:8080:2000:0003:0000:0000:0000:0001,2409:8080:2000:0003:0000:0000:0000:0002
[06-15_06:30:58:266] AT< OK
[06-15_06:30:58:266] ip link set dev eth2 up
[06-15_06:30:58:273] busybox udhcpc -f -n -q -t 5 -i eth2
udhcpc: started, v1.36.1
udhcpc: broadcasting discover
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.4.117.230, server 10.4.117.1
udhcpc: lease of 10.4.117.230 obtained from 10.4.117.1, lease time 86400
```

The ping domain name test;

```bash
root@OK3576-UP5-buildroot:~# ping -I usb0 www.forlinx.com -c 3    // Ping 3 times via usb0
PING s-526319.gotocdn.com (211.149.226.120) from 10.4.117.230 eth2: 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=47 time=82.0 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=47 time=94.8 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=47 time=93.0 ms

--- s-526319.gotocdn.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 8301ms
```

Stop the dial-up:

```bash
root@OK3576-UP5-buildroot:~# pkill quectelCM
```

### 4.22 Type-C Test

The OK3576-UP5 features two Type-C ports, with automatic detection of Type-C HOST/DEVICE modes. Device mode can be used for flashing the device, ADB file transfers and debugging, whilst Host mode allows you to connect a standard USB device.

#### 4.22.1 Host Mode

Plug in the USB disk to view the insertion details

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365533_34a1c78e_2724_4a72_996a_ef5a990df7a9.png)

#### 4.22.2 Device Mode

Connect the Type-C0 port on the development board to a PC using a USB cable; the development board will be recognised by the PC as a slave device. You can interact with the device or transfer files via ADB.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1718954727852_9c9b1c4a_e1c9_4599_b47f_7248258645a1.png)

📌 Path:`User Materials/3-Tools/platform-tools-latest-windows.zip`

Unzip the platform-tools-latest-windows.zip file to any location on your PC. Enter platform-tools-latest-windows/platform-tools.

Hold down the Shift key and right-click, then select “Open PowerShell window here”.

Use the “adb shell” command to interact with the development board:

Plug in the USB stick to view the device identification information.

```bash
PS C:\platform-tools-latest-windows\platform-tools> .\adb shell
root@OK3576-UP5-buildroot:/# ls
bin               crond.pid     etc     info   linuxrc     mnt   rockchip-test  sbin  system  userdata  vendor
boot              crond.reboot  home    lib    lost+found  opt   root           srv   test    usr
busybox.fragment  dev           ictest  lib64  media       proc  run            sys   tmp     var
root@OK3576-UP5-buildroot:/# exit
logout
```

Use the “adb push” or “adb pull” commands to transfer files:

```bash
C:\platform-tools-latest-windows\platform-tools> adb push iperf3.exe /root
iperf3.exe: 1 file pushed. 25.5 MB/s (468748 bytes in 0.017s)
```

```bash
C:\platform-tools-latest-windows\platform-tools> adb pull /root/iperf3.exe ./
/root/iperf3.exe: 1 file pulled. 25.7 MB/s (468748 bytes in 0.017s)
```

### 4.23 SPI Test

Two routed SPI channels: SPIA and SPIB are marked on the schematic of the OK3576 platform The default device names of SPIA and SPIB on the development board are spidev0.0 and spidev4.0 respectively.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365755_39bdb51b_8884_40e4_a322_f0fe27fecea3.png)

After short-circuiting, launch the test program. The following takes SPIA as an example to demonstrate the test procedure:

```bash
root@OK3576-UP5-buildroot:~# fltest_spidev_test -D /dev/spidev0.0
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

### 4.24 PCIE Test

The OK3576-UP5 board features 1 x PCIE 3.0 x2 interface.

Insert the PCIE module into the PCIE card slot on the carrier board before powering on the system. After power-up and boot, you can see via lspci that the corresponding device has been successfully enumerated.

```bash
root@OK3576-UP5-buildroot:~# lspci
00:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3576 (rev 01)
01:00.0 Non-Volatile memory controller: Yangtze Memory Technologies Co.,Ltd ZHITAI TiPro5000 NVMe SSD (rev 01)
```

Due to the variety of PCIe devices, some may not be supported by default by the kernel and may require manual addition of the corresponding device driver.

Taking a PCIe SSD as an example, running “ls /dev” will display the following NVMe nodes:

```bash
root@OK3576-UP5-buildroot:~# ls /dev/nvme0*
/dev/nvme0  /dev/nvme0n1  /dev/nvme0n1p1
```

View the mount directory:

```bash
root@OK3576-UP5-buildroot:~# ls /run/media/
nvme0n1p1
```

Write test:

```bash
root@OK3576-UP5-buildroot:~# dd if=/dev/zero of=/run/media/nvme0n1p1/test bs=1M count=100 conv=fsync
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.402148 s, 261 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK3576-UP5-buildroot:~# dd if=/run/media/nvme0n1p1/test of=/dev/null bs=1M
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 0.255024 s, 411 MB/s
```

### 4.25 SQLite3 Test

SQLite3 is a lightweight database system, an ACID-compliant relational database management system with low resource consumption. The OK3576-UP5 development board uses version 3.21.0 of SQLite3.

```bash
root@OK3576-UP5-buildroot:~# sqlite3
SQLite version 3.44.2 2023-11-24 11:41:44
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> create table tbl1 (one varchar(10), two smallint);  // Create table tbl1
sqlite> insert into tbl1 values('hello!',10);               // Insert data into tbl1
hello!|10
sqlite> insert into tbl1 values('goodbye', 20);             // Insert data into tbl1; query result: goodbye|20
sqlite> select * from tbl1;                                 // Query the contents of tbl1
hello!|10
goodbye|20
sqlite> delete from tbl1 where one = 'hello!';              // Delete data
sqlite> select * from tbl1;                                 // Query the contents of tbl1
goodbye|20
sqlite> .quit			                                    // Quit the database (or use the .exit command)
root@OK3576-UP5-buildroot:~#			        
```

### 4.26 RKNPU Test

The NPU demo routines are available in the Linux file system for running tests.

```bash
root@OK3576-UP5-buildroot:~# /usr/bin/rknn_common_test /usr/share/model/RK3576/mobilenet_v1.rknn /usr/share/model/dog_224x224.jpg
rknn_api/rknnrt version: 2.3.2 (429f97ae6b@2025-04-09T09:09:27), driver version: 0.9.8
model input num: 1, output num: 1
input tensors:
  index=0, name=input, n_dims=4, dims=[1, 224, 224, 3], n_elems=150528, size=150528, fmt=NHWC, type=INT8, qnt_type=AFFINE, zp=0, scale=0.007812
output tensors:
  index=0, name=MobilenetV1/Predictions/Reshape_1, n_dims=2, dims=[1, 1001, 0, 0], n_elems=1001, size=2002, fmt=UNDEFINED, type=FP16, qnt_type=AFFINE, zp=0, scale=1.000000
custom string:
Begin perf ...
   0: Elapse Time = 2.57ms, FPS = 389.71
---- Top5 ----
0.935059 - 156
0.057037 - 155
0.003881 - 205
0.003119 - 284
0.000172 - 285
```

### 4.27 Sleep and Wake-Up Test

The OK3576-UP5 platform supports wake-up from sleep mode.

Short press the power key:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365881_0e310eba_e965_4d2c_b805_507277b3eea3.png)

Short press the power key (KEY3) again to wake up the device:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1789607365987_41294e09_ae7b_4dc2_ad49_dd91455a24d1.png)

### 4.28 Adding a Startup Script

- **To add a temporary auto-start script:**

Modify /etc/forlinx.sh;

```bash
root@OK3576-UP5-buildroot:~# cat /etc/forlinx.sh
#! /bin/sh
if [ -d "/userdata/aging_test" ];then
        chmod 755 /userdata/aging_test/*
        /userdata/aging_test/aging.sh &
fi

# user command

exit 0
```

Restart the board for verification;

- **Add an autostart script whilst flashing the image:**

Modify buildroot/board/rockchip/rk3576/fs-overlay/etc/forlinx.sh

Then recompile, repack, and flash the image.

### 4.29 Changing the Boot Logo

OK3576-UP5 supports changing the custom boot logo without recompiling the system image.

Place “logo.bmp” (for the U-Boot stage) and “logo\_kernel.bmp” (for the kernel stage) into the U disk. Note that the two stages can use the same image. The sample image in this example has a resolution of 480×272 (the resolution can be different), and a bit depth of 24 (the bit depth must be kept consistent). Copy these files to a USB drive and insert it into OK3576-UP5’s USB port.

```bash
root@OK3576-UP5-buildroot:~# cd /run/media/sda1/
```

```bash
root@OK3576-UP5-buildroot:/run/media/sda1# ls
logo.bmp   logo_kernel.bmp
```

**Then run the following command to flash the logo onto the system**

```bash
root@OK3576-up5-buildroot:~# cat logo.bmp > logo.img
root@OK3576-up5-buildroot:~# truncate -s %512 logo.img
root@OK3576-up5-buildroot:~# cat logo_kernel.bmp >> logo.img
root@OK3576-up5-buildroot:~# dd if=logo.img of=/dev/mmcblk0p6
1531+1 records in
1531+1 records out
783926 bytes (784 kB, 766 KiB) copied, 0.0718396 s, 10.9 MB/s
root@OK3576-up5-buildroot:~# reboot
```

**Once you have restarted the system, you will see that the logo has changed.**

## 5\. OK3576-UP5 Codec Test

### 5.1 Introduction to Codec

The OK3576-UP5 platform uses Gstreamer for audio and video applications, which supports hardware-accelerated encoding and decoding. All examples in this section are based on Gstreamer commands. If you need a player with a GUI, you can also use Qt multimedia classes, which also support hardware-accelerated encoding. Please refer to the Qt test section for more details.

There is a Video Processing Unit (VPU) that supports the following video hardware encoding/decoding formats:

Video Decoding: H.264, H.265, VP9,AV1, AVS2.

Video Encoding H.264, H.265.

OK3576-UP5 Hardware Encoding and Decoding Parameter Table

| Type| Format| Profile| Resolution \& Frame rate|
|----------|----------|----------|----------|
| Video Decoder| H.265| main 10| 8K@30fps or 4K@120fps|
| Video Decoder| H.264| main 10| 4K@60fps|
| Video Decoder| VP9| Profile 0/2| 8K@30fps or 4K@120fps|
| Video Decoder| AV1| Profile 0/2| 8K@30fps or 4K@120fps|
| Video Decoder| AVS2| main 10| 8K@30fps or 4K@120fps|
| Video Encoder| H.264| multi-stream| 4K@60fps|
| Video Encoder| H.265| multi-stream| 4K@60fps|

### 5.2 Audio and Video Playback Experience

#### 5.2.1 Playing Video and Audio via Gst-play

Gplay is an audio and video player based on Gstreamer. It automatically selects the appropriate plugins for audio and video playback based on the hardware, and it is very easy to use.

```bash
root@OK3576-UP5-buildroot:~# gst-play-1.0 /userdata/media/1080p_60fps_h265-30S.mp4
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/1080p_60fps_h265-30S.mp4
Redistribute latency...
Redistribute latency...
Redistribute latency...
Redistribute latency...
Redistribute latency...
0:00:01.6 / 0:00:30.0
```

#### 5.2.2 Playing Video via Gst-launch

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location= /userdata/media/1080p_60fps_h265-30S.mp4 ! qtdemux ! queue ! h265parse ! mppvideodec ! waylandsink
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
^Chandling interrupt. (5.4 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:01.682503766
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.2.3 Playing Audio via Gst-launch 

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/piano2-CoolEdit.mp3 ! id3demux ! mpegaudioparse ! mpg123audiodec ! alsasink
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
Got EOS from element "pipeline0".
Execution ended after 0:00:06.362581038
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.2.4 Playing Video \& Audio via Gst-launch

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location= /userdata/media/1080p_60fps_h265-30S.mp4 ! qtdemux name=dec dec. ! queue ! h265parse ! mppvideodec ! waylandsink dec. ! queue ! decodebin ! alsasink
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
^Chandling interrupt. (4.0 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:01.208889844
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.3 Video Hardware Encoding

OK3576-UP5 maximum support 8K@60fps /H. 265 and 8K@60fps /H. 264 video encoding.

#### 5.3.1 Video Hardware Encoding H.264

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 videotestsrc num-buffers=600 ! video/x-raw,framerate=30/1,width=7680,height=4320 ! mpph264enc ! h264parse ! mp4mux ! filesink location=test.mp4
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
^Chandling interrupt. (18.7 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:07.712368223
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.3.2 Video Hardware Encoding H.265

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 videotestsrc num-buffers=600 ! video/x-raw,framerate=30/1,width=7680,height=4320 ! mpph265enc ! h265parse ! mp4mux ! filesink location=test.mp4
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:00.8 / 0:00:20.0 (4.3 %)
```

#### 5.3.3 JPEG Hardware Encoding

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 videotestsrc num-buffers=1 ! video/x-raw,framerate=1/1,width=7680,height=4320 ! mppjpegenc ! jpegparse ! queue ! filesink location=test.jpeg
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:00.029465149
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.4 Video Hardware Decoding

#### 5.4.1 H264 Video Decoding and Playback

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h264-30S.mp4 ! qtdemux ! h264parse ! mppvideodec ! waylandsink
mpp[1117]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1117]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1117]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1117]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1117]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1117]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1117]: h264d_api: is_avcC=1
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
handling interrupt..0 (19.7 %)

```

#### 5.4.2 H264 Video Decoding and Playback with Audio

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h264-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h264parse ! mppvideodec  ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[1157]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1157]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1157]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1157]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1157]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1157]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1157]: h264d_api: is_avcC=1
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
handling interrupt..0 (18.3 %)
```

#### 5.4.3 H265 Video Decoding and Playback

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265-30S.mp4 ! qtdemux ! h265parse ! mppvideodec ! waylandsink
mpp[1204]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1204]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1204]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1204]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1204]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1204]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1204]: H265D_PARSER: extradata is encoded as hvcC format
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
handling interrupt..0 (8.7 %)
```

#### 5.4.4 H265 Video Decoding and Playback with Audio

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_30fps_h265-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h265parse ! mppvideodec  ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink
mpp[1215]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1215]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1215]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1215]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1215]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1215]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1215]: H265D_PARSER: extradata is encoded as hvcC format
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
handling interrupt..0 (21.3 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:06.490896637
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 5.4.5 VP9 Video Decoding and Playback

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_vp9-30S.mp4  ! qtdemux ! vp9parse ! mppvideodec ! waylandsink
mpp[1230]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1230]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1230]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1230]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1230]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1230]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
mpp[1230]: mpp_buf_slot: mismatch v_stride 1088 - 1080
mpp[1230]: mpp_buf_slot: mismatch size_total 3885465 - 3856896
mpp[1230]: mpp_buf_slot: mismatch v_stride 1088 - 1080
mpp[1230]: mpp_buf_slot: mismatch size_total 3885465 - 3856896
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
handling interrupt..0 (8.3 %)
```

#### 5.4.6 VP9 Video Decoding and Playback with Audio

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_vp9-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! vp9parse ! mppvideodec ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink device=plughw:2,0
mpp[1242]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1242]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1242]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1242]: mpp: unable to create enc vp8 for soc rk3576 unsupported
mpp[1242]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1242]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1242]: mpp_buf_slot: mismatch v_stride 1088 - 1080
mpp[1242]: mpp_buf_slot: mismatch size_total 3885465 - 3856896
mpp[1242]: mpp_buf_slot: mismatch v_stride 1088 - 1080
mpp[1242]: mpp_buf_slot: mismatch size_total 3885465 - 3856896
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
handling interrupt..0 (20.4 %)
```

## 6\. OK3576-UP5 Camera Test

### 6.1 Camera Input Interfaces

The OK3576-UP5 supports 4 x MIPI CSI camera interfaces and is compatible with both the OV13855 and OV5645 models. The correspondence between the interfaces is as follows:

| **Camera Interface**| **Supported MIPI Camera Models**|
|----------|----------|
| P33| OV13855|
| P15| OV5645|
| P14| OV5645|
| P13| OV5645|

### 6.2 UVC Camera Test

The OK3576-UP5 supports the OV13855, OV5645MIPI camera and also supports UVC cameras. First test UVC camera, using the Logitech C270 as an example. Insert the USB camera into the development board, and the uvc driver will automatically install.

#### 6.2.1 Camera Detection and Format Support Query

Camera Recognition

```bash
root@OK3576-UP5-buildroot:~# v4l2-ctl --list-devices
UVC Camera (046d:0825) (usb-xhci-hcd.0.auto-1.2):
        /dev/video58
        /dev/video59
        /dev/media6
```

Format Support Query

```bash
root@OK3576-up5-buildroot:~# v4l2-ctl --list-formats-ext -d /dev/video58
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture

        [0]: 'YUYV' (YUYV 4:2:2)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 160x120
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 176x144
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 320x176
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 432x240
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 544x288
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 752x416
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 800x448
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 800x600
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 864x480
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 960x544
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 960x720
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1024x576
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1184x656
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1280x720
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1280x960
                        Interval: Discrete 0.133s (7.500 fps)
                        Interval: Discrete 0.200s (5.000 fps)
        [1]: 'MJPG' (Motion-JPEG, compressed)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 160x120
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 176x144
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 320x176
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 432x240
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 544x288
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 752x416
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 800x448
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 800x600
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 864x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 960x544
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 960x720
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1024x576
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1184x656
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1280x720
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
                Size: Discrete 1280x960
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.050s (20.000 fps)
                        Interval: Discrete 0.067s (15.000 fps)
                        Interval: Discrete 0.100s (10.000 fps)
                        Interval: Discrete 0.200s (5.000 fps)
```

#### 6.2.2 Camera Capture Format Query and Modification

Capture Format Query

```bash
root@OK3576-UP5-buildroot:~# v4l2-ctl -V -d /dev/video58
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
```

#### 6.2.3 Camera Image Preview and Capture

Camera Image Preview

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video58 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! waylandsink
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
0:00:10.2 / 99:99:99.
```

Camera Capture

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video58 num-buffers=1 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:00.960573833
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 6.3 OV13855 Test

For sensors like the OV13855 and other raw sensors, each sensor corresponds to five device nodes:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350647524_3e313d33_b0f7_47e8_be30_851a73f61941.png)

`Mainpath:`An output node of the Rockchip ISP, capable of outputting full-resolution images, typically used for capturing photos or raw images.

`Self Path:`An output node of the Rockchip ISP, limited to a maximum of 1080p resolution, typically used for preview.

`Statistics:` 3A statistics.

`Input-params:` 3A parameter settings

The testing method for OV13855 is basically the same as for the UVC camera. This section uses the OV13855 as an example:

`P33:`rkcif\_mipi\_lvds

#### 6.3.1 Camera Detection and Format Support Query

```bash
root@OK3576-UP5-buildroot:~# v4l2-ctl --list-devices
rkisp-statistics (platform: rkisp):
        /dev/video50
        /dev/video51

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

rkcif-mipi-lvds2 (platform:rkcif-mipi-lvds2):
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

rkvpss_scale0 (platform:rkvpss-vir0):
        /dev/video54
        /dev/video55
        /dev/video56
        /dev/video57
        /dev/media5
```

#### 6.3.2 Viewing Supported Formats

```bash
root@OK3576-UP5-buildroot:~#  v4l2-ctl --list-formats-ext -d /dev/video44
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [1]: 'NV16' (Y/UV 4:2:2)
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [2]: 'NV61' (Y/VU 4:2:2)
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [3]: 'NV21' (Y/VU 4:2:0)
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [4]: 'NV12' (Y/UV 4:2:0)
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [5]: 'NM21' (Y/VU 4:2:0 (N-C))
                Size: Stepwise 32x32 - 800x600 with step 8/8
        [6]: 'NM12' (Y/UV 4:2:0 (N-C))
                Size: Stepwise 32x32 - 800x600 with step 8/8
```

#### 6.3.3 Camera Preview

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video44 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! autovideosink sync=false
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[   72.197431] rkisp_hw fdcb0000.rkisp: set isp clk = 500000000Hz
[   72.198999] rkcif-mipi-lvds: stream[0] start streaming
[   72.201894] rkcif-mipi-lvds: Allocate dummy buffer, size: 0x01944000
[   72.202051] rockchip-mipi-csi2 mipi0-csi2: stream on, src_sd: 000000004e50443f, sd_name:rockchip-csi2-dphy0
[   72.202061] rockchip-mipi-csi2 mipi0-csi2: stream ON
[   72.202088] rockchip-csi2-dphy0: dphy0, data_rate_mbps 1080
[   72.202449] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_s_stream stream on:1, dphy0, ret 0
[   72.202475] ov13855 3-0036: ov13855_s_stream: on: 1, 4224x3136@30
Redistribute latency...
0:00:06.7 / 99:99:99.
```

#### 6.3.4 Camera Photo Capture (Using Main Path)

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video44 num-buffers=1 ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:00.271908779
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 6.3.5 Recording H.264 Video

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video44 num-buffers=100 ! video/x-raw,format=NV12, width=640,height=480 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! qtmux ! filesink location=13855_h264.mp4 t. ! queue ! waylandsink
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
Redistribute latency...
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:06.892603226
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 6.3.6 Playing H264 Video

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 filesrc location=13855_h264.mp4 ! qtdemux ! queue ! h264parse ! mppvideodec ! waylandsink
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
mpp[1834]: h264d_api: is_avcC=1
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
^Chandling interrupt. (37.6 %)
Interrupt: Stopping pipeline ...
Execution ended after 0:00:02.530370525
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 6.4 OV5645 Test

**Node corresponding to the camera**

`P15:`rkcif-mipi-lvds1

`P14:`rkcif-mipi-lvds2

`P13:`rkcif-mipi-lvds3

Take testing P15 as an example:

#### 6.4.1 Camera Identification and Detection

```bash
root@OK3576-UP5-buildroot:~# v4l2-ctl --list-devices
rkisp-statistics (platform: rkisp):
        /dev/video50
        /dev/video51

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

rkvpss_scale0 (platform:rkvpss-vir0):
        /dev/video54
        /dev/video55
        /dev/video56
        /dev/video57
        /dev/media5
```

#### 6.4.2 Viewing Supported Formats

```bash
root@OK3576-up5-buildroot:~# v4l2-ctl --list-formats-ext -d /dev/video11
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

#### 6.4.3 Camera Preview

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw, format=NV12, width=1920,height=1080, framerate=30/1 ! waylandsink
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
0:00:03.8 / 99:99:99.
```

#### 6.4.4 Camera Photo Capture (Using Main Path)

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video11 num-buffers=1 ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! filesink location="picture.jpg"
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:00.082827792
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 6.4.5 Recording H.264 Video

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1 ! mpph264enc ! filesink location="video.h264"
mpp[1597]: mpp_platform: client 4 driver is not ready!
mpp[1597]: mpp_platform: client 12 driver is not ready!
mpp[1597]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1597]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1597]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1597]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
Using mplane plugin for capture
mpp[1597]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
mpp[1597]: mpp_enc: MPP_ENC_SET_RC_CFG bps 7776000 [7290000 : 8262000] fps [30:30] gop 30
mpp[1597]: h264e_api_v2: MPP_ENC_SET_PREP_CFG w:h [1920:1080] stride [1920:1088]
mpp[1597]: mpp_enc: mode cbr bps [7290000:7776000:8262000] fps fix [30/1] -> fix [30/1] gop i [30] v [0]
Redistribute latency...
handling interrupt.9.
Interrupt: Stopping pipeline ...
Execution ended after 0:00:02.786806168
Setting pipeline to NULL ...
Freeing pipeline ...
```

#### 6.4.6 H.264 Video Playback

```bash
root@OK3576-UP5-buildroot:~# gst-launch-1.0 filesrc location="video.h264" ! h264parse ! mppvideodec ! waylandsink
mpp[1610]: mpp_platform: client 4 driver is not ready!
mpp[1610]: mpp_platform: client 12 driver is not ready!
mpp[1610]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1610]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1610]: mpp_info: mpp version: unknown mpp version for missing VCS info
mpp[1610]: mpp_info: mpp version: unknown mpp version for missing VCS info
Setting pipeline to PAUSED ...
mpp[1610]: mpp_info: mpp version: unknown mpp version for missing VCS info
Pipeline is PREROLLING ...
Redistribute latency...
mpp[1610]: h264d_api: is_avcC=1
Pipeline is PREROLLED ...
Prerolled, waiting for async message to finish...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:01.833586417
Setting pipeline to NULL ...
Freeing pipeline ...
```

## 7\. OK3576-UP5 Display Interface Test

### 7.1 Display interface

The OK3576-UP5 is based on the VOP2 (Video Output Processor 2.0) unified display architecture of the RK3576, supporting various display interfaces such as HDMI, eDP, MIPI DSI, and DP. It can drive up to four independent display outputs simultaneously.

### 7.2 Overview of Display Controller

The RK3576 VOP2 integrates four independent Video Ports (VP), each capable of driving a separate display output channel:

| **Video Port**| **Maximum Resolution:**| **Connectable Display Interfaces:**|
|----------|----------|----------|
| VP0| 7680×4320@60Hz| HDMI0, eDP0, DP0, DP1, MIPI DSI0, MIPI DSI1|
| VP1| 4096×4320@60Hz| HDMI0, HDMI1, eDP0, eDP1, DP0, DP1, MIPI DSI0, MIPI DSI1|
| VP2| 4096×4320@60Hz| HDMI0, HDMI1, eDP0, eDP1, DP0, DP1, MIPI DSI0, MIPI DSI1, RGB|
| VP3| 2048×1080@60Hz| MIPI DSI0, MIPI DSI1, RGB|

**Note: The RK3576 HDMI and DP interfaces support 8K output, but in 8K mode, they require the simultaneous occupation of both VP0 and VP1. If a product needs to support 8K display, do not connect other display interfaces to VP1.**

The connection diagram for the RK3576 VP and the various display interfaces is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350649172_31dd131c_7ef3_4c32_87fc_5fd2f51f176e.png)

### 7.3 Specifications of Each Display Interface

The maximum output resolution and protocol standards for each RK3576 display interface are as follows:

| Display Interface| Maximum Output Resolution| Protocol Standard|
|----------|----------|----------|
| HDMI| 7680×4320@60Hz| Dual HDMI, supporting HDMI 2.1 protocol standard|
| DP| 7680×4320@30Hz| Dual DP, supporting DP 1.4 protocol standard|
| eDP| 3840x2160@60Hz| Dual DP, supporting DP 1.2a and eDP 1.3 protocol standard|
| MIPI DSI| 3840x2160@60Hz| Dual MIPI, supporting DSI v1.1, DCS v1.1, DPHY v2.0, CPHY v1.1|
| RGB| 1920×1080@60Hz| Supports BT.656 / BT.1120|

### 7.4 Display Interface Test

You may refer to the section on screen switching in Chapter 2.5 to carry out testing and verification of the various display interfaces.

### 7.5 Waylandsink Fixed Position Test

All tests in this chapter for display are done using the waylandsink plugin from Gstreamer. By default, the video or camera window will pop up randomly on the desktop. If you want to display it in a specific position, you can specify the coordinates.

For example, coordinates (0,0), width 480, height 360.

```bash
root@OK3576-up5-buildroot:~# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_h265-30S.mp4 ! qtdemux ! h265parse ! mppvideodec ! waylandsink  "render-rectangle=<0,0,480,360>"
```

## 8\. Flashing the System

The OK3576-UP5 development board currently supports flashing via OTG and TF Card. The corresponding programming tool is provided in the user profile, and you can choose any one of the methods for image programming.

### 8.1 Factory Prebuilt Image

User documentation includes Forlinx's validated factory image for system flashing tests and factory resets.

📌 Path:`User Materials\2-Source Code and Images\0-Images\update.img`

### 8.2 OTG System Flashing

#### 8.2.1 OTG Driver Installation

📌 Path:`User Materials\3-Tools\DriverAssitant_v5.13.zip`

Extract the file above to any directory and run it with administrator privileges.

Open the DriverInstall.exe programme and click “Install Drivers”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278371049_36807242_44b2_4463_b794_e1bc53500a6d.png)

The driver is installed successfully. Click “OK”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278371239_c88b99ca_e7f1_452b_a2e9_5e6bfea8bb73.png)

#### 8.2.2 OTG Full Flashing Test

**8.2.2.1 RKDevTool Flashing Test**

**Note: You must use version 3.37 or later of the RKDevTool\_Release tool for flashing.**

📌 Path:`User Materials\3-Tools\RKDevTool_Release_v3.37.zip`

It is a development tool provided by Rockchip. Before use, extract it to a directory with an all-English path, and connect the PC to the development board’s TYPE-C0 port using a Type-C cable.

**Load Mode Flashing:**

Hold down the development board’s Recovery button and do not release it.

Press the Reset button to reset the system.

After approximately two seconds, release the Recovery button. There will be prompts on the Rockchip development tool : loader device found

**Note: Device detection occurs when the recovery button is pressed during the power-on of the development board.**

The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters.

Open the Rockchip development tool:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-070.png)

Click "Advanced Functions" -> "Erase All" to erase the operation.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-071.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img. The program will analyse the firmware, so please wait a moment. After the firmware is loaded, click "Upgrade".

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-072.png)

**MASKROM Mode Flashing：**

If the loader is corrupted and the device fails to enter Loader mode, press and hold the maskrom key (KEY5) on the carrier board, then press the reset key to enter maskrom mode for flashing.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-073.png)

At this time, the system will prompt that a maskrom device is found. The programming process is consistent with the loader mode. It is better to use the update. img for programming.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid.**

**8.2.2.2 FactoryTool Flashing Test**

FactoryTool is used for batch OTG flashing in the factory. It does not require reading an image file and can batch-flash large images. If RKDevTool does not meet compatibility requirements, this method can also be attempted. Before using, extract it to a directory with only English characters. Connect the development board and host using a Type-C cable. Press and hold the recovery button, press the reset button for the system reset, and after about two seconds, release the recovery button. There will be prompts on the Rockchip development tool : loader device found

**Note: **

- **Device detection occurs when the recovery button is pressed during the power-on of the development board;**

- **The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters.**

📌 Path:`User Materials\3-Tools\FactoryTool_v1.91.zip`

Click to select the firmware.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278372564_b2d07d5e_1a3a_489b_833e_a89f8b946368-1793259731058.png)

Click “Start”; once the loader device is detected, the flashing process will begin automatically.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1719278373317_68796c78_84ac_4218_92c9_0a30ec517c45.png)

Downloading firmware.

Upgrade successful. The system will not automatically restart and will require a power cycle to restart.

#### 8.2.3 OTG Step-by-Step Flashing Test

**8.2.3.1 Overwriting a Single Partition In Loader Mode**

During the development phase, performing full flashing every time can be time-consuming. Therefore, here it introduces how to use OTG flashing tools to flash individual partitions.

**Note: Device detection occurs when the recovery button is pressed during the power-on of the development board.**

Firstly, once the OK3576-linux-source compilation is complete, the system image will be generated in the OK3576-linux-source/output/update/Image/ directory, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350652808_c09f8fc2_c809_4849_964d_fc8665b9d5bd.png)

Taking the userdata partition as an example, here is the method for flashing it:

Use the Type-C cable to connect the development board and the host, press and hold the recovery key (key1) without releasing, then press the reset key (key4) to reset the system, and release the recovery key after about two seconds. The system will prompt “ Find Loader Device”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-080.png)

Click the "Device Partition Table" button to automatically read the partition . address.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-081.png)

It will ask if you want to update the download address. Click "Yes," and the partition table will be read successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-082.png)

Check the partition, and click the right test area of the partition to select the partition mirror.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-083.png)

Click the “Execute” button to automatically flash and restart.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/image-084.png)

**8.2.3.2 Independent Partition Overwriting in MASKROM Mode**

Compared with independent partition flashing in Loader mode, MASKROM mode requires only two extra files to be selected: MiniLoaderAll.bin and parameter.txt.

Once parameter.txt is selected, it will automatically populate the addresses for the corresponding partitions, as shown in the figure.

![](image-085.png)

**At this point, tick the three partitions to flash them together, which enables independent overwriting of the boot partition image in MASKROM mode.**

![](image-086.png)

### 8.3 TF System Flashing

TF card making and testing.

**Note:**

- **Testing indicates that the maximum supported TF card capacity is 16 GB. Using a TF card of 32 GB or larger may result in flashing failure;**
- **When flashing via TF card, the system will enter the command-line interface with the user root@buildroot. Please wait patiently for the flashing process to complete.**

Tool path:`User Materials/3-Tools/SDDiskTool_v1.78.zip`

Copy SDDiskTool\_v1.78.zip to any directory on Windows. Run SD\_Firmware\_Tool.exe with administrator privileges.

![](image-087.png)

Select the disk device, tick the`Firmware Upgrade`, and select update.img. Click to start creating.

![](image-088.png)

Format the TF card, then click “Yes”.

When the TF card creation is completed, click “OK”.

Insert the TF card into the development board and power it on; the system will automatically begin the flashing process. Once the flashing is complete, both the screen and the serial port will display the following message:

`Please remove SD CARD!!!, wait for reboot.`

At this point, remove the TF card and the system will restart automatically (please do not switch off the power directly).

At this time, remove the TF card, and the system will automatically restart (do not cut the power directly).

- Kernel boot phase: Heartbeat light mode, flashing at regular intervals;
- Preparation for programming: The eMMC indicator light is off;
- Programming in progress: The eMMC indicator light remains lit;
- Post-programming: Heartbeat light mode, with regular, intermittent flashing;

Serial port information during the flashing process:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_Linux6_1_User_Manual/1786350654582_1845743c_1168_40ab_8418_0763a3ceb1da.png)

If the device does not restart automatically after removing the TF card, you can complete the flashing process by restarting it manually. Please wait patiently whilst the data is being written.