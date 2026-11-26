# Forlinx Desktop 20.04_User's Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. FCU2601 Embedded Control Unit Introduction
### 1.1 Product Overview
The FCU2601 Embedded Control Unit is built on FET3568J-C quad-core industrial-grade System-on-Module (SoM), clocked at 1.8 GHz, using a quad-core 64-bit Cortex-A55 architecture and integrating Rockchip's in-house NPU with 1 TOPS of compute for lightweight on-device AI inference. Memory supports up to 4 GB and storage up to 32 GB eMMC.

This product combines a SoM, a carrier board, and an expansion board to cut total system cost, and supports a wide range of hardware peripherals: RS485, RS232, CAN, USB, Ethernet, 4G, Wi-Fi, DI, DO, mSATA, and HDMI interfaces and modules. The FCU2601 measures within 190 x 140 x 45 mm and comes in Base and Extended versions, used as an EMS in single-cabinet deployment and multi-cabinet networking for lithium-ion commercial and industrial energy storage. Both versions use the same enclosure dimensions but differ in interface count; customers can choose based on the application scenario.

**Product Features:**

Rockchip RK3568J quad-core processor: high performance, low power consumption, high reliability

2 x Gigabit Ethernet ports with isolation protection

2 x 100 Mbps Ethernet ports (expansion board) with isolation protection

9 x RS485 (4 on the carrier board, 5 on the expansion board) with isolation protection

2 x RS232/RS485 multiplexed ports (expansion board) with isolation protection

2 x CAN ports with isolation protection

8 x DI, dry-contact inputs with optocoupler isolation

6 x DO, relay outputs, contact rating 5 A 250 VAC, 5 A 30 VDC

2 x USB2.0 Host ports for user expansion

1 x HDMI display output

Dual-mode Wi-Fi (STA and AP)

4G, optional module

mSATA portable hard drive with an internal mounting position, optional module

Built-in supercapacitor keeps the system running for at least 5 s after external power loss, preventing data loss

Rated input DC 24 V (9~36 V supported), with reverse-polarity and overcurrent protection

### 1.2 Interface Diagram
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/001.png)

Figure 1 Front 

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/002.png)

Figure 2 Back!

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/003.png)

Figure 3 Side 

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/004.png)

Figure 4 Bottom 

Rated power input is DC 24 V, including a protective earth terminal

The dual-layer LED on the left is the power and status indicator: the red LED lights when power is applied, and the green LED blinks as a heartbeat when the embedded unit is running normally

The dual-layer buttons are the user-defined button and the reset button

Two 6-pin green terminal blocks (3.81 mm pitch) provide the 6 DO interfaces

The terminal block pinout is as follows:

| + | - | + | - | + | - | + | - | + | - | + | - |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DO1 | DO1 | DO2 | DO2 | DO3 | DO3 | DO4 | DO4 | DO5 | DO5 | DO6 | DO6 |


One 10-pin green terminal block (3.81 mm pitch) provides the 8 DI interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Signal | DI1 | DI2 | DI3 | DI4 | DI5 | DI6 | DI7 | DI8 | COM | COM |


A standard HDMI port is in the center

Two standard Type-A USB connectors

One DEBUG port (RJ45) at RS232 levels, with the same pinout as a Cisco switch console port

Two antenna connectors for the main and auxiliary 4G antennas

One standard tray-type mini SIM card slot for the 4G module

One microSD card slot for image flashing or data storage

Two Gigabit Ethernet ports: eth0 and eth1

Two 100 Mbps Ethernet ports: eth2 and eth3

One Wi-Fi antenna

Two dual-layer LED indicators with user-defined functions

One 6-pin green terminal block (3.81 mm pitch) provides the 2 CAN interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Signal | L1 | H1 | CG1 | L2 | H2 | CG2 |


Four 6-pin green terminal blocks (3.81 mm pitch) provide the 8 RS485 interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Signal | A1 | B1 | G1 | A2 | B2 | G2 |


One 3-pin green terminal block (3.81 mm pitch) provides the RS485 interface

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Signal | A9 | B9 | G9 |


Two 5-pin green terminal blocks (3.81 mm pitch) provide 2 RS485/RS232 multiplexed interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Signal | A10 | B10 | G10 | T10 | R10 |


### 1.3 Hardware Specifications
| Device | Description |
| --- | --- |
| CPU | Rockchip RK3568J ARM Cortex-A55 1.8 GHz |
| RAM | 4 GB (max) |
| ROM | eMMC 32 GB (max) |
| Ethernet | 2 x 10/100 Mbps, 2 x 10/100/1000 Mbps, ESD Level 3, EFT Level 3 |
| RS485 | 11 channels (2 multiplexed with RS232), 3 kV isolation protection, ESD Level 3, EFT Level 3 |
| RS232 | 2 channels (multiplexed with RS485), 3 kV isolation protection, ESD Level 3, EFT Level 3 |
| DO | 6 channels, relay output, contact rating: 5 A 250 VAC, 5 A 30 VDC |
| DI | 8 channels, dry-contact inputs |
| CAN | 2 channels, 3 kV power isolation, ESD Level 3, EFT Level 3 |
| HDMI | 1 x standard HDMI 1.4, 1080P@60fps (up to 4K) |
| 4G | Models: EC200N, EC20, EC25; one SIM card slot |
| WIFI | STA and AP modes |
| USB Host | 2 channels, USB Host 2.0, ESD Level 3 |
| RTC | Onboard CR2032 battery |
| Hard Drive Storage | mSATA drive supported |
| Power IN | Rated DC 24 V, wide-range DC 9~36 V, with reverse-polarity and overcurrent protection. |
| Power-Loss Detection | The CPU detects external power loss; the supercapacitor supplies power for another 5 s |
| Reset Key | Reset button |
| Key | User-defined button |
| LED 1 | 2 LEDs indicating system power-on and normal operation |
| LED 2 | 4 LEDs: 2 CAN communication indicators and 2 user-defined indicators |
| DEBUG | 1 x RS232-level DEBUG port with the same pinout as a Cisco switch console port |
| Operating Environment | Humidity: 5%~95%, non-condensing. Operating temperature: -40 °C~+75 °C; storage temperature: -40 °C~+85 °C |
| Dimensions (with mounting ears) | 214mm_140mm_45mm (L_W_H) |


### 1.4 Mechanical Dimensions

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/005.png)

Overall Dimensions

### 1.5 Software Specifications
#### 1.5.1 Linux 4.19.206 System Software Resource Features
| Device | Driver source location in the kernel | Device Name |
| --- | --- | --- |
| LCD Backlight Driver | drivers/video/backlight/pwm_bl.c | /sys/class/backlight |
| USB Flash Drive | drivers/usb/storage/ |  |
| USB Mouse | drivers/hid/usbhid/ | /dev/input/mice |
| Ethernet | drivers/net/ethernet/stmicro/stmmac |  |
| SD/microSD Card Driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk1pX |
| eMMC Driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk2pX |
| OV13850 | drivers/media/i2c/ov13850.c | /dev/videoX |
| LCD Controller | drivers/gpu/drm/rockchip/rockchip_drm_vop.c |  |
| MIPI CSI | drivers/phy/rockchip/phy-rockchip-mipi-rx.c |  |
| MIPI DSI | drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c |  |
| LCD Touch Driver | drivers/input/touchscreen/gt9xx/*   drivers/input/touchscreen/edt-ft5x06.c | /dev/input/eventX |
| RTC Driver | drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c | /dev/rtc0 |
| Serial Port | drivers/tty/serial/8250/8250_dw.c | /dev/ttySX |
| Button Driver | drivers/input/keyboard/adc-keys.c | /dev/input/eventX |
| LED | drivers/leds/leds-gpio.c |  |
| I2S | sound/soc/rockchip/rockchip_i2s.c |  |
| Audio Driver | sound/soc/codecs/rk817_codec.c | /dev/snd/ |
| PMIC | drivers/mfd/rk808.c |  |
| PCIE | drivers/pci/controller/pcie-rockchip.c |  |
| Watchdog | drivers/watchdog/dw_wdt.c |  |
| SPI | drivers/spi/spi-rockchip.c |  |
| PWM | drivers/video/backlight/pwm_bl.c |  |


#### 1.5.2 eMMC Resource Allocation
| Partition Index | Name | Offset/block | Size/block | Content |
| --- | --- | --- | --- | --- |
| N/A | loader | 0x00000000 | 0x00003fc0 | MiniLoaderAll.bin |
| 1 | uboot | 0x00004000 | 0x00002000 | uboot.img |
| 2 | misc | 0x00006000 | 0x00002000 | misc.img |
| 3 | boot | 0x00008000 | 0x00010000 | boot.img |
| 4 | recovery | 0x00018000 | 0x00010000 | recovery.img |
| 5 | backup | 0x00028000 | 0x00010000 | backup.img |
| 6 | rootfs | 0x00038000 | 0x01cb8f00 | rootfs.img |


### 1.6 Hardware Interface and Software Mapping
| Hardware Terminal | Device Accessed by Application | Remarks |
| --- | --- | --- |
| DEBUG | /dev/ttyFIQ0 | RS232_TXD2 debug serial port |
| DI1 | /sys/class/gpio-input/DIN1/state | Input |
| DI2 | /sys/class/gpio-input/DIN2/state | Input |
| DI3 | /sys/class/gpio-input/DIN3/state | Input |
| DI4 | /sys/class/gpio-input/DIN4/state | Input |
| DI5 | /sys/class/gpio-input/DIN5/state | Input |
| DI6 | /sys/class/gpio-input/DIN6/state | Input |
| DI7 | /sys/class/gpio-input/DIN7/state | Input |
| DI8 | /sys/class/gpio-input/DIN8/state | Input |
| Key | /sys/class/gpio-input/FWn/state | User-defined input |
| POW_DET | /sys/class/gpio-input/POW_DET/state | System power-loss detection |
| DO1 | /sys/class/leds/do1/brightness | Output |
| DO2 | /sys/class/leds/do2/brightness | Output |
| DO3 | /sys/class/leds/do3/brightness | Output |
| DO4 | /sys/class/leds/do4/brightness | Output |
| DO5 | /sys/class/leds/do5/brightness | Output |
| DO6 | /sys/class/leds/do6/brightness | Output |
| LED1 | /sys/class/leds/can0/brightness | User-defined LED |
| LED2 | /sys/class/leds/can1/brightness | User-defined LED |
| LED3 | /sys/class/leds/led1/brightness | User-defined LED |
| LED4 | /sys/class/leds/led2/brightness | User-defined LED |
| CAN1_L/CAN1_H | can0 | CAN interface |
| CAN2_L/CAN2_H | can1 | CAN interface |
| RS485_1A/RS485_1B | /dev/ttyS9 | RS485 interface |
| RS485_2A/RS485_2B | /dev/ttyS5 | RS485 interface |
| RS485_3A/RS485_3B | /dev/ttyS3 | RS485 interface |
| RS485_4A/RS485_4B | /dev/ttyS4 | RS485 interface |
| RS485_5A/RS485_5B | /dev/ttyS7 | RS485 interface |
| RS485_6A/RS485_6B | /dev/ttyS8 | RS485 interface |
| RS485_7A/RS485_7B | /dev/ttyS0 | RS485 interface |
| RS485_8A/RS485_8B | /dev/ttyXRUSB1 | RS485 interface |
| RS485_9A/RS485_9B | /dev/ttyXRUSB2 | RS485 interface |
| RS485_10/RS232_10 | /dev/ttyXRUSB3 | RS485/RS232 multiplexed interface |
| RS485_11/RS232_11 | /dev/ttyXRUSB0 | RS485/RS232 multiplexed interface |
| ETH0(Gigabit) | eth0 | Wired Ethernet |
| ETH1(Gigabit) | eth1 | Wired Ethernet |
| ETH2(100 Mbps) | eth2 | Wired Ethernet |
| ETH3(100 Mbps) | eth3 | Wired Ethernet |
| USB flash drive | /dev/sdx | External storage |
| SATA | /dev/sdx | External storage |
| microSD card | /dev/mmcblk1 | External storage |


## 2. FCU2601 Embedded Control Unit Usage Notes
Download the software and hardware documentation and source code from the cloud drive link provided by Forlinx. The Linux kernel version is 4.19.206. For details, refer to the FCU2601 user documentation. All directories in this manual are relative to the root of the FCU2601 user documentation.

### 2.1 Power Supply
This product has a rated DC 24 V input and supports a wide DC 9~36 V input range.

| Board Photo | Description |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/006.png) |  |


Power supply and system status are shown by the power indicator LEDs, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/007.png)

When the FCU2601 is powered on, the red PWR LED stays solid, indicating the Embedded Control Unit's power status;

The RUN LED blinks as a heartbeat to indicate the Embedded Control Unit's system status.

Measured power consumption of the FCU2601 is shown below:

| No. | Test Item | Base Version Power (W) | Extended Version Power (W) |
| --- | --- | --- | --- |
| 1 | No-load startup peak power | 6.48 | 8.4 |
| 2 | No-load standby power | 4.56 | 6 |
| 3 | CPU stress + memory + eMMC read/write stress test + all interfaces running | 5.52 | 7.92 |
| 4 | CPU stress + memory + eMMC read/write stress test + all interfaces running + mSATA SSD read/write | 6.96 | 9.84 |
| 5 | CPU stress + memory + eMMC read/write stress test + all interfaces running + 4G running + mSATA SSD read/write + HDMI display | 11.52 | 14.4 |

**Note: The above figures were measured under normal operating conditions. 4G signal strength, the mSATA SSD manufacturer and specifications, and connected USB devices all affect overall power consumption.**

### 2.2 User Login
The FCU2601 supports two login methods: debug serial port and network. This manual covers both.

**Note:**

- **Serial terminal login for the forlinx user: username forlinx, password forlinx;**
- **Serial terminal login for the root user: username root, password root;**
- **Serial settings: baud rate 115200, 8 data bits, 1 stop bit, no parity, no flow control;**
- **Hardware requirement: An RJ45-to-RS232 debug serial cable conforming to the Cisco switch console port standard, used to connect the PC to the Embedded Control Unit;**
- **Software requirement: Install a terminal emulator on the Windows PC. Any serial terminal program you are familiar with will work.**

#### 2.2.1 Debug Serial Port
The FCU2601 debug serial port is labeled Debug on the panel, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/008.png)

The Debug serial port is for viewing board runtime information during debugging only; do not use it for other purposes.

- Connect the PC to the FCU2601's Debug port using an RJ45-to-RS232 debug serial cable that conforms to the Cisco switch console port standard.

- Open a terminal emulator on the Windows 10 PC (PuTTY is supplied in the Tools folder of the materials package) and configure it as follows:

Select the serial port number based on your connection, then configure the related settings in the [Serial Port] menu on the left.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/009.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/010.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/011.png)

**Note: Set the baud rate to 115200, 8 data bits, no parity, 1 stop bit, and no flow control. After configuring, power on the FCU2601 to see the debug messages.**

```plain
DDR V1.15 ec2fae0c96 huan.he 22/11/08-20:06:42
In
ddrconfig:15
DDR4, 324MHz
BW=32 Col=10 Bk=4 BG=2 CS0 Row=16 CS=1 Die BW=16 Size=2048MB
tdqss: cs0 dqs0: 144ps, dqs1: 144ps, dqs2: 72ps, dqs3: 48ps,

change to: 324MHz
clk skew:0x8d
PHY drv:clk:37,ca:37,DQ:37,odt:0
vrefinner:50%, vrefout:50%
dram drv:34,odt:0

… …
```

Log in with a user account to reach the command line;

```plain
[  OK  ] Started Authorization Manager.
[  OK  ] Started Accounts Service.
[  OK  ] Finished Remove Stale Onli…ext4 Metadata Check Snapshots.
[  OK  ] Started Hostname Service.
[  OK  ] Started Disk Manager.
[  OK  ] Started Light Display Manager.
         Starting Network Manager Script Dispatcher Service...
[  OK  ] Started Network Manager Script Dispatcher Service.
[  OK  ] Started Dispatcher daemon for systemd-networkd.
[  OK  ] Started Bluetooth management mechanism.
[  OK  ] Reached target Multi-User System.
[  OK  ] Reached target Graphical Interface.
         Starting Update UTMP about System Runlevel Changes...
[  OK  ] Finished Update UTMP about System Runlevel Changes.

Ubuntu 20.04.4 LTS FCU2601 ttyFIQ0

FCU2601 login:
```

#### 2.2.2 Network Login
In addition to the debug serial port, the FCU2601 supports SSH network login to the Embedded Control Unit and FTP file transfer. For convenience, eth0 defaults to 192.168.0.123 on boot.

Connect the Embedded Control Unit and the PC to the same switch, or connect them directly with an Ethernet cable, and set the PC to the 192.168.0.0 subnet.

Then run ssh forlinx@192.168.0.123 in the Windows command prompt with password forlinx. SSH does not allow root login for security reasons; use the su command to switch to root.

**Note: Press Win+R, type cmd, and press Enter to open the Windows command prompt.**

```plain
Microsoft Windows [Version 10.0.18362.720]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Users\chaill>ssh forlinx@192.168.0.123
forlinx@192.168.0.123's password:
Welcome to Ubuntu 20.04.4 LTS (GNU/Linux 4.19.206 aarch64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

This system has been minimized by removing packages and content that are
not required on a system that users do not log into.

To restore this content, you can run the 'unminimize' command.
Last login: Mon Oct 23 13:43:58 2023 from 192.168.0.110
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

forlinx@FCU2601:~$
forlinx@FCU2601:~$ su
Password:
root@FCU2601:~#
```

## 3. FCU2601 Features
### 3.1 DI, DO, Buttons, LEDs, and Power-Loss Detection
#### 3.1.1 Interface Description
The interfaces for DI, DO, the user-defined Key button, and the user-defined LEDs (LED1-4) are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/012.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/013.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/014.png)

The digital input interfaces are high by default; grounding an input drives it low.

#### 3.1.2 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by Application | Remarks |
| --- | --- | --- |
| DI1 | /sys/class/gpio-input/DIN1/state | Input |
| DI2 | /sys/class/gpio-input/DIN2/state | Input |
| DI3 | /sys/class/gpio-input/DIN3/state | Input |
| DI4 | /sys/class/gpio-input/DIN4/state | Input |
| DI5 | /sys/class/gpio-input/DIN5/state | Input |
| DI6 | /sys/class/gpio-input/DIN6/state | Input |
| DI7 | /sys/class/gpio-input/DIN7/state | Input |
| DI8 | /sys/class/gpio-input/DIN8/state | Input |
| Key | /sys/class/gpio-input/FWn/state | Input |
| DO1 | /sys/class/leds/do1/brightness | Output |
| DO2 | /sys/class/leds/do2/brightness | Output |
| DO3 | /sys/class/leds/do3/brightness | Output |
| DO4 | /sys/class/leds/do4/brightness | Output |
| DO5 | /sys/class/leds/do5/brightness | Output |
| DO6 | /sys/class/leds/do6/brightness | Output |
| LED1 | /sys/class/leds/can0/brightness | User-defined LED |
| LED2 | /sys/class/leds/can1/brightness | User-defined LED |
| LED3 | /sys/class/leds/led1/brightness | User-defined LED |
| LED4 | /sys/class/leds/led2/brightness | User-defined LED |
| POW_DET | /sys/class/gpio-input/POW_DET/state | System power-loss detection |

**Note: LED1 and LED2 are configured by default as the CAN0 and CAN1 data transmit/receive and link status indicators. You can repurpose them in your application as needed, but doing so disables the CAN status indication.**

#### 3.1.3 Command-Line Test
DO and LED Test

DO relay control, using DO1 as an example

```plain
root@FCU2601:~# echo 0 > /sys/class/leds/do1/brightness
root@FCU2601:~# echo 1 > /sys/class/leds/do1/brightness
```

These commands open and close the DO1 relay. Writing 1 closes it.

Turning an LED on and off, using LED3 as an example

```plain
root@FCU2601:~# echo 1 > /sys/class/leds/led1/brightness
root@FCU2601:~# echo 0 > /sys/class/leds/led1/brightness
```

These commands turn the USER LED on and off. Writing 1 turns it on.

DI Input Test

First check the DI state, using DI1 as an example

```plain
root@FCU2601:~# cat /sys/class/gpio-input/DIN1/state
1
```

DI1 reads high. Short the DI1 pin to ground and run the command again:

```plain
root@FCU2601:~# cat /sys/class/gpio-input/DIN1/state
0
```

Both DIs now read low.

User-Defined Key Test

First check the Key state:

```plain
root@FCU2601:~# cat /sys/class/gpio-input/FWn/state
1
```

Key reads high, meaning it is not pressed. Hold the Key down and run the command again:

```plain
root@FCU2601:~# cat /sys/class/gpio-input/FWn/state
0
```

The USER key now reads low, meaning it is pressed.

System Power-Loss Test

First check the POW_DET state:

```plain
root@FCU2601:~# cat /sys/class/gpio-input/POW_DET/state
0
```

POW_DET reads low, meaning the system still has power. Disconnect the power supply and run the command again:

```plain
root@FCU2601:~# cat /sys/class/gpio-input/POW_DET/state
1
```

POW_DET now reads high, meaning the system has lost power. Handle this promptly in your application.

### 3.2 Serial Port Test
#### 3.2.1 Interface Description
**Board Photo:**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/015.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/016.png)

**Note: **

- **A10B10 and T10R10 are multiplexed and cannot be used at the same time;**
- **A10B10 and T10R10 are multiplexed and cannot be used at the same time;**
- **The RS485 interfaces have no internal termination resistors. Add external ones if needed.**

#### 3.2.2 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by Applications | Remarks |
| --- | --- | --- |
| RS485_A1/RS485_B1 | /dev/ttyS9 | RS485_1 interface |
| RS485_A2/RS485_B2 | /dev/ttyS5 | RS485_2 interface |
| RS485_A3/RS485_B3 | /dev/ttyS3 | RS485_3 interface |
| RS485_A4/RS485_B4 | /dev/ttyS4 | RS485_4 interface |
| RS485_A5/RS485_B5 | /dev/ttyS7 | RS485_5 interface |
| RS485_A6/RS485_B6 | /dev/ttyS8 | RS485_6 interface |
| RS485_A7/RS485_B7 | /dev/ttyS0 | RS485_7 interface |
| RS485_A8/RS485_B8 | /dev/ttyXRUSB1 | RS485_8 interface |
| RS485_A9/RS485_B9 | /dev/ttyXRUSB2 | RS485_9 interface |
| RS485_A10/RS485_B10   RS232_T10/RS232_R10 | /dev/ttyXRUSB3 | RS485_10 and RS232_10 multiplexed interface |
| RS485_A11/RS232_A11   RS232_T11/RS232_R11 | /dev/ttyXRUSB0 | RS485_11 and RS232_11 multiplexed interface |


#### 3.2.3 Command-Line Test
This test uses RS485_1 as an example; to test another RS485 interface, just change the device node name accordingly.

This test communicates with a PC. Connect an RS232-to-RS485 module to the RS485_1 interface on the FCU2601 as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/017.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/018.png)

Open putty.exe on the PC, configure the serial port and baud rate, then start the session:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/019.png)  

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/020.png)

RS485_1 Transmit Test:

In the FCU2601 terminal, run the following command to set the RS485_1 baud rate to 115200.

```plain
root@FCU2601:~# stty -F /dev/ttyS9 raw speed 115200
```

Send data on RS485_1:

```plain
root@FCU2601:~# echo "forlinx_485_test" > /dev/ttyS9
```

RS485_1 sends "forlinx_485_test" to the PC at 115200 baud, and putty on the PC receives it.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/021.png)

RS485_1 Receive Test:

Receive data on RS485_1:

```plain
root@FCU2601:~# cat /dev/ttyS9
```

Type data into putty on the PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/022.png)

The PC sends "abcdefg" at 115200 baud, and the FCU2601 receives it on RS485_1:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/023.png)

### 3.3 System Reset
Press the Reset button to reboot the system immediately. The debug serial port prints the boot messages.

The Reset button is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/024.png)

### 3.4 USB Interface Test
#### 3.4.1 USB Host Storage Test
The USB connector is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/025.png)

Use a USB flash drive to test the USB port. Insert it into a USB port on the FCU2601 Embedded Control Unit and check where it mounts:

```plain
root@FCU2601:~# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       15G  5.3G  8.2G  40% /
devtmpfs       devtmpfs  978M     0  978M   0% /dev
tmpfs          tmpfs     986M     0  986M   0% /dev/shm
tmpfs          tmpfs     198M  1.8M  196M   1% /run
tmpfs          tmpfs     5.0M  4.0K  5.0M   1% /run/lock
tmpfs          tmpfs     986M     0  986M   0% /sys/fs/cgroup
tmpfs          tmpfs     986M  4.0K  986M   1% /tmp
tmpfs          tmpfs     198M  8.0K  198M   1% /run/user/111
tmpfs          tmpfs     198M     0  198M   0% /run/user/0
/dev/sda1      vfat       15G  618M   15G   5% /run/media/sda1

root@FCU2601:~# ls -l /run/media/
total 8
drwxrwx--- 14 root disk 8192 Jan  1  1970 sda1
```

The USB drive is mounted at /run/media/sda1.

Write a file to the USB drive. The command below writes 1 to test.txt:

```plain
root@FCU2601:~# echo 1 > /run/media/sda1/test.txt
root@FCU2601:~# sync
```

Read test.txt from the USB drive with the following command:

```plain
root@freescale /$ cat /run/media/sda1/test.txt
1
```

It reads back the 1 written earlier.

If the USB drive auto-mounts under /run/media/sdxx and you can read from and write to it, the USB port works.

### 3.5 Wired Ethernet Test
The FCU2601 provides two RJ45 10/100/1000M auto-negotiating Ethernet ports and two RJ45 10/100M auto-negotiating Ethernet ports, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/026.png)

#### 3.5.1 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by Applications | Remarks |
| --- | --- | --- |
| ETH0 | eth0 | Gigabit wired network |
| ETH1 | eth1 | Gigabit wired network |
| ETH2 | eth2 | 100M wired network |
| ETH3 | eth3 | 100M wired network |

#### 3.5.2 Ethernet Test
On the FCU2601, the default network rules are configured by editing files under /etc/systemd/network. Modify them as needed.

```plain
root@FCU2601:~# cat /etc/netplan/01-netcfg.yaml
network:
        ethernets:
                eth0:
                        addresses: [192.168.0.123/24]
                        gateway4: 192.168.0.1
                        nameservers:
                                addresses: [114.114.114.114,8.8.8.8]
                eth1:
                        dhcp4: true
        version: 2
```

To test NET0, connect the PC to the FCU2601's NET0 port with an Ethernet cable.

From a cmd window on the PC, start iperf3 (Tools\iperf-3.1.3-win64\iperf3.exe in the supplied materials) in listen mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/027.png)

Enter the following command in the FCU2601 terminal to run the test:

```plain
root@FCU2601:~# iperf3 -c 192.168.0.110 -i 5 -t 60
```

The output on the PC is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/028.png)

The FCU2601 output is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/029.png)

### 3.6 4G Module Test
The FCU2601 supports three 4G modules: Quectel EC200N, EC20, and EC25. Run the test with the module you selected.

The 4G and 5G modules use the following device nodes:

| Device Model | Node Name |
| --- | --- |
| Quectel EC20 Module | usb0 |
| Quectel EC200N-CN Module | usb0 |
| Quectel EC25-EUX Module | usb0 |


The 4G module comes with one antenna, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/030.png)

The 4G module uses a standard push-push SIM card slot; press the card to eject it, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/031.png)

#### 3.6.1 4G Module Detection

**Quectel EC20 Module**

Enter the following command on the FCU2601 console to check whether the Quectel EC20 module is detected.

```plain
root@FCU2601:~# lsusb
Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 007 Device 002: ID 04e2:1414 Exar Corp.
Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 005 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 004: ID 2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem
Bus 001 Device 003: ID 05e3:0747 Genesys Logic, Inc.
Bus 001 Device 002: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Use ifconfig to confirm that the Quectel EC20 module creates the node usb0.

**Quectel EC200N-CN Module**

Enter the following command on the FCU2601 console to check whether the Quectel EC200N-CN module is detected.

```plain
root@FCU2601:~# lsusb
Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 007 Device 002: ID 04e2:1414 Exar Corp.
Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 005 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 004: ID 2c7c:6002 Quectel Wireless Solutions Co., Ltd.
Bus 001 Device 003: ID 05e3:0747 Genesys Logic, Inc.
Bus 001 Device 002: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
Use ifconfig to confirm that the Quectel EC200N-CN module creates the node usb0.

**Quectel EC25-EUX Module**

Enter the following command on the FCU2601 console to check whether the Quectel EC25-EUX module is detected.

```plain
root@FCU2601:~# lsusb
Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 007 Device 002: ID 04e2:1414 Exar Corp.
Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 005 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 002: ID 0b95:772b ASIX Electronics Corp. AX88772B
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 004: ID 2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem
Bus 001 Device 003: ID 05e3:0747 Genesys Logic, Inc.
Bus 001 Device 002: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Use ifconfig to confirm that the Quectel EC25-EUX module creates the node usb0.

#### 3.6.2 4G Internet Access Test

**Quectel EC20 Module**

With a China Mobile SIM card inserted, test whether the 4G connection reaches the Internet:

```plain
root@FCU2601:~# quectel-CM &
[1] 595
root@FCU2601:~# [10-24_15:06:14:305] QConnectManager_Linux_V1.6.4
[10-24_15:06:14:307] Find /sys/bus/usb/devices/1-1.3 idVendor=0x2c7c idProduct=0x125, bus=0x001, dev=0x004
[10-24_15:06:14:314] Auto find qmichannel = /dev/qcqmi0
[10-24_15:06:14:319] Auto find usbnet_adapter = usb0
[10-24_15:06:14:323] netcard driver = GobiNet, driver version = 22-Aug-2005
[10-24_15:06:14:330] Modem works in QMI mode
[10-24_15:06:14:378] Get clientWDS = 7
[10-24_15:06:14:411] Get clientDMS = 8
[10-24_15:06:14:443] Get clientNAS = 9
[10-24_15:06:14:475] Get clientUIM = 10
[10-24_15:06:14:506] Get clientWDA = 11
[10-24_15:06:14:538] requestBaseBandVersion EC20CEHDLGR06A07M1G
[10-24_15:06:14:667] requestGetSIMStatus SIMStatus: SIM_READY
[10-24_15:06:14:699] requestGetProfile[1] cmnet///1/IPV4
[10-24_15:06:14:731] requestRegistrationState2 MCC: 460, MNC: 0, PS: Attached, DataCap: LTE
[10-24_15:06:14:763] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[10-24_15:06:14:765] ifconfig usb0 0.0.0.0
[10-24_15:06:14:788] ifconfig usb0 down
[10-24_15:06:15:115] requestSetupDataCall WdsConnectionIPv4Handle: 0x86d9b2d0
[10-24_15:06:15:275] ifconfig usb0 up
[10-24_15:06:15:290] dhclient -4 -d --no-pid usb0
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/usb0/aa:5b:9d:b1:8c:3b
Sending on   LPF/usb0/aa:5b:9d:b1:8c:3b
Sending on   Socket/fallback
DHCPDISCOVER on usb0 to 255.255.255.255 port 67 interval 3 (xid=0x20bfd354)
DHCPOFFER of 10.69.11.115 from 10.69.11.116
DHCPREQUEST for 10.69.11.115 on usb0 to 255.255.255.255 port 67 (xid=0x54d3bf20)
DHCPACK of 10.69.11.115 from 10.69.11.116 (xid=0x20bfd354)
bound to 10.69.11.115 -- renewal in 2902 seconds.
```

On success, an IP address is assigned automatically. Use ping to verify connectivity.

```plain
root@FCU2601:~# ping www.baidu.com -I usb0 -c 5
PING www.a.shifen.com (39.156.66.14) from 10.66.252.229 usb0: 56(84) bytes of data.
64 bytes from 39.156.66.14: icmp_seq=1 ttl=51 time=62.5 ms
64 bytes from 39.156.66.14: icmp_seq=2 ttl=51 time=44.3 ms
64 bytes from 39.156.66.14: icmp_seq=3 ttl=51 time=60.4 ms
64 bytes from 39.156.66.14: icmp_seq=4 ttl=51 time=67.0 ms
64 bytes from 39.156.66.14: icmp_seq=5 ttl=51 time=63.2 ms

--- www.a.shifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4007ms
rtt min/avg/max/mdev = 44.250/59.464/66.977/7.896 ms
```

**Quectel EC200N-CN Module**

With a China Mobile SIM card inserted, test whether the 4G connection reaches the Internet:

```plain
root@FCU2601:~# quectel-CM &
[1] 582
root@FCU2601:~# [10-24_15:05:40:459] QConnectManager_Linux_V1.6.4
[10-24_15:05:40:462] Find /sys/bus/usb/devices/1-1.3 idVendor=0x2c7c idProduct=0x6002, bus=0x001, dev=0x004
[10-24_15:05:40:469] Auto find qmichannel = /dev/ttyUSB1
[10-24_15:05:40:473] Auto find usbnet_adapter = usb0
[10-24_15:05:40:478] netcard driver = cdc_ether, driver version = 22-Aug-2005
[10-24_15:05:40:485] Modem works in ECM_RNDIS_NCM mode
[10-24_15:05:40:509] atc_fd = 7
[10-24_15:05:40:509] AT> ATE0Q0V1
[10-24_15:05:40:511] AT< ATE0Q0V1
[10-24_15:05:40:512] AT< OK
[10-24_15:05:41:515] AT> AT+QCFG="usbnet"
[10-24_15:05:41:518] AT< +QCFG: "usbnet",1
[10-24_15:05:41:518] AT< OK
[10-24_15:05:41:520] AT> AT+QNETDEVCTL=?
[10-24_15:05:41:525] AT< +QNETDEVCTL: (0-3),(1-15),(0-1)
[10-24_15:05:41:529] AT< OK
[10-24_15:05:41:531] AT> AT+CGREG=2
[10-24_15:05:41:535] AT< OK
[10-24_15:05:41:537] AT> AT+CEREG=2
[10-24_15:05:41:541] AT< OK
[10-24_15:05:41:543] AT> AT+C5GREG=2
[10-24_15:05:41:547] AT< ERROR
[10-24_15:05:41:549] AT> AT+QNETDEVSTATUS=?
[10-24_15:05:41:554] AT< ERROR
[10-24_15:05:41:555] AT> AT+QCFG="NAT"
[10-24_15:05:41:560] AT< +QCFG: "nat",1
[10-24_15:05:41:562] AT< OK
[10-24_15:05:41:565] AT> AT+CGMR
[10-24_15:05:41:569] AT< EC200NCNAAR03A05M08
[10-24_15:05:41:572] AT< OK
[10-24_15:05:41:574] AT> AT+CPIN?
[10-24_15:05:41:579] AT< +CPIN: READY
[10-24_15:05:41:581] AT< OK
[10-24_15:05:41:583] AT> AT+QCCID
[10-24_15:05:41:588] AT< +QCCID: 898600C3031520617197
[10-24_15:05:41:591] AT< OK
[10-24_15:05:41:594] requestGetICCID 898600C3031520617197
[10-24_15:05:41:599] AT> AT+CIMI
[10-24_15:05:41:603] AT< 460022329567697
[10-24_15:05:41:605] AT< OK
[10-24_15:05:41:608] requestGetIMSI 460022329567697
[10-24_15:05:41:612] AT> AT+QICSGP=1
[10-24_15:05:41:617] AT< +QICSGP: 3,"","","",0
[10-24_15:05:41:620] AT< OK
[10-24_15:05:41:622] requestGetProfile[1] ///0/IPV4V6
[10-24_15:05:41:627] AT> AT+COPS=3,0;+COPS?;+COPS=3,1;+COPS?;+COPS=3,2;+COPS?
[10-24_15:05:41:636] AT< +COPS: 0,0,"CHINA MOBILE",7
[10-24_15:05:41:639] AT< +COPS: 0,1,"CMCC",7
[10-24_15:05:41:642] AT< +COPS: 0,2,"46000",7
[10-24_15:05:41:647] AT< OK
[10-24_15:05:41:649] AT> AT+CEREG?
[10-24_15:05:41:653] AT< +CEREG: 2,1,"3193","7F3C741",7
[10-24_15:05:41:657] AT< OK
[10-24_15:05:41:660] AT> at+cops?
[10-24_15:05:41:664] AT< +COPS: 0,2,"46000",7
[10-24_15:05:41:667] AT< OK
[10-24_15:05:41:669] AT> at+qeng="servingcell"
[10-24_15:05:41:685] AT< +QENG: "servingcell","NOCONN","LTE","FDD",460,00,7F3C741,220,1300,3,5,5,3193,-85,-12,-72,3,34
[10-24_15:05:41:689] AT< OK
[10-24_15:05:41:692] AT> AT+QNETDEVCTL?
[10-24_15:05:41:697] AT< +QNETDEVCTL: 0,0,0,0
[10-24_15:05:41:700] AT< OK
[10-24_15:05:41:702] ifconfig usb0 0.0.0.0
[10-24_15:05:41:717] ifconfig usb0 down
[10-24_15:05:41:738] AT> AT+CGACT?
[10-24_15:05:41:741] AT< +CGACT: 1,1
[10-24_15:05:41:742] AT< +CGACT: 8,1
[10-24_15:05:41:743] AT< OK
[10-24_15:05:41:745] AT> AT+QNETDEVCTL=1,1,1
[10-24_15:05:41:751] AT< OK
[10-24_15:05:41:752] AT> AT+CGPADDR=1
[10-24_15:05:41:752] AT< +QNETDEVSTATUS: 1
[10-24_15:05:41:759] AT< +CGPADDR: 1,"10.86.56.139","::0:0:0:0:0:0:0"
[10-24_15:05:41:765] AT< OK
[10-24_15:05:41:767] requestGetIPAddress 10.86.56.139
[10-24_15:05:41:772] AT> at+cops?
[10-24_15:05:41:776] AT< +COPS: 0,2,"46000",7
[10-24_15:05:41:779] AT< OK
[10-24_15:05:41:782] AT> at+qeng="servingcell"
[10-24_15:05:41:797] AT< +QENG: "servingcell","NOCONN","LTE","FDD",460,00,7F3C741,220,1300,3,5,5,3193,-85,-12,-72,3,34
[10-24_15:05:41:802] AT< OK
[10-24_15:05:41:804] AT> AT+QNETDEVCTL?
[10-24_15:05:41:810] AT< +QNETDEVCTL: 1,1,1,1
[10-24_15:05:41:812] AT< OK
[10-24_15:05:41:814] AT> AT+CGACT?
[10-24_15:05:41:820] AT< +CGACT: 1,1
[10-24_15:05:41:821] AT< +CGACT: 8,1
[10-24_15:05:41:824] AT< OK
[10-24_15:05:41:827] ifconfig usb0 up
[10-24_15:05:41:842] dhclient -4 -d --no-pid usb0
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/usb0/ae:0c:29:a3:9b:6d
Sending on   LPF/usb0/ae:0c:29:a3:9b:6d
Sending on   Socket/fallback
DHCPREQUEST for 10.66.252.229 on usb0 to 255.255.255.255 port 67 (xid=0x42c46ce0)
DHCPNAK from 169.254.0.1 (xid=0xe06cc442)
DHCPDISCOVER on usb0 to 255.255.255.255 port 67 interval 3 (xid=0xa759ce5d)
[10-24_15:05:42:842] AT> at+cops?
[10-24_15:05:42:853] AT< +COPS: 0,2,"46000",7
[10-24_15:05:42:853] AT< OK
[10-24_15:05:42:854] AT> at+qeng="servingcell"
[10-24_15:05:42:863] AT< +QENG: "servingcell","NOCONN","LTE","FDD",460,00,7F3C741,220,1300,3,5,5,3193,-85,-12,-72,2,34
[10-24_15:05:42:869] AT< OK
[10-24_15:05:42:871] AT> AT+QNETDEVCTL?
[10-24_15:05:42:877] AT< +QNETDEVCTL: 1,1,1,1
[10-24_15:05:42:879] AT< OK
[10-24_15:05:42:882] AT> AT+CGACT?
[10-24_15:05:42:888] AT< +CGACT: 1,1
[10-24_15:05:42:888] AT< +CGACT: 8,1
[10-24_15:05:42:891] AT< OK
DHCPDISCOVER on usb0 to 255.255.255.255 port 67 interval 6 (xid=0xa759ce5d)
DHCPOFFER of 10.86.56.139 from 169.254.0.1
DHCPREQUEST for 10.86.56.139 on usb0 to 255.255.255.255 port 67 (xid=0x5dce59a7)
DHCPACK of 10.86.56.139 from 169.254.0.1 (xid=0xa759ce5d)
bound to 10.86.56.139 -- renewal in 37550 seconds.
```

Once connected, an IP address is obtained automatically. Run a ping test to verify network connectivity.

```plain
root@FCU2601:~# ping www.baidu.com -I usb0 -c 5
PING www.wshifen.com (103.235.46.40) from 10.86.56.139 usb0: 56(84) bytes of data.
64 bytes from 103.235.46.40: icmp_seq=1 ttl=45 time=93.3 ms
64 bytes from 103.235.46.40: icmp_seq=2 ttl=45 time=122 ms
64 bytes from 103.235.46.40: icmp_seq=3 ttl=45 time=187 ms
64 bytes from 103.235.46.40: icmp_seq=4 ttl=45 time=122 ms
64 bytes from 103.235.46.40: icmp_seq=5 ttl=45 time=102 ms

--- www.wshifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4002ms
rtt min/avg/max/mdev = 93.250/125.357/186.645/32.666 ms
```

**Quectel EC25-EUX module**

Insert a China Mobile SIM card to test 4G Internet access and check the external network connection:

```plain
root@FCU2601:~# quectel-CM &
[1] 593
root@FCU2601:~# [10-24_15:42:39:849] QConnectManager_Linux_V1.6.4
[10-24_15:42:39:851] Find /sys/bus/usb/devices/1-1.3 idVendor=0x2c7c idProduct=0x125, bus=0x001, dev=0x004
[10-24_15:42:39:859] Auto find qmichannel = /dev/qcqmi0
[10-24_15:42:39:863] Auto find usbnet_adapter = usb0
[10-24_15:42:39:868] netcard driver = GobiNet, driver version = 22-Aug-2005
[10-24_15:42:39:875] Modem works in QMI mode
[10-24_15:42:39:918] Get clientWDS = 7
[10-24_15:42:39:950] Get clientDMS = 8
[10-24_15:42:39:982] Get clientNAS = 9
[10-24_15:42:40:014] Get clientUIM = 10
[10-24_15:42:40:046] Get clientWDA = 11
[10-24_15:42:40:078] requestBaseBandVersion EC25EUXGAR08A15M1G
[10-24_15:42:40:206] requestGetSIMStatus SIMStatus: SIM_READY
[10-24_15:42:40:239] requestGetProfile[1] ///0/IPV4V6
[10-24_15:42:40:270] requestRegistrationState2 MCC: 460, MNC: 0, PS: Attached, DataCap: LTE
[10-24_15:42:40:302] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[10-24_15:42:40:304] ifconfig usb0 0.0.0.0
[10-24_15:42:40:324] ifconfig usb0 down
[10-24_15:42:40:398] requestSetupDataCall WdsConnectionIPv4Handle: 0x86e79670
[10-24_15:42:40:558] ifconfig usb0 up
[10-24_15:42:40:578] dhclient -4 -d --no-pid usb0
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/usb0/c6:31:a4:62:08:a8
Sending on   LPF/usb0/c6:31:a4:62:08:a8
Sending on   Socket/fallback
DHCPREQUEST for 10.86.56.139 on usb0 to 255.255.255.255 port 67 (xid=0x5bde611d)
DHCPNAK from 10.88.54.44 (xid=0x1d61de5b)
DHCPDISCOVER on usb0 to 255.255.255.255 port 67 interval 3 (xid=0xb79e1c09)
DHCPOFFER of 10.88.54.43 from 10.88.54.44
DHCPREQUEST for 10.88.54.43 on usb0 to 255.255.255.255 port 67 (xid=0x91c9eb7)
DHCPACK of 10.88.54.43 from 10.88.54.44 (xid=0xb79e1c09)
bound to 10.88.54.43 -- renewal in 2801 seconds.
[10-24_15:42:41:967] requestRegistrationState2 MCC: 460, MNC: 0, PS: Attached, DataCap: LTE
```

Once connected, an IP address is obtained automatically. Run a ping test to verify network connectivity.

```plain
root@FCU2601:~# ping www.baidu.com -I usb0 -c 5
PING www.wshifen.com (103.235.46.40) from 10.88.54.43 usb0: 56(84) bytes of data.
64 bytes from 103.235.46.40: icmp_seq=1 ttl=45 time=144 ms
64 bytes from 103.235.46.40: icmp_seq=2 ttl=45 time=111 ms
64 bytes from 103.235.46.40: icmp_seq=3 ttl=45 time=125 ms
64 bytes from 103.235.46.40: icmp_seq=4 ttl=45 time=110 ms
64 bytes from 103.235.46.40: icmp_seq=5 ttl=45 time=109 ms

--- www.wshifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 109.127/119.767/144.044/13.396 ms
```

### 3.7 Wi-Fi Test
The Wi-Fi antenna is labeled on the enclosure as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/032.png)

#### 3.7.1 On-board Wi-Fi Test
The FCU2601 ships with an onboard AW-AM510 Wi-Fi/Bluetooth combo module by default. This test covers its Wi-Fi function. The module appears in the system as the mlan0 node, which this test uses.

First, load the Wi-Fi module with the following command (it is loaded automatically at boot by default, so no action is needed).

```plain
root@FCU2601:~# modprobe moal
```

Check whether the module loaded successfully and view the Wi-Fi node it creates.

```plain
root@FCU2601:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal

root@FCU2601:~# ifconfig mlan0
mlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 10:68:38:29:66:17  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**STA mode test:**

In this mode the board acts as a station and connects to a wireless network. In this test the router uses WPA encryption, the Wi-Fi hotspot name is forlinx-wlan, and the password is fl03123102650. Network environments vary, so adjust these settings to match your setup:

For example:

```plain
root@FCU2601:~# nmcli dev wifi connect "forlinx-wlan" password "fl03123102650"
Device 'mlan0' successfully activated with '8b568cbb-157e-44e8-a5c5-4ac2faa8e430'.
```

The Wi-Fi connection is now established.

Test Wi-Fi by pinging a domain name or IP address.

```plain
root@FCU2601:~# ping www.baidu.com -c 3 -I mlan0
PING www.a.shifen.com (220.181.38.149) from 192.168.81.140 mlan0: 56(84) bytes of data.
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=1 ttl=54 time=13.8 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=2 ttl=54 time=13.2 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=3 ttl=54 time=15.1 ms

--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 13.176/14.026/15.071/0.785 ms
```

**AP mode test:**

**Note: Before running this test, make sure the Gigabit Ethernet interface eth0 is connected and the network is working.**

Check the driver load status, using the AW-AM510 module as an example.

```plain
root@FCU2601:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal
```

Create a hotspot

Wi-Fi hotspot name: OK3568_WIFI_AP

Password: 12345678

```plain
root@FCU2601:~# sysctl net.ipv4.ip_forward=1
root@FCU2601:~# echo 1 > /proc/sys/net/ipv4/ip_forward
root@FCU2601:~# iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
root@FCU2601:~# nmcli device wifi hotspot con-name 3568-test-AP ssid OK3568_WIFI_AP password 12345678 ifname uap0
Device 'uap0' successfully activated with 'ffb90f90-85bb-4859-9dab-b81bba2d2406'.
Hint: "nmcli dev wifi show-password" shows the Wi-Fi name and password.
```

After this, a phone can find the hotspot named OK3568_WIFI_AP and access the Internet after connecting.

### 3.8 Setting the Time (RTC)
This RTC test uses the date and hwclock tools to set the software and hardware clocks, then verifies that the software clock syncs from the RTC after the OS reboots. The FCU2601 comes with a coin-cell battery installed by default.

Check the system time

```plain
root@FCU2601:~# date
```

Set the time with the following command

```plain
root@FCU2601:~# date -s "2018-09-11 15:01:00"
Tue Sep 11 15:01:00 CST 2018
```

Check the hardware time

```plain
root@FCU2601:~# hwclock -w
```

hwclock -w — writes the system time into the RTC chip, making the RTC usable. Without this step, the system time will not be updated on the next boot.

Power off and reboot the system. The software and hardware clocks are now in sync, which confirms the RTC works properly.

```plain
root@FCU2601:~# date
Tue Sep 11 15:02:05 CTS 2018
```

**Note: The default time zone is TZ="Asia/Shanghai"**

### 3.9 mSATA SSD Interface Test
#### 3.9.1 Hard Disk Storage Test
FCU2601 provides one Mini-PCIe mSATA SSD slot (SATA protocol). Insert the mSATA SSD into the slot on the expansion board before power-on, then boot Linux and run lsblk to confirm the device is enumerated.

```plain
root@FCU2601:~# lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda            8:0    0 953.9G  0 disk
└─sda1         8:1    0 953.9G  0 part /run/media/sda1
mmcblk0      179:0    0  14.7G  0 disk
├─mmcblk0p1  179:1    0     4M  0 part
├─mmcblk0p2  179:2    0     4M  0 part
├─mmcblk0p3  179:3    0    32M  0 part
├─mmcblk0p4  179:4    0    32M  0 part
├─mmcblk0p5  179:5    0    32M  0 part
└─mmcblk0p6  179:6    0  14.4G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk
mmcblk0boot1 179:64   0     4M  1 disk
```

Check the default mount point of the drive.

```plain
root@FCU2601:~# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       15G  5.4G  8.1G  40% /
devtmpfs       devtmpfs  978M     0  978M   0% /dev
tmpfs          tmpfs     986M     0  986M   0% /dev/shm
tmpfs          tmpfs     198M  1.8M  196M   1% /run
tmpfs          tmpfs     5.0M  4.0K  5.0M   1% /run/lock
tmpfs          tmpfs     986M     0  986M   0% /sys/fs/cgroup
tmpfs          tmpfs     986M  4.0K  986M   1% /tmp
/dev/sda1      fuseblk   954G  129M  954G   1% /run/media/sda1
tmpfs          tmpfs     198M  8.0K  198M   1% /run/user/111
tmpfs          tmpfs     198M     0  198M   0% /run/user/0
```

The mSATA SSD is mounted at /run/media/sda1.

#### 3.9.2 Read/Write Speed Test
Write test:

```plain
root@FCU2601:~# dd if=/dev/zero of=/run/media/sda1/test.img bs=1024K count=2048 conv=fsync
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 8.82081 s, 243 MB/s
```

Read test:

```plain
root@FCU2601:~# dd if=/run/media/sda1/test.img of=/dev/null bs=1024K count=2048
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 5.28604 s, 406 MB/s
```

### 3.10 microSD Card Interface Test
#### 3.10.1 microSD Card Storage Test
FCU2601 provides one microSD card interface. Insert a microSD card into the slot on the carrier board and run lsblk to confirm the device is enumerated.

```plain
root@FCU2601:~# lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0 14.7G  0 disk
├─mmcblk0p1  179:1    0    4M  0 part
├─mmcblk0p2  179:2    0    4M  0 part
├─mmcblk0p3  179:3    0   32M  0 part
├─mmcblk0p4  179:4    0   32M  0 part
├─mmcblk0p5  179:5    0   32M  0 part
└─mmcblk0p6  179:6    0 14.6G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk
mmcblk0boot1 179:64   0    4M  1 disk
mmcblk1      179:96   0 14.9G  0 disk
└─mmcblk1p1  179:97   0 14.8G  0 part /run/media/mmcblk1p1
```

Check the default mount point of the drive.

```plain
root@FCU2601:~# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       15G  5.3G  8.4G  39% /
devtmpfs       devtmpfs  977M     0  977M   0% /dev
tmpfs          tmpfs     986M     0  986M   0% /dev/shm
tmpfs          tmpfs     198M  1.8M  196M   1% /run
tmpfs          tmpfs     5.0M  4.0K  5.0M   1% /run/lock
tmpfs          tmpfs     986M     0  986M   0% /sys/fs/cgroup
tmpfs          tmpfs     986M  4.0K  986M   1% /tmp
tmpfs          tmpfs     198M  8.0K  198M   1% /run/user/111
tmpfs          tmpfs     198M     0  198M   0% /run/user/0
/dev/mmcblk1p1 fuseblk    15G  7.1G  7.8G  48% /run/media/mmcblk1p1
```

The microSD card is mounted at /run/media/mmcblk1p1.

#### 3.10.2 Read/Write Speed Test
Write test:

```plain
[root@FCU2601:/]# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 24.6959 s, 21.2 MB/s
```

Read test:

```plain
[root@FCU2601:/]# dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 8.31059 s, 63.1 MB/s
```

### 3.11 Watchdog Test
A watchdog is a common feature in embedded systems. FCU2601 uses an external hardware watchdog (TPL5010) on the carrier board. The driver feeds the watchdog continuously by default, and a DIP switch on the carrier board controls whether the watchdog reset signal is active.

Check whether the watchdog driver is in auto-feed mode with the following command:

```plain
root@FCU2601:~# cat /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
auto feeding
```

With the watchdog DIP switch on the carrier board turned on, disable auto-feed with the following command; the system resets after 50 seconds.

```plain
root@FCU2601:~# echo 0 > /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
```

The watchdog driver status is now:

```plain
root@FCU2601:~# cat /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
manual feed
```

To feed the watchdog manually once, run:

```plain
root@FCU2601:~# echo 1 > /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
```

This command performs one feed, so the system will not reset within the current 50-second window.

**Note: Once you disable auto-feed with a command, it cannot be re-enabled until the system is rebooted. Until then, feed the watchdog manually at least once per 50-second period to prevent a reset.**

### 3.12 CAN Test
FCU2601 has two CAN bus interfaces. Wiring: connect the CAN H terminal to the H terminal of the other CAN device, and the CAN L terminal to the L terminal of the other CAN device.

**Note: The CAN interfaces have no internal termination resistors. If needed, add external termination resistors.**

Short CAN0 and CAN1 together, then run the following commands in the board terminal:

Each CAN data frame supports up to 8 data bytes.

Configure CAN0/CAN1 and set the bitrate to 500KB.

```plain
root@FCU2601:~# ip link set can0 down
root@FCU2601:~# ip link set can1 down
root@FCU2601:~# ip link set can0 type can bitrate 500000
root@FCU2601:~# ip link set can1 type can bitrate 500000
root@FCU2601:~# ip link set can0 up 
root@FCU2601:~# ip link set can1 up
```

Use CAN0 as the server (run the following command on the server first):

```plain
root@FCU2601:~# candump can0 &
```

Use CAN1 as the client (the client sends data):

```plain
root@FCU2601:~# cansend can1 123#DEADBEEF
can0  123   [4]  DE AD BE EF
```

### 3.13 Buzzer Test
The FCU2601 carrier board has a passive buzzer. Program it as needed, or configure and test it through the Linux file system interface with the following commands:

```plain
root@FCU2601:~# echo 0 > /sys/class/pwm/pwmchip0/export
root@FCU2601:~# echo 1000000 > /sys/class/pwm/pwmchip0/pwm0/period
root@FCU2601:~# echo 500000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle
root@FCU2601:~# echo "normal" > /sys/class/pwm/pwmchip0/pwm0/polarity
root@FCU2601:~# echo 1 > /sys/class/pwm/pwmchip0/pwm0/enable
root@FCU2601:~# echo 0 > /sys/class/pwm/pwmchip0/pwm0/enable
```

### 3.14 HDMI Display and GUI Function Test
#### 3.14.1 GUI Overview
FCU2601 provides one HDMI display output and runs Forlinx Desktop 20.04, a deeply customized Ubuntu20.04 system.

After connecting an HDMI display to the FCU2601, click login on the first boot. The desktop appears as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/033.png)

#### 3.14.2 Virtual Keyboard Setup
The system includes the Onboard virtual keyboard. Click the Start menu in the lower-left corner, select Onboard, and launch the virtual keyboard.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/034.png)

Once running, Onboard appears in the lower-right corner.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/035.png)

Right-click the Onboard icon and select Preferences:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/036.png)

Select "Auto-show when editing text" to make the virtual keyboard pop up automatically while editing text.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/037.png)

#### 3.14.3 Wi-Fi Test
The FCU2601 ships with an onboard AW-AM510 module for Wi-Fi testing. In the system the module appears as an mlan node; this test uses mlan0 (use the matching node if more than one device is present). To configure Wi-Fi, right-click the network icon in the bottom-right corner:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/038.png)

Click the Wi-Fi name listed under WiFi Networks. The Wi-Fi configuration window opens; enter the password using the on-screen keyboard:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/039.png)

Click "Connect" to complete the Wi-Fi connection:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/040.png)

#### 3.14.4 Browser Test
ForlinxDesktop ships with Google Chrome and other browsers. Make sure the network is up and DNS is working before accessing the Internet. Click the Start menu in the bottom-left corner and select "Chromium Browser":

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/041.png)

In the browser, click the search box, enter the URL, and visit the Forlinx Embedded official website, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/)

#### 3.14.5 File Manager
Click "File Manager PCManFM" in the bottom-left corner to manage files:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/043.png)

### 3.15 Common Service Tests
The preinstalled services below take about 1000 MB of file system space.

#### 3.15.1 OpenSSL Basic Environment Test
The Secure Sockets Layer (SSL) protocol is the most widely used application protocol. It encrypts data with ciphers such as AES, DES, and 3DES to protect it during transmission.

Set the environment variable before using OpenSSL.

```plain
root@FCU2601:~# export OPENSSL_CONF=/etc/ssl/openssl.cnf
```

Test the RSA encryption speed

```plain
root@FCU2601:~# openssl speed rsa1024
Doing 1024 bits private rsa's for 10s: 12406 1024 bits private RSA's in 9.97s
Doing 1024 bits public rsa's for 10s: 243329 1024 bits public RSA's in 9.99s
OpenSSL 1.1.1f  31 Mar 2020
built on: Mon Feb  6 17:57:17 2023 UTC
options:bn(64,64) rc4(char) des(int) aes(partial) blowfish(ptr)
compiler: gcc -fPIC -pthread -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -fdebug-prefix-map=/build/openssl-0kQqA1/openssl-1.1.1f=. -fstack-protector-strong -Wformat -Werror=formaL_USE_NODELETE -DOPENSSL_PIC -DOPENSSL_CPUID_OBJ -DOPENSSL_BN_ASM_MONT -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DKECCAK1600_ASM -DVPAES_ASM -DECP_NISTZ256_ASM -DPOLY1305_ASM -DNDEBUG -Wd
                  sign    verify    sign/s verify/s
rsa 1024 bits 0.000804s 0.000041s   1244.3  24357.3
```

Test the AES symmetric encryption algorithm:

```plain
root@FCU2601:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0714908 s, 82.8 kB/s
root@FCU2601:~# openssl enc -aes-128-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU2601:~# openssl enc -aes-128-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU2601:~# diff test test.dec
```

Test the DES symmetric encryption algorithm:

```plain
root@FCU2601:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0702961 s, 84.2 kB/s
root@FCU2601:~# openssl enc -des-ede3-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU2601:~# openssl enc -des-ede3-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU2601:~# diff test test.dec
```

#### 3.15.2 Docker Overview
**Note: Make sure the FCU2601 clock is correct, or image pulls fail with an expired-certificate error.**

Docker is a high-level container engine built on LXC. It packages an application and its runtime dependencies into an image, which can be distributed to any Docker-enabled platform and run there to deliver the service. A Docker container is process-level, and the official recommendation is to run one program per container, though you can run thousands of containers on a single host.

Download the hello-world image

```plain
root@FCU2601:~# docker pull hello-world
Using default tag: latest
latest: Pulling from library/hello-world
70f5ac315c5a: Pull complete
Digest: sha256:88ec0acaa3ec199d3b7eaf73588f4518c25f9d34f58ce9a0df68429c5af48e8d
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

List the local Docker images

```plain
root@FCU2601:~# docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    b038788ddb22   5 months ago   9.14kB
```

Run the hello-world test program

```plain
root@FCU2601:~# docker container run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Other related commands

| Command | Description |
| --- | --- |
| docker stop containerID | Stop a running Docker container |
| docker rm containerID | Remove an existing Docker container |
| docker rmi image_name | Remove a downloaded Docker image |
| docker ps -a | Show Docker container status |
| docker restart containerID | Restart the corresponding container |


#### 3.15.3 MySQL Feature Overview
MySQL is a popular open-source relational database management system widely used for data storage and management in applications and websites. It offers powerful features and flexible configuration options that let developers organize and manipulate data efficiently.

Below are a few simple tests of MySQL features.

Log in to the MySQL database.

```plain
root@FCU2601:~# mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.34-0ubuntu0.20.04.1 (Ubuntu)

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

Query the MySQL version.

```plain
mysql> select version();
+-------------------------+
| version()               |
+-------------------------+
| 8.0.34-0ubuntu0.20.04.1 |
+-------------------------+
1 row in set (0.01 sec)
```

Create a database.

```plain
mysql> create database forlinx_database;
Query OK, 1 row affected (0.02 sec)
```

Select the database.

```plain
mysql> use forlinx_database;
Database changed
```

Create a table.

```plain
mysql> create table name(
    -> id int auto_increment not null primary key,
    -> uname char(8) NOT NULL,
    -> gender char(2) NULL,
    -> birthday date );
Query OK, 0 rows affected (0.11 sec)
```

Show the tables in the database.

```plain
mysql> show tables;
+----------------------------+
| Tables_in_forlinx_database |
+----------------------------+
| name                       |
+----------------------------+
1 row in set (0.01 sec)
```

Show the table structure.

```plain
mysql> describe name;
+----------+---------+------+-----+---------+----------------+
| Field    | Type    | Null | Key | Default | Extra          |
+----------+---------+------+-----+---------+----------------+
| id       | int     | NO   | PRI | NULL    | auto_increment |
| uname    | char(8) | NO   |     | NULL    |                |
| gender   | char(2) | YES  |     | NULL    |                |
| birthday | date    | YES  |     | NULL    |                |
+----------+---------+------+-----+---------+----------------+
4 rows in set (0.03 sec)
```

Exit the database.

```plain
mysql> exit;
Bye
```

#### 3.15.4 Modbus Feature Overview
Modbus is a communication protocol for transferring data in automation systems. It is widely used in industrial control and monitoring to exchange data between devices. The protocol is simple, reliable, and easy to implement, which has led to its broad adoption in industrial equipment and systems.

The FCU2601 comes with the required Modbus libraries preinstalled. Next, download the Modbus test routines from the Ubuntu source repositories.

Before testing, make sure the network is connected and the FCU2601 can access the internet.

First, edit the Ubuntu source list and uncomment the source package entries:

```plain
root@FCU2601:~# vim /etc/apt/sources.list
```

Modify it as follows:

```plain
# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
# newer versions of the distribution.
deb http://ports.ubuntu.com/ubuntu-ports/ focal main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal main restricted

## Major bug fix updates produced after the final release of the
## distribution.
deb http://ports.ubuntu.com/ubuntu-ports/ focal-updates main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-updates main restricted

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb http://ports.ubuntu.com/ubuntu-ports/ focal universe
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal universe
deb http://ports.ubuntu.com/ubuntu-ports/ focal-updates universe
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-updates universe

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team, and may not be under a free licence. Please satisfy yourself as to
## your rights to use the software. Also, please note that software in
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb http://ports.ubuntu.com/ubuntu-ports/ focal multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal multiverse
deb http://ports.ubuntu.com/ubuntu-ports/ focal-updates multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-updates multiverse

## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb http://ports.ubuntu.com/ubuntu-ports/ focal-backports main restricted universe multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-backports main restricted universe multiverse

## Uncomment the following two lines to add software from Canonical's
## 'partner' repository.
## This software is not part of Ubuntu, but is offered by Canonical and the
## respective vendors as a service to Ubuntu users.
# deb http://archive.canonical.com/ubuntu focal partner
# deb-src http://archive.canonical.com/ubuntu focal partner

deb http://ports.ubuntu.com/ubuntu-ports/ focal-security main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-security main restricted
deb http://ports.ubuntu.com/ubuntu-ports/ focal-security universe
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-security universe
deb http://ports.ubuntu.com/ubuntu-ports/ focal-security multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports/ focal-security multiverse
```

Then update the package list and download the libmodbus5 source code.

```plain
root@FCU2601:~# apt-get update && apt-get source -y libmodbus5
```

After the download, the test source files are located here:

```plain
root@FCU2601:~# ls libmodbus-3.1.6/tests/
LICENSE      README.md           bandwidth-server-many-up.c  random-test-client.c  unit-test-client.c  unit-test.h.in  version.c
Makefile.am  bandwidth-client.c  bandwidth-server-one.c      random-test-server.c  unit-test-server.c  unit-tests.sh
```

RTU Mode Communication Test

Connect the two RS485 ports on the FCU2601 with a serial cable. This test pairs RS485_1 with RS485_2, that is, /dev/ttyS9 with /dev/ttyS5.

Edit unit-test-server.c and unit-test-client.c in the test source directory and set them to the corresponding serial device nodes.

```plain
root@FCU2601:~# vim libmodbus-3.1.6/tests/unit-test-server.c
ctx = modbus_new_rtu("/dev/ttyS9", 115200, 'N', 8, 1);
root@FCU2601:~# vim libmodbus-3.1.6/tests/unit-test-client.c
ctx = modbus_new_rtu("/dev/ttyS5", 115200, 'N', 8, 1);
```

Compile the test program.

```plain
root@FCU2601:~# cd libmodbus-3.1.6/
root@FCU2601:~/libmodbus-3.1.6# ./autogen.sh
root@FCU2601:~/libmodbus-3.1.6# ./configure
root@FCU2601:~/libmodbus-3.1.6# make
```

Run the RTU mode test server.

```plain
root@FCU2601:~/libmodbus-3.1.6# ./tests/unit-test-server rtu &
```

Run the RTU mode test client.

```plain
root@FCU2601:~/libmodbus-3.1.6# ./tests/unit-test-client rtu
```

TCP Mode Communication Test

This test uses the 127.0.0.1 loopback address to verify that the libmodbus5 library works.

Run the RTU mode test server.

```plain
root@FCU2601:~/libmodbus-3.1.6# ./tests/unit-test-server tcp &
```

Run the RTU mode test client.

```plain
root@FCU2601:~/libmodbus-3.1.6# ./tests/unit-test-client tcp
```

#### 3.15.5 MQTT Feature Overview
MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for efficient IoT communication over low-bandwidth, unstable networks. It is simple, reliable, and has low network overhead, so it is widely used in IoT applications.

Here are a few simple MQTT test examples:

Subscribe to Messages

```plain
root@FCU2601:~/# mosquitto_sub -t test &
```

Publish Messages

```plain
root@FCU2601:~/# mosquitto_pub -t test -m "hello world"
```

#### 3.15.6 FTP Service Feature Overview
The vsftpd service starts automatically at boot. To access it, enter [ftp://192.168.0.123/](ftp://192.168.0.123/) in the address bar of File Explorer on a PC. A login dialog appears; the username is forlinx and the password is forlinx.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/044.png)

The screenshot below shows FTP access from File Explorer on a PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/045.png)

### 3.16 Changing the Boot Logo
The FCU2601 supports replacing the custom boot logo without rebuilding the image.

**Note:** **The BMP image must be rotated 180°.**

Rotate the image as follows:

- Open the image in Paint, the drawing tool included with Windows.
- Save it as a BMP file; choose a bit depth, for example 24-bit.
- Click the rectangle at the left of the Image toolbar to make a selection.
- Right-click the image and choose Rotate -> Rotate 180°.
- Right-click the edited image and choose Properties to check the result.

Copy logo.bmp (U-Boot stage) and logo_kernel.bmp (kernel stage) to a USB drive; both stages can use the same image. The example image is 480x272 (the resolution may differ), with a bit depth of 24 (the bit depth must match). Insert the USB drive into a USB port on the FCU2601.

```plain
root@FCU2601:/# cd /run/media/sdb1/
root@FCU2601:/# ls
logo.bmp         logo_kernel.bmp
```

Then run the following commands to flash the logo to the system:

```plain
root@FCU2601:/run/media/sdb1# cat logo.bmp > logo.img
root@FCU2601:/run/media/sdb1# truncate -s %512 logo.img
root@FCU2601:/run/media/sdb1# cat logo_kernel.bmp >> logo.img
root@FCU2601:/run/media/sdb1# dd if=logo.img of=/dev/mmcblk0p5
10801+1 records in
10801+1 records out
5530166 bytes (5.5 MB, 5.3 MiB) copied, 2.84201 s, 1.9 MB/s
root@FCU2601:/run/media/sdb1# reboot
```

After rebooting, the logo has been replaced.

## 4. System Firmware Update
On the FCU2601 platform, you can use a microSD card to flash the system to eMMC for recovery or upgrades.

**Note:** 

- **Tests show the maximum microSD card capacity is 16 GB; cards of 32 GB or larger may fail to flash;**
- **During microSD card flashing, the system also drops to a root@buildroot command line. Wait for flashing to finish.**

Copy SDDiskTool_v1.69.zip from the Tools folder of the supplied materials package to any directory in Windows, then run SD_Firmware_Tool.exe as administrator.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/046.png)

Select the disk device, check "Firmware Upgrade", select update.img, and click Start Create.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/047.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/048.png)

Insert the microSD card into the board and power it on; the system enters the flashing process automatically. When flashing finishes, both the screen and the serial console show:

Please remove SD CARD!!!, wait for reboot.

Remove the microSD card now; the system reboots automatically (do not power off abruptly).

In batch production, use the SoM heartbeat LED to tell whether flashing is complete. The heartbeat LED changes during flashing as follows:

Kernel boot stage: RUN LED, heartbeat mode, blinks at regular intervals.

Flashing preparation stage: RUN LED off.

Flashing in progress: RUN LED steady on.

Flashing complete: RUN LED, heartbeat mode, blinks at regular intervals.

Serial console output during flashing:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_FlDesktop20.04-EN/049.png)

If the board does not reboot automatically after removing the microSD card, a manual reboot also completes flashing. As shown above, flashing takes about 28 minutes; wait for it to finish.
