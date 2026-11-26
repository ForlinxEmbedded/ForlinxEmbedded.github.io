# eMMC Health Monitoring Tool User Guide

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. eMMC Health Monitoring Tool Overview

- Monitor the customer's daily write volume to the eMMC. If the daily write volume is estimated to be too high and continued use at this rate would prevent the eMMC from reaching its expected service life, notify the customer promptly.
- Monitor the eMMC service life and notify the customer promptly when it is exhausted.
- Monitor eMMC bad blocks and notify the user promptly if their number increases.

## 2. Program Usage

| Process name: mmcinfo       <br/>Usage: ./mmcinfo device [options]… … | | |
| --- | --- | --- |
| **Brief description:** Place the manuid.conf file in the board's /etc directory. <br />If the file is missing or does not contain the manuid for the corresponding eMMC vendor, the program will report an error.<br/>Startup methods: boot-time autostart script check, scheduled task (each platform deploys its own scheduled service, e.g., a check run daily at 2:00 a.m.) | | |
| [options] | device [-y] [-debug] [-v] | |
| **Parameter** | **Meaning** | **Description** |
| device | Mount node | **Note: This is not the partition name, but the eMMC disk name.**<br/>Example: /dev/mmcblk0, /dev/mmcblk2 |
| [-y] | Expected service life | Expected service life (default: 5 years) |
| [-debug] | -debug mode | Using this parameter saves the information shown in blue below. |
| [-v] | Version number | Print the tool's version number. |


## 3. Generated Files
Generated file path: /var/mmc_guard/health.info

| **File name** | **Description** |
| :---: | --- |
| health.info | //Forlinx copyright information//<br/>Capacity        : (unit: M)<br/>Average erase count: [ x / 3000 ]    current x, max 3000<br/>Maximum erase count  [ x /3000 ]    current x, max 3000<br/>Minimum erase count: [ x / 3000 ]    current x, max 3000<br/>Total controller writes:            (unit: G)<br/>Total controller reads:            (unit: G)<br/>Runtime bad blocks:            (count)<br/>Write-back count    :            (times)<br/>Power-on count    :            (times)<br/>Write amplification      :<br/>Disk write capacity:            (unit: G)<br/>Total controller writes in the last check interval: xxx GB<br/>Check statistics    : [host over-write count / total checks ]<br/>Note: debug mode shows the parts in blue. |


## 4. Alarm Information


Alarm messages are printed in red on the debug serial port.

If the eMMC has exceeded its service life, replace it with a new one.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_emmc_health_monitoring_tool_user_guide-en/005_EN.png)

If the host's total writes to the eMMC in the last check period exceed the threshold and this continues, the eMMC cannot be guaranteed to reach its expected service life.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_emmc_health_monitoring_tool_user_guide-en/006_EN.png)

If the number of eMMC bad blocks has increased, check the file system integrity.

## 5. Usage Examples
Using an 8 GB Longsys eMMC as an example, run the eMMC health monitoring tool; the resulting health.info is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_emmc_health_monitoring_tool_user_guide-en/007_EN.png)

## 6. Follow-up Checks
To determine whether the eMMC has reached the end of its service life or is damaged, check two main points:

- Average erase count       : [ 186 / 3000 ]  Average erase count must not exceed 3000
- Bad block count           : 0  The bad block count must not exceed 0
