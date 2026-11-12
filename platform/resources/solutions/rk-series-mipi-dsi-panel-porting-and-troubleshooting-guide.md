# RK Series Development Board — MIPI DSI Panel Porting and Troubleshooting Guide

Document classification: □ Top secret □ Secret □ Internal information ■ Open

##  Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This document mainly describes how to configure a MIPI DSI LCD panel on RK series development boards, together with the debugging approach and common troubleshooting methods.

Rather than documenting the device tree changes for one specific panel, this document focuses on the problems most frequently encountered while porting a MIPI panel and provides a consistent troubleshooting workflow.

Applies to the following scenarios:

+ Replacing the panel with a third-party MIPI DSI screen;
+ The screen does not display anything at all;
+ The screen has backlight but no image;
+ The U-Boot logo is displayed, but the screen goes black after Linux boots;
+ The screen shows garbled output, color cast, misalignment, jitter, or flicker;
+ The display size or orientation is abnormal;
+ The MIPI DSI initialization sequence cannot be executed properly;
+ The screen occasionally fails to light up;
+ You need to determine whether the problem lies in the hardware, the device tree, the initialization sequence, or the display timing.

## 1. MIPI DSI Display Link Overview

### 1.1 MIPI Terminology

| **Abbreviation** | **Full Name** | **Description** |
| --- | --- | --- |
| MIPI-DSI | MIPI Display Serial Interface | High-speed serial interface standard developed by the MIPI Alliance, dedicated to connecting processors and display devices |
| DCS | Display Command Set | A standardized set of display commands defined by MIPI-DSI, used to control the display module |
| DBI | Display Bus Interface | Encapsulates DSI Command Mode as the control IO layer of esp-lcd |
| DPI | Display Pixel Interface | Encapsulates DSI Video Mode as the data panel layer of esp-lcd |
| HS | High-Speed Mode | High-speed mode, mainly used to transmit display frame data, typically 80 Mbps ~ 1.5 Gbps per lane |
| LP | Low-Power Mode | Low-power mode, usually used to send DCS commands or control the link state, max rate about 10 MHz |
| HS-TX/HS-RX | High-Speed Transmitter/Receiver | High-speed transmitter / receiver |
| LP-TX/LP-RX | Low-Power Transmitter/Receiver | Low-power transmitter / receiver |
| LP-CD | Low-Power Contention Detector | Low-power contention detector |
| BTA | Bus Turnaround | Bus turnaround, used for bidirectional communication |
| ULPS | Ultra Low Power State | Ultra-low-power state, used to minimize power consumption |
| LPDT | Low Power Data Transmission | Low-power data transmission mode |
| ESC | Escape Mode | Escape mode, the low-power operating mode of MIPI-DSI |
| SoT | Start of Transmission | Start-of-transmission signal |
| EoT | End of Transmission | End-of-transmission signal |
| DI | Data Identifier | Data identifier, used to identify the packet type |
| ECC | Error Correction Code | Error detection code, used for data integrity checking |
| DT | Data Type | Data type, used to identify the pixel data format |
| HSYNC | Horizontal Synchronization | Horizontal synchronization signal |
| VSYNC | Vertical Synchronization | Vertical synchronization signal |
| DMA | Direct Memory Access | Direct memory access, used for efficient data transfer |
| PSRAM | Pseudo Static RAM | Pseudo-static random access memory |
| RGB565 | Red Green Blue 565 | 16-bit color format: 5 bits red, 6 bits green, 5 bits blue |
| RGB666 | Red Green Blue 666 | 18-bit color format: 6 bits each for red, green and blue |
| RGB888 | Red Green Blue 888 | 24-bit color format: 8 bits each for red, green and blue |

### 1.2 MIPI Interface Definition

The MIPI protocol is in fact a family of interface protocols, covering LCD, camera and other peripherals. The MIPI interface used for LCD panels is formally called DSI — Display Serial Interface. It is a serial interface for display modules, derived from the MIPI protocol and compatible with DPI (Display Pixel Interface), DBI (Display Bus Interface) and DCS (Display Command Set). Compared with a conventional RGB interface, DSI has the advantages of lower cost and higher speed.

The figure below shows its interface definition:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/rk-series-mipi-dsi-panel-porting-and-troubleshooting-guide/mipi_dsi_interface_definition_1794467329836.png)

### 1.3 Related Configuration

In practice, porting usually requires the following configuration items:

+ MIPI DSI controller;
+ Panel node;
+ Number of DSI lanes;
+ DSI data format;
+ DSI working mode;
+ Panel initialization sequence;
+ Display timing;
+ Reset / enable GPIO;
+ Backlight;
+ Routing from VOP/VP to DSI.

The device tree below takes the RK3568 platform as an example:

```plain
&dsi1 {
	status = "disabled";
	//rockchip,lane-rate = <1000>;
	dsi1_panel: panel@0 {
		status = "okay";
		compatible = "simple-panel-dsi";
		reg = <0>;
		reset-delay-ms = <60>;
		enable-delay-ms = <60>;
		prepare-delay-ms = <60>;
		unprepare-delay-ms = <60>;
		disable-delay-ms = <60>;
		dsi,flags = <(MIPI_DSI_MODE_VIDEO | MIPI_DSI_MODE_VIDEO_BURST |
			MIPI_DSI_MODE_LPM | MIPI_DSI_MODE_EOT_PACKET)>;
		dsi,format = <MIPI_DSI_FMT_RGB888>;
		dsi,lanes  = <4>;
		panel-init-sequence = [
		];

		panel-exit-sequence = [
		];

		panel-width-mm = <68>;
        panel-height-mm = <121>;
        backlight = <&dsi1_backlight>;
		enable-gpios = <&gpio0 RK_PB0 GPIO_ACTIVE_HIGH>;

        display-timings {
			native-mode = <&panel7_1024x600>;
            panel7_1024x600: timings {
                hback-porch     = <48>;
                hfront-porch    = <40>;
                hactive                 = <1024>;
                hsync-len               = <48>;
                vback-porch     = <48>;
                vfront-porch    = <40>;
                vactive         = <600>;
                vsync-len       = <4>;
                clock-frequency = <45000000>;
                vsync-active    = <0>;
                hsync-active    = <0>;
                de-active       = <0>;
                pixelclk-active = <0>;
            };
        };

		ports {
			#address-cells = <1>;
			#size-cells = <0>;

			port@0 {
				reg = <0>;
				panel_in_dsi: endpoint {
					remote-endpoint = <&dsi_out_panel>;
				};
			};
		};
	};

	ports {
		#address-cells = <1>;
		#size-cells = <0>;

		port@1 {
			reg = <1>;
			dsi_out_panel: endpoint {
				remote-endpoint = <&panel_in_dsi>;
			};
		};
	};
};
```

**Note: Node names may differ between platforms. Always follow the existing device tree in the BSP of the corresponding product.**

## 2. Panel Porting

Before porting, you must obtain the panel documentation from the panel vendor. Do not start tuning the panel with nothing but the "resolution" and "initialization sequence" in hand. At a minimum, confirm the following information with the vendor.

### 2.1 Basic Display Parameters

```plain
Resolution:
HACTIVE =
VACTIVE =

HSYNC =
HBP =
HFP =

VSYNC =
VBP =
VFP =

Pixel Clock =
Frame Rate =
```

Where:

```plain
HTOTAL = HACTIVE + HFP + HBP + HSYNC

VTOTAL = VACTIVE + VFP + VBP + VSYNC
```

The theoretical pixel clock can be approximated as:

```plain
Pixel Clock = HTOTAL × VTOTAL × FPS
```

For example:

```plain
HACTIVE = 800
HFP     = 40
HBP     = 40
HSYNC   = 20

VACTIVE = 1280
VFP     = 20
VBP     = 20
VSYNC   = 10
FPS     = 60
```

Then:

```plain
HTOTAL = 900
VTOTAL = 1330

Pixel Clock
≈ 900 × 1330 × 60
≈ 71.82 MHz
```

The device tree can be configured close to:

```plain
clock-frequency = <72000000>;
```

### 2.2 Number of MIPI Lanes

Confirm that the panel uses:

```plain
1 Lane
2 Lane
3 Lane
4 Lane
Dual MIPI DSI
```

Corresponding device tree:

```plain
dsi,lanes = <4>;
```

**Note:**

- **The number of lanes must not be guessed from the number of connector pins — always follow the panel datasheet and schematic;**
- **On some RK platforms, if `dsi,lanes` is larger than the maximum number of lanes supported by a single DSI host, it may also denote dual-channel MIPI; in that case confirm the specific implementation of the chip and the BSP.**

### 2.3 Pixel Format

Common formats:

```plain
RGB565
RGB666
RGB666 Packed
RGB888
```

Typical configuration:

```plain
dsi,format = <MIPI_DSI_FMT_RGB888>;
```

If the pixel format is configured incorrectly, the usual symptoms include:

+ Abnormal colors;
+ Overall color cast;
+ Abnormal RGB order;
+ Severely misaligned image;
+ A recognizable image with completely wrong colors.

### 2.4 MIPI DSI Initialization Sequence

The biggest difference between most MIPI DSI LCDs and RGB or LVDS panels is:

After power-up the panel usually cannot display anything directly; initialization commands must first be sent to the panel's internal driver IC over DSI.

The initialization commands usually take care of:

+ Power Setting;
+ Gamma;
+ VCOM;
+ GIP;
+ Pixel Format;
+ Scan Direction;
+ Porch;
+ Display Mode;
+ Sleep Out;
+ Display On.

Therefore, a normal MIPI signal does not necessarily mean that the panel can display: a failed panel initialization also results in a black screen.

#### 2.4.1 Panel-init-sequence Format

The common initialization sequence format in RK BSPs:

```plain
data type  delay  data length  data content
```

For example:

```plain
39 00 04 FF 98 81 03
```

Meaning:

```plain
39    DSI data type
00    Delay after the current command is executed
04    Length of the following data
FF    command
98    parameter
81    parameter
03    parameter
```

In addition:

```plain
05 78 01 11
```

means:

```plain
05    DCS Short Write
78    0x78 = 120 ms
01    Data length 1
11    DCS Sleep Out
```

That is:

```plain
Send 0x11
↓
Wait 120 ms
↓
Send the next command
```

#### 2.4.2 Common MIPI DSI Data Types

Generic Write

```plain
0x03    Generic Short Write, no parameter
0x13    Generic Short Write, 1 parameter
0x23    Generic Short Write, 2 parameters
0x29    Generic Long Write
```

DCS Write

```plain
0x05    DCS Short Write, no parameter
0x15    DCS Short Write, 1 parameter
0x39    DCS Long Write
```

Different BSP versions may support additional data types, so the panel driver implementation in the current SDK is always the authoritative reference.

#### 2.4.3 The Most Common Initialization Sequence Problems

For example, the vendor provides:

```plain
SSD_SEND(0xFF, 0x98, 0x81, 0x03);
```

After conversion it should be:

```plain
39 00 04 FF 98 81 03
```

where:

```plain
04
```

means that there are 4 bytes in total after it:

```plain
FF
98
81
03
```

If it is mistakenly written as:

```plain
39 00 03 FF 98 81 03
```

the parsing of the subsequent initialization sequence may become misaligned. Therefore, once the initialization sequence has been converted, check carefully that:

```plain
the declared data length of each command = the number of data bytes actually following that command
```

#### 2.4.4 Abnormal Sleep Out / Display On Delays

The end of almost every MIPI panel initialization contains:

```plain
0x11  Sleep Out
0x29  Display On
```

A common form:

```plain
05 78 01 11
05 14 01 29
```

That is:

```plain
Sleep Out
wait about 120 ms

Display On
wait about 20 ms
```

If the vendor code contains:

```plain
Write(0x11);
Delay(120);

Write(0x29);
Delay(20);
```

do not convert only the commands and lose the delays during the conversion.

Otherwise the following may occur:

+ A completely black screen;
+ The screen lights up only occasionally;
+ The screen does not light up on a cold boot;
+ Everything is normal after a warm reboot;
+ The probability of a successful boot differs on every boot.

For this kind of intermittent problem, check the delays between the initialization commands first.

## 3. Troubleshooting Approach

**Problem 1: The MIPI screen does not light up at all**

When the screen does not light up, do not keep modifying the initialization sequence over and over; troubleshoot layer by layer instead.

The first thing to determine is whether it is "no image on the screen" or "no backlight at all".

How to check: look at the edge of the screen, or inspect it in a dark environment.

If there is no backlight at all, check the following first:

```plain
LCD power
Backlight power
BL_EN
PWM
Backlight driver IC
```

Check:

```plain
ls /sys/class/backlight/
```

For example:

```plain
cat /sys/class/backlight/backlight/brightness
cat /sys/class/backlight/backlight/max_brightness
```

You can also change it temporarily:

```plain
echo 200 > /sys/class/backlight/backlight/brightness
```

The exact node names depend on the actual platform.

**Problem 2: Backlight is on but there is no image at all**

In this case, check in particular:

```plain
Panel Reset
Initialization sequence
MIPI DSI data
MIPI Lane
Display routing
Timing
```

Check the initialization sequence first; you can also ask an AI assistant to help check whether something is written incorrectly.

The recommended troubleshooting order is:

```plain
Reset
 ↓
Initialization commands
 ↓
DSI status
 ↓
VOP/VP status
 ↓
Timing
```

rather than changing the Pixel Clock at the very beginning.

**Problem 3: Abnormal reset pin**

MIPI panels are usually fairly sensitive to the reset timing.

The device tree may contain:

```plain
reset-gpios = <&gpioX RK_PXX GPIO_ACTIVE_LOW>;
```

or:

```plain
enable-gpios = <&gpioX RK_PXX GPIO_ACTIVE_HIGH>;
```

You must confirm that:

- The GPIO number is correct;
- The active-high/active-low polarity is correct;
- The GPIO is not muxed for another function;
- It is not taken over again by another driver during Linux boot.

You can probe the RESET pin directly with an oscilloscope.

A normal power-up sequence usually looks like:

```plain
Power ON
   ↓
RESET pulled low
   ↓
Delay
   ↓
RESET pulled high
   ↓
Delay
   ↓
Send initialization sequence
```

The exact timing is defined by the panel IC datasheet.

### 3.1 Other Common Issues

- **Garbled Screen**

Check in particular:

```plain
Pixel Clock
MIPI Lane Rate
Number of MIPI Lanes
PHY signal quality
Timing
```

If the image is stable but the colors are wrong,

check in particular:

```plain
dsi,format
Panel Pixel Format
Pixel Format setting in the initialization sequence
```

For example:

```plain
dsi,format = <MIPI_DSI_FMT_RGB888>;
```

but the panel initialization registers are set to RGB565 — this may cause display anomalies.

- **Color Cast**

Common symptoms:

```plain
Red appears blue
Blue appears red
Green is abnormal
Overall colors are distorted
```

It is recommended to display solid-color test images first:

```plain
Solid red
Solid green
Solid blue
Solid white
Solid black
```

and determine whether it is:

```plain
An RGB order problem
A Pixel Format problem
A problem with the panel's internal register settings
```

If only the colors are wrong and the geometric position is perfectly normal:

check the color format first; do not adjust the Timing first.

**Color Cast Issue Case 1**

This is how the original image appears:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/rk-series-mipi-dsi-panel-porting-and-troubleshooting-guide/image_1794465282136_1794467367696.png)

And this is the display effect presented on the customer’s device:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/rk-series-mipi-dsi-panel-porting-and-troubleshooting-guide/image_1794465282170_1794467384789.png)

When encountering this scenario, check if there are extra hardware configuration pins on the display side. This phenomenon occurs because the display IC has a pin that sets the scan direction of its internal registers. The display effect can be corrected by changing the high/low level state of this pin.

- **Image Misalignment**

Horizontal misalignment, for example:

```plain
An extra column on the left
The right side is cut off
The whole image is shifted to the left
The whole image is shifted to the right
```

Check in particular:

```plain
HFP
HBP
HSYNC
HACTIVE
```

Rule of thumb:

```plain
Horizontal position problem
→ adjust the horizontal porch first
```

It is not recommended to adjust the Pixel Clock first.

Vertical misalignment, for example:

```plain
An abnormal area at the top
Missing content at the bottom
The whole image is shifted upwards
The whole image is shifted downwards
```

Check in particular:

```plain
VFP
VBP
VSYNC
VACTIVE
```

Rule of thumb:

```plain
Vertical position problem
→ adjust the vertical porch first
```

- **Periodic Screen Flicker**

If the image displays normally but flickers periodically,

check in particular:

```plain
Pixel Clock
Lane Rate
PHY
Power supply
Backlight
ESD
Timing
```

If the flicker is accompanied by:

```plain
Image tearing
Horizontal stripes
Image jitter
```

suspect the display timing or the MIPI PHY parameters first.

If only the brightness flickers while the image content does not change noticeably, check the following first:

```plain
Backlight PWM
LCD power
BL_EN
```
