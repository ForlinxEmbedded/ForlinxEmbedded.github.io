## OK3568 4.19.206 Buildroot Disabling the Watchdog in Uboot

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

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646875160-a2d1f3f6-4634-4b96-a28b-5bfb20ca57cf.png)

Comment out the watchdog countdown code.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646875356-c27aa631-9990-4017-8481-298524e1c987.png)

Save the changes and compile U-Boot separately by executing ./build.sh uboot.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646875556-16ee68fc-7131-49ab-ae57-d035115040da.png)

After compilation, an uboot.img file will be generated in the u-boot folder.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646875733-b1459959-2d0f-4a2f-ab22-f289a4f74342.png)

Then, flash the uboot.img file to the development board individually. The flashing address is 0x00004000. After connecting the flashing tool, click on the device partition table, and the U-Boot flashing address will be automatically loaded. Then, click on the small box next to "uboot", select the uboot.img file compiled above, and click execute to proceed with the flashing.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646875932-73ef6226-cb53-42b4-9d80-164a2a43b145.png)