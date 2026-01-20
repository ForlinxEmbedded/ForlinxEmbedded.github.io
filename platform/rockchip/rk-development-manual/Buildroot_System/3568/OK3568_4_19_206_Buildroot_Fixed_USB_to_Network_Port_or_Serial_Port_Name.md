# OK3568 4.19.206 Buildroot Fixed USB to Network Port or Serial Port Name

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Fixed USB to Network Port or Serial Port Name

1\. Use the command to view the rules

udevadm info --attribute-walk --path=$(udevadm info --query=path --path=/sys/class/net/eth0)

udevadm info --attribute-walk --path=$(udevadm info --query=path --name=<font style="color:#FF0000;">/dev/ttyUSB0</font>)

udevadm info --attribute-walk --path=$(udevadm info --query=path --name=<font style="color:#FF0000;">/dev/ttyXRUSB0</font>)

udevadm info --attribute-walk --path=$(udevadm info --query=path --name=<font style="color:#FF0000;">/dev/usb-serial1</font>)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646905604-a945622e-3f7f-438b-9130-9d74877cefea.png)

2\. Select a few rules from the above figure:

Create/etc/udev/rules.d/99rename.rules files

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646905795-ff261798-5d26-4e4f-b3eb-4e311498862c.png)

3\. Add executable permissions

chmod +x /etc/udev/rules.d/99rename.rules

4\. Restart the development board and test that the serial port on the USB interface has been fixed. The user application can directly use/dev/usb-serial-1 to call the serial port on the relevant USB interface.