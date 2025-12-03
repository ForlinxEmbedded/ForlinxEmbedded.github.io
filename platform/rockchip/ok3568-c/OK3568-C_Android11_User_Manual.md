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

![Image](./images/OK3568-C_Android11_User_Manual/1719278032824_bb905cbc_77a0_4b9f_81f8_6e06a88d1c1a.png)![Image](./images/OK3568-C_Android11_User_Manual/1719278033258_5f661cb4_f179_4a31_8ab4_6856ec4741bd.png)

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

![Image](./images/OK3568-C_Android11_User_Manual/1719278096774_001ae231_adca_4999_b8c2_c8ad5e881325.png)

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

![Image](./images/OK3568-C_Android11_User_Manual/1719278097074_b47e4466_6c06_446d_9671_cddd973fd5ac.png)

Step 2: Open and set up putty, then set the“ line according to the COM port of the computer used, baud rate 115200;

![Image](./images/OK3568-C_Android11_User_Manual/1719278097272_9fdce2cc_560d_450e_89f7_4424aa719b37.png)

Step 3: After the setting, input the COM port used by the computer in Saved Sessions. The following figure takes COM3 as an example, save the settings, open the serial port again later, and click on the saved port number;

![Image](./images/OK3568-C_Android11_User_Manual/1719278097482_7500e9fb_1242_45a5_bc59_25fe942c80eb.png)

#### 2.3.2 Serial Login

After the terminal software on the PC side is set, connect the PC and the development board through the serial port cable, and power on after connecting the power supply. The startup information can be seen through the terminal software.

The following startup message indicates a successful start, allowing a new command line to be entered by pressing Enter:

![Image](./images/OK3568-C_Android11_User_Manual/1719278097649_89d5f481_e161_4f1e_b3a0_50f67971bbc1.png)

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

![Image](./images/OK3568-C_Android11_User_Manual/1719278097852_26b3e3ac_074e_4acf_8eec_5ecc61bb28cc.png)

The node has a default disabled state and needs to be changed to an okay enabled node. Change according to screen requirements.

Examples:

Close the hdmi, lvds screens, change the attribute to "off", and use edp to change the corresponding attribute to edp.

![Image](./images/OK3568-C_Android11_User_Manual/1719278098027_778e42b7_2952_469b_a457_3e54339c8ade.png)

After saving, recompile to generate the image.

There are many types of MIPI screens, and the existing timing and control words may not meet the requirements, so it is necessary to change the display-timings under the dsi node. However, any node status attribute related to display is handled by default, and the program will automatically control it.

### 2.5 System Shutdown

In general, you can turn off the power directly, but avoid doing so during important operations like data storage or usage to prevent irreversible file damage. Damaged files may require firmware rewrite. To ensure that data is not completely written, enter sync command to complete data synchronization before turning off the power.

**Note: If the user-designed product using the SoM experiences an unexpected shutdown due to power loss during operation, power-down protection measures can be included in the design to prevent this issue.**

## 3\. Android Function Use and Test

### 3.1 Main Interface Display

![Image](./images/OK3568-C_Android11_User_Manual/1719278057335_9c1baeb4_25d8_4efb_ba68_06db177ec92d.jpeg)

### 3.2 Application

Swipe up on the main screen to bring up the following screen.

![Image](./images/OK3568-C_Android11_User_Manual/1719278057581_23f5bcfc_012e_4673_be33_7d8b21a9e68b.png)

**Note: There may be slight differences after the software version update is completed. It is not used as the actual picture after each version update in the future. It is only for reference.**

### 3.3 Language Settings

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278057767_c0f8f775_048b_48dc_92ff_65578dde6842.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278058101_967c68fc_33aa_4c69_b82e_41b0eb408c02.png)

Click "![Image](./images/OK3568-C_Android11_User_Manual/1719278058320_19cc311b_a30e_412a_86ed_1219cf80bfea.png)" on the application interface to enter the system interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278058534_2860d692_d506_4d3d_b999_c37196223f7d.png)

Click "Language and input method" to enter the language setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278058741_a3e899d4_db00_4b4f_b8d6_d453b1a82455.png)

Click "Language" to enter the language selection interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278058940_2b0ff240_9913_497f_8503_fb03e5f366d3.png)

Click "Add Language" to add a new language.

If you want to remove an installed language, you can click the icon with three dots in the upper right corner, select Remove, check the language you want to delete, click the trash can icon in the upper right corner, and a dialog box pops up, "Do you want to remove the selected language?" Click “Confirm” to deleted the language.

### 3.4 Picture and Audio View

Store the picture and video files to be viewed into the TF card, and insert the TF card into the development board.

Click "![Image](./images/OK3568-C_Android11_User_Manual/1719278059138_1bc97a80_a5e1_4d71_be6a_a201747bb9eb.png)" on the application interface to enter the TF card picture browsing interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278059352_9e674556_3951_4464_8a1e_c1b9c0772e5e.jpeg)

Configure permissions:

![Image](./images/OK3568-C_Android11_User_Manual/1719278059566_657e2b9a_fa19_42d3_a520_3505fcb2b6e1.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278059758_67fce99b_10f1_4740_b318_895e70d04fef.png)

After configuration, enter the picture and video view:

![Image](./images/OK3568-C_Android11_User_Manual/1719278060072_a5e52807_0ebb_4c42_96fc_633962eb17fb.png)

Click on the pictures and videos to view:

![Image](./images/OK3568-C_Android11_User_Manual/1719278060387_273149fe_c8ad_4208_99b6_ddb385980628.jpeg)

### 3.5 Multimedia Test

Store the audio file to be played into the TF card, and insert the TF card into the development board.

Click "![Image](./images/OK3568-C_Android11_User_Manual/1719278060662_b71acbc3_47db_4f1c_9d9f_a42a5316e0b1.png)" in the application interface to enter the music player interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278060917_ceec7214_5075_40be_9bb8_3f62add12369.png)

Click "![Image](./images/OK3568-C_Android11_User_Manual/1719278061153_b545b628_46d8_4c93_9993_b91f436c8bec.png)" in the interface to enter the song list interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278061397_6115e2a5_c80c_46f2_a04d_1ba2243959c7.png)

Click "Play Music" to enter the play interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278061614_3272d087_8811_4abf_bffa_abbf5adebfce.png)

The priority of sound playback is headphone > HDMI audio > carrier board speaker, and the volume can be adjusted by pressing the physical keys VOL + and VOL- on the carrier board of the development board.

### 3.6 Recording (Supports Mic input)

Click the video "![Image](./images/OK3568-C_Android11_User_Manual/1719278061885_c4e5bee3_be63_4d6b_9741_9f71b37717cc.png)" in the application interface to enter the recorder interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278062095_415c0bc7_7f6d_46b4_b7f7_2bb7b11ccff4.png)

Configure permissions:

![Image](./images/OK3568-C_Android11_User_Manual/1719278062317_671a0449_f0b3_4110_b38b_4cd6be49d4b2.png)

Click the round button to start recording: (Note: the pointer will swing according to the sound level during normal recording).

![Image](./images/OK3568-C_Android11_User_Manual/1719278062530_4ed02c67_9604_4b4f_9521_1f7d0f594f8b.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278062776_4fcf7192_c0ca_4c71_8218_bbab2c56fccd.png)

Click the square button to stop recording, and finally click the done button to save.

![Image](./images/OK3568-C_Android11_User_Manual/1719278063038_109ddaf9_2c5c_4660_8ec1_63ea2cc76c03.png)

The recorded audio can be viewed and played through the music player. Click the playlist of the music player:

![Image](./images/OK3568-C_Android11_User_Manual/1719278063264_ca6a1c09_68cf_404c_97f1_f7f24ec60f00.png)

Click the recently added song to see the newly generated recording file:

![Image](./images/OK3568-C_Android11_User_Manual/1719278063508_30acd278_c58e_459c_8918_9f645de0c84d.png)

Click the file to play:

![Image](./images/OK3568-C_Android11_User_Manual/1719278063748_93272e35_cd8a_467a_ada5_19341bf37c48.png)

### 3.7 Volume Adjustment

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278063995_d980878e_5612_4bea_a37e_c3f1c6891249.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278064181_c0f95a42_0645_4bf9_9c6a_6eb48454e060.png)

Click "Sound" in the settings interface to enter the volume settings interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278064406_86dd302a_5761_42c0_88e1_216586fd9c3a.png)

This interface allows you to adjust each section's volume and supports media volume adjustment using the physical buttons VOL- and VOL+ on the base plate.

Click "Advanced" to set the ringtone of the mobile phone:

![Image](./images/OK3568-C_Android11_User_Manual/1719278064595_ef72e0f9_44dd_4799_ba12_2f66fa9c27ed.png)

### 3.8 Display Settings

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278064781_65772de5_67ba_4b08_8c4f_9aaa9037b3bc.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278064962_ad67167e_f7e3_4b5a_91c9_e1d26712f0b8.png)

Click "Display" in the setting interface, enter the display setting interface, and select "Brightness" for the backlight setting, then the brightness adjustment slider will appear, adjust the brightness. Because the development board provided by Forlinx does not have a power sensing chip, the automatic screen rotation function in the advanced options does not work.

![Image](./images/OK3568-C_Android11_User_Manual/1719278065162_4f8d14ea_e604_4616_a978_560316d43d31.png)

The default setting of OK3568 is to never turn off the screen. If you need to sleep and wake up, please click the "Screen timeout" option to select the sleep time.

![Image](./images/OK3568-C_Android11_User_Manual/1719278065393_62f817c7_32c2_46dc_99f3_befd53133c60.png)

If there is no operation on the interface within the set sleep time, the screen will enter the sleep mode, and pressing the PWRON physical button on the carrier board will wake up the screen.

### 3.9 Time Settings（RTC）

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278065590_72703389_1231_492a_9285_26885d27677a.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278065785_72d41190_3108_477a_a9cd_f96cf0fc6e27.png)

Select "System," where you can change the date and time, and even after power failure, the time can still be synchronized (ensure that the button battery is installed on the board).

![Image](./images/OK3568-C_Android11_User_Manual/1719278065957_c0f18e38_d0f3_4d67_80d1_15f61f7a6a04.png)

Turn off “Use Time From Network” to set the date and time separately.

![Image](./images/OK3568-C_Android11_User_Manual/1719278066167_635e431f_2b3c_4d7a_a216_d5eb5197da6b.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278066364_2714df4b_2ded_41d7_8239_2c979997b1f7.png)

Click on “Set Date.”

![Image](./images/OK3568-C_Android11_User_Manual/1719278066613_c63c52d8_73d0_4510_88d7_b77985dd24c6.png)

Click on “Set Time.”

![Image](./images/OK3568-C_Android11_User_Manual/1719278066828_4867025b_942b_4b5f_aa1a_8f6cb98d4a4b.png)

### 3.10 Ethernet Test

**Note:**

**When there are 4G and Ethernet at the same time, Ethernet is preferred by default; when there is 4G WiFi at the same time, WiFi is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default.**

1\. Gigabit network port test:

Prepare a router and a network cable that can be connected to the external network port.

After inserting the network cable, click "![Image](./images/OK3568-C_Android11_User_Manual/1719278067059_27fdd662_7040_438b_b9df_bd9d84de4f4c.png)" on the application interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278067244_39a22ff3_1ef4_4910_9fc0_c860f0e2bc0c.png)

Click "Network and Internet":

![Image](./images/OK3568-C_Android11_User_Manual/1719278067431_e1e544c8_1009_464f_b35c_8048e44df8ad.png)

The OK3568 has 2 x Gigabit NIC on board (Ethernet ETH0 and Ethernet ETH1; the current interface settings only support ETH0). Click "Ethernet ETH0" to choose to automatically obtain IP DHCP or static IP. DHCP is recommended. If you set a static IP, make sure your network parameters are available.

Click "Ethernet":

![Image](./images/OK3568-C_Android11_User_Manual/1719278067677_2b3f4768_ee44_498d_be7e_9d67fb958665.png)

The default IP acquisition method is "dhcp". If you want to set a static IP, click Ethernet Ip mode:

![Image](./images/OK3568-C_Android11_User_Manual/1719278067863_3bb65b95_5a74_4c53_80b0_cc82e5b9dffc.png)

Select Static for static IP configuration:

![Image](./images/OK3568-C_Android11_User_Manual/1719278068048_415e63e1_aa2e_4a76_a4e6_01ca2ce1506a.png)

Click "CONNECT" to complete the configuration:

![Image](./images/OK3568-C_Android11_User_Manual/1719278068247_dad864b7_79fe_4c1b_af70_567cda919dd7.png)

Click "Lightning" on the application interface for network test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278068456_586c1f4d_98ec_41f5_8465_c58683e758b0.png)

Enter "[http://www.forlinx. net](http://www.forlinx.com)” in the domain name column and click "Start" to enter the official website of Forlinx.

![Image](./images/OK3568-C_Android11_User_Manual/1719278068680_9c61c9d5_f5fb_4251_b910_8557837c7360.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278068964_f1ea293e_aca1_42fa_a3ca_4d98026606c6.png)

### 3.11 WiFi Internet

**Note:**

+ **When 4G and Ethernet exist at the same time, Ethernet is preferred by default; When 4G WIFI exists at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing WiFi, unplug the wired network;**

- **Be sure to install the Wifi antenna when startup.**

The OK3568 has an on-board AW-CM358SM module. Open settings, select "Network \& Internet", and click "WLAN":

![Image](./images/OK3568-C_Android11_User_Manual/1719278069242_a83585d8_2c06_458f_ab13_991858f295c5.png)

Click "Use WLAN":

![Image](./images/OK3568-C_Android11_User_Manual/1719278069477_8665b0fb_b3f8_406b_b1bd_66a94c9322ad.png)

Click on the WIFI to be connected and enter the password:

![Image](./images/OK3568-C_Android11_User_Manual/1719278069656_2dac1591_c700_4077_acf0_49fa23da04fc.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278069853_5a5cc91f_c9db_46b9_b207_b96745567e0a.png)

After the connection is successful, you can open the Lightning Browser for network test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278070189_18de3246_1447_462c_98e3_1ae63300b8cb.png)

### 3.12 WiFi Hotspot Test

OK3568 supports the sharing of Ethernet or mobile networks through WIFI for WIFI hotspot testing. First, plug the network cable into the OK3568 ETH0 connector. Open Settings and click Network and Internet.

Click "Hotspot \&tethering":

![Image](./images/OK3568-C_Android11_User_Manual/1719278070501_2e4c74eb_77e8_40dc_b405_9c25adcd1fff.png)

Click "WLAN Hotspot":

![Image](./images/OK3568-C_Android11_User_Manual/1719278070726_7d066a1f_c34e_4c11_bc0d_410d3afa1f1e.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278070926_467b8fbd_b0a9_4420_b6ad_c6e7feb9fd11.png)

Enable the WLAN hotspot and set the hot spot name and password:

![Image](./images/OK3568-C_Android11_User_Manual/1719278071131_0aa10bfb_ba55_4453_a4ef_f5bbaa62e72b.png)

First set the hotspot name:

![Image](./images/OK3568-C_Android11_User_Manual/1719278071362_4de29e5d_831e_414f_a5bb_baa65e4a2768.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278071602_ea655bcc_ad33_4306_889d_4fcc771c58e1.png)

Click “Confirm”.

Set hotspot password:

![Image](./images/OK3568-C_Android11_User_Manual/1719278071799_a16fe790_b0db_4539_8cc5_ccd8aedda49a.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278072033_d5f4323b_47e2_4189_87e7_d17a16195178.png)

Click “Confirm”.

Set the AP band:

![Image](./images/OK3568-C_Android11_User_Manual/1719278072279_144a4f40_19d8_4124_bc88_d3ae574e2a8f.png)

Click “Confirm”.

Set up security:

![Image](./images/OK3568-C_Android11_User_Manual/1719278072481_133a8c53_a056_4dbc_aa44_716adef52ca9.png)

### 3.13 4G/5G Module Test

**Note:**

+ **When There are 4G and Ethernet at the same time, Ethernet is preferred by default; when there is 4G WIFI at the same time, WIFI is preferred by default. When both WiFi and Ethernet are present, Ethernet is prioritized by default;**
+ **When testing 4G, unplug the wired network and turn off WiFi.**

The OK3568 carrier board supports 4G modules (EM05) and 5G modules (RM500U). Before the test, please power off the development board, connect the 4G/5G module and insert the SIM card (pay attention to the direction of the SIM card), and start the development board.

Open Settings, select "Network and Internet", and click "Mobile Network":

![Image](./images/OK3568-C_Android11_User_Manual/1719278072687_3928901a_5ca4_4463_9790_c7b7f2efa773.png)

The default mobile network is on:

![Image](./images/OK3568-C_Android11_User_Manual/1719278072883_4cb2a0be_106d_4ff2_b28b_6be8354fb106.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278073116_07dfc5f9_566d_4dea_a50a_983498f5984f.png)

After the connection is successful, you can open the Lightning Browser for network test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278073418_b22a945a_46a9_4a0d_970a_ce7f3da121d3.png)

The test method of 5G is the same as that of 4G, and the difference is that the icon display is different:

![Image](./images/OK3568-C_Android11_User_Manual/1719278073709_f09a5e99_79bc_4452_b8bf_b43ac746a6fd.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278074089_0a6b01df_902e_4aef_88e4_256691889114.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278074410_5431da75_ce02_4a6a_b0d5_4c080a7e4848.png)

### 3.14 Bluetooth Test

**Note: The current system does not support iPhone Bluetooth connection.**

The Bluetooth function test of OK3568 platform uses the WiFi \& Bluetooth integrated module, which supports the connection of Bluetooth devices as the main device to transmit/receive files.

The testing method is as follows:

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278074598_d483d14a_854f_4d36_847a_55bae0a2d82e.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278074765_134f3009_821b_4975_a6dd_c727e7e16097.png)

Click "Connected device" to enter the Bluetooth setting interface.

![Image](./images/OK3568-C_Android11_User_Manual/1719278075005_17731911_60b9_4b5e_92be_b84132c30091.png)

Click "+ pair with new device", open PC Bluetooth to scan at the same time, and click the Bluetooth device to be connected.

![Image](./images/OK3568-C_Android11_User_Manual/1719278075228_06fabbd2_1ca5_49c8_98ac_c734ea5aaef1.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278075433_7f98282e_4af1_4765_b212_ceffb0ab8fc7.png)

Click "Pairing", the mobile phone performs the corresponding pairing operation, and the interface of successful Bluetooth connection displays:

![Image](./images/OK3568-C_Android11_User_Manual/1719278075642_9af61078_c3a9_4e62_b8c4_23d9f24b3c29.png)

File transfer file test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278075856_1722c6a4_2b2a_4ba7_bdfc_af2a51ce4a63.png)

Select to accept the file:

![Image](./images/OK3568-C_Android11_User_Manual/1719278076106_1a6e3c2a_8751_4aaf_8422_2eb6f7dfb31e.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278076362_cac2dcfd_4d54_4fbd_8618_1a54d2d7c792.png)

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

![Image](./images/OK3568-C_Android11_User_Manual/1719278076600_43766fee_2e41_4fdc_ad32_3963f5f7fe9b.png)

The other buttons have simpler functions, so please test them yourself.

### 3.16 TF Card and USB Storage Test

It is a test of TF card and USB storage device. Insert the USB device into the OK3568 USB Host port. The system will automatically detect the insertion of the USB flash drive.

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278076831_db7c9538_f593_4539_bc00_d31273bc1e69.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278077017_eb916be4_daec_40b2_9c43_16679d4c294a.png)

Click "Storage" to view the internal storage device and the inserted U disk device:

![Image](./images/OK3568-C_Android11_User_Manual/1719278077262_bd659132_c4f4_4da4_8f4f_003d1d95e225.png)

Click the USB flash disk to view the contents of the USB flash disk for reading and writing:

![Image](./images/OK3568-C_Android11_User_Manual/1719278077449_bc18e7fd_bc54_4c5b_9895_75008eb16961.png)

The TF card reading and writing method is the same as the U disk reading and writing test method. Insert the TF card into the TF card slot, and the system will automatically detect the insertion of the TF card. You can also view the contents of the TF card in the storage interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278077657_6e0b7c10_0e37_4d3f_9242_6142c21b8bae.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278077849_29dc24fb_8e26_4b0b_92ff_2752338e2fd8.png)

### 3.17 USB Mouse Test

Once the system is running, you can plug in a USB mouse into the USB host. You will then see the mouse cursor “![Image](./images/OK3568-C_Android11_User_Manual/1719278078139_572919e5_5fa6_4bb8_a0cc_1b2672dcf438.png)”, within the interface, and you can navigate and operate the Android system using the mouse.

### 3.18 USB OTG Interface Test

The OK3568 development board supports USB OTG functionality.

Connect the computer through the otg cable, and the computer will recognize the board as follows:

![Image](./images/OK3568-C_Android11_User_Manual/1719278078349_379cf46a_405b_40f1_aa63_2c4dd0986f9d.png)

### 3.19 Serial Port Test

UART3, UART4, UART5 and UART8 serial ports are indicated in the schematic diagram of OK3568 platform carrier board, in which UART2 is the debugging serial port and UART8 is the Bluetooth serial port. The default device names of UART3, UART4 and UART5 in the development board are ttyS3, ttyS4 and ttyS5 respectively. Here, take the test of UART4 serial port as an example. According to the schematic diagram of the development board, the transceiver pins of UART4 are short-circuited, corresponding to PIN29 and PIN30 respectively.

![Image](./images/OK3568-C_Android11_User_Manual/1719278078616_1c0c314f_4851_4bcb_bae6_20f1021c9a44.png)

Open the serial port test program on the desktop![Image](./images/OK3568-C_Android11_User_Manual/1719278078922_42a5f46c_6ccc_4dd8_a0df_2f23f940b416.png).

![Image](./images/OK3568-C_Android11_User_Manual/1719278079136_aa575db4_933a_4d63_96e0_25cde566e900.png)

Click the "SETUP" button:

![Image](./images/OK3568-C_Android11_User_Manual/1719278079363_8bed68f7_0451_447d_89aa_c52b4da9d1f5.png)

Set serial port device, baud rate and display format:

![Image](./images/OK3568-C_Android11_User_Manual/1719278079619_dfdf57b9_4c2c_4fa9_8c45_97ee7b603bbc.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278079858_40ca7684_052d_4a4f_8a2d_4fae3bc6d6ea.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278080063_a06a7a9b_9fff_479f_a9d0_7255bd2a64eb.png)

Then click the "Loopback" option in the previous menu to perform the loopback test.

![Image](./images/OK3568-C_Android11_User_Manual/1719278080293_14401396_3f91_42c7_aeea_45300fe7456f.png)

Click the "CONSOLE" option in the previous menu to perform the send-receive test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278080511_0ac1f931_1408_466e_ace1_93f1b7980ea2.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278080740_18f34cb4_8f68_4ed1_ada5_75b895510367.png)

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

Open "![Image](./images/OK3568-C_Android11_User_Manual/1719278080951_a2412d0b_020e_4295_bb43_d1561bebe1aa.png)"APP and configure CAN0 interface (APP only supports configuration of CAN0 interface temporarily):

![Image](./images/OK3568-C_Android11_User_Manual/1719278081166_9281726b_ef9b_4ac8_9071_31800fc0a5d4.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278081472_01469efd_32b7_441d_bd5d_a4e9494ec2a9.png)Click "SETTING" to configure the same baud rate as CAN1:

![Image](./images/OK3568-C_Android11_User_Manual/1719278081720_e4931a86_26dc_452f_bbcd_7cb3524fe1d7.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278081958_32748fd6_23f3_4740_a2c3_fe3d0ef6398d.png)

Click "![Image](./images/OK3568-C_Android11_User_Manual/1719278082194_abd33671_7577_4831_831a_0f68a14a0d2f.png)" to return to the transceiver interface, and conduct the transceiver test with CAN1 (CAN1 uses the serial port terminal):

![Image](./images/OK3568-C_Android11_User_Manual/1719278082447_e77c34cc_0245_46ce_b881_7e0b38934172.png)

CAN1 executes the send command:

```shell
console:/ # cansend can1 -i 0x123 0x11 0x22 0x33 0x44 0x55 0x66 0x77 0x88     //Send standard frame
interface = can1, family = 29, type = 3, proto = 1 

console:/ # cansend can1 -i 0x123 -e 0x11 0x22 0x33 0x44 0x55 0x66 0x77 0x88     //Send extended frame
interface = can1, family = 29, type = 3, proto = 1 
```

APP receives the message sent by CAN1:

![Image](./images/OK3568-C_Android11_User_Manual/1719278082643_d44cd144_0f19_43e5_b74c_ece0a91151a1.png)

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

![Image](./images/OK3568-C_Android11_User_Manual/1719278082853_2085d57d_9df2_4cd7_b793_6d784c089738.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278083275_90ed5b02_c9ef_41bd_aefa_85a98ed2c032.png)

There are three buttons on the interface: "start", "feed" and "stop". Click "start" to see the dog and "feed" to feed the dog:

![Image](./images/OK3568-C_Android11_User_Manual/1719278083526_1069c7b5_813b_4c26_a197_a2056f736fe8.png)

If a timeout (timeout of 10S) is not performed to feed the dog, the system reboots. Click "stop" to stop the watchdog test:

![Image](./images/OK3568-C_Android11_User_Manual/1719278083751_82dbc7d1_9016_4622_9a9a_aa58f9e322c0.png)

### 3.22 Camera Test

#### 3.22.1 UVC Camera Test

Click on the camera in the application interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278083968_4dec0e5d_e19a_476f_8e4c_3490fb9c51e3.png)

Configure permissions:

![Image](./images/OK3568-C_Android11_User_Manual/1719278084247_008f4c07_48fa_4243_9a86_5e2338e0359f.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278084619_0d632a28_a0db_412b_8d46_86e81a4a6b1c.png)

Enter the preview interface and click the photo button on the right to take a photo:

![Image](./images/OK3568-C_Android11_User_Manual/1719278084862_bb5d9e0f_9194_48ce_a7f2_22eea766acbb.png)

Swipe the screen to the right to open the options for switching between photo and video mode, as well as accessing settings.

![Image](./images/OK3568-C_Android11_User_Manual/1719278085211_dc3c3225_4eea_49d9_a52e_1fdd19958e4c.png)

Tap on the settings button in the top right corner to adjust settings such as resolution and image quality.

![Image](./images/OK3568-C_Android11_User_Manual/1719278085450_d99398db_1909_489e_b068_c534840ddb43.png)

Click the video button to enter the video preview interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278085717_156937f9_35b6_48de_b025_8df42dc0e5c9.png)

Click the video button to record the video:

![Image](./images/OK3568-C_Android11_User_Manual/1719278086084_1ec677f1_5bf7_47eb_92a7_e639c312b5f3.png)

#### 3.22.2 MIPI Camera Test

Power down the board and connect the ov13850 to the board's MIPI CSI interface. The test method of MIPI Camera is the same as that of UVC Camera and will not be repeated here.

### 3.23 HDMI Resolution Setting Test

OK3568 platform supports dynamic setting of HDMI resolution.

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278086485_e0d63c87_eba5_45bd_8193_f4a5cd93bba3.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278086689_7caaf6a4_9a5b_43ee_ba4a_dbfa2877f9b3.png)

Click "Display", select "Advanced", and click "HDMI" to configure HDMI:

![Image](./images/OK3568-C_Android11_User_Manual/1719278086878_38749d9b_53d4_483d_b90f_97c9551aed61.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278087078_8c769a71_4c2e_4003_a047_6241ce4b35fc.png)

You can dynamically select the desired resolution based on the resolution supported by the current HDMI screen:

![Image](./images/OK3568-C_Android11_User_Manual/1719278087298_d6c5494c_f2e6_4b8d_b401_9a10b1716668.png)

### 3.24 Factory Reset

The OK3568 platform supports restoring factory settings.

Click “![Image](./images/OK3568-C_Android11_User_Manual/1719278087483_779c4c65_510c_4808_9f5a_66801b42ab99.png)”, on the application interface to enter the setting interface:

![Image](./images/OK3568-C_Android11_User_Manual/1719278087675_62070dd9_0f82_4461_b84b_437f97725180.png)

Click "System":

![Image](./images/OK3568-C_Android11_User_Manual/1719278087874_d1a9a6cc_dd23_452e_b746_f8dd04f6b5c2.png)

Click "Reset option" and select "Clear all data (restore factory settings)":

![Image](./images/OK3568-C_Android11_User_Manual/1719278088084_5a2eaf63_71e5_47de_a77d_4285654bdaa3.png)

Click "Clear all data":

![Image](./images/OK3568-C_Android11_User_Manual/1719278088264_ea0a40c4_0ef9_4ced_8290_8e1ba1f665f7.png)

Then click "Clear All Data".

![Image](./images/OK3568-C_Android11_User_Manual/1719278088483_c7d85237_a4a5_4904_a584_6545c88d6238.png)

Wait for OK3568 to restore the default factory settings. Please do not power off during the process of restoring the factory settings.

### 3.25 APK Installation With TF Card

After loading the TF card according to the previous steps, you can see an APK file after entering the TF card directory.

![Image](./images/OK3568-C_Android11_User_Manual/1719278088689_616dc649_838f_47a3_986d_6deb3d7ae41b.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278088893_b7912021_c8d6_4b75_a2ba_71d13f49c54d.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278089134_a63a2de9_53ab_44cd_9f95_0978e0ccb3d4.png)

Double-click the APK file to install and configure permissions:

![Image](./images/OK3568-C_Android11_User_Manual/1719278089460_59c2967d_9923_4042_a8ba_e896becb3246.png)

Click "Install" to complete the installation:

![Image](./images/OK3568-C_Android11_User_Manual/1719278089738_dc778331_86fc_4fac_8577_3a726708857c.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278090008_e5cde30a_73fd_42f1_9bf1_1f7379e5dc3b.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278090284_e76ff8f1_8784_499d_ab3f_3d553b0c4add.png)

## 4\. System Flashing

### 4.1 OTG System Flashing

#### 4.1.1 OTG Driver Installation

Path: OK3568-C (Android) User Profile \\ 2-Image and Source Code \\ Tools\</font>DriveAssitant-v5.11.zip

Extract the above path file to any directory and run it with administrator privileges

Open DriverInstall.exe.

![Image](./images/OK3568-C_Android11_User_Manual/1719278037021_18a83ad1_1276_48b3_952a_f01ff83b2796.png)

Click "Driver Installation”.

![Image](./images/OK3568-C_Android11_User_Manual/1719278037233_4aa4b7da_4159_47e2_b55d_e4c89b7d58d4.png)

#### 4.1.2 OTG Full Flashing Test

4.1.2.1 RKDevTool Full Package Flashing

️<font style="color:#000000;">Path: OK3568-C (Android) User Profile \\ 2-Images and Source Code \\ Tools \\ RKDevTool\_Selease-v2.86.rip</font>

It is a development tool provided by Rockchip. Before use, please unzip it to a directory with an all-English path. Connect the development board to the host using a Type-C cable. Press and hold the recovery key on the development board without releasing it, then press the reset key to reset the system. Release the recovery key approximately two seconds later. The Rockchip development tool will prompt the discovery of the loader device. There will be prompts on the Rockchip development tool : loader device found

**Note: The condition for recognition is that the development board is powered up and the recover key is in the pressed state.**

Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.

Note: Pay attention to two points during OTG programming: 1. Link the OTG line. 2\. If OTG is multiplexed with the USB 3.0, it is necessary to modify the dial switch, as shown in the following figure:

![Image](./images/OK3568-C_Android11_User_Manual/1719278037500_5ecd2c90_9b47_4b51_b665_1f81ee27fdc7.png)

![Image](./images/OK3568-C_Android11_User_Manual/1748310120980_a8494d87_c488_4151_9314_4dc03847d9c6.png)

Open the Rockchip development tool:

![Image](./images/OK3568-C_Android11_User_Manual/1719278037782_8ae62a58_9759_4df7_b6ba_a1a60d997efb.png)

Click the "Upgrade Firmware" tab, click the "Firmware" button to select the full upgrade image update.img. The program will be parsing the firmware, so wait a while.

![Image](./images/OK3568-C_Android11_User_Manual/1719278038035_75f9d7d0_7bcd_4771_93d7_8df4cdaeab4c.png)

Click "Switch" and wait for a while to enter the LOADER device, then click "Erase Flash" to erase. Then click the "Upgrade" button to upgrade.

![Image](./images/OK3568-C_Android11_User_Manual/1719278038253_bc378a0e_b567_41db_95f2_5b5d3bc30325.png)

**Introduction to MASKROM mode**

If the loader is damaged and cannot enter the Loader mode, press and hold the red Maskrom key and then press the reset key to enter the maskrom mode for flashing.

![Image](./images/OK3568-C_Android11_User_Manual/1719278038560_4f9538d6_ae05_4b42_bb94_3f75be264a0a.png)

At this time, the system will prompt the discovery of a maskrom device. The flashing process is consistent with the loader mode, so it is best to use an update.img burning.

**Note: Don't click "Device Partition Table" in maskrom mode, it is invalid.**

##### 4.1.2.2 RKDevTool Separate Flashing Test

First let the development board be in LOADER state, and then open the RKDevTool:

![Image](./images/OK3568-C_Android11_User_Manual/1733477018482_09872770_e840_468e_8ecc_2d9c74eb74b2.png)

**Click the device partition table to obtain the burning address of each partition, set a separate mirror path, and finally click Execute.**

##### **4.1.2.3 Factory Tool Flashing Test**

FactoryTool is a factory batch OTG burning tool. It does not need to read the image and can do batch burning. In addition, it can burn some larger image files. If RKDevTool compatibility is not satisfied, you can try this method. Before using it, unzip it to a full English path, connect the development board and host computer with a Type-C cable, press and hold the recover button of the development board and don't release it, then press the reset button to reset the system, and release the recover button after about two seconds. There will be prompts on the Rockchip development tool : loader device found

**Note: **

**The condition for recognition is that the development board is powered up and the recover key is in the pressed state.**

Theoretically, Rockchip development tools have no requirements for the unzip directory. However, some users have feedback that the unzip directory should be in full English. If the tool doesn't match the following figure, please consider unzipping it in an English directory.

Open the Rockchip development tool:

![Image](./images/OK3568-C_Android11_User_Manual/1719278038885_10262a44_157e_467e_9215_b91781ab6e03.png)

Click to select the firmware, and click to start. At this time to recognize the loader device will automatically start burning.

![Image](./images/OK3568-C_Android11_User_Manual/1719278039212_a86b0f08_e345_43ad_9690_027b13885016.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278039521_e23f21e5_336f_4dbf_8ddd_0644d105916d.png)

### 4.2 TF Card Flashing

Production and test of programming TF card:

**Note: **

- **The maximum tested capacity of the TF card is 16G. Using a TF card with 32G or above may result in a flashing failure;**

- **When flashing the TF card, it will also enter the command line as the root@buildroot user. Please wait patiently for the flashing to complete.**

Copy SDDiskTool\_v1.69.zip from the user profile tools directory to any directory on windows. Run SD\_Firmware\_Tool.exe with administrator privileges.

![Image](./images/OK3568-C_Android11_User_Manual/1719278039878_7cf34cab_b5e2_48a3_8cd6_4a7240607211.png)

Select the disk device, check "Firmware Upgrade" and select update.img. Click Start Creating.

![Image](./images/OK3568-C_Android11_User_Manual/1719278040074_cc334d8e_a3b0_40a2_8481_34bcb3fcda0f.png)

![Image](./images/OK3568-C_Android11_User_Manual/1719278040311_6899364a_f5eb_4083_9b7b_5b61b919f37e.png)

Insert the TF card into the development board and start, the system will automatically enter the flashing process. When the flashing is complete, both the screen and the serial port will prompt:

Doing Actions succeeded.please remove the sdcard......

At this time, pull out the TF card, the system automatically restarts (please do not power down directly).

Burning status serial port information:

![Image](./images/OK3568-C_Android11_User_Manual/1729749118333_09f4aff7_3247_45e2_93ea_ca287b07946b.png)

If the automatic restart does not occur after removing the TF card, a manual restart can also complete the burning. Please be patient during the burning process.