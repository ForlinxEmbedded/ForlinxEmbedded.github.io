# Screen Saver Configuration (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
This method applies to the 2601 Forlinx Desktop 20.04 system, R3 version. 
Use this method to disable the screen saver, change its start time, set it to a blank screen, and more.

## Revision History
| **Date**    | **Manual Version**    | **Revision History** |
| --- | --- | --- |
| 20/06/2026 | V1.0    | Initial release    |

## 1. Introduction
On the 2601 Forlinx Desktop 20.04 system, by default the screen saver starts after ten minutes of no input.

The screen saver itself uses significant CPU and memory. If you do not want to use it, or do not want the system to start it, configure it as described here.

## 2. Modification Method
First, open the screen saver settings by clicking the Start button in the lower-left corner -> Preferences -> Screensaver

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/001.jpg)

### 2.1 Disabling the Screen Saver
After a moment, the screen saver settings panel opens. Click the position shown below and select a mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/002.png)

Select "Disable Screen Saver" shown below, then close the window. The screen saver will no longer be enabled:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/003.png)

### 2.2 Using a Blank Black Screen Saver Only
If you need a screen saver but do not want it to consume resources, select "Blank Screen Only" shown below in the settings panel to use a solid black screen:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/004.png)

### 2.3 Changing the Screen Saver Start Time and Cycle Time
This setting specifies how long after no input the screen saver starts:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/005.png)

This setting specifies how long after the screen saver is enabled before it switches programs:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Screen_Saver_Configuration_FlDesktop20.04-EN/006.png)

### 2.4 Applying the Change in the Image
The screen saver configuration file is stored locally in the file system as text:

```plain
/backup/home/forlinx/.xscreensaver
```

For batch changes, so that all 2601 devices flashed with a given image use the same screen saver configuration, save the configuration file from a modified 2601 Forlinx Desktop 20.04 system, then include it in a new image by modifying the firmware.

For the firmware modification procedure, refer to the link below:

[FCU2601 4.19.206 Forlinx Desktop20.04 Firmware Modification Method](https://forlinx-book.yuque.com/rh74yu/rkword/tq7wp2vh4gtza2p8)

## 3. Verification Method
Set the screen saver start time to the minimum of 1 minute, then do not touch the mouse or keyboard. Wait and confirm that the screen saver starts as configured.

## 4. FAQ
Currently, the screen saver on 2601 Ubuntu cannot be changed directly to use images. These screen savers are essentially executable programs; when the set time is reached, a command launches those programs.

If you have special requirements, you can develop your own program to display an image and exit when the mouse is moved.
