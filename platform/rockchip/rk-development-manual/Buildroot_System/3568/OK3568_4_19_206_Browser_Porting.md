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

**Note: Opening the source code in QtCreator may trigger syntax errors due to differences in syntax usage between versions, but this does not affect the actual compilation process.**![Image](./images/OK3568_4_19_206_Browser_Porting/1724375293123_5b336fbd_a4b8_4565_88b2_33f39d175e50.png)