# User's_Hardware_Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

# Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

# Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware design guidelines, please refer to Forlinx's “UP5 Pin Multiplexing Mapping Table".

There are seven main chapters:

+ Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;
+ Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;
+ Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;
+ Chapter 4. provides the hardware design guide, including design considerations for each interface;
+ Chapter 5. presents the package dimensions diagram, including SoM pin layout, packaging and steel mesh design;
+ Chapter 6. provides the OK3576-UP5 development board power consumption table;
+ Chapter 7. shows the minimum system diagram.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|:-----------|
| **Note** | **Note or particularly important information must be read carefully.** |
| 📚 | Relevant explanations regarding the testing section. |
| 🛤️ ️️ | Related paths.|

# Application Scope

This hardware manual applies to Forlinx development board and FET3576-UP5 SoM (version 1.1 and above).

# Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 09/10/2026 | V1.0| V1.1| V1.2 and above| Initial Version|

# 1. RK3576 Description

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

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535903750_ded114e7_1c78_46be_9001_4d37cf04010f.png)

# 2. FET3576-UP5 SoM Description

## 2.1 FET3576-UP5 Appearance Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535905428_84608c59_0b12_43d9_8381_2b91b21f222c.png)

**Front**

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535905584_2a433531_45f5_4bfd_a7e1_19ae91d9f232.png)

**Back**

## 2.2 FET3576-UP5 SoM Dimension Diagram

FET3576-UP5 SoM Dimension Diagram：

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535905683_d775d8b9_3a77_4f90_a6d1_f7f8e05c6dd6.png)

Unit: mm

Dimensions: 50mm × 50mm, dimensional tolerance ±0.15mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

## 2.3 Performance Parameter

### 2.3.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|:--------:|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| System Clock Arm® Cortex®-A72| -| -| 2300| MHz| -|
| System Clock Arm® Cortex®-A53| -| -| 2200| MHz||
| System Clock Arm® Cortex®-M0| -| -| -| -| -|

### 2.3.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|:--------:|----------|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Main Power Voltage| 12V| 5| 12| 13| V| -|

### 2.3.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|:--------:|:--------:|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Operating Temperature| Working Environment| 0| 25| 80| ℃| Commercial Level|
| | Storage Environment| -40| 25| +125| ℃||
| Humidity| Working Environment| 10| -| 90| ％RH| No Condensation|
| | Storage Environment| 5| -| 95| ％RH||

### 2.3.4 SoM Interface Speed

| **Parameter**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|:--------:|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Serial Port Communication Speed| -| 115200| 4M| bps| -|
| SPI Clock Frequency| -| -| 50| MHz| -|
| I2C Communication Speed| -| 100| 400| Kbps| -|
| USB3.0 Interface Speed| -| -| 5| Gbps| -|
| USB2.0 Interface Speed| -| -| 480| Mbps| -|
| CAN Communication Speed| -| -| 1| Mbps| -|
| PCIe2.1| -| -| 5| Gbps| -|

### 2.3.5 ESD Features

| **Parameter**| **Specification**| | **Unit**| **Application Scope**|
|:----------:|:----------:|----------|:----------:|:----------:|
| | **Minimum**| **Maximum**| |
| ESD HBM(ESDA/JEDEC JS-001-2017)| -2000| 2000| V| All signals routed out from the SoM.|
| ESD CDM(ESDA/JEDEC JS-002-2018)| -250| 250| V| All signals routed out from the SoM.|

<font color="black">**Note:**</font>

- <font color="black">**The above data is provided by Rockchip;**</font>

- <font color="black">**As all the signals exported from SoM are electrostatic sensitive signals, the interfaces should be well protected from static electricity in the carrier board design and the SoM transportation, assembling, and use.**</font>

## 2.4 SoM Interfaces

### 2.4.1 FET3576x-UP5 SoM Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 4| Supports 4 x I-2 Interfaces; <br />Three of these interfaces each have 2 x D-PHY v1.2 data lanes, with 2.5 Gbps per lane; <br />The fourth interface supports either 4 x D-PHY data lanes or 3 C-PHY trios; <br />D-PHY v2.0 lane speed: 4.5 Gbps; <br />C-PHY v1.1 trio speed: 2.4 Gsps. |
| HDMI_TX| 1| Supports 1 x HDMI_TX interface;HDMI v2.1;<br />Supports up to 4K@120 Hz;<br />Data formats: RGB/YUV444/YUV422/YUV420 8/10-bit;<br />Supports CEC and ARC;<br />HDCP v2.3 and HDCP v1.4. |
| MIPI DSI| 1| Supports 1 x MIPI DSI-2 TX interface;D-PHY v2.0 or C-PHY v1.1;<br />4 x data lanes on D-PHY; <br />3 data trios on C-PHY;<br />Supports up to 2560 × 1600@60 Hz;<br />Data format: RGB (up to 10-bit). |
| SAI| 1| Supports 1 x SAI interface;<br />SAI 2 supports 1 TX lane and 1 RX lane;<br />Supports I2S/TDM/PCM mode;<br />Maximum sample rate: 192 kHz;<br />Audio resolution: 16 to 32 bits. |
| Ethernet| 2| 2 × GMAC with RGMII / RMII interfaces; <br />Supports Data rates: 10/100/1000 Mbps. |
| Combo high speed interface| 2| Supports one combined PCIe 2.1/SATA 3.1 interface, comprising one data lane; <br />Supports one combined PCIe 2.1/SATA 3.1/USB 3.2 Gen 1 x1 interface, comprising one data lane. |
| DP&USB 3.2Gen1 OTG| 1| Supports 1 x B/DP combo port; <br />USB port: USB 3.2 Gen 1 x1;<br />Dual-Role Device (DRD);<br />DisplayPort TX port: DisplayPort v1.4; <br />Supports 1/2/4 channels, with channel speeds of 1.62, 2.7, 5.4 and 8.1 Gbps;<br />Supports up to 4K@120Hz;<br />Supported data formats: RGB/YUV444/YUV422/YUV420 8/10-bit: <br />Supports Multi-Stream Transport (MST) for 3 displays;<br />Supports DP Altmode on USB Type-C; <br />Supports HDCP v2.3 and HDCP v1.3. |
| SDIO| 2| SDIO v3.0, 4-bit data bus width|
| SPI| 2| Each interface supports two chip-select signals;<br />Supports both serial master and serial slave modes, which can be configured via software. |
| I2C| 4| Supports 7-bit and 10-bit address modes; <br />Data transmission rate of 100K bits/s in standard mode and 400k bits/s in fast mode. |
| UART| 4| 2 x UART support automatic flow control mode;<br />2 x UART channels support RS485 mode |
| CAN| 2| Compliant with CAN & CAN FD specifications;<br />Supports standard & extended frame transmission;<br />8192‑bit receive FIFO; |
| PWM| 2| Supports up to 2 on-chip PWM with interrupt-based operation and capture mode;|
| ADC| 4| Supports 4 x 12bit single-ended input SAR-ADC with sampling rate up to 1MS/s;|
| GPIO| 16| All GPIOs can be used to generate interrupts; <br />Supports level-triggered and edge-triggered interrupts; <br />Supports configuration of level-triggered polarity; <br />Supports rising-edge, falling-edge and dual-edge interrupts; <br />Supports configuration of pull-up/pull-down (weak pull-up and weak pull-down);<br />Supports configuration of drive capability. |

<font color="black">**Note: The UP5 definition includes a RESERVE area. This area's function is divided according to the platform. It has different functions. If you have a need, please check the “REFERENCE FOR REUSAGE” table.**</font>

### 2.4.2 FET3576-UP5 CPU Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 5| Supports 5 x CSI-2 interfaces;<br />4 of the interfaces feature 2 data lanes (D-PHY v1.2, 2.4 Gbps per lane);<br />These 4 interfaces can be combined to form 2 interfaces with 4 data lanes each;<br />The remaining 1 x interface supports either 4 D-PHY data lanes or 3 C-PHY trios;<br />D-PHY v2.0 supports lane speed up to 4.5 Gbps;<br />C-PHY v1.1 supports trio speed up to 2.4 Gsps. |
| DVP| 1| Standard DVP interface (8/10/12/16-bit, up to 150 Mhz); <br />Supports BT.601, BT.656, and BT.1120 VI interfaces |
| HDMI/eDP TX| 1 *****<sup>**1**</sup>| Supports 1 x HDMI/eDP TX combo port;<br />HDMI port: HDMI v2.1, supports up to 4K@120Hz;      <br />Supported data formats:RGB/YUV444/YUV422/YUV420 8/10-bit; <br />Supports CEC and ARC; <br />HDCP v2.3 and HDCP v1.4; <br />eDP port: eDP v1.3, supports up to 4K@60Hz;      <br />HDCP v1.3 |
| DP TX| 1 *****<sup>**1**</sup>| Supports 1 x USB/DP combo port; <br />USB port: USB 3.2 Gen 1 x1; <br />Dual-Role Device (DRD); <br />DisplayPort TX port: DisplayPort v1.4;<br />Supports 1/2/4 channels, with channel speeds of 1.62, 2.7, 5.4 and 8.1 Gbps; Supports up to 4K@120Hz; <br />Supports Multi-Stream Transport (MST) for 3 displays; <br />Supports DP Altmode on USB Type-C;<br />Supports HDCP v2.3 and HDCP v1.3. |
| MIPI DSI| 1 *****<sup>**1**</sup>| Supports 1 x MIPI DSI-2 TX interface;<br />D-PHY v2.0 or C-PHY v1.1;<br />4 x data lanes on D-PHY;<br />3 data trios on C-PHY;<br />Supports up to 2560 × 1600@60 Hz;<br />Data format: RGB (up to 10-bit). |
| Parallel| 1 *****<sup>**1**</sup>| Supports 1 x parallel output interface;<br />Supports RGB/BT.656/BT1120;<br />Supports up to 1920 × 1080@60 Hz;Data format: RGB (up to 10-bit). |
| EBC| 1 *****<sup>**1**</sup>| Supports 1 EBC output interface;<br />Supports E-ink EPD (Electronic Paper Display);<br />Supports 2560 × 1920 hardware decoding;<br />Data bus width: 16-bit;<br />Supports up to 32-level gray scale;<br />Supports Direct mode, LUT mode, 3-window mode;<br />Supports window display mode. |
| SAI| ≤5| Supports 5 x SAI interfaces;<br />SAI 2/3/4 support 1 TX lane and 1 RX lane;<br />Supports I2S/TDM/PCM modes;<br />Supports a maximum sample rate of 192 kHz;<br />Supports audio resolution from 16 bits to 32 bits. |
| SPDIF TX| ≤2| Supports 2 x SPDIF TX ports;|
| SPDIF RX| ≤2| Supports 2 x SPDIF RX ports; |
| PDM| ≤2| Up to 8 channels, audio resolution: 16‑bit to 24‑bit, sample rate up to 192 kHz;<br />Supports PDM master receive mode. |
| Ethernet| ≤2| 2 × GMAC with RGMII / RMII interfaces;<br />Supports Data rates: 10/100/1000 Mbps. |
| Combo High Speed Interface | 2| Supports one combined PCIe 2.1/SATA 3.1 interface, comprising one data lane;<br />Supports one combined PCIe 2.1/SATA 3.1/USB 3.2 Gen 1 x1 interface, comprising one data lane. |
| USB 2.0 OTG| 2| 2 x USB2.0 OTG|
| SDIO| ≤2| SDIO v3.0, 4-bit data bus width|
| SPI| ≤5| Each interface supports two chip-select signals;<br />Supports both serial master and serial slave modes, which can be configured via software. |
| I2C| ≤9| Supports 7-bit and 10-bit address modes;<br />Data transmission rate of 100K bits/s in standard mode and 400k bits/s in fast mode. |
| I3C| ≤2| Supports 2 x I3C master ports|
| UART| ≤12| Built‑in 2 × 64‑bit FIFO (separate TX/RX);<br />Supports 5‑, 6‑, 7‑, 8‑bit serial data transmission,12 × UART all support auto‑flow‑control (AFC) mode; <br />12 × UART all support RS‑485 mode. |
| CAN| ≤2| Compliant with CAN & CAN FD specifications;<br />Supports standard & extended frame transmission8192‑bit receive FIFO; |
| DSMC| ≤1| Supports up to 4 chip selections:8-line & 16-line serial transmission modes;<br />Configurable 16/32-bit serial address width. |
| FlexBus| ≤1| Supports built-in DMA, with ping-pong operation capability and configurable dual address spaces;<br />Supports transmit and receive modes;<br />Supports single-mode and continuous modes. |
| PWM| ≤16| Supports up to 16 on-chip PWM with interrupt-based operation and capture mode;|
| ADC| ≤8| Supports 8 x 12bit single-ended input SAR-ADC with sampling rate up to 1MS/s|
| GPIO| n| All GPIOs can be used to generate interrupts;<br />Supports level-triggered and edge-triggered interrupts; <br />Supports configuration of level-triggered polarity;<br />Supports rising-edge, falling-edge and dual-edge interrupts;<br />Supports configuration of pull-up/pull-down (weak pull-up and weak pull-down);<br />Supports configuration of drive capability. |

**<font color="black">Note: **

- **The parameters in the table are based on hardware design or theoretical CPU values;</font>**

- <font color="black">**The interface employs GPIO multiplexing, representing the theoretical maximum connections.**</font>

- <font color="black">**\*Video Port**</font>
  - **<font color="black">Video Port0 supports up to 4K@120Hz with 10 bit data</font>**
  - **<font color="black">Video Port1 supports up to 2560x1600@60Hz with 10-bit data</font>**
  - **<font color="black">Video Port2 supports up to 1920x1080@60Hz with 8-bit data</font>**
  - **<font color="black">Each Video Port may connect to any of HDMI/eDP/DP/DSI-2</font>**
  - **<font color="black">Port1 and Port2 may connect to parallel output interface</font>**
- <font color="black">**\*The maximum design clock frequency for a single TDM bus is 50MHz.** **When using TDM mode, the theoretically supported number of audio channels can be calculated by combining the audio sampling frequency and resolution to assess whether it meets the project requirements.</font>**

## 2.5 FET3576x-UP5 SoM Pin Definitions

### 2.5.1 FET3576x-UP5 SoM Pin Schematic

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535905796_2e5c8e00_125d_487f_a128_cf70338ef97f.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535905903_78af8972_e66e_4c4e_bedd_e3753ece4a4b.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535906099_3929f8dd_6b15_4542_a382_eb45c4c97db7.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535906216_e63779e8_583b_4078_b776_363c7db2d885.png)

### 2.5.2 FET3576-UP5 SoM Pin Function Description

<font color="black">**Note:**</font>

<font color="black">**Num ——SoM connector pin no.:**</font>

<font color="black">**Ball —— CPU pin ball no.**</font>

<font color="black">**GPIO ——CPU pin general I/O port serial number**</font>

<font color="black">**Vol —— Pin signal electrical level**</font>

<font color="black">**Note:**</font>

<font color="black">**Signal Name — The network name on the SoM Connector.** </font>

<font color="black">**Pin Description — Description of the SoM pin signal name.**</font>

<font color="black">**For various functional expansion requirements, please refer to the user document "FET3576x- UP5 Pin Multiplexing Table". However, for more detailed information, it is recommended that you consult the relevant documentation, the chip datasheet, and the reference manual.**</font>

<font color="black">**SYSTEM**</font>

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| VCC12V1| VCC12V| 2| -| -| 12V| Power Input|
| VCC12V2| VCC12V| 3| -| -| 12V| Power Input|
| VCC12V3| VCC12V| 4| -| -| 12V| Power Input|
| VCC12V4| VCC12V| 623| -| -| 12V| Power Input|
| VCC12V5| VCC12V| 624| -| -| 12V| Power Input|
| LED| RUN_LED| 620| -| -| 3.3V| SoM heartbeat signal output|
| EXTP_EN| Carry_Board_PEN| 145| -| -| 3.3V| Carrier board power enable|
| STANDBY| GPIO0_B5_d| 144| AD29| GPIO0_B5_d| 3.3V| Low power function pin|
| nRESET| RESET_L| 140| W28| -| 1.8V| SoM reset pin|
| WAKEUP| NC| -| -| -| -| -|
| PWRON| PWRON_L| 141| -| -| -| On/Off signal|
| BOOT0/BOOT1| NC| -| -| -| -| -|
| FORCE_USBLOAD| SARADC_VIN0_BOOT| 139| A25| -| -| USB download|
| POR_B| RESET_L| 143| -| -| 1.8V| JTAG reset|
| UART_DEBUG_A_TX| UART0_TX_M0_DEBUG| 80| 1U24| GPIO0_D4_U| 3.3V| Debug serial port send|
| UART_DEBUG_A_RX| UART2_RX_M0_DEBUG| 79| AA28| GPIO0_D5_U| 3.3V| Debug serial port receive|
| DEBUG_M| NC| -| -| -| -| -|
| DEBUG_D| NC| -| -| -| -| -|
| JTAG| NC| -| -| -| -| -|

**I2C**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| I2C_A_SCL| I2C4_SCL_M3| 147| 1E9| GPIO3_C0_D| 3.3V| I2C4 serial clock signal|
| I2C_A_SDA| I2C4_SDA_M3| 148| 1D12| GPIO3_B7_D| 3.3V| I2C4 serial data signal|
| I2C_B_SCL| I2C5_SCL_M3| 320| 1D9| GPIO3_C4_D| 3.3V| I2C5 serial clock signal|
| I2C_B_SDA| I2C5_SDA_M3| 321| 1B10| GPIO3_C1_D| 3.3V| I2C5 serial data signal|
| I2C_C_SCL| I2C7_SCL_M1| 76| 1D16| GPIO3_A0_D| 3.3V| I2C7 serial clock signal|
| I2C_C_SDA| I2C7_SDA_M1| 77| 1B18| GPIO3_A1_D| 3.3V| I2C7 serial data signal|
| I2C_D_SCL| I2C8_SCL_M2| 144| A21| GPIO2_B6_D| 3.3V| I2C8 serial clock signal|
| I2C_D_SDA| I2C8_SDA_M2| 115| B21| GPIO2_B7_D| 3.3V| I2C8 serial data signal|

**ADC**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| LRADC| SARADC_VIN1_KEY/RECOVERY| 135| 1A22| -| 1.8V| General ADC|
| GPADC_A| SARADC_VIN4| 132| 1E18| -| 1.8V| General ADC|
| GPADC_B| SARADC_VIN5| 133| 1D19| -| 1.8V| General ADC|
| GPADC_C| SARADC_VIN6| 134| 1D21| -| 1.8V| General ADC|

**AUDIO**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| I2S_MCLK| SAI2_MCLK_M0| 108| 1E21| GPIO1_D4_D| 1.8V| I2S main clock|
| I2S_DOUT| SAI2_SDO_M0| 109| C29| GPIO1_D0_D| 1.8V| I2S Output Data|
| I2S_DIN| SAI2_SDI_M0| 110| C28| GPIO1_D3_D| 1.8V| I2S Input Data|
| I2S_BCLK| SAI2_SCLK_M0| 111| 1D22| GPIO1_D1_D| 1.8V| I2S Bit Clock|
| I2S_LRCK| SAI2_LRCK_M0| 112| 1A24| GPIO1_D2_D| 1.8V| I2S Send Frame Clock|
| Native HP| NC| -| -| -| -| -|
| Native MIC| NC| -| -| -| -| -|
| Native SPKOUT_L| NC| -| -| -| -| -|
| Native SPKOUT_R| NC| -| -| -| -| -|

**DISPLAY**

**HDMI_TX**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| HDMI_TX_HPD| HDMI_TX_HPDIN_M0| 163| AK2| GPIO4_C1_D| 3.3V| HDMI send link detection|
| HDMI_TX_CEC| HDMI_TX_CEC_M0| 164| AK3| GPIO4_C0_D| 3.3V| HDMICEC signal|
| HDMI_TX_ON_H| GPIO2_B0_d| 417| B19| GPIO2_B0_D| 3.3V| HDMI0_TX start signal|
| HDMI_TX_I2C_SCL| HDMI_TX_SCL| 533| AL2| GPIO4_C2_D| 3.3V| HDMI Serial Clock|
| HDMI_TX_I2C_SDA| HDMI_TX_SDA| 532| 1AE2| GPIO4_C3_D| 3.3V| HDMI serial data|
| HDMI_TX_SBD_P| HDMI_TX_SBDP| 295| 2T12| -| -| HDMISBD signal+|
| HDMI_TX_SBD_N| HDMI_TX_SBDN| 294| 2U12| -| -| HDMISBD signal-|
| HDMI_TX_CLK_P| HDMI_TX_D3P| 420| AL26| -| -| HDMI differential signal 3+|
| HDMI_TX_CLK_N| HDMI_TX_D3N| 419| AK26| -| -| HDMI differential signal 3-|
| HDMI_TX_D0_P| HDMI_TX_D0P| 167| 1AE24| -| -| HDMI differential signal 0+|
| HDMI_TX_D0_N| HDMI_TX_D0N| 166| AK27| -| -| HDMI differential signal 0-|
| HDMI_TX_D1_P| HDMI_TX_D1P| 536| AK28| -| -| HDMI differential signal 1+|
| HDMI_TX_D1_N| HDMI_TX_D1N| 535| AL28| -| -| HDMI differential signal 1-|
| HDMI_TX_D2_P| HDMI_TX_D2P| 298| AJ28| -| -| HDMI differential signal 2+|
| HDMI_TX_D2_N| HDMI_TX_D2N| 297| AK29| -| -| HDMI differential signal 2-|

**HDMI_RX**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| HDMI_RX| -| -| -| -| -| -|

**MIPI_DSI_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| MIPI_DSI_TP_RST| GPIO0_C4_d| 439| 1W22| GPIO0_C4_D| 3.3V| MIPI_DSI reset|
| MIPI_DSI_A_TP_INT| GPIO0_B7_d| 440| 1W24| GPIO0_B7_D| 3.3V| MIPI_DSI interrupt|
| MIPI_PWR_EN| GPIO0_C0_d| 192| AB29| GPIO0_C0_D| 3.3V| MIPI_DSI enable signal|
| PWM_D| PWM0_CH1_M0| 193| 1W21| GPIO0_C3_D| 3.3V| PWM0|
| MIPI_DSI_A_CLK_P| MIPI_DPHY_DSI_TX_CLKP| 436| AL17| -| -| MIPI_DPHY 0 send clock+|
| MIPI_DSI_A_CLK_N| MIPI_DPHY_DSI_TX_CLKN| 437| AK17| -| -| MIPI_DPHY 0 send clock-|
| MIPI_DSI_A_D0_P| MIPI_DPHY_DSI_TX_D0P| 317| AL15| -| -| MIPI_DPHY 0 send data 0+|
| MIPI_DSI_A_D0_N| MIPI_DPHY_DSI_TX_D0N| 318| AK15| -| -| MIPI_DPHY 0 send data 0-|
| MIPI_DSI_A_D1_P| MIPI_DPHY_DSI_TX_D1P| 189| AL16| -| -| MIPI_DPHY 0 send data 1+|
| MIPI_DSI_A_D1_N| MIPI_DPHY_DSI_TX_D1N| 190| AK16| -| -| MIPI_DPHY 0 send data 1-|
| MIPI_DSI_A_D2_P| MIPI_DPHY_DSI_TX_D2P| 314| AL18| -| -| MIPI_DPHY 0 send data 2+|
| MIPI_DSI_A_D2_N| MIPI_DPHY_DSI_TX_D2N| 315| AK18| -| -| MIPI_DPHY 0 send data 2-|
| MIPI_DSI_A_D3_P| MIPI_DPHY_DSI_TX_D3P| 186| AL19| -| -| MIPI_DPHY 0 send data 3+|
| MIPI_DSI_A_D3_N| MIPI_DPHY_DSI_TX_D3N| 187| AK19| -| -| MIPI_DPHY 0 send data 3-|

**MIPI_DSI_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| MIPI_DSI_B_TP_INT| GPIO0_C1_d| 181| AB28| GPIO0_C1_D| 3.3V| MIPI_DSI interrupt|
| MIPI_DSI_B| -| -| -| -| -| -|

**eDP**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| eDP| -| -| -| -| -| -|

**LCD/LVDS**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
| PWM_A| PWM2_CH6_M3| 306| 1C10| GPIO3_D6_D| 3.3V| PWM2|
| LCD| NC| -| -| -| -| -|
| LVDS_A| NC| -| -| -| -| -|
| LVDS_B| NC| -| -| -| -| -|

**SPI**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| SPI_A_CLK| SPI0_CLK_M0| 127| 1Y23| GPIO0_C7_D| 3.3V| SPI0 clock|
| SPI_A_MOSI| SPI0_MOSI_M0| 128| 1W23| GPIO0_D0_D| 3.3V| SPI0 data output|
| SPI_A_MISO| SPI0_MISO_M0| 129| AC28| GPIO0_D1_D| 3.3V| SPI0 Data Input|
| SPI_A_CS| SPI0_CSN0_M0| 130| 1Y21| GPIO0_C6_D| 3.3V| SPI0 chip select|
| SPI_A_INT| GPIO0_C5_d| 373| 1AA22| GPIO0_C5_D| 3.3V| SPI0 interrupt|
| SPI_B_CLK| SPI4_CLK_M0| 245| AJ1| GPIO4_C7_D| 3.3V| SPI1 clock|
| SPI_B_MOSI| SPI4_MOSI_M0| 246| AK1| GPIO4_C5_D| 3.3V| SPI1 data output|
| SPI_B_MISO| SPI4_MISO_M0| 250| 1AE1| GPIO4_C6_D| 3.3V| SPI1 Data Input|
| SPI_B_CS| SPI4_CSN0_M0| 251| AL3| GPIO4_C4_D| 3.3V| SPI1 chip select|
| SPI_B_INT| GPIO4_A1_d| 372| 1B7| GPIO4_A1_D| 3.3V| SPI1 interrupt|

**ETHERNET**

**RGMII_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| RGMII_A_RST| GPIO3_A4_d| 55| 1D13| GPIO3_A4_D| 3.3V| GMAC0 reset|
| RGMII_A_CLKOUT| GMAC0_MCLK_M0| 54| B14| GPIO3_B0_D| 3.3V| PHY 125MHz sync clock input|
| RGMII_A_TXD3| GMAC0_TXD3_M0| 50| B9| GPIO3_C2_D| 3.3V| GMAC0 data send 3|
| RGMII_A_TXD2| GMAC0_TXD2_M0| 49| 1A8| GPIO3_C3_D| 3.3V| GMAC0 data send 2|
| RGMII_A_TXD1| GMAC0_TXD1_M0| 48| B10| GPIO3_B4_D| 3.3V| GMAC0 data send 1|
| RGMII_A_TXD0| GMAC0_TXD0_M0| 47| 1A9| GPIO3_B5_D| 3.3V| GMAC0 data send 0|
| RGMII_A_TXCTL| GMAC0_TXCTL_M0| 46| A11| GPIO3_B3_D| 3.3V| GMAC0 send |control|
| RGMII_A_TXCK| GMAC0_TXCLK_M0| 45| B11| GPIO3_B6_D| 3.3V| GMAC0 send clock|
| RGMII_A_RXD3| GMAC0_RXD3_M0| 43| 1A10| GPIO3_D2_D| 3.3V| GMAC0 receive data 3|
| RGMII_A_RXD2| GMAC0_RXD2_M0| 42| B12| GPIO3_D3_D| 3.3V| GMAC0 receive data 2|
| RGMII_A_RXD1| GMAC0_RXD1_M0| 41| 1A11| GPIO3_B1_D| 3.3V| GMAC0 receive data 1|
| RGMII_A_RXD0| GMAC0_RXD0_M0| 40| A13| GPIO3_B2_D| 3.3V| GMAC0 receive data 0|
| RGMII_A_RXCTL| GMAC0_RXCTL_M0| 39| B13| GPIO3_A7_D| 3.3V| GMAC0 receive control|
| RGMII_A_RXCK| GMAC0_RXCLK_M0| 38| 1A12| GPIO3_D1_D| 3.3V| GMAC0 receive clock|
| RGMII_A_MDC| GMAC0_MDC_M0| 53| 1A7| GPIO3_A6_D| 3.3V| GMAC0 serial management clock|
| RGMII_A_MDIO| GMAC0_MDIO_M0| 52| A9| GPIO3_A5_D| 3.3V| GMAC0 serial management data|

**RGMII_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| RGMII_B_RST| GPIO2_D6_d| 74| 1D18| GPIO2_D6_D| 3.3V| GMAC1 reset|
| RGMII_B_CLKOUT| GMAC1_MCLK_M0| 73| 1E15| GPIO2_D7_D| 3.3V| PHY 125MHz sync clock input|
| RGMII_B_MDC| GMAC1_MDC_M0| 72| 1B13| GPIO2_D4_D| 3.3V| GMAC1 serial management clock|
| RGMII_B_MDIO| GMAC1_MDIO_M0| 71| 1B15| GPIO2_D5_D| 3.3V| GMAC1 serial management data|
| RGMII_B_TXD3| GMAC1_TXD3_M0| 69| 1A13| GPIO2_C4_D| 3.3V| GMAC1 data send 3|
| RGMII_B_TXD2| GMAC1_TXD2_M0| 68| A15| GPIO2_C3_D| 3.3V| GMAC1 data send 2|
| RGMII_B_TXD1| GMAC1_TXD1_M0| 67| B15| GPIO2_C7_D| 3.3V| GMAC1 data send 1|
| RGMII_B_TXD0| GMAC1_TXD0_M0| 66| 1A14| GPIO2_C6_D| 3.3V| GMAC1 data send 0|
| RGMII_B_TXCTL| GMAC1_TXCTL_M0| 65| B16| GPIO2_D0_D| 3.3V| GMAC1 send control|
| RGMII_B_TXCK| GMAC1_TXCLK_M0| 64| 1C15| GPIO2_C5_D| 3.3V| GMAC1 send clock|
| RGMII_B_RXD3| GMAC1_RXD3_M0| 62| 1A15| GPIO2_C1_D| 3.3V| GMAC1 receive data 3|
| RGMII_B_RXD2| GMAC1_RXD2_M0| 61| A17| GPIO2_C0_D| 3.3V| GMAC1 data send 2|
| RGMII_B_RXD1| GMAC1_RXD1_M0| 60| B17| GPIO2_D2_D| 3.3V| GMAC1 receive data 1|
| RGMII_B_RXD0| GMAC1_RXD0_M0| 59| 1A16| GPIO2_D1_D| 3.3V| GMAC1 receive data 0|
| RGMII_B_RXCTL| GMAC1_RXCTL_M0| 58| B18| GPIO2_D3_D| 3.3V| GMAC1 receive control|
| RGMII_B_RXCK| GMAC1_RXCLK_M0| 57| 1D15| GPIO2_C2_D| 3.3V| GMAC1 receive clock|

**CAMERA**

**MIPI_CSI_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| MIPI_CSI_A_CLK_P| MIPI_DPHY_CSI0_RX_CLKP| 469| AK22| -| -| MIPI_DPHY 0 receive clock+|
| MIPI_CSI_A_CLK_N| MIPI_DPHY_CSI0_RX_CLKN| 468| AL22| -| -| MIPI_DPHY 0 receive clock-|
| MIPI_CSI_A_D0_P| MIPI_DPHY_CSI0_RX_D0P| 350| AK20| -| -| MIPI_DPHY 0 receive data 0+|
| MIPI_CSI_A_D0_N| MIPI_DPHY_CSI0_RX_D0N| 349| AL20| -| -| MIPI_DPHY 0 receive data 0|
| MIPI_CSI_A_D1_P| MIPI_DPHY_CSI0_RX_D1P| 576| AK21| -| -| MIPI_DPHY 0 receive data 1+|
| MIPI_CSI_A_D1_N| MIPI_DPHY_CSI0_RX_D1N| 575| AL21| -| -| MIPI_DPHY 0 receive data 1-|
| MIPI_CSI_A_D2_P| MIPI_DPHY_CSI0_RX_D2P| 225| AK23| -| -| MIPI_DPHY 0 receive data 2+|
| MIPI_CSI_A_D2_N| MIPI_DPHY_CSI0_RX_D2N| 224| AL23| -| -| MIPI_DPHY 0 receive data 2-|
| MIPI_CSI_A_D3_P| MIPI_DPHY_CSI0_RX_D3P| 466| AK24| -| -| MIPI_DPHY 0 receive data 3+|
| MIPI_CSI_A_D3_N| MIPI_DPHY_CSI0_RX_D3N| 465| AL24| -| -| MIPI_DPHY 0 receive data 3-|
| MIPI_CSI_A_MCLK| CAM_CLK0_OUT_M0| 227| 1E7| GPIO3_D7_D| 3.3V| -|

**MIPI_CSI_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| MIPI_CSI_B_CLK_P| MIPI_DPHY_CSI1_RX_CLKP| 356| 1AC22| -| -| CSI0 clock 0+|
| MIPI_CSI_B_CLK_N| MIPI_DPHY_CSI1_RX_CLKN| 355| 1AC23| -| -| CSI0 clock 0-|
| MIPI_CSI_B_D0_P| MIPI_DPHY_CSI1_RX_D0P| 582| AE29| -| -| CSI0 data receive 0+|
| MIPI_CSI_B_D0_N| MIPI_DPHY_CSI1_RX_D0N| 581| AE28| -| -| CSI0 data receive 0-|
| MIPI_CSI_B_D1_P| MIPI_DPHY_CSI1_RX_D1P| 231| AF29| -| -| CSI0 data receive 1+|
| MIPI_CSI_B_D1_N| MIPI_DPHY_CSI1_RX_D1N| 230| AF28| -| -| CSI0 data receive 1-|
| MIPI_CSI_B_MCLK| CAM_CLK1_OUT_M0| 228| 1B12| GPIO4_A0_D| 3.3V| -|

**MIPI_CSI_C**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| MIPI_CSI_C_CLK_P| MIPI_DPHY_CSI2_RX_CLKP| 472| 1AD21| -| -| CSI0 clock 1+|
| MIPI_CSI_C_CLK_N| MIPI_DPHY_CSI2_RX_CLKN| 471| 1AD22| -| -| CSI0 clock 1-|
| MIPI_CSI_C_D0_P| MIPI_DPHY_CSI2_RX_D0P| 353| AG29| -| -| CSI0 data receive 2+|
| MIPI_CSI_C_D0_N| MIPI_DPHY_CSI2_RX_D0N| 352| AG28| -| -| CSI0 data receive 2-|
| MIPI_CSI_C_D1_P| MIPI_DPHY_CSI2_RX_D1P| 579| AH29| -| -| CSI0 data receive 3+|
| MIPI_CSI_C_D1_N| MIPI_DPHY_CSI2_RX_D1N| 578| AH28| -| -| CSI0 data receive 3-|

**MIPI_CSI_D**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
| MIPI_CSI_D_CLK_P| MIPI_DPHY_CSI3_RX_CLKP| 585| 1H22| -| -| CSI1 clock 0+|
| MIPI_CSI_D_CLK_N| MIPI_DPHY_CSI3_RX_CLKN| 584| 1H23| -| -| CSI1 clock 0-|
| MIPI_CSI_D_D0_P| MIPI_DPHY_CSI3_RX_D0P| 234| H28| -| -| CSI1 data receive 0+|
| MIPI_CSI_D_D0_N| MIPI_DPHY_CSI3_RX_D0N| 233| H29| -| -| CSI1 data receive 0-|
| MIPI_CSI_D_D1_P| MIPI_DPHY_CSI3_RX_D1P| 475| J28| -| -| CSI1 data receive 1+|
| MIPI_CSI_D_D1_N| MIPI_DPHY_CSI3_RX_D1N| 474| J29| -| -| CSI1 data receive 1-|

**SDMMC**

**SD_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| SD_A_PWR| VCC_3V3_SD| 91| -| -| 3.3V/1.8V| TF Card Power Supply|
| SD_A_CMD| SDMMC0_CMD| 92| 1A21| GPIO2_A4_D| 3.3V/1.8V| SD/MMC Interface Command Signal|
| SD_A_CLK| SDMMC0_CLK| 90| 1B21| GPIO2_A5_D| 3.3V/1.8V| SD/MMC Interface Clock Signal|
| SD_A_D0| SDMMC0_D0| 88| B24| GPIO2_A0_D| 3.3V/1.8V| SD/MMC Interface Data Signal 0|
| SD_A_D1| SDMMC0_D1| 87| B25| GPIO2_A1_D| 3.3V/1.8V| SD/MMC Interface Data Signal 1|
| SD_A_D2| SDMMC0_D2| 94| A23| GPIO2_A2_D| 3.3V/1.8V| SD/MMC Interface Data Signal 2|
| SD_A_D3| SDMMC0_D3| 93| B23| GPIO2_A3_D| 3.3V/1.8V| SD/MMC Interface Data Signal 3|
| SD_A_CD| SDMMC0_DET_L| 86| 1U21| GPIO0_A7_U| 3.3V/1.8V| SDMMC card detection signal|

SDIO_B

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| SDIO_B_CMD| SDMMC1_CMD_M0| 99| B26| GPIO1_C0_D| 1.8V| SD/MMC Interface Command Signal|
| SDIO_B_CLK| SDMMC1_CLK_M0| 98| 1B22| GPIO1_C1_D| 1.8V| SD/MMC Interface Clock Signal|
| SDIO_B_D0| SDMMC1_D0_M0| 97| A28| GPIO1_B4_D| 1.8V| SD/MMC Interface Data Signal 0|
| SDIO_B_D1| SDMMC1_D1_M0| 88| B27| GPIO1_B5_D| 1.8V| SD/MMC Interface Data Signal 1|
| SDIO_B_D2| SDMMC1_D2_M0| 101| 1A23| GPIO1_B6_D| 1.8V| SD/MMC Interface Data Signal 2|
| SDIO_B_D3| SDMMC1_D3_M0| 94| A27| GPIO1_B7_D| 1.8V| SD/MMC Interface Data Signal 3|
| WIFI_HOST_WAKE_B| GPIO0_B0_z| 359| 1U22| GPIO0_B0_Z| 1.8V| The wireless network wakes up the host.|
| BT_HOST_WAKE_B| GPIO0_B1_z| 358| 1P23| GPIO0_B1_Z| 1.8V| The bluetooth wakes up the host.|

**CAN**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| CAN_A_TX| CAN0_TX_M2| 122| 1C5| GPIO4_A4_D| 3.3V| CAN0 data sending|
| CAN_A_RX| CAN0_RX_M2| 123| 1B5| GPIO4_A6_D| 3.3V| CAN0 data receiving|
| CAN_B_TX| CAN1_TX_M3| 124| 1A20| GPIO3_A2_D| 3.3V| CAN1 data sending|
| CAN_B_RX| CAN1_RX_M3| 125| 1A19| GPIO3_A3_D| 3.3V| CAN1 data receiving|
| CAN_C| NC| -| -| -| -| -|
| CAN_D| NC| -| -| -| -| -|

**UART**

**UART_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| UART_A_TX| UART4_TX_M1| 104| 1B23| GPIO1_C4_D| 1.8V| UART4 Send Data|
| UART_A_RX| UART4_RX_M1| 105| B28| GPIO1_C5_D| 1.8V| UART4 receive data|
| UART_A_RTS| UART4_RTSN_M1| 103| B29| GPIO1_C2_U| 1.8V| UART4 send request|
| UART_A_CTS| UART4_CTSN_M1| 106| 1C23| GPIO1_C3_U| 1.8V| UART4 clear sending|

**UART_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------||
| UART_B_TX| UART8_TX_M0| 587| 1D7| GPIO3_C6_D| 3.3V| UART8 Send Data|
| UART_B_RX| UART8_RX_M0| 588| 1B9| GPIO3_C5_D| 3.3V| UART8 receive data|
| UART_B_RTS| UART8_RTSN_M0| 361| 1C7| GPIO3_C7_D| 3.3V| UART8 send request|
| UART_B_CTS| UART8_CTSN_M0| 362| 1C12| GPIO3_D0_D| 3.3V| UART8 clear sending|

**UART_C**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| UART_C_TX| UART2_TX_M1| 117| 1A4| GPIO4_B5_D| 3.3V| UART2 Send Data|
| UART_C_RX| UART2_RX_M1| 118| B8| GPIO4_B4_D| 3.3V| UART2 receive data|

**UART_D**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| UART_D_TX| UART5_TX_M1| 119| 1A5| GPIO4_B0_D| 3.3V| UART5 Send Data|
| UART_D_RX| UART5_RX_M1| 120| B7| GPIO4_B1_D| 3.3V| UART5 receive data|

**USB**

**USB_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| USB2_A_VBUS| USB2_OTG0_VBUSDET| 204| 2P3| -| 5V| TYPEC0_USB20 insert detection|
| USB2_A_ID| USB2_OTG0_ID| 205| 2R6| -| -| -|
| USB2_A_D_P| USB2_OTG0_DP| 451| AK9| -| -| TYPEC0 data+|
| USB2_A_D_N| USB2_OTG0_DM| 452| AL9| -| -| TYPEC0 data-|
| TYPE-C_A_PWREN| GPIO1_C6_d_3V3| 332| A26| GPIO1_C6_D| 3.3V| TYPEC0 enable|
| TYPE-C_A_INT| GPIO0_C2_d| 333| 1V24| GPIO0_C2_D| 3.3V| TYPEC0 interrupt|
| TYPE-C_A_SBU1| DP_TX_AUXP| 198| 2T2| -| -| TYPEC0_SBU1 signal|
| TYPE-C_A_SBU2| DP_TX_AUXN| 199| 2T3| -| -| TYPEC0_SBU2 signal|
| TYPE-C_A_SBU1_DC| GPIO2_A6_d| 445| B22| GPIO2_A6_D| 3.3V| TYPEC0_SBU1 signal|
| TYPE-C_A_SBU2_DC| GPIO2_A7_d| 446| B20| GPIO2_A7_D| 3.3V| TYPEC0_SBU2 signal|
| TYPE-C_A_SSTX1_P| USB3_OTG0_SSTX1P/DP_TX_D1P| 448| AL11| -| -| TYPEC0 send differential signal 1+|
| TYPE-C_A_SSTX1_N| USB3_OTG0_SSTX1N/DP_TX_D1N| 449| AK11| -| -| TYPEC0 send differential signal 1-|
| TYPE-C_A_SSRX1_N| USB3_OTG0_SSRX1N/DP_TX_D0N| 326| AL10| -| -| TYPEC0 receive differential signal 1-|
| TYPE-C_A_SSRX1_P| USB3_OTG0_SSRX1P/DP_TX_D0P| 327| AK10| -| -| TYPEC0 receive differential signal 1+|
| TYPE-C_A_SSTX2_P| USB3_OTG0_SSTX2P/DP_TX_D3P| 329| AL13| -| -| TYPEC0 send differential signal 2+|
| TYPE-C_A_SSTX2_N| USB3_OTG0_SSTX2N/DP_TX_D3N| 330| AK13| -| -| TYPEC0 send differential signal 2-|
| TYPE-C_A_SSRX2_N| USB3_OTG0_SSRX2N/DP_TX_D2N| 201| AL12| -| -| TYPEC0 receive differential signal 2-|
| TYPE-C_A_SSRX2_P| USB3_OTG0_SSRX2P/DP_TX_D2P| 202| AK12| -| -| TYPEC0 receive differential signal 2+|

**USB_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| USB2_B_D_P| USB2_HOST1_DP| 335| 2T4| -| -| USB20_HOST0 data+|
| USB2_B_D_N| USB2_HOST1_DM| 336| 2T5| -| -| USB20_HOST0 data-|
| USB3_B_TX_P| USB3_HOST1_SSTXP| 454| N28| -| -| USB30_2 send differential+|
| USB3_B_TX_N| USB3_HOST1_SSTXN| 455| N29| -| -| USB30_2 send differential-|
| USB3_B_RX_P| USB3_HOST1_SSRXP| 207| M28| -| -| USB30_2 receive differential+|
| USB3_B_RX_N| USB3_HOST1_SSRXN| 208| M29| -| -| USB30_2 receive differential-|

**USB_C/D**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| USB_C/D| NC| -| -| -| -| -|

**PCIE**

**PCIE_A**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| PCIE_A_CLKREQn| PCIE0_CLKREQn_M0| 259| 1A17| GPIO2_B2_D| 3.3V| PCIE30_CLKREQn signal|
| PCIE_A_PERSTn| GPIO0_D3_d| 260| 1AA23| GPIO0_D3_D| 3.3V| PCIE30 reset|
| PCIE_A_WAKEn| PCIE0_WAKEn_M0| 495| 1Y22| GPIO0_D2_D| 3.3V| PCIE30 link inser detection|
| PCIE_A_CLK_P| PCIE0_REFCLKP| 501| 1N22| -| -| PCIE3.0 clock input +|
| PCIE_A_CLK_N| PCIE0_REFCLKN| 500| 1N23| -| -| PCIE3.0 clock input-|
| PCIE_A_TX0_P| PCIE0_TXP| 385| P29| -| -| PCIE3.0 data send 0+|
| PCIE_A_TX0_N| PCIE0_TXN| 384| P28| -| -| PCIE3.0 data send 0-|
| PCIE_A_RX0_P| PCIE0_RXP| 263| R28| -| -| PCIE3.0 data receive 0+|
| PCIE_A_RX0_N| PCIE0_RXN| 262| R29| -| -| PCIE3.0 data receive 0-|
| PCIE_A_TX1_P| -| -| -| -| -| -|
| PCIE_A_TX1_N| -| -| -| -| -| -|
| PCIE_A_RX1_P| -| -| -| -| -| -|
| PCIE_A_RX1_N| -| -| -| -| -| -|

**PCIE_B**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| PCIE_B_CLKREQn| -| -| -| -| -| -|
| PCIE_B_PERSTn| -| -| -| -| -| -|
| PCIE_B_WAKEn| -| -| -| -| -| -|
| PCIE_B_CLK_P| PCIE30_PORT1_REFCLKP_IN| 257| A28| -| -| PCIE3.0 clock input +|
| PCIE_B_CLK_N| PCIE30_PORT1_REFCLKN_IN| 256| B28| -| -| PCIE3.0 clock input-|
| PCIE_B_TX0_P| -| -| -| -| -| -|
| PCIE_B_TX0_N| -| -| -| -| -| -|
| PCIE_B_RX0_P| -| -| -| -| -| -|
| PCIE_B_RX0_N| -| -| -| -| -| -|
| PCIE_B_TX1_P| -| -| -| -| -| -|
| PCIE_B_TX1_N| -| -| -| -| -| -|
| PCIE_B_RX1_P| -| -| -| -| -| -|
| PCIE_B_RX1_N| -| -| -| -| -| -|

**PCIE_C/D**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------||
| PCIE_C/D| NC| -| -| -| -| -|

**SERDES**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| SERDES| NC| -| -| -| -| -|

**GPIO**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|----------|----------|----------|----------|----------|----------|----------|
| IO_EXT_RST| GPIO4_B2_d| 346| B6| GPIO4_B2_D| 3.3V| IO extentsion reset|
| IO_EXT_INT| GPIO4_B3_d| 347| 1A6| GPIO4_B3_D| 3.3V| IO Extension interrupt|
| USER_GPIO0| GPIO0_A0_d_3V3| 157| V29| GPIO0_A0_D| 3.3V| General IO|
| USER_GPIO1| GPIO0_A2_d_3V3| 158| 1U23| GPIO0_A2_D| 3.3V| General IO|
| USER_GPIO2| GPIO0_A5_d_3V3| 178| Y29| GPIO0_A5_D| 3.3V| General IO|
| USER_GPIO3| GPIO1_C7_d_3V3| 180| 1C22| GPIO1_C7_D| 3.3V| General IO|
| USER_GPIO4| GPIO2_B4_d| 213| A19| GPIO2_B4_D| 3.3V| General IO|
| USER_GPIO5| GPIO3_D5_d| 248| 1D10| GPIO3_D5_D| 3.3V| General IO|
| USER_GPIO6| GPIO3_D4_d| 338| 1E12| GPIO3_D4_D| 3.3V| General IO|
| USER_GPIO7| GPIO1_D5_d_3V3| 370| 1E22| GPIO1_D5_D| 3.3V| General IO|
| USER_GPIO8| GPIO2_B1_d| 399| 1A18| GPIO2_B1_D| 3.3V| General IO|
| USER_GPIO9| GPIO2_B3_d| 457| 1B16| GPIO2_B3_D| 3.3V| General IO|
| USER_GPIO10| GPIO2_B5_d| 486| 1C18| GPIO2_B5_D| 3.3V| General IO|
| USER_GPIO11| GPIO4_A2_d| 515| 1D6| GPIO4_A2_D| 3.3V| General IO|
| USER_GPIO12| GPIO4_A3_d| 567| 1C6| GPIO4_A3_D| 3.3V| General IO|
| USER_GPIO13| GPIO4_A5_d| 593| 1B6| GPIO4_A5_D| 3.3V| General IO|
| USER_GPIO14| GPIO4_A7_d| 619| A7| GPIO4_A7_D| 3.3V| General IO|

**RESERVE**

| **UP5 Standard Interface Functions**| **FET3576x-UP5 Pinout Functions**| **Num**| **Ball**| **GPIO**| **Vol**| **Pin Description**|
|:----------:|:----------:|----------|----------|----------|----------|----------|
| RES0| PMIC_VDC| 543| -| -| 5V| Power-on control|
| RES1| SARADC_VIN2_HW_ID| 544| 1B19| -| -| General ADC|
| RES2| SARADC_VIN3_HP_HOOK| 546| 1C19| -| -| General ADC|
| RES3| SARADC_VIN7_LCD_ID| 547| 1E19| -| -| General ADC|
| RES4| MIPI_DPHY_CSI4_RX_CLKP| 549| 1K22| -| -| MIPI_DPHY 4 receive clock+|
| RES5| MIPI_DPHY_CSI4_RX_CLKN| 550| 1K23| -| -| MIPI_DPHY 4 receive clock-|
| RES6| MIPI_DPHY_CSI4_RX_D0P| 552| K28| -| -| MIPI_DPHY 4 receive data 0+|
| RES7| MIPI_DPHY_CSI4_RX_D0N| 553| K29| -| -| MIPI_DPHY 4 receive data 0-|
| RES8| MIPI_DPHY_CSI4_RX_D1P| 555| L28| -| -| MIPI_DPHY 4 receive data 1+|
| RES9| MIPI_DPHY_CSI4_RX_D1N| 556| L29| -| -| MIPI_DPHY 4 receive data 1-|
| RES10| NC| -| -| -| -| -|
| RES11| NC| -| -| -| -| -|
| RES12| NC| -| -| -| -| -|
| RES13| NC| -| -| -| -| -|
| RES14| NC| -| -| -| -| -|
| RES15| NC| -| -| -| -| -|
| RES16| NC| -| -| -| -| -|
| RES17| NC| -| -| -| -| -|
| RES18| NC| -| -| -| -| -|
| RES19| NC| -| -| -| -| -|
| RES20| NC| -| -| -| -| -|
| RES21| NC| -| -| -| -| -|
| RES22| NC| -| -| -| -| -|
| RES23| NC| -| -| -| -| -|
| RES24| NC| -| -| -| -| -|
| RES25| NC| -| -| -| -| -|
| RES26| NC| -| -| -| -| -|
| RES27| NC| -| -| -| -| -|
| RES28| NC| -| -| -| -| -|
| RES29| NC| -| -| -| -| -|
| RES30| NC| -| -| -| -| -|
| RES31| NC| -| -| -| -| -|

## 2.6 SoM Hardware Design Description

**Power Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Power supply| VCC_12V| Power Input| SoM power supply pin 12V| 2\3\4\623\624|
| | VCC3V3_SD| Power output| Only used for power supply of carrier board SD card, with maximum output current capacity of 500mA.| 91|
| | GND| Ground| Power ground and signal ground on the SoM. All GND pins must be connected.|

**System Control Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| CPU Reset | RESETn| I| SoM power reset, low level effective. Do not add additional capacitive load to this pin, so as not to affect the SoM normal startup.| 143|
| Power Enable| EXTP_EN| O| Enable signal to control the external power supply of the carrier board, output by the SoM, 3.3 V level.| 145|
| On/Off| PWRON| I| Low level is valid, long press to turn off, short press to turn on.| 141|
| Debug Port| UART_DEBUG_A_TX   UART_DEBUG_A_RX| I/O| Debug Port, please keep the port functions.| 80   79|

The FET3576x-UP5 SoM integrates power, reset monitoring, and storage circuits, requiring only minimal external circuitry. A complete minimum system can be powered and run with a single 12V supply.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535906358_d50bb43a_17ce_4f64_b790_a38e79e83ccc.png)

Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external devices—such as a debugging serial port and a port for flashing images—in addition to the minimal system. Otherwise, you can not check whether the system has booted. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK3576x-UP5 Carrier Board Description".

# 3. OK3576- UP5 Embedded Development Platform Description

## 3.1 OK3576-UP5 Development Board Interface Diagram

Connection: LGA soldered

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535909731_f44b8bf5_fc82_4d44_85eb_38d4354f307c.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535909895_7898b8de_f6ce_47e2_a5ee_fe04866eac17.png)

## 3.2 OK3576-UP5 Development Board Dimension Diagram

OK3576-UP5 Development Board Dimension Diagram：

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910028_ce01c4ae_2d6e_4441_8ac1_2a7f06f30ace.png)

Carrier Board PCB Size: 130mm × 190mm, for more detailed dimensions, please refer to the user information DXF document;

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm；

Plate making process: 1.6mm thickness, 4-layer PCB；

Power Voltage: DC 12V

The OK3576x-UP5 carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 39mm × 39mm × 23mm. See below for details.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910146_ca25457b_cb71_423e_8d60_0ccc47a55801.png)

## 3.3 Naming Rules

A-B-C+D E F :G-H

| **Field**| **Field Description**| **Value**| **Description**|
|----------|----------|----------|----------|
| A| Product Line Identification| OK| Forlinx Embedded Carrier Boards/Development Boards|
| -| Separator| -|
| B| CPU Name| 3576| RK3576|
| -| Segment Identification| -| Parameter separator|
| C| Connection| UP5| Package general package 5 means 50\*50|
| +| Segment Identification| +| The configuration parameter section follows this identifier.|
| D| Type Label| M| Carrier board (Carrier board is marked with M, not filled in by default)|
| E| Operating Temperature| I| -40℃ to 85℃ Industrial-grade|
| F| PCB Version| 12| V1.2|
| | | xx| Vx.x|
| :| Separator| :| It is followed by the manufacturer's internal identification.|
| G| Connector Origin| N| No Partition\No Connector|
| -| Hyphen| -| Grade Mark Connector|
| H| Grade Identification| Blank| Mass Production|

## 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 4| 1 x MIPI DPHY V2.0 4-lane interface, supporting up to 4.5 Gbps per lane;<br />Connected via a 26-pin FPC socket, with the OV13855 camera mounted by default; <br />3 x MIPI DPHY V1.2 2-lane interfaces, supporting up to 2.5 Gbps per lane;  routed out via three 26-pin FPC sockets; <br />pre-mounted with an OV5645 camera by default; |
| MIPI DSI| 1| Each MIPI interface supports 4 lanes of output, with a maximum resolution of 2560 x 1600@60Hz;  <br />Compatible with Forlinx 7-inch MIPI display, with a resolution of 1024 x 600@30fps; |
| HDMI TX| 1| Led out via a standard HDMI connector;Supports up to 4K@120Hz.|
| USB3.2 Gen1| 1| Led out via a Type-C connector|
| USB3.0Host| 1| Routed through a Type-A USB connector;|
| PCIe2.1| 1| Led out via a PCIe x 4 slot;Supports a data rate of 5 Gbps.|
| Ethernet| 2| Led out via a single dual-layer RJ45 socket;<br />Supports data transfer rates of 10/100/1000 Mbps. |
| TF Card| 1| TF card is available, rate up to 150Mhz, supporting SDR104 mode.|
| Audio| 1| On-board codec chip, supporting functions such as headphone output, microphone input and speaker output;|
| RS485| 2| 2 x RS485 CAN bus routed out through RS485 transceiver;|
| CAN| 2| Connect one CAN bus via the CANFD transceiver;|
| UART| 1| Led out via 2.54 mm pitch; Baud rates up to 4Mbps. |
| 4G/5G| 1| Supports M.2 packaged 4G/5G modules;|
| WIFI&BT| 1| On-board WIFI&BT module;An external WiFi antenna should be connected.|
| ADC| 3| Led out via a PH2.0 socket;12-bit resolution and a sampling rate of up to 1 MS/s.|
| RTC| 1| On-board RTC chip and battery socket; |
| SPI| 2| Led out via 2.54 mm pitch pins|
| FAN| 1| On-board fan connector |

<font color="black">**Note: The parameters in the table are the theoretical values of hardware design or CPU;**</font>

## 3.5 OK3576x-UP5 Carrier Board Description

<font color="black">**Note: **</font>

- **The component UID with "_DNP" mark in the diagram below represents it is not soldered by default;**
  
- **The screenshots in this chapter are provided only for the convenience of carrier board function description. They may not fully conform to the actual principles. Please strictly follow the original schematic files for the design.**

### 3.5.1 Carrier Board Power

It uses a 12V power adapter for the power supply, and the power connector is a DC050 socket. The DIP switch S2 serves as the power switch for the development board. Move the switch in the direction indicated on the carrier board to turn it on or off. A TVS diode is connected in parallel after switch S2 for ESD protection. Fuse F10 provides overcurrent protection. Diode D3 works alongside F10 to offer reverse-connection protection.

VCC12V_DCIN supplies power to both the FET3576 SoM and other peripherals on the carrier board.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910262_142ac4e9_da69_4518_9fc2_5b54c6f46342.png)

VCC12V_DCIN is stepped down to VCC_5V via U62 (DC-DC converter). VCC_5V powers other peripherals on the carrier board. (Note: When selecting the 12V-to-5V DC-DC chip, ensure its output power is sufficiently high. It is recommended to support an output current of 6A or above to guarantee adequate current supply for downstream stages.)

After the SoM is powered on normally by 12V, it outputs a high level via the EXTP_EN pin to control U62 and enable the output of VCC_5V to power some peripherals on the development board. (This signal operates at 3.3V with 1K pull-up driving capability. If the driving capacity required by the enable pin of the enabled device exceeds this range, a buffer or gate circuit shall be added to boost the driving capacity, so as to ensure the normal power-on of both the SoM and the carrier board.)![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910418_6ffe6211_8baa_4d10_b704_741c9c4e938f.png)

U39 outputs VCC_5V_USB as a dedicated USB power rail to supply the USB interfaces and HUB.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910707_c88f9bde_b68e_4977_ac59_fa5baeb66304.png)

VCC_5V is further stepped down to VCC_3V3 via U40 (DC-DC converter). VCC_3V3 powers some devices on the SoM.  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910830_b58c3a10_b8fb_465a_86a1_5671cf25a818.png)

VCC_3V3 is stepped down to VCC_1V8 through U41, U65, and U66 (LDOs). VCC_1V8 powers some devices on the development board.  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535910921_bdf0b848_2d11_4af5_b5a9_59c4004d3c32.png)

VCC12V_DCIN is stepped down to VCC5V_S via U42 (DC‑DC). VCC5V_S supplies the carrier board display interface.

After the SoM starts up normally from the 12V supply, it outputs a high level through the STANDBY pin to control U42 and enable the output of VCC5V_S to power some peripherals on the development board. (This signal is at 3.3 V and is a “standby‑keep‑alive” pin, which allows the carrier boaard display interface to remain powered even when the SoM enters sleep mode.)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911059_34fa0e05_494e_4d2b_995b_7b5f0db1a0c7.png)

<font color="black">**Note:**</font>

- <font color="black">**When designing independently, please strictly adhere to the power-up sequencing;**</font>
- <font color="black">**The selection of step-up/step-down converter chips and their external layout must refer to the corresponding chip manuals to ensure proper power return paths.**</font>

### 3.5.2 Reset and On/Off Signal

nRESET is the SoM reset‑signal input. For debugging convenience, it is connected to a physical button.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916834_eef16a30_f04b_46cf_871b_6cc138e3607a.png)

PWRON_L serves as the power-on/power-off signal input for the SoM; for ease of debugging, it is connected to a pushbutton.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916953_91e7a947_e78c_4bc0_bc01_65e20e90259e.png)

<font color="black">**Note: To facilitate reset and power-on/off operations, it is recommended that these two buttons be routed out on the design of the carrier board.**</font>

### 3.5.3 Boot Configuration

RK3576 supports multiple boot modes. After the chip reset is completed, the built-in boot code can boot from the following interface devices. The specific boot sequence can be selected according to actual application requirements:

- Serial Flash(FSPI0, FSPI1_M0, FSPI1_M1)
- eMMC
- UFS
- SDMMC0 Card

If no boot code is detected in the above devices, system code can be downloaded to these devices via the USB2.0 OTG0 interface using the USB2_OTG0_DP/DM signals. It also supports firmware burning through the USB 3.2 Gen1x1 OTG0 interface using the USB3_OTG0_SSRX1P/N and USB3_OTG0_SSTX1P/N signals. <font color="black">**Note: If USB3.0 firmware upgrade is required while supporting 2Lane DP, the USB3.2 Gen1x1 OTG0 + DP 2‑Lane (Swap ON) solution must be adopted.**</font>

**Boot Sequence Selection:**

The boot sequence of the RK3576 can be configured using the SARADC_VIN0_BOOT Pin (PIN: 139) to enable booting from various peripherals associated with different interfaces. The available peripheral boot sequence includes 11 modes, ranging from Config1 to Config11, which can be adjusted based on specific application requirements.

Table 3.5.3.1 Boot Sequence Configuration

| Item| Rup| Rdown| ADC| BOOT MODE|
|:----------:|:----------:|:----------:|:----------:|----------|
| Config1| DNP| 10K| 0| USB (Maskrom mode)|
| Config2| 10K| 1.13K| 416| FSPI0→USB|
| Confi 3| 10K| 2.49K| 816| FSPI1_M0→EMMC→USB||
| Config4| 10K| 4.3K| 1231| FSPI1_M1→EMMC→USB|
| Config5| 10K| 6.8K| 1658| FSPI0→UFS→USB|
| Config6| 10K| 10K| 2048| FSPI1_M0→UFS→USB|
| Config7| 10K| 14.7K| 2437| UFS→USB||
| Config8| 10K| 23.2K| 2862| UFS→SDMMC0→USB|
| Config9| 10K| 40.2K| 3279| RFU|
| Config10| 10K| 88.7K| 3680| EMMC→SDMMC0→USB|
| Config11| 10K| DNP| 4095| EMMC→USB|

The FORCE_USBLOAD setting on the SoM is set with a 10K pull-up resistor, which means the SoM boots from the eMMC by default. A pull‑down resistor can be added on the carrier baord to implement other boot sequences. According to the Config1 settings, the OK3576-UP5 device connects the FORCE_USBLOAD to GND by pressing the button to enter Maskrom mode. 

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535917065_47c201a8_0175_4116_8868_f6b641afddea.png)

The LRADC is utilized to enter Recovery mode by shorting KEY1 to ground, while the SoM pulls it up to the 1.8 V supply using a 10 K resistor. On the OK3576-UP5, the key array operates in a parallel configuration. The input key values can be adjusted by changing the number of keys and modifying the proportions of the divider resistances. This allows for multi-key input to meet specific customer product requirements, as illustrated in the following figure.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911160_c874d16a_ef59_4bd1_8a3e_99af804da8af.png)

<font color="black">**Note:**</font>

- <font color="black">**When doing key acquisition, ESD protection is required near the keys. And 0 key value must be connected in series with a 100ohm resistor to strengthen the anti-static surge capacity (If there is only one button, ESD must be close to the button, ESD → 100ohm resistor → 1nF → chip pin);**</font>

- <font color="black">**To ensure that USB programming can be performed normally, please design the carrier board with two buttons connected to the USB OTG interface for programming purposes.**</font>

### 3.5.4 System Initialization Configuration Signal

In FET3576, there is an important signal that affects the system boot configuration. It must be configured before power‑on and kept stable.

SDMMC0_DET_L (Pin No. 86, Default Function: SDMMC_DET)

It determines the function assignment of IOs in the VCCIO1 power domain, which can be configured as either SDMMC0 peripheral or JTAG debug peripheral.

The JTAG function and SDMMC0 function of FET3576 are hardware-bound pin multiplexing pairs, and the function switching is completed by configuring the IOMUX (IO Multiplexer) via the SDMMC0_DET_L pin. Therefore, this pin must be pre-configured before power-up. Failure to meet the configuration timing requirement will directly result in no valid output from the JTAG interface, blocking debug operations during the chip boot phase. It will also cause abnormal SDMMC0 interface behavior, breaking the normal flow of the SDMMC0 boot functionality.![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199746968_31a0ba65_3cf8_430b_9802_8456f1540d06.png)

- If this pin is detected as high, the corresponding I/O pin switches to JTAG mode;

- When this pin detects low level (Most SD cards inserted will pull down this pin, if not need special treatment),  the corresponding IO switches to SDMMC0 function;
- After the system is up, it can be switched to have registers to control IOMUX, then the pin can be released;
- For easy reference, the configuration status of this pin corresponds to its function shown as follows:

Table 3.5.4.1 FET3576 System Initialization Configuration Signal Description

| **Signal Name**| **Internal Pull-up&down**| **Description**|
|:----------:|:----------:|----------|
| SDMMC0_DET_L| Pull-up| SDMMC/ARM JTAG Pin Multiplexing Selection Control Signal:   <br />0: Recognized as SD card inserted, SDMMC/JTAG pins are multiplexed for SDMMC0 function.<br />1: Not recognized as SD card inserted, SDMMC/JTAG pins are multiplexed for JTAG function (Default). |

### 3.5.5 JTAG and UART Debug Circuits

The JTAG interface on the RK3576 chip complies with the IEEE 1149.1 standard; a PC can connect to the DSTREAM emulator via SWD mode (two-wire mode) to debug the ARM core within the chip.

Used for emulators to debug the internal ARM Core.

The JTAG interface is described in the table below:

Table 3.5.5.1 FET3576 JTAG Debug Interface Signals

| **Signal Name**| **Description**|
|:----------:|:----------:|
| JTAG_TCK_M0/M1| SWD Mode clock input|
| JTAG_TMS_M0/M1| SWD Mode Data Input/Output|

The RK3576 has two JTAG multiplexes: JTAG_TCK_M0/JTAG_TMS_M0 is located in the VCCIO1 domain and is multiplexed with SDMMC0 via the IOMUX; JTAG_TCK_M1/JTAG_TMS_M1 is located in the PMUIO1 domain and is multiplexed with UART_Debug—UART0_M0. The IOMUX multiplexing configuration is shown in the figure below.  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199747347_cfe2f817_3baa_4f5a_a336_290e0a729450.png)

The default UART debug settings for the FET3576 are UART_DEBUG_A_TX (80) and UART_DEBUG_A_RX (79). If the UART Debug signal is brought out via a plug-in connector, a series 100ohm resistor should be added, and a TVS diode should be placed near the connector.

OK3576-UP5 development board uses a USB-to-UART chip to convert the UART Debug signal into a USB signal for user-friendly debugging, which is then routed out through a Type-C socket. You can connect OK3576-UP5's P4 to a PC with a USB Type-A to USB Type-C cable and install the XR21V1414 driver. The schematic is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911359_03fc1c8a_c174_4829_b4f0_f6f01d36d79e.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911442_caf976c8_7307_44f6_974b_e3285f143a41.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911541_d174d81f_8c76_4e8b_97be_c221335bc05f.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911647_6ccefd66_54e1_4f69_b09c_c7f9e356fdee.png)

<font color="black">**Note:**</font>

- <font color="black">**For future debugging convenience, route out these debug ports on custom carrier boards;**</font>

- <font color="black">**It is recommended to retain U1 to effectively prevent current from flowing back to the CPU through DEBUG_TX/RX when the core module is not powered, which could affect startup or even cause damage.**</font>

### 3.5.6 IIC Expanded for IO

To expose richer interfaces, the enable and reset signals on the carrier board are implemented by an I2C-to-IO converter chip U3, as shown in the schematic below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911734_434522b4_635e_4fce_bc46_5cabcc821d32.png)

### 3.5.7 SARADC Interface

OK3576-UP5 routes SARADC_VIN4/VIN5/VIN6 via P2; R13 is a variable resistor. By short-circuiting SARADC_VIN4/VIN5/VIN6 to pins 3, 5 and 6 of P2, the voltage changes can be read via the ADC whilst adjusting the resistance value of the R371 variable resistor. As shown in the figure below：

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535911814_262c63b3_ad3e_4037_8ab1_4d40f6a91d53.png)

### 3.5.8 TF Card

The P5 is the TF Card interface that supports system boot and programming. The power for the TF card is supplied by the SoM.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912020_b35070e6_c46f_4075_8dd4_ca8d131c8d46.png)

<font color="black">**Note:**</font>

- <font color="black">**SDIO impedance requirements:**</font>

  - <font color="black">Single‑ended impedance: 50ohm.</font>

  - <font color="black">Signal length matching tolerance: ±50 mil.</font>

- <font color="black">**The VDD pin on the SD card is supplied with a voltage of 3.3 V; the decoupling capacitor must not be omitted and should be placed close to the card socket during layout.**</font>

### 3.5.9 RTC Circuit

The OK3576-UP5 features an on-board external RTC function to enable more accurate timing and lower power consumption. The schematic diagram is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912127_175fe759_a191_4e8c_b91e_708896ac4c48.png)

### 3.5.10 Ethernet Circuit

It supports 1000/100/10M adaptive network port, led out via RJ45.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912224_52716792_c956_46a7_b3e1_bb5e589ed258.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912315_a5c135ea_1e44_49da_87b1_6f1f68f363f6.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912395_5e0934cd_f7a4_4d1a_958d_bcc7b8788f14.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912485_15547652_e3f5_4604_97b5_32d197656da0.png)

<font color="black">**Note：**</font>

- <font color="black">**In RGMII mode, the internal TX/RX clock path of RK3576 chip integrates delayline, which supports adjustment; default configuration of the reference chart: the timing between TXCLK and data is controlled by the MAC, the timing between RXCLK and data is controlled by PHY(If using RTL8211F/FI, i.e. RXCLK, 2nS delay is enabled by default, and other PHYs should note this configuration);**</font>
- <font color="black">**Both the GMAC0 and GMAC1 interfaces default to 3.3V signal levels. Note whether the power supply voltage of the RGMII signal power domain of the PHY chip matches the level of the GMACx interface;**</font>
- <font color="black">**Ethernet PHY Reset signal needs to be controlled by GPIO, and the level of GPIO must match the PHY IO level; 100nF capacitor must be added near the PHY pin to strengthen the anti-static capability, note: the reset pin of RTL8211F/FI only supports 3.3V level;**</font>

- <font color="black">**TXD0- TXD3, TXCLK, TXEN need to reserve 0ohm resistors at the FET3576 to improve signal quality according to actual situation;**</font>

- <font color="black">**0-ohm resistors must be connected in series at the PHY end for RXD0–RXD3, RXCLK and RXDV; where practical, signal quality should be improved;**</font>

- <font color="black">**When PHY uses an external crystal, please select the crystal capacitance according to the load capacitance value of the actual crystal used, and control the frequency deviation within ±20ppm;**</font>

- <font color="black">**MDIO must be externally added with a pull-up resistor (recommended 1.5-1.8Kohm), and the pull-up power supply must be consistent with the IO power supply;**</font>

- <font color="black">**PCB Layout needs to ensure the integrity of the RGMII signal reference plane and the PHY chip peripheral power reference plane;**</font>

- <font color="black">**Equivalent length requirement: the receiving and sending of RGMII can be grouped into equal lengths, with an equal length requirement ≤ 12.4 mil;**</font>

- <font color="black">**Impedance requirements: single-ended 50ohm.**</font>

### 3.5.11 RS485 Interface

OK3576-UP5 supports dual RS485 interfaces.

The RS485 transceiver chips U27 and U28 are TDH341S485H, which feature:

Isolation withstand voltage up to 5000 VDC.

Bus ESD protection capability up to 15 kV (HBM).

Transient immunity > 25 kV/µs. Meanwhile, the OK3576-UP5 carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912571_55b88cff_f9d2_4d1c_beb6_d39f7d6dac19.png)

### 3.5.12 CAN Interface

The FET3576-UP5 SoM supports up to 2 x CAN, namely CAN0 and CAN1:

- **Compliant with CAN & CAN FD specifications;**
- **Supports standard & extended frame transmission;**
- **8192‑bit receive FIFO.**

The OK3576-UP5 development board supports two CAN interfaces utilizing isolated CAN transceivers. The isolation withstand voltage is as high as 5000VDC, with bus electrostatic discharge protection capability reaching 15kV (HBM) and a transient immunity of >25kV/μs. Meanwhile, the OK357-UP5 carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912689_1fdbc223_b6db_4903_b7f9_4e37bcf122e9.png)

### 3.5.13 Audio

The OK3576-UP5 features an on-board I2S-interface Codec chip U43, supporting MIC input, headphone output, and 1W 8Ω speaker output. As shown in the figure below:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912787_eb3744c7_f500_46b5_a68b_fd3e943a2f58.png)

### 3.5.14 4G&5G Interface

The OK3576-UP5 integrates an M.2 Key-B interface, compatible with 4G and 5G modules. Since 4G and 5G modules operate at different supply voltages, the switch S2 must be toggled to select the corresponding power supply voltage.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535912899_5ba1d6e7_ea4f_4ed2_8c61_327c2c76a15e.png)

### 3.5.15 USB2.0/USB3.0_A/Type-C USB3.0 Circuit

The RK3576 chip integrates two USB3 OTG controllers. Both USB3 controllers embed USB2.0 OTG functionality.

**The USB 3.0 OTG 0/DP 1.4 interface is used as follows:**

A USB 3.2 Gen 1 x1 OTG0/DP 1.4 combo PHY; the internal multiplexing diagram for the USB 3 OTG0 controller and the PHY is shown below:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199749403_c919cbe6_c1e1_4069_9b1b_967b039ca5e8.png)

The USB 3.0 OTG controller supports SS, HS, FS and LS modes. The embedded USB 2.0 (HS, FS and LS) signals utilise a USB 2.0 OTG PHY; the signal names are shown within the red boxes in the figure below. The RK3576 uses this interface by default for Fireware downloads; please ensure that this interface is reserved for this purpose in your application.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913030_04d46872_10f6_4c16_85dd_47d9656daa7a.png)

<font color="black">**Note: USB2_OTG0_DP/USB2_OTG0_DM supports firmware download. If the product does not utilise this interface, it must be left accessible during debugging and production. Please note: USB2_OTG0_VBUSDET must also be connected!**</font>

The USB 3.2 SS signals (5 Gbps) are multiplexed with DP1.4, utilizing a USB/DP Combo PHY. The signals are indicated within the red boxes in the figure below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913125_41947d33_49cc_414e_9d3b_8c40e18dcccf.png)

Since the USB3 OTG and USB2.0 OTG share the same USB3 controller, the USB3 and USB2.0 OTG functions can only operate simultaneously as either Device or Host. It is not possible for the USB3 OTG to act as a Host while the USB2.0 OTG acts as a Device, or vice versa.

The USB3 OTG0 Controller and DP1.4 Controller are combined into a complete Type-C port via the USB3/DP1.4 Combo PHY. This Combo PHY supports DisplayPort Alternate Mode. In DP mode, Lane0 and Lane2 act as TX; in USB mode, they act as RX. TX and RX share Lane0 and Lane2.

This USB3/DP1.4 Combo PHY supports lane swapping (SWAP). Therefore, a standard Type-C port can be configured in the following five ways:

Configuration 1: Type-C 4-Lane (with DP function)![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199750214_784ef4f2_cd92_48f7_a2f7_6fb9d1ade09a.png)

Configuration 2: USB2.0 OTG+DP1.4 4Lane(Swap OFF)  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199750576_7b815bee_410a_4b1a_a090_70399bdf21e3.png)

Configuration 3: USB2.0 OTG+DP1.4 4Lane(Swap ON)  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199750805_b58f70e5_7c73_4601_aabe_543b544778d8.png)

Configuration 4: USB3.2 Gen1x1 OTG0+DP1.4 2Lane(Swap OFF)  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199751194_8ade452f_cd52_4726_b814_44611043dd94.png)

Configuration 5: USB3.2 Gen1x1 OTG0+DP1.4 2Lane(Swap ON)  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199751492_e286b0e5_02c1_4e07_adc6_c020d9e6df67.png)

<font color="black">**Note: The RK3576 supports firmware download via the USB3_OTG0_SSRX1P/N and USB3_OTG0_SSTX1P/N signals from the USB 3.2 Gen1x1 OTG0 interface. To support USB3.0 firmware upgrade and also require 2-Lane DP support, the USB3.2 Gen1x1 OTG0 + DP 2Lane (Swap ON) configuration must be used.**</font>

<font color="black">**The USB3 OTG1 interface is used as follows:**</font>

The PCIe1 / SATA1 / USB3 OTG1 form a Combo PHY1. The internal multiplexing diagram between the USB3 OTG1 controller and the PHY is as shown below:![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199751928_51d12731_e560_4d7b_a52a_c681951a05e9.png)

The USB3 OTG1 controller supports SS/HS/FS/LS. The embedded USB2.0 (HS/FS/LS) signals constitute the PCIe1/SATA1/USB3 OTG1 COMBO PHY1. The pin distribution is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913212_185ac645_d622_413c_924e_b824080d8780.png)

The pin assignment for the USB20 OTG1 is shown in the figure below (the FET3576-UP5 supports HOST functionality only):![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913307_1ca7f430_779c_4fed_85e5_4f13a06dc995.png)

Since the USB3 OTG1 and USB2.0 OTG1 share the same USB3 controller, the USB3 and USB2.0 OTG1 functions can only operate simultaneously as either Device or Host. It is not possible for the USB3 OTG to act as a Host while the USB2.0 OTG acts as a Device, or vice versa.

<font color="black">**Note: When the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 is configured for PCIe or SATA functionality, the USB3 OTG1 function cannot be used, and the USB2.0 PHY1 also becomes unavailable. Therefore, to use USB2.0 OTG1, the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 must be configured for USB3 functionality!**</font>

The application modes for USB3 OTG1 within the PCIe1/SATA1/USB3 OTG1 COMBO PHY1 are as follows:

Configuration 1: USB3.2 Gen1x1 OTG1  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199752841_aed730f1_62db_4d12_8a38_52fb8a1cf90c.png)

Configuration 2: USB2 OTG1  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199753203_2d61f0bb_3af6_43af_8758_b77777ecff50.png)

Configuration 3: Both USB2/USB3 unused (specific application methods for PCIe and SATA are detailed in the PCIe and SATA chapters).![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199753594_efb29133_8ec0_4630_8581_5b8ee4c453a6.png)

The OK3576-UP5 development board features a USB hub chip to split a single USB 2.0/USB 3.0 host port into two ports. One of these USB 3.0 ports is connected to a Type-A socket for customer use, providing a maximum current output of 1A, whilst the other USB 3.0 port is reserved for use by the 4G and 5G modules.

The FET3576 supports one USB/DP combo interface, supporting USB 3.2 Gen1x1 and DisplayPort v1.4. On the OK3576-UP5 carrier board, this is implemented as a standard Type-C USB 3.0 full-featured interface, supporting both data transfer and DP display output.

The figure below shows the circuit for the USB3.0 Hub section:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913396_3fda47d8_6628_43cb_ab53_ff299e3be3bf.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913541_409c27aa_9938_4e9a_8aa6_6b7112bb9cbc.png)

Two additional switching power supplies are used to provide 3.3V and 1.2V power to the USB Hub chip.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913654_cd735c8d_495d_42ff_9d14_d91e5514c482.png)

The USB hub chip features one USB 3.0 port, which is a Type-A connector.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913759_07e37f25_eab3_42b6_9066_5331a1314b28.png)

<font color="black">**Note:** </font>

- <font color="black">**All USB data cables must be designed with a differential impedance of 90Ω;**</font>

- <font color="black">**Please select suitable ESD protection components.**</font>

The following diagram shows the circuit of the Type-C USB 3.0 interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535913924_006cd513_085e_4173_9817_d89c88cc8cd4.png)

The diagram above shows the circuit for the Type-C interface CC protocol chip, which is used to support functions such as Type-C reversible plug recognition.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914046_07584939_8253_431c_b35e_ede3796cacd0.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914125_834deb71_aac1_4969_9dab_bec25be1dc31.png)

The diagram above shows the differential signal circuit and ESD protection components for a USB 3.0 Type-C connector.

<font color="black">**Note:**</font>

- <font color="black">**USB2_OTG0_DN/USB2_OTG0_DP is the system firmware programming port. If the product does not use this interface, it must be reserved during debugging and production; otherwise, debugging and firmware burning will not be possible;**</font>
- <font color="black">**USB2_OTG0_ID features an internal pull-up resistor of approximately 12 kΩ to 1.8 V;**</font>
- <font color="black">**USB2_OTG0_VBUSDET is the OTG and Device mode detection pin; the chip contains an internal 40 kΩ pull-down resistor. A high level indicates DEVICE mode (2.7–3.3 V, typical: 3.0 V); it is recommended to place a 100 nF capacitor on this pin;**</font>

- <font color="black">**The OTG mode can be configured to one of the following three modes:**</font>
  - **<font color="black">OTG Mode: Automatically switches between device mode and HOST mode according to the ID pin state — ID high selects device mode, ID pulled low selects HOST mode. In device mode, the VBUSDET pin is additionally checked: only when it is high (above 2.3 V) will DP be pulled up and enumeration begin;</font>**
  - **<font color="black">Device Mode: When this mode is selected, the ID pin is not required; only the VBUSDET pin is checked. Only when it is high (above 2.3 V) will DP be pulled up and enumeration begin;</font>**
  - **HOST Mode: When this mode is selected, neither the ID nor the VBUSDET state needs to be monitored. (If the product only requires HOST mode: since USB2_OTG0_DN/USB2_OTG0_DP is the only system firmware programming port and must be used during both debugging and production, and flashing and ADB debugging require device mode, the USB2_OTG0_VBUSDET signal must also be connected.);**
  - **If a Type-C connector is used, the USB2_OTG0_VBUSDET signal only needs to be pulled up to 3.3 V through a 4.7 K resistor.**

- **To enhance ESD and surge immunity, ESD protection devices must be reserved on signal lines. The parasitic capacitance of the ESD devices on USB 2.0 signals must not exceed 3 pF.**  

- **In addition, series resistors (2.2 Ω) must be placed on the DP/DM lines of USB 2.0 signals to further strengthen ESD and surge resistance.**

- **To suppress EMI, a common‑mode choke can be reserved on signal lines. During debugging, choose either a resistor or a choke based on actual conditions;**

- **If the USB2_OTG0_ID signal is used, ESD protection components must be incorporated into the signal to enhance its resistance to static electricity and surges, and a 100 ohm resistor must be connected in series; these components must not be omitted;**

- **In Host mode, it is recommended to add a current‑limiting switch on the 5 V power rail. The limit can be adjusted as needed. Control the switch with a 3.3 V GPIO. Also add filtering capacitors: ≥ 22 µF and ≥ 100 nF. If a portable HDD may be connected, increase the capacitance to ≥ 100 µF;**


- **The TYPEC protocol requires the addition of a 100 nF AC-coupling capacitor on the SSTXP/N line. It is recommended that the AC-coupling capacitor be in a 0201 package, as this offers lower ESR and ESL, thereby reducing impedance variations on the circuit.**
- **All signals of the Type‑C connector must have ESD protection placed as close as possible to the connector; For SSTXP/N and SSRXP/N signals, the parasitic capacitance of the ESD device must not exceed 0.3pF.**

- **USB 2.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 10 mil;**

- **USB 3.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 3 mil.**

### 3.5.16 SATA3.1 Interface

The RK3576 chip is equipped with two SATA3.1 controllers, which share Comb PHY0/1 with the PCIe and USB3_OTG1 controllers. For specific routing, please refer to the diagram below.

It supports SATA Power Management (PM) functionality, with each port capable of supporting up to five devices. It also supports SATA speeds of 1.5 Gb/s, 3.0 Gb/s, and 6.0 Gb/s, as well as eSATA.![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199754911_78d25391_5ff3_45fa_adcd_8998e3113de1.png)

The SATA0 controller utilizes Comb PHY0 (shared with the PCIe0 controller).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914247_c1b318f8_f77d_4497_ac94_38bd183ad2c1.png)

The SATA1 controller utilizes Comb PHY1 (shared with the PCIe1 controller and the USB3_OTG1 controller).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914345_439b207a_46c9_468f_811a_7f8f7b5ce824.png)

The control IOs related to the SATA0/1 controllers are as follows:

SATA0_ACTLED: Output for controlling LED blinking when there is data transmission on the SATA0 interface.

SATA1_ACTLED: Output for controlling LED blinking when there is data transmission on the SATA1 interface.

SATA_CPDET: Input for detecting the insertion and removal of hot-plug SATA devices.

SATA_MPSWIT: Input for detecting the switch status of hot-plug SATA devices.

SATA_CPPOD: Output for controlling the power switch of hot-plug SATA devices.

SATA_CPDET, SATA_MPSWIT, and SATA_CPPOD are shared interfaces for SATA0 and SATA1, and can be configured via registers to control either SATA0 or SATA1.

SATA0_ACTLED and SATA1_ACTLED are multiplexed to two locations: one in the VCCIO6 power domain and the other in the VCCIO4 power domain.

<font color="black">**Note:**</font>

- <font color="black">**Peripheral circuits and power supplies must meet the specification requirements in Slot design;**</font>
- <font color="black">**A single SATA interface connected to a SATA Port Multiplier supports at most 5 ports; it does not support multiple multipliers exceeding 6 ports in total;**</font>
- <font color="black">**On SATA TXP/N and RXP/N differential pairs, 10 nF AC‑coupling capacitors are required. Use 0201‑size capacitors for lower ESR/ESL and reduced impedance variation;**</font>
- <font color="black">**All signals of an eSATA connector must have ESD protection placed close to the connector. The ESD parasitic capacitance must not exceed 0.4 pF.**</font>

### 3.5.17 PCIE2.1 Circuit

The RK3576 features two PCIe 2.1 controllers, both of which only support RC mode (RC stands for Root Complex) and do not support EP, as follows:

- Controller 0(1Lane)，PCIe0 Controller x1 Lane(Only RC)
- Controller 1(1Lane)，PCIe1 Controller x1 Lane(Only RC)

2 x PCIe 2.1 controllers, together with SATA 3.1 and USB 3.2 Gen 1 x1, form two combo PHYs; one of these is a PCIe 2.1/SATA 3.1 combo PHY.

Two PCIe 2.1 controllers, together with SATA 3.1 and USB 3.2 Gen 1 x1, form two Combo PHYs: one is the PCIe 2.1/SATA 3.1

Combo PHY0, and the other is the PCIe 2.1/SATA 3.1/USB 3.2 Gen 1 x1 Combo PHY1.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199755793_9a41442f_01a0_4562_bff9_71b57d527988.png)

The PCIe0 controller (RC) and SATA0 controller share the PCIe2.1/SATA3.1 Combo PHY0. The corresponding package pins are shown in the figure below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914247_c1b318f8_f77d_4497_ac94_38bd183ad2c1.png)

The PCIe1 controller (RC), SATA1 controller, and USB3 OTG1 controller share the PCIe2.1/SATA3.1/USB3.2_Gen1x1

Combo PHY1. The corresponding package pins are shown in the figure below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914345_439b207a_46c9_468f_811a_7f8f7b5ce824.png)

PCIE0/1_REFCLKP/N supports both output and input modes. By default, it outputs clock signals to EP (Endpoint) devices, as illustrated in the diagram below.![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199756620_4d3bd48a_0664_46d6_980d_fa970165b429.png)

If PCIE0/1_REFCLKP/N is configured as an input, the schematic is as shown below.![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199756823_3cc4b6a5_4196_4b14_90dc_0f8f1acf2ead.png)

There is a PCIe0 lane on the development board is connected to a PCIe x4 slot and operates in PCIe 2.0 ×1 Lane mode.

It supports the PCIe Gen1 (2.4 GT/s) protocol. The other PCIe1 lane is multiplexed as a USB 3.0 interface.

The circuit design for the PCIe0 PCIe 2.0 ×1 Lane is illustrated below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914448_578ffab5_d62c_44c1_9388_b1a88e607779.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914554_9536f621_a036_4ef7_926a_a3cd5572708a.png)

<font color="black">**PCIe2.1 Design Note:**</font>

<font color="black">**Peripheral circuits and power supplies must meet the specification requirements in Slot design;**</font>

<font color="black">**A 100nF AC coupling capacitor must be connected in series on the TXP/N differential signal lines of the PCIe 2.1 interface. It is recommended to use 0201 package size capacitors for the AC coupling, as they have lower ESR and ESL, which also helps reduce impedance variations on the trace;**</font>

<font color="black">**The PCIE0/1_CLKREQN pin must be used as a dedicated function pin and cannot be replaced by a GPIO;**</font>

<font color="black">**For the signals PCIE0/1_PERSTN, WAKEN, and PRSNT on the RK3576, no specific dedicated I/O are assigned. Standard GPIO with compatible voltage levels can be used directly as control function pins;**</font>

<font color="black">**In a standard PCIe slot, the signals PCIEx_CLKREQN, PCIEx_WAKEN, and PCIEx_PERSTN operate at 3.3V logic levels. Ensure proper voltage level matching is implemented on the RK3576 side accordingly;**</font>

<font color="black">**When the PCIe function is enabled, the multiplexed SATA and USB functions cannot be used simultaneously. For details on the corresponding SATA/USB functions, refer to the respective module specifications;**</font>

If the PCIe 2.1 function module is not used:

Leave the data lines (PCIE0/1_TXP/TXN, PCIE0/1_RXP/RXN) and reference clock lines (PCIE0/1_REFCLKP/REFCLKN) unconnected (floating);

Ground the two power rails AVDD0V85 and AVDD1V8;

Ensure that the corresponding device tree (dts) configuration is disabled in the software.

**The recommended interface matching design for PCIe 2.1 is as shown in the following table:**

| **Signal**| **Connection**| **Description**|
|----------|----------|----------|
|PCIE0/1_TXP/TXN| Series-connected 100nF capacitor (0201 package recommended).| PCIe data output|
|PCIE0/1_RXP/RXN| Direct connection| PCIe data input|
|PCIE0/1_REFCLKP/CLKN| Direct connection| PCIe reference clock|
| PCIE0/1_CLKREQN| Connect 0ohm resistor in series| PCIe reference clock(RC mode)|
| PCIE0/1_WAKEN (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| PCIe wake-up input (RC mode)|
| PCIE0/1_PERSTN (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| PCIe global reset output (RC mode)|
| PCIE0/1_PRSNT (RK3576 does not have this signal; replaced by GPIO)| Connect 0ohm resistor in series| Add In Card insertion detection input (RC mode)|
|PCIE_BUTTONRSTN (not in use right now )| It’s no use; there’s no need to connect.| External physical Reset of the PCIe Controller|

**Data routing impedance control differential 85ohm ±10%;**

**Clock routing impedance control differential 100ohm±10%;**

**Intra-pair skew (within a differential pair): \< 3 mils**

**Differential pair space is better than or equal to 4 times the PCI-E line width;**

### 3.5.18 Video Input Interface

FET3576 has two MIPI DPHY CSI RX, both support MIPI V1.2 version, the maximum data rate of each channel is 2.5Gbps.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914693_99812fdc_02c7_44ec_a8e1_7c2e464dc22b.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535914893_2eef0499_b6c1_47f0_bb7b_54062993855f.png)

**MIPI DPHY CSI1 / 2 RX interface** mode:

- 4Lane mode, MIPI_DPHY_CSI1_RX_D[3:0] data reference MIPI_DPHY_CSI1_RX_CLK
- 2Lane+2Lane mode:

  - MIPI DPHY CSI1_RX_D[1:0] data reference MIPI_DPHY_CSI1_RX_CLK

  - MIPI DPHY CSI2_RX_D[1:0] data reference MIPI_DPHY_CSI2_RX_CLK![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199758787_79ab42f0_e089_4db2_91fa_9003c8de622d.png)

MIPI DPHY CSI3 / 4 RX interface mode: 

- Support 4Lane mode, MIPI_DPHY_CSI3_RX_D[3:0] data reference MIPI_DPHY_CSI3_RX_CLK
- Support 2Lane+2Lane mode:

  - MIPI DPHY CSI3_RX_D[1:0] data reference MIPI_DPHY_CSI3_RX_CLK

  - MIPI DPHY CSI4_RX_D[1:0] data reference MIPI_DPHY_CSI4_RX_CLK![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199759172_54b658d7_1142_4beb_a9b9_c652e4369e07.png)

**Interface Details of MIPI_DCPHY_CSI_RX**

The FET3576 integrates one MIPI DCPHY CSI RX Combo PHY.

The D-PHY supports Version 2.0.

The C-PHY supports Version 1.1. In DPHY mode, it has up to 4 lanes, with a maximum data rate of 4.5 Gbps per lane.

In CPHY mode, it has up to 3 trios, with a maximum data rate of 5.7Gbps/Trio.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915012_fcd93a10_24cc_46f3_858f_270abcce79d6.png)

Supported DPHY and CPHY Configuration Modes: 

The TX and RX of the MIPI DCPHY Combo PHY can only be configured in one of the following modes simultaneously:

Both as DPHY TX and DPHY RX mode, or Both as CPHY TX and CPHY RX mode. It does not support mixed configurations such as one interface as DPHY TX and the other as CPHY RX, or vice versa.

**MIPI DCPHY Supported Configurations in DPHY Mode:**

- Supports 4Lane/2Lane/1Lane modes.

  - The data lanes MIPI_DPHY_CSI0_RX[3:0] are referenced to the clock MIPI_DPHY_CSI0_RX_CLK.
- It doesn’t support splitting into a configuration of 2 lanes + 2 lanes.

**MIPI DCPHY Supported Configurations in CPHY Mode:**

- Supports 0 / 1 / 2 Trios. Each Trio consists of three wires: Trio_A, Trio_B, and Trio_C.

  - The corresponding signal pins are: MIPI_CPHY_CSI_RX_TRIO[2:0]_A, MIPI_CPHY_CSI_RX_TRIO[2:0]_B, MIPI_CPHY_CSI_RX_TRIO[2:0]_C.

The OK3576-UP5 is configured by default with four camera interfaces, namely: MIPI_DPHY_CSI0_RX 4Lane, MIPI_DPHY_CSI1_RX 2Lane, MIPI_DPHY_CSI2_RX 2Lane, MIPI_DPHY_CSI3_RX 2Lane. The schematic diagram is as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915208_43a9f768_b877_4470_933e_cc3d56a0a82f.png)

<font color="black">**Please note in design:**</font>

- <font color="black">**Differential impedance: 100ohm±10%;**</font>
- <font color="black">**Single-ended impedance: 50ohn±10%;**</font>
- <font color="black">**Intra-pair skew (within a differential pair): \< 3 mils;**</font>
- <font color="black">**Equal length between clock and data \< 6 mil;**</font>
- <font color="black">**Spacing between differential pairs be greater than four times the MIPI line width, and at least three times the MIPI line width;**</font>
- <font color="black">**Spacing between MIPI and other signals be greater than four times the MIPI line width, and at least three times the MIPI line width.**</font>
- <font color="black">**When configured as CPHY, the maximum delay difference within the group (TRIO_A, TRIO_B, TRIO_C) is less than 3 mils;**</font>
- <font color="black">**The equal-length requirement between groups (TRIO0, TRIO1, TRIO2) must be less than 50 mil.**</font>

### 3.5.19 Video Output Interface

The RK3576 chip features a VOP (Video Output Processor), which reads video data and UI data from the frame buffer in system memory, performs corresponding processing (such as cropping, color space conversion, scaling, and overlaying), and outputs the processed data to each high-speed display interface.

It features 3 Port outputs and can output through video interfaces including DP, HDMI/eDP, MIPI DSI, LCDC(Parallel Interface).

Maximum video output capabilities:

- Three-screen independent display configurations: 4096x2160@60Hz, 2560x1600@60Hz, 1920x1080@60Hz;
- Dual-screen independent display configurations, for example, one screen at 4096x2160@120Hz, 2560x1600@60Hz.

VOP and video interface output path diagram:  
![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199759959_45e326a1_9929_466e_8fac_cd5697432fa8.png)

The OK3576-UP5 development board supports three display output interfaces: DP, MIPI_DSI and HDMI.

#### 3.5.19.1 MIPI_DSI Interface

The FET3576 features one MIPI D-PHY/C-PHY Combo PHY TX：

- **D-PHY:** supports version 2.0. D-PHY modes include 0, 1, 2 and 3 lanes, with two wires per lane; the maximum data rate is 2.5Gbps/Lane. MIPI_DPHY_TX supports a maximum resolution of 2560x1600@60Hz.
- **C-PHY:** supports version V1.1. The C-PHY modes are 0, 1 and 2 Trio, with each Trio comprising three lines (A, B and C); the maximum data rate is 1.7Gsps/Trio. MIPI_CPHY_TX supports a maximum resolution of 2560x1600@60Hz.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915320_91f00f07_afc4_488c_b10e_47c8a489b3a9.png)

DPHY and CPHY Configuration Support:

The TX and RX of the MIPI D-PHY/C-PHY Combo PHY can only be configured simultaneously as DPHY TX and DPHY RX, or as CPHY TX and CPHY RX; it does not support configuring one as DPHY TX and the other as CPHY RX;

- **MIPI DCPHY Mode Support When Operating in D-PHY Mode:**

  - Supports 4-lane mode; the MIPI_DPHY_TX_D[3:0] data is synchronised with MIPI_DPHY_TX_CLK.

- **MIPI DCPHY Mode Support When Operating in C-PHY Mode:**

  - Supports 0/1/2 Trios, with 3 lines each for Trio A/B/C: MIPI_CPHY_TX_TRIO[2:0]_A,

    MIPI_CPHY_TX_TRIO[2:0]_B, MIPI_CPHY_TX_TRIO[2:0]_C.

The MIPI_DSI interface on the OK3576-UP5 development board uses a configuration comprising one clock channel and four data channels; the schematic is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915423_2cc5d0af_1c8c_4211_82aa_2bc4ea821afb.png)

<font color="black">**Please note in design:**</font>

- <font color="black">**Routing impedance control differential 100ohm ± 10%;**</font>
- <font color="black">**Intra-pair skew (within a differential pair): \< 3 mils**</font>
- <font color="black">**Equal length between clock and data \< 6 mil;**</font>
- <font color="black">**It is recommended that the spacing between differential pairs be at least four times the MIPI line width, and no less than three times the MIPI line width;**</font>
- <font color="black">**It is recommended that the spacing between MIPI and other signals be at least four times the MIPI line width, and no less than three times the MIPI line width;**</font>
- <font color="black">**When configured as CPHY, the impedance of single-ended traces is controlled to 50ohm±10%;**</font>
- <font color="black">**The inter-group delay difference is \<3mil (TRIO0\TRIO1\TRIO2);**</font>
- <font color="black">**Equal length between groups (TRIO0 \ TRIO1 \ TRIO2) \< 50mil.**</font>
- <font color="black">**The number of permissible holes for each signal is recommended to be no more than 2;**</font>
- <font color="black">**It is recommended that the spacing between traces be at least four times the MIPI trace width;**</font>
- <font color="black">**It is recommended that the spacing between MPI and other signals be at least four times the MIPI line width.**</font>

#### 3.5.19.2 HDMI_TX Interface

The RK3576 integrates an HDMI/eDP TX Combo PHY.

HDMI/eDP TX Combo PHY supports the following two modes:

- **HDMI TX Mode:** Supports up to HDMI 2.1, including the HDMI FRL mode with backward compatibility for HDMI TMDS mode. It supports formats such as RGB/YUV444/YUV422/YUV420 (up to 10bit).

- **eDP TX Mode:** Supports up to eDP 1.3, with a maximum resolution of 4K@60Hz. It supports RGB/YUV444/YUV422 (up to 10bit) formats.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915532_89764b44_b6d2_4ec3_a212_4622e2806748.png)

RK3576 supports HDMI 2.1 and downward for HDMI 2.0, compatible with HDMI 1.4. Because HDMI 2.1 works in FRL mode and works in TMDS mode, when switching to HDMI 2.0 and below, it will work in TMDS mode, so the AC coupled voltage mode driver is used.

As shown in the figure below, the AC coupling capacitor capacitance is 220nF, which cannot be changed at will; because the lower ESR and ESL can also reduce the impedance change on the line, it is recommended to use the 0201 packaging for the AC coupling capacitor.

When operating in HDMI 2.1 mode, HDMI_TX_ON_H is configured to low level, and transistors Q17, Q18, Q19, Q20 are turned off.

When operating in HDMI 2.0 or lower mode, HDMI_TX_ON_H is configured to high level, and transistors Q17, Q18, Q19, Q20 are turned on. The 499ohm resistors to ground form a DC bias of approximately 3V with the 50ohm pull-up resistors on the sink side.

<font color="black">**Please note in design:**</font>

<font color="black">**If it only needs to support HDMI 2.0 and below mode, Q17, Q18, Q19, and Q20 also can not be omitted; it needs to ensure that the machine is not power-on, the tube can not be on, as HDMI CTS Test ID 7-3 TMDS Voff test item requires that the DUT is not power-on, Voff voltage must be within AVcc +- 10mV, or this test item can not pass.**</font>

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915659_da45f485_1ae4_483f_836b_f465614b8609.png)

FRL mode: In a traditional TMDS architecture, a separate channel is used to transmit the clock signal; however, in the FRL architecture, the clock is embedded within the data channel and is extracted at the sink end via clock recovery.

The table below shows the relationship between FRL rates and channels:

| **Channel Rate**| **Channel Number**|
|:----------:|:----------:|
| 3Gbps| 3|
| 6Gbps| 3|
| 6Gbps| 4|
| 8Gbps| 4|
| 10Gbps| 4|
| 12Gbps| 4|

ARC/eARC is supported by routing the HDMI_TX_SBD_P/ HDMI_TX_SBD_N signals to the internal RK3576 for audio data extraction.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915781_bc6b6703_c123_4c1f_8f72_5cfb849ec7d6.png)

HDMI_TX_HPD is the HDMI TX controller’s Hot Plug Detect signal, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

HDMI_TX_CEC is the HDMI controller’s Consumer Electronics Control function, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

The CEC protocol specifies a 3.3 V logic level; however, the protocol requires that a 3.3 V voltage be applied to the CEC pin via a 27 kΩ resistor, with leakage current not exceeding 1.8 µA.

When the RK3576 IO Domain is not powered, if there is voltage on the IO, leakage current may occur. For example, after the RK3576 is powered off, if the HDMI cable is still connected to the sink device (such as a TV or monitor), the CEC signal from the sink device carries voltage, which can leak to the RK3576 IO through the HDMI cable. This can cause CEC leakage current to exceed 1.8µA. Therefore, an external isolation circuit is required. The resistance value of R521, R635 must not be modified arbitrarily and must be set to 27 kΩ. For Q19, the default selection is the 2SK3018. If another model is to be used, its junction capacitance must be comparable. If the junction capacitance is too large, it will not only affect operation but also fail certification.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535915902_c2faca17_0fdd_4e18_81b5_01e572dfdd03.png)

HDMI_TX_SCL and HDMI_TX_SDA are the I2C/DDC buses of the HDMI transmitter (TX) controller. Their functions are multiplexed onto standard GPIO pins. The voltage levels for these signals depend on the power domain’s supply voltage. If the supply voltage of the power domain changes, the power supply for the pull-up resistors in the peripheral circuitry must also be adjusted accordingly.

The DDC_SCL/DDC_SDA protocol specifies a 5V logic level. Since the RK3576 IO does not support 5V levels, a level-shifting circuit must be added and cannot be omitted. By default, a MOSFET-based level shifter is used, with the MOSFET model defaulting to 2SK3018. If another model is to be used, its junction capacitance must be comparable. Excessive junction capacitance will not only impact operation but also lead to certification failure.

The pull-up resistors should be set according to their default values and not altered arbitrarily.

Diode D11 must not be omitted; it is used to prevent leakage current from the Sink device to VCC_5V0.

For the level shifting of the SDA signal, a 1K resistor must be connected in series between the MOSFET gate and the power supply, and a 100pF capacitor must be placed in parallel between the MOSFET gate and source to improve timing characteristics. These components must not be removed.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916021_efe11d3c_af36_41c6_b1e3_9c28f0b71bf1.png)

The voltage on Pin 18 of the HDMI connector must be maintained between 4.8V and 5.3V. A 1μF decoupling capacitor must be placed for this pin and cannot be omitted. During layout, this capacitor must be positioned close to the HDMI connector pin.

To enhance antistatic capability, ESD devices must be reserved on the signals. The ESD parasitic capacitance for HDMI 2.1 signals must not exceed 0.2pF, and it is recommended that the ESD parasitic capacitance for other signals not exceed 1pF.

<font color="black">**Please note in design:**</font>

- <font color="black">**Control MOS tube Coss can not be too large, otherwise it will affect the signal quality, it is recommended to follow the reference chart model or the corresponding Coss value;**</font>

- <font color="black">**Routing impedance control differential 100ohm ± 10%;**</font>

- <font color="black">**Inter-Pair Skew maximum ＜3mil;**</font>

- <font color="black">**Differential inter-pair equivalence requirement \<200mil;**</font>

- <font color="black">**Differential inter-pair space is recommended to be more than or equal to 7 times the HDMI line width;**</font>

- <font color="black">**HDMI and other signal space is recommended to be more than or equal to 7 times the HDMI line width;**</font>
- <font color="black">**It is recommended not to add an over-hole;**</font>

- <font color="black">**I/O capacitance to ground does not exceed 0.2pF.**</font>

#### 3.5.19.3 DP_TX Interface

The RK3576 supports one DP1.4 TX PHY (combo with USB3 OTG0), capable of a maximum output resolution of 4K@YUV422-120Hz.

- Each lane supports data rates of 1.62/2.7/5.4/8.1 Gbps;

- Supports 1Lane, 2Lane or 4Lane modes;

- Supports RGB/YUV444/YUV422/YUV420 formats (up to 10bit);

- Supports Multi-Stream Transport (MST);

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916142_e293fe4c_078c_40e1_aa68_754cffaa65f4.png)

Supports both Swap On and Swap Off modes;![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199762249_be61200b_5c45_485e_83fc_3c3a92e83cb3.png)

Supports MST (Multi-Stream Transport) display with 3 channels. The maximum capability for three-screen independent display under MST is: 4096x2160@60Hz, 2560x1600@60Hz, and 1920x1080@60Hz.![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721199762544_9dab7aad_2307_4119_827c_052673fd9e9b.png)

Refer to Section 3.5.15 for pin multiplexing relationships with USB.

<font color="black">**Please note in DP sign:**</font>

- <font color="black">**The following DP lane pairs—DP0_TX_D0P/D0N, DP0_TX_D1P/D1N, DP0_TX_D2P/D2N, DP0_TX_D3P/D3N, DP1_TX_D0P/D0N, DP1_TX_D1P/D1N, DP1_TX_D2P/D2N, DP1_TX_D3P/D3N—must be series-connected with 100nF AC-coupling capacitors. Capacitors in 0201 package size are recommended for lower ESR and ESL, as well as reduced impedance variation on the line. Place them close to the RK3576-C pins during layout;**</font>
- <font color="black">**Differential pair trace impedance should be controlled at 100Ω ±10% (for DP-only interface, no multiplexing) or 95Ω ±10% (for USB3.0/DP1.4 multiplexed interface);**</font>
- <font color="black">**Differential pair internal delay difference \< 3 mils;**</font>

- <font color="black">**Differential inter-pair equivalence requirement \<500mil;**</font>

- <font color="black">**Differential inter-pair space is recommended to be more than or equal to 6 times the DP line width;**</font>

- <font color="black">**DP and other signal space is recommended to be more than or equal to 6 times the DP line width;**</font>
- <font color="black">**The number of permissible holes for each signal is recommended to be no more than 2;**</font>

- <font color="black">**I/O capacitance to ground does not exceed 0.2pF.**</font>

### 3.5.20 WIFI/BT Module Circuit

The OK3576-UP5 board comes with an on-board AzureWave AW-CM358SM WIFI & BT module, supporting Wi-Fi 2.4G/5G and Bluetooth 5.0. The Wi-Fi/BT antenna is connected via an SMA interface, and the module interfaces with the main controller through SDIO, PDM, and UART.

<font color="black">**Note: In low-power application scenarios, if you need to maintain the Wi-Fi module’s network connection during the process of putting the RK3576 into sleep mode and then waking it up (without requiring the Wi-Fi module to reconnect), it is necessary to power the Wi-Fi module’s 3.3V and 1.8V supplies from a dedicated 12V input power source. You can refer to this specific design in the OK3576-UP5.**</font>

The schematic is as follows:

<font color="black">**Note:**</font>

- <font color="black">**The power supply to the WIFI card must be controlled; refer to the carrier board circuit for implementation;**</font>

- <font color="black">**SDIO impedance requirements: Single‑ended impedance: 50ohm;**</font>
- <font color="black">**Signal length matching tolerance: ±50 mil.**</font>

### 3.5.21 SPI Interface Circuit

In addition to the FSPI controller, the RK3576 chip also features five general-purpose SPI controllers, supporting the following functions:

+ Supports both master and slave modes;
+ Supports 4-, 8- and 16-bit serial data transmission;
+ Supports full-duplex and half-duplex transmission modes.

Taking into account the application flexibility of different products, the 5 SPIs are respectively multiplexed across several distinct power domains, with the suffixes _M0/_M1/_M2/_M3 used to differentiate the various multiplexing positions.

_M0/_M1/_M2/_M3 cannot be used simultaneously. During allocation, only one set among them can be selected. It is not allowed to assign some signals to M0 and others to M1, as this function is not supported. 

RK3576 SPI Interface Distribution:

| SPI Number| Multiplexing Scenario| Multiplexed Power Domain|
|:----------:|:----------:|:----------:|
| SPI0| M0, M1, M2| M0：PMUIO1   M1：VCCIO1   M2：VCCIO0|
| SPI1| M0, M1, M2| M0：VCCIO3   M1：VCCIO4   M2：VCCIO5|
| SPI2| M0, M1, M2| M0：PMUIO0   M1：VCCIO3   M2：VCCIO5|
| SPI3| M0, M1, M2| M0：VCCIO4   M1：VCCIO5   M2：VCCIO2|
| SPI4| M0, M1, M2, M3| M0：VCCIO6   M1：VCCIO5   M2：VCCIO2   M3：VCCIO4|

The power supply for the corresponding power domain must be adjusted according to the IO level of the SPI peripheral, ensuring consistency.

The recommended pull-up/down and matching designs for the SPI interface are as follows:

| Signal| Connection| Description (chip-side)|
|:----------:|:----------:|:----------:|
| SPIx_CLK| Direct connection| SPI Clock|
| SPIx_MOSI| Direct connection| SPI data output (Master)|
| SPIx_MISO| Direct connection| SPI data input (Master)|
| SPIx_CS0| Direct connection| SPI chip select 0|
| SPIx_CS1| Direct connection| SPI chip select 1|

It is recommended to connect a resistor with a certain resistance value in series (between 22 ohms and 100 ohms, with the specific value subject to meeting the SI test requirements) and reserve space for TVS devices.

The SPI0 and SPI4 are routed out from the carrier board; the power domains are PMUIO1 and VCCIO6 respectively, with a 3.3V level.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916323_176d6b50_7540_47b8_b323_03606a32d8f8.png)

Signals are directly routed out via pins with a 2.54mm pitch, and the schematic diagram is shown in the red box in the figure below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916415_aa4f34af_aa00_4e2a_84ac_8c2eab406bbb.png)

### 3.5.22 UART Interface Circuit

The RK3576 chip is equipped with 12 UART controllers, which support the following functions:

+ Support full-duplex and half-duplex communication;
+ Each controller contains two 64-byte FIFOs for data reception and transmission;
+ Support baud rates of 115.2Kbps, 460.8Kbps, 921.6Kbps, 1.5Mbps, 3Mbps, 4Mbps and 8Mbps;
+ Support programmable baud rate and non-integer clock divider;
+ Support interrupt-based or DMA-based modes;
+ Support data transmission with a bit width of 5 to 8 bits;
+ Support RS485 automatic transmit-receive function;

The automatic transmit-receive function of RS485 means that when the SoC communicates with peripherals through UART-to-RS485 conversion, it will immediately control the RS485 chip to switch from transmit mode to receive mode after data transmission is completed. This avoids data loss caused by the scenario where some peripherals return data immediately after receiving the data, while the SoC fails to control the RS485 to switch from transmit mode to receive mode in time.

When UART communicates with RS485, there are 3-wire mode and 4-wire mode, as shown in the figure below. In 3-wire mode, the RTSN pin of UART is connected to the RE and DE pins of RS485 together. In 4-wire mode, RTSN is connected to the DE pin of RS485, and CTSN is connected to the RE pin of RS485.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916502_391d9610_e538_4dd7_9b2b_11e6fdc55298.jpg)

Considering the application flexibility of different products, the 12 UARTs are respectively multiplexed in several different power domains, with the suffixes _M0/_M1/_M2/_M3 used to distinguish different multiplexing positions. _M0/_M1/_M2/_M3 cannot be used at the same time. Only one set can be selected during allocation. It is not allowed to assign some signals to M0, some to M1, and others to M2 — this function is not supported.

RK3576 UART Interface Distribution:

| UART Number| Multiplexing Scenario| Multiplexed Power Domain|
|:----------:|:----------:|:----------:|
| UART0| M0, M1| M0：PMUIO1   M1：VCCIO1|
| UART1| M0, M1, M2| M0：PMUIO1   M1：VCCIO4   M2：VCCIO5|
| UART2| M0, M1, M2| M0：VCCIO3   M1：VCCIO2   M2：VCCIO5|
| UART3| M0, M1, M2| M0：VCCIO4   M1：VCCIO5   M2：VCCIO3||
| UART4| M0, M1, M2| M0：VCCIO4   M1：VCCIO3   M2：PMUIO1|
| UART5| M0, M1, M2| M0：VCCIO5   M1：VCCIO2   M2：VCCIO1|
| UART6| M0, M1, M2, M3| M0：VCCIO2   M1：VCCIO4   M2：VCCIO0   M3：VCCIO6|
| UART7| M0, M1, M2| M0：VCCIO4   M1：VCCIO0   M2：VCCIO1|
| UART8| M0, M1, M2| M0：VCCIO5   M1：VCCIO4   M2：PMUIO1|
| UART9| M0, M1, M2| M0：VCCIO4   M1：VCCIO5   M2：VCCIO6||
| UART10| M0, M1, M2| M0：VCCIO5   M1：VCCIO3   M2：PMUIO1|
| UART11| M0, M1, M2| M0：VCCIO5   M1：VCCIO4   M2：VCCIO6|

RK3576 UART flow control interface layout:

| UART Number| Multiplexing Scenario| Multiplexed Power Domain|
|:----------:|:----------:|:----------:|
| UART0_RTSN   UART0_CTSN| No|
| UART1_RTSN   UART1_CTSN| M0, M1, M2| M0：PMUIO1   M1：VCCIO4   M2：VCCIO5|
| UART2_RTSN   UART2_CTSN| M0, M1, M2| M0：VCCIO3   M1：VCCIO2   M2：VCCIO5|
| UART3_RTSN   UART3_CTSN| M0, M1, M2| M0：VCCIO4   M1：VCCIO5   M2：VCCIO3|
| UART4_RTSN   UART4_CTSN| M0, M1| M0：VCCIO4   M1：VCCIO3|
| UART5_RTSN   UART5_CTSN| M0, M1, M2| M0：VCCIO5   M1：VCCIO2   M2：VCCIO1|
| UART6_RTSN   UART6_CTSN| M0, M1, M2| M0：VCCIO2   M1：VCCIO4   M2：VCCIO0|
| UART7_RTSN   UART7_CTSN| M0, M1| M0：VCCIO4   M1：VCCIO0|
| UART8_RTSN   UART8_CTSN| M0, M1| M0：VCCIO5   M1：VCCIO4|
| UART9_RTSN   UART9_CTSN| M0, M1| M0：VCCIO4   M1：VCCIO5|
| UART10_RTSN   UART10_CTSN| M0, M1| M0：VCCIO5   M1：VCCIO3|
| UART11_RTSN   UART11_CTSN| M0, M1| M0：VCCIO5   M1：VCCIO4|

Of these, UART0 M0 is, by default, the RK3576’s debug UART.

The power supply for the corresponding power domain must be adjusted according to the IO level of the UART peripheral, ensuring consistency.

The recommended pull-up/down and matching designs for the UART interface are as follows:

| Signal| Connection| Description (chip-side)|
|:----------:|:----------:|:----------:|
| UARTx_RX| Direct connection| UART data input|
| UARTx_TX| Direct connection| UART Data output|
| UARTx_CTSn| Direct connection| UART allows signals to be transmitted.|
| UARTx_RTSn| Direct connection| UART Request-to-Transmit Signal|

The FET3576-UP5 features a five-wire serial port operating at 3.3 V logic levels.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916615_8a023286_7960_4bd1_91ee_b50198e737fa.png)

The signals are routed out directly via pins with a 2.54 mm pitch, as shown in the red box in the diagram below:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535916741_44644c88_744d_4718_becd_cd297daa102d.png)

# 4. Hardware Design Guide

**I2C Requirements**

Multiple slave devices can be connected to a single I2C bus; ensure there are no address conflicts.

Pull-up resistors are required on the I2C bus, but avoid using multiple resistors for pull-up (i.e., use a single pair of pull-up resistors for the entire bus).

Ensure level matching between the I2C signals from the SoM and those from the slave devices.

**USB Design**

To meet USB eye diagram requirements, the PCB trace length for USB3.0 TX/RX signals should not exceed 6 inches.

Unused signal pins on the SoM can be left floating, but all GND pins must be connected.

**Power-Up Sequence**

It is strongly recommended that when designing the carrier board, please refer to the development board design. Use the CARRIER_BOARD_EN signal output from the SoM as the enable signal for powering on the carrier board, and strictly control the power-on sequence. Failure to do so may result in the following issues:

- Excessive inrush current during power-up;


- Device failure to boot;


- In the worst case, irreversible damage to the processor.


# 5. Package Dimensions Diagram

## 5.1 SoM Pin Layout Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535920816_1823d853_eea1_42db_acde_c7e3b6dd58cf.png)

## 5.2 Packaging Design Diagram

The SoM is packaged using LGA packaging method, with units in millimeters. Please refer to the following diagram for packaging design:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535920969_d20288f6_a0a4_4785_9ec9_4d43ced3fd92.png)

## 5.3 Steel Mesh Design Drawing

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535921132_b09f73ec_764f_4fc8_8552_cf3c37a574e8.png)

<font color="black">**Note: This product uses stepped steel mesh for welding. To ensure welding yield, please refer to the "UP5 Series SoM Mass Production Operation Manual" for the design of the encapsulated steel mesh**</font>

# 6. OK3576-UP5 Development Board Power Consumption Table

**Table 1 Linux System Power Consumption**

| **No.**| **Test Item**| **SoM Power (W)**| **Development Board Power (W)**|
|:----------:|:----------:|:----------:|:----------:|
| 1| No-load startup peak power| 4.95| 7.72|
| 2| Sleep mode power consumption| 0.40| 0.67|
| 3| Standby power consumption with no load| 1.55| 3.87|
| 4| CPU stress + memory stress + eMMC read/write stress test power consumption.| 5.83| 8.30|

<font color="black">**Note:**</font>

- <font color="black">**Peak current: The maximum current value during the start-up process;**</font>

- <font color="black">**Stable current: The current value that remains on the startup interface after startup;**</font>

- <font color="black">**The SoM is configured with 2 GB of RAM and 8 GB of eMMC; the SoM and carrier board are powered by 12 V.**</font>

# 7. Minimum System Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535925485_ce6ce5c2_e18c_42f4_b9cc_205843d735db.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535925626_c9d3f3ca_cf0a_49de_8196_972c0d31abc8.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535925715_c14fa4ec_4dc3_4fb5_8a22_bf55a2b4d9fa.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535925816_9c809d05_2103_4332_b648_76ea5372fd73.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535925926_ddcceec1_c287_4e82_a0be_3ae07bf00061.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926011_f5cac08e_bdc3_40a9_8a60_49f7cf5f0df6.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926136_9b87be52_b471_49a0_9390_144edd66e1ea.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926252_34e5aae6_b8cd_4568_bbbd_545da12a68c3.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926340_e755d3ba_46ff_4da5_947a_5102cbd71d43.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926678_60a71d17_e924_47af_9e66_a14c3c6c0e1e.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535926953_cbfcec7d_3467_4321_8146_33b70762fc54.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535927114_57984b95_2424_4399_b11a_c38350ba3c5a.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1721202586705_41cde625_2184_463f_ba3d_48247cf83ec2.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3576j-up5/OK3576-UP5_User_Hardware_Manual/1791535927210_d5c2d7d4_e0a3_4878_8fb1_84cf97d26044.png)

The diagram above is for illustrative purposes only; please refer to the schematic in the source file for the actual connections. To ensure the proper operation of the SoM, the minimum system includes the SoM power supply circuit, system programming/burning circuit, and debug serial port circuit.
