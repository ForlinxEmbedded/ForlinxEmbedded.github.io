# OK3568 4.19.206 Buildroot USB-to-Ethernet Adapter Renaming Method

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright  

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## USB-to-Ethernet Adapter Renaming Method

Create a new file named 99-com.rules in /etc/udev/rules.d and add the following content:

KERNELS=="1-1:1.0" corresponds to the USB port, which is displayed when the USB device is plugged in.

NAME="eth7" is the renamed Ethernet interface name.

**Note: Do not rename the network adapter to a name that has already been defined. For example, if the kernel has already recognized eth0, eth1, or eth2 during boot, avoid using these names again, as the renaming will fail.**

 You may rename the Ethernet interface to names like ethernet0, ethernet1, or ethernet2.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646112945-d7012a4e-9957-4d38-8a60-65b59da56cbf.png)