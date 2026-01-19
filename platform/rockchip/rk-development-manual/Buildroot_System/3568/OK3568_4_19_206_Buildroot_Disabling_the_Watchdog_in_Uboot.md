# OK3568 4.19.206 Buildroot Disabling the Watchdog in Uboot

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright  

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Disabling the Watchdog in Uboot

Modify the file at the following path:

![Image](./images/OK3568_4_19_206_Buildroot_Disabling_the_Watchdog_in_Uboot/1719646875160_a2d1f3f6_4634_4b96_a28b_5bfb20ca57cf.png)

Comment out the watchdog countdown code.

![Image](./images/OK3568_4_19_206_Buildroot_Disabling_the_Watchdog_in_Uboot/1719646875356_c27aa631_9990_4017_8481_298524e1c987.png)

Save the changes and compile U-Boot separately by executing ./build.sh uboot.

![Image](./images/OK3568_4_19_206_Buildroot_Disabling_the_Watchdog_in_Uboot/1719646875556_16ee68fc_7131_49ab_ae57_d035115040da.png)

After compilation, an uboot.img file will be generated in the u-boot folder.

![Image](./images/OK3568_4_19_206_Buildroot_Disabling_the_Watchdog_in_Uboot/1719646875733_b1459959_2d0f_4a2f_ab22_f289a4f74342.png)

Then, flash the uboot.img file to the development board individually. The flashing address is 0x00004000. After connecting the flashing tool, click on the device partition table, and the U-Boot flashing address will be automatically loaded. Then, click on the small box next to "uboot", select the uboot.img file compiled above, and click execute to proceed with the flashing.

![Image](./images/OK3568_4_19_206_Buildroot_Disabling_the_Watchdog_in_Uboot/1719646875932_73ef6226_cb53_42b4_9d80_164a2a43b145.png)