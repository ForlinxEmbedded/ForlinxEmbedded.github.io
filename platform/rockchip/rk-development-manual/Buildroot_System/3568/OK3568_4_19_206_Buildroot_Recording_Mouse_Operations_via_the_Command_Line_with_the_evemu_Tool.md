# OK3568 4.19.206 Buildroot: Recording Mouse Operations via the Command Line with the evemu Tool (for Waking Up the Screen via the Command Line)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

Usage scenario: After setting the screen to turn off automatically after a certain period in Weston’s configuration file, if you want to turn the screen back on, you need to touch the screen or move the mouse. If the screen is off and there is no physical mouse to move and wake it up, or if you want to remotely turn on the off - screen, you can use the evemu tool to record a mouse movement event to simulate the operation of a real physical mouse and wake up the screen. In this way, remote wake - up can be achieved.

The evemu tool is a utility for Linux systems, used to simulate, record, and process events of input devices (such as keyboards, mice, touchscreens, etc.). It is part of the libevdev library, allowing developers and system administrators to simulate input events without physical input devices or record input events from actual devices.

Go to the graphical configuration interface of the file system in the source code and select the evemu tool as “y”. Then re - compile the file system and burn rootfs.ext2 into the development board.

![](images/1731900868_20123.png)

![](images/1731900868_20124.png)

Use the “evemu - record” command to record a mouse movement operation, and use “evemu - play” to play back the recorded movement.

```shell
[root@ok3568:/]$ evemu-record  /dev/input/event1 > 2myevent
[root@ok3568:/]$ evemu-play /dev/input/event1 < 2myevent
```

Using the “evemu - play” command can wake up the screen.