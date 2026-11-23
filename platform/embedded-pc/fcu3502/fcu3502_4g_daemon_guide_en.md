# 4G Daemon Application Guide

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. 4G Daemon Introduction

### 1.1 4G Daemon Feature Overview
- Module level features
   ▫️ Monitor registration, attachment, and dial-up status; on anomalies, redial, reset, or reboot the module according to the policy.
   ▫️ Check SIM card status; if no SIM card is detected, reset or reboot the module according to the reset policy so that it searches for the card again.

- Application level features
   ▫️ Check the current network status via ping; if ping gets no reply for n consecutive times, recheck the module-level status. The feature can be enabled or disabled, the ping interval, target address, and count are configurable, and the action taken when ping fails is configurable.
   ▫️ Periodically check whether received data packets are increasing; if they do not grow within the timeout, recheck the module-level status. The timeout and data-growth threshold are configurable, as is the action taken when no data is detected.

- Log storage
   ▫️ Record normal and abnormal operation information after startup, important AT interaction commands, network registration status changes, dial-up status changes.
   ▫️ Cover redials and the reasons that triggered them, and reboots and the reasons that triggered them.
   ▫️ Timestamps are formatted as [year-month-day hour:minute:second]; a single log file holds up to 2MB, and two files are used cyclically.

- Information storage
   ▫️ Read the module serial number, SIM card serial number, and detailed module information.
   ▫️ Collect operator information, access point information, and other related data, then store all data in a local file.

- Debug output management
   ▫️ All printed runtime messages support a configurable debug mode.

- Multi-SIM support
   ▫️ Supports seamless switching between two SIM cards on a single 4G module.

- Signal indicator adaptation
   ▫️ When signal strength indicator LEDs are available on the hardware, the daemon can output real-time signal level data to drive corresponding LED status prompts.

| Indicator LED | 4G Module Fault | Low signal<br/>(unstable communication) | Medium signal<br/>(normal communication) | High signal<br/>(stable communication) |
| :---: | :---: | :---: | :---: | :---: |
| LED 1 | Off | On | On | On |
| LED 2 | Off | Off | On | On |
| LED 3 | Off | Off | Off | On |


- Supported platforms: A40I,T507,6UL,6ULL,8MP,6Q
- Supported modules: EC20, Huawei ME909, EC200S, RG500U, EC200U

### 1.2 Program Usage Instructions
Process name: mobilemgmt

Usage: Based on your platform and Linux version, download the correct 4G daemon executable.

          Copy the executable to any path on the board,

Also copy the daemon_4g.conf configuration file to the /etc/wiet/ folder,

          Run the daemon directly, with no arguments.



**Note: All settings are made by modifying the daemon_4g.conf file, which contains descriptions of the configuration parameters.**

    Read the configuration file carefully before use. For platforms that have been adapted, any special configuration is marked with "pay attention".

**Note:** 

- **The killall command must be supported; otherwise the udhcpc command cannot be closed properly, causing a memory leak;**

- **There is no wiet folder under /etc/ by default; you need to create it;**
- **Modules that dial up using AT commands require special settings because AT command formats and content differ among vendors. All modules that have been adapted and tested come with a "module_model_format.conf" file; all of these .conf files must be placed in the /etc/wiet/ folder.**

### 1.3 Generated Files

The 4G daemon generates a total of 8 files. The path can be set in the configuration file; the contents of the folder are shown in the table below:

| File name | Description |
| :---: | --- |
| CSQ.txt | Records signal strength<br/>Format: RSSI : -80<br/>Range (-40~-140) or (9~31) |
| act.txt | Records the access point<br/>Format: act : access point<br/>Access points include<br/>2G:GSM /EDGE / GPRS<br/>3G:WCDMA / TD-SCDMA / HSDPA / HSUPA / UMTS / 1XEVDO<br/>4G:LTE<br/><br/>Operator<br/>Format: oper:operator<br/>Mobile: CHINA MOBILE<br/>Unicom: CHINA UNICOM<br/>Telecom: CHINA TELECOM<br/>Other: OTHER |
| cereg.txt | Module registration status with the base station<br/>Format: a number from 0-5<br/>0: Not registered<br/>1: Registered on the local network<br/>2: Not registered, but the module is searching for a base station<br/>3: Registration denied<br/>4: Unknown<br/>5: Registered on a roaming network |
| cgatt.txt | Attachment status<br/>Format: 0 or 1<br/>0: Not attached<br/>1: Attached |
| dail.txt | Dial-up status<br/>Format: 0 or 1<br/>0: Dial-up failed<br/>1: Dial-up successful |
| err_msg.txt | Predicts potential network issues<br/>err:The module is not loaded properly  The module failed to load successfully<br/>err:The module does not start up normally The module did not start up normally<br/>err:No sim card  No SIM card<br/>err:The signal intensity is weak,please confirm whether the antenna is inserted  Signal strength is low; check whether the antenna is connected<br/>err:please confirm if the card is overdue or the sim card is locked  Confirm whether the SIM card has expired or the IoT card is locked<br/>err:please confirm if the APN,User name, password is correct. Confirm whether the APN, user name, and password are correct<br/>err:cannot get IP  Cannot obtain an IP address<br/>err:No data timeout  No data timeout<br/>err:ping no receipt   No ping reply |
| information.txt | Module information<br/>Format:<br/>version : EC20CEHDLGR06A09M1G <br/>ICCID : 89860323743125729869 <br/>IMSI : 460115765865933 |
| wireless_log.txt | Historical logs; two 2M files are used cyclically with overwrite<br/>Records normal operation, errors, resets, reboots, and all received AT commands |
| history_csq.txt | Stores signal strength over a period of time; two 1M files are used cyclically with overwrite |


## 2. 4G Daemon Operation Steps
### 2.1 Reading Module Information
```plain
root@FCU1501:/userdata# cat /dev/ttyUSB2 & # Continuously monitor data received on the serial port and print it to the screen
[1] 1041 # Process ID
root@FCU1501:/userdata# echo -e "ATI\r" > /dev/ttyUSB2 # Switch to AT commands to read module information 
root@FCU1501:/userdata#
Quectel
EC800K
Revision: EC800KCNLCR07A04M04
OK
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/012_EN.png)

**Quectel EC800K**, an LTE Cat.1 all-carrier 4G module with firmware EC800KCNLCR07A04M04 (China region version)

### 2.2 Resetting the Module
```plain
root@FCU1501:/userdata# echo 1 > /sys/class/leds/ec800k_4g_rst/brightness # Reset with a high level; if there is no response, try echo 0 first, then echo 1.
root@FCU1501:/userdata# [12900.990599] usb 2-1.1: new high-speed USB device number 9 using dwc2 # Module powered on
[12901.554625] usb 2-1.1: USB disconnect, device number 9 # Reset took effect
[12902.527268] usb 2-1.1: new high-speed USB device number 10 using dwc2 # Reboot complete
[12902.643102] cdc_ether 2-1.1:1.0 usb0: register 'cdc_ether' at usb-ff780000.usb-1.1, CDC Ethernet Device, ae:0c:29:a3:9b:6d # EMC re-created the network interface
[12902.645557] option 2-1.1:1.2: GSM modem (1-port) converter detected
[12902.646191] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB0
[12902.647711] option 2-1.1:1.3: GSM modem (1-port) converter detected
[12902.648281] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB1
[12902.649653] option 2-1.1:1.4: GSM modem (1-port) converter detected
[12902.650211] usb 2-1.1: GSM modem (1-port) converter now attached to ttyUSB2 # Network interface re-creation finished
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/013_EN.png)

```plain
root@FCU1501:/userdata# ls /dev/ttyUSB* # Confirm module status
/dev/ttyUSB0 /dev/ttyUSB1 /dev/ttyUSB2
root@FCU1501:/userdata#

root@FCU1501:/userdata# cat /dev/ttyUSB2 & # Continuously monitor data received on the serial port and print it to the screen
[1] 1128
root@FCU1501:/userdata# echo -e "ATI\r" > /dev/ttyUSB2 # Confirm the AT port
root@FCU1501:/userdata#
Quectel
EC800K
Revision: EC800KCNLCR07A04M04

OK
echo -e "AT+CGREG?\r" > /dev/ttyUSB2 # Confirm the module registration status
root@FCU1501:/userdata#
+CGREG: 0,1

OK
```

Return values:

| 0, 1 or 0, 5 | Module registered successfully |
| :---: | --- |
| 0, 2 | Not registered; searching for a network; wait about 20S |
| 0, 3 | Registration denied; consider a SIM card issue |
| 0, 4 | Weak or no signal; consider other causes |




![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/014_EN.png)

### 2.3 Dial-Up Networking


```plain
root@FCU1501:/# quectelCM & # Dial up to the network
```

Confirm that internet access is working

```plain
root@FCU1501:/# ifconfig usb0 # Check the module's dial-up networking information
usb0 Link encap:Ethernet HWaddr AE:0C:29:A3:9B:6D
inet addr:10.7.115.47 Bcast:10.255.255.255 Mask:255.0.0.0
inet6 addr: fe80::ac0c:29ff:fea3:9b6d/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:36 errors:0 dropped:0 overruns:0 frame:0
TX packets:53 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:3560 (3.4 KiB) TX bytes:5038 (4.9 KiB) # The public IP address and other details were obtained
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/015_EN.png)

### 2.4 4G Daemon
Test the daemon:

```plain
root@FCU1501:/# mobilemgmt
start running mobilemgmt version is ver07.005 ... ...
path=/sys/bus/usb/devices/2-1.1:1.0
idVendor=0x2c7c idProduct=0x6002 # Find the Quectel module via sysfs (2c7c:6002)
atIntf = 3
[09-14_01:50:35:314] Auto find qmichannel = /dev/ttyUSB1 # Use ttyUSB1 as the control channel
[09-14_01:50:35:314] Auto find usbnet_adapter = usb0
[09-14_01:50:35:314] netcard driver = cdc_ether, driver version = 6.1.99+
The module was loaded normally after 5 seconds
[09-14_01:50:35:515] Modem works in ECM_RNDIS_NCM mode # The module works in ECM network adapter mode
set done!
[09-14_01:50:35:516] atc_fd = 10
APN :cmnet
USER :
PASSWD :
AUTH :1
no need to set pdp
[09-14_01:50:38:336] ifconfig usb0 0.0.0.0 # Clear the IP address
[09-14_01:50:38:355] ifconfig usb0 down
[09-14_01:50:43:774] ifconfig usb0 up # Restart the network interface
[09-14_01:50:43:794] udhcpc -f -n -q -t 5 -i usb0 # Foreground DHCP, up to 5 probes
udhcpc: started, v1.36.1
udhcpc: broadcasting discover
udhcpc: broadcasting select for 10.75.183.13, server 169.254.0.1 # Obtain an IP address
udhcpc: lease of 10.75.183.13 obtained from 169.254.0.1, lease time 86400
[09-14_01:50:44:022] deleting routers
[09-14_01:50:44:078] adding dns 111.11.11.3 # Add a new route
[09-14_01:50:44:079] adding dns 111.11.1.3
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/016_EN.png)

Enable automatic startup of the 4G daemon

a. Normally, the 4G daemon is loaded by default but does not start at boot. You can add the startup command to /userdata/autorun.sh to start mobilmgmt automatically at boot and begin dial-up networking.

b. Since mobilemgmt requires the USB module to be fully loaded, set up a loop that detects the USB module; mobilemgmt runs only when the module is detected.

c. After mobilemgmt starts, it automatically begins monitoring the 4G process. If the 4G connection drops and soft resets and similar actions fail, it performs a hard reset and returns to the previous loop.

Commands to write:

```plain
n=0
while [ ! -e /sys/class/net/usb0 ] && [ $n -lt 60 ]; do
sleep 1
n=$((n+1))
done# Monitor the USB module

if [ -e /sys/class/net/usb0 ]; then
/usr/bin/mobilemgmt &
echo "mobilemgmt started"# Start the mobilemgmt process and print a start message
else
echo "usb0 not ready after 60s, mobilemgmt skipped"
fi# If the module is not detected as ready, print a message indicating the process did not start
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_4g_daemon_guide_en/017_EN.png)

At this point, the 4G daemon is functional. You can perform stability testing by repeatedly soft- and hard-resetting the module and adjusting the 4G antenna.

**Note: Before enabling mobilemgmt, manually back up autorun.sh so that the service can be disabled and restored if needed.**