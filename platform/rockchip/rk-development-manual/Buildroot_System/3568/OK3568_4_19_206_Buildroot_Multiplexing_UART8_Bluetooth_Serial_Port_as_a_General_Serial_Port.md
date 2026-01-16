# OK3568 4.19.206 Buildroot Multiplexing UART8 Bluetooth Serial Port as a General Serial Port

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright   

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Multiplexing UART8 Bluetooth Serial Port as a General Serial Port

Remove the executable permission of the /etc/init.d/S97BT script.

Execute the command: chmod -x /etc/init.d/S97BT.

Execute the command: sync for synchronization.

Execute the command: reboot to restart the development board.