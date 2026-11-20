# Linux4.1.15_User's Manual_V1.0
Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## 1. FCU1104 Product Overview
### 1.1 Introduction
The FCU1104 embedded control unit is built on the NXP i.MX6ULL processor running at up to 792 MHz. It combines high efficiency, strong performance, and low cost, and is available with either a 256 MB DDR3 / 256 MB NAND industrial-grade SoM or a 512 MB DDR3 / 8 GB eMMC commercial-grade SoM. 

Two Configurations:

Base version: Ethernet, 4G, Wi-Fi, LoRa, and RS485 interfaces; 

Extended version: RS485, RS232, CAN, and DI/DO interfaces. Because 4G, Wi-Fi, and LoRa are plug-in modules, the interface mix can be tailored to the application.

**Key features:**

- Wide 9–36 V DC input with reverse-polarity and overcurrent protection

- Two 10/100 Mbit/s Ethernet ports

- Wi-Fi with both STA and AP modes

- Full-band 4G module support

- LoRa module support

- Battery-backed real-time clock (RTC)

- External microSD (TF) card slot

- Eight isolated RS485 ports

- One additional isolated CAN port

- Two additional isolated dry-contact DI inputs

- Two additional isolated relay DO outputs, contact rating 5 A @ 250 VAC / 5 A @ 30 VDC

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/001.png)


### 1.2 Applications
The FCU1104 is designed for signal acquisition and data transmission in energy management systems, photovoltaic inverters, and water, gas, and electricity metering; process signal acquisition in manufacturing and processing plants; MES (manufacturing execution system) data acquisition; environmental monitoring at hazardous-chemical sites and ambient air quality stations; greenhouse agriculture; livestock facilities; and pharmaceutical and food warehousing.

### 1.3 Hardware Specifications
The FCU1104 is available in Base and Extended configurations. The Extended version adds functions on top of the Base version; both sets of specifications are listed below. The 4G and Wi-Fi modules share one PCIe slot, so only one of them can be installed.

#### 1.3.1 Base Configuration

The Base configuration provides:

| Item | Description |
| --- | --- |
| CPU | NXP i.MX6ULL, ARM Cortex-A7, 792 MHz |
| Memory | NAND version: DDR3 256 MB, NAND Flash 256 MB; eMMC version: DDR3 512 MB, eMMC 8 GB |
| Ethernet | 2 ports, 10/100 Mbit/s, with link/activity LEDs; isolated design, ESD level 3 |
| 4G | Standard SIM card; PCIe Quectel EC200S (Cat.1, without GPS or voice) module; China Mobile 4G/3G/2G, China Unicom 4G/3G/2G, China Telecom 4G |
| Wi-Fi | PCIe BL-M8723BU or BL-M8723DU module |
| LoRa | 1 channel, 433 MHz, 20 dBm or 30 dBm TX power; supported modules: E32 (433T20DC) 20 dBm and E22 (400T30D) 30 dBm |
| RS485 | 4 ports with signal LEDs; 1.5 kV isolation, ESD level 3 |
| TF card | 1 slot |
| RTC | 1 |
| Buzzer | 1 |
| Reset button | 1, for system reset |
| BOOT button | 1, used together with the reset button for firmware updates |
| Power-loss protection | A supercapacitor supplies the CPU for a further 30 s after external power is lost |
| Power | 12 V DC nominal, 9–36 V DC wide-range input; reverse-polarity and overcurrent protection |
| Environment | Humidity: 5%–95% RH, non-condensing; operating temperature: -25°C to 85°C (eMMC version), -40°C to 85°C (NAND version); Wi-Fi module: 0°C to 70°C; storage temperature: -40°C to 85°C |


#### 1.3.2 Extended Configuration
In addition to the Base configuration, the Extended version provides:

| Item | Description |
| --- | --- |
| RS485/RS232 | 4 ports (one is multiplexed with RS232), 1.5 kV isolation, ESD level 3 |
| DI | 2 dry-contact inputs, isolated design |
| DO | 2 relay outputs, contact rating 5 A @ 250 VAC / 5 A @ 30 VDC |
| CAN | 1 port, 1.5 kV isolation, ESD level 3 |


### 1.4 Software Specifications
| Feature | Description |
| --- | --- |
| Operating system | Linux 4.1.15 |
| File system | Yaffs2 |
| GCC | 5.4.3 |
| RS485 | RS485 test example; Modbus protocol (RTU mode) support |
| Network protocols | TCP/IP, UDP, DHCP, TFTP, FTP, SSH, Web, HTTP, iptables, MQTT, SQLite |
| Ethernet | 10/100 Mbit/s auto-negotiation; static or dynamic IP assignment; configurable MAC address |
| Wi-Fi | STA and AP modes |
| 4G | EC200S module; China Mobile, China Unicom, and China Telecom 4G data |
| RTC | NTP time synchronization; clock retained through power loss |
| LoRa module | Transparent transmission; read/write module configuration |
| Watchdog | Configurable reset timeout |


### 1.5 Enclosure Dimensions
#### 1.5.1 Enclosure Drawing
The enclosure dimensions of the FCU1104 are shown below (all dimensions in mm).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/002.jpg)

FCU1104 enclosure dimensions (Base version)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/003.jpg)

FCU1104 enclosure dimensions (Extended version)

#### 1.5.2 Mounting Options
Two mounting options: DIN-rail mounting and wall-mount brackets.

- Clip mounting. The clips supplied by Forlinx fit a standard 35 mm industrial DIN rail:


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/004.png)

You can also source clips yourself. The mounting-hole positions for the Forlinx clips are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/005.png)

FCU1104 clip mounting-hole dimensions

- Wall-mount bracket mounting:


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/006.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/007.png)

**Note: The mounting holes in the brackets supplied by Forlinx are 3 mm in diameter.**

#### 1.5.3 Nameplate Dimensions
The enclosure nameplate is shown below (all dimensions in mm).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/008.png)

## 2. FCU1104 Functions
### 2.1 Connector Layout
The connector layout of the FCU1104 is shown below. The front-panel connectors differ between the Base and Extended versions; the rear-panel connectors are in the same position on both.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/009.jpg)

Front (Base version)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/010.jpg)

Front (Extended version)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/011.jpg)

Back

### 2.2 Power Supply
The unit accepts a wide 9–36 V DC input and ships with a 12 V DC / 2 A adapter (12 V DC is the default). The POW indicator lights when power is applied.

| Diagram | Description |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/012.png) | ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/013.png) |


With the Forlinx XED-NVR2010S2-B-02 adapter, the plain black lead is positive and the lead with white printing is negative, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/014.png)

**Note:**

- **The illustration above applies only to the XED-NVR2010S2-B-02 adapter. For any other adapter, use a multimeter to confirm the polarity;**
- **With a 12 V supply, an FCU1104 fitted with the EC200S 4G and E32 LoRa modules was measured as follows:**

| FCU1104 model | Supply voltage | Peak current | Steady-state current |
| --- | --- | --- | --- |
| Base (NAND SoM) | 12 V ±5% | 0.3 A | 0.24 A |
| Base (eMMC SoM) | 12 V ±5% | 0.3 A | 0.24 A |
| Extended (NAND SoM) | 12 V ±5% | 0.4 A | 0.27 A |
| Extended (eMMC SoM) | 12 V ±5% | 0.4 A | 0.27 A |


**Note:**

- **Peak current: the maximum current drawn during startup;**
- **Steady-state current: the current drawn after the system has finished booting.**

### 2.3 User Login
The FCU1104 can be accessed either through the debug serial port or over the network.

#### 2.3.1 SSH Login
Connect a PC or laptop to the FCU1104 with an Ethernet cable. Use ETH2 for SSH; its default IP address at power-on is 192.168.0.232. Set the PC to an address on the 192.168.0.xx subnet, power on the unit, then log in over SSH and run commands to exercise the basic functions and applications.

Default credentials — username: root; password: forlinx.

Open putty.exe (User Materials/Tools/putty.exe), configure it as shown below, and click Open.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/015.png)

On the first login a security warning appears; click Yes to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/016.png)

At the login prompt, enter the username (root) and password (forlinx).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/017.png)

#### 2.3.2 Debug Serial Login
The debug serial port is accessible only with the enclosure removed, so it is intended for early development. For field commissioning and maintenance, use network login instead. The credentials are the same as for SSH.

The TTL debug serial header is located as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/018.jpg)

#### 2.3.3 Viewing the System Log
After boot, kernel messages are available in /var/log/messages or through the dmesg command.

Using dmesg:

```plain
root@fl-imx6ull:~# dmesg | less
[    0.000000] Booting Linux on physical CPU 0x0
…
```

Viewing /var/log/messages:

```plain
root@fl-imx6ull:~# cat /var/log/messages
Apr 26 22:05:49 fl-imx6ull syslogd 1.5.1: restart.
```

### 2.4 System LEDs

The FCU1104 has four system LEDs: 4G network (4G), power (POW), system error (ERR), and system running (RUN), as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/019.png)

POW is the power indicator; it lights automatically at power-on and goes out when power is removed.

RUN has two indications:

- Flashing indication: RUN stays on during firmware programming and then blinks once per second after programming completes.

- Boot indication: RUN stays off while the system boots and becomes a heartbeat indicator once boot is complete.

- ERR indicates a system error and is exposed to the application.

- 4G indicates the 4G network status.

### 2.5 Button Input

RESET resets the system. BOOT is the firmware-programming button and cannot be reassigned, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/020.png)

#### 2.5.1 Reset Button Test
Press RESET and the system restarts immediately. RUN stays off during boot and blinks as a heartbeat indicator once boot is complete.

#### 2.5.2 BOOT Button Test
BOOT and RESET work together for firmware updates. For details, see "TF Card System Update" in the "System Firmware Update" chapter.

### 2.6 RS485 Test (Extended Version Included)
#### 2.6.1 Connector Description
| Connector Diagram | Connector Diagram |
| :-- | :-- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/021.png) | ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/022.png) |
|  |  |
| **Note: The transceiving status of RS485/RS232 can be indicated via the status indicator LED.** | **Note: The transceiving status of RS485/RS232 can be indicated via the status indicator LED.** |


#### 2.6.2 Device Node to Hardware Mapping
| Device node | Hardware label |
| --- | --- |
| /dev/ttymxc1 | RS485_1 |
| /dev/ttymxc2 | RS485_2 |
| /dev/ttymxc3 | RS485_3 |
| /dev/ttymxc4 | RS485_4 |
| /dev/ttyXRUSB0 | RS485_7 |
| /dev/ttyXRUSB1 | RS485_5/RS232_5 |
| /dev/ttyXRUSB2 | RS485_6 |
| /dev/ttyXRUSB3 | RS485_8 |


#### 2.6.3 RS485 Test Procedure
This procedure uses a PC as the peer. If you have a dedicated RS485 device, connect it directly instead.

This procedure uses RS485_1. To test another RS485 port, simply substitute its device node.

Connect an RS232-to-RS485 converter to the RS485_1 port of the FCU1104 as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/023.png)

RS485_1 sends "Forlinx test" to the PC at 9600 baud. At the same time, use a serial-port assistant on the PC to send "Forlinx ok" to the FCU1104. The console output is shown below:

```plain
root@fl-imx6ull:/# fltest_RS485 /dev/ttymxc1 9600

Welcome to TTYtest! Press Ctrl + 'c' to stop.

/dev/ttymxc1,creat thread 1994736752 sucess
/dev/ttymxc1,creat thread 1986348144 sucess
sendTotal=   12 num =    1 send = Forlinx test
sendTotal=   24 num =    2 send = Forlinx test
sendTotal=   36 num =    3 send = Forlinx test
sendTotal=   48 num =    4 send = Forlinx test
sendTotal=   60 num =    5 send = Forlinx test
sendTotal=   72 num =    6 send = Forlinx test
sendTotal=   84 num =    7 send = Forlinx test
sendTotal=   96 num =    8 send = Forlinx test
recvTotal=   9 num =  1 recv = Folinx ok
466f6c696e78206f6b
sendTotal=  108 num =    9 send = Forlinx test
^C
/dev/ttymxc1,Send: 9 ,Receive: 1
```

The serial-port assistant on the PC (User Materials/Tools/sscom5131) shows the transmitted and received data as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/024.png)

### 2.6.4 Modbus Test
For the Modbus source code, build procedure, and test, see User Materials/Linux/Applications/09_Modbus.

### 2.7 Wired Ethernet Test
The FCU1104 provides two 10/100 Mbit/s auto-negotiating Ethernet ports on RJ45 connectors.

#### 2.7.1 Device Node to Hardware Mapping
| Node name | Hardware label |
| --- | --- |
| eth1 | ETH1 |
| eth0 | ETH2 |


#### 2.7.2 Ethernet Port Test
Connect the PC to an FCU1104 Ethernet port with a cable and assign the PC a static IP address (192.168.0.11 in this example). ETH2 on the FCU1104 is 192.168.0.232, and networking is enabled by default at boot.

In a Windows command window, run ping 192.168.0.232.

**Note: In Windows 10, right-click the Start button and select Command Prompt to open a command window.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/025.png)

If the PC can ping the FCU1104 and an SSH login succeeds, the Ethernet port is working.

#### 2.7.3 Basic IPv4 Commands
The examples in this section were run on the Forlinx network. Your network will differ, so adapt the settings to your own environment.

The FCU1104 has two Ethernet interfaces, eth0 and eth1. At boot, eth0 defaults to 192.168.0.232 and eth1 to 192.168.1.232.

The commands below take effect only for the current terminal session. To apply them at every boot, add them to the /etc/rc.local startup script.

In Linux, ifconfig displays or configures network interfaces, while ethtool queries and sets interface parameters.

```plain
root@fl-imx6ull:~# ifconfig
```

Output:

```plain
eth0      Link encap:Ethernet  HWaddr BA:C4:5F:07:CE:3F  
          inet addr:192.168.0.232  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::b8c4:5fff:fe07:ce3f%1995454160/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:494 errors:0 dropped:0 overruns:0 frame:0
          TX packets:12 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:214976 (209.9 KiB)  TX bytes:1709 (1.6 KiB)

eth1      Link encap:Ethernet  HWaddr 3E:B8:C4:5F:07:CE  
          inet addr:192.168.1.232  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1%1995454160/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

Set the IP address, for example eth0 to 192.168.1.120.

```plain
root@fl-imx6ull:~# ifconfig eth0 192.168.1.120                 // Set the IP address
root@fl-imx6ull:~# ifconfig eth0                              // Check the interface after the change
```

Output:

```plain
eth0      Link encap:Ethernet  HWaddr 66:cd:22:3c:e6:a2
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::64cd:22ff:fe3c:e6a2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:326 errors:0 dropped:0 overruns:0 frame:0
          TX packets:73 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:32451 (31.6 KiB)  TX bytes:18306 (17.8 KiB)
```

The line inet addr:192.168.1.120 confirms that the IP address was set.

Set the DNS server

```plain
root@fl-imx6ull:~# echo “nameserver 8.8.8.8” > /etc/resolv.conf
```

Obtain an IP address dynamically

If the board is connected to a router that provides DHCP, run the following command in the terminal:

```plain
root@fl-imx6ull:~# udhcpc -i eth0
```

This obtains an IP address dynamically. The -i option selects the interface; the wired Ethernet interface on Forlinx boards is eth0.

DNS server entries are added to /etc/resolv.conf automatically.

Change the MAC address

**Note: This change applies only to the current terminal session.**

```plain
root@fl-imx6ull:~# ifconfig eth0 hw ether 08:90:90:90:90:90  // Set the eth0 MAC to 08:90:90:90:90:90
root@fl-imx6ull:~# ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 08:90:90:90:90:90
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::64cd:22ff:fe3c:e6a2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:654 errors:0 dropped:0 overruns:0 frame:0
          TX packets:82 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:65489 (63.9 KiB)  TX bytes:23616 (23.0 KiB)
```

The line HWaddr 08:90:90:90:90:90 confirms that the MAC address was set.

Set the subnet mask

```plain
root@fl-imx6ull:~# ifconfig eth0 netmask 255.255.255.0  // Set the eth0 subnet mask to 255.255.255.0
root@fl-imx6ull:~# ifconfig eth0
```

Output:

```plain
eth0      Link encap:Ethernet  HWaddr 08:90:90:90:90:90
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::64cd:22ff:fe3c:e6a2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:867 errors:0 dropped:0 overruns:0 frame:0
          TX packets:88 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:87053 (85.0 KiB)  TX bytes:27156 (26.5 KiB)
```

Mask:255.255.255.0 is the subnet mask just configured.

Set the broadcast address

```plain
root@fl-imx6ull:~# ifconfig eth0 broadcast 192.168.1.255  // Set the eth0 broadcast address to 192.168.1.255
root@fl-imx6ull:~# ifconfig eth0
```

Output:

```plain
eth0      Link encap:Ethernet  HWaddr 08:90:90:90:90:90
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::64cd:22ff:fe3c:e6a2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1063 errors:0 dropped:0 overruns:0 frame:0
          TX packets:91 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:110722 (108.1 KiB)  TX bytes:28926 (28.2 KiB)
```

Bcast:192.168.1.255 confirms that the broadcast address was set.

Add or delete the default gateway

```plain
root@fl-imx6ull:~# route add default gw 192.168.1.1 eth0    // Add the default gateway on eth0
root@fl-imx6ull:~# route del default gw 192.168.1.1 eth0    // Delete the default gateway on eth0
```

Bring the interface down or up

```plain
root@fl-imx6ull:~# ifconfig eth0 down                       // Bring eth0 down
root@fl-imx6ull:~# ifconfig eth0 up                         // Bring eth0 up
```

#### 2.7.4 IPv6 Test
Set an IPv6 address on eth1

```plain
root@fl-imx6ull:~# ip -6 addr add 2001:250:4000:2000::50/64 dev eth1   // Set the IPv6 address
```

Configure an IPv6 address on the PC

Open Control Panel > Network and Internet > Change adapter options; the following window appears.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/026.png)

Select Ethernet, right-click it, and choose Properties.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/027.png)

Disable IPv4, enable IPv6, then double-click Internet Protocol Version 6 (TCP/IPv6) and change the settings as shown below.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/028.png)

Connect the board directly to the PC with an Ethernet cable and test with ping6:

```plain
root@fl-imx6ull:~# ping6 2001:250:4000:2000::49
PING 2001:250:4000:2000::49(2001:250:4000:2000::49) 56 data bytes
64 bytes from 2001:250:4000:2000::49: icmp_seq=1 ttl=128 time=1.43 ms
64 bytes from 2001:250:4000:2000::49: icmp_seq=2 ttl=128 time=0.399 ms
64 bytes from 2001:250:4000:2000::49: icmp_seq=3 ttl=128 time=0.501 ms
^C
--- 2001:250:4000:2000::49 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 0.399/0.640/1.432/0.398 ms
```

#### 2.7.5 Network Socket Test
Reference: User/Materials/Linux/Applications/10_net_socket/socket_test.pdf.

#### 2.7.6 Web Server Test
The FCU1104 includes the Boa web server. Boa is a small, efficient, single-task HTTP server for Unix and Linux that supports CGI and is open source, which makes it well suited to embedded systems.

Boa starts automatically at boot. Enter the FCU1104 IP address in a browser to view the pages hosted on the board. The screenshot below was taken in Microsoft Edge:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/029.png)

#### 2.7.7 FTP Server Test
The vsftpd service (version 3.0.2) starts automatically at boot.

Use FileZilla on the PC to connect to the board FTP service. Enter the FTP login details in the fields highlighted in red below (the default root password is forlinx). The connection uses ETH2 by default:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/030.png)

Click OK on the confirmation dialog that appears:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/031.png)

You can then browse the FCU1104 file system:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/032.png)

### 2.8 Wi-Fi Test
At boot, the Wi-Fi module is enabled and its driver is loaded. Wi-Fi uses the 4G module antenna.

#### 2.8.1 Wi-Fi Test
**2.8.1.1 Check whether the driver is loaded**

```plain
root@fl-imx6ull:~# lsmod
Module                  Size  Used by
8723bu               1313893  0
```

Note: If 8723bu or 8723du appears, the module is loaded. If neither appears, check that the kernel version matches the module version in the file system.

**2.8.1.2 Load the module**

If lsmod does not list 8723du or 8723bu, load the module manually:

```plain
root@fl-imx6ull:~# insmod /lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtl8723DU/8723du.ko     /* Load 8723du */
root@fl-imx6ull:~# insmod /lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtl8723BU/8723bu.ko     /* Load 8723bu */
```

**2.8.1.3 Configure Wi-Fi**

**Note: -s specifies the SSID and -p the password; use -p NONE for an open network. The router must use WPA encryption.**

Connection output:

```plain
root@fl-imx6ull:~# fltest_wifi.sh -i 8723du -s forlinx -p xxxx
wifi 8723du
ssid forlinx
pasw xxxx
usbcore: deregistering interface driver rtl8723bu
usbcore: registered new interface driver rtl8723bu
IPv6: ADDRCONF(NETDEV_UP): wlan0: link is not ready
ps: invalid option -- 'f'
BusyBox v1.24.1 (2019-04-27 02:24:01 CST) multi-call binary.

Usage: ps
Successfully initialized wpa_supplicant
rfkill: Cannot open RFKILL control device
wlan0: Trying to associate with 04:d7:a5:84:fa:40 (SSID='forlinx' freq=2462 MHz)
wlan0: Associated with 04:d7:a5:8IPv6: ADDRCONF(NETDEV_CHANGE): wlan0: link becomes ready
4:fa:40
wlan0: WPA: Key negotiation completed with 04:d7:a5:84:fa:40 [PTK=CCMP GTK=TKIP]
wlan0: CTRL-EVENT-CONNECTED - Connection to 04:d7:a5:84:fa:40 completed [id=0 id_str=]
udhcpc (v1.24.1) started
Sending discover...
Sending select for 192.168.5.4...
Lease of 192.168.5.4 obtained, lease time 1800
/etc/udhcpc.d/50default: Adding DNS 222.222.202.202
/etc/udhcpc.d/50default: Adding DNS 222.222.222.222
Finshed!
```

**2.8.1.4 Test Wi-Fi**

Test Wi-Fi by pinging a domain name or an IP address.

```plain
root@fl-imx6ull:/forlinx/shell# ping www.baidu.com -I wlan0
PING www.baidu.com (220.181.38.150): 56 data bytes
64 bytes from 220.181.38.150: seq=0 ttl=50 time=213.481 ms
64 bytes from 220.181.38.150: seq=1 ttl=50 time=295.354 ms
64 bytes from 220.181.38.150: seq=2 ttl=50 time=211.235 ms
64 bytes from 220.181.38.150: seq=3 ttl=50 time=42.748 ms
^C
--- www.baidu.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 42.748/190.704/295.354 ms/etc/udhcpc.d/50default: Adding DNS 222.222.202.202
/etc/udhcpc.d/50default: Adding DNS 222.222.222.222
Finshed!
```

Wi-Fi signal

```plain
root@fl-imx6ull:~# cat /proc/net/wireless | grep wlan0 | awk '{print $3}'       // Read the signal level, e.g. 78
root@fl-imx6ull:~# cat /proc/net/wireless | grep wlan0 | awk '{print $4}'  // Read the signal quality, in dBm
-68.
root@fl-imx6ull:~# cat /proc/net/wireless | grep wlan0 | awk '{print $5}' // Read the background noise, in dBm
-256.
```

**2.8.1.5 Power the module off and on (powered on by default)**

Power the module off:

```plain
root@fl-imx6ull:~# echo 120 > /sys/class/gpio/export
root@fl-imx6ull:~# echo out > /sys/class/gpio/gpio120/direction
root@fl-imx6ull:~# echo 0 > /sys/class/gpio/gpio120/value
root@fl-imx6ull:~# usb 2-1: USB disconnect, device number 4
```

Power the module on:

```plain
root@fl-imx6ull:~# echo 120 > /sys/class/gpio/export
root@fl-imx6ull:~# echo out > /sys/class/gpio/gpio120/direction
root@fl-imx6ull:~# echo 1 > /sys/class/gpio/gpio120/value
root@fl-imx6ull:~# usb 2-1: new high-speed USB device number 4 using ci_hdrc
usbcore: registered new interface driver rtl8723bu
```

**2.8.1.6 Unload the module**

```plain
root@fl-imx6ull:~# rmmod 8723du
usbcore: deregistering interface driver rtl8723du
```

#### 2.8.2 AP Mode Test
The default Wi-Fi hotspot assigns addresses in the range 192.168.8.100–192.168.8.120 with gateway 192.168.8.1 and WPA-PSK encryption. Change the address range, gateway, and other settings in /etc/udhcpd/udhcpd.conf.

View or change the SSID (forlinxtest) and password (1234567890) in /etc/hostapd.conf.

**2.8.2.1 Ethernet to AP**

This example connects Ethernet eth0 to a router. After configuring Ethernet, verify that eth0 can reach the Internet (see the Wired Ethernet section) before continuing. If it cannot, check the Ethernet cable and router connection.

In AP mode, phones and other clients can connect directly to the module.

Set the Ethernet IP address and configure the firewall:

```plain
udhcpc -i eth0                                  // Obtain an IP automatically; skip if eth0 is already working
echo 1 > /proc/sys/net/ipv4/ip_forward        // Enable IP forwarding
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE   // Add the forwarding rule
```

Set the Wi-Fi mode and IP address

```plain
ifconfig wlan0 up                                       // Bring up Wi-Fi
ifconfig wlan0 192.168.8.1 netmask 255.255.255.0       // Set the IP address and subnet mask
ifconfig wlan0 promisc                                  // Put wlan0 in promiscuous mode
```

Start the AP

```plain
udhcpd /etc/udhcpd/udhcpd.conf &             // Wi-Fi address, gateway, and related settings
hostapd -d /etc/hostapd.conf &                // Encryption, SSID, password, and related settings
```

Phones and other mobile devices can now connect to the FCU1104 AP over Wi-Fi and access the Internet.

### 2.9 4G/5G Test
The FCU1104 supports 4G Cat.1 or 5G Sub-6 networks; the installed module depends on the configuration ordered. At boot, the 4G/5G module is powered and its driver is loaded. The external antenna connectors and SIM slot are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/033.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/034.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/035.png)

**Note: A 5G module uses two antennas and therefore occupies both the GPS and 4G antenna connectors.**

#### 2.9.1 4G/5G Dial-Up
4G module (EC200N): once the module is powered, dial and obtain an IP address dynamically:

```plain
root@fl-imx6ull:~# fltest_4gCat1.sh
udhcpc (v1.24.1) started
cdc_ether 2-1:1.0 usb0: kevent 12 may have been dropped
Sending discover...
Sending select for 192.168.43.100...
Lease of 192.168.43.100 obtained, lease time 86400
/etc/udhcpc.d/50default: Adding DNS 192.168.43.1
```

5G module dial-up procedure:

```plain
root@fl-imx6ull:~# stty -F /dev/ttyUSB2 -echo
root@fl-imx6ull:~# echo "AT+QICSGP=2,1,cmnet" > /dev/ttyUSB2    // Set the APN; cmnet is for China Mobile
root@fl-imx6ull:~# echo "AT+QNETDEVCTL=2,3,1" > /dev/ttyUSB2    // Enable automatic dial-up at boot
root@fl-imx6ull:~# udhcpc -fnq -i usb0
udhcpc (v1.24.1) started
IPv6: ADDRCONF(NETDEV_UP): usb0: link is not ready
cdc_ncm 2-1:1.0 usb0: 425 mbit/s downlink 425 mbit/s uplink
Sending discover...
cdc_ncm 2-1:1.0 usb0: 425 mbit/s downlink 425 mbit/s uplink
cdc_ncm 2-1:1.0 usb0: network connection: connected
IPv6: ADDRCONF(NETDEV_CHANGE): usb0: link becomes ready
Sending discover...
Sending select for 10.109.30.222...
Lease of 10.109.30.222 obtained, lease time 86400
/etc/udhcpc.d/50default: Adding DNS 111.11.11.3
```

**Note: Dial-up only needs to be configured once, on first boot with a 5G module. After that, run udhcpc -fnq -i usb0 to obtain an IP address; the module handles power-on dial-up and reconnection automatically.**

#### 2.9.2 4G/5G Internet Test
Check connectivity to the Internet:

```plain
root@fl-imx6ull:~# ping www.baidu.com -I usb0
PING www.a.shifen.com (39.156.66.18) 56(84) bytes of data.
64 bytes from 39.156.66.18: icmp_seq=1 ttl=51 time=94.5 ms
64 bytes from 39.156.66.18: icmp_seq=2 ttl=51 time=974 ms
64 bytes from 39.156.66.18: icmp_seq=3 ttl=51 time=617 ms
64 bytes from 39.156.66.18: icmp_seq=4 ttl=51 time=335 ms
64 bytes from 39.156.66.18: icmp_seq=5 ttl=51 time=470 ms

--- www.a.shifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 23184ms
rtt min/avg/max/mdev = 94.505/498.457/974.056/293.531 ms
```

Ping baidu.com: five packets sent and received with 0% loss, confirming that 4G can reach the Internet.

**Note: If the 4G module cannot reach the Internet, check the APN in the dial-up script and make sure the SIM card has credit.**

If the DNS server IP can be pinged but domain names do not resolve, delete the default gateways on eth0 and eth1 and try again.

Use route -n to list the default gateways and route del to remove one. For example, to remove the eth1 default gateway:

```plain
root@fl-imx6ull:~# route del default gw 192.168.0.1 eth1
```

#### 2.9.3 4G/5G Power Off and On
**Note: The 4G/5G module is powered on by default at boot.**

Power the 4G/5G module off:

```plain
root@fl-imx6ull:~# echo 120 > /sys/class/gpio/export
root@fl-imx6ull:~# echo out > /sys/class/gpio/gpio120/direction 
root@fl-imx6ull:~# echo 0 > /sys/class/gpio/gpio120/value #4GEN power down
root@fl-imx6ull:~# usb 2-1: USB disconnect, device number 5
cdc_ether 2-1:1.0 usb0: unregister 'cdc_ether' usb-ci_hdrc.1-1, CDC Ethernet Device
IPv6: ADDRCONF(NETDEV_UP): eth1: link is not ready
IPv6: ADDRCONF(NETDEV_UP): sit0: link is not ready
option1 ttyUSB0: GSM modem (1-port) converter now disconnected from ttyUSB0
option 2-1:1.2: device disconnected
option1 ttyUSB1: GSM modem (1-port) converter now disconnected from ttyUSB1
option 2-1:1.3: device disconnected
```

Power the 4G/5G module on:

```plain
root@fl-imx6ull:~# echo 120 > /sys/class/gpio/export
root@fl-imx6ull:~# echo out > /sys/class/gpio/gpio120/direction 
root@fl-imx6ull:~# echo 1 > /sys/class/gpio/gpio120/value #4GEN is power on
root@fl-imx6ull:~# usb 2-1: new high-speed USB device number 4 using ci_hdrc
usb 2-1: USB disconnect, device number 4
usb 2-1: new high-speed USB device number 5 using ci_hdrc
cdc_ether 2-1:1.0 usb0: register 'cdc_ether' at usb-ci_hdrc.1-1, CDC Ethernet Device, ae:0c:29:a3:9b:6d
cdc_ether 2-1:1.0 usb0: kevent 12 may have been dropped
option 2-1:1.2: GSM modem (1-port) converter detected
usb 2-1: GSM modem (1-port) converter now attached to ttyUSB0
option 2-1:1.3: GSM modem (1-port) converter detected
usb 2-1: GSM modem (1-port) converter now attached to ttyUSB1
```

#### 2.9.4 Share the 4G/5G Connection over Ethernet
Start 4G dial-up and confirm that the Internet can be pinged.

```plain
fltest_4gCat1.sh
ping www.baidu.com
```

Configure forwarding

```plain
echo 1 > /proc/sys/net/ipv4/ip_forward /* Enable IP forwarding */
iptables -t nat -A POSTROUTING -o usb0 -j MASQUERADE /* usb0 is the interface created by the 4G module; add the forwarding rule */
```

Edit the configuration file

```plain
vi /etc/udhcpd/udhcpd.conf

Set the opt router value on line 88 to the IP address of the interface that will receive traffic. For example, to forward to eth0, use its default IP 192.168.0.232.
#Examles
opt	dns	8.8.8.8
option	subnet	255.255.255.0
opt	router	192.168.0.232
opt	wins	192.168.10.10
option	dns	129.219.13.81	# appened to above DNS servers for a total of 3
option	domain	local
option	lease	864000		# 10 days of seconds

Then change the IP addresses on lines 4 and 5 to addresses on the same subnet as eth0.
start 	192.168.0.100	#default: 192.168.0.20
end		192.168.0.120	#default: 192.168.0.254
```

Start udhcpd

```plain
udhcpd /etc/ udhcpd/udhcpd.conf &
```

Configure the client device

For example, with a PC: connect the PC directly to the ENET2 port of the FCU1104, set the PC Ethernet address on the 192.168.0.0/24 subnet, and set the gateway to the ENET2 IP address, as shown below:

IP: 192.168.0.100

Gateway: 192.168.0.232

### 2.10 LoRa Test
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/036.png)

**Note: The system supports the E32 and E22 LoRa modules. Run the test that matches the module fitted.**

#### 2.10.1 E32 LoRa Module Test
At boot, the module is powered and in normal (mode 0) operation. Its default parameters are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/037.png)

**2.10.1.1 Power the module off and on**

```plain
echo 4 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio4/direction
echo 0 > /sys/class/gpio/gpio4/value # power on
echo 1 > /sys/class/gpio/gpio4/value # power down
```

**2.10.1.2 Configure the module parameters**

Enter mode 3 (configuration mode): set both M1 and M0 high.

```plain
echo 22 > /sys/class/gpio/export  #M1
echo out > /sys/class/gpio/gpio22/direction  # Configure the GPIO as an output
echo 23 > /sys/class/gpio/export  #M0
echo out > /sys/class/gpio/gpio23/direction
echo 1 > /sys/class/gpio/gpio22/value  #M1 is hi
echo 1 > /sys/class/gpio/gpio23/value  #M0 is hi
```

Write the parameters to the E32 module. (Defaults: C0 00 00 1A 17 44; see section 7.1, "Factory Default Parameters", of E32-433T20DC_UserManual_CN_v1.9.pdf for details.)

```plain
root@fl-imx6ull:~# fltest_loraw /dev/ttymxc5 0xc0 0x00 0x00 0x1a 0x17 0x44
Forlinx LoRa test.

Byte[0] is c0
Byte[1] is 0
Byte[2] is 0
Byte[3] is 1a
Byte[4] is 17
Byte[5] is 44

Sending CMD.
Sent successfully.
```

Read the parameters back from the E32 module.

```plain
root@fl-imx6ull:/forlinx/cmdbin# fltest_lorar /dev/ttymxc5 0xc1 0xc1 0xc1
Forlinx LoRa test.

Press Ctrl + 'C' to stop.

Sending CMD.
Sent successfully.

Read byte[0]: 0xc0
Read byte[1]: 0x0
Read byte[2]: 0x0
Read byte[3]: 0x1a
Read byte[4]: 0x17
Read byte[5]: 0x44
```

**2.10.1.3 Transparent transmission over LoRa**

Enter mode 0 (normal mode): set both M1 and M0 low.

```plain
echo 22 > /sys/class/gpio/export  #M1
echo out > /sys/class/gpio/gpio22/direction  # Configure the GPIO as an output
echo 23 > /sys/class/gpio/export  #M0
echo out > /sys/class/gpio/gpio23/direction
echo 0 > /sys/class/gpio/gpio22/value  #M1 is lo
echo 0 > /sys/class/gpio/gpio23/value  #M0 is lo
```

Test transparent reception between the FCU1104 and a PC. All registers use the defaults C0 00 00 1A 17 44.

The FCU1104 communicates with module A, which is connected to the PC through a USB-to-TTL adapter. Run the lorar command below on the FCU1104 and send data from the PC with sscom5131:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/038.png)

```plain
root@fl-imx6ull:~# fltest_lorar /dev/ttymxc5
Forlinx LoRa test.

Press Ctrl + 'C' to stop.

Read byte[0]: 0x31
Read byte[1]: 0x32
Read byte[2]: 0x33
```

Test transparent transmission from the FCU1104 to the PC.

```plain
root@fl-imx6ull:~# fltest_loraw /dev/ttymxc5 0x31 0x32 0x33
Forlinx LoRa test.

Byte[0] is 31
Byte[1] is 32
Byte[2] is 33

Sending CMD.
Sent successfully.
```

sscom5131 on the PC then receives the data as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/039.png)

#### 2.10.2 E22 LoRa Module Test
At boot, the module is powered and in normal (mode 0) operation. Its default parameters are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/040.png)

**2.10.2.1 Power the module off and on**

```plain
echo 4 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio4/direction
echo 0 > /sys/class/gpio/gpio4/value # power on
echo 1 > /sys/class/gpio/gpio4/value # power down
```

**2.10.2.2 Configure the module parameters**

Enter mode 2 (configuration mode): set M1 high and M0 low.

```plain
echo 22 > /sys/class/gpio/export  #M1
echo out > /sys/class/gpio/gpio22/direction  # Configure the GPIO as an output
echo 23 > /sys/class/gpio/export  #M0
echo out > /sys/class/gpio/gpio23/direction
echo 1 > /sys/class/gpio/gpio22/value  #M1 is hi
echo 0 > /sys/class/gpio/gpio23/value  #M0 is lo
```

Write the parameters to the E22 module. (Defaults: 00 00 00 62 00 17; see section 7.2, "Register Description", of E22-400T30S_UserManual_CN_v2.2.pdf for details.)

```plain
root@fl-imx6ull:~# fltest_loraw /dev/ttymxc5 0xc0 0x00 0x06 0x00 0x00 0x00 0x62 0x00 0x17
Forlinx LoRa test.

Byte[0] is c0
Byte[1] is 0
Byte[2] is 6
Byte[3] is 0
Byte[4] is 0
Byte[5] is 0
Byte[6] is 62
Byte[7] is 0
Byte[8] is 17

Sending CMD.
Sent successfully.
```

Read the parameters back from the E22 module.

```plain
root@fl-imx6ull:~# fltest_lorar /dev/ttymxc5 0xc1 0x00 0x06
Forlinx LoRa test.

Press Ctrl + 'C' to stop.

Sending CMD.
Sent successfully.

Read byte[0]: 0xc1
Read byte[1]: 0x0
Read byte[2]: 0x6
Read byte[3]: 0x0
Read byte[4]: 0x0
Read byte[5]: 0x0
Read byte[6]: 0x62
Read byte[7]: 0x0
Read byte[8]: 0x16
^C
```

**2.10.2.3 Transparent transmission over LoRa**

Enter mode 0 (normal mode): set both M1 and M0 low.

```plain
echo 22 > /sys/class/gpio/export  #M1
echo out > /sys/class/gpio/gpio22/direction  # Configure the GPIO as an output
echo 23 > /sys/class/gpio/export  #M2
echo out > /sys/class/gpio/gpio23/direction
echo 0 > /sys/class/gpio/gpio22/value  #M1 is lo
echo 0 > /sys/class/gpio/gpio23/value  #M0 is lo
```

Test transparent reception between the FCU1104 and a PC. All registers use the defaults 00 00 00 62 00 17.

The FCU1104 communicates with module A, which is connected to the PC through a USB-to-TTL adapter. Run the lorar command below on the FCU1104 and send data from the PC with sscom5131:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/041.png)

```plain
root@fl-imx6ull:~# fltest_lorar /dev/ttymxc5
Forlinx LoRa test.

Press Ctrl + 'C' to stop.

Read byte[0]: 0x31
Read byte[1]: 0x32
Read byte[2]: 0x33
```

Test transparent transmission from the FCU1104 to the PC.

```plain
root@fl-imx6ull:~# fltest_loraw /dev/ttymxc5 0x31 0x32 0x33
Forlinx LoRa test.

Byte[0] is 31
Byte[1] is 32
Byte[2] is 33

Sending CMD.
Sent successfully.
```

sscom5131 on the PC then receives the data as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/042.png)

### 2.11 RTC Test
This test uses the date and hwclock utilities to set the system and hardware clocks, then verifies after a reboot that the system clock has been synchronized from the RTC. A coin cell is fitted to the FCU1104 by default.

Check the system time.

```plain
root@freescale ~$ date
Thu Sep 21 05:59:48 UTC 2017
```

Set the time as follows.

```plain
root@fl-imx6ull:~# date -u 010112002021.00
Fri Jan  1 12:00:00 UTC 2021
```

Check the hardware clock.

```plain
root@freescale ~$ hwclock -w
```

hwclock -w writes the system time to the RTC chip, synchronizing the RTC with the system time.

**Note: Without this step, the system time will not be updated at the next boot.**

Power off and restart the system. If the system and hardware clocks are now synchronized, the RTC is working.

```plain
root@fl-imx6ull:~# date
Fri Jan  1 12:01:07 UTC 2021
```

Network time synchronization:

Make sure domain names can be resolved before synchronizing over the network. If external domains cannot be pinged, add a DNS server.

```plain
root@fl-imx6ull:~# echo "nameserver 8.8.8.8" > /etc/resolv.conf
```

```plain
root@fl-imx6ull:~# ntpdate cn.pool.ntp.org
21 Jan 03:17:20 ntpdate[695]: step time server 84.16.73.33 offset 1695290.019374 sec
root@fl-imx6ull:~# date
Thu Jan 21 03:20:44 UTC 2021
```

### 2.12 TF Card Test
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/043.png)

The TF card slot is indicated by the red arrow in the figure above. Inserting a card mounts it automatically under /run/media, and the console prints details of the card. Output varies between card models.

The following example uses a 16 GB SanDisk TF card:

```plain
fl-imx6ull login: mmc0: host does not support reading read-only switch, assuming write-enable
mmc0: new high speed SDHC card at address e624
mmcblk0: mmc0:e624 SL16G 14.8 GiB
 mmcblk0: p1
FAT-fs (mmcblk0p1): Volume was not properly unmounted. Some data may be corrupt. Please run fsck.
```

To list the files on the TF card:

```plain
root@fl-imx6ull:~# ls -l /run/media/mmcblk0p1/
total 126312
drwxrwx--- 2 root disk      4096 Dec 29 16:22 'System Volume Information'
```

Copy the bin directory from the TF card to the forlinx directory:

```plain
root@fl-imx6ull:~# cp /run/media/mmcblk0p1/test /home
root@fl-imx6ull:~# sync
```

**Note: Run sync after copying, otherwise the copy may not be committed.**

Reference write speed:

```plain
root@fl-imx6ull:~# dd if=/dev/zero of=/run/media/mmcblk0p1/test bs=1M count=100 oflag=direct
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 13.5151 s, 7.8 MB/s
```

Reference read speed:

```plain
root@fl-imx6ull:~# dd if=/run/media/mmcblk0p1/test of=/dev/null bs=1M count=100 iflag=direct
100+0 records in
100+0 records out
104857600 bytes (105 MB, 100 MiB) copied, 5.55159 s, 18.9 MB/s
```

### 2.13 Watchdog Test
The watchdog is disabled by default. To enable it, see the "Configuring Applications to Start at Boot" section. Once enabled, the system restarts after 60 s if the watchdog is not serviced. The shortest reset timeout that can be set in the watchdog application is 2 s.

If the watchdog is serviced periodically, the timeout never expires and the system does not restart.

#### 2.13.1 Watchdog Timeout Reset
Enable the watchdog with a 5 s timeout. The system restarts when the 5 s period expires.

```plain
root@fl-imx6ull:~# fltest_wdog /dev/watchdog settimeout 5 &
```

#### 2.13.2 Servicing the Watchdog Every 2 s
Enable the watchdog with a 5 s timeout and service it every 2 s.

```plain
root@fl-imx6ull:~# fltest_wdog /dev/watchdog keepalive 5 &
```

Because the timeout never expires, the system runs normally. If you kill the fltest_wdog process with the command below, no further service signal is sent and the system restarts after the 5 s timeout.

```plain
root@fl-imx6ull:~# killall fltest_wdog
```

### 2.14 Database Test
The board ships with SQLite 3.11.0. Test commands:

```plain
root@fl-imx6ull:~# sqlite3
SQLite version 3.11.0 2016-02-15 17:29:24
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> create table tbl1 (one varchar(10), two smallint);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite> .quit
```

The output above shows that the database can be created, written, and read normally.

### 2.15 Power-Loss Detection
The system exposes a monitoring interface that applications can use as needed. Reading the GPIO returns 1 while external power is present and 0 after power is removed, so the application can detect a power failure. Export the power-loss detection GPIO with:

```plain
root@fl-imx6ull:~# echo 67 > /sys/class/gpio/export
root@fl-imx6ull:~# echo in > /sys/class/gpio/gpio67/direction
```

GPIO value with the power supply connected:

```plain
root@fl-imx6ull:~# cat /sys/class/gpio/gpio67/value
1
```

GPIO value with the power supply removed:

```plain
root@fl-imx6ull:~# cat /sys/class/gpio/gpio67/value
0
```

### 2.16 DO/DI Test (Extended Version)
#### 2.16.1 Connector Description
| Interface | Diagram |
| --- | --- | --- |
| DI | ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/044.png) |
| DO | ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/045.png) |


#### 2.16.2 Device Node to Hardware Mapping
| Device node | Hardware label |
| --- | --- |
| DO1-1 and DO1-2 | do0 |
| DO2-1 and DO2-2 | do1 |


#### 2.16.3 Isolated DO Test
Close and open the DO1-1 / DO1-2 contacts.

```plain
root@fl-imx6ull:~# echo 1 > /sys/class/leds/do0/brightness #on
root@fl-imx6ull:~# echo 0 > /sys/class/leds/do0/brightness #off
```

Close and open the DO2-1 / DO2-2 contacts.

```plain
root@fl-imx6ull:~# echo 1 > /sys/class/leds/do1/brightness #on
root@fl-imx6ull:~# echo 0 > /sys/class/leds/do1/brightness #off
```

#### 2.16.4 Isolated DI Test
DI inputs can be tested in two ways:

Read through the /dev/gpio_input_0 and /dev/gpio_input_1 nodes. For DI-1, run:

```plain
root@fl-imx6ull:~# fltest_di /dev/gpio_input_0
read /dev/gpio_input_0 value is 1.
read /dev/gpio_input_0 value is 0.
```

Each time DI-1 is connected to COM, "0" is printed.

Read the attribute node directly. For DI-2, run:

```plain
root@fl-imx6ull:~# cat /sys/class/gpio-input/gpio_input_1/state
1
root@fl-imx6ull:~# cat /sys/class/gpio-input/gpio_input_1/state
0
```

Each time DI-2 is connected to COM, the command above prints "0".

### 2.17 FlexCAN Test (Extended Version)
#### 2.17.1 Connector Description
The FCU1104 provides one CAN interface, shown below.

| Diagram |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/046.png) |


#### 2.17.2 Device Node to Hardware Mapping
| Device node | Hardware label |
| --- | --- |
| CAN | can0 |


#### 2.17.3 CAN Test
Configure the CAN interface:

```plain
root@fl-imx6ull:~# ifconfig can0 down
root@fl-imx6ull:~# ip link set can0 up type can bitrate 125000 triple-sampling on
flexcan 2090000.can can0: writing ctrl=0x0e312085
IPv6: ADDRCONF(NETDEV_CHANGE): can0: link becomes ready
root@fl-imx6ull:~# ifconfig can0 up
```

Set the can0 bit rate to 125000.

Send CAN data:

```plain
root@fl-imx6ull:~# cansend can0 123#123456789123456789
```

The host PC receives the CAN data:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/047.png)

Receive CAN data:

```plain
root@fl-imx6ull:~# root@fl-imx6ull:~# candump can0  &
[1] 755
```

Send data from the host PC:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/048.png)

### 2.18 Python 3.6 Test (Extended Version)
Reference: User Materials/Linux/Applications/11_Python3.6.9/Readme.txt.

Note: Python 3.6 requires considerable storage. Add the installation package to the system yourself if your application needs it.

### 2.19 MQTT Test (Extended Version)
The FCU1104 supports MQTT. It can work with the Alibaba Cloud IoT platform, or with Eclipse Mosquitto acting as either the MQTT broker or the client.

Reference: User Materials/Linux/Applications/03_Mosquitto/Readme.txt

### 2.20 Reverse Proxy Test (Extended Version)
Reference: User Materials/Linux/Applications/06_Reverse_Proxy/Readme.txt

## 3. Building FCU1104 Linux
### 3.1 Versions
Host OS: Ubuntu 16.04 (64-bit)

Cross toolchain: arm-poky-linux-gnueabi-gcc 5.3.0

Bootloader: u-boot-2016.03

Kernel: linux-4.1.15

Qt: 5.6.2

### 3.2 Build Environment
The Linux development environment is assumed to be installed.

#### 3.2.1 Installing the SDK (Including the Cross-Compiler)
User Materials/Tools/fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh

Copy the shell script above to any directory in the virtual machine (for example /home/{username}/work) and run it there:

```plain
neo@ubuntu:~/work$ sudo ./fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh
[sudo] password for neo:
Freescale i.MX Release Distro SDK installer version 4.1.15-2.0.0
================================================================
Enter target directory for SDK (default: /opt/fsl-imx-x11/4.1.15-2.0.0):
You are about to install the SDK to "/opt/fsl-imx-x11/4.1.15-2.0.0". Proceed[Y/n]?
Extracting SDK..................
```

When prompted with "Enter target directory for SDK (default: /opt/fsl-imx-x11/4.1.15-2.0.0)", press Enter to accept the default path.

When prompted with "You are about to install the SDK to /opt/fsl-imx-x11/4.1.15-2.0.0. Proceed[Y/n]?", enter Y.

#### 3.2.2 Setting the Environment Variables
Run the following command to set up the environment. Note the space after the dot:

```plain
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
```

Verify that the compiler was installed:

```plain
neo@ubuntu:~/work$ arm-poky-linux-gnueabi-gcc -v
```

If installation succeeded, the gcc version is printed:

```plain
Thread model: posix
gcc version 5.3.0 (GCC)
```

Verify the Qt build environment:

```plain
neo@ubuntu:~/work$ qmake -v
```

If installation succeeded, the QMake version is printed:

```plain
QMake version 3.0
Using Qt version 5.6.2 in /opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/cortexa7hf-neon-poky-linux-gnueabi/usr/lib
```

### 3.3 Building
The procedures in this chapter assume the cross-compiler has been installed and configured successfully.

#### 3.3.1 Building u-boot
u-boot is not open source. Use the u-boot binaries supplied by Forlinx at the paths below:

u-boot for the 256M NAND / 256M DDR version:

User Materials/Linux/Images/u-boot-imx6ull14x14evk_nand.imx

u-boot for the 4G eMMC / 512M DDR version:

User Materials/Linux/Images/u-boot.imx

#### 3.3.2 Building the Kernel
Copy linux-4.1.15.tar.bz2 to your Ubuntu working directory.

```plain
neo@ubuntu:~/work$ tar xvf linux-4.1.15.tar.bz2                           // Extract the kernel source
neo@ubuntu:~/work$ cd linux-4.1.15                               // Enter the kernel source directory
```

Kernel source location:

User Materials/Linux/Source/kernel/linux-4.1.15.tar.bz2

**3.3.2.1 Full Build of the Linux 4.1.15 Kernel**

```plain
neo@ubuntu:~/work$ ./imx6ull_build.sh
```

The build produces extensive output; only the last part is shown here:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/049.png)

A successful build generates the .ko module files and zImage under linux-4.1.15/arch/arm/boot/.

The corresponding .dtb files are generated under linux-4.1.15/arch/arm/boot/dts (see the section on compiling the device tree separately).

The commands in build.sh are explained below:

| Command | Description |
| --- | --- |
| make imx6ull_defconfig | 1. Loads the configuration file into .config (menuconfig reads its settings from .config);<br />2. linux-4.1.15/arch/arm/configs/imx6ull_defconfig is the kernel configuration file; run this step when building the source for the first time;<br />3. Run this step before using menuconfig. After saving and exiting menuconfig, the updated settings are written to .config; <br />copy them back to imx6ull_defconfig to create a new default configuration. |
| make zImage | Builds zImage. On success the file is created under linux-4.1.15/arch/arm/boot/. |
| make dtbs | Builds the device trees. The corresponding .dtb files are created under linux-4.1.15/arch/arm/boot/dts. |
| make modules | Builds the kernel modules. |
| make distclean | Removes the current .config; the kernel must be configured again afterwards. |

**3.3.2.2 Building ZImage Only**

Run these commands in the kernel source directory after setting the environment variables.

```plain
neo@ubuntu:~/work/linux-4.1.15$
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
neo@ubuntu:~/work/linux-4.1.15$ make imx6ull_defconfig
neo@ubuntu:~/work/linux-4.1.15$ make zImage
```

On success, zImage is created under linux-4.1.15/arch/arm/boot/.

**3.3.2.3 Building the Device Tree Only**

```plain
neo@ubuntu:~/work/linux-4.1.15$ make dtbs
```

Device tree sources are under linux-4.1.15/arch/arm/boot/dts/. A successful build creates the corresponding .dtb files in that directory:

| Device tree source | Output | Description |
| --- | --- | --- |
| imx6ull-fcu1104-emmc.dts | imx6ull-fcu1104-emmc.dtb | For eMMC SoMs |
| imx6ull-fcu1104-gpmi.dts | imx6ull-fcu1104-gpmi.dtb | For 256M NAND SoMs |

**3.3.2.4 Building the Modules Only**

```plain
neo@ubuntu:~/work/linux-4.1.15$ make modules
```

On success, the corresponding .ko files are created in each driver directory.

Run make modules_install INSTALL_MOD_PATH=/home/forlinx/work/ to export the modules to /home/forlinx/work/, package them as modules.tar.bz2, and replace the file of the same name in the flashing tool.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/050.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/051.png)

#### 3.3.3 Building the Root File System

Root file system source archives:

User Materials/Linux/Images/rootfs.tar.bz2 is the Qt file system.

User Materials/Linux/Images/rootfs_nogpu.tar.bz2 is the console-only file system.

Step 1: Create a directory for the target file system, for example ~/work/rootfs:

```plain
neo@ubuntu:~/work$ mkdir rootfs
```

Step 2: Copy rootfs.tar.bz2 into the rootfs directory and extract it:

```plain
neo@ubuntu:~/work/rootfs$ tar xvf rootfs.tar.bz2
```

Step 3: After making the required changes, repack the file system with tar:

```plain
neo@ubuntu:~/work/rootfs$ tar cvjf rootfs.tar.bz2 *
```

If you are working as a normal user, use fakeroot to simulate root privileges so that file permissions are preserved.

```plain
neo@ubuntu:~/work/rootfs$ fakeroot tar cvjf rootfs.tar.bz2 *
```

The resulting rootfs.tar.bz2 is the file system image that can be flashed to the board.

#### 3.3.4 Build a Command-Line Application

**Note: The cross-compiler is assumed to be installed and the environment variables set.**

User Materials/Linux/Source/fltest_apps.

+ Copy fltest_wdog.c to any directory on Ubuntu, for example /home/work.
+ Change to ~/work.

```plain
neo@ubuntu:~$ cd work/
```

Cross-compile with $CC. Once the environment is set, $CC points to the cross-compiler GCC; see the environment setup script

environment-setup-cortexa7hf-neon-poky-linux-gnueabi for details.

```plain
neo@ubuntu:~/work$ $CC fltest_wdog.c -o fltest_wdog
```

Use the file command to inspect the generated binary.

```plain
neo@ubuntu:~/work$ file fltest_wdog
```

Output:

```plain
wdttest: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, 
interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 2.6.32, 
BuildID[sha1]=400fbba6005ea8e7344df7080ab10d9ef54e3a45, not stripped
```

The result confirms a 32-bit ARM executable.

+ Copy fltest_wdog to the board with a USB drive, for example to /home/root, and run it:

Use cd to change to /home/root on the board.

```plain
root@fl-imx6ull:~# cd /home/root
```

Copy fltest_wdog from the mounted USB drive into the current directory.

```plain
root@fl-imx6ull:~# cd /home/root 
root@fl-imx6ull:/home/root# cp /run/media/sda1/fltest_wdog ./
```

Make the program executable and run it.

```plain
root@fl-imx6ull:/home/root# chmod 777 fltest_wdog
root@fl-imx6ull:/home/root# ./fltest_wdog /dev/watchdog settimeout 5 &
```

+ Follow the "Watchdog Test" section to test it.

#### 3.3.5 Test-Build a Qt Application
**Note: The cross-compiler is assumed to be installed and the environment variables set.**

Edit the Qt configuration file:

```plain
neo@ubuntu:~$ sudo vi /opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/cortexa7hf-neon-poky-linux-gnueabi/usr/lib/qt5/mkspecs/linux-oe-g++/qmake.conf
```

Remove include(../oe-device-extra.pri).

Build it with qmake from the command line.

```plain
neo@ubuntu:~/work $ qmake
neo@ubuntu:~/work $ make
```

**Note: Write Qt applications in Qt Creator and build them with qmake. A practical workflow is to edit the project in Qt for Windows and then copy it into the virtual machine for compilation.**

#### 3.3.6 Starting Applications at Boot
The startup script is /etc/rc.local; add any commands that must run at boot there. For example, to run the 4G dial-up script fltest_4gCat1.sh automatically, add the line shown in red below to /etc/rc.local:

```plain
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.
if [ -e /testbench ]
then
    cd /testbench/
    ./test.sh &
fi
boa &
fltest_4gCat1.sh
echo 30000 >  /proc/sys/vm/min_free_kbytes

exit 0
```

## 4. Flashing the System
### 4.1 Flashing from a TF Card
The following procedure flashes NAND using fcu1104-nand-burn.tar.bz2 as an example.

#### 4.1.1 Preparing the TF Card
Copy fcu1104-nand-burn.tar.bz2 to any directory on the Ubuntu host, for example /home/neo/work.

User Materials/Linux/Flashing Tools/fcu1104-nand-burn.tar.bz2 is the 256M NAND file system.

User Materials/Linux/Flashing Tools/fcu1104-emmc-burn.tar.bz2 is the 4G eMMC file system.

Step 1: Extract fcu1104-nand-burn.tar.bz2 into /home/neo/work.

```plain
neo@ubuntu:~/work$ tar -jxvf fcu1104-nand-burn.tar.bz2
```

Step 2: Insert the TF card into a USB card reader on the PC. (In VMware, if the USB device is not passed through to the virtual machine, use the icon indicated by the arrow below to connect it.)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/052.png)

Step 3: Once the virtual machine detects the card and its folder opens, go to /home/neo/work/fcu1104burn and run the script below:

```plain
neo@ubuntu:~/work/fcu1104burn$ sudo ./burn.sh
```

The command lists the hard disks and USB drives on the PC. Select the entry for your TF card and press Enter.

Note: Identify your drive (sda/sdb/sdc) by capacity. For example, a 4 GB card reports about 3872256 KB. Avoid connecting more than one USB drive at a time to prevent confusion.

In this example:

Select 1 and press Enter.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/053.png)

Enter y, press Enter, and wait for card creation to finish.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/054.png)

If the output does not contain the information highlighted in the red box below, the SD card was not mounted; unmount and remount it in Ubuntu.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/055.png)

When the card is ready, the boot partition contains the sdrun and target directories. sdrun boots the flashing process and needs no changes; the contents of target are written to the flash chip. To replace an image, overwrite the corresponding file in target with the same filename and flash the system again.

#### 4.1.2 Flashing the System from the TF Card
Insert the prepared TF card into the FCU1104 card slot, power on the unit, hold BOOT while pressing RESET, then release RESET and finally release BOOT. The new firmware on the card is written to the FCU1104 automatically. Flashing takes several minutes; the buzzer sounds and the RUN LED blinks once per second when the update completes.

Power-cycle or reset the FCU1104 to boot the new system.

### 4.2 Updating Individual Components
#### 4.2.1 Updating the Kernel and Device Tree on eMMC Separately
After boot, copy the replacement device tree to a USB drive, plug it into the board, and run the following commands in the terminal:

```plain
root@fl-imx6ull:~# cp /run/media/mmcblk0p1/target/imx6ull-fcu1104-emmc.dtb  /run/media/mmcblk1p1/imx6ull-fcu1104-emmc.dtb  
root@fl-imx6ull:~# cp /run/media/mmcblk0p1/target/zImage /run/media/mmcblk1p1/zImage
root@fl-imx6ull:~# sync
root@fl-imx6ull:~# reboot
```

Reboot the board.

#### 4.2.2 Updating the Kernel and Device Tree on NAND Separately
To update the kernel and device tree, use the nandwrite command, which is included in the file system. Copy the new .dtb and zImage files into the target directory on the TF card, erase the old firmware from the corresponding partitions, and write the new images with nandwrite. Example commands:

Update the kernel:

```plain
root@fl-imx6ull:~# flash_erase /dev/mtd4 0 0
Erasing 128 Kibyte @ 7e0000 -- 100 % complete
root@fl-imx6ull:~# nandwrite -p /dev/mtd4 /run/media/mmcblk0p1/target/zImage
Writing data to block 0 at offset 0x0
Writing data to block 1 at offset 0x20000
Writing data to block 2 at offset 0x40000
…
```

Update the device tree:

```plain
root@fl-imx6ull:~# flash_erase /dev/mtd3 0 0
Erasing 128 Kibyte @ 2e0000 -- 100 % complete
root@fl-imx6ull:~# nandwrite -p /dev/mtd3 /run/media/mmcblk0p1/target/imx6ull-fcu1104-gpmi.dtb
Writing data to block 0 at offset 0x0
```

#### 4.2.3 Updating User Software and u-boot
User applications can be copied into the file system from a TF card or over TFTP.

Update u-boot (NAND):

kobs-ng is the NXP tool for writing u-boot to NAND flash. Copy the new u-boot.imx into a directory in the file system (/root in this example), erase the existing u-boot.imx, and write the new image.

```plain
root@freescale ~$ flash_erase  /dev/mtd0 0 0
root@freescale ~$ kobs-ng init –x /root/u-boot.imx
root@freescale ~$ sync
```

## Appendix
### Appendix 1  Adding Startup Commands
- Start 4G dial-up automatically at boot.

The startup script is /etc/rc.local; add any commands that must run at boot there. To start the 4G dial-up script automatically, allow 3–5 s after boot for the module to initialize before dialing. Add the following to /etc/rc.local:

```plain
sleep 5
/usr/bin/fltest_4gCat1.sh &
exit 0    /* Insert the new lines above exit */
```

- Add a startup entry.

Create a startup entry in /etc/rc5.d.

vi /etc/rc5.d/S99test.sh

Contents:

#!/bin/bash

echo "helloworld!"

chmod 777 /etc/rc5.d/S99test.sh

S99 sets the startup priority to 99; adjust it as needed.

## Appendix 2  IP Address Configuration

Open /etc/network/interfaces and edit the configuration

For example, configure eth0 as static and eth1 as dynamic:

## Wired or Wireless Interfaces
auto eth0

#iface eth0 inet dhcp

iface eth0 inet static

address 192.168.0.232

netmask 255.255.255.0

gateway 192.168.0.1

broadcast 192.168.0.255

auto eth1

iface eth1 inet dhcp

- Remove temporary IP commands from the startup script.

vi /etc/rc.local

- Delete the content highlighted in the red box below:


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1104/fcu1104_linux4.1.15_user_manual_EN/056.png)

- Set the DNS server.

Add the following to /etc/rc.local:

echo "nameserver 8.8.8.8" > /etc/resolv.conf

- Remove the connmand service

rm /user/sbin/connmand

sync

- Reboot

reboot
