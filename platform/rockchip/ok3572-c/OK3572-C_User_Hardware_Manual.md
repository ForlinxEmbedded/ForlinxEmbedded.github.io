# OK3572-C\_User’s Hardware Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware design guidelines, please refer to Forlinx's “FET3572-C Pin Multiplexing Comparison Table".

There are four chapters:

Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;

Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;

Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;

Chapter 4. describes the product's power consumption and other considerations.

## Application Scope

This hardware manual applies to the OK3572-C Forlinx Development

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------||
| 15/06/2026| V1.0| V1.0| V1.0| Initial Version|

## 1\. RK3572 Description

RK3572 is a low-power, high-performance processor designed for edge computing devices, personal mobile internet devices, and other AIoT applications. It integrates dual-core Cortex-A73 and hexa-core Cortex-A53 CPUs, along with an independent NEON co-processor.

The RK3572 video decoder supports formats such as H.265, VP9, AV1, and AVS2, with a maximum capability of 8K@30fps or 4K@120fps, while also supporting H.264 up to 4K@60fps. The video encoder supports H.264 and H.265, reaching up to 4K@40fps, and its high-quality JPEG codec supports up to 4K@60fps.

The integrated 3D GPU makes the RK3572 fully compatible with OpenGL ES 1.1, 2.0 and 3.2, OpenCL up to version 3.0, and Vulkan 1.4. A dedicated 2D hardware engine with MMU maximizes display performance, delivering a very smooth user experience.

RK3572 introduces a next-generation 12-megapixel ISP (Image Signal Processor). It implements numerous algorithm accelerators, such as HDR, 3A, CAC, 3DNR, 2DNR, sharpening, dehazing, enhancement, debayering, small-angle lens distortion correction, and more.

The built-in NPU supports mixed operations of INT4/INT8/INT16/FP4/FP8/FP16/BF16 and asymmetric MAC operations for W4A16. Additionally, thanks to its strong compatibility, network models based on frameworks like TensorFlow, MXNet, PyTorch, and Caffe can be easily converted.

RK3572 supports high-performance external memory interfaces (LPDDR4/LPDDR4X/LPDDR5/LPDDR5X), capable of meeting demanding memory bandwidth requirements, and offers a comprehensive set of peripheral interfaces to support highly flexible applications.

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

**RK3572 Block Diagram**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503479279_3411ce6e_7b3d_459f_aaa9_d9e03a5c64ae.jpg)

## 2\. FET3572-C SoM Description

### 2.1 FET3572-C Appearance Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481055_1b346a57_d4b9_457c_a6bf_d65d4dd1e123.png)

**Front**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481234_c1da43a2_3c97_4d00_91d6_4e850cd5a1ba.png)

**Back**

### 2.2 FET3572-C SoM Block Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481387_1ccb6b3f_5cb0_440e_90d0_9d0626b14ba1.png)

### 2.3 FET3572-C SoM Dimension Diagram

FET3572-C SoM Dimension Diagram：

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481529_fc513b40_70df_475d_8880_5b7275c1f979.png)

**Top Layer Dimension Diagram**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481650_544191c1_7cdc_436e_add5_86aa4727a7a7.png)

**Bottom Layer Dimension Diagram**

Unit: mm![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1721199724670_67922326_0c33_478e_af0b_7de83224e418.png)

Dimensions: 68mm × 50mm, dimensional tolerance ±0.15mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

Connector: Four 0.4mm pitch, 100-pin board-to-board connectors. (Refer to the appendix for connector dimension diagrams.)

Four mounting holes (2.1mm) are reserved at the four corners of the SoM to facilitate the installation of fixing screws and to improve the reliability of the product connection so that the product can be used in vibration environments.

Please refer to the development board design and use M2, L=1.5mm patch nuts on the carrier board, please refer to the diagram below for the specifications of the surface-mount nuts.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1721199724879_e1bbcd19_a64f_483a_8ca0_679afb0b8a85.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1721199725152_9e128ca2_4ffc_4042_bff0_0c58c7aff308.png)

### 2.4 Performance Parameter

#### 2.4.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|----------|:----------:|
| | **Minimum**| **Typical**| **Maximum**| **Unit**|
| System Frequency Arm® Cortex®-A73| \-| \-| 2200| MHz| Commercial level|
| System Frequency Arm® Cortex®-A53| \-| \-| 2100| MHz| Commercial level|

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|----------|:----------:|
| | **Minimum**| **Typical**| **Maximum**| **Unit**|
| System Frequency Arm® Cortex®-A73| \-| \-| TBD| MHz| Industrial Level|
| System Frequency Arm® Cortex®-A53| \-| \-| TBD| MHz| Industrial Level|

#### 2.4.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical**| **Maximum**| **Unit**|
| Main Power Supply Voltage| 12V| 11.5| 12| 12.5| V| \-|

#### 2.4.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical**| **Maximum**| **Unit**|
| Operating Temperature| Working environment| 0| 25| +80| ℃| Commercial level|
| | Storage Environment| -40| 25| +125| ℃|
| | Working environment| -40| 25| +85| ℃| Industrial Level|
| | Storage Environment| -40| 25| +125| ℃|
| Humidity| Working environment| 10| \-| 90| ％RH| No Condensation|
| | Storage Environment| 5| \-| 95| ％RH| |

#### 2.4.4 SoM Interface Speed

| **Parameter**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|----------|:----------:|
| | **Minimum**| **Typical**| **Maximum**| **Unit**|
| Serial Port Communication Speed| \-| 115200| 4M| bps| \-|
| SPI Clock| \-| \-| 50| MHz| \-|
| I2C Communication Speed| \-| 100| 400| Kbps| \-|
| USB3.0 Interface Speed| \-| \-| 5| Gbps| \-|
| USB2.0 Interface Speed| \-| \-| 480| Mbps| \-|
| CAN FD Communication Speed| \-| \-| 5| Mbps| \-|
| PCIe2.1| \-| \-| 5| Gbps| \-|

#### 2.4.5 ESD Features

| **Parameter**| **Specification**| | **Unit**| **Application Scope**|
|:----------:|:----------:|----------|:----------:|:----------:|
| | **Minimum**| **Maximum**| | |
| ESD HBM(ESDA/JEDEC JS-001-2017)| -2000| 2000| V| Signals exported from SoM|
| ESD CDM(ESDA/JEDEC JS-002-2018)| -250| 250| V| Signals exported from SoM|

**Note：**

- **The above data is provided by Rockchip;**

- **As all the signals exported from SoM are electrostatic sensitive signals, the interfaces should be well protected from static electricity in the carrier board design and the SoM transportation, assembling, and use.**

### 2.5 SoM Interfaces

The interface resources of FET3572-C SoM are supported in the following table:

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 2| · 2 × MIPI CSI-2 interfaces, each supporting 4 data lanes D-PHY v1.2（2.5Gbps); <br />· Each 4 data lanes can be split into 2 x 2 data lanes configurations;<br />· Maximum of 4 x 2 data lanes cameras supported. |
| DVP| 1| · Standard DVP interface (8/10/12/16-bit, up to 150 Mhz);<br />· Supports BT.601, BT.656, and BT.1120 VI interfaces. |
| HDMI/eDP TX| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | · Supports multiplexing for 1 x HDMI and 1 x eDP interface;<br />· The HDMI 2.1 interface supports up to 4 lane\_6Gbps, supports up to 4K@60Hz, and includes HDCP 2.3 compatibility;  <br/>· The EDP 1.3 interface supports up to 4 lane\_5.4Gbps, supports up to 4K@60Hz, and includes HDCP 1.3 compatibility. |
| MIPI DSI| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | 1 × MIPI DSI 1.2: Up to 4 lane\*2.5Gbps;|
| PARA| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | Parallel display interface: <br />· RGB (up to 8-bit)/BT656/BT1120;<br />· Maximum resolution: 1920 × 1080@60Hz. |
| EBC| 1 **<font style="color:#ff0000;">\***<sup>**<font style="color:#ff0000;">1**</sup> | · Supports E-ink EPD (Electronic Paper Display) support;<br />· Supports hardware decoding up to 1872 × 1404 resolution;  <br/>· Supports 16-bit data bus bandwidth. |
| SAI| ≤5| · SAI 0/1/4 supports 4 TX lanes and 4 RX lanes; |
| SPDIF TX| ≤2| · Supports 2 x SPDIF TX ports;|
| SPDIF RX| 1| · Supports 1 x SPDIF RX ports;|
| PDM| 1| · Up to 8 channels, audio resolution: 16‑bit to 24‑bit, sample rate up to 192 kHz;<br />· Supports PDM master receive mode |
| Ethernet| ≤2| · 2 × GMAC with RGMII / RMII interfaces<br />· Supports Data rates: 10/100/1000 Mbps |
| Combo high speed interface| 3| · 2 × single‑lane combo ports (PCIe 2.1 / SATA 3.1 / USB 3.0);<br />· 1 × single‑lane combo port (PCIe 2.1 / SATA 3.1) |
| USB 2.0 OTG| 2| · 2 x USB2.0 OTG|
| SDIO| ≤2| · SDIO v3.0，4-bit data bus widths |
| SPI| ≤5| · 2 chip‑selects per channel;<br />· Configurable as serial‑master or serial‑slave |
| I2C| ≤9| · Supports 7-bit and 10-bit address modes;<br />· Data transmission rate of 100K bits/s in standard mode and 400k bits/s in fast mode. |
| I3C| 1| Supports 2 x I3C master ports |
| UART| ≤12| · Built‑in 2 × 64‑bit FIFO (separate TX/RX);<br />· Supports 5‑, 6‑, 7‑, 8‑bit serial data transmission;<br />· 12 × UART all support auto‑flow‑control (AFC) mode;<br />· 12 × UART all support RS‑485 mode |
| CAN FD| ≤2| · Compliant with CAN \& CAN FD specifications<br />· Supports standard \& extended frame transmission;<br />· 8192‑bit receive FIFO. |
| DSMC| 1| · Up to 4 chip‑selects;<br />· Supports 8‑wire and 16‑wire serial transfer modes;<br />· Configurable serial address width: 16bits or 32‑bits |
| PWM| ≤16| Supports up to 16 on-chip PWM with interrupt-based operation and capture mode;|
| ADC| ≤8| Supports 8 x 12bit single-ended input SAR-ADC with sampling rate up to 1MS/s; |
| GPIO| n| · All GPIOs can be used to generate interrupts;<br />· Supports level-triggered and edge-triggered interrupts;<br />· Supports configuration of level-triggered polarity;<br />· Supports rising-edge, falling-edge and dual-edge interrupts;<br />· Supports configuration of pull-up/pull-down (weak pull-up and weak pull-down);<br />· Supports configuration of drive capability, configurable drive strength. |
**Note:** 

- **The parameters in the table are based on hardware design or theoretical CPU values;**

- **The interface employs GPIO multiplexing, representing the theoretical maximum connections.**

\*1 Video Port

· Video Port0 supports up to 4096 × 2160 @ 60Hz, 10-bit data;

· Video Port1 supports up to 2048 × 1080 @ 60Hz, 8-bit data;

· Each video port can be connected to any of the HDMI, eDP, DSI, PARA (Parallel Display Interface) interfaces.

### 2.6 FET3572-C SoM Pin Definitions

#### 2.6.1 FET3572-C SoM Pin Schematic

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481755_242cff73_cd2b_444f_8a0f_8acd9a086fa6.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481860_fbb7a19b_44db_41cb_90b0_199d4fa37776.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503481992_4360b4b0_ab44_4b62_948d_8f275e6c2966.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503482104_2ff072fa_e1ae_446c_bd40_fc3eeab4ccd1.png)

#### 2.6.2 FET3572-C SoM Pin Function Description

**Note:**

**Num ——SoM connector pin no.:**

**Ball —— CPU pin ball no.**

**GPIO ——CPU pin general I/O port serial number**

**Vol —— Pin signal electrical level**

**Signal Name——SoM connector network name, the top right corner subscripts’ meaning are as follows:**

| **No.**| **Description**|
|:----------:|:----------:|
| \[1]| Pins can be configured for interrupt use.|
| \[2]| The default pin level is 1.8 V.|
| \[3]| Pins are CPU boot-related pins, which are not recommended for IO.|
| \[4]| Special-purpose pins and can not be used as IO.|
Pin Description—— SoM Pin Signal Descriptions
Default Function——Please don’t make any modifications for all SoM pin functions regulated in the “default functions” of the following table, otherwise, it may have conflicts with the factory driver. Please contact us with any questions in time.

**Note: Pins marked with “Don’t use for the carrier board” in the “Default functions” are for SoM, which can not be used for carrier board design.**

**Table 1 P1 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| ——| GND| ——| ——| Ground| GND|
| 3| 1A10| SDMMC0\_D1| GPIO2\_A1\_d| 1.8V/3.3V| SD/MMC Interface Data Signal 1| SDMMC0\_D1|
| 5| 1D8| SDMMC0\_D0| GPIO2\_A0\_d| 1.8V/3.3V| SD/MMC Interface Data Signal 0| SDMMC0\_D0|
| 7| 1C8| SDMMC0\_CLK| GPIO2\_A5\_d| 1.8V/3.3V| SD/MMC Interface Clock Signal| SDMMC0\_CLK|
| 9| 1B8| SDMMC0\_CMD| GPIO2\_A4\_z| 1.8V/3.3V| SD/MMC Interface Command Signal| SDMMC0\_CMD|
| 11| 1A8| SDMMC0\_D3| GPIO2\_A3\_d| 1.8V/3.3V| SD/MMC Interface Data Signal 3| SDMMC0\_D3|
| 13| B11| SDMMC0\_D2| GPIO2\_A2\_d| 1.8V/3.3V| SD/MMC Interface Data Signal 2| SDMMC0\_D2|
| 15| ——| GND| ——| ——| Ground| GND|
| 17| 1AD13| HDMI\_TX\_SBDN| ——| ——| HDMISBD signal-| HDMI\_TX\_SBDN|
| 19| 1AE13| HDMI\_TX\_SBDP| ——| ——| HDMISBD signal+| HDMI\_TX\_SBDP|
| 21| ——| GND| ——| ——| Ground| GND|
| 23| AR20| HDMI\_TX\_D3N| ——| ——| HDMI differential signal 3-| HDMI\_TX\_D3N|
| 25| AT20| HDMI\_TX\_D3P| ——| ——| HDMI differential signal 3+| HDMI\_TX\_D3P|
| 27| ——| GND| ——| ——| Ground| GND|
| 29| AT21| HDMI\_TX\_D0N| ——| ——| HDMI differential signal 0-| HDMI\_TX\_D0N|
| 31| AR21| HDMI\_TX\_D0P| ——| ——| HDMI differential signal 0+| HDMI\_TX\_D0P|
| 33| ——| GND| ——| ——| Ground| GND|
| 35| AR23| HDMI\_TX\_D1N| ——| ——| HDMI differential signal 1-| HDMI\_TX\_D1N|
| 37| AT23| HDMI\_TX\_D1P| ——| ——| HDMI differential signal 1+| HDMI\_TX\_D1P|
| 39| ——| GND| ——| ——| Ground| GND|
| 41| AT24| HDMI\_TX\_D2N| ——| ——| HDMI differential signal 2-| HDMI\_TX\_D2N|
| 43| AR24| HDMI\_TX\_D2P| ——| ——| HDMI differential signal 2+| HDMI\_TX\_D2P|
| 45| ——| GND| ——| ——| Ground| GND|
| 47| ——| ——| ——| ——| ——| ——|
| 49| ——| ——| ——| ——| ——| ——|
| 51| ——| GND| ——| ——| Ground| GND|
| 53| ——| ——| ——| ——| ——| ——|
| 55| ——| ——| ——| ——| ——| ——|
| 57| ——| GND| ——| ——| Ground| GND|
| 59| ——| ——| ——| ——| ——| ——|
| 61| ——| ——| ——| ——| ——| ——|
| 63| ——| GND| ——| ——| Ground| GND|
| 65| ——| ——| ——| ——| ——| ——|
| 67| ——| ——| ——| ——| ——| ——|
| 69| ——| GND| ——| ——| Ground| GND|
| 71| ——| ——| ——| ——| ——| ——|
| 73| ——| ——| ——| ——| ——| ——|
| 75| ——| GND| ——| ——| Ground| GND|
| 77| ——| ——| ——| ——| ——| ——|
| 79| ——| ——| ——| ——| ——| ——|
| 81| ——| GND| ——| ——| Ground| GND|
| 83| ——| ——| ——| ——| ——| ——|
| 85| ——| ——| ——| ——| ——| ——|
| 87| ——| GND| ——| ——| Ground| GND|
| 89| ——| ——| ——| ——| ——| ——|
| 91| ——| ——| ——| ——| ——| ——|
| 93| ——| GND| ——| ——| Ground| GND||
| 95| ——| ——| ——| ——| ——| ——|
| 97| ——| ——| ——| ——| ——| ——|
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
| 28| 1AF21| SARADC\_VIN0\_BOOT| ——| 1.8V| BOOT start configuration input| SARADC\_VIN0\_BOOT|
| 30| 1AD19| SARADC\_VIN1\_KEY/RECOVERY| ——| 1.8V| .General ADC1 | SARADC\_VIN1\_KEY/RECOVERY|
| 32| 1AE19| SARADC\_VIN2\_HW\_ID| ——| 1.8V| General ADC2| SARADC\_VIN2\_HW\_ID|
| 34| 1AC19| SARADC\_VIN3\_HP\_HOOK| ——| 1.8V| .General ADC3 | SARADC\_VIN3\_HP\_HOOK|
| 36| 1AD17| SARADC\_VIN4| ——| 1.8V| General ADC4| SARADC\_VIN4|
| 38| 1AE17| SARADC\_VIN5| ——| 1.8V| General ADC5| SARADC\_VIN5|
| 40| 1AC15| SARADC\_VIN6\_DDR| ——| 1.8V| SoM DDR configuration input| Not available on the carrier board|
| 42| 2P11| SARADC\_VIN7| ——| 1.8V| General ADC7| SARADC\_VIN7|
| 44| ——| GND| ——| ——| Ground| GND|
| 46| Y33| GPIO0\_C1\_d| GPIO0\_C1\_d| 3.3V| GPIO0\_C1\_d| HDMI\_TX\_ON\_H|
| 48| ——| ——| ——| ——| ——| ——|
| 50| 1D1| GPIO2\_B0\_d| GPIO2\_B0\_d| 3.3V| GPIO2\_B0\_d| USB\_HUB\_RST\_3V3|
| 52| 1AD21| HDMI\_TX\_CEC\_M0| GPIO4\_B0\_d| 3.3V| HDMICEC signal| HDMI\_TX\_CEC\_M0|
| 54| B4| GPIO2\_B5\_d| GPIO2\_B5\_d| 3.3V| GPIO2\_B5\_d| PCIE\_PWR\_EN\_3V3|
| 56| 1D3| GPIO2\_B6\_d| GPIO2\_B6\_d| 3.3V| GPIO2\_B6\_d| UART11\_TX\_M1\_3V3|
| 58| AR32| HDMI\_TX\_SDA\_M0| GPIO4\_B3\_d| 3.3V| HDMI serial data| HDMI\_TX\_SDA|
| 60| A4| GPIO2\_B7\_d| GPIO2\_B7\_d| 3.3V| GPIO2\_B7\_d| UART11\_RX\_M1\_3V3|
| 62| ——| GND| ——| ——| Ground| GND|
| 64| 1P23| GPIO0\_D3\_d| GPIO0\_D3\_d| 3.3V| GPIO0\_D3\_d| PCIE0\_PERSTn|
| 66| ——| ——| | ——| ——| ——|
| 68| AT32| HDMI\_TX\_SCL\_M0| GPIO4\_B2\_d| 3.3V| HDMI serial clock| HDMI\_TX\_SCL|
| 70| B3| GPIO2\_B2\_d| GPIO2\_B2\_d| 3.3V| GPIO2\_B2\_d| I2C4\_SCL\_M1|
| 72| 1B2| GPIO2\_B4\_d| GPIO2\_B4\_d| 3.3V| GPIO2\_B4\_d| I2C4\_SDA\_M1|
| 74| 1P22| PCIE1\_WAKEn| GPIO0\_D2\_d| 3.3V| PCIE wake-up activation signal| PCIE0\_WAKEn\_M0|
| 76| AB32| PWM1\_CH1\_M0| GPIO0\_B5\_d| 3.3V| PWM1\_CH1\_M0| M.2\_PCIE0\_WAKEn\_3V3|
| 78| AP33| PCIE1\_CLKREQN\_M3| GPIO4\_B6\_d| 3.3V| PCIE clock request signal| PCIE0\_CLKREQn\_M0|
| 80| W32| GPIO0\_C2\_d| GPIO0\_C2\_d| 3.3V| GPIO0\_C2\_d| M.2\_PCIE0\_PERSTn\_3V3|
| 82| ——| ——| | ——| ——| ——|
| 84| ——| GND| ——| ——| Ground| GND|
| 86| ——| ——| ——| ——| ——| ——|
| 88| ——| ——| ——| ——| ——| ——|
| 90| ——| GND| ——| ——| Ground| GND|
| 92| B26| USB\_DRD1\_DP| ——| ——| USB20\_HOST1 data+| USB20\_HOST1\_D\_P|
| 94| A26| USB\_DRD1\_DM| ——| ——| USB20\_HOST1 data-| USB20\_HOST1\_D\_N|
| 96| ——| GND| ——| ——| Ground| GND|
| 98| A28| USB\_DRD1\_ID| ——| ——| USB2\_OTG1\_ID signal| x|
| 100| B28| USB\_DRD1\_VBUSDET| ——| ——| USB2\_OTG1\_VBUSDET insert detection| USB2\_OTG1\_VBUSDET|

**Table 3 P2 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| Y32| I2C2\_SDA\_M0| GPIO0\_C0\_d| 3.3V| I2C2 Data| I2C2\_SDA\_M0|
| 3| W33| PWM0\_CH1\_M0| GPIO0\_C3\_d| 3.3V| PWM0\_CH1\_M0| M.2\_PWR\_EN\_3V3|
| 5| AC33| PWM1\_CH0\_M0| GPIO0\_B4\_d| 3.3V| Occupied by the SoM and not available.| x|
| 7| U33| UART0\_TX\_M0\_DEBUG| GPIO0\_D4\_u| 3.3V| UART0 send (Debug Serial Port)| UART0\_TX\_M0\_DEBUG|
| 9| V32| UART0\_RX\_M0\_DEBUG| GPIO0\_D5\_u| 3.3V| UART0 receive (Debug Serial Port)| UART0\_RX\_M0\_DEBUG|
| 11| AA32| I2C2\_SCL\_M0| GPIO0\_B7\_d| 3.3V| I2C2 clock| I2C2\_SCL\_M0|
| 13| 1T20| GPIO0\_C4\_d| GPIO0\_C4\_d| 3.3V| GPIO0\_C4\_d| PWM0\_CH0\_M0(MIPI screen backlight PWM)|
| 15| ——| GND| ——| ——| Ground| GND|
| 17| ——| ——| ——| ——| ——| ——|
| 19| AL32| GPIO3\_D4\_d| GPIO3\_D4\_d| 1.8V| GPIO3\_D4\_d| GMAC1\_INT|
| 21| 1D10| GPIO3\_D5\_d| GPIO3\_D5\_d| 1.8V| GPIO3\_D5\_d| GMAC1\_RESET|
| 23| ——| ——| ——| ——| ——| ——|
| 25| ——| ——| ——| ——| ——| ——|
| 27| ——| ——| ——| ——| ——| ——|
| 29| ——| ——| ——| ——| ——| ——|
| 31| AH33| I2C5\_SCL\_M3| GPIO3\_C4\_d| 1.8V| I2C5 clock| I2C5\_SCL\_M3|
| 33| AL33| I2C5\_SDA\_M3| GPIO3\_C1\_d| 1.8V| I2C5 Data| I2C5\_SDA\_M3|
| 35| ——| ——| ——| ——| ——| ——|
| 37| 1AD22| CAM\_CLK2\_OUT\_M0| GPIO4\_A1\_d| 1.8V| CAM\_CLK2\_OUT\_M0| SAI1\_LRCK\_M1\_1V8|
| 39| ——| ——| ——| ——| ——| ——|
| 41| 1AD23| CAM\_CLK1\_OUT\_M0| GPIO4\_A0\_d| 1.8V| CAM\_CLK1\_OUT\_M0| SAI1\_SDO0\_M1\_1V8|
| 43| ——| ——| ——| ——| ——| ——|
| 45| AM32| CAM\_CLK0\_OUT\_M0| GPIO3\_D7\_d| 1.8V| CAM\_CLK0\_OUT\_M0| HP\_DET\_L\_1V8|
| 47| ——| ——| ——| ——| ——| ——|
| 49| ——| ——| ——| ——| ——| ——|
| 51| AM33| GPIO3\_D6\_d| AM33| 1.8V| GPIO3\_D6\_d| 4G/5G\_RESET|
| 53| ——| ——| ——| ——| ——| ——|
| 55| ——| ——| ——| ——| ——| ——|
| 57| ——| ——| ——| ——| ——| ——|
| 59| ——| ——| ——| ——| ——| ——|
| 61| ——| ——| ——| ——| ——| ——|
| 63| ——| ——| ——| ——| ——| ——|
| 65| ——| ——| ——| ——| ——| ——|
| 67| 1K20| GPIO0\_A0\_d| GPIO0\_A0\_d| 1.8V| GPIO0\_A0\_d| IIC\_GPIO\_INT|
| 69| AJ32| GPIO3\_C5\_d| GPIO3\_C5\_d| 1.8V| GPIO3\_C5\_d| UART8\_RX\_M0\_1V8|
| 71| 1AE21| HDMI\_TX\_HPDIN\|_M0| GPIO4\_B1\_d| 1.8V| HDMI send link detection| HDMI\_TX\_HPDIN\_M0\_1V8|
| 73| AJ33| GPIO3\_C6\_d| GPIO3\_C6\_d| 1.8V| GPIO3\_C6\_d| UART8\_TX\_M0\_1V8|
| 75| 1M20| GPIO0\_A5\_z| GPIO0\_A5\_z| 1.8V| GPIO0\_A5\_z| TYPEC0\_INT|
| 77| AC32| GPIO3\_C7\_d| GPIO3\_C7\_d| 1.8V| GPIO3\_C7\_d| PCIE1\_PRSN2\_1V8|
| 79| 1AB22| GPIO3\_D0\_d| GPIO3\_D0\_d| 1.8V| GPIO3\_D0\_d| MIPI\_DSI1\_EN\_1V8|
| 81| ——| GND| ——| ——| Ground| GND|
| 83| 1F21| PCIE0\_REFCLKP\_M1| ——| ——| PCIE0 clock output+| x|
| 85| 1F22| PCIE0\_REFCLKN\_M1| ——| ——| PCIE0 clock output-| x|
| 87| ——| GND| ——| ——| Ground| GND|
| 89| G32| PCIE0\_TXP\_M1/USB\_DRD1\_SSTXP| ——| ——| PCIE0 Data Transmit+ / USB3\_HOST1 Transmit Differential+| USB3\_HOST1\_SSTXP|
| 91| G33| PCIE0\_TXN\_M1/USB\_DRD1\_SSTXN| ——| ——| PCIE0 Data Transmit / USB3\_HOST1 Differential Transmit -| USB3\_HOST1\_SSTXN|
| 93| ——| GND| ——| ——| Ground| GND|
| 95| H32| PCIE0\_RXP\_M1/USB\_DRD1\_SSRXP| ——| ——| PCIe Data Receive+ / USB 3.0 HOST1 Receive Differential+| USB3\_HOST1\_SSRXP|
| 97| H33| PCIE0\_RXN\_M1/USB\_DRD1\_SSRXN| ——| ——| PCIe Data Receive- / USB3\_HOST1 Receive Differential -| USB3\_HOST1\_SSRXN|
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
| 64| 1H22| PCIE1\_REFCLKN| ——| ——| PCIE1 clock output-| PCIE1\_REFCLKN|
| 66| 1H21| PCIE1\_REFCLKP| ——| ——| PCIE1 clock output+| PCIE1\_REFCLKP|
| 68| ——| GND| ——| ——| Ground| GND|
| 70| K32| PCIE1\_RXN| ——| ——| PCIE1 data receive-| PCIE1\_RXN|
| 72| K33| PCIE1\_RXP| ——| ——| PCIE1 data receive +| PCIE1\_RXP|
| 74| ——| GND| ——| ——| Ground| GND|
| 76| L32| PCIE1\_TXN| ——| ——| PCIE1 data sending-| PCIE1\_TXN|
| 78| L33| PCIE1\_TXP| ——| ——| PCIE1 data sending+| PCIE1\_TXP|
| 80| ——| GND| ——| ——| Ground| GND|
| 82| 1D22| PCIE0\_REFCLKN\_M0| ——| ——| PCIE0 clock output-| PCIE0\_REFCLKN\_M0|
| 84| 1D21| PCIE0\_REFCLKP\_M0| ——| ——| PCIE0 clock output+| PCIE0\_REFCLKP\_M0|
| 86| ——| GND| ——| ——| Ground| GND|
| 88| E33| PCIE0\_TXN\_M0/USB\_DRD0\_SSTXN| ——| ——| PCIE0 Data Transmit / USB3\_HOST0 Differential Transmit -| PCIE0\_TXN\_M0/USB\_DRD0\_SSTXN|
| 90| E32| PCIE0\_TXP\_M0/USB\_DRD0\_SSTXP| ——| ——| PCIE0 Data Transmit+ / USB3\_HOST0 Transmit Differential+| PCIE0\_TXP\_M0/USB\_DRD0\_SSTXP|
| 92| ——| GND| ——| ——| Ground| GND|
| 94| D32| PCIE0\_RXN\_M0/USB\_DRD0\_SSRXN| ——| ——| PCIE0 Data| Receive- / USB3\_HOST0 Receive Differential -| PCIE0\_RXN\_M0/USB\_DRD0\_SSRXN|
| 96| D33| PCIE0\_RXP\_M0/USB\_DRD0\_SSRXP| ——| ——| PCIE0 Data Receive+ / USB3\_HOST0 Receive Differential+| PCIE0\_RXP\_M0/USB\_DRD0\_SSRXP|
| 98| ——| GND| ——| ——| Ground| GND|
| 100| ——| RESET\_L| ——| ——| Reset| RESET\_L|

**Table 5 P3 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 1| ——| GND| ——| ——| Ground| GND|
| 3| ——| ——| ——| ——| ——| ——|
| 5| ——| ——| ——| ——| ——| ——|
| 7| ——| GND| ——| ——| Ground| GND|
| 9| ——| ——| ——| ——| ——| ——|
| 11| ——| ——| ——| ——| ——| ——|
| 13| ——| GND| ——| ——| Ground| GND|
| 15| ——| ——| ——| ——| ——| ——|
| 17| ——| ——| ——| ——| ——| ——|
| 19| ——| GND| ——| ——| Ground| GND|
| 21| ——| ——| ——| ——| ——| ——|
| 23| ——| ——| ——| ——| ——| ——|
| 25| ——| GND| ——| ——| Ground| GND|
| 27| AR13| SDMMC1\_D1| GPIO1\_B5\_d| 1.8V| SD/MMC Interface Data Signal 1| SDMMC1\_D1|
| 29| AR14| SDMMC1\_D0| GPIO1\_B4\_d| 1.8V| SD/MMC Interface Data Signal 0| SDMMC1\_D0|
| 31| ——| GND| ——| ——| Ground| GND|
| 33| AR15| SDMMC1\_CLK| GPIO1\_C1\_d| 1.8V| SD/MMC Interface Clock Signal| SDMMC1\_CLK|
| 35| AR16| SDMMC1\_CMD| GPIO1\_C0\_d| 1.8V| SD/MMC Interface Command Signal| SDMMC1\_CMD|
| 37| ——| GND| ——| ——| Ground| GND|
| 39| AT15| SDMMC1\_D3| GPIO1\_B7\_d| 1.8V| SD/MMC Interface Data Signal 3| SDMMC1\_D3|
| 41| AT14| SDMMC1\_D2| GPIO1\_B6\_d| 1.8V| SD/MMC Interface Data Signal 2| SDMMC1\_D2|
| 43| ——| GND| ——| ——| Ground| GND|
| 45| 1AF9| SAI2\_SDO\_M0| GPIO1\_D0\_d| 1.8V| I2S output data| SAI2\_SDO\_M0|
| 47| 1AD11| SAI2\_SCLK\_M0| GPIO1\_D1\_d| 1.8V| I2S bit clock| SAI2\_SCLK\_M0|
| 49| ——| GND| ——| ——| Ground| GND|
| 51| 1AD9| SAI2\_LRCK\_M0| GPIO1\_D2\_d| 1.8V| I2S send frame clock| SAI2\_LRCK\_M0|
| 53| 1AE9| SAI2\_SDI\_M0| GPIO1\_D3\_d| 1.8V| I2S input data| SAI2\_SDI\_M0|
| 55| ——| GND| ——| ——| Ground| GND|
| 57| 1AD15| MIPI\_DPHY\_DSI\_TX\_D0N| ——| ——| MIPI\_DPHY\_DSI send data 0-| MIPI\_DPHY\_DSI\_TX\_D0N|
| 59| 1AE15| MIPI\_DPHY\_DSI\_TX\_D0P| ——| ——| MIPI\_DPHY\_DSI send data 0+| MIPI\_DPHY\_DSI\_TX\_D0P|
| 61| ——| GND| ——| ——| Ground| GND|
| 63| AR26| MIPI\_DPHY\_DSI\_TX\_D1N| ——| ——| MIPI\_DPHY\_DSI send data 1-| MIPI\_DPHY\_DSI\_TX\_D1N|
| 65| AT26| MIPI\_DPHY\_DSI\_TX\_D1P| ——| ——| MIPI\_DPHY\_DSI send data 1+| MIPI\_DPHY\_DSI\_TX\_D1P|
| 67| ——| GND| ——| ——| Ground| GND|
| 69| AR27| MIPI\_DPHY\_DSI\_TX\_CLKN| ——| ——| MIPI\_DPHY\_DSI send clock-| MIPI\_DPHY\_DSI\_TX\_CLKN|
| 71| AT27| MIPI\_DPHY\_DSI\_TX\_CLKP| ——| ——| MIPI\_DPHY\_DSI send clock+| MIPI\_DPHY\_DSI\_TX\_CLKP|
| 73| ——| GND| ——| ——| Ground| GND|
| 75| AR29| MIPI\_DPHY\_DSI\_TX\_D2N| ——| ——| MIPI\_DPHY\_DSI send data 2-| MIPI\_DPHY\_DSI\_TX\_D2N|
| 77| AT29| MIPI\_DPHY\_DSI\_TX\_D2P| ——| ——| MIPI\_DPHY\_DSI send data 2+| MIPI\_DPHY\_DSI\_TX\_D2P|
| 79| ——| GND| ——| ——| Ground| GND|
| 81| AR30| MIPI\_DPHY\_DSI\_TX\_D3N| ——| ——| MIPI\_DPHY\_DSI send data 3-| MIPI\_DPHY\_DSI\_TX\_D3N|
| 83| AT30| MIPI\_DPHY\_DSI\_TX\_D3P| ——| ——| MIPI\_DPHY\_DSI send data 3+| MIPI\_DPHY\_DSI\_TX\_D3P|
| 85| ——| GND| ——| ——| Ground| GND|
| 87| ——| CARRIER\_BOARD\_EN| ——| 3.3V| Carrier board enable signal <font style="background-color:#ffff00;">(3.3V, 1K pull-up, not connected to GPIO) | CARRIER\_BOARD\_EN|
| 89| ——| GND| ——| ——| Ground| GND|
| 91| | VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|
| 93| | VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|
| 95| | VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|
| 97| | VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|
| 99| | VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|

**Table 6 P3 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| ——| GND| ——| ——| Ground| GND|
| 4| ——| ——| ——| ——| ——| ——|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| ——| ——| ——| ——| ——|
| 10| ——| PMIC\_VDC| ——| ——| PMIC\_VDC signal| SoM startup mode switching|
| 12| ——| GND| ——| ——| Ground| GND|
| 14| 1B18| USB\_DRD0\_ID| ——| ——| USB2\_OTG0\_ID signal| USB\_DRD0\_ID|
| 16| 1C18| USB\_DRD0\_VBUSDET| ——| ——| USB2\_OTG0\_VBUSDET insert detection| USB2\_OTG0\_VBUSDET|
| 18| A25| USB\_DRD0\_DM| ——| ——| USB2\_OTG0 data-| USB2\_OTG0\_DM|
| 20| B25| USB\_DRD0\_DP| ——| ——| USB2\_OTG0 data+| USB2\_OTG0\_DP|
| 22| ——| ——| ——| ——| ——| ——|
| 24| ——| ——| ——| ——| ——| ——|
| 26| ——| GND| ——| ——| Ground| GND|
| 28| AT17| UART4\_TX\_M1| GPIO1\_C4\_d| 1.8V| UART4 send data| UART4\_TX\_M1|
| 30| AT18| UART4\_RX\_M1| GPIO1\_C5\_d| 1.8V| UART4 receive data| UART4\_RX\_M1|
| 32| ——| GND| ——| ——| Ground| GND|
| 34| 1AE11| UART4\_RTSN\_M1| GPIO1\_C2\_d| 1.8V| UART4 send request| UART4\_RTSN\_M1|
| 36| AR17| UART4\_CTSN\_M1| GPIO1\_C3\_d| 1.8V| UART4 clear sending| UART4\_CTSN\_M1|
| 38| ——| GND| ——| ——| Ground| GND|
| 40| 1AE7| GPIO1\_C6\_d| GPIO1\_C6\_d| 1.8V| GPIO1\_C6\_d| WIFI\_REG\_ON\_H|
| 42| 1AF11| GPIO1\_C7\_d| GPIO1\_C7\_d| 1.8V| GPIO1\_C7\_d| BT\_REG\_ON\_H|
| 44| ——| GND| ——| ——| Ground| GND|
| 46| 1AD7| GPIO1\_D4\_d| GPIO1\_D4\_d| 1.8V| GPIO1\_D4\_d| HOST\_WAKE\_BT\_H|
| 48| AR18| GPIO1\_D5\_d| GPIO1\_D5\_d| 1.8V| GPIO1\_D5\_d| CAN3\_TX\_M0\_1V8|
| 50| ——| GND| ——| ——| Ground| GND|
| 52| T32| GPIO0\_B2\_z| GPIO0\_B2\_z| 1.8V| GPIO0\_B2\_z| WIFI\_WAKE\_HOST\_H|
| 54| 1M23| GPIO0\_B3\_z| GPIO0\_B3\_z| 1.8V| GPIO0\_B3\_z| BT\_WAKE\_HOST\_H|
| 56| ——| GND| ——| ——| Ground| GND|
| 58| ——| ——| ——| ——| ——| ——|
| 60| ——| ——| ——| ——| ——| ——|
| 62| ——| GND| ——| ——| Ground| GND|
| 64| ——| ——| ——| ——| ——| ——|
| 66| ——| ——| ——| ——| ——| ——|
| 68| ——| GND| ——| ——| Ground| GND|
| 70| ——| ——| ——| ——| ——| ——|
| 72| ——| ——| ——| ——| ——| ——|
| 74| ——| GND| ——| ——| Ground| GND|
| 76| ——| ——| ——| ——| ——| ——|
| 78| ——| ——| ——| ——| ——| ——|
| 80| ——| GND| ——| ——| Ground| GND|
| 82| ——| ——| ——| ——| ——| ——|
| 84| ——| ——| ——| ——| ——| ——|
| 86| ——| GND| ——| ——| Ground| GND|
| 88| ——| PWRON\_L| ——| ——| On/Off signal| PWRON\_L|
| 90| T33| SDMMC0\_DET\_L| GPIO0\_A7\_u| 1.8V| SDMMC card detection signal| SDMMC\_DET\_L|
| 92| 1AF7| GPIO1\_D6\_d| GPIO1\_D6\_d| 1.8V| GPIO1\_D6\_d| CAN3\_RX\_M0\_1V8|
| 94| 1K22| GPIO0\_A2\_d| GPIO0\_A2\_d| 1.8V| GPIO0\_A2\_d| GMAC0\_INT|
| 96| ——| GND| ——| ——| Ground| GND|
| 98| ——| VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|
| 100| ——| VCC\_DCIN| ——| ——| 12V power input| VCC\_DCIN|

**Table 7 P4 Connector Interface (Odd) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|----------|:----------:|----------|:----------:|
| 1| 1T21| GPIO0\_C5\_d| GPIO0\_C5\_d| 3.3V| GPIO0\_C5\_d| MIPI\_DSI1\_INT|
| 3| 1T23| GPIO0\_C7\_d| GPIO0\_C7\_d| 3.3V| GPIO0\_C7\_d| I2C3\_SDA\_M1\_3V3|
| 5| B10| GMAC0\_MDIO| GPIO2\_C5\_d| 3.3V| GMAC0 serial management data| GMAC0\_MDIO\_3V3|
| 7| B9| GMAC0\_MDC| GPIO2\_C6\_d| 3.3V| GMAC0 serial management clock| GMAC0\_MDC\_3V3|
| 9| 1P20| GPIO0\_D0\_d| GPIO0\_D0\_d| 3.3V| GPIO0\_D0\_d| MIPI\_DSI1\_RESET|
| 11| ——| ——| ——| ——| ——| ——|
| 13| ——| GND| ——| ——| Ground| GND|
| 15| ——| ——| ——| ——| ——| ——|
| 17| ——| ——| ——| ——| ——| ——|
| 19| AN32| GPIO4\_B7\_d| GPIO4\_B7\_d| 3.3V| GPIO4\_B7\_d| 4G/5G\_PWREN\_3V3|
| 21| AR33| GPIO4\_B4\_d| GPIO4\_B4\_d| 3.3V| GPIO4\_B4\_d| UART9\_TX\_M0\_3V3|
| 23| AP32| GPIO4\_B5\_d| GPIO4\_B5\_d| 3.3V| GPIO4\_B5\_d| UART9\_RX\_M0\_3V3|
| 25| | WIFI\_PEN\_3V3| | 3.3V| WIFI \_ PEN \_ 3 V3 enable signal <font style="background-color:#ffff00;">(3.3 V pull-up, no GPIO connected) | WIFI\_PEN\_3V3|
| 27| ——| GND| ——| ——| Ground| GND|
| 29| 1A2| CAN0\_TX\_M2| GPIO2\_B1\_d| 3.3V| CAN0 data sending| CAN0\_TX\_M2\_3V3|
| 31| 1D2| CAN0\_RX\_M2| GPIO2\_B3\_d| 3.3V| CAN0 data receiving| CAN0\_RX\_M2\_3V3|
| 33| AB33| GPIO0\_B6\_d| GPIO0\_B6\_d| 3.3V| GPIO0\_B6\_d| TF\_PWR\_EN\_3V3|
| 35| A11| GMAC0\_CLK0\_25M\_OUT| GPIO2\_C4\_d| 3.3V| PHY 25MHz reference clock output| 4G/5G\_MOD\_PWREN\_3V3|
| 37| A8| GMAC0\_MCLKINOUT| GPIO2\_D0\_d| 3.3V| PHY 125MHz sync clock input| M.2\_PCIE0\_CLKREQN\_M0\_3V3|
| 39| 1T22| GPIO0\_C6\_d| GPIO0\_C6\_d| 3.3V| GPIO0\_C6\_d| I2C3\_SCL\_M1\_3V3|
| 41| ——| GND| ——| ——| Ground| GND|
| 43| AK32| I2C4\_SDA\_M3| GPIO3\_B7\_d| 1.8V| I2C4 Data| SAI1\_SDI0\_M1\_1V8|
| 45| AH32| I2C4\_SCL\_M3| GPIO3\_C0\_d| 1.8V| I2C4 clock| GMAC0\_RESET\_1V8|
| 47| 1V22| GMAC1\_MDIO\_M0| GPIO3\_A5\_d| 1.8V| GMAC1 serial management data| GMAC1\_MDIO\_M0|
| 49| 1V23| GMAC1\_MDC\_M0| GPIO3\_A6\_d| 1.8V| GMAC1 serial management clock| GMAC1\_MDC\_M0|
| 51| ——| GND| ——| ——| Ground| GND|
| 53| ——| ——| ——| ——| ——| ——|
| 55| ——| ——| ——| ——| .—— | ——|
| 57| 1AB23| ETH\_CLK1\_25M\_OUT\_M0| GPIO3\_A4\_d| 1.8V| PHY 25MHz reference clock output| SAI1\_SCLK\_M1\_1V8|
| 59| ——| ——| ——| ——| .—— | ——|
| 61| 1AB21| GPIO3\_B0\_z| GPIO3\_B0\_z| 1.8V| GPIO3\_B0\_z| SAI1\_MCLK\_M1\_1V8|
| 63| ——| GND| ——| ——| Ground| GND|
| 65| B19| MIPI\_DPHY\_CSI0\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI0\_RX\_D0N|
| 67| A19| MIPI\_DPHY\_CSI0\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI0\_RX\_D0P|
| 69| ——| GND| ——| ——| Ground| GND|
| 71| 1C14| MIPI\_DPHY\_CSI0\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI0\_RX\_D1N|
| 73| 1B14| MIPI\_DPHY\_CSI0\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI0\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI0\_RX\_D1P|
| 75| ——| GND| ——| ——| Ground| GND|
| 77| B20| MIPI\_DPHY\_CSI0\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI0\_RX\_CLKN clock +| MIPI\_DPHY\_CSI0\_RX\_CLKN|
| 79| A20| MIPI\_DPHY\_CSI0\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI0\_RX\_CLKP clock +| MIPI\_DPHY\_CSI0\_RX\_CLKP|
| 81| ——| GND| ——| ——| Ground| GND|
| 83| B22| MIPI\_DPHY\_CSI1\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI1\_RX\_D0N|
| 85| A22| MIPI\_DPHY\_CSI1\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI1\_RX\_D0P|
| 87| ——| GND| ——| ——| Ground| GND|
| 89| B23| MIPI\_DPHY\_CSI1\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI1\_RX\_D1N|
| 91| A23| MIPI\_DPHY\_CSI1\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI1\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI1\_RX\_D1P|
| 93| ——| GND| ——| ——| Ground| GND|
| 95| 1C16| MIPI\_DPHY\_CSI1\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI1\_RX\_CLKN clock +| MIPI\_DPHY\_CSI1\_RX\_CLKN|
| 97| 1B16| MIPI\_DPHY\_CSI1\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI1\_RX\_CLKN clock +| MIPI\_DPHY\_CSI1\_RX\_CLKP|
| 99| ——| GND| ——| ——| Ground| GND|

**Table 8 P4 Connector Interface (Even) Pin Definition**

| **NUM**| **BALL**| **Signal Name**| **GPIO**| **VOL**| **Pin Description**| **Default Function**|
|:----------:|:----------:|:----------:|:----------:|:----------:|----------|:----------:|
| 2| ——| ——| | ——| ——| ——|
| 4| 1P21| GPIO0\_D1\_d| GPIO0\_D1\_d| 3.3V| GPIO0\_D1\_d| TYPEC0\_PWREN|
| 6| ——| ——| ——| ——| ——| ——|
| 8| ——| GND| ——| ——| Ground| GND|
| 10| AD32| GMAC1\_TXD3\_M0| GPIO3\_C2\_d| 1.8V| GMAC1 data send 3| GMAC1\_TXD3\_M0|
| 12| AE32| GMAC1\_TXD2\_M0| GPIO3\_C3\_d| 1.8V| GMAC1 data send 2| GMAC1\_TXD2\_M0|
| 14| AE33| GMAC1\_TXD1\_M0| GPIO3\_B4\_d| 1.8V| GMAC1 data send 1| GMAC1\_TXD1\_M0|
| 16| 1V21| GMAC1\_TXD0\_M0| GPIO3\_B5\_d| 1.8V| GMAC1 data send 0| GMAC1\_TXD0\_M0|
| 18| 1Y20| GMAC1\_TXCTL\_M0| GPIO3\_B3\_d| 1.8V| GMAC1 send control| GMAC1\_TXCTL\_M0|
| 20| 1Y23| GMAC1\_TXCLK\_M0| GPIO3\_B6\_d| 1.8V| GMAC1 send clock| GMAC1\_TXCLK\_M0|
| 22| ——| GND| ——| ——| Ground| GND|
| 24| AF33| GMAC1\_RXD3\_M0| GPIO3\_D2\_| 1.8V| GMAC1 receive data 3| GMAC1\_RXD3\_M0|
| 26| AF32| GMAC1\_RXD2\_M0| GPIO3\_D3\_z| 1.8V| GMAC1 receive data 2| GMAC1\_RXD2\_M0|
| 28| AG32| GMAC1\_RXD1\_M0| GPIO3\_B1\_d| 1.8V| GMAC1 receive data 1| GMAC1\_RXD1\_M0|
| 30| 1Y22| GMAC1\_RXD0\_M0| GPIO3\_B2\_d| 1.8V| GMAC1 receive data 0| GMAC1\_RXD0\_M0|
| 32| 1Y21| GMAC1\_RXCTL\_M0| GPIO3\_A7\_d| 1.8V| GMAC1 receive control| GMAC1\_RXCTL\_M0|
| 34| 1V20| GMAC1\_RXCLK\_M0| GPIO3\_D1\_z| 1.8V| GMAC1 receive clock| GMAC1\_RXCLK\_M0|
| 36| ——| GND| ——| ——| Ground| GND|
| 38| B5| GMAC0\_TXD3| GPIO2\_C3\_d| 3.3V| GMAC0 data send 3| GMAC0\_TXD3|
| 40| A5| GMAC0\_TXD2| GPIO2\_C2\_d| 3.3V| GMAC0 data send 2| GMAC0\_TXD2|
| 42| 1B6| GMAC0\_TXD1| GPIO2\_D5\_d| 3.3V| GMAC0 data send 1| GMAC0\_TXD1|
| 44| 1A6| GMAC0\_TXD0| GPIO2\_D4\_d| 3.3V| GMAC0 data send 0| GMAC0\_TXD0|
| 46| 1C6| GMAC0\_TXCTL| GPIO2\_D3\_d| 3.3V| GMAC0 send control| GMAC0\_TXCTL|
| 48| B8| GMAC0\_TXCLK| GPIO2\_D6\_z| 3.3V| GMAC0 send clock| GMAC0\_TXCLK|
| 50| ——| GND| ——| ——| Ground| GND|
| 52| 1C4| GMAC0\_RXD3| GPIO2\_C0\_d| 3.3V| GMAC0 receive data 3| GMAC0\_RXD3|
| 54| 1B4| GMAC0\_RXD2| GPIO2\_C1\_d| 3.3V| GMAC0 receive data 2| GMAC0\_RXD2|
| 56| A7| GMAC0\_RXD1| GPIO2\_D1\_d| 3.3V| GMAC0 receive data 1| GMAC0\_RXD1|
| 58| 1D6| GMAC0\_RXD0| GPIO2\_D2\_d| 3.3V| GMAC0 receive data 0| GMAC0\_RXD0|
| 60| A10| GMAC0\_RXCTL| GPIO2\_C7\_d| 3.3V| GMAC0 receive control| GMAC0\_RXCTL|
| 62| B7| GMAC0\_RXCLK| GPIO2\_D7\_z| 3.3V| GMAC0 receive clock| GMAC0\_RXCLK|
| 64| ——| GND| ——| ——| Ground| GND|
| 66| A13| MIPI\_DPHY\_CSI2\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI2\_RX\_D0P|
| 68| B13| MIPI\_DPHY\_CSI2\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI2\_RX\_D0N|
| 70| ——| GND| ——| ——| Ground| GND|
| 72| 1B10| MIPI\_DPHY\_CSI2\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI2\_RX\_D1P|
| 74| 1C10| MIPI\_DPHY\_CSI2\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI2\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI2\_RX\_D1N|
| 76| ——| GND| ——| ——| Ground| GND|
| 78| A14| MIPI\_DPHY\_CSI2\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI2\_RX\_CLKP clock +| MIPI\_DPHY\_CSI2\_RX\_CLKP|
| 80| B14| MIPI\_DPHY\_CSI2\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI2\_RX\_CLKN clock +| MIPI\_DPHY\_CSI2\_RX\_CLKN|
| 82| ——| GND| ——| ——| Ground| GND|
| 84| A16| MIPI\_DPHY\_CSI3\_RX\_D0P| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D0P data receive 0+| MIPI\_DPHY\_CSI3\_RX\_D0P|
| 86| B16| MIPI\_DPHY\_CSI3\_RX\_D0N| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D0N data receive 0-| MIPI\_DPHY\_CSI3\_RX\_D0N|
| 88| ——| GND| ——| ——| Ground| GND|
| 90| A17| MIPI\_DPHY\_CSI3\_RX\_D1P| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D1P data receive 1+| MIPI\_DPHY\_CSI3\_RX\_D1P|
| 92| B17| MIPI\_DPHY\_CSI3\_RX\_D1N| ——| ——| MIPI\_DPHY\_CSI3\_RX\_D1N data receive 1-| MIPI\_DPHY\_CSI3\_RX\_D1N|
| 94| ——| GND| ——| ——| Ground| GND|
| 96| 1B12| MIPI\_DPHY\_CSI3\_RX\_CLKP| ——| ——| MIPI\_DPHY\_CSI3\_RX\_CLKP clock +| MIPI\_DPHY\_CSI3\_RX\_CLKP|
| 98| 1C12| MIPI\_DPHY\_CSI3\_RX\_CLKN| ——| ——| MIPI\_DPHY\_CSI3\_RX\_CLKN clock +| MIPI\_DPHY\_CSI3\_RX\_CLKN|
| 100| ——| GND| ——| ——| Ground| GND|

#### 2.7 FET3572-C SoM Pin Description (by Function)

**Note: **

- **Default Please don’t make any modifications for all SoM pin functions regulated in the “default functions” of the following table, otherwise, it may have conflicts with the factory driver. Please contact us with any questions in time;**

- **When you have multiple functional expansion requirements, please refer to the “FET3572-C SoM Pin Multiplexing Comparison Table” in the materials. However, for more detailed information, please refer to the relevant documentation, chip datasheets, and user manuals;**

- **The “Signal Name” column lists the default pin names corresponding to the SoM connections to the carrier board.**

#### 2.7.1 Power Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| Power supply| VCC\_DCIN| Power Input| SoM power supply pin, 12V| P3\_91|
| | | | | P3\_93|
| | | | | P3\_95|
| | | | | P3\_97|
| | | | | P3\_99|
| | | | | P3\_98|
| | | | | P3\_100|
| | Carry\_Board\_PEN| Power enable| Peripheral power enable for carrier board| P3\_87|
| | GND| Ground| SoM power ground, all GND pins need to be connected| ——|

#### 2.7.2 Control Pin Reset

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| SoM Reset| RESET\_L| I| SoM power-off reset, low level active| P2\_100|

#### 2.7.3 SoM Startup Control Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| SoM startup mode switching| PMIC\_VDC| I| When the pin is left floating (unconnected), the SoM will power on and boot up by default. |
When the pin is pulled low, the SoM will not power on and boot up automatically; pressing the PWRON\_L button will initiate the startup process.| P3\_10|

#### 2.7.4 Flashing Control Pin Reset

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Maskrom Mode| SARADC\_VIN0\_BOOT| I| Go to Maskrom mode by pulling low before powering on| P1\_28|
| Recovery Mode| SARADC\_VIN1\_KEY/RECOVERY| I| Pull low before power-on to enter Recovery mode| P1\_30|

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
| USB| USB\_DRD1\_DP| I/O| USB2.0\_HOST data+| P1\_92|
| | USB\_DRD1\_DM| I/O| USB2.0\_HOST data-| P1\_94||
| | USB\_DRD1\_ID| I| USB2\_OTG1\_ID pin| P1\_98|
| | USB\_DRD1\_VBUSDET| I| USB2\_OTG1\_VBUSDET pin| P1\_100|
| | USB\_DRD1\_SSTXP| O| USB3.0\_HOST1 send+| P2\_89|
| | USB\_DRD1\_SSTXN| O| USB3.0\_HOST1 send-| P2\_91|
| | USB\_DRD1\_SSRXP| I| USB3.0\_HOST1 receive+| P2\_95|
| | USB\_DRD1\_SSRXN| I| USB3.0\_HOST1 receive-| P2\_97|
| | USB\_DRD0\_ID| I| USB2\_OTG0\_ID pin| P3\_14|
| | USB\_DRD0\_VBUSDET| I| USB2\_OTG0\_VBUSDET pin| P3\_16|
| | USB\_DRD0\_DM| I/O| USB2.0\_OTG data-| P3\_18|
| | USB\_DRD0\_DP| I/O| USB2.0\_OTG data+| P3\_20|

#### 2.7.7 SD Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:||
| SDIO| SDMMC0\_D0| I/O| SDIO data bit 0| P1\_5|
| | SDMMC0\_D1| I/O| SDIO data bit 1| P1\_3|
| | SDMMC0\_D2| I/O| SDIO data bit 2| P1\_13|
| | SDMMC0\_D3| I/O| SDIO data bit 3| P1\_11||
| | SDMMC0\_CLK| O| SDIO clock| P1\_7|
| | SDMMC0\_CMD| I/O| SDIO Command Signal| P1\_9||
| | SDMMC0\_DET\_L| I| SD Card Plug Detection| P3\_90|

#### 2.7.8 WIFI Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| Control Pin| WIFI\_REG\_ON\_H（GPIO1\_C6\_d）| O| WIFI Power Enable| P3\_40|
| | WIFI\_WAKE\_HOST\_H（GPIO0\_B2\_z）| I/O| The wireless network wakes up the host.| P3\_52|
| | BT\_WAKE\_HOST\_H（GPIO0\_B3\_z）| I/O| The bluetooth wakes up the host.| P3\_54|
| | HOST\_WAKE\_BT\_H（GPIO1\_D4\_d）| I/O| The host wakes up Bluetooth.| P3\_46|
| | BT\_REG\_ON\_H（GPIO1\_C7\_d）| O| Bluetooth Power Enable| P3\_42|
| | WIFI\_PEN\_3V3| O| WIFI Module Power Enable| P4\_25|
| SDIO| SDMMC1\_D0\_M0| I/O| SDIO data bit 0| P3\_29||
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
| | UART4\_CTSN\_M1| I| UART4 sending request| P3\_36|

#### 2.7.9 UART Interface Control Pins

| **Default Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| UART0| UART0\_TX\_M0\_DEBUG| O| UART0 data sending| P2\_7|
| | UART0\_RX\_M0\_DEBUG| I| UART0 data receiving| P2\_9|
| UART11| UART11\_TX\_M1| O| UART11 data sending| P1\_56|
| | UART11\_RX\_M1| I| UART11 data receiving| P1\_60|
| UART9| UART9\_TX\_M0| O| UART9 data sending| P4\_21|
| | UART9\_RX\_M0| I| UART9 data receiving| P4\_23|
| UART8| UART8\_TX\_M0| O| UART8 data sending| P2\_73|
| | UART8\_RX\_M0| I| UART8 data receiving| P2\_69|

#### 2.7.10 IIC Interface Control Pins

| **Default Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| I2C2| I2C2\_SCL\_M0| O| I2C clock| P2\_11|
| | I2C2\_SDA\_M0| I/O| I2C Data| P2\_1|
| I2C3| I2C3\_SCL\_M1| O| I2C Data| P4\_39|
| | I2C3\_SDA\_M1| I/O| I2C clock| P4\_3|
| I2C4| I2C4\_SCL\_M1| O| I2C clock| P1\_70|
| | I2C4\_SDA\_M1| I/O| I2C Data| P1\_72|
| I2C5| I2C5\_SCL\_M3| O| I2C clock| P2\_31|
| | I2C5\_SDA\_M3| I/O| I2C Data| P2\_33|
| HDMI\_I2C| HDMI\_TX\_SCL| O| I2C clock| P1\_68|
| | HDMI\_TX\_SDA| I/O| I2C Data| P1\_58|

#### 2.7.11 Ethernet Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| GMAC1| ETH\_CLK0\_25M\_OUT\_M0| O| PHY 25MHz reference clock output| P4\_57|
| | ETH1\_MCLK\_M0| I| PHY 125MHz sync clock input| P4\_61|
| | GMAC1\_INT| I| RGMII Interrupt| P3\_94|
| | GMAC1\_RESET| O| RGMII Reset| P3\_92|
| | GMAC1\_MDC\_M0| O| Serial Management Clock| P4\_49|
| | GMAC1\_MDIO\_M0| I/O| Serial Management Data| P4\_47|
| | GMAC1\_TXD3\_M0| O| RGMII Data Send 3| P4\_10|
| | GMAC1\_TXD2\_M0| O| RGMII Data Send 2| P4\_12|
| | GMAC1\_TXD1\_M0| O| RGMII Data Send 1| P4\_14|
| | GMAC1\_TXD0\_M0| O| RGMII Data Send 0| P4\_16|
| | GMAC1\_TXCTL\_M0| O| RGMII send control| P4\_18|
| | GMAC1\_TXCLK\_M0| O| RGMII send clock| P4\_20|
| | GMAC1\_RXD3\_M0| I| RGMII receive data 3| P4\_24|
| | GMAC1\_RXD2\_M0| I| RGMII receive data 2| P4\_26|
| | GMAC1\_RXD1\_M0| I| RGMII receive data 1| P4\_28|
| | GMAC1\_RXD0\_M0| I| RGMII receive data 0| P4\_30|
| | GMAC1\_RXCTL\_M0| I| RGMII receive control| P4\_32|
| | GMAC1\_RXCLK\_M0| I| RGMII receive clock| P4\_34|
| GMAC0| ETH0\_CLK1\_25M\_OUT\_M0| O| PHY 25MHz reference clock output| P4\_35|
| | ETH0\_MCLK\_M0| I| PHY 125MHz sync clock input| P4\_37|
| | GMAC0\_INT| I| RGMII Interrupt| P2\_19|
| | GMAC0\_RESET| O| RGMII Reset| P4\_45|
| | GMAC0\_MDC\_M0| O| Serial Management Clock| P4\_7|
| | GMAC0\_MDIO\_M0| I/O| Serial Management Data| P4\_5|
| | GMAC0\_TXD3\_M0| O| RGMII Data Send 3| P4\_38|
| | GMAC0\_TXD2\_M0| O| RGMII Data Send 2| P4\_40|
| | GMAC0\_TXD1\_M0| O| RGMII Data Send 1| P4\_42|
| | GMAC0\_TXD0\_M0| O| RGMII Data Send 0| P4\_44|
| | GMAC0\_TXCTL\_M0| O| RGMII send control| P4\_46|
| | GMAC0\_TXCLK\_M0| O| RGMII send clock| P4\_48|
| | GMAC0\_RXD3\_M0| I| RGMII receive data 3| P4\_52|
| | GMAC0\_RXD2\_M0| I| RGMII receive data 2| P4\_54||
| | GMAC0\_RXD1\_M0| I| RGMII receive data 1| P4\_56|
| | GMAC0\_RXD0\_M0| I| RGMII receive data 0| P4\_58|
| | GMAC0\_RXCTL\_M0| I| RGMII receive control| P4\_60|
| | GMAC0\_RXCLK\_M0| I| RGMII receive clock| P4\_62|

#### 2.7.12 MIPI\_CSI Output Interface

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| MIPI\_CSI0| MIPI\_DPHY\_CSI0\_RX\_D0\_P| I| CSI Data 0+| P4\_67|
| | MIPI\_DPHY\_CSI0\_RX\_D0\_N| I| CSI Data 0-| P4\_65|
| | MIPI\_DPHY\_CSI0\_RX\_D1\_P| I| CSI Data 1+| P4\_73|
| | MIPI\_DPHY\_CSI0\_RX\_D1\_N| I| CSI Data 1-| P4\_71|
| | MIPI\_DPHY\_CSI0\_RX\_CLK\_P| I| CSI clock+| P4\_79|
| | MIPI\_DPHY\_CSI0\_RX\_CLK\_N| I| CSI clock-| P4\_77|
| MIPI\_CSI1| MIPI\_DPHY\_CSI1\_RX\_D0\_P| I| CSI Data 0+| P4\_85|
| | MIPI\_DPHY\_CSI1\_RX\_D0\_N| I| CSI Data 0-| P4\_83||
| | MIPI\_DPHY\_CSI1\_RX\_D1\_P| I| CSI Data 1+| P4\_91|
| | MIPI\_DPHY\_CSI1\_RX\_D1\_N| I| CSI Data 1-| P4\_89|
| | MIPI\_DPHY\_CSI1\_RX\_CLK\_P| I| CSI clock+| P4\_97||
| | MIPI\_DPHY\_CSI1\_RX\_CLK\_N| I| CSI clock-| P4\_95|
| MIPI\_CSI2| MIPI\_DPHY\_CSI2\_RX\_D0\_P| I| CSI Data 0+| P4\_66|
| | MIPI\_DPHY\_CSI2\_RX\_D0\_N| I| CSI Data 0-| P4\_68|
| | MIPI\_DPHY\_CSI2\_RX\_D1\_P| I| CSI Data 1+| P4\_72|
| | MIPI\_DPHY\_CSI2\_RX\_D1\_N| I| CSI Data 1-| P4\_74|
| | MIPI\_DPHY\_CSI2\_RX\_CLK\_P| I| CSI clock+| P4\_78|
| | MIPI\_DPHY\_CSI2\_RX\_CLK\_N| I| CSI clock-| P4\_80|
| MIPI\_CSI3| MIPI\_DPHY\_CSI3\_RX\_D0\_P| I| CSI Data 0+| P4\_84|
| | MIPI\_DPHY\_CSI3\_RX\_D0\_N| I| CSI Data 0-| P4\_86|
| | MIPI\_DPHY\_CSI3\_RX\_D1\_P| I| CSI Data 1+| P4\_90|
| | MIPI\_DPHY\_CSI3\_RX\_D1\_N| I| CSI Data 1-| P4\_92|||
| | MIPI\_DPHY\_CSI3\_RX\_CLK\_P| I| CSI clock+| P4\_96||
| | MIPI\_DPHY\_CSI3\_RX\_CLK\_N| I| CSI clock-| P4\_98|

#### 2.7.13 MIPI\_DSI Interface Control Pin

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| MIPI\_DSI| MIPI\_DPHY\_DSI\_TX\_D0\_P| O| DSI Data 0+| P3\_59|
| | MIPI\_DPHY\_DSI\_TX\_D0\_N| O| DSI Data 0-| P3\_57||
| | MIPI\_DPHY\_DSI\_TX\_D1\_P| O| DSI Data 1+| P3\_65|
| | MIPI\_DPHY\_DSI\_TX\_D1\_N| O| DSI Data 1-| P3\_63||
| | MIPI\_DPHY\_DSI\_TX\_CLK\_P| O| DSI clock+| P3\_71|
| | MIPI\_DPHY\_DSI\_TX\_CLK\_N| O| DSI clock-| P3\_69|
| | MIPI\_DPHY\_DSI\_TX\_D2\_P| O| DSI Data 2+| P3\_77|
| | MIPI\_DPHY\_DSI\_TX\_D2\_N| O| DSI Data 2-| P3\_75|
| | MIPI\_DPHY\_DSI\_TX\_D3\_P| O| DSI Data 3+| P3\_83||
| | MIPI\_DPHY\_DSI\_TX\_D3\_N| O| DSI Data 3-| P3\_81|
| | PWM0\_CH0\_M0（GPIO0\_C4\_d）| O| Screen PWM dimming| P2\_13||
| | MIPI\_DSI1\_EN（GPIO3\_D0\_d）| O| Screen Power Enable| P2\_79|
| | MIPI\_DSI1\_RESET（GPIO0\_D0\_d）| O| Touchscreen Reset| P4\_9|
| | MIPI\_DSI1\_INT（GPIO0\_C5\_d）| I| Touch screen interrupt| P4\_1|

#### 2.7.14 PCIE Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| PCIE| PCIE1\_TX\_P| O| PCIE Data Send+| P2\_78|
| | PCIE1\_TX\_N| O| PCIE Data Send-| P2\_76|
| | PCIE1\_RX\_P| I| PCIE Data Receive+| P2\_72||
| | PCIE1\_RX\_N| I| PCIE Data Receive-| P2\_70|
| | PCIE1\_REFCLK\_P| O| PCIE Clock Output+| P2\_66||
| | PCIE1\_REFCLK\_N| O| PCIE Clock Output-| P2\_64|
| | PCIE1\_WAKEn| I| PCIE wake-up activation signal| P1\_74|
| | PCIE1\_CLKREQn\_M0| O| PCIE clock request signal| P1\_78|
| | PCIE1\_PERSTn| O| PCIE Reset Signal| P1\_64|
| | PCIE1\_PRSN2\_3V3| I| PCIE Card Detection Signal| P2\_77||
| | PCIE\_PWR\_EN\_3V3| O| PCIE 3.3V power enable| P1\_54|
| | PCIE0\_REFCLKN\_M0| O| PCIE Clock Output-| P2\_82||
| | PCIE0\_REFCLKP\_M0| O| PCIE Clock Output+| P2\_84|
| | PCIE0\_TXN\_M0| O| PCIE Data Send-| P2\_88|
| | PCIE0\_TXP\_M0| O| PCIE Data Send+| P2\_90|
| | PCIE0\_RXN\_M0| I| PCIE Data Receive-| P2\_94|
| | PCIE0\_RXP\_M0| I| PCIE Data Receive+| P2\_96|
| | PCIE0\_WAKEn| I| PCIE wake-up activation signal| P1\_76|
| | PCIE0\_CLKREQn\_M0| O| PCIE clock request signal| P4\_37||
| | PCIE0\_PERSTn| O| PCIE Reset Signal| P1\_80|

#### 2.7.15 HDMI Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| HDMI| HDMI\_TX\_HPDIN\_M0\_1V8| I| HDMI Hot Plug Detection| P2\_71||
| | HDMI\_TX\_CEC\_M0| I/O| HDMI\_CEC Recogonition| P1\_52|
| | HDMI\_TX\_SBD\_N| O| HDMI\_SBD(ARC)-| P1\_17||
| | HDMI\_TX\_SBD\_P| O| HDMI\_SBD(ARC)+| P1\_19|
| | HDMI\_TX\_D3\_N| O| HDMI Differential Data 3-| P1\_23|
| | HDMI\_TX\_D3\_P| O| HDMI Differential Data 3+| P1\_25|||
| | HDMI\_TX\_D0\_N| O| HDMI Differential Data 0-| P1\_29||
| | HDMI\_TX\_D0\_P| O| HDMI Differential Data 0+| P1\_31|
| | HDMI\_TX\_D1\_N| O| HDMI Differential Data 1-| P1\_35|
| | HDMI\_TX\_D1\_P| O| HDMI Differential Data 1+| P1\_37|
| | HDMI\_TX\_D2\_N| O| HDMI Differential Data 2-| P1\_41||
| | HDMI\_TX\_D2\_P| O| HDMI Differential Data 2+| P1\_43|
| | HDMI\_TX\_SCL| O| I2C clock| P1\_68|
| | HDMI\_TX\_SDA| I/O| I2C Data| P1\_58|

#### 2.7.16 I2S AUDIO Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| I2S| SAI1\_MCLK\_M1| O| I2S Main Clock| P4\_61|
| | SAI1\_SCLK\_M1| I/O| I2S serial clock| P4\_57|
| | SAI1\_LRCK\_M1| I/O| I2S Left/Right Channel Switching| P2\_37|
| | SAI1\_SDO0\_M1| O| I2S serial data output| P2\_41|
| | SAI1\_SDI0\_M1| I| I2S serial data input| P4\_43|
| | HP\_DET\_L| I| Earphone insert detection| P2\_45|
| | SARADC\_VIN3\_HP\_HOOK| I| Headphone in-line control buttons| P1\_34|

#### 2.7.17 CAN Interface Control Pins

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| CAN0| CAN0\_TX\_M2\_3V3| O| CAN0 data sending| P4\_29|
| | CAN0\_RX\_M2\_3V3| I| CAN0 data receiving| P4\_31|
| CAN3| CAN3\_TX\_M0\_1V8| O| CAN1 data sending| P3\_48|
| | CAN3\_RX\_M0\_1V8| I| CAN1 data receiving| P3\_92|

#### 2.7.18 ADC Control Interface

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| ADC| SARADC\_VIN2\_HW\_ID| I| ADC input| P1\_32|
| | SARADC\_VIN4| I| ADC input| P1\_36|
| | SARADC\_VIN5| I| ADC input| P1\_38|
| | SARADC\_VIN7| I| ADC input| P1\_42|

### 2.8 SoM Hardware Design Description

#### 2.8.1 SoM Circuit Design Guidelines

The FET3572-C SoM integrates power supply and storage circuits into a compact module, requiring minimal external circuitry. To form a minimal system, only a 5-13V power supply, a reset button, a programming SD card, and boot configuration are needed, as illustrated below:   
![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781506331347_2c874845_9ee7_4181_b58a_c19e212987e1.png)Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external peripherals beyond the minimal system. For instance, connecting a debug serial port can be used to view printed information, while reserving an OTG interface allows for debugging information output. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK3572-C Carrier Board Description".

## 3\. OK3572-C Embedded Development Description

### 3.1 OK3572-C Development Board Interface Diagram

Connection method: Board-to-board. 

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503488130_bd711ec1_c8ee_4dbc_89fc_a1cb26d67e38.jpg)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503488593_494c99a7_743b_4bff_93a5_ef3ca4cecbe1.jpg)

### 3.2 OK3572-C Development Board Dimension Diagram

OK3572-C Development Board Dimension Diagram：

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503488796_c9349dee_ad4d_43fa_8b70_3469851f27f6.png)

Carrier Board PCB size: 130mm × 190mm, for more detailed dimensions, please refer to the user information DXF document;

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm;

Plate making process: 1.6mm thickness, 4-layer PCB;

Power Voltage: DC 12V

The antenna bracket is used to mount and secure 4G and 5G antennas. Dimensions: 20mm × 140mm.

The OK3572-C carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 38mm × 38mm × 10mm. See below for details.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1759195475334_74e0d2de_1b14_4865_b9fb_0d2d27069ed0.png)

### 3.3 Naming Rules

ABC-D+IK:M

| **Field**| **Field Description**| **Value**| **Description**|
|:----------:|:----------:|:----------:|:----------:|
| A| Grade| PC| Prototype Sample|
| | | Blank| Mass Production|
| B| Product Line Identification| OK| Forlinx Embedded development board|
| C| CPU Name| RK3572| RK3572|
| \-| Segment Identification| \-|
| D| Connection| Cx| Board to board connector|
| \+| Segment Identification| \+| The configuration parameter section follows this identifier.|
| I| Operating Temperature| I| -40 to 85℃|
| K| PCB Version| 10| V1.0|
| | | xx| Vx.x|
| :M| Internal Identification of the Manufacturer| :X| This is the internal identification of the manufacturer and has no impact on the use.|

### 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 4| The carrier board features 4 x MIPI CSI interfaces:<br />· Supports 2 x MIPI CSI 4-lane interfaces, with the OV13855 camera mounted by default;<br />· Supports 2 x MIPI CSI 4-lane interfaces, with the OV13855 camera mounted by default;<br />· Supports 4 x MIPI CSI 2-lane interfaces, mounting the OV5645 camera instead. |
| MIPI DSI| 1| · The MIPI interface supports 4 lanes output with a maximum resolution of 2560\*1600@60fps;<br />· Suitable for Forlinx 7-inch MIPI screen with resolution of 1024 × 600 @ 30 FPS. |
| HDMI TX| 1| · Led out through a standard HDMI socket;<br />· HDMI V2.1, up to 4096x2160 @ 60Hz. |
| USB2.0| 1| Led out through Type-C interface, supporting OTG and program flashing. |
| USB3.0 HOST| 3| Led out through 3 x Type-A USB|
| PCIe2.0| 2| Connected via a PCIe x1 slot and an M.2 socket;   Supports a data transfer rate of 5 Gbps. |
| Ethernet| 2| Led out via 2 x RJ45 interfaces;<br />Supports 10/100/1000 Mbps data transmission rate. |
| TF card| 1| TF card is available, rate up to 150MHz，support SDR104 mode;|
| Audio| 1| Codec chip on board, support headphone output, MIC input level Speaker output and other functions; |
| CAN| 2| Two CAN bus lines are routed via the CAN transceiver; complies with the CAN and CAN FD specifications;|
| RS485| 2| 2 x RS485 CAN bus routed out through RS485 transceiver;|
| UART| 1| Routed via a 2.44mm pitch connector;|
| 4G/5G| 1| Supports M.2 packaged 4G/5G modules;|
| WIFI\&BT| 1| · On-board AzureWave AW-CM358SM WiFi \& Bluetooth module;<br />· Supports WiFi 2.4 GHz/5 GHz dual-band and Bluetooth 5.0. |
| ADC| 3| · Connected via a 2.44 mm pitch pin header;<br />· 12-bit single-ended input SAR-ADC, with a sampling rate of up to 1 MS/s; |
| RTC| 1| Onboard RTC chip and battery socket;|
| GPIO| 8| 8 x GPIO, 3.3V power, and 1.8V power, all accessible via a 2.44mm pitch header.|

**Note：**

- **The parameters in the table are the theoretical values of hardware design or CPU;**

- **"TBD" means the function has not been developed in this phase.**

### 3.5 OK3572-C Carrier Board Description

**Note: **

- **The component UID with "\_DNP" mark in the diagram below represents it is not soldered by 
  default;**

- **The schematics in this section are provided for convenience and may be subject to changes. Please ensure your design strictly follows the original schematic files.**

#### 3.5.1 Carrier Board Power

It uses a 12V power adapter for the power supply, and the power connector is a DC005 socket. The DIP switch S1 serves as the power switch for the development board. Move the switch in the direction indicated on the carrier board to turn it on or off. A TVS diode is connected in parallel after switch S1 for ESD protection. Fuse F1 provides overcurrent protection. Diode D1 works alongside F1 to offer reverse-connection protection. VCC12V\_DCIN supplies power to both the FET3572 SoM and other peripherals on the carrier board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503488905_7bfb1584_9c42_4315_a746_62ebb2b91bd0.png)

VCC12V\_DCIN is stepped down to VCC\_5V via U3 (DC-DC converter). VCC\_5V powers other peripherals on the carrier board. (Note: When selecting the 12V-to-5V DC-DC chip, ensure its output power is sufficiently high. It is recommended to support an output current of 6A or above to guarantee adequate current supply for downstream stages.)

After the SoM starts up normally with 12V power supply, it outputs a high level via the CARRIER\_BOARD\_EN pin to enable U3, thereby outputting VCC\_5V to power certain peripherals on the development board. (This signal level is 3.3V with a drive capability of 1kΩ pull-up. If the enabled device’s enable pin requires drive capability beyond this range, buffers or gate circuits should be added to enhance drive capability, ensuring proper power-up of both the SoM and the carrier board.)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489129_23532c8a_acf6_46b9_bc0f_a74d149f2552.png)

VCC\_5V is further stepped down to VCC\_3V3 via U4 (DC-DC converter). VCC\_3V3 supplies power to certain devices on the development board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489254_4122e9e6_8488_4da7_b56d_cc8406d379a2.png)

VCC\_3V3 is then stepped down to VCC\_1V8 via U2 (LDO). VCC\_1V8 supplies power to certain devices on the development board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489399_81f71d48_0fb9_4fa8_b41d_27f8523e2307.png)

**Note:**

- **When designing independently, please strictly adhere to the power-up sequencing;**

- **The selection of step-up/step-down converter chips and their external layout must refer to the corresponding chip manuals to ensure proper power return paths.**

#### 3.5.2 Reset and On/Off Signal

RESET\_L is SoM resetting signal input connected to the key for convenient debugging

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489488_964ede35_5840_41b5_9412_f728eed2d05b.png)

PWRON\_L is an On/Off signal input connected to the key for convenient debugging

Additionally, one 2.54mm pitch terminal block is reserved for the PWRON\_L signal, which is left unpopulated by default to facilitate expansion.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489585_da635209_06c1_486a_9467_9b0e2a5a8655.png)

Please pay attention to the PMIC\_VDC signal on pin P3\_10 of the System on Module (SoM) connector. This signal can toggle between two power-on modes for the SoM: automatic power-on boot or button-triggered boot.

On the OK3572-C, this functionality is controlled by the presence of resistor R331:

\- If R331 is not installed (floating pin), the SoM will automatically boot upon power-up (default configuration).

\- If R331 is installed (pulling the pin low), the SoM will not boot immediately after power-on; instead, it will start only after the PWRON\_L button is pressed.

#### 3.5.3 Boot Configuration

RK3572 supports multiple boot modes. After resetting the chip reset, the boot code integrated inside the chip can be booted on the following interface devices, and the specific boot sequence can be selected according to actual application requirements:

·Serial Flash(FSPI0, FSPI1\_M0, FSPI1\_M1)

·eMMC

·UFS

·SDMMC0 Card

If the specified devices do not contain boot code, system code can be downloaded to them through the USB2\_OTG0\_DP/DM signals of the USB2.0 OTG0 interface.

Boot Sequence Selection:

The boot order of the RK3572 can be configured using the SARADC\_VIN0\_BOOT Pin (PIN: P1\_28). By applying different pull-up or pull-down resistor values to this pin, various peripheral boot sequences can be set. The hardware design supports 11 boot modes (Config1–Config11), which are defined below. It is important to select the appropriate configuration based on the specific application requirements.

Table 3.5.3.1 Boot Sequence Configuration 

| **Item**| **Rup**| **Rdown**| **ADC**| **BOOT MODE**|
|:----------:|:----------:|:----------:|:----------:|----------|
| Config1| DNP| 10K| 0| USB (Maskrom mode)|
| Config2| 10K| 1.13K| 416| FSPI0→USB|
| Confi 3| 10K| 2.49K| 816| FSPI1\_M0→EMMC→USB|
| Config4| 10K| 4.3K| 1231| FSPI1\_M1→EMMC→USB|
| Config5| 10K| 6.8K| 1658| FSPI0→UFS→USB|
| Config6| 10K| 10K| 2048| FSPI1\_M0→UFS→USB|
| Config7| 10K| 14.7K| 2437| UFS→USB|
| Config8| 10K| 23.2K| 2862| UFS→SDMMC0→USB|
| Config9| 10K| 40.2K| 3279| EMMC→SDMMC0\_M1→USB|
| Config10| 10K| 88.7K| 3680| EMMC→SDMMC0\_M0→USB|
| Config11| 10K| DNP| 4095| EMMC→USB|

On the SoM, SARADC\_VIN0\_BOOT is configured with a 10 kΩ pull‑up and an 88.7 kΩ pull‑down resistor. Thus, the SoM boots from eMMC by default. Pull-down resistors can be connected in parallel on the carrier board to achieve other sequencing arrangements. OK3572-C connects SARADC\_VIN0\_BOOT to GND via a touch button to enable Maskrom mode.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489682_d3887bbd_55f8_4d4a_93f5_7683dc996dde.png)

SARADC\_ VIN1 is used to enter the recovery state due to a short circuit to the ground, and the SoM pulls it up  to a 1.8V power supply using a 10K resistor. On OK3572-C, the key array adopts a parallel type, which can adjust  the input key value by increasing or decreasing the keys and adjusting the proportion of the voltage divider resistor to achieve multi-key input to meet customer product requirements.

It is recommended in the design that any two key values must be greater than ± 35, i.e. the center voltage difference must be greater than 123mV. As shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1751880014670_c0334437_31a8_4831_8c3a_bca3ff78bb6c.png)

**Note:**

- **When doing key acquisition, ESD protection is required near the keys. And 0 key value must be connected in series with a 100ohm resistor to strengthen the anti-static surge capacity (If there is only one button, ESD must be close to the button, ESD → 100ohm resistor → 1nF → chip pin);**

- **Where there are multiple buttons, place an ESD tube near each button.**

#### 3.5.4 System Initialization Configuration Signal

There is one important signal in the FET3572 that affects the system boot configuration and needs to be  configured and kept in a stable state before power-up:

SDMMC0\_DET\_L (PIN: P3\_90) (default function: SDMMC\_DET): Determines whether the VCCIO1 power domain I/O is configured for SDMMC0 or JTAG functionality.

The JTAG and SDMMC functions of the FET3572 are multiplexed; the IOMUX function is switched via the SDMMC0\_DET\_L pin. Consequently, this pin must also be configured before power-up; otherwise, the absence of an output from the JTAG function will affect debugging during the boot phase, whilst the absence of an output from SDMMC0 will affect the SDMMC0 boot function.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489769_78aae136_56ed_4e6c_bec2_f23249d484b6.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503489902_23f8cba7_1eac_47b5_b47a_113c326a5a83.png)

- If this pin is detected as high, the corresponding I/O pin switches to JTAG mode;
- When this pin detects low level (Most SD cards inserted will pull down this pin, if not need special treatment),  the corresponding IO switches to SDMMC0 function;
- After the system is up, it can be switched to have registers to control IOMUX, then the pin can bereleased;
- For easy reference, the configuration status of this pin corresponds to its function shown as follows:

Table 3.5.4.1 FET3572 System Initialization Configuration Signal Description

| **Signal Name**| **Internal Pull-up\&down**| **Description**|
|:----------:|:----------:|----------|
| SDMMC0\_DET\_L| Pull-up| SDMMC/ARM JTAG pin multiplexing selection control signal: <br />0: An SD card is detected; the SDMMC/JTAG pin is multiplexed for the SDMMC0 function;<br />1: No SD card is detected; the SDMMC/JTAG pin is multiplexed for the JTAG function (Default). |

#### 3.5.5 JTAG and UART Debug Circuits

The JTAG interface on the RK3572 chip complies with the IEEE 1149.1 standard; a PC can connect to the DSTREAM emulator via SWD mode (two-wire mode) to debug the ARM core within the chip.

The JTAG interface is described in the table below:

Table 3.5.5.1 FET3572 JTAG Debug Interface Signals

| **Signal Name**| **Description**|
|:----------:|:----------:|
| JTAG\_TCK\_M0/M1| SWD Mode clock input|
| JTAG\_TMS\_M0/M1| SWD mode data input and output|

The RK3572 has two JTAG multiplexes: JTAG\_TCK\_M0/JTAG\_TMS\_M0 is located in the VCCIO1 domain and is multiplexed with SDMMC0 via the IOMUX; JTAG\_TCK\_M1/JTAG\_TMS\_M1 is located in the PMUIO1 domain and is multiplexed with UART\_Debug—UART0\_M0. The IOMUX multiplexing configuration is shown in the figure below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490084_7d0d3f7d_6445_4d3a_b7bd_458eb616bc7c.png)

The UART Debug is set by default to UART0\_TX\_M0\_DEBUG (P2\_7)/UART0\_RX\_M0\_DEBUG (P2\_9). UART Debug signal needs to be connected with 100ohm resistor in series, if plug-in is used, and TVS tube  
needs to be added near the plug-in position.

To facilitate user debugging, OK3572-C uses a USB to UART chip to convert the UART signal into a USB signal and leads it out through a Type-C socket. Users can connect OK3572-C P16 to PC with USB Type-A to UAB Type-C cable and install a CP2102 driver. The schematic is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490193_0fec7a78_71d0_4be1_a32d_bd6117911bdd.png)

**Note:**

- **For future debugging convenience, route out these debug ports on custom carrier boards;**

- **It is recommended to keep Q1 and Q2, which can effectively prevent the U6 current from flowing back to the CPU through UART0\_TX/RX when the core board is not powered-up, affecting the startup and even causing damage.**

#### 3.5.6 IIC Expanded for IO

To introduce more diverse interfaces, the enable and reset signals of the carrier board are completed by the IIC to IO chip U5. At the same time, the U5 spare part of IO is led by P17 to facilitate user expansion. The principle is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490346_12c241ad_63f4_46c9_b8b9_8ed49218eec0.png)

#### 3.5.7 SARADC Interface

OK3572-C routes SARADC\_VIN4/VIN5/VIN7 via P18; R371 is a variable resistor. By short-circuiting SARADC\_VIN4/VIN5/VIN7 to pins 4 and 6 of P18, the voltage changes can be read via the ADC whilst adjusting the resistance value of the R371 variable resistor. As shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490589_d55162f3_7aa6_44d1_8def_586bc8097b76.png)

**Note:**

**When using the SARADC\_VINx pins, it's essential to add a 1nF capacitor for debouncing as close to the pins as possible. A 1nF capacitor has already been placed near the CPU pins on the SoM, so the carrier board should add one as needed.**

#### 3.5.8 TF Card

The carrier board P20 is a TF Card interface, which can support system boot and burn.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490692_92815255_a0cd_4ac3_b57e_7f3e54c2e5de.png)

**Note:**

- **The power supply to the TF card must be controlled; refer to the carrier board circuit for implementation;**

- **SDIO impedance requirements: Single‑ended impedance: 50 Ω;**

- **Signal length matching tolerance: ±50 mil.**

#### 3.5.9 RTC Circuit

The OK3572-C provides an on-board external RTC function for more accurate timing and lower power consumption. As shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490777_3c0240f0_e5e4_4ae1_814b_021ddb9ed3e8.png)

#### 3.5.10 Ethernet Circuit

The carrier board supports dual 1000/100/10M Ethernet interfaces, which are led out via RJ45.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490874_a2de7e53_95b3_4f4f_be4d_25689fd3891d.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503490969_2b89e4c5_cc6d_4c3a_a4fc_06b4511ddb3a.png)

The RK3572 RGMII/RMII interface design is as follows:

**Table 3.5.10.1 RK3572 RGMII/RMII Interface Design**

| **Signal**| IO Type (chip-side)| **RGMII Interface**| **Signal Description**| **RMII Interface**| **Signal Description**|
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
| GMACx\_TXD\[3:0]| Output| RGMIIxTXD\[3:0]| Data sending| RMIIx\_TXD\[1:0]| Data sending|
| GMACx\_TXCLK| Output| RGMIIx\_TXCLK| Data sending reference clock| --| --|
| GMACx\_TXCTL| Output| RGMIIx\_TXCTL| Data sending enable (rising edge) and data sending error (falling edge)| RMIIx\_TXEN| Data sending enable signal|
| GMACx\_RXD\[3:0]| Input| RGMIIx\_RXD\[3:0]| Data receiving| RMIIx\_RXD\[1:0]| Data receiving|
| GMACx\_RXCLK| Input| RGMIIx\_RXCLK| Data receiving reference clock| --| --|
| GMACx\_RXCTL| Input| RGMIIx\_RXCTL| Data receiving valid (rising edge) and data receiving error (falling edge)| RMIIx\_RXCTL| Data receiving valid and carrier sense|
| GMACx\_MCLKINOUT| Inputs/Outputs| RGMIIx\_MCLKI\_   125M| PHY sends 125MHz to MAC, (optional)| RMII\_MCLKIN\_50M or RMII\_MCLKOUT\_50M| RMII data sending and receiving reference clock|
| ETHx\_REFCLKO\_   25M| Output| ETHx\_REFCLK\_   25M| RK3572 provides 25MHz clock to replace PHY crystal| ETHx\_REFCLKO\_   25M| RK3572 provides 25MHz clock to replace PHY crystal|
| GMACx\_MDC| Output| RGMIIx\_MDC| Managing the data clock| RMIIx\_MDC| Managing the data clock|
| GMACx\_MDIO| Inputs/Outputs| RGMIIx\_MDIO| Managing data output/input| RMIIx\_MDIO| Managing data output/input|

In RGMII mode, the internal TX/RX clock path of RK3572 chip integrates delayline, which supports adjustment; default configuration of the reference chart: the timing between TXCLK and data is controlled by the MAC, the timing between RXCLK and data is controlled by PHY(If using RTL8211F/FI, i.e. RXCLK, 2nS delay is enabled by default, and other PHYs should note this configuration).

The GMAC0 interface operates at 3.3V by default, whilst the GMAC1 interface operates at 1.8V by default (please contact Forlinx if you wish to modify the pin levels). Please ensure that the supply voltage of the RGMII signal power domain on the PHY chip matches the GMACx interface voltage.

Ethernet PHY Reset signal needs to be controlled by GPIO, and the level of GPIO must match the PHY IO level; 100nF capacitor must be added near the PHY pin to strengthen the anti-static capability, note: the reset pin of RTL8211F/FI only supports 3.3V level.

TXD0- TXD3，TXCLK，TXEN need to reserve 0ohm resistors at the FET3572 to improve signal quality according to actual situation.

RXD0- RXD3, RXCLK, RXDV need to be connected with 22ohm resistors in series at the PHY end to improve the signal quality.

When 7.PHY uses an external crystal, please select the crystal capacitance according to the load capacitance value of the actual crystal used, and control the frequency deviation within ±20ppm.

The RSET pin of RTL8211F/FI has an external resistance of 2.49K ohm with an accuracy of 1%, which must not be modified at will.

MDIO must be externally added with a pull-up resistor (recommended 1.5-1.8Kohm), and the pull-up power supply must be consistent with the IO power supply.

PCB Layout needs to ensure the integrity of the RGMII signal reference plane and the PHY chip peripheral power reference plane.

Equivalent length requirement: the receiving and sending of RGMII can be grouped into equal lengths, with an equal length requirement ≤ 12.4 mil.

Impedance requirements: single-ended 50ohm.

#### 3.5.11 RS485 Interface

OK3572-C supports dual RS485 interfaces.

The RS485 transceiver chips U8 and U9 are TDH341S485S, which feature:

Isolation withstand voltage up to 5000 VDC.

Bus ESD protection capability up to 15 kV (HBM).

Transient immunity > 25 kV/µs. Meanwhile, the OK3572-C carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491080_2719e325_b8fb_4994_a00a_4bfac4f868a2.png)

#### 3.5.12 CAN Interface

The FET3572-C SoM supports a maximum of two CAN channels, namely CAN0 and CAN3.

CAN0\_RX\_M2\_3V3 and CAN0\_TX\_M2\_3V3 are native CAN signals directly routed from the CPU to the carrier board.

CAN3\_RX\_M2\_3V3 and CAN3\_TX\_M2\_3V3 are routed through a level‑shifting chip (U1).

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491305_bde989ba_0281_40e5_806c_add5a1a9a985.png)

Compliant with CAN \& CAN FD specifications.

Supports standard \& extended frame transmission.

8192‑bit receive FIFO.

The OK3572-C development board supports two CAN interfaces utilizing isolated CAN transceivers. The isolation withstand voltage is as high as 5000VDC, with bus electrostatic discharge protection capability reaching 15kV (HBM) and a transient immunity of >25kV/μs. Meanwhile, the OK3572-C carrier board is compatible with a higher level of surge pulse group multi-level protection circuit, as shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491465_77805cb3_793b_4638_83ac_eb7e6f3cfe9a.png)

#### 3.5.13 Audio

The OK3572-C has an I2S interface Codec chip U31 on board, which supports MIC input, headphone output, and 1W 8Ω speaker output. The principle shown as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491564_f0bafc56_c7e2_42b0_8272_3bda62640812.png)

#### 3.5.14 4G\&5G Interface

The OK3572-C integrates an M.2 Key-B interface that is compatible with 4G and 5G modules. Since 4G and 5G modules have different power supply voltages, we need to dip S2 to select the corresponding power supply voltage.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491689_31b503da_dbc2_42b7_aaa3_213fb9814971.png)

#### 3.5.15 USB2.0/USB3.0/PCIe2.0/SATA3.0 Circuit

The RK3572 chip features two USB 2.0 PHYs, namely USB2\_PHY0 and USB2\_PHY1.

The RK3572 chip features three COMBO PHYs: COMBO\_PHY0, COMBO\_PHY1, and COMBO\_PHY2.

COMBO\_PHY0 multiplexing options: PCIe0\_M0 / SATA0\_M0 / USB3\_DRD0.

COMBO\_PHY1 multiplexing options: PCIe0\_M1 / SATA0\_M1 / USB3\_DRD1.

Both COMBO\_PHY0 and COMBO\_PHY1 share the controllers PCIe0, SATA0, USB3\_DRD0, and USB3\_DRD1 (as shown in the block diagram below).

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491795_ec2175be_ad61_4f10_b070_7f0908830eb8.png)

From the above block diagram, it can be seen that COMBO\_PHY0 and COMBO\_PHY1 share the same PCIe0 and SATA0 controllers. Therefore, these two PHYs cannot be configured simultaneously for the PCIe0 function or the SATA0 function. Please pay special attention to this constraint:

COMBO\_PHY0 can be configured into the following three modes:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491892_8768b5cf_8df0_4bfc_8ebd_2378bc28ea17.png)

COMBO\_PHY1 can be configured into the following three modes:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503491987_d9608715_9be8_4b8d_9663_0eec4b0676fd.png)

The corresponding SoM pins are as follows:

COMBO\_PHY0：P2\_82, 84, 88, 90, 94, 96

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492251_522fcaa7_9319_4372_bae9_f5df49abcee2.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492346_eda5e51e_97ac_4a7b_b2ef_e57a4a21ca31.png)

COMBO\_PHY1：P2\_83, 85, 89, 91, 95, 97

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492508_35d081c4_41c8_4531_8bb9_02544a19249e.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492609_d4af863e_e072_4b3c_bc63_c6b903d31cab.png)

COMBO\_PHY2 multiplexing with PCIe1/SATA1

The controller corresponding to COMBO \_ PHY2 is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492711_81786df1_d6d2_49e8_84c1_fd6aeee7baaa.png)

COMBO \_ PHY2 can be configured in the following two cases:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492873_47c62a12_6065_46cd_9cf5_87a568835dd2.png)

The corresponding SoM pins are as follows: P2 \_ 64, 66, 70, 72, 76, 78.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503492974_bc475bba_ddc4_4e92_872a_69cfee66da33.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493131_25ce529c_6abf_428c_b4cc_a971919d46e1.png)

The default configuration of the OK3572-C:

COMBO\_PHY0：PCIe0\_M0;

COMBO\_PHY1：USB3\_DRD1;

COMBO\_PHY2：PCIe1;

PCIe0 \_ M0 is led out through M.2 interface, as shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493228_1138e718_2282_4af5_85a1_955e1824f61a.png)

PCIe1 is led out via PCIe X 1 slot:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493327_44f9fe95_df5e_43c5_b4f1_4a30ba3fe644.png)

USB3\_DRD1 and USB2\_DRD1 are combined to form a complete USB3 interface. This interface is connected to an external USB HUB chip for USB port expansion.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493414_6fc61337_28fb_409a_a8b8_9be9a32dc419.png)

All three USB 3.0 ports on the USB hub chip are equipped with USB power-supply current-limiting switch chips, providing a stable power supply and current-limiting protection for the Type-A ports:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493508_6f55ba1d_b5bf_4e7c_bd57_f766ed2b9fe8.png)

**Note:**

- **All USB data cables must be designed with a differential impedance of 90Ω;**

- **Please select suitable ESD protection components.**

USB2\_DRD0 is routed via a standard Type-C interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493681_55c17600_1eed_4a0f_942f_c5a1be257e09.png)

**Note: USB\_DRD0\_DP/USB\_DRD0\_DM supports firmware download. If the product does not utilise this interface, it must be left accessible during debugging and production. Please note: USB2\_OTG0\_VBUSDET must also be connected!**

**USB Design Note：**

- **USB\_DRD0\_DP/USB\_DRD0\_DM is the system firmware programming port. If the product does not use this interface, it must be reserved during debugging and production; otherwise, debugging and firmware burning will not be possible;**

- **USB\_DRD0\_ID features an internal pull-up resistor of approximately 12 kΩ to 1.8 V;**

- **USB\_DRD0\_VBUSDET is the OTG and Device mode detection pin; the chip contains an internal 40 kΩ pull-down resistor. A high level indicates DEVICE mode (2.7–3.3 V, typical: 3.0 V); it is recommended to place a 100 nF capacitor on this pin;**

- **OTG mode can be configured as follows:**

   **∘ OTG mode: Automatically switches between device and host   based on the ID pin.**

  **ID high → device mode.**

  **ID low → host mode.**

**In device mode, VBUSDET must be high (> 2.3 V) to pull up DP and start enumeration.**

 **∘ Device mode: ID pin is ignored; only VBUSDET needs to be high (> 2.3 V) to enable DP pull-up and enumeration;**

 **∘ HOST mode: In this mode, you don't need to worry about the ID or VBUSDET status. Note: Even if only host mode is required, USB\_DRD0\_DP/DM is still needed for firmware burning and debugging. Therefore, in burning and ADB debugging phases, device mode must be configured, and USB\_DRD0\_VBUSDET must be connected.**

**For a Type‑C interface, pull USB\_DRD0\_VBUSDET high to 3.3 V through a 4.7 K resistor.**

- **ESD protection is mandatory on all signals. For USB 2.0 signals, ESD parasitic capacitance must not exceed 3 pF. Additionally, series 2.2 Ω resistors should be placed on DP/DM to enhance ESD and surge immunity;**

- **To suppress EMI, a common‑mode choke can be reserved on signal lines. During debugging, choose either a resistor or a choke based on actual conditions;**

- **If the USB\_DRD0\_ID signal is used, ESD protection components must be incorporated into the signal to enhance its resistance to static electricity and surges, and a 100 ohm resistor must be connected in series; these components must not be omitted;**

- **In Host mode, it is recommended to add a current‑limiting switch on the 5 V power rail. The limit can be adjusted as needed. Control the switch with a 3.3 V GPIO. Also add filtering capacitors: ≥ 22 µF and ≥ 100 nF. If a portable HDD may be connected, increase the capacitance to ≥ 100 µF;**

- **The TYPEC protocol requires the addition of a 100 nF AC-coupling capacitor on the SSTXP/N line. It is recommended that the AC-coupling capacitor be in a 0201 package, as this offers lower ESR and ESL, thereby reducing impedance variations on the circuit;**

- **All signals of the Type‑C connector must have ESD protection placed as close as possible to the connector;**

- **USB 2.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 10 mil;**

- **USB 3.0 differential impedance: 90 Ω ± 10 %, intra‑pair skew \< 3 mil;**

**SATA Design Note：**

- **Peripheral circuits and power supplies must meet the specification requirements in Slot design;**
- **A single SATA interface connected to a SATA Port Multiplier supports at most 5 ports; it does not support multiple multipliers exceeding 6 ports in total;**
- **On SATA TXP/N and RXP/N differential pairs, 10 nF AC‑coupling capacitors are required. Use 0201‑size capacitors for lower ESR/ESL and reduced impedance variation;**
- **All signals of an eSATA connector must have ESD protection placed close to the connector. The ESD parasitic capacitance must not exceed 0.4 pF.**

**PCIe2.1 Design Note:**

- **Peripheral circuits and power supplies must meet the specification requirements in Slot design;**

- **A 100nF AC coupling capacitor must be connected in series on the TXP/N differential signal lines of the PCIe 2.1 interface. It is recommended to use 0201 package size capacitors for the AC coupling, as they have lower ESR and ESL, which also helps reduce impedance variations on the trace;**

- **The PCIE0/1\_CLKREQN pin must be used as a dedicated function pin and cannot be replaced by a GPIO;**

- **For the signals PCIE0/1\_PERSTN, WAKEN, and PRSNT on the RK3572, no specific dedicated I/O are assigned. Standard GPIO with compatible voltage levels can be used directly as control function pins;**

- **In a standard PCIe slot, the signals PCIEx\_CLKREQN, PCIEx\_WAKEN, and PCIEx\_PERSTN operate at 3.3V logic levels. Ensure proper voltage level matching is implemented on the RK3572 side accordingly;**

- **When the PCIe function is enabled, the multiplexed SATA and USB functions cannot be used at the same time. For more information on the respective SATA and USB functions, please refer to the module specifications;**

- **If the PCIe 2.1 function module is not used, please follow these guidelines:**

  **∘ Leave the data lines (PCIE0/1_TXP/TXN and PCIE0/1_RXP/RXN) and the reference clock lines (PCIE0/1_REFCLKP/REFCLKN) unconnected (floating);**

  **∘ Ground the two power rails, AVDD0V85 and AVDD1V8;**

  **∘ Ensure that the corresponding device tree (DTS) configuration is disabled in the software.**

- **The recommended interface matching design for PCIe 2.1 is as shown in the following table:**

| **Signal**| **Connection**| **Description**|
|----------|----------|----------|
| **PCIE0/1\_TXP/TXN**| **Series-connected 100nF capacitor (0201 package recommended).**| **PCIe data output**|
| **PCIE0/1\_RXP/RXN**| **Direct connection**| **PCIe data input**|
| **.PCIE0/1\_REFCLKP/CLKN**| **Direct connection**| **PCIe reference clock**|
| **PCIE0/1\_CLKREQN**| **Connect 0ohm resistor in series**| **PCIe reference clock(RC mode)**|
| **PCIE0/1\_WAKEN**| **Connect 0ohm resistor in series**| **PCIe wake-up input (RC mode)**|
| **PCIE0/1\_PERSTN**| **Connect 0ohm resistor in series**| **PCIe global reset output (RC mode)**|
| **PCIE0/1\_PRSNT**| **Connect 0ohm resistor in series**| **Add In Card insertion detection input (RC mode)**|
| **PCIE\_BUTTONRSTN (not in use right now )** | **It’s no use; there’s no need to connect.**| **External physical Reset of the PCIe Controller**|

- **Data routing impedance control differential 85ohm ±10%;**
- **Clock routing impedance control differential 100ohm±10%;**
- **Inter-Pair Skew maximum ＜3mil;**
- **Differential pair space is better than or equal to 4 times the PCI-E line width.**

#### 3.5.16 Video Input Interface

FET3572 has two MIPI DPHY CSI RX, both support MIPI V1.2 version, the maximum data rate of each channel is 2.5Gbps.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493771_c44b83a5_747f_41ea_98fc_6575bcc53427.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503493892_af7f9699_1b0c_45a3_9479_15be81875542.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494021_9f11550c_00bf_4170_be94_5d103021729f.png)

**MIPI DPHY CSI0 / 1 RX interface** **mode:**

- Support 4Lane mode, MIPI\_DPHY\_CSI0\_RX\_D\[3:0] data reference MIPI\_DPHY\_CSI0\_RX\_CLK
- Support 2Lane+2Lane mode:

MIPI DPHY CSI0\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI0\_RX\_CLK

MIPI DPHY CSI1\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI1\_RX\_CLK

**MIPI DPHY CSI2 / 3 RX interface mode:**

- Support 4Lane mode, MIPI\_DPHY\_CSI2\_RX\_D\[3:0] data reference MIPI\_DPHY\_CSI2\_RX\_CLK
- Support 2Lane+2Lane mode:

MIPI DPHY CSI2\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI2\_RX\_CLK

MIPI DPHY CSI3\_RX\_D\[1:0] data reference MIPI\_DPHY\_CSI3\_RX\_CLK

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494123_778612fd_f10c_4e77_b1b7_1fe5d1ad335f.png)

The OK3572-C is configured with four Camera interfaces by default. For user convenience during debugging, two switch chips (U45 and U52) are used on the carrier board to group the signals, as shown in the circuit diagram below:

Additionally, resistors R105, R106, R127, and R140 are reserved to enable switching of the DVDD voltage for P23 and P45. The default setting is 1.2V, but you can select either 1.2V or 1.5V based on your actual requirements.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494331_0fc0474f_6510_408f_871f_5f3a3d2e7497.png)

The schematic diagram of the four camera interfaces is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494469_f74e76d6_81c4_4069_9a32_f22d0ee4b6c7.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494634_19a9f4a4_98d2_4760_b9fb_078af03dee33.png)![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494724_9b0d85d6_5e7b_4357_85c7_5c4f0083c851.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494826_daaf63d8_bf21_4631_9b18_b42e6427f746.png)

**Please note in the MIPI RX design:**

- **Routing impedance required differential 100ohm±10%;**
- **Routing impedance required at single end 50ohn ± 10%**
- **Inter-Pair Skew maximum ＜3mil;**
- **Equivalent length between clock and data \< 6 mil;**
- **Differential pair space is better ＞4 times MIPI line space, and at least 3 times MIPI line width.**
- **The space between MIPI and other signal is better > 4 times MIPI line width and at least 3 times MIPI line width;**
- **When it is configured as CPHY, the maximum inter-group delay difference \<3mil (TRIO\_A\\TRIO\_B\\TRIO\_C);**
- **Inter-group (TRIO0\\TRIO1\\TRIO2) equal length requirement \<50mil.**

#### 3.5.17 Video Output Interface

The RK3572 chip features a VOP (Video Output Processor), which reads video data and UI data from the frame buffer in system memory, performs corresponding processing (such as cropping, color space conversion, scaling, and overlaying), and outputs the processed data to each high-speed display interface.

It features 2 Port outputs and can output through video interfaces including EBC, HDMI/eDP, MIPI DSI, and LCDC (Parallel Interface).

Maximum video output capabilities:

Supports dual-screen independent display configurations, for example, one screen at 4096x2160@60Hz and another at 1920x1080@60Hz.

VOP and video interface output path diagram:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503494915_ac2f78ba_3b6c_47f4_8a69_c9ecb78630f5.png)

The OK3572-C development board supports two display output interfaces: MIPI\_DSI and HDMI.

#### **3.5.17.1 MIPI\_DSI Interface**

FET3572 features one MIPI D- PHY TX：

D-PHY supports version 1.2 D-PHY modes include 0, 1, 2 and 3 lanes, with two wires per lane; the maximum data rate is 2.5 Gbps per lane.

MIPI\_DPHY\_TX supports a maximum resolution of 2560x1600@60Hz.

Corresponding SoM connectors: P3\_57, 59, 63, 65, 69, 71, 75, 77, 81, 83

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495009_0243f205_70c3_4096_aa70_7c8cb6d87512.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495099_fcd9322e_6e08_4a90_a19b_706e8b77cbfd.png)

**Please note in design:**

- **Routing impedance control differential 100ohm ± 10%;**
- **Inter-Pair Skew maximum ＜3mil;**
- **Equivalent length between clock and data \< 6 mil;**
- **Differential inter-pair space is recommended to be more than or equal to 4 times the MIPI line width, and at least 3 times MIPI line width;**
- **MIPI and other signal space is recommended to be more than or equal to 4 times the MIPI line width, and at least 3 times MIPI line width;**
- **When it is configured as CPHY, single-ended routing impedance control 50ohm ±10%;**
- **The inter-group delay difference is \<3mil (TRIO0\\TRIO1\\TRIO2);**
- **Inter-group (TRIO0\\TRIO1\\TRIO2) equal length requirement \<50mil;**
- **The number of permissible holes for each signal is recommended to be no more than 2;**
- **The inter-pair space is recommended to be more than or equal to 4 times the MIPI line width;**
- **MIPI and other signal space is recommended to be more than or equal to 4 times the MIPI line width.**

#### **3.5.17.2 HDMI\_TX Interface**

The RK3572 integrates an HDMI/eDP TX Combo PHY.

HDMI/eDP TX Combo PHY supports the following two modes:

- HDMI TX Mode: Supports up to HDMI 2.1, including the HDMI FRL mode with backward compatibility for HDMI TMDS mode. It supports formats such as RGB/YUV444/YUV422/YUV420 (up to 10-bit);
- eDP TX Mode: Supports up to eDP 1.3, with a maximum resolution of 4K@60Hz. It supports RGB/YUV444/YUV422 (up to 10-bit) formats.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495188_d27e9a1f_c080_4303_8f65_dce88909834c.png)

RK3572 supports HDMI 2.1 and downward for HDMI 2.0, compatible with HDMI 1.4. Because HDMI 2.1 works in FRL mode and works in TMDS mode, when switching to HDMI 2.0 and below, it will work in TMDS mode, so the AC coupled voltage mode driver is used.

As shown in the figure below, the AC coupling capacitor capacitance is 220nF, which cannot be changed at will; because the lower ESR and ESL can also reduce the impedance change on the line, it is recommended to use the 0201 packaging for the AC coupling capacitor.

When operating in HDMI 2.1 mode, HDMI\_TX\_ON\_H is configured to low level, and transistors Q15, Q16, Q17, Q18 are turned off.

When operating in HDMI 2.0 or lower mode, HDMI\_TX\_ON\_H is configured to high level, and transistors Q15, Q16, Q17, Q18 are turned on. The 499ohm resistors to ground form a DC bias of approximately 3V with the 50ohm pull-up resistors on the sink side.

**Please note in design:**

**If it only needs to support HDMI 2.0 and below mode, Q15, Q16, Q17, and Q18 also can not be omitted; it needs to ensure that the machine is not power-on, the tube can not be on, as HDMI CTS Test ID 7-3 TMDS Voff test item requires that the DUT is not power-on, Voff voltage must be within AVcc +- 10mV, or this test item can not pass.**

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495284_6af859e0_17bb_467a_a557_d931681eff3f.png)

FRL mode: In the traditional TMDS architecture, a separate channel is used to transmit the Clock. But in the FRL architecture, the Clock is embedded in the Data channel, and the Clock is resolved at the Sink side through the Clock Recovery.

FRL rate vs. channel relationship:

| **Channel Rate**| **Channel Quantity**|
|:----------:|:----------:|
| 3Gbps| 3|||
| 6Gbps| 3||
| 6Gbps| 4|
| 8Gbps| 4|
| 10Gbps| 4|
| 12Gbps| 4|

ARC/eARC is supported by routing the HDMI\_TX\_SBD\_P/ HDMI\_TX\_SBD\_N signals to the internal RK3572 for audio data extraction.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495390_c05af63e_b6f2_47b0_855f_c0e84b87e4f7.png)

HDMI\_TX\_HPD is the HDMI TX controller’s Hot Plug Detect signal, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

HDMI\_TX\_CEC is the HDMI controller’s Consumer Electronics Control function, multiplexed onto a standard GPIO. Its logic level corresponds to the voltage of its assigned power domain. If the power supply voltage of this domain is changed, the pull-up resistor voltage on the external circuit must be adjusted accordingly.

The CEC protocol specifies a 3.3V level. However, the protocol requires that the leakage should not exceed 1.8uA when adding 3.3V to the CEC pin through a 27K resistor.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1751880014995_370ec6fa_918a_47e7_8d07_ce829b7d9407.png)

RK3572 IO Domain Leakage will occur if there is a voltage at IO in the power-down state. For example, the RK3572 is a power failure, and its HDMI cable is in connection to the Sink side (TV or monitor); meanwhile, the CEC at the Sink side has power and leaks through the HDMI cable to the RK3572 IO, which will cause the CEC to leak more than 1.8uA, so an external isolation circuit is necessary. We can not modify the R189 resistance at will, and we need to use 27Kohm, Q19 default, and selection 2SK3018. If needing to change other models, the junction capacitor must be the equivalent, if not, it will not only affect the work but will also affect the certification through.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495502_422654b0_beaf_4ee1_988a_d164a0a2ad58.png)

HDMI\_TX\_SCL and HDMI\_TX\_SDA are the I2C/DDC buses of the HDMI transmitter (TX) controller. Their functions are multiplexed onto standard GPIO pins. The voltage levels for these signals depend on the power domain’s supply voltage. If the supply voltage of the power domain changes, the power supply for the pull-up resistors in the peripheral circuitry must also be adjusted accordingly.

Although the DDC\_SCL/DDC\_SDA protocol specifies a 5V level, the RK3572 IO does not support a 5V level, so the level conversion circuit need to be added and can not be deleted. The default is to use MOS tube level conversion, and the MOS type is 2SK3018; If the model needs to be changed, the junction capacitance must be equivalent, because the junction capacitance is too large, not only affecting the work and also affect the certification leading to failing certification.

It is recommended to refer to the default value for the pull-up resistance and not to modify it arbitrarily.

The D6 diode cannot be removed and is used to prevent leakage from the Sink side to VCC\_5V0.

1K in series between MOS gate for SDA signal level conversion and power supply; A 100pF is connected in parallel between the MOS gate and source to improve the timing and can not be removed.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_User_Hardware_Manual/1781503495605_cd77dfa8_65ff_411a_b349_716fa613bbb7.png)

HDMI holder Pin18 voltage needs to be kept between 4.8-5.3V, 1uF decoupling capacitor needs to be placed on the pin, which must not be deleted, and the layout is placed close to the HDMI holder pin.

To strengthen the anti-static capability, ESD devices must be reserved on the signal. ESD parasitic capacitance of HDMI2.1 signal must not exceed 0.2pF.

ESD parasitic capacitance for other signals is recommended to use no more than 1pF.

**Please note in design:**

- **Control MOS tube Coss can not be too large, otherwise it will affect the signal quality, it is recommended to follow the reference chart model or the corresponding Coss value;**

- **Routing impedance control differential 100ohm ± 10%;**

- **Inter-Pair Skew maximum ＜3mil;**

- **Differential inter-pair equivalence requirement \<200mil;**

- **Differential inter-pairccccccc space is recommended to be more than or equal to 7 times the HDMI line width;**

- **HDMI and other signal space is recommended to be more than or equal to 7 times the HDMI line width;**

- **It is recommended not to add an over-hole;**

- **I/O capacitance to ground does not exceed 0.2pF.**

#### 3.5.18 WIFI/BT Module Circuit

The OK3572-C board comes with an on-board AzureWave AW-CM358SM WIFI \& BT module, supporting Wi-Fi 2.4G/5G and Bluetooth 5.0. The Wi-Fi/BT antenna is connected via an SMA interface, and the module interfaces with the main controller through SDIO, PDM, and UART.

**Note: In low-power application scenarios, if you need to maintain the Wi-Fi module’s network connection during the process of putting the RK3572 into sleep mode and then waking it up (without requiring the Wi-Fi module to reconnect), it is necessary to power the Wi-Fi module’s 3.3V and 1.8V supplies from a dedicated 12V input power source. You can refer to this specific design in the OK3572-C.**

The schematic is as follows:

**Note:**

- **The power supply to the WIFI card must be controlled; refer to the carrier board circuit for implementation;**

- **SDIO impedance requirements: Single‑ended impedance: 50 Ω;**

- **Signal length matching tolerance: ±50 mil.**

  

## 4\. Hardware Design Guide

**I2C Requirements**

- Multiple slave devices can be connected to a single I2C bus. Ensure there are no address conflicts;
- The I2C bus must be equipped with pull-up resistors, but avoid using multiple resistors for pull-up;
- Ensure level matching between the I2C on the core board and the I2C of the slave devices.

**USB Design**

- To meet USB eye diagram requirements, the PCB trace length for USB 3.0 TX/RX should not exceed 6 inches;
- Unused signal pins on the core board can be left floating, but all GND connections must be properly established.

**Power-on Sequence**

- When designing the carrier board, it is strongly recommended to reference the development board design by using the CARRIER_BOARD_EN signal output from the core board as the enable for the carrier board’s power-on sequence. Strictly control the power-on timing; failure to do so may result in the following issues:
  · Excessive inrush current during power-on.
  · Device failure to boot.
  · In the worst-case scenario, irreversible damage to the processor.
## 5\. Hardware Design Guide

The SoM connector specifications are as follows:  

A = 21.52 mm, B = 19.6 mm, C = 3.2 mm, Contacts = 100.

  ![](image.png)

The corresponding carrier board connector specifications are as follows:  

A = 22.6 mm, B = 19.6 mm, C = 3.2 mm, D = 1.45 mm, Contacts = 100.

## ![](image-1783387943563.png)6\. OK3572-C Development Board Power Consumption Table 

**Table 1 Power Consumption under Linux**

| **No.**| **Item**| **SoM Power (W)**| **Development Board Power (including SoM) (W)**|
|:----------:|:----------:|:----------:|:----------:|
| 1| No-load startup peak power| 3.84| 5.76|
| 2| No-load standby power| 1.32| 3|
| 3| CPU+GPU+Memory+eMMC pressure test| 4.8| 6.36|
| 4| 7-inch LCD screen + 4G + U disk + video decoding| 2.4| 9.84|
| 5| 7-inch LCD screen + 4G + U disk + video encoding| 2.28| 9.6|
| 6| Pwron Key （Long press)| 0.0048| 0.0048|
| 7| Pwron Key （Short press)| 0.6| 2.16|

**Note：**

- **Test conditions: The SoM configuration is 8GB memory+64GB eMMC, the 4G module is Quectel EM05-CN, and the screen is an Forlinx optional product. SoM power supply: 12V; and the carrier board is 12V;**
- **Peak Power: The peak current during the startup process multiplied by the supply voltage;**
- **Standby Power: The current value while the device remains on the startup interface after booting, multiplied by the supply voltage;**
- **Power consumption is for reference only**