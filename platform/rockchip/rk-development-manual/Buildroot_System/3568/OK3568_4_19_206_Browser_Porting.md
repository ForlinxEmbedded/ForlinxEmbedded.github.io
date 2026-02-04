# OK3568 4.19.206 Browser Porting

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.  

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 08/23/2024| V1.0| Initial Version|

## Browser Porting

After testing, the default demo browser exhibits lagging and high CPU usage.

Actual testing revealed that the high CPU usage when opening web pages is related to the rendering size of web files. Due to hardware limitations, performance cannot be significantly improved through software optimization.

**Adding Method**

Written using qwidget, you can try to use the quick below to make a browser, and the performance will be improved.

[quicknanobrowser.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2025/zip/45781369/1739869631584-52533393-9cf4-407d-866e-c65455681fa9.zip)

The source code of this browser can be compiled as a regular Qt program by following the instructions in the compilation manual.

**Note: Opening the source code in QtCreator may trigger syntax errors due to differences in syntax usage between versions, but this does not affect the actual compilation process.**![](https://cdn.nlark.com/yuque/0/2024/png/45471259/1724375293123-5b336fbd-a4b8-4565-88b2-33f39d175e50.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)