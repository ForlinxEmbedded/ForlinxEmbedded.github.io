# 4G Daemon Usage Guide (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
This method applies to the 2601 Forlinx Desktop 20.04 system, R3 version. 
The 4G daemon is now recommended in place of the original quectel-CM dial-up program. This document describes the 4G daemon, how to use it, and its precautions.

## Revision History
| **Date**    | **Manual Version**    | **Revision History** |
| --- | --- | --- |
| 20/06/2025 | V1.0    | Initial release    |

## 1. Introduction
On the 2601 Forlinx Desktop 20.04 system, there is quectel-CM, a 4G dial-up program, but it can only be used for 4G dial-up and has no additional features.

Special situations—such as closing the dial-up program because of high memory usage, the program becoming unresponsive after an error, or a user logout caused by network fluctuations—will interrupt the 4G network.

It is now recommended to use fl_4g, the 4G daemon, in place of the 4G dial-up program.

The program periodically checks whether the external network can be pinged to verify the 4G connection. If the external network cannot be pinged several times in a row, it resets the module and redials, thereby ensuring long-term, reliable use of the 4G network.

It also provides a logging feature, so if the 4G network is interrupted, you can analyze the logs to find the specific cause.

## 2. Usage
### 2.1 Running the 4G Daemon
First, create the log directory; the program will report an error and exit if the directory does not exist.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/019.png)

Use the following command to create the directory:

```plain
root@FCU2601:~# mkdir -p /home/root/daemon_4g
```

Once created, you can use the 4G daemon:

```plain
root@FCU2601:~# fl_4g &
```

If dial-up succeeds, the printed information is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/020.png)

### 2.2 Checking the 4G Network Connectivity 
By default, after starting the 4G daemon, it attempts to ping 8.8.8.8 every 50 seconds. If 5 consecutive attempts fail, the 4G network is considered interrupted, and the module is reset and redialed.

The figure below shows the normal ping output to the external network after 4G dial-up completes:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/021.png)

This feature can be modified in the following configuration file:

```plain
root@FCU2601:~# vi /etc/wiet/daemon_4g.conf
```

The setting to modify is in the following field:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/022.png)

To disable this feature, set ping_func = 0.

If you do not want to reset the module and only want to redial when the network is interrupted, set ping_no_receipt_deal = 1.

After modifying, simply save the changes.

### 2.3 Recording the 4G Network Logging Feature
By default, the fl_4g daemon records log information in the /home/root/daemon_4g/ directory.

This feature can be modified in the following configuration file:

```plain
root@FCU2601:~# vi /etc/wiet/daemon_4g.conf
```

The log storage location is set in the following field and can be changed to another path:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/023.png)

Using this directory as an example, use the following command to view fl_4g's log information:

```plain
root@FCU2601:~# cat /home/root/daemon_4g/wireless_log.txt
```

Common issues, such as failure to detect the SIM card, are recorded in this log:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/024.png)

## 3. Common Issues
- fl_4g's log information is not written to the log file wireless_log.txt in real time, so you may see a "SIM card not present" message in the printed output that does not appear in the log file;
You can manually stop the fl_4g daemon; only then will the      corresponding text appear in the log file.

- Some machines may be unable to hot-swap the SIM card, which may be caused by the 4G module reset pin not being configured. Simply update to the latest system image to resolve this issue;


- If the device has already been deployed to the site and it is inconvenient to update the image, you can modify the reset-related code at the end of the configuration file /etc/wiet/daemon_4g.conf as shown below.


**Note: check whether the path /sys/class/leds/4g-reset/brightness exists on the industrial PC.**

```shell
# Set whether there is a module reset pin, 0:no module reset pin available   1:reset pin is available
# Correctly set pin absolute path file if pin reset module is allowed
# Pin on 1:set 1 is cpu pin high to reset module   0: set 0 is cpu pin low to reset module
reset_pin_func = 1
#reset_pin_numb = 99
#reset_pin_out = /sys/class/gpio/gpio99/direction
reset_pin_path = /sys/class/leds/4g-reset/brightness
reset_pin_on = 1
```

- Most IoT cards can select the APN automatically, while a few require the APN to be set manually. The configuration path is:


/etc/wiet/daemon_4g.conf. After configuring, restart fl_4g for the changes to take effect.

```shell
# Set the apn username, password, and the authentication mode
# authentication mode can be set to 0/1/2 .0:no auth   1:PAP   2:CHAP
# dial_ipv4v6 can be set 1 ipv4 2 ipv6 3 ipv4v6
dial_APN = cmnet
dial_username =
dial_password =
dial_auth = 1
dial_cid = 1
dial_ipv4v6 = 1
dial_carry_apn_to_attach = 0
```

- The card and antenna are fine, but there is no signal; replacing the module fixes it:


This may be caused by the working mode. For example, in a case we encountered, a module was operating in 2G-only mode, but there was no 2G signal nearby.

```bash
 AT+QCFG="nwscanmode"
+QCFG:"nwscanmode",1  // A reply of 1 means 2G-only mode
OK
AT+QCFG="nwscanmode",0  // Set it to 0 to allow 4G/3G/2G switching and avoid no signal
```

- Both fl_4g and quectel-CM support only QMI mode. If the following error occurs, switch the module's working mode:


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_4G_Daemon_Usage_Guide_FlDesktop20.04-EN/025.png)

The AT command to switch modes:

Check whether usbnet is set to 0, which corresponds to QMI mode:

```plain
root@FCU2601:/home/root/daemon_4g# busybox microcom /dev/ttyUSB2
AT+QCFG="usbnet"
+QCFG: "usbnet",1

OK
AT+QCFG="usbnet",0
OK
root@FCU2601:/home/root/daemon_4g# fl_4g&
```

If switching fails, use the ATI command to check the firmware version. The standard firmware currently provided by Forlinx supports switching.

If you purchased a module from another supplier, ask the supplier whether it supports QMI mode.
