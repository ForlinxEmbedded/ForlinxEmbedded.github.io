# OK3568 4.19.206 Buildroot Removing Desktop Forlinx Icon

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Removing Desktop Forlinx Icon

![Image](./images/OK3568_4_19_206_Buildroot_Removing_Desktop_Forlinx_Icon/1719646148792_510d1119_3f69_48f8_8b1d_c9e8b8fedadc.png)

/OK3568-linux-source/buildroot/board/rockchip/ok3568/fs-overlay/usr/share/matrix-gui-2.0/menubar.php

Commnet out//echo "<img id = 'logo_img' src= 'images/tex.png'>";

![Image](./images/OK3568_4_19_206_Buildroot_Removing_Desktop_Forlinx_Icon/1719646149033_0c3d31fc_d9ff_4f0b_840a_ceec12198db8.png)

Then re-compile the source code of the./build. sh, which will take effect permanently.