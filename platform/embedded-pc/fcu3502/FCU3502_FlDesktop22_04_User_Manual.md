# FlDesktop22.04_User's Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## 1. Overview

### 1.1 Product Description

The FCU3502 Embedded Control Unit is a high-performance edge AI platform developed by Forlinx Embedded. Powered by the Rockchip RK3588 processor and RK1828 AI accelerator, it delivers dual-chip computing capabilities for high-throughput video analytics and on-premises LLM deployment. The FCU3502 integrates multi-channel IPC video decoding, streaming, and AI inference. Forlinx also offers proprietary AI algorithms, custom algorithm development, and private knowledge base solutions. Featuring a rich set of industrial interfaces, a sleek family-style design, and a programmable LED light bar, it is ideal for demanding AI applications in intelligent transportation, industrial vision, EV charging, and energy inspection.

Built on a SoM and carrier board architecture, it supports HDMI IN/OUT, 5G, Wi-Fi, Ethernet, USB 3.0, audio, RS485, RS232, DI, and DO. Dimensions: 233 × 141 × 66 mm (L × W × H) .

Applications: Intelligent cockpits, in-vehicle vision, intelligent transportation, edge computing, industrial vision, energy inspection, and AI-powered EV charging stations.

### 1.2 Applications

The FCU3502 is suitable for a wide range of industrial and commercial applications, including:

Energy Management: Energy management systems, photovoltaic inverters, and utility data acquisition.

Smart Manufacturing: Production process monitoring, signal acquisition, and data transmission.

MES: Manufacturing Execution System (MES) data acquisition and communication.

Environmental Monitoring: Air quality and environmental monitoring in industrial and hazardous chemical facilities.

Smart Agriculture: Greenhouse environmental monitoring.

Livestock Farming: Livestock environment monitoring.

Pharmaceutical \& Food Storage: Environmental monitoring in pharmaceutical and food storage facilities.

### 1.3 Software Parameters

The functions of the FCU3502 Embedded Control Unit (Basic Edition) are as shown in the table below:

| **Device**| **Description**|
|------------|:-----------|
| CPU| Rockchip RK3588<br/>Cortex-A76 \*4 + Cortex-A55 \*4|
| RAM| 8GB|
| ROM| 64GB eMMC|
| M.2 SSD| Supports M.2 M-KEY SSD|
| HDMI OUT| Video output, maximum resolution: 4K|
| HDMI IN| Video input, maximum resolution: 4K|
| M.2 Accelerator| Compatible with Rockchip RK1828 accelerator|
| USB| USB2.0 HOST \*2 + USB3.0 HOST \*2|
| Ethernet| 2 x, 10/100/1000Mbps self-adaptive |
| DO| 2 x, Digital Output (DO): 5 A @ 30 VDC. |
| DI| 2 x, Digital Input (DI): Dry Contact |
| RS232| 4 x, communication rate 115,200 bps|
| RS485| 2 x, communication rate 115,200 bps|
| Power IN| Rated at 24 V DC, supports a wide input voltage range of 9–36 V DC, and features reverse polarity protection and overcurrent protection.|
| DEBUG| RJ45-type console interface, RS232|
| TF| Expandable to 128G|
| AUDIO| 1 x 3.5mm AUX socket, analogue audio output, 1 x built-in 1W speaker.|
| 4G/5G| Supports 4G/5G modules with an M.2 interface|
| WIFI| Wi-Fi 4 + Bluetooth 4.2; Wi-Fi supports STA and AP modes|
| KEY| Features RESET, BOOT, RECOVERY and power buttons|
| Indicator Light 1| Two indicator lights, used to indicate that the system is powered on and operating normally.|
| Indicator Light 2 | Programmable light strip design|
| Dimensions| Mounting \& Dimensions: With mounting brackets; 233 × 141 × 66 mm (L × W × H)|
| Installation| Installation: Desktop / Bracket Mounting|
| Electromagnetic Compatibility| EMC Level 3 Protection|

### 1.4 Software Parameters

| Software Support | **Description**|
|:-----------|:-----------|
| OS| Forlinx Desktop 22.04|
| GCC| 10.3.1|
| RS485/RS232| With 485 test examples|
| Network Protocols| TCP/IP, UDP, DHCP, TFTP, FTP, SSH, Web, Nginx, HTTP, IPtables、SQLite|
| Ethernet| 10M/ 10M/1000M auto-negotiating Ethernet, supports static and dynamic IP address allocation, and supports MAC address modification|
| WiFi| Supports STA, AP|
| Bluetooth| With test examples|
| 4G (Optional)|Support|
| RTC| Supports automatic NTP time synchronisation and clock retention in the event of a power failure. |
| Watchdog| Supports reset time setting|

### 1.5 Enclosure Dimensions

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/4.png)

## 2\. FCU3502 Product Features

### 2.1 Interface Diagram

The FCU3502 interface layout is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/file.webp)

FCU3502 Interface Diagram:

- HDMI IN: HDMI Video Input
- HDMI OUT: Video output port; Wi-Fi/Bluetooth: SMA antenna RF connector; 4G/5G: SMA antenna RF connector
- Indicator lights: Power, Operation
- KEY: Power on/off and system programming button
- Power Supply: DC power input
- DEBUG: RJ45-console debug port
- GbE: 2 x Gigabit/100 Mbit auto-negotiating network ports
- USB3.0: 2 x USB3.0 HOST, 2 x USB2.0: USB2.0 HOST
- Speaker: Built-in 8Ω 1W speaker
- Headphones: 3.5mm headphone jack
- RS232: 4 × RS232 communication interfaces, 3P 3.81 mm green terminals
- RS485: 2 × RS485 communication interfaces, 3P 3.81 mm green terminals
- DO: 2 x DO output connectors, 4P 3.81 mm, green terminals
- DI: 2 x DI input ports, 4P 3.81mm green connectors TF\&SIM: TF card and Nano SIM card slots
- LED: Indicator light

### 2.2 User Login

The FCU3502 supports two methods for logging into the system: SSH and the debug serial port.

Account: forlinx; 

The root password is blank; simply press Enter after typing ''su''.

#### 2.2.1 SSH Login

The FCU3502's default IP address on ETH0 is 192.168.0.232. The FCU3502 uses the ETH0 port as the SSH access interface. Set the PC's IP address to the 192.168.0.xx subnet. After powering on the unit, log in via SSH and enter commands to test its basic functions and applications.

Open a terminal tool (taking MobaXterm as an example), configure it as follows and click "Open":

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214546242_8635b55d_5356_46ba_ad42_dab91a51514c.png)

Click ''OK''. Account: forlinx; password: forlinx.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214546696_29e5e412_7357_4e5a_9033_b1537765d65f.png)

#### 2.2.2 Debug Serial Port Login

The debug serial port requires a dedicated RJ45 debugging cable and is intended for early-stage development and debugging. For on-site debugging and maintenance in the later stage, it is recommended to use the network login method. The username and password for the debug serial port are the same as those used for SSH access.

#### 2.2.3 View System Logs

After the system starts, you can view the kernel startup information via dmesg command.

Using dmesg:

```plain
root@FCU3502:~#  echo "3 4 1 7" > /proc/sys/kernel/printk 
[1.561245] Booting Linux on physical CPU 0x0000000000 [0x412fd050]
……
root@FCU3502:~# resize     #Adaptive terminal display
```

#### 2.2.4 Memory and Storage Space Distribution

The FCU3502 is equipped with 8 GB of RAM and 64 GB of eMMC storage. The memory and storage utilization are as follows:

```plain
root@FCU3502:~# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        14G  7.8G  5.3G  60% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
tmpfs           1.6G  2.6M  1.6G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.9G  4.0K  3.9G   1% /tmp
/dev/mmcblk0p7  123M   12M  108M  10% /oem
/dev/mmcblk0p8   42G  294M   40G   1% /userdata
tmpfs           786M   80K  786M   1% /run/user/1000
tmpfs           786M   56K  786M   1% /run/user/0 #This partition supports read and write access by users
forlinx@FCU3502:~$ free -h
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       1.0Gi       5.9Gi       5.0Mi       733Mi       6.5Gi
Swap:             0B          0B          0B
```

### 2.3 Temperature Reading Function

To view temperature values:

```plain
root@FCU3502:~# cat /sys/class/thermal/thermal_zone0/temp
35153
```

The temperature value is 39.9℃

### 2.4 Watchdog Function

Watchdog is a commonly used function in embedded systems. The device node for the watchdog in FCU3502 is /dev/

Start the watchdog, set the reset timeout to 10 seconds, and feed the watchdog periodically so that the system will not restart.

```plain
root@FCU3502:~#  fltest_watchdog
Watchdog Ticking Away!
```

When using Ctrl+C to end the test program, feeding stops, and the watchdog remains open. After 10s, the system resets.

If you do not want a reset enter the command to close the watchdog within 10s after ending the program:

```plain
root@FCU3502:~# fltest_watchdog -d
Watchdog card disabled.
```

Start the watchdog, set the reset timeout to 10 seconds, but do not feed it; the system will reboot after 10 seconds.

```plain
root@FCU3502:~# fltest_watchdog -e
[   43.345421] watchdog: watchdog0: watchdog did not stop!
Watchdog card enabled.
```

### 2.5 RESET Button Input

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/file.webp)

As shown in the figure, when you click the RESET button, the system restarts immediately, whilst the debug serial port prints the system start-up information.

### 2.6 UART Usage and Routine

#### 2.6.1 Interface Description

The serial port connection structure is shown in the red box in the diagram.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1.png)

#### 2.6.2 Correspondence Between Software and Hardware

| Hardware Terminal| Device Accessed by Application| Remarks|
|:----------:|:----------:|:----------:|
| RS485\_A0/RS485\_B0| /dev/ttyS0| RS485\_0 Interface|
| RS485\_A1/RS485\_B1| /dev/ttyS4| RS485\_1 Interface|
| RS485\_R0/RS485\_T0| /dev/ttyS5| RS232\_0 Interface|
| RS485\_R1/RS485\_T1| /dev/ttyS6| RS232\_1 Interface|
| RS485\_R2/RS485\_T2| /dev/ttyS7| RS232\_2 Interface|
| RS485\_R3/RS485\_T3| /dev/ttyS9| RS232\_3 Interface|

#### 2.6.3 RS485 Test

Taking RS485\_1 as an example, if you need to test other RS485 interfaces, simply modify the corresponding interface's device node name.

This test method is demonstrated by communication with a computer. Connect the RS232-to-RS485 module to the RS485\_1 interface of the FCU3502 as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/2.png)

**FCU3502**

Open the putty.exe software on the computer, set the serial port and baud rate, then launch the software:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214548483_7705e4f9_b909_446a_bd45_8c2a66169106.png) ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214548767_1f56707e_bac0_4b20_a687_a0a64200feb0.png)

RS485\_1 Interface Send Test

Enter the following command in the terminal of the FCU3502 to set the baud rate of the RS485\_1 interface to 115200:

```plain
root@FCU3502:~# stty -F /dev/ttyS4 raw speed 115200
```

RS485\_1 Interface Send Test

```plain
root@FCU3502:~# echo "forlinx_485_test" > /dev/ttyS4
```

RS485\_1 will send ''forlinx\_485\_test'' to the PC at a baud rate of 115200, and it will be received in the computer's Putty.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214548989_47ece110_d889_4a28_b8a9_081e8771092c.png)

RS485\_1 Interface Receive Test

```plain
root@FCU3502:~# cat /dev/ttyS4
```

Enter a message in the computer's Putty software:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214549279_00f94f3f_8b52_4e8f_a262_dd8aa21a83c2.png)

The computer will send ''abcdefg'' to the PC at a baud rate of 115200, and it will be received by the FCU3502's RS485\_1.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214549700_83e1b610_c52e_4c46_a0e1_6d308cff81ee.png)

### 2.7 Ethernet Usage

The FCU3502 supports two Gigabit Ethernet ports.

#### 2.7.1 Correspondence Between Software and Hardware

| Hardware Terminal| Device Accessed by Application| Remarks|
|:----------:|:----------:|:----------:|
| ETH0| eth0| Gigabit Wired Network|
| ETH1| eth1| Gigabit Wired Network|

#### 2.7.2 Network Card Test

With an Ethernet cable plugged in for network access, eth0 is pre-configured with a static IP by factory default.

View the current network connections in NetworkManager:

```plain
root@FCU3502:~#  nmcli con show
NAME                UUID                                  TYPE      DEVICE
Wired connection 1  2f9ed541-0ecc-34af-95f5-d417122660fe  ethernet  eth0
forlinx-wlan        f4baa3ae-84bd-4245-92c4-a4ebc7d0ab8b  wifi      wlan0
test                d7dfb443-2acc-4a3c-8674-04b60376f52b  wifi      --
Wired connection 2  5144903c-3f34-333c-a0c5-0c8666a74d1d  ethernet  --
```

To set a static IP address, the following example shows how to set the IP address of eth0 to 192.168.0.232:

```plain
root@FCU3502:~# nmcli con mod 'Wired connection 1' ipv4.method manual ipv4.addresses 
192.168.0.232/24 ipv4.gateway 192.168.0.1 ipv4.dns 8.8.8.8 connection.autoconnect yes
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/nmcli_params_en.png)

Activate the network connection after configuration to make the settings take effect.

```plain
root@FCU3502:~# nmcli con up 'Wired connection 1' //Activate the network connection
Connection successfully activated (D-Bus active path: 
/org/freedesktop/NetworkManager/ActiveConnection/5) 
root@FCU3502:~# ifconfig eth0 //View eth0 configuration information is in effect
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

Open the iperf3 software on the PC via the command line (tool\\iperf-3.1.3-win64\\iperf3.exe) and set it to listening mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214550234_3b260e0a_e242_4607_8378_100d58818428.png)

Enter the following command on the FCU3502 terminal to perform the test:

```plain
root@FCU3502:~# iperf3 -c 192.168.0.110 -i 5 -t 60
```

The print information on the PC side is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214550649_38ec6cb4_6d71_4e05_8a0c_af1be71d9d97.png)

The print information on the FCU3502 is:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214551076_f7b2b62b_ad8f_4434_9910_189e069a7473.png)

### 2.8 WiFi Usage Guide

After system startup, the WiFi module is enabled and its driver is loaded by default.

#### 2.8.1 Onboard WiFi Test

The FCU3502 is pre-integrated with the on-board BL-M8723DU1 Wi-Fi+Bluetooth combo module for Wi-Fi function testing. The Wi-Fi driver module appears as the mlan0 node in the system, and this test network interface corresponds to wlan0.

First, use the following command to load the Wi-Fi module (it is automatically loaded on boot by default, no user operation is required).

```plain
root@FCU3502:~# modprobe moal
```

Check whether the module is loaded successfully and check the generated wifi node

```plain
root@FCU3502:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal

root@FCU3502:~# ifconfig wlan0
mlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 10:68:38:29:66:17  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### 2.8.2 STA Mode Test

This mode acts as a station to connect to the wireless network. In the following test, the router uses WPA encryption, with the connected Wi-Fi SSID: iPhon and password: 12345678. Due to varying network environments, please configure according to your actual situation during this test.

For example:

```plain
root@FCU3502:~#  nmcli dev wifi connect "iPhon" password "12345678"
Device 'p2p0' successfully activated with '10c487f9-6aae-40fc-b009-349fe242c640'.
```

Wifi connection is successful after this step is completed.

Test WiFi, ping domain name or IP.

```plain
root@FCU3502:~# ping www.baidu.com -c 3 -I p2p0
PING www.a.shifen.com (220.181.38.149) from 192.168.81.140 mlan0: 56(84) bytes of data.
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=1 ttl=54 time=13.8 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=2 ttl=54 time=13.2 ms
64 bytes from 220.181.38.149 (220.181.38.149): icmp_seq=3 ttl=54 time=15.1 ms

--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 13.176/14.026/15.071/0.785 ms
```

#### 2.8.3 AP Mode Test

**Note: Before this test, it is necessary to ensure that the Gigabit network card eth0 is connected to the network and the network is normal.**

View the drive loading status, taking the BL-M8723DU1 module as an example

```plain
root@FCU3502:~# lsmod
Module                  Size  Used by
moal                  516096  3
mlan                  356352  1 moal
```

Create the hotspot:

For example: Wi-Fi hotspot name: FCU3502\_WIFI\_AP    Password: 12345678

```plain
root@FCU3502:~# sysctl net.ipv4.ip_forward=1
root@FCU3502:~# echo 1 > /proc/sys/net/ipv4/ip_forward
root@FCU3502:~# sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
root@FCU3502:~# sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
root@FCU3502:~# iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
root@FCU3502:~# nmcli device wifi hotspot con-name FCU3502_WIFI_AP ssid FCU3502_WIFI_AP password 12345678 ifname wlan0
Device 'wlan0' successfully activated with 'ffb90f90-85bb-4859-9dab-b81bba2d2406'.
Hint: "nmcli dev wifi show-password" shows the Wi-Fi name and password.
```

Once this is complete, your mobile phone should be able to detect a Wi-Fi hotspot named ''FCU3502\_WIFI\_AP''; once connected, you will be able to access the internet.

### 2.9 Bluetooth Usage Guide

Note: Before connecting, please attach the antenna to the Wi-Fi port.

The carrier board WIFI/BL module integrates the Bluetooth function. This section demonstrates the data transmission between the mobile phone and FCU3502 via Bluetooth.

#### 2.9.1 Bluetooth Configuration

```plain
root@FCU3502:/# bluetoothctl                     
hci0 new_settings: powered bondable ssp br/edr le secure-conn
Agent registered
[CHG] Controller 88:49:2D:18:4B:99 Pairable: yes
[bluetooth]# power on
Changing power on succeeded
[bluetooth]# agent on
Agent is already registered
[bluetooth]# default-agent
Default agent request successful
[bluetooth]# discoverable on
hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn
hci0 new_settings: powered connectable discoverable bondable ssp br/edr le secure-conn
Changing discoverable on succeeded
[CHG] Controller 88:49:2D:18:4B:99 Discoverable: yes
```

#### 2.9.2 Passive Pairing

Now, turn on your mobile phone's Bluetooth and search for a device named ''FCU3502''; select it to pair.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/bt_settings_en.png)

The terminal will output the following prompt message, enter ''yes to confirm.''.

```plain
hci0 FC:5B:8C:1A:A8:66 type BR/EDR connected eir_len 29
[NEW] Device FC:5B:8C:1A:A8:66 2526534850的Xiaomi 14
Request confirmation14]#
[agent] Confirm passkey 866438 (yes/no): yes
hci0 new_link_key FC:5B:8C:1A:A8:66 type 0x05 pin_len 0 store_hint 1
hci0 device_flags_changed: FC:5B:8C:1A:A8:66 (BR/EDR)
     supp: 0x00000001  curr: 0x00000000
[CHG] Device FC:5B:8C:1A:A8:66 INFO: 0x0007 (7)
[CHG] Device FC:5B:8C:1A:A8:66 Bonded: yes
[CHG] Device FC:5B:8C:1A:A8:66 Modalias: bluetooth:v038Fp1200d1436
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001105-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001112-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001115-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001116-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000111f-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000112f-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001132-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001200-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001800-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 00001801-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000fcc0-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000fcc0-36a2-11ea-8467-484d7e99a198
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 0000fdaa-0000-1000-8000-00805f9b34fb
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: 98b97136-36a2-11ea-8467-484d7e99a198
[CHG] Device FC:5B:8C:1A:A8:66 UUIDs: ada499be-27d6-11ec-9427-0a80ff2603de
[CHG] Device FC:5B:8C:1A:A8:66 ServicesResolved: yes
[CHG] Device FC:5B:8C:1A:A8:66 INFO: 0x000f (15)
[CHG] Device FC:5B:8C:1A:A8:66 Paired: yes
hci0 FC:5B:8C:1A:A8:66 type BR/EDR disconnected with reason 3
[CHG] Device FC:5B:8C:1A:A8:66 ServicesResolved: no
[CHG] Device FC:5B:8C:1A:A8:66 INFO: 0x000d (13)
[CHG] Device FC:5B:8C:1A:A8:66 Connected: no
[CHG] Device FC:5B:8C:1A:A8:66 Reason: 0x0300 (768)
```

View and remove connected devices:

```plain
[bluetooth]# devices						//View connected Bluetooth devices
Device FC:5B:8C:1A:A8:66 2526534850的Xiaomi 14
 [bluetooth]# remove FC:5B:8C:1A:A8:66           //Remove device
[DEL] Device FC:5B:8C:1A:A8:66 2526534850的Xiaomi 14
Device has been removed
```

#### 2.9.3 Active Pairing

As well as passive pairing, you can also send a request for active pairing from the terminal.

```plain
[bluetooth]# scan on	//Search for discoverable Bluetooth devices                                           
SetDiscoveryFilter success
hci0 type 7 discovering on
Discovery started
[CHG] Controller 88:49:2D:18:4B:99 Discovering: yes 
[NEW] Device FC:5B:8C:1A:A8:66 2526534850的Xiaomi 14 
[bluetooth]# scan off		         //Stop searching                                   
[bluetooth]# pair FC:5B:8C:1A:A8:66              //Pair via Bluetooth
Attempting to pair with FC:5B:8C:1A:A8:66
hci0 device_flags_changed: FC:5B:8C:1A:A8:66 (BR/EDR)
     supp: 0x00000001  curr: 0x00000000
hci0 FC:5B:8C:1A:A8:66 type BR/EDR connected eir_len 24
[CHG] Device FC:5B:8C:1A:A8:66 INFO: 0x0002 (2)
[CHG] Device FC:5B:8C:1A:A8:66 Connected: yes
Request confirmation14]#
 [agent] Confirm passkey 316527 (yes/no): yes     //Confirm password 
```

#### 2.9.4 Receiving Files

After successful pairing, you can use the Bluetooth function on the smartphone to send files to the FCU3502.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/bt_transfer_en.png)

All received files are saved in the /tmp directory.

### 2.10 4G/5G Usage Guide

The FCU3502 supports the 4G module EM05 and the 5G modules RM500U and RM500Q; please carry out testing based on the model of the communication module you have selected.

Device nodes corresponding to 4G and 5G modules are as follows:

| Model| Node Name|
|:----------:|:----------:|
| Quectel EM05| usb0|
| Quectel RM500U| usb0|
| Quectel RM500Q| usb0|

The 4G and 5G modules use a standard pop-up SIM card slot; press the SIM card to eject it, as shown in the image below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214552073_7b120794_d7d9_4d7f_9706_68a2a2666402.png)

#### 2.10.1 4G/5G Identification and Determination

+ Quectel EM05

You can enter the following command in the FCU3502 console to check whether the Quectel EC20 module is successfully recognized.

```plain
root@FCU3502:~# lsusb
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

Using the ifconfig command, you can see that the node name generated by the Quectel EM05 module is usb0.

+ Quectel RM500U

You can enter the following command in the FCU3502 console to check whether the Quectel RM500U module is successfully recognized.

```plain
root@FCU3502:~# lsusb
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

#### 2.10.2 4G/ 5G Test

+ Quectel EC20
  

Take inserting the mobile SIM card to test 4G Internet access as an example to test whether it is connected to the external network:

```plain
root@FCU3502:~# fltest_quectel.sh &
[1] 2109
root@FCU3502:~# eth0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
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

Once successful, it will automatically obtain an IP address, allowing you to perform a Ping test to verify network connectivity.

```plain
root@FCU3502:~# ping www.baidu.com -I usb0 -c 5
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

+ Quectel RM500U

Take inserting the mobile SIM card to test 5G Internet access as an example to test whether it is connected to the external network:

```plain
root@FCU3502:~#  fltest_quectel.sh > /dev/null &
[1] 2279
root@FCU3502:~#
root@FCU3502:~# Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/


root@FCU3502:~# Listening on LPF/usb0/72:30:d0:23:95:a3
Sending on   LPF/usb0/72:30:d0:23:95:a3
Sending on   Socket/fallback
DHCPREQUEST for 192.168.42.2 on usb0 to 255.255.255.255 port 67 (xid=0x191a4d21)
DHCPACK of 192.168.42.2 from 192.168.42.1 (xid=0x214d1a19)
bound to 192.168.42.2 -- renewal in 34021 seconds.
```

Once successful, it will automatically obtain an IP address, allowing you to perform a Ping test to verify network connectivity.

```plain
root@FCU3502:~# ping www.baidu.com -I usb0 -c 5
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

### 2.11 DO/DI Usage Guide

#### 2.11.1 Interface Description

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/3.png)

#### 2.11.2 Correspondence Between Software and Hardware

| Hardware Terminal| Device Accessed by Application| Remarks|
|----------|----------|----------|
| DI0| /sys/class/gpio-input/DIN0/state| Input|
| DI1| /sys/class/gpio-input/DIN1/state| Input|
| DO0| /sys/class/leds/do0/brightness| Output|
| DO1| /sys/class/leds/do1/brightness| Output|

#### 2.11.3 Command Line Testing

DO User Guide

DO Relay Operation – Taking the operation of DO1 as an example:

```plain
root@FCU3502:~# echo 0 > /sys/class/leds/DO1/brightness
root@FCU3502:~# echo 1 > /sys/class/leds/DO1/brightness
```

The above commands can control the closed and open state of the relay of DO1. Note that input 1 is closed.

DI User Guide

First, check the status of the DI; take DI1 as an example.

```plain
root@FCU3502:~# cat /sys/class/gpio-input/DIN1/state
1
```

You can observe that DI1 is at a high level. Short the DI1 interface to ground, then run the command again:

```plain
root@FCU3502:~# cat /sys/class/gpio-input/DIN1/state
0
```

You will see DI1 switch to a low level.

### 2.12 Methods of Audio Playback

The FCU3502 features one 3.5 mm audio jack, one XH-2.54 mm speaker connector and one microphone input.

#### 2.12.1 HDMI Playback

```plain
forlinx@FCU3502:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

forlinx@FCU3502:/userdata/media/audio$gst-play-1.0 /userdata/media/audio/piano2-CoolEdit.mp3 --audiosink="alsasink device=plughw:0,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
```

#### 2.12.2 SPKOUT Playback

```plain
forlinx@FCU3502:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
forlinx@FCU3502:~$ amixer -c rockchipnau8822 sset "Speaker" 63 //Adjust the volume
forlinx@FCU3502:~$ amixer -c rockchipnau8822 sset "PCM" 255

forlinx@FCU3502:/userdata/media/audio$gst-play-1.0 /userdata/media/audio/piano2-CoolEdit.mp3 --audiosink="alsasink device=plughw:2,0"
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
```

#### 2.12.3 MIC Input

```plain
forlinx@FCU3502:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: rockchiphdmiin [rockchip,hdmiin], device 0: rockchip,hdmiin i2s-hifi-0 [rockchip,hdmiin i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipnau8822 [rockchip-nau8822], device 0: dailink-multicodecs nau8822-hifi-0 [dailink-multicodecs nau8822-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
forlinx@FCU3502:/userdata/media/audio$arecord -D default:CARD=rockchipnau8822 -d 5 -f cd -t wav test1.wav

Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/audio/piano2-CoolEdit.mp3
Redistribute latency...
Redistribute latency...
0:00:00.8 / 0:00:06.3
root@FCU3502:~# aplay -D plughw:0,0 test1.wav //Play back captured audio via HDMI
```

### 2.13 MQTT

MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for efficient IoT communication in low-bandwidth and unstable network environments. The MQTT protocol is simple, reliable, and has low network overhead, making it widely adopted in IoT applications.

Below are some simple MQTT test examples:

Subscribe to a topic:

```plain
root@FCU3502:~/libmodbus-3.1.6# mosquitto_sub -t test  &
```

Publish a message:

```plain
root@FCU3502:~/libmodbus-3.1.6# mosquitto_pub -t test -m "hello world"
```

### 2.14 Database Usage

MySQL is a popular open-source relational database management system, widely used for data storage and management in various applications and websites. It offers powerful features and flexible configuration options, enabling developers to efficiently organize and manipulate data.

Here are some simple test examples of MySQL functionality:

Log in to the MySQL database.

```plain
root@FCU3502:~# mysql
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

Query Mysql version information.

```plain
mysql> select version();
+-------------------------+
| version()               |
+-------------------------+
| 8.0.39-0ubuntu0.22.04.1 |
+-------------------------+
1 row in set (0.00 sec)
```

New database.

```plain
mysql> create database forlinx_database;
Query OK, 1 row affected (0.02 sec)
```

Select the database.

```plain
mysql> use forlinx_database;
Database changed
```

New data table

```plain
mysql> create table name(
    -> id int auto_increment not null primary key,
    -> uname char(8) NOT NULL,
    -> gender char(2) NULL,
    -> birthday date );
Query OK, 0 rows affected (0.11 sec)
```

Show tables in the database.

```plain
mysql> show tables;
+----------------------------+
| Tables_in_forlinx_database |
+----------------------------+
| name                       |
+----------------------------+
1 row in set (0.01 sec)
```

Displays the structure of the data table.

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

Exit database.

```plain
mysql> exit;
Bye
```

### 2.15 Basic OpenSSL Environment Testing

#### 2.15.1 Basic OpenSSL Environment Testing

The Secure Sockets Layer (SSL) protocol is the most widely used application protocol. It encrypts data using cryptographic algorithms such as AES, DES, and 3DES to protect data during transmission.

Please set up the environment variables before using OpenSSL.

```plain
root@FCU3502:~# export OPENSSL_CONF=/etc/ssl/openssl.cnf
```

Test symmetric encryption RSA speed.

```plain
root@FCU3502:~# openssl speed rsa1024
Doing 1024 bits private rsa's for 10s: 12406 1024 bits private RSA's in 9.97s
Doing 1024 bits public rsa's for 10s: 243329 1024 bits public RSA's in 9.99s
OpenSSL 1.1.1f  31 Mar 2020
built on: Mon Feb  6 17:57:17 2023 UTC
options:bn(64,64) rc4(char) des(int) aes(partial) blowfish(ptr)
compiler: gcc -fPIC -pthread -Wa,--noexecstack -Wall -Wa,--noexecstack -
g -O2 -fdebug-prefix-map=/build/openssl-0kQqA1/openssl-1.1.1f=. -fstack-
protector-strong -Wformat -Werror=formaL_USE_NODELETE -DOPENSSL_PIC -DOPENSSL_CPUID_OBJ -DOPENSSL_BN_ASM_MONT -DSHA1_ASM -DSHA256_ASM -
DSHA512_ASM -DKECCAK1600_ASM -DVPAES_ASM -DECP_NISTZ256_ASM -
DPOLY1305_ASM -DNDEBUG -Wd
                  sign    verify    sign/s verify/s
rsa 1024 bits 0.000804s 0.000041s   1244.3  24357.3
```

Test the AES symmetric encryption algorithm:

```plain
root@FCU3502:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0714908 s, 82.8 kB/s
root@FCU3502:~# openssl enc -aes-128-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU3502:~# openssl enc -aes-128-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU3502:~# diff test test.dec
```

Test the DES symmetric encryption algorithm:

```plain
root@FCU3502:~# dd if=/dev/urandom of=test bs=1 count=5922
5922+0 records in
5922+0 records out
5922 bytes (5.9 kB, 5.8 KiB) copied, 0.0702961 s, 84.2 kB/s
root@FCU3502:~# openssl enc -des-ede3-cbc -e -in test -out test.enc -pass pass:123 -pbkdf2
root@FCU3502:~# openssl enc -des-ede3-cbc -d -in test.enc -out test.dec -pass pass:123 -pbkdf2
root@FCU3502:~# diff test test.dec
```

### 2.16 FTP Service Function Description

The vsftpd service is automatically started upon system boot. You can access it by entering [ftp://192.168.0.232/](ftp://192.168.0.123/) in the address bar of the File Explorer on your computer, which will bring up an authentication interface. The username is forlinx, and the password is forlinx.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/Image_20261106093520.png)

Example screenshot of accessing FTP via the Windows File Explorer:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/Image_20261106093601.png)

### 2.17 ModBus

#### 2.17.1 Function Overview

Modbus is a communication protocol designed for data transmission in automation systems. It is widely used in industrial control and monitoring fields for data exchange and communication between devices. The Modbus protocol is simple, reliable, and easy to implement, making it a popular choice for many industrial devices and systems.

The FCU3502 comes with Modbus-related dependency libraries pre-installed by default. The Modbus test examples will be downloaded from Ubuntu's software repositories for testing.

Test the routine:

Before running the test, please ensure that your internet connection is working properly and that the FCU3502 can access the internet.

First, edit the Ubuntu source repositories:

Modifications:

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

Update the package list and download the libmodbus5 source code.

```plain
sudo apt update && apt source libmodbus5
```

If the following error occurs during download（W: Download is performed unsandboxed as root as file 'libmodbus\_3.1.6-2.dsc' couldn't be accessed by user '\_apt'. - pkgAcquire::Run (13: Permission denied)）

Please try the following command:

```plain
 chmod 777 libmodbus_3.1.6-2.dsc
```

After downloading, the required test source code is in the following location:

```plain
root@FCU3502~# ls libmodbus-3.1.6/tests/ 

LICENSE README.md  bandwidth-server-many-up.c  random-test-client.c 

unit-test-client.c  unit-test.h.in  version.c Makefile.am  bandwidth-client.c bandwidth-server-one.c  random-test-server.c unit-test-server.c unit-tests.sh
```

### 2.17.2 Communication Testing in RTU Mode

Connect the two RS485 serial ports on the FCU3502 using a serial cable; for this test, RS485\_0 and RS485\_1 were connected for a head-to-head comparison.

Modify the test source code unit-test-server.c and unit-test-client.c from the previous section, and update them to the corresponding serial port device nodes respectively.

```plain
root@FCU3502:~# vim libmodbus-3.1.6/tests/unit-test-server.c 
ctx = modbus_new_rtu("/dev/ttyS0", 115200, 'N', 8, 1); 
root@FCU3502:~# vim libmodbus-3.1.6/tests/unit-test-client.c 
ctx = modbus_new_rtu("/dev/ttyS4", 115200, 'N', 8, 1);
```

Compile the test program

```plain
root@FCU3502:apt-get install autoconf automake libtool
root@FCU3502:~# cd libmodbus-3.1.6/ 
root@FCU3502:~/libmodbus-3.1.6# ./autogen.sh 
root@FCU3502:~/libmodbus-3.1.6# ./configure 
root@FCU3502:~/libmodbus-3.1.6# make
```

Run the RTU mode test server

```plain
root@FCU3502:~/libmodbus-3.1.6# ./tests/unit-test-server rtu &
```

Run the RTU mode test client

```plain
root@FCU3502:~/libmodbus-3.1.6# ./tests/unit-test-client rtu
```

#### 2.17.3 Communication Testing in TCP Mode

This test uses the 127.0.0.1 loopback test, which is to verify the availability of the libmodbus5 library.

Run the RTU mode test server

```plain
root@FCU3502:~/libmodbus-3.1.6# ./tests/unit-test-server tcp &
```

Run the RTU mode test client

```plain
root@FCU3502:~/libmodbus-3.1.6# ./tests/unit-test-client tcp
```

Docker Features Overview

Docker is an advanced container engine based on LXC. In the Docker ecosystem, applications and their dependent runtime environments are packaged into individual images, which can then be distributed to any Docker-compatible platforms to run the applications and provide services. Docker is a process-level container. The official recommendation is that one Docker container runs only one program. Of course, you can run thousands of Docker containers on your host.

**Note: Please ensure the time on the FCU3502 is accurate, otherwise authentication expiration issues will occur when pulling images.**

Pull the hello-world image

```plain
root@FCU3502:~# docker pull hello-world
Using default tag: latest
latest: Pulling from library/hello-world
c9c5fd25a1bd: Pull complete
Digest: sha256:e0b569a5163a5e6be84e210a2587e7d447e08f87a0e90798363fa44a0464a1e8
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

View local Docker images

```plain
root@FCU3502:~# docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
hello-world   latest    f1f77a0f96b7   3 weeks ago   5.2kB
```

Run the hello-world test program

```plain
root@FCU3502:~# docker container run hello-world
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

### 2.19 Top Programmable LED Strip

#### 2.19.1 Replacing Light Strip Effects

During the FCU3502 boot process, a blue light strip is displayed by default in the U-Boot stage, which cannot be modified by users. After entering the file system, the light strip program is started by the fltest-rgb.service, with a blue chasing light (flowing light) displayed by default.

To replace the light effect, follow these steps:

Stop the current service:

```plain
root@FCU3502:~# systemctl stop fltest-rgb.service
```

Use the fltest\_rgb tool to test and confirm the desired light effect. For detailed usage of this program, refer to the next section.

Write the successfully tested light effect command into the service configuration file to replace the original startup script:

Open /etc/systemd/system/fltest-rgb.service and modify the ExecStart parameter:

```plain
root@FCU3502:~# cat /lib/systemd/system/fltest-rgb.service
[Unit]
Description=LED Strip Early Boot Indicator
DefaultDependencies=no
After=local-fs.target
Before=sysinit.target
ConditionPathExists=/dev/spidev4.0
[Service]
Type=simple
ExecStart=fltest_rgb -m chase -c 0000FF -b 1.0
Restart=always
RestartSec=5s
StandardOutput=null
StandardError=null
KillMode=process
[Install]
WantedBy=sysinit.target
```

After restarting the device or the service, the new light effect will take effect automatically along with the service.

#### **2.19.2 Instructions for Using the fltest\_rgb Program**

The fltest\_rgb program supports 5 display modes by default. Please directly run the program and specify corresponding parameters to switch the light strip effects. The system defaults to a blue breathing light after startup. If the default mode cannot meet requirements, Please modify or add custom light effect logic in the program source code, and recompile to realize personalized light strip configuration. Note that the program source code uses the program running time as the time reference. If the epoch time is used as the reference, operations that modify the system time such as NTP, date -s, and RTC adjustments will cause abnormal light strip display.

Source code path: Software Materials\\2. Image and Toolchain\\Test Programs\\fltest\_rgb.c

The five default modes are introduced below, and the method of using fltest\_rgb is demonstrated by changing the breathing light color as an example:

```plain
root@FCU3502:~# fltest_rgb -h
Usage: fltest_rgb [options]
Options:
  -m, --mode <rainbow|rainbow_uniform|breath|static|chase>  Color mode
  -c, --color <RRGGBB>                Static color (HEX format)
  -s, --speed <value>                 Gradient speed (rainbow: degrees/sec, chase: LEDs/sec, recommended range: 5-15)
  -b, --bright <0.0-1.0>              Maximum brightness
  -B, --breath <ms>                   Breathing cycle
```

The 5 light effect modes are as follows:

| Light Effect Mode| Mode| Color, Speed, Brightness Specification|
|:----------:|:----------:|:----------:|
| rainbow| Rainbow Mode| Color cannot be specified; speed and brightness are configurable|
| rainbow\_uniform| Uniform Rainbow Mode| Color cannot be specified; speed and brightness are configurable|
| breath| Breathing Light Mode| Color, speed and brightness are all configurable|
| static| Static Mode| Color, speed and brightness are all configurable|
| chase| Chasing Light (Flowing Light) Mode| Color, speed and brightness are all configurable|

Take the breath mode as an example to change the color:

The default startup service uses 0000FF for blue. To set a new color, use a color picker or other tools to extract the RGB value of the target color, and apply it directly to the program parameters.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/color_picker_en.png)

Several common colors for testing:

| Color| Color Name| Hexadecimal RGB|
|:----------:|:----------:|:----------:|
| | Red| FF0000|
| | Green| 00FF00|
| | Blue| 0000FF|

Test Commands:

```plain
root@FCU3502:~# fltest_rgb -m breath -c FF0000  // Red breathing LED
root@FCU3502:~# fltest_rgb -m breath -c 00FF00  // Green breathing LED
root@FCU3502:~# fltest_rgb -c 0000FF  // Blue breathing LED
```

### 2.20 Usage of RK182x Computing Accelerator Card

The FCU3502 natively supports the RK1828 computing accelerator card. The module loads automatically when inserting the card, and the relevant tests are as follows:

#### 2.20.1 Verifying Driver Installation

```plain
root@FCU3502:~# lspci
00:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3588 (rev 01)
01:00.0 Processing accelerators: Rockchip Electronics Co., Ltd Device 182a (rev 01)
```

When "182a" appears, it means the driver has finished loading.

#### 2.20.2 Scanning for Available Devices

```plain
root@FCU3502:~# rknn-smi info   
+-----------------------+---------------+---------------+----------------------+
| rknn-smi     Version: 1.1.0                                                  |
+=======================+===============+===============+======================+
| Device                | Health        | Power(mW)     | Npu(%)               |
| Chip          Name    | Bus-Id        | Temp(C)       | Memory-Usage(MB)     |
+=======================+===============+===============+======================+
| 0                     | OK            | NA            | 0                    |
| 0             RK1820  | 0000:01:00.0  | 31            | 31   / 2560          |
+=======================+===============+===============+======================+
```

This command is used to query the NPU built into the RK3588 main chip.

```plain
forlinx@Fcu3502:-/Desktop$ rknn3_transfer_proxy devices
List of ntb devices attached
0000:01:00.0  b98e6c51 PCIE
forlinx@Fcu3502:-/Desktop$
```

This command is used to query the RKNN3 computing card device. For an independent computing card such as the RK1828 connected through PCIe, its monitoring and management functions need to rely on a special RKNN3 SDK tool set.

This section takes Qwen2.5-3B-Instruct as an example: copy the rknn\_Qwen2\_5\_demo program to the /userdata directory.

Source code path: Software Resources\\2. Image \& Toolchain\\Test Programs\\rknn\_Qwen2\_5\_demo

Verifying driver installation.

```plain
root@FCU3502:/userdata/rknn_Qwen2_5_demo# ./rknn_qwen2_5_demo \
model/llm/Qwen2.5-3B-Instruct.rknn \
model/llm/Qwen2.5-3B-Instruct.weight \
model/llm/Qwen2.5-3B-Instruct.tokenizer.gguf \
model/llm/Qwen2.5-3B-Instruct.embed.bin \
0xff \
30
......
========================================================
RK182X LLM Hardware Stress Test Started
Model: model/llm/Qwen2.5-3B-Instruct.rknn
Core Mask: 0xff
Set Duration: 30 minutes
Q: What is artificial intelligence?
A: rknn_session_run
Artificial Intelligence (AI) is a broad field of computer science and related disciplines that focuses on creating systems or machines capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, natural language processing, decision-making, etc.

At its core, AI involves developing algorithms and models to enable computers to perform actions without being explicitly programmed for each one. This can range from simple pattern recognition in images or speech (like voice assistants like Siri or Alexa) to complex tasks such as autonomous driving systems that require understanding of the environment around them.

AI is categorized into several subfields, including:

1. **Machine Learning**: A subset of AI where algorithms are used for learning patterns and making predictions based on data.
2. **Deep Learning**: An advanced form of machine learning inspired by how biological neural networks in the brain work.
3. **Natural Language Processing (NLP)**: The ability to process, understand, and generate human language using computational methods.
4. **Computer Vision**: Techniques for enabling computers to interpret visual information from digital images or video.

AI is used across various industries such as healthcare, finance, transportation, customer service, entertainment, education, among others, helping automate processes, improve decision-making capabilities, enhance user experiences, and solve complex problems that are difficult for humans alone.
[Performance] TTFT=206.3ms | Decode=266 tokens | TPS=89.1
......
```

## 3. Flashing the System

You can use a TF card to flash the system to its eMMC storage. This method can be used for system recovery or upgrade operations..

**Note:** 

- **The test shows that the maximum TF card capacity is 16 GB. Using a TF card of 32 GB or larger may result in flashing failure;**
- **When flashing the TF card, the system will also enter command-line mode as the root@buildroot user; please wait patiently for the flashing to complete.**

### 3.1 TF System Flashing

#### 3.1.1 Creating a TF Flashing Card

Copy the image file that can boot normally on the board card to any path.

Software Materials\\3-Usage Tools\\System Update Tools\\SDDiskTool\_cn\_v1.74.rar

Step 1: Unzip SDDiskTool\_cn\_v1.74.rar to any path without Chinese characters

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1787716455978_73e6f344_4740_407f_8049_152811da9fb6.png)

Step 2: Insert the USB drive or TF card via USB card reader into the computer's USB port.

**Note: The maximum capacity of the test TF card is 32G. If the capacity is more than 32G, the burning may fail. It is recommended to use 16G.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_0_explorer_en.png)

Step 3: Select a removable device recognised on the specified TF card.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_1_select_device_en.png)

Select your target device and check the ''Firmware Update'' option.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_2_select_mode_en.png)

Step 4: Select the firmware image.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_3_select_firmware_en.png)

Select the path of the firmware image to be flashed.

Step 5: Start creation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_4_confirm_en.png)

Select ''Yes'' and wait for the creation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/sd_tool_5_created_en.png)

Click ''OK''.

### 3.1.2 TF System Flashing

Insert the TF card into the development board and power it on; the system will automatically begin the flashing process. Once the flashing is complete, both the screen and the serial port will display the following message:

Please remove SD CARD!!!, wait for reboot.

At this point, remove the TF card and the system will restart automatically (please do not switch off the power directly).

At this time, remove the TF card, and the system will automatically restart (do not cut the power directly).

Kernel startup phase: RUN indicator light, heartbeat light blinks in a regular, intermittent pattern.

Preparation for programming: The eMMC indicator light is off:

- Programming in progress: The eMMC indicator light remains lit;
- Programming completion phase: RUN indicator light, heartbeat light blinks in a regular, intermittent pattern.

Serial port information during the flashing process:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/FCU3502_FlDesktop22_04_User_Manual/1790214554598_3e6d024f_4806_44cc_b373_58be04740ec7.png)

If the device does not restart automatically after removing the TF card, you can complete the flashing process by restarting it manually. As shown in the figure above, the burning process takes about 28 minutes. Please wait patiently during the burning process.

