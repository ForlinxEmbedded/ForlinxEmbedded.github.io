# Android11.0\_User's Manual\_V2.2

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

|  **Date**  |         **User Manual Version**          | **Revision History**                                         |
| :--------: | :--------------------------------------: | ------------------------------------------------------------ |
| 27/05/2022 |                   V1.0                   | OK3568-C&#173;Android11.0&#173;User's Manual Initial Version |
| 23/09/2022 |                   V1.1                   | 1.Modifying the Uboot menu and adding the description of rgb;<br />2\. Adding a reminder that mipi and rgb cannot be used at the same time;<br />3\. Adding a reminder that mipi cannot sleep and wake up temporarily. |
| 29/05/2023 |                   V1.2                   | Adding the description of ov13850 support in 3.22.2 MIPI Camera test section. |
| 22/08/2023 | <font style="color:#000000;">V1.3</font> | 1\. Adding can standard frame and extended frame descriptions;  <br/>2\. Modifying the precautions for using the RGB screen;  <br/>3\. Delete CANFD related description. |
| 21/05/2024 |                   V2.0                   | Adding FET3568-C2 SoM.                                       |
| 18/07/2025 |                   V2.1                   | Adding CXMT memory description in section 3.15 key test (sleep wake) and removing sleep wake function. |
| 20/10/2025 |                   V2.2                   | Adding notes in the WIFI test chapter and the quick startup chapter (the antenna must be connected for startup, otherwise the startup may be affected). |

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, and understand the interface functions and testing methods. It primarily covers the testing of interface functions on the development board, the methods for flashing images, and troubleshooting procedures for common issues encountered in use. In the process of testing, some commands are annotated to facilitate the your understanding, mainly for practical use. Please refer to the "OK3568-C Compilation Manual" provided by Forlinx for the kernel compilation, compilation method, development environment building.

The manual is primarily divided into five chapters:

+ Chapter 1. focuses on the overall overview of the product, and briefly introduces the development board in the interface resources, the relevant driver path in the kernel source code, and the description of the key parts of the information;
+ Chapter 2. covers quick startup of the product, with options for both serial port login and network login;
+ Chapter 3. mainly serves as an introduction to the product's usage features and is divided into multiple sections, including the function testing of the command line in the terminal and the function testing of the QT desktop;
+ Chapter 4. mainly focuses on testing the usage of the product's features such as audio, video, and camera;
+ Chapter 5. focuses on the product's image update, mainly describing the method of updating the image to the storage device, and users can choose the corresponding flashing method according to the actual situation.

<font style="color:#000000;">A description of some of the symbols and formats associated with this manual:</font>

|                          **Format**                          | **Meaning**                                                  |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
|                           **Note**                           | Note or information that requires special attention, be sure to read carefully. |
|                              📚                               | Relevant notes on the test chapters.                         |
|                              🛤️                               | Indicates the related path.                                  |
| <font style="color:blue;">Blue font on gray background</font> | Refers to commands entered at the command line (Manual input required). |
|                          Black font                          | Serial port output message after entering a command.         |
|                        **Bold black**                        | Key information in the serial port output message.           |
|            <font style="color:#000000;">//</font>            | Interpretation of input instructions or output information.  |
|                      Username@Hostname                       | root@ok3568: development board serial port login account information;<br/>forlinx @rk3568: development board network login account information;<br/>forlinx @ Ubuntu: development environment Ubuntu account information.<br/>You can determine the environment for function operation through this information. |

<font style="color:#000000;">After packaging the file system, you can use the “ls” command to view the generated files.</font>

```plain
forlinx@ubuntu:~/3568$ ls                              //List the files in this directory
OK3568-linux-source  OK3568-linux-source.tar.bz2
```

+ forlinx@ubuntu: the username is forlinx and the hostname is ubuntu, indicating that the operation is performed in the development environment ubuntu.
+ //: Explanation of operation commands is required, but command input is not needed.
+ <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">ls</font></font>: blue font on a gray background, indicating relevant commands that need to be entered manually.
+ **OK3568-linux-source:** Black font is the output information after entering the command; bold font is the key information; here is the packaged file system.

## 1\. OK3568-C Development Board Description

### 1.1 OK3568-C/OK3568-C2 Development Board Description

RK3568 is a low-power high-performance processor based on ARM64 architecture. It includes 4-core Cortex-A55 and independent NEON co-processor and neural network plus processor NPU. It can be applied to computers, mobile phones, personal mobile Internet and digital multimedia devices.

The connection between SoM and the carrier board is board-to-board, and the main interfaces are shown as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278032824-bb905cbc-77a0-4b9f-81f8-6e06a88d1c1a.png)![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278033258-5f661cb4-f179-4a31-8ab4-6856ec4741bd.png)

****


**Note:**

**Hardware parameters are not described in this software manual. Before referring to this manual for software development, please read "OK3568-C\_ Hardware Manual\_V1.0-2022.02.09" under the path of "Hardware Data \\ User Manual" to understand the product naming rules and the hardware configuration information of the product you use, which is helpful for you to use this product.**

### 1.2 Android11 System Software Resources Features

| **Device**                 | **Location of driver source code in the kernel**             | **Device Name**      |
| -------------------------- | ------------------------------------------------------------ | -------------------- |
| LCD Backlight Driver       | drivers/video/backlight/pwm\_bl.c                            | /sys/class/backlight |
| USB Port                   | drivers/usb/storage/                                         |                      |
| USB Mouse                  | drivers/hid/usbhid/                                          | /dev/input/mice      |
| Ethernet                   | drivers/net/ethernet/stmicro/stmmac                          |                      |
| SD/micro TF card driver    | drivers/mmc/host/dw\_mmc-rockchip.c                          | /dev/block/mmcblk1pX |
| EMMC Driver                | drivers/mmc/host/dw\_mmc-rockchip.c                          | /dev/block/mmcblk2pX |
| OV13850                    | drivers/media/i2c/ov13850.c                                  | /dev/videoX          |
| LCD Controller             | drivers/gpu/drm/rockchip/rockchip\_drm\_vop.c                |                      |
| MIPI CSI                   | drivers/phy/rockchip/phy-rockchip-mipi-rx.c                  |                      |
| MIPI DSI                   | drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c           |                      |
| LCD Touch Driver           | drivers/input/touchscreen/gt9xx/\*<br/>drivers/input/touchscreen/edt-ft5x06.c | /dev/input/eventX    |
| RTC Real Time Clock Driver | drivers/rtc/rtc-rx8010.c<br/>drivers/rtc/rtc-pcf8563.c       | /dev/rtc0            |
| serial port                | drivers/tty/serial/8250/8250\_dw.c                           | /dev/ttySX           |
| Key Driver                 | drivers/input/keyboard/adc-keys.c                            | /dev/input/eventX    |
| LED                        | drivers/leds/leds-gpio.c                                     |                      |
| I2S                        | sound/soc/rockchip/rockchip\_i2s.c                           |                      |
| Audio Driver               | sound/soc/codecs/rk817\_codec.c                              | /dev/snd/            |
| PMIC                       | drivers/mfd/rk808.c                                          |                      |
| PCIE                       | drivers/pci/controller/pcie-rockchip.c                       |                      |
| Watchdog                   | drivers/watchdog/dw\_wdt.c                                   |                      |
| SPI                        | drivers/spi/spi-rockchip.c                                   |                      |
| PWM                        | drivers/video/backlight/pwm\_bl.c                            |                      |

### 1.3 EMMC Memory Partition Table

The following table is the eMMC memory partition information of Android operating system (the size of a block is 512bit when calculating):

| **Partition Index** | **Name** | **Offset / Block** | **Size/Block** | Content           |
| ------------------- | -------- | ------------------ | -------------- | ----------------- |
| N/A                 | security | 0x00002000         | 0x00002000     | MiniLoaderAll.bin |
| 1                   | uboot    | 0x00004000         | 0x00002000     | uboot.img         |
| 2                   | trust    | 0x00006000         | 0x00002000     |                   |
| 3                   | misc     | 0x00008000         | 0x00002000     | misc.img          |
| 4                   | dtbo     | 0x0000a000         | 0x00002000     | dtbo.img          |
| 5                   | vbmeta   | 0x0000c000         | 0x00000800     | vbmeta.img        |
| 6                   | boot     | 0x0000c800         | 0x00014000     | boot.img          |
| 7                   | recovery | 0x00020800         | 0x00030000     | recovery.img      |
| 8                   | backup   | 0x00050800         | 0x000c0000     |                   |

## 2\. Fast Startup

### 2.1 Preparation Before Startup

+ 12V2A or 12V3A DC Power Cable
+ Debugging serial cable

**Note: Be sure to install the WiFi antenna when startup.**

The debugging serial port on the development board is a Micro USB Jack. You can use the USB to micro cable to connect the development board and the PC, so as to view the status of the development board.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278096774-001ae231-adca-4999-b8c2-c8ad5e881325.png)

### 2.2 Debugging Serial Driver Installation

OK3568-C/OK3568-C2 platform uses a Type-C interface for debugging serial port, with an on-board USB to UART chip. Customers do not need to purchase USB to serial debugging tools; it is extremely simple and convenient to use.

To install the driver, please use the driver package DriverAssitant\_v5.11.zip provided in the User Profile \\Android\\Tools\\ directory.

Run DriverInstall.exe directly after the unzipping is completed; in order to ensure the driver is the latest version, please unstall the driver first, then install again.

### 2.3 Serial Port Login

#### 2.3.1 Serial Port Connection Settings

**Note:**

+ **Serial port terminal login user: Serial port terminal automatically logs in root user without password;**
+ **Serial port settings: Baud rate 115200, 8 data bits, 1 stop bit, no parity bit, no flow control;**
+ **Hardware Requirements: Type-C cable required to connect PC and development boards;**
+ **Software requirements: PC Windows system needs to install the super terminal software. Because the terminal software has many types, users can choose their familiar one.**

In the following, we take the putty terminal software as an example to introduce the serial port login method:

Step 1: Connect the serial port number of the computer---check the serial port number from the device manager (Based on the port actually recognized by the computer );

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278097074-b47e4466-6c06-446d-9671-cddd973fd5ac.png)

Step 2: Open and set up putty, then set the“ line according to the COM port of the computer used, baud rate 115200;

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278097272-9fdce2cc-560d-450e-89f7-4424aa719b37.png)

Step 3: After the setting, input the COM port used by the computer in Saved Sessions. The following figure takes COM3 as an example, save the settings, open the serial port again later, and click on the saved port number;

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278097482-7500e9fb-1242-45a5-bc59-25fe942c80eb.png)

#### 2.3.2 Serial Login

After the terminal software on the PC side is set, connect the PC and the development board through the serial port cable, and power on after connecting the power supply. The startup information can be seen through the terminal software.

The following startup message indicates a successful start, allowing a new command line to be entered by pressing Enter:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278097649-89d5f481-e161-4f1e-b3a0-50f67971bbc1.png)

### 2.4 Screen Switching

OK3568 supports multi-screen interfaces such as MIPI DSI, HDMI, eDP, etc. Currently there are two methods for controlling screen switching: specifying through the device tree in the kernel and dynamically controlling through the Uboot menu.

**Note:** 

- **RGB screen resolution defaults to 1024x600. When using the rgb screen, the sleep wake function cannot be used;**

- **Screen switching involves touch switching. The factory image defaults to outputting video display on LVDS, MIPI, and HDMI interfaces simultaneously, with touch functionality on LVDS screen. If using MIPI touch, please turn off LVDS screen output during the screen selection process.**

#### 2.4.1 Dynamic Control of Uboot Menu

This method switches screens without recompiling and flashing in existing supported screens.

During the uboot self-boot process, press the space bar at the serial terminal to bring up the control options:

```plain
Hit key to stop autoboot('Spacebar'):  0
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
---------------------------------------------
```

Enter 2 at the terminal to access the Screen Control sub-menu:

```plain
---------------------------------------------
hdmi==>hdmi mipi_edp==>mipi lvds_rgb=>lvds
Select  display
0:Exit
1:hdmi display hdmi
2:mipi_edp display mipi
3:lvds_rgb display lvds
---------------------------------------------
```

You can choose from four types of screens: HDMI, MIPI-DSI, eDP, and Lvds. To toggle the options for enabling or disabling, you can press on the corresponding option. For MIPI-DSI and eDP, you can switch and select them at Option 2. The parameter information table for the options is as follows:

| **Terminal input:** | **Screen selection parameters are:** | **Here are the corresponding meanings for the parameters:** |
| ------------------- | ------------------------------------ | ----------------------------------------------------------- |
| 0                   | Exit                                 | Return to the previous menu                                 |
| 1                   | hdmi display off                     | Turn on HDMI screen signal output                           |
| 2                   | mipi\_edp display off                | Turn on MIPI-DSI/eDP screen signal output                   |
| 3                   | lvds display off                     | Turn on the Lvds screen signal output                       |

The following is an example of opening the eDP screen and pressing the number 2 to print a change in information:

```plain
---------------------------------------------
hdmi==>hdmi mipi_edp==>mipi lvds_rgb=>lvds
Select  display
0:Exit
1:hdmi display off
2:mipi_edp display mipi
3:lvds display off
---------------------------------------------
```

It can be seen that the above bold font is switched to mipi screen signal output. Press the number 2 again, and the print information changes:

```plain
---------------------------------------------
hdmi==>hdmi mipi_edp==>edp lvds_rgb=>lvds
Select  display
0:Exit
1:hdmi display off
2:mipi_edp display edp
3:lvds display off
---------------------------------------------
```

It can be seen that the above bold font is switched to eDP screen signal output. After the selection is completed, exit according to the menu prompt option to restart, and press the number 0 to print the information change:

```plain
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type
---------------------------------------------
```

Press the number 1 to perform the reboot operation. The screen option for the uboot phase operation takes effect after the reboot.

After the screen selection is completed, you can also press the reset key of the development board to restart, and it will take effect after starting.

#### 2.4.2 Kernel Device Tree Specification

This method does not require the connection of a serial terminal, and the system image defaults to the desired configuration selection, which is suitable for mass production. However, we need to manually modify the device tree and regenerate the system image once again

**Note: This method has higher priority than the uboot screen selection, and the uboot selection will not take effect after the device tree is modified.**

Device tree path：kernel/arch/arm64/boot/dts/rockchip/OK3568-C-common.dtsi

In the kernel source code, open the device dtsi file and find the following node:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278097852-26b3e3ac-074e-4acf-8eec-5ecc61bb28cc.png)

The node has a default disabled state and needs to be changed to an okay enabled node. Change according to screen requirements.

Examples:

Close the hdmi, lvds screens, change the attribute to "off", and use edp to change the corresponding attribute to edp.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278098027-778e42b7-2952-469b-a457-3e54339c8ade.png)

After saving, recompile to generate the image.

There are many types of MIPI screens, and the existing timing and control words may not meet the requirements, so it is necessary to change the display-timings under the dsi node. However, any node status attribute related to display is handled by default, and the program will automatically control it.

### 2.5 System Shutdown

In general, you can turn off the power directly, but avoid doing so during important operations like data storage or usage to prevent irreversible file damage. Damaged files may require firmware rewrite. To ensure that data is not completely written, enter sync command to complete data synchronization before turning off the power.

**Note: If the user-designed product using the SoM experiences an unexpected shutdown due to power loss during operation, power-down protection measures can be included in the design to prevent this issue.**

## 3\. Android Function Use and Test

### 3.1 Main Interface Display

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1719278057335-9c1baeb4-25d8-4efb-ba68-06db177ec92d.jpeg)

### 3.2 Application

Swipe up on the main screen to bring up the following screen.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278057581-23f5bcfc-012e-4673-be33-7d8b21a9e68b.png)

**Note: There may be slight differences after the software version update is completed. It is not used as the actual picture after each version update in the future. It is only for reference.**

### 3.3 Language Settings

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278057767-c0f8f775-048b-48dc-92ff-65578dde6842.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278058101-967c68fc-33aa-4c69-b82e-41b0eb408c02.png)

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278058320-19cc311b-a30e-412a-86ed-1219cf80bfea.png)" on the application interface to enter the system interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278058534-2860d692-d506-4d3d-b999-c37196223f7d.png)

Click "Language and input method" to enter the language setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278058741-a3e899d4-db00-4b4f-b8d6-d453b1a82455.png)

Click "Language" to enter the language selection interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278058940-2b0ff240-9913-497f-8503-fb03e5f366d3.png)

Click "Add Language" to add a new language.

If you want to remove an installed language, you can click the icon with three dots in the upper right corner, select Remove, check the language you want to delete, click the trash can icon in the upper right corner, and a dialog box pops up, "Do you want to remove the selected language?" Click “Confirm” to deleted the language.

### 3.4 Picture and Audio View

Store the picture and video files to be viewed into the TF card, and insert the TF card into the development board.

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278059138-1bc97a80-a5e1-4d71-be6a-a201747bb9eb.png)" on the application interface to enter the TF card picture browsing interface.

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1719278059352-9e674556-3951-4464-8a1e-c1b9c0772e5e.jpeg)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278059566-657e2b9a-fa19-42d3-a520-3505fcb2b6e1.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278059758-67fce99b-10f1-4740-b318-895e70d04fef.png)

After configuration, enter the picture and video view:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278060072-a5e52807-0ebb-4c42-96fc-633962eb17fb.png)

Click on the pictures and videos to view:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1719278060387-273149fe-c8ad-4208-99b6-ddb385980628.jpeg)

### 3.5 Multimedia Test

Store the audio file to be played into the TF card, and insert the TF card into the development board.

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278060662-b71acbc3-47db-4f1c-9d9f-a42a5316e0b1.png)" in the application interface to enter the music player interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278060917-ceec7214-5075-40be-9bb8-3f62add12369.png)

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278061153-b545b628-46d8-4c93-9993-b91f436c8bec.png)" in the interface to enter the song list interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278061397-6115e2a5-c80c-46f2-a04d-1ba2243959c7.png)

Click "Play Music" to enter the play interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278061614-3272d087-8811-4abf-bffa-abbf5adebfce.png)

The priority of sound playback is headphone > HDMI audio > carrier board speaker, and the volume can be adjusted by pressing the physical keys VOL + and VOL- on the carrier board of the development board.

### 3.6 Recording (Supports Mic input)

Click the video "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278061885-c4e5bee3-be63-4d6b-9741-9f71b37717cc.png)" in the application interface to enter the recorder interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278062095-415c0bc7-7f6d-46b4-b7f7-2bb7b11ccff4.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278062317-671a0449-f0b3-4110-b38b-4cd6be49d4b2.png)

Click the round button to start recording: (Note: the pointer will swing according to the sound level during normal recording).

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278062530-4ed02c67-9604-4b4f-9521-1f7d0f594f8b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278062776-4fcf7192-c0ca-4c71-8218-bbab2c56fccd.png)

Click the square button to stop recording, and finally click the done button to save.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278063038-109ddaf9-2c5c-4660-8ec1-63ea2cc76c03.png)

The recorded audio can be viewed and played through the music player. Click the playlist of the music player:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278063264-ca6a1c09-68cf-404c-97f1-f7f24ec60f00.png)

Click the recently added song to see the newly generated recording file:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278063508-30acd278-c58e-459c-8918-9f645de0c84d.png)

Click the file to play:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278063748-93272e35-cd8a-467a-ada5-19341bf37c48.png)

### 3.7 Volume Adjustment

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278063995-d980878e-5612-4bea-a37e-c3f1c6891249.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278064181-c0f95a42-0645-4bf9-9c6a-6eb48454e060.png)

Click "Sound" in the settings interface to enter the volume settings interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278064406-86dd302a-5761-42c0-88e1-216586fd9c3a.png)

This interface allows you to adjust each section's volume and supports media volume adjustment using the physical buttons VOL- and VOL+ on the base plate.

Click "Advanced" to set the ringtone of the mobile phone:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278064595-ef72e0f9-44dd-4799-ba12-2f66fa9c27ed.png)

### 3.8 Display Settings

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278064781-65772de5-67ba-4b08-8c4f-9aaa9037b3bc.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278064962-ad67167e-f7e3-4b5a-91c9-e1d26712f0b8.png)

Click "Display" in the setting interface, enter the display setting interface, and select "Brightness" for the backlight setting, then the brightness adjustment slider will appear, adjust the brightness. Because the development board provided by Forlinx does not have a power sensing chip, the automatic screen rotation function in the advanced options does not work.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278065162-4f8d14ea-e604-4616-a978-560316d43d31.png)

The default setting of OK3568 is to never turn off the screen. If you need to sleep and wake up, please click the "Screen timeout" option to select the sleep time.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278065393-62f817c7-32c2-46dc-99f3-befd53133c60.png)

If there is no operation on the interface within the set sleep time, the screen will enter the sleep mode, and pressing the PWRON physical button on the carrier board will wake up the screen.

### 3.9 Time Settings（RTC）

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278065590-72703389-1231-492a-9285-26885d27677a.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278065785-72d41190-3108-477a-a9cd-f96cf0fc6e27.png)

Select "System," where you can change the date and time, and even after power failure, the time can still be synchronized (ensure that the button battery is installed on the board).

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278065957-c0f18e38-d0f3-4d67-80d1-15f61f7a6a04.png)

Turn off “Use Time From Network” to set the date and time separately.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278066167-635e431f-2b3c-4d7a-a216-d5eb5197da6b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278066364-2714df4b-2ded-41d7-8239-2c979997b1f7.png)

Click on “Set Date.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278066613-c63c52d8-73d0-4510-88d7-b77985dd24c6.png)

Click on “Set Time.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278066828-4867025b-942b-4b5f-aa1a-8f6cb98d4a4b.png)

### 3.10 Ethernet Test

**Note:**

**When there are 4G and Ethernet at the same time, Ethernet is preferred by default; when there is 4G WiFi at the same time, WiFi is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default.**

1\. Gigabit network port test:

Prepare a router and a network cable that can be connected to the external network port.

After inserting the network cable, click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278067059-27fdd662-7040-438b-b9df-bd9d84de4f4c.png)" on the application interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278067244-39a22ff3-1ef4-4910-9fc0-c860f0e2bc0c.png)

Click "Network and Internet":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278067431-e1e544c8-1009-464f-b35c-8048e44df8ad.png)

The OK3568 has 2 x Gigabit NIC on board (Ethernet ETH0 and Ethernet ETH1; the current interface settings only support ETH0). Click "Ethernet ETH0" to choose to automatically obtain IP DHCP or static IP. DHCP is recommended. If you set a static IP, make sure your network parameters are available.

Click "Ethernet":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278067677-2b3f4768-ee44-498d-be7e-9d67fb958665.png)

The default IP acquisition method is "dhcp". If you want to set a static IP, click Ethernet Ip mode:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278067863-3bb65b95-5a74-4c53-80b0-cc82e5b9dffc.png)

Select Static for static IP configuration:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278068048-415e63e1-aa2e-4a76-a4e6-01ca2ce1506a.png)

Click "CONNECT" to complete the configuration:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278068247-dad864b7-79fe-4c1b-af70-567cda919dd7.png)

Click "Lightning" on the application interface for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278068456-586c1f4d-98ec-41f5-8465-c58683e758b0.png)

Enter "[http://www.forlinx. net](http://www.forlinx.com)” in the domain name column and click "Start" to enter the official website of Forlinx.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278068680-9c61c9d5-f5fb-4251-b910-8557837c7360.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278068964-f1ea293e-aca1-42fa-a3ca-4d98026606c6.png)

### 3.11 WiFi Internet

**Note:**

+ **When 4G and Ethernet exist at the same time, Ethernet is preferred by default; When 4G WIFI exists at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing WiFi, unplug the wired network;**

- **Be sure to install the Wifi antenna when startup.**

The OK3568 has an on-board AW-CM358SM module. Open settings, select "Network \& Internet", and click "WLAN":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278069242-a83585d8-2c06-458f-ab13-991858f295c5.png)

Click "Use WLAN":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278069477-8665b0fb-b3f8-406b-b1bd-66a94c9322ad.png)

Click on the WIFI to be connected and enter the password:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278069656-2dac1591-c700-4077-acf0-49fa23da04fc.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278069853-5a5cc91f-c9db-46b9-b207-b96745567e0a.png)

After the connection is successful, you can open the Lightning Browser for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278070189-18de3246-1447-462c-98e3-1ae63300b8cb.png)

### 3.12 WiFi Hotspot Test

OK3568 supports the sharing of Ethernet or mobile networks through WIFI for WIFI hotspot testing. First, plug the network cable into the OK3568 ETH0 connector. Open Settings and click Network and Internet.

Click "Hotspot \&tethering":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278070501-2e4c74eb-77e8-40dc-b405-9c25adcd1fff.png)

Click "WLAN Hotspot":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278070726-7d066a1f-c34e-4c11-bc0d-410d3afa1f1e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278070926-467b8fbd-b0a9-4420-b6ad-c6e7feb9fd11.png)

Enable the WLAN hotspot and set the hot spot name and password:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278071131-0aa10bfb-ba55-4453-a4ef-f5bbaa62e72b.png)

First set the hotspot name:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278071362-4de29e5d-831e-414f-a5bb-baa65e4a2768.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278071602-ea655bcc-ad33-4306-889d-4fcc771c58e1.png)

Click “Confirm”.

Set hotspot password:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278071799-a16fe790-b0db-4539-8cc5-ccd8aedda49a.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278072033-d5f4323b-47e2-4189-87e7-d17a16195178.png)

Click “Confirm”.

Set the AP band:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278072279-144a4f40-19d8-4124-bc88-d3ae574e2a8f.png)

Click “Confirm”.

Set up security:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278072481-133a8c53-a056-4dbc-aa44-716adef52ca9.png)

### 3.13 4G/5G Module Test

**Note:**

+ **When There are 4G and Ethernet at the same time, Ethernet is preferred by default; when there is 4G WIFI at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing 4G, unplug the wired network and turn off WiFi.**

The OK3568 carrier board supports 4G modules (EM05) and 5G modules (RM500U). Before the test, please power off the development board, connect the 4G/5G module and insert the SIM card (pay attention to the direction of the SIM card), and start the development board.

Open Settings, select "Network and Internet", and click "Mobile Network":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278072687-3928901a-5ca4-4463-9790-c7b7f2efa773.png)

The default mobile network is on:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278072883-4cb2a0be-106d-4ff2-b28b-6be8354fb106.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278073116-07dfc5f9-566d-4dea-a50a-983498f5984f.png)

After the connection is successful, you can open the Lightning Browser for network test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278073418-b22a945a-46a9-4a0d-970a-ce7f3da121d3.png)

The test method of 5G is the same as that of 4G, and the difference is that the icon display is different:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278073709-f09a5e99-79bc-4452-b8bf-b43ac746a6fd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278074089-0a6b01df-902e-4aef-88e4-256691889114.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278074410-5431da75-ce02-4a6a-b0d5-4c080a7e4848.png)

### 3.14 Bluetooth Test

**Note: The current system does not support iPhone Bluetooth connection.**

The Bluetooth function test of OK3568 platform uses the WiFi \& Bluetooth integrated module, which supports the connection of Bluetooth devices as the main device to transmit/receive files.

The testing method is as follows:

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278074598-d483d14a-854f-4d36-847a-55bae0a2d82e.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278074765-134f3009-821b-4975-a6dd-c727e7e16097.png)

Click "Connected device" to enter the Bluetooth setting interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278075005-17731911-60b9-4b5e-92be-b84132c30091.png)

Click "+ pair with new device", open PC Bluetooth to scan at the same time, and click the Bluetooth device to be connected.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278075228-06fabbd2-1ca5-49c8-98ac-c734ea5aaef1.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278075433-7f98282e-4af1-4765-b212-ceffb0ab8fc7.png)

Click "Pairing", the mobile phone performs the corresponding pairing operation, and the interface of successful Bluetooth connection displays:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278075642-9af61078-c3a9-4e62-b8c4-23d9f24b3c29.png)

File transfer file test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278075856-1722c6a4-2b2a-4ba7-bdfc-af2a51ce4a63.png)

Select to accept the file:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278076106-1a6e3c2a-8751-4aaf-8422-2eb6f7dfb31e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278076362-cac2dcfd-4d54-4fbd-8618-1a54d2d7c792.png)

### 3.15 Key Test (Sleep Wake-up)

There are 8 keys on the development board, including VOL +, VOL-, MENU, ESC, HOME, PWRON, RESET and Maskroom.

| **Key**  | **Function**                                        |
| -------- | --------------------------------------------------- |
| VOL+     | VOL+                                                |
| VOL-     | VOL-                                                |
| PWRON    | Wake up from sleep and power on/off                 |
| Maskroom | Work with RESET to enter maskrom mode.              |
| RESET    | RESET                                               |
| HOME     | Pop-up menu Home screen settings, Widget, Wallpaper |
| ESC      | Return                                              |

The default factory setting is the non-hibernation state. At this time, press the PWRON key lightly to turn off the screen and enter the hibernation state (note that the carrier board cannot be inserted into the wake-up source such as USB OTG). 

**Currently, CXMT memory products have removed the sleep/wake-up functionality. Please verify and confirm the configuration of the SoM.**

The sleep printing information is as follows:

```shell
[ 7289.309434] OOM killer disabled.
[ 7289.309445] Freezing remaining freezable tasks ... (elapsed 0.003 seconds) done.
[ 7289.312662] Suspending console(s) (use no_console_suspend to debug)
abcdeghINFO:    sleep mode config[0x5ec]:
INFO:           mode: RKPM_SLP_CENTER_PD
INFO:           mode: RKPM_SLP_ARMOFF_LOGOFF
INFO:           mode: RKPM_SLP_PMIC_LP
INFO:           mode: RKPM_SLP_HW_PLLS_PD
INFO:           mode: RKPM_SLP_PMUALIVE_32K
INFO:           mode: RKPM_SLP_OSC_DIS
INFO:           mode: RKPM_SLP_32K_PVTM
INFO:    wakeup source config[0x10]:
INFO:           Enable GPIO0 interrupt as wakeup source
ijsramwf
```

In the sleep state, press the PWRON key again to wake up the CPU.

**Note: The mipi screen does not support sleep and wakeup.**

Press and hold PWRON for "Shutdown" and "Restart".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278076600-43766fee-2e41-4fdc-ad32-3963f5f7fe9b.png)

The other buttons have simpler functions, so please test them yourself.

### 3.16 TF Card and USB Storage Test

It is a test of TF card and USB storage device. Insert the USB device into the OK3568 USB Host port. The system will automatically detect the insertion of the USB flash drive.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278076831-db7c9538-f593-4539-bc00-d31273bc1e69.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278077017-eb916be4-daec-40b2-9c43-16679d4c294a.png)

Click "Storage" to view the internal storage device and the inserted U disk device:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278077262-bd659132-c4f4-4da4-8f4f-003d1d95e225.png)

Click the USB flash disk to view the contents of the USB flash disk for reading and writing:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278077449-bc18e7fd-bc54-4c5b-9895-75008eb16961.png)

The TF card reading and writing method is the same as the U disk reading and writing test method. Insert the TF card into the TF card slot, and the system will automatically detect the insertion of the TF card. You can also view the contents of the TF card in the storage interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278077657-6e0b7c10-0e37-4d3f-9242-6142c21b8bae.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278077849-29dc24fb-8e26-4b0b-92ff-2752338e2fd8.png)

### 3.17 USB Mouse Test

Once the system is running, you can plug in a USB mouse into the USB host. You will then see the mouse cursor “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278078139-572919e5-5fa6-4bb8-a0cc-1b2672dcf438.png)”, within the interface, and you can navigate and operate the Android system using the mouse.

### 3.18 USB OTG Interface Test

The OK3568 development board supports USB OTG functionality.

Connect the computer through the otg cable, and the computer will recognize the board as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278078349-379cf46a-405b-40f1-aa63-2c4dd0986f9d.png)

### 3.19 Serial Port Test

UART3, UART4, UART5 and UART8 serial ports are indicated in the schematic diagram of OK3568 platform carrier board, in which UART2 is the debugging serial port and UART8 is the Bluetooth serial port. The default device names of UART3, UART4 and UART5 in the development board are ttyS3, ttyS4 and ttyS5 respectively. Here, take the test of UART4 serial port as an example. According to the schematic diagram of the development board, the transceiver pins of UART4 are short-circuited, corresponding to PIN29 and PIN30 respectively.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278078616-1c0c314f-4851-4bcb-bae6-20f1021c9a44.png)

Open the serial port test program on the desktop![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278078922-42a5f46c-6ccc-4dd8-a0df-2f23f940b416.png).

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278079136-aa575db4-933a-4d63-96e0-25cde566e900.png)

Click the "SETUP" button:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278079363-8bed68f7-0451-447d-89aa-c52b4da9d1f5.png)

Set serial port device, baud rate and display format:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278079619-dfdf57b9-4c2c-4fa9-8c45-97ee7b603bbc.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278079858-40ca7684-052d-4a4f-8a2d-4fae3bc6d6ea.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278080063-a06a7a9b-9fff-479f-a9d0-7255bd2a64eb.png)

Then click the "Loopback" option in the previous menu to perform the loopback test.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278080293-14401396-3f91-42c7-aeea-45300fe7456f.png)

Click the "CONSOLE" option in the previous menu to perform the send-receive test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278080511-0ac1f931-1408-466e-ace1-93f1b7980ea2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278080740-18f34cb4-8f68-4ed1-ada5-75b895510367.png)

### 3.20 CAN Test

OK3568-C/OK3568-C2 platform has two CAN bus interfaces, CAN0 and CAN1. CAN connection mode: Connection of the H terminal of CAN to other CAN devices; connection of the L terminal of CAN to other CAN devices.

Connect CAN0 and CAN1, execute the following command at the development board terminal, and open the can1 interface:

```shell
console:/ $ su
console:/ # ifconfig can1 down
console:/ # ip link set can1 up type can bitrate 250000 
console:/ # ifconfig can1 up
console:/ # candump can1
```

Open "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278080951-a2412d0b-020e-4295-bb43-d1561bebe1aa.png)"APP and configure CAN0 interface (APP only supports configuration of CAN0 interface temporarily):

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278081166-9281726b-ef9b-4ac8-9071-31800fc0a5d4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278081472-01469efd-32b7-441d-bd5d-a4e9494ec2a9.png)Click "SETTING" to configure the same baud rate as CAN1:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278081720-e4931a86-26dc-452f-bbcd-7cb3524fe1d7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278081958-32748fd6-23f3-4740-a2c3-fe3d0ef6398d.png)

Click "![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278082194-abd33671-7577-4831-831a-0f68a14a0d2f.png)" to return to the transceiver interface, and conduct the transceiver test with CAN1 (CAN1 uses the serial port terminal):

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278082447-e77c34cc-0245-46ce-b881-7e0b38934172.png)

CAN1 executes the send command:

```shell
console:/ # cansend can1 -i 0x123 0x11 0x22 0x33 0x44 0x55 0x66 0x77 0x88     //Send standard frame
interface = can1, family = 29, type = 3, proto = 1 

console:/ # cansend can1 -i 0x123 -e 0x11 0x22 0x33 0x44 0x55 0x66 0x77 0x88     //Send extended frame
interface = can1, family = 29, type = 3, proto = 1 
```

APP receives the message sent by CAN1:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278082643-d44cd144-0f19-43e5-b74c-ece0a91151a1.png)

CAN1 receives the message sent by CAN0 using the candump instruction:

```shell
console:/ # candump can1&                                                      
[1] 2078
console:/ # interface = can1, family = 29, type = 3, proto = 1
[  546.790013] healthd: battery l=50 v=3 t=2.6 h=2 st=3 fc=100 chg=au

console:/ # <0x123> [4] 11 11 11 11 
<0x123> [4] 11 11 11 11 
<0x123> [4] 11 11 11 11 
<0x123> [4] 11 11 11 11
```

### 3.21 Watchdog Test

Click "forlinux \_ watchdog \_ test" "on the application interface to enter the watchdog test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278082853-2085d57d-9df2-4cd7-b793-6d784c089738.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278083275-90ed5b02-c9ef-41bd-aefa-85a98ed2c032.png)

There are three buttons on the interface: "start", "feed" and "stop". Click "start" to see the dog and "feed" to feed the dog:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278083526-1069c7b5-813b-4c26-a197-a2056f736fe8.png)

If a timeout (timeout of 10S) is not performed to feed the dog, the system reboots. Click "stop" to stop the watchdog test:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278083751-82dbc7d1-9016-4622-9a9a-aa58f9e322c0.png)

### 3.22 Camera Test

#### 3.22.1 UVC Camera Test

Click on the camera in the application interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278083968-4dec0e5d-e19a-476f-8e4c-3490fb9c51e3.png)

Configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278084247-008f4c07-48fa-4243-9a86-5e2338e0359f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278084619-0d632a28-a0db-412b-8d46-86e81a4a6b1c.png)

Enter the preview interface and click the photo button on the right to take a photo:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278084862-bb5d9e0f-9194-48ce-a7f2-22eea766acbb.png)

Swipe the screen to the right to open the options for switching between photo and video mode, as well as accessing settings.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278085211-dc3c3225-4eea-49d9-a52e-1fdd19958e4c.png)

Tap on the settings button in the top right corner to adjust settings such as resolution and image quality.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278085450-d99398db-1909-489e-b068-c534840ddb43.png)

Click the video button to enter the video preview interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278085717-156937f9-35b6-48de-b025-8df42dc0e5c9.png)

Click the video button to record the video:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278086084-1ec677f1-5bf7-47eb-92a7-e639c312b5f3.png)

#### 3.22.2 MIPI Camera Test

Power down the board and connect the ov13850 to the board's MIPI CSI interface. The test method of MIPI Camera is the same as that of UVC Camera and will not be repeated here.

### 3.23 HDMI Resolution Setting Test

OK3568 platform supports dynamic setting of HDMI resolution.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278086485-e0d63c87-eba5-45bd-8193-f4a5cd93bba3.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278086689-7caaf6a4-9a5b-43ee-ba4a-dbfa2877f9b3.png)

Click "Display", select "Advanced", and click "HDMI" to configure HDMI:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278086878-38749d9b-53d4-483d-b90f-97c9551aed61.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278087078-8c769a71-4c2e-4003-a047-6241ce4b35fc.png)

You can dynamically select the desired resolution based on the resolution supported by the current HDMI screen:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278087298-d6c5494c-f2e6-4b8d-b401-9a10b1716668.png)

### 3.24 Factory Reset

The OK3568 platform supports restoring factory settings.

Click “![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278087483-779c4c65-510c-4808-9f5a-66801b42ab99.png)”, on the application interface to enter the setting interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278087675-62070dd9-0f82-4461-b84b-437f97725180.png)

Click "System":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278087874-d1a9a6cc-dd23-452e-b746-f8dd04f6b5c2.png)

Click "Reset option" and select "Clear all data (restore factory settings)":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278088084-5a2eaf63-71e5-47de-a77d-4285654bdaa3.png)

Click "Clear all data":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278088264-ea0a40c4-0ef9-4ced-8290-8e1ba1f665f7.png)

Then click "Clear All Data".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278088483-c7d85237-a4a5-4904-a584-6545c88d6238.png)

Wait for OK3568 to restore the default factory settings. Please do not power off during the process of restoring the factory settings.

### 3.25 APK Installation With TF Card

After loading the TF card according to the previous steps, you can see an APK file after entering the TF card directory.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278088689-616dc649-838f-47a3-986d-6deb3d7ae41b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278088893-b7912021-c8d6-4b75-a2ba-71d13f49c54d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278089134-a63a2de9-53ab-44cd-9f95-0978e0ccb3d4.png)

Double-click the APK file to install and configure permissions:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278089460-59c2967d-9923-4042-a8ba-e896becb3246.png)

Click "Install" to complete the installation:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278089738-dc778331-86fc-4fac-8577-3a726708857c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278090008-e5cde30a-73fd-42f1-9bf1-1f7379e5dc3b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278090284-e76ff8f1-8784-499d-ab3f-3d553b0c4add.png)

## 4\. System Flashing

### 4.1 OTG System Flashing

#### 4.1.1 OTG Driver Installation

Path: OK3568-C (Android) User Profile \\ 2-Image and Source Code \\ Tools\</font>DriveAssitant-v5.11.zip

Extract the above path file to any directory and run it with administrator privileges

Open DriverInstall.exe.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278037021-18a83ad1-1276-48b3-952a-f01ff83b2796.png)

Click "Driver Installation”.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278037233-4aa4b7da-4159-47e2-b55d-e4c89b7d58d4.png)

#### 4.1.2 OTG Full Flashing Test

4.1.2.1 RKDevTool Full Package Flashing

️<font style="color:#000000;">Path: OK3568-C (Android) User Profile \\ 2-Images and Source Code \\ Tools \\ RKDevTool\_Selease-v2.86.rip</font>

It is a development tool provided by Rockchip. Before use, please unzip it to a directory with an all-English path. Connect the development board to the host using a Type-C cable. Press and hold the recovery key on the development board without releasing it, then press the reset key to reset the system. Release the recovery key approximately two seconds later. The Rockchip development tool will prompt the discovery of the loader device. There will be prompts on the Rockchip development tool : loader device found

**Note: The condition for recognition is that the development board is powered up and the recover key is in the pressed state.**

Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.

Note: Pay attention to two points during OTG programming: 1. Link the OTG line. 2\. If OTG is multiplexed with the USB 3.0, it is necessary to modify the dial switch, as shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278037500-5ecd2c90-9b47-4b51-b665-1f81ee27fdc7.png)

![](https://cdn.nlark.com/yuque/0/2025/png/45534390/1748310120980-a8494d87-c488-4151-9314-4dc03847d9c6.png)

Open the Rockchip development tool:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278037782-8ae62a58-9759-4df7-b6ba-a1a60d997efb.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img. The program will be parsing the firmware, so wait a while.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278038035-75f9d7d0-7bcd-4771-93d7-8df4cdaeab4c.png)

Click "Switch" and wait for a while to enter the LOADER device, then click "Erase Flash" to erase. Then click the "Upgrade" button to upgrade.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278038253-bc378a0e-b567-41db-95f2-5b5d3bc30325.png)

**Introduction to MASKROM mode**

If the loader is damaged and cannot enter the Loader mode, press and hold the red Maskrom key and then press the reset key to enter the maskrom mode for flashing.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278038560-4f9538d6-ae05-4b42-bb94-3f75be264a0a.png)

At this time, the system will prompt the discovery of a maskrom device. The flashing process is consistent with the loader mode, so it is best to use an update.img burning.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid.**

##### 4.1.2.2 RKDevTool Separate Flashing Test

First let the development board be in LOADER state, and then open the RKDevTool:

![](https://cdn.nlark.com/yuque/0/2024/png/45447432/1733477018482-09872770-e840-468e-8ecc-2d9c74eb74b2.png)

**Click the device partition table to obtain the burning address of each partition, set a separate mirror path, and finally click Execute.**

##### **4.1.2.3 Factory Tool Flashing Test**

FactoryTool is a factory batch OTG burning tool. It does not need to read the image and can do batch burning. In addition, it can burn some larger image files. If RKDevTool compatibility is not satisfied, you can try this method. Before using it, unzip it to a full English path, connect the development board and host computer with a Type-C cable, press and hold the recover button of the development board and don't release it, then press the reset button to reset the system, and release the recover button after about two seconds. There will be prompts on the Rockchip development tool : loader device found

**Note: **

**The condition for recognition is that the development board is powered up and the recover key is in the pressed state.**

Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.

Open the Rockchip development tool:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278038885-10262a44-157e-467e-9215-b91781ab6e03.png)

Click to select the firmware, and click to start. At this time to recognize the loader device will automatically start burning.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278039212-a86b0f08-e345-43ad-9690-027b13885016.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278039521-e23f21e5-336f-4dbf-8ddd-0644d105916d.png)

### 4.2 TF Card Flashing

Production and test of programming TF card:

**Note: **

- **The maximum tested capacity of the TF card is 16G. Using a TF card with 32G or above may result in a flashing failure;**

- **When flashing the TF card, it will also enter the command line as the root@buildroot user. Please wait patiently for the flashing to complete.**

Copy SDDiskTool\_v1.69.zip from the user profile tools directory to any directory on windows. Run SD\_Firmware\_Tool.exe with administrator privileges.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278039878-7cf34cab-b5e2-48a3-8cd6-4a7240607211.png)

Select the disk device, check "Firmware Upgrade" and select update.img. Click Start Creating.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278040074-cc334d8e-a3b0-40a2-8481-34bcb3fcda0f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278040311-6899364a-f5eb-4083-9b7b-5b61b919f37e.png)

Insert the TF card into the development board and start, the system will automatically enter the flashing process. When the flashing is complete, both the screen and the serial port will prompt:

Doing Actions succeeded.please remove the sdcard......

At this time, pull out the TF card, the system automatically restarts (please do not power down directly).

Burning status serial port information:

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1729749118333-09f4aff7-3247-45e2-93ea-ca287b07946b.png)

If the automatic restart does not occur after removing the TF card, a manual restart can also complete the burning. Please be patient during the burning process.