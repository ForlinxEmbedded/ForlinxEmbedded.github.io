# OK3588-C\_Android14.0\_User's Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright Notice

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, and understand the interface functions and testing methods. It primarily covers the testing of interface functions on the development board, the methods for flashing images, and troubleshooting procedures for common issues encountered in use. In the process of testing, some commands are annotated to facilitate the user's understanding, mainly for practical use. Please refer to “OK3588--C\_Android14.0_User’s Compilation Manual” provided by Forlinx for kernel compilation, related application compilation methods, development environment construction, etc. 

The manual is primarily divided into seven chapters:

+ Chapter 1. focuses on the overall overview of the product, and briefly introduces the development board in the interface resources, the relevant driver path in the kernel source code, and the description of the key parts of the information;
+ Chapter 2. mainly focuses on the fast booting of the product, which can be achieved through two methods: serial port login and network login, as well as the relevant introduction of the U-Boot menu;
+ Chapter 3. Android Function Test;
+ Chapter 4. focuses on the product's image update, mainly describing the method of updating the image to the storage device, and users can choose the corresponding flashing method according to the actual situation;
+ Chapter 5. is mainly about the OTA upgrade test of the product system;
+ Chapter 6. is mainly about the different display and different touch function of the product system;
+ Chapter 7. is mainly about the root authority management of the product system.

A description of some of the symbols and formats associated with this manual:

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or information that requires special attention, be sure to read carefully|
| 📚 | Relevant notes on the test chapters|
| ️️🛤️ ️ | Indicates the related path.|
| <font style="color:blue;">Blue font on gray background</font>| Refers to commands entered at the command line(Manual input required).|
| <font style="color:black;">Black font</font>| Serial port output message after entering a command|
| **<font style="color:black;">Bold black</font>**| Key information in the serial port output message|
| //| Interpretation of input instructions or output information|
| Username@Hostname| console: development board serial port login account information, through which the user can determine the environment for function operation.|

After packaging the file system, you can use the “ls” command to view the generated files.

```plain
forlinx@ubuntu:~/3588$ ls                                  //List the files in this directory
OK3588-android-source  OK3588-android-source.tar.bz2
```

+ forlinx@ubuntu: the username is forlinx and the hostname is ubuntu, indicating that the operation is performed in the development environment ubuntu;
+ //: Explanation of the instruction, no input required;
+ <font style="color:blue;">Ls: </font>Blue font on a gray background, indicating relevant commands that need to be entered manually;
+ **OK3588-android-source**: The bottom black font is the output information after the input command, and the bold font is the key information. Here is the packed file system.

---


## Application Scope

This manual is mainly applicable to the Android14.0 operating system on the Forlinx OK3588-C platform. Other platforms can also refer to it, but there will be differences between different platforms. Please make modifications according to the actual conditions.

## Revision History

| **Date**| **Manual Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|----------|----------|
| 01/09/2025 | V1.0| V1.1| V1.1 and Above| OK3588-C_Android14.0_User's Manual Initial Version |

## 1\. OK3588 Development Board Description

RK3588 is a low-power, high-performance processor based on ARM64 architecture, which includes 4-core Cortex-A55 and 4-core Conrtex-A76 as well as independent NEON processor and neural network processor NPU, and it can be applied to computers, cell phones, personal mobile Internet, and digital multimedia devices.

Connection method is board-to-board, and main interfaces are shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2025/jpeg/50461850/1756801257271-d0a8d4dc-f09c-4bd3-bfe4-aff97930d9ea.jpeg)

**Front**

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940821408-beea409e-33fa-496f-a72c-967e8b8a77bd.png)

**Back**

**Note: Hardware parameters are no longer described in this software manual. Before referring to this manual for software development, please read the "OK3588-C\_User’s Hardware Manual” to understand the product naming rules and the hardware configuration information of the product you are using, which will help you to use this product.**

### 1.1 CPU/GPU/NPU Frequency Description

**RK3588J industrial grade SoM frequencies are described below:**

**Note: For the industrial-grade RK3588J SoM, to better test the maximum performance of this SOC, starting from version R4 and subsequent versions, the SoM in the user materials will default to operate in overclocking mode (Without performance requirements, it is recommended to modify it to the normal mode).**

Refer to “Rockchip RK3588J Datasheet V1.1-03/08/2023.pdf ”

Table 3-2 Recommended operating conditions

| Maximum CPU A76 frequency, normal mode ①| 1.6GHz
|----------|----------
| Maximum CPU A76 frequency, overclocking mode ②| 2.0GHz
| Maximum CPU A55 frequency, normal mode ①| 1.3GHz
| Maximum CPU A55 frequency, overclocking mode ②| 1.7GHz
| Maximum GPU frequency, normal mode ①| 700MHz
| Maximum GPU frequency, overclocking mode ②| 850MHz
| Maximum NPU frequency, normal mode ①| 800MHz
| Maximum NPU frequency, overclocking mode ②| 950MHz

① Normal mode indicates that the chip is operating at a safe voltage and frequency; For industrial environments, it is highly recommended to keep it in normal mode to reasonably ensure longevity.

②Overclocking mode will bring higher frequency, and the corresponding voltage will also increase. When running in overclocking mode for a long time, the life of the chip may be shortened, especially in high temperature conditions.

To switch to "normal mode", you need to add # include "rk3588j.dtsi" to the reference in the kernel device tree. The path is:

OK3588-android14-source/kernel-5.10/arch/arm64/boot/dts/rockchip/OK3588-C-Common.dtsi

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940821698-9b5343e2-7076-4e7c-a7f7-2c8aab90f447.png)

**RK3588 commercial grade SoM frequencies are described below:**

Refer to “Rockchip RK3588 Datasheet V1.7-17/11/2023.pdf ”

Table 3-2 Recommended operating conditions

| Maximum CPU A76 frequency| 2.2-2.4 GHz
|----------|----------
| Maximum CPU A55 frequency| 1.8GHz
| Maximum GPU frequency| 1GHz
| Maximum NPU frequency| 1GHz

### **1.2 Android14.0 System Software Resources Features**

| **Device**| **Location of driver source code in the kernel**| **Device Name**|
|----------|----------|----------|
| **LCD Backlight Driver**| **drivers/video/backlight/pwm\_bl.c**| **/sys/class/backlight**|
| **USB Port**| **drivers/usb/storage/**||
| **USB Mouse**| **drivers/hid/usbhid/**| **/dev/input/mice**|
| **Ethernet**| **drivers/net/ethernet/stmicro/stmmac**||
| **SD/micro TF card driver**| **drivers/mmc/host/dw\_mmc-rockchip.c**| **/dev/block/mmcblk1pX**|
| **EMMC Driver**| **drivers/mmc/host/dw\_mmc-rockchip.c**| **/dev/block/mmcblk2pX**|
| **OV13850**| **drivers/media/i2c/ov13850.c**| **/dev/videoX**|
| **LCD Controller**| **drivers/gpu/drm/rockchip/rockchip\_drm\_vop.c**||
| **MIPI CSI**| **drivers/media/platform/rockchip/cif/mipi-csi2.c**||
| **MIPI DSI**| **drivers/gpu/drm/rockchip/dw-mipi-dsi2-rockchip.c**||
| **LCD Touch Driver**| **drivers/input/touchscreen/edt-ft5x06.c**| **/dev/input/eventX**|
| **RTC Real Time Clock Driver**| **drivers/rtc/rtc-rx8010.c**   **drivers/rtc/rtc-pcf8563.c**| **/dev/rtc0**|
| **serial port**| **drivers/tty/serial/8250/8250\_dw.c**| **/dev/ttySX**|
| **Key Driver**| **drivers/input/keyboard/adc-keys.c**| **/dev/input/eventX**|
| **LED**| **drivers/leds/leds-gpio.c**||
| **I2S**| **sound/soc/rockchip/rockchip\_i2s\_tdm.c**||
| **Audio Driver**| **sound/soc/codecs/nau8822.c**| **/dev/snd/**|
| **PMIC**| **ddrivers/mfd/rk806-core.c**||
| **PCIE**| **drivers/pci/controller/dwc/pcie-dw-rockchip.c**||
| **Watchdog**| **drivers/watchdog/dw\_wdt.c**||
| **SPI**| **drivers/spi/spi-rockchip.c**||
| **PWM**| **drivers/video/backlight/pwm\_bl.c**||

### **1.3 EMMC Memory Partition Table**

The following table is the eMMC memory partition information of Android operating system (the size of a block is 512bit when calculating):

| **Partition Index**| **Name**| **Offset / block**| **Size/block**
|----------|----------|----------|----------
| N/A| security| 0x00002000| 0x00002000
| 1| uboot| 0x00004000| 0x00004000
| 2| trust| 0x00006000| 0x00002000
| 3| misc| 0x00008000| 0x00002000
| 4| dtbo| 0x0000a000| 0x00002000
| 5| vbmeta| 0x0000c000| 0x00000800
| 6| boot| 0x0000c800| 0x00020000
| 7| recovery| 0x0002c800| 0x00030000
| 8| backup| 0x0005c800| 0x000c0000
| 9| cache| 0x0011c800| 0x000c0000
| 10| metadata| 0x001dc800| 0x00020000
| 11| frp| 0x001fc800| 0x00000400
| 12| baseparameter| 0x001fcc00| 0x00000800
| 13| super| 0x001fd400| 0x00614000
| 14| userdata| 0x00811400| 

## 2\. Fast Startup

### **2.1 Preparation Before Startup**

+ 12V2A or 12V3A DC Power Cable
+ Debugging serial cable                                                                                         

The debug serial port on the development board is a Type-C socket, allowing connecting the development board to a PC using a USB to Type-C cable to monitor the status of the development board.

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45535139/1718940829853-11e7dc47-93fa-44b4-84f9-15099a646a85.jpeg)

### **2.2 Debugging Serial Driver Installation**

The debugging serial port of the OK3588 - C platform uses a Type - C interface. There is an on - board USB to UART chip, so there's no need to purchase a USB to serial port debugging tool. It is extremely simple and convenient to use.

To install the driver, please use the driver package DriverAssitant \_ v5.13.zip provided in the 3-tool directory.

Run DriverInstall.exe directly after the unzipping is completed; in order to ensure the driver is the latest version, please unstall the driver first, then install again.

### **2.3 Serial Port Login**

#### 2.3.1 Serial Port Connection Settings

 **Description:**

+ **Serial port terminal login user: serial port terminal automatically logs in root user without password;**
+ **Serial port settings: baud rate 115200, data bit 8, stop bit 1, no parity bit, no flow control;**
+ **Hardware Requirements: Type-C cable required to connect PC and development boards;**
+ **Software requirements: PC Windows system needs to install the super terminal software. Because the terminal software has many types, users can choose their familiar one.**

In the following, we take the putty terminal software as an example to introduce the serial port login method:

Step 1: Connect the serial port number of the computer---check the serial port number from the device manager (Based on the port actually recognized by the computer );

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940830154-f1183938-03bf-4ed0-b9c1-61c3cb36999d.png)

Step 2: Open and set up putty, then set the“ line according to the COM port of the computer used, baud rate 115200;

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940830351-944c8fb8-def2-4746-9449-2cd8763908a1.png)

Step 3: After the setting, input the COM port used by the computer in Saved Sessions. The following figure takes COM3 as an example, save the settings, open the serial port again later, and click on the saved port number;

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940830538-2553e7fc-b6d5-434b-ace7-7864de173fe8.png)

#### 2.3.2 Serial Login

After the terminal software on the PC side is set, connect the PC and the development board through the serial port cable, and power on after connecting the power supply. The startup information can be seen through the terminal software.

The following startup message indicates a successful start, allowing a new command line to be entered by pressing Enter:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940830731-94ee0055-dc57-46dc-a75b-940b5d86a20a.png)

### **2.4 Screen Switching**

OK3588 supports various screen interfaces such as MIPI DSI, HDMI, eDP, DP, RGB, etc., and can simultaneously perform mirroring and independent display for up to four screens. Currently there are three screen switching methods: uboot menu dynamic control; kernel device tree designation; DisplayHwConfig application control.

OK3588 contains 4 display controllers, i.e. 4 VP. It supports up to 4 screens simultaneously. The maximum resolution of VP0 is 7680x4320; the maximum resolution of VP1 is 4096x4320; the maximum resolution of VP2 is 4096x4320; the maximum resolution of VP3 is 2048x1080.

#### 2.4.1 Dynamic Control of Uboot Menu

##### 2.4.1.1 Display Type Settings

This method allows switching without recompiling and burn-in of existing supported screens.

During the uboot self-boot process, press the space bar at the serial terminal to bring up the control options:

```bash
Hit key to stop autoboot('Spacebar'):  0
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
---------------------------------------------
```

Enter 2 at the terminal to access the Screen Control sub-menu:

```bash
---------------------------------------------
hdmi0 and edp0 share same port, only one can be used.
hdmi1 and edp1 share same port, only one can be used.
only four VPs internally, so up to four interfaces can be activated
hdmi edp dp can only be displayed on VP0 or VP1 or VP2.
dsi0 dsi1 can only be displayed on VP2 or  VP3.
rgb can only be displayed on VP3.

Select  display
  0:Exit
  1: hdmi0 => VP0
  2: hdmi1 =>
  3: edp0  =>
  4: edp1  =>
  5: dp0   =>
  6: dp1   =>
  7: mipi0 =>
  8: mipi1 =>
  9: rgb   =>
  a: primary display  => HDMI0
b: primary display resolution => 1920x1080p50
---------------------------------------------
```

According to the content of the comments in the uboot menu, you can get the uboot display menu setting rules:

1\. Both hdmi0 and edp0 use the same port, and only one of them can be used at the same time;

2\. HDMI1 and EDP1 share the same port, and only one of them can be used at a time;

3\. There are only four VP internally, so a maximum of four interfaces can be activated;

4\. HDMI, EDP, and DP can only be displayed on VP0, VP1, or VP2;

5\. DSI0 and DSI1 can only be displayed on VP2 or VP3;

6\. RGB can only be displayed on VP3.

When setting up the display, enter the serial number corresponding to the display interface and VP will be assigned to the corresponding interface. If you input again, the system will switch the available VP (Virtual Ports) for this port one by one, or close the VP assigned to this port.

Enter a to switch the main screen display. Only the interface assigned with VP can be set as the main screen display.

**Setup Examples**:

As shown in the figure below, VP is assigned to hdmi0, hdmi1, dp0 and mipi0, so the main screen display can be selected from one of the above four interfaces. Because the HDMI interface is used, the EDP interface cannot be used. The primary display also selects HDMI0 with VP0 assigned and sets the resolution to 1920x1080.

**Note: When the primary screen is HDMI or DP, you need to set the "primary display resolution" to 3840x2160 and connect the primary screen before the device is powered on. Otherwise, connecting the main screen after startup will result in resolution switching on the secondary screen. When the main screen is EDP or MIPI, the primary display resolution option will not take effect.**

```bash
---------------------------------------------
Select  display
  0:Exit
  1: hdmi0 => VP0
  2: hdmi1 => VP1
  3: edp0  =>
  4: edp1  =>
  5: dp0   => VP2
  6: dp1   =>
  7: mipi0 => VP3
  8: mipi1 =>
  9: rgb   =>
  a: primary display  => HDMI0
b: primary display resolution => 1920x1080p50
---------------------------------------------
```

#### 2.4.2 Kernel Device Tree Specification

This method does not require the connection of a serial terminal, and the system image defaults to the desired configuration selection, which is suitable for mass production. However, we need to manually modify the device tree and regenerate the system image once again

Note: This method has a higher priority than the screen selection in U-Boot and the DisplayHwConfig application. After modifying the device tree, the selection in U-Boot will not take effect.

Device tree path: kernel-6.1/arch/arm64/boot/dts/rockchip/OK3588-C-Common.dtsi

In the kernel source code, open the device dtsi file and find the following node:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940830946-1935c571-9a4a-436b-abc6-ddbe18e07737.png)

The node has a default disabled state and needs to be changed to an okay enabled node. Change according to screen requirements.

**Parameter Description:**

| | **Meaning**
|----------|----------
| status| Describe the node state: disabled is for off, okay is for on
| HDMI0| Specify the VP assigned to HDMI0
| HDMI1| Specify the VP assigned to HDMI1
| EDP0| Specify the VP assigned to EDP0
| EDP1| Specify the VP assigned to EDP1
| DP0| Specify the VP assigned to DP0
| DP1| Specify the VP assigned to DP1
| MIPI0| Specify the VP assigned to MIPI0
| MIPI1| Specify the VP assigned to MIPI1
| RGB| Specify the VP assigned to RGB
| primary\_display| Specify the main screen display

Users need to change the setting parameters as required. After saving, it is necessary to recompile and generate an image.

An annotated description of the node:

1\. Both hdmi0 and edp0 use the same port, and only one of them can be used at the same time;

2\. HDMI1 and EDP1 share the same port, and only one of them can be used at a time;

3\. There are only four VP internally, so a maximum of four interfaces can be activated;

4\. HDMI, EDP, and DP can only be displayed on VP0, VP1, or VP2;

5\. DSI0 and DSI1 can only be displayed on VP2 or VP3;

6\. RGB can only be displayed on VP3.

So the optional parameters for HDMI0/1, EDP0/1, DP0/1 are "VP0", "VP1", "VP2", and "OFF";

MIPI0/1 optional parameters are: "VP2", "VP3";

The RGB optional parameter is: "VP3";

The primary\_display parameter depends on the actual display interface assigned to get the VP.

**Note: When modifying the device tree, you need to follow the annotation rules to avoid using conflicts. The driver does not detect whether the forlinx-control configuration conforms to the rules. An error in the setting will cause abnormal display. For the display interface set to "OFF", blocking, deleting, or retaining is possible. It’s not necessary to set all four VP.**

**Examples**:

Assign VP0 to HDMI0, VP1 to HDMI1, VP2 unused, and VP3 for RGB use. Set the main screen to HDMI0.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940831160-05a365a0-cb31-4721-8ec5-c7e9cdb3d04a.png)

After saving, recompile to generate the image.

### **2.5 System Shutdown**

In general, the power can be turned off directly. If there is data storage, function use, or other operations, avoid turning off the power arbitrarily during operation to prevent irreversible damage to the file. In such cases, only re-flashing the firmware can resolve the issue. To ensure that data is not completely written, enter the sync command to complete data synchronization before turning off the power.

Note: For products designed based on the SoM, if there are scenarios where accidental power loss causes the system to shut down unexpectedly, measures such as adding power-loss protection can be incorporated into the design.

## 3\. Android Function Use and Test

### **3.1 Main Interface Display**

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940851764-add4982c-67b8-43fa-b30f-26a38599a66c.png)

### **3.2 Application**

Swipe up on the main screen to bring up the following screen.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940852125-3ab8d177-fbc4-4891-bce5-c6ccc6f6fb9c.png)

Note: After software version updates, there may be minor differences, which do not represent the actual images for each subsequent version update and are provided for reference only.

### **3.3 Language Settings**

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940852445-596f8ecb-5e13-45b8-a0a9-eb9b20e905cd.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940852654-09f5669c-469c-465c-844f-fab9ae36d499.png)

Click "" on the application interface to enter the system interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940852893-546e7eaa-dbca-4884-ac82-a1f93c40afe1.png)

Click "Language and input method" to enter the language setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940853119-274361bf-2ee9-45c0-b72d-11c98c363c8e.png)

Click "Language" to enter the language selection interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940853315-fb907dfb-2994-43ea-87ef-ba5f7ad629c3.png)

Click "Add Language" to add a new language.

If you want to remove an installed language, you can click the icon with three dots in the upper right corner, select Remove, check the language you want to delete, click the trash can icon in the upper right corner, and a dialog box pops up, "Do you want to remove the selected language?" Click “Confirm” to deleted the language.

### **3.4 Picture and Audio View**

Store the picture and video files to be viewed into the TF card, and insert the TF card into the development board.

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940853535-9a11c3e1-7395-4a08-a80a-dd8083272ee2.png)" on the application interface to enter the TF card picture browsing interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940854054-ba732e9c-d6e6-465a-8f04-b738a3ebaabc.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940854376-8eba1510-4871-4e3d-a0a8-fb4004a6f23b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940854625-6a81c631-e807-402f-bb0d-7528b156f634.png)

After configuration, enter the picture and video view:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940854943-e622b66d-329b-4f9d-9aa4-94abe8bc4a95.png)

Click on the pictures and videos to view:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45535139/1718940855260-bea26119-a890-40eb-8af5-750ecb31ef31.jpeg)

### **3.5 Multimedia Test**

Store the audio file to be played into the TF card, and insert the TF card into the development board.

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940855553-619a0b2a-7e14-4f3f-ae84-01e76703daf9.png)" in the application interface to enter the music player interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940855774-7d1a04aa-1f20-486c-a85f-98aa5549281f.png)

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940855977-8cea84b4-558d-4351-9370-08b40b4a8bd3.png)" in the interface to enter the song list interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940856205-c29fe46e-81c8-46be-8c31-1972f7711a0f.png)

Click Play Music to enter the play interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940856428-a7b5c971-70f8-4d65-90a7-3105ce27773f.png)

The priority of sound playback is headphone > HDMI audio > carrier board speaker, and the volume can be adjusted by pressing the physical keys VOL + and VOL- on the carrier board of the development board.

### **3.6 Recording (Supports Mic input)**

Click the video "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940856611-8bb56dd9-9cfa-4a14-9df7-12b8308fa6a2.png)" in the application interface to enter the recorder interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940856871-ecb37d19-17a6-46e4-a021-d235c0ef8a8f.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940857142-166b57e9-3fa7-4df7-9f68-e3a817d4199e.png)

Click the round button to start recording: (Note: the pointer will swing according to the sound level during normal recording).

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940857349-6b63fbbf-4aa2-44b4-9e10-533820356262.png)

Click the square button to stop recording, and finally click the done button to save.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940857576-820871e7-6a67-4e3e-ac35-7ea3ad6458a8.png)

Click the "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940857811-48b7d1f3-2894-43fc-aae3-3424122ac6a7.png)" button below to display the previously recorded audio file.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940858035-c470d6cd-25ef-4c0d-9580-f061bd7429a7.png)

Click on the audio file you want to play, and the recording will start playing.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940858271-fe6b026b-7cd6-4e58-aced-7f7a6f58d64b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940858462-ea22b036-fde4-4cb6-ac42-2073c334aa29.png)

### **3.7 Adjusting the Volume**

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940858645-25cf73f5-ebd1-4f1e-a54b-407d27052933.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940858846-79ef215e-2a9e-4dca-b81b-9a6f1e6254f9.png)

Click "Sound" in the settings interface to enter the volume settings interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940859071-b8833ee0-1f08-423e-806e-b02e0d1b6855.png)

This interface allows you to adjust each section's volume and supports media volume adjustment using the physical buttons VOL- and VOL+ on the base plate. The default alarm tone is Cesium. Click "Default Alarm Tone" to modify it.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940859260-125990ed-f017-4008-8835-b419b8d7c849.png)

### **3.8 Display Settings**

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940859453-95a99126-d6b7-4096-a0d7-5dcfba9d61c0.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940859635-fce240fb-d343-4516-899e-d45212ab572f.png)

Click "Display" in the setting interface, enter the display setting interface, and select "Brightness" for the backlight setting, then the brightness adjustment slider will appear, adjust the brightness. Because the development board provided by Forlinx does not have a power sensing chip, the automatic screen rotation function in the advanced options does not work.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940859840-ac3b357a-3e8e-4abe-92c8-e0156a76fe66.png)

The default setting of OK3588 is to never turn off the screen. If you need to sleep and wake up, please click the "Screen timeout" option to select the sleep time.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940860050-12e278bb-3a09-4935-8fa6-ef1308a96cda.png)

Select screen sleep time.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940860236-8502bc78-9334-446f-ac2e-94608da6f5bd.png)

If there is no operation on the interface within the set sleep time, the screen will enter the sleep mode, and pressing the PWRON physical button on the carrier board will wake up the screen.

### **3.9 Time Setting（RTC）**

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940860464-22ea1d4e-1a24-405a-b710-bd64a3294b1f.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940860644-66edba9b-f6b7-4647-963f-60ba6abd8897.png)

Select "System," where you can change the date and time, and even after power failure, the time can still be synchronized (ensure that the button battery is installed on the board).

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940860838-a5d8aa72-ddb7-436e-bb51-6ac1e166680a.png)

The default is "Turn off network-provided time" and the time format is 24 hours.

Set the date and time separately：

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940861066-a578d44d-ce13-4880-b9ca-2008ca511c89.png)

Click on “Set Date.”

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940861309-2775c797-aaa9-43c8-b2a7-c3a587818325.png)

Click on “Set Time.”

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940861719-e3b8b1ae-b6a5-465f-80d5-381190e603f7.png)

### **3.10 Ethernet Test**

OK3588 has two Gigabit NICs on board (Ethernet ETH0 and Ethernet ETH1).

**Description:**

+ **When 4G and Ethernet exist at the same time, Ethernet is preferred by default; When 4G WIFI exists at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default.**

1\. Gigabit network port test:

Prepare a router and a network cable that can be connected to the external network port.

After inserting the network cable, click "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940861904-5044199e-b450-41db-a258-99db21943c31.png)" on the application interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940862085-cd2c7080-8c28-4e19-b48d-663ab9302441.png)

Click Network and Internet:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940862284-57f61d68-7ed2-412f-90d0-bac1eea2b042.png)

Click "Ethernet ETH0" to choose to automatically obtain IP DHCP or static IP. DHCP is recommended. If you set a static IP, make sure your network parameters are available.

Click "Ethernet":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940862478-90cd6a73-53e3-46e9-b16a-ea7d555ad59a.png)

The default IP acquisition method is "dhcp". If you want to set a static IP, click Ethernet Ip mode:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940862718-98873593-5e2a-47fa-9154-424dec1473ff.png)

Select Static for static IP configuration:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940862943-569943d1-5051-4c94-8ee9-4e45c51321a7.png)

Click CONNECT to complete the configuration:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940863139-66193319-b0ed-4499-a745-ea2cc8514f34.png)

Click Lightning on the application interface for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940863365-645a2c4f-1364-450d-831b-45bdbfc367b8.png)

Enter "[http://www.forlinx. net](http://www.forlinx.com)” in the domain name column and click "Start" to enter the official website of Forlinx.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940863696-36419b8d-9fc5-4e6d-b89d-09b12b60da3e.png)

### **3.11 WiFi Internet**

**Description:**

+ **When 4G and Ethernet exist at the same time, Ethernet is preferred by default; When 4G WIFI exists at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing WiFi, unplug the wired network.**

The OK3588 supports two modules onboard, the AW-CM276MA and the AW-XM458. Open Settings, select "Network \& Internet", and click "WLAN":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940864025-06484d1e-2829-47f5-a6b2-0f4fad4621f4.png)

Click "Use WLAN":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940864282-5bdbecbd-046b-46de-858f-b19ec4f40b3c.png)

Click on the WIFI to be connected and enter the password:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940864520-ff2629f1-22dd-4887-ad10-5b547b168612.png)

After successful connection, you can open the browser and enter the URL for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940864780-72de18f2-99fb-4339-8cf1-d75297209c7d.png)

### **3.12 WiFi Hotspot Test**

OK3588 supports the sharing of Ethernet or mobile networks through WIFI for WIFI hotspot testing. First, plug the network cable into the OK3588 ETH0 connector. Open Settings and click Network and Internet.

Click "Hotspot \&tethering":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940865108-c253897a-6790-46e4-b0d7-09e68fe95049.png)

Click WLAN Hotspot:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940865329-e2fd5f8c-d315-4ca7-abcf-a5fc556a4f5e.png)

Enable the WLAN hotspot and set the hot spot name and password:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940865552-3edf1119-4227-4773-b99d-f1b423821f31.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940865744-55c09c8a-c8a8-43f2-8b56-5c7d833ed5b4.png)

First set the hotspot name:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940865940-f3c112e2-fb81-4de8-8c7f-76816fcc9c45.png)

Click “Confirm”.

Set hotspot password:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940866189-030fd1ac-c057-455a-b4c1-618509781ef6.png)

Click “Confirm”.

After connecting to the hotspot through the mobile phone, you can surf the Internet normally.

### **3.13 4G/5G Module Test**

**Description:**

+ **When 4G and Ethernet exist at the same time, Ethernet is preferred by default; When 4G WIFI exists at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing 4G, unplug the wired network and turn off WiFi;**
+ **When using the 4G module, dial the S2 to ON, and when using the 5G module, dial to the other end.**

The OK3588 carrier board supports 4G modules (EM05) and 5G modules (RM500U, RM500Q). Before the test, please power off the development board, connect the 4G/5G module and insert the SIM card (pay attention to the direction of the SIM card), and start the development board.

Open Settings, select "Network and Internet", and click "SIM card":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940866450-18bc9f19-c68d-45e0-9350-1b5bd119ff56.png)

The default mobile network is on:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940866665-05981542-30f0-4e0c-b6a8-6724a66c585f.png)

Link 4G appears in the drop-down menu when the connection is successful.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940866896-840506dc-be19-4a0b-ac71-c89e4aff104a.png)

After successful connection, you can open the browser for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940867189-00f3370c-f7b1-4e5e-b9a8-7acfdf757b64.png)

The test method of 5G is the same as that of 4G, and the difference is that the icon display is different:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940867478-8cc23a57-16c4-4dbd-af6f-8763ad9ef07b.png)

### **3.14 Bluetooth Test**

**Description: The current system does not support iPhone Bluetooth connection.**

The Bluetooth function test of OK3588 platform uses the WiFi \& Bluetooth integrated module, which supports the connection of Bluetooth devices as the main device to transmit/receive files.

The testing method is as follows:

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940867672-c4726e29-409b-4b9c-9c13-fbf2c62f6f27.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940867865-a14ba787-7eaf-49ff-8ec2-c092c74faf64.png)

Click "Connected device" to enter the Bluetooth setting interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940868057-21ec4604-9e63-4cfa-bfd1-b7555c0e5657.png)

Click "+ pair with new device", open PC Bluetooth to scan at the same time, and click the Bluetooth device to be connected.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940868310-e1c66ce5-b32a-4655-9ad8-b769b283b6ec.png)

Click "Pairing", the mobile phone performs the corresponding pairing operation, and the interface of successful Bluetooth connection displays:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940868641-a1213099-e8ee-4e15-8940-6791fe52d668.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940868881-b1d78566-f2d0-437b-8fa1-4dd88a8ff31b.png)

1\. File transfer file test:

Accept the file:

The mobile phone shares photos to the OK3588 using Bluetooth; click "Accept" will start the outgoing.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940869108-d6c3b872-2d68-4f4f-8da0-84c9fdb26b1a.png)

The transfer progress will be displayed in the prompt bar, and you can view the picture after the transfer is completed.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940869328-256493ee-2994-4a8a-8eb6-e560fbe9f951.png)

2\. File transfer test:

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940869617-06edf6aa-22e3-4f59-af5d-270bc2e68288.png)” File Application to enter the file system interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940869802-9027bf3a-218a-4186-a326-74f12e37499e.png)

Select an image and click the share button in the top right corner "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940870088-cacd908e-01fa-4c16-ac60-1f739f41acb3.png)".

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940870286-9a525cbb-633f-49ed-81ab-6d59a7f07288.png)

Send via Bluetooth.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940870491-f0618d34-edfb-41af-9ff7-9f094d7bcce9.png)

Select the previously paired device, select the phone to receive the file, and the Bluetooth transfer will start.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940870715-9c646170-ba1b-474c-ab48-b1d278bf4197.png)

You can view the transfer progress in the notification bar, and after the transfer is complete, you can view the received images on your phone.

### **3.15 Key Test (Sleep Wake-up)**

There are 8 keys on the development board, including VOL +, VOL-, MENU, ESC, HOME, PWRON, RESET and Maskroom.

| **Key**| **Function**
|----------|----------
| Recovery/VOL+| VOL+
| VOL-| VOL-
| PWRON| Wake up from sleep and power on/off
| Maskroom| Work with RESET to enter maskrom mode.
| RESET| RESET
| MENU| Pop-up menu Home screen settings, Widget, Wallpaper
| ESC| Return

The default factory setting is the non-hibernation state. At this time, press the PWRON key lightly to turn off the screen and enter the hibernation state (note that the carrier board cannot be inserted into the wake-up source such as USBOTG). The hibernation print information is as follows:

```bash
de345678INFO:    PMU1_PWR_CON(0x1) PMU1_CRU_PWR_CON(0x2f) PMU1_WAKEUP_INT_CON(0x100)
PMU2_BUS_IDLE_ST(0x27fffff 0x0) PMU2_BUS_IDLE_ACK(0x27fffff 0x0) PMU2_PWR_GATE_ST(0x6fffffff 0x0)
PMU2_BUS_IDLE_CON(0x0 0xfd80 0xf007) PMU2_BIU_AUTO_CON(0xffff 0xffff 0x7)
PMU2_PWR_GATE_CON(0x0 0x9000 0x3)
PMU2_VOL_GATE_CON(0x7 0x0 0x3)
PMU2_QCHANNEL_PWR_CON(0x0) PMU2_QCHANNEL_STATUS(0xfe0007f)
PMU1_DDR_PWR_CON(0x747 0x747 0x747 0x747)
PMU1_DDR_PWR_SFTCON(0x900 0x900 0x900 0x900)
PMU1_PLLPD_CON(0xffff 0x3)
PMU2_DSU_PWR_CON(0x3)
PMU2_CORE_PWR_CON0(0x1 0x1)
PMU2_CORE_AUTO_PWR_CON0(0x0 0x0)
PMU2_CLUSTER_IDLE_CON(0x75)
INFO:    PMU0_PWR_CON(0x0) PMU0_WAKEUP_INT_CON(0x0)
PMU0_DDR_RET_CON(0x0 0x0)
PMU1_GRF_SOC_CON2(0x7777) PMU0_GRF_OS_REGS9(0xf2acf6f4)
S
```

In the sleep state, press the PWRON key again to wake up the CPU. Press and hold PWRON to shut down the device

The other buttons have simpler functions, so please test them yourself.

### **3.16 TF Card and USB Storage Test**

It is a test of TF card and USB storage device. Insert the USB device into the OK3588 USB Host port. The system will automatically detect the insertion of the USB flash drive.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940870904-e0b170d3-9008-46d8-94b6-6d9a01ebbc64.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940871077-e97e2689-db4a-41df-87f9-affafbb167c2.png)

Click "Storage" to view the internal storage device and the inserted U disk device:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940871279-a555155e-52a4-4185-8863-ebc78eb1dc95.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940871476-2674f20f-093b-417e-bc51-6252843cbc27.png)

Click "MASS U disk" to view the contents of the U disk for reading and writing:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940871673-d7d698ea-f8c2-42f7-8b23-ed63fab415d6.png)

Click the file.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940871919-a7875cf3-ea72-4b52-bab8-bc372182a31e.png)

The TF card reading and writing method is the same as the U disk reading and writing test method. Insert the TF card into the TF card slot, and the system will automatically detect the insertion of the TF card. You can also view the contents of the TF card in the storage interface:![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940872209-07167ff9-a243-4534-929c-96eeb8386d2c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940872470-d924ecf0-9552-4998-a5fb-298266d70949.png)

### **3.17 USB Mouse Test**

Once the system is running, you can plug in a USB mouse into the USB host. You will then see the mouse cursor “</font>![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940872695-b43cb3fd-d14a-4a2c-9f96-40e210aa3683.png)<font style="color:#000000;">”, within the interface, and you can navigate and operate the Android system using the mouse.

### **3.18 USB OTG Interface Test**

The OK3588 development board supports USB OTG functionality.

Typec0 of the development board is connected to the computer through the otg cable, and the computer will recognize the board as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940872870-c63a428a-532c-47f4-878a-630f552f06dc.png)

### **3.19 Serial Port Test**

UART2, UART4, UART6, UART9, a total of four serial ports led out from the OK3588 carrier board; UART2 for debugging serial port, UART6 for Bluetooth serial port, and UART9 for 485 serial port. The default device names of UART4 and UART9 in the development board are ttyS4 and ttyS9 respectively. Take the test of UART4 serial port as an example, short-circuit the receiving and transmitting pins of UART4 according to the schematic diagram of the development board, corresponding to PIN7 and PIN10 respectively.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940873077-66f4f3db-35bf-4357-a8cf-a42bb896366a.png)

Open the serial port test program on the desktop![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940873299-589c4ea1-dcc9-470f-b35c-9b3a0e3126cc.png).

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940873538-0b1dfb17-04a8-4b48-a9fe-5e9e6bb072af.png)

Click the "SETUP" button:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940873796-dd45eb36-7cf3-4cd4-b5c8-944920886b8c.png)

Set serial port device, baud rate and display format:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940874004-57297b44-a639-4f3c-8085-b55823a4aaf3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940874230-15709e28-b324-4fec-8ac8-c4d39c97d49e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940874414-b8f2501b-6f8a-47b6-add9-3053bc10fc40.png)

Then click the "Loopback" option in the previous menu to perform the loopback test.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940874700-75833af7-0fad-41b4-90a7-c5313d1cd3af.png)

Click the "CONSOLE" option in the previous menu to perform the send-receive test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940874915-81194e6a-dd6d-4bbf-9e71-ed10ea89b3c6.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940875423-e1abe183-ad29-4cd1-add9-c67466f758e5.png)

### **3.20 Watchdog Test**

Click![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940877395-f50e79a6-5822-45bb-ab34-43f1f2dd0f9a.png) "forlinux \_ watchdog \_ test" "on the application interface to enter the watchdog test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940877667-6533bb77-d1dd-4491-a1d2-3be6787df24c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940877945-df761718-b899-45c8-9b4c-82f4f8c301b8.png)

There are three buttons on the interface: "start", "feed" and "stop". Click "start" to see the dog and "feed" to feed the dog:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940878167-889ba672-3654-4a6b-859e-3304d79e9710.png)

If a timeout (timeout of 10S) is not performed to feed the dog, the system reboots. Click "stop" to stop the watchdog test, and the system will not start:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940878366-cf33c763-78c0-4f07-8d01-031e915426b6.png)

### **3.21 Camera Test**

#### 3.21.1 UVC Camera Test

Click on the camera in the application interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940878650-f124d2eb-0b66-4c82-9043-360114c3cc72.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940878930-a2a62514-7da5-475c-ab45-b021f234801d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940879132-52ab1ecb-cf03-45d9-915b-e1c2c6a45f40.png)

Enter the preview interface and click the photo button on the right to take a photo:

Swipe the screen to the right to open the options for switching between photo and video mode, as well as accessing settings.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721890643832-71418849-2fe4-4623-b6b2-400612db339c.png)

Tap on the settings button in the top right corner to adjust settings such as resolution and image quality.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940880055-4ec30317-f3cd-43e1-b53e-ccd7d1323346.png)

Click the video button to enter the video preview interface:

Click the video button to record the video:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721890763616-707f7024-6605-4543-99a2-a05574d832af.png)

#### **3.21.2 OV13855 Camera Test**

OK3588 supports 5 x mipi Camera, in which CAM1 and CAM2 are used for OV13855 and CAM3, CAM4 and CAM5 are used for MIPI OV5645.

Please power off first, plug in two OV13855 Cameras, and power on to start.

Click on the camera in the application interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940881009-15efed50-7203-4942-bc2d-e5db52c13dcc.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940881274-72834fe4-425c-4777-961f-21511c11f406.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940881439-1b6e5474-4658-4189-8a22-c6d241ef60d3.png)

Enter the preview interface and click the photo button on the right to take a photo:<u><font style="color:#000000;"> </font></u>![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721891522720-eb5d5aeb-42f4-4d65-922b-c9d18c969360.png)![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721891610968-dc014b4a-f46b-49bc-adea-a9d9fd012028.png)

Swipe the screen to the right to open the options for switching between photo and video mode, as well as accessing settings.

Tap on the settings button in the top right corner to adjust settings such as resolution and image quality.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940882838-fbcf12eb-6b6f-43ee-893c-03667a9b02ce.png)

Click the video button to enter the video preview interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721891447795-3b70ab31-8401-4a6c-8f12-aa6a6fc3468b.png)

Click the video button to record the video:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1721893524238-9db0bd0a-734c-4aa2-93b4-27d6733ef48a.png)

### **3.22 HDMI Resolution Setting Test**

OK3588 platform supports dynamic setting of HDMI resolution.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940883852-a3c1f1bf-e337-4385-a7a7-d93b311dd079.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940884012-037d02cd-7df3-4e2d-aa1a-05b8e2c82de7.png)

Click "Display", select "Advanced", and click "HDMI" to configure HDMI:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940884210-adcfee37-9e77-4a7f-96f1-7e12c99a03bc.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940884451-ff05dd28-66bd-457a-9fac-4f281b26e6af.png)

You can dynamically select the desired resolution based on the resolution supported by the current HDMI screen:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940884642-e81b06db-1e8b-430c-ac9e-f2e5cd918910.png)

After restarting, the device will take effect.

### **3.23 Factory Reset**

The OK3588 platform supports restoring factory settings.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940884897-dfc7fe83-d595-4703-89e0-38963a2b0609.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940885116-c14afa8b-db64-46b9-80bb-70d5d59da08b.png)

Click "System":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940885312-b4c4e1f3-bd9d-4513-a35a-772b9e423afa.png)

Click "Reset option" and select "Clear all data (restore factory settings)":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940885569-bae964bd-d2ec-45b0-b29d-9d072d583a81.png)

Then click "Clear All Data".

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940885786-e1977ee2-cb28-4f47-98f8-7b8811bbca38.png)

Wait for OK3588 to restore the default factory settings. Please do not power off during the process of restoring the factory settings.

### **3.24 APK Installation with TF Card**

After loading the TF card according to the previous steps, you can see an APK file after entering the TF card directory.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940885984-1018124e-d1da-4141-abdc-0394482e38e8.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940886206-1b506013-3e51-4065-a8c6-3256076b7930.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940886616-03276922-faf0-46eb-a2a1-fecdbedaad86.png)

Double-click the APK file to install and configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940886878-40fadb02-05f3-4902-97be-fa61bc342b55.png)

Click "Install" to complete the installation:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940887176-6bc257d6-021c-4888-843a-4f95fac44c5b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940887446-8bf8c21b-0047-4dba-a4db-53295ad4ccea.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940887661-5faa9ef2-523a-4628-a212-033543dab0d1.png)

### **3.25 WiFi ADB Test**

**Note: Only one of USB ADB and WIFI ADB can be used at the same time.**

Follow the previous section to connect to WIFI, click "![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940888104-c9c97cbc-3d2b-4115-979a-dcdce047e2d1.png)" after successfully connecting to WIFI:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940888308-56ddf819-5705-4ee7-9a34-4fd826d223c0.png)

Click “About Tablet PC”:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940888516-28f85cb4-7461-41b3-963a-e398f682d896.png)

Continuously click the "Version number" prompt to enter the development mode:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940888787-3fa900c8-0877-4c0a-94e9-1485af1bce2f.png)

Return to the previous layer and select "System" in the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940889002-3f0220c2-99d3-40ca-8b32-f3380b997137.png)

Select Developer Options, you need to turn off "USB Debugging" and turn on "Wireless Debugging":

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940889225-5764655f-4d43-43b8-a41d-f1dafc6243d8.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940889471-0e5e95a0-8aa4-4f2c-af95-ad215feccaad.png)

Record the "IP address and port" of the current WIFI.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940889678-6e117ba5-1314-4137-a3ad-93512f79c8ae.png)

Open the window command and control window, type "adb connect 192.168.1.61:43985" to connect to wifi:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940889861-17a6067b-558b-4862-9348-81ceaca8446f.png)

Type "adb devices" to see the connected devices. Enter "adb shell" to access the device terminal.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940890105-8a11e591-37cf-438b-8f31-172782b5bc1f.png)

Type "adb disconnect" to disconnect, and then type "adb devices" to see the devices.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940890299-f6ab1a28-ae41-45c5-8c73-b3d7f50308b8.png)

### **3.26 Navigation and Status Bar Settings**

The current release supports showing/hiding the navigation and status bars.

Select Show Navigation Bar and Show Status Bar to control whether they are hidden.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801260226-a50747d0-9e9f-4773-aab7-038176e44bb2.png)

Restart OK3588.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940892015-6867ac9f-a1d8-491d-8910-98572d2654a2.png)

Block the navigation bar, top slide bar, and right mouse button for the return function.

### **3.27 Artificial Intelligence Test**

OK3588 android platform supports tensorflow lite and other mainstream AI frameworks. TFL Detect is used here to test target detection routines for customer reference. Routines such as accessories need to be installed by yourself.

The TFL Detect test routine![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940893133-81954254-4686-40cf-8701-1bbd45d3b882.png)is the official routine of tensorflow lite, which can run directly on the OK3588 platform without modification. It mainly uses the computing performance of the A-core, which occupies relatively high CPU, but it can often achieve higher detection frame rate by using multi-wire.

Test by placing the item in front of the camera will automatically recognize the item.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940893435-f6d2a8bb-0ca3-4084-b356-01894a9b7d7d.png)

### **3.28 Screen Lock Test**

**Note**: **By default, Android will not lock the screen when it is started for the first time. If it is not modified, it will be opened in the lock screen state after restarting.**

OK3588 does not lock the screen by default. If you need to lock the screen, you can set the screen lock through Settings-> Security and Privacy->, as follows:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801260353-a9446aaa-658f-4096-a471-ecf25114d0de.png)

Select a screen lock method.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801260474-79b2ff1b-e29f-4752-bbe0-21c78df87bce.png)

### **3.29 NPU Test**

OK3588 The current test NPU examples are: rknn\_mobilenet\_demo\_Android, rknn\_ssd\_demo\_Android, and rknn\_multiple\_input\_demo\_Android, respectively, and the test routines are located at:

️ <font style="color:#000000;">Path: OK3588-C（Android）User Profile\\Android\\Program\\rknpu.tar.bz2</font>

Here is an example of rknn\_ssd\_demo\_Android to test the NPU:

Open the window comman

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940893935-f7351fdd-0e82-442f-ab6d-84dc62db9359.png)

Enter the following command to upload the test routine to the development board file system.

```bash
adb root
adb push rknpu.tar.bz2 /data/
adb shell
cd /data
tar xvf rknpu.tar.bz2
```

Then enter the following command to test

```bash
cd /data/rknpu/rknn_ssd_demo_Android/
```

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940894132-c7ac7a67-6640-4ce2-9eec-dd85b4e6c555.png)

Run the rknn\_ssd\_demo as follows:

```bash
chmod +x rknn_ssd_demo
export LD_LIBRARY_PATH=./lib
./rknn_ssd_demo model/RK3588/ssd_inception_v2.rknn  model/bus.jpg
```

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940894371-6077686f-ea34-4567-90f0-259e45da8491.png)

Pull the out.jpg file from the current directory to any directory in the window via adb.

```bash
adb pull /data/rknpu/rknn_ssd_demo_Android/out.jpg .
```

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940894640-443f6f8b-5734-4446-a35c-bf069deb0270.png)

Open the out. jpg file by using the diagram viewing software

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45535139/1718940894882-665bd85f-1852-4f73-bdbb-dd869f4fc2c4.jpeg)

### **3.30 Hdmi In Test**

OK3588 Hdmi rx supports resolutions up to 3840x2160 @ P60 and 4096x2160p @ P24.

After inserting the HDMI cable, open ![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801260554-57607286-b35d-4148-b7b4-83b9783dd6b2.png)in the application interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940898672-b2e998b1-b399-4957-a994-8c2f4c697959.png)

#### **3.30.1 SERIAL PORT DEMO**

Click "SERIAL PORT DEMO" "to enter the serial port test interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940899411-9a683cb7-f4e0-45c1-9e1d-46a9c85b20c0.png)

Device: Select the serial port to be tested.

Baud Rate: Select the baud rate of the serial port.

Data Bits: Specify serial port data bits.

Data Bits: Specify serial port stop bits.

Connect TX, RX of the corresponding uart4 serial port on the OK3588 development board (pin positions as shown in Figure 1 3.19 Section).

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940899631-743e93ef-0fe2-4036-af35-1713befebc7c.png)

After setting the above contents, click the OPEN button to start the test

Display the set serial port information in the Status column.

Add the content to be sent in the Received Data column, and click SEND to send data.

Send data will be received in the Send Data column. Click CLEAR to clear the received data in the Send Data column.

#### **3.30.2 SPI DEMO**

Click "SPI DEMO" "to enter the SPI test interface (no SPI test interface is reserved on the 3588 board).

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940899840-5a011ab3-8b1c-4372-a51a-03836183df80.png)

Device: Specifiy the SPI to use.

SPI Mode: Specify one of the four modes.

Bit order: Specify one of 1 (LSB), 0 (MSB).

Bits: Specifiy the number of bits in the data.

Speed: Specify the transmission rate in the range of 10-1000000.

After the above is set, click OPEN to start the test. Connect the miso and mosi pins of the selected spi on the OK3588.

Enter the data to be sent in the Sent Data field and receive the sent data in the Received Data field.

#### **3.30.3 I2C DEMO**

Click "I2C DEMO" to enter the i2c test interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940900082-d90ab4f2-7b36-4b97-a517-a59eb1608827.png)

The RTC chip is connected to the I2C, and clicking the READ button will read the time in the RTC register.

Fill in the time in the columns of Year, Hour, Minute, and Second, and click the WRITE button to write the data into the corresponding registers of the RTC.

#### **3.30.4 GPIO DEMO**

Click GPIO DEMO “ to enter the gpio test interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940900309-52fcb0e8-fb8a-48ed-80e4-1594fefe072b.png)

The formula in the upper right corner of the above figure, is the method of calculating the gpio serial number.

Select GPIO in the drop-down bar, click the GET button, and get the high level 1 or low level 0 in the GPIO Value bar.

Enter a 1 or 0 in the GPIO Value field and click the SET button to set the GPIO output high or low specified in the drop-down field.

#### **3.30.5 WATCHDOG DEMO**

Click "WATCHDOG DEMO" to enter the Watchdog test interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940900617-3aa59fb4-4ec0-4ee4-a6d1-bfc8ebe91eb7.png)

Clicking the START button will start the watchdog and start a 15-second countdown, when the countdown reaches 0, the device will reboot.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940900835-c3a0c1bb-f7b4-4bb7-93bf-83d63ab4e1e4.png)

Turning on Auto Feed will enable automatic dog feeding; clicking on MANUAL FEED "will manually feed the watchdog once. Clicking the STOP button will stop the watchdog.

#### **3.30.6 ADC DEMO**

Click "ADC DEMO" to enter the adc test interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940901069-79a3afeb-c798-41df-8c30-e0218a599118.png)

Click IN\_VOLTAGE0\_RAW to select the ADC channel, click the START button to start the test, the ADC value will be displayed in the "ADCValue" column.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940901258-7cb44e9d-5cde-4cd6-b315-a414471d640e.png)

Click "STOP" to stop the test:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940901484-88732f5f-4d80-458e-b1f9-9d871702a54b.png)

## 4\. System Flashing

### **4.1 OTG System Flashing**

#### **4.1.1 OTG Driver Installation**

️Path: Software Data \\ 3-Tools\\DriverAssitant\_v5.13.zip

Extract the above path file to any directory and run it with administrator privileges

Open DriverInstall.exe.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801262304-8cca6218-f872-448e-b0b0-a811a681522c.png)

Click "Driver Installation”.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801262382-6b678a97-02ac-4d71-b355-d7fac17cd6db.png)

#### **4.1.2 OTG Flashing Test**

##### **4.1.2.1 RKDevTool Flashing Test**

Path: 3-Tools \\ RKDevTool\_v3.30\_for\_window.zip

It is a development tool provided by Rockchip Micro. Unzip it to a full English path before use, connect the Typc0 port of the development board and the host computer with a Type-C cable, press and hold the recovery key of the development board and don't release it, then press the reset key to reset the system, and release the recovery key after about two seconds. There will be prompts on the Rockchip development tool : loader device found

**Note: The operation to recognize the device is that the recovery button should be in the pressed state when the development board is powered on.**

**Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.**

Open the Rockchip development tool:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940926455-346fca05-9187-4e68-b8be-e67d9a7aeb31.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img. The program will be parsing the firmware, so wait a while.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940926673-2fa1ff40-e5be-48cc-b1ef-ca3d9a0f1d8d.png)

Click the "Upgrade" button to upgrade.

**Introduction to MASKROM mode**

If the loader is damaged and cannot enter the Loader mode, press and hold the red Maskrom key and then press the reset key to enter the maskrom mode for flashing.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940926916-f54eb5f4-ae39-4746-9bae-43ddac2c3111.png)

At this time, the system will prompt the discovery of a maskrom device. The flashing process is consistent with the loader mode, so it is best to use an update.img burning.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid. A separate burn in maskrom mode will not clear the UBOOT environment variables.**

**Introduction to Downloading the Individual Image Function**

This feature is useful when you need to download a separate image. This function is only applicable in loader flashing mode.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940927185-50def76d-2f52-47e6-981b-3c8db6a66864.png)

1. Click ① Download image tab;
2. Click ② Device partition table to read the mirror partition location;
3. Click the ③ check box to select the image to be flashed separately;
4. Click ④Here to select a image;
5. Click ⑤ to execute for flashing;
6. Restart after flashing.

**4.1.2.2 Factory Tool Flashing Test**

Factory Tool is a factory batch OTG flashing tool, which does not need to read the image and supports large file flashing. Use this tool if RKDevTool is not compatible. Before use, you need to decompress to the full English path, connect the development board to the host, press the recovery key, press the reset key to reset, and release the recovery key after two seconds. There will be prompts on the Rockchip development tool : loader device found

**Note: The operation to recognize the device is that the recovery button should be in the pressed state when the development board is powered on.**

**Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.**

Open the Rockchip development tool:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940927449-52d6de41-ce5e-43a6-9007-76cd8dd857af.png)

Click to select the firmware, and click to start. At this time to recognize the loader device will automatically start burning.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940927753-f00a4e70-f91f-4895-9c83-67d6b22e3ac3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940928070-85202ada-f163-448f-b3dc-e85253b5ee1d.png)

### **4.2 TF Card Flashing**

TF card production, flashing and testing

**Note: The tested TF card capacity is up to 16G, using 32G and above TF card may fail to flash.**

Copy the SDDisk Tool \_ v1.78.zip from the 3-tools directory to any windows directory. Run SD\_Firmware\_Tool.exe with administrator privileges.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940928423-15e9601c-a5af-4cce-b4a3-ee97d01478cf.png)

Select the disk device, check "Firmware Upgrade" and select update.img. Click Start Creating.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940928624-eafd6d6b-d06b-40d3-ab18-5893b25153ff.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940928812-649ac8d5-5fe7-4939-9c18-f23d48098a4d.png)

Insert the TF card into the development board and start, the system will automatically enter the flashing process. When the flashing is complete, both the screen and the serial port will prompt:

Please remove SD CARD!!!, wait for reboot.

At this time, pull out the TF card, the system automatically restarts (please do not power down directly).

During mass production, check the flashing status by SoM heartbeat light.  Heartbeat light modes are as follows:

1. Kernel startup phase: Heartbeat light mode, regular intermittent flashes;
2. Flashing preparation phase: EMMC indicator light, off;
3. Flashing in progress phase: EMMC indicator light, on;
4. Flashing completion phase: Heartbeat light mode, regular intermittent flashes.

Serial port information during the burning process:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940929006-7048b010-3721-4a3c-894e-04e2bd2ae674.png)

If the automatic restart does not occur after removing the TF card, a manual restart can also complete the burning. Please be patient during the burning process.

## 5\. System OTA upgrade Test

OTA (over the air) upgrade is a standard software upgrade method provided by Android system. It has powerful functions, and the current version of system OTA upgrade provides two methods of local complete package upgrade and network upgrade.

### **5.1 OTA Upgrade Package Compilation**

You can use the build.sh in the OK3588 - android14 - source directory to compile the full OTA upgrade package. Please modify the Android code first, and then compile the OK3588 system upgrade package:

```bash
forlinx@ubuntu20:~/OK3588-android14-source$ ./build.sh -KAuop
```

The directories of the generated files are rockdev/Image - ok3588\_c/ and IMAGE/OK3588\_C\_USERDEBUG\_OK3588 - C - ANDROID\_\_xxxxxxxxxx/IMAGES/.

Among them, ok3588\_c - ota - eng.root.zip is the full upgrade package, and ok3588\_c - target\_files - eng.root.zip is the incremental upgrade package.   
Rename either ok3588\_c - ota - eng.root.zip or ok3588\_c - target\_files - eng.root.zip to update.zip, and it can be used for a full OTA upgrade.

**Note: The full upgrade package contains the complete system, while the incremental upgrade package contains the differences between two versions. Therefore, you need to ensure that the development board has been flashed with the lower - version system before using the incremental upgrade to ensure a correct upgrade.**

### **5.2 OTA Local Upgrade**

Copy the update.zip generated in the previous section to the root directory of the USB or TF card, or the /data/media/0/ directory, the system will automatically detect the upgrade package and pop up the upgrade dialogue box.

The following is done in adb mode:

```bash
adb root
adb remount
adb push updata.zip /data/media/0/
```

After waiting for a while, the interface prompts whether to install the upgrade package window.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940987481-f2223664-f0ed-475e-998d-f428c7e2b1db.png)

Click "Installation”.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940987829-ba310991-112d-4158-8002-70e8b2f2f8d1.png)

The debugging window prints the following information:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940988058-b6600e05-17e9-432f-a9da-6a20ad4dd171.png)

After that, it will automatically restart and enter the Recovery system to automatically complete the OTA package upgrade. At this time, it cannot be powered off and wait for the upgrade.

When completed, it will automatically restart to the main Android interface.

After the system restarts, a dialog box pops up on the interface to prompt congratulations on the success of the upgrade.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940988320-ee782346-fe3b-46ca-a2be-d170ee657211.png)

Click "Yes".

Finally, you can verify that the android system has been modified.

Note: The prompt for firmware upgrade operation after the system reboot is the correct prompt because the file /data/media/0/update.zip exists, so it will wait for a few minutes to pop up the prompt. The Firmware Prompt dialog will not pop up after deleting the/data/media/0/update.zip.

### **5.3 OTA Network Upgrade**

1\. Environment Setup

Edit the device/rockchip/rk3588/ok3588\_c/ok3588\_c.mk file and modify the server IP address through ro.vendor.ota.host.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1756801263848-4a4f3b10-d5cc-4646-acfa-fb6172c9c5f3.png)

Execute ./build.sh -KAuop to compile the upgrade firmware.

The directories of the generated files are rockdev/Image-ok3588\_c/ and IMAGE/OK3588\_C\_USERDEBUG\_OK3588-C-ANDROID\_\_xxxxxxxxxx/IMAGES/.

Among them, ok3588\_c-ota-eng.root.zip is the full upgrade package, and ok3588\_c-target\_files-eng.root.zip is the incremental upgrade package.   
Rename either ok3588\_c - ota - eng.root.zip or ok3588\_c - target\_files - eng.root.zip to update.zip, and it can be used for a full OTA upgrade.

Extract apache-tomcat-7.0.29.tar.gz to PC Ubuntu home directory, copy update.zip to /home/forlinx/apache-tomcat-7.0.29/webapps/OtaUpdater/WEB-INF/packages/ ok3588\_c/1.0.0/1.0.1.zip

Enable apache-tomcat

```bash
cd /home/forlinx/apache-tomcat-7.0.29
./bin/startup.sh
```

Disable apache-tomcat

```bash
./bin/shutdown.sh
```

2\. Network Upgrade Test

Connect network and power up OK3588 board, and the prompt dialog box will pop up to prompt system upgrading.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940988950-b3846c51-d570-4984-8566-1373ab3935d1.png)

Click "Yes", the upgrade 1.0.1.zip file will be downloaded via http protocol.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940989332-9bba55e7-29ef-495d-a30c-0954b33d3f70.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940989619-f0f6cf3d-d7e0-46c8-8041-dd916ab2ac8f.png)

The system will restart automatically, and the serial port terminal will print as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940989800-a5e943d3-bfd7-486e-b27d-d35c0637c225.png)

After this reboot, the android interface prompts that the upgrade is complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1718940990071-4e00375e-f946-46e2-ae36-4891f4fdfe70.png)

Click “Yes”.

**Note: If prompted to upgrade again, click "No", because OK3588 can get the remote 1.0.1.zip upgrade package through the network, so it will remind you whether you need to upgrade or not.**

## 6\. Multi-display with Independent Touch Control

The multi-display with independent touch control function enables you to use the DisplayHwConfig app to set the main and secondary screens, the binding relationship between the display and VOP, the binding relationship between the display and touch (input) devices, customize the DPI settings, and display the app itself on different screens.

After the parameter settings are completed, restart the device for the settings to take effect.

The source code of the app is located in vendor/forlinx/DisplayHwConfig.

### **6.1 Primary and Secondary Screens Settings**

Click the “PRIMARY DISPLAY” button to specify the primary screen.

Select the display you want to set as the primary screen from the menu and click “OK”.

**Note: When setting the primary screen, make sure the selected display is bound to a VOP (Video Output Processor) and the relevant DTS (Device Tree Source) nodes are enabled. Otherwise, the Android system will indicate that the primary screen does not exist.**

The currently opened display device, excluding the primary screen, is the secondary screen. The configuration of secondary screens is adaptive and does not require manual settings.

### **6.2 Binding between Display and VOP Settings**

Click the non - “PRIMARY DISPLAY” button to set the binding relationship between supported displays and VOP.

Click the button to enter the VOP selection page, and click “OK” to save the changes.

**Note: The red text below shows the rules for binding VOP. Also, ensure that the same VOP is not bound to multiple devices.** 

### **6.3 Binding between Display and Touch (Input) Devices**

This function can dynamically bind the display and touch devices together to achieve the asynchronous touch function. The display information will be presented according to the binding relationship between the display and VOP. The drop - down menu shows the information of the current touch (input) devices. Select one and click “Save” to establish the binding relationship.

The displayed information will be presented according to the binding relationship between the display and VOP. The drop - down menu shows the information of the current touch (input) devices. Select one of them and click “Save” to establish the binding relationship.

The driver of the touch (input) device needs to support the phys parameter so that the app can obtain the information of the touch device.   
In the driver, the content of the phys parameter of the struct input\_dev structure needs to be added.   
You can refer to the following methods:

Add the input - phy attribute to the touch device node in the device tree and specify the content of phys.

```bash
ft5x06_dsi0: ft5x06@38 {
    compatible = "edt,edt-ft5406", "edt,edt-ft5x06";
    reg = <0x38>;
    pinctrl-names = "ft5x06_default";
    pinctrl-0 = <&ft5x06_dsi0_gpio>;
    interrupt-parent = <&gpio3>;
    interrupts = <RK_PC0 IRQ_TYPE_EDGE_FALLING>;
    // irq-gpio = <&gpio3 RK_PC0 GPIO_ACTIVE_HIGH>;
    // reset-gpio = <&gpio3 RK_PB7 GPIO_ACTIVE_HIGH>;
    touchscreen-size-x = <1024>;
    touchscreen-size-y = <600>;
    input-phy = "ft5x06_2_38/input0";
    status = "okay";
    };
```

Add the content to obtain input - phy and configure phys in the touch device driver.

```bash
    const char *location;
    // 'input-phy(location)' is a crucial parameter for binding touch and display in the Android layer and must exist.
    // It is essential to ensure that the 'input-phy(location)' is unique for each device.
    of_property_read_string(client->dev.of_node, "input-phy", &location);
    if (location) {
        input->phys = location;
    }
```

Note: If you want to verify whether the multi - touch function is set correctly, each display device should display a different app, and then click on them respectively. You can also click the “Display on this screen” button to display the app on the specified screen and perform touch operations.

### **6.4 DPI Custom Settings **

For the main displays with different resolutions and sizes, the display effects are different even with the same DPI. Therefore, a function to customize the system DPI is provided.

Enter the specified DPI value in the “Display DPI” input box, then click “Save”. The settings will take effect after restarting.

### **6.5 APP Display on Different Screens**

By clicking the “Display on this screen” button, the app can be displayed on different displays.

## 7\. Root Permission Management

Root permission management is located in the “ANDROID System Configuration” of the App DisplayHwConfig.

The source code of the app is located in vendor/forlinx/DisplayHwConfig.

Root permission management can control the shell, ADB, and apps separately or uniformly.

### **7.1 Shell Permission Control**

Select “Enable shell” to grant root permission to the shell.

When the root permission of the shell is enabled, executing su in the serial terminal can successfully obtain root permission.

When the root permission of the shell is disabled, executing su in the serial terminal will have the following behavior:

```bash
console:/ $ su
su: not allowed
```

### **7.2 ADB Permission Control**

Select “Enable ADB” to grant root permission to ADB.

When the root permission of ADB is enabled, executing adb root in the PC terminal can successfully obtain root permission.

When the root permission of ADB is disabled, executing adb root in the PC terminal will have the following behavior:

```bash
C:\Users\forlinx>adb root
adbd cannot run as root
```

### **7.3 APP Permission Control**

Select “Enable APP” to grant root permission to the app.

When the root permission of the app is enabled, opening RootCheck will show that the app root permission is enabled.

When the root permission of the app is disabled, opening RootCheck will show that the app root permission is disabled.

RootCheck is not pre - installed in the system and needs to be installed manually. The source code is in “Software materials\\2 - Images and source code\\2 - Test programs”.