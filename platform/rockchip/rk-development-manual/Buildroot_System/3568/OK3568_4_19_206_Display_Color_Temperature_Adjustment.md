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

![Image](./images/OK3568_4_19_206_Display_Color_Temperature_Adjustment/1719646695507_6c2a36dd_3fa4_4b60_aa30_04ad58eb3a15.png)

hue corresponds to color tone

saturation corresponds to saturation

contrast corresponds to contrast

brightness corresponds to brightness

You can use the modetest command in the terminal to test appropriate values:

1. Check the display ID

For example, if an LVDS display is connected, its ID may be 152.

![Image](./images/OK3568_4_19_206_Display_Color_Temperature_Adjustment/1719646695682_fa62a025_f659_4dd1_ae03_386b36a3d26e.png)

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