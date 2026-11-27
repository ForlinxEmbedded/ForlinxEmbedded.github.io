# User’s Hardware Manual V1.2

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

This manual is copyrighted by Baoding Forlinx Embedded Technology Co., Ltd. No organization or individual may copy, distribute, or reproduce any part of this manual in any form without prior written permission from Forlinx. Violators will be held legally responsible. 

Forlinx respects the copyrights of all graphics and text used in its publications, whether original or license-free. 

Drivers and utilities for components are subject to the copyrights and license terms of their respective manufacturers. Licensing costs for the operating system and applications must be calculated or declared separately by the relevant party or its representatives.

## Overview
This manual describes the product interfaces, their functions and configuration, power consumption, and troubleshooting. Explanatory comments accompany selected commands to facilitate practical use. For pin function multiplexing and hardware troubleshooting methods, please refer to the "OK527x-C Pin Multiplexing Table" and "OK527x-C Design Guide" provided by Forlinx.

 This manual contains six chapters:

- Chapter 1: Processor overview and applications.
- Chapter 2: SoM specifications, connector pin definitions, and hardware design.
- Chapter 3: Development board interfaces, hardware operation, and design considerations.
- Chapter 4: Connector dimensions.
- Chapter 5: Power consumption under Linux.
- Chapter 6: Minimal system schematic.

## Application Scope
This manual applies to Forlinx OK527x-C development boards V1.1 and later, and FET527N-C SoMs V1.1 and later.

## Revision History
|  **Date**  | **Manual Version** | **SoM Version** | **Carrier Board Version** | **Revision History**                                         |
| :--------: | :----------------: | :-------------: | :-----------------------: | ------------------------------------------------------------ |
| 10/04/2024 |        V1.0        |      V1.1       |      V1.1 and above       | Initial release                                              |
| 24/04/2024 |        V1.1        |      V1.1       |      V1.1 and above       | Corrections and errata                                       |
| 23/05/2024 |        V1.2        |      V1.1       |      V1.1 and above       | Added software support for 4K HDMI display; removed the asterisk indicating lack of support. |

## 1 Allwinner T527 Introduction

The T527 series comprises high-performance AI SoCs designed for commercial electronics, industrial, and automotive applications. Each SoC integrates an octa-core Cortex-A55 CPU, a HiFi4 DSP, a 2 TOPS NPU, and a G57 MC1 GPU. It supports a 4K at 30 fps H.265 decoder, a 4K at 30 fps H.264 encoder, and a 1080p at 60 fps H.264 encoder. The integrated DI and SmartColor systems provide smooth operation and professional AI visual effects.

Applications include:

- Commercial displays and cash registers
- Cloud computers
- Robotics
- Industrial intelligence
- Edge computing gateways
- Aftermarket central control systems
- Commercial vehicles
- Industrial PCs

**T527 Series Application Processor Block Diagram**

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083269105-4756d6e9-b30b-49fe-a736-d8d35620fb48.png)

## 2 FET527-C SoM Introduction

### 2.1 FET527-C SoM Appearance
![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533325/1720083223538-34a1b464-e382-4d86-aa44-36b21e38dba9.jpeg)

**Front**

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533325/1720083223894-496ca9fe-3e77-485b-90ad-0a16672b57e6.jpeg)

**Back**

### 2.2 FET527-C SoM Dimensions
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083224210-224b95f0-79a2-4f95-b660-8bb46aae4177.png) ![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083224368-f41b6fc3-34a9-4a8d-a6df-785c4c56986f.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1732777917855-1c268f9a-0f6e-4592-bf79-e613e163bb56.png)

![](1795749537854-6.png)

Dimensions: 70 mm×46 mm, tolerance ±0.15 mm. For detailed dimensions, refer to the DXF file.

PCB: 8-layer board with an immersion gold finish; thickness: 1.15 mm.

Connector: dual-row, 0.5 mm pitch, 80-pin board-to-board connector; see Chapter 4 for connector dimensions.

To secure the SoM to the carrier board, use the recommended M2 SMD nuts (5.56 mm outer diameter, 2 mm stud height) and M2 × 4 mm screws.

Refer to the development board design and the figures below for SMD nut specifications:

![](https://cdn.nlark.com/yuque/0/2024/png/45533430/1720055814219-26674965-242f-4a82-9c44-743672b7717c.png)

![](1795749537854-8.png)

### 2.3 Performance Parameters
#### 2.3.1 System Clock Frequency
| **Name** | **Specification** | | | | **Description** |
| :---: | :---: | --- | --- | --- | :---: |
| | **Min** | **Typical** | **Max** | **Unit** |
| System clock frequency | | | | MHz | — |
| System RTC clock | — | 32.768 | — | kHz | — |

#### 2.3.2 Power Supply Parameters
| **Parameter** | **Pin Label** | **Specification** | | | | **Description** |
| :---: | :---: | :---: | --- | --- | --- | :---: |
| | | **Min** | **Typical** | **Max** | **Unit** ||
| Main power input | DCIN | 3.9 | 5 | 5.5 | V | SoM power input |
| SoM output | VDD33 | - | 3.3 | - | V | Maximum output current: 500 mA |
| SoM output | ALDO3 | - | 3.3 | - | V | (Reserved) |

#### 2.3.3 Operating Environment
| **Parameter Description** | | **Specification** | | | | **Description** |
| :---: | --- | :---: | --- | --- | --- | :---: |
| | | **Min** | **Typical** | **Max** | **Unit** |
| Temperature | Operating | -40 | 25 | +85 | °C | Industrial grade |
| | Storage | -40 | 25 | +125 | °C | |
| Humidity | Operating | 10 | — | 90 | % RH | No condensation |
| | Storage | 5 | — | 95 | % RH | |

#### 2.3.4 SoM Interface Speeds
| **Parameter** | **Specification** | | | | **Description** |
| :---: | :---: | --- | --- | --- | :---: |
| | **Min** | **Typical** | **Max** | **Unit** |
| UART communication speed | — | 115200 | — | bps | — |
| SPI communication speed | — | — | 100 | MHz | — |
| TWI communication speed | — | 100 | 400 | kbit/s | — |
| CAN communication speed | — | — | 1 | Mbit/s | — |
| SDIO 3.0 | — | — | 200 | MHz | — |
| PWM | — | — | 100 | MHz | — |
| GPADC | — | — | 1 | MHz | — |

#### 2.3.5 ESD Characteristics
| **Parameter** | **Specification** | | **Unit** | **Description** |
| :---: | :---: | --- | :---: | :---: |
| | **Min** | **Max** | ||
| ESD HBM(ESDA/JEDEC JS-001-2017) | -2000 | +2000 | V | Applicable to all SoM pins |
| ESD CDM(ESDA/JEDEC JS-002-2018) | -250 | +250 | V | Applicable to all SoM pins |

**Note:**

- **These values are taken from the processor datasheet.**
- **All SoM signals are sensitive to electrostatic discharge (ESD). Provide ESD protection for carrier board interfaces and observe ESD precautions during SoM transportation, assembly, and operation.**

### 2.4 SoM Interface Resources
| **Function** | **Quantity** | **Parameters** |
| :---: | :---: | --- |
| Parallel CSI | 1 | Supports 8/10/12/16-bit widths; <br/>Supports ITU-R BT.656 up to 4 × 720p at 30 fps; <br/>Supports ITU-R BT.1120 up to 4 × 1080p at 30 fps |
| MIPI CSI | ≤4 | 8M at 30 fps RAW12 2F-WDR, maximum size 3264(H) x 2448(V), <br/>supported combinations: 4+4-lane, 4+2+2-lane, or 2+2+2+2-lane |
| MIPI DSI<sup>(1)</sup> | ≤2 | Supports 4-lane MIPI DSI, 1280 × 720 at 60 fps and 1920 × 1200 at 60 fps; <br/>Supports 4+4-lane MIPI DSI, 2560 × 1600 at 60 fps,3840 × 2160 at 45 fps,4096 × 2160 at 45 fps |
| RGB<sup>(1)</sup> | ≤2 | TCON_LCD0 supports DE/SYNC mode, 1920 × 1080 at 60 fps; <br/>TCON_LCD2 supports DE/SYNC mode, 1280 × 720 at 60 fps |
| LVDS<sup>(1)</sup> | ≤2 | Supports dual link 1920 × 1080 at 60 fps, single link 1366 × 768 at 60 fps; |
| eDP 1.3 | 1 | Supports 2.5K at 60 fps and 4K at 30 fps; <br/>Supports audio, maximum sampling rate: 192 kHz |
| HDMI 2.0 | 1 | Supports 2D display at 4K at 60 fps, 3D display at 4K at 30 fps; <br/>Supports audio, maximum sampling rate: 192 kHz |
| Audio Codec | 1 | One stereo headphone output; <br/>Two differential LINEOUT outputs; <br/>Three differential MIC inputs |
| I2S/PCM | ≤4 | Sampling rates from 8 kHz to 384 kHz |
| DMIC | 1 | Supports 8 channels, sampling rate 8 kHz to 48 kHz |
| OWA IN/OUT | 1 | Single-wire audio |
| CAN | ≤2 | Maximum data rate: 1 Mbit/s |
| USB<sup>(2)</sup> | ≤3 | USB0: USB 2.0 OTG, 480 Mbit/s<br/>USB1: USB 2.0 Host, 480 Mbit/s<br/>USB2-U2: USB 3.1 OTG, 480 Mbit/s<br/>USB2-U3: USB 3.1 OTG, 5 Gbit/s |
| PCIe 2.1<sup>(2)</sup> | 1 | Supports RC mode only, 1-lane, 5 Gbit/s |
| SDIO<sup>(3)</sup> | ≤2 | SDC0: for SD card, supports SDR mode up to 200 MHz<br/>SDC1: SDIO 3.0, supports SDR mode up to 200 MHz |
| SPI<sup>(4)</sup> | ≤4 | SPI0: supports master/slave SPI mode, up to 100 MHz; <br/>SPI2: supports master/slave SPI mode, up to 100 MHz; <br/>S_SPI0: supports master/slave SPI mode, up to 100 MHz; <br/>SPI1: supports SPI mode and DBI mode (display bus interface); |
| TWI<sup>(5)</sup> | ≤8 | Compatible with I2C standard, standard mode 100 kbit/s, fast mode 400 kbit/s |
| UART | ≤10 | Compatible with industry standard 16450/16550 |
| GMAC | ≤2 | Supports RMII/RGMII interfaces, speeds of 10/100/1000 Mbit/s |
| GPADC | 14 | 12-bit sampling resolution and 10-bit accuracy, maximum sampling rate: 1 MHz |
| LRADC | 2 | 6-bit sampling resolution, sampling rate 2 kHz, for key detection |
| PWM | ≤30 | Output frequency 0–24 MHz or 0–100 MHz |
| CIR TX/RX | 1 | Infrared signal transmit/receive |

**TBD: Function not currently supported.**

**Notes:**

The values in this table are based on the hardware design or theoretical processor specifications.
**(1)** RGB, LVDS, and DSI share pins within the T527 TCON_LCD module. Refer to the processor datasheet or pin multiplexing table.
**(2)** USB2-U2 and USB2-U3 together form USB 3.1 and cannot operate independently at the same time. USB2-U3 and PCIe share pins and are mutually exclusive.

**(3)** SDC2 is reserved on the SoM for eMMC.
**(4)** SPI0 in bank PC is reserved on the SoM for flash memory. Avoid configuration conflicts when using SPI0 on the carrier board.
**(5)** S-TWI0 is reserved on the SoM and is unavailable on the carrier board.

### 2.5 FET527-C SoM Pin Definitions
#### 2.5.1 FET527-C SoM Pin Schematic Diagram

![](1721197352551-0105554a-7581-4aca-87ba-d60297f315a9.png)
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721197358610-2b228097-0f30-4858-ac8d-b3d5874db65a.png)
![](1721197365179-4403f109-1037-44ce-beab-1968dd0424ab.png)
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721197371652-05757a9c-bfa4-4c62-855a-14a7de511987.png)

#### 2.5.2 FET527-C SoM Pin Function Description
For interface expansion, refer to the "FET527N-C Pin Multiplexing Table". For further details, consult the processor datasheet, reference manual, and related documentation.

### 2.6 SoM Hardware Design Description
#### 2.6.1 Power Pins

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin No.** |
| :---: | :---: | :---: | --- | --- |
| Power | DCIN | Power input | SoM power input: 5 V; the carrier board must provide at least 2.5 A |  |
| | ALDO3 | Power output | Power output maintained during sleep; reserved | P1_4 |
| | VDD33 | Power output | Used only for carrier board power-on sequencing and SD card power supply; maximum output current: 500 mA | P1_6 |
| | GND | Ground | SoM power and signal ground; all GND pins must be connected |  |

#### 2.6.2 Function Control Pins

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin No.** |
| :---: | :---: | :---: | --- | :---: |
| CPU reset | AP-RESET | I | SoM reset input, active low; do not add any resistors or capacitors to this pin, to avoid affecting normal startup of the SoM | P3_75 |
| Programming | FEL | I | Enters forced USB OTG programming mode, active low | P3_69 |
| Power on/off | PWRON | I | Active low; press and hold to power off or on | P3_77 |
| JTAG selection | JTAG-SEL | I | Default high; selects the JTAG output port | P3_71 |
| CPU interrupt | AP-NMI | I | Interrupt input, not used by default on the carrier board | P3_73 |

#### 2.6.3 Minimal System Design

The FET527-C SoM integrates power supply, reset, and storage circuitry, minimizing external circuit requirements. A minimal system requires only a 5 V power supply, as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1721197379781-d2984d44-c346-4a60-b5bd-004edf0a97af.png)

Refer to Chapter 6 for the minimal system schematic. In addition to the minimal system, provide a debug serial port and a system programming port to verify system startup. Add other required functions according to the default SoM interface definitions provided by Forlinx.

For the design of the SoM peripheral circuits, refer to Section 3.5 "OK527x-C Carrier Board Description" in Chapter 3.

## 3 Development Board Introduction

### 3.1 OK527x-C Development Board Interface Diagram
The Forlinx OK527x-C development platform connects the SoM to the carrier board through board-to-board connectors. The main interfaces are shown below:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533325/1720083237373-8b95995e-18ee-4914-b1ba-3f6b54baf923.jpeg)

### 3.2 OK527x-C Development Board Dimensions
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083237787-0bd1cfcd-6435-4bd2-be5e-fd405369957d.png)

PCB dimensions: 130 mm×190 mm.

Mounting hole spacing: 120 mm×180 mm, hole diameter: 3 mm.

PCB: 4-layer board; thickness: 1.6 mm.

Power supply voltage: DC 12 V. 

### 3.3 Heatsink Dimensions
The OK527x-C carrier board provides two 3.2 mm mounting holes for a heatsink. Install a heatsink as required by the operating environment. Place an electrically insulating, thermally conductive silicone pad between the heatsink and the SoM. The Forlinx heatsink measures 39 × 39 × 23 mm. See the figure below for detailed dimensions: 

![](1795749537854-16.png)

### 3.4 Carrier Board Resources
| Function | Quantity | Parameters |
| :---: | :---: | --- |
| LCD | 1 | RGB666 18-bit; the SoM supports up to RGB888 24-bit, up to 1080p at 60 fps |
| LVDS | 1 | Dual 8-bit, supports up to 1080p at 60 fps |
| MIPI DSI | 1 | Requires an adapter board, 4-lane, supports up to 1080p at 60 fps; the SoM supports 4+4-lane, up to 2.5K at 60 fps or 4K at 45 fps |
| eDP | 1 | eDP 1.3, accessible through a standard DP connector, up to 2.5K at 60 fps or 4K at 30 fps |
| HDMI | 1 | HDMI 2.0, supports HDCP 1.4, supports up to 4K at 60 fps to 2D*, 4K at 30 fps to 3D  |
| Ethernet | 2 | 10/100/1000 Mbit/s auto-negotiation, RJ-45 interface |
| USB Type-C（DEBUG） | 1 | Converts the debug UART to USB for output, debugging CPUS and CPUX respectively |
| USB Type-C（USB0） | 1 | Native USB0 interface, supports OTG function |
| USB Host | 3 | Expanded by a hub, USB 2.0 (up to 480 Mbit/s) |
| USB 3.1 | 1 | Accessible through a standard USB-A connector; pins multiplexed with PCIe 2.1, only one of the two can be used |
| PCIe 2.1 | 1 | Accessible through a standard PCIe x1 connector; pins multiplexed with USB 3.1, only one of the two can be used |
| OWA | 1 | Accessible through pin header, IEC 60958 standard, supports up to 24-bit data |
| TF | 1 | Supports SD3.0 protocol |
| MIPI CSI | 4 | Supports OV5645 × 2, OV13850, and MIPI-to-four-analog-camera module |
| Wi-Fi and Bluetooth | 1 | Onboard AW-CM358SM, 2.4 GHz/5 GHz dual-band Wi-Fi, Bluetooth 5.0, and audio functions. <br/>Wi-Fi function occupies one SDIO interface; <br/>BT function occupies one UART interface <br/>Audio occupies one I2S |
| LED | 2 | Two independently controllable GPIO LEDs |
| I2S | 1 | I2S2, accessible through pin header |
| TWI | 1 | TWI3, accessible through pin header |
| UART | 2 | UART2/UART3, accessible through pin header |
| SPI | 1 | SPI0, accessible through pin header |
| RTC | 1 | Onboard CR2032 battery, maintains timekeeping when power is off |
| BUZZER | 1 | PWM controlled, adjustable frequency |
| Audio | 3 | Includes one 4-pole headphone jack with built-in HP and MIC <br/>one onboard independent electret MIC <br/>one dual-channel SPEAKER interface |
| KEY | 9 | Includes reset, programming, power on/off, user-defined key, VOL+, VOL-, HOME, ENTER, MENU |
| DMIC | 1 | Supports up to 8 digital MICs, sampling from 8 kHz to 48 kHz |
| GPADC | 14 | 1.8 V voltage; the carrier board has an onboard sliding rheostat for convenient testing |
| CAN | 2 | Standard CAN with protection circuit, maximum speed 1 Mbit/s |
| RS-485 | 2 | With automatic transmit/receive control and protection circuit |
| IR | 1 | IR_RX, sampling rate 1 MHz, 64 × 8 bits buffer |
| CPUX-JTAG | 1 | Accessible through box header |
| CPUS-JTAG | 1 | Accessible through box header |
| DSP-JTAG | 1 | Accessible through box header |

**Note: The values in this table are based on the hardware design or theoretical processor specifications.**

### 3.5 OK527x-C Carrier Board Description
**Note: Component reference designators marked with "_NC" in the figures below indicate that the component is not soldered by default.**

#### 3.5.1 Carrier Board Power Supply
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083238084-6d79c69e-7790-4bd3-b147-ec32af084e33.png)

A 12 V adapter supplies power to the development board through connector P5. VDD_5 V powers the SoM. After startup, the SoM outputs VDD33 to enable U5 and U9 on the carrier board.

VDD33 ensures that the SoM powers on before the carrier board.

**Important:**

**When designing a custom carrier board, follow the development board power-up sequence. Use the SoM VDD33 output to enable the carrier board DC-DC power supply, ensuring that the SoM powers on first.**

#### 3.5.2 Boot Sequence
The OK527x-C attempts to boot from the following devices in order:

1. TF card
2. eMMC
3. Raw NAND flash
4. SPI NOR flash
5. SPI NAND flash

The TF card has boot priority over eMMC. If a TF card is inserted during normal operation rather than programming, ensure that it does not contain a BOOT partition. To create a TF card boot image, refer to the software user manual.

#### 3.5.3 Function Keys
![](1795749537854-18.png)

Press AP-RESET to reset and restart the system. Press FEL to enter forced upgrade mode for system programming over USB from a PC. Use PWRON to power the system on or off.

#### 3.5.4 Debug Interfaces
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083238754-52161a71-5b65-4ffe-8d4b-8396838bd80c.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083238950-3c23ef98-ee64-4a52-8866-3f556e16aade.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083239131-c59795f0-44e2-415f-bd6a-ed57546a554d.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083239681-e81a9a17-4498-43a5-a451-04ac85fc879d.png)

The SoM provides three debug serial ports: UART0 for CPUX, S-UART1 for CPUS, and S-UART0 for DSP/RISC-V.

The CH342F USB-to-serial converter provides access to UART0 and S-UART1 through a USB Type-C connector. S-UART0 is accessible through a 3-pin header with a 2.54 mm pitch.

To access the debug serial port:

1. Install the CH342F driver on the PC.
2. Connect P6 on the development board to the PC using a USB Type-C cable.
3. Open a serial terminal application (such as PuTTY) and select the appropriate COM port. Configure it for 115200 baud, 8 data bits, no parity, and 1 stop bit.
4. Power on the development board to view debug output.

**Note:**

- **Expose the debug serial port on custom carrier boards to facilitate debugging.**
- **Refer to the carrier board debug serial port design for leakage protection.**
- **Do not repurpose the three debug serial ports for general serial communication or other functions.**

#### 3.5.5 JTAG Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083239884-f05f835c-e2ee-479e-a646-524afa77c8af.png)

The development board exposes the CPUX, CPUS, and DSP/RISC-V JTAG interfaces through a 2 × 7 box header with a 2.0 mm pitch, consistent with the official reference design. The official dedicated emulator supports all three cores.

#### 3.5.6 TF Card
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083240112-a6024e78-7d58-41e1-ac0a-d97b52d03b01.png)

The TF card interface uses the processor SDC0 channel. The TF card must be powered by the VDD33 output from the SoM.

**Note:**

- **Bus pull-up resistors are already provided on the SoM. Do not add pull-up resistors on the carrier board.**
- **Provide ESD protection for the hot-pluggable TF card interface.**
- **Length-match the SD signal traces.**

#### 3.5.7 RTC
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083240305-8fcf2fdf-fafa-45f7-8b23-de03b7a05cd4.png)

The carrier board connects an external RTC via TWI0. D4 allows the RTC to be powered by either VCC_3V3 or a coin cell. The coin cell maintains RTC power when the carrier board is off. The default design uses a PCF8563T/5 RTC and a CR2032 coin cell.

#### 3.5.8 LRADC Keys
![](1795749537854-26.png)

The carrier board uses two ADCKEY signals. The ADC identifies each key by sampling the voltage produced by its corresponding resistor divider.

The SoM includes a 51 kΩ pull-up resistor to 1.8 V. Only the corresponding pull-down resistors are required on the carrier board.

#### 3.5.9 GPADC
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083240758-9c07d0a4-efcc-446e-bf77-897732818819.png)

GPADC signals are accessible through two 2 × 4 pin headers with a 2.54 mm pitch. A slide potentiometer can be connected directly using Dupont jumper wires. The SoM has 14 GPADC channels in total, with a maximum sampling voltage of 1.8 V.

#### 3.5.10 IR Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083240962-f7889f8c-f23e-4a25-9c0a-9ca84ed2ad46.png)

The IR interface is connected to an HS0038B receiver; an infrared remote control can be used to send infrared signals to the receiver. Received signal information can be viewed through the debug serial port.

#### 3.5.11 USB Type-C Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083241185-83d9ec7f-2b4d-4fd4-bf21-1c62d4f3f79a.png)

The carrier board USB Type-C connector is connected to the SoM USB0 interface. This interface supports OTG functionality and can be connected to a PC for USB programming or to a USB flash drive for storage.

#### 3.5.12 USB 2.0 Hub
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083241430-521f65a1-5f1b-462f-afdb-312d4f458a82.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083241645-11e752cb-c7cd-4cfc-8765-a9ff409d47f8.png)

The carrier board includes a USB 2.0 hub that expands USB1 into four downstream host ports: three USB 2.0 Type-A ports and one Mini PCIe interface. The Mini PCIe interface supports an EC20 4G module for Internet access. The other ports support standard USB devices.

#### 3.5.13 Wi-Fi and Bluetooth
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083241873-e47efe78-55ee-4f2c-8536-c0305d17bd5b.png)

The carrier board includes an AW-CM358SM Wi-Fi and Bluetooth module. Wi-Fi uses SDIO, supports the 2.4 GHz and 5 GHz bands, and complies with IEEE 802.11a/b/g/n/ac. Bluetooth 5.0 uses UART and PCM interfaces. The antenna supports both frequency bands.

#### 3.5.14 4G
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083242213-f1eb7891-a59d-4b03-aba8-9f0f24db9b4f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083242436-e7c3506f-38fb-4f98-baa8-1f3b13ab9800.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083242760-9c1c7925-fcf5-4c99-8c30-831781403acc.png)

The carrier board provides a Mini PCIe interface for an EC20 4G module, with an independently controllable power supply and an onboard SIM card interface. Install the module and secure it with the latch before powering on the development board.

#### 3.5.15 USB 3.0/PCIe 2.1
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083242988-baecf6fa-b61e-4770-b525-9aedd0336af4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083243198-9576b8d4-752a-41e0-9285-a85865aa1506.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083243397-73dc1adb-0bad-4aa3-ab14-d003426c28b8.png)

The SoM supports USB 3.0 and PCIe 2.1, which share the same pins. The carrier board provides both interfaces and uses a high-speed analog switch controlled by a DIP switch to select the active interface. USB 3.0 is accessible through a standard USB Type-A connector and operates in host mode only. PCIe 2.1 is accessible through a standard PCIe x1 connector and supports only devices with a compatible PCIe x1 edge connector.

#### 3.5.16 Buzzer
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083243659-62aa1496-1339-4654-b6f8-ea11a3d84650.png)

The carrier board provides a PWM-driven buzzer interface. Different alarm tones can be generated under software control.

#### 3.5.17 UART and SPI Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083243915-e63cf0d3-fcdd-4d29-bd83-68a85afe141e.png)

UART2/3 and SPI0 are accessible through a 2 × 5 box header with a 2.0 mm pitch for connecting external debugging devices. These functions share pins and cannot be used simultaneously.

#### 3.5.18 I2S Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083244658-16ce0ae1-c1f9-4d29-9b20-853dc48e9a28.png)

The carrier board exposes I2S2 through a 2 × 7 pin header with a 2.54 mm pitch for connecting an external audio IC. TWI3 controls the audio IC, and GPIOs provide basic I/O control.

#### 3.5.19 DMIC Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083245141-314108ed-c0c9-43e3-b2f3-ac7be81bd015.png)

The DMIC interface is accessible through a 2 × 5 pin header with a 2.54 mm pitch. The SoM supports up to eight digital microphones at sampling rates from 8 kHz to 48 kHz.

#### 3.5.20 LED
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083245329-c33ba1fb-25f5-477a-8f5a-e9dea59b1832.png)

The carrier board includes two user-configurable LEDs controlled through GPIOs. These GPIOs are multiplexed with those on the I2S and DMIC interfaces.

#### 3.5.21 HP Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083245559-96db9cc1-fee4-4159-9905-73eb085235ef.png)

The carrier board provides a standard 3.5 mm headphone jack with stereo output, microphone input (differential only), and plug insertion/removal detection. Audio playback uses the native SoM HP signal.

#### 3.5.22 MIC
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083245750-9657dd84-af9f-4983-b3ca-318b67916ba0.png)

The carrier board includes an onboard electret microphone (differential input only) for capturing ambient sound.

#### 3.5.23 Speaker Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083245989-a305bbf9-52bb-47de-9b1b-74f264a75a0e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083246189-e54bc3b1-459f-464a-af5c-6baf4bd26a5e.png)

The carrier board uses two native differential LINEOUT signals and a TPA6017A2PWP amplifier to drive 3 Ω, 2 W speakers. The two channels support stereo playback. The playback signal is fed back to the SoM through the MIC interface (differential input only) for echo cancellation.

#### 3.5.24 OWA Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083246386-6429c2c5-5dfd-4a29-91d0-b6576bafbc27.png)

The OWA interface is accessible through a 2 × 3 pin header with a 2.54 mm pitch. It complies with IEC 60958 and supports up to 24-bit data.

#### 3.5.25 RGMII Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083246596-a94927d6-cff8-499f-acf5-e4395f39361d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083246889-4d1325c0-495f-4b4e-99cc-332696c0aaae.png)

The carrier board provides two auto-negotiating 10/100/1000 Mbit/s Ethernet ports using the SoM RGMII interfaces and YT8521SH ICs. Standard RJ45 connectors with integrated network transformers provide connectivity to external LAN and WAN devices.

#### 3.5.26 DP Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083247184-38b73499-04ff-42b2-aaf4-a522b966750b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083247397-47b90d7b-8a5b-4a19-bdc2-1fff43df9558.png)

The carrier board provides a standard DisplayPort (DP) connector for connecting a DP display. The interface currently operates in eDP mode. Connect and power on the display before powering on the development board, then select DP in U-Boot. The platform supports dual displays with independent content. When paired with LVDS, LCD, or MIPI, DP must be the secondary display. When paired with HDMI, DP must be the primary display.

#### 3.5.27 HDMI Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083247748-36fc871d-3f1d-41ae-a562-7cef4e61bb8c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083247957-ced533ce-a4a5-4394-8e0c-78f2e1df20c2.png)

The carrier board provides a standard HDMI connector for HDMI displays and supports hot-plugging. Select HDMI in U-Boot. The platform supports dual displays with independent content. When HDMI is paired with DP, DP must be the primary display.

#### 3.5.28 LVDS/MIPI Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083248214-1bbcf082-1b89-49da-921b-8600d77bc321.png)

The carrier board exposes LVDS signals through a 2 × 19 pin header with a 2.0 mm pitch. These signals share pins with MIPI and LCD. The interface supports a standard Forlinx 10.1-inch LVDS display or a dual 8-lane LVDS display. A standard Forlinx LVDS-to-MIPI adapter board supports connection to a Forlinx 7-inch MIPI display. Select the corresponding display in U-Boot. The platform supports dual displays with independent content. However, only one of LVDS, MIPI, and LCD can be used at a time because they share pins. When paired with DP, the LVDS, LCD, or MIPI display must be the primary display.

#### 3.5.29 LCD-RGB666 Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083248480-bb9f1c20-bbcb-4e96-b70d-099b6c63fa61.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083248718-35c8e0d8-09ba-4a75-8e15-8a18210423ca.png)

The carrier board exposes LCD signals through a 54-pin FPC connector with a 0.5 mm pitch. These signals share pins with MIPI and LVDS. The interface includes a TSC2007 resistive touch controller. Select the corresponding display in U-Boot. The platform supports dual displays with independent content. However, only one of LVDS, MIPI, and LCD can be used at a time because they share pins. When paired with DP, the LVDS, LCD, or MIPI display must be the primary display.

#### 3.5.30 RS-485 Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083248973-85e59887-6485-4f99-96a6-77d2160b82a2.png)

The carrier board provides two standard RS-485 interfaces using native UART signals and the TDH341S485S. These interfaces support automatic transmit/receive control and level 4 EMC protection designed to meet the requirements of most applications.

#### 3.5.31 CAN Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083249234-826e8b9a-20a3-4c2a-b4cb-bdaa27d60fe0.png)

The carrier board provides two standard CAN interfaces using native CAN signals and the TDH541SCANFD. These interfaces support a maximum data rate of 1 Mbit/s and level 4 EMC protection designed to meet the requirements of most applications.

#### 3.5.32 OV13850 Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083249560-0af6b897-5f05-44dc-b77b-2c346fd36147.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083249847-a0144cf7-2226-4db1-96ef-974db0afe3ac.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083250066-a08c4817-da02-4d9f-9445-22304cc0b1c0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083250269-2b78506a-c403-4e22-a2f7-8c0416417822.png)

The carrier board exposes a 4-lane MIPI interface through a 26-pin FPC connector for a standard Forlinx OV13850 camera. This interface shares pins with MIPI_4ACAM.

#### 3.5.33 OV5645 Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083250492-633f9e2b-867b-4bbc-88bb-7507ea8e36d6.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083250724-8fee6bee-7e31-431e-92db-f09ef90862a4.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083250947-4d6e4776-2dbe-427a-a976-10c6899fdf30.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083251163-cb35c509-e545-48ab-bc53-db6a36810bb5.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083251367-6e46ea35-ff61-49ba-8bd0-1c4e567a8315.png)

The carrier board exposes two 2-lane MIPI interfaces through two 26-pin FPC connectors for standard Forlinx OV5645 cameras.

#### 3.5.34 MIPI_4ACAM Interface
![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083251579-62e52b30-4162-4263-8f57-80dd5918c5d7.png)

The carrier board exposes a 4-lane MIPI interface through a 2 × 10 pin header with a 2.0 mm pitch. This interface shares pins with OV13850 and supports a standard Forlinx MIPI-to-four-analog-camera adapter board, allowing four high-definition analog cameras to be connected simultaneously.

## 4 Connector Dimensions

The SoM connector specifications are as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083259491-c6adc8da-e087-48fe-a202-3af319141371.png)

The carrier board connector specifications are as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083259167-17d1f04a-4d8d-4a33-a0ab-c7ad5dc16534.png)

## 5 OK527x-C Development Board Power Consumption under Linux

| **No.** | **Test Item** | **SoM Power (W)** | **Development Board Power**<br/>**(Including SoM) (W)** |
| :---: | --- | :---: | :---: |
| 1 | No-load startup peak power | 6.15 W | 8.74 W |
| 2 | No-load standby power | 1.76 W | 2.94 W |
| 3 | Sleep | 0.05 W | 0.65 W |
| 4 | CPU stress + memory + eMMC read/write stress test | 3.50 W | 4.04 W |
| 5 | 7-inch LCD + 4G + video decoding | 3.03 W | 6.20 W |
| 6 | 7-inch LCD + 4G + camera + video encoding | 2.40 W | 6.40 W |

**Note:**

- **Test conditions: 4 GB RAM and 32 GB eMMC on the SoM, Quectel EC20 4G module, and an optional Forlinx display. Supply voltages: 5 V for the SoM and 12 V for the carrier board.**
- **Power consumption values are for reference only.**

## 6 Minimal System Schematic

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083228592-0fa8657e-b1c7-4a58-b863-52c2026b14f0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083228858-98fc348e-3430-475b-8898-2936333f36cd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083229087-fc3d2378-d239-4b32-9454-ce0c2c44b94d.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533325/1720083229278-9ffcb124-2107-4475-a558-4423b6e9fb64.png)
