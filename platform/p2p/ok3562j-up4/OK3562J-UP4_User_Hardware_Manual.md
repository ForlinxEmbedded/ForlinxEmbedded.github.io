# OK3562J-UP4\_User’s Hardware Manual\_V1.1

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Overview

This manual aims to help you quickly get familiar with the product, understand interface functions and configurations. It covers the interface functions and introductions of the development board, product power consumption, and methods for troubleshooting issues during use. Some commands are annotated in the description for user convenience, with a focus on practicality. For information on pin function multiplexing and hardware design guidelines, please refer to Forlinx's “OK3562J-UP4 Pin Multiplexing Comparison Table" and "OK3562J-UP4 Design Guide".

There are four chapters:

+ Chapter 1. provides an overall overview of the CPU, briefly introducing its performance and application industries;
+ Chapter 2. offers a general introduction to the SoM, including descriptions and functions of connector pins;
+ Chapter 3. introduces the development board in multiple chapters, covering hardware principles and simple design ideas;
+ Chapter 4. describes the product's power consumption and other considerations.

Additionally, the manual includes explanations of some symbols and formats.

|  Format  | Meaning                                                      |
| :------: | ------------------------------------------------------------ |
| **Note** | Note or information that requires special attention, be sure to read carefully. |
|    📚     | Relevant notes on the test chapters                          |
|    🛤️     | Indicates the related path.                                  |

## Application Scope

This hardware manual applies to Forlinx OK362J-UP4 development board (version 1.3 and above) and FET3562J-UP4 SoM (version 1.1 and above).

## Revision History

| Date| Version| SoM Version| Carrier Board Version| Revision History|
|:----------:|:----------:|:----------:|:----------:|:----------:|
| 11/03/2026| V1.0| V1.1| V1.3 and above|Initial Version|
| 13/05/2026| V1.1| V1.1| V1.3 and above|1. Removing the pre-tinning information for the SoM;<br />2. Updating the stencil opening design in the package dimension drawing. |

## 1\. Rockchip RK3562 Description

RK3562J is a high-performance, low-power quad-core application processor designed specifically for electronic devices.

RK3562J features multiple embedded hardware engines to optimize performance for high-end applications. It supports nearly full-format H.264 decoding at 1080p@60fps, H.265 decoding at 4K@30fps, and H.264 encoding at 1080p@60fps. Additionally, it includes a high-quality JPEG encoder and decoder.

RK3562J incorporates an embedded 3D GPU, ensuring full compatibility with OpenGL ES 1.1/2.0/3.2, OpenCL 2.0, and Vulkan 1.1. Furthermore, a dedicated 2D hardware engine is included to maximize display performance and ensure smooth operation.

RK3562J features a high-performance memory interface (LPDDR4/LPDDR4X), capable of sustaining demanding memory bandwidth.

**RK3562 Block Diagram**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213050057-8831d991-3f4e-4b48-ab8c-ff1d3f28e611.png)

## 2\. FET3562J-UP4 SoM Description

### 2.1 FET3562J-UP4 Appearance Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213051584-1b5bc691-2900-4deb-9506-0bf17877d345.png)

Front

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213051790-41793c86-3b1f-4e9f-b233-c3882cb2fe55.png)

Back

### 2.2 FET3562J-UP4 SoM Dimension Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213051954-8774440f-869e-4c32-b4d3-c98ed7ff153c.png)

Dimensions: 40mm × 40mm, dimensional tolerance ±0.13mm. For more dimensional details, please refer to the DXF file.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

### 2.3 Performance Parameter

#### 2.3.1 System Frequency

| **Name**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|----------|:----------:|
| | **Minimum** | **Typical** | **Maximum **| **Unit**||
| System Frequency| —| 1.2| 1.8| GHz| —|
| System RTC| —| 32.768| —| KHz| —|

#### 2.3.2 Power Parameter

| **Parameter**| **Pin No.**| **Specification**| | | | **Description**|
|:----------:|:----------:|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Main Power Voltage| VSYS| 4.75| 5| 5.25| V| —|
| No-load current| —| | | | mA| Please refer to the power consumption table in the appendix|
| Overload current| —| | | | mA| Please refer to the power consumption table in the appendix|

#### 2.3.3 Working Environment

| **Parameter**| | **Specification**| | | | **Description**|
|:----------:|----------|:----------:|----------|----------|----------|:----------:|
| | | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Operating Temperature| Working Environment| 0| 25| +70| ℃| Commercial level|
| | Storage Environment| -40| 25| +125| ℃||
| | Working environment| -40| 25| +85| ℃| Industrial Level|
| | Storage Environment| -40| 25| +125| ℃||
| Humidity| Working environment| 10| —| 90| ％RH| No Condensation|
| | Storage Environment| 5| —| 95| ％RH||

#### 2.3.4 SoM ESD Features

| **Parameter**| **Specification**| | | | **Description**|
|:----------:|:----------:|----------|----------|----------|:----------:|
| | **Minimum**| **Typical** | **Maximum**| **Unit**||
| Human Body Model (HBM)| —| ±1000| —| V| —|
| Charged Device Model (CDM)| —| ±250| —| V| —|

### 2.4 Interface Resources

#### 2.4.1 FET3562J-UP4 SoM Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| USB2.0| 1| Supports 1 x USB2.0 HOST, up to 480Mbps|
| UART| 3| Paths A and B support flow control with a maximum baud rate of 4 Mbps.|
| SPI| 1| Supports both master and slave mode|
| I2C| 3| Supports standard mode 100kbit/s and fast mode 400kbit/s|
| Ethernet| 2| Supports 1 x RGMII and 1 x RMII|
| USB3.0| 1| Supports USB3.0 master and slave mode|
| GPADC| 3| 10bits, sampling rate up to 1MS/s|
| LRADC| 1| 6-bit sampling resolution with a 2 kHz sampling rate for key detection.|
| MIPI-DSI| 1| Supports 1 MIPI DSI TX lane, 4 lanes, with resolution up to 2048 x 1080@60Hz.|
| MIPI-CSI| 4| MIPI\_CSI\_RX0 and MIPI\_CSI\_RX1 have a total of 2 ports. A single port supports 4 lanes, with each lane having a maximum speed of 2.5Gbps.<br />Additionally, a single port can be split into two combinations of 2 lanes each for use. |
| SD card| 1| Compatible with SDIO 3.0 protocol, 4bits data bit width|
| SDIO| 1| Compatible with SDIO 3.0 protocol, 4bits data bit width|
| I2S| 1| Maximum sampling rate of 192 kHz.|
| Audio| | It features a built-in codec with direct output of audio analog signals,<br />supporting a sampling rate of 48 kHz to 192 kHz: Mono speaker, Class‑D, 1.3 W;<br />Stereo headphone output, 32 Ω load;<br />2 single‑ended MIC inputs. |
| CAN| 2| Supports CAN2.0B, data rate up to 1Mbps|
| PWM| 1|


#### 2.4.2 CPU Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| USB2.0| 1| Supports 1 x USB2.0 HOST, up to 480Mbps|
| UART(1)| ≤10| Supports flow control, baud rate up to 4Mbps|
| SPI| ≤3| Supports both master and slave mode|
| I2C（2）| ≤5| Supports standard mode 100kbit/s and fast mode 400kbit/s|
| Ethernet| ≤2| Supports 1 x RGMII and 1 x RMII|
| PCIe| ≤1| PCIe 2.1, can only be used in RC mode, only supports single lane, 5Gbps, and can only be used alternatively with USB3.0 pin multiplexing.|
| USB3.0| ≤1| Supports the master-slave mode of USB3.0, and can only be used alternatively with PCIe pin multiplexing|
| ADC（3）| ≤16| 10bits, sampling rate up to 1MS/s|
| LVDS（4）| ≤1| Supports VESA/JEIDA LVDS data format with resolution up to 800 X 1280 @ 60Hz;|
| MIPI-DSI(4)| ≤1| Supports 1 MIPI DSI TX lane, 4 lanes, with resolution up to 2048 x 1080@60Hz.|
| RGB| ≤1| Supports RGB 888 format with a resolution up to 1280×800.|
| MIPI-CSI| 4| MIPI\_CSI\_RX0 and MIPI\_CSI\_RX1 consist of a total of 2 ports. Each port supports 4 lanes, with a maximum speed of 2.5 Gbps per lane. Furthermore, a single port can be divided into two combinations of 2 lanes each for usage.|
| SD card| 1| Compatible with SDIO 3.0 protocol, 4bits data bit width|
| SDIO| ≤1| Compatible with SDIO 3.0 protocol, 4bits data bit width|
| SAI(5)| ≤2| Supports protocol I2S, PCM, TDM, sampling rate up to 192kHz|
| Audio| | It features a built-in codec with direct output of audio analog signals, supporting a sampling rate of 48 kHz to 192 kHz: Mono speaker, Class‑D, 1.3 W;<br />Stereo headphone output, 32 Ω load;<br />2 x single‑ended MIC inputs. |
| PDM| ≤1| Up to 8 channels, sampling rate up to 192KHz, master receive mode|
| SPDIF| ≤1|
| CAN(6)| ≤2| Supports CAN2.0B, data rate up to 1Mbps|
| PWM| ≤16|
| GPIO| ≤79|

**Note: The parameters in the table are the theoretical values of hardware design or CPU.**

### 2.5 FET3562J-UP4 SoM Pin Definitions

#### 2.5.1 FET3562J-UP4 SoM Pin Schematic

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213052073-3acb2c34-767d-449c-b098-cd99e56d9602.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213052222-a40d1c2c-ab68-428e-bb49-5bb37f69289e.png)

![](https://cdn.nlark.com/yuque/0/2026/bmp/50461850/1773213052344-8a0795b1-a03c-4d02-8c7e-1eb4e6875f63.bmp)

#### 2.5.2 FET3562J-UP4 SoM Pin Function Description

For various functional expansion requirements, please refer to the user document "FET3562-UP4 Pin Multiplexing Table". However, for more detailed information, it is recommended that you consult the relevant documentation, the chip datasheet, and the reference manual.

### 2.6 FET3562J-UP4 SoM Pin Definitions

| UP4 Standard Interface Function | FET3562J-UP4 Pinout Functions |
| :-----------------------------: | :---------------------------: |
|             EXTP_EN             |          PMIC_EXT_EN          |
|             STANDBY             |          GPIO0_C5_d           |
|             nRESET              |            RESETn             |
|             WAKEUP              |              NC               |
|              PWRON              |          PMIC_PWRON           |
|           BOOT0/BOOT1           |              NC               |
|          FORCE_USBLOAD          |         SARADC0_BOOT          |
|              POR_B              |              NC               |
|           GPADC_A/B/C           |        SARADC0_IN2/3/4        |
|              LRADC              |   SARADC0_IN1_KEY/RECOVERY    |
|              SPI_A              |             SPI2              |
|              SPI_B              |              NC               |
|              CAN_A              |             CAN0              |
|              CAN_B              |             CAN1              |
|             UART_A              |             UART8             |
|             UART_B              |             UART3             |
|             UART_C              |             UART5             |
|             UART_D              |              NC               |
|              I2C_A              |             I2C1              |
|              I2C_B              |             I2C3              |
|              I2C_C              |             I2C5              |
|             RGMII_A             |              NC               |
|             RGMII_B             |             RGMII             |
|             RMII_A              |             RMII              |
|             RMII_B              |              NC               |
|             DEBUG_A             |             UART0             |
|             DEBUG_M             |              NC               |
|             DEBUG_D             |              NC               |
|              SD_A               |            SDMMC0             |
|             SDIO_B              |             SDIO              |
|               I2S               |             I2S1              |
|            Native HP            |              HP               |
|         Native SPKOUT_L         |              NC               |
|         Native SPKOUT_R         |              NC               |
|           Native MIC            |             MIC1              |
|             PCIE_A              |              NC               |
|             PCIE_B              |              NC               |
|               LCD               |              NC               |
|           MIPI DSI_A            |         MIPI_DSI/LVDS         |
|           MIPI DSI_B            |              NC               |
|             LVDS_A              |              NC               |
|             LVDS_B              |              NC               |
|               EDP               |              NC               |
|              HDMI               |              NC               |
|             USB2_A              |          USB30_OTG0           |
|             USB3_A              |          USB30_OTG0           |
|             USB2_B              |          USB20_HOST1          |
|             USB2_C              |              NC               |
|             USB3_C              |              NC               |
|             USB2_D              |              NC               |
|           MIPI CSI_A            |         MIPI_CSI_RX0          |
|           MIPI CSI_B            |         MIPI_CSI_RX0          |
|           MIPI CSI_C            |         MIPI_CSI_RX1          |
|           MIPI CSI_D            |         MIPI_CSI_RX1          |
|              JTAG               |              NC               |
|           USER_GPIO1            |          GPIO4_B4_d           |
|           USER_GPIO2            |          GPIO3_D1_d           |
|           USER_GPIO3            |          GPIO4_B1_d           |
|              RES0               |          SARADC0_IN5          |
|              RES1               |          SARADC0_IN6          |
|              RES2               |          SARADC0_IN7          |
|              RES3               |          SARADC1_IN1          |
|              RES4               |          SARADC1_IN2          |
|              RES5               |          SARADC1_IN3          |
|              RES6               |          SARADC1_IN4          |
|              RES7               |          SARADC1_IN5          |
|              RES8               |          SARADC1_IN6          |
|              RES9               |          SARADC1_IN7          |
|              RES10              |       PMIC_32KOUT_WIFI        |
|              RES11              |              NC               |
|              RES12              |              NC               |
|              RES13              |              NC               |
|              RES14              |              NC               |
|              RES15              |              NC               |
|              RES16              |              NC               |
|              RES17              |              NC               |
|              RES18              |              NC               |
|              RES19              |              NC               |
|              RES20              |              NC               |
|              RES21              |              NC               |
|              RES22              |              NC               |
|              RES23              |              NC               |
|              RES24              |              NC               |
|              RES25              |              NC               |
|              RES26              |              NC               |
|              RES27              |              NC               |
|              RES28              |              NC               |
|              RES29              |              NC               |
|              RES30              |              NC               |
|              RES31              |              NC               |
|              RES32              |              NC               |
|              RES33              |              NC               |
|              RES34              |              NC               |
|              RES35              |              NC               |
|              RES36              |              NC               |
|              RES37              |              NC               |
|              RES38              |              NC               |
|              RES39              |              NC               |
|              RES40              |              NC               |
|              RES41              |              NC               |
|              RES42              |              NC               |
|              RES43              |              NC               |
|              RES44              |              NC               |
|              RES45              |              NC               |
|              RES46              |              NC               |
|              RES47              |              NC               |

**It is the UP4 standard definition. If compatible design is required, it is recommended to design according to it.**

### 2.7 SoM Hardware Design Description

**Power Pin**
| **Function** | **Signal Name** |   **I/O**    | **Default Function**                                         | Pin Number |
| :----------: | :-------------: | :----------: | ------------------------------------------------------------ | :--------: |
|    Power     |   VCC5V0_SYS    | Power Input  | The core board power supply pins are **5V**, and the current of the carrier board should **not less than 2.5A**. |            |
|              |    VCC3V3_SD    | Power Output | It is only used for SD card power supply, with a maximum output current capability of **500mA**. |            |
|              |       GND       |    Ground    | For the SoM power ground and signal ground, **all GND pins must be connected**. |            |

| Function | **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| Power supply| VCC5V0\_SYS| Power Input| Power Supply for SoM:||

**System Control Pin**

| **Function**| **Signal Name**| **I/O**| **Default Function**| **Pin Number**|
|:----------:|:----------:|:----------:|----------|:----------:|
| CPU Reset| RESETn| I| SoM power reset, low level effective. Do not add additional capacitive load to this pin, so as not to affect the SoM normal startup.| 6|
| Power Enable| PMIC\_EXT\_EN| O| Enable signal to control the external power supply of the carrier board, output by the SoM, 3.3 V level.| 4|
| On/Off| PMIC\_PWRON| I| Low level is valid, long press to turn off, short press to turn on.| 8|
| BOOT Selection | EMMC\_BOOT| I| When the signal is grounded, the startup card enters the Maskrom download mode.| 1|
| Wake up| WAKEUP| I| SoM wake-up button| 7|
| Debug Port| UART2\_TX\_M0\_DEBUG UART2\_RX\_M0\_DEBUG| I/O| Debug Port, please keep the port functions.| 106 107|

(Including minimum system block diagram)

The FET3562J-UP4 SoM integrates power, reset monitoring, and storage circuits, requiring only minimal external circuitry. A complete minimum system can be powered and run with a single 5V supply.

Refer to “Appendix IV. Minimum System Diagram” However, in most cases, it is recommended to connect some external devices—such as a debugging serial port and a port for flashing images—in addition to the minimal system. Otherwise, you can not check whether the system has booted. After completing these steps, you can then add the required functions based on the SoM's default interface definition provided by Forlinx.

For the design of the SoM's peripheral circuits, please refer to Section 3.5, "OK3562J-UP4 Carrier Board Description".

## 3\. OK3562J-UP4 Embedded Development Description

### 3.1 OK3562J-UP4 Development Board Interface Diagram

Connection method: Stamp hole + LGA.   
The main interfaces are shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213054594-2161b33e-8d96-48b9-86de-69e929720368.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213054869-5c84eb00-5b80-40e6-982a-62f3f9144ac4.png)

### 3.2 OK3562J-UP4 Development Board Dimension Diagram

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055013-7dd0e76a-7d0a-45ef-881d-9ecf6212c0b8.png)

PCB: 130mm×190mm

Mounting hole dimensions: Pitch: 120mm × 180mm, hole diameter: 3.2mm.

Plate making process: 1.6mm thickness, 4-layer PCB.

Power Voltage: DC 12V

The OK3562J-UP4 carrier board is equipped with two mounting holes for heat sinks (3.2 mm in diameter). You may choose to install a heat sink according to the on-site environment. Please add a insulating thermal pad between the contact surface of the heat sink and the SoM. Recommended heat sink: 38mm × 38mm × 10mm. See below for details.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055089-bac201d7-c499-4a9f-ab40-93fcc6665d18.png)

### 3.3 Naming Rules

A-B-C+D E F :G-H

| **Field**| **Field Description**| **Value**| **Description**|
|:----------:|:----------:|:----------:|:----------:|
| A| Product Line Identification| OK| Forlinx Embedded development board|
| \-| Separator| \-| Confirm whether to add the separator by CPU brand series|
| B| CPU Name| 3562| RK3562|
| \-| Segment Identification| \-|
| C| Connection| UP4| UniversalPackage general package 4 means 40\*40|
| \+| Segment Identification| \+| The configuration parameter section follows this identifier.|
| D| Type Label| M| Carrier board (Carrier board is marked with M, not filled in by default)|
| E| Operating Temperature| I| -40 to 85℃ Industrial-grade|
| F| PCB Version| 11| V1.1|
| | | xx| Vx.x|
| :| Separator| | It is followed by the manufacturer's internal identification.|
| G| Connector Origin| N| No Partition\\No Connector|
| \-| Hyphen| \-| Grade Mark Connector|
| H| Grade Identification| Blank| Mass Production|

### 3.4 Carrier Board Interfaces

| **Function**| **Quantity**| **Parameter**|
|:----------:|:----------:|----------|
| WiFi| 1| Single antenna 2.4G\&5GHz   |                                                                                                               Wi-Fi Dual-band 1X1 802.11ac +Bluetooth 4.2|
| Bluetooth| 1|
| Audio| 2| Dual-channel speaker connector, class-D, 1.3 W; Stereo headphone output, 32 Ohm load;               Headphone recording|
| MIPI-CSI| 3| Led out via FPC connector; 4-lane + 2-lane + 2-lane; the 4-lane section can be connected to a 4-to-4 analogue camera module.|
| TF Card| 1| Data rate up to SDR104;|
| 4G| 1| Supports 4G modules with a miniPCIE interface, integrating USB2.0 communication signals.|
| UART Debug| 1| Integrated into a single Type-C port, enabling connection to a PC for debugging.|
| USB3.0| 1| The USB\_A port can switch between host and device modes and supports USB flashing.|
| USB2.0| 1| Connected via the USB hub|
| Ethernet| 2| Led out via standard RJ45 socket, 1 x Gigabit port and 1 x 100 Mbps port.|
| MIPI-DSI| 1| 4-lane MIPI-DSI, supports a capacitive touch screen with backlight brightness adjustment and offers a maximum single-channel resolution 1920×1080@60Hz.|
| RTC| 1| On-board CR1220 battery, keep going when power is off|
| RS485| 1| Electrical quarantine|
| CAN| 2| Supports CAN2.0B, electrical quarantine|
| ADC| 3| Led out from the pin header and can be connected to the on-board sliding rheostat.|
| SPI| 1| 2 x SPI led out via a simple terminal block, and can be used to connect peripherals for debugging functionality.|
| UART| 1| 5-wire UART, pin header connection|
| KEY ADC| 5| 1 x SARADC, five buttons are routed out|

**Note: The parameters in the table are the theoretical values of hardware design or CPU.**

### 3.5 OK3562J-UP4 Carrier Board Description

**Note:**

- **The component UID with "\_DNP" mark in the diagram below represents it is not soldered by  
  default;**

- **The schematic diagrams in this manual are only for interface descriptions. Please refer to the source file materials for hardware design.**

#### 3.5.1 Carrier Board Power

As shown, the power supply for the development board is 12V DC （from P28). VDD\_5V supplies power to the SoM. Once the SoM is powered up, it outputs PMIC\_EXT\_EN to enable U32 and U33 on the carrier board, and VCC\_5V, VCC\_3V3, and VCC\_1V8 supply power to the devices on the carrier board. The STANDBY pin controls VCC\_3V3\_S to enable or disable the power supply for the development board, achieving reduced power consumption.

EXTP\_EN ensure to power on the SoM first, followed by the carrier board, to prevent latch-up effects that could damage the CPU.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055154-644bff9a-97f7-4c1c-bde3-54e5b9e34be9.png)

#### 3.5.2 Power/Reset Keys

K1 on the carrier for USB programming. Holding K1 before powering on enables USB programming.

K2 on the carrier board is for powering ON/Off. By default, the board runs automatically when powering on. While running, press and hold the key to shut down; press it shortly to restart.

K5 on the carrier board is for the resetting. Press it reset the power on the SoM to achieving a full board power reset.

K6 on the carrier board is for waking up. After the board enters sleep mode press it shortly to wake up the board.

The FET3562J-UP4 SoM does not have the WAKEUP feature.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055236-a6f99942-e48a-441c-b3a8-9728d18c4c98.png)

#### 3.5.3 LRADC Button

The carrier board is configured with 1 x LRADC signal, utilizing a button and a resistor voltage divider to enable key value sampling. The LRADC is pulled up to 1.8V via a 10K resistor on the SoM.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470690083-7dcb1a4d-d280-4767-91cb-fc738eebb5c2.png)

#### 3.5.4 Debugging Serial Port

The carrier board features a single USB Type-C port with 3 x integrated debug serial ports. Install the XR21V1414IM48 driver on your computer, connect the P36 port to the computer, and select the DEBUG\_A debug serial port to start debugging.

Only the DEBUG\_A debug serial port is led out from the FET3562J-UP4 SoM.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470712663-d242e396-07f7-4f65-9587-d3812998fdcc.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470732066-f94a6ae3-cb80-470a-ba3b-27726bada3c6.png)

**Note: To facilitate debugging later, please ensure that the debugging serial port is led out when designing your own carrier board.**

#### 3.5.5 RTC

An RTC device is connected to the carrier board via the I2C\_A bus. It enables a compatible power supply from either VCC\_3V3 or a button cell battery via D10, which ensures the RTC chip remains powered by the battery after the carrier board is powered off. The RX8010SJ chip is used in the default design. Button battery: CR1220.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470755136-1f657d5b-c49d-4eba-a1e2-f54498e76637.png)

#### 3.5.6 TF Card

The TF card interface on the development board is connected to the CPU’s SDMMC0 channel. Power for the TF card is supplied by the VCC\_3V3\_SD output from the SoM.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470777630-ab7cebba-b16e-4e42-a449-5316c5cf864b.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470824905-b74660c2-2e86-4b92-ae46-b6537dff68c0.png)

**Note:**

- **The bus pull-up resistors have already been configured on the SoM, and it can’t be configured on the carrier board;**  
- **The TF card is a hot-swappable device. Please implement ESD protection;**  
- **The SD signals should be equalized.**

#### 3.5.7 USB Download

There is a USB Type-C port located at P42 on the back of the development board. It utilizes the P/N differential signals from the USB 3.0\_A (pin P19) signal, facilitating connection to a computer for flashing and debugging.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470864690-f281cdfb-2e50-4f91-99cb-ad7fd6c1a4d4.png)

#### 3.5.8 MIPI\_DSI

The P11 on the development board is MIPI\_DSI port, supporting 4 Lane MIPI\_DSI.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470887348-2637fcf3-8fe7-4361-996a-0af1184eec1e.png)

#### 3.5.9 MIPI\_CSI

There are there FPC (P6, P7, P8, 0.5mm pitch, with flip cover) on the carrier board for connecting MIPI-CSI camera.

P7 and P8 supports 2lane MIPI-CSI connections.

The P6 port supports 4lane MIPI-CSI connection and multiplexes a signal line with the P9 port. The P9 port is used to connect up to four analogue camera modules. It is not possible to use the P6 and P9 ports for both functions simultaneously.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055316-a26c7830-4e72-47bd-91ff-ca7e4c46f006.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471375913-93d9edba-db06-451d-a291-cace295f0488.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055389-71a35fde-c1c3-4bce-a263-2152415b83b8.png)



![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055459-f53714f0-a7f5-4448-bbd3-0f95d0291db2.png)

#### 3.5.10 WIFI\&BT

The development board comes with an integrated Wi-Fi \& Bluetooth module, model number AW-CM358SM. The Wi-Fi module utilizes an SDIO interface, supports dual-band operation in 2.4GHz and 5GHz, and complies with IEEE 802.11a/b/g/n/ac standards. The Bluetooth module uses UART \& PCM interfaces and complies with Bluetooth 5.2 specifications. P10 is an SMA interface for antenna connection. Please use a 2.4GHz\&5GHz dual-band antenna.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055547-9ae7927e-47c0-4412-9039-e600efe2d530.png)

#### 3.5.11 USB2.0

There is an onboard USB 2.0 HUB on the development board, which is expanded to two downstream USB HOST ports, connecting a standard USB 2.0-A interface and a mini-PCIE interface. The mini-PCIE interface can connect the 4G module.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055656-db29e6a0-3b5f-401a-821b-269820359e11.png)

#### 3.5.12 4G

The 4G module can be configured on the development board, and the supported specifications are miniPCIE interface, 3.3 V power supply, and USB2.0 communication.

P20 is a nanoSIM card slot, which is self-ejecting. Pay attention to the insertion direction according to the card identification. It does not support card hot plug.

Before using the 4G function, please power off the board, install the 4G module, the SIM card, and the 4G ipex jumper from the module to the board P15, so that the antenna can be externally connected through the SMA interface of P16.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470924476-830049cf-2a25-4256-a25d-f775657aca64.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470942308-891178f6-5b04-4a72-aafb-c7e99a6d7a18.png)

#### 3.5.13 USB3.0

The development board features an onboard USB 3.0 interface, which is the native USB 3.0 from the SoM. A standard USB 3.0 Type-A interface is connected on the development board. Port A supports OTG, controlled by the DIP switch S3: OFF for Device mode, ON for Host mode.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055755-ed281cb8-2690-47be-8cd4-d0cbb2559e81.png)

#### 3.5.14 Ethernet

The development board supports two native 1000m network ports, which are realized by using the RGMII of the SoM and the YT8521SH chip, and can be connected to the external network equipment through the standard RJ45 socket with a network transformer.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055841-ea941aba-58e5-4852-9869-a225af6a5692.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773470975646-bb009f3e-ebed-4bb4-875f-cf90cac6d4f3.png)

The development board supports one native 100M Ethernet port, implemented using the SoM RMII interface with the YT8512H chip. It is connected to external network devices via a standard RJ45 connector equipped with a network transformer.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055910-1ca4d23f-c6c5-4994-bbff-29b02baecc57.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213055983-60dbd223-2b6b-4903-a028-24631caf4453.png)

#### 3.5.15 CAN

1 x standard CAN is led out from the development board via native CAN0 and CAN1. Because of the quarantine, the interface supports the maximum rate of 5Mbps, and the electrical quarantine is designed to meet the protection requirements in most scenarios.

The CAN signal is routed via green terminals with a 3.81 mm pitch; a 120-ohm terminating resistor is installed using a jumper cap.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213056068-148c76d1-d97c-4e46-90e4-c7130fd3b5bf.png)

#### 3.5.16 485

1 x standard 485 is led out from the development board via native UART\_C. Due to the UART rate limitation of the CPU, the interface supports a maximum rate of 4Mbps, and the electrical quarantine is designed to meet the protection requirements in most scenarios.

The 485 signal is routed via green terminals with a 3.81 mm pitch; a 120-ohm terminating resistor is installed using a jumper cap.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213056142-1270bfb6-4ad9-4ed2-941b-db6b0f752949.png)

#### 3.5.17 GPADC

The GPADC is connected via 2.54 mm pitch pins. It can be connected directly using DuPont wires via a potentiometer. The SoM features a total of 3 x GPADC, with a maximum sampling voltage of 1.8 V.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471424072-7b1ce0e2-2a29-4212-95ef-898afbf49756.png)

#### 3.5.18 UART

1 x five-wire UART is routed from the development board and powered by a 3.3V signal.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471077165-88f07312-dd8d-47d9-8822-618fb7f1f15a.png)

#### 3.5.19 SPI

A five-wire SPI interface is led out from the SoM (5V power supply)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213056216-fa0bbf1a-8ce2-40c9-8db9-4dd35a20d54e.png)

#### 3.5.20 IO Expansion

An IO expansion chip is led out from the development board via I2C. 24 additional I/O pins can be expanded for expanding control signals and resetting signals.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471105706-0e167923-28d4-48a9-a459-a6ce77186c3a.png)

#### 3.5.21 Audio

The development board features a standard 3.5mm headphone jack (CTIA international standard), located at pin P40, which supports stereo headphone playback and mono microphone recording;

The P39 is a speaker port that supports stereo speakers, Class D, with 1.3W of power;

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471131750-7fb2a14c-2b03-4d7a-a9e5-32c80baa70cc.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773471152960-bf8aaa58-655f-459f-a223-3238686a02e1.png)

A single I2S signal is routed from the carrier board to the NAU88C22YG CODEC chip, which provides a standard 3.5mm headphone jack and separate left and right channel amplifiers.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213056294-3350d278-af60-467e-b32e-1196d56ef0d0.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213056372-10ef5c0d-d617-4073-bffe-0d1218a60d04.png)

## 4\. Package Dimensions Diagram

Package: LCC+LGA

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633273437-f7368261-afda-403a-9257-adc3ea7f5d25.png)

To ensure soldering yield, please refer to the following specifications for stencil design:

**Hole Opening Scheme**

Thickness: Use a 0.1/0.15mm step stencil, with the core board mounting area uniformly designed for a 0.15mm upper step;

LCC Pad Aperture: The opening width should be 0.6mm, and the length should extend outward by 2.15mm along the edge of the pad;

Circular LGA pads: Openings with a diameter of 0.85mm, with a 0.2mm-wide support bridge at the center. Square LGA pads: Openings with dimensions of 0.83mm × 0.83mm.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633273553-94cadaa1-5abb-412c-b703-89e516dcfce3.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1778633273650-bb5ffc52-08e9-47ed-8760-217a9edbbe0c.png)

**Note:**

- **Since stepped stencils can affect the solder volume on surrounding components, please reduce the aperture size of the stencil openings for these components;**

- **It is recommended to use the official-provided footprint library to avoid design discrepancies.**

## 5\. OK3562J-UP4 Development Board Linux Consumption Table

| **No.**| **Item**| **SoM Power (W)**| Development Board **Power** (including SoM)|
|:----------:|----------|:----------:|:----------:|
| 1| No-load startup peak power| 2.06W| 3.216W|
| 2| Sleep mode power consumption| 0.0279W| 0.672W|
| 3| Standby power consumption with no load| 0.62W| 1.56W|
| 4| USB read/write power consumption| 0.775W| 2.052W|
| 5| TF card flashing power consumption| 1.185W| 2.124W|
| 6| 4G module PING power consumption| 0.695W| 2.34W|
| 7| WiFi module PING power consumption| 0.615W| 1.488W|
| 8| 7‑inch MIPI screen video playback power consumption.| 1.815W| 5.256W|
| 9| CPU stress + memory stress + eMMC read/write stress test power consumption.| 2.115W| 2.748W|

**Note: The SoM configuration is 1GB memory + 8GB eMMC, the 4G module is Quectel EC20, and the screen is an Forlinx optional product. SoM power supply: 5V; the carrier board is 12V; Power consumption is for reference only.**

## 6\. Minimum System Diagram

**It has SoM, power, debug serial port, system image flashing port.**

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213062045-2a843151-09b2-461d-9968-17415d41d88c.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213062128-e432381c-6fdf-4cb5-b719-43f524392901.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213062205-6a7f64ef-5185-4cee-a06b-d50f597971e5.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773213062277-0fb85d56-fd3a-4636-b856-3275a34db785.png)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773216005229-c9ff459e-fb90-4482-919d-42d64843c9a6.png)![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1773216036055-e7a7853b-a3ba-41b8-bc1d-a9f9c5037202.png)