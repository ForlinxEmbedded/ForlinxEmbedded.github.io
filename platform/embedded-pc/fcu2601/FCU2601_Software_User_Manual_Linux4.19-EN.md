# Linux 4.19_User's Manual_V1.0 

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. FCU2601 Embedded Control Unit Introduction
### 1.1 Product Overview
The FCU2601 Embedded Control Unit is built on FET3568J-C quad-core industrial-grade System-on-Module (SoM), clocked at 1.8GHZ and based on a quad-core 64-bit Cortex-A55 architecture. It integrates Rockchip's in-house NPU with 1TOPS of AI performance for lightweight on-device AI inference. Memory up to 4GB, storage up to 32GB eMMC.

The product uses a System-on-Module (SoM) plus carrier board plus expansion board design to reduce total system cost, and offers broad hardware peripheral support, including RS485, RS232, CAN, USB, Ethernet, 4G, WiFi, DI, DO, mSATA, and HDMI interfaces and modules. The FCU2601 measures within 190x140x45mm and is available in Base and Extended versions, used as an EMS in single-cabinet deployment and multi-cabinet networking scenarios for lithium-battery commercial and industrial energy storage. The Base and Extended versions are planned to share the same enclosure size but differ in the number of interfaces, so customers can choose based on the application scenario.

**Product Features:**

- Rockchip RK3568J  quad-core processor, high performance, low power consumption, high reliability


- Supports 2 x Gigabit Ethernet with isolation protection

- Supports 2 x 100 Mbps Ethernet (expansion board) with isolation protection

- Supports 9 x RS485 (4 on the carrier board, 5 on the expansion board) with isolation protection

- Supports 2 x RS232/RS485 multiplexed (expansion board) with isolation protection

- Supports 2 x CAN with isolation protection

- Supports 8 x DI, dry contact input, optocoupler isolation

- Supports 6 x DO, relay output, contact rating 5A 250VAC, 5A 30VDC

- Supports 2 x USB2.0 Host for easy expansion

- Supports 1 x HDMI display output

- Supports WIFI in both STA and AP modes

- Supports 4G, optional module

- Supports mSATA SSD with an internal drive mounting position, optional module

- Built-in supercapacitor keeps the system running for at least 5 seconds after external power loss, preventing data loss

- Rated input DC24V (supports 9~36V), with reverse polarity protection and overcurrent protection


### 1.2 Interface Diagram
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/156.png)

Figure 1 Front ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/157.png)

Figure 2 Back

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/158.png)

Figure 3 Side

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/159.png)

Figure 4 Bottom 

Rated power input is DC24V, including a protective earth terminal.

The dual-layer LED on the left indicates power and operating status: the red LED is on when power is applied, and the green LED blinks as a heartbeat when the embedded control unit is running normally

The two buttons are a user-defined button and a reset button.

Two 6-position 3.81mm pitch green terminal blocks provide 6 DO channels.

The terminal block pinout is defined as follows:

| + | - | + | - | + | - | + | - | + | - | + | - |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DO1 | DO1 | DO2 | DO2 | DO3 | DO3 | DO4 | DO4 | DO5 | DO5 | DO6 | DO6 |


One 10-position 3.81mm pitch green terminal block provides 8 DI channels

The terminal block pinout is defined as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Definition | DI1 | DI2 | DI3 | DI4 | DI5 | DI6 | DI7 | DI8 | COM | COM |


A standard HDMI port is located in the center

Two standard Type-A USB connectors

One DEBUG interface (RJ45), RS232 level, pinout matches the Cisco switch console port

Two antenna connectors: main and auxiliary 4G antennas

One standard drawer-type mini SIM card slot, serving as the 4G module SIM card interface

One microSD card interface for program flashing or data storage

Two Gigabit Ethernet ports eth0 and eth1

Two 100 Mbps Ethernet ports eth2 and eth3

One WiFi antenna

Two dual-layer LED indicators with user-configurable functions

One 6-position 3.81mm pitch green terminal block provides 2 CAN channels

The terminal block pinout is defined as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Definition | L1 | H1 | CG1 | L2 | H2 | CG2 |


Four 6-position 3.81mm pitch green terminal blocks provide 8 RS485 channels

The terminal block pinout is defined as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Definition | A1 | B1 | G1 | A2 | B2 | G2 |


One 3-position 3.81mm pitch green terminal block provides 1 RS485 channel

The terminal block pinout is defined as follows:

| No. | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Definition | A9 | B9 | G9 |


Two 5-position 3.81mm pitch green terminal blocks provide 2 multiplexed RS485/RS232 interfaces

The terminal block pinout is defined as follows:

| No. | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Definition | A10 | B10 | G10 | T10 | R10 |


### 1.3 Hardware Specifications
| Device | Description |
| --- | --- |
| CPU | Rockchip RK3568J   ARM Cortex-A55 1.8GHz |
| RAM | 4GB(max) |
| ROM | eMMC  32GB(max) |
| Ethernet | 2 x 10/100Mbps, 2 x 10/100/1000Mbps, ESD Level 3, EFT Level 3 |
| RS485 | 11 channels (2 multiplexed with RS232), 3KV isolation protection, ESD Level 3, EFT Level 3 |
| RS232 | 2 channels (multiplexed with RS485), 3KV isolation protection, ESD Level 3, EFT Level 3 |
| DO | 6 channels, relay output   Contact rating: 5A 250VAC, 5A 30VDC |
| DI | 8 channels, dry contact input |
| CAN | 2 channels, 3KV power isolation, ESD Level 3, EFT Level 3 |
| HDMI | 1 x standard HDMI 1.4, supports 1080P@60fps(up to 4K) |
| 4G | Models: EC200N, EC20, EC25   one SIM card slot |
| WIFI | Supports STA and AP modes |
| USB Host | 2 channels, USB Host 2.0, ESD Level 3 |
| RTC | Onboard CR2032 battery |
| Hard Disk Storage | Supports mSATA SSD |
| Power IN | Rated DC 24V, supports wide-range DC 9~36V, with reverse polarity protection and overcurrent protection. |
| Power-Loss Detection | The CPU can detect external power loss; the supercapacitor keeps the system powered for 5s |
| Reset Key | Reset button |
| Key | User-defined button |
| LED 1 | 2 LEDs indicating system power-on and normal operation |
| LED 2 | 4 LEDs: 2 CAN communication indicators and 2 user-configurable indicators |
| DEBUG | 1 x RS232-level DEBUG, pinout matches the Cisco switch console port |
| Operating Environment | Humidity: 5％～95％, non-condensing.    Operating temperature: -40℃~+75℃   Storage temperature: -40℃～+85℃ |
| Dimensions (Including Mounting Ears) | 214mm_140mm_45mm(L_W_H) |


### 1.4 Mechanical Dimensions
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/160.png)

Overall Dimensions

### 1.5 Software Specifications
#### 1.5.1 Linux4.19.206 System Software Resource Features
| Device | Driver Source Location in the Kernel | Device Name |
| --- | --- | --- |
| LCD Backlight Driver | drivers/video/backlight/pwm_bl.c | /sys/class/backlight |
| USB Flash Drive | drivers/usb/storage/ |  |
| USB Mouse | drivers/hid/usbhid/ | /dev/input/mice |
| Ethernet | drivers/net/ethernet/stmicro/stmmac |  |
| SD/microSD Card Driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk1pX |
| EMMC Driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk2pX |
| OV13850 | drivers/media/i2c/ov13850.c | /dev/videoX |
| LCD Controller | drivers/gpu/drm/rockchip/rockchip_drm_vop.c |  |
| MIPI CSI | drivers/phy/rockchip/phy-rockchip-mipi-rx.c |  |
| MIPI DSI | drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c |  |
| LCD Touch Driver | drivers/input/touchscreen/gt9xx/*   drivers/input/touchscreen/edt-ft5x06.c | /dev/input/eventX |
| RTC Real-Time Clock Driver | drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c | /dev/rtc0 |
| Serial Port | drivers/tty/serial/8250/8250_dw.c | /dev/ttySX |
| Key Driver | drivers/input/keyboard/adc-keys.c | /dev/input/eventX |
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


### 1.6 Hardware Interface to Software Mappingd
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
| ETH2(100M) | eth2 | Wired Ethernet |
| ETH3(100M) | eth3 | Wired Ethernet |
| USB flash drive | /dev/sdx | External storage |
| SATA | /dev/sdx | External storage |
| microSD card | /dev/mmcblk1 | External storage |


## 2. FCU2601 Embedded Control Unit Usage Notes
You can obtain the software and hardware documentation and source code from the cloud drive link provided by Forlinx. The Linux kernel version is 4.19.206. For details, see the FCU2601 user materials. All directories mentioned in this document are relative to the FCU2601 user materials root directory.

### 2.1 Power Supply
The product is rated for a DC 24 V input and supports a wide DC 9~36 V input range.

| Board Photo | Description |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/161.png) |  |


Power supply status and system status are indicated by the power LED, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/162.png)

When the FCU2601 is powered on, the red PWR LED stays on, indicating the Embedded Control Unit's operating power status;

The RUN LED blinks as a heartbeat, indicating the system operating status of the Embedded Control Unit.

The measured power consumption of the FCU2601 is shown in the table below:

| No. | Test Item | Base Version Power Consumption (W) | Extended Version Power Consumption (W) |
| --- | --- | --- | --- |
| 1 | No-load startup peak power | 6.48 | 8.4 |
| 2 | No-load standby power | 4.56 | 6 |
| 3 | CPU stress + memory + eMMC read/write stress test + all interfaces running | 5.52 | 7.92 |
| 4 | CPU stress + memory + eMMC read/write stress test + all interfaces running + mSATA SSD read/write | 6.96 | 9.84 |
| 5 | CPU stress + memory + eMMC read/write stress test + all interfaces running + 4G running + mSATA SSD read/write + HDMI display | 11.52 | 14.4 |

**Note: The above figures were measured under normal operating conditions. 4G signal strength, the mSATA SSD manufacturer and specifications, and connected USB devices all affect overall power consumption to some extent.**

### 2.2 User Login
The FCU2601 supports two ways to log in: via the debug serial port or over the network. This manual describes both methods.

**Note:**

- **The serial terminal logs in as root automatically, with no password;**
- **Serial settings: baud rate 115200, 8 data bits, 1 stop bit, no parity, no flow control;**
- **Hardware requirements: Connect the PC to the Embedded Control Unit with an RJ45-to-RS232 debug serial cable that meets the Cisco switch console port standard;**
- **Software requirements: Install a terminal emulator on the Windows PC. Many terminal emulators are available, so use a serial terminal program you are familiar with.**

#### 2.2.1 Debug Serial Port

On the FCU2601, the debug serial port is labeled Debug on the panel, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/163.png)

The Debug serial port is used to view board runtime information only; it serves as a debug port and is not used for other purposes.

- Connect the PC and the Debug port of the FCU2601 control unit using an RJ45-to-RS232 debug serial cable that meets the Cisco switch console port standard.

- Open a terminal emulator on the Windows 10 PC (PuTTY is supplied in the Tools folder of the materials package) and configure it as follows:

Select the COM port according to your serial connection, then configure the related settings in the "Serial" menu on the left.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/164.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/165.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/166.png)

**Note: The baud rate here is 115200, with 8 data bits, no parity, 1 stop bit, and no flow control. Once configured, power on the FCU2601 control unit to see the debug output.**

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

Press Enter to access the command line.

```plain
xkbcommon: ERROR: couldn't find a Compose file for locale "zh_CN.utf8"
could not create XKB compose table for locale 'zh_CN.utf8'.  Disabiling compose
xkbcommon: ERROR: couldn't find a Compose file for locale "zh_CN.utf8"
could not create XKB compose table for locale 'zh_CN.utf8'.  Disabiling compose
Starting input-event-daemon: input-event-daemon: Start parsing /etc/input-event-daemon.conf...
input-event-daemon: Adding device: /dev/input/event0...
input-event-daemon: Adding device: /dev/input/event1...
input-event-daemon: Adding device: /dev/input/event2...
input-event-daemon: Start listening on 3 devices...
done
Starting matrix: QStandardPaths: wrong permissions on runtime directory /var/run, 7755 instead of 7700
qt.qpa.wayland: No shell integration named "xdg-shell" found
[   20.751627] Freeing drm_logo memory: 700K

root@FCU2601:/#
```

#### 2.2.2 Network Login
In addition to the debug serial port, the FCU2601 also supports SSH login to the Embedded Control Unit over the network, along with FTP file transfer. For convenience, the eth0 port uses the default IP 192.168.0.232 after boot.

Connect the Embedded Control Unit and the PC to the same switch, or connect them directly with an Ethernet cable, then set the PC to the 192.168.0.0 subnet.

Then, in the Windows command window, enter ssh forlinx@192.168.0.123; the password is forlinx.

**Note: To log in as root over SSH, first set a login password for root. Log in to the board through the serial port, then use passwd "username" to change that user's login password. A password-strength warning may appear; ignore it, as it does not affect the password change.**

Press the win+R key combination, type cmd, and press Enter to open the Windows command window.

```plain
Microsoft Windows [Version 10.0.18362.720]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Users\chaill>ssh forlinx@192.168.0.232
forlinx@192.168.0.232's password:
forlinx@FCU2601:~$
```

## 3. FCU2601 Features
### 3.1 DI, DO, Keys, LEDs, and Power-Loss Detection
#### 3.1.1 Interface Description
The interfaces for DI, DO, the user-defined Key, and the user-defined LEDs LED1-4 are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/167.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/168.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/169.png)

Of these, the digital input interfaces are high by default; connect them to ground to set them low.

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

**Note: LED1 and LED2 are configured by default as the CAN0 and CAN1 data transmit/receive and link status indicators. You can repurpose them in your program as needed, but doing so disables the corresponding CAN status indication.**

#### 3.1.3 Command-Line Test
DO and LED Test

DO relay operation, using DO1 as an example

```plain
root@FCU2601:/# echo 0 > /sys/class/leds/do1/brightness
root@FCU2601:/# echo 1 > /sys/class/leds/do1/brightness
```

These commands toggle the DO1 relay between closed and open. Note that writing 1 closes it.

Turning an LED on and off, using LED3 as an example

```plain
root@FCU2601:/# echo 1 > /sys/class/leds/led1/brightness
root@FCU2601:/# echo 0 > /sys/class/leds/led1/brightness
```

These commands turn the USER LED on and off. Note that writing 1 turns it on.

DI Input Test

First, check the DI state, using DI1 as an example

```plain
root@FCU2601:/# cat /sys/class/gpio-input/DIN1/state
1
```

DI1 reads high. Short the DI1 interface to ground, then run the command again:

```plain
root@FCU2601:/# cat /sys/class/gpio-input/DIN1/state
0
```

Both DIs now read low.

User-Defined Key Test

First, check the key state:

```plain
root@FCU2601:/# cat /sys/class/gpio-input/FWn/state
1
```

The key reads high (not pressed). Press and hold the key, then run the command again:

```plain
root@FCU2601:/# cat /sys/class/gpio-input/FWn/state
0
```

The USER key now reads low, indicating it is pressed.

System Power-Loss Test

First, check the POW_DET state:

```plain
root@FCU2601:/# cat /sys/class/gpio-input/POW_DET/state
0
```

POW_DET reads low, meaning the system has not lost power. Disconnect the system power and run the command again:

```plain
root@FCU2601:/# cat /sys/class/gpio-input/POW_DET/state
1
```

POW_DET now reads high, meaning the system has lost power; handle it promptly based on the application environment.

### 3.2 Serial Port Test
#### 3.2.1 Interface Description
Board Photo:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/170.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/171.png)

**Note:** 

- **A10B10 and T10R10 are multiplexed and cannot be used at the same time;**
- **A10B10 and T10R10 are multiplexed and cannot be used at the same time;**
  **The RS485 interface has no internal termination resistor by default; add an external one if needed.**

#### 3.2.2 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by the Application | Remarks |
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
Using RS485_1 as an example; to test other RS485 interfaces, just change the corresponding interface's device node name.

This test uses PC communication as an example. Connect an RS232-to-RS485 converter to the FCU2601 RS485_1 interface as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/172.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/173.png)

On the PC, open putty.exe, set the serial port and baud rate, then open the connection:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/174.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/175.png)

RS485_1 Interface Transmit Test:

In the FCU2601 terminal, enter the following command to set the RS485_1 baud rate to 115200.

```plain
root@FCU2601:/# stty -F /dev/ttyS9 raw speed 115200
```

Send data from the RS485_1 interface:

```plain
root@FCU2601:/# echo "forlinx_485_test" > /dev/ttyS9
```

RS485_1 sends "forlinx_485_test" to the PC at 115200 baud, which then appears in putty on the PC.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/176.png)

RS485_1 Interface Receive Test:

Receive data on the RS485_1 interface:

```plain
root@FCU2601:/# cat /dev/ttyS9
```

Enter data in putty on the PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/177.png)

The PC sends "abcdefg" at 115200 baud, which is then received on the FCU2601 RS485_1 interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/178.png)

### 3.3 System Reset
Press the Reset button to reboot the system immediately; the debug serial port also prints the boot messages.

The Reset button is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/179.png)

### 3.4 USB Interface Test
#### 3.4.1 USB HOST Interface Storage Test
The USB connector is shown below:

.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/180.png)

Use a USB flash drive to test the USB function. Insert the drive into a USB port on the FCU2601 Embedded Control Unit, then check its mount point:

```plain
root@FCU2601:/# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       29G  1.7G   26G   6% /
devtmpfs       devtmpfs  1.9G     0  1.9G   0% /dev
tmpfs          tmpfs     2.0G     0  2.0G   0% /dev/shm
tmpfs          tmpfs     2.0G  624K  2.0G   1% /tmp
tmpfs          tmpfs     2.0G  280K  2.0G   1% /run
/dev/mmcblk0p5 ext2      4.9M   34K  4.6M   1% /run/media/mmcblk0p5
/dev/sda1      vfat       15G  618M   15G   5% /run/media/sda1

root@FCU2601:/# ls -l /run/media/
total 8
drwxrwx--- 14 root disk 8192 Jan  1  1970 sda1
```

The USB drive is mounted at /run/media/sda1.

Write a file to the USB drive with the following command, writing 1 to test.txt:

```plain
root@FCU2601:/# echo 1 > /run/media/sda1/test.txt
root@FCU2601:/# sync
```

Read test.txt from the USB drive with the following command:

```plain
root@FCU2601:/# cat /run/media/sda1/test.txt
1
```

It reads back the 1 written earlier.

If the USB drive mounts automatically under /run/media/sdxx and its contents can be read and written, the USB port works correctly.

### 3.5 Wired Ethernet Test
The FCU2601 supports two RJ45 10M/100M/1000M auto-negotiation Ethernet ports and two RJ45 10M/100M auto-negotiation Ethernet ports, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/181.png)

#### 3.5.1 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by the Application | Remarks |
| --- | --- | --- |
| ETH0 | eth0 | Gigabit Ethernet |
| ETH1 | eth1 | Gigabit Ethernet |
| ETH2 | eth2 | Fast Ethernet |
| ETH3 | eth3 | Fast Ethernet |


#### 3.5.2 Ethernet Test
The default network settings on the FCU2601 are configured in /etc/network/interfaces. Edit the file as needed.

```plain
root@FCU2601:/# cat /etc/network/interfaces
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address 192.168.0.232
netmask 255.255.255.0
gateway 192.168.0.1

auto eth1
iface eth1 inet dhcp
root@FCU2601:/#
```

Take testing the NET0 port as an example: connect the PC to the FCU2601's NET0 port with an Ethernet cable.

From a cmd window on the PC, start iperf3 (Tools\iperf-3.1.3-win64\iperf3.exe in the supplied materials) in listen mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/182.png)

Enter the following command on the FCU2601 terminal to run the test:

```plain
root@FCU2601:/# iperf3 -c 192.168.0.110 -i 5 -t 10
```

The PC output is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/183.png)

The FCU2601 output is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/184.png)

### 3.6 4G Module Test
The FCU2601 supports three 4G modules: Quectel EC200N, EC20, and EC25. Run the tests for the module you selected.

The device nodes for the 4G and 5G modules are:

| Device Model | Node Name |
| --- | --- |
| Quectel EC20 module | usb0 |
| Quectel EC200N-CN module | usb0 |
| Quectel EC25-EUX module | usb0 |


The 4G module comes with one antenna, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/185.png)

The 4G module uses a standard push-to-eject SIM slot; press the SIM card to eject it, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/186.png)

#### 3.6.1 4G Module Detection
Quectel EC20 module

Run the following command on the FCU2601 console to check whether the Quectel EC20 module is detected.

```plain
root@FCU2601:/# lsusb
Bus 005 Device 001: ID 1d6b:0002
Bus 003 Device 001: ID 1d6b:0001
Bus 002 Device 002: ID 0b95:772b
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 003: ID 2c7c:0125
Bus 005 Device 002: ID 0b95:772b
Bus 001 Device 004: ID 05e3:0747
Bus 008 Device 001: ID 1d6b:0003
Bus 006 Device 001: ID 1d6b:0003
Bus 001 Device 002: ID 1a40:0101
Bus 004 Device 001: ID 1d6b:0001
Bus 002 Device 001: ID 1d6b:0002
Bus 007 Device 002: ID 04e2:1414
Bus 007 Device 001: ID 1d6b:0002
```

Use ifconfig to confirm that the Quectel EC20 module creates the usb0 node.

Quectel EC200N-CN module

Run the following command on the FCU2601 console to check whether the Quectel EC200N-CN module is detected.

```plain
root@FCU2601:/# lsusb
Bus 005 Device 001: ID 1d6b:0002
Bus 003 Device 001: ID 1d6b:0001
Bus 002 Device 002: ID 0b95:772b
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 004: ID 2c7c:6002
Bus 005 Device 002: ID 0b95:772b
Bus 001 Device 003: ID 05e3:0747
Bus 008 Device 001: ID 1d6b:0003
Bus 006 Device 001: ID 1d6b:0003
Bus 001 Device 002: ID 1a40:0101
Bus 004 Device 001: ID 1d6b:0001
Bus 002 Device 001: ID 1d6b:0002
Bus 007 Device 002: ID 04e2:1414
Bus 007 Device 001: ID 1d6b:0002
```

Use ifconfig to confirm that the Quectel EC200N-CN module creates the usb0 node.

Quectel EC25-EUX module

Run the following command on the FCU2601 console to check whether the Quectel EC25-EUX module is detected.

```plain
root@FCU2601:/# lsusb
Bus 005 Device 001: ID 1d6b:0002
Bus 003 Device 001: ID 1d6b:0001
Bus 002 Device 002: ID 0b95:772b
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 003: ID 2c7c:0125
Bus 005 Device 002: ID 0b95:772b
Bus 001 Device 004: ID 05e3:0747
Bus 008 Device 001: ID 1d6b:0003
Bus 006 Device 001: ID 1d6b:0003
Bus 001 Device 002: ID 1a40:0101
Bus 004 Device 001: ID 1d6b:0001
Bus 002 Device 001: ID 1d6b:0002
Bus 007 Device 002: ID 04e2:1414
Bus 007 Device 001: ID 1d6b:0002
```

Use ifconfig to confirm that the Quectel EC25-EUX module creates the usb0 node.

#### 3.6.2 4G Internet Access Test
Quectel EC20 Module

Insert a China Mobile SIM card to test 4G internet access and verify external network connectivity:

```plain
root@FCU2601:/# fl_4g &
start running fl_4g version is ver01.006 ... ...
path=/sys/bus/usb/devices/2-1:1.0
[12-20_11:40:12:674] can not find qmi dev

path=/sys/bus/usb/devices/1-1.3:1.4
[12-20_11:40:12:678] Auto find qmichannel = /dev/qcqmi0
[12-20_11:40:12:683] Auto find usbnet_adapter = usb0
[12-20_11:40:12:687] netcard driver = GobiNet, driver version = 22-Aug-2005
The module was loaded normally after 5 seconds
[ 4257.277393] GobiNet::bridge_mode_store please ifconfig usb0 do[12-20_11:w40:12:899] Modem works in QMI mode
n
[12-20_11:40:12:918] Get clientWDS = 10
[12-20_11:40:12:950] Get clientDMS = 11
[12-20_11:40:12:981] Get clientNAS = 12
[12-20_11:40:13:013] Get clientUIM = 13
[12-20_11:40:13:045] Get clientWDA = 14
[12-20_11:40:13:269] requestBaseBandVersion EC20CEHDLGR06A09M1G
[12-20_11:40:13:878] requestGetProfile[1] cmnet///1/IPV4
[12-20_11:40:13:878] requestSetProfile[1] cmnet///1/IPV4
[12-20_11:40:13:882] no need to set skip the rest
[12-20_11:40:14:336] ifconfig usb0 0.0.0.0
[12-20_11:40:14:344] ifconfig usb0 down
[12-20_11:40:14:582] requestSetupDataCall WdsConnectionIPv4Handle: 0x871f2340
[12-20_11:40:14:839] requestQueryDataCall IPv4ConnectionStatus: CONNECTED
[12-20_11:40:17:880] ifconfig usb0 up
[ 4262.265883] IPv6: ADDRCONF(NETDEV_UP): usb0: link is not ready
[ 4262.265992] IPv6: [12-20_11:40:17:A890] udhcpc -f -n -q -t 5 -i usb0
v1.27.2(NETDEV_CHANGE): usb0: link becomes readyudhcpc: started,

udhcpc: sending discover
udhcpc: sending select for 10.106.227.115
udhcpc: lease of 10.106.227.115 obtained, lease time 7200
[12-20_11:40:18:026] deleting routers
[12-20_11:40:18:050] adding dns 111.11.1.3
[12-20_11:40:18:050] adding dns 111.11.11.3
```

On success, an IP address is obtained automatically. Run a ping test to verify network connectivity.

```plain
root@FCU2601:/# ping www.baidu.com -I usb0 -c 5
PING www.a.shifen.com (39.156.66.14) from 10.106.227.115 usb0: 56(84) bytes of data.
ping 8.8.8.8 -c 3 -s 4 -W 2 -I usb0
3 transmitted 3 rec
64 bytes from 39.156.66.14: icmp_seq=1 ttl=51 time=50.2 ms
64 bytes from 39.156.66.14: icmp_seq=2 ttl=51 time=77.8 ms
64 bytes from 39.156.66.14: icmp_seq=3 ttl=51 time=56.1 ms
64 bytes from 39.156.66.14: icmp_seq=4 ttl=51 time=54.2 ms
64 bytes from 39.156.66.14: icmp_seq=5 ttl=51 time=52.2 ms

--- www.a.shifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 23078ms
rtt min/avg/max/mdev = 50.260/58.162/77.804/10.017 ms
```

Quectel EC200N-CN Module

Insert a China Mobile SIM card to test 4G internet access and verify external network connectivity:

```plain
root@FCU2601:/# fl_4g &
start running fl_4g version is ver01.006 ... ...
path=/sys/bus/usb/devices/2-1:1.0
[12-20_11:51:57:514] can not find qmi dev

path=/sys/bus/usb/devices/1-1.3:1.0
idVendor=0x2c7c idProduct=0x6002
atIntf = 3
[12-20_11:51:57:522] Auto find qmichannel = /dev/ttyUSB1
[12-20_11:51:57:526] Auto find usbnet_adapter = usb0
[12-20_11:51:57:531] netcard driver = cdc_ether, driver version = 22-Aug-2005
The module was loaded normally after 5 seconds
[12-20_11:51:57:742] Modem works in ECM_RNDIS_NCM mode
set done!
[12-20_11:51:57:745] atc_fd = 10
APN :
USER :
PASSWD :
AUTH :0
[12-20_11:52:04:377] ifconfig usb0 0.0.0.0
[12-20_11:52:04:386] ifconfig usb0 down
[12-20_11:52:07:801] ifconfig usb0 up
[12-20_11:52:07:811] udhcpc -f -n -q -t 5 -i usb0
udhcpc: started, v1.27.2
udhcpc: sending discover
udhcpc: sending select for 10.21.29.85
udhcpc: sending select for 10.21.29.85
udhcpc: lease of 10.21.29.85 obtained, lease time 86400
[12-20_11:52:11:011] deleting routers
[12-20_11:52:11:036] adding dns 111.11.1.3
[12-20_11:52:11:036] adding dns 111.11.11.3
```

On success, an IP address is obtained automatically. Run a ping test to verify network connectivity.

```plain
root@FCU2601:/# ping www.baidu.com -I usb0 -c 5
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

Quectel EC25-EUX Module

Insert a China Mobile SIM card to test 4G internet access and verify external network connectivity:

```plain
root@FCU2601:/# fl_4g &
start running fl_4g version is ver01.006 ... ...
path=/sys/bus/usb/devices/2-1:1.0
[12-20_11:56:31:488] can not find qmi dev

path=/sys/bus/usb/devices/1-1.3:1.4
[12-20_11:56:31:492] Auto find qmichannel = /dev/qcqmi0
[12-20_11:56:31:497] Auto find usbnet_adapter = usb0
[12-20_11:56:31:501] netcard driver = GobiNet, driver version = 22-Aug-2005
The module was loaded normally after 5 seconds
[12-20_11:56:31:714] Modem works in QMI mode
[12-20_11:56:31:728] Get clientWDS = 10
[12-20_11:56:31:758] Get clientDMS = 11
[12-20_11:56:31:790] Get clientNAS = 12
[12-20_11:56:31:822] Get clientUIM = 13
[12-20_11:56:31:854] Get clientWDA = 14
[12-20_11:56:32:079] requestBaseBandVersion EC20CEHDLGR06A09M1G
[12-20_11:56:32:687] requestGetProfile[1] cmnet///1/IPV4
[12-20_11:56:32:688] requestSetProfile[1] cmnet///1/IPV4
[12-20_11:56:32:692] no need to set skip the rest
[12-20_11:56:33:145] ifconfig usb0 0.0.0.0
[   25.539771] IPv6: ADDRCONF(NETDEV_UP): usb0: link is not ready
[   25.539896][12-20_11:56:33:155] ifconfig u sb0 down
IPv6: ADDRCONF(NETDEV_CHANGE): usb0: link becomes ready
[12-20_11:56:33:391] requestSetupDataCall WdsConnectionIPv4Handle: 0x86de0780
[12-20_11:56:33:647] requestQueryDataCall IPv4ConnectionStatus: CONNECTED
[12-20_11:56:36:690] ifconfig usb0 up
[   29.084270] IPv6: ADDRCONF(NETDEV_UP): usb0: link is not ready
[   29.084373] IPv6:[12-20_11:56:36:700]  udhcpc -f -n -q -t 5 -i usb0
27.2CONF(NETDEV_CHANGE): usb0: link becomes readyudhcpc: started, v1.

udhcpc: sending discover
udhcpc: sending select for 10.27.37.133
udhcpc: lease of 10.27.37.133 obtained, lease time 7200
[12-20_11:56:36:851] deleting routers
[12-20_11:56:36:875] adding dns 111.11.1.3
[12-20_11:56:36:875] adding dns 111.11.11.3
```

On success, an IP address is obtained automatically. Run a ping test to verify network connectivity.

```plain
root@FCU2601:/# ping www.baidu.com -I usb0 -c 5
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

### 3.7 WiFi Test
The Wi-Fi antenna is marked on the enclosure as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/187.png)

#### 3.7.1 Onboard Wi-Fi Test
The FCU2601 carries an AW-AM510 Wi-Fi/Bluetooth combo module by default; this section tests its Wi-Fi function. The module appears in the system as the mlan0 node, so this test targets mlan0.

First load the Wi-Fi module with the following command (it loads automatically at boot by default, so no action is needed).

```plain
root@FCU2601:/# modprobe moal
```

Check whether the module loaded successfully and view the Wi-Fi node it creates.

```plain
root@FCU2601:/# lsmod
Module                  Size  Used by    Not tainted
moal                  516096  0
mlan                  356352  1 moal

root@FCU2601:/# ifconfig mlan0
mlan0     Link encap:Ethernet  HWaddr 10:68:38:29:5F:9B
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

STA mode test:

In this mode the board acts as a station connecting to a wireless network. In this test the router uses WPA encryption, the hotspot name is forlinx-wlan, and the password is fl03123102650. Since network environments vary, adjust these settings to match your setup:

For example:

```plain
root@FCU2601:/# fltest_wifi.sh -i mlan0 -s "forlinx-wlan" -p fl03123102650
wifi mlan0
ssid forlinx-wlan
pasw fl03123102650
[  299.633386] IPv6: ADDRCONF(NETDEV_UP): mlan0: link is not ready
waiting...
try to connect again...
[  305.480233] IPv6: ADDRCONF(NETDEV_CHANGE): mlan0: link becomes ready
udhcpc: started, v1.27.2
udhcpc: sending discover
udhcpc: sending select for 192.168.81.73
udhcpc: lease of 192.168.81.73 obtained, lease time 28800
deleting routers
adding dns 222.222.202.202
adding dns 222.222.222.222
Finshed!
```

In the command above:

-i wlan0 or wlan1; determine which node maps to which module before use, based on your setup;

-s the actual name of the Wi-Fi hotspot to connect to;

-p takes the Password parameter, which is the password of the Wi-Fi hotspot to connect to; if the hotspot has no password, set the -p argument to NONE

After this step, the Wi-Fi connection is established.

Test Wi-Fi by pinging a domain name or IP address.

```plain
root@FCU2601:/# ping www.baidu.com -c 3 -I mlan0
PING www.a.shifen.com (220.181.38.150) from 192.168.81.73 mlan0: 56(84) bytes of data.
64 bytes from 220.181.38.150 (220.181.38.150): icmp_seq=1 ttl=54 time=10.6 ms
64 bytes from 220.181.38.150 (220.181.38.150): icmp_seq=2 ttl=54 time=49.6 ms
64 bytes from 220.181.38.150 (220.181.38.150): icmp_seq=3 ttl=54 time=11.5 ms

--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2002ms
rtt min/avg/max/mdev = 10.675/23.987/49.695/18.182 ms
```

AP mode test:

Note: Before this test, make sure the Gigabit Ethernet port eth0 is connected to the network and the network is working;

Check the driver load status, using the AW-AM510 module as an example.

```plain
root@FCU2601:/# lsmod
Module                  Size  Used by    Not tainted
moal                  516096  0
mlan                  356352  1 moal
```

Create the hotspot

Wi-Fi hotspot name: OK3568_WIFI_AP

Password: 12345678

```plain
root@FCU2601:/# fltest_hostapd.sh
killall: hostapd: no process killed
Stopping dnsmasq: OK
Starting dnsmasq: Configuration file: /etc/hostapd-2.4g.conf
Using interface uap0 with hwaddr 12:68:38:29:60:9b and ssid "OK3568_WIFI_2.4G_AP"
OK
[   66.499651] netlink: 'hostapd': attribute type 213 has an invalid length.
[   66.507693] IPv6: ADDRCONF(NETDEV_CHANGE): uap0: link becomes ready
uap0: interface state UNINITIALIZED->ENABLED
uap0: AP-ENABLED
```

Once complete, a phone can find the hotspot OK3568_WIFI_2.4G_AP with password 12345678; connect to it to access the Internet.

### 3.8 Setting the Time (RTC)
The RTC test uses the date and hwclock tools to set the software and hardware clocks, then checks whether the software clock reads back the RTC time after an OS reboot. The FCU2601 ships with a coin-cell battery installed by default.

Check the system time

```plain
root@FCU2601:/# date
```

Set the time with the following command

```plain
root@FCU2601:/# date -s "2018-09-11 15:01:00"
Tue Sep 11 15:01:00 CST 2018
```

Check the hardware time

```plain
root@FCU2601:/# hwclock -w
```

hwclock -w — writes the system time to the RTC chip, making the RTC usable. Without this step, the system time will not be updated on the next boot.

Power off and reboot the system. The software and hardware clocks are now synchronized, confirming the RTC works correctly.

```plain
root@FCU2601:/# date
Tue Sep 11 15:02:47 CST 2018
```

**Note: The default time zone is TZ="Asia/Shanghai".**

### 3.9 mSATA SSD Interface Test
#### 3.9.1 SSD Storage Test
The FCU2601 provides one Mini-PCIE slot for a SATA-protocol mSATA SSD. Insert the mSATA SSD into the expansion board's drive slot before powering on; after booting Linux, run fdisk -l to confirm the device enumerates successfully.

```plain
root@FCU2601:/# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 60620800 sectors,  928M
Logical sector size: 512
Disk identifier (GUID): 9b560000-0000-4d1d-8000-7052000028bb
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 60620766

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K misc
     3           32768           98303 32.0M boot
     4           98304          163839 32.0M recovery
     5          163840          229375 32.0M logo
     6          229376        60620766 28.7G
Disk /dev/sda: 119 GB, 128035676160 bytes, 250069680 sectors
15566 cylinders, 255 heads, 63 sectors/track
Units: cylinders of 16065 * 512 = 8225280 bytes

Device  Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
/dev/sda1    0,1,1       1023,254,63         63  250067789  250067727  119G 83 Linux
```

Check the drive's default mount point.

```plain
root@FCU2601:/# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       29G  1.7G   26G   6% /
devtmpfs       devtmpfs  1.9G     0  1.9G   0% /dev
tmpfs          tmpfs     2.0G     0  2.0G   0% /dev/shm
tmpfs          tmpfs     2.0G  328K  2.0G   1% /tmp
tmpfs          tmpfs     2.0G  280K  2.0G   1% /run
/dev/mmcblk0p5 ext2      4.9M   34K  4.6M   1% /run/media/mmcblk0p5
/dev/sda1      ext4      117G   61M  111G   1% /run/media/sda1
```

The mSATA SSD is mounted at /run/media/sda1.

#### 3.9.2 Read/Write Speed Test
Write test:

```plain
root@FCU2601:/# dd if=/dev/zero of=/run/media/sda1/test.img bs=1024K count=2048 conv=fsync
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 8.82081 s, 243 MB/s
```

Read test:

```plain
root@FCU2601:/# dd if=/run/media/sda1/test.img of=/dev/null bs=1024K count=2048
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 5.28604 s, 406 MB/s
```

### 3.10 microSD Card Interface Test
#### 3.10.1 microSD Card Storage Test
The FCU2601 provides one microSD card interface. Insert a microSD card into the slot on the carrier board, then run fdisk -l to confirm the device is enumerated successfully.

```plain
root@FCU2601:/# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 60620800 sectors,  928M
Logical sector size: 512
Disk identifier (GUID): 9b560000-0000-4d1d-8000-7052000028bb
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 60620766

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K misc
     3           32768           98303 32.0M boot
     4           98304          163839 32.0M recovery
     5          163840          229375 32.0M logo
     6          229376        60620766 28.7G
Device       Boot StartCHS    EndCHS        StartLBA     EndLBA    Sectors  Size Id Type
/dev/mmcblk1p1    0,130,3     1023,254,63       8192   31101839   31093648 14.8G  c Win95 FAT32 (LBA)
```

Check the default mount point of the disk.

```plain
root@FCU2601:/# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/root      ext4       29G  1.7G   26G   6% /
devtmpfs       devtmpfs  1.9G     0  1.9G   0% /dev
tmpfs          tmpfs     2.0G     0  2.0G   0% /dev/shm
tmpfs          tmpfs     2.0G  372K  2.0G   1% /tmp
tmpfs          tmpfs     2.0G  288K  2.0G   1% /run
/dev/mmcblk0p5 ext2      4.9M   34K  4.6M   1% /run/media/mmcblk0p5
/dev/mmcblk1p1 vfat       15G  6.6G  8.3G  44% /run/media/mmcblk1p1
```

The microSD card is mounted at /run/media/mmcblk1p1.

#### 3.10.2 Read/Write Speed Test
Write test:

```plain
root@FCU2601:/# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 24.6959 s, 21.2 MB/s
```

Read test:

```plain
root@FCU2601:/#dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 8.31059 s, 63.1 MB/s
```

### 3.11 Watchdog Test
The watchdog is a feature commonly used in embedded systems. The FCU2601 uses an external hardware watchdog (TPL5010) on the carrier board. By default, the driver feeds it continuously. A DIP switch on the carrier board determines whether the watchdog reset signal is active.

Run the following command to check whether the watchdog driver is in auto-feed mode.

```plain
root@FCU2601:/# cat /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
auto feeding
```

Turn on the watchdog DIP switch on the carrier board, then disable driver auto-feeding with the following command; the system resets after 50 seconds.

```plain
root@FCU2601:/# echo 0 > /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
```

Now check the watchdog driver status:

```plain
root@FCU2601:/# cat /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
manual feed
```

To feed the watchdog manually once, run:

```plain
root@FCU2601:/# echo 1 > /sys/bus/platform/devices/wd_tpl5010/tp5010_wdt
```

This command performs one feed; the system will not reset during the current 50-second window.

**Note: Once you disable driver auto-feeding with a command, it cannot be re-enabled without rebooting the system. Until then, feed the watchdog manually at least once every 50 seconds to prevent a reset.**

### 3.12 CAN Test
The FCU2601 provides two CAN bus interfaces. Wiring: connect the CAN H terminal to the H terminal of the other CAN device, and the CAN L terminal to its L terminal.

**Note: The CAN interfaces have no internal termination resistors by default. If needed, add external termination resistors.**

Short CAN0 to CAN1, then run the following commands in the board terminal:

Each CAN data frame supports up to 8 data bytes.

Configure CAN0/CAN1 and set the baud rate to 500KB.

```plain
root@FCU2601:/# ip link set can0 down
root@FCU2601:/# ip link set can1 down
root@FCU2601:/# ip link set can0 type can bitrate 500000
root@FCU2601:/# ip link set can1 type can bitrate 500000
root@FCU2601:/# ip link set can0 up 
root@FCU2601:/# ip link set can1 up
```

Use CAN0 as the server (run the following command on the server first).

```plain
root@FCU2601:/# candump can0 &
```

Use CAN1 as the client (the client sends data).

```plain
root@FCU2601:/# cansend can1 123#DEADBEEF
can0  123   [4]  DE AD BE EF
```

### 3.13 Buzzer Test
The FCU2601 carrier board has a passive buzzer. You can program it as needed, or configure and test it through the Linux filesystem interface with the following commands:

```plain
root@FCU2601:/# echo 0 > /sys/class/pwm/pwmchip2/export
root@FCU2601:/# echo 1000000 > /sys/class/pwm/pwmchip2/pwm0/period
root@FCU2601:/# echo 500000 > /sys/class/pwm/pwmchip2/pwm0/duty_cycle
root@FCU2601:/# echo "normal" > /sys/class/pwm/pwmchip2/pwm0/polarity
root@FCU2601:/# echo 1 > /sys/class/pwm/pwmchip2/pwm0/enable
root@FCU2601:/# echo 0 > /sys/class/pwm/pwmchip2/pwm0/enable
```

### 3.14 HDMI Display and Interface Function Test
#### 3.14.1 Interface Function Overview
The FCU2601 supports one HDMI display and runs a Linuxfs system customized with buildroot.

After the FCU2601 boots, the desktop appears as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/188.png)

#### 3.14.2 WiFi Test
"WIFI" is a tool for configuring Wi-Fi. The FCU2601 has an onboard AW-AM510 module by default. The Wi-Fi module appears as an mlan node in the system; this test uses mlan0 (use the corresponding node when multiple devices are present):

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/189.png)

App icon

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/190.png)

App interface

Select mlan0, enter the SSID of the router to connect to in the SSID field and the router password in the PAWD field, then click connect to join the router over Wi-Fi. Enter a valid IP in the IP field and click ping to check whether the Wi-Fi network is reachable.

Open the Wi-Fi test app, enter the correct network name and password, click connect, wait 5 seconds, then click status to check the connection status.

After connecting, click ping to run a network test.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/191.png)

#### 3.14.3 Network Configuration Test
The FCU2601 supports dhcp and static modes through the "Network" configuration app. In static mode, you can configure the IP address, subnet mask, gateway, and DNS.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/192.png)

App icon

The DHCP mode screen is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/193.png)

Select DHCP, choose the network interface to configure in the interface field, then click Apply and Restart Network at the bottom of the screen. The network restarts and obtains an IP automatically.

The static mode screen is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/194.png)

Select the network interface to configure in the interface field, then enter the desired IP in the ip field, the subnet mask in the netmask field, the gateway in the geteway field, and DNS in the dns field.

**Note: The IP and other settings configured in STATIC mode are saved to the relevant system configuration files, so they are used after every reboot. In DHCP mode this does not apply: an IP address is assigned dynamically on each boot.**

#### 3.14.4 Ping Test
"Ping" is a GUI version of the ping command commonly used for network testing:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/195.png)

App icon

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/196.png)

App interface

Enter the target IP to ping in the hostname field and click the ping button; the ping results appear in the result field. Click stop to end the test and clear to empty the result field.

#### 3.14.5 Browser Test
"simplebrowser" is a simple, practical web browser. Ensure the network is connected and DNS is available before accessing external sites. At startup, the browser opens the Forlinx Embedded official website by default, as shown below:

**Note: An incorrect board time causes certificate errors. After using the browser, either do not power off immediately or run the sync command from the command line before powering off; otherwise the browser may exit abnormally and fail to run, and the only fix is to reflash the image.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/197.png)

Exit the browser via File->Quit in the top navigation bar.

#### 3.14.6 RTC Test
Use the "RTC" app to view and set the current system time:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/198.png)

App icon

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/199.png)

App interface

Click set to configure the time, then click save to finish.

With the RTC backup battery installed, reboot the board to confirm the RTC clock was set successfully.

#### 3.14.7 UART Test
Click the desktop icon to test the onboard UART interfaces of the FCU2601.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/200.png)

Application Icon

The FCU2601 serial ports support odd and even parity, 8 data bits, and 1 stop bit.

Open the test program.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/201.png)

Application Interface

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/202.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/203.png)

Click the Connect button in the upper-left corner, then press "g" on the keyboard to send automatically.

#### 3.14.8 CPU Frequency Configuration Test
Click the desktop icon to open the submenu:

->

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/204.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/205.png)

Application Icon

The FCU2601 CPU runs at up to 1.9 GHz. By default the CPU scales its frequency dynamically with the load, but you can also set a fixed CPU frequency.

Click the Power icon on the desktop to open the CPU frequency settings page:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/206.png)

Set Userspace Governor: Set the CPU frequency in user space.

Set Frequency A55: Set the CPU frequency.

For example, to set a fixed frequency, first click Set Userspace Governor, click run, then return to the screen above and click Set Frequency A55 to make the change.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/207.png)

Select the frequency you need and apply it.

### 3.15 Common Service Tests
The preinstalled services below occupy about 200 MB of file system space.

#### 3.15.1 OpenSSL Basic Environment Test
The Secure Sockets Layer (SSL) protocol is the most widely used application protocol; it encrypts data with ciphers such as AES, DES, and 3DES to protect it in transit.

Set the environment variable before using OpenSSL.

```plain
root@FCU2601:/# export OPENSSL_CONF=/etc/ssl/openssl.cnf
```

Test the speed of symmetric encryption and RSA.

```plain
root@FCU2601:/# openssl speed rsa1024
Doing 1024 bit private rsa's for 10s: 5647 1024 bit private RSA's in 10.00s
Doing 1024 bit public rsa's for 10s: 127632 1024 bit public RSA's in 10.00s
OpenSSL 1.0.2q  20 Nov 2018
built on: reproducible build, date unspecified
options:bn(64,64) rc4(ptr,char) des(idx,cisc,16,int) aes(partial) idea(int) blowfish(ptr)
compiler: aarch64-buildroot-linux-gnu-gcc -I. -I.. -I../include  -fPIC -DOPENSSL_PIC -DZLIB_SHARED -DZLIB -DOPENSSL_THREADS -D_REENTRANT -DDSO_DLFCN -DHAVE_DLFCN_H -D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64  -Os  -Wall -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM
                  sign    verify    sign/s verify/s
rsa 1024 bits 0.001771s 0.000078s    564.7  12763.2
```

Test the AES symmetric encryption algorithm:

```plain
root@FCU2601:/# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0714908 s, 82.8 kB/s
root@FCU2601:/# openssl enc -aes-128-cbc -e -in test -out test.enc -pass pass:123
root@FCU2601:/# openssl enc -aes-128-cbc -d -in test.enc -out test.dec -pass pass:123
root@FCU2601:/# diff test test.dec
```

Test the DES symmetric encryption algorithm:

```plain
root@FCU2601:/# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0702961 s, 84.2 kB/s
root@FCU2601:/# openssl enc -des-ede3-cbc -e -in test -out test.enc -pass pass:123
root@FCU2601:/# openssl enc -des-ede3-cbc -d -in test.enc -out test.dec -pass pass:123
root@FCU2601:/# diff test test.dec
```

#### 3.15.2 MySQL Feature Overview
MySQL is a popular open-source relational database management system widely used for data storage and management in applications and websites. It offers powerful features and flexible configuration options that let developers organize and manipulate data efficiently.

Below are some simple MySQL feature test examples.

**Note: The system time must be accurate before using MySQL; otherwise initialization fails.**

Initialize MySQL before the first use.

```plain
root@FCU2601:/# /usr/local/mysql8/bin/mysqld --initialize
```

If initialization fails, remove all files under /usr/local/mysql8/data/ and initialize again.

Start mysql.service.

```plain
root@FCU2601:/# /usr/local/mysql8/support-files/mysql.server start
Starting MySQL... SUCCESS!
```

Connect to the local database.

Check the initialization password in data/error.log in the current directory.

```plain
root@FCU2601:/# cat /usr/local/mysql8/data/error.log | grep "password" | cut -d' ' -f13
Ix&bhcerB1l#
```

Log in to the local database.

```plain
root@FCU2601:/# /usr/local/mysql8/bin/mysql -h 127.0.0.1 -u root -p
Enter password:(enter the initialization password shown in the previous step)
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.32

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

Change the root user login password to 123456.

```plain
mysql> alter user 'root'@'localhost' identified by '123456';
Query OK, 0 rows affected (0.02 sec)
```

Query MySQL version information.

```plain
mysql> select version();
+-----------+
| version() |
+-----------+
| 8.0.32    |
+-----------+
1 row in set (0.00 sec)
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

#### 3.15.3 ModBus Function Overview
Modbus is a communication protocol for transferring data in automation systems. It is widely used in industrial control and monitoring for data exchange between devices. The protocol is simple, reliable, and easy to implement, so it has been widely adopted in many industrial devices and systems.

The Modbus libraries are preinstalled on FCU2601. Run the test routines below.

RTU Mode Communication Test

Connect the two RS485 ports of FCU2601 with a serial cable. This test pairs RS485_1 with RS485_2, i.e., /dev/ttyS9 with /dev/ttyS5.

Run the RTU test server.

```plain
root@FCU2601:/# unit-test-server rtu &
```

Run the RTU test client.

```plain
root@FCU2601:/# unit-test-client rtu
```

TCP Mode Communication Test

This test uses the 127.0.0.1 loopback address to verify that the libmodbus5 library works.

Run the RTU test server.

```plain
root@FCU2601:/# unit-test-server tcp &
```

Run the RTU test client.

```plain
root@FCU2601:/# unit-test-client tcp
```

#### 3.15.4 MQTT Function Overview
MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for efficient IoT communication over low-bandwidth, unreliable networks. It is simple, reliable, and has low network overhead, so it is widely used in IoT applications.

Here are some simple MQTT test examples.

Subscribe to messages.

```plain
root@FCU2601:/# mosquitto_sub -t test &
```

Publish a message.

```plain
root@FCU2601:/# mosquitto_pub -t test -m "hello world"
```

#### 3.15.5 FTP Service Function Overview
The vsftpd service starts automatically at boot. Enter [ftp://192.168.0.232/](ftp://192.168.0.232/) in the address bar of File Explorer on a PC to access it; the root filesystem directory of FCU2601 appears.

The screenshot below shows FTP access from File Explorer on a PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/208.png)

By default, the connection uses an anonymous login with no read or write permission. To log in as forlinx, right-click in a blank area and select Login.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/209.png)

A login window then pops up. In the authentication dialog, enter username forlinx and password forlinx;

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/210.png)

### 3.16 Changing the Boot Logo
FCU2601 supports changing to a custom boot logo without rebuilding the image.

**Note: The added bmp image must be rotated 180°.**

Rotate the image as follows:

- Open the image in the Paint tool built into Windows;
- Save it in bmp format; select a bit depth such as 24-bit;
- Click the rectangle on the left of the Image bar to make a selection;
- Click the image to edit, right-click it, and choose Rotate -> Rotate 180°;
- Check the edited image with right-click -> Properties.

Copy the uboot-stage logo.bmp and kernel-stage logo_kernel.bmp to a USB drive (both stages can use the same image). The example image is 480x272 (the resolution may differ) with a bit depth of 24 (the bit depth must be the same). Insert the USB drive into a USB port on FCU2601.

```plain
root@FCU2601:/# cd /run/media/sdb1/
root@FCU2601:/# ls
logo.bmp         logo_kernel.bmp
```

Then run the following commands to flash the logo into the system.

```plain
root@FCU2601:/run/media/sdb1# cat logo.bmp > logo.img
root@FCU2601:/run/media/sdb1# truncate -s %512 logo.img
root@FCU2601:/run/media/sdb1# cat logo_kernel.bmp >> logo.img
root@FCU2601:/run/media/sdb1# dd if=logo.img of=/dev/block/by-name/logo
10801+1 records in
10801+1 records out
5530166 bytes (5.5 MB, 5.3 MiB) copied, 2.84201 s, 1.9 MB/s
root@FCU2601:/run/media/sdb1# reboot
```

After reboot, the logo has been replaced.

## 4. System Firmware Update
The FCU2601 platform can flash the system to eMMC from a microSD card for system recovery or upgrades.

**Note:** 

- **The microSD card capacity is limited to 16G in tests; cards of 32G or larger may fail to flash;**
- **microSD card flashing also opens a command line as the root@buildroot user. Wait patiently for flashing to finish.**

Copy SDDiskTool_v1.69.zip from the tools directory of the user materials to any directory in Windows. Run SD_Firmware_Tool.exe as administrator.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/211.png)

Select the disk device, check "Firmware Upgrade", and select update.img. Click Start Creating.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/212.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/213.png)

Insert the microSD card into the board and boot; the system starts flashing automatically. When flashing finishes, both the screen and the serial console show:

Please remove SD CARD!!!, wait for reboot.

At this point, remove the microSD card; the system reboots automatically (do not power off directly).

In mass production, use the heartbeat LED on the SoM to check whether flashing is complete. The heartbeat LED behaves as follows during flashing:

- Kernel boot stage: RUN LED in heartbeat mode, blinking at regular intervals.

- Flash preparation stage: RUN LED off.

- Flashing in progress: RUN LED steady on.

- Flashing complete: RUN LED in heartbeat mode, blinking at regular intervals.

- Flashing status on the serial console:


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Software_User_Manual_Linux4.19-EN/214.png)

If the system does not reboot automatically after removing the microSD card, a manual reboot also completes the flash. As shown above, flashing takes about 6 minutes; wait patiently for it to finish.
