# OK3568 4.19.206 Buildroot WIFI Renaming Operation Method

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright     

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## WIFI Renaming Operation Method

Create a new file named 99-com.rules in /etc/udev/rules.d and add the following content:

KERNEL is the original name.

NAME is the modified name.

![Image](./images/OK3568_4_19_206_Buildroot_WIFI_Renaming_Operation_Method/1719646277855_fb44ad77_18f2_427f_8682_9b866c7c1d58.png)