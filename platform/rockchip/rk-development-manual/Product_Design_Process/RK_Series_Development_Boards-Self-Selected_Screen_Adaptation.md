# RK Series Development Boards -- Self-Selected Screen Adaptation

Document classification: □ Top secret □ Secret □ Internal information ■ Open

##  Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This article describes the methods and principles for screen adaptation using various interfaces of Forlinx’s RK series products. By referring to it, you can gain insights into considerations and reference methods for adapting self-selected screens.

Revision History

| **Date**| **Version**| **Revision History**|
|----------|----------|----------|
| 17/10/2025| V1.0| Initial Version|

## RK Platform Display Subsystem

RK Platform Display Subsystem. 
DSS (Display SubSystem).
RK platform display subsystem version:
VOP 1.0 and VOP 2.0. VOP.

### VOP 1.0

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760666471129_bf3cc013_dc41_4bae_8dab_ea3ff698ec31.png)

### VOP 2.0

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760666487387_b785110d_5c82_4149_a5e7_428cdbe9f53c.png)

The key difference between the two VOP generations lies in whether the display panel is managed by VOP or by VP.   
The adaptation for self-selected screen only requires changes to the display parameters at the outermost layer of the display subsystem (DSS), particularly in the panel section.

## Display Parameter Modifications

Reference Document:

User documentation source code /docs/cn/Common/DISPLAY/Rockchip\_DRM\_Panel\_Porting\_Guide

### Display Parameters

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760667560817_0dfa2283_f345_4277_ad4d_cc6b641a398c.png)

### Display Parameter Acquisition and Modification

| Common Description| Device Tree Property| Meaning/Source|
|----------|----------|----------|
| Synchronization Signals| hsync / vsync| Display parameters / Panel manual|
| 后肩| hback / vback| Display parameters / Panel manual|
| Resolution| hactive / vactive| Display parameters / Panel manual|
| 前肩| hfront / vfront| Display parameters / Panel manual|
| Signal| bus-format| Display parameters / Panel manual|
| Initialisation Sequence| panel-init-sequence| Required only for MIPI screens / to be provided by the screen manufacturer|
| Clock| clock-frequency| Pixel Clock (PCLK) / Display Panel Manual|

These display parameters have corresponding entries in the device tree framework. After obtaining the parameters according to their sources, filling them into the appropriate locations completes the display setup.

Below describes the locations for entering parameters for different interfaces and important considerations when dealing with various interfaces.

### RGB Interface

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760667420431_5fbb9910_60c9_4db3_ad14_72e49066979b.png)

#### RGB Signal Format Switching:

The file drivers/gpu/drm/rockchip/rockchip\_drm\_vop2.c defines the following optional RGB signal formats: RGB565, RGB666 and RGB888.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668122283_afe158f4_1af4_4170_a812_ef5656e1f9b5.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668125785_737cef29_a4fa_4049_a6fc_aa6b9b66f3e0.png)

### RGB Pin Connection Mapping

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1762563956496_98512ec7_2861_426c_8424_f57bf0390566.png)

### LVDS Interface

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668179266_25d120d2_e990_4468_bc2c_c5e93d7a304a.png)

### LVDS Signal Format Switching:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668235626_26b07741_a7a8_447b_94eb_f7e2b0718051.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668239702_943cde95_df15_48c6_937e_d93d7844d743.png)

The property 1X7X3 indicates three pairs of data lanes, typically referred to as Single-Six/Dual-Six signal format screens.

The property 1X7X4 indicates four pairs of data lanes, typically referred to as Single-Eight/Dual-Eight signal format screens.

### LVDS Single/Dual Channel Switching:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668510093_21c4a27d_1164_4714_82a2_de32d6278ab3.png)

Configure the output channel mode under the Video Output Controller (DSS connector-level node — refer to display subsystem diagrams for questions).

Default is single channel; add `dual-channel;` to switch to dual channel.

### MIPI Interface

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668687578_db7637cf_1520_4fb9_afd8_8f8683f164b1.png)

### MIPI Initialization Sequence Acquisition:

Screen manufacturers generally provide an initialization sequence for MIPI screens, similar to the example below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760668981866_4fc49c08_5f13_43a8_85cd_f2dd8643a9ce.png)

Please convert this sequence into the format reserved in Rockchip’s display subsystem.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760669245934_18846b76_5dba_4a6a_a327_2f4ef49a0737.png)

### Initialization Sequence Conversion Rules:

Example: 39 00 04 ff 98 81 03

\| \| \| \| Parameter Parameter Parameter

\| \| \| Command

\| \| Length

\| Delay

Command Type

Command types include the following three:

39: Long packet (parameters > 2)

15: Short packet (parameters ≤ 2)

05: Issue DCS command only (no parameters)

`05 78 01 11` indicates a delay of 0x78=120ms before issuing command 11.

Use VSCode or Notepad++ to achieve the formatting effect shown in the diagram, using the shortcut `shift+alt+mouse click`

#### ![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760670229643_92806468_937e_4e65_abd1_ec487828d373.gif)

### MIPI Single/Dual Channel Switching:

Modify the rockchip, lane-rate property value in the device tree. A value greater than 4 represents the MIPI signal mode/lanes. Change it directly to match the screen’s required number of lanes.

**PS: During actual screen debugging, the provided screen documentation may not be entirely accurate. For example, when the screen displays abnormally (color distortion, misalignment), the normal approach is to adjust the pixel format and fine-tune the clock. Consider an alternative perspective: during initial debugging, if the screen’s clock frequency is uncertain or its range is unknown, but the display is basically functional, then the clock setting is likely approximately correct. If abnormal screen display persists and the normal adjustment approach yields insignificant results, try adjusting the screen’s frame rate: e.g., from 60fps to 30fps, or other values. The main idea is to make a broad adjustment to the clock frequency.**

### HDMI \& eDP Interface:

HDMI \& eDP typically auto-detect EDID, requiring no manual modification of display parameters. 

Of course, there are also methods for setting a fixed resolution   
Reference links for setting a fixed HDMI resolution:

[OK3568 4.19.206 Buildroot HDMI Resolution](https://forlinx-book.yuque.com/rh74yu/rkword/gv7ion3ukip11bwg)

eDP Fixed Resolution Method Reference:

 [rockchip\_drm\_integration\_helper-zh.pdf](https://forlinx-book.yuque.com/attachments/yuque/0/2025/pdf/45387297/1760672645757-29f133fe-3347-4da3-8a77-48991265dc4b.pdf) page 34.

Use the display-timings structure, writing the timing directly into the DTS file.

After successfully setting a fixed resolution via the device tree, the following print will appear during the U-Boot boot phase: `using display timing dts`

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1760672621457_1bb9a20f_589a_4032_9697_7e5843c0fb19.png)

### Display Issue Debugging Methods:

1. `cat /sys/kernel/debug/dri/0/summary` Check the VP status to see if it is outputting.
2. Under the`/sys/class/drm/`, force output the controller status, or view the connection status and resolution information recognized by the controller.

### Touch Adaptation

Touch-related devices are distinguished by their interface and type. USB Touch / I2C Touch: Different interfaces correspond to different touch controller chips. Resistive Touch / Capacitive Touch: Different types offer varying precision and sensitivity.

USB touch devices are generally plug-and-play, requiring no driver installation.

I2C touch follows the standard Linux I2C chip adaptation process:   
A. Add a description of the I2C chip to the device tree.   
![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1762585780199_e0c82297_6240_4b9a_93ad_6c2ca95a7837.png)  
B. Add the corresponding driver to the kernel and compile it into the kernel.  
![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Product_Design_Process/RK_Series_Development_Boards-Self-Selected_Screen_Adaptation/1762585860921_2d76aa96_9d16_49db_9a01_98407ad8a603.png)

Capacitive touch does not require calibration; touch orientation is specified via driver configuration.

Resistive touch requires calibration; touch orientation is configured through the calibration process.

### Touch Calibration

Only resistive touch requires calibration.

## Potential Issues:

### Q: MIPI screen shows no backlight at all.

1. Confirm if the initialization sequence is being sent correctly. You can communicate with the screen vendor to obtain a gamma test sequence. The screen should display as long as the test sequence is sent.
2. Confirm the MIPI signal pin order is correct. The MIPI initialization sequence is only sent via the DSI0 differential pair. If connected incorrectly, the initialization sequence cannot be sent.

### Q: MIPI screen displays the logo and then the image disappears.

1. Confirm if the MIPI screen’s reset pin level changes during startup. Issues have been encountered where, due to pin definition conflicts, after the system sends the initialization sequence during boot, the screen’s reset pin is pulled low, causing the screen to reset and requiring re-sending of the sequence. However, since the system has already booted, this leads to only the logo being displayed, with no subsequent system display;
2. Confirm the screen parameters. Feedback has been received that incorrect screen parameters can cause the image to slowly disappear.

### Q: eDP displays intermittently (probability issue).

[OK3568 5.10.160 Uboot eDP Repeated Training (eDP Intermittent No Display)](https://forlinx-book.yuque.com/rh74yu/rkword/bx7bw0z6h6rlnhar)