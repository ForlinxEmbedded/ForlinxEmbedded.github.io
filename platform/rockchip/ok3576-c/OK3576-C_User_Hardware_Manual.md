# User's Hardware Manual\_V1.6

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware troubleshooting methods, please refer to the “FET3576-C Pin Multiplexing Reference Table” and the “FET3576-C Design Guide” provided by Forlinx.

There are four chapters:

+ Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;
+ Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;
+ Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;
+ Chapter 4. describes the product's power consumption and other considerations.

## Application Scope

This hardware manual applies to the OK3576-C\& OK3576-C21 Forlinx Development Board.

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|----------|:----------:|:----------:|:----------:|----------|
| 06/05/2026| V1.6| FET3576-C V1.3/FET3576-C2 V1.0| **V1.4**| Adding FET3576-C2 SoM description.|
| 01/12/2025| V1.5| V1.3| V1.4| Adding SoM power management upgrade solution: Expanding the voltage input range from 12V to a wide voltage 5V-13V, <br />refer PCN20251030-063 for the details and updating the voltage input parameters of the SoM in the section “2. FET3576 - C SoM Description (5V-13V）”. |
| 21/11/2025| V1.4| V1.3| V1.4| Adding Section 2.8.2 "SoM Vibration Resistance Design Guide”|
| 07/05/2025| V1.3| V1.3| V1.4| 1\. Carrier board design updating: (Refer to the latest schematic for details; <br />- Changing the P2\_63 pin of the carrier board connector from GND to floating for FET3588 - C SoM compatibility;<br />- Adopting independent power supply for the carrier board WIFI module to enable WIFI\&BT sleep - wake function;<br />- Rectifying the USB wiring sequence of female USB3.0\_A sockets P28 and P29;<br />- Adding an ESD tube to the key signal line to enhance electrostatic protection;<br />- Adjusting the position of series magnetic beads for the 2.8V power supply of 5 x CSI cameras to optimize interference suppression from autofocus motors;<br />- Leading out a PMIC\_VDC signal from the P3\_10 pin of the SoM connector to enable mode - switching between power - on and key - boot for the SoM;<br />- Reserving a terminal block for the PWRON\_L signal to facilitate user expansion.<br />2\. Updating power consumption parameters of the Android system. |
| 09/10/2024| V1.2| V1.1| V1.1| Updating Linux system power consumption parameter.|
| 24/07/2024| V1.1| V1.1| V1.1 and above| 1\. Correcting the description of the SoM pin functions;<br />2\. Correcting the interface adaptation of the carrier board materials;<br />3\. Updating the boot configuration content; 4. Updating the content of the system initialization configuration signals;<br />5\. Updating the content related to the JTAG interface;<br />6\. Updating the interface multiplexing content of USB/SATA3.1/PCIE2.1/video input - output interfaces. |
| 07/05/2024| V1.0| V1.0| V1.0| OK3576-C User’s Hardware Manual Initial Version.|

## 1\. RK3576 Description

It is a high - performance, low - power application processor chip that integrates four Cortex - A72 cores, four Cortex - A53 cores, and an independent NEON coprocessor. It is suitable for ARM PC, edge computing, personal mobile Internet devices, and other multimedia products.

RK3576 incorporates a variety of powerful embedded hardware engines, providing excellent performance for high - end applications. It supports H.265, VP9, AVS2, and AV1 decoders at 4K@120fps and the H.264 decoder at 4K@60fps. It also supports H.264 and H.265 encoders at 4K@60fps, a high - quality JPEG encoder/decoder, and dedicated image pre - processors and post - processors.

It has a built - in 3D GPU that is fully compatible with OpenGL ES1.1/2.0/3.2, OpenCL 2.0, and Vulkan 1.1. A special 2D hardware engine with an MMU maximizes display performance and delivers a smooth operational experience.

It introduces a new - generation, fully hardware - based ISP (Image Signal Processor) with a maximum of 16M pixels, implementing a variety of algorithm accelerators such as HDR, 3A, CAC, 3DNR, 2DNR, sharpening, dehazing, enhancement, fisheye correction, and gamma correction.

The embedded NPU supports mixed operations of INT4/INT8/INT16/FP16/BF16/TF32. Moreover, thanks to its strong compatibility, it can easily convert network models based on a series of frameworks like TensorFlow, MXNet, PyTorch, and Caffe.

RK3576 features a high - performance external memory interface (LPDDR4/LPDDR4X/LPDDR5), capable of meeting demanding memory bandwidth requirements (supporting systems with high memory bandwidth demands). It also provides a complete set of peripheral interfaces to flexibly support various applications.

Target Applications:

+ Information Release Terminals
+ Smart Cockpit
+ Smart Screen
+ AR/VR
+ Edge Computing
+ High-end IPC
+ Smart NVR
+ Premium Pad
+ ARM PC

……

**RK3576 Block Diagram**

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720593601656-0670391a-b653-4230-aede-3ea9e26b9868.png)

## 2. FET3576-C\&FET3576-C2 SoM Description

### 2.1 FET3576-C/ FET3576-C2 SoM Appearance

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1733456740203-4f819259-1c63-45b2-8917-a806d32b2885.png)

**FET3576-C Front**

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1733456699798-361c5272-c28d-45c5-8b73-ad736e028066.png)

**FET3576-C Back**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778229764607-d3025d33-d77f-457b-896a-a0210c57a2d8.png)

**FET3576-C2 Front**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778229790856-9025e560-62a2-41aa-bce2-2285caaee704.png)

**FET3576-C2 Back**

### 2.2 FET3576-C/FET3576-C2 SoM Block Diagram

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1764575965828-a814926b-cc0c-4136-85f4-c3e87229b495.png)

**SoM**

### 2.3 FET3576-C/FET3576-C2 SoM Dimensions Diagram

FET3576-C SoM Dimension Diagram: 

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778230272040-55805bb5-7ebd-4dee-8d61-23906b1f6345.png)

FET3576-C2 SoM Dimension Diagram: 

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778230250127-83b148b2-2a3f-4d99-b0de-6feebc775c06.png)

**Bottom Layer Dimensions**

Unit: mm![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199724670-67922326-0c33-478e-af0b-7de83224e418.png)

Dimensions: 68mm × 50mm, dimensional tolerance ±0.15mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

Connectors: Four 0.4 mm-pitch, 100-pin board-to-board connectors (Refer to the appendix for connector dimension diagrams.)

Four 2.2 mm diameter mounting holes are reserved at the four corners of the SoM; when the product is used in a vibration environment, fixing screws can be installed to improve the reliability of product connection.

Please refer to the development board design and use M2, L=1.5mm patch nuts on the carrier board, please refer to the diagram below for the specifications of the surface-mount nuts.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199724879-e1bbcd19-a64f-483a-8ca0-679afb0b8a85.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199725152-9e128ca2-4ffc-4042-bff0-0c58c7aff308.png)

### 2.4 Performance Parameter

#### 2.4.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|:--------:|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| System Clock Arm® Cortex®-A72| \-| \-| 2200| MHz| Temperature|
| System Clock Arm® Cortex®-A53| \-| \-| 2000| MHz| Temperature|
| System Clock Arm® Cortex®-M0| \-| \-| \-| \-| \-|

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|:--------:|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| System Clock Arm® Cortex®-A72| \-| \-| 2100| MHz| Industrial Level|
| System Clock Arm® Cortex®-A53| \-| \-| 1900| MHz| Industrial Level|
| System Clock Arm® Cortex®-M0| \-| \-| \-| \-| \-|

#### 2.4.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|----------|:--------:|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Main Power Voltage| 12V| 5| 12| 13| V| \-|

#### 2.4.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|----------|:--------:|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Operating Temperature| Working Environment| 0| 25| +80| ℃| Commercial level|
| | Storage Environment| -40| 25| +125| ℃||
| | Working Environment| -40| 25| +85| ℃| Industrial Level|
| | Storage Environment| -40| 25| +125| ℃| |
| Humidity| Working Environment| 10| \-| 90| ％RH| No Condensation|
| | Storage Environment| 5| \-| 95| ％RH||

#### 2.4.4 SoM Interface Speed

| **Parameter**| **Specification**| | | | **Description**|
|:----------:|:----------:|:--------:|:--------:|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Serial Port Communication Speed| \-| 115200| 4M| bps| \-|
| SPI Clock| \-| \-| 50| MHz| \-|
| I2C Communication Speed| \-| 100| 400| Kbps| \-|
| USB3.0 Interface Speed| \-| \-| 5| Gbps| \-|
| USB2.0 Interface Speed| \-| \-| 480| Mbps| \-|
| CAN Communication Speed| \-| \-| 1| Mbps| \-|
| PCIe2.1| \-| \-| 5| Gbps| \-|

#### 2.4.5 ESD Features

| **Parameter**| **Specification**| | **Unit**| **Application Scope**|
|:----------:|:----------:|----------|:----------:|:----------:|
| | **Minimum**| **Maximum**| | |
| ESD HBM(ESDA/JEDEC JS-001-2017)| -2000| 2000| V| All signals routed out from the SoM.|
| ESD CDM(ESDA/JEDEC JS-002-2018)| -250| 250| V| All signals routed out from the SoM.|

**Note:**

- **The above data is provided by Rockchip;**

- **As all the signals exported from SoM are electrostatic sensitive signals, the interfaces should be well protected from static electricity in the carrier board design and the SoM transportation, assembling, and use.**

### 2.5 SoM Interfaces

FET3576-C/FET3576-C2 The interface resources of SoM are supported in the following table:

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 5| • Supports 5 x CSI-2 interfaces;<br />• 4 of the interfaces feature 2 data lanes (D-PHY v1.2, 2.4 Gbps per lane);<br />• These 4 interfaces can be combined to form 2 interfaces with 4 data lanes each;<br />• The remaining 1 interface supports either 4 D-PHY data lanes or 3 C-PHY trios;<br />• D-PHY v2.0 supports lane speed up to 4.5 Gbps;<br />• C-PHY v1.1 supports trio speed up to 2.4 Gsps. |
| DVP| 1| Standard DVP interface (8/10/12/16-bit, up to 150 Mhz);<br />Supports BT.601, BT.656, and BT.1120 VI interfaces. |
| HDMI/eDP TX| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | •Supports **1 USB / DP combo interface**<br/>• **USB interface**<br/>• **USB 3.2 Gen1x1**<br/>• **Dual-Role Device (DRD)**<br/>• **DisplayPort TX interface**<br/>• **DisplayPort v1.4**<br/>• Supports **1/2/4 lanes** with lane speeds including **1.62、2.7、5.4 and 8.1 Gbps**<br/>• Supports up to **4K@120Hz**<br/>• Supported data formats: **RGB/YUV444/YUV422/YUV420 8/10-bit**<br/>• Supports **Multi-Stream Transport (MST) with 3 displays**<br/>• Supports **DP Altmode on USB Type-C**<br/>• Supports **HDCP v2.3 and HDCP v1.3** |
| DP TX| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | • Supports **1 USB / DP combo interface**<br/>• **USB interface**<br/>• **USB 3.2 Gen1x1**<br/>• **Dual-Role Device (DRD)**<br/>• **DisplayPort TX interface**<br/>• **DisplayPort v1.4**<br/>• Supports **1/2/4 lanes** with lane speeds of **1.62, 2.7, 5.4, and 8.1 Gbps**<br/>• Supports up to **4K@120Hz**<br/>• Supported data formats: **RGB/YUV444/YUV422/YUV420 8/10-bit**<br/>• Supports **Multi-Stream Transport (MST)** with up to **3 displays**<br/>• Supports **DP Altmode via USB Type-C**<br/>• Supports **HDCP v2.3 and HDCP v1.3** |
| MIPI DSI| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | • Supports **1 MIPI DSI-2 TX interface**  <br/>• **D-PHY v2.0 or C-PHY v1.1**  <br/>• **4 data lanes** on D-PHY  <br/>• **3 data trios** on C-PHY  <br/>• Supports up to **2560 x 1600@60Hz**  <br/>• Supported data format: **RGB (up to 10-bit)** |
| Parallel| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | • Supports **1 parallel output interface**  <br/>• Supports **RGB/BT.656/BT1120**  <br/>• Maximum support up to **1920 × 1080@60Hz**  <br/>• Supported data format: **RGB (up to 10-bit)** |
| EBC| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | Supports 1 EBC output interface.|
| SAI| ≤5| • Supports 5 SAI interfaces;<br />• SAI 0/1 support 4 TX lanes and 4 RX lanes;<br />• SAI 2/3/4 support 1 TX lane and 1 RX lane;<br />• Supports I2S/TDM/PCM modes;<br />• Supports a maximum sample rate of 192 kHz;<br />• Supports audio resolution from 16 bits to 32 bits. |
| SPDIF TX| ≤2| Supports 2 x SPDIF TX ports; |
| SPDIF RX| ≤2| Supports 2 x SPDIF RX ports; |
| PDM| ≤2| • Up to 8 channels, audio resolution: 16‑bit to 24‑bit, sample rate up to 192 kHz;<br />• Supports PDM master receive mode. |
| Ethernet| ≤2| • 2 × GMAC with RGMII / RMII interfaces;<br />• Supports Data rates: 10/100/1000 Mbps. |
| Combo high speed interface| 2| • Supports 1 x PCIe2.1/SATA3.1 interface with one data lane;<br />• Supports 1 x PCIe2.1/SATA3.1/USB3.2 Gen1x1 interface with one data lane. |
| USB 2.0 OTG| 2| 2 x USB2.0 OTG|
| SDIO| ≤2| SDIO v3.0, 4-bit data bus widths |
| SPI| ≤5| Supports two chip-select in each interface; Supports serial-master and serial-slave mode|
| I2C| ≤9| • Supports 7-bit and 10-bit address modes;<br />• Data transmission rate of 100K bits/s in standard mode and 400k bits/s in fast mode. |
| I3C| ≤2| Supports 2 x I3C master ports |
| UART| ≤12| Built‑in 2 × 64‑bit FIFO (separate TX/RX);<br />Supports 5‑, 6‑, 7‑, 8‑bit serial data transmission;<br />Baud rate up to 4 Mbps;<br />12 × UART all support auto‑flow‑control (AFC) mode; <br />12 × UART all support RS‑485 mode |
| CAN| ≤2| Compliant with CAN \& CAN FD specifications;<br />Supports standard \& extended frame transmission;<br />8192‑bit receive FIFO. |
| DSMC| ≤1| Supports up to select 4 chips ·Supports 8-wire and 16-wire serial transfer mode ·Supports configurable serial address width:16 bits or 32 bits|
| FlexBus| ≤1| Supports built-in DMA and ping-pong operation for allocating two address ·Supports transmission and receiving mode ·Supports single mode and continuous mode|
| PWM| ≤16| Supports up to 16 on-chip PWM with interrupt-based operation and capture mode;|
| ADC| ≤8| · Supports 8 x 12bit single-ended input SAR-ADC with sampling rate up to 1MS/s;|
| GPIO| n| • All **GPIOs** can be used to generate interrupts  <br/>• Supports **level-triggered** and **edge-triggered** interrupts  <br/>• Supports configuration of **level trigger polarity**  <br/>• Supports **rising edge**, **falling edge**, and **both edge** triggered interrupts  <br/>• Supports configuration of **pull-up/down** (weak pull-up and weak pull-down)  <br/>• Supports configuration of **drive strength** |
**Note:   
The parameters in the table are based on hardware design or theoretical CPU values.**

**The interface employs GPIO multiplexing, representing the theoretical maximum connections.**

**Video Port:**

**·Video Port0 supports up to 4K@120Hz with 10 bit data**

**·Video Port1 supports up to 2560x1600@60Hz with 10-bit data**

**·Video Port2 supports up to 1920x1080@60Hz with 8-bit data**

**·Each Video Port may connect to any of HDMI/eDP/DP/DSI-2**

**·Port1 and Port2 may connect to parallel output interface**

**\*The maximum design clock frequency for a single TDM bus is 50MHz. When using TDM mode, the theoretically supported number of audio channels can be calculated by combining the audio sampling frequency and resolution to assess whether it meets the project requirements.**

### 2.6 FET3576-C/ FET3576-C2 SoM Pin Definitions

#### 2.6.1 FET3576-C/ FET3576-C2 SoM Pin Schematic

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199725381-e97fda68-6e24-4204-ae69-0ad984b42cad.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880010013-5c67fe3c-b57d-43aa-9263-58904ede537d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1764576048341-4bdb31a5-b56c-4a9d-bb55-dff5011fd19e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199726448-23bd375a-3ddb-4c27-9b4f-25c420797a6a.png)

#### 2.6.2 FET3576-C SoM Pin Function Description

**Note:**

**Num ——**SoM connector pin no.:

Ball —— CPU pin ball no.

**GPIO ——**CPU pin general I/O port serial number

Vol —— Pin signal electrical level

****

Signal Name — The net name on the SoM Connector. The meanings of the superscript symbols on the signals are as shown in the figure below:

| **Superscript Number**| **Superscript Meaning**|
|:----------:|:----------:|
| \[1]| The pin can be configured for interrupt use.|
| \[2]| The default pin level is 1.8 V.|
| \[3]| This pin is related to CPU startup and is not recommended for use as a GPIO.|
| \[4]| Dedicated pin and cannot be used as a GPIO.|

Pin Description — Description of the SoM pin signal name.

Default Function — All pin functions on the SoM are defined according to the “Default Function” in the table below. Please do not modify; otherwise, it may conflict with the factory drivers. If you have any questions, please contact our sales or technical support promptly.

**Note: Pins marked with “Don’t use for the carrier board” in the “Default functions” are for SoM, which can not be used for carrier board design.**

**Table 1 P1 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| ——| GND| ——| ——| Ground| GND|
| 3| B25| SDMMC\_D1| | 1.8V/3.3V| SD/MMC Interface Data Signal 1| SDMMC\_D1|
| 5| B24| SDMMC\_D0| | 1.8V/3.3V| SD/MMC Interface Data Signal 0| SDMMC\_D0|
| 7| 1B21| SDMMC\_CLK| | 1.8V/3.3V| SD/MMC Interface Clock Signal| SDMMC\_CLK|
| 9| 1A21| SDMMC\_CMD| | 1.8V/3.3V| SD/MMC Interface Command Signal| SDMMC\_CMD|
| 11| B23| SDMMC\_D3| | 1.8V/3.3V| SD/MMC Interface Data Signal 3| SDMMC\_D3|
| 13| A23| SDMMC\_D2| | 1.8V/3.3V| SD/MMC Interface Data Signal 2| SDMMC\_D2|
| 15| ——| GND| ——| ——| Ground| GND|
| 17| 2U12| HDMI\_TX\_SBDN| ——| ——| HDMISBD signal-| HDM0\_TX\_SBD\_N|
| 19| 2T12| HDMI\_TX\_SBDP| ——| ——| HDMISBD signal+| HDM0\_TX\_SBD\_P|
| 21| ——| GND| ——| ——| Ground| GND|
| 23| AK26| HDMI\_TX\_D3N| ——| ——| HDMI differential signal 3-| HDMI\_TX\_D3\_N|
| 25| AL26| HDMI\_TX\_D3P| ——| ——| HDMI differential signal 3+| HDMI\_TX\_D3\_P|
| 29| AK27| HDMI\_TX\_D0N| ——| ——| HDMI differential signal 0-| HDMI\_TX\_D0\_N|
| 31| 1AE24| HDMI\_TX\_D0P| ——| ——| HDMI differential signal 0+| HDMI\_TX\_D0\_P|
| 33| ——| GND| ——| ——| Ground| GND|
| 35| AL28| HDMI\_TX\_D1N| ——| ——| HDMI differential signal 1-| HDMI\_TX\_D1\_N|
| 37| AK28| HDMI\_TX\_D1P| ——| ——| HDMI differential signal 1+| HDMI\_TX\_D1\_P|
| 39| ——| GND| ——| ——| Ground| GND|
| 41| AK29| HDMI\_TX\_D2N| ——| ——| HDMI differential signal 2-| HDMI\_TX\_D2\_N|
| 43| AJ28| HDMI\_TX\_D2P| ——| ——| HDMI differential signal 2+| HDMI\_TX\_D2\_P|
| 45| ——| GND| ——| ——| Ground| GND|
| 47| ——| ——| ——| ——| |
| 49| ——| ——| ——| ——| |
| 51| ——| GND| ——| ——| Ground| GND|
| 53| ——| ——| ——| ——| |
| 55| ——| ——| ——| ——| |
| 57| ——| GND| ——| ——| Ground| GND|
| 59| ——| ——| ——| ——| |
| 61| ——| ——| ——| ——| |
| 63| ——| GND| ——| ——| Ground| GND|
| 65| ——| ——| ——| ——| |
| 67| ——| ——| ——| ——| |
| 69| ——| GND| ——| ——| Ground| GND|
| 71| ——| ——| ——| ——| |
| 73| ——| ——| ——| ——| |
| 75| ——| GND| ——| ——| Ground| GND|
| 77| ——| ——| ——| ——| |
| 79| ——| ——| ——| ——| |
| 81| ——| GND| ——| ——| Ground| GND|
| 83| ——| ——| ——| ——| |
| 85| ——| ——| ——| ——| |
| 87| ——| GND| ——| ——| Ground| GND|
| 89| ——| ——| ——| ——| |
| 91| ——| ——| ——| ——| |
| 93| ——| GND| ——| ——| Ground| GND|
| 95| ——| ——| ——| ——| |
| 97| ——| ——| ——| ——| |
| 99| ——| GND| ——| ——| Ground| GND|

**Table 2 P1 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| ——| GND| ——| ——| Ground| GND|
| 4| ——| ——| ——| ——| ——| ——|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| GND| ——| ——| Ground| GND|
| 10| ——| ——| ——| ——| ——| ——|
| 12| ——| ——| ——| ——| ——| ——|
| 14| ——| GND| ——| ——| Ground| GND|
| 16| ——| ——| ——| ——| ——| ——|
| 18| ——| ——| ——| ——| ——| ——|
| 20| ——| GND| ——| ——| Ground| GND|
| 22| ——| ——| ——| ——| ——| ——|
| 24| ——| ——| ——| ——| ——| ——|
| 26| ——| GND| ——| ——| Ground| GND|
| 28| A25| SARADC\_VIN0\_BOOT| ——| 1.8V| BOOT start configuration input| SARADC\_VIN0\_BOOT|
| 30| 1A22| SARADC\_VIN1\_KEY/RECOVERY| ——| 1.8V| <font style="color:rgb(255, 0, 0);">General ADC1 | SARADC\_VIN1\_KEY/RECOVERY|
| 32| 1B19| SARADC\_VIN2\_HW\_ID| ——| 1.8V| General ADC2| SARADC\_VIN2\_HW\_ID|
| 34| 1C19| SARADC\_VIN3\_HP\_HOOK| ——| 1.8V| <font style="color:rgb(255, 0, 0);">General ADC3 | SARADC\_VIN3\_HP\_HOOK|
| 36| 1E18| SARADC\_VIN4| ——| 1.8V| General ADC4| SARADC\_VIN4|
| 38| 1D19| SARADC\_VIN5| ——| 1.8V| General ADC5| SARADC\_VIN5|
| 40| 1D21| SARADC\_VIN6| ——| 1.8V| General ADC6| SARADC\_VIN6|
| 42| 1E19| SARADC\_VIN7\_LCD\_ID| ——| 1.8V| General ADC7| SARADC\_VIN7\_LCD\_ID|
| 44| ——| GND| ——| ——| Ground| GND|
| 46| B19| HDMI\_TX\_ON\_H| | 3.3V| HDMI\_TX signal enabled| HDMI\_TX\_ON\_H|
| 48| B20| TYPEC\_DPTX\_AUX\_PUPDCTL2| | 3.3V| TYPEC\_DPTX\_AUX\_PUPDCTL22 signal| TYPEC\_DPTX\_AUX\_PUPDCTL2|
| 50| 1C18| GPIO2\_B5\_d| | 3.3V| USB\_HUB\_RST\_3V3 reset signal| USB\_HUB\_RST\_3V3|
| 52| AK3| HDMI\_TX\_CEC\_M0| | 3.3V| HDMICEC signal| HDMI\_TX\_CEC\_M0|
| 54| 1A19| CAN1\_RX\_M3| | 3.3V| CAN1 data receiving| CAN1\_RX\_M3\_3V3|
| 56| A21| I2C8\_SCL\_M2| | 3.3V| I2C8 clock| I2C8\_SCL\_M2|
| 58| 1AE2| HDMI\_TX\_SDA| | 3.3V| HDMI serial data| HDMI\_TX\_SDA|
| 60| B21| I2C8\_SDA\_M2| | 3.3V| I2C8 Data| I2C8\_SDA\_M2|
| 62| ——| GND| ——| ——| Ground| GND|
| 64| A19| PCIE0\_PERSTn| | 3.3V| PCIE Reset Signal| PCIE0\_PERSTn|
| 66| 1A20| CAN1\_TX\_M3| | 3.3V| CAN1 data sending| CAN1\_TX\_M3\_3V3|
| 68| AL2| HDMI\_TX\_SCL| | 3.3V| HDMI serial clock| HDMI\_TX\_SCL|
| 70| 1D16| I2C7\_SCL\_M1| | 3.3V| I2C7 clock| I2C7\_SCL\_M1|
| 72| 1B18| I2C7\_SDA\_M1| | 3.3V| I2C7 Data| I2C7\_SDA\_M1|
| 74| 1Y22| PCIE0\_WAKEn\_M0| | 3.3V| PCIE wake-up activation signal| PCIE0\_WAKEn\_M0|
| 76| 1B16| GPIO2\_B3\_d| | 3.3V| 4G/5G module reset signal| 4G/5G\_PWREN|
| 78| 1A17| PCIE0\_CLKREQn\_M0| | 3.3V| PCIE clock request signal| PCIE0\_CLKREQn\_M0|
| 80| 1A18| GPIO2\_B1\_d| | 3.3V| 4G/5G module power control signal| 4G/5G\_MOD\_PWREN|
| 82| B22| TYPEC\_DPTX\_AUX\_PUPDCTL1| | 3.3V| TYPEC\_DPTX\_AUX\_PUPDCTL1 signal| TYPEC\_DPTX\_AUX\_PUPDCTL1|
| 84| ——| GND| ——| ——| Ground| GND|
| 86| ——| ——| ——| ——| ——| ——|
| 88| ——| ——| ——| ——| ——| ——|
| 90| ——| GND| ——| ——| Ground| GND|
| 92| 2T4| USB2\_HOST1\_DP| ——| ——| USB20\_HOST1 data+| USB20\_HOST1\_D\_P|
| 94| 2T5| USB2\_HOST1\_DM| ——| ——| USB20\_HOST1 data-| USB20\_HOST1\_D\_N|
| 96| ——| GND| ——| ——| Ground| GND|
| 98| 2T9| USB2\_OTG1\_ID| ——| ——| USB2\_OTG1\_ID signal| x|
| 100| 2T10| USB2\_OTG1\_VBUSDET| ——| ——| USB2\_OTG1\_VBUSDET insert detection| USB2\_OTG1\_VBUSDET|

**Table 3 P2 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| AB29| I2C2\_SDA\_M0| | 3.3V| I2C2 Data| I2C2\_SDA\_M0|
| 3| 1W21| PWM0\_CH1\_M0| | 3.3V| PWM0\_CH1\_M0| x|
| 5| AD28| PWM1\_CH0\_M0| | 3.3V| Occupied by the SoM and not available.| x|
| 7| 1U24| UART0\_TX\_M0\_DEBUG| | 3.3V| UART0 sending| UART0\_TX\_M0\_DEBUG|
| 9| AA28| UART0\_RX\_M0\_DEBUG| | 3.3V| UART0 receiving| UART0\_RX\_M0\_DEBUG|
| 11| 1W24| I2C2\_SCL\_M0| | 3.3V| I2C2 clock| I2C2\_SCL\_M0|
| 13| 1W22| PWM0\_CH0\_M0| | 3.3V| PWM0\_CH0\_M0| PWM0\_CH0\_M0 (MIPI screen backlight PWM)|
| 15| ——| GND| ——| ——| Ground| GND|
| 17| ——| ——| ——| ——| ——| ——|
| 19| 1E21| GPIO3\_D4\_d| GPIO3\_D4\_d| 1.8V| GMAC1\_INT interrupt| GMAC1\_INT|
| 21| 1D10| GPIO3\_D5\_d| GPIO3\_D5\_d| 1.8V| GMAC1\_RESET reset| GMAC1\_RESET|
| 23| ——| ——| ——| ——| ——| ——|
| 25| ——| ——| ——| ——| ——| ——|
| 27| ——| ——| ——| ——| ——| ——|
| 29| 1AA23| GPIO0\_D3\_d\_1V8| | 1.8V| HP\_DET\_L Headphone insertion detection| HP\_DET\_L (headphone)|
| 31| 1D9| I2C5\_SCL\_M3| | 1.8V| I2C5 clock| I2C5\_SCL\_M3|
| 33| 1B10| I2C5\_SDA\_M3| | 1.8V| I2C5 Data| I2C5\_SDA\_M3|
| 35| 1A4| I2C3\_SCL\_M0| | 1.8V| I2C3 clock| I2C3\_SCL\_M0|
| 37| 1B7| CAM\_CLK2\_OUT\_M0| | 1.8V| CAM\_CLK2\_OUT\_M0| x|
| 39| 1A5| UART5\_TX\_M1| | 1.8V| UART5 send data| UART5\_TX\_M1\_1V8|
| 41| 1B12| CAM\_CLK1\_OUT\_M0| | 1.8V| CAM\_CLK1\_OUT\_M0| x|
| 43| B8| I2C3\_SDA\_M0| | 1.8V| I2C3 Data| I2C3\_SDA\_M0|
| 45| 1E7| CAM\_CLK0\_OUT\_M0| | 1.8V| CAM\_CLK0\_OUT\_M0| x|
| 47| ——| ——| ——| ——| ——| ——|
| 49| A7| SAI1\_SDO0\_M0| | 1.8V| I2S output data| SAI1\_SDO0\_M0|
| 51| 1C10| GPIO3\_D6\_d| | 1.8V| 4G/5G reset| 4G/5G\_RESET|
| 53| 1B6| SAI1\_LRCK\_M0| | 1.8V| I2S send frame clock| SAI1\_LRCK\_M0|
| 55| 1C6| SAI1\_SCLK\_M0| | 1.8V| I2S bit clock| SAI1\_SCLK\_M0|
| 57| ——| ——| ——| ——| ——| ——|
| 59| 1A6| SAI1\_SDI0\_M0| | 1.8V| I2S input data| SAI1\_SDI0\_M0|
| 61| B7| UART5\_RX\_M1| | 1.8V| UART5 receive data| UART5\_RX\_M1\_1V8|
| 63| ——| NC| ——| ——| Floated| Floated|
| 65| 1D6| SAI1\_MCLK\_M0| | 1.8V| I2S main clock| SAI1\_MCLK\_M0|
| 67| V29| GPIO0\_A0\_d| | 1.8V| IIC Interrupt| IIC\_GPIO\_INT|
| 69| 1B9| UART8\_RX\_M0| | 1.8V| UART8 receive data| UART8\_RX\_M0\_1V8|
| 71| AK2| HDMI\_TX\_HPDIN\_M0\_1V8| | 1.8V| HDMI send link detection| HDMI\_TX\_HPDIN\_M0\_1V8|
| 73| 1D7| UART8\_TX\_M0| | 1.8V| UART8 send data| UART8\_TX\_M0\_1V8|
| 75| Y29| GPIO0\_A5\_d| | 1.8V| TYPEC0 interrupt| TYPEC0\_INT|
| 77| 1C7| UART8\_RTSN\_M0| | 1.8V| UART8 send request| UART8\_RTSN\_M0\_1V8|
| 79| 1C12| UART8\_CTSN\_M0| | 1.8V| UART8 clear sending| UART8\_CTSN\_M0\_1V8|
| 81| ——| GND| ——| ——| Ground| GND|
| 83| 1L23| PCIE1\_REFCLKP| ——| ——| PCIe 1 Clock output/input +| x|
| 85| 1M23| PCIE1\_REFCLKN| ——| ——| PCIe 1 Clock output/input-| x|
| 87| ——| GND| ——| ——| Ground| GND|
| 89| N28| PCIE1\_TXP/USB3\_HOST1\_SSTXP| ——| ——| USB3\_HOST1 send differential+| USB3\_HOST1\_SSTXP|
| 91| N29| PCIE1\_TXN/USB3\_HOST1\_SSTXN| ——| ——| USB3\_HOST1 send differential-| USB3\_HOST1\_SSTXN|
| 93| ——| GND| ——| ——| Ground| GND|
| 95| M28| PCIE1\_RXP/USB3\_HOST1\_SSRXP| ——| ——| USB3\_HOST1 receive differential+| USB3\_HOST1\_SSRXP|
| 97| M29| PCIE1\_RXN/USB3\_HOST1\_SSRXN| ——| ——| USB3\_HOST1 receive differential-| USB3\_HOST1\_SSRXN|
| 99| ——| GND| ——| ——| Ground| GND|

**Table 4 P2 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| ——| GND| ——| ——| Ground| GND|
| 4| ——| ——| ——| ——| ——| ——|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| GND| ——| ——| Ground| GND|
| 10| ——| ——| ——| ——| ——| ——|
| 12| ——| ——| ——| ——| ——| ——|
| 14| ——| GND| ——| ——| Ground| GND|
| 16| ——| ——| ——| ——| ——| ——|
| 18| ——| ——| ——| ——| ——| ——|
| 20| ——| GND| ——| ——| Ground| GND|
| 22| ——| ——| ——| ——| ——| ——|
| 24| ——| ——| ——| ——| ——| ——|
| 26| ——| GND| ——| ——| Ground| GND|
| 28| ——| ——| ——| ——| ——| ——|
| 30| ——| ——| ——| ——| ——| ——|
| 32| ——| GND| ——| ——| Ground| GND|
| 34| ——| ——| ——| ——| ——| ——|
| 36| ——| ——| ——| ——| ——| ——|
| 38| ——| GND| ——| ——| Ground| GND|
| 40| ——| ——| ——| ——| ——| ——|
| 42| ——| ——| ——| ——| ——| ——|
| 44| ——| GND| ——| ——| Ground| GND|
| 46| ——| ——| ——| ——| ——| ——|
| 48| ——| ——| ——| ——| ——| ——|
| 50| ——| GND| ——| ——| Ground| GND|
| 52| ——| ——| ——| ——| ——| ——|
| 54| ——| ——| ——| ——| ——| ——|
| 56| ——| GND| ——| ——| Ground| GND|
| 58| ——| ——| ——| ——| ——| ——|
| 60| ——| ——| ——| ——| ——| ——|
| 62| ——| GND| ——| ——| Ground| GND|
| 64| 1N23| PCIE0\_REFCLKN| ——| ——| PCIe 0 Clock Output/Input—| PCIE0\_REFCLKN|
| 66| 1N22| PCIE0\_REFCLKP| ——| ——| PCIe 0 Clock Output/Input +| PCIE0\_REFCLKP|
| 68| ——| GND| ——| ——| Ground| GND|
| 70| R29| PCIE0\_RXN/SATA0\_RXN| ——| ——| PCIE0 data receive-| PCIE0\_RXN|
| 72| R28| PCIE0\_RXP/SATA0\_RXP| ——| ——| PCIE0 data receive +| PCIE0\_RXP|
| 74| ——| GND| ——| ——| Ground| GND|
| 76| P28| PCIE0\_TXN/SATA0\_TXN| ——| ——| PCIE0 data sending-| PCIE0\_TXN|
| 78| P29| PCIE0\_TXP/SATA0\_TXP| ——| ——| PCIE0 data sending+| PCIE0\_TXP|
| 80| ——| GND| ——| ——| Ground| GND|
| 82| ——| ——| ——| ——| ——| ——|
| 84| ——| ——| ——| ——| ——| ——|
| 86| ——| GND| ——| ——| Ground| GND|
| 88| ——| ——| ——| ——| ——| ——|
| 90| ——| ——| ——| ——| ——| ——|
| 92| ——| GND| ——| ——| Ground| GND|
| 94| ——| ——| ——| ——| ——| ——|
| 96| ——| ——| ——| ——| ——| ——|
| 98| ——| GND| ——| ——| Ground| GND|
| 100| ——| RESET\_L| ——| ——| Reset| RESET\_L|

**Table 5 P3 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| ——| GND| ——| ——| Ground| GND|
| 3| AL10| USB3\_OTG0\_SSRX1N/DP\_TX\_D0N| ——| ——| USB3\_OTG0\_SSRX1N receive differential signal 1-| USB3\_OTG0\_SSRX1N|
| 5| AK10| USB3\_OTG0\_SSRX1P/DP\_TX\_D0P| ——| ——| USB3\_OTG0\_SSRX1P receive differential signal 1+| USB3\_OTG0\_SSRX1P|
| 7| ——| GND| ——| ——| Ground| GND|
| 9| AL11| USB3\_OTG0\_SSTX1P/DP\_TX\_D1P| ——| ——| USB3\_OTG0\_SSTX1P send differential signal 1+| USB3\_OTG0\_SSTX1P|
| 11| AK11| USB3\_OTG0\_SSTX1N/DP\_TX\_D1N| ——| ——| USB3\_OTG0\_SSTX1N send differential signal 1-| USB3\_OTG0\_SSTX1N|
| 13| ——| GND| ——| ——| Ground| GND|
| 15| AL12| USB3\_OTG0\_SSRX2N/DP\_TX\_D2N| ——| ——| USB3\_OTG0\_SSRX2N receive differential signal 2-| USB3\_OTG0\_SSRX2N|
| 17| AK12| USB3\_OTG0\_SSRX2P/DP\_TX\_D2P| ——| ——| USB3\_OTG0\_SSRX2P receive differential signal 2+| USB3\_OTG0\_SSRX2P|
| 19| ——| GND| ——| ——| Ground| GND|
| 21| AL13| USB3\_OTG0\_SSTX2P/DP\_TX\_D3P| ——| ——| USB3\_OTG0\_SSTX2P send differential signal 2+| USB3\_OTG0\_SSTX2P|
| 23| AK13| USB3\_OTG0\_SSTX2N/DP\_TX\_D3N| ——| ——| USB3\_OTG0\_SSTX2N send differential signal 2-| USB3\_OTG0\_SSTX2N|
| 25| ——| GND| ——| ——| Ground| GND|
| 27| B27| SDMMC1\_D1\_M0| | 1.8V| SD/MMC Interface Data Signal 1| SDMMC1\_D1\_M0|
| 29| A28| SDMMC1\_D0\_M0| | 1.8V| SD/MMC Interface Data Signal 0| SDMMC1\_D0\_M0|
| 31| ——| GND| ——| ——| Ground| GND|
| 33| 1B22| SDMMC1\_CLK\_M0| | 1.8V| SD/MMC Interface Clock Signal| SDMMC1\_CLK\_M0|
| 35| B26| SDMMC1\_CMD\_M0| | 1.8V| SD/MMC Interface Command Signal| SDMMC1\_CMD\_M0|
| 37| ——| GND| ——| ——| Ground| GND|
| 39| A27| SDMMC1\_D3\_M0| | 1.8V| SD/MMC Interface Data Signal 3| SDMMC1\_D3\_M0|
| 41| 1A23| SDMMC1\_D2\_M0| | 1.8V| SD/MMC Interface Data Signal 2| SDMMC1\_D2\_M0|
| 43| ——| GND| ——| ——| Ground| GND|
| 45| C29| SAI2\_SDO\_M0| | 1.8V| I2S output data| SAI2\_SDO\_M0|
| 47| 1D22| SAI2\_SCLK\_M0| | 1.8V| I2S bit clock| SAI2\_SCLK\_M0|
| 49| ——| GND| ——| ——| Ground| GND|
| 51| 1A24| SAI2\_LRCK\_M0| | 1.8V| I2S send frame clock| SAI2\_LRCK\_M0||
| 53| C28| SAI2\_SDI\_M0| | 1.8V| I2S input data| SAI2\_SDI\_M0|
| 55| ——| GND| ——| ——| Ground| GND|
| 57| AK15| MIPI\_DPHY\_DSI\_TX\_D0N| ——| ——| MIPI\_DPHY\_DSI send data 0-| MIPI\_DPHY\_DSI\_TX\_D0N|
| 59| AL15| MIPI\_DPHY\_DSI\_TX\_D0P| ——| ——| MIPI\_DPHY\_DSI send data 0+| MIPI\_DPHY\_DSI\_TX\_D0P|
| 61| ——| GND| ——| ——| Ground| GND|
| 63| AK16| MIPI\_DPHY\_DSI\_TX\_D1N| ——| ——| MIPI\_DPHY\_DSI send data 1-| MIPI\_DPHY\_DSI\_TX\_D1N|
| 65| AL16| MIPI\_DPHY\_DSI\_TX\_D1P| ——| ——| MIPI\_DPHY\_DSI send data 1+| MIPI\_DPHY\_DSI\_TX\_D1P|
| 67| ——| GND| ——| ——| Ground| GND|
| 69| AL17| MIPI\_DPHY\_DSI\_TX\_CLKN| ——| ——| MIPI\_DPHY\_DSI send clock-| MIPI\_DPHY\_DSI\_TX\_CLKN|
| 71| AL17| MIPI\_DPHY\_DSI\_TX\_CLKP| ——| ——| MIPI\_DPHY\_DSI send clock+| MIPI\_DPHY\_DSI\_TX\_CLKP|
| 73| ——| GND| ——| ——| Ground| GND|
| 75| AK18| MIPI\_DPHY\_DSI\_TX\_D2N| ——| ——| MIPI\_DPHY\_DSI send data 2-| MIPI\_DPHY\_DSI\_TX\_D2N|
| 77| AL18| MIPI\_DPHY\_DSI\_TX\_D2P| ——| ——| MIPI\_DPHY\_DSI send data 2+| MIPI\_DPHY\_DSI\_TX\_D2P|
| 79| ——| GND| ——| ——| Ground| GND|
| 81| AK19| MIPI\_DPHY\_DSI\_TX\_D3N| ——| ——| MIPI\_DPHY\_DSI send data 3-| MIPI\_DPHY\_DSI\_TX\_D3N|
| 83| AL19| MIPI\_DPHY\_DSI\_TX\_D3P| ——| ——| MIPI\_DPHY\_DSI send data 3+| MIPI\_DPHY\_DSI\_TX\_D3P|
| 85| ——| GND| ——| ——| Ground| GND|
| 87| | CARRIER\_BOARD\_EN| ——| ——| CARRIER enable| CARRIER\_BOARD\_EN|
| 89| ——| GND| ——| ——| Ground| GND|
| 91| | VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|
| 93| | VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|
| 95| | VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|
| 97| | VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|
| 99| | VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|

**Table 6 P3 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| ——| GND| ——| ——| Ground| GND|
| 4| ——| ——| ——| ——| ——| ——|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| ——| ——| ——| ——| ——|
| 10| ——| PMIC\_VDC| ——| ——| PMIC\_VDC signal| SoM startup mode switching|
| 12| ——| GND| ——| ——| Ground| GND|
| 14| 2R6| USB2\_OTG0\_ID| ——| ——| USB2\_OTG0\_ID signal| X|
| 16| 2P3| USB2\_OTG0\_VBUSDET| ——| ——| USB2\_OTG0\_VBUSDET insert detection| USB2\_OTG0\_VBUSDET|
| 18| AL9| USB2\_OTG0\_DM| ——| ——| USB2\_OTG0\_DM data-| USB2\_OTG0\_DM|
| 20| AK9| USB2\_OTG0\_DP| ——| ——| USB2\_OTG0\_DP data+| USB2\_OTG0\_DP|
| 22| 2T2| DP\_TX\_AUXP| ——| ——| DP\_TX\_AUXP signal| DP\_TX\_AUXP|
| 24| 2T3| DP\_TX\_AUXN| ——| ——| DP\_TX\_AUXN signal| DP\_TX\_AUXN|
| 26| ——| GND| ——| ——| Ground| GND|
| 28| 1B23| UART4\_TX\_M1| ——| 1.8V| UART4 send data| UART4\_TX\_M1|
| 30| B28| UART4\_RX\_M1| ——| 1.8V| UART4 receive data| UART4\_RX\_M1|
| 32| ——| GND| ——| ——| Ground| GND|
| 34| B29| UART4\_RTSN\_M1| ——| 1.8V| UART4 send request| UART4\_RTSN\_M1|
| 36| 1C23| UART4\_CTSN\_M1| ——| 1.8V| UART4 clear sending| UART4\_CTSN\_M1|
| 38| ——| GND| ——| ——| Ground| GND|
| 40| A26| WIFI\_REG\_ON\_H| ——| 1.8V| WIFI\_REG\_ON\_H signal| WIFI\_REG\_ON\_H|
| 42| 1C22| BT\_REG\_ON\_H| ——| 1.8V| BT\_REG\_ON\_H signal| BT\_REG\_ON\_H|
| 44| ——| GND| ——| ——| Ground| GND|
| 46| 1E21| HOST\_WAKE\_BT\_H| ——| 1.8V| HOST\_WAKE\_BT\_H signal| HOST\_WAKE\_BT\_H|
| 48| 1E22| GPIO1\_D5\_d| ——| 1.8V| GPIO\_D5\_d\_1V8 signal| GPIO\_D5\_d\_1V8|
| 50| ——| GND| ——| ——| Ground| GND|
| 52| 1U22| WIFI\_WAKE\_HOST\_H| ——| 1.8V| WIFI\_WAKE\_HOST\_H signal| WIFI\_WAKE\_HOST\_H|
| 54| 1P23| BT\_WAKE\_HOST\_H| ——| 1.8V| BT\_WAKE\_HOST\_H signal| BT\_WAKE\_HOST\_H|
| 56| ——| GND| ——| ——| Ground| GND|
| 58| AK20| MIPI\_DPHY\_CSI0\_RX\_D0P/MIPI\_CPHY\_CSI\_RX\_TRIO0\_B| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D0P receive data 0+| MIPI\_DPHY\_CSI0\_RX\_D0P|
| 60| AL20| MIPI\_DPHY\_CSI0\_RX\_D0N/MIPI\_CPHY\_CSI\_RX\_TRIO0\_A| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D0N receive data 0-| MIPI\_DPHY\_CSI0\_RX\_D0N|
| 62| ——| GND| ——| ——| Ground| GND|
| 64| AK21| MIPI\_DPHY\_CSI0\_RX\_D1P/MIPI\_CPHY\_CSI\_RX\_TRIO1\_A| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D1P receive data 1+| MIPI\_DPHY\_CSI0\_RX\_D1P|
| 66| AL21| MIPI\_DPHY\_CSI0\_RX\_D1N/MIPI\_CPHY\_CSI\_RX\_TRIO0\_C| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D1N receive data 1-| MIPI\_DPHY\_CSI0\_RX\_D1N|
| 68| ——| GND| ——| ——| Ground| GND|
| 70| AK22| MIPI\_DPHY\_CSI0\_RX\_CLKP/MIPI\_CPHY\_CSI\_RX\_TRIO1\_C| ——| ——| MIPI\_DPHY\_CSI0\_RX\_CLKP receive clock+| MIPI\_DPHY\_CSI0\_RX\_CLKP|
| 72| AL22| MIPI\_DPHY\_CSI0\_RX\_CLKN/MIPI\_CPHY\_CSI\_RX\_TRIO1\_B| ——| ——| MIPI\_DPHY\_CSI0\_RX\_CLKN receive clock-| MIPI\_DPHY\_CSI0\_RX\_CLKN|
| 74| ——| GND| ——| ——| Ground| GND|
| 76| AK23| MIPI\_DPHY\_CSI0\_RX\_D2P/MIPI\_CPHY\_CSI\_RX\_TRIO2\_B| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D2P receive data 2+| MIPI\_DPHY\_CSI0\_RX\_D2P|
| 78| AL23| MIPI\_DPHY\_CSI0\_RX\_D2N/MIPI\_CPHY\_CSI\_RX\_TRIO2\_A| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D2N receive data 2-| MIPI\_DPHY\_CSI0\_RX\_D2N|
| 80| ——| GND| ——| ——| Ground| GND|
| 82| AK24| MIPI\_DPHY\_CSI0\_RX\_D3P/NO\_USE| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D3P receive data 3+| MIPI\_DPHY\_CSI0\_RX\_D3P|
| 84| AL24| MIPI\_DPHY\_CSI0\_RX\_D3N/MIPI\_CPHY\_CSI\_RX\_TRIO2\_C| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D3N receive data 3-| MIPI\_DPHY\_CSI0\_RX\_D3N|
| 86| ——| GND| ——| ——| Ground| GND|
| 88| ——| PWRON\_L| ——| ——| Power-on control | PWRON\_L|
| 90| 1U21| SDMMC0\_DET\_L| | 1.8V| SDMMC card detection signal| SDMMC\_DET\_L|
| 92| B6| GPIO4\_B2\_d| GPIO4\_B2\_d| 1.8V| GMAC0 reset| GMAC0\_RESET|
| 94| 1U23| GPIO0\_A2\_d| GPIO0\_A2\_d| 1.8V| GMAC0 interrupt| GMAC0\_INT|
| 96| ——| GND| ——| ——| Ground| GND|
| 98| ——| VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|
| 100| ——| VCC\_DCIN| ——| ——| 5-13V power input| VCC\_DCIN|

**Table 7 P4 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|----------|:----------:|----------|:----------:|
| 1| 1AA22| GPIO0\_C5\_d| GPIO0\_C5\_d| 3.3V| MIPI\_DSI1 interrupt| MIPI\_DSI1\_INT|
| 3| 1Y23| GPIO0\_C7\_d| GPIO0\_C7\_d| 3.3V| PCIE0\_PRSN2\_3V3 hot plug detect| PCIE0\_PRSN2\_3V3|
| 5| 1B15| GMAC1\_MDIO\_M0| | 3.3V| GMAC1 serial management data| GMAC1\_MDIO\_M0|
| 7| 1B13| GMAC1\_MDC\_M0| | 3.3V| GMAC1 serial management clock| GMAC1\_MDC\_M0|
| 9| 1W23| GPIO0\_D0\_d| GPIO0\_D0\_d| 3.3V| MIPI\_DSI1 reset| MIPI\_DSI1\_RESET|
| 11| AB28| I2C0\_SCL\_M1| | 3.3V| I2C0 clock| I2C0\_SCL\_M1|
| 13| ——| GND| ——| ——| Ground| GND|
| 15| 1V24| I2C0\_SDA\_M1| | 3.3V| I2C0 Data| I2C0\_SDA\_M1|
| 17| 1AE1| GPIO4\_C6\_d| GPIO4\_C6\_d| 3.3V| GPIO4\_C6\_d| GPIO4\_C6\_d|
| 19| AJ1| GPIO4\_C7\_d| GPIO4\_C7\_d| 3.3V| MIPI\_DSI2 reset signal| PCIE\_PWR\_EN\_3V3|
| 21| AL3| UART6\_TX\_M3| | 3.3V| UART6 send data| UART6\_TX\_M3\_3V3|
| 23| ALK1| UART6\_RX\_M3| | 3.3V| UART6 receive data| UART6\_RX\_M3\_3V3|
| 25| | WIFI\_PEN\_3V3| | 3.3V| WIFI \_ PEN \_ 3 V3 enable signal <font style="background-color:#ffff00;">(3.3 V pull-up, no GPIO connected) | WIFI\_PEN\_3V3|
| 27| ——| GND| ——| ——| Ground| GND|
| 29| 1C5| CAN0\_TX\_M2\_3V3| | 3.3V| CAN0 data sending| CAN0\_TX\_M2\_3V3|
| 31| 1B5| CAN0\_RX\_M2\_3V3| | 3.3V| CAN0 data receiving| CAN0\_RX\_M2\_3V3|
| 33| 1Y24| GPIO0\_B6\_d| GPIO0\_B6\_d| 3.3V| TF\_PWR\_EN\_3V3 enable signal| TF\_PWR\_EN\_3V3|
| 35| 1D18| ETH\_CLK1\_25M\_OUT\_M0| | 3.3V| PHY 25MHz reference clock output| ETH\_CLK1\_25M\_OUT\_M0|
| 37| 1E15| ETH1\_MCLK\_M0| | 3.3V| PHY 125MHz sync clock input| ETH1\_MCLK\_M0|
| 39| 1Y21| GPIO0\_C6\_d| GPIO0\_C6\_d| 3.3V| MIPI\_DSI1 enable signal| MIPI\_DSI1\_EN|
| 41| ——| GND| ——| ——| Ground| GND|
| 43| 1D12| I2C4\_SDA\_M3| | 1.8V| I2C4 Data| I2C4\_SDA\_M3|
| 45| 1E9| I2C4\_SCL\_M3| | 1.8V| I2C4 clock| I2C4\_SCL\_M3|
| 47| A9| GMAC0\_MDIO\_M0| | 1.8V| GMAC0 serial management data| GMAC0\_MDIO\_M0|
| 49| 1A7| GMAC0\_MDC\_M0| | 1.8V| GMAC0 serial management clock| GMAC0\_MDC\_M0|
| 51| ——| GND| ——| ——| Ground| GND|
| 53| ——| ——| ——| ——| ——| ——|
| 55| ——| ——| ——| ——| <font style="color:rgb(255, 0, 0);">—— | ——|
| 57| 1D13| ETH\_CLK0\_25M\_OUT\_M0| | 1.8V| PHY 25MHz reference clock output| ETH\_CLK0\_25M\_OUT\_M0|
| 59| ——| ——| ——| ——| <font style="color:rgb(255, 0, 0);">—— | ——|
| 61| B14| ETH0\_MCLK\_M0| | 1.8V| PHY 125MHz sync clock input| ETH0\_MCLK\_M0|
| 63| ——| GND| ——| ——| Ground| GND|
| 65| AE28| MIPI\_DPHY\_CSI1\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI1\_RX\_D0N|
| 67| AE29| MIPI\_DPHY\_CSI1\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI1\_RX\_D0P|
| 69| ——| GND| ——| ——| Ground| GND|
| 71| AF28| MIPI\_DPHY\_CSI1\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI1\_RX\_D1N|
| 73| AF29| MIPI\_DPHY\_CSI1\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI1\_RX\_D1P|
| 75| ——| GND| ——| ——| Ground| GND|
| 77| 1AC23| MIPI\_DPHY\_CSI1\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI1\_RX\_CLKN clock +| MIPI\_DPHY\_CSI1\_RX\_CLKN|
| 79| 1AC22| MIPI\_DPHY\_CSI1\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI1\_RX\_CLKP clock +| MIPI\_DPHY\_CSI1\_RX\_CLKP|
| 81| ——| GND| ——| ——| Ground| GND|
| 83| AG28| MIPI\_DPHY\_CSI1\_RX\_D2N/   MIPI\_DPHY\_CSI2\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI2\_RX\_D0N|
| 85| AG29| MIPI\_DPHY\_CSI1\_RX\_D2P/   MIPI\_DPHY\_CSI2\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI2\_RX\_D0P|
| 87| ——| GND| ——| ——| Ground| GND|
| 89| AH28| MIPI\_DPHY\_CSI1\_RX\_D3N/   MIPI\_DPHY\_CSI2\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI2\_RX\_D1N|
| 91| AH29| MIPI\_DPHY\_CSI1\_RX\_D3P/   MIPI\_DPHY\_CSI2\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI2\_RX\_D1P|
| 93| ——| GND| ——| ——| Ground| GND|
| 95| 1AD22| MIPI\_DPHY\_CSI2\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI2\_RX\_CLKN clock +| MIPI\_DPHY\_CSI2\_RX\_CLKN|
| 97| 1AD21| MIPI\_DPHY\_CSI2\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI2\_RX\_CLKN clock +| MIPI\_DPHY\_CSI2\_RX\_CLKN|
| 99| ——| GND| ——| ——| Ground| GND|

**Table 8 P4 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| AD29| PWM1\_CH1\_M0| | 3.3V| PWM1| x|
| 4| AC28| GPIO0\_D1\_d| | 3.3V| TYPEC enable| TYPEC0\_PWREN|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| GND| ——| ——| Ground| GND|
| 10| B9| GMAC0\_TXD3\_M0| | 1.8V| GMAC0 data send 3| GMAC0\_TXD3\_M0|
| 12| 1A8| GMAC0\_TXD2\_M0| | 1.8V| GMAC0 data send 2| GMAC0\_TXD2\_M0|
| 14| B10| GMAC0\_TXD1\_M0| | 1.8V| GMAC0 data send 1| GMAC0\_TXD1\_M0|
| 16| 1A9| GMAC0\_TXD0\_M0| | 1.8V| GMAC0 data send 0| GMAC0\_TXD0\_M0|
| 18| A11| GMAC0\_TXCTL\_M0| | 1.8V| GMAC0 send control| GMAC0\_TXCTL\_M0|
| 20| B11| GMAC0\_TXCLK\_M0| | 1.8V| GMAC0 send clock| GMAC0\_TXCLK\_M0|
| 22| ——| GND| ——| ——| Ground| GND|
| 24| 1A10| GMAC0\_RXD3\_M0| | 1.8V| GMAC0 receive data 3| GMAC0\_RXD3\_M0|
| 26| B12| GMAC0\_RXD2\_M0| | 1.8V| GMAC0 receive data 2| GMAC0\_RXD2\_M0|
| 28| 1A11| GMAC0\_RXD1\_M0| | 1.8V| GMAC0 receive data 1| GMAC0\_RXD1\_M0|
| 30| A13| GMAC0\_RXD0\_M0| | 1.8V| GMAC0 receive data 0| GMAC0\_RXD0\_M0|
| 32| B13| GMAC0\_RXCTL\_M0| | 1.8V| GMAC0 receive control| GMAC0\_RXCTL\_M0|
| 34| 1A12| GMAC0\_RXCLK\_M0| | 1.8V| GMAC0 receive clock| GMAC0\_RXCLK\_M0|
| 36| ——| GND| ——| ——| Ground| GND|
| 38| 1A13| GMAC1\_TXD3\_M0| | 3.3V| GMAC1 data send 3| GMAC1\_TXD3\_M0|
| 40| A15| GMAC1\_TXD2\_M0| | 3.3V| GMAC1 data send 2| GMAC1\_TXD2\_M0|
| 42| B15| GMAC1\_TXD1\_M0| | 3.3V| GMAC1 data send 1| GMAC1\_TXD1\_M0|
| 44| 1A14| GMAC1\_TXD0\_M0| | 3.3V| GMAC1 data send 0| GMAC1\_TXD0\_M0|
| 46| B16| GMAC1\_TXCTL\_M0| | 3.3V| GMAC1 send control| GMAC1\_TXCTL\_M0|
| 48| 1C15| GMAC1\_TXCLK\_M0| | 3.3V| GMAC1 send clock| GMAC1\_TXCLK\_M0|
| 50| ——| GND| ——| ——| Ground| GND|
| 52| 1A15| GMAC1\_RXD3\_M0| | 3.3V| GMAC1 receive data 3| GMAC1\_RXD3\_M0|
| 54| A17| GMAC1\_RXD2\_M0| | 3.3V| GMAC1 receive data 2| GMAC1\_RXD2\_M0|
| 56| B17| GMAC1\_RXD1\_M0| | 3.3V| GMAC1 receive data 1| GMAC1\_RXD1\_M0|
| 58| 1A16| GMAC1\_RXD0\_M0| | 3.3V| GMAC1 receive data 0| GMAC1\_RXD0\_M0|
| 60| B18| GMAC1\_RXCTL\_M0| | 3.3V| GMAC1 receive control| GMAC1\_RXCTL\_M0|
| 62| 1D15| GMAC1\_RXCLK\_M0| | 3.3V| GMAC1 receive clock| GMAC1\_RXCLK\_M0|
| 64| ——| GND| ——| ——| Ground| GND|
| 66| H28| MIPI\_DPHY\_CSI3\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D0P data |receive 0+| MIPI\_DPHY\_CSI3\_RX\_D0P|
| 68| H29| MIPI\_DPHY\_CSI3\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI3\_RX\_D0N|
| 70| ——| GND| ——| ——| Ground| GND|
| 72| J28| MIPI\_DPHY\_CSI3\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI3\_RX\_D1P|
| 74| J29| MIPI\_DPHY\_CSI3\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI3\_RX\_D1N|
| 76| ——| GND| ——| ——| Ground| GND|
| 78| 1H22| MIPI\_DPHY\_CSI3\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI3\_RX\_CLKP clock +| MIPI\_DPHY\_CSI3\_RX\_CLKP|
| 80| 1H23| MIPI\_DPHY\_CSI3\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI3\_RX\_CLKN clock +| MIPI\_DPHY\_CSI3\_RX\_CLKN|
| 82| ——| GND| ——| ——| Ground| GND|
| 84| K28| MIPI\_DPHY\_CSI3\_RX\_D2P/   MIPI\_DPHY\_CSI4\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI4\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI4\_RX\_D0P|
| 86| K29| MIPI\_DPHY\_CSI3\_RX\_D2N/   MIPI\_DPHY\_CSI4\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI4\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI4\_RX\_D0N|
| 88| ——| GND| ——| ——| Ground| GND|
| 90| L28| MIPI\_DPHY\_CSI3\_RX\_D3P/   MIPI\_DPHY\_CSI4\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI4\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI4\_RX\_D1P|
| 92| L29| MIPI\_DPHY\_CSI3\_RX\_D3N/   MIPI\_DPHY\_CSI4\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI4\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI4\_RX\_D1N|
| 94| ——| GND| ——| ——| Ground| GND|
| 96| 1K22| MIPI\_DPHY\_CSI4\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI4\_RX\_CLKP clock +| MIPI\_DPHY\_CSI4\_RX\_CLKP|
| 98| 1K23| MIPI\_DPHY\_CSI4\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI4\_RX\_CLKN clock +| MIPI\_DPHY\_CSI4\_RX\_CLKN|
| 100| ——| GND| ——| ——| Ground| GND|

### 2.7 FET3576-C/ FET3576-C2 SoM Pin Description (by Function)

**Note: **

- **Default Please don’t make any modifications for all SoM pin functions regulated in the “default functions” of the following table, otherwise, it may have conflicts with the factory driver. If you have any questions, please contact our sales or technical support promptly;**

- **When you have multiple functional expansion requirements, please refer to the “FET3576 SoM Pin Multiplexing Comparison Table” in the materials. However, for more detailed information, please refer to the relevant documentation, chip datasheets, and user manuals;**

- **The “Signal Name” column lists the default pin names corresponding to the SoM connections to the carrier board.**

#### 2.7.1 Power Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| Power supply| VCC\_DCIN| Power Input| SoM power supply pin, 5-13V| P3\_91|
| | | | | P3\_93|
| | | | | P3\_95|
| | | | | P3\_97|
| | | | | P3\_99|
| | | | | P3\_98|
| | | | | P3\_100|
| | Carry\_Board\_PEN| Power enable| Peripheral power enable for carrier board| P3\_87|
| | GND| Ground| SoM power ground, all GND pins need to be connected| ——|

#### 2.7.2 Control Pin Reset

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| SoM Reset| RESET\_L| I| SoM power-off reset, low level active| P2\_100|

#### 2.7.3 SoM Startup Control Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:-----------|:----------:|
| SoM startup mode switching| PMIC\_VDC| I| When the pin is left floating (unconnected), the SoM will power on and boot up by default. <br />When the pin is pulled low, the SoM will not power on and boot up automatically; <br />pressing the PWRON\_L button will initiate the startup process. | P3\_10|


#### 2.7.4 Flashing Control Pin Reset

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Maskrom Mode| SARADC\_VIN0\_BOOT| I| Go to Maskrom mode by pulling low before powering on. | P1\_28|
| Recovery Mode| SARADC\_VIN1\_KEY/RECOVERY| I| Pull low before power-on to enter Recovery mode. | P1\_30|

#### 2.7.5 Function Key Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|----------|:----------:|:----------:|:----------:|:----------:|
| Maskrom button| SARADC\_VIN0\_BOOT| I| Go to Maskrom mode by pulling low before powering on| P1\_28|
| On/Off| PWRON\_L| I| SoM power supply switch, low level shutdown| P3\_88|
| V+/RECOVERY KEY| SARADC\_VIN1\_KEY/RECOVERY| I| Volume + /Recovery button| P1\_30|
| V- Key| | I| V- Key| P1\_30|
| MENU button| | I| Button button| P1\_30|
| ESC button| | I| ESC key| P1\_30|

#### 2.7.6 USB Data/Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| USB| TYPEC\_DPTX\_AUX\_PUPDCTL2| O| DP\_AUX pull up \& down| P1\_48|
| | USB\_HUB\_RST\_3V3| O| USB\_HUB reset| P1\_50|
| | TYPEC\_DPTX\_AUX\_PUPDCTL1| O| DP\_AUX pull up \& down| P1\_82|
| | USB2\_HOST1\_D\_P| I/O| USB2.0\_HOST data+| P1\_92|
| | USB2\_HOST1\_D\_N| I/O| USB2.0\_HOST data-| P1\_94|
| | USB2\_OTG1\_ID| I| USB2\_OTG1\_ID pin| P1\_98|
| | USB2\_OTG1\_VBUSDET| I| USB2\_OTG1\_VBUSDET pin| P1\_100|
| | TYPEC0\_INT| I| Interruption of the CC chip in the Type-C interface| P2\_75|
| | USB3\_HOST1\_SSTX\_P| O| USB3.0\_HOST1 send+| P2\_89|
| | USB3\_HOST1\_SSTX\_N| O| USB3.0\_HOST1 send-| P2\_91|
| | USB3\_HOST1\_SSRX\_P| I| USB3.0\_HOST1 receive+| P2\_95|
| | USB3\_HOST1\_SSRX\_N| I| USB3.0\_HOST1 receive-| P2\_97|
| | USB3\_OTG0\_SSRX1\_N| I| USB3.0\_OTG0 receive 1-| P3\_3|
| | USB3\_OTG0\_SSRX1\_P| I| USB3.0\_OTG0 receive 1+| P3\_5|
| | USB3\_OTG0\_SSTX1\_P| O| USB3.0\_OTG0 send 1+| P3\_9|
| | USB3\_OTG0\_SSTX1\_N| O| USB3.0\_OTG0 send 1-| P3\_11|
| | USB3\_OTG0\_SSRX2\_N| I| USB3.0\_OTG receive 2-| P3\_15|
| | USB3\_OTG0\_SSRX2\_P| I| USB3.0\_OTG receive 2+| P3\_17||
| | USB3\_OTG0\_SSTX2\_P| O| USB3.0\_OTG0 send 2+| P3\_21|
| | USB3\_OTG0\_SSTX2\_N| O| USB3.0\_OTG0 send 2-| P3\_23|
| | USB2\_OTG0\_ID| I| USB2\_OTG0\_ID pin| P3\_14|
| | USB2\_OTG0\_VBUSDET| I| USB2\_OTG0\_VBUSDET pin| P3\_16|
| | USB2\_OTG0\_D\_N| I/O| USB2.0\_OTG data-| P3\_18|
| | USB2\_OTG0\_D\_P| I/O| USB2.0\_OTG data+| P3\_20|
| | DP\_TX\_AUX\_P| I/O| DP\_TX\_AUX data+| P3\_22|
| | DP\_TX\_AUX\_N| I/O| DP\_TX\_AUX data-| P3\_24|
| | TYPEC0\_PWREN| O| Type - C power enable| P4\_4|

#### 2.7.7 SD Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| SDIO| SDMMC0\_D0| I/O| SDIO data bit 0| P1\_5|
| | SDMMC0\_D1| I/O| SDIO data bit 1| P1\_3|
| | SDMMC0\_D2| I/O| SDIO data bit 2| P1\_13|
| | SDMMC0\_D3| I/O| SDIO data bit 3| P1\_11|
| | SDMMC0\_CLK| O| SDIO clock| P1\_7|||
| | SDMMC0\_CMD| I/O| SDIO Command Signal| P1\_9||
| | SDMMC0\_DET\_L| I| SD Card Plug Detection| P3\_90|
| | TF\_PWR\_EN\_3V3| O| SD power enable| P4\_33|

#### 2.7.8 WIFI Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| Control Pin| WIFI\_REG\_ON\_H| O| WIFI Power Enable| P3\_40|
| | WIFI\_WAKE\_HOST\_H| I/O| The wireless network wakes up the host.| P3\_52|
| | BT\_WAKE\_HOST\_H| I/O| The bluetooth wakes up the host.| P3\_54|
| | HOST\_WAKE\_BT\_H| I/O| The host wakes up Bluetooth.| P3\_46|
| | BT\_REG\_ON\_H| O| Bluetooth Power Enable| P3\_42|
| | WIFI\_PEN\_3V3| O| WIFI Module Power Enable| P4\_25|
| SDIO| SDMMC1\_D0\_M0| I/O| SDIO data bit 0| P3\_29|
| | SDMMC1\_D1\_M0| I/O| SDIO data bit 1| P3\_27|
| | SDMMC1\_D2\_M0| I/O| SDIO data bit 2| P3\_41|
| | SDMMC1\_D3\_M0| I/O| SDIO data bit 3| P3\_39|
| | SDMMC1\_CLK\_M0| O| SDIO clock| P3\_33|
| | SDMMC1\_CMD\_M0| I/O| SDIO Command Signal| P3\_35|
| PCM| SAI2\_SDI\_M0| I| PCM data input| P3\_53|
| | SAI2\_SDO\_M0| O| PCM Data output| P3\_45|
| | SAI2\_LRCK\_M0| O| PCM Synchronization Control Signal| P3\_51|
| | SAI2\_SCLK\_M0| O| PCM clock signal| P3\_47|
| UART| UART4\_TX\_M1| O| UART4 data sending| P3\_28|
| | UART4\_RX\_M1| I| UART4 data receiving| P3\_30|
| | UART4\_RTSN\_M1| O| UART4 sending request| P3\_34|
| | UART4\_CTSN\_M1| I| UART4 transmit enable| P3\_36|

#### 2.7.9 UART Interface Control Pins

| **Default Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|||||||||||
| UART0| UART0\_TX\_M0\_DEBUG| O| UART0 data sending| P2\_7|
| | UART0\_RX\_M0\_DEBUG| I| UART0 data receiving| P2\_9|
| UART5| UART5\_TX\_M1| O| UART5 data sending| P2\_39|
| | UART5\_RX\_M1| I| UART5 data receiving| P2\_61|
| UART6| UART6\_TX\_M3| O| UART6 data sending| P4\_21|
| | UART6\_RX\_M3| I| UART6 data receiving| P4\_23|
| UART8| UART8\_TX\_M0| O| UART8 data sending| P2\_73|
| | UART8\_RX\_M0| I| UART8 data receiving| P2\_69|
| | UART8\_RTSN\_M0| O| UART8 sending request| P2\_77|
| | UART8\_CTSN\_M0| I| UART8 transmit enable| P2\_79|

#### 2.7.10 IIC Interface Control Pins

| **Default Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| I2C0| I2C0\_SCL\_M1| O| I2C clock| P4\_11|
| | I2C0\_SDA\_M1| I/O| I2C Data| P4\_15|
| I2C2| I2C2\_SCL\_M0| O| I2C clock| P2\_11|
| | I2C2\_SDA\_M0| I/O| I2C Data| P2\_1|
| I2C3| I2C3\_SCL\_M0| O| I2C clock| P2\_35|
| | I2C3\_SDA\_M0| I/O| I2C Data| P2\_43||
| I2C4| I2C4\_SCL\_M3| O| I2C clock| P4\_45|
| | I2C4\_SDA\_M3| I/O| I2C Data| P4\_43||
| I2C5| I2C5\_SCL\_M3| O| I2C clock| P5\_31|
| | I2C5\_SDA\_M3| I/O| I2C Data| P5\_33|
| I2C7| I2C7\_SCL\_M1| O| I2C clock| P1\_70|
| | I2C7\_SDA\_M1| I/O| I2C Data| P1\_72|
| I2C8| I2C8\_SCL\_M2| O| I2C clock| P1\_56|
| | I2C8\_SDA\_M2| I/O| I2C Data| P1\_60|
| HDMI\_I2C| HDMI\_TX\_SCL| O| I2C clock| P1\_68|
| | HDMI\_TX\_SDA| I/O| I2C Data| P1\_58|

#### 2.7.11 Ethernet Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| GMAC0| ETH\_CLK0\_25M\_OUT\_M0| O| PHY 25MHz reference clock output| P4\_57|
| | ETH0\_MCLK\_M0| I| PHY 125MHz sync clock input| P4\_61|
| | GMAC0\_INT| I| RGMII Interrupt| P3\_94|
| | GMAC0\_RESET| O| RGMII Reset| P3\_92|
| | GMAC0\_MDC\_M0| O| Serial Management Clock| P4\_49|
| | GMAC0\_MDIO\_M0| I/O| Serial Management Data| P4\_47|
| | GMAC0\_TXD3\_M0| O| RGMII Data Send 3| P4\_10|
| | GMAC0\_TXD2\_M0| O| RGMII Data Send 2| P4\_12|
| | GMAC0\_TXD1\_M0| O| RGMII Data Send 1| P4\_14|
| | GMAC0\_TXD0\_M0| O| RGMII Data Send 0| P4\_16|
| | GMAC0\_TXCTL\_M0| O| RGMII send control| P4\_18|
| | GMAC0\_TXCLK\_M0| O| RGMII send clock| P4\_20|
| | GMAC0\_RXD3\_M0| I| RGMII receive data 3| P4\_24|
| | GMAC0\_RXD2\_M0| I| RGMII receive data 2| P4\_26|
| | GMAC0\_RXD1\_M0| I| RGMII receive data 1| P4\_28|
| | GMAC0\_RXD0\_M0| I| RGMII receive data 0| P4\_30|
| | GMAC0\_RXCTL\_M0| I| RGMII receive control| P4\_32|
| | GMAC0\_RXCLK\_M0| I| RGMII receive clock| P4\_34|
| GMAC1| ETH\_CLK1\_25M\_OUT\_M0| O| PHY 25MHz reference clock output| P4\_35|
| | ETH1\_MCLK\_M0| I| PHY 125MHz sync clock input| P4\_37|
| | GMAC1\_INT| I| RGMII Interrupt| P2\_19|
| | GMAC1\_RESET| O| RGMII Reset| P2\_21|
| | GMAC1\_MDC\_M0| O| Serial Management Clock| P4\_7|
| | GMAC1\_MDIO\_M0| I/O| Serial Management Data| P4\_5||
| | GMAC1\_TXD3\_M0| O| RGMII Data Send 3| P4\_38|
| | GMAC1\_TXD2\_M0| O| RGMII Data Send 2| P4\_40|
| | GMAC1\_TXD1\_M0| O| RGMII Data Send 1| P4\_42|
| | GMAC1\_TXD0\_M0| O| RGMII Data Send 0| P4\_44|
| | GMAC1\_TXCTL\_M0| O| RGMII send control| P4\_46|
| | GMAC1\_TXCLK\_M0| O| RGMII send clock| P4\_48|
| | GMAC1\_RXD3\_M0| I| RGMII receive data 3| P4\_52|
| | GMAC1\_RXD2\_M0| I| RGMII receive data 2| P4\_54|
| | GMAC1\_RXD1\_M0| I| RGMII receive data 1| P4\_56|
| | GMAC1\_RXD0\_M0| I| RGMII receive data 0| P4\_58|
| | GMAC1\_RXCTL\_M0| I| RGMII receive control| P4\_60|
| | GMAC1\_RXCLK\_M0| I| RGMII receive clock| P4\_62|

#### 2.7.12 MIPI\_CSI Output Interface

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| MIPI\_CSI0| MIPI\_DPHY\_CSI0\_RX\_D0\_P| I| CSI Data 0+| P3\_58|
| | MIPI\_DPHY\_CSI0\_RX\_D0\_N| I| CSI Data 0-| P3\_60|
| | MIPI\_DPHY\_CSI0\_RX\_D1\_P| I| CSI Data 1+| P3\_64|
| | MIPI\_DPHY\_CSI0\_RX\_D1\_N| I| CSI Data 1-| P3\_66|
| | MIPI\_DPHY\_CSI0\_RX\_CLK\_P| I| CSI clock+| P3\_70|
| | MIPI\_DPHY\_CSI0\_RX\_CLK\_N| I| CSI clock-| P3\_72|
| | MIPI\_DPHY\_CSI0\_RX\_D2\_P| I| CSI Data 2+| P3\_76|
| | MIPI\_DPHY\_CSI0\_RX\_D2\_N| I| CSI Data 2-| P3\_78|
| | MIPI\_DPHY\_CSI0\_RX\_D3\_P| I| CSI Data 3+| P3\_82|
| | MIPI\_DPHY\_CSI0\_RX\_D3\_N| I| CSI Data 3-| P3\_84|
| MIPI\_CSI1| MIPI\_DPHY\_CSI1\_RX\_D0\_P| I| CSI Data 0+| P4\_67|
| | MIPI\_DPHY\_CSI1\_RX\_D0\_N| I| CSI Data 0-| P4\_65|
| | MIPI\_DPHY\_CSI1\_RX\_D1\_P| I| CSI Data 1+| P4\_73||
| | MIPI\_DPHY\_CSI1\_RX\_D1\_N| I| CSI Data 1-| P4\_71|
| | MIPI\_DPHY\_CSI1\_RX\_CLK\_P| I| CSI clock+| P4\_79|
| | MIPI\_DPHY\_CSI1\_RX\_CLK\_N| I| CSI clock-| P4\_77|
| MIPI\_CSI2| MIPI\_DPHY\_CSI2\_RX\_D0\_P| I| CSI Data 0+| P4\_85|
| | MIPI\_DPHY\_CSI2\_RX\_D0\_N| I| CSI Data 0-| P4\_83|
| | MIPI\_DPHY\_CSI2\_RX\_D1\_P| I| CSI Data 1+| P4\_91|
| | MIPI\_DPHY\_CSI2\_RX\_D1\_N| I| CSI Data 1-| P4\_89|
| | MIPI\_DPHY\_CSI2\_RX\_CLK\_P| I| CSI clock+| P4\_97|
| | MIPI\_DPHY\_CSI2\_RX\_CLK\_N| I| CSI clock-| P4\_95|
| MIPI\_CSI3| MIPI\_DPHY\_CSI3\_RX\_D0\_P| I| CSI Data 0+| P4\_66|
| | MIPI\_DPHY\_CSI3\_RX\_D0\_N| I| CSI Data 0-| P4\_68|
| | MIPI\_DPHY\_CSI3\_RX\_D1\_P| I| CSI Data 1+| P4\_72|
| | MIPI\_DPHY\_CSI3\_RX\_D1\_N| I| CSI Data 1-| P4\_74|
| | MIPI\_DPHY\_CSI3\_RX\_CLK\_P| I| CSI clock+| P4\_78|
| | MIPI\_DPHY\_CSI3\_RX\_CLK\_N| I| CSI clock-| P4\_80|
| MIPI\_CSI4| MIPI\_DPHY\_CSI4\_RX\_D0\_P| I| CSI Data 0+| P4\_84|
| | MIPI\_DPHY\_CSI4\_RX\_D0\_N| I| CSI Data 0-| P4\_86|
| | MIPI\_DPHY\_CSI4\_RX\_D1\_P| I| CSI Data 1+| P4\_90|
| | MIPI\_DPHY\_CSI4\_RX\_D1\_N| I| CSI Data 1-| P4\_92|
| | MIPI\_DPHY\_CSI4\_RX\_CLK\_P| I| CSI clock+| P4\_96|
| | MIPI\_DPHY\_CSI4\_RX\_CLK\_N| I| CSI clock-| P4\_98|

#### 2.7.13 MIPI\_DSI Interface Control Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| MIPI\_DSI| MIPI\_DPHY\_DSI\_TX\_D0\_P| O| DSI Data 0+| P3\_59|
| | MIPI\_DPHY\_DSI\_TX\_D0\_N| O| DSI Data 0-| P3\_57|
| | MIPI\_DPHY\_DSI\_TX\_D1\_P| O| DSI Data 1+| P3\_65|
| | MIPI\_DPHY\_DSI\_TX\_D1\_N| O| DSI Data 1-| P3\_63|
| | MIPI\_DPHY\_DSI\_TX\_CLK\_P| O| DSI clock+| P3\_71|
| | MIPI\_DPHY\_DSI\_TX\_CLK\_N| O| DSI clock-| P3\_69|
| | MIPI\_DPHY\_DSI\_TX\_D2\_P| O| DSI Data 2+| P3\_77|
| | MIPI\_DPHY\_DSI\_TX\_D2\_N| O| DSI Data 2-| P3\_75|
| | MIPI\_DPHY\_DSI\_TX\_D3\_P| O| DSI Data 3+| P3\_83|
| | MIPI\_DPHY\_DSI\_TX\_D3\_N| O| DSI Data 3-| P3\_81|
| | PWM0\_CH0\_M0| O| Screen PWM dimming| P2\_13|
| | MIPI\_DSI1\_EN| O| Screen Power Enable| P4\_39|
| | MIPI\_DSI1\_RESET| O| Touchscreen Reset| P4\_9|
| | MIPI\_DSI1\_INT| I| Touch screen interrupt| P4\_1|

#### 2.7.14 PCIE Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| PCIE| PCIE0\_TX\_P| O| PCIE Data Send+| P2\_78|
| | PCIE0\_TX\_N| O| PCIE Data Send-| P2\_76|
| | PCIE0\_RX\_P| I| PCIE Data Receive+| P2\_72|
| | PCIE0\_RX\_N| I| PCIE Data Receive-| P2\_70||
| | PCIE0\_REFCLK\_P| O| PCIE Clock Output+| P2\_66|
| | PCIE0\_REFCLK\_N| O| PCIE Clock Output-| P2\_64|
| | PCIE0\_WAKEn\_M0| I| PCIE wake-up activation signal| P1\_74|
| | PCIE0\_CLKREQn\_M0| O| PCIE clock request signal| P1\_78|
| | PCIE0\_PERSTn| I| PCIE Reset Signal| P1\_64|
| | PCIE0\_PRSN2\_3V3| I| PCIE Card Detection Signal| P4\_3|
| | PCIE\_PWR\_EN\_3V3| O| PCIE 3.3V power enable| P4\_19|

#### 2.7.15 HDMI Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| HDMI| HDMI\_TX\_HPDIN\_M0\_1V8| I| HDMI Hot Plug Detection| P2\_71|
| | HDMI\_TX\_CEC\_M0| I/O| HDMI\_CEC Recogonition| P1\_52|
| | HDMI\_TX\_SBD\_N| O| HDMI\_SBD(ARC)-| P1\_17|
| | HDMI\_TX\_SBD\_P| O| HDMI\_SBD(ARC)+| P1\_19|
| | HDMI\_TX\_D3\_N| O| HDMI Differential Data 3-| P1\_23|
| | HDMI\_TX\_D3\_P| O| HDMI Differential Data 3+| P1\_25|
| | HDMI\_TX\_D0\_N| O| HDMI Differential Data 0-| P1\_29|
| | HDMI\_TX\_D0\_P| O| HDMI Differential Data 0+| P1\_31|
| | HDMI\_TX\_D1\_N| O| HDMI Differential Data 1-| P1\_35|
| | HDMI\_TX\_D1\_P| O| HDMI Differential Data 1+| P1\_37|
| | HDMI\_TX\_D2\_N| O| HDMI Differential Data 2-| P1\_41|
| | HDMI\_TX\_D2\_P| O| HDMI Differential Data 2+| P1\_43|
| | HDMI\_TX\_SCL| O| I2C clock| P1\_68||
| | HDMI\_TX\_SDA| I/O| I2C Data| P1\_58|

#### 2.7.16 I2S AUDIO Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| I2S| SAI1\_MCLK\_M0| O| I2S main Clock| P2\_65|
| | SAI1\_SCLK\_M0| I/O| I2S serial clock| P2\_55|
| | SAI1\_LRCK\_M0| I/O| I2S Left/Right Channel Switching| P2\_53|
| | SAI1\_SDO0\_M0| O| I2S serial data output| P2\_49|
| | SAI1\_SDI0\_M0| I| I2S serial data input| P2\_59|
| | HP\_DET\_L| I| Earphone insert detection| P2\_29|
| | SARADC\_VIN3\_HP\_HOOK| I| Headphone in-line control buttons| P1\_34|

#### 2.7.17 CAN Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| CAN0| CAN0\_TX\_M2\_3V3| O| CAN0 data sending| P4\_29|
| | CAN0\_RX\_M2\_3V3| I| CAN0 data receiving| P4\_31|
| CAN1| CAN1\_TX\_M3\_3V3| O| CAN1 data sending| P1\_66|
| | CAN1\_RX\_M3\_3V3| I| CAN1 data receiving| P1\_54|
#### 2.7.18  4G/5G Module Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| 4G/5G module control| 4G/5G\_PWREN| O| Power enable| P1\_76|
| | 4G/5G\_RESET| O| 4G/5G module reset| P2\_51|
| | 4G/5G\_MOD\_PWREN| O| 4G/5G module power enable| P1\_80|

#### 2.7.19 ADC Control Interface

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| ADC| SARADC\_VIN2\_HW\_ID| I| ADC input| P1\_32|
| | SARADC\_VIN4| I| ADC input| P1\_36||
| | SARADC\_VIN5| I| ADC input| P1\_38|
| | SARADC\_VIN6| I| ADC input| P1\_40|
| | SARADC\_VIN7| I| ADC input| P1\_42|

#### 2.7.20 Other Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| IO Expansion| IIC\_GPIO\_INT| I| IO Expansion Chip Interrupt| P2\_67|

### 2.8 SoM Hardware Design Description

#### 2.8.1 SoM Circuit Design Guidelines

FET3576-C/ The FET3576-C2 SoM integrates power supply and storage circuits into a compact module, requiring minimal external circuitry. To form a minimal system, only a 5-13V power supply, a reset button, a programming SD card, and boot configuration are needed, as illustrated below:   
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1764576243989-8d6eb73a-145f-4b3f-9333-b8672f725121.png)Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external peripherals beyond the minimal system. For instance, connecting a debug serial port can be used to view printed information, while reserving an OTG interface allows for debugging information output. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK3576-C Carrier Board Description".

#### 2.8.2 SoM Anti-Vibration Design Guidelines

It uses M2 pre-applied nylon (NYLOK) screws to fix the SoM through the pre-drilled mounting holes at its four corners. The fastening torque should be controlled at 0.15 N·m. The specific assembly diagram is as follows:

![](https://cdn.nlark.com/yuque/0/2025/jpeg/50461850/1763703634706-b32a022d-75e5-469c-aeb8-ff9f7d5fd09f.jpeg)

This design has been validated by vibration tests specified in the GB/T 2423.10-2008 / IEC 60068-2-6:1995 standards, achieving the following levels: 	Frequency range: 10 Hz ~ 150 Hz

Test axes: X, Y, Z axes

Displacement amplitude: 0.35 mm

Acceleration amplitude: 5 g

The performance data listed in this manual are derived from tests conducted in a standard laboratory environment and are applicable to general industrial equipment. Performance in actual applications may vary due to factors such as installation methods and combined stresses.

## 3\. OK3576-C \& OK3576-C21 Embedded Development Platform Description

### 3.1 OK3576-C / OK3576-C21 Development Board Interface Diagram

The FET3576-C and FET3576-C2 SoMs share the same pin definitions and can be used with the same carrier board. When the FET3576-C is combined with the OK3576-C carrier board, the development board is named the OK3576-C Development Board. When the FET3576-C2 is combined with the OK3576-C carrier board, the development board is named the OK3576-C21 Development Board.

Connection method: Board-to-board.

![](https://cdn.nlark.com/yuque/0/2024/jpeg/49874024/1733464938859-de566621-a7ee-4edd-b1b0-898d80a41e62.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/49874024/1733464952493-ec45bef4-1f29-4fe3-9e46-c17f3993659b.jpeg)

### 3.2 OK3576-C-OK3576-C21 Development Board Dimension Diagram

OK3576-C/OK3576-C21 Development Board Dimension Diagram: 

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199745059-ff2e0738-1b08-482c-89e1-044c92dccefa.png)

Carrier Board PCB size: 130mm × 190mm, for more detailed dimensions, please refer to the user information DXF document;

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm; 

Plate making process: 1.6mm thickness, 4-layer PCB; 

Power Voltage: DC 12V

Antenna board is used for installing and fixing 4G and 5G antennas, with overall dimension of 20mm × 140mm. See the following figure for more detailed dimensions:

The OK3576-C carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 38mm × 38mm × 10mm. See below for details.

![](https://cdn.nlark.com/yuque/0/2025/png/58486295/1759195475334-74e0d2de-1b14-4865-b9fb-0d2d27069ed0.png)

### 3.3 Naming Rules

ABC-D+IK:M

| **Field**| **Field Description**| **Value**| **Description**|
|:----------:|:----------:|:----------:|:----------:|
| A| Grade| PC| Prototype Sample|
| | | Blank| Mass Production|
| B| Product Line Identification| OK| Forlinx Embedded development board|
| C| CPU Name| RK3576| RK3576|
| \-| Segment Identification| \-|
| D| Connection| Cx| Board to board connector|
| \+| Segment Identification| \+| The configuration parameter section follows this identifier.|
| I| Operation Temperature| I| -40 to 85℃|
| K| PCB Version| 10| V1.0|
| | | xx| Vx.x|
| :M| Internal Identification of the Manufacturer| :X| This is the internal identification of the manufacturer and has no impact on the use.|

### 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 5| 1 x MIPI DPHY V2.0 4-lane interface, supporting up to 4.5 Gbps per lane; Connected via a 26-pin FPC socket; <br />Comes with an OV13855 camera fitted as standard. |
| | | 4 x MIPI DPHY V1.2 2-lane interfaces, supporting up to 2.4 Gbps per lane;<br />Connected via four 26-pin FPC sockets; comes with an OV5645 camera fitted as standard. |
| MIPI DSI| 1| The MIPI interface supports 4-lane output, with a maximum resolution of 2560 x 1600@60Hz.|
| | | Compatible with Forlinx's 7-inch MIPI screen, featuring a resolution of 1024x 600@30fps.|
| HDMI TX| 1| Connected via a standard HDMI socket.|
| | | HDMI v2.1 supports up to 4K@120Hz.|
| DP TX| 1| 1 x DP in combination with USB 3.1 Gen1, led out through Type-C connector.|
| | | DisplayPort v1.4, up to 4K@120Hz.|
| USB3.1 Gen1| 1| Routed through a Type-C connector.|
| | | Combined with DP TX.|
| USB3.0 HOST| 3| Led out through 3 x Type-A USB|
| PCIe2.0| 1| Led out via PCIe X 1 slot:|
| | | Supports a data rate of 5Gbps.|
| Ethernet| 2| Routed out via 2 x RJ45;|
| | | Supports data transmission rates of 10/100/1000 Mbps.|
| TF Card| 1| TF card is available, rate up to 150MHz, support SDR104 mode. |
| Audio| 1| Codec chip on board, support headphone output, MIC input level Speaker output and other functions.|
| CAN| 2| Two CAN buses are routed out from the CAN transceiver. |
| | | Compliy with the CAN and CAN FD specifications. |
| RS485| 2| 2 x RS485 CAN bus routed out through RS485 transceiver. |
| UART| 1| Routed via a 2.44mm pitch connector. |
| | | Baud rates up to 4Mbps. |
| 4G/5G| 1| Supports M.2 packaged 4G/5G modules. |
| WIFI\&BT| 1| On-board AW-CM358SM-WIFI\&BT module. |
| | | WIFI 2.4G/5G , bluetooth 5.0. |
| ADC| 5| Exposed/connected via a 2.44mm pitch header. |
| | | A 12-bit single-ended input SAR-ADC, with a sampling rate of up to 1 MS/s. |
| RTC| 1| On-board RTC chip and battery socket; |
| GPIO| 8| A 12-bit single-ended input SAR-ADC, with a sampling rate of up to 1 MS/s. |

**Note:**

- **The parameters in the table are the theoretical values of hardware design or CPU;**
- **"TBD" means the function has not been developed in this phase.**

### 3.5 OK3576-C/ OK3576-C21 Carrier Board Description

**Note: **

- **The component UID with "\_DNP" mark in the diagram below represents it is not soldered by  default;**

- **The schematics in this section are provided for convenience and may be subject to changes. Please ensure your design strictly follows the original schematic files.**

#### 3.5.1 Carrier Board Power

It uses a 12V power adapter for the power supply, and the power connector is a DC005 socket. The DIP switch S1 serves as the power switch for the development board. Move the switch in the direction indicated on the carrier board to turn it on or off. A TVS diode is connected in parallel after switch S1 for ESD protection. Fuse F1 provides overcurrent protection. Diode D1 works alongside F1 to offer reverse-connection protection. VCC12V\_DCIN supplies power to both the FET3576 SoM and other peripherals on the carrier board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201751774-8f0d16a1-4b7c-4f4c-83fa-bcd2938e9030.png)

VCC12V\_DCIN is stepped down to VCC\_5V via U3 (DC-DC converter). VCC\_5V powers other peripherals on the carrier board. (Note: When selecting the 12V-to-5V DC-DC chip, ensure its output power is sufficiently high. It is recommended to support an output current of 6A or above to guarantee adequate current supply for downstream stages.)

After the SoM starts up normally with 12V power supply, it outputs a high level via the CARRIER\_BOARD\_EN pin to enable U3, thereby outputting VCC\_5V to power certain peripherals on the development board. (This signal level is 3.3V with a drive capability of 10K pull-up. If the enabled device’s enable pin requires drive capability beyond this range, buffers or gate circuits should be added to enhance drive capability, ensuring proper power-up of both the SoM and the carrier board.)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201762785-128471a6-a74f-4f27-9a2e-2e18a6d1f500.png)

VCC\_5V is further stepped down to VCC\_3V3 via U4 (DC-DC converter). VCC\_3V3 supplies power to certain devices on the development board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201772610-7630fdfd-a1b8-4ce6-adff-7ee928028331.png)

VCC\_3V3 is then stepped down to VCC\_1V8 via U2 (LDO). VCC\_1V8 supplies power to certain devices on the development board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201782020-4b99d7b6-0835-4ef1-9a88-7be439626779.png)

**Note:**

- **When designing independently, please strictly adhere to the power-up sequencing;**

- **The selection of step-up/step-down converter chips and their external layout must refer to the corresponding chip manuals to ensure proper power return paths.**

#### 3.5.2 Reset and On/Off Signal

RESET\_L is the reset signal input for the SoM; for ease of debugging, it is connected to a pushbutton.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201789558-11b99632-bfc0-42ed-97ef-04c08ac8aaaf.png)

PWRON\_L serves as the power-on/power-off signal input for the SoM; for ease of debugging, it is connected to a pushbutton.

Additionally, one 2.54mm pitch terminal block is reserved for the PWRON\_L signal, which is left unpopulated by default to facilitate expansion.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201797858-4d5fa53c-86e5-4842-b22f-061c06ef68bc.png)  
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880014438-76daf64a-1cd7-4d02-b290-80fb0cda37d8.png)

Please pay attention to the PMIC\_VDC signal on pin P3\_10 of the System on Module (SoM) connector. This signal can toggle between two power-on modes for the SoM: automatic power-on boot or button-triggered boot.

On the OK3576-C, this functionality is controlled by the presence of resistor R331:

- If R331 is not installed (floating pin), the SoM will automatically boot upon power-up (default configuration);
-  If R331 is installed (pulling the pin low), the SoM will not boot immediately after power-on; instead, it will start only after the PWRON\_L button is pressed.

#### 3.5.3 Boot Configuration

RK3576 supports multiple boot modes. After the chip reset is completed, the built-in boot code can boot from the following interface devices. The specific boot sequence can be selected according to actual application requirements:

·Serial Flash(FSPI0, FSPI1\_M0, FSPI1\_M1)

·eMMC

·UFS

·SDMMC0 Card

If no boot code is detected in the above devices, system code can be downloaded to these devices via the USB2.0 OTG0 interface using the USB2\_OTG0\_DP/DM signals. It also supports firmware burning through the USB 3.2 Gen1x1 OTG0 interface using the USB3\_OTG0\_SSRX1P/N and USB3\_OTG0\_SSTX1P/N signals. Note: If USB3.0 firmware upgrade is required while supporting 2‑Lane DP, the USB3.2 Gen1x1 OTG0 + DP 2‑Lane (Swap ON) solution must be adopted.

Boot Sequence Selection:

The boot order of the RK3576 can be configured using the SARADC\_VIN0\_BOOT Pin (PIN: P1\_28). By applying different pull-up or pull-down resistor values to this pin, various peripheral boot sequences can be set. The hardware design supports 11 boot modes (Config1–Config11), which are defined below. It is important to select the appropriate configuration based on the specific application requirements.

Table 3.5.3.1 Boot Sequence Configuration

| Item| Rup| Rdown| ADC| BOOT MODE|
|:----------:|:----------:|:----------:|:----------:|----------|
| Config1| DNP| 10K| 0| USB (Maskrom mode)|
| Config2| 10K| 1.13K| 416| FSPI0→USB|
| Confi 3| 10K| 2.49K| 816| FSPI1\_M0→EMMC→USB|
| Config4| 10K| 4.3K| 1231| FSPI1\_M1→EMMC→USB|
| Config5| 10K| 6.8K| 1658| FSPI0→UFS→USB|
| Config6| 10K| 10K| 2048| FSPI1\_M0→UFS→USB|
| Config7| 10K| 14.7K| 2437| UFS→USB|
| Config8| 10K| 23.2K| 2862| UFS→SDMMC0→USB|
| Config9| 10K| 40.2K| 3279| RFU|
| Config10| 10K| 88.7K| 3680| EMMC→SDMMC0→USB|
| Config11| 10K| DNP| 4095| EMMC→USB|

On the SoM, SARADC\_VIN0\_BOOT is configured with a 10 kΩ pull‑up resistor, so the SoM boots from eMMC by default. A pull‑down resistor can be added on the carrier baord to implement other boot sequences. According to the Config1 setting above, OK3576‑C connects SARADC\_VIN0\_BOOT to GND via a tactile switch to enable Maskrom mode.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201812443-75639444-b4a1-4617-b923-3b34d6378034.png)

SARADC\_VIN1 is used to enter Recovery state by shorting to GND. The SoM pulls it up to 1.8 V through a 10 kΩ resistor. On OK3576-C, the key array is of parallel type, and the input key value can be adjusted by increasing or decreasing the keys and adjusting the proportion of the divider resistor, so as to realize multi-key input to meet the customer's product requirements; it is recommended in the design that the key value of any two keys must be greater than ± 35, that is, the center voltage difference must be greater than 123 mV. As shown in the figure:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880014670-c0334437-31a8-4831-8c3a-bca3ff78bb6c.png)

**Note:**

**When doing key acquisition, ESD protection is required near the keys. And 0 key value must be connected in series with a 100ohm resistor to strengthen the anti-static surge capacity (If there is only one button, ESD must be close to the button, ESD → 100ohm resistor → 1nF → chip pin). Where there are multiple buttons, place an ESD tube near each button.**

#### 3.5.4 System Initialization Configuration Signal

In FET3576, there is an important signal that affects the system boot configuration. It must be configured before power‑on and kept stable.

SDMMC0\_DET\_L (PIN: P3\_90) (default function: SDMMC\_DET): Determines whether the VCCIO1 power domain I/O is configured for SDMMC0 or JTAG functionality.

The JTAG and SDMMC functions of the FET3576 are multiplexed; the IOMUX function is switched via the SDMMC0\_DET\_L pin. Consequently, this pin must also be configured before power-up; otherwise, the absence of an output from the JTAG function will affect debugging during the boot phase, whilst the absence of an output from SDMMC0 will affect the SDMMC0 boot function.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199746968-31a0ba65-3cf8-430b-9802-8456f1540d06.png)

If this pin is detected as high, the corresponding I/O pin switches to JTAG mode.

When this pin detects low level (Most SD cards inserted will pull down this pin, if not need special treatment),  the corresponding IO switches to SDMMC0 function.

After the system is up, it can be switched to have registers to control IOMUX, then the pin can be released.

For easy reference, the configuration status of this pin corresponds to its function shown as follows:

Table 3.5.4.1 FET3576 System Initialization Configuration Signal Description

| **Signal Name**| **Internal Pull-up\&down**| **Description**|
|:----------:|:----------:|----------|
| SDMMC0\_DET\_L| Pull-up| SDMMC/ARM JTAG Pin Multiplexing Selection Control Signal:   0: Recognized as SD card inserted, SDMMC/JTAG pins are multiplexed for SDMMC0 function.|

Not recognized as SD card inserted, SDMMC/JTAG pins are multiplexed for JTAG function (Default).

#### 3.5.5 JTAG and UART Debug Circuits

The JTAG interface on the RK3576 chip complies with the IEEE 1149.1 standard; a PC can connect to the DSTREAM emulator via SWD mode (two-wire mode) to debug the ARM core within the chip.

Used for emulators to debug the internal ARM Core.

The JTAG interface is described in the table below:

Table 3.5.5.1 FET3576 JTAG Debug Interface Signals

| **Signal Name**| **Description**|
|:----------:|:----------:|
| JTAG\_TCK\_M0/M1| SWD Mode clock input|
| JTAG\_TMS\_M0/M1| SWD Mode Data Input/Output|

The RK3576 has two JTAG multiplexes: JTAG\_TCK\_M0/JTAG\_TMS\_M0 is located in the VCCIO1 domain and is multiplexed with SDMMC0 via the IOMUX; JTAG\_TCK\_M1/JTAG\_TMS\_M1 is located in the PMUIO1 domain and is multiplexed with UART\_Debug—UART0\_M0. The IOMUX multiplexing configuration is shown in the figure below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199747347-cfe2f817-3baa-4f5a-a336-290e0a729450.png)

In FET3576, the default UART Debug selection is: UART0\_TX\_M0\_DEBUG (P2\_7) / UART0\_RX\_M0\_DEBUG (P2\_9). If the UART Debug signal is brought out via a plug-in connector, a series 100ohm resistor should be added, and a TVS diode should be placed near the connector.

For debugging, the OK3576-C/OK3576-C21 development board uses a USB-to-UART chip to convert the UART Debug signal into a USB signal, which is then output through a Type‑C socket. You can connect the P16 port of the OK3576-C to a PC using a USB Type‑A to USB Type‑C cable, and then install the CP2102 driver. The schematic is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201867275-68baad27-5cec-4f00-baa7-97b0c39bb54c.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201870860-85940f31-576a-4273-adae-6f580311ea22.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201875033-c136cb7b-66f9-493f-aacc-165c9fc08c00.png)

**Note:**

- **For future debugging convenience, route out these debug ports on custom carrier boards;**

- **It is recommended to keep Q1 and Q2, which can effectively prevent the U6 current from flowing back to the CPU through UART0\_TX/RX when the core board is not powered-up, affecting the startup and even causing damage.**

#### 3.5.6 IIC Expanded for IO

To route out more comprehensive interface expansion, the enable and reset signals on the carrier board are controlled by the I2C-to-IO converter chip U5. At the same time, the remaining spare IOs from U5 are led out through connector P17 to facilitate user-defined extensions, as shown in the schematic diagram below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201881601-4662d734-d2fd-451d-80cc-bcc0f1fec066.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201886109-bd9362fa-fb61-419e-992a-895d40989028.png)

#### 3.5.7 SARADC Interface

The signals VIN2, VIN4, VIN5, VIN6, and VIN7 are routed out through P18 from the OK3576-C and OK3576-C21. R371 is a variable resistor. By connecting the SARADC inputs (VIN2, VIN4, VIN5, VIN6, and VIN7) to pins 4, 6, 8, and 10 of P18, the voltage change can be monitored by the ADC while adjusting the resistance of the R371 variable resistor. As shown in the figure below: 

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721201901837-ac8103e9-d74e-4116-ab0b-662e85c48db9.png)

**Note: When using the SARADC\_VINx, a 1 nF capacitor must be added near the pin to eliminate jitter.**

#### 3.5.8 TF Card

The P20 socket on the carrier board is a TF card slot, which supports system boot-up and flashing.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202039748-352d8ac8-e509-4294-ab9d-fb75c37235d9.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202045195-edf162fa-27b5-4aac-94b7-78525498828b.png)

**Note:**

- **The power supply to the TF card must be controlled; refer to the carrier board circuit for implementation;**

- **SDIO impedance requirements: Single‑ended impedance: 50ohm;**

- **Signal length matching tolerance: ±50 mil.**

#### 3.5.9 RTC Circuit

The OK3576-C/OK3576-C21 features an on-board external RTC function to enable more accurate timing and lower power consumption. The schematic diagram is shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202057366-35d8ae77-2bc0-493d-baa6-06aedee55494.png)

#### 3.5.10 Ethernet Circuit

Supports 1000/100/10M adaptive network port, led out via RJ45.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202067447-8980d1a7-e5dd-4ae8-a521-9f0b5d81a322.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202074386-8a00c3e7-214e-4476-8e8b-3dc95daaf12d.png)

The RK3576 RGMII/RMII interface design is as follows:

Table 3.5.10.1 RK3576 RGMII/RMII Interface Design

| Signal| IO Type (chip-side)| RGMII| Signal Description| RMII | Signal Description|
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
| GMACx\_TXD\[3:0] | Output | RGMIIxTXD\[3:0] | Data sending | RMIIx\_TXD\[1:0] | Data sending |
| GMACx\_TXCLK | Output | RGMIIx\_TXCLK | Data sending reference clock | -- | -- |
| GMACx\_TXCTL | Output | RGMIIx\_TXCTL | Data sending enable (rising edge) and data sending error (falling edge) | RMIIx\_TXEN | Data sending enable signal |
| GMACx\_RXD\[3:0] | Input | RGMIIx\_RXD\[3:0] | Data receiving | RMIIx\_RXD\[1:0] | Data receiving |
| GMACx\_RXCLK | Input | RGMIIx\_RXCLK | Data receiving reference clock | -- | -- |
| GMACx\_RXCTL | Input | RGMIIx\_RXCTL | Data receiving valid (rising edge) and data receiving error (falling edge) | RMIIx\_RXCTL | Data receiving valid and carrier sense |
| GMACx\_MCLKINOUT | Inputs/Outputs | RGMIIx\_MCLKI\_   125M | PHY sends 125MHz to MAC, (optional) | RMII\_MCLKIN\_50M or RMII\_MCLKOUT\_50M | RMII data sending and receiving reference clock |
| ETHx\_REFCLKO\_   25M | Output | ETHx\_REFCLK\_   25M | RK3576 provides 25MHz clock to replace PHY crystal | ETHx\_REFCLKO\_   25M | RK3576 provides 25MHz clock to replace PHY crystal |
| GMACx\_MDC | Output | RGMIIx\_MDC | Managing the data clock | RMIIx\_MDC | Managing the data clock |
| GMACx\_MDIO | Inputs/Outputs | RGMIIx\_MDIO | Managing data output/input | RMIIx\_MDIO | Managing data output/input |

- In RGMII mode, the internal TX/RX clock path of RK3576 chip integrates delayline, which supports adjustment; default configuration of the reference chart: the timing between TXCLK and data is controlled by the MAC, the timing between RXCLK and data is controlled by PHY(If using RTL8211F/FI, i.e. RXCLK, 2nS delay is enabled by default, and other PHYs should note this configuration);


- The GMAC0 interface operates at 1.8V only, whilst the GMAC1 interface operates at 3.3V by default (if you need to change this to 1.8V, please contact Forlinx). Please ensure that the supply voltage of the RGMII signal power domain on the PHY chip matches the GMACx interface voltage;


- Ethernet PHY Reset signal needs to be controlled by GPIO, and the level of GPIO must match the PHY IO level; 100nF capacitor must be added near the PHY pin to strengthen the anti-static capability, note: the reset pin of RTL8211F/FI only supports 3.3V level;

- TXD0- TXD3, TXCLK, TXEN need to reserve 0ohm resistors at the FET3576 to improve signal quality according to actual situation;
- RXD0- RXD3, RXCLK, RXDV need to be connected with 22ohm resistors in series at the PHY end to improve the signal quality;
- When PHY uses an external crystal, please select the crystal capacitance according to the load capacitance value of the actual crystal used, and control the frequency deviation within ±20ppm;
- The RSET pin of RTL8211F/FI has an external resistance of 2.49K ohm with an accuracy of 1%, which must not be modified at will;
- MDIO must be externally added with a pull-up resistor (recommended 1.5-1.8Kohm), and the pull-up power supply must be consistent with the IO power supply;
- PCB Layout needs to ensure the integrity of the RGMII signal reference plane and the PHY chip peripheral power reference plane;
- Equivalent length requirement: the receiving and sending of RGMII can be grouped into equal lengths, with an equal length requirement ≤ 12.4 mil;
- Impedance requirements: single-ended 50ohm.

#### 3.5.11 RS485 Interface

OK3576-C/ OK3576-C21 supports dual RS485 interfaces.

The RS485 transceiver chips U8 and U9 are TDH341S485S, which feature:

Isolation withstand voltage up to 5000 VDC.

Bus ESD protection capability up to 15 kV (HBM).

Transient immunity > 25 kV/µs. Meanwhile, the OK3576-C carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202087352-0400e8b5-6e6f-40ef-859c-3edb71a3575c.png)

#### 3.5.12 CAN Interface

- The FET3576 SoM supports up to 2 x CAN, including CAN0 and CAN1. Among them, CAN1\_RX\_M2\_3V3 and CAN1\_TX\_M2\_3V3 are native CAN signals directly routed from the CPU to the carrier board. In contrast, CAN0\_RX\_M2\_3V3 and CAN0\_TX\_M2\_3V3 are routed from the CPU via a level-shifting chip. Note when using: The level-shifting chip features an internal 10K pull-up resistor, and the SoM additionally features an external 1.5K pull-up resistor. It is recommended to prioritize using the CAN control circuit design on the carrrier board. If there is a requirement to use a CAN transceiver with 5V I/O levels, the recommended circuit design is as follows. For the diode, a Schottky diode with a low forward voltage drop should be selected.

![](https://cdn.nlark.com/yuque/0/2025/png/47801913/1766988685403-c5f5bcb8-2a04-4fe4-88e2-6c7f2c249b44.png)

- Compliant with CAN \& CAN FD specifications, supports standard \& extended frame transmission, 8192‑bit receive FIFO;

- The OK3576-C/OK3576-C21 development board supports two CAN interfaces utilizing isolated CAN transceivers. The isolation withstand voltage is as high as 5000VDC, with bus electrostatic discharge protection capability reaching 15kV (HBM) and a transient immunity of >25kV/μs. Meanwhile, the OK357-C carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202096016-d2fbac03-0537-4352-a5a8-d71e04c06471.png)

#### 3.5.13 Audio

The OK3576-C/OK3576-C21 features an on-board I2S-interface Codec chip U31, supporting MIC input, headphone output, and 1W 8Ω speaker output. As shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202106750-8143d666-b6b1-4f10-b434-b85c234ec6b9.png)

#### 3.5.14 4G\&5G Interface

The OK3576-C/OK3576-C21 integrates an M.2 Key-B interface, compatible with 4G and 5G modules. Since 4G and 5G modules operate at different supply voltages, the switch S2 must be toggled to select the corresponding power supply voltage.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202119929-1cd3de75-6490-4bbd-af19-e4439150b9df.png)

#### 3.5.15 USB2.0/USB3.0\_A/Type-C USB3.0 Circuit

The RK3576 chip integrates two USB3 OTG controllers. Both USB3 controllers embed USB2.0 OTG functionality.

**The USB 3.0 OTG 0/DP 1.4 interface is used as follows:**

The USB3.2 Gen1x1 OTG0 / DP1.4 form a Combo PHY. The internal multiplexing diagram between the USB3 OTG0 controller and the PHY is as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199749403-c919cbe6-c1e1-4069-9b1b-967b039ca5e8.png)

The USB 3.0 OTG controller supports SS, HS, FS and LS modes. The embedded USB 2.0 (HS, FS and LS) signals utilise a USB 2.0 OTG PHY; the signal names are shown within the red boxes in the figure below. The RK3576 uses this interface by default for Fireware downloads; please ensure that this interface is reserved for this purpose in your application.

![](https://cdn.nlark.com/yuque/0/2025/png/47801913/1735804342116-2dd1e32f-eccf-4125-9764-dee9d1ec2981.png)

**Note: USB2\_OTG0\_DP/USB2\_OTG0\_DM supports firmware download. If the product does not utilise this interface, it must be left accessible during debugging and production. Please note: USB2\_OTG0\_VBUSDET must also be connected!**

The USB 3.2 SS signals (5 Gbps) are multiplexed with DP1.4, utilizing a USB/DP Combo PHY. The signals are indicated within the red boxes in the figure below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199749954-f8cb831b-0c53-4f8e-b8ab-698dd73da5b4.png)

Since the USB3 OTG and USB2.0 OTG share the same USB3 controller, the USB3 and USB2.0 OTG functions can only operate simultaneously as either Device or Host. It is not possible for the USB3 OTG to act as a Host while the USB2.0 OTG acts as a Device, or vice versa.

The USB3 OTG0 Controller and DP1.4 Controller are combined into a complete Type-C port via the USB3/DP1.4 Combo PHY. This Combo PHY supports DisplayPort Alternate Mode. In DP mode, Lane0 and Lane2 act as TX; in USB mode, they act as RX. TX and RX share Lane0 and Lane2.

This USB3/DP1.4 Combo PHY supports lane swapping (SWAP). Therefore, a standard Type-C port can be configured in the following five ways:

Configuration 1: Type-C 4-Lane (with DP function)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199750214-784ef4f2-cd92-48f7-a2f7-6fb9d1ade09a.png)

Configuration 2: USB2.0 OTG + DP1.4 4-Lane (Swap OFF)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199750576-7b815bee-410a-4b1a-a090-70399bdf21e3.png)

Configuration 3: USB2.0 OTG + DP1.4 4-Lane (Swap ON)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199750805-b58f70e5-7c73-4601-aabe-543b544778d8.png)

Configuration 4: USB3.2 Gen1x1 OTG0 + DP1.4 2-Lane (Swap OFF)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199751194-8ade452f-cd52-4726-b814-44611043dd94.png)

Configuration 5: USB3.2 Gen1x1 OTG0 + DP1.4 2-Lane (Swap ON)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199751492-e286b0e5-02c1-4e07-adc6-c020d9e6df67.png)

**Note: The RK3576 supports firmware download via the USB3\_OTG0\_SSRX1P/N and USB3\_OTG0\_SSTX1P/N signals from the USB 3.2 Gen1x1 OTG0 interface. To support USB3.0 firmware upgrade and also require 2-Lane DP support, the USB3.2 Gen1x1 OTG0 + DP 2-Lane (Swap ON) configuration must be used.**

**The USB3 OTG1 interface is used as follows:**

The PCIe1 / SATA1 / USB3 OTG1 form a Combo PHY1. The internal multiplexing diagram between the USB3 OTG1 controller and the PHY is as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199751928-51d12731-e560-4d7b-a52a-c681951a05e9.png)

The USB3 OTG1 controller supports SS/HS/FS/LS. The embedded USB2.0 (HS/FS/LS) signals constitute the PCIe1/SATA1/USB3 OTG1 COMBO PHY1. The pin distribution is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199752262-aab6facb-5535-40f1-a7f8-d5b7b7bc0364.png)

The USB2.0 OTG1 pin assignment is as shown in the figure below.

![](https://cdn.nlark.com/yuque/0/2025/png/47801913/1735804357399-24df6f6f-007d-4f4d-9c55-255988d5d756.png)

Since the USB3 OTG1 and USB2.0 OTG1 share the same USB3 controller, the USB3 and USB2.0 OTG1 functions can only operate simultaneously as either Device or Host. It is not possible for the USB3 OTG to act as a Host while the USB2.0 OTG acts as a Device, or vice versa.

**Note: When the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 is configured for PCIe or SATA functionality, the USB3 OTG1 function cannot be used, and the USB2.0 PHY1 also becomes unavailable. Therefore, to use USB2.0 OTG1, the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 must be configured for USB3 functionality!**

The application modes for USB3 OTG1 within the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 are as follows:

Configuration 1: USB3.2 Gen1x1 OTG1

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199752841-aed730f1-62db-4d12-8a38-52fb8a1cf90c.png)

Configuration 2: USB2.0 OTG1

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199753203-2d61f0bb-3af6-43af-8758-b77777ecff50.png)

Configuration 3: Both USB2/USB3 unused (specific application methods for PCIe and SATA are detailed in the PCIe and SATA chapters).

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199753594-efb29133-8ec0-4630-8581-5b8ee4c453a6.png)

The OK3576-C/OK3576-C21 development board features a single USB Hub chip to convert one USB2.0/USB3.0\_HOST channel into four channels. Three of the USB3.0 channels are connected to three Type-A interfaces for customer use, each capable of providing a maximum 1A output current with current-limiting switch protection. The remaining USB3.0 channel is provided for the 4G \& 5G module.

The FET3576 supports one USB/DP combo interface, supporting USB 3.2 Gen1x1 and DisplayPort v1.4. On the OK3576-C carrier board, this is implemented as a standard Type-C USB 3.0 full-featured interface, supporting both data transfer and DP display output.

The figure below shows the circuit for the USB3.0 Hub section:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202138374-a22b9efd-a781-44d3-8876-278dafe21c6b.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202143313-3a9fdba2-8dca-45d3-a91f-3020aa48aa30.png)

Two additional switching power supplies are used to provide 3.3V and 1.2V power to the USB Hub chip.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202148663-bb14a6cc-1e0f-4a5d-8f44-a7a26f867490.png)

All three USB 3.0 ports on the USB hub chip are equipped with USB power-supply current-limiting switch chips, providing a stable power supply and current-limiting protection for the Type-A ports:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880014743-e19224f0-e518-48b6-bfd0-f2e8018654d7.png)  
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880014848-bb124fbb-6d57-433b-952f-6a47278b8b9f.png)  
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202167712-ebbdcd11-f4a0-49e7-bf68-18d041efb909.png)

**Note:**

- **All USB data cables must be designed with a differential impedance of 90Ω;**
- **Please select suitable ESD protection components.**

The following diagram shows the circuit of the Type-C USB 3.0 interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202186728-edde3b2b-1bfe-403e-aaa2-a203ee2285ff.png)

The diagram above shows the circuit for the Type-C interface CC protocol chip, which is used to support functions such as Type-C reversible plug recognition.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202200685-dce80cc4-edcf-41fa-bce3-fe484ac8b528.png)

The diagram above shows the differential signal circuit and ESD protection components for a USB 3.0 Type-C connector.

**Note:**

- **USB2\_OTG0\_DN/USB2\_OTG0\_DP is the system firmware programming port. If the product does not use this interface, it must be reserved during debugging and production; otherwise, debugging and firmware burning will not be possible;**
- **USB2\_OTG0\_ID features an internal pull-up resistor of approximately 12 kΩ to 1.8 V;**
- **USB2\_OTG0\_VBUSDET is the OTG and Device mode detection pin; the chip contains an internal 40 kΩ pull-down resistor. A high level indicates DEVICE mode (2.7–3.3 V, typical: 3.0 V); it is recommended to place a 100 nF capacitor on this pin;**
- **OTG mode can be configured as follows:**

**OTG Mode: Automatically switches between Device mode and HOST mode based on the state of the ID pin. A high ID level indicates Device mode, while a low ID level indicates HOST mode. When in Device mode, it also checks the VBUSDET pin. Only if VBUSDET is high (greater than 2.3V) will it pull DP high and begin enumeration.**

**Device mode: ID pin is ignored; only VBUSDET needs to be high (> 2.3 V) to enable DP pull-up and enumeration;**

**HOST mode: In this mode, you don't need to worry about the ID or VBUSDET status. If the product only requires HOST mode, but the USB2\_OTG0\_DN/ USB2\_OTG0\_DP pins are reserved for system firmware programming (used in both debugging and production stages), this port must be configured in device mode for programming and ADB debugging. Therefore, the USB2\_OTG0\_VBUSDET signal must also be connected.**

**For a Type‑C interface, pull USB2\_OTG0\_VBUSDET high to 3.3 V through a 4.7 K resistor.**

- **To enhance ESD and surge immunity, ESD protection devices must be reserved on signal lines. The parasitic capacitance of the ESD devices on USB 2.0 signals must not exceed 3 pF; in addition, series resistors (2.2 Ω) must be placed on the DP/DM lines of USB 2.0 signals to further strengthen ESD and surge resistance;**

- **To suppress EMI, a common‑mode choke can be reserved on signal lines. During debugging, choose either a resistor or a choke based on actual conditions;**

- **If the USB2\_OTG0\_ID signal is used, ESD protection components must be incorporated into the signal to enhance its resistance to static electricity and surges, and a 100 ohm resistor must be connected in series; these components must not be omitted;**

- **In Host mode, it is recommended to add a current‑limiting switch on the 5 V power rail. The limit can be adjusted as needed. Control the switch with a 3.3 V GPIO. Also add filtering capacitors: ≥ 22 µF and ≥ 100 nF. If a portable HDD may be connected, increase the capacitance to ≥ 100 µF;**

- **The TYPEC protocol requires the addition of a 100 nF AC-coupling capacitor on the SSTXP/N line. It is recommended that the AC-coupling capacitor be in a 0201 package, as this offers lower ESR and ESL, thereby reducing impedance variations on the circuit;**

- **All signals of the Type‑C connector must have ESD protection placed as close as possible to the connector; For SSTXP/N and SSRXP/N signals, the parasitic capacitance of the ESD device must not exceed 0.3pF.**
- **USB 2.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 10 mil;**

- **USB 3.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 3 mil;**

#### 3.5.16 SATA3.1 Interface

The RK3576 chip is equipped with two SATA3.1 controllers, which share Comb PHY0/1 with the PCIe and USB3\_OTG1 controllers. For specific routing, please refer to the diagram below.

- Supports SATA PM (Power Management) functionality, with each port capable of supporting up to 5 devices;


- Supports SATA speeds of 1.5 Gb/s, 3.0 Gb/s, and 6.0 Gb/s;


- Supports eSATA.


![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199754911-78d25391-5ff3-45fa-adcd-8998e3113de1.png)

The SATA0 controller utilizes Comb PHY0 (shared with the PCIe0 controller).

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199755241-e663e6ee-a918-44d4-b0aa-c2ca9bb67198.png)

The SATA1 controller utilizes Comb PHY1 (shared with the PCIe1 controller and the USB3\_OTG1 controller).

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199755468-bc643117-b981-4cfb-a5ec-047f5e5d00c4.png)

The control IOs related to the SATA0/1 controllers are as follows:

- SATA0\_ACTLED: Output for controlling LED blinking when there is data transmission on the SATA0 interface;

- SATA1\_ACTLED: Output for controlling LED blinking when there is data transmission on the SATA1 interface;

- SATA\_CPDET: Input for detecting the insertion and removal of hot-plug SATA devices;

- SATA\_MPSWIT: Input for detecting the switch status of hot-plug SATA devices.

- SATA\_CPPOD: Output for controlling the power switch of hot-plug SATA devices;

- SATA\_CPDET, SATA\_MPSWIT, and SATA\_CPPOD are shared interfaces for SATA0 and SATA1, and can be configured via registers to control either SATA0 or SATA1;

- SATA0\_ACTLED and SATA1\_ACTLED are multiplexed to two locations: one in the VCCIO6 power domain and the other in the VCCIO4 power domain.


**Note:**

- **Peripheral circuits and power supplies must meet the specification requirements in Slot design;**
- **A single SATA interface connected to a SATA Port Multiplier supports at most 5 ports; it does not support multiple multipliers exceeding 6 ports in total;**
- **On SATA TXP/N and RXP/N differential pairs, 10 nF AC‑coupling capacitors are required. Use 0201‑size capacitors for lower ESR/ESL and reduced impedance variation;**
- **All signals of an eSATA connector must have ESD protection placed close to the connector. The ESD parasitic capacitance must not exceed 0.4 pF.**

#### 3.5.17 PCIE2.1 Circuit

The RK3576 features two PCIe 2.1 controllers, both of which only support RC mode (RC stands for Root Complex) and do not support EP, as follows:

Controller 0(1Lane), PCIe0 Controller x1 Lane(Only RC)

Controller 1(1Lane), PCIe1 Controller x1 Lane(Only RC)

The RK3576 chip integrates two PCIe 2.1 controllers, which are combined with SATA3.1 and USB3.2\_Gen1x1 interfaces to form two Combo PHYs:

PCIe2.1/SATA3.1 Combo PHY0

PCIe2.1/SATA3.1/USB3.2\_Gen1x1 Combo PHY1

The mapping relationship between the controllers and PHYs is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199755793-9a41442f-01a0-4562-bff9-71b57d527988.png)

The PCIe0 controller (RC) and SATA0 controller share the PCIe2.1/SATA3.1 Combo PHY0. The corresponding package pins are shown in the figure below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199756173-911020bc-f7d8-463c-9304-cd9fd29d3c50.png)

The PCIe1 controller (RC), SATA1 controller, and USB3 OTG1 controller share the PCIe2.1/SATA3.1/USB3.2\_Gen1x1

Combo PHY1. The corresponding package pins are shown in the figure below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199756431-5d4d4b0f-091e-488f-9928-f8bdc1483b8d.png)

PCIE0/1\_REFCLKP/N supports both output and input modes. By default, it outputs clock signals to EP (Endpoint) devices, as illustrated in the diagram below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199756620-4d3bd48a-0664-46d6-980d-fa970165b429.png)

If PCIE0/1\_REFCLKP/N is configured as an input, the schematic is as shown below.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199756823-3cc4b6a5-4196-4b14-90dc-0f8f1acf2ead.png)

In the OK3576-C/OK3576-C21 development board, the PCIe0 lane is connected to a PCIe x1 slot and operates in PCIe 2.0 ×1 Lane mode.

It supports the PCIe Gen1 (2.4 GT/s) protocol. The other PCIe1 lane is multiplexed as a USB 3.0 interface.

The circuit design for the PCIe0 PCIe 2.0 ×1 Lane is illustrated below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202231740-e6e4b737-4d27-4b68-8db7-75782f9e0379.png)

The figure above shows the 12V power supply control circuit for the PCIe interface.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202238663-df64e8e1-d83a-4719-a468-96aefc92538b.png)

The figure above shows the 3.3V power supply and enable control circuit, where U42 is a 5V to 3.3V step-down converter.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202244991-9a474f67-a819-4c7c-b32b-d96a6dc70390.png)

The figure above illustrates the PCIe x1 slot circuit design.

**PCIe2.1 Design Note:**

- **Peripheral circuits and power supplies must meet the specification requirements in Slot design;**
- **A 100nF AC coupling capacitor must be connected in series on the TXP/N differential signal lines of the PCIe 2.1 interface. It is recommended to use 0201 package size capacitors for the AC coupling, as they have lower ESR and ESL, which also helps reduce impedance variations on the trace;**
- **The PCIE0/1\_CLKREQN pin must be used as a dedicated function pin and cannot be replaced by a GPIO;**
- **PCIE0/1\_PERSTN/WAKEN/PRSNT do not specify any particular I/O pins on the RK3576; you can simply use GPIO ports with matching voltage levels to serve as control pins;**
- **In a standard PCIe slot, the signals PCIEx\_CLKREQN, PCIEx\_WAKEN, and PCIEx\_PERSTN operate at 3.3V logic levels. Ensure proper voltage level matching is implemented on the RK3576 side accordingly;**
- **When the PCIe function is enabled, the multiplexed SATA and USB functions cannot be used simultaneously. For details on the corresponding SATA/USB functions, refer to the respective module specifications;**

- **If the PCIe 2.1 function module is not used:**

**Leave the data lines (PCIE0/1\_TXP/TXN, PCIE0/1\_RXP/RXN) and reference clock lines (PCIE0/1\_REFCLKP/REFCLKN) unconnected (floating);**

**Ground the two power rails AVDD0V85 and AVDD1V8;**

**Ensure that the corresponding device tree (dts) configuration is disabled in the software.**

- **The recommended interface matching design for PCIe 2.1 is as shown in the following table:**

| **Signal**| **Connection**| **Description**|
|----------|----------|----------|
| PCIE0/1\_TXP/TXN| Series-connected 100nF capacitor (0201 package recommended).| PCIe data output|
| PCIE0/1\_RXP/RXN| Direct connection| PCIe data input|
| PCIE0/1\_REFCLKP/CLKN| Direct connection| PCIe reference clock|
| PCIE0/1\_CLKREQN| Connect 0ohm resistor in series| PCIe reference clock(RC mode)|
| PCIE0/1\_WAKEN (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| PCIe wake-up input (RC mode)|
| PCIE0/1\_PERSTN (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| PCIe global reset output (RC mode)|
| PCIE0/1\_PRSNT (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| Add In Card insertion detection input (RC mode)|
| PCIE\_BUTTONRSTN (not in use right now )| It’s no use; there’s no need to connect.| External physical Reset of the PCIe Controller|

- **Data routing impedance control differential 85ohm ±10%;**
- **Clock routing impedance control differential 100ohm±10%;***
- **Inter-Pair Skew maximum ＜3mil;**
- **Differential pair space is better than or equal to 4 times the PCI-E line width.**

#### 3.5.18 Video Input Interface

FET3576 has two MIPI DPHY CSI RX, both support MIPI V1.2 version, the maximum data rate of each channel is 2.5Gbps.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199758122-2786718e-09bf-4970-9dc8-7353e8d55952.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199758407-470d2d79-7334-4371-98dd-79b73b3b74d3.png)

**MIPI DPHY CSI1 / 2 RX interface** **modes:**

Support 4Lane mode, MIPI\_DPHY\_CSI1\_RX\_D\[3:0] data reference MIPI\_DPHY\_CSI1\_RX\_CLK.

Support 2Lane+2Lane mode:

MIPI DPHY CSI1\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI1\_RX\_CLK

MIPI DPHY CSI2\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI2\_RX\_CLK

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199758787-79ab42f0-e089-4db2-91fa-9003c8de622d.png)

MIPI DPHY CSI3 / 4 RX interface mode:

Support 4Lane mode, MIPI\_DPHY\_CSI3\_RX\_D\[3:0] data reference MIPI\_DPHY\_CSI3\_RX\_CLK

Support 2Lane+2Lane mode:

MIPI DPHY CSI3\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI3\_RX\_CLK

MIPI DPHY CSI4\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI4\_RX\_CLK

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199759172-54b658d7-1142-4beb-a9b9-c652e4369e07.png)

**Interface Details of MIPI\_DCPHY\_CSI\_RX**

The FET3576 integrates one MIPI DCPHY CSI RX Combo PHY.

The D-PHY supports Version 2.0.

The C-PHY supports Version 1.1. In D-PHY mode, it has up to 4 lanes, with a maximum data rate of 4.5 Gbps per lane.

In C-PHY mode, it has up to 3 trios, with a maximum data rate of 5.7Gbps/Trio.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199759395-33307127-04a8-43c5-b806-0522fbdfa347.png)

Supported D-PHY and C-PHY Configuration Modes:

The TX and RX of the MIPI DCPHY Combo PHY can only be configured in one of the following modes simultaneously:

Both as D-PHY TX and D-PHY RX mode, or

Both as C-PHY TX and C-PHY RX mode. It does not support mixed configurations such as one interface as D-PHY TX and the other as C-PHY RX, or vice versa.

MIPI DCPHY Supported Configurations in D-PHY Mode:

Supports 4-lane / 2-lane / 1-lane modes.

The data lanes MIPI\_DPHY\_CSI0\_RX\[3:0] are referenced to the clock MIPI\_DPHY\_CSI0\_RX\_CLK.

It doesn’t support splitting into a configuration of 2 lanes + 2 lanes.

**MIPI DCPHY Supported Configurations in C-PHY Mode:**

Supports 0 / 1 / 2 Trios. Each Trio consists of three wires: Trio\_A, Trio\_B, and Trio\_C.

The corresponding signal pins are: MIPI\_CPHY\_CSI\_RX\_TRIO\[2:0]\_A, MIPI\_CPHY\_CSI\_RX\_TRIO\[2:0]\_B, MIPI\_CPHY\_CSI\_RX\_TRIO\[2:0]\_C.

The OK3576-C/OK3576-C21 is configured by default with five camera interfaces, namely: MIPI\_DPHY\_CSI0\_RX 4-lane, MIPI\_DPHY\_CSI1\_RX 2-lane, MIPI\_DPHY\_CSI2\_RX 2-lane, MIPI\_DPHY\_CSI3\_RX 2-lane and MIPI\_DPHY\_CSI4\_RX 2-lane. The schematic diagram is as shown below:

**MIPI RX Layout Design Notes:**

- **Differential impedance: 100Ω ±10%;**

- **Single-ended impedance: 50Ω ±10%;**

- **Intra-pair skew (within a differential pair): \< 3 mils;**

- **Equal length between clock and data \< 6 mil;**

- **Spacing between differential pairs: Recommended > 4x the MIPI trace width; minimum > 3x;**

- **Spacing between MIPI signals and other signals: Recommended > 4x the MIPI trace width; minimum > 3x;**

- **When configured as CPHY, the maximum delay difference within the group (TRIO\_A, TRIO\_B, TRIO\_C) is less than 3 mil;**

- **Equal length between groups (TRIO0 \\ TRIO1 \\ TRIO2) \< 50mil.**

#### 3.5.19 Video Output Interface

The RK3576 chip features a VOP (Video Output Processor), which reads video data and UI data from the frame buffer in system memory, performs corresponding processing (such as cropping, color space conversion, scaling, and overlaying), and outputs the processed data to each high-speed display interface.

It features 3 Port outputs and can output through video interfaces including DP, HDMI/eDP, MIPI DSI, LCDC(Parallel Interface).

**Maximum video output capabilities:**

Supports three-screen independent display configurations, for example, one screen at 4096x2160@60Hz, 2560x1600@60Hz, 1920x1080@60Hz;

Supports dual-screen independent display configurations, for example, one screen at 4096x2160@120Hz, 2560x1600@60Hz.

**VOP and video interface output path diagram:**

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199759959-45e326a1-9929-466e-8fac-cd5697432fa8.png)

The OK3576-C/OK3576-C21 development board supports three display output interfaces: DP, MIPI\_DSI and HDMI.

**3.5.19.1 MIPI\_DSI Interface**

The FET3576 features one MIPI D-PHY/C-PHY Combo PHY TX:

D-PHY supports version 2.0. D-PHY modes include 0, 1, 2 and 3 lanes, with two wires per lane; the maximum data rate is 2.5Gbps/Lane.

MIPI\_DPHY\_TX supports a maximum resolution of 2560x1600@60Hz.

C-PHY supports version V1.1. The C-PHY modes are 0, 1 and 2 Trio, with each Trio comprising three lines (A, B and C); the maximum data rate is 1.7Gsps/Trio.

MIPI\_CPHY\_TX supports a maximum resolution of 2560x1600@60Hz.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199760259-cfa21d5a-79d1-4ac9-b84d-9fa2af27756f.png)

**D-PHY and C-PHY Configuration Support:**

The TX and RX of the MIPI D-PHY/C-PHY Combo PHY can only be configured simultaneously as D-PHY TX and D-PHY RX, or as C-PHY TX and C-PHY RX; it does not support configuring one as D-PHY TX and the other as C-PHY RX.

**MIPI DCPHY Mode Support When Operating in D-PHY Mode:**

Supports 4-lane mode; the MIPI\_DPHY\_TX\_D\[3:0] data is synchronised with MIPI\_DPHY\_TX\_CLK.

**MIPI DCPHY Mode Support When Operating in C-PHY Mode:** 

Supports 0/1/2 Trios, with 3 lines each for Trio A/B/C: MIPI\_CPHY\_TX\_TRIO\[2:0]\_A,

MIPI\_CPHY\_TX\_TRIO\[2: 0]\_B, MIPI\_CPHY\_TX\_TRIO\[2: 0]\_C.

The MIPI\_DSI interface on the OK3576-C/OK3576-C21 development board operates in a mode comprising one clock channel and four data channels. The schematic is shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199760641-1e606f22-de49-4dd6-8338-f94b39dd59bd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202280645-6aa529d3-edf1-4a68-a449-d58cacdaa72c.png)

**Please note in design:**

- **Routing impedance control differential 100ohm ± 10%;**

- **Intra-pair skew (within a differential pair): \< 3 mils;**

- **Equal length between clock and data \< 6 mil;**

- **It is recommended that the spacing between differential pairs be at least four times the MIPI line width, and no less than three times the MIPI line width;**

- **It is recommended that the spacing between MIPI and other signals be at least four times the MIPI line width, and no less than three times the MIPI line width;**

- **When configured as CPHY, the impedance of single-ended traces is controlled to 50ohm±10%;**

- **The inter-group delay difference is \<3mil (TRIO0\\TRIO1\\TRIO2);**

- **Equal length between groups (TRIO0 \\ TRIO1 \\ TRIO2) \< 50mil;**

- **The number of permissible holes for each signal is recommended to be no more than 2;**

- **It is recommended that the spacing between traces be at least four times the MIPI trace width;**

- **It is recommended that the spacing between MPI and other signals be at least four times the MIPI line width.**

**3.5.19.2 HDMI\_TX Interface**

The RK3576 integrates an HDMI/eDP TX Combo PHY.

HDMI/eDP TX Combo PHY supports the following two modes:

- HDMI TX Mode: Supports up to HDMI 2.1, including the HDMI FRL mode with backward compatibility for HDMI TMDS mode. It supports formats such as RGB/YUV444/YUV422/YUV420 (up to 10-bit);
- eDP TX Mode: Supports up to eDP 1.3, with a maximum resolution of 4K@60Hz. It supports RGB/YUV444/YUV422 (up to 10-bit) formats.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199761057-1144a005-83e0-4e23-8fcc-6e9556a05b60.png)

RK3576 supports HDMI 2.1 and downward for HDMI 2.0, compatible with HDMI 1.4. Because HDMI 2.1 works in FRL mode and works in TMDS mode, when switching to HDMI 2.0 and below, it will work in TMDS mode, so the AC coupled voltage mode driver is used.

As shown in the figure below, the AC coupling capacitor capacitance is 220nF, which cannot be changed at will; because the lower ESR and ESL can also reduce the impedance change on the line, it is recommended to use the 0201 packaging for the AC coupling capacitor.

When operating in HDMI 2.1 mode, HDMI\_TX\_ON\_H is configured to low level, and transistors Q15, Q16, Q17, Q18 are turned off.

When operating in HDMI 2.0 or lower mode, HDMI\_TX\_ON\_H is configured to high level, and transistors Q15, Q16, Q17, Q18 are turned on. The 499ohm resistors to ground form a DC bias of approximately 3V with the 50ohm pull-up resistors on the sink side.

**Please note in design:**

**If it only needs to support HDMI 2.0 and below mode, Q15, Q16, Q17, and Q18 also can not be omitted; it needs to ensure that the machine is not power-on, the tube can not be on, as HDMI CTS Test ID 7-3 TMDS Voff test item requires that the DUT is not power-on, Voff voltage must be within AVcc +- 10mV, or this test item can not pass.**

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202297987-de992835-5881-4d00-ab5d-fc8bedcac83a.png)

FRL mode: In a traditional TMDS architecture, a separate channel is used to transmit the clock signal; however, in the FRL architecture, the clock is embedded within the data channel and is extracted at the sink end via clock recovery.

The table below shows the relationship between FRL rates and channels:

| **Channel Rate**| **Channel Number**|
|:----------:|:----------:|
| 3Gbps| 3|
| 6Gbps| 3|
| 6Gbps| 4|
| 8Gbps| 4||
| 10Gbps| 4|
| 12Gbps| 4|

ARC/eARC is supported by routing the HDMI\_TX\_SBD\_P/ HDMI\_TX\_SBD\_N signals to the internal RK3576 for audio data extraction.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202307150-b7f2bdbd-166f-4798-b784-9a17203dd130.png)

HDMI\_TX\_HPD is the HDMI TX controller’s Hot Plug Detect signal, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

HDMI\_TX\_CEC is the HDMI controller’s Consumer Electronics Control function, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

The CEC protocol specifies a 3.3 V logic level; however, the protocol requires that a 3.3 V voltage be applied to the CEC pin via a 27 kΩ resistor, with leakage current not exceeding 1.8 µA.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880014995-370ec6fa-918a-47e7-8d07-ce829b7d9407.png)

When the RK3576 IO Domain is not powered, if there is voltage on the IO, leakage current may occur. For example, after the RK3576 is powered off, if the HDMI cable is still connected to the sink device (such as a TV or monitor), the CEC signal from the sink device carries voltage, which can leak to the RK3576 IO through the HDMI cable. This can cause CEC leakage current to exceed 1.8µA. Therefore, an external isolation circuit is required. The resistance value of R189 must not be modified arbitrarily and must be set to 27 kΩ. For Q19, the default selection is the 2SK3018. If another model is to be used, its junction capacitance must be comparable. If the junction capacitance is too large, it will not only affect operation but also fail certification.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202320753-38f259c4-2220-40d8-8a1f-ee40277c22ba.png)

HDMI\_TX\_SCL and HDMI\_TX\_SDA are the I2C/DDC buses of the HDMI transmitter (TX) controller. Their functions are multiplexed onto standard GPIO pins. The voltage levels for these signals depend on the power domain’s supply voltage. If the supply voltage of the power domain changes, the power supply for the pull-up resistors in the peripheral circuitry must also be adjusted accordingly.

The DDC\_SCL/DDC\_SDA protocol specifies a 5V logic level. Since the RK3576 IO does not support 5V levels, a level-shifting circuit must be added and cannot be omitted. By default, a MOSFET-based level shifter is used, with the MOSFET model defaulting to 2SK3018. If another model is to be used, its junction capacitance must be comparable. Excessive junction capacitance will not only impact operation but also lead to certification failure.

The pull-up resistors should be set according to their default values and not altered arbitrarily.

Diode D6 must not be omitted; it is used to prevent leakage current from the Sink device to VCC\_5V0.

For the level shifting of the SDA signal, a 1K resistor must be connected in series between the MOSFET gate and the power supply, and a 100pF capacitor must be placed in parallel between the MOSFET gate and source to improve timing characteristics. These components must not be removed.

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202333285-d419ab16-f2ea-4ce5-b17d-249c05787ea7.png)

The voltage on Pin 18 of the HDMI connector must be maintained between 4.8V and 5.3V. A 1μF decoupling capacitor must be placed for this pin and cannot be omitted. During layout, this capacitor must be positioned close to the HDMI connector pin.

To enhance ESD protection, ESD protection devices must be provisioned on the signal lines. For HDMI 2.1 signals, the parasitic capacitance of the ESD device must not exceed 0.2pF. For other signals, the parasitic capacitance of the ESD device is recommended to be no greater than 0.2pF.

For other signals, it is recommended that the ESD parasitic capacitance should not exceed 1 pF.

**Please note in design:**

- **Control MOS tube Coss can not be too large, otherwise it will affect the signal quality, it is recommended to follow the reference chart model or the corresponding Coss value;**
- **Routing impedance control differential 100ohm ± 10%;**

- **Inter-Pair Skew maximum ＜3mil;**

- **Differential inter-pair equivalence requirement \<200mil;**

- **Differential inter-pair space is recommended to be more than or equal to 7 times the HDMI line width;**

- **HDMI and other signal space is recommended to be more than or equal to 7 times the HDMI line width;**
- **It is recommended not to add an over-hole;**

- **I/O capacitance to ground does not exceed 0.2pF.**

**3.5.19.3 DP\_TX Interface**

The RK3576 supports one DP1.4 TX PHY (combo with USB3 OTG0), capable of a maximum output resolution of 4K@YUV422-120Hz.

- Each lane supports data rates of 1.62/2.7/5.4/8.1 Gbps.

- Supports 1-lane, 2-lane or 4-lane modes;

- Supports RGB/YUV444/YUV422/YUV420 formats (up to 10-bit);

- Supports Multi-Stream Transport (MST);


![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199761941-a3bc3a45-f2c9-4024-9350-e0a0e32aaf13.png)

- Supports both Swap On and Swap Off modes;


![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199762249-be61200b-5c45-485e-83fc-3c3a92e83cb3.png)

- Supports MST (Multi-Stream Transport) display with 3 channels. The maximum capability for three-screen independent display under MST is: 4096x2160@60Hz, 2560x1600@60Hz, and 1920x1080@60Hz.


![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721199762544-9dab7aad-2307-4119-827c-052673fd9e9b.png)

Refer to Section 3.5.15 for pin multiplexing relationships with USB.

**Please note in DP sign:**

- **The following DP lane pairs—DP0\_TX\_D0P/D0N, DP0\_TX\_D1P/D1N, DP0\_TX\_D2P/D2N, DP0\_TX\_D3P/D3N, DP1\_TX\_D0P/D0N, DP1\_TX\_D1P/D1N, DP1\_TX\_D2P/D2N, DP1\_TX\_D3P/D3N—must be series-connected with 100nF AC-coupling capacitors. Capacitors in 0201 package size are recommended for lower ESR and ESL, as well as reduced impedance variation on the line. Place them close to the RK3576-C pins during layout;**

- **Differential pair trace impedance should be controlled at 100Ω ±10% (for DP-only interface, no multiplexing) or 95Ω ±10% (for USB3.0/DP1.4 multiplexed interface);**
- **Differential pair internal delay difference \< 3 mil;**

- **Differential inter-pair equivalence requirement \<500mil;**
- **Differential inter-pair space is recommended to be more than or equal to 6 times the DP line width;**

- **DP and other signal space is recommended to be more than or equal to 6 times the DP line width;**

- **The number of permissible holes for each signal is recommended to be no more than 2;**
- **I/O capacitance to ground does not exceed 0.2pF.**

#### 3.5.20 WIFI/BT Module Circuit

OK3576-C/ The OK3576-C21 board comes with an on-board AzureWave AW-CM358SM WIFI \& BT module, supporting Wi-Fi 2.4G/5G and Bluetooth 5.0. The Wi-Fi/BT antenna is connected via an SMA interface, and the module interfaces with the main controller through SDIO, PDM, and UART.

Note: In low-power application scenarios, if you need to maintain the Wi-Fi module’s network connection during the process of putting the RK3576 into sleep mode and then waking it up (without requiring the Wi-Fi module to reconnect), it is necessary to power the Wi-Fi module’s 3.3V and 1.8V supplies from a dedicated 12V input power source. You can refer to this specific design in the OK3576-C.

The schematic is as follows:  
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880015089-3f3a60db-fcf3-4af8-a131-e21d92debcda.png)  
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1751880015165-2e9eb95f-3cb0-41e5-b25f-f9bfeafadf8e.png)

**Note:**

- **The power supply to the WIFI card must be controlled; refer to the carrier board circuit for implementation;**
- **SDIO impedance requirements: Single‑ended impedance: 50ohm;**
- **Signal length matching tolerance: ±50 mil.**

## User Hardware Design Guide\_V1.04

- **I2C Requirements:**

Multiple slave devices can be connected to a single I2C bus; ensure there are no address conflicts.

Pull-up resistors are required on the I2C bus, but avoid using multiple resistors for pull-up (i.e., use a single pair of pull-up resistors for the entire bus).

Ensure level matching between the I2C signals from the SoM and those from the slave devices.

- **USB Design:**

To meet USB eye diagram requirements, the PCB trace length for USB3.0 TX/RX signals should not exceed 6 inches.

- **Unused signal pins on the SoM can be left floating, but all GND pins must be connected.**
- **Power-On Sequence**

It is strongly recommended that when designing the carrier board, please refer to the development board design. Use the CARRIER\_BOARD\_EN signal output from the SoM as the enable signal for powering on the carrier board, and strictly control the power-on sequence. Failure to do so may result in the following issues:

Excessive inrush current during power-up.

Device failure to boot.

In the worst case, irreversible damage to the processor.

**Note: For detailed hardware design information, please refer to the “FET3576-C Hardware Design Guide” document.**

## 5\. Connector Dimensions

The SoM connector dimensions are as follows:

A=21.52mm, B=19.6mm, C=3.2mm, Contacts=100

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720593594270-2f3a8c1f-8bbd-47bf-94dc-b40e4caf90ca.png)

The dimensions and specifications for the carrier board connectors are as follows:

A=22.6mm, B=19.6mm, C=3.2mm, D=1.45mm, Contacts=100

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720593594609-450a473a-6dd0-40f8-b83f-ba358030292f.png)

## 6\. OK3576-C\&OK3576-C21 Development Board Power Consumption Table

Table 1 OK3576-C Linux Power Consumption 

| **No.**| **Test Item**| **SoM Power (W)**| **Development Board Power (including SoM) (W)**|
|:----------:|:----------:|:----------:|:----------:|
| 1| No-load startup peak power| 3.66| 5.88|
| 2 | No-load standby power| 0.82| 2.33 |
| 3 | CPU+GPU+Memory+eMMC pressure test| 5.87| 7.39 |
| 4 | 7-inch LCD screen + 4G + U disk + video decoding| 2.02| 10.02 |
| 5 | 7-inch LCD screen + 4G + U disk + video encoding| 3.06| 10.48 |
| 6 | Pwron Key （Long press)| 0.28| 0.32 |
| 7 | Pwron Key （Short press)| TBD| TBD|

Table 2. OK3576-C Android System Power Consumption

| **No.**| **Test Item**| **SoM Power (W)**| **Development Board Power (including SoM) (W)**|
|:----------:|:----------:|:----------:|:----------:|
| 1| No-load startup peak power| 4.86| 7.09 |
| 2 | No-load standby power| 0.95| 2.43 |
| 3 | Peak power during the AnTuTu 3D test| 6.04 | 10.29 |
| 4 | Pwron Key （Long press)| 0.28| 0.32 |
| 5 | Pwron Key （Short press)| 0.65| 2.19 |

Table 3 OK3576-C21 Linux Power Consumption

| **No.**| **Test Item**| **SoM Power (W)**| **Development Board Power (including SoM) (W)**|
|:----------:|:----------:|:----------:|:----------:|
| 1| No-load startup peak power| 3.86| 6.50 |
| 2 | No-load standby power| 0.66 | 3.06 |
| 3 | USB read/write power consumption| 0.88 | 4.25 |
| 4 | TF card flashing power consumption| 0.76 | 3.31 |
| 5 | 4G module PING power consumption| 0.66 | 3.71 |
| 6 | WiFi module PING power consumption| 0.66 | 2.94 |
| 7 | 7‑inch MIPI screen video playback power consumption.| 1.53 | 6.07 |
| 8 | HDMI screen power consumption| 2.00 | 4.46 |
| 9 | DP screen power consumption| 1.90 | 4.36 |
| 10 | GPU+Memory+eMMC pressure test| 4.53 | 7.20 |
| 11 | Pwron Key （Short press)| 0.02 | TBD|

**Note:**

- **OK3576-C Test conditions: The SoM configuration is 4GB memory+32GB eMMC, the 4G module is Quectel EM05-CE, and the screen is an Forlinx optional product. SoM power supply: 12V; and the carrier board is 12V;**
- **OK3576-C21 Test conditions: The SoM configuration is 4GB memory+32GB eMMC, the 4G module is Quectel EM05-CE, and the screen is an Forlinx optional product. SoM power supply: 12V; and the carrier board is 12V;**
- **Peak Power: The peak current during the startup process multiplied by the supply voltage;**
- **Standby Power: The current value while the device remains on the startup interface after booting, multiplied by the supply voltage;**
- **Power consumption is for reference only.**

## 7\. Minimum System Diagram

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202497766-6cd40972-6e14-4fb7-87e6-c8ce3ea7d662.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202503901-87b7a821-411b-4fa6-8699-c630c51f72ab.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202510322-2a09a9be-398d-4ed4-9008-33577d403111.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202515344-74ef1fc3-a58b-41da-9d7b-5410cc0ba9eb.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202521283-59e66750-4742-475a-987c-1ecb9645a0fa.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202526484-faf4ae72-40a4-43c0-8ecb-be7972823b48.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202531751-a1fb6b32-5f11-4461-9524-611092751a89.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202537316-20ba5d44-ba45-4012-9c00-cc6e288fb336.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202541259-98cbfc41-35b1-4bd6-b37b-b69a9f03be6e.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202545576-5474d0ba-e918-457a-8603-47cae5ec8c60.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202550616-be59f1df-5d26-4745-9ca8-d20bd1810bf9.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202555786-2a8b6938-e6da-4707-8ec8-3d13fd5550ae.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202560395-cc2a8ca7-9693-4c58-91f6-c6ae3ba5b628.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202565905-2b791e97-81c1-4564-a31e-e136a9fa58da.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202570526-541ed216-c5f5-4e96-b85d-dbedc4714863.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202575346-49db14b2-5ace-48ed-a80b-feee12eb666b.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202581041-938c01c0-b986-4431-98d7-8efab07cf602.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202586705-41cde625-2184-463f-ba3d-48247cf83ec2.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202591441-c5f53746-00e5-4690-a88f-51fa87e83292.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721202596564-48011e43-55b8-45f2-83ee-c61b54f07f67.png)

The diagram above is for illustrative purposes only; please refer to the schematic in the source file for the actual connections. To ensure the proper operation of the SoM, the minimum system includes the SoM power supply circuit, system programming/burning circuit, and debug serial port circuit.