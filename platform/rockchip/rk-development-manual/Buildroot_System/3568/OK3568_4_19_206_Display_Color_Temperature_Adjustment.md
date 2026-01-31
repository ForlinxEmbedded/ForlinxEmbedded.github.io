# OK3568 4.19.206 Display Color Temperature Adjustment

Document classification: □ Top secret □ Secret □ Internal information ■ Open             

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Display Color Temperature Adjustment

Modify the default values in the driver file kernel/drivers/gpu/drm/rockchip/rockchip\_drm\_drv.c:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646695507-6c2a36dd-3fa4-4b60-aa30-04ad58eb3a15.png)

hue corresponds to color tone

saturation corresponds to saturation

contrast corresponds to contrast

brightness corresponds to brightness

You can use the modetest command in the terminal to test appropriate values:

1. Check the display ID

For example, if an LVDS display is connected, its ID may be 152.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646695682-fa62a025-f659-4dd1-ae03-386b36a3d26e.png)

2. Adjust parameters via command

modetest -M rockchip -a -w 152:hue:0

modetest -M rockchip -a -w 152:hue:100

modetest -M rockchip -a -w 152:hue:50

Use the following commands to test and observe changes in screen color temperature:

**Note:** 

**hue corresponds to color tone；**

**saturation corresponds to saturation；**

**contrast corresponds to contrast；**

**brightness corresponds to brightness.**