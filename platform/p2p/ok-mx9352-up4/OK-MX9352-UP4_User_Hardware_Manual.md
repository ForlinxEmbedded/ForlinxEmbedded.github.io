# User’s Hardware Manual\_V1.0

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware design guidelines, please refer to Forlinx's “OK-MX9352-UP4 Pin Multiplexing Comparison Table" and "OK-MX9352-UP4 Design Guide".

There are four main chapters:

+ Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;
+ Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;
+ Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;
+ Chapter 4. describes the product's power consumption and other considerations.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section. |
| ️️🛤️ | Related paths.|

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| Revision History |
|:----------:|:----------:|:----------:|:----------:|----------|
| 17/07/2026| V1.0| V1.1| V1.3 and above| Initial Version|

## 1\. i. MX 93 Description

The i.MX 93 series represents NXP’s latest power‑optimized processors, designed for smart home, building automation, touchless HMI, IoT edge, and industrial applications.   
The i.MX 93 integrates a powerful dual‑core Arm® Cortex®‑A55 CPU running at up to 1.7 GHz, along with a dedicated neural processing unit (NPU) to accelerate machine‑learning inference. An Arm® Cortex®‑M33 core operating at up to 250 MHz handles real‑time, low‑power processing tasks. Robust control networks can be built through the integrated CAN‑FD interface. Furthermore, dual 1 Gbps Ethernet controllers—with one supporting Time‑Sensitive Networking (TSN)—enable low‑latency gateway applications.   
The i.MX 93 is particularly well‑suited for:   
• Smart Home

• Building Control

• Touchless Human‑Machine Interfaces

• Commercial Systems　　　

**i.MX 93 Processor**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270593225-6873e889-4af2-4184-91f4-f0f6a924dac8.png)

## 2\. FET-MX9352-UP4 SoM Description

### 2.1 FET-MX9352-UP4 Appearance Diagram

**Front**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270594966-d37454d9-fa8b-4133-958b-5c32a81d2197.png)

**Back**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270595224-d3259adb-6d7f-418f-868a-acc405bdb65e.png)

### 2.2 FET-MX9352-UP4 SoM Dimension Diagram

![](2.png)

Dimensions: 40mm × 40mm, dimensional tolerance ±0.13mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

### 2.3 Performance Parameter

#### 2.3.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|:--------:|----------|----------|:----------:|
| | **Minimum** | **Typical** | **Maximum**| **Unit**||
| System Frequency| —| —| 1.7| GHz| —|
| System RTC| —| 32.768| —| KHz| —|

#### 2.3.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Main Power Voltage| VSYS| 4.5| 5| 5.5| V| —|
| No-load current| —| | | | mA| Please refer to the power consumption table in the appendix|
| Overload current| —| | | | mA| Please refer to the power consumption table in the appendix|

#### 2.3.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Operating Temperature| Working Environment| -40| 25| +85| ℃| Industrial Level|
| | Storage Environment| -40| 25| +125| ℃||
| Humidity| Working Environment| 10| —| 90| ％RH| No Condensation|
| | Storage Environment| 5| —| 95| ％RH||

#### 2.3.4 SoM ESD Features

| **Parameter**| **Specification**| | | | **Description**|
|:----------:|:----------:|:--------:|----------|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Human Body Model (HBM)| —| ±1000| —| V| —|
| Charged Device Model (CDM)| —| ±250| —| V| —|

### 2.4 Interface Resources

#### 2.4.1 FET-MX9352-UP4 SoM Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 1| MIPI CSI-2 Controller Key Features：  <br />• Compliant with MIPI CSI-2 v1.3 and MIPI D-PHY v1.2 specifications;<br />• Supports up to 2 Rx data lanes plus 1 Rx clock lane;<br />• Pixel clock up to 200 MHz (for both nominal and overdrive voltages);<br />• Supports up to approximately 150 Megapixels per second;<br />• Data rate per lane ranges from 80 Mbps to 1.5 Gbps;<br />• Supports low-power operation at a data rate of 10 Mbps. |
| Ethernet| 2| Supports 2 x RGMII interfaces, compliant with the IEEE 802.02 standard; <br />1 x supports TSN, and both support the IEEE 1588 standard. |
| LCD| 1| 24-bit parallel RGB up to 1366x768p60 or 1280x800p60.|
| LVDS| 1| Single channel (4-lane), supporting 720p60, up to 1366x768p60 1280x800p60.|
| MIPI DSI| 1| MIPI DSI Controller Key Features:  <br />• Supports a 4-lane MIPI DSI display with pixel data sourced from the LCDIF;<br />• Compliant with MIPI DSI v1.2 and MIPI D-PHY v1.2 specifications;<br />• Supports high resolutions such as 1080p60 or 1920x1200p60;<br />• Maximum data rate per lane is 1.5 Gbps. |
| JTAG| 1| The JTAG is led out through 2 x 4 2.54mm spacing pin from the development board.|
| SD/SDIO| 2| uSDHC2 is a 4-bit SD Card 3.0-compatible 200 MHz SDR signalling standard, <br />supporting speeds of up to 100 MB/s; uSDHC3 is a 4-bit SDIO 3.0 standard. |
| USB| 2| The CPU features two USB 2.0 controllers with integrated PHYs, <br />supporting master-slave switching. |
| I2C| 3| Supported I2C Modes and Maximum Speeds:<br />• Standard Mode: Up to 100 Kbit/s<br />• Fast Mode: Up to 400 Kbit/s<br />• Fast Mode Plus: Up to 1,000 Kbit/s<br />• High-Speed Mode: Up to 3,400 Kbit/s<br />• Ultra-Fast Mode: Up to 5,000 Kbit/s<br />• Slave Mode supports High-Speed and Ultra-Fast Modes. |
| CAN-FD| 1| The CAN-FD module is a CAN protocol controller compliant with ISO11898-1 and CAN 2.0B.|
| ADC| 4| This ADC is a 12-bit, 4-channel, 1 MS/s ADC.|
| PWM| 3| Timer/PWM Module:<br />16-bit counter supporting free-running or module count modes, with up or down counting capability. <br />Configurable for multiple functions: <br />Input Capture, Output Compare, Edge-Aligned PWM, or Center-Aligned PWM. |
| I2S| 1| Sampling rates range from 8 kHz to 384 kHz|

### 2.4.2 CPU Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| ≤1| MIPI CSI-2 Controller Key Features：    <br />• Compliant with MIPI CSI-2 v1.3 and MIPI D-PHY v1.2 specifications;<br />• Supports up to 2 Rx data lanes plus 1 Rx clock lane;<br />• Pixel clock up to 200 MHz (for both nominal and overdrive voltages);<br />• Supports up to approximately 150 Megapixels per second;<br />• Data rate per lane ranges from 80 Mbps to 1.5 Gbps;<br />• Supports low-power operation at a data rate of 10 Mbps. |
| Ethernet| ≤2| Supports 2 x RGMII interfaces, compliant with the IEEE 802.02 standard; <br />1 x supports TSN, and both support the IEEE 1588 standard. |
| LCD| ≤1| 24-bit parallel RGB up to 1366x768p60 or 1280x800p60.|
| LVDS| ≤1| Single channel (4-lane), supporting 720p60, up to 1366x768p60 1280x800p60.|
| MIPI DSI| ≤1| MIPI DSI Controller Key Features:    <br />• Supports a 4-lane MIPI DSI display with pixel data sourced from the LCDIF;<br />• Compliant with MIPI DSI v1.2 and MIPI D-PHY v1.2 specifications;<br />• Supports high resolutions such as 1080p60 or 1920x1200p60;<br />• Maximum data rate per lane is 1.5 Gbps. |
| SAI| ≤3| Synchronous Audio Interface (SAI) :<br />• SAI1 supports 2 channels;<br />• SAI2 supports 4 channels;<br />• SAI3 supports 1 channel;<br />• Full-duplex serial interfaces supporting frame synchronization, such as I2S, AC97, TDM, and codec/DSP interfaces. |
| JTAG| ≤1| The JTAG is led out through 2 x 4 2.54mm spacing pin from the development board.|
| SD/SDIO| ≤2| uSDHC1 is used internally on the SoM; <br />The uSDHC2 is 4-bit SD card 3.0 compatible with 200 MHz SDR signaling and supports up to 100MB/sec; <br />The uSDHC3 is 4-bit SDIO 3.0. |
| USB| ≤2| The CPU features two USB 2.0 controllers with integrated PHYs, supporting master-slave switching.|
| I3C| ≤2| Two modified integrated circuit (I3C) modules. <br />The I3C is a serial interface for connecting peripheral devices and application processors. <br />Supports 400Kbit/s Fast Mode and 1000Kbit/s Fast Mode Plus. <br />Backward compatible with I2C. |
| SPI| ≤8| Supports master-slave mode configuration.|
| I2C| ≤8| Supported I2C Modes and Maximum Speeds:<br />• Standard Mode: Up to 100 Kbit/s<br />• Fast Mode: Up to 400 Kbit/s<br />• Fast Mode Plus: Up to 1,000 Kbit/s<br />• High-Speed Mode: Up to 3,400 Kbit/s<br />• Ultra-Fast Mode: Up to 5,000 Kbit/s<br />• Slave Mode supports High-Speed and Ultra-Fast Modes. |
| UART| ≤8| Baud rate up to 5Mbps.|
| CAN-FD| ≤2| The CAN-FD module is a CAN protocol controller compliant with ISO11898-1 and CAN 2.0B.|
| MQS| ≤2| MQS (Medium Quality Sound) is used to generate mediate-quality audio via GPIO. <br />It allows users to connect stereo speakers or headphones to a power amplifier without an additional audio chip. |
| ADC| ≤4| This ADC is a 12-bit, 4-channel, 1 MS/s ADC.|
| PDM| ≤3| It is a 24-bit PDM module with linear phase response that supports high AOP microphones for audio quality applications.|
| TPM| ≤6| Timer/PWM Module:<br />16-bit counter supporting free-running or modulo count modes, with up or down counting capability. <br />Configurable for multiple functions: Input Capture, Output Compare, Edge-Aligned PWM, or Center-Aligned PWM. |

**Note：**

- **The parameters in the table are the theoretical values of hardware design or CPU;**
- **For compatibility considerations, please refer to Section 2.6 for design guidance.**

### 2.5 UP4 SoM Pin Definitions

#### 2.5.1 UP4 SoM Pin Schematic

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270595572-a09932e0-176c-4858-a776-e512720cfe76.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270595730-b24c1fb7-15d7-4871-b2a3-81c68a0abcf9.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270595924-cb31b9b9-a99c-4384-8560-2565a546502a.png)

#### 2.5.2 UP4 SoM Pin Function Description

For various functional expansion requirements, please refer to the user document "UP4 Pin Definition Table". However, for more detailed information, it is recommended that you consult the relevant documentation, the chip datasheet, and the reference manual.

### 2.6 FET-MX9352-UP4 SoM Pin Definitions

| **UP4 Standard Interface Functions**| **FET-MX93xx-UP4 Pinout Functions**|
|:----------:|:----------:|
| EXTP\_EN| EXTP\_EN|
| STANDBY| NC|
| nRESET| SYS\_nRST|
| WAKEUP| NC|
| PWRON| A19\_ONOFF|
| BOOT0/BOOT1| BOOT0/BOOT1|
| FORCE\_USBLOAD| USBLOAD|
| POR\_B| A16\_POR\_B|
| GPADC\_A/B/C| ADC\_IN0/1/2|
| LRADC| ADC\_IN3|
| SPI\_A| NC|
| SPI\_B| NC|
| CAN\_A| CAN1|
| CAN\_B| NC|
| UART\_A| NC|
| UART\_B| NC|
| UART\_C| NC|
| UART\_D| NC|
| I2C\_A| I2C3|
| I2C\_B| I2C1|
| I2C\_C| I2C2||
| RGMII\_A| ENET1|
| RGMII\_B| ENET2|
| RMII\_A| NC|
| RMII\_B| NC||
| DEBUG\_A| UART1|
| DEBUG\_M| UART2|
| DEBUG\_D| NC|
| SD\_A| SD2|
| SDIO\_B| SD3|
| I2S| SAI1|
| Native HP| NC|
| Native SPKOUT\_L| NC|
| Native SPKOUT\_R| NC|
| Native MIC| NC|
| PCIE\_A| NC|
| PCIE\_B| NC|
| LCD| LCD（PWM sharing）|
| MIPI DSI\_A| MIPI\_DSI（PWM sharing）|
| MIPI DSI\_B| NC|
| LVDS\_A| LVDS（PWM sharing）|
| LVDS\_B| NC||
| EDP| NC|
| HDMI| NC|
| USB2\_A| USB1|
| USB3\_A| NC|
| USB2\_B| USB2|
| USB2\_C| NC|
| USB3\_C| NC|
| USB2\_D| NC|
| MIPI CSI\_A| MIPI\_CSI||
| MIPI CSI\_B| NC|
| MIPI CSI\_C| NC||
| MIPI CSI\_D| NC|
| JTAG| JTAG||
| USER\_GPIO1| NC|
| USER\_GPIO2| NC|
| USER\_GPIO3| NC|
| RES0| PMIC\_SCLL|
| RES1| PMIC\_SDAL|
| RES2| PMIC\_SCLH|
| RES3| PMIC\_SDAH|||
| RES4| A18\_CLKIN2||
| RES5| B17\_CLKIN1|
| RES6| F14\_TAMPER1|||
| RES7| B16\_TAMPER0||
| RES8| J18\_WDOG\_B|
| RES9| V4\_CCM\_CLKO4\_3V3|||
| RES10| NC|
| RES11| NC|
| RES12| NC|
| RES13| NC|
| RES14| NC|
| RES15| NC|
| RES16| NC|
| RES17| NC|
| RES18| NC|
| RES19| NC|
| RES20| NC|
| RES21| NC|
| RES22| NC|
| RES23| NC|
| RES24| NC|
| RES25| NC|
| RES26| NC|
| RES27| NC|
| RES28| NC|
| RES29| NC|
| RES30| NC|
| RES31| NC|
| RES32| NC|
| RES33| NC|
| RES34| NC|
| RES35| NC|
| RES36| NC|
| RES37| NC|
| RES38| NC|
| RES39| NC|
| RES40| NC|
| RES41| NC|
| RES42| NC|
| RES43| NC|
| RES44| NC|
| RES45| NC|
| RES46| NC|
| RES47| NC|

**It is the UP4 standard definition. If compatible design is required, it is recommended to design according to it.**

### 2.7 SoM Hardware Design Description

**Power Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Power supply| VCC5V0\_SYS| Power Input| Power Supply for SoM: <br />Voltage: 5V<br />Current: The carrier board must provide a minimum continuous current of 2.5A. ||
| | VCC3V3\_SD| Power output| Only used for power supply of carrier board SD card, <br />with maximum output current capacity of 500mA. ||
| | GND| Ground| Power ground and signal ground on the SoM. <br />All GND pins must be connected. ||

**System Control Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| CPU reset| RESETn| I| SoM power reset, low level effective. Do not add additional capacitive load to this pin, <br />so as not to affect the SoM normal startup. | 6|
| Power enable| PMIC\_EXT\_EN| O| Enable signal to control the external power supply of the carrier board, <br />output by the SoM, 3.3 V level. | 4|
| On/Off| PMIC\_PWRON| I| Low level is valid, long press to turn off, short press to turn on.| 8|
| BOOT selection| EMMC\_BOOT| I| When the signal is grounded, the startup<br /> card enters the Maskrom download mode. | 1|
| Wake up| WAKEUP| I| SoM wake-up button| 7|
| Debug Port| UART2\_TX\_M0\_DEBUG   UART2\_RX\_M0\_DEBUG| I/O| Debug Port, please keep the port functions.| 106   107|

(Including minimum system block diagram)

The FET-MX9352-UP4 SoM integrates power, reset monitoring, and storage circuits, requiring only minimal external circuitry. A complete minimum system can be powered and run with a single 5V supply.

Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external devices—such as a debugging serial port and a port for flashing images—in addition to the minimal system. Otherwise, you can not check whether the system has booted. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK-MX9352-UP4 Carrier Board Description".

## 3\. OK-MX9352-UP4 Embedded Development Platform Description

### 3.1 OK-MX9352-UP4 Development Board Interface Diagram

Connection method: Stamp hole + LGA.   
The main interfaces are shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270598087-88289c98-1324-4bf2-a453-ca175f0a391b.png)

![](93.png)

### 3.2 OK-MX9352-UP4 Development Board Dimension Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270598421-35a5e239-de87-41a8-8d1f-5653c2923044.png)

PCB: 130mm×190mm

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm.

Plate making process: 1.6mm thickness, 4-layer PCB.

Power Voltage: DC 12V

The OK-MX93xx-UP4 carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 38mm × 38mm × 10mm. See below for details.

![](https://cdn.nlark.com/yuque/0/2026/bmp/50461850/1784270598511-f8afbe20-7b30-4920-8466-a6608cfd0dd9.bmp)

### 3.3 Naming Rules

A-B-C+D E F :G-H

| **Field**| **Field Description**| **Value**| **Description**|
|:----------:|:----------:|:----------:|:----------:|
| A| Product Line Identification| OK| Forlinx Embedded Carrier Boards/Development Boards|
| \-| Separator| \-| |
| B| CPU Name| 93xx| i.MX93xx|
| \-| Segment Identification| \-| Parameter separator|
| C| Connection| UP4| Package general package 4 means 40\*40|
| \+| Segment Identification| \+| The configuration parameter section follows this identifier.|
| D| Type Label| M| Carrier board (Carrier board is marked with M, not filled in by default)|
| E| Operating Temperature| I| -40℃ to 85℃ Industrial-grade|
| F| PCB Version| 10| V1.0|
| | | xx| Vx.x|
| :| Separator| :| It is followed by the manufacturer's internal identification.|
| G| Connector Origin| N| No Partition\\No Connector|
| | Hyphen| \-| Grade Mark Connector|
| H| Grade Identification| Blank| Mass Production|

### 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| WiFi| 1| Single antenna 2.4G\&5GHz                                                                                                                  Wi-Fi Dual-band 1X1 802.11ac +Bluetooth 4.2|
| Audio| 1| Dual-channel speaker connector, class-D, 1.3 W; <br />Stereo headphone output, 32 Ohm load;               <br />Headphone recording |
| MIPI-CSI| 1| Led out from FPC socket, 2lane, connected to OV5645 camera module|
| TF Card| 1| Data rate up to SDR104;|
| 4G| 1| Supports 4G modules with a miniPCIE interface, integrating USB2.0 communication signals.|
| UART Debug| 1| Integrated into a single Type-C port, enabling connection to a PC for debugging.|
| USB2.0| 2| One USB\_D port (native USB 2.0) and one USB\_HUB port|
| Ethernet| 2| Standard RJ45 socket with two Gigabit ports|
| MIPI-DSI| 1| 4-lane MIPI-DSI, supports a capacitive touch screen with backlight brightness<br />adjustment and offers a maximum single-channel resolution 1920×1080@60Hz. |
| RTC| 1| On-board CR1220 battery, keep going when power is off|
| LCD| 1| RGB888 interface, supporting capacitive touch and resistive touch, and allowing backlight brightness adjustment. <br />The maximum resolution is 1280×800.@ 60Hz |
| LVDS| 1| 4-lane LVDS, supports capacitive touchscreens, supports backlight brightness adjustment, supports 1280×800@60Hz|
| CAN| 1| Supports CAN2.0B, electrical quarantine|
| ADC| 3| Led out from the pin header and can be connected to the on-board sliding rheostat.|
| UART| 1| 5-wire UART, pin header connection|
| BOOT| 1| BOOT mode configuration|
| JTAG| 1| JTAG interface is routed out via pin headers.|
| KEY ADC| 5| 1 x SARADC, five buttons are routed out|

**Note: The parameters in the table are the theoretical values of hardware design or CPU.**

### 3.5 OK-MX9352-UP4 Carrier Board Description

**Note:** 

- **The component UID with "\_DNP" mark in the diagram below represents it is not soldered by default;**
- **The schematic diagrams in this manual are only for interface descriptions. Please refer to the source file materials for hardware design.**

#### 3.5.1 Carrier Board Power

As shown, the power supply for the development board is 12V DC （from P28). VDD\_5V supplies power to the SoM. Once the SoM is powered up, it outputs PMIC\_EXT\_EN to enable U32 and U33 on the carrier board, and VCC\_5V, VCC\_3V3, and VCC\_1V8 supply power to the devices on the carrier board. The STANDBY pin controls VCC\_3V3\_S to enable or disable the power supply for the development board, achieving reduced power consumption.

PMIC\_EXT\_EN ensure to power on the SoM first, followed by the carrier board, to prevent latch-up effects that could damage the CPU.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270598596-f83b20dd-300e-4f50-ae8d-7b791d62d045.png)

#### 3.5.2 Power/Reset Keys

K1 on the carrier for USB programming. Holding K1 before powering on enables USB programming.

K2 on the carrier board is for powering ON/Off. By default, the board runs automatically when powering on. While running, press and hold the key to shut down; press it shortly to restart.

K5 on the carrier board is for the resetting. Press it reset the power on the SoM to achieving a full board power reset.

K6 on the carrier board is for waking up. After the board enters sleep mode press it shortly to wake up the board.

The FET-MX9352-UP4 SoM does not have the WAKEUP feature.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270598703-cfa705c1-c589-4ccc-b028-9befe38b8fa1.png)

#### 3.5.3 LRADC Button

The carrier board is configured with 1 x LRADC signal, utilizing a button and a resistor voltage divider to enable key value sampling. The LRADC is pulled up to 1.8V via a 10K resistor on the SoM.

![](4.png)

#### 3.5.4 Debugging Serial Port

The carrier board features a single USB Type-C port with 3 x integrated debug serial ports. Install the XR21V1414IM48 driver on your computer, connect the P36 port to the computer, and select the DEBUG\_A debug serial port to start debugging.

The FET-MX9352-UP4 SoM is equipped only with the DEBUG\_A and DEBUG\_M debug interfaces

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276521915-de0a39e0-a8a9-4ef4-8181-66dbd135d743.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276542006-3c77a968-a354-4e42-ae40-d531538b237b.png)

**Note: To facilitate debugging later, please ensure that the debugging serial port is led out when designing your own carrier board.**

#### 3.5.5 JTAG

The carrier board features a single JTAG debugging interface for debugging the x-core

![](3.png)

#### 3.5.6 BOOT

There are two BOOT options on the carrier board, allowing the system to boot from either the eMMC, NOR flash, TF card or NAND.

The FET-MX9352-UP4 SoM supports only two boot methods: eMMC and TF.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270598941-952c9773-7e01-4b3e-8920-76ccbbe22c95.png)

#### 3.5.7 RTC

An RTC device is connected to the carrier board via the I2C\_A bus. It enables a compatible power supply from either VCC\_3V3 or a button cell battery via D10, which ensures the RTC chip remains powered by the battery after the carrier board is powered off. The RX8010SJ chip is used in the default design. Button battery: CR1220.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276567767-06a4ac15-91ca-494a-8257-9d55320d9aa7.png)

#### 3.5.8 TF Card

The TF card interface on the development board is connected to the CPU’s SDMMC0 channel. Power for the TF card is supplied by the VCC\_3V3\_SD output from the SoM

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276584559-2fd85d0e-854b-4266-9b13-90b31cfc3aa8.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276601679-dd4221bc-f78c-47f6-9749-824fb6c061e8.png)

**Note:**

- **The bus pull-up resistor has already been configured on the SoM. Don’t apply pull-up to the bus;**
- **The TF card is a hot-pluggable device. Please add ESD protection for it;**

- **Please make equal length for the SD signal.**

#### 3.5.9 USB Download

There is a USB Type-C port located at P42 on the back of the development board. It utilizes the P/N differential signals from the USB 3.0\_A (pin P19) signal, facilitating connection to a computer for flashing and debugging.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276652756-5780e1fd-97c0-4c2c-b647-5e77b63046ed.png)

#### 3.5.10 LVDS Display

The pin header P1 on the development board can be connected to the LVDS display via the connector 38P with a pitch of 2.0mm.

It supports 2\*4 lane LVDS connection, and I2C port touch screen.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599041-136eb442-e2ec-40bc-a110-43dedec88335.png)

#### 3.5.11 LCD-RGB888

Pin P4 on the development board is the LCD interface; it is an FPC socket that can be connected to an LCD screen and supports capacitive touchscreens.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599122-690c8b74-e850-424d-be7b-8a7a22a2b734.png)

#### 3.5.12 Resistive Touchscreen

If a resistive touchscreen is required, a resistive touch circuit can be added and connected to pins 1, 2, 3 and 4 of the P4 (LCD interface).

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276694555-347a980c-2c26-4a44-bfe9-e92c941f6f98.png)

#### 3.5.13  MIPI\_DSI

The P11 on the development board is MIPI\_DSI port, supporting 4 Lane MIPI\_DSI.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276715823-9b3bcb1c-6c2b-4112-94e2-39b04fe05c3a.png)

#### 3.5.14 MIPI\_CSI

There is 1 x FPC socket (P7) on the development board for connecting a MIPI-CSI camera. It features a pitch of 0.5mm, a flip-down cover, and supports a 2-lane MIPI-CSI connection.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599212-473f9091-e341-4738-945c-0cb3c76b3c43.png)

#### 3.5.15 WiFi\&BT

There is an onboard WiFi module (AW-CM358SM). The WiFi module features an SDIO interface, operates on dual bands of 2.4GHz and 5GHz, and complies with the IEEE 802.11a/b/g/n/ac standards. P10 is an SMA interface for antenna connection. Please use a 2.4GHz\&5GHz dual-band antenna.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599290-da23ba15-a2fc-4809-904e-76022d61f5ae.png)

#### 3.5.16 USB2.0

There is an onboard USB 2.0 HUB on the development board, which is expanded to two downstream USB HOST ports, connecting a standard USB 2.0-A interface and a mini-PCIE interface. The mini-PCIE interface can connect the 4G module.

In addition, a group of onboard USB2.0 HOST interfaces is led out from the SoM, which are connected to the USB2.0-A standard interface.

Another USB2.0 interface is connected to the standard interface of USB3.0-A, which supports master-slave switching.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599367-eb46d902-f791-4807-9e9c-5800dded96f0.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599446-0b1353cb-7caf-45e8-ab60-bd4bf51a6832.png)

#### 3.5.17 4G

The 4G module can be configured on the development board, and the supported specifications are miniPCIE interface, 3.3 V power supply, and USB2.0 communication.

P20 is a nanoSIM card slot, which is self-ejecting. Pay attention to the insertion direction according to the card identification. It does not support card hot plug.

Before using the 4G function, please power off the board, install the 4G module, the SIM card, and the 4G ipex jumper from the module to the board P15, so that the antenna can be externally connected through the SMA interface of P16.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276751955-814c9318-ab23-4a82-b260-6a7e622383a4.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276764657-3be4a43f-36ba-4296-a637-ec4c4217309a.png)

#### 3.5.18 Ethernet

The development board supports two native 1000m network ports, which are realized by using the RGMII of the SoM and the YT8521SH chip, and can be connected to the external network equipment through the standard RJ45 socket with a network transformer.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276795144-ba0530b2-95c8-4f93-828e-c62948d6e1df.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276811913-4460d091-dc47-44a0-8e75-8098b2756316.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599522-7d05ef4f-c498-43cf-a935-7433355f04a3.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276832372-ba97ed9e-c791-4c9a-a86b-d517372e1dbf.png)

#### 3.5.19 CAN

1 x standard CAN is led out from the development board via native CAN0. Because of the quarantine, the interface supports the maximum rate of 5Mbps, and the electrical quarantine is designed to meet the protection requirements in most scenarios.

The CAN signal is routed via green terminals with a 3.81 mm pitch; a 120-ohm terminating resistor is installed using a jumper cap.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599675-471683e1-0b44-4871-8a51-e63735a9259d.png)

#### 3.5.20 GPADC

The GPADC is connected via 2.54 mm pitch pins. It can be connected directly using DuPont wires via a potentiometer. The SoM features a total of 3 x GPADC, with a maximum sampling voltage of 1.8 V.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276855589-abee8cf9-1866-49fd-a932-646e13e428af.png)

#### 3.5.21 UART

1 x five-wire UART is routed from the development board and powered by a 3.3V signal.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276873671-85316bb3-e152-413c-ac54-a32c3dfb5133.png)

#### 3.5.22 IO Expansion

An IO expansion chip is led out from the development board via I2C. 24 additional I/O pins can be expanded for expanding control signals and resetting signals.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784276902730-476d0ea9-f4c1-45f5-8591-7556297c3d8b.png)

#### 3.5.23 Audio

A single I2S signal is routed from the carrier board to the NAU88C22YG CODEC chip, which provides a standard 3.5mm headphone jack and separate left and right channel amplifiers.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599759-7e487b54-2f96-4d4f-8285-6b2c19ccd2fe.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270599833-3b709df9-b686-48e5-b046-4f93316b7a6c.png)

## 4\. Package Dimensions Diagram

Package: LCC+LGA

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270601895-35aeb61c-b381-4503-9d8f-0f79c4815c29.png)

To ensure soldering yield, please refer to the following specifications for stencil design:

Hole Opening Scheme

Thickness: Use a 0.1/0.15mm step stencil, with the core board mounting area uniformly designed for a 0.15mm upper step;

LCC Pad Aperture: The opening width should be 0.6mm, and the length should extend outward by 2.15mm along the edge of the pad;

Circular LGA pads: Openings with a diameter of 0.85mm, with a 0.2mm-wide support bridge at the center. 

Square LGA pads: Openings with dimensions of 0.83mm × 0.83mm.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270602058-f78a8f53-f2e9-4f24-a57f-0b00496a5773.png)

![](1-1786960521171.png)

**Note:**

- **Since stepped stencils can affect the solder volume on surrounding components, please reduce the aperture size of the stencil openings for these components;**
- **It is recommended to use the official-provided footprint library to avoid design discrepancies.**

## 5\. OK-MX9352-UP4 Development Board Power Consumption Table

Linux system

| **No.**| **Item**| **SoM Power (W)**| Development Board **Power** (including SoM)|
|:----------:|----------|:----------:|:----------:|
| 1| No-load startup peak power| 1.595W| 2.544W|
| 2| Sleep mode power consumption| 0.03814W| 1.272W|
| 3| Standby power consumption with no load| 0.735W| 0.492W|
| 4| USB read/write power consumption| 0.87W| 2.028W|
| 5| TF card flashing power consumption| 1.175W| 1.74W|
| 6| 4G module PING power consumption| 0.755W| 2.256W|
| 7| WiFi module PING power consumption| 0.71W| 1.284W|
| 8| 7-inch LCD screen power consumption| 0.785W| 3.6W|
| 9| 10-inch LVDS screen power consumption| 0.785W| 5.46W|
| 10| 7‑inch MIPI screen video playback power consumption.| 0.77W| 4.416W|
| 11| CPU stress + memory stress + eMMC read/write stress test power consumption.| 1.47W| 2.076W|

**Note: The SoM configuration is 1GB memory + 8GB eMMC, the 4G module is Quectel EC20, and the screen is an Forlinx optional product. SoM power supply: 5V; and the carrier board is 12V;**

Power consumption is for reference only.

## 6\. Minimum System Diagram

It has SoM, power, debug serial port, system image flashing port.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270605907-3109f2df-06c5-4c8f-bcd1-a686c99d8320.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270606021-4fe98182-bd7d-4daf-b4d8-9b7d4d2837c0.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270606165-c35e82f2-be64-48f6-9ccc-4c791daff1e9.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784270606288-5d4b4cfa-68cf-4385-9cdb-a7528b567711.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784277066163-4151cfd7-fbde-4f2e-9d62-254fc9b779f4.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784277081795-d1413daf-d4a3-4cad-95a8-dd02e0f3f33c.png)