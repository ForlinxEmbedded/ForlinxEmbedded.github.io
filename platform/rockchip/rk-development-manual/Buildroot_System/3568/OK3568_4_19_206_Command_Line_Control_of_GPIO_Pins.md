# OK3568 4.19.206 Command Line Control of GPIO Pins

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Command Line Control of GPIO Pins

1\. Control GPIO pins through sysfs/sys/class/gpio

<font style="color:#FF0000;">A-D corresponding 1-4：A-1，B-2，C-3，D-4.</font>

<font style="color:#FF0000;">GPIOn\_xy =n\*32+(x-1)\*8+y</font>

<font style="color:#FF0000;">GPIO4\_C6=4\*32+(3-1)\*8+6=150</font>

2\. Configure gpio as input read state

\[root@rk3568:/]# echo 150 > /sys/class/gpio/export 		//Export GPIO4\_C6 pin

\[root@rk3568:/]# echo in > /sys/class/gpio/gpio150/direction	//Set IO input direction

\[root@rk3568:/]# cat /sys/class/gpio/gpio150/value 	//View IO value

\[root@rk3568:/]# echo 150 > /sys/class/gpio/unexport	//Unexport Pin

3\. Configure gpio to set state for output

\[root@rk3568:/]# echo 150 > /sys/class/gpio/export 		//Export GPIO4\_C6 pin

\[root@rk3568:/]# echo out > /sys/class/gpio/gpio150/direction	//Set IO output direction

\[root@rk3568:/]# echo 0 > /sys/class/gpio/gpio150/value 	//Set IO output to low level

\[root@rk3568:/]# echo 1 > /sys/class/gpio/gpio150/value	//Set IO output to high level

\[root@rk3568:/]# echo 150 > /sys/class/gpio/unexport	//Unexport Pin