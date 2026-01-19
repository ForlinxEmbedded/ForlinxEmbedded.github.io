# OK3568 4.19.206 Buildroot Kernel Configuration View

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

## Kernel Configuration View

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

Open the development board debugging tool and enter the following command

```plain
[master@ok3568:/]# zcat /proc/config.gz  | grep CONFIG_BONDING		//Check whether the kernel is configuredBONDING
# CONFIG_BONDING is not set				//No configuration
[master@ok3568:/]# zcat /proc/config.gz  | grep NETDEVICES				//Check whether the kernel is configuredNETDEVICES
CONFIG_NETDEVICES=y								//Already configured
```