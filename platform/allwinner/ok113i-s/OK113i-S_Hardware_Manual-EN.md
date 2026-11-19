# OK113i-S_User's Hardware Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Version No. | Revision Date | Revision History |
| ----------- | ------------- | ---------------- |
| V1.0        | 11/06/2024    | Initial Release  |

## Overview

This manual is designed to help users quickly get familiar with the product, as well as understand the functions and configurations of its interfaces. It mainly covers the interface features of the development board, interface descriptions, product power consumption, and troubleshooting methods for common issues that may arise during use. Annotations are provided for selected commands throughout the manual to facilitate user understanding, with a focus on practical, essential information. For details such as pin function multiplexing and hardware troubleshooting methods, please refer to the *OK113i-S Pin Multiplexing Reference Table* and *OK113i-S Design Guide* provided by Forlinx.

This manual is structured into 4 chapters:

- Chapter 1. is the general overview of the CPU, with a brief introduction to its performance and applicable industries;

- Chapter 2.  is the overall introduction to the SoM, including descriptions of connector pins and their functions;
- Chapter 3. is the full presentation of the development board, split into multiple chapters that cover both hardware principles and basic design considerations;
- Chapter 4. covers the power consumption and other supplementary notes, which mainly describe the board’s power performance and other usage precautions.

## 1. Introduction to T113-i 

T113-i is an advanced application processor designed for multimedia decoding platforms. The T113-i integrates a 64-bit XuanTie C906 RISC-V CPU, dual-core Cortex - A7 CPU, and HiFi4 DSP, providing efficient computing power.

**Key Features:**

- Supports decoding in all formats, including H.265, H.264, MPEG-1/2/4, and JPEG. A standalone encoder can encode in JPEG or MJPEG.
+ The T113-i integrates H.265/H.264 4K decoding and SmartColor2.0 post-processing, delivering an excellent video entertainment experience.
+ Integrated ADCs/DACs and I2S/PCM/DMIC/OWA audio interfaces work seamlessly with the CPU, accelerating multimedia algorithms and improving user experience.
+ The T113-i supports RGB/LVDS/MIPI DSI/CVBS OUT display output interfaces to meet various display requirements.
+ The T113-i features a wide range of connectivity interfaces, such as USB, SDIO, EMAC, TWI, UART, SPI, PWM, GPADC, LRADC, TPADC, IR TX&RX, and more.

**Applications:**

+ Rail transit
+ Power and energy
+ Industrial control
+ Security and surveillance
+ Conference systems
+ Portable devices

T113-i application processor block diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/001_EN.png)

## 2. FET113i-S SoM Introduction

### 2.1 FET113i-S SoM Appearance
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/002_EN.png)

eMMC configuration front view

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/003_EN.png)

Nand configuration front view

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/004_EN.png)

Back view

### 2.2 FET113i-S SoM Dimensions
The FET113i-S SoM dimensions are shown below:



![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/005_EN.png)

Structural dimensions: 44mm×35mm. For more detailed dimensions, see the dxf structure file in the user documentation.

Fabrication process: 1.2mm thickness, 8-layer immersion gold PCB.

Stamp hole connection, bringing out 146 pins with a 1mm pin center spacing.

Single pin size: 1.4mm x 0.6mm

### 2.3 Performance Parameters
#### 2.3.1 System Clock Frequency
| Name | Specification | | | | Description |
| :---: | :---: | --- | --- | --- | :---: |
| | Min | Typical | Max | Unit ||
| System Clock Frequency | — | — | 1.2 | GHz | Industrial Grade |
| System RTC Clock | — | 32.768 | — | KHz | — |


#### 2.3.2 Power Supply Parameters
| Parameter | Pin label | Specification | | | | Description |
| :---: | :---: | :---: | --- | --- | --- | :---: |
| | | Min | Typical | Max | Unit ||
| Main Power Supply Voltage | VSYS | 4.5 | 5 | 5.1 | V | — |
| No-load Current | — | 75 | — | 85 | mA | — |
| Full-load Current | — | 210 | — | 650 | mA | — |


#### 2.3.3 Operating Environment
| Parameter description | | Specification | | | | Description |
| :---: | --- | :---: | --- | --- | --- | :---: |
| | | Min | Typical | Max | Unit ||
| Operating Temperature | Operating Environment | -40 | 25 | +85 | ℃ | Industrial Grade |
| | Storage Environment | -40 | 25 | +125 | ℃ | |
| Humidity | Operating Environment | 10 | — | 90 | ％RH | No Condensation |
| | Storage Environment | 5 | — | 95 | ％RH | |


#### 2.3.4 SoM Interface Speed
| Parameter | Specification | | | | Description |
| :---: | :---: | --- | --- | --- | :---: |
| | Min | Typical | Max | Unit ||
| Serial Communication Speed | — | 115200 | 4M | bps | — |
| SPI Communication Speed | — | — | 100 | MHz | — |
| TWI Communication Speed | — | 100 | 400 | Kbps | — |
| CAN Communication Speed | | | 1 | Mbps | — |
| SD/MMC/SDIO | — | — | 50 | MHz | — |
| USB Interface Speed | — | 480 | — | Mbps | — |
| PWM Interface Speed | — | — | 100 | MHz | — |


#### 2.3.5 ESD Features
| Parameter | Specification | | Unit | Description |
| :---: | :---: | --- | :---: | :---: |
| | Min | Max | ||
| ESD HBM(ESDA/JEDEC JS-001-2017) | -2000 | 2000 | V | Applies to all SoM pins |
| ESD CDM(ESDA/JEDEC JS-002-2018) | -250 | 250 | V | Applies to all SoM pins |

**Note:**

- **The above data is sourced from the chip manual;**
- **All signals brought out from the SoM are ESD-sensitive. During carrier board design, provide adequate ESD protection for the interfaces, and take care to ensure ESD protection during SoM transportation, assembly, and use.**

### 2.4 SoM Interface Resources
The FET113i-S SoM interface resources are listed in the table below:

| Function | Quantity | Parameter |
| :---: | :---: | --- |
| RGB_LCD<sup>1</sup> | 1 | Supports DE/SYNC mode, up to 1920x1080@60fps |
| LVDS<sup>1</sup> | 1 | Single link, up to 1366x768@60fps<br/>Dual link, up to 1920x1080@60fps |
| MIPI_DSI<sup>1</sup> | 1 | 4-lane, up to 1920x1200@60fps |
| CVBS_OUT | 1 | Supports NTSC and PAL, 10-bit pixel depth, and YUV444 and HV format output up to 4K@60Hz |
| CSI | 1 | Supports an 8-bit digital camera interface, with a maximum pixel clock of 148.5MHz |
| CVBS_IN | 2 | Supports NTSC and PAL, 10-bit video ADCs |
| Audio out | 2 | One stereo headphone output<br/>One differential Lineout output |
| Audio in | 5 | Three differential/single-ended MIC inputs<br/>One stereo Linein input<br/>One stereo FMIN input |
| I2S | ≤3 | Supports master/slave mode; sampling rate from 8kHz to 384kHz |
| DMIC | 1 | Digital PDM microphone, sampling rate from 8kHz to 48kHz |
| OWA | 1 | Compliant with the S/PDIF interface |
| USB DRD | 1 | Supports host mode, up to 480Mbit/s<br/>Supports device mode, up to 480Mbit/s |
| USB HOST | 1 | USB2.0 in host mode, up to 480Mbit/s |
| EMAC | 1 | 10/100/1000 Mbit/s Ethernet supports RGMII and RMII interfaces; |
| UART<sup>2</sup> | ≤5 | Up to 4 Mbit/s |
| SPI<sup>3</sup> | 1 | Only SPI1 is available; supports SPI mode and DBI mode |
| TWI<sup>4</sup> | ≤3 | Compatible with the I2C bus, up to 400 kbit/s |
| CIR | 1 | Supports one infrared receiver and one infrared transmitter |
| PWM<sup>5</sup> | ≤7 | Output frequency from 0 to 24MHz or 100MHz |
| GPADC | ≤2 | SAR-type ADC, 12bit resolution, 8bit accuracy, sampling rate up to 1MHz, maximum sampling voltage 1.8V |
| TPADC | 1 | Four-wire resistive touch panel input detection |
| LRADC | 1 | Low-speed ADC input for key detection |
| CAN | 2 | Supports CAN2.0B |
| SD<sup>6</sup> | 2 | SDC0 supports only 3.3V IO level, configured as an SD card by default;<br/>SDC1 supports only 3.3V IO level |
| JTAG | 1 | The development board brings out JTAG signals via a 2 x 5  2.0mm-pitch connector |

**Note:** 

- **Parameters in the table are hardware design or CPU theoretical values;**
- **The three display interfaces are multiplexed and share the same output port;**

- **Except for the DEBUG UART, 5 UARTs are available to the user;**

- **SPI0 is occupied by the SoM, so you can only use SPI1;**
- **TWI2 is unavailable because it is occupied by the SoM;**

- **PWM7 is occupied by the SoM; the user can use PWM0~6;**

- **SDC2 is occupied by the SoM.**

### 2.5 FET113i-S SoM Pin Definitions
#### 2.5.1 FET113i-S SoM Pin Schematic
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/006_EN.png)

#### 2.5.2 FET113i-S SoM Pin Function Description
**Note 1:**

**Num —— SoM connector pin number**

**Ball —— CPU pin ball number**

**GPIO —— CPU pin general-purpose I/O port number**

**Vol  ——SoM pin signal level**

**Note 2:**

**Signal Name ——SoM connector net name**

**Pin Description ——SoM pin signal name description**

**Default Function ——All SoM pin functions are defined by the "Default Function" column in the table below; do not modify them, otherwise they may conflict with the factory driver. If you have any questions, please contact our sales or technical support in a timely manner.**

**Note 3: Pins marked "Do Not Use on Carrier board" in the "Default Function" column are used by the SoM and must not be used in carrier board design**

Table 1  SoM Stamp Hole Connector Interface Pin Definitions

| Num | Ball | Signal Name | GPIO | Vol | Pin Description | Default Function |
| :---: | :---: | --- | --- | :---: | :---: | --- |
| 1 | - | GND1 | - | - | - |  |
| 2 | - | VCC-3V3 | - | - | 3.3V output from the SoM |  |
| 3 | - | VCC-5V-SYS | - | - | SoM power input 5V |  |
| 4 | - | VCC-5V-SYS | - | - | SoM power input 5V |  |
| 5 | - | GND2 | - | - | - |  |
| 6 | - | GND3 | - | - | - |  |
| 7 | G15 | PB8-SPI1-HOLD | PB8 | 3.3V | SPI1 signal | PB8_SPK_ON |
| 8 | G16 | PB9-SPI1-MISO | PB9 | 3.3V | |  |
| 9 | F15 | PB11-SPI1-CLK | PB11 | 3.3V | |  |
| 10 | F17 | PB10-SPI1-MOSI | PB10 | 3.3V | |  |
| 11 | F16 | PB12-SPI1-CS | PB12 | 3.3V | |  |
| 12 | - | GND4 | - | - | - |  |
| 13 | D20 | MICIN1P | - | - | MIC1 differential input |  |
| 14 | D19 | MICIN1N | - | - | |  |
| 15 | - | GND5 | - | - | - |  |
| 16 | C15 | LINEOUTLN | - | - | Lineout stereo differential output |  |
| 17 | B15 | LINEOUTLP | - | - | |  |
| 18 | C14 | LINEOUTRN | - | - | |  |
| 19 | B14 | LINEOUTRP | - | - | |  |
| 20 | - | GND6 | - | - | - |  |
| 21 | C17 | FMINR | - | - | FMIN |  |
| 22 | B17 | FMINL | - | - | |  |
| 23 | C16 | LINEINR | - | - | Linein input |  |
| 24 | B16 | LINEINL | - | - | |  |
| 25 | - | GND7 | - | - | - |  |
| 26 | E16 | MBIAS | - | 1.8V~2.5V | Microphone bias voltage output |  |
| 27 | D17 | MICIN3P | - | - | MIC3 differential input |  |
| 28 | D16 | MICIN3N | - | - | |  |
| 29 | E17 | HBIAS | - | 1.8V~2.5V | Headset microphone bias voltage output |  |
| 30 | A17 | MIC-DET | - | - | Headset microphone detection |  |
| 31 | E15 | MICIN2P | - | - | MIC2 differential input |  |
| 32 | D15 | MICIN2N | - | - | |  |
| 33 | - | GND8 | - | - | - |  |
| 34 | F13 | HPOUTL | - | - | Headphone stereo output |  |
| 35 | D13 | HPOUTR | - | - | |  |
| 36 | A13 | HP-DET | - | - | Headphone jack detection |  |
| 37 | E13 | HPOUTFB | - | - | Headphone ground reference |  |
| 38 | - | GND9 | - | - | - |  |
| 39 | C13 | GPADC0 | - | 1.8V | General-purpose ADC input |  |
| 40 | B13 | GPADC1 | - | 1.8V | General-purpose ADC input |  |
| 41 | B12 | ADKEY0 | - | 1.8V | Key detection ADC |  |
| 42 | - | GND10 | - | - | - |  |
| 43 | E19 | TV-OUT | - | - | |  |
| 44 | - | GND11 | - | - | - |  |
| 45 | C9 | TV-IN1 | - | - | |  |
| 46 | - | GND12 | - | - | - |  |
| 47 | B9 | TV-IN0 | - | - | |  |
| 48 | - | GND13 | - | - | - |  |
| 49 | A8 | USB1-DP | - | - | |  |
| 50 | B8 | USB1-DM | - | - | |  |
| 51 | - | GND14 | - | - | - |  |
| 52 | B7 | USB0-DP | - | - | |  |
| 53 | C7 | USB0-DM | - | - | |  |
| 54 | - | GND15 | - | - | - |  |
| 55 | A4 | PG4-SDC1-D2 | PG4 | 3.3V | | PG4_USB_VBUSDET |
| 56 | B4 | PG5-SDC1-D3 | PG5 | 3.3V | | PG5_USB_DRVVBUS |
| 57 | A3 | PG2-SDC1-D0 | PG2 | 3.3V | | PG2_UART4_TX |
| 58 | B3 | PG1-SDC1-CMD | PG1 | 3.3V | | PG1_USB_ID |
| 59 | C3 | PG3-SDC1-D1 | PG3 | 3.3V | | PG3_UART4_RX |
| 60 | B2 | PG0-SDC1-CLK | PG0 | 3.3V | | PG0_USB_HUB_RST |
| 61 | - | GND16 | - | - | - |  |
| 62 | A6 | PG8-UART3-TX | PG8 | 3.3V | |  |
| 63 | B6 | PG9-UART3-RX | PG9 | 3.3V | |  |
| 64 | B5 | PG6-UART1-TX | PG6 | 3.3V | |  |
| 65 | C6 | PG10-PWM3 | PG10 | 3.3V | | PG10_WIFI_EN |
| 66 | C5 | PG7-UART1-RX | PG7 | 3.3V | |  |
| 67 | E7 | DEBUG-UART0-TX | PG17 | 3.3V | Debug UART |  |
| 68 | D7 | DEBUG-UART0-RX | PG18 | 3.3V | Debug UART |  |
| 69 | - | GND17 | - | - | - |  |
| 70 | D5 | PG12-I2S1-LRCK | PG12 | 3.3V | | PG12_USER_GPIO1 |
| 71 | D4 | PG11-I2S1-MCLK | PG11 | 3.3V | | PG11_USER_GPIO2 |
| 72 | E6 | PG14-I2S1-DIN0 | PG14 | 3.3V | | PG14_4G_RST |
| 73 | D6 | PG13-I2S1-BCLK | PG13 | 3.3V | | PG13_ETH1_RESET |
| 74 | F6 | PG15-I2S1-DOUT0 | PG15 | 3.3V | | PG15_ETH1_INT |
| 75 | D3 | PF6-SDC0-DET | PF6 | 3.3V | SD card |  |
| 76 | C2 | PF0-SDC0-D1 | PF0 | 3.3V | |  |
| 77 | C1 | PF1-SDC0-D0 | PF1 | 3.3V | |  |
| 78 | D2 | PF2-SDC0-CLK | PF2 | 3.3V | |  |
| 79 | D1 | PF3-SDC0-CMD | PF3 | 3.3V | |  |
| 80 | E3 | PF4-SDC0-D3 | PF4 | 3.3V | |  |
| 81 | E2 | PF5-SDC0-D2 | PF5 | 3.3V | |  |
| 82 | - | GND18 | - | - | - |  |
| 83 | M6 | PE17-TWI3-SDA | PE17 | 1.8V | |  |
| 84 | N6 | PE16-TWI3-SCK | PE16 | 1.8V | |  |
| 85 | P3 | PE10-GPHY1-25M | PE10 | 1.8V | |  |
| 86 | - | GND19 | - | - | - |  |
| 87 | N5 | PE15-RGMII1-RXCK | PE15 | 1.8V | RGMII receive |  |
| 88 | V1 | PE0-RGMII1-RXCTL | PE0 | 1.8V | |  |
| 89 | U1 | PE1-RGMII1-RXD0 | PE1 | 1.8V | |  |
| 90 | U2 | PE2-RGMII1-RXD1 | PE2 | 1.8V | |  |
| 91 | R4 | PE13-RGMII1-RXD2 | PE13 | 1.8V | |  |
| 92 | N4 | PE14-RGMII1-RXD3 | PE14 | 1.8V | |  |
| 93 | - | GND20 | - | - | - |  |
| 94 | U3 | PE3-RGMII1-TXCK | PE3 | 1.8V | RGMII transmit |  |
| 95 | R1 | PE6-RGMII1-TXCTL | PE6 | 1.8V | |  |
| 96 | T2 | PE4-RGMII1-TXD0 | PE4 | 1.8V | |  |
| 97 | T3 | PE5-RGMII1-TXD1 | PE5 | 1.8V | |  |
| 98 | N1 | PE11-RGMII1-TXD2 | PE11 | 1.8V | |  |
| 99 | R5 | PE12-RGMII1-TXD3 | PE12 | 1.8V | |  |
| 100 | - | GND21 | - | - | - |  |
| 101 | R2 | PE7-RGMII1-CLKIN | PE7 | 1.8V | RGMII external input clock |  |
| 102 | - | GND22 | - | - | - |  |
| 103 | P2 | PE9-RGMII1-MDIO | PE9 | 1.8V | Ethernet management interface |  |
| 104 | R3 | PE8-RGMII1-MDC | PE8 | 1.8V | |  |
| 105 | - | GND23 | - | - | - |  |
| 106 | V18 | PD21-LCD0-VSYNC | PD21 | 3.3V | |  |
| 107 | W18 | PD20-LCD0-HSYNC | PD20 | 3.3V | |  |
| 108 | M18 | PD19-LCD0-DE/LVDS1-V3N | PD19 | 3.3V | |  |
| 109 | M19 | PD18-LCD0-CLK/LVDS1-V3P | PD18 | 3.3V | |  |
| 110 | N19 | PD17-LCD0-D23/LVDS1-CKN | PD17 | 3.3V | |  |
| 111 | N20 | PD16-LCD0-D22/LVDS1-CKP | PD16 | 3.3V | |  |
| 112 | - | GND24 | - | - | - |  |
| 113 | N16 | PD15-LCD0-D21/LVDS1-V2N | PD15 | 3.3V | |  |
| 114 | N17 | PD14-LCD0-D20/LVDS1-V2P | PD14 | 3.3V | |  |
| 115 | P18 | PD13-LCD0-D19/LVDS1-V1N | PD13 | 3.3V | |  |
| 116 | P19 | PD12-LCD0-D18/LVDS1-V1P | PD12 | 3.3V | |  |
| 117 | R17 | PD11-LCD0-D15/LVDS1-V0N | PD11 | 3.3V | |  |
| 118 | T17 | PD10-LCD0-D14/LVDS1-V0P | PD10 | 3.3V | |  |
| 119 | R19 | PD9-LCD0-D13/LVDS0-V3N/DSI-D3N | PD9 | 3.3V | |  |
| 120 | R20 | PD8-LCD0-D12/LVDS0-V3P/DSI-D3P | PD8 | 3.3V | |  |
| 121 | - | GND25 | - | - | - |  |
| 122 | T18 | PD7-LCD0-D11/LVDS0-CKN/DSI-D2N | PD7 | 3.3V | |  |
| 123 | T19 | PD6-LCD0-D10/LVDS0-CKP/DSI-D2P | PD6 | 3.3V | |  |
| 124 | U18 | PD5-LCD0-D7/LVDS0-V2N/DSI-CKN | PD5 | 3.3V | |  |
| 125 | U19 | PD4-LCD0-D6/LVDS0-V2P/DSI-CKP | PD4 | 3.3V | |  |
| 126 | U20 | PD3-LCD0-D5/LVDS0-V1N/DSI-D1N | PD3 | 3.3V | |  |
| 127 | V19 | PD2-LCD0-D4/LVDS0-V1P/DSI-D1P | PD2 | 3.3V | |  |
| 128 | V20 | PD1-LCD0-D3/LVDS0-V0N/DSI-D0N | PD1 | 3.3V | |  |
| 129 | W19 | PD0-LCD0-D2/LVDS0-V0P/DSI-D0P | PD0 | 3.3V | |  |
| 130 | - | GND26 | - | - | - |  |
| 131 | M16 | PB2-LCD0-D0/CAN0-TXD | PB2 | 3.3V | | PB2_CAN0_TXD |
| 132 | M15 | PB3-LCD0-D1/CAN0-RXD | PB3 | 3.3V | | PB3_CAN0_RXD |
| 133 | K16 | PB4-LCD0-D8/CAN1-TXD | PB4 | 3.3V | | PB4_CAN1_TXD |
| 134 | K15 | PB5-LCD0-D9/CAN1-RXD | PB5 | 3.3V | | PB5_CAN1_RXD |
| 135 | K17 | PB6-LCD0-D16 | PB6 | 3.3V | | PB6_LCD/LVDS/MIPI_TP_INT |
| 136 | J17 | PB1-LCD-BL-EN | PB1 | 3.3V | |  |
| 137 | J16 | PB0-LCD-BL-PWM | PB0 | 3.3V | |  |
| 138 | J15 | PB7-LCD0-D17 | PB7 | 3.3V | | PB7_LCD/LVDS/MIPI_TP_RST |
| 139 | - | GND27 | - | - | - |  |
| 140 | C11 | TP-Y2 | - | - | Resistive touch panel signal |  |
| 141 | B11 | TP-Y1 | - | - | |  |
| 142 | A11 | TP-X2 | - | - | |  |
| 143 | C12 | TP-X1 | - | - | |  |
| 144 | - | GND28 | - | - | - |  |
| 145 | A18 | FEL | - | 3.3V | Forced upgrade mode |  |
| 146 | - | CPU-RST-KEY | - | 3.3V | Reset signal |  |


### 2.6 SoM Hardware Design Notes
The FET113i-S SoM integrates the power supply, reset circuit, and storage circuit into a compact module, so the required external circuitry is very simple; a minimal system needs only a 5V power supply and a reset button to operate, as shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/007_EN.png)

The minimal system schematic can be found in Appendix 4. In general, however, besides the minimal system, it is recommended to connect some external devices, such as a debug UART to view printed debug messages, and to reserve a USB0 interface for system programming. Once these are in place, add the functions you need based on the SoM default interface definitions provided by Forlinx.

### 2.7 LCD_DATA and RGB Color Bit Mapping
| LCD I/O | Parallel RGB I/O | | |
| :---: | :---: | --- | --- |
| | RGB565 | RGB666 | RGB888 |
| LCD0-D23 | R4 | R5 | R7 |
| LCD0-D22 | R3 | R4 | R6 |
| LCD0-D21 | R2 | R3 | R5 |
| LCD0-D20 | R1 | R2 | R4 |
| LCD0-D19 | R0 | R1 | R3 |
| LCD0-D18 | - | R0 | R2 |
| LCD0-D17 | - | - | R1 |
| LCD0-D16 | - | - | R0 |
| LCD0-D15 | G5 | G5 | G7 |
| LCD0-D14 | G4 | G4 | G6 |
| LCD0-D13 | G3 | G3 | G5 |
| LCD0-D12 | G2 | G2 | G4 |
| LCD0-D11 | G1 | G1 | G3 |
| LCD0-D10 | G0 | G0 | G2 |
| LCD0-D9 | - | - | G1 |
| LCD0-D8 | - | - | G0 |
| LCD0-D7 | B4 | B5 | B7 |
| LCD0-D6 | B3 | B4 | B6 |
| LCD0-D5 | B2 | B3 | B5 |
| LCD0-D4 | B1 | B2 | B4 |
| LCD0-D3 | B0 | B1 | B3 |
| LCD0-D2 | - | B0 | B2 |
| LCD0-D1 | - | - | B1 |
| LCD0-D0 | - | - | B0 |

## 3. OK113i-S Embedded Development Platform Introduction

### 3.1 OK113i-S Development Board Interface Diagram

On the Forlinx OK113i-S development platform, the SoM and carrier board are connected by stamp hole soldering; the main interfaces are shown in the figure below:



![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/008_EN.png)

### 3.2 OK113i-S Development Board Dimensions
The OK113i-S development board dimensions are as follows:



![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/009_EN.png)

Carrier board PCB dimensions: 130mm×190mm; for more detailed dimensions, see the dxf file in the user materials;

Mounting hole dimensions: spacing: 120mm×180mm; hole diameter: 3.2mm;

Board manufacturing process: thickness 1.6mm, 4-layer PCB;

Power supply voltage: DC 12V.

### 3.3 Carrier Board Naming Convention
A   B  C-D+IK:M

| Field | Field Description | Value | Description |
| --- | --- | --- | --- |
| A | Quality Grade | PC | Prototype sample |
| | | Blank | Mass production |
| B | Product Line Identifier | OK | Forlinx embedded development board |
| C | CPU Name | T113i | T113i |
| - | Segment Marker | - |  |
| D | Connection Method | Sx | Stamp hole |
| + | Segment Marker | + | Configuration parameters follow this marker |
| I | Operating Temperature | I | -40 to 85℃   industrial grade |
| K | PCB Version Number | 11 | V1.1 |
| | | xx | Vx.x |
| :M | Manufacturer Internal Identifier | :X | This content is for internal manufacturer use and has no impact on customers |

### 3.4 Carrier Board Resources

| Function | Quantity | Parameter |
| :---: | :---: | --- |
| USB Type-A | 2 | USB 2.0, Host only |
| USB Type-C | 1 | USB2.0, auto-sensing host/device mode; this port can be used to download programs |
| LCD | 1 | RGB666, supports capacitive/resistive touch, backlight brightness adjustment |
| LVDS | 1 | Dual asynchronous channels (8 data,2clocks), supports capacitive touch, backlight brightness adjustment |
| TV-OUT | 1 | RCA phono connector |
| TV-IN | 2 | RCA phono connector |
| Ethernet | 1 | Supports 10/100/1000Mbps auto-sensing, routed out via RJ45 |
| TF Card | 1 | The development board supports 1 TF Card channel, which can be used to program the system |
| 4G | 1 | miniPCIE socket, 4G module with USB2.0 protocol, onboard SMA antenna connector;<br/>SIM card uses a nanoSIM card slot |
| WiFi | 1 | RTL8723DU onboard by default; onboard SMA antenna connector with a shared single antenna;<br/>IEEE 802.11 a/b/g/n WIFI, up to 150Mbps transmit/receive rate;<br/>Bluetooth v2.1+EDR/4.2, up to 3Mbps |
| Bluetooth | 1 | |
| Audio | / | 1 x 4-pole headphone jack, CTIA standard, stereo, with microphone;<br/>1 x onboard electret microphone;<br/>1 x LINEIN jack;<br/>1 x FMIN jack;<br/>2 x stereo speaker interfaces, supporting 4Ω up to 1.9W |
| GPADC | 2 | Routed to a pin header, can be connected to an onboard rheostat for testing |
| KEYADC | 5 | ADC dedicated to keys; using voltage-divider sampling, 1 ADC is used to design 5 keys |
| RTC | 1 | Onboard independent RTC chip; when the Carrier board is powered off, time can be kept by a coin cell battery. |
| UART | 1 | Routed to a 2.54mm-pitch pin header for external user devices |
| SPI | 1 | Routed out via 2.54mm-pitch header pins for connecting external devices |
| CAN | 2 | Electrically isolated, compliant with the CAN2.0B protocol |
| RS485 | 2 | Electrically isolated, with automatic transmit/receive direction control |
| KEY | 3 | Programming key, reset button, and 1 user-defined button |
| LED | 1 | User-defined LED, blue |
| DEBUG | 1 | Debug serial port integrated into the USB type-C connector, default baud rate 115200 |
| JTAG | 1 | Exposed via a 2 x 7Pin dual-row 2.0mm-pitch header, supports A7 and RISC-V debugging |

**Note: Parameters in the table are hardware design or CPU theoretical values.**

### 3.5 OK113i-S Carrier Board Description
**Note: Components with the "_NC" designator in the figures below are not soldered by default.**

The schematics in this chapter are for reference only and may change; please base your design strictly on the latest source schematics.

#### 3.5.1 Carrier Board Power Supply
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/010_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/011_EN.png)

As shown above, a 12V adapter powers the development board through power jack P1. VDD_5V supplies the SoM; once the SoM powers on, it outputs VDD_3V3 to enable carrier board U5.

VDD_3V3 ensures that the SoM powers on first, followed by the carrier board.

**Note: When designing your own board, follow the power-on sequence of the development board: use the VDD_3V3 output from the SoM as the enable signal for the Carrier board DC-DC power supply, so that the SoM powers on first and the carrier board second.**

#### 3.5.2 BOOT 

The OK113i-S uses a sequential boot configuration:

- TF card boot
- EMMC BOOT boot
- EMMC USER boot
- SPI NOR/NAND boot

Since the TF card boots before EMMC, when booting from an inserted card in non-programming scenarios, do not have a BOOT partition on the TF card; create a TF card boot image instead, as described in the software user manual.

#### 3.5.3 Function Buttons


![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/012_EN.png)

As shown above, CPU_RST is the system reset button; pressing it resets and reboots the system. Pressing FEL forces the development board into upgrade mode, allowing system programming via a PC USB connection.

One onboard GPIO button is provided, whose function can be user-defined.

Note: The CPU_RST pin has capacitors and a TVS diode on the SoM; do not add other circuitry on the carrier board, as it may affect the SoM's startup timing.SoM

#### 3.5.4 Debug Serial Port
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/013_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/014_EN.png)

UART0 on the SoM is the debug serial port.

For user convenience, the USB-to-serial chip CP2102N integrates the debug serial port into the USB Type-C interface.

To use the debug serial port, first install the CP2102N driver on your computer. 

Driver download link: [https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip). 

Then use a USB-to-Type-C cable to connect P7 on the development board to a PC USB port, open a debug terminal tool on the PC such as Putty, set the baud rate to 115200, data bits to 8, no parity, and stop bit to 1, select the correct COM port, and power on the board to view the debug serial output.

**Note:**

- **SoM1. To facilitate later debugging, please route out this debug serial port when designing your own carrier board;**
- **SoM2. The carrier board debug serial port has a leakage-protection design; users are advised to follow this design.**

#### 3.5.5 ADC Button
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/015_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/016_EN.png)

The carrier board uses one ADCKEY signal; each button has a corresponding voltage-divider resistor, and the ADC samples different voltages to detect which button is pressed.

The SoM already has a 51K resistor pulling up to 1.8V, so the carrier board only needs the corresponding pull-down resistors.

#### 3.5.6 GPADC
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/017_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/018_EN.png)

The development board provides 2 GPADC sampling channels with a maximum sampling voltage of 1.8V; a jumper cap can be fitted to select the ADC connector's rheostat for functional debugging.

#### 3.5.7 LED


![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/019_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/020_EN.png)

As shown above, the development board has 1 LED controlled by GPIO, whose function can be user-defined; setting PG11 high turns the LED on.

#### 3.5.8 CAN


![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/021_EN.png)

The development board provides 2 electrically isolated CAN channels supporting CAN2.0B. P24 and P25 are 2.54mm-pitch caps for the termination resistors (120Ω); when used as a terminating device, install the jumper caps.

Connections are exposed through the P23 terminal block. When using CAN communication, it is recommended to common-ground the devices; G0 and G1 are the reference grounds for the corresponding CAN signals, and PE is the protective earth.

#### 3.5.9 RS485


![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/022_EN.png)

The development board provides 2 electrically isolated RS485 channels, with hardware-configured automatic transmit/receive direction control. P27 and P29 are jumper caps for the 120Ω termination resistors on the AB lines. Connections are exposed through the P23 terminal block; when using RS485 communication, it is recommended to common-ground the devices. G3 and G4 are the reference grounds for the corresponding RS485 signals, and PE is the protective earth.

#### 3.5.10 SPI&UART&GPIO
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/023_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/024_EN.png)

As shown above, the development board routes out SPI1, UART4, and GPIO through the 2.54mm P3 header for connecting external module devices.

#### 3.5.11 JTAG Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/025_EN.png)

As shown above, the development board exposes the JTAG interface via TP points; if this feature is not used, simply leave these pins floating.

#### 3.5.12 TF Card


![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/026_EN.png)

As shown above, the development board's TF Card uses the CPU's SDC0 channel. The TF card supply current must be no less than 400mA.

**Note:**

- **Bus pull-up resistors are already implemented on the SoM; do not add pull-ups to the bus on the carrier board;**
- **TF cards are hot-pluggable devices, so provide ESD protection;**

- **SD signals must be routed to equal length.**

#### 3.5.13 TV-OUT Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/027_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/028_EN.png)

An RCA connector exposes the analog video output signal.

#### 3.5.14 TV-IN Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/029_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/030_EN.png)

The analog video input signal is routed out via an RCA connector.

#### 3.5.15 LVDS Interface
The development board exposes both 8-lane LVDS signal groups through 2.0mm-pitch headers, compatible with Forlinx 10.1-inch LVDS displays, and supports screen brightness adjustment and capacitive touch. When using a Forlinx display, align the plug's red wire with pin 1 on the carrier board.

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/031_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/032_EN.png)

**Note:** 

-  **LVDS data and clock signals must be routed to equal length, with differential impedance controlled at 100Ω;**
- **LVDS and LCD functions cannot be used at the same time.**

#### 3.5.16 LCD Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/033_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/034_EN.png)

The development board exposes LCD RGB666 signals through an FPC connector with 0.5mm pin pitch, compatible with Forlinx LCD displays, and supports screen brightness adjustment and resistive/capacitive touch.

**Note:**

- **For the mapping between LCD_DATA and RGB color bits, see Section 2.7;**
- **LVDS and LCD functions cannot be used at the same time.**

#### 3.5.17 Audio
The SoM features a built-in audio codec, and the carrier board exposes the audio functions for demonstration. It supports stereo Speaker output and stereo headphone output (the headphone jack integrates MIC input), 1 onboard electret MIC input, 1 FMIN, and 1 LINEIN. The 3.5mm audio jack P30 follows the CTIA standard; inserting an OMTP headphone will cause playback and recording to fail. Headphone hot-plug detection is supported, and sound is played through the headphones once inserted.

The Speaker amplifier delivers a maximum power of 1.9W (4Ω).

MIC_IN1 demonstrates the speaker echo cancellation solution.

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/035_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/036_EN.png)

#### 3.5.18 4G
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/037_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/038_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/039_EN.png)

The development board supports 4G connectivity and 4G modules using the miniPCIE socket with the USB2.0 protocol.

When using a nanoSIM card, pay attention to the insertion direction. The onboard SMA antenna P16 accepts an external antenna; use a dual ipex jumper cable to connect the 4G module to P19.

**Note: The jumper-cable connection used for the development board's 4G antenna is for demonstration only. Considering RF antenna loss, we recommend using an integrated ipex-to-SMA cable in your own design.**

#### 3.5.19 WiFi&Bluetooth
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/040_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/041_EN.png)

The development board has an onboard WiFi&BT module, using RTL8723DU by default, and an onboard SMA antenna connector; WiFi and Bluetooth share a single antenna;

IEEE 802.11 a/b/g/n WIFI, with transmission rates up to 150Mbps;

Bluetooth v2.1+EDR/4.2, up to 3Mbps. To enhance signal quality, please use a 2.4&5GHz dual-band antenna.

#### 3.5.20 USB HOST Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/042_EN.png)

The development board expands 4 USB2.0 ports via the USB HUB FE1.1S, of which 2 are exposed through USB Type-A connectors.

**Note:**

- **All USB data lines must be routed with 90Ω differential impedance;**

- **Select appropriate ESD devices in your design.**

#### 3.5.21 USB2.0 Type-C Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/043_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/044_EN.png)

As shown above, the development board supports 1 USB2.0 Type-C interface with host and device modes, which can be used for system programming.

**Note:**

- **Only the SoM's native USB0 supports USB system programming;**
- **All USB data lines must be routed with 90Ω differential impedance;**

- **Select appropriate ESD devices;**
- **PG4_USB_VBUSDET must detect a voltage for the USB function to be enabled normally.**

#### 3.5.22 Ethernet Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/045_EN.png)

P13 on the development board is an RJ45 connector supporting 10/100/1000Mbps auto-negotiation.

The SoM's RGMII interface connects to a YT8521S PHY chip, and the RJ45 connector used has a built-in network transformer, whose internal structure is shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/046_EN.png)

**Note:**

- **The TX and RX groups of RGMII signals must be length-matched within each group;**
- **RGMII and MDIO/MDC use the same voltage level, configurable via CFG_LDO[1:0];**

- **Pay extra attention to the several power rails of the YT8521S; unstable voltage will prevent the chip from working;**

- **The network's analog differential lines must be routed with 100Ω differential impedance, with an inter-group length-matching requirement of ≤1000mil;**

- **It is recommended to use at least a 4-layer board design to ensure traces have a complete reference plane; otherwise, network communication may fail;**
- **It is recommended to copy the development board design directly for this part of the schematic and PCB.**

#### 3.5.23 RTC
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/047_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/048_EN.png)

As shown above, the carrier board connects an RTC device via TWI3, and D4 enables compatible power supply from VCC_3V3 and a coin cell, so the coin cell maintains power to the RTC chip after the carrier board is powered off. The default design uses the PCF8563T/5 chip. The coin cell model is CR2032.

## 4. Hardware Design Guide

- **Power Requirements:**

PIN3,PIN4,VCC-5V-SYS Please ensure that the continuous current supplied to the SoM is not less than 1A.

PIN2,VCC-3V3 The power supplied from the SoM to the carrier board must not exceed 0.5A, and is used only for timing control and SD card power supply.

- **Reset Signal:**

PIN146,CPU-RST-KEY Do not add resistor-capacitor loads on the carrier board, otherwise normal startup of the SoM will be affected; if unused, it can be left floating.

- **Level Matching:**

The GPIO pins of the PE group are all at 1.8V level; please pay attention to level matching.

​     ○ Unused signal pins on the SoM can be left floating, but be sure to connect all GND pins.

​     ○ Power-on Sequence

When designing the carrier board, users are strongly advised to refer to the development board design and use the VDD_3V3 output from the SoM as the carrier board's power-on enable, to strictly control the power-on sequence. Otherwise, the following may occur:

   ○ Excessive current during the power-on phase;

   ○ The device fails to boot;

   ○ In the worst case, irreversible damage to the processor.

- **Notes on Pin IO Leakage Current:**

Before the SoM is powered on, if a high-level sink current is present on the SoM's signal pins, it will cause leakage current on the SoM; the most typical case is serial port leakage, so the carrier board has an anti-leakage design at the debug serial port. If users encounter a similar situation with a self-made carrier board, they can refer to the development board design.

## 5. Connector Dimensions

For more detailed dimensions, see the dxf file in the user materials.

The figure below shows the Footprint schematic of the carrier board's castellated connector.

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/049_EN.png)

## 6. OK113i-S Development Board Power Consumption Table

Table 1 Power Consumption of the Whole Board under Linux

| Test Item | SoM Power (W)SoM | Development Board Power<br/>(Including SoM) (W)SoM |
| --- | :---: | :---: |
| | | |
| No-load startup peak power | 3.25 | 9.01 |
| No-load standby power | 0.40 | 1.24 |
| CPU stress + memory + emmc read/write stress test | 1.05 | 1.89 |
| 7-inch LCD + 4G + USB drive + video decode | 0.70 | 3.82 |
| 7-inch LCD + 4G + USB drive + video encode | 0.75 | 3.75 |

**Note:**

- **The SoM is configured with 512MB memory + 8GB eMMC, the 4G module is Quectel EC20, and the display is an optional Forlinx product;**
- **The SoM is powered by 5V, and the carrier board is powered by 12V;**
- **Power consumption is for reference only.**

## 7. Minimum System Schematic

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/050_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/051_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/052_EN.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok113i-s/OK113i-S_Hardware_Manual-EN/053_EN.png)

The figure above is for illustration only; for specific connections, see the source schematic. For the SoM to work properly, in addition to the VSYS_5V power supply, a CPU_RST button and OTG or SD card are needed to facilitate system programming and booting, as well as a UART0 debug serial port circuit to confirm whether the system is working properly and to facilitate debugging.
