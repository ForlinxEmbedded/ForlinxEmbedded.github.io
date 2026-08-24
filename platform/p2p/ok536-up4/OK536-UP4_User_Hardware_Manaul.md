# OK536-UP4\_User’s Hardware Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware design guidelines, please refer to Forlinx's “OK536-UP4 Pin Multiplexing Comparison Table" and "OK536-UP4 Design Guide".

There are four main chapters:

+ Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;
+ Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;
+ Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;
+ Chapter 4. describes the product's power consumption and other considerations.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️🛤️ | Related paths.|

## Revision History

| Date| Version| SoM Version| Carrier Board Version| Revision History|
|:----------:|:----------:|:----------:|:----------:|----------|
| 12/05/206 | V1.0| V1.0| V1.3 and above| Initial Version|

## 1\. Allwinner T536 Description

The Allwinner T536 series is a high-performance quad-core Cortex-A55 platform SOC designed for industrial and smart hardware applications. It is suitable for interactive terminals, smart manufacturing, as well as other smart hardware and industrial equipment.

It integrates a quad-core Cortex-A55 CPU and a single-core E907 RISC-V processor. The former features independent L2 cache per core, while the latter offers scalable computing capabilities. Additionally, the T536 includes a Neural Processing Unit (NPU) with a maximum performance of 3 TOPS. It supports multiple heterogeneous expansion modes and various OS architectures, enabling this processor family to meet the demands of diverse application scenarios. This processor series can meet the requirements of various application scenarios.

Furthermore, the T536 series supports a combination of RGB/MIPI DSI/LVDS interfaces. It also provides high-speed interfaces for connecting 2× GMAC and a 1× USB3.1 Gen1 \& PCIe 2.1 combo. Moreover, the T536 processor includes 4× CAN-FD and 1× Local Bus interfaces, making it well-suited for industrial applications and expansions.

**T536 Block Diagram**

![](https://cdn.nlark.com/yuque/0/2026/jpg/50461850/1784252861822-e2777d5e-f774-4059-a99e-bf24cfe1ccee.jpg)

## 2\. FET536-UP4 SoM Description

### 2.1 FET536-UP4 Appearance Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633266187-1343c584-7f9d-44db-99ad-cc2d8e293c93.png)

**Front**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633266492-33441650-6e19-4920-948f-f8da066b3c7b.png)

**Back**

### 2.2 FET536-UP4 SoM Dimension Diagram

![](1778633266633-1391fe70-6ae9-4b04-b8ce-232f40cb86fb.png)

Dimensions: 40mm × 40mm, dimensional tolerance ±0.13mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

### 2.3 Performance Parameter

#### 2.3.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|:--------:|----------|:--------:|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| System Frequency| —| —| 1.6| GHz| —|
| System RTC| —| 32.768| —| KHz| —|

#### 2.3.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|:--------:|:--------:|:--------:|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Main Power Voltage| VSYS| 4.75| 5| 5.25| V| —|
| No-load current| —| | | | mA| Please refer to the power consumption table in the appendix|
| Overload current| —| | | | mA| Please refer to the power consumption table in the appendix|

#### 2.3.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|----------|:--------:|:--------:|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Operating Temperature| Working Environment| -40| 25| +85| ℃| Industrial Level|
| | Storage Environment| -40| 25| +125| ℃||
| Humidity| Working Environment| 10| —| 90| ％RH| No Condensation|
| | Storage Environment| 5| —| 95| ％RH| |

#### 2.3.4 ESD Features

| **Parameter**| **Specification**| | | **Description**|
|:----------:|:----------:|----------|----------|:----------:|
| | **Minimum**| **Maximum**| **Unit**|
| ESD HBM(ESDA/JEDEC JS-001-2017)| -2000| +2000| V| Applicable to all pins of the SoM|
| ESD CDM(ESDA/JEDEC JS-002-2018)| -250| +250| V| Applicable to all pins of the SoM|

**Note: **

- **The above data is from the chip manual;**
- **As all the signals exported from SoM are electrostatic sensitive signals, the interfaces should be well protected from static electricity in the carrier board design and the SoM transportation, assembling, and use.**

### 2.4 Interface Resources

#### 2.4.1 FET536-UP4 SoM Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| MIPI CSI| 4| 8M@30fps RAW12 2F-WDR, up to 3264(H) x 2448(V), supporting  4+4-lane, 4+2+2-lane, or 2+2+2+2-lane|
| MIPI DSI| 1| Supports 4-lane MIPI DSI，1920x1200@60fps|
| LVDS| 1| Supports dual link 1920 x 1080@60fps，single link 1366 x 768@60fps；|
| SDIO| 2| SMHC0 for SD SMHC1 for SDIO interface, 1.8 V mode only|
| Audio| 1| Built-in audio codec, supporting one differential LINE OUT channel|
| I2S| 1| Supports master/slave mode, with sampling rates ranging from 8 kHz to 384 kHz|
| USB3.1| 1| USB3.1 OTG，5Gbps|
| USB2.0 HOST| 1| Main mode only, supporting High-Speed, 480Mbps|
| GMAC| 2| Support RMII/RGMII interface and rate 10/100/1000 Mbit/s|
| CAN-FD| 2| Supports CAN-FD and CAN 2.0B|
| SPI| 2| Supports master/slave mode, with a maximum clock speed of 100 MHz|
| I2C| 3| Standard mode 100 kbit/s, fast mode 400 kbit/s|
| UART| 3| Compatible with industry standards 16450/16550|
| GPADC| 3| 12-bit sampling resolution and 10-bit accuracy, maximum sampling rate 2MHz|
| LRADC| 1| 6-bit sampling resolution with a 2 kHz sampling rate for key detection.|
| PWM| 4| Output frequency: 024 MHz or 0100 MHz|

#### 2.4.2 CPU Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| Parallel CSI| ≤1| It supports 8/10/12/16-bit widths, ITU-R BT.656 up to 4\_720P@30fps, and ITU-R BT.1120 up  to 4\_1080P@30fps.||
| MIPI CSI| ≤4| 8M@30fps RAW12 2F-WDR, up to 3264(H) x 2448(V), supporting  4+4-lane, 4+2+2-lane, or 2+2+2+2-lane|
| MIPI DSI(1)| ≤1| Supports 4-lane MIPI DSI，1920x1200@60fps|
| RGB LCD(1)| ≤1| DE/SYNC mode，1920x1200@60fps|
| LVDS(1)| ≤2| Supports dual link 1920 x 1080@60fps，single link 1366 x 768@60fps；|
| SDIO| ≤2| SMHC0 for SD SMHC1 for SDIO interface, 1.8 V mode only|
| Audio| ≤1| Built-in audio codec, supporting one differential LINE OUT channel|
| I2S| ≤4| Supports master/slave mode, with sampling rates ranging from 8 kHz to 384 kHz|
| DMIC| ≤1| Supports 8-channel with sampling rate from 8kHz to 48kHz|
| OWA IN/OUT| ≤1| Single-wire audio|
| USB3.1(2)| ≤1| USB3.1 OTG，5Gbps|
| PCIe2.1(2)| ≤1| Supports RC and EP，1-lane，5Gbps|
| USB2.0 DRD| 1| Supports master-slave configuration and High-Speed mode, 480 Mbps|
| USB2.0 HOST| 1| Main mode only, supporting High-Speed, 480Mbps|
| GMAC| ≤2| Support RMII/RGMII interface and rate 10/100/1000 Mbit/s|
| CAN-FD| ≤4| Supports CAN-FD and CAN 2.0B|
| Local Bus| ≤1| Supports 8/16/32-bit width, with a maximum bus clock speed of 100 MHz|
| SPI| ≤5| Supports master/slave mode, with a maximum clock speed of 100 MHz|
| TWI(3)| ≤8| Compatible with I2C standard, standard mode 100 kbit/s, fast mode 400 kbit/s|
| UART(4)| ≤17| Compatible with industry standards 16450/16550|
| GPADC| ≤28| 12-bit sampling resolution and 10-bit accuracy, maximum sampling rate 2MHz|
| LRADC| 1| 6-bit sampling resolution with a 2 kHz sampling rate for key detection.|
| TPADC| ≤1| 4-wire resistive touch, 12-bit SAR-type ADC|
| PWM| ≤34| Output frequency: 024 MHz or 0100 MHz|
| LEDC| ≤1| Control LED light, programmable output high and low width, data up to 800kbit/s|
| IR TX| ≤1| Infrared output|
| IR RX| ≤5| Infrared receiving|
| GPIO| ≤196|

**Note:** 

- **The parameters in the table represent hardware design values or theoretical CPU values; (1): RGB, LVDS and MIPI-DSI share pins; please refer to the chip data sheet or the pin-sharing table; (2): The USB 3.1 and PCIe interfaces share pins; only one can be used at a time; (3): S-TWI0 is occupied by the SoM and cannot be used on the carrier board; (4): UART0 is used as a debug serial port; it is advised to retain this in their design;**
- **For compatibility considerations, please refer to Section 2.6 for design guidance.**

### 2.5 FET536-UP4 SoM Pin Definitions

#### 2.5.1 FET536-UP4 SoM Pin Schematic

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633266823-32d05bd9-ae6b-4f70-a61e-446a4685d270.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633266928-1dbc72e7-a725-4f0d-be00-15015608a071.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633267027-58c8602c-bf79-45cd-9769-0173e0986a53.png)

#### 2.5.2 FET536-UP4 SoM Pin Function Description

For various functional expansion requirements, please refer to the user document "FET536-UP4 Pin Multiplexing Table". However, for more detailed information, it is recommended that you consult the relevant documentation, the chip datasheet, and the reference manual.

### 2.6 FET536-UP4 SoM Pin Definitions

| UP4 Standard Interface Functions| FET536x-UP4 Pinout Functions|
|:----------:|:----------:|
| EXTP\_EN| EXTP\_EN|
| STANDBY| PA4-STANDBY|
| nRESET| AP-RESET|
| WAKEUP| NC|
| PWRON| PWRON||
| BOOT0/BOOT1| NC|
| FORCE\_USBLOAD| FEL|
| POR\_B| NC|
| GPADC\_A/B/C| GPADC1-7/8/9|
| LRADC| LRADC|
| SPI\_A| NC|
| SPI\_B| NC|
| CAN\_A| PH0/1-CAN1|
| CAN\_B| PH10/11-CAN3|
| UART\_A| PG6/7/8/9-UART1|
| UART\_B| PI13/14/15/16-UART4|
| UART\_C| PE11/12-UART6|
| UART\_D| PH12/13-UART11|
| I2C\_A| PD20/21-TWI5|
| I2C\_B| PH8/9-TWI3|
| I2C\_C| PE13/14-TWI4|
| RGMII\_A| RGMII1|
| RGMII\_B| RGMII0|
| RMII\_A| NC|
| RMII\_B| NC|
| DEBUG\_A| PB9/10-UART0|
| DEBUG\_M| PL2/3-S-UART0|
| DEBUG\_D| PL4/5-S-UART1|
| SD\_A| SDC0|
| SDIO\_B| SDC1|
| I2S| I2S1|
| Native HP| NC|
| Native SPKOUT\_L| LINEOUTP/LINEOUTN|
| Native SPKOUT\_R| NC|
| Native MIC| NC|
| PCIE\_A| NC|
| PCIE\_B| NC|
| LCD| NC (for GPIO pins)|
| MIPI DSI\_A| DSI|
| MIPI DSI\_B| NC|
| LVDS\_A| LVDS1|
| LVDS\_B| NC|
| EDP| NC|
| HDMI| NC|
| USB2\_A| USB0|
| USB3\_A| USB2|
| USB2\_B| USB1|
| USB2\_C| NC|
| USB3\_C| NC|
| USB2\_D| NC|
| MIPI CSI\_A| MCSIC|
| MIPI CSI\_B| MCSID||
| MIPI CSI\_C| MCSIA|
| MIPI CSI\_D| MCSIB|
| JTAG| JTAG||
| USER\_GPIO1| PB13|
| USER\_GPIO2| PI0|
| USER\_GPIO3| PI1|
| RES0| PA2|||
| RES1| PA3||
| RES2| PA5|
| RES3| PA6|
| RES4| PA7|||
| RES5| PA8||
| RES6| PA9|
| RES7| AP-NMI|
| RES8| JTAG-SEL|
| RES9| PA0|
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
| RES29| PM1|
| RES30| PM2|
| RES31| PM3|
| RES32| PM5|
| RES33| GPADC2-0|
| RES34| GPADC2-1|
| RES35| GPADC2-2|
| RES36| GPADC2-3|
| RES37| GPADC2-4|
| RES38| GPADC2-5|
| RES39| GPADC2-6|
| RES40| GPADC2-7|
| RES41| GPADC2-8|
| RES42| GPADC2-9|
| RES43| GPADC3-0|
| RES44| TP-X1|
| RES45| TP-X2|
| RES46| TP-Y1|
| RES47| TP-Y2|

It is the UP4 standard definition. If compatible design is required, it is recommended to design according to it.

### 2.7 SoM Hardware Design Description

**Power Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Power supply| VCC5V0\_SYS| Power Input| Power Supply for SoM: <br />Voltage: 5V<br />Current: The carrier board must provide a minimum continuous current of 2.5A. ||
| | VCC3V3\_SD| Power output| Only used for power supply of carrier board SD card, with maximum output current capacity of 500mA.|
| | GND| Ground| Power ground and signal ground on the SoM. All GND pins must be connected.|

**System Control Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| CPU reset| RESETn| I| SoM power reset, low level effective. Do not add additional capacitive load to this pin, so as not to affect the SoM normal startup.| 6|
| Power enable| PMIC\_EXT\_EN| O| Enable signal to control the external power supply of the carrier board, output by the SoM, 3.3 V level.| 4|
| On/Off| PMIC\_PWRON| I| Low level is valid, long press to turn off, short press to turn on.| 8|
| Wake up| WAKEUP| I| SoM wake-up button| 7|
| Debug Port| PB9-UART0-TX   PB10-UART0-RX   PL2-S-UART0-TX   PL3-S-UART0-RX   PL4-S-UART1-TX   PL5-S-UART1-RX| I/O| Debug Port, please keep the port functions.| 107   106   109   108   111   110|

(Including minimum system block diagram)

The FET536-UP4 SoM integrates power, reset monitoring, and storage circuits, requiring only minimal external circuitry. A complete minimum system can be powered and run with a single 5V supply.

Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external devices—such as a debugging serial port and a port for flashing images—in addition to the minimal system. Otherwise, you can not check whether the system has booted. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK536-UP4 Carrier Board Description".

## 3\. OK536-UP4 Embedded Development Platform Description

### 3.1 OK536-UP4 Development Board Interface Diagram

Connection method: Stamp hole + LGA.   
The main interfaces are shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252866759-6c1deebe-99de-4ae9-8d35-efb6cf5419f9.png)

![](../OK536-UP4%20%E7%A1%AC%E4%BB%B6%E6%89%8B%E5%86%8C/1784252866960-5e8ec53e-7671-4bf7-a57a-5f5531bc412f.png)

### 3.2 OK536-UP4 Development Board Dimension Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867081-0e3c42de-a802-48bf-a186-916113763a63.png)

PCB: 130mm×190mm

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm.

Plate making process: 1.6mm thickness, 4-layer PCB.

Power Voltage: DC 12V

The OK536x-UP4 carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 39mm × 39mm × 23mm. See below for details.

![](1784252867171-2fa984f5-33e5-4d45-abd1-f23256b62952.png)

### 3.3 Naming Rules

A-B-C+D E F :G-H

| **Field**| **Field Description**| **Value**| **Description**|
|:----------:|:----------:|:----------:|:----------:|
| A| Product Line Identification| OK| Forlinx Embedded Carrier Boards/Development Boards|
| \-| Separator| \-|
| B| CPU Name| 536| T536|
| \-| Segment Identification| \-| Parameter separator|
| C| Connection| UP4| Package general package 4 means 40\*40|
| \+| Segment Identification| \+| The configuration parameter section follows this identifier.|
| D| Type Label| M| Carrier board (Carrier board is marked with M, not filled in by default)|
| E| Operating Temperature| I| -40 to 85℃ Industrial-grade|
| F| PCB Version| 13| V1.3|
| | | xx| Vx.x|
| :| Separator| :| It is followed by the manufacturer's internal identification.|
| G| Connector Origin| N| No Partition\\No Connector|
| \-| Hyphen| \-| Grade Mark Connector|
| H| Grade Identification| Blank| Mass Production|

### 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| WiFi| 1| Single antenna 2.4G\&5GHz                                                                                                                  Wi-Fi Dual-band 1X1 802.11ac +Bluetooth 4.2|
| Bluetooth| 1|
| Audio| 1| Dual-channel speaker connector, class-D, 1.3 W; Stereo headphone output, 32 Ohm load;               Headphone recording|
| MIPI-CSI| 3| Led out via FPC connector; 4-lane + 2-lane + 2-lane; the 4-lane section can be connected to a 4-to-4 analogue camera module.|
| TF Card| 1| Data rate up to SDR104;|
| 4G| 1| Supports 4G modules with a miniPCIE interface, integrating USB2.0 communication signals.|
| UART Debug| 1| Integrated into a single Type-C port, enabling connection to a PC for debugging.|
| USB3.0| 1| USB\_A can switch between master and slave modes and supports USB flashing; USB\_C only supports slave mode.|
| USB2.0| 1| One USB\_D port (native USB 2.0) and one USB\_HUB port|
| Ethernet| 2| Standard RJ45 socket with two Gigabit ports|
| MIPI-DSI| 1| 4-lane MIPI-DSI, supports capacitive touchscreens and backlight brightness adjustment   Maximum resolution per channel: 1920x1200@60fps|
| RTC| 1| On-board CR1220 battery, keep going when power is off|
| LVDS| 1| 4-lane LVDS, supports capacitive touchscreens, supports backlight brightness adjustment, supports 1366 x 768@60fps.|
| RS485| 2| Electrical quarantine|
| CAN| 2| Supports CAN2.0B, electrical quarantine|
| ADC| 3| Led out from the pin header and can be connected to the on-board sliding rheostat.|
| SPI| 2| 2 x SPI led out via a simple terminal block, and can be used to connect peripherals for debugging functionality.|
| UART| 1| 5-wire UART, pin header connection|
| JTAG| 1| JTAG interface is routed out via pin headers.|
| KEY ADC| 5| 1 x LRADC, five buttons are routed out|

**Note: The parameters in the table are the theoretical values of hardware design or CPU.**

### 3.5 OK536-UP4 Carrier Board Description

**Note:**

- **The component UID with "\_DNP" mark in the diagram below represents it is not soldered by  
  default;**
- **The schematic diagrams in this manual are only for interface descriptions. Please refer to the source file materials for hardware design.**

#### 3.5.1 Carrier Board Power

As shown, the power supply for the development board is 12V DC （from P28). VDD\_5V supplies power to the SoM. Once the SoM is powered up, it outputs PMIC\_EXT\_EN to enable U32 and U33 on the carrier board, and VCC\_5V, VCC\_3V3, and VCC\_1V8 supply power to the devices on the carrier board. The STANDBY pin controls VCC\_3V3\_S to enable or disable the power supply for the development board, achieving reduced power consumption.

PMIC\_EXT\_EN ensure to power on the SoM first, followed by the carrier board, to prevent latch-up effects that could damage the CPU.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867263-f6a6ca6a-9bcf-48ba-9fb1-07c8451fe830.png)

#### 3.5.2 Power/Reset Keys

K1 on the carrier for USB programming. Holding K1 before powering on enables USB programming.

K2 on the carrier board is for powering ON/Off. By default, the board runs automatically when powering on. While running, press and hold the key to shut down; press it shortly to restart.

K5 on the carrier board is for the resetting. Press it reset the power on the SoM to achieving a full board power reset.

K6 on the carrier board is for waking up. After the board enters sleep mode press it shortly to wake up the board.

The FET536-UP4 SoM does not have the WAKEUP feature.

#### 3.5.3 LRADC Button

The carrier board is configured with 1 x LRADC signal, utilizing a button and a resistor voltage divider to enable key value sampling. The LRADC is pulled up to 1.8V via a 10K resistor on the SoM.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784253983162-e9e43b11-8d19-4c19-a7a6-697c35b810e9.png)

#### 3.5.4 Debugging Serial Port

The carrier board features a single USB Type-C port with 3 x integrated debug serial ports. Install the XR21V1414IM48 driver on your computer, connect the P36 port to the computer, and select the DEBUG\_A debug serial port to start debugging.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254006782-49d781a0-ef15-4d9c-94b9-89901cf326f5.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254020583-8a72c88c-f00e-4d25-b0d2-38c593475aac.png)

**Note: To facilitate debugging later, please ensure that the debugging serial port is led out when designing your own carrier board.**

#### 3.5.5 JTAG

The carrier board features a single JTAG debugging interface for debugging the x-core.

![](1784252867375-718ad681-3afb-4615-ac2f-160de8a3a6c5.png)

#### 3.5.6 RTC

An RTC device is connected to the carrier board via the I2C\_A bus. It enables a compatible power supply from either VCC\_3V3 or a button cell battery via D10, which ensures the RTC chip remains powered by the battery after the carrier board is powered off. The RX8010SJ chip is used in the default design. Button battery: CR1220.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254044997-9c038867-501e-4d70-99cc-283484ae6c55.png)

#### 3.5.7 TF Card

The TF card interface on the development board is connected to the CPU’s SDMMC0 channel. Power for the TF card is supplied by the VCC\_3V3\_SD output from the SoM

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254069536-ea19d903-c91a-49dc-8254-dfe76319ed7d.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254084008-6180cd24-a31b-450c-9cdb-67b871a8ade6.png)

**Note:**

- **The bus pull-up resistor has already been configured on the SoM. Don’t apply pull-up to the bus;**
- **The TF card is a hot-pluggable device. Please add ESD protection for it;**

- **Please make equal length for the SD signal.**

#### 3.5.8 USB Download

There is a USB Type-C port located at P42 on the back of the development board. It utilizes the P/N differential signals from the USB 3.0\_A (pin P19) signal, facilitating connection to a computer for flashing and debugging.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254126695-7276d5d5-4819-4b1f-9343-155533679cdc.png)

#### 3.5.9 LVDS Display

The pin header P1 on the development board can be connected to the LVDS display via the connector 38P with a pitch of 2.0mm.

It supports 2\*4 lane LVDS connection, and I2C port touch screen.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254145900-f0dc55ed-fa19-45cc-b1fa-589373ae7bee.png)

#### 3.5.10 IO

Pin P4 on the development board is the LCD interface; it is an FPC socket that can be connected to an LCD screen and supports capacitive touchscreens. Pin P44 is a 2.0-pitch 2×15-pin connector, and the LCD interface can be re-multiplexed as an I/O pin for testing.

The FET536-UP4 SoM does not feature an LCD; the carrier board is fitted only with a P44 header for I/O testing.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867470-8457f249-94f8-4135-9204-8d23c54d4be8.png)

#### 3.5.11 MIPI\_DSI

The P11 on the development board is MIPI\_DSI port, supporting 4 Lane MIPI\_DSI.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254177967-5448c2fb-2c98-4c0a-bdba-6009e422d83b.png)

#### 3.5.12 MIPI\_CSI

There are three FPC (P6, P7, P8, 0.5mm pitch, with flip cover) on the carrier board for connecting MIPI-CSI camera.

P7 and P8 supports 2lane MIPI-CSI connections.

The P6 port supports 4lane MIPI-CSI connection and multiplexes a signal line with the P9 port. The P9 port is used to connect up to four analogue camera modules. It is not possible to use the P6 and P9 ports for both functions simultaneously.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867569-a54b595e-df23-455d-a29b-38d38c20d4f5.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254210462-331492ae-f1f8-4792-8155-c3a819a6243f.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867651-e54a83b5-bf1b-4ed1-9ed3-085acf5c1e41.png)

!\[](images\\屏幕截图 2025-02-12 163045.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867756-96a02b42-8f78-4b97-b35c-d35109f16054.png)

#### 3.5.13 WIFI\&BT

The development board comes with an integrated Wi-Fi \& Bluetooth module, model number AW-CM358SM. The Wi-Fi module utilizes an SDIO interface, supports dual-band operation in 2.4GHz and 5GHz, and complies with IEEE 802.11a/b/g/n/ac standards. The Bluetooth module uses UART \& PCM interfaces and complies with Bluetooth 5.2 specifications. P10 is an SMA interface for antenna connection. Please use a 2.4GHz\&5GHz dual-band antenna.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867853-1fe8908d-a2f8-4840-afad-ff9402ca1c77.png)

#### 3.5.14 USB2.0

There is an onboard USB 2.0 HUB on the development board, which is expanded to two downstream USB HOST ports, connecting a standard USB 2.0-A interface and a mini-PCIE interface. The mini-PCIE interface can connect the 4G module.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252867945-aed02f3e-ef74-4a8b-8e2a-ccb3f635aa51.png)

#### 3.5.15 4G

The 4G module can be configured on the development board, and the supported specifications are miniPCIE interface, 3.3 V power supply, and USB2.0 communication.

P20 is a nanoSIM card slot, which is self-ejecting. Pay attention to the insertion direction according to the card identification. It does not support card hot plug.

Before using the 4G function, please power off the board, install the 4G module, the SIM card, and the 4G ipex jumper from the module to the board P15, so that the antenna can be externally connected through the SMA interface of P16.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254247390-33295960-fc97-4e44-8654-959235a94c5c.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254259676-a7ca5ba6-e813-4c0c-9584-9206ff8cd757.png)

#### 3.5.16 USB3.0

The development board features an onboard USB 3.0 interface, which is the native USB 3.0 from the SoM. A standard USB 3.0 Type-A interface is connected on the development board. Port A supports OTG, controlled by the DIP switch S3: OFF for Device mode, ON for Host mode.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868034-edf282e9-94b8-4f19-9eac-cc297a2be0d4.png)

#### 3.5.17 Ethernet

The development board supports two native 1000m network ports, which are realized by using the RGMII of the SoM and the YT8521SH chip, and can be connected to the external network equipment through the standard RJ45 socket with a network transformer.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868123-a24da481-d3a3-46fb-a76f-1a9447b4603f.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868241-841b3029-aec1-4f76-aefb-4d6f261c0668.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868361-117c7038-9c43-421a-a1df-bcbb2d0500d2.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868480-134619c2-39e9-4be6-8c59-c26ab58ce133.png)

#### 3.5.18 CAN

The development board features the native CAN0 and CAN1 pins to provide two standard CAN interfaces. Due to the limitations of the CAN isolation chip, these interfaces support a maximum data rate of 5 Mbps; however, the design incorporates electrical isolation, which meets the protection requirements for most scenarios.

The CAN signal is routed via green terminals with a 3.81 mm pitch; a 120-ohm terminating resistor is installed using a jumper cap.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868558-a9da9d42-349d-4c5c-b6f3-10c308292160.png)

#### 3.5.19 485

1 x standard 485 is led out from the development board via native UART\_C. Due to the UART rate limitation of the CPU, the interface supports a maximum rate of 4Mbps, and the electrical quarantine is designed to meet the protection requirements in most scenarios.

The 485 signal is routed via green terminals with a 3.81 mm pitch; a 120-ohm terminating resistor is installed using a jumper cap.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868645-9b812926-2eb0-4d77-a26c-06ef825932ea.png)

#### 3.5.20 GPADC

The GPADC is connected via 2.54 mm pitch pins. It can be connected directly using DuPont wires via a potentiometer. The SoM features a total of 3 x GPADC, with a maximum sampling voltage of 1.8 V.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254282972-d0248c8b-4ea8-4182-8c03-cd72140ca90f.png)

#### 3.5.21 UART

1 x five-wire UART is routed from the development board and powered by a 3.3V signal.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254309358-cc301602-5cf3-47b1-9ff8-42bd22635ea3.png)

#### 3.5.22 SPI

A five-wire SPI interface is led out from the SoM (5V power supply).

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868762-c8fc5602-420b-4db6-bf75-402efb6f698a.png)

#### 3.5.23 IO Expansion

An IO expansion chip is led out from the development board via I2C. 24 additional I/O pins can be expanded for expanding control signals and resetting signals.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784254328697-f0f5789d-7a10-4877-9098-a6b156c04cac.png)

#### 3.5.24 Audio

A single I2S signal is routed from the carrier board to the NAU88C22YG CODEC chip, which provides a standard 3.5mm headphone jack and separate left and right channel amplifiers.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868871-78efe5db-0ec8-4caf-88ea-f0f0ea5b4b1f.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252868960-fd4c7977-d294-4d32-8aaf-230e414f7f5a.png)

## 4\. Package Dimensions Diagram

Package: LCC+LGA

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252871281-08346fa8-a834-4d38-893e-9bce9e6098ec.png)

To ensure soldering yield, please refer to the following specifications for stencil design:

**Hole Opening Scheme**

Thickness: Use a 0.1/0.15mm step stencil, with the core board mounting area uniformly designed for a 0.15mm upper step;

LCC Pad Aperture: The opening width should be 0.6mm, and the length should extend outward by 2.15mm along the edge of the pad;

Circular LGA pads: Openings with a diameter of 0.85mm, with a 0.2mm-wide support bridge at the center. Square LGA pads: Openings with dimensions of 0.83mm × 0.83mm.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252871403-b152697f-45c3-4a8e-b99b-2bfadc842287.png)

![](1784252871523-549cb84f-ea3d-4583-97e7-4496754b6726.png)

**Note:**

- **Since stepped stencils can affect the solder volume on surrounding components, please reduce the aperture size of the stencil openings for these components;**
- **It is recommended to use the official-provided footprint library to avoid design discrepancies.**

## 5\. OK536-UP4 Development Board Linux Consumption Table

| **No.**| **Item**| **SoM Power (W)**| Development Board **Power** (including SoM)|
|:----------:|----------|:----------:|:----------:|
| 1| No-load startup peak power| 2.325W| 3.348W|
| 2| Sleep mode power consumption| 0.54W| 2.184W|
| 3| Standby power consumption with no load| 1.135W| 1.104W|
| 4| USB read/write power consumption| 1.275W| 2.952W||
| 5| TF card flashing power consumption| 1.62W| 2.736W|
| 6| 4G module PING power consumption| 1.15W| 2.976W|
| 7| WiFi module PING power consumption| 1.13W| 1.848W|
| 8| 10-inch LVDS screen power consumption| 1.235W| 5.568W|
| 9| 7‑inch MIPI screen video playback power consumption.| 1.17W| 4.56W|
| 10| CPU stress + memory stress + eMMC read/write stress test power consumption.| 2.515W| 3.6W|

**Note: **

- **The SoM configuration is 2GB memory + +16GB eMMC, the 4G module is Quectel EC20, and the screen is an Forlinx optional product. SoM power supply: 5V; and the carrier board is 12V; **
- **Power consumption is for reference only.**

---


## 6\. Minimum System Diagram

**It has SoM, power, debug serial port, system image flashing port.**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875017-7b14cc7f-c4c3-47de-95d9-7d09e0d650eb.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875260-d8a88b15-6839-48b6-8f4e-bbf4f4cb1e79.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875401-09ba4876-847b-4d60-a415-c9230b20384d.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875531-f0385dad-deaf-4d6d-bd95-9290a1cde85e.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875725-1a4a7772-99a6-469e-9a47-cc1bcff6f88b.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1784252875802-03503dfd-da2c-42ac-9894-804a25a617e1.png)

!\[屏幕截图 2025-02-18 162334](images\\屏幕截图 2025-02-18 162334.png)