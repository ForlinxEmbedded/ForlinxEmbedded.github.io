# Forlinx Desktop User's Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. FCU3501 Embedded Control Unit Introduction
### 1.1 Product Overview
The FCU3501 Embedded Control Unit is based on the Rockchip RK3588/RK3588J processor with a 4×Cortex-A76+4×Cortex-A55 architecture (A76 up to 2.4 GHz, A55 up to 1.8 GHz). It supports 8K encoding/decoding, delivers 6 TOPS of NPU compute, and can be fitted with an AI accelerator card such as the Hailo-8 26 TOPS M.2 module. Designed for on-device AI inference in intelligent transportation, smart factories, smart buildings, and similar industries, it uses a fanless passive cooling design and has passed stringent environmental and EMC tests to ensure stable, reliable operation.

The FCU3501 combines a FET3588J-C System-on-Module (SoM) with a carrier board and provides a wide range of industrial-grade peripheral interfaces, including RS485, RS232, USB, RGMII, HDMI, PCIe, I2S, SDIO, DI, and DO. It supports optional modules such as AI accelerator cards, 4G/5G modules, and M.2 SSDs, so you can select the options that fit your application.

### 1.2 Software Specifications
#### 1.2.1 Linux 5.10.209 System Software Resources
| Device | Driver source location in the kernel | Device name |
| --- | --- | --- |
| LCD backlight driver | drivers/video/backlight/pwm_bl.c | /sys/class/backlight |
| USB flash drive | drivers/usb/storage/ |  |
| USB mouse | drivers/hid/usbhid/ | /dev/input/mice |
| Ethernet | drivers/net/ethernet/stmicro/stmmac |  |
| SD/microSD card driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk1pX |
| eMMC driver | drivers/mmc/host/dw_mmc-rockchip.c | /dev/block/mmcblk2pX |
| OV13850 | drivers/media/i2c/ov13850.c | /dev/videoX |
| LCD controller | drivers/gpu/drm/rockchip/rockchip_drm_vop.c |  |
| MIPI CSI | drivers/phy/rockchip/phy-rockchip-mipi-rx.c |  |
| MIPI DSI | drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c |  |
| LCD touch driver | drivers/input/touchscreen/gt9xx/*   drivers/input/touchscreen/edt-ft5x06.c | /dev/input/eventX |
| RTC (real-time clock) driver | drivers/rtc/rtc-rx8010.c   drivers/rtc/rtc-pcf8563.c | /dev/rtc0 |
| Serial port | drivers/tty/serial/8250/8250_dw.c | /dev/ttySX |
| Button driver | drivers/input/keyboard/adc-keys.c | /dev/input/eventX |
| LED | drivers/leds/leds-gpio.c |  |
| I2S | sound/soc/rockchip/rockchip_i2s.c |  |
| Audio driver | sound/soc/codecs/rk817_codec.c | /dev/snd/ |
| PMIC | drivers/mfd/rk808.c |  |
| PCIE | drivers/pci/controller/pcie-rockchip.c |  |
| Watchdog | drivers/watchdog/dw_wdt.c |  |
| SPI | drivers/spi/spi-rockchip.c |  |
| PWM | drivers/video/backlight/pwm_bl.c |  |


#### 1.2.2 eMMC Partition Layout
| Partition index | Name | Offset/block | Size/block | Contents |
| --- | --- | --- | --- | --- |
| N/A | loader | 0x00000000 | 0x00004000 | MiniLoaderAll.bin |
| 1 | uboot | 0x00004000 | 0x00004000 | uboot.img |
| 2 | misc | 0x00006000 | 0x00002000 | misc.img |
| 3 | boot | 0x00008000 | 0x00020000 | boot.img |
| 4 | recovery | 0x00028000 | 0x00050000 | recovery.img |
| 5 | oem | 0x01c78000 | 0x00040000 | oem.img |
| 6 | rootfs | 0x00078000 | 0x01c00000 | rootfs.img |
| 7 | userdata | 0x01cb8000 |  | userdata.img |


### 1.3 Hardware-to-Software Mapping
| Hardware terminal | Device accessed by the application | Notes |
| --- | --- | --- |
| DEBUG | /dev/ttyFIQ0 | RS232_TXD2 debug serial port |
| DI0 | /sys/class/gpio-input/DIN0/state | Input |
| DI1 | /sys/class/gpio-input/DIN1/state | Input |
| DO0 | /sys/class/leds/DO0/brightness | Output |
| DO1 | /sys/class/leds/DO1/brightness | Output |
| LED1 | /sys/class/leds/work2/brightness | Onboard heartbeat LED |
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
| RS485_10/RS232_10 | /dev/ttyXRUSB3 | Multiplexed RS485/RS232 interface |
| RS485_11/RS232_11 | /dev/ttyXRUSB0 | Multiplexed RS485/RS232 interface |
| ETH0 (Gigabit) | eth0 | Wired Ethernet |
| ETH1 (Gigabit) | eth1 | Wired Ethernet |
| USB flash drive | /dev/sdx | External storage |
| microSD card | /dev/mmcblk1 | External storage |


## 2. FCU3501 Embedded Control Unit Usage Notes
Download the software and hardware documentation and source code from the cloud drive link provided by Forlinx. The Linux kernel version is 5.10.209. For details, see the FCU3501 user documentation. All directories mentioned in this manual are relative to the FCU3501 user documentation root.

### 2.1 Power Supply
The product has a rated DC 24 V input and supports a wide DC 9~36 V input range.

| Board Photo | Description |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/009.png) |  |


The power indicator shows both the power supply status and the system status, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/010.png)

When the FCU3501 is powered on, the PWR red LED stays lit, indicating the operating power status of the Embedded Control Unit;

The RUN LED blinks in a heartbeat pattern to indicate the system operating status of the Embedded Control Unit.

### 2.2 User Login
The FCU3501 supports two ways to log in to the system: debug serial port and network login. This manual describes both login methods.

**Note:**

- **Serial terminal login, forlinx user: username forlinx, password forlinx.**

- **Serial terminal login, root user: username root, password root.**

- **Serial settings: baud rate 115200, 8 data bits, 1 stop bit, no parity, no flow control.**

- **Hardware requirements: an RJ45-to-RS232 debug serial cable that meets the Cisco switch console port standard is needed to connect the PC to the Embedded Control Unit**

- **Software requirements: install a terminal emulator on the Windows PC; several options are available, so use the serial terminal program you are familiar with.**

#### 2.2.1 Debug Serial Port
The FCU3501 debug serial port is labeled Debug on the panel, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/011.png)

The Debug serial port is used only to view board runtime information during debugging; it is not intended for any other purpose.

- Connect the PC to the FCU3501 Debug port with an RJ45-to-RS232 debug serial cable that meets the Cisco switch console port standard.

- Open a terminal emulator on the Windows 10 PC (PuTTY is supplied in the Tools folder of the materials package) and configure it as follows:

Select the COM port that matches your serial connection and configure the relevant settings in the Serial menu on the left.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/012.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/013.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/014.png)

**Note: The baud rate used here is 115200 with 8 data bits, no parity, 1 stop bit, and no flow control. After configuration, power on the FCU3501 to see the debug messages.**

```plain
DDR 3488111f83 cym 24/04/12-12:49:26,fwver: v1.17
LPDDR4X, 2112MHz
channel[0] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[1] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[2] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
channel[3] BW=16 Col=10 Bk=8 CS0 Row=16 CS=1 Die BW=16 Size=1024MB
Manufacturer ID:0x13
CH0 RX Vref:29.3%, TX Vref:24.8%,0.0%DQ rds:
h0 l0, h0 l2, h0 l0, h0 l0, h2 l0, h2 l0, h0 l0, h0 l0,
h1 l0, h0 l0, h1 l0, h1 l0, h0 l0, h0 l0, h1 l0, h0 l1,

CH1 RX Vref:29.3%, TX Vref:24.8%,0.0%DQ rds:
h0 l0, h1 l0, h3 l0, h0 l0, h2 l0, h0 l0, h0 l0, h1 l0,
h1 l0, h0 l0, h0 l0, h1 l0, h1 l0, h0 l0, h0 l0, h4 l0,

CH2 RX Vref:28.9%, TX Vref:23.8%,0.0%DQ rds:
h6 l0, h0 l0, h3 l0, h1 l0, h1 l0, h0 l0, h2 l0, h2 l0,
h1 l0, h2 l0, h1 l0, h2 l0, h5 l0, h0 l1, h0 l0, h1 l0,

CH3 RX Vref:27.9%, TX Vref:24.8%,0.0%DQ rds:
h5 l0, h0 l0, h5 l0, h0 l0, h7 l0, h7 l0, h0 l0, h0 l0,
h1 l0, h1 l0, h1 l0, h2 l0, h0 l0, h1 l0, h0 l0, h0 l0,

stride=0x2, ddr_config=0x0
hash ch_mask0-1 0x20 0x40, bank_mask0-3 0xa00 0x1400 0x2800 0x0, rank_mask0 0x0
change to F1: 528MHz
change to F2: 1068MHz
change to F3: 1560MHz
change to F0: 2112MHz
out
DR V1.15 ec2fae0c96 huan.he 22/11/08-20:06:42
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

Log in with a user account to access the command line;

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

Ubuntu 22.04.4 LTS FCU3501 ttyFIQ0

FCU3501 login:
```

#### 2.2.2 Network Login
Besides logging in through the debug serial port, the FCU3501 also supports SSH network login to the Embedded Control Unit and FTP file transfer. For convenience, the eth0 IP defaults to 192.168.0.232 after boot.

Connect the Embedded Control Unit and the PC to the same switch, or link them directly with a network cable, and set the PC to the 192.168.0.0 subnet.

Then, in the Windows command prompt, enter ssh forlinx@192.168.0.232 with password forlinx. SSH does not permit root login due to security settings.

**Note: Press the win+R key combination, type cmd, and press Enter to open the Windows command prompt.**

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

forlinx@FCU3501:~$
```

## 3. FCU3501 Features
### 3.1 DI/DO Test
#### 3.1.1 Interface Description
The DI/DO interfaces are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/015.png)

The digital input interfaces default to a high level; grounding one switches it to a low level.

#### 3.1.2 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by the Application | Remarks |
| --- | --- | --- |
| DI0 | /sys/class/gpio-input/DIN0/state | Input |
| DI1 | /sys/class/gpio-input/DIN1/state | Input |
| DO0 | /sys/class/leds/do0/brightness | Output |
| DO1 | /sys/class/leds/do1/brightness | Output |


### 3.1.3 Command-Line Test
#### DO Test

Operate the DO relay, using DO1 as an example.

```plain
root@FCU3501:~# echo 0 > /sys/class/leds/DO1/brightness
root@FCU3501:~# echo 1 > /sys/class/leds/DO1/brightness
```

The commands above control the closed and open states of the DO1 relay. Note that writing 1 closes the relay.

DI Input Test

First, check the DI state, using DI1 as an example.

```plain
root@FCU3501:~# cat /sys/class/gpio-input/DIN1/state
1
```

As you can see, DI1 is high. Short the DI1 interface to ground and run the command again:

```plain
root@FCU3501:~# cat /sys/class/gpio-input/DIN1/state
0
```

As you can see, both DIs now read low.

### 3.2 Serial Port Test
#### 3.2.1 Interface Description
Board Photo

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/016.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/017.png)

#### 3.2.2 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by the Application | Remarks |
| --- | --- | --- |
| RS485_A0/RS485_B0 | /dev/ttyS0 | RS485_0 interface |
| RS485_A1/RS485_B1 | /dev/ttyS4 | RS485_1 interface |
| RS485_R0/RS485_T0 | /dev/ttyS5 | RS232_0 interface |
| RS485_R1/RS485_T1 | /dev/ttyS6 | RS232_1 interface |
| RS485_R2/RS485_T2 | /dev/ttyS7 | RS232_2 interface |
| RS485_R3/RS485_T3 | /dev/ttyS9 | RS232_3 interface |


#### 3.2.3 Command-Line Test
Using RS485_1 as an example: to test other RS485 interfaces, simply change the device node name of the corresponding interface;

This test uses communication with a PC as an example. Connect an RS232-to-RS485 module to the FCU3501 RS485_1 interface as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/018.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/019.png)

Open putty.exe on the PC, set the serial port and baud rate, then open the software:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/020.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/021.png)

RS485_1 Interface Transmit Test:

In the FCU3501 terminal, run the following command to set the RS485_1 interface baud rate to 115200.

```plain
root@FCU3501:~# stty -F /dev/ttyS4 raw speed 115200
```

Have the RS485_1 interface send data:

```plain
root@FCU3501:~# echo "forlinx_485_test" > /dev/ttyS4
```

RS485_1 sends "forlinx_485_test" to the PC at 115200 baud, and it is received in putty on the PC.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/022.png)

RS485_1 Interface Receive Test:

Have the RS485_1 interface receive data:

```plain
root@FCU3501:~# cat /dev/ttyS4
```

Enter data in putty on the PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/023.png)

The PC sends "abcdefg" at 115200 baud, and the FCU3501 RS485_1 interface receives it:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/024.png)

### 3.3 System Reset
Press the Reset button and the system reboots immediately. The debug serial port also prints the boot messages.

The Reset button is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/025.png)

### 3.4 USB Interface Test
#### 3.4.1 USB HOST Interface Storage Test
The USB terminals are shown below:

.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/026.png)

Use a USB flash drive to test the USB function. Insert the drive into a USB port on the FCU3501 Embedded Control Unit, then check where it is mounted:

```plain
root@FCU3501:~# df -Th
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

root@FCU3501:~# ls -l /run/media/
total 8
drwxrwx--- 14 root disk 8192 Jan  1  1970 sda1
```

As you can see, the USB flash drive is mounted at /run/media/sda1.

Write a file to the USB flash drive with the following command, which writes 1 to test.txt:

```plain
root@FCU3501:~# echo 1 > /run/media/sda1/test.txt
root@FCU3501:~# sync
```

Read the test.txt file from the USB flash drive with the following command:

```plain
root@freescale /$ cat /run/media/sda1/test.txt
1
```

You will read back the 1 written earlier.

If the USB flash drive mounts automatically under /run/media/sdxx and its contents can be read and written, the USB port is working.

### 3.5 Wired Ethernet Test
The FCU3501 provides two 10M/100M/1000M auto-negotiating Ethernet ports with RJ45 connectors, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/027.png)

#### 3.5.1 Hardware-to-Software Mapping
| Hardware Terminal | Device Accessed by the Application | Remarks |
| --- | --- | --- |
| ETH0 | eth0 | Gigabit wired network |
| ETH1 | eth1 | Gigabit wired network |


#### 3.5.2 Ethernet Test
The FCU3501 has two onboard Gigabit Ethernet ports. With a network cable connected, the factory default uses a dynamic IP address.

Check the current network connections in NetworkManager:

```plain
root@FCU3501:~#  nmcli con show
NAME                UUID                                  TYPE      DEVICE
Wired connection 1  2f9ed541-0ecc-34af-95f5-d417122660fe  ethernet  eth0
forlinx-wlan        f4baa3ae-84bd-4245-92c4-a4ebc7d0ab8b  wifi      wlan0
test                d7dfb443-2acc-4a3c-8674-04b60376f52b  wifi      --
Wired connection 2  5144903c-3f34-333c-a0c5-0c8666a74d1d  ethernet  --
```

To set a static IP, the following example assigns 192.168.0.232 to eth0:

```plain
root@ok3588:~# nmcli con mod 'Wired connection 1' ipv4.method manual ipv4.addresses 
192.168.0.232/24 ipv4.gateway 192.168.0.1 ipv4.dns 8.8.8.8 connection.autoconnect yes
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/028.png)

Activate the network connection to apply the settings.

```plain
root@ok3588:~# nmcli con up 'Wired connection 1' // Activate the network connection 
Connection successfully activated (D-Bus active path: 
/org/freedesktop/NetworkManager/ActiveConnection/5) 
root@ok3588:~# ifconfig eth0 // Check that the eth0 configuration has taken effect 
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500 
inet 192.168.0.232 netmask 255.255.255.0 broadcast 192.168.0.255 
inet6 fd62:8d70:124:0:ecef:a74d:785c:6b28 prefixlen 64 scopeid 0x0<global> 
inet6 fe80::d9b8:556:85f6:61e0 prefixlen 64 scopeid 0x20<link> 
inet6 fd62:8d70:124:0:6ee4:a417:253a:641e prefixlen 64 scopeid 0x0<global> 
ether de:de:e5:b1:13:ad txqueuelen 1000 (Ethernet) 
RX packets 5498 bytes 1064878 (1.0 MB) 
RX errors 0 dropped 0 overruns 0 frame 0 
TX packets 733 bytes 99567 (99.5 KB) 
TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0 
device interrupt 80
```

From a cmd window on the PC, start iperf3 (Tools\iperf-3.1.3-win64\iperf3.exe in the supplied materials) in listen mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/029.png)

Run the following command on the FCU3501 terminal:

```plain
root@FCU3501:~# iperf3 -c 192.168.0.110 -i 5 -t 60
```

The PC output is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/030.png)

The FCU3501 output is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/031.png)

### 3.6 4G/5G Test
The FCU3501 supports the EM05 4G module and the RM500U and RM500Q 5G modules. Run the tests for the module you selected.

The device nodes for the 4G and 5G modules are:

| Device Model | Node Name |
| --- | --- |
| Quectel EM05 module | usb0 |
| Quectel RM500U module | usb0 |
| Quectel RM500Q module | usb0 |


The 4G and 5G modules use a standard push-to-eject SIM slot; press the SIM card to eject it, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/032.png)

#### 3.6.1 4G/5G Module Detection

Quectel EM05 module

Run the following command on the FCU3501 console to check whether the Quectel EM05 module is detected.

```plain
root@FCU3501:~# lsusb
Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 009 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 010 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 003: ID 2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 005: ID 0bda:d723 Realtek Semiconductor Corp. 802.11n WLAN Adapter
Bus 001 Device 004: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Use ifconfig to confirm that the Quectel EM05 module creates the usb0 node.

Quectel RM500U module

Run the following command on the FCU3501 console to check whether the Quectel RM500U module is detected.

```plain
rroot@FCU3501:~# lsusb
Bus 008 Device 002: ID 2c7c:0900 Quectel Wireless Solutions Co., Ltd. RM500U-CN
Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 009 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 010 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 001 Device 003: ID 0bda:d723 Realtek Semiconductor Corp. 802.11n WLAN Adapter
Bus 001 Device 002: ID 1a40:0101 Terminus Technology Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

#### 3.6.2 4G/5G Internet Access Test

Quectel EM05 module

The following example inserts a China Mobile SIM card to test 4G Internet access and verify external network connectivity:

```plain
root@FCU3501:~# fltest_quectel.sh &
[1] 2109
root@FCU3501:~# eth0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
eth1: flags=4098<BROADCAST,MULTICAST>  mtu 1500
[09-06_17:43:10:615] Quectel_QConnectManager_Linux_V1.6.0.24
[09-06_17:43:10:616] Find /sys/bus/usb/devices/2-1 idVendor=0x2c7c idProduct=0x125, bus=0x002, dev=0x003
[09-06_17:43:10:616] Auto find qmichannel = /dev/qcqmi0
[09-06_17:43:10:616] Auto find usbnet_adapter = usb0
[09-06_17:43:10:616] netcard driver = GobiNet, driver version = V1.6.2.14
[09-06_17:43:10:617] Modem works in QMI mode
[09-06_17:43:10:673] Get clientWDS = 7
[09-06_17:43:10:706] Get clientDMS = 8
[09-06_17:43:10:738] Get clientNAS = 9
[09-06_17:43:10:770] Get clientUIM = 10
[09-06_17:43:10:802] Get clientWDA = 11
[09-06_17:43:10:833] requestBaseBandVersion EM05CEFCR06A04M1G_ND
[09-06_17:43:10:961] requestGetSIMStatus SIMStatus: SIM_READY
[09-06_17:43:10:993] requestGetProfile[1] cmnet///0
[09-06_17:43:11:026] requestRegistrationState2 MCC: 460, MNC: 0, PS: Attached, DataCap: LTE
[09-06_17:43:11:058] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[09-06_17:43:11:058] ifconfig usb0 0.0.0.0
[09-06_17:43:11:065] ifconfig usb0 down
[09-06_17:43:11:122] requestSetupDataCall WdsConnectionIPv4Handle: 0x872e0c80
[09-06_17:43:11:281] ifconfig usb0 up
[09-06_17:43:11:288] dhclient -4 -d --no-pid usb0
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/usb0/02:50:f4:00:00:00
Sending on   LPF/usb0/02:50:f4:00:00:00
Sending on   Socket/fallback
DHCPREQUEST for 10.70.51.22 on usb0 to 255.255.255.255 port 67 (xid=0x7949af2c)
DHCPACK of 10.70.51.22 from 10.70.51.21 (xid=0x2caf4979)
bound to 10.70.51.22 -- renewal in 3013 seconds.
```

On success, an IP address is obtained automatically. Use ping to test network connectivity.

```plain
root@FCU3501:~# ping www.baidu.com -I usb0 -c 5
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

Quectel RM500U module

The following example inserts a China Mobile SIM card to test 5G Internet access and verify external network connectivity:

```plain
root@FCU3501:~#  fltest_quectel.sh > /dev/null &
[1] 2279
root@FCU3501:~#
root@FCU3501:~# Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/


root@FCU3501:~# Listening on LPF/usb0/72:30:d0:23:95:a3
Sending on   LPF/usb0/72:30:d0:23:95:a3
Sending on   Socket/fallback
DHCPREQUEST for 192.168.42.2 on usb0 to 255.255.255.255 port 67 (xid=0x191a4d21)
DHCPACK of 192.168.42.2 from 192.168.42.1 (xid=0x214d1a19)
bound to 192.168.42.2 -- renewal in 34021 seconds.
```

On success, an IP address is obtained automatically. Use ping to test network connectivity.

```plain
root@FCU3501:~# ping www.baidu.com -I usb0 -c 5
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
The WiFi antenna marking on the enclosure is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/033.png)

#### 3.7.1 Onboard Wi-Fi Test
The FCU3501 ships with an onboard 8723DU Wi-Fi/Bluetooth combo module. This section tests the Wi-Fi function; the module appears in the system as the mlan0 node targeted by this test.

Load the Wi-Fi module with the following command (it loads automatically at boot, so no action is normally needed).

```plain
root@FCU3501:~# modprobe moal
```

Check that the module loaded and that the Wi-Fi node was created.

```plain
root@FCU3501:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal

root@FCU3501:~# ifconfig wlan0
mlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 10:68:38:29:66:17  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### 3.7.2 STA Mode Test
In this mode the board acts as a station and joins a wireless network. In this test the router uses WPA encryption, the Wi-Fi hotspot name is forlinx-wlan, and the password is fl03123102650. Network settings vary, so adjust them to match your environment:

For example:

```plain
root@FCU3501:~# nmcli dev wifi connect "forlinx-wlan" password "fl03123102650"
Device 'p2p0' successfully activated with '8b568cbb-157e-44e8-a5c5-4ac2faa8e430'.
```

The Wi-Fi connection is now established.

Test Wi-Fi by pinging a domain name or IP address.

```plain
root@FCU3501:~# ping www.baidu.com -c 3 -I p2p0
PING www.a.shifen.com (220.181.38.149) from 192.168.81.140 mlan0: 56(84) bytes of data.
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=1 ttl=54 time=13.8 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=2 ttl=54 time=13.2 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=3 ttl=54 time=15.1 ms

--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 13.176/14.026/15.071/0.785 ms
```

#### 3.7.3 AP Mode Test
**Note: Before this test, make sure the Gigabit Ethernet port eth0 is connected and the network is working;**

**Check the driver load status, using the AW-AM510 module as an example.**

```plain
root@FCU3501:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal
```

Create a hotspot

Wi-Fi hotspot name: OK3588_WIFI_AP

Password: 12345678

```plain
root@FCU3501:~# sysctl net.ipv4.ip_forward=1
root@FCU3501:~# echo 1 > /proc/sys/net/ipv4/ip_forward
root@FCU3501:~# sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
root@FCU3501:~# sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
root@FCU3501:~# iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
root@FCU3501:~# nmcli device wifi hotspot con-name 3588-test-AP ssid OK3568_WIFI_AP password 12345678 ifname wlan0
Device 'wlan0' successfully activated with 'ffb90f90-85bb-4859-9dab-b81bba2d2406'.
Hint: "nmcli dev wifi show-password" shows the Wi-Fi name and password.
```

Once complete, a phone can find the hotspot OK3588_WIFI_AP and connect to access the Internet.

### 3.8 HDMI RX Test
#### 3.8.1 Query the HDMI RX Device Node
```plain
forlinx@FCU3501:~$ v4l2-ctl --list-devices
rk_hdmirx (fdee0000.hdmirx-controller):
        /dev/video0
```

#### 3.8.2 View Supported HDMI RX Formats
```plain
forlinx@FCU3501:~$ v4l2-ctl --list-formats-ext -d /dev/video0
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'BGR3' (24-bit BGR 8-8-8)
        [1]: 'NV24' (Y/CbCr 4:4:4)
        [2]: 'NV16' (Y/CbCr 4:2:2)
        [3]: 'NV12' (Y/CbCr 4:2:0)
```

#### 3.8.3 View the HDMI RX Capture Format
```plain
forlinx@FCU3501:~$  v4l2-ctl -V -d /dev/video0
Format Video Capture Multiplanar:
        Width/Height      : 3840/2160
        Pixel Format      : 'NV12' (Y/CbCr 4:2:0)
        Field             : None
        Number of planes  : 1
        Flags             : premultiplied-alpha, 0x000000fe
        Colorspace        : Rec. 709
        Transfer Function : Default
        YCbCr/HSV Encoding: xvYCC 709
        Quantization      : Limited Range
        Plane 0           :
           Bytes per Line : 3840
           Size Image     : 12441600
```

#### 3.8.4 HDMI RX Recording
```plain
forlinx@FCU3501:gst-launch-1.0 v4l2src device=/dev/video0 io-mode=2 ! videoconvert ! video/x-raw, format=NV12, width=3840, height=2160 ! autovideosink
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Got context from element 'autovideosink0': gst.gl.GLDisplay=context, gst.gl.GLDisplay=(GstGLDisplay)"\(GstGLDisplayWayland                                                                                                                \)\ gldisplaywayland0";
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
```

### 3.9 Audio Test
The FCU3501 uses an NAU88C22YG codec and provides one 3.5 mm audio jack, one XH-2.54 mm speaker connector, and one MIC input.

#### 3.9.1 HDMI Audio Playback
```plain
forlinx@FCU3501:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

forlinx@FCU3501:/userdata/media/audio$gst-play-1.0 /userdata/media/audio/piano2-CoolEdit.mp3 --audiosink="alsasink device=plughw:0,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
```

#### 3.9.2 SPKOUT Audio Playback
```plain
forlinx@FCU3501:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
forlinx@FCU3501:~$ amixer -c rockchipnau8822 sset "Speaker" 63 // Set the volume
forlinx@FCU3501:~$ amixer -c rockchipnau8822 sset "PCM" 255

forlinx@FCU3501:/userdata/media/audio$gst-play-1.0 /userdata/media/audio/piano2-CoolEdit.mp3 --audiosink="alsasink device=plughw:2,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
```

#### 3.9.3 MIC Input
```plain
forlinx@FCU3501:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

forlinx@FCU3501:/userdata/media/audio$arecord -D default:CARD=rockchipnau8822 -d 5 -f cd -t wav test1.wav

Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
root@FCU3501:~# aplay -D plughw:0,0 test1.wav // Play the captured audio over HDMI
```

### 3.10 microSD Card Interface Test
#### 3.10.1 microSD Card Storage Test
The FCU3501 has one microSD card interface. Insert a microSD card into the slot on the carrier board and run lsblk to confirm the device is enumerated.

```plain
root@FCU3501:~# lsblk
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

Check the default mount location of the drive.

```plain
root@FCU3501:~# df -Th
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
[root@FCU3501:/]# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 24.6959 s, 21.2 MB/s
```

Read test:

```plain
[root@FCU3501:/]# dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 8.31059 s, 63.1 MB/s
```

### 3.11 HDMI Display and GUI Function Test
#### 3.11.1 GUI Functions Overview
The FCU3501 supports one HDMI display and runs Forlinx Desktop 22.04, a customized system based on Ubuntu22.04. It is fully compatible with ubuntu22.04 and supports tools such as apt-get, making it easier to use than traditional Linux systems.

After connecting an HDMI display to the FCU3501, click login on the first boot. The desktop is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/034.png)

#### 3.11.2 Network Configuration Settings
At startup, the FCU3501 runs dhclient on eth0 by default. To set a static IP, use the following settings.

Click the network settings icon in the top-right corner:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/035.png)

Click the "Wired Settings" button.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/036.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/037.png)

#### 3.11.3 Wi-Fi Test
The FCU3501 has an onboard RTL8723DU module for Wi-Fi testing. The Wi-Fi module appears as a wlan node in the system; this test uses wlan0 (use the corresponding node when multiple devices are present). To configure Wi-Fi, right-click the network icon in the top-right corner with the mouse:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/038.png)

Click the Wi-Fi name listed under Select Networks to open the Wi-Fi configuration window, then enter the password using the on-screen keyboard:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/039.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/040.png)

Click "Connect" to complete the Wi-Fi connection:

#### 3.11.4 Browser Test
ForlinxDesktop includes Google Chrome and other browsers. Ensure the network is connected and dns is available before accessing the Internet. Click the Start menu in the top-left corner and select "Chromium Browser":

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/041.png)

In the browser, click the search box, enter the URL, and visit the Forlinx Embedded official website. The page is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/042.png)

#### 3.11.5 File Manager
Click the "File Manager PCManFM" file manager in the top-left corner to manage files:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/043.png)

### 3.12 Common Service Tests
The preinstalled services below take up about 1000 MB of file system space.

#### 3.12.1 OpenSSL Basic Environment Test
The Secure Sockets Layer (ssl) protocol is the most widely used application protocol. It encrypts data with cryptographic algorithms such as aes, des, and 3des to protect it during transmission.

Set the environment variable before using OpenSSL.

```plain
root@FCU3501:~# export OPENSSL_CONF=/etc/ssl/openssl.cnf
```

Test the rsa symmetric encryption speed.

```plain
root@FCU3501:~# openssl speed rsa1024
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
root@FCU3501:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0714908 s, 82.8 kB/s
root@FCU3501:~# openssl enc -aes-128-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU3501:~# openssl enc -aes-128-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU3501:~# diff test test.dec
```

Test the DES symmetric encryption algorithm:

```plain
root@FCU3501:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0702961 s, 84.2 kB/s
root@FCU3501:~# openssl enc -des-ede3-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU3501:~# openssl enc -des-ede3-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU3501:~# diff test test.dec
```

#### 3.12.2 Mysql Feature Overview
MySQL is a popular open-source relational database management system widely used for data storage and management in applications and websites. It provides powerful features and flexible configuration options that let developers organize and manipulate data efficiently.

Here are some simple Mysql test examples":

Log in to the Mysql database.

```plain
root@FCU3501:~# mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.39-0ubuntu0.22.04.1 (Ubuntu)

Copyright (c) 2000, 2024, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

Query Mysql version information

```plain
mysql> select version();
+-------------------------+
| version()               |
+-------------------------+
| 8.0.39-0ubuntu0.22.04.1 |
+-------------------------+
1 row in set (0.00 sec)
```

Create a database

```plain
mysql> create database forlinx_database;
Query OK, 1 row affected (0.02 sec)
```

Select the database

```plain
mysql> use forlinx_database;
Database changed
```

Create a table

```plain
mysql> create table name(
    -> id int auto_increment not null primary key,
    -> uname char(8) NOT NULL,
    -> gender char(2) NULL,
    -> birthday date );
Query OK, 0 rows affected (0.11 sec)
```

Show tables in the database

```plain
mysql> show tables;
+----------------------------+
| Tables_in_forlinx_database |
+----------------------------+
| name                       |
+----------------------------+
1 row in set (0.01 sec)
```

Show the table structure

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

Exit the database

```plain
mysql> exit;
Bye
```

#### 3.12.3 FTP Service Feature Overview
The vsftpd service starts automatically at boot. In the address bar of File Explorer on your PC, enter ftp://192.168.0.123/ to connect. A login dialog appears; use username `forlinx` and password `forlinx`.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/044.png)

The screenshot below shows ftp accessed from File Explorer on a PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/045.png)

#### 3.12.4 ModBus Feature Overview
Modbus is a communication protocol used to transfer data in automation systems. It is widely used in industrial control and monitoring for

data exchange and communication between devices. The Modbus protocol is simple, reliable, and easy to implement, so it has been widely adopted in many industrial devices and systems.

The FCU3501 comes with the Modbus libraries already installed. Next, download the Modbus test examples from the Ubuntu source repositories and run them. Before testing, make sure the network connection is working and the FCU3501 can access the Internet.

First, edit the Ubuntu source list and uncomment the source download entries:

```plain
root@FCU3501:~# vim /etc/apt/sources.list
```

Modify it as follows:

```plain
# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
# newer versions of the distribution.
deb http://ports.ubuntu.com/ubuntu-ports jammy main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports jammy main restricted

## Major bug fix updates produced after the final release of the
## distribution.
deb http://ports.ubuntu.com/ubuntu-ports jammy-updates main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-updates main restricted

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb http://ports.ubuntu.com/ubuntu-ports jammy universe
deb-src http://ports.ubuntu.com/ubuntu-ports jammy universe
deb http://ports.ubuntu.com/ubuntu-ports jammy-updates universe
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-updates universe

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team, and may not be under a free licence. Please satisfy yourself as to
## your rights to use the software. Also, please note that software in
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb http://ports.ubuntu.com/ubuntu-ports jammy multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports jammy multiverse
deb http://ports.ubuntu.com/ubuntu-ports jammy-updates multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-updates multiverse

## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb http://ports.ubuntu.com/ubuntu-ports jammy-backports main restricted universe multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-backports main restricted universe multiverse

deb http://ports.ubuntu.com/ubuntu-ports jammy-security main restricted
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-security main restricted
deb http://ports.ubuntu.com/ubuntu-ports jammy-security universe
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-security universe
deb http://ports.ubuntu.com/ubuntu-ports jammy-security multiverse
deb-src http://ports.ubuntu.com/ubuntu-ports jammy-security multiverse
```

Then update the package list and download the libmodbus5 source:

```plain
root@FCU3501~# apt-get update && apt-get source -y libmodbus5
If the download reports the following error (W: Download is performed unsandboxed as root as file 'libmodbus_3.1.6-2.dsc' couldn't be accessed by user '_apt'. - pkgAcquire::Run (13: Permission denied)), run chmod 777 libmodbus_3.1.6-2.dsc and try again.
```

After the download completes, the test source we need is in the following location:

```plain
root@FCU3501~# ls libmodbus-3.1.6/tests/ 
LICENSE README.md  bandwidth-server-many-up.c  random-test-client.c 
unit-test-client.c  unit-test.h.in  version.c Makefile.am  bandwidth-client.c bandwidth-server-one.c  random-test-server.c unit-test-server.c unit-tests.sh
```

RTU Mode Communication Test

Connect the two RS485 serial ports of the FCU3501 with a serial cable. This test pairs RS485_0 and RS485_1

for a loopback test, i.e., /dev/ttyS0 against /dev/ttyS4.

Edit unit-test-server.c and unit-test-client.c in the test source and set each to its corresponding serial device node.

```plain
root@FCU3501:~# vim libmodbus-3.1.6/tests/unit-test-server.c 
ctx = modbus_new_rtu("/dev/ttyS0", 115200, 'N', 8, 1); 
root@FCU3501:~# vim libmodbus-3.1.6/tests/unit-test-client.c 
ctx = modbus_new_rtu("/dev/ttyS4", 115200, 'N', 8, 1);
```

Compile the test program

```plain
root@FCU3501:apt-get install autoconf automake libtool
root@FCU3501:~# cd libmodbus-3.1.6/ 
root@FCU3501:~/libmodbus-3.1.6# ./autogen.sh 
root@FCU3501:~/libmodbus-3.1.6# ./configure 
root@FCU3501:~/libmodbus-3.1.6# make
```

Run the RTU mode test server

```plain
root@FCU3501:~/libmodbus-3.1.6# ./tests/unit-test-server rtu &
```

Run the RTU mode test client

```plain
root@FCU3501:~/libmodbus-3.1.6# ./tests/unit-test-client rtu
```

TCP Mode Communication Test

This test uses the 127.0.0.1 loopback, i.e., it verifies that the libmodbus5 library is usable.

Run the RTU mode test server

```plain
root@FCU3501:~/libmodbus-3.1.6# ./tests/unit-test-server tcp &
```

Run the RTU mode test client

```plain
root@FCU3501:~/libmodbus-3.1.6# ./tests/unit-test-client tcp
```

#### 3.12.5 MQTT Feature Overview
MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for efficient IoT communication over low-bandwidth, unstable networks. MQTT is simple, reliable, and has low network overhead, so it is widely used in IoT applications.

Here are some simple MQTT test examples

Subscribe to messages

```plain
root@FCU3501:~/libmodbus-3.1.6# mosquitto_sub -t test  &
```

Publish messages

```plain
root@FCU3501:~/libmodbus-3.1.6# mosquitto_pub -t test -m "hello world"
```

#### 3.12.6 Docker Feature Overview
**Note: Make sure the FCU3501 clock is set correctly; otherwise, authentication will expire when pulling images.**

Docker is an advanced container engine based on LXC. With Docker, you package an application and its runtime dependencies into an image, distribute it to any platform that supports Docker, and run it there to provide the service. Docker is a process-level container; the official recommendation is one program per container, though you can run thousands of containers on a single host.

Pull the hello-world image

```plain
root@FCU3501:~# docker pull hello-world
Using default tag: latest
latest: Pulling from library/hello-world
c9c5fd25a1bd: Pull complete
Digest: sha256:e0b569a5163a5e6be84e210a2587e7d447e08f87a0e90798363fa44a0464a1e8
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

List local Docker images

```plain
root@FCU3501:~# docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
hello-world   latest    f1f77a0f96b7   3 weeks ago   5.2kB
```

Run the hello-world test program

```plain
root@FCU3501:~# docker container run hello-world

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

### 3.13 Using the Hailo AI Accelerator Card
The FCU3501 supports the Hailo AI accelerator card by default; the module loads automatically when the card is inserted. Test it as follows:

Check whether the driver is installed.

```plain
root@FCU3501:/# lspci | grep Co-processor
01:00.0 Co-processor: Hailo Technologies Ltd. Hailo-8 AI Processor (rev 01)
```

When "Hailo-8" appears, the driver has loaded successfully.

Scan for available devices.

```plain
root@FCU3501:/# hailortcli scan
Hailo Devices:
[-] Device: 0000:01:00.0
```

When a device ID appears, the device is available.

Test the acceleration performance.

```plain
root@FCU3501:/# hailortcli  run /home/forlinx/app/python/pose_estimation/yolov8s_pose_mz.hef
Running streaming inference (/home/forlinx/app/python/pose_estimation/yolov8s_pose_mz.hef):
  Transform data: true
    Type:      auto
    Quantized: true
Network yolov8s_pose/yolov8s_pose: 100% | 1161 | FPS: 231.86 | ETA: 00:00:00
> Inference result:
 Network group: yolov8s_pose
    Frames count: 1160
    FPS: 231.67
    Send Rate: 2277.44 Mbit/s
    Recv Rate: 2755.61 Mbit/s
```

### 3.14 Changing the Boot Logo
The FCU3501 supports changing the custom boot logo directly without rebuilding the image.

**Note: The BMP image you add must be rotated 180°.**

Rotate the image as follows:

- Use the built-in Paint tool in Windows to open the image;
- Save it in BMP format with a selectable bit depth, for example 24-bit;
- Click the rectangle on the left of the Image toolbar to make a selection;
- Click the image to edit, right-click it, and choose Rotate -> Rotate 180°.
- To check the edited image, right-click it -> Properties.

Copy logo.bmp for the U-Boot stage and logo_kernel.bmp for the kernel stage to a USB flash drive (the same image can be used for both stages). In this example the image is 480x272 (the resolution may differ), with a bit depth of 24 (the bit depth must be the same). Insert the USB flash drive into a USB port on the FCU3501.

```plain
root@FCU3501:/# cd /run/media/sdb1/
root@FCU3501:/# ls
logo.bmp         logo_kernel.bmp
```

Then run the following commands to flash the logo into the system.

```plain
root@FCU3501:/run/media/sdb1# cat logo.bmp > logo.img
root@FCU3501:/run/media/sdb1# truncate -s %512 logo.img
root@FCU3501:/run/media/sdb1# cat logo_kernel.bmp >> logo.img
root@FCU3501:/run/media/sdb1# dd if=logo.img of=/dev/mmcblk0p5
10801+1 records in
10801+1 records out
5530166 bytes (5.5 MB, 5.3 MiB) copied, 2.84201 s, 1.9 MB/s
root@FCU3501:/run/media/sdb1# reboot
```

After rebooting, you will see that the logo has been changed.

## 4. System Firmware Update
The FCU3501 platform can use a microSD card to flash the system to the eMMC for system recovery or upgrades.

**Note:** 

- **Tests show the maximum supported microSD card capacity is 16 GB; cards of 32 GB or larger may fail to flash;**
- **Flashing from a microSD card also drops to a command line as the root@buildroot user. Wait for the flashing to finish.**

Copy SDDiskTool_v1.69.zip from the tools directory in the user materials to any directory on Windows. Run SD_Firmware_Tool.exe as administrator.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/046.png)

Select the disk device, check "Firmware Upgrade", choose update.img, and click Start to create.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/047.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/048.png)

Insert the microSD card into the board and power it on; the system enters the flashing process automatically. When flashing finishes, both the screen and the serial console show:

Please remove SD CARD!!!, wait for reboot.

At this point, remove the microSD card and the system reboots automatically (do not power off directly).

In mass production, use the heartbeat LED on the SoM to tell whether flashing is complete. The heartbeat LED changes during flashing as follows:

- Kernel boot stage: RUN LED in heartbeat mode, blinking at regular intervals;

- Flashing preparation stage: RUN LED off;

- Flashing in-progress stage: RUN LED steady on;

- Flashing complete stage: RUN LED in heartbeat mode, blinking at regular intervals.

Serial console output during flashing:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Forlinx_Desktop_User_Manual-EN/049.png)

If the system does not reboot automatically after you remove the microSD card, a manual reboot also completes the flashing. As shown above, flashing takes about 28 minutes; wait for it to finish.
