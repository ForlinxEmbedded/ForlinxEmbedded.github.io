# FCU1501\_Linux6.1.99\_User's Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open    

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1\. FCU1501 Product Overview

### 1.1 Product Description:

The FCU1501 Embedded Control Unit is developed using the RK3506J processor, offering advantages such as high efficiency, high performance, and low cost. It operates at a main frequency up to 1.5GHz and supports SoM configurations extended to commercial-grade levels of 512MB/8GB. It comes in two default configurations: Basic and Extended. The Basic version integrates functional interfaces including Ethernet, 4G, WiFi, Bluetooth, RS485/RS232, and DI/DO. The Extended version further expands with additional RS485, CAN, and DI/DO interfaces, providing greater flexibility for customer-specific configurations. 

**Product Features:**

- Supports 9 ~ 36 V wide voltage input, with anti-reverse connection protection and overcurrent protection;

- Supports 2 x 10/100M Ethernet;

- Supports WiFi; the module supports both STA and AP modes;

- Supports bluetooth;

- Supports USB

- Supports all-network 4G modules;

- Supports RTC clock functionality;

- Supports up to 8 x RS485, with isolated protection design;

- Supports up to 2 x CAN, with isolated protection design;

- Supports up to 8 x DI, dry contact inputs, with isolated protection design;

- Supports up to 8 x DO, relay outputs, with contact ratings of 5A 250VAC and 5A 30VDC.


### 1.2 Application Areas

FCU1501 embedded control unit is applicable to energy management system, photovoltaic inverter, water, electricity and gas data acquisition; production process signal acquisition and data transmission of manufacturing and processing enterprises; MES (manufacturing execution system) signal acquisition and data transmission; environmental monitoring of hazardous chemical sites, atmospheric environmental monitoring signal acquisition and data transmission; Agricultural greenhouse environment monitoring signal acquisition, data transmission; breeding environment monitoring signal acquisition, data transmission; medicine, food storage environment monitoring signal acquisition, data transmission and other fields.

### 1.3 Software Parameter

The FCU1501 embedded control unit supports the basic version and the extended version by default. The extended version is only the function extension of the basic version. See the following table for the parameters of the basic function and the extended function.

#### 1.3.1 Basic Function

The functions of the FCU1501 Embedded Control Unit (Basic Edition) are as shown in the table below:

| Device| Description|
|----------|----------|
| Memory\&Storage Configuration:| eMMC version: DDR3 512MB, eMMC 8GB   NAND version: DDR3 256MB，NAND 256MB|
| 4G (Optional)| |
| DO| 2 x, electromagnetically isolated, contact rating: 5A 30VDC / 250VAC Interface: 3.81mm pitch green terminals|
| DI| 2 x, optocoupler quarantine, using 3.81mm pitch green terminal|
| RS232| 2 x, multiplexed with 2 x RS485, communication rate: 115200 bps|
| RS485| 4 x, including 2 x multiplexed with RS232, communication rate: 115200 bps|
| USB| 1 x standard USB Type-A connector, available for programming|
| CAN| 1 x, CAN-FD, 1 Mbps, isolation voltage 1.5 KV, Level 3 ESD protection|
| DEBUG| Type-C interface, USB-to-serial debugging|
| Ethernet| 2 x 10/100Mbps|
| Bluetooth and Wi-Fi| Wi-Fi: Supports 2.4G \& 5G, IEEE 802.11b/g/n 150Mbps WLAN Bluetooth: 2.1/4.2/5.2|
| Onboard Clock| Features a dedicated RTC chip and an on-board CR2032 battery|
| Buzzer| 1 x, equipped with a buzzer, customizable for user-defined functions|
| REST reset button| 1 x, one-click reset of network parameters, customizable|
| Indicator light 1| 4 x LED: 1 × PWR, 1 × RUN, 1 × ERR, and 1 x user-defined D1|
| Indicator light 2| 4 x LED: 3 x LED indicate 4G signal strength, and 1 x user-defined D2|
| 1 x SIM card slot| Self-ejection type, support for detection|
| Power supply| Main power input DC 12V, support DC 9V ~ 36V wide voltage input, with reverse connection protection and overcurrent protection|
| Working Environment| Humidity: 5% to 95%, non-condensing   Operating temperature: -40°C to +85°C (eMMC version)   Storage temperature: -40°C to +85°C|

#### 1.3.2 Extended Features

In addition to the above basic functions, the extended version of FCU1501 embedded control unit has the following additional function parameters:

| Device|Description|
|----------|----------|
| DO| 6 x, electromagnetically isolated, contact rating: 5A 250VAC, 5A 30VDC Interface: 3.81mm pitch green terminals|
| DI| 6 x, optocoupler quarantine, using 3.81mm pitch green terminal|
| RS485/RS232| 4 x, communication rate 115,200 bps, of which two channels are multiplexed RS232 and RS485|
| CAN| 1 x, CAN-FD, 1 Mbps, isolation voltage 1.5 KV, Level 3 ESD protection|

### 1.4 Software Parameter

| Software Support:| Description|
|----------|----------|
| OS| Linux-6.1.99|
| GCC| 10.3.1|
| RS485/RS232| With 485 test examples|
| Network Protocols| TCP/IP, UDP,DHCP,TFTP,FTP, SSH, Web, Nginx, HTTP, IPtables, SQLite|
| Ethernet| 10M/100M auto-negotiating Ethernet, supports static and dynamic IP address allocation, and supports MAC address modification|
| WiFi| Supports AP, STA modes|
| bluetooth| With test examples|
| 4G (Optional)| Supported |
| RTC| Supports automatic NTP time synchronisation and clock retention in the event of a power failure|
| Watchdog| Supports reset time setting|
| Buzzer| With test examples|
| Python| With test examples|
| QT| What We Provide:|

### 1.5 Enclosure Dimensions

#### 1.5.1 Enclosure Dimension Drawing

The figure below shows the enclosure dimension drawing of FCU1501.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716450226_05714b69_9811_4455_8e42_31f3eda74cfc.png)

**Note: The overall dimensions are 187mm × 151.84mm × 45mm (Length × Width × Height), including the thickness of the antenna base and snap fits.**

#### 1.5.2 Installation Method Schematic

Forlinx provides three optional installation methods for you: DIN rail mounting, hanger bracket mounting, and front-facing hanger bracket mounting. The specific operations are as follows:

DIN Rail Mounting: Use two M3×6 countersunk screws to secure the DIN rail.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716450327_7d1c1085_314b_4fe9_870c_f5e6528d93fd.png)

Mounting Ear Installation: Use four M3×4 countersunk screws to secure the two mounting ears.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716450417_2610f62f_e046_4c11_a743_a32e4b50915b.png)

Front Mounting Ear Installation: Use four M3×4 countersunk screws to secure the two mounting ears.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716450532_dfc9c52d_6575_4048_8a20_17b4cd1ef572.png)

**Note: After the terminal blocks are inserted, they may interfere with fixing the mounting ears. Therefore, install the mounting ears first, and then connect the terminal blocks.**

## 2\. FCU1501 Function Description

### 2.1 Interface Diagram

The interface schematic of the FCU1501 embedded control unit is shown as follows. There are slight differences in the front interfaces between the basic version and the extended version of FCU1501, while the positions of the top-side interfaces are identical.

Top Interface Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716450622_dd1bd6ca_b4f3_4ad4_ac22_ea5724cee0f6.png)

FCU1501 Top Interface Diagram

9–36V wide-voltage input, with a default input of DC 12V, including a protective earth (PE) terminal.

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/787715235752_8b1fd0cb_bb5f_4eff_8aac_c5ff15bfa757.png)

9–36V wide-voltage output, with the output voltage the same as the input voltage; the default output is DC 12V；

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715235832_53497b8a_9d72_4e59_86a7_f739cfd8ff8b.png)

Bluetooth antenna position;

SIM card slot: Uses a Nano SIM card.

Wi-Fi antenna position;

RESET button: Used for one-click reset of network parameters (customizable).

4G Cat1 antenna port: Uses a small suction-cup antenna, cable length 3 m, antenna height 22 cm.

2 x DO, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715235929_596ff88e_2d86_4b54_a415_22dc2d1be585.png)

2 x D1, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236013_a1e62f34_0948_413c_9f42_f797062a7e58.png)

Front Interface Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716451096_7788365e_90e4_4308_adec_6da8b33dbd31.png)

FCU1501 Front Interface Diagram (Basic Version)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716451187_f1f5041b_361a_44e9_97a3_5d4e4086e640.png)

FCU1501 Front Interface Diagram（Extended Version）

**Note: The Standard Version does not include the upper-row interfaces shown on the front panel of the Extended Version. Therefore, the Extended Version is used as the example in this document.**

6 x DI, 3.8 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236373_87937e93_4c7c_4b9a_8e1c_149adf101262.png)

3 x DO, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236546_1410c252_7e12_44aa_86e3_8c759a1744ed.png)

3 x DO, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236678_59b86b4c_35d5_4d29_be7c_2e26d01c585c.png)

1 x CAN, 3.81mm pitch;

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236816_8f917a35_8526_4693_b3ab_bddc8271023f.png)

2 x RS485, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715236930_0f2e6ae5_a614_4ae1_955a_f05432cb1b7a.png)

2 x RS485, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237033_11bfcd84_984f_4852_819c_bbac32b6dac6.png)

LED indicator:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237107_fad91e57_bc32_4a3c_965c_63dc65f2b20a.png)

1 x CAN, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237197_7b7a97cc_595f_4c1c_b5c8_d096e01aeed0.png)

1 x multiplexed RS485/RS232, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237271_2ce9900e_3ca8_439d_aa7e_25951ba33223.png)

1 x multiplexed RS485/RS232, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237349_4d845bb3_4a80_4d29_986e_d3cc27a8990a.png)

2 x RS485, 3.81 mm pitch

The terminal definitions are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237426_8f9be66c_ae0a_4d5d_8a86_92f237444100.png)

Type-C interface for DEBUG.

Standard USB Type-A connector for firmware programming.

2 x 10M/100M adaptive Ethernet ports: ETH0 and ETH1;

The factory default IP address is ETH0: 192.168.0.232; ETH1: 192.168.1.232;

### 2.2 Power Supply

This product supports rated DC 12V input and features 9-36V wide-voltage input, with built-in reverse polarity protection. After the whole device is powered on, the power indicator light marked “POW” will be on.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237537_88a1d8c6_42de_4f8c_8daa_494890e681b7.png)

The external power supply provides 9~36V wide-voltage output, whose voltage remains consistent with the input voltage, with a default output of DC 12V. As shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787715237615_4fffd8da_f234_4410_ba66_8b91b32b5785.png)

### 2.3 User Login

FCU1501 supports two control methods for logging into the system: debug serial port and network.

#### 2.3.1 SSH Login

Connect a PC or laptop to the FCU1501 via an Ethernet cable, using the ETH1 port as the SSH login interface. The default IP address of FCU1501’s ETH0 upon power-on is 192.168.0.232, and the default IP address of ETH1 upon power-on is 192.168.1.232. Set the PC’s IP address to the 192.168.1.xx network segment. After a normal power-on, log in via SSH and enter commands to test basic functions and applications.

Default username: root; Password: no password.

Open a terminal tool (taking MobaXterm as an example), configure it as follows and click Open:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716452560_f245c5cb_7f9b_459f_a154_fdd33af524f3.png)

Click “OK”. When logging in, enter the username (root) — there is no default password.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716452666_1e89641b_37be_49d7_a639_772e3c6416a2.png)

#### 2.3.2 Debug Serial Port Login

To use this serial port for debugging, it is necessary to connect the TYPE-C interface cable, which is suitable for early R \& D and debugging. For on-site debugging and maintenance in the later stage, it is recommended to use the network login method. The username and password are the same as those used for SSH login.

The location of the DEBUG debug serial port is shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716452777_52534844_db8c_4cd3_b2d9_3a7e6621aefa.png)

#### 2.3.3 View System Logs

After the system starts, you can view the kernel startup information in /var/log/messages or use the dmesg command.

Using dmesg:

```plain
root@FCU1501:/# echo "3 4 1 7" > /proc/sys/kernel/printk  #Turn off RTW output
root@FCU1501:/# dmesg | less
[   10.527223] Booting Linux on physical CPU 0xf00
root@FCU1501:/# resize     #Adaptive terminal display
```

View /var/log/messages:

```plain
root@FCU1501:/# cat /var/log/messages
Apr  9 19:35:26 FCU1501 syslog.info syslogd started: BusyBox v1.36.1
```

#### 2.3.4 Memory and Storage Space Distribution

The storage occupancy of FCU1501 (256MB RAM + +256MB) is as follows:

```plain
root@FCU1501:~# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        61M   61M     0 100% /
devtmpfs        111M     0  111M   0% /dev
tmpfs           112M  8.0K  112M   1% /tmp
tmpfs           112M  284K  111M   1% /run
tmpfs           112M  152K  111M   1% /var/log
tmpfs           112M   20K  112M   1% /dev/shm
/dev/ubi5_0     7.7M  4.2M  3.5M  56% /oem
/dev/ubi6_0      62M  7.6M   54M  13% /userdata  #The partition supports user read-write use.
```

Memory occupancy distribution of FCU1501 (256MB + +256MB)

```plain
root@FCU1501:~# free -hm
              total        used        free      shared       buff/cache   available
Mem:      222.1M       39.2M      120.0M      512.0K       62.9M      175.0M
Swap:           0           0           0
```

The storage occupancy of FCU1501 (512MB RAM + 8GB eMMC) is as follows:

```plain
root@FCU1501:/# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       458M  212M  219M  50% /
devtmpfs        238M     0  238M   0% /dev
tmpfs           238M  8.0K  238M   1% /tmp
tmpfs           238M  268K  238M   1% /run
tmpfs           238M  112K  238M   1% /var/log
tmpfs           238M     0  238M   0% /dev/shm
/dev/mmcblk0p6  120M  4.4M  110M   4% /oem
/dev/mmcblk0p7  6.4G   38M  6.1G   1% /userdata
```

Configuration: Memory occupancy distribution of FCU1501 (512MB + 8GB eMMC)

```plain
root@FCU1501:~# free -hm
              total        used        free      shared        buff/cache   available
Mem:       475.9M       32.8M      381.4M      464.0K       61.8M      431.8M
Swap:             0           0           0
```

### 2.4 Querying Image Version Information

View device version information:

```plain
root@FCU1501:~# board-info.sh
System and Configuration Information:

SOC Type:              3506J
System Version:        Forlinx Base 22.04
Hostname:              FCU1501
Current System Time:   Thu Mar 26 14:54:06 CST 2026
System Uptime:         0 min
CPU Load:              1%
Memory Load:           15%


Watchdog:              Built-in watchdog supported


4G Module:             4G module detected
USB Drive:             No USB drive connected

-------------------------------------------------

CPU Information:

Number of Physical CPUs:  0
Number of Logical CPUs:   3
CPU Architecture:         armv7l

-------------------------------------------------

Memory Information:

               total        used        free      shared  buff/cache   available
Mem:             475          69         263           3         141         390
Swap:              0           0           0

-------------------------------------------------

IP Information:

System IP Addresses:
          eth0: 192.168.0.232
          eth1: 192.168.1.232
          wlan0:
          wlan1:
          usb0:

MAC Addresses:
          eth0: f2:2f:41:b4:4d:49
          eth1: fe:1a:07:86:1a:af
          wlan0: 84:fc:14:3a:a3:a9
          wlan1: 86:fc:14:3a:a3:a9
          usb0: ae:0c:29:a3:9b:6d

Gateway Address: 192.168.0.1

Routing Information:
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.0.1     0.0.0.0         UG    0      0        0 eth0
192.168.0.0     0.0.0.0         255.255.255.0   U     0      0        0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U     0      0        0 eth1

DNS Information:
nameserver 8.8.8.8
nameserver 114.114.114.114

-------------------------------------------------

Disk Usage:
Filesystem     Type   Size  Used Avail Use% Mounted on
/dev/root      ext4   2.9G  1.6G  1.1G  60% /
/dev/mmcblk0p5 ext4   128M  4.3M  124M   4% /oem
/dev/mmcblk0p6 ext4   4.0G  308K  4.0G   1% /userdata
-------------------------------------------------
=======================================
Build Time: 2026-03-25 18:34:01
=======================================
[Bsp Commits]
e0d82e948
[Kernel Commits]
dc4bb836d
[U-boot Commits]
4b0d11c
```

### 2.5 Frequency Modulation Function

**Note: The following example uses cpu0. In actual operation, the frequencies of cpu1 and cpu2 will change simultaneously.**

All cpufreq governor types supported in the current kernel:

```plain
root@FCU1501:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
ondemand userspace performance
```

userspace indicates user mode, in which user programs are allowed to adjust the CPU frequency.

To view the current frequency levels supported by the CPU:

```plain
root@FCU1501:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
600000 800000 1008000 1200000 1296000 1416000 1512000
```

Set to user mode and modify the frequency to 1200000:

```plain
root@FCU1501:/# echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@FCU1501:/# echo 1200000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed
```

To view the current frequency after modification:

```plain
root@FCU1501:/# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
1200000
```

### 2.6 Temperature Reading Function

To view temperature values:

```plain
root@FCU1501:/# cat /sys/class/thermal/thermal_zone0/temp
39851
```

The temperature value is 39.9℃

### 2.7 Watchdog Function

The watchdog is a commonly used feature in embedded systems. The device node of the watchdog on OK3506-S/OK3506-C is /dev/watchdog.

Start the watchdog, set the reset timeout to 10 seconds, and feed the watchdog periodically so that the system will not restart.

```plain
root@FCU1501:/# fltest_watchdog -t 10 -c
Watchdog Ticking Away!
```

When using Ctrl+C to end the test program, feeding stops, and the watchdog remains open. After 10s, the system resets.

If you do not want a reset enter the command to close the watchdog within 10s after ending the program:

```plain
root@FCU1501:/# fltest_watchdog -d
Watchdog disabled.
```

Start the watchdog, set the reset timeout to 10 seconds, but do not feed it; the system will reboot after 10 seconds.

```plain
root@FCU1501:/# fltest_watchdog -t 10
Watchdog Ticking Away!
[   39.114587] watchdog: watchdog0: watchdog did not stop!
```

### 2.8 RTC Function

**Note: Ensure that a button battery is installed on the board and the battery voltage is normal.**

To perform the RTC test, the date and hwclock tools are used to set the system and hardware clocks. The device is then powered off and on to confirm that the system clock successfully synchronizes with the RTC upon reboot.

Set the time:

```plain
root@FCU1501:/# date -s "2022-12-12 17:23:00"   //Set system software time
Mon Dec 12 17:23:00 UTC 2022 
root@FCU1501:/# hwclock -w              //Synchronize the current system software time to the hardware RTC clock
root@FCU1501:/# hwclock -r               //Display hardware time
Mon Dec 12 17:24:10 2022  0.000000 seconds
```

Then power off and power on the board. After entering the system, read the system time, and you can see that the time is synchronized.

```plain
root@FCU1501:/# date
Mon Dec 12 17:24:39 UTC 2022
```

### 2.9 System Indicator Lights

The FCU1501 is equipped with 8 system indicator lights, which are the 4G network light, power (PWR) light, system error (ERR) light, system operation (RUN) light, and two user-defined indicator lights (D1 and D2), as shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716452894_8c23e383_d585_40f3_8471_d16b0577bfc5.png)

The PWR (Power) indicator light serves as the power supply indicator for the system. It automatically turns on when power is supplied and turns off when power is cut.

The RUN indicator light has two functions:

Programming Indication: During programming, the RUN light stays on continuously. After programming is complete, it flashes every second (on and off once per second).

System Startup Indication: During system startup, the RUN light remains off. Once the system has fully started, the RUN light functions as a heartbeat indicator. After the system starts, the RUN light works as heartbeat light.

The ERR indicator light serves as a system error indicator and provides a user-defined interface for customization.

The 4G indicator light indicates the status of the 4G network, with different levels corresponding to strong, moderate, and weak signal strength.

The D1 and D2 indicator lights can be customized for specific functions based on user requirements.

The detailed software and hardware correspondence for the above indicator lights is shown in the table below.

| Device Node Name| Hardware Identifier Name| Customization|
|----------|----------|----------|
| /sys/class/leds/err| ERR| Yes|
| /sys/class/leds/D1| D1| Yes|
| /sys/class/leds/D2| D2| Yes|

Taking D1 as an example, the switch state control is as follows:

```plain
root@FCU1501:/# echo 1 > /sys/class/leds/D1/brightness  # Turn on, the LED light illuminates
root@FCU1501:/# echo 0 > /sys/class/leds/D1/brightness  # Turn off, the LED light extinguishes
```

### 2.10 RESET Button

#### 2.10.1 RESET One‑Key Network Parameter Recovery

RESET button: Used for one-click reset of network parameters, as shown in the red box in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716452999_dc602417_95f7_49e4_94b8_d240408e3c95.png)

The reset button can directly reset the connection parameters of the network node. Using the evtest tool, you can get detailed information on various event types, including those triggered by keyboard presses, generated by mouse movements, and caused by touch-screen interactions, all of which can be accurately captured and displayed. You can also trigger custom events according to their application requirements.

The specific usage command is: evtest /dev/input/eventx (the event‑trigger node)

```plain
root@FCU1501:/# ls /dev/input/event*          // View all event nodes
/dev/input/event0         // Touchscreen touch event
/dev/input/event1         // RESET button
root@FCU1501:/# evtest  /dev/input/eventx     // evtest + event node to be tested
```

Using the event detection tool evtest to detect the RESET button event is shown below:

```plain
root@FCU1501:/# evtest  /dev/input/event1   //RESET按键事件节点为 /dev/input/event1
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "adc-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 114 (KEY_VOLUMEDOWN)
    Event code 115 (KEY_VOLUMEUP)
Properties:
Testing ... (interrupt to exit)
Event: time 2057.756672, type 1 (EV_KEY), code 114 (KEY_VOLUMEDOWN), value 1
Event: time 2057.756672, -------------- SYN_REPORT ------------
recovery key pressed, setting eth0 IP to 192.168.0.232
eth0 IP set successfully
recovery key pressed, setting eth1 IP to 192.168.1.232
eth1 IP set successfully
Event: time 2057.860029, type 1 (EV_KEY), code 114 (KEY_VOLUMEDOWN), value 0
Event: time 2057.860029, -------------- SYN_REPORT ------------
^C
root@FCU1501:/#
```

The evtest tool is integrated into the file system by default and can be used from any path. Specific file location:

```plain
root@FCU1501:/# find -name evtest
./usr/bin/evtest             //Exact path of the utility
```

#### 2.10.2 Disabling the Network Reset Function of the RESET Button

The one‑key network recovery function is implemented through a daemon process, which starts automatically by default. To disable this function, simply stop the daemon process. The specific operation command is as follows:

```plain
root@FCU1501:/# cat /etc/init.d/S90autorun.sh    // View the system auto-start script
#!/bin/bash
if [ $1 != "start" ];then exit;fi
if [ -e /etc/gen_partiton_dev.sh ];then /etc/gen_partiton_dev.sh;fi

/userdata/autorun.sh &
/etc/init.d/instant_recovery.sh &         // The key daemon process is set to run in the background by default
root@FCU1501:/# vi /etc/init.d/S90autorun.sh    // Edit the system auto-start script
#!/bin/bash
if [ $1 != "start" ];then exit;fi
if [ -e /etc/gen_partiton_dev.sh ];then /etc/gen_partiton_dev.sh;fi

/userdata/autorun.sh &
#/etc/init.d/instant_recovery.sh &        // Disable the auto-start key daemon by adding the # comment symbol. The change takes effect after a power cycle
root@FCU1501:/#
```

**Note: The IP address set after this reset is only valid temporarily; it will restart to the default static IP address after a reboot. For instructions on configuring a static IP address, please refer to Section “2.22 Static IP Configuration”, to modify the system default IP address at startup.**

### 2.11 UART Usage and Example Program (Including Extended Version)

#### 2.11.1 Interface Description

The serial port connection structure is shown in the red box in the diagram.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716453096_bf3298b7_bcfe_46ea_a304_0e11a366af8a.png)

#### 2.11.2 Correspondence Between Software and Hardware

| Device Node Name| Hardware Identifier Name|
|----------|----------|
| /dev/ttyS1| RS485\_1/RS232\_1|
| /dev/ttyS2| RS485\_2/RS232\_2|
| /dev/ttyS3| RS485\_3|
| /dev/ttyS4| RS485\_4|
| /dev/ttyCH334\_1| RS485\_5|
| /dev/ttyCH334\_2| RS485\_6|
| /dev/ttyCH334\_0| RS485\_7|
| /dev/ttyCH334\_3| RS485\_8|

#### 2.11.3 RS485 Test

This test method uses communication with a computer as an example. If you have a device with a dedicated RS485 interface, you can connect it directly for testing. In this case, we will use RS485\_2 as an example. If you need to test other RS485 interfaces, simply change the device node name to match the relevant interface.

Connect the RS232 to RS485 module to the RS485\_2 interface of the FCU1501. The connection method is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716453239_a5f1f902_b16a_4409_a21b_e3d10a1e04c2.png)

RS485\_2 will send a randomly generated test character stream to the PC at a baud rate of 115200. At the same time, manually send “Forlinx ok” from the PC terminal serial port assistant software to the FCU1501. Debug information is as follows:

```plain
root@FCU1501:~# fltest_uarttest -d /dev/ttyS2 -b 115200 -r &
[1] 1631
root@FCU1501:~# rx_0: forlinxforlinxforlinxforlinxforl
```

Serial port assistant software on the PC side: The data sent and received are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716453419_ce0fb20c_0715_43b0_bb76_90c112658c37.png)

In the FCU1501 serial port, enter the following command to perform the UART transmission test:

```plain
root@FCU1501:~# fltest_uarttest -d /dev/ttyS2 -b 115200 -w 
[ 4750.838266] of_dma_request_slave_channel: dma-names property of node '/serial@ff0c0000' missing or empty
[ 4750.838403] dw-apb-uart ff0c0000.serial: failed to request DMA, use interrupt mode
tx_0: KaLKchczYFbc21YbhV5xYf2SotoVobK8
```

Check the received information on the PC side:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716453606_f5083f47_4a8f_4022_bedd_10b9d27cfb6a.png)

### 2.12 Ethernet Usage

FCU1501 supports 2 x 10M/100M adaptive Ethernet, which is RJ45 interface.

#### 2.12.1 Correspondence Between Software and Hardware

| Node Name| Hardware Identifier Name| IP address|
|----------|----------|----------|
| eth0| ETH0| 192.168.0.232|
| eth1| ETH1| 192.168.1.232|

#### 2.12.2 Network Card Test

Connect the network port of the PC to that of the FCU1501 via an Ethernet cable, and set the PC to a static IP address. The ETH1 interface of the FCU1501 uses the fixed IP 192.168.1.232, and the network service is enabled by default after system startup.

Type "ping 192.168.1.232" in the Windows Command Prompt window.

**Note: For Windows 10, right-click the Start icon and select “Command Prompt” from the pop-up menu to access the command window.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1718850025209_a11e503d_f886_4c1c_8c6f_f5a54d47fb78_1791603202267.png)

A successful ping connection between the PC and FCU1501, followed by a valid SSH login, verifies the normal operation of the network adapter.

#### 2.12.3 IPv4 Basic Command Test

The examples in this section are tested under Forlinx Embedded’s internal network environment. Since actual network conditions may vary in deployment, perform configurations according to the specific on-site network environment.

The 1501 is equipped with two network adapters: eth0 and eth1. By default after power-on, the IP address of eth0 is 192.168.0.232, and the IP address of eth1 is 192.168.1.232.

Under the Linux system, use the ifconfig command to display or configure network devices, and use the ethtool utility to query and modify network adapter parameters.

```plain
root@FCU1501:/# ifconfig
```

Print information as follows:

```plain
eth0      Link encap:Ethernet  HWaddr D2:FB:8E:9A:FC:0A
          inet addr:192.168.0.232  Bcast:0.0.0.0  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:53 Base address:0x6000

eth1      Link encap:Ethernet  HWaddr D6:26:B8:28:A1:8A
          inet addr:192.168.1.232  Bcast:0.0.0.0  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:991 errors:0 dropped:0 overruns:0 frame:0
          TX packets:641 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:91711 (89.5 KiB)  TX bytes:27062 (26.4 KiB)
          Interrupt:55 Base address:0x8000

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

Set the IP address, and configure eth0 with the IP 192.168.1.120.

```plain
root@FCU1501:/# ifconfig eth0 192.168.1.120 		        //Set ip
root@FCU1501:/# ifconfig eth0             		            //View the network status after setup
```

Print information as follows:

```plain
eth0      Link encap:Ethernet  HWaddr D2:FB:8E:9A:FC:0A
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:53 Base address:0x6000
```

The field inet addr:192.168.1.120 confirms the IP configuration is successful.

Set DNS

```plain
root@FCU1501:/# echo  nameserver 8.8.8.8  >>  /etc/resolv.conf        #Google DNS
root@FCU1501:/# echo nameserver 114.114.114.114 >>  /etc/resolv.conf  #Chinese DNS
```

Set dynamically assigned IP address.

If your control unit is connected to a router that supports DHCP automatic IP allocation, enter the following command in the super terminal:

```plain
root@FCU1501:/# udhcpc -i eth0
```

This command is used for dynamic IP acquisition. The wired network adapter of the Forlinx control unit is designated as eth0.

The DNS server information in the/etc/resolv. Conf file is automatically added.

Modify the MAC address

**Note: The following configuration method only takes effect temporarily in the terminal session.**

```plain
root@FCU1501:/#  ifconfig eth0 down
root@FCU1501:/# ifconfig eth0 hw ether 08:90:90:90:90:90  //eth0 mac设为08:90:90:90:90:90   
root@FCU1501:/# ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 08:90:90:90:90:90
          inet addr:192.168.1.120  Bcast:192.168.1.255  Mask:255.255.255.0
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:53 Base address:0x6000
```

HWaddr 08:90:90:90:90:90 indicates that the MAC address has been set successfully.

Set subnet mask

```plain
root@FCU1501:/# ifconfig eth0 netmask 255.255.255.0  //Set the eth0 subnet mask to 255.255.255.0
root@FCU1501:/# ifconfig eth0
```

Print information as follows:

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

Mask:255.255.255.0 is the configured subnet mask.

Configure the broadcast address.

```plain
root@FCU1501:/# ifconfig eth0 broadcast 192.168.1.255	  //The eth0 broadcast address is set to 192.168.1.255
root@FCU1501:/# ifconfig eth0
```

Print information as follows:

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

The field Bcast:192.168.1.255 confirms the broadcast address is set successfully.

Add/remove default gateway.

```plain
root@FCU1501:/# route add default gw 192.168.1.1 eth0	      // Add default gateway for eth0 network interface
root@FCU1501:/# route del default gw 192.168.1.1 eth0	      // Delete the specified default gateway for eth0 network interface
```

Enable or disable the network adapter.

```plain
root@FCU1501:/# ifconfig eth0 down					// Shut down the eth0 network interface
root@FCU1501:/# ifconfig eth0 up					// Start up the eth0 network interface
```

#### 2.12.4 Nginx Web Service

The FCU1501 natively supports the Nginx web server. Nginx is a high-efficiency web server running on the Linux platform, serving as a lightweight multi-task http server that is highly suitable for embedded systems.

The Nginx service is set to start automatically upon system boot. Enter the IP address of the FCU1501 in the IE browser to access the web pages hosted on the control unit’s web server. The figure below is a screenshot of the page displayed in the Edge browser.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716453849_a67e4b4e_da03_4285_8f9a_d1f304980c96.png)

#### 2.12.5 Reverse Proxy Function

Based on the Nginx web service, the FCU1501 supports the reverse proxy feature. As a core component in modern network architectures, reverse proxy simplifies system design and enhances reliability by masking backend service details. The specific configuration modifications are as follows:

```plain
root@FCU1501:/# ls /etc/nginx/nginx.conf		// View the nginx configuration file
/etc/nginx/nginx.conf
root@FCU1501:/# vi /etc/nginx/nginx.conf        // Edit this configuration file
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        # Static resource service
        location / {
            root   html;
            index  index.html index.htm;
        }
        # Reverse proxy to backend API service
        location /api/ {
          proxy_pass         http://127.0.0.1:3000;  # Forward target address
          proxy_set_header   Host $host;              # Pass the original domain name
          proxy_set_header   X-Real-IP $remote_addr;  # Pass the real client IP
          proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;  # Pass the proxy chain IP
          proxy_http_version 1.1;                    # Enable HTTP/1.1 (supports persistent connections)
          proxy_set_header   Upgrade $http_upgrade;  # WebSocket protocol upgrade header
          proxy_set_header   Connection "upgrade";   # Maintain the connection upgrade status
} 
# Error page
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

After completing the above configuration adjustments, when the backend service is running normally, accessing the URL

[http://192.168.1.232/api/test or http://localhost/api/test; that is, the request is forwarded to http://127.0.0.1:3000/test, which returns a response from the backend service.](http://127.0.0.1:3000/test，返回后端服务的响应。)

#### 2.12.6 SFTP Service

The system automatically starts the vsftpd service at boot, with its version being 3.0.2.

Use the FileZilla software on your PC to connect to the FTP service of the FCU1501. Enter the FTP login credentials in the red box shown below (the default password for the root user is root). The connection uses the ETH2 interface by default.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/image_20261009165437796.png)

Click “OK” on any pop-up prompt that appears during the process.

You will then gain access to the directory structure of the FCU1501.

### 2.13 WiFi Usage Guide

After system startup, the WiFi module is enabled and its driver is loaded by default. The antenna is the one used with the 4G module.

#### 2.13.1 STA Test

Check if the driver is Loaded

```plain
root@FCU1501:/# lsmod
Module                  Size  Used by    Not tainted
8733bu               2279993  0
rtk_btusb              54530  0
```

**Note: The appearance of the identifier 8733bu in the output confirms the module driver has been loaded. If 8733bu does not appear, the module is not loaded, and you need to verify that the kernel version matches the module version in the file system.**

Load the module manually.

If 8733bu does not show up in the lsmod output, indicating the module is not loaded, use the following commands to load it manually:

```plain
root@FCU1501:/# insmod /lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtl8733BU/8733bu.ko     /*load 8733bu*/
```

Configure WiFi

**Note: -s specifies the name of the WiFi hotspot; -p specifies the password. If there is no password, please enter -p NONE. This configuration applies to routers using WPA encryption.**

The connection output log is shown as follows:

```plain
root@FCU1501:/# fltest_wifi.sh -i wlan1 -s forlinx -p xxxx
wifi wlan1 
ssid forlinx
pasw xxxx
waiting...
/usr/bin/fltest_wifi.sh: line 69: rfkill: command not found
[87376.771345] RTW: rtw_ndev_notifier_call(wlan1) state:14
[87376.771486] RTW: _netdev_open(wlan0) , bup=0
[87376.771520] RTW: rtl8733b_hal_init fw source from array
[87376.782791] RTW: SetHwReg: bMacPwrCtrlOn=1
[87376.904067] RTW: _rtw_hal_set_fw_rsvd_page(wlan0) Get [ NOR ] RsvdPageNUm  ==>
[87376.904169] RTW: LocPsPoll: 4
[87376.904194] RTW: LocNullData: 5
[87376.904213] RTW: LocQosNull: 6
[87376.904232] RTW: LocBTQosNull: 7
[87376.904251] RTW: _rtw_hal_set_fw_rsvd_page(wlan1) Get [ NOR ] RsvdPageNUm <==
[87376.923804] RTW: rtw_start_drv_threads(wlan1) enter
[87376.923849] RTW: rtw_start_drv_threads(wlan1) start RTW_CMD_THREAD
[87377.343431] RTW: rtl8733b_hal_init Download Firmware from array success Finshed!
…….
[87385.989124] RTW: OnAction_back, action=0
udhcpc: broadcasting select for 10.10.21.159, server 10.10.23.254
[87385.990473] RTW: issue_addba_rsp_wait_ack(wlan0) ra=c2:5f:02:9b:45:4d status:=0 tid=0 size:64, acked, 1/3 in 4 ms
udhcpc: lease of 10.10.21.159 obtained from 10.10.23.254, lease time 1800
deleting routers
adding dns 119.29.29.29
adding dns 114.114.114.114
connect ok
```

Test the WiFi

Test WiFi, ping domain name or IP.

```plain
root@FCU1501:/# ping www.baidu.com -I wlan1
[87566.695360] RTW: OnAction_back
[87566.695462] RTW: OnAction_back, action=0
[87566.697019] RTW: issue_addba_rsp_wait_ack(wlan0) ra=c2:5f:02:9b:45:4d status:=0 tid=2 size:64, acked, 1/3 in 4 ms
PING info.fumi.com (38.181.56.100) from 10.10.21.159 wlan1: 56(84) bytes of data.
64 bytes from 38.181.56.100: icmp_seq=1 ttl=47 time=165 ms
64 bytes from 38.181.56.100: icmp_seq=2 ttl=47 time=169 ms
64 bytes from 38.181.56.100: icmp_seq=5 ttl=47 time=165 ms
64 bytes from 38.181.56.100: icmp_seq=6 ttl=47 time=165 ms
64 bytes from 38.181.56.100: icmp_seq=7 ttl=47 time=168 ms
64 bytes from 38.181.56.100: icmp_seq=8 ttl=47 time=171 ms
^C
--- info.fumi.com ping statistics ---
8 packets transmitted, 8 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 164.703/166.684/171.484/2.364 ms
```

WiFi signal

```plain
root@FCU1501:/# cat /proc/net/wireless | grep wlan1 | awk '{print $3}' //$3 refers to link (Quality, link quality), unit: dBm
97.
root@FCU1501:/# cat /proc/net/wireless | grep wlan1 | awk '{print $4}' //$4 refers to level (RSSI, Received Signal Strength Indicator), unit: dBm 
51.
root@FCU1501:/# cat /proc/net/wireless | grep wlan1 | awk '{print $5}' //$5 refers to noise (noise floor), unit: dBm 
0..
```

Unload the Module

```plain
root@FCU1501:/# rmmod 8733bu
```

#### 2.13.2 AP Test

The default IP address pool for the generated WiFi hotspot is 192.168.2.50 to 192.168.2.150, with the default gateway set to 192.168.2.1 and WPA-PSK encryption enabled. You can modify the IP pool, gateway and other configurations by editing the /etc/dnsmasq.conf file.

You can view or edit the configuration file /etc/hostapd-2.4g.conf to rename the hotspot to OK3506\_WIFI\_2.4G\_AP and set its password to 12345678.

```plain
root@FCU1501:/# cat /etc/hostapd-2.4g.conf
interface=wlan0
driver=nl80211
channel=9
hw_mode=g

auth_algs=1
ieee80211n=1
ieee80211ac=1
wpa=2

ssid=OK3506_WIFI_2.4G_AP                         //Hotspot name
wpa_passphrase=12345678                          //Hotspot password
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
rsn_pairwise=CCMP
```

STA-AP Test

This example describes the process of connecting the wireless network interface wlan1 to a router. After configuring the Ethernet, you need to test whether wlan1 can access the external network. If it can connect to the external network (refer to the previous section “STA Test” for the testing method), please continue to follow the operation steps. If it cannot connect, please check whether the Ethernet or the router connection is working properly. Note: Close and restart the web application before running this test.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454216_5bb0bb32_19e7_4d98_91d3_ebf2ef1e7511.png)

When operating in AP mode, devices such as mobile phones can connect directly to the module.

Configure the Ethernet IP address and set up the network firewall:

```plain
# First ensure that wlan1 is connected and the network is functioning properly. You may refer to the aforementioned STA test procedures
root@FCU1501:/# echo 1  >  /proc/sys/net/ipv4/ip_forward   // Enable IP forwarding function                                 
root@FCU1501:/# iptables -t nat -A POSTROUTING -o wlan1 -j MASQUERADE // Configure the NAT forwarding rule
```

Set the WiFi working mode and corresponding IP address.

```plain
root@FCU1501:/# ifconfig wlan0 up    // Bring up the WiFi interface
root@FCU1501:/# ifconfig wlan0 192.168.2.1 netmask 255.255.255.0 // Set the IP address and subnet mask
```

Start the AP service.

```plain
hostapd -d /etc/hostapd-2.4g.conf &             // Configure parameters including encryption method, SSID, password, and other related WiFi hotspot settings
```

Mobile terminals such as smartphones can connect to the FCU1501’s AP hotspot via WiFi to access the external network.

### 2.14 Bluetooth Usage Guide

Prior to the Bluetooth test, connect the dedicated Bluetooth antenna as shown in the red-boxed wiring diagram.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454303_2cd19451_e2ef_4b35_ab96_f6420f34c04b.png)

The carrier board WIFI/BL module integrates the Bluetooth function. This section demonstrates the data transmission between the mobile phone and FCU1501 via Bluetooth.

#### 2.14.1 Bluetooth Configuration

```plain
root@FCU1501:/# bluetoothctl                     
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
[CHG] Controller 78:22:88:03:AB:76 Discoverable: yes
```

#### 2.14.2 Passive Pairing

At this time, open the mobile phone Bluetooth search, a "BlueZ 5.77" device will appear, and select pairing.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454389_57f5e735_6869_451b_bcd2_93975c2e3ed9.png)

The terminal will output the following prompt message, enter yes to confirm.

```plain
hci0 14:99:3E:03:1B:E4 type BR/EDR connected eir_len 25
[NEW] Device 14:99:3E:03:1B:E4 The height of absurdity
Request confirmation
[agent] Confirm passkey 216676 (yes/no): yes
hci0 new_link_key 14:99:3E:03:1B:E4 type 0x05 pin_len 0 store_hint 1
hci0 device_flags_changed: 14:99:3E:03:1B:E4 (BR/EDR)
     supp: 0x00000001  curr: 0x00000000
[CHG] Device 14:99:3E:03:1B:E4 Bonded: yes
[CHG] Device 14:99:3E:03:1B:E4 Modalias: bluetooth:v038Fp1200d1436
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: 00001105-0000-1000-8000-00805f9b34fb
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: 0000fdaa-0000-1000-8000-00805f9b34fb
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: 98b97136-36a2-11ea-8467-484d7e99a198
[CHG] Device 14:99:3E:03:1B:E4 UUIDs: ada499be-27d6-11ec-9427-0a80ff2603de
[CHG] Device 14:99:3E:03:1B:E4 ServicesResolved: yes
[CHG] Device 14:99:3E:03:1B:E4 Paired: yes
hci0 14:99:3E:03:1B:E4 type BR/EDR disconnected with reason 3
[CHG] Device 14:99:3E:03:1B:E4 ServicesResolved: no
[CHG] Device 14:99:3E:03:1B:E4 Connected: no
```

View and remove connected devices:

```plain
[bluetooth]# devices									// View connected Bluetooth devices
Device 14:99:3E:03:1B:E4 The height of absurdity
[bluetooth]# remove 14:99:3E:03:1B:E4                 // Remove the target device
[DEL] Device 14:99:3E:03:1B:E4 The height of absurdity
Device has been removed
hci0 new_settings: powered connectable bondable ssp br/edr le secure-conn 
[CHG] Controller 78:22:88:03:AB:76 Discoverable: no
```

#### 2.14.3 Active Pairing

As well as passive pairing, you can also send a request for active pairing from the terminal.

```plain
[bluetooth]# scan on	                                              // Start scanning for detectable Bluetooth devices
SetDiscoveryFilter success
hci0 type 7 discovering on
Discovery started
[CHG] Controller 78:22:88:03:AB:76 Discovering: yes
[NEW] Device 14:99:3E:03:1B:E4 The height of absurdity
[bluetooth]# scan off		                                         // Stop the scanning process
[bluetooth]# pair 14:99:3E:03:1B:E4                                 // Initiate Bluetooth device pairing
Attempting to pair with 14:99:3E:03:1B:E4
hci0 device_flags_changed: 14:99:3E:03:1B:E4 (BR/EDR)
     supp: 0x00000001  curr: 0x00000000
hci0 14:99:3E:03:1B:E4 type BR/EDR connected eir_len 25
[CHG] Device 14:99:3E:03:1B:E4 Connected: yes
Request confirmation
[agent] Confirm passkey 732259 (yes/no): yes	                      // Confirm the pairing passkey
```

#### 2.14.4 Receiving Files

After successful pairing, you can use the Bluetooth function on the smartphone to send files to the FCU1501.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454481_3d8fcc62_72a8_4219_9f1d_f79f4ae4b446.png)

All received files are saved in the /tmp directory.

#### 2.14.5 Sending Files

The following steps describe how to send a file to a smartphone:

```plain
root@FCU1501:/# fltest_obexctl.sh 		            // Launch the obexctl tool
[NEW] Client /org/bluez/obex
[obex]# connect 14:99:3E:03:1B:E4													// Connect to the target Bluetooth device via its MAC address
Attempting to connect to 14:99:3E:03:1B:E4
[NEW] Session /org/bluez/obex/client/session0 [default]
[NEW] ObjectPush /org/bluez/obex/client/session0 
Connection successful
[14:99:3E:03:1B:E4]# send /tmp/1731915958275.png	        // Transmit the target image file
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454598_9f9841bc_0a57_49f1_a694_29e6af92f3d3.png)

Your mobile phone will receive a request to receive a file; tap “Accept” to transfer the file.

### 2.15 4G Usage Guide

The FCU1501 system supports 4G cellular networks. Actual 4G availability is subject to your specific purchase configuration. After power-on, the 4G module is powered on by default and its driver is preloaded. The positions of the external antenna interface and SIM card slot on the FCU1501 are shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454701_0bc6cc1c_19bf_4e1b_9897_45424298eaf7.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716454783_66a6adae_e690_4935_abae_0020aaa50c46.png)  
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455019_bcd6c0f8_7425_4063_b6fd_9373180ce5d3.png)

#### 2.15.1 4G Communication Test

Insert the SIM card properly, then run the lsusb command after powering on to check the USB device status.

```plain
root@FCU1501:/# lsusb
Bus 002 Device 003: ID 1a86:55d5
Bus 002 Device 002: ID 1a86:8091
Bus 001 Device 001: ID 1d6b:0002
Bus 002 Device 006: ID 2c7c:6002              //4G module corresponding node
Bus 002 Device 001: ID 1d6b:0002
Bus 002 Device 004: ID 0bda:b733
```

If the device node corresponding to the 4G module is not detected, use the following command to reset and reactivate the module:

```plain
root@FCU1501:/# echo 1 > /sys/class/leds/ec800k_4g_rst/brightness
[ 7543.209478] usb 2-1.1: USB disconnect, device number 6
[ 7544.181958] usb 2-1.1: new high-speed USB device number 7 using dwc2
[ 7544.278113] cdc_ether 2-1.1:1.0 usb0: register 'cdc_ether' at usb-ff780000.usb-1.1, CDC Ethernet Device, ae:0c:29:a3:9b:6d
[ 7544.280412] option 2-1.1:1.2: GSM modem (1-port) converter detected
[ 7544.281252] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB0
[ 7544.283033] option 2-1.1:1.3: GSM modem (1-port) converter detected
[ 7544.283562] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB1
[ 7544.284490] option 2-1.1:1.4: GSM modem (1-port) converter detected
[ 7544.285047] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB2
```

Check the device node status under /dev.

```plain
root@FCU1501:/# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2
```

After successful device identification, you can perform dial-up Internet access testing;.

```plain
root@FCU1501:/# quectelCM &
```

Print information as follows:

```plain
root@FCU1501:/# quectelCM &  
[1] 1599
root@FCU1501:/# udhcpc: started, v1.36.1
udhcpc: broadcasting discover
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.29.45.147, server 169.254.0.1
udhcpc: lease of 10.29.45.147 obtained from 169.254.0.1, lease time 86400
```

View the node IP.

```plain
root@FCU1501:/# ifconfig usb0
usb0      Link encap:Ethernet  HWaddr AE:0C:29:A3:9B:6D
          inet addr:10.29.45.147  Bcast:10.255.255.255  Mask:255.0.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:3 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:640 (640.0 B)  TX bytes:684 (684.0 B)
```

Test network connectivity.

```plain
root@FCU1501:/# ping www.baidu.com -I usb0
PING www.a.shifen.com (39.156.70.239) from 10.29.45.147 usb0: 56(84) bytes of data.
64 bytes from 39.156.70.239: icmp_seq=1 ttl=50 time=54.2 ms
64 bytes from 39.156.70.239: icmp_seq=2 ttl=50 time=52.4 ms
64 bytes from 39.156.70.239: icmp_seq=4 ttl=50 time=50.7 ms
64 bytes from 39.156.70.239: icmp_seq=5 ttl=50 time=47.7 ms
^C
--- www.a.shifen.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 47.731/59.150/90.740/15.938 ms
```

#### 2.15.2 4G Communication Daemon

The 4G communication daemon application is integrated into the file system in the form of a mirror mobilemgmt, which can be compiled and written. For further details, please refer to the documentation: “Guide to 4G Daemon Applications on Linux\_V2.0\_23 October 2025.”

You can run the commands below for testing, which can also detect the SIM card status and signal strength at the same time.

```plain
root@FCU1501:/# mobilemgmt
start running mobilemgmt version is ver07.005 ... ...
path=/sys/bus/usb/devices/2-1.1:1.0
idVendor=0x2c7c idProduct=0x6002
atIntf = 3
[01-01_01:56:00:842] Auto find qmichannel = /dev/ttyUSB1
[01-01_01:56:00:842] Auto find usbnet_adapter = usb0
[01-01_01:56:00:842] netcard driver = cdc_ether, driver version = 6.1.99+
The module was loaded normally after 5 seconds
[01-01_01:56:01:043] Modem works in ECM_RNDIS_NCM mode
set done!
[01-01_01:56:01:045] atc_fd = 10
no sim card,we can do nothing!!!               #Detect that no SIM card is inserted
^C[01-01_01:56:02:349] at_close
[01-01_01:56:02:350] atc_read_thread exit
root@FCU1501:/#
```

### 2.16 Database Usage

The on-board SQLite database version is 3.11.0. The test instructions are as follows:

```plain
root@FCU1501:/# sqlite3
SQLite version 3.44.2 2023-11-24 11:41:44
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

It can be seen from the above that database creation, reading and writing work normally.

### 2.17 DO/DI Usage (Including Extended Version)

#### 2.17.1 Interface Description

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455106_be8e62a9_2531_41a9_a624_dbc606f5c894.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455254_57fca58c_d621_4abf_9980_b4762cccee88.png)

#### 2.17.2 Correspondence Between Software and Hardware

| Device Node Name| Hardware Identifier Name|
|----------|----------|
| /sys/class/leds/do0| DO1|
| /sys/class/leds/do1| DO2|
| /sys/class/leds/do2| DO3|
| /sys/class/leds/do3| DO4|
| /sys/class/leds/do4| DO5|
| /sys/class/leds/do5| DO6|
| /sys/class/leds/do6| DO7|
| /sys/class/leds/do7| DO8|
| /dev/gpio\_input\_0| DI1|
| /dev/gpio\_input\_1| DI2|
| /dev/gpio\_input\_2| DI3|
| /dev/gpio\_input\_3| DI4|
| /dev/gpio\_input\_4| DI5|
| /dev/gpio\_input\_5| DI6|
| /dev/gpio\_input\_6| DI7|
| /dev/gpio\_input\_7| DI8|

#### 2.17.3 DO Test

Turn on and off DO1 to DO8. Taking DO1 as an example, the operation is as follows:

```plain
root@FCU1501:/# echo 1 > /sys/class/leds/do0/brightness #on 
root@FCU1501:/# echo 0 > /sys/class/leds/do0/brightness #off
```

Method for testing DO software port continuity:

```plain
root@FCU1501：/# cat /sys/class/leds/do0/brightness  # 1 is on and 0 is off.
```

Method for testing DO hardware port continuity: Set the multimeter to the “Buzzer / Continuity” range. Connect the two probes as follows: one to the DO terminal and one to the COM (common) terminal.

+ DO continuity: The multimeter buzzer sounds and the resistance is close to 0 Ω.
+ DO open circuit: The multimeter displays “OL” (open circuit) and there is no buzzer sound.

#### 2.17.4 DI Test

The test is performed through nodes /dev/gpio\_input\_0 to /dev/gpio\_input\_7. Taking DI-3 as an example, physically connect DIO-3 to DI3, then enter the following command:

```plain
root@FCU1501:/# ls /dev/gpio_input_*
/dev/gpio_input_0  /dev/gpio_input_2  /dev/gpio_input_4  /dev/gpio_input_6
/dev/gpio_input_1  /dev/gpio_input_3  /dev/gpio_input_5  /dev/gpio_input_7
root@FCU1501:/#
root@FCU1501:/# echo 1 > /sys/class/leds/do2/brightness
root@FCU1501:/# cat /sys/class/gpio-input/gpio_input_2/state
0
root@FCU1501:/# echo 0 > /sys/class/leds/do2/brightness
root@FCU1501:/# cat /sys/class/gpio-input/gpio_input_2/state
1
root@FCU1501:/#
```

### 2.18 CAN Usage (Including Extended Version)

#### 2.18.1 Interface Description

FCU1501 provides two CAN FD interfaces, taking CAN2 as an example as shown below.

| Schematic Diagram| Description|
|----------|----------|
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455337_28f5dfcc_2ed9_4b8a_aff4_9ff9193991ee.png)| |

#### 2.18.2 Correspondence Between Software and Hardware

| Device Node Name| Hardware Identifier Name|
|----------|----------|
| CAN1| can0|
| CAN2| can1|

#### 2.18.3 CAN Test

Configure CAN services as follows to view CAN network devices:

```plain
root@FCU1501:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:51
can1      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:52
```

Set parameters for CAN0 and CAN1

```plain
root@FCU1501:/# ip link set can0 down
root@FCU1501:/# ip link set can1 down
root@FCU1501:/# ip link set can0 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
root@FCU1501:/# ip link set can1 type can bitrate 1000000 sample-point 0.8 dbitrate 2000000 sample-point 0.8 fd on
```

Set the baud rate of CAN0 and CAN1 to 500000

Open CAN0, CAN1

```plain
root@FCU1501:/# ip link set can0 up
root@FCU1501:/# echo 4096 > /sys/class/net/can0/tx_queue_len
root@FCU1501:/# ip link set can1 up
root@FCU1501:/# echo 4096 > /sys/class/net/can1/tx_queue_len
```

The client sends data and the server receives data:

When the CAN0 device acts as the server (the server must first execute the following command):

```plain
root@FCU1501:/# candump can0 &
```

When device CAN1 acts as the client (the client sends data):

```plain
root@FCU1501:/# cansend can1 1F334455#1122334455667788
can0  1F334455   [8]  11 22 33 44 55 66 77 88
```

### 2.19 Buzzer Usage

FCU1501 comes with a built-in buzzer, allowing users to customize prompt functions; the specific test process is as follows:

```plain
root@FCU1501:/# echo 1 > /sys/class/leds/beeper/brightness  # Enable buzzer beeping
root@FCU1501:/# echo 0 > /sys/class/leds/beeper/brightness  # Turn off the buzzer
```

### 2.20 System Boot Auto-start Function

When the system boots up, the default startup script is /etc/init.d/S90autorun.sh. This is a dedicated system startup script, and it is not recommended to place the custom applications within it.

```plain
root@FCU1501:/# ls /etc/init.d/     #List of system power-on application
S00mountall.sh      S30dbus           S50usbdevice.sh  S99fstrim
S01seedrng          S35iptables       S60openvpn       S99input-event-daemon
S01syslogd          S40bluetoothd     S70vsftpd        fuse3
S02klogd            S40network        S80dhcp-relay    instant_recovery.sh
S02sysctl           S40obexd          S80dhcp-server    S50nginx
S05async-commit.sh  S44modem-manager  S80dnsmasq       rcK
S10udev             S49ntp            S80tftpd-hpa     rcS
S11alsa-utils       S50mosquitto      S90autorun.sh
S13irqbalance       S50sshd           S99appinit
```

You can change the name starting with "S" to a name that does not start with "S" as required, so as to disable the corresponding program's automatic startup on boot. For example, to disable the auto-start of Nginx:

```plain
root@FCU1501:/etc/init.d# mv  S50nginx  50nginx  #Turn off nginx boot
```

### 2.21 User-defined Auto-start Function

The custom boot auto-start script is /userdate/autorun.sh, where you can add commands that need to be executed on system boot.

#### 2.21.1 Method for 4G Dial-Up Auto-Startup on Boot

Assuming you need to automatically run the 4G dial-up script on boot: note that the 4G module requires a certain initialization time, and actual tests show that dial-up should be performed 3 to 5 seconds after boot. Add the following content to /userdate/autorun.sh:

```plain
sleep 5 
 QuectelCM &//4G dialup script starts running in the background 
 Exit 0/* Add */above exit
```

For the convenience of deployment, you can directly add the configurations of /userdate/autorun.sh to the file system.

### 2.22 Static IP Configuration

The network nodes of FCU1501 include wired connections eth0 and eth1, and wireless connections wlan0 and wlan1. By factory default, eth0 and eth1 are set with fixed IP addresses. You can customize specific addresses according to actual needs for convenience.

Open /etc/network/interfaces and modify the configuration to set eth0 to static and eth1 to dynamic.

```plain
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
address 192.168.0.232
netmask 255.255.255.0
gateway 192.168.0.1

auto eth1
iface eth1 inet dhcp
```

Remove the command for setting a static IP address from the startup script.

```plain
root@FCU1501:/# vi /etc/network/interfaces
```

Delete the content within the red box in the image below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455487_4fe0086e_11ff_40ab_b792_f4d725ec4a41.png)

To configure DNS, add the following to /etc/resolv.conf:

```plain
root@FCU1501:/# echo nameserver 8.8.8.8 > /etc/resolv.conf
```

Restart

```plain
root@FCU1501:/# reboot
```

### 2.23 Python Language Support

The FCU1501 file system comes with built-in support for Python 3.11. The specific usage is as follows:

```plain
root@FCU1501:/# python3
Python 3.11.8 (main, Nov 14 2025, 18:01:33) [GCC 12.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
>>> print("Hello World from Python 3.11!")
Hello World from Python 3.11!
>>> exit()
root@FCU1501:/#
```

### 2.24 QT Libraries

The FCU1501 file system has built-in support libraries for QT5. The specific view operation is as follows:

```plain
root@FCU1501:/# find -name qt
./run/media/mmcblk0p5/usr/lib/qt
./usr/lib/qt
root@FCU1501:/# ls /usr/lib/qt/plugins
bearer            # Network connection management plugins (such as VPN support)
canbus            # CAN bus communication plugins
iconengines       # Icon rendering engine plugins
platforminputcontexts  # Input method platform plugins
qmltooling        # QML debugging tool plugins
generic           # General-purpose plugins (such as printing support)
imageformats      # Image format plugins (for JPEG/PNG decoding)
platforms         # Platform integration plugins (such as XCB/Wayland)
sqldrivers        # Database driver plugins (for SQLite/MySQL)
```

### 2.25 MQTT

The FCU1501 file system has built-in MQTT support. The specific view operation is as follows:

```plain
root@FCU1501:/# mosquitto --help
mosquitto version 2.0.18
mosquitto is an MQTT v5.0/v3.1.1/v3.1 broker.
Usage: mosquitto [-c config_file] [-d] [-h] [-p port]
 -c : specify the broker config file.
 -d : put the broker into the background after starting.
 -h : display this help.
 -p : start the broker listening on the specified port.
      Not recommended in conjunction with the -c option.
 -v : verbose mode - enable all logging types. This overrides
      any logging options given in the config file.
See https://mosquitto.org/ for more information.
root@FCU1501:/# ls /usr/bin/ | grep mosquitto   #MQTT client tools supported
mosquitto_passwd
mosquitto_pub
mosquitto_rr
mosquitto_sub
```

### 2.26 TUN

The FCU1501 kernel has TUN support enabled. The specific view operation is as follows:

Create a TUN device;

```plain
root@FCU1501:/# ip tuntap add dev tun0 mode tun user root
```

Configure IP address (point-to-point network segment, 30-bit subnet mask contains only 2 usable IP addresses);

```plain
root@FCU1501:/# ip addr add 10.0.0.1/30 dev tun0
```

Enable the device

```plain
root@FCU1501:/# ip link set dev tun0 up
```

Add a static route: point the target internal network segment to the TUN device;

```plain
root@FCU1501:/# ip route add 192.168.2.0/24 dev tun0
```

Verify the device status.

```plain
root@FCU1501:/# ip link show tun0
9: tun0: <NO-CARRIER,POINTOPOINT,MULTICAST,NOARP,UP> mtu 1500 qdisc pfifo_fast state DOWN mode DEFAULT group default qlen 500
link/none
root@FCU1501:/# ip route show
default via 192.168.0.1 dev eth0 linkdown
10.0.0.0/30 dev tun0 proto kernel scope link src 10.0.0.1 linkdown
192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.232 linkdown
192.168.1.0/24 dev eth1 proto kernel scope link src 192.168.1.232 linkdown
```

### 2.27 NTP Service

NTP service is enabled on FCU1501. The specific view operation is as follows:

```plain
root@FCU1501:/# ps -ef | grep -i ntp
  573 ntp      /usr/sbin/ntpd -u ntp:ntp -g -p /var/run/ntpd.pid
 3302 root     grep ntp
```

### 2.28 IPtables

The FCU1501 file system is integrated with the Iptables tool. The specific view operation is as follows:

```plain
root@FCU1501:/# iptables -V
iptables v1.8.9 (legacy)
root@FCU1501:/#
```

### 2.29 Telnet

The FCU1501 file system is integrated with the Telnet tool. The specific view operation is as follows:

```plain
root@FCU1501:/# telnet
BusyBox v1.36.1 (2025-12-30 23:08:12 CST) multi-call binary.
Usage: telnet [-a] [-l USER] HOST [PORT]
Connect to telnet server
        -a      Automatic login with $USER variable
        -l USER Automatic login as USER
root@FCU1501:/# telnetd -V
telnetd (GNU inetutils) 2.0
Copyright (C) 2021 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by many authors.
```

### 2.30 Crond

The FCU1501 file system is integrated with the Crond tool. The specific view operation is as follows:

```plain
root@FCU1501:/# ps -ef | grep -i cron  // The crond process has already started
root      668    1  0 00:00 ?        00:00:00 /usr/sbin/crond -f
root@FCU1501:/# crontab -e  // Run the command to enter the editor page
* * * * * date >> /tmp/cron_test.log  // Add a scheduled task, which makes the system record the current date and time every minute
// Wait for 1 or 2 minutes to check the recorded timestamps
root@FCU1501:/# cat /tmp/cron_test.log
Thu Jan  1 01:38:01 UTC 1970
Thu Jan  1 01:39:01 UTC 1970
```

### 2.31 lrzsz

The FCU1501 file system is integrated with the lrzsz tool. The specific view operation is as follows:

**Note: Before testing, make sure the terminal emulation software you use supports the Zmodem protocol! This test uses MobaXterm.**

```plain
root@FCU1501:/# which rz sz
root@FCU1501:/# which rz sz
/usr/bin/rz
/usr/bin/sz
# Test sz (send file from device to local host)
root@FCU1501:/# sz -be /tmp/cron_test.log
▒lrz waiting to receive.*CD@@@AKa▒Dcron_test.log@261 0 14331 0 0 33188@k+[▒s

Receiving: cron_test.log
*CJ@@@@▒▒▒▒Thu Jan  1 01:38:01 UTC 1970JThu Jan  1 01:39:01 UTC 1970JThu Jan  1 01:40:01 UTC 1970JThu Jan  1 01:41:01 UTC 1970JThu Jan  1 01:42:01 UTC 1970JThu Jan  1 01:43:01 UTC 1970JThu Jan  1 01:44:01 UTCDownloading: 100% kBytes received:      0/     0   kBPS:3                    \▒▒
▒OOroot@FCU1501:/#
Transfer complete     // File transmission finished

# Test rz (upload file from local host to device)
root@FCU1501:/# cd /tmp/    // Navigate to the directory where you want to save the uploaded file
root@FCU1501:/tmp# rz -be   // Run the command to prepare for receiving files, then select and send the target file via the terminal
▒Sending: md5.txt6ive.**B0100000063f694
▒*B0900000000a87c
Bytes Sent:     52   BPS:37
▒*B0800000000022d
Transfer complete
root@FCU1501:/tmp# ls
cron  cron.cnlByD  cron_test.log  dbus  dhcpd.leases  dhcpd.leases~  dnsmasq.leases  md5.txt  nginx
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455649_19faeccd_c723_421c_b5d1_831a53726252.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455820_ea9fce3f_a05e_45c5_95c9_ef40a28f9c30.png)

### 2.32 Ntpdate

ntpdate is a command-line tool for synchronizing the system time over the network. It can connect to a time server and correct the local time. Ensure the device is connected to the network before testing. The FCU1501 file system is integrated with the ntpdate tool. The specific view operation is as follows:

```plain
# Test whether you can connect to the time server. If you want to synchronize, just do not use the -q option.
root@FCU1501:/# ntpdate -q ntp.aliyun.com
server 203.107.6.88, stratum 2, offset -0.003628, delay 0.04810
 2 Feb 06:08:18 ntpdate[2688]: adjust time server 203.107.6.88 offset -0.003628 sec
```

### 2.33 Curl

curl is a powerful command-line tool mainly used for data transmission. The FCU1501 file system is integrated with the curl tool. The specific view operation is as follows:

```plain
root@FCU1501:/# curl -V
curl 8.6.0 (arm-buildroot-linux-gnueabihf) libcurl/8.6.0 OpenSSL/3.2.1 zlib/1.3.1
Release-Date: 2024-01-31
Protocols: dict file ftp ftps gopher gophers http https imap imaps ipfs ipns mqtt pop3 pop3s rtsp smtp smtps telnet tftp
Features: alt-svc AsynchDNS HSTS HTTPS-proxy IPv6 Largefile libz SSL threadsafe TLS-SRP UnixSockets
# Test the server connection
root@FCU1501:/# curl -I http://www.forlinx.com
HTTP/1.1 301 Moved Permanently
Server: nginx
Date: Mon, 02 Feb 2026 06:14:34 GMT
Content-Type: text/html
Content-Length: 162
Connection: keep-alive
Location: https://www.forlinx.com/
```

### 2.34 Tcpdump

tcpdump is a powerful network packet capture tool that can capture network packets for subsequent analysis with Wireshark. The FCU1501 file system is integrated with the tcpdump tool. The specific view operation is as follows:

```plain
# First, start packet capture in the background, set a 10-second time limit
root@FCU1501:/# timeout 10 tcpdump -i eth0 -w /tmp/test_capture.pcap &
[1] 3315
root@FCU1501:/# [ 9282.193736] device eth0 entered promiscuous mode
tcpdump: listening on eth0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
# Generate test network traffic
root@FCU1501:/# ping www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) 56(84) bytes of data.
64 bytes from 211.149.226.120: icmp_seq=1 ttl=54 time=32.3 ms
64 bytes from 211.149.226.120: icmp_seq=2 ttl=54 time=36.8 ms
64 bytes from 211.149.226.120: icmp_seq=3 ttl=54 time=31.5 ms
64 bytes from 211.149.226.120: icmp_seq=4 ttl=54 time=31.4 ms
335 packets captured    // 335 network packets have been captured
[ 9292.136012] device eth0 left promiscuous mode
372 packets received by filter
0 packets dropped by kernel
64 bytes from 211.149.226.120: icmp_seq=5 ttl=54 time=31.3 ms
64 bytes from 211.149.226.120: icmp_seq=6 ttl=54 time=31.3 ms

^C
--- s-526319.gotocdn.com ping statistics ---
6 packets transmitted, 6 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 31.318/32.451/36.814/1.982 ms
[1]+  Done(124)               timeout 10 tcpdump -i eth0 -w /tmp/test_capture.pcap
```

## 3\. Flashing the System

### 3.1 USB Drive System Flashing

#### 3.1.1 Creating a Bootable Flashing USB Drive

Copy the image file that can boot normally on the board card to any path.

Software Materials\\3-Usage Tools\\System Update Tools\\SDDiskTool\_cn\_v1.74.rar

Step 1: Unzip SDDiskTool\_cn\_v1.74.rar to any path without Chinese characters

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716455978_73e6f344_4740_407f_8049_152811da9fb6.png)

Step 2: Insert the USB drive or TF card via USB card reader into the computer’s USB port.

Note: The maximum capacity of the test U disk card is 32G. If the capacity is more than 32G, the burning may fail. It is recommended to use 16G.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456136_7f5a94c5_dcff_415d_855d_f18f0388a2f0.png)

Step 3: Select the removable device to recognize the specified USB drive or card reader.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456318_599b4ac7_3f14_4c67_8a49_42289312c920.png)

Select your target device and check the “Firmware Update” option.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456429_27bab858_c178_464d_b353_757b884a20a6.png)

Step 4: Select the firmware image.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456517_b06d2ec5_a20b_49b8_bc10_005e5309cf3f.png)

Select the path of the firmware image to be flashed.

Step 5: Start creation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456644_74cac1ac_038b_4234_8795_544758d2f4c6.png)

Select “Yes” and wait for the creation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716456934_53f9e4bb_f97b_4178_b1b2_aafb88f9c6e4.png)

Click “OK”.

#### 3.1.2 Flash System via USB Drive

Prerequisite for USB flashing: Flash a normally bootable image to the board’s storage device via OTG in advance. Then insert the USB drive created in the previous section into the USB-A port of FCU1501, power on the device, and the system will complete flashing automatically. The FCU1501 can be used normally after rebooting. The process is as follows:

```plain
Model: Forlinx OK3506-S Board
read eth0 mac form vendor_storage error! try to read from eeprom
read eth0 mac from eeprom is ff:ff:ff:ff:ff:ff
read eth0 mac from eeprom error, use default mac address.
cpuid: 4D 34 53 33 37 34 00 00 00 00 00 00 00 07 12 29
read eth1 mac form vendor_storage error! try to read from eeprom
read eth1 mac from eeprom is ff:ff:ff:ff:ff:ff
read eth1 mac from eeprom error, use default mac address.
cpuid: 4D 34 53 33 37 34 00 00 00 00 00 00 00 07 12 29
starting USB...
Bus usb@ff740000: USB DWC2
Bus usb@ff780000: USB DWC2
Bus usb@ff740000: USB DWC2
scanning bus usb@ff740000 for devices... 1 USB Device(s) found
scanning bus usb@ff780000 for devices... 5 USB Device(s) found
scanning bus usb@ff740000 for devices... 1 USB Device(s) found
       scanning usb for storage devices... 1 Storage Device(s) found
Scanning usb 0 ...
=== Booting from usb 0 ===
Rockchip UBOOT DRM driver version: v1.0.1
Using display timing dts
dsi@ff640000:  detailed mode clock 46000 kHz, flags[a]
    H: 1024 1084 1264 1324
    V: 0600 0605 0607 0617
bus_format: 100e
final DSI-Link bandwidth: 460 Mbps x 2
CLK: (arm clk use pvtpll, rate = 1200M)
……………….
Starting kernel ...
………
Starting network: OK
starting recovery...
starting usbdevice service, log saved to /var/log/usbdevice.log
LOG_INFO: Now is MTD.
LOG_ERROR: Can't find misc
LOG_ERROR: unknown volume for path [/userdata/recovery/command]
LOG_ERROR: Can't mount /userdata/recovery/command
LOG_INFO: Now is MTD.
LOG_ERROR: Can't find misc
sh: /oem/RkLunch.sh: No such file or directory
Starting input-event-daemon: done
root@FCU1501:/# [   16.769850] vendor storage:20190527 ret = -1
[   17.516357] file system registered
………………
LOG_INFO:
Please remove U DISK!!!, wait for reboot.  #After writing, pull out the U disk.
```

Estimated flashing time: about 3 minutes, the duration mainly depends on the USB 2.0 transfer speed. After flashing is completed, the system will enter recovery mode by default. The device will emit a 2-second prompt tone, the indicator light will flash, and the terminal will display the prompt: Please remove U DISK!!!, wait for reboot.

At this point, remove the USB disk and restart the computer.

### 3.2 OTG System Flashing

#### 3.2.1 OTG Driver Installation (OTG interface is located inside the device)

 Path: Software Documents\\3-Usage Tools\\System Update Tools\\DriverAssitant\_v5.13.zip

Extract the file above to any directory and run it with administrator privileges.

Open the DriverInstall.exe program.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716457051_31abd091_3c90_4b03_bb22_9c7459d93c1e.png)

Click Install Driver.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716457389_294044d2_891f_41e8_868d_33ec8fa61ba2.png)

#### 3.2.2 Complete OTG Flashing

RKDevTool Flashing Test

Path: Software Documents\\3-Usage Tools\\System Update Tools\\RKDevTool\_v3.32\_for\_window.rar

This is a development tool provided by Rockchip. Before use, extract it to a full-English path. Connect the built-in OTG port of FCU1501 with a Type-C cable, short-circuit the BOOT contacts with tweezers, power off and then re-power on the device, then release the tweezers after about 2 seconds. The Rockchip development tools will display a message indicating that a MASKROM device has been detected.

**Note: The extraction directory for Rockchip's development tools can be arbitrary, but users have reported that the directory should contain only English characters. If the development tool interface does not match the image shown below, consider extracting it to a directory with only English characters.**

Open the Rockchip development tool:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716457479_2a87d2f0_4a7a_456b_95d7_60bce46fad0e.png)

Select the path where the specified flashing firmware image is stored.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716457555_a73aed25_ef62_4c0f_91c0_12b4681e4876.png)

Press and hold the BOOT button while powering on the device, release the button once the MASKROM device is detected, then select the Upgrade option to start flashing, and wait for the firmware download to complete successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Manual_Linux6_1_99/1787716457646_a3c47b77_2e8d_4817_8196_6927f58b7e26.png)

**Note:**

- **Don't click "Device Partition Table" in maskrom mode, it is invalid;**
- **Flashing individually in Maskrom Mode will not clear the U-Boot environment variables.**