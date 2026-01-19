# OK3568 4.19.206 Buildroot  Weston Desktop Reference Link

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright  

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

# Weston Desktop Reference Link

[https://www.mankier.com/5/weston.ini#Output\_Section](https://www.mankier.com/5/weston.ini#Output_Section)

1. View Display Devices

Enter the command ls /sys/class/drm. Taking MIPI display as an example.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646158703-17fc4345-6ac8-4532-9add-4b8ea7cb3f10.png)

2. Adjust Screen Orientation

Modify the file /etc/xdg/weston/weston.ini:

<font style="color:#FF0000;">\[output]</font>

name=DSI-1       // Corresponds to the list above, remove "card0"

<font style="color:#FF0000;">transform=0/90/180/270</font> //Rotation angle

Note: For SDK versions with Linux kernel 5.10 and above, use transform = rotate-90 / rotate-180 / rotate-270.

3. Supported Resolutions

View the supported resolutions for the display adapter, using MIPI display as an example.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646158897-4875049f-3301-4ac1-a57b-fdb9288db427.png)

4. Configure Resolution

<font style="color:#FF0000;">\[output]</font>

name=DSI-1       // Corresponds to the list above, remove "card0"

mode=1024x600    // Must be a valid resolution supported by the screen

scale=2          // Must be an integer multiple

5. Remove Grid Background

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646159329-9b4d7271-beb5-4fcb-bf0f-fbad2ac4a869.png)

<font style="color:#FF0000;">\[shell]</font>

panel-position=none        // Remove the panel toolbar

background-color=0x00FFFFFF   // Set background to fully transparent