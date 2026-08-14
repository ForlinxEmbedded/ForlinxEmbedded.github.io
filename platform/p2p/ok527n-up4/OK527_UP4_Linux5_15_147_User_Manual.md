# Linux6.1.14\_User’s Manual\_V1.0

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly familiarize yourselves with the product, understand interface functions, and learn testing methods. It primarily covers the testing of development board interface functions, methods for flashing the image, and troubleshooting common issues encountered during use. During testing, certain commands have been annotated for better understanding, focusing on practicality and adequacy. For kernel compilation, related application compilation methods, and development environment setup, please refer to the “OK527-UP4\_Linux5.15.147\_Linux5.15.147\_User’s Compilation Manual” provided by Forlinx.

There are six chapters:

Chapter 1. briefly introduces the development board’s interface resources, relevant driver paths in the kernel source code, supported flashing and boot methods, and key points in the documentation;

Chapter 2. describes two login methods: serial port login and network login;

Chapter 3. covers functional testing of the QT interface;

Chapter 4. explains how to perform functional tests using command line operations;

Chapter 5. includes camera playback tests and video hardware encoding/decoding tests;

Chapter 6. details methods for updating the image to storage devices, allowing you to choose the appropriate flashing method based on your actual needs.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|:-----------|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@OK527: Development board login account information; <br />forlinx@ubuntu: Ubuntu account information in the development environment. <br />You can use this information to determine the operating environment for functional operations. |

Example: After inserting the TF card, use the ls command to view the mount directory.

```bash
root@OK527:/# ls /run/media                                //List files in the/run/media directory 
 mmcblk0p1 mmcblk0p5 mmcblk1p1
```

root@OK527: The username is root, and the hostname is OK527, indicating that the operation is performed using the root user on the development board.

// : Explanation for the operation ls /run/media, no need to input.

## Application Scope

This software manual applies to Forlinx OK527-UP4 and OK527N-UP4 development boards (version 1.3 and above), and the FET527-UP4 and FET527N-UP4 SoMs (version 1.2 and above) running the Linux 5.15.147 operating system. In the manual, the product is referred to collectively as FET527-UP4 or OK527-UP4.

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 02/03/2026 | V1.0| V1.2| V1.3 and above| User’s Manual Initial Version|

## 1\. OK527\_UP4 Development Board Description

### 1.1 OK527\_UP4 Development Board Description

The OK527\_UP4 development board features a SoM + carrier board structural design, developed based on the Allwinner T527 processor. The processor features a multi-core heterogeneous architecture comprising ARM Cortex-A55 CPU, a 2 TOPS NPU, a HiFi4 DSP, and a G57 MC1 GPU. It consists of four small cores running at 1.4 GHz and four large cores running at 1.8 GHz. It is available in two configurations: one with 4GB LPDDR4 RAM and 32GB eMMC storage, and another with 2GB LPDDR4 RAM and 16GB eMMC storage. The OK527\_UP4 development board offers rich functional interface resources and provides a variety of peripheral interfaces. The key interfaces such as Ethernet, the CPU’s built-in audio Codec, GPADC, LRADC, TF Card, LVDS, HDMI, DP, RGB, Wi-Fi, 4G, PCIe, and MIPI-CSI are routed out.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504987401_4ba4a64a_982b_4df1_a139_a6fd1f065ddf.jpg)

![](527.png)

**Note: Hardware specifications are not covered in this software manual. Before development, please refer to the “ User’s Hardware Manual” to understand the product naming and hardware configuration.**

### 1.2 Linux 5.15.147 System Software Resources

| **Device**| **Driver Source Code Location in the Kernel**| **Device Name**|
|----------|----------|----------|
| Network Card Driver| bsp/drivers/gmac/   bsp/drivers/stmmac| /sys/class/net/eth0   /sys/class/net/eth1|
| LCD Backlight Driver| drivers/video/backlight/| /dev/disp|
| LED Driver| drivers/leds/| /sys/class/leds/|
| USB Interface:| drivers/usb/storage/| /dev/sd\*|
| USB 4G| drivers/usb/serial/| /dev/ttyUSB\*|
| USB Camera| drivers/media/usb/uvc/uvc\_video.c| /dev/video\*|
| SD Card Driver| bsp/drivers/mmc/| /dev/block/mmcblk\_p\_|
| LCD FrameBuffer| bsp/drivers/video/sunxi/| /dev/fb\*|
| Serial Port Driver| bsp/drivers/uart/sunxi-uart.c| /dev/ttyAS\*|
| Watchdog Driver| bsp/drivers/watchdog/| /dev/watchdog|
| WIFI| drivers/net/wireless/nxp/mlan/| /sys/class/net/wlan0|
| Audio Driver| bsp/drivers/sound/platform| /dev/snd/|
| SPI| bsp/drivers/spi/   drivers/spi/| /dev/spidev\*.\*|
| TWI Driver| bsp/drivers/twi/| /dev/i2c-\*|
| PWM Driver| bsp/drivers/pwm/| /dev/sunxi\_pwm\*|
| GT911/GT928 touch driver| drivers/input/touchscreen/goodix.c| /dev/input/event\*|
| ft5x06 touch driver| drivers/input/touchscreen/edt-ft5x06.c| /dev/input/event\*|
| GPADC driver| bsp/drivers/gpadc/| /dev/input/event\*|
| LRADC button driver| bsp/drivers/lradc/| /dev/input/event\*|
| RTC Driver| drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c| /dev/rtc0|
| IR Driver| bsp/drivers/ir-rx/| /dev/input/event\*|
| Awlink driver| bsp/drivers/awlink/| /sys/class/net/awlink\*|

### 1.3 Flashing \& Boot Setup

The OK527\_UP4 board supports system flashing via TF card or USB OTG and boots from eMMC by default.

Insert a TF card before powering on to initiate flashing; otherwise, the system boots from eMMC. Detailed flashing steps are in the “Flashing the System” chapter.

**Note: The OK527\_UP4 development board does not support SPI NOR boot.**

## 2\. Fast Startup

### 2.1 Preparation Before Startup

Development Login methods: Serial login and network login. 

Hardware preparations before powering on the system:

12V/3A DC power cable

Debug Serial Cable (for serial port login)

The debug serial port on the development board is a USB Type-C port. Users can connect the development board to a PC using a Type-A to Type-C cable to check the board's status information.

Ethernet cable (for network login)

Display screen — connect the screen according to the development board interface (optional if display is not needed)

Check the boot mode (if a TF card is inserted, the system will boot from the TF card by default; otherwise, it will boot from eMMC).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504989191_e4e3407d_3b77_4706_a452_8f96dcd5f36e.jpg)

### 2.2 Serial Port Login

#### 2.2.1 Serial Port Login

**Note:**

- **Settings: Baud rate 115200, 8 data bits, 1 stop bit, no parity/flow control;**

- **Log in to the serial terminal as root; there is no password;**

- **Software requirements: For Windows systems, the PC needs to have HyperTerminal software installed. There are various HyperTerminal alternatives available; one can use their preferred serial terminal software, such as PUTTY or MobaXterm.**

The following section uses PuTTY (02-User Files\\01-Software Files\\04-Tools\\putty-64-bit\_x86.exe) as an example to explain how to configure the terminal:

Connect the development board and PC using a serial cable. Confirm the serial port number connected to the computer by checking in "Device Manager". 
The actual serial port number recognized by the computer shall prevail. Select “USB-Enhanced-SERIAL-A CH342”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852752540_9e2cca09_69df_41fe_9a59_ca302f92aae7.png)

Configure PuTTY: Open PuTTY. In the “Serial line” field, enter the identified COM port and set the baud rate to 115200;

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852766412_cf849bee_2bee_4277_9e11_bcba90fd3e14.png)

Power on and log in: Turn on the development board. 
The serial terminal will display boot-up messages. Once the prompt root@OK527\_UP4:/# appears, the system has fully booted. You are logged in automatically as the root user (no password required).

#### 2.2.2 Common Issues (Serial Login)

Connect the computer to the development board using a Type-C adapter cable, and install the relevant driver (User Data\\Software Data\\3-Tools\\CH343SER.ZIP).

Cable Quality: To avoid garbled characters during communication, it is recommended to use a high-quality Type-C cable.

### 2.3 Network Login

#### 2.3.1 Network Login Test

**Note:**

- **The default IP address for the eth0 interface is 192.168.0.232;**

- **The computer and the development board need to be in the same network segment during the test.**

Before logging in to the network, you need to ensure that the network connection between the computer and the development board is normal. You can test the connection status between the computer and the development board through the ping command. Specific Operations:

Connect the eth0 of the development board to the computer via a network cable, power on the development board, and after the kernel starts, the red heartbeat light on the SoM will flash. 

After the network card connected to the computer starts normally, the network card light will flash rapidly. At this point, you can test the network connection;

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852786972_2c6fb190_a002_4aaa_a36d_36d1f6d5864e.png)

Disable the computer firewall.

Temporarily disable the computer’s firewall (this is a general operation; specific steps depend on your Windows version);

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852798819_2b9890db_2900_46fd_bb1d_34fb7ffc3c35.png)

Open Command Prompt as administrator.

Press Win + R, type cmd, then press Ctrl + Shift + Enter to run Command Prompt as administrator;

Data is returned, indicating that the network connection is normal.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852806972_0f90a319_5894_44cd_ac4c_5e7d58158bbb.png)

#### 2.3.2 SSH the server

**Note:**

- **The default account for SSH login is “root” with the password “root”;**  
- **The default IP address for the eth0 interface is 192.168.0.232;**  
- **You can use the scp command for file transfers.**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852828220_846ff8b1_62c5_46ac_9e26_8600a5dce468.png)

After clicking “Open”, a dialog box will appear. Click “Yes” to proceed to the login interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718852834871_326d584b_b5d2_47ff_a6bc_2f4c325934fc.png)

```bash
Login as：root
root@192.168.0.232's password:               //Enter the password for the development board’s root account as prompted: root
root@OK527:~$
```

You can use SFTP to copy files. For details, please refer to Section 4.17.2 SFTP.

### 2.4 Screen Switch

Screen switching is currently supported via two methods: the U-Boot menu and the Qt application.

**Note: The current version does not support EDP/DP or LCD display.**

In addition, the following rules must be observed regarding screen configuration:

When outputting to a single screen, the other disp\_type must be none, and disp\_pri\_type must be the same as the output.

- display0 includes “lcd 1024x600”, “mipi 1024x600” and “lvds 1280x800”. Note: The current carrier board does not support LCD interfaces that have not been provided;

- display1 includes “dp 1080P60”, “dp 2.5k” and “hdmi”;     

**Note: HDMI resolution is adaptive; the carrier board does not support DP ports, and the EDP port is currently unavailable.**

- HDMI automatically configures the resolution based on EDID.

#### 2.4.1 Screen Switch via Uboot Menu

This method allows you to switch between supported display screens without recompiling or re-flashing the system.

During the U-Boot startup process, press the Spacebar to enter the U-Boot menu.

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display0 Type:lvds 1280x800
3:Display1 Type:none
4:Device PHY Type:none
5:display primary screen: disp0_type
6:sensor type: none
---------------------------------------------
```

The menu options are as follows:

Press 0 to enter the U-Boot command line.

Press 1 to reboot the system (restart U-Boot).

Press 2 to cycle through the selection for the Display0 Type screen.

Press 3 to cycle through the selection for the Display1 Type screen.

Press 4 to cycle through the selection for PCIe and USB 3.0 multiplexing.

Press 5 to cycle through the selection for the primary display.

Press 6 to switch between the OV13855 and TP2815 cameras.

Example: Switching to “LVDS 1280x800” and “HDMI” Screens  
Enter the U-Boot menu.

Press the corresponding number keys (e.g., press 5 repeatedly) until the menu displays your desired screen configuration (e.g., “lvds 1280x800” and “hdmi”).

Once the correct configuration is shown, press 1 to reboot the system.

```bash
---------------------------------------------
0:Exit to console
1:Reboot
2:Display0 Type:lvds 1280x800
3:Display1 Type:hdmi
4:Device PHY Type:none
5:display primary screen: disp0_type
6:sensor type: none
---------------------------------------------
```

**Notes:** 

- **The current firmware version does not support DP (DisplayPort) and LCD display outputs;**
- **The current firmware version does not support HDMI output at 3840×2160 resolution.**

#### 2.4.2 Qt Application Screen Switching

This method allows you to switch between supported display screens without recompiling or re-flashing the system. See 3.19 for switching screen displays

### 2.5 System Storage

The OK527\_UP4 is available in a range of configurations; below is the 2+16GB version.

#### 2.5.1 eMMC

The table below details the eMMC storage partition information for the Linux operating system:

| **Partition Index**| **Name**| **Size**| **Filesystem**| **Content**|
|:----------:|:----------:|:----------:|:----------:|----------|
| mmcblk0p1| boot-resource| 32MB| vfat| boot-resource.fex|
| mmcblk0p2| env| 16MB| raw| env.fex|
| mmcblk0p3| boot| 64MB| raw| boot.fex|
| mmcblk0p4| rootfs| 4096MB| ext4| rootfs.fex|
| mmcblk0p5| userdata| Remaining Space| ext4| User Partition|

Use the df command to view disk usage on the system. The following is the factory default disk usage (using the Qt filesystem) for reference only. Actual parameters may vary.

```bash
root@OK527:/# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4      3.9G  1.1G  2.9G  28% /
tmpfs          tmpfs     967M  488K  967M   1% /tmp
tmpfs          tmpfs     967M  468K  967M   1% /run
devtmpfs       devtmpfs  934M     0  934M   0% /dev
/dev/mmcblk0p5 ext4       11G   24K  9.7G   1% /run/media/mmcblk0p5
/dev/mmcblk0p1 vfat      128M  7.4M  121M   6% /run/media/mmcblk0p

```

#### 2.5.2 Memory

Use the free command to view memory usage. The following shows the memory usage when no peripherals are connected (unit: MB), for reference only. Actual parameters may vary.

```bash
root@OK527:/# free -m
              total        used        free      shared  buff/cache   available
Mem:           1934         318        1389          17         227        1575
Swap:             0           0           0
```

### 2.6 System Shutdown

In general, you can directly power off the system. However, if operations such as data storage or functional usage are in progress, avoid cutting power abruptly to prevent irreversible file damage, which may require re-flashing the firmware. To ensure all data is fully written, you can execute the sync command to complete data synchronization before powering off.

Rebooting the Development Board: Execute the reboot command. You can also perform a hardware reset by pressing the K5 (RESET) button or directly cycling the power.

Press and hold the K2 (PWRON) button to shut down the system. Press and hold it again to power on.

**Note: For products designed based on the SoM, if unexpected power loss during use leads to system abnormalities, consider implementing measures such as power-loss protection in the design.**

## 3\. OK527\_UP4 Platform Interface Function Usage and Testing

**Note:**   

- **This section should be performed when you are using the screen and Qt file system. If Qt is not used, this section can be skipped;**   
- **This chapter focuses on describing the functions in Qt. During testing, it is assumed that the device connection is normal and drivers are properly loaded. It is recommended to complete command-line function testing before testing interface functions.**

Path to the QT test programme source code: source code OKT527-linux-sdk1.3/platform/forlinx/forlinx\_qt\_demo

Test program path in the development board file system: /usr/bin

This section mainly explains the usage of the development board’s extended interfaces in the Qt interface. The test programs are for reference only, and you need to adjust according to actual conditions during use.

### 3.1 Interface Function Description

After the OK527\_UP4 development board starts up, the desktop is displayed as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504990946_3615d400_eaf3_44dc_ba09_b836e2773bd5.png)

Click the arrow in the upper right corner to go to the next page.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991162_6eb222e9_274c_4941_84df_dbaba2919750.png)

The current version does not support the Video Player.

### 3.2 Network Configuration Test

**Note:**

- **By default, only the eth0 network interface is set to STATIC mode;  **
- **The IP address and other details configured are saved to the relevant system configuration file (/etc/network/interfaces), so the network settings configured will be used every time the system is restarted.**

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991274_39917999_99e1_44ba_a847_ad687ef225cb.png)

Click the network configuration icon to enter the interface program, supporting both STATIC and DHCP modes.

**STATIC Mode**

Click the network configuration icon, select STATIC, as shown below: You can configure the IP address, subnet mask, gateway, and DNS. After setting the parameters, click “Apply and Restart Network”.

| **Relevant Parameter**| **Meaning**|
|:----------:|:----------:|
| Interface| Set network card|
| IP| Set IP address|
| Netmask| Set subnet mask|
| Gateway| Set gateway|
| DNS| Set DNS|

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853099491_6d4df335_a44e_43e1_846b_a7a5432797aa.png)

**DHCP Mode:**

**Note: Testing must be performed on a router capable of automatically assigning IP addresses.**

Select DHCP, choose the network card device to be configured in the “interface” section, and click “Apply and Restart Network” at the bottom of the interface to automatically restart the network and obtain an IP address.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853107651_99014da8_43c3_4819_a6c4_ddeedb9885a3.png)

### 3.3 Browser Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991457_e0518468_224b_40b0_80b4_e5d98c41761b.png)

Click the browser icon to enter the browser. Ensure the network is smooth during use, and ensure DNS is available before accessing external networks. The browser defaults to accessing the Forlinx Embedded official website upon startup, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853119024_492a4d35_8742_4cfb_a9b6_34f07b3e773c.png)

**Note: If the development board’s time is abnormal, it may cause certificate issues.**

### 3.4 4G Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991618_7072dab2_01c4_417b_b0f9_46cc9938cb74.png)

The “4G” test program is used to test the OK527 external 4G module (EC20). Before testing, please power off the development board, insert the 4G module, insert the SIM card (pay attention to the SIM card direction), then power on the development board and open the test application. This test uses the EC20 module as an example:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853134759_967d5501_a0c1_4067_a933_5a9818759cb4.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853141138_17bcdf9c_b5db_451c_908a_4db324ea4496.png)

Click the “connect” button; the program will automatically initiate the dial-up process and obtain IP, set DNS, etc. After waiting a few seconds patiently, click the “ping” button to perform the test.

### 3.5 UART Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991803_ade9d9ff_46df_4c78_978a_cdec9279e95f.png)

This test uses UART4 (ttyAS4) and performs a serial port test with the serialTool.

Click the UART test icon to enter the following interface for serial port parameter configuration;

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853168898_b3b1fca6_41b1_447b_a0ae_4082f1f75014.png)

Click the settings button in the upper left corner and set the serial port parameters to be consistent with the computer-side serial port tool parameters, as shown below:

| **Relevant Parameter**| **Meaning**|
|:----------:|:----------:|
| Select Serial Port| Configure the serial port (select UART4, i.e. ttyAS4)|
| BaudRate| Set baud rate (115200)|
| Data bits| Set data bits (8 bits)|
| Parity| Set parity bit (no parity)|
| Stop bits| Set stop bits (1 bit)|
| Flow control| Set flow control (no flow control)|

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853204104_9e9fe1f3_1252_43c7_8fbe_62cd15e131f2.png)

After setting the serial port parameters, click the connect button in the upper left corner. At this point, the test program can perform data transmission and receiving tests;

Open the serial port tool on your computer; the screen will then display the data received via the serial port.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853216116_4c5a8a52_e55a_46d1_a07a_8d4e3b395589.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853223109_9f91d3ea_d2d4_47ca_b272_3b06f556c49a.png)

Tap the black area in the centre of the test screen to bring up the on-screen keyboard; once you have entered 32 characters in succession, the information displayed by the serial port tool will be the data sent by Qt.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853229802_89276bbe_be07_4fdd_ba99_0e93f6e40661.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853235153_75db29ed_035a_44fd_8980_cc5f352e09f2.png)

### 3.6 ADC Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504991887_44b172ab_4791_4f21_8cb7_68fca65f46ef.png)

The OK527\_UP4 supports 24 channels; 14 GPADC pins are routed out from the OK-x-UP4 carrier board. By default, all channels are left floating; shorting the corresponding pin headers allows the potentiometer values to be measured. The maximum value 4096 corresponds to a voltage of 1.8V.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853255909_9c70b203_9121_45a9_80d5_aa93e148bce8.png)

### 3.7 WiFi Test

**Note: The OK527 carrier board is soldered with the AW-CM358 chip.,**

“WIFI” is a tool for configuring WiFi and can test the STA mode of WiFi.

Click the icon![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504992126_d4793c58_aeda_44ca_a337_d11a48bf81b5.png)to enter the test interface, select the corresponding module from the drop-down menu, enter the router name to be connected via WiFi in the SSID field,

enter the router password in the PASSWORD field, and click "Connect" to connect to the router via WiFi.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853283016_a9c7ff04_05bd_4de8_a0f9_a6470ad95792.png)

After a successful connection, set the IP and then click “ping” to perform a network test.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853291238_2d7a4589_42f6_44c7_9ad1_1fe78bfc79dd.png)

### 3.8 RTC Test

**Note: Ensure that a button battery is installed on the board and the battery voltage is normal.**

Icon: ![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504992411_63528e43_58a3_4e2f_9389_558c7edb4e5b.png)

To test the RTC, configure the time via the test software, power cycle the device, and then re-run the software to confirm RTC synchronization.

Run the RTC test software to view and set the current system time RTC, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853301881_2e302918_8fd7_4566_9a09_a5325d549ec7.png)

Click "Set" to configure the time, then click "Save" to apply the changes. You can then switch off the power, wait a while, switch it back on, and run the RTC test software again to automatically read the time. You will see that the RTC time has been synchronised and that the RTC is functioning correctly.

### 3.9 Key Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504992609_fcce17e8_3aa8_4a98_ad06_215df547f91b.png)

The “Keypad” is used to test the functionality of the built-in keys by verifying whether the corresponding key turns blue when pressed. The interface is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853340133_a92e9fb9_82d6_497c_b5f6_e520b1b6c3a3.png)

The OK527\_UP4 carrier board features five physical buttons on the side: VOL+, VOL-, HOME, MENU and ENTER, which correspond to V+, V-, Home, Menu and Enter in the test programme respectively. When a button is pressed, the corresponding button in the test application will turn blue, indicating that the button is functioning correctly.

### 3.10 Watchdog Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504992773_e6487dca_0042_42ff_ab1d_448ae0675336.png)

“WatchDog” is an application used to test whether the watchdog function is normal. The interface is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853348560_a54150d7_f789_4642_b8dc_c433b6e646ba.png)

Check “feed dog”, click the “open watchdog” button, and the watchdog function will be started. The program will perform dog feeding operations, and normally the system will not reboot.

Uncheck “feed dog”, click the “open watchdog” button, and the watchdog function will be started. The program does not perform dog feeding operations. About 10 seconds after opening the watchdog, the system reboots, indicating the watchdog function is normal.

### 3.11 Pingt Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504992932_c2402b2b_648c_441c_834e_2fd00114856f.png)

“Ping” is an interface version of the commonly used network test command ping. The interface is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853360248_4e364094_3548_4ccd_ad5a_a645e0618579.png)

In the hostname field, write the target IP to ping. After clicking the “ping” button, the result field will show the ping result. Click stop to stop the ping test, and click “clear” to clear the information in result.

As shown in the figure, it indicates the network between them is smooth.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853366769_58cb2cca_95e5_4cf7_8502_e6511b2e3e2d.png)

### 3.12 Camera Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993020_d91d1029_2a21_4d18_913f_78fa259be448.png)

Tap the icon to launch the camera test programme, which supports MIPI CSI interfaces and UVC cameras. During testing, you must first connect either the UVC camera or the MIPI OV5645. The UVC device is identified as /dev/video1; the MIPI OV5645 on P48 of the backplane is identified as /dev/video0; and the MIPI OV5645 on P49 of the backplane is identified as /dev/video4. Open the QT test programme.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853377923_3353cea2_6e2d_4214_9a1e_3b539ac83ea6.png)

First, select the camera video device node and the camera resolution setting. Click the "start" button to start capturing camera data, and click the "stop" button to stop capturing camera data. Click the "picture" button to take a picture, and specify the save path and file name for the captured image.

**Note: Please select the camera device and resolution according to your actual situation.**

Taking the MiPiOV5645 camera as an example, the camera testing will be carried out.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993191_2f937b3d_11e1_456d_8da2_b2272ddf5ecd.png)

Click "Picture" to take a photo. 
The captured image is saved to the /root directory and can be viewed using the standard Windows image viewer.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993510_7ac55b91_2bef_4631_b416_7cef7f01ada9.png)

The MIPI OV5645 module currently supports resolutions of 1280x960, 1920x1080 and 2592x1944. The following test is based on an OV5645 module connected to the P48 socket on the backplane, operating at a resolution of 2592x1944.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993700_fa19c89b_1e6d_48ff_aa27_517bbe847d44.png)

### 3.13 Backlight Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993831_68fec2b4_f96d_4c4e_b49e_6555075e5b9c.png)

“BackLight” is an LCD backlight adjustment application. Adjust the progress bar left and right to adjust the backlight brightness. After opening, the interface is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853428224_e115fd38_6d75_465e_86da_4c6d1426b7ec.png)

Drag the slider in the interface to set the LCD backlight brightness. 1 is the dimmest, 255 is the brightest. 0 needs to be set via the command line. Refer to “4.21 LCD Backlight Adjustment”.

### 3.14 Recording Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993900_db19bcb8_d26a_466b_9133_de9cbffab812.png)

Connect the microphone to the MIC jack.

Click the icon to open the test application and confirm the recording function is working properly.

Select a save location for the recording, then click "Start" to begin and "Stop" to end.

Interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853445711_275349cf_e1e2_4199_85ba_4358217ee8bd.png)

Click the Record button to start the test. The audio files are saved in the root directory.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853455096_0cce15e5_8919_4f53_a050_7a2134926bc7.png)

### 3.15 Music Playback Test

Use the application icon “ ![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504993966_9ac60d06_afdd_4fc8_be7d_5bd14f9ba35d.png) ” to test music playback.

“musicplayer” is a simple audio test application that can be used to test whether the sound card functions normally and also serves as a simple audio player.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853468214_c3aa49a4_25fd_4931_97e6_52a27aae6cb2.png)

Application Interface

Click the button in the bottom left-hand corner and select the test audio file /forlinx/media/test.mp3.

### 3.16 CPU Frequency Configuration Test

OK527: CPU 0–3 have a maximum clock speed of 1.4 GHz, whilst CPU 4–7 have a maximum clock speed of 1.8 GHz. By default, the CPUs dynamically adjust their clock speeds according to the load, but it is also possible to set a fixed clock speed for the CPUs.

Click the desktop settings icon![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994044_49b4b755_d432_4e34_9218_9473b692e946.png)to enter the next-level menu:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853489823_98ab8bb8_1a52_4bcb_85ec_5b4b9b994427.png)

Click the icon![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853495816_aa3a65e6_63a7_49a6_8445_db7d202ae3c5.png)to enter the CPU main frequency setting page.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853502932_0d761d48_f870_491d_a7d2_e4c4437417e8.png)

Set OnDemand Governor：Dynamically adjust the main clock on demand.

Set Userspace Governor：Set the main clock in user space.

Set Frequency CPU0-3：Set the small core main frequency.

Set Frequency CPU4-7: Set the main frequency.

Take setting the small core frequency as an example: First click “Set Userspace Governor”, click “RUN” in the pop-up dialog,

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853509090_50711674_801f_456a_a2d4_59f3c8a571ef.png)

then click “Set Frequency CPU0-3” to set a fixed frequency. (Click the arrow in the upper right corner to return to the previous directory, click the icon in the upper right corner to return to the main directory).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853519884_69dc2680_f28c_451e_8bcb_5b7185a9cd94.png)

Select the corresponding frequency according to needs for setting.

### 3.17 SQLite3 Data Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994118_cbdf2cf8_b7d1_4141_b49c_6cd554379061.png)

Click the icon to enter the database test interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853570775_ce85234a_a570_4d1e_97b8_2d575987aed5.png)

Select the section you want to modify, and then click on the blank area after making the changes.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853575981_1469680b_6b04_44e1_8925_123f54a951cc.png)

### 3.18 SPI Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994187_181d6d8b_2da5_4e65_8064_08f42ddca0ce.png)

Click the icon to enter the SPI test interface. Short the SPI0\_MOSI and SPI0\_MISO pins, click send below, and you can receive the sent data to complete the test.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718853586101_d2dd1036_2853_426a_a763_204ee8b303e3.png)

Short-circuit the SPI0\_MOSI and SPI0\_MISO pins, then click “Send” below to receive the transmitted data, thereby completing the test.

### 3.19 Switching the Screen Display

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994267_c377bfc4_e6fd_4166_a1b7_d890abee0491.png)

Click the icon to open the interface, then click the relevant button to change the display settings. Click “Apply” to save the configuration; the changes will take effect the next time the system is restarted.

In addition, the following rules must be observed regarding screen configuration:

- display0 includes “lcd 1024x600”, “mipi 1024x600” and “lvds 1280x800”;

**Note: The current carrier board does not support LCD interfaces that have not been provided.**

- display1 includes “dp 1080P60”, “dp 2.5k” and “hdmi”;     


**Note: HDMI resolution is adaptive; the current backplane does not support DP ports, and the EDP port is currently unavailable.**

- HDMI automatically configures the resolution based on EDID.


![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994338_825eafe6_713a_4d52_a69b_ed4ea06608c0.png)

### 3.20 OpenGL

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994417_87d22fae_c386_45a9_85f7_4799cd282f7b.png)

The frame rate is currently only 20 frames per second.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994485_2d82ba5d_3b8b_4b26_bed5_65a33b8300a8.png)

### 3.21 Video Player

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994581_37b6247e_d87c_4ab4_b0e7_706480a68ed2.png)

Click “Open File” to select a test video and play it.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994694_4bca9e65_8aab_4219_9b4a_5e231f569779.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504994789_7e9c6c7d_9e24_422f_a6f3_cbd95c1ed88b.png)

### 3.22 CAN Test

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995019_9ccfd1f4_4f80_410e_9cd6_24cf665712c4.png)

Configure can0 as shown in the figure below：

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995152_5de9dbe8_8a67_444c_a646_fdad5d3c61b3.png)

```bash
root@OK527:/# ip link set awlink1 up type can bitrate 500000
[58662.966792] IPv6: ADDRCONF(NETDEV_CHANGE): can1: link becomes ready
root@OK527:/# ip link set dev awlink1 txqueuelen 4096
root@OK527:/# cangen awlink1 
```

Configure CAN1 to transmit via the command line on the development board, and check whether CAN0 has received any data on the interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995269_101df60c_50b5_421d_8d28_aa0e6883d646.png)

### 3.23 NPU\_AI\_CAMERA

Icon:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995346_efacb185_18fc_408e_a2c3_e30e8bc984e0.png)

Plug in the UVC camera and simply press the “Start” button.

**Note: NPU testing is only supported in the OK 527N-UP4 version.**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995452_b681cd03_bd7b_4224_a3b0_939b81097ef8.png)

### 3.24 Chinese Input via USB Keyboard

Ctrl+V to switch between Chinese and English input

**Note: This method sometimes freezes and fails to switch to Chinese; it is provided for reference only.**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504995597_68e8e82f_3f19_4715_868f_a7823e1415cc.png)

## 4\. OK527\_UP4 Command Line Function Testing

The OK527\_UP4 platform comes with a rich set of command-line tools for users to utilize.

Path to the test programme source code: OKT527-linux-sdk1.3/platform/forlinx/forlinx\_cmd\_demo/

Test program path: /usr/bin

### 4.1 System Information Query

To view kernel information, enter the following command:

```bash
root@OK527:/# uname -a
Linux OK527 5.15.147 #1 SMP PREEMPT Tue Dec 2 18:15:47 HKT 2025 aarch64 GNU/Linux
```

To view CPU information:

```bash
root@OK527:/# cat /proc/cpuinfo
processor       : 0
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 1
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 2
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 3
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 4
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 5
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 6
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0

processor       : 7
BogoMIPS        : 48.00
Features        : fp asimd aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x2
CPU part        : 0xd05
CPU revision    : 0
```

To view environment variable information:

```bash
root@OK527:/# env
SHELL=/bin/sh
bt_mac=
snum=50075789d0c4c701f53
selinux=0
EDITOR=/bin/vi
PWD=/
wifi_mac=
HOME=/
LANG=en_US.UTF-8
uboot_backup=ubootA
uboot_message=2018.07-gdd4de6c(03/03/2025-07:11:21)
boot_type=2
mac1_addr=9a:76:ec:cf:ee:9a
QT_QPA_PLATFORM=wayland-egl
QT_QPA_EGLFS_NO_LIBINPUT=1
TERM=vt102
slub_debug=UFPZ
USER=root
SHLVL=1
WESTON_DISABLE_ATOMIC=1
QT_QPA_FONTDIR=/usr/share/fonts
specialstr=
XDG_RUNTIME_DIR=/var/run
bootreason=usb
partitions=boot-resource@mmcblk0p1:env@mmcblk0p2:boot@mmcblk0p3:rootfs@mmcblk0p4:UDISK@mmcblk0p5
WESTON_AFBC_GBM_MODIFIERS=1
PATH=/bin:/sbin:/usr/bin:/usr/sbin
QT_QPA_PLATFORM_PLUGIN_PATH=/usr/lib/qt/plugins
mac0_addr=9a:76:ec:cf:ee:9d
DBUS_SESSION_BUS_ADDRESS=unix:path=/var/run/dbus/system_bus_socket
_=/usr/bin/env
```

### 4.2 Frequency Test

**Note: The T527 features 8 cores; the small cores are CPU0 to CPU3, and the large cores are CPU4 to CPU7.** **This procedure uses CPU0 as an example; in practice, the settings for CPU0 to CPU3 will all be changed simultaneously.**

All cpufreq governor types supported in the current kernel:

```bash
root@OK527:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
conservative ondemand userspace powersave performance schedutil
```

Among these, userspace represents user mode, which allows other user programs to adjust CPU frequency in this mode.

To view the current frequency levels supported by the CPU:

```bash
root@OK527:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
408000 672000 792000 936000 1008000 1104000 1224000 1320000 1416000
```

Set to user mode and modify the frequency to 936000:

```bash
root@OK527:/# echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@OK527:/# echo 936000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed
```

To view the current frequency after modification:

```bash
root@OK527:/# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
936000
```

### 4.3 Temperature Test

To view temperature values:

```bash
root@OK527:/# cat /sys/class/thermal/thermal_zone0/temp
51322
```

The temperature value is 51℃.

### 4.4 DDR Bandwidth Test

The following test results were obtained from the 4+32G model.

```bash
root@OK527:/# fltest_memory_bandwidth.sh
L1 cache bandwidth rd test with # process
0.008192 12361.88
0.008192 12449.86
0.008192 13783.93
0.008192 12340.49
0.008192 12254.37
L2 cache bandwidth rd test
0.131072 11583.94
0.131072 11567.28
0.131072 11575.68
0.131072 11623.23
0.131072 11633.31
Main mem bandwidth rd test
52.43 6094.25
52.43 6115.57
52.43 6085.05
52.43 6068.85
52.43 6111.30
L1 cache bandwidth wr test with # process
0.008192 24473.79
0.008192 24422.20
0.008192 19275.65
0.008192 21933.80
0.008192 24428.48
L2 cache bandwidth wr test
0.131072 12644.41
0.131072 10001.18
0.131072 12649.41
0.131072 11240.93
0.131072 12613.62
Main mem bandwidth wr test
52.43 1193.16
52.43 1204.21
52.43 1198.73
52.43 1198.10
52.43 1204.82
L1 cache bandwidth rdwr test with # process
0.008192 13312.77
0.008192 13422.16
0.008192 10639.39
0.008192 13438.48
0.008192 13268.48
L2 cache bandwidth rdwr test
0.131072 9320.89
0.131072 9215.81
0.131072 9277.19
0.131072 9309.70
0.131072 9324.90
Main mem bandwidth rdwr test
52.43 2143.45
52.43 2101.27
52.43 2106.50
52.43 2102.70
52.43 2102.79
…

root@OK527:/#
```

The LPDDR4 bandwidth of the OK527 is shown above, with a read bandwidth of approximately 6094M/s and a write bandwidth of approximately 1193M/s.

### 4.5 Watchdog Test

Watchdog is a commonly used function in embedded systems. The device node for the watchdog in OK527 is /dev/watchdog. The maximum watchdog timeout is 16 seconds.

Start the watchdog, set the reset time to 10s, and feed the dog regularly using fltest\_watchdog. This command opens the watchdog and performs feeding operations, so the system will not reboot.

```bash
root@OK527:/#fltest_watchdog -t 10 -c
Watchdog Ticking Away!
```

When using Ctrl+C to end the test program, feeding stops, and the watchdog remains open. After 10s, the system resets.

If you do not want a reset, enter the command to close the watchdog within 10s after ending the program:

```bash
root@OK527:/# fltest_watchdog -d                                          //Turn off the watchdog
```

Start the watchdog, set the reset time to 10s, and do not feed it.

This command opens the watchdog but does not perform feeding operations. The system will reboot after 10s.

```bash
root@OK527:/# fltest_watchdog -t 10
```

### 4.6 Functional Testing

Note: Ensure that a button battery is installed on the board and the battery voltage is normal.

RTC testing mainly involves using the date and hwclock tools to set software and hardware times. The purpose is to test whether the software clock reads the RTC clock synchronously when the board is powered off and then back on. Then power off and on the board again. After entering the system, read the system time to confirm synchronization.

```bash
root@OK527:/# date -s "2023-08-01 15:16:30"             // Set the system (software) time
Tue Aug  1 15:16:30 CST 2023
root@OK527:/# hwclock -u -w                           // Synchronize the system time to the hardware clock (RTC)
root@OK527:/# hwclock -u -r                      // Display the hardware clock (RTC) time
Tue Aug  1 15:16:40 2023  0.000000 seconds
```

Then power off and power on the board. After entering the system, read the system time, and you can see that the time is synchronized.

```bash
root@OK527:/#date
Tue Aug  1 15:20:46 CST 2023
```

### 4.7 Key Test

There are nine buttons on the carrier board, five of which are located on the side: VOL+, VOL-, MENU, ENTER and HOME.   
Their key codes are 115, 114, 139, 28 and 102 respectively, corresponding to the PCB silkscreen markings KEY1, KEY2, KEY3, KEY4 and KEY5;   
In addition, the component marked K1 is the FEL button, used for programming; K2 is the power-on button, and ‘K5’ is the reset button.

To test these five side keys, execute the following command:

```bash
root@OK527:/#fltest_keytest
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

### 4.8 UART Test

The OK527 development board is equipped with 6 UART interfaces, which are distributed on the development board as follows:

| **UART**| **Device Nodes**| **Description**|
|:----------:|:----------:|----------|
| UART0| /dev/ttyAS0| The serial port cannot be directly used for this test.|
| UART1| /dev/ttyAS1| Connecting via Bluetooth cannot be used directly for this test|
| UART2| /dev/ttyAS2| TTL levels and SPI multiplexing cannot be used directly in this test.|
| UART3| /dev/ttyAS3| TTL levels and SPI multiplexing cannot be used directly in this test.|
| UART4| /dev/ttyAS4| RS485 level, which can be used for this test.|
| UART7| /dev/ttyAS7| RS485 level, which can be used for this test.|

The current version of the SDK supports a maximum of 1.5 Mbps.

This test utilised UART4 and UART7, with the UART-to-485 converter employed for the serial port testing.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854482534_9ac50873_3327_4ebe_b044_552742963dd6.png)

Enter the following command in the development board serial port:

```bash
root@OK527:/# fltest_uarttest -d /dev/ttyAS4 -b 115200 -r &
[1] 1953
root@OK527:/# fltest_uarttest -d /dev/ttyAS7 -b 115200 -w
tx_0: Gpi2GoMkYywl2IE9sEBcG6yI0DpmDbFT
rx_0: Gpi2GoMkYywl2IE9sEBcG6yI0DpmDbFT
[1]+  Done                    fltest_uarttest -d /dev/ttyAS4 -b 115200 -r
root@OK527:/#
```

### 4.9 USB to Quad Serial Port Test

**Note:**

- **Supports XR21V1414 USB to serial port chip driver;**

- **The USB to four-serial-port adapter is an optional module. If you require it, please contact Forlinx Embedded sales personnel.**

After the development board powers on, connect the USB to quad serial port module via the USB HOST interface. The terminal will display the following information:

```bash
root@OK527:/# [   93.708671] usb 1-1.2: new full-speed USB device number 4 using sunxi-ehci
[   94.019353] cdc_xr_usb_serial 1-1.2:1.0: This device cannot do calls on its own. It is not a modem.
[   94.051170] cdc_xr_usb_serial 1-1.2:1.0: ttyXR_USB_SERIAL0: USB XR_USB_SERIAL device
[   94.071060] cdc_xr_usb_serial 1-1.2:1.2: This device cannot do calls on its own. It is not a modem.
[   94.100860] cdc_xr_usb_serial 1-1.2:1.2: ttyXR_USB_SERIAL1: USB XR_USB_SERIAL device
[   94.120908] cdc_xr_usb_serial 1-1.2:1.4: This device cannot do calls on its own. It is not a modem.
[   94.140883] cdc_xr_usb_serial 1-1.2:1.4: ttyXR_USB_SERIAL2: USB XR_USB_SERIAL device
[   94.170770] cdc_xr_usb_serial 1-1.2:1.6: This device cannot do calls on its own. It is not a modem.
[   94.183344] cdc_xr_usb_serial 1-1.2:1.6: ttyXR_USB_SERIAL3: USB XR_USB_SERIAL device
[   94.197509] usbcore: registered new interface driver cdc_xr_usb_serial
[   94.208693] xr_usb_serial_common: Exar USB UART (serial port) driver
```

Check the status of USB devices using lsusb:

```bash
root@OK527:/# lsusb
Bus 003 Device 001: ID 1d6b:0002
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 002: ID 046d:0825
Bus 004 Device 001: ID 1d6b:0001
Bus 002 Device 001: ID 1d6b:0003
Bus 003 Device 005: ID 04e2:1414	 //The vid and PID of the conversion chip
Bus 003 Device 002: ID 1a40:0101
```

Check whether there are any production nodes in the dev directory:

```bash
root@OK527:/# ls /dev/ttyXRUSB*
/dev/ttyXRUSB0  /dev/ttyXRUSB1  /dev/ttyXRUSB2  /dev/ttyXRUSB3 
```

The correspondence between the four extended serial ports and the device nodes is shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854501284_ac1f795f_cf05_4062_98fc_3b552a167b5c.png)

For testing methods, please refer to “UART Testing”.

### 4.10 TF Test

**Note:**

- **The SD card mount directory is /run/media, supporting hot plugging. The terminal will print information about the SD card;**

- **NTFS format file systems are not supported. If unsure about the TF card format, it is recommended to format it to FAT32 before use;**

- **On the eMMC version, once a TF card is inserted, the device node is /dev/mmcblk1;**

- **The following test commands are given using the eMMC version as an example.**

Insert the TF card into the TF card slot on the development board carrier board. Under normal conditions, the development board terminal will print the following information:

```bash
[ 1157.138343] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 0Hz bm PP pm UP vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.149582] sunxi-mmc 4020000.sdmmc: no vqmmc,Check if there is regulator
[ 1157.169740] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.193961] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.208550] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.222435] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.237016] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.358250] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 0Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.369389] sunxi-mmc 4020000.sdmmc: no vqmmc,Check if there is regulator
[ 1157.389574] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 1 timing LEGACY(SDR12) dt B
[ 1157.408944] mmc1: host does not support reading read-only switch, assuming write-enable
[ 1157.418575] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 4 timing LEGACY(SDR12) dt B
[ 1157.431870] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 400000Hz bm PP pm ON vdd 23 width 4 timing UHS-SDR104 dt B
[ 1157.443255] sunxi-mmc 4020000.sdmmc: sdc set ios:clk 150000000Hz bm PP pm ON vdd 23 width 4 timing UHS-SDR104 dt B
[ 1157.455037] mmc1: new ultra high speed SDR104 SDHC card at address 5048
[ 1157.463121] mmcblk1: mmc1:5048 SD32G 29.7 GiB
[ 1157.470663]  mmcblk1: p1
[ 1157.474099] sunxi:sound-mach:[ERR]: 432 simple_parse_of(): simple_dai_link_of failed
[ 1157.575863] squashfs: Unknown parameter 'umask'
[ 1157.583393] FAT-fs (mmcblk1p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.

root@OK527:/#
```

Check the mount directory:

```bash
root@OK527:/# ls /run/media                                //List files in the/run/media directory
mmcblk0p1  mmcblk0p5  mmcblk1p1
```

Write test:

```bash
root@OK527:/# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 10.6269 s, 49.3 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK527:/#dd if=/dev/mmcblk1p1 of=/dev/null bs=1M count=500 iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 7.56327 s, 69.3 MB/s
```

After using the TF card, you need to use umount to unmount the TF card before ejecting it.

```bash
root@OK527:/#umount /run/media/mmcblk1p1
```

**Note: Exit the TF card mount path before removing the TF card.**

### 4.11 Storage Test

The OK527\_UP4 platform eMMC operates in HS400 mode by default. Below is a simple test of eMMC read/write speed using the ext4 file system as an example.

Write test:

```bash
root@OK527:/#dd if=/dev/zero of=/run/media/mmcblk0p5/data.img bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 4.39941 s, 119 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK527:/#dd if=/run/media/mmcblk0p5/data.img of=/dev/null bs=1M count=500 iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 2.16065 s, 243 MB/s
```

### 4.12 USB Mouse Test

**Note: Supports hot-swapping of USB mice and USB keyboards.**

When a USB mouse is connected to the USB port of the OK527\_UP4 platform, the serial terminal prints the following information:

```bash
[  469.514707] usb 1-1.3: new low-speed USB device number 3 using sunxi-ehci
[  469.754922] usb 1-1.3: New USB device found, idVendor=17ef, idProduct=608d, bcdDevice= 1.00
[  469.764363] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[  469.772616] usb 1-1.3: Product: Lenovo USB Optical Mouse
[  469.778627] usb 1-1.3: Manufacturer: PixArt
[  469.786636] input: PixArt Lenovo USB Optical Mouse as /devices/platform/soc@3000000/4200000.ehci1-controller/usb1/1-1/1-1.3/1-1.3:1.0/0003:17EF:608D.0001/input/input18
[  469.803644] hid-generic 0003:17EF:608D.0001: input: USB HID v1.11 Mouse [PixArt Lenovo USB Optical Mouse] on usb-sunxi-ehci-1.3/input0
```

An arrow cursor appears on the screen, and the mouse is now working properly.

When the USB mouse is unplugged, the arrow cursor disappears from the screen, indicating that the mouse has been successfully removed.

### 4.13 USB 2.0

**Note:**

- **Hot plugging of USB devices is supported;**
- **NTFS format file systems are not supported. If unsure about the USB drive format, it is recommended to format it to FAT32 before use;**
- **Note the difference between USB3.0 and USB2.0 interfaces.**

OK527 supports 1 x USB 2.0 interface. Please connect USB devices such as mice, keyboards, and flash drives to any onboard USB HOST port, with full hot-plug support for these devices. Take mounting USB flash driver as an example:

The terminal will print information about the USB drive. Since there are various USB drives, the displayed information may vary.

After booting the development board, connect a USB drive to the USB host interface on the board;

Serial port information:

```bash
[  299.407137] usb 1-1.1: new high-speed USB device number 3 using sunxi-ehci
[  299.623907] usb 1-1.1: New USB device found, idVendor=23a9, idProduct=ef18, bcdDevice= 1.00
[  299.633348] usb 1-1.1: New USB device strings: Mfr=1, Product=2, SerialNumber=0
[  299.641597] usb 1-1.1: Product: DISK
[  299.645655] usb 1-1.1: Manufacturer: USB
[  299.650672] usb-storage 1-1.1:1.0: USB Mass Storage device detected
[  299.658180] scsi host0: usb-storage 1-1.1:1.0
[  300.667827] scsi 0:0:0:0: Direct-Access     SCSI     DISK             1.00 PQ: 0 ANSI: 4
[  300.678224] sd 0:0:0:0: [sda] 31223936 512-byte logical blocks: (16.0 GB/14.9 GiB)
[  300.687472] sd 0:0:0:0: [sda] Write Protect is off
[  300.692856] sd 0:0:0:0: [sda] Mode Sense: 03 00 00 00
[  300.699217] sd 0:0:0:0: [sda] No Caching mode page found
[  300.705180] sd 0:0:0:0: [sda] Assuming drive cache: write through
[  300.733381]  sda: sda1
[  300.739080] sd 0:0:0:0: [sda] Attached SCSI removable disk
[  300.926482] squashfs: Unknown parameter 'umask'
[  300.935819] FAT-fs (sda1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

Check the mount directory:

```bash
root@OK527:/#ls /run/media/
mmcblk0p1  mmcblk0p5  sda1
```

sda1 represents the first partition of the first inserted USB storage device, and so on.

Check USB drive contents:

```bash
root@OK527:/#ls -l /run/media/sda1
total 8
drwxrwx--- 2 root disk 8192 Sep 23  2021 'System Volume Information'
-rwxrwx--- 1 root disk    0 Apr 25 09:25  test
```

Write test:

Write speed is limited by the specific storage device:

```bash
root@OK527:/#dd if=/dev/zero of=/run/media/sda1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 58.7372 s, 8.9 MB/s
```

Read test:

**Note: To ensure the accuracy of the data, please restart the development board to test the reading speed.**

```bash
root@OK527:/#dd if=/run/media/sda1/test of=/dev/null bs=1M count=500 iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 18.4939 s, 28.3 MB/s
```

After using the USB drive, use umount to unmount it before unplugging:

```bash
root@OK527:/#umount /run/media/sda1
```

**Note: Exit the mount path before unplugging the USB drive.**

### 4.14 USB3.0

Test methods are set out in \[4.13 USB 2.0]

### 4.15 Ethernet Configuration

The OK527 is equipped with two Gigabit network cards; when a network cable is plugged in to connect to the network, eth0 is configured by default with the static IP address 192.168.0.232. The network cards on OK527 can be configured via the /etc/network/interfaces configuration file.

#### 4.15.1 Gigabit Ethernet Static IP Method

**Note: The Gigabit Ethernet card in the kernel is eth0, with a default IP of 192.168.0.232.**

After the development board powers on and boots normally, execute the following command to open the network configuration file /etc/network/interfaces:

```bash
root@OK527:/#vi /etc/network/interfaces
```

Content is as follows (there may be slight differences after software version updates; refer to actual information):

iface: Specifies the network interface requiring a static IP.

address: Specifies the IP address to be fixed.

netmask: Sets the subnet mask.

gateway: Specifies the gateway.

```bash
root@OK527:/# cat /etc/network/interfaces
# interface file auto-generated by buildroot

auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address 192.168.0.232
netmask 255.255.255.0
gateway 192.168.0.1
root@OK527:/#
```

<font style="color:black;">Set</font><font style="color:black;">nameserver</font>

```bash
root@OK527:/#vi /etc/resolve.conf

nameserver  114.114.114.114
nameserver  8.8.8.8
```

After configuring according to actual needs, save and exit. Use sync to synchronize. The configuration will only take effect after restarting the development board or executing ip addr flush dev eth0 to clear the network card IP, followed by ifdown -a and ifup -a to restart the configuration.

#### 4.15.2 Testing Ethernet Speed

**Note:**

- **Test the communication speed between the development board and the computer to ensure that they can communicate properly;  **
- **For this test, it is assumed that the iperf3 tool is already installed on Windows (02-User Data\\01-Software Data\\04-Tools\\iperf-3.1.3-win64.zip).**

Run the following command in server mode using iperf3 in the Windows Command Prompt:

```bash
D:\iperf-3.1.3-win64\iperf-3.1.3-win64>iperf3.exe -s
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854539950_06c8eebd_c99a_4250_9310_1b437aaa0257.png)

The IP address of eth0 on the development board is 192.168.1.11, and the IP address of the Windows computer is 192.168.1.39. Enter the following in the OK527 serial debugging terminal:

```bash
root@OK527:/# iperf3 -c 192.168.1.39            //Test upload bandwidth
Connecting to host 192.168.1.39, port 5201
[  5] local 192.168.1.11 port 55152 connected to 192.168.1.39 port 5201
[ ID] Interval           Transfer     Bitrate         Retr  Cwnd
[  5]   0.00-1.00   sec  95.2 MBytes   799 Mbits/sec    0    217 KBytes
[  5]   1.00-2.00   sec  93.0 MBytes   780 Mbits/sec    0    217 KBytes
[  5]   2.00-3.00   sec  95.3 MBytes   800 Mbits/sec    0    217 KBytes
[  5]   3.00-4.00   sec  94.8 MBytes   796 Mbits/sec    0    217 KBytes
[  5]   4.00-5.00   sec  93.9 MBytes   787 Mbits/sec    0    217 KBytes
[  5]   5.00-6.00   sec  94.4 MBytes   792 Mbits/sec    0    217 KBytes
[  5]   6.00-7.00   sec  93.3 MBytes   783 Mbits/sec    0    217 KBytes
[  5]   7.00-8.00   sec  94.3 MBytes   791 Mbits/sec    0    217 KBytes
[  5]   8.00-9.00   sec  90.2 MBytes   756 Mbits/sec    1    217 KBytes
[  5]   9.00-10.00  sec  94.0 MBytes   789 Mbits/sec    0    217 KBytes
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec   939 MBytes   787 Mbits/sec    1             sender
[  5]   0.00-10.00  sec   938 MBytes   787 Mbits/sec                  receiver

iperf Done.
root@OK527:/# iperf3 -c 192.168.1.39 -R            //Test download bandwidth
Connecting to host 192.168.1.39, port 5201
Reverse mode, remote host 192.168.1.39 is sending
[  5] local 192.168.1.11 port 40676 connected to 192.168.1.39 port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec   113 MBytes   946 Mbits/sec
[  5]   1.00-2.00   sec   109 MBytes   916 Mbits/sec
[  5]   2.00-3.00   sec   112 MBytes   940 Mbits/sec
[  5]   3.00-4.00   sec   112 MBytes   944 Mbits/sec
[  5]   4.00-5.00   sec   108 MBytes   907 Mbits/sec
[  5]   5.00-6.00   sec   110 MBytes   924 Mbits/sec
[  5]   6.00-7.00   sec   111 MBytes   934 Mbits/sec
[  5]   7.00-8.00   sec   111 MBytes   928 Mbits/sec
[  5]   8.00-9.00   sec   112 MBytes   941 Mbits/sec
[  5]   9.00-10.00  sec   110 MBytes   919 Mbits/sec
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-10.00  sec  1.08 GBytes   930 Mbits/sec                  sender
[  5]   0.00-10.00  sec  1.08 GBytes   930 Mbits/sec                  receiver

iperf Done.
root@OK527:/#
```

OK527 has a gigabit network bandwidth of

eth0: 787 Mbps upload, 930 Mbps download

eth1: 948 Mbps upload, 945 Mbps download

### 4.16 Network Services

**Note: The default IP for eth0 is 192.168.0.232**

#### 4.16.1 Web Service

**Note: The PC’s IP must be in the same subnet as the development board’s IP for normal operation.**

The OK527 development board comes pre-installed with a lighttpd web server, and the service starts automatically at system boot. Enter the development board’s IP address in a browser to access the web pages on the board’s web server, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504997482_3c06388d_40e3_4f61_aed8_abcf9244ac63.png)

#### 4.16.2 SFTP

Installation package path: User Data\\Software Data\\3-Tools\\FileZilla\*

The OK527 development board supports SFTP service, which is automatically enabled at system startup. Once the IP address is configured, it can function as an SFTP server. The following describes how to utilize the SFTP tool for file transfer.

Install the FileZilla tool on Windows and configure it by following the steps shown in the image below.

Open the filezilla tool, click File, and select Site Manager.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854565907_d6d577e4_3f10_40b1_be75_c0af16720c56.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854578304_c6b101f0_d6c3_4756_91c1_fe5ae9b55718.png)

After successful login, upload and download operations can be performed.

### 4.17 WiFi Test

#### 4.17.1 STA Modes

**Note:**

- **Due to varying network environments, please configure according to your actual situation when conducting this experiment;**

- **The development board supports connecting to 2.4G and 5G wireless hotspots.**

This mode acts as a station to connect to the wireless network. In the following test, the router uses WPA encryption, and the connected Wi-Fi is 2.4GHz with the hotspot name: H3C\_708 and password: 123456785. Due to varying network environments, please configure according to your actual situation during this test.

Enter the following command in the development board terminal:

The meanings of relevant parameters in the command are as follows:

| **Parameter**| **Meaning**|
|:----------:|:----------:|
| -i| Wireless network card node name|
| -s| The actual Wi-Fi hotspot name to connect to.|
| -p| The parameter following -p refers to the password of the actual Wi-Fi hotspot to connect to; if the hotspot has no password, write NONE after -p.|

Serial port prints as follows:

```bash
root@OK527:/# fltest_wifi.sh -i wlan0 -s H3C_708 -p 123456785.
[  204.803506] sunxi-gmac 4500000.gmac0 eth0: Link is Down
wifi wlan0
ssid H3C_708
pasw 123456785.
waiting...
[  211.388935] IPv6: ADDRCONF(NETDEV_CHANGE): wlan0: link becomes ready
udhcpc: started, v1.35.0
udhcpc: broadcasting discover
udhcpc: broadcasting discover
udhcpc: broadcasting select for 192.168.1.20, server 192.168.1.1
udhcpc: lease of 192.168.1.20 obtained from 192.168.1.1, lease time 86400
deleting routers
adding dns 192.168.1.1
adding dns 114.114.114.114
connect ok
```

Check whether you can ping an external network. Enter the following command in the terminal:

```bash
root@OK527:/#ping -I wlan0 baidu.com -c 4            //Assign the wlan0 NIC to ping 4 times
PING baidu.com (110.242.68.66): 56 data bytes
64 bytes from 110.242.68.66: seq=0 ttl=54 time=95.213 ms
64 bytes from 110.242.68.66: seq=1 ttl=54 time=119.289 ms
64 bytes from 110.242.68.66: seq=2 ttl=54 time=40.234 ms
64 bytes from 110.242.68.66: seq=3 ttl=54 time=64.454 ms

--- baidu.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 40.234/79.797/119.289 ms
```

#### 4.17.2 AP Mode

**Note:**

- **Before testing, ensure the Gigabit Ethernet interface (eth0) is connected and the network is functioning properly;**

- **5 GHz hotspot enabled by default;**

- **To enable the 2.4GHz hotspot and modify the/usr/bin/fltest \_ hostap. sh, change "hostapd/etc/hostapd-5g.conf \&" to "hostapd/etc/hostapd-2.4g.conf \&".**

Configure the hotspot:

WiFi hotspot: OK527\_WIFI\_5G\_AP

Password:12345678

The hotspot name and password can be found in the /etc/hostapd-5g.conf file.

```bash
root@OK527:/# fltest_hostap.sh
done!
uap0: interface state UNINITIALIZED->COUNTRY_UPDATE
[   74.247545] IPv6: ADDRCONF(NETDEV_CHANGE): uap0: link becomes ready
uap0: interface state COUNTRY_UPDATE->ENABLED
uap0: AP-ENABLED
uap0: STA 86:de:12:63:58:96 IEEE 802.11: authenticated
uap0: STA 86:de:12:63:58:96 IEEE 802.11: associated (aid 1)
uap0: AP-STA-CONNECTED 86:de:12:63:58:96
uap0: STA 86:de:12:63:58:96 WPA: pairwise key handshake completed (RSN)
uap0: EAPOL-4WAY-HS-COMPLETED 86:de:12:63:58:96
```

### 4.18 4G Test

**Note: The driver supports the Quectel EC20 4G module.**

The OK527 supports the 4G module. Insert the 4G module before starting the development board, install the 4G antenna, insert the SIM card, start the development board, and perform dial-up Internet access operations for the EC20.

#### 4.18.1 EC20 Module Test

**Note:**

- **When using an IoT card for testing, confirm the module firmware version; lower versions may not support it and require an upgrade of the EC20 firmware;**

- **Some IoT cards require a dedicated account and password for dial-up; please adjust the command based on your actual situation.**

You can use the quectelCM --help command to view the meanings of related parameters.

After connecting the module and powering on the development board and module, you can check the USB status using the lsusb command.

```bash
root@OK527:/# lsusb
Bus 005 Device 001: ID 1d6b:0002
Bus 003 Device 001: ID 1d6b:0002
Bus 003 Device 003: ID 2c7c:0125        //EC20
Bus 001 Device 001: ID 1d6b:0002
Bus 005 Device 002: ID 05e3:0747
Bus 006 Device 001: ID 1d6b:0001
Bus 001 Device 002: ID 046d:0825
Bus 004 Device 001: ID 1d6b:0001
Bus 002 Device 001: ID 1d6b:0003
Bus 003 Device 002: ID 1a40:0101
```

Check the device node status under /dev.

```bash
root@OK527:/#ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```

After successful device identification, you can perform dial-up Internet access testing;

```bash
root@OK527:/#fltest_quectel.sh &
```

Print information as follows:

```bash
[08-01_15:52:56:355] Quectel_QConnectManager_Linux_V1.6.0.15
[08-01_15:52:56:356] Find /sys/bus/usb/devices/3-1.4 idVendor=0x2c7c idProduct=0x125, bus=0x003, dev=0x003
[08-01_15:52:56:356] Auto find qmichannel = /dev/cdc-wdm0
[08-01_15:52:56:356] Auto find usbnet_adapter = usb0
[08-01_15:52:56:356] netcard driver = qmi_wwan_q, driver version = V1.2.9
[08-01_15:52:56:356] ioctl(0x89f3, qmap_settings) failed: Operation not supported, rc=-1
[08-01_15:52:56:357] Modem works in QMI mode
[08-01_15:52:56:362] cdc_wdm_fd = 7
[08-01_15:52:56:448] Get clientWDS = 7
[08-01_15:52:56:480] Get clientDMS = 1
[08-01_15:52:56:512] Get clientNAS = 2
[08-01_15:52:56:544] Get clientUIM = 1
[08-01_15:52:56:576] Get clientWDA = 1
[08-01_15:52:56:608] requestBaseBandVersion EC20CEHDLGR06A09M1G
[08-01_15:52:56:736] requestGetSIMStatus SIMStatus: SIM_READY
[08-01_15:52:56:768] requestGetProfile[1] 3gnet///0
[08-01_15:52:56:800] requestRegistrationState2 MCC: 460, MNC: 1, PS: Attached, DataCap: LTE
[08-01_15:52:56:832] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[08-01_15:52:56:832] ifconfig usb0 0.0.0.0
[08-01_15:52:56:839] ifconfig usb0 down
[08-01_15:52:56:896] requestSetupDataCall WdsConnectionIPv4Handle: 0x86d8a500
[08-01_15:52:57:024] ifconfig usb0 up
[08-01_15:52:57:031] udhcpc -f -n -q -t 5 -i usb0
udhcpc: started, v1.35.0
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.104.48.49, server 10.104.48.50
udhcpc: lease of 10.104.48.49 obtained from 10.104.48.50, lease time 7200
[08-01_15:52:57:232] deleting routers
[08-01_15:52:57:252] adding dns 202.99.160.68
[08-01_15:52:57:252] adding dns 202.99.166.4

```

If an IP is automatically assigned and DNS is added, the EC20 dial-up is successful.

After successful dial-up, check the network node via ifconfig as usb0 (the node name may vary; refer to the actual situation), and test network status via the ping command.

```bash
root@OK527:/# ping -I usb0 baidu.com -c4
PING baidu.com (110.242.68.66): 56 data bytes
64 bytes from 110.242.68.66: seq=0 ttl=53 time=59.096 ms
64 bytes from 110.242.68.66: seq=1 ttl=53 time=69.325 ms
64 bytes from 110.242.68.66: seq=2 ttl=53 time=69.955 ms
64 bytes from 110.242.68.66: seq=3 ttl=53 time=83.063 ms

--- baidu.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 59.096/70.359/83.063 ms
```

### 4.19 Playback/Recording Test

**Note:**

- **The OK527\_UP4 features two 3.5mm audio jacks and four XH-2.54-2PS speaker connectors; the microphone on the carrier board and the headphone microphone can be used for recording;**

- **Use the built-in codec and an external nau88c22 sound card;**

- **The NAU88C22 speaker connector is designated as SPKL SPKR; it is a 3.5mm audio jack located on the front of the carrier board;**

- **The built-in CODEC speaker connector is designated as NP SPKL; NP SPKL is the 3.5mm audio jack located on the rear of the carrier board.**

#### 4.19.1 Playback Test

```bash
root@OK527:/# aplay /forlinx/audio/30s.wav
root@OK527:/# mpg123 /forlinx/audio/30s.mp3    //Please use mpg123 to play MP3 files
```

Volume Control:

```bash
root@OK527:/# amixer		//Read the audio settings, where "HPOUT Gain" refers to the headphone volume
... ...
Simple mixer control 'HPOUT Gain',0
  Capabilities: volume volume-joined
  Playback channels: Mono
  Capture channels: Mono
  Limits: 0 - 7
  Mono: 7 [100%]
... ...
root@OK527:/# amixer set "HPOUT Gain" 5		//Set the volume to 5; the scale ranges from 0 to 7
Simple mixer control 'HPOUT Gain',0
  Capabilities: volume volume-joined
  Playback channels: Mono
  Capture channels: Mono
  Limits: 0 - 7
  Mono: 5 [71%]
```

HDMI Audio Test

```bash
root@OK527:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: audiocodec [audiocodec], device 0: sunxi-snd-plat-aaudio-sunxi-snd-codec 7110000.codec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: sndi2s1 [sndi2s1], device 0: sunxi-snd-plat-i2s-nau8822-hifi nau8822-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: sndhdmi [sndhdmi], device 0: sunxi-snd-plat-i2s-soc@3000000:hdmi_codec soc@3000000:hdmi_code []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

root@OK527:/# aplay  -D plughw:2,0 /forlinx/audio/30s.wav
```

NAU88C22 External Sound Card

```bash
root@OK527:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: audiocodec [audiocodec], device 0: sunxi-snd-plat-aaudio-sunxi-snd-codec 7110000.codec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: sndi2s1 [sndi2s1], device 0: sunxi-snd-plat-i2s-nau8822-hifi nau8822-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: sndhdmi [sndhdmi], device 0: sunxi-snd-plat-i2s-soc@3000000:hdmi_codec soc@3000000:hdmi_code []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
root@OK527:/# tinymix -D 1 set 31 1 1					//Enable headphone output via an external sound card
root@OK527:/# tinymix -D 1 set 32 30 30					//Adjust headphone volume
root@OK527:/# aplay  -D plughw:1,0 /forlinx/audio/30s.wav
```

**Note: HDMI display must be configured via the U-Boot menu.**

#### 4.19.2 Recording Test

```bash
root@OK527:/# arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: audiocodec [audiocodec], device 0: sunxi-snd-plat-aaudio-sunxi-snd-codec 7110000.codec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: sndi2s1 [sndi2s1], device 0: sunxi-snd-plat-i2s-nau8822-hifi nau8822-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

Use the built-in sound card.

```bash
root@OK527:/# arecord -c2 -r 48000 -f S16_LE -d 3 mic.wav
Recording WAVE 'mic.wav' : [ 4608.610608] [SNDCODEC][sunxi_card_hw_params][630]:stream_flag: 1
Signed 16 bit Little Endian, Rate 48000 Hz, Stereo
```

Use an external sound card.

```bash
arecord -D hw:1,0 -f cd -d 3 mic.wav
Recording WAVE 'output.wav' : [  996.499566] nau8822 5-001a: pll_int=8 pll_frac=0 mclk_scaler=0 pre_factor=1
Signed 16 bit Little Endian, Rate 44100 Hz, Stereo

```

### 4.20 LCD Backlight Adjustment

The brightness range for the backlight is (0–255), where 255 indicates the highest brightness and 0 turns off the backlight. Enter the following command in the terminal after system startup for backlight testing.

When an LCD screen (LCD 800x480, LCD 1024x600, MIPI 1024x600, LVDS 1280x800) is selected as the Primary Disp, use fltest\_backlight get 0; otherwise, use fltest\_backlight get 1. The following commands are based on the example where the LCD screen is selected as the Primary Disp.

Check the current screen backlight value:

```bash
root@OK527:/# fltest_backlight get 0
Current brightness: 50                                          //The current backlight value is 50
```

LCD backlight adjustment:

```bash
root@OK527:/# fltest_backlight set 0 125
The brightness has been set to: 125                             //Set the backlight value to 1
root@OK527:/# fltest_backlight get 0
Current brightness: 125		                                    //Backlight adjustment successful
```

### 4.21 Closing Desktop

```bash
root@OK527:/# /etc/init.d/S42matrix-browser stop                      //Close the desktop
Stopping matrix-browser: OK
root@OK527:/# /etc/init.d/S42matrix-browser start					  //Open the desktop
Starting matrix-browser: OK
```

### 4.22 LED Test

The OK527\_UP4 SoM features a controllable red LED, which flashes when the board is powered up.

Testing Procedure:

View the trigger condition

```bash
root@OK527:/# cat /sys/class/leds/heartbeat/trigger
none rc-feedback rfkill-any rfkill-none kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock mmc0 mmc1 [heartbeat] rfkill0
```

Here, \[heartbeat] indicates the current trigger condition is the system heartbeat light. Writing the above string to trigger can modify the trigger condition.

User control

When the LED trigger condition is set to none, you can control the LED on/off via commands.

```bash
root@OK527:/# echo none > /sys/class/leds/heartbeat/trigger
root@OK527:/# echo 1 > /sys/class/leds/heartbeat/brightness
root@OK527:/# echo 0 > /sys/class/leds/heartbeat/brightness
```

Change the red LED to heartbeat mode

```bash
root@OK527:/# echo heartbeat > /sys/class/leds/heartbeat/trigger
```

The LED is now controlled by the system clock, flashing in a certain rhythm.

### 4.23 SQLite3 Test

SQLite3 is a lightweight database system, an ACID-compliant relational database management system with low resource consumption. The OK527 development board uses version 3.25.3 of SQLite3.

```bash
root@OK527:/# sqlite3
SQLite version 3.38.5 2022-05-06 15:25:27
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
root@OK527:/# sqlite3
SQLite version 3.38.5 2022-05-06 15:25:27
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> create table tbl1 (one varchar(10), two smallint);    // Create table tbl1
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);               // Insert data into table tbl1
sqlite> select * from tbl1;                                   // Query all content in table tbl1
hello!|10
goodbye|20
sqlite> delete from tbl1 where one = 'hello!';                // Delete data
sqlite> select * from tbl1;                                   // Query all content in table tbl1
goodbye|20
sqlite> .quit                                                 // Exit the database (or use .exit command)
root@OK527:/#
```

### 4.24 Adding a Startup Script

#### 4.24.1 Temporarily Adding a Startup Script

First, create a shell script:

```bash
root@OK527:/# vi /etc/autorun.sh
```

Modify the file reference as follows (users need to modify according to their actual situation):

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854651415_ad525e3b_3519_432f_ad11_78ebde105f37.png)

After modification, save and exit, then add execution permission to the script;

```bash
root@OK527:/#chmod +x /etc/autorun.sh
```

Add the following at the end of the /etc/init.d/rcS file:

/etc/autorun.sh \&

Save the changes and exit.

#### 4.24.2 Adding a Startup Script to the Flashing Image

To add a startup script when flashing the image, modifications need to be made in the development environment source code. The operation method is as follows:

Navigate to the OK527-linux-sdk source package and create an autorun.sh file in the following path: buildroot/buildroot-202205/board/forlinx/okt527/fs-overlay/etc.

Content format reference as follows; please modify according to your actual needs:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854671764_11a6e703_7780_404e_9e7f_1a2c5189ef6c.png)

Use the chmod +x autorun.sh command to add execution permission to the file.

Add the newly created shell script to the rcS file in the OK527 root filesystem.

Copy the rcS file from out/t527/okt527/buildroot/buildroot/target/etc/init.d/rcsto buildroot/buildroot-202205/board/forlinx/okt527/fs-overlay/etc/init.d/.

Append the following shell command to the end of the buildroot/buildroot-202205/board/forlinx/okt527/fs-overlay/etc/init.d/rcS file: /etc/autorun.sh \&.

Recompile and package

Please refer to the Compilation section of the OK527\_UP4\_Linux5.15.104+Qt5.12.5 User Compilation Manual; further details will not be repeated here.

### 4.25 A55 CoreMark Test

The best-known and most common benchmarks in the field of embedded processors are Dhrystone and CoreMark. CoreMark is a comprehensive benchmark used to measure the performance of central processing units (CPU) used in embedded systems. It was developed in 2009 by Shay Gal-On of eembc, with the aim of becoming an industry standard to replace the outdated Dehrystone benchmark.

The CoreMark test programme is ported to the OK527 platform by default; you can run the test using the following command:

Set the CPU’s small cores and large cores to high-performance mode respectively;

```bash
root@OK527:/# echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@OK527:/# echo performance > /sys/devices/system/cpu/cpu4/cpufreq/scaling_governor
```

CoreMark Test

```bash
root@OK527:/# coremark
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 16379
Total time (secs): 16.379000
Iterations/Sec   : 6715.916723
Iterations       : 110000
Compiler version : GCC10.3.1 20210621
Compiler flags   : -O2   -lrt
Memory location  : Please put data memory location here
(e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x33ff
Correct operation validated. See readme.txt for run and reporting rules.
CoreMark 1.0 : 6715.916723 / GCC10.3.1 20210621 -O2   -lrt / Heap
root@OK527:/#
```

### 4.26 A55 Dhrystone Test

Dhrystone is a comprehensive benchmark program designed in 1984 by Reinhold P. Weicker to test CPU (integer) computing performance. Dhrystone does not include floating-point operations. Its output result is the number of times Dhrystone runs per second, i.e., the number of iterations of the main loop per second.

The Dhrystone test program has been successfully ported to the OK527\_UP4 platform. You can use the following command to conduct the test.

Set the CPU to high-performance mode

```bash
root@OK527:/# echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@OK527:/# echo performance > /sys/devices/system/cpu/cpu4/cpufreq/scaling_governor
```

Dhrystone test

```bash
root@ OK527:/# echo 50000000 | dhrystone        //Run the Dhrystone test 50000000 times

Dhrystone Benchmark, Version 2.1 (Language: C)

Program compiled without 'register' attribute

Please give the number of runs through the benchmark:
Execution starts, 50000000 runs through Dhrystone
Execution ends

Final values of the variables used in the benchmark:

Int_Glob:            5
should be:   5
Bool_Glob:           1
should be:   1
Ch_1_Glob:           A
should be:   A
Ch_2_Glob:           B
should be:   B
Arr_1_Glob[8]:       7
should be:   7
Arr_2_Glob[8][7]:    50000010
should be:   Number_Of_Runs + 10
Ptr_Glob->
Ptr_Comp:          -1692515680
should be:   (implementation-dependent)
Discr:             0
should be:   0
Enum_Comp:         2
should be:   2
Int_Comp:          17
should be:   17
Str_Comp:          DHRYSTONE PROGRAM, SOME STRING
should be:   DHRYSTONE PROGRAM, SOME STRING
Next_Ptr_Glob->
Ptr_Comp:          -1692515680
should be:   (implementation-dependent), same as above
Discr:             0
should be:   0
Enum_Comp:         1
should be:   1
Int_Comp:          18
should be:   18
Str_Comp:          DHRYSTONE PROGRAM, SOME STRING
should be:   DHRYSTONE PROGRAM, SOME STRING
Int_1_Loc:           5
should be:   5
Int_2_Loc:           13
should be:   13
Int_3_Loc:           7
should be:   7
Enum_Loc:            1
should be:   1
Str_1_Loc:           DHRYSTONE PROGRAM, 1'ST STRING
should be:   DHRYSTONE PROGRAM, 1'ST STRING
Str_2_Loc:           DHRYSTONE PROGRAM, 2'ND STRING
should be:   DHRYSTONE PROGRAM, 2'ND STRING

Microseconds for one run through Dhrystone:    0.2
Dhrystones per Second:                      6090134.0

root@OK527:/#
```

### 4.27 View Chip-ID

Input in the serial debugging terminal:

```bash
root@OK527:/# cat /sys/class/sunxi_info/sys_info
sunxi_platform    : T527
sunxi_secure      : normal
sunxi_serial      : 40821e9375789d0c000050c000000000
sunxi_chiptype    : 00005f10
sunxi_batchno     : 0x18900002
sunxi_soc_ver    : 0x2
```

### 4.28 CAN Test

There are 2 x CAN on the carrier board, which are routed to the P41 connector.

Short-circuit H, L, and GND of can0 and can1 respectively to perform the test.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854704682_13284de8_3806_4254_b731_2a29092d7d3a.png)

Start CAN service.

```bash
root@OK527:/# ip link set awlink0 up type can bitrate 500000
[58659.636796] IPv6: ADDRCONF(NETDEV_CHANGE): can0: link becomes ready
root@OK527:/# ip link set awlink1 up type can bitrate 500000
[58662.966792] IPv6: ADDRCONF(NETDEV_CHANGE): can1: link becomes ready
root@OK527:/# ip link set dev awlink0 txqueuelen 4096
root@OK527:/# ip link set dev awlink1 txqueuelen 4096
```

Configure CAN0 to receive and CAN1 to send.

```bash
root@OK527:/# candump awlink0 &
[1] 18633
root@OK527:/# cangen  awlink1
awlink0  790   [1]  A4
awlink0  3A0   [3]  31 A1 15
awlink0  04B   [2]  DD EF
awlink0  39D   [8]  AE 37 BF 78 59 95 FB 68
awlink0  6A6   [2]  D2 DE
awlink0  59D   [4]  A5 60 7F 04
awlink0  019   [0]
```

### 4.29 Bluetooth Testing

The AW-Cx-UPM358 module on the OK-x-UP4 carrier board features integrated Bluetooth functionality. This section demonstrates how to transfer files between a mobile phone and the development board via Bluetooth.

Bluetooth Configuration

```bash
root@OK527:/# bluetoothctl                             // Start the BlueZ Bluetooth control utility
Agent registered
[CHG] Controller E8:FB:1C:66:FA:A6 Pairable: yes
[bluetooth]# power on          // Power on the Bluetooth adapter
[CHG] Controller E8:FB:1C:66:FA:A6 Class: 0x00100000
Changing power on succeeded
[CHG] Controller E8:FB:1C:66:FA:A6 Powered: yes
[bluetooth]# pairable on       // Enable pairable mode
Changing pairable on succeeded
[bluetooth]# discoverable on   // Enable discoverable mode
Changing discoverable on succeeded
[CHG] Controller E8:FB:1C:66:FA:A6 Discoverable: yes
[bluetooth]# agent on        // Enable the agent
Agent is already registered
[bluetooth]# default-agent    // Set the current agent as the default agent
Default agent request successful
[bluetooth]#
```

Board Passive Pairing (Standard pairing process).

After the above settings, open your computer and search for Bluetooth. Click "Add Bluetooth or Other Devices", and a device named "OKT527" will appear. Click on this Bluetooth to attempt pairing,

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718854751055_40b40021_d9a9_4094_a8da_bf3e33ded013.png)

The print information on the development board is as follows. Enter "yes":

```bash
[CHG] Device 2C:DB:07:C7:4F:F6 Connected: yes
Request confirmation
[agent] Confirm passkey 153732 (yes/no): yes
```

View and remove connected devices:

```bash
[bluetooth]# devices                                           //View connected Bluetooth devices
Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F
[bluetooth]# remove 2C:DB:07:C7:4F:F6                         //Remove device
[DEL] Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F
Device has been removed
```

Active pairing of development board

In addition to passive pairing, it is also possible to send an active pairing request from the development board terminal.

```bash
[bluetooth]# scan on        //Start scanning
Discovery started
[CHG] Controller E8:FB:1C:66:FA:A6 Discovering: yes
[NEW] Device 7B:01:59:ED:69:50 7B-01-59-ED-69-50
[NEW] Device 7C:71:13:5F:A3:8F 7C-71-13-5F-A3-8F
[NEW] Device 14:16:9E:62:39:BD zzy 
[NEW] Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F  //Find the device you want to pair with
[CHG] Device 14:16:9E:62:39:BD RSSI: -74
[bluetooth]# scan off        //Stop scanning
Discovery stopped
[CHG] Device 2C:DB:07:C7:4F:F6 TxPower is nil
[CHG] Device 2C:DB:07:C7:4F:F6 RSSI is nil
[CHG] Device 14:16:9E:62:39:BD RSSI is nil
[CHG] Device 7C:71:13:5F:A3:8F TxPower is nil
[CHG] Device 7C:71:13:5F:A3:8F RSSI is nil
[CHG] Device 7B:01:59:ED:69:50 RSSI is nil
[CHG] Controller E8:FB:1C:66:FA:A6 Discovering: no
[bluetooth]# pair 2C:DB:07:C7:4F:F6        //Pair with a specified device
Attempting to pair with 14:16:9E:62:39:BD
[CHG] Device 14:16:9E:62:39:BD Connected: yes
Request confirmation
[agent] Confirm passkey 807166 (yes/no): yes        //Confirmation key
[CHG] Device 14:16:9E:62:39:BD Modalias: bluetooth:v000Fp1200d1436
[CHG] Device 14:16:9E:62:39:BD UUIDs: 00001105-0000-1000-8000-00805f9b34fb
......
[CHG] Device 14:16:9E:62:39:BD UUIDs: fa88c0d0-afac-11de-8a99-0800200c9a67
[CHG] Device 14:16:9E:62:39:BD ServicesResolved: yes
[CHG] Device 14:16:9E:62:39:BD Paired: yes
Pairing successful
[CHG] Device 14:16:9E:62:39:BD ServicesResolved: no
[CHG] Device 14:16:9E:62:39:BD Connected: no
[bluetooth]# 
```

At the same time, a pairing request appears on the computer interface. Click "pairing", and enter "yes" on the board to confirm. The pairing is successful.

Development board receives files.

After successful pairing, on the computer side, you can use Bluetooth to send files to the board side.

Click "Send or receive files via Bluetooth".

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855264803_546e43f0_8bac_4568_9251_aba4739cd77a.png)

Select the file to send.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855270605_f7d30193_7a16_4d98_8dc8_9ebfd6d2c998.png)

Select OKT527.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855278104_bf7b4b2e_47fa_4617_a410_a38274db9230.png)

Select the file to send.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855311685_52169b3c_eae7_4cc7_a967_26ba5922d0b9.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855332997_62ca2ac1_a48c_4274_a517_4a1fbdef84c2.png)

Waiting for sending to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855339406_1f5060a0_9b8c_4600_8b72_a0bf7a216a6d.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855349195_a5a5d2db_09dc_4203_80c4_b9f46e2fe68f.png)

The received file is saved in the /tmp directory.

Send files from the development board.

Similarly, you can use the development board to send files to the computer. The test method is as follows:

Select "Receive File" on the computer side.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1718855360798_c018e7d4_f48b_4af9_86da_3b6f4e6741df.png)

```bash
root@OK527:~# bluetoothctl 
Agent registered
[CHG] Controller E8:FB:1C:66:FA:A6 Pairable: yes
[bluetooth]# paired-devices        //View paired devices
Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F
[bluetooth]# exit
root@OK527:~# fltest_obexctl.sh
[NEW] Client /org/bluez/obex 
[obex]# connect   2C:DB:07:C7:4F:F6     //Link to a specific device
Attempting to connect to 2C:DB:07:C7:4F:F6
[NEW] Session /org/bluez/obex/client/session0 [default]
[NEW] ObjectPush /org/bluez/obex/client/session0 
Connection successful
[2C:DB:07:C7:4F:F6]# send /run/media/mmcblk0p1/bootlogo.bmp  //Send file
Attempting to send /run/media/mmcblk0p1/bootlogo.bmp to /org/bluez/obex/client/session0
[NEW] Transfer /org/bluez/obex/client/session0/transfer0 
Transfer /org/bluez/obex/client/session0/transfer0
Status: queued
Name: bootlogo.bmp
Size: 1339239
Filename: /run/media/mmcblk0p1/bootlogo.bmp
Session: /org/bluez/obex/client/session0
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: active
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 65433 (@65KB/s 00:19)
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Transferred: 130961 (@65KB/s 00:18)
.....
[CHG] Transfer /org/bluez/obex/client/session0/transfer0 Status: complete
[DEL] Transfer /org/bluez/obex/client/session0/transfer0 
[2C:DB:07:C7:4F:F6]# exit
root@OK527:~# 
```

The computer will receive the incoming file request for file transfer.

Connect the board to the sink and connect it to your mobile phone

```bash
//Execute the following commands in order root@OK527:/# bluealsa -p a2dp-source -p a2dp-sink -p hfp-hf -p hfp-ag -p hsp-hs -p hsp-ag &
root@OK527:/# bluetoothctl
[bluetooth]# power on
[bluetooth]# pairable on
[bluetooth]# discoverable on
[bluetooth]# agent on
# Then connect your mobile phone to the board
# And then all sorts of "yes"
# Trusted Mobile
[bluetooth]# trust 54:09:10:2A:01:75
[bluetooth]# quit

root@OK527:/# bluealsa-aplay -l
**** List of PLAYBACK Bluetooth Devices ****
hci0: 54:09:10:2A:01:75 [1/6], phone
SCO (CVSD): S16_LE 1 channel 8000 Hz
**** List of CAPTURE Bluetooth Devices ****
hci0: 54:09:10:2A:01:75 [1/6], phone
A2DP (SBC): S16_LE 2 channels 44100 Hz
SCO (CVSD): S16_LE 1 channel 8000 Hz

# Record from bluealsa, then play back to the default device (on-chip codec)
root@OK527:/# arecord -fcd -D bluealsa | aplay

# When I play music on my mobile, the board starts making a noise.
```

## 5\. OK527\_UP4 Platform Multimedia Test

The OK527 platform supports hardware decoding for audio and video. All the examples in this section are based on the command line.

The OK527 platform features an integrated Video Processing Unit (VPU) that supports hardware decoding of the following video formats:

Video Decoding: H.265 supports up to 4K@30fps，H264, whilst H.264 supports up to 4K@24fps.

Video Encoding JPEG, with a maximum supported resolution of 4096×4096

OK527 Platform Hardware Decoding Parameter Table:

| Video Decoder| Format| Resolution| Frame rate|
|:----------:|:----------:|:----------:|:----------:|
| | H.265| 4K| 60 fps|
| | H.264| 4K| 30 fps|
| | VP9| 4K| 60 fps|
| Video Encoder| H264| 4K| 24 fps|

### 5.1 UVC Playback Test

**Note:** 

- **Before testing, refer to the “Closing Desktop” section to stop the desktop program and clear the screen;**

- **The device node recognised by the OK527 UVC camera is /dev/video1; for this test, LVDS is used as the display device.**

Capture Test:

```bash
root@OK527:/# gst-launch-1.0 v4l2src device=/dev/video1 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480,framerate=30/1 ! waylandsink

.
.
.
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772504999893_9fdf782c_dead_44d8_8f90_71e3f884e137.png)

### 5.2 MIPI\_dsi Format Camera Acquisition Testing

#### 5.2.1 OV5645 Test

```bash
root@OK527:/# gst-launch-1.0 v4l2src device=/dev/video4 ! video/x-raw,format=NV12,width=1024,height=600 ! videoconvert ! waylandsink
Setting pipeline to PAUSED ...
[   59.259137] sunxi:vin:[INFO]: camera is on, close dfs
[   59.272863] sunxi:vin:[ERR]: ov5645_mipi_2 cannot find the match sensor_helper
[   59.280981] sunxi:vin:[ERR]: ov5645_mipi_2 cannot find the match sensor_helper
[   59.289080] sunxi:vin:[ERR]: ov5645_mipi_2 cannot find the match sensor_helper
[   59.297179] sunxi:vin:[ERR]: ov5645_mipi_2 cannot find the match sensor_helper
[   59.388343] ov5645 id:5645
Pipeline is live and does not ne[   59.392714] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
ed PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystem[   59.409044] ===========sensor_s_stream width: 1280 height:960
Clock
Redistribute latency...
0:00:03.5 / 99:99:99.
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772505000247_d1730e38_4805_490c_8f4e_185449ec7eee.png)

#### 5.2.2 OV13855 Test

Switch the U-Boot menu to ov13855

```bash
root@OK527:/# gst-launch-1.0 v4l2src device=/dev/video8 ! video/x-raw,format=NV12,width=1024,height=600 ! videoconvert ! waylandsink
Setting pipeline to PAUSED ...
[  201.279156] sunxi:vin:[INFO]: camera is on, close dfs
[  201.286887] PWR_ON!
[  201.319452] sensor_init
[  201.322408] eRet:0, 0x300a:0x0, times_out:3
[  201.547379] eRet:0, 0x300b:0xd8, times_out:3
Pipeline is live and does not ne[  201.773540] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
ed PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[  201.792846] sensor_s_stream on = 1, 2112*1568 fps: 30 code: 3007
Redistribute latency...
0:00:03.4 / 99:99:99.
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772505000483_5f1dcffd_9a60_45f3_a512_02f0aa47e22e.png)

#### 5.2.3 Testing the TP2815 with an AHD Camera

Switch the U-Boot menu to tp2815

**Note: There is currently a conflict between the TP2815 preview and the OV5645. Please do not preview the OV5645 before using the TP2815 or TP2855.**

```bash
root@OK527:/# gst-launch-1.0 v4l2src device=/dev/video8 ! video/x-raw,format=NV12,width=1024,height=600 ! videoconvert ! waylandsink
Setting pipeline to PAUSED ...
[   65.779606] sunxi:vin:[INFO]: camera is on, close dfs
[   65.823096] sunxi:vin:[INFO]: [tp2815_mipi]sensor id = 0x2855
Pipeline is live and does not ne[   65.830924] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
ed PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
[   65.849144] sunxi:vin:[INFO]: [tp2815_mipi]sensor_s_stream on = 1, 1280*720 2006
[   65.857439] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_hardware_init.
[   65.864364] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   65.875754] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   65.887419] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   65.898715] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   65.910416] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_mipi_out
[   65.918034] sunxi:vin:[INFO]: [tp2815_mipi]mipi clk is MIPI_4CH4LANE_594M
Redistribute latency...
0:00:07.7 / 99:99:99.
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772505000704_cbb510a2_bb04_49be_acb1_81fa646951b1.png)

Simultaneous preview from four cameras.

```bash
root@OK527:/# gst-launch-1.0 \
> videomixer name=mixer \
> sink_0::xpos=0 sink_0::ypos=0 sink_0::zorder=0 \
> sink_1::xpos=640 sink_1::ypos=0 sink_1::zorder=1 \
> sink_2::xpos=0 sink_2::ypos=400 sink_2::zorder=2 \
> sink_3::xpos=640 sink_3::ypos=400 sink_3::zorder=3 \
> ! video/x-raw,format=NV12,width=1280,height=800 \
> ! waylandsink sync=false async=false max-lateness=0 qos=false \
> \
> v4l2src device=/dev/video8 \
> ! video/x-raw,format=NV12,width=640,height=400 \
> ! mixer.sink_0 \
> \
> v4l2src device=/dev/video12 \
> ! video/x-raw,format=NV12,width=640,height=400 \
> ! mixer.sink_1 \
> \
> v4l2src device=/dev/video16 \
> ! video/x-raw,format=NV12,width=640,height=400 \
> ! mixer.sink_2 \
> \
> v4l2src device=/dev/video17 \
> ! video/x-raw,format=NV12,width=640,height=400 \
> ! mixer.sink_3


Setting pipeline to PAUSED ...
[   79.350013] sunxi:vin:[INFO]: camera is on, close dfs
[   79.358413] sunxi:vin:[INFO]: [tp2815_mipi]sensor id = 0x2855
[   79.365341] sunxi:vin:[INFO]: camera is on, close dfs
[   79.371737] sunxi:vin:[INFO]: [tp2815_mipi]sensor id = 0x2855
[   79.378505] sunxi:vin:[INFO]: camera is on, close dfs
[   79.384846] sunxi:vin:[INFO]: [tp2815_mipi]sensor id = 0x2855
[   79.391627] sunxi:vin:[INFO]: camera is on, close dfs
[   79.397808] sunxi:vin:[INFO]: [tp2815_mipi]sensor id = 0x2855
Pipeline is live and does not ne[   79.405656] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
ed PREROLL ...
Redistribute lat[   79.405685] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
[   79.405888] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
ency...
Pipeline is PREROLLED .[   79.405905] sunxi:vin:[WARN]: sensor g_pixelaspect fail!
..
Setting pipeline to PLAYING [   79.408307] sunxi:vin:[ERR]: buffer count is invalid, set to 3
[   79.408448] sunxi:vin:[ERR]: buffer count is invalid, set to 3
...
New clock: GstSystemClock[   79.410450] sunxi:vin:[INFO]: [tp2815_mipi]sensor_s_stream on = 1, 1920*1080 2006
[   79.410459] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_hardware_init.
[   79.423282] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init

[   79.484389] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   79.497371] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   79.508702] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_decoder_init
[   79.520420] sunxi:vin:[INFO]: [tp2815_mipi]tp2815_mipi_out
[   79.528064] sunxi:vin:[INFO]: [tp2815_mipi]mipi clk is MIPI_4CH4LANE_594M
[   79.537809] sunxi:vin:[ERR]: buffer count is invalid, set to 3
[   79.538130] sunxi:vin:[ERR]: buffer count is invalid, set to 3
Redistribute latency...
0:00:01.6 / 99:99:99.
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527_UP4_Linux5_15_147_User_Manual/1772505000890_7b6ebf48_61b3_4ca0_83f2_484a4ccf824f.png)

### 5.3 Video Hardware Decoding

The OK527 supports hardware decoding of H.264 and H.265 video; it supports up to 4K@60fps for H.265 and up to 4K@30fps for H.264.

The current codec uses the GStreamer approach; at present, it can only decode, not encode.

```bash
root@OK527:/# gst-launch-1.0  filesrc location=/forlinx/1080p_60fps_h264.mp4  ! parsebin ! omxh264dec ! filesink location=h264.yuv

...
stream stopped, reason error
WARNING: omx_vdec_aw <standbyOutBufferArr:659>: ** return pic when flush,i[0],pPic[0x7f70001328]
WARNING: omx_vdec_aw <standbyOutBufferArr:659>: ** return pic when flush,i[1],pPic[0x7f70001498]
WARNING: omx_vdec_aw <standbyOutBufferArr:659>: ** return pic when flush,i[4],pPic[0x7f700018e8]
WARNING: omx_vdec_aw <standbyOutBufferArr:659>: ** return pic when flush,i[5],pPic[0x7f70001a58]

Freeing pipeline ...

```

Once complete, check whether the h264.yuv file has been generated.

Preview video

```bash
root@OK527:/# gst-launch-1.0  filesrc location=/forlinx/1080p_30fps_h265.mp4  ! parsebin ! omxhevcvideodec ! waylandsink

.
.
.

```

## 6\. Flashing the System

The OK527\_UP4 development board currently supports flashing via OTG and TF Card. The corresponding programming tool is provided in the user profile, and you can choose any one of the methods for image programming.

### 6.1 Required Images

Image path: Software Resources\\2-Images and Source Code\\0-Images

| **Image**| **Description**|
|:----------:|:----------:|
| t527\_linux\_OK527\_UP4\_uart0.img| Default factory image for eMMC.|

### 6.2 OTG Flashing

#### 6.2.1 Flashing Tool Installation

Path: Software Files\\3-Tools\\USBDriver\_64.zip and PhoenixSuit\_v1.13.zip

Unzip the drivers and tools, then connect the development board to your computer using a Type-C cable.

Open the Device Manager on the computer. If an unknown device appears, manually install the driver by right-clicking on it and selecting “Update driver”.

![Image](e5f86fbc1486465992bbe76cd757b12d.png)

After selecting "Browse my computer to find the driver", choose the unzipped PhoenixSuit\_V1.10 directory.

![Image](92a779fea1264e2bb070bcac89d74dca.png)

Select the USBDriver\_64 directory that you just extracted:

Click "Next" and wait for the driver installation to complete.

The following interface will appear:

!![Image](48ee2faa0d544b98b7f5b783cbf42f3e.png)

#### 6.2.2 OTG Flashing Methods

OTG Full-Burn-In Test

This programming method will program the entire img image.

The following interface will appear:

![Image](75907aa320fc4c73b2c2d53ad293a073.png)

In the following interface, click "One-click Flash" and then click "Browse" to select the firmware image file.

![Image](b9d6ce35261d45989b61599133445b73.png)

Connect the development board and the host using a Type-A to Type-C cable, power the board, and press and hold the FEL and RESET buttons simultaneously. Release the RESET button first, then release the FEL button.

**Note: Release RESET first, then release FEL.**

In the following interface, click "Yes" to enter the formatting upgrade mode:

![Image](9e841ac83db74c3f8252cd462c7c9b8e.png)

Wait for the programming to complete. Then, the following interface will pop up:

![Image](25e5db4bcd224c4b90932f18ba8fadf7.png)

Power up and start the OK527 _ UP4 card.

**Note: It is not recommended to flash firmware images individually, as this can easily lead to flashing failures.**

Update the image separately.

1\) OTG uboot separate programming test

In the following interface, check the checkbox "Single or multi-partition download (select this option, the flashing tool will download the partitions you have selected)", then check "ROOTFS".

Check the “BOOT-RESOURCE” and “ENV” tick boxes.

![Image](cdd682f28efa43f3948b34cf987a980f.png)

Connect the development board to the host computer using a Micro USB cable to power the board. Press the FEL and RESET buttons simultaneously; release the RESET  
button first, then release the FEL button. Wait for the programming to complete. Then, the following interface will pop up:   
**Note: Release RESET first, then release FEL.**

![Image](f58585e7e2e5409e9916f7fecc70266b.png)

OTG Flashing Kernel Image and Device Tree DTB File

In the following interface, check the checkbox "Single or multi-partition download (select this option, the flashing tool will download the partitions you have selected)", then check "BOOT".

![Image](897c8fbb003944ceb6cf8fe34b68de83.png)

Connect the development board to the host computer using a Micro USB cable to power the board. Press the FEL and RESET buttons simultaneously; release the RESET  
button first, then release the FEL button. Wait for the programming to complete. Then, the following interface will pop up:   
**Note: Release RESET first, then release FEL.**

![Image](0b2663ee9100475daac085b38192c22d.png)

OTG System Flashing

In the following interface, check the checkbox "Single or multi-partition download (select this option, the flashing tool will download the partitions you have selected)", then check "ROOTFS".

![Image](cd45f3bab23048ec97c58521e9db720c.png)

Connect the development board to the host computer using a Micro USB cable to power the board. Press the FEL and RESET buttons simultaneously; release the RESET  
button first, then release the FEL button. Wait for the programming to complete. Then, the following interface will pop up:   
**Note: Release RESET first, then release FEL.**

![Image](10322ba26a994533b0a79b6f331f16af.png)

#### 6.2.3 Common OTG Flashing Issues

Driver Installation Failure

Some users still see an "Unknown Device" in Device Manager after installing the USB driver according to the manual. When they click on this device, an error message appears stating that "the third-party INF file does not contain digital signature information," as shown in the figure below:

![Image](add5cacc0f3944ca9e281a9e532154e2.png)

 This occurs because some Windows systems, to prevent third-party programs from affecting system stability, block unsigned drivers from passing verification, which results in driver installation failure. The user must first disable driver signature enforcement on the computer, then proceed to install the driver following the instructions in the manual.

(1) Solution for "Third-party INF does not contain digital signature information" issue.

First press and hold Shift + Restart;

![Image](8e077ae99f5c45499a2e0d5549cd10c2.png)

At startup, select Troubleshoot -- Advanced options -- Startup Settings;

![Image](8a469de93ad145a9929cfa82a67562a1.png)

In the startup settings interface, click Restart in the lower right corner to restart and enter the startup settings. You can then disable driver signature enforcement using the number key 7 or the function key F7.

Incorrect Use of RESET FEL Buttons

When programming, you need to press the RESET key and the FEL key at the same time. When releasing them, release the RESET key first, and then release the FEL key.

Device name appears but the board still cannot be recognized

![Image](3e0d49691a2b4c8ba31b7d31f69dd091.png)

This may be because there are many unknown devices in Device Manager, and selecting the wrong one could cause the driver to be installed to another device. First right-click the device item mentioned above, select "Uninstall device", and check "Delete the driver software for this device".

![Image](2c3fbd23dae14b61bfc4199fab45dab0.png)

After uninstalling, disconnect other USB devices connected to the host, put the development board into flashing mode and connect it to the host, then repeat the above steps for installation.

### 6.3 TF Card Flashing

#### 6.3.1 Creating a TF Flashing Card

**Path to the card-making tool: 02-User Files\\01-Software Files\\04-Tools\\PhoenixCard\_V4.1.9.zip**

Insert an 8GB/16GB/32GB TF card into the PC's USB interface via a card reader.

Copy the flashing tool PhoenixCard\_V4.1.9.zip to any Windows directory, and double-click PhoenixCard.exe in the PhoenixCard\_V4.1.9 folder.

The following interface will appear:

![Image](ca21e82750e0406d9531ad7baec66c5a.png)

**Note: If the TF card has multiple partitions, click "Restore Card" first, then click "Burn Card"; otherwise, the burning process may fail.**

Click "Firmware" to browse and select the OK527 firmware image, select "Mass Production Card", and click "Burn Card".

Wait until the entire burn process is complete, as shown in the interface below:

![Image](564b183a3bb54e87ab1b8cd8e33b8445.png)

#### 6.3.2 TF Card Flashing Method

Insert the TF card into the development board, power on the board, and the system will automatically enter the programming process; (For DIP switch settings, refer to the “Flashing and Start-up Settings” section).

Once the flashing is complete, both the screen and the serial port will display the following message:

```bash
…
chunk 4392(4395)
chunk 4393(4395)
chunk 4394(4395)
[76.477]successed in writting part rootfs
origin_verify value = b32fc317, active_verify value = b32fc317
[76.486]successed in verify part rootfs
[76.490]successed in download part rootfs
[76.494]begin to download part riscv0
partdata hi 0x0
partdata lo 0x1f39bc
sparse: bad magic
[76.599]successed in writting part riscv0
origin_verify value = 1cc2c38d, active_verify value = 1cc2c38d
[76.619]successed in verify part riscv0
[76.623]successed in download part riscv0
[76.627]begin to download part dsp0
partdata hi 0x0
partdata lo 0x4c4b0
sparse: bad magic
[76.650]successed in writting part dsp0
origin_verify value = 9720f44d, active_verify value = 9720f44d
[76.662]successed in verify part dsp0
[76.665]successed in download part dsp0
[76.672]successed in downloading part
uboot size = 0x16c000
storage type = 2
sunxi_sprite_deal_uboot ok
[76.761]successed in downloading uboot
[76.768][mmc]: write mmc 2 info ok
storage type = 2
[76.780]successed in downloading boot0
CARD OK
[76.784]sprite success
sprite_next_work=1
next work 1
SUNXI_UPDATE_NEXT_ACTION_NULL
==================================================
|                                                |
|                 update  finish                 |
|                                                |
==================================================
remind_type : GPIO_LED
```

Remove the TF card and power on the board to start the system.

During mass production, the red LED on the SoM indicates the programming status as follows:

Pre-programming stage: The red light on the core board comes on, then goes out.

Programming complete stage: The red light on the core board flashes.

**3\. Restoring the TF Card**

Insert the TF card into a Windows host and run PhoenixCard.exe as an administrator.

Click “Restore Card” to restore the programmed TF card to a standard TF card.

![Image](564b183a3bb54e87ab1b8cd8e33b8445-1786697383669.png)