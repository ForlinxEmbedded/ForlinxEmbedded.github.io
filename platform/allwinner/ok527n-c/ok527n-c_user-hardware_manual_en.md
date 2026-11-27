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

## 1. Allwinner T527 Introduction

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

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083269105_4756d6e9_b30b_49fe_a736_d8d35620fb48.png)

## 2. FET527-C SoM Introduction

### 2.1 FET527-C SoM Appearance
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083223538_34a1b464_e382_4d86_aa44_36b21e38dba9.jpeg)

**Front**

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083223894_496ca9fe_3e77_485b_90ad_0a16672b57e6.jpeg)

**Back**

### 2.2 FET527-C SoM Dimensions
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083224210_224b95f0_79a2_4f95_b660_8bb46aae4177.png) 
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083224368_f41b6fc3_34a9_4a8d_a6df_785c4c56986f.png)
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1732777917855_1c268f9a_0f6e_4592_bf79_e613e163bb56.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1795749537854-6.png)

Dimensions: 70 mm×46 mm, tolerance ±0.15 mm. For detailed dimensions, refer to the DXF file.

PCB: 8-layer board with an immersion gold finish; thickness: 1.15 mm.

Connector: dual-row, 0.5 mm pitch, 80-pin board-to-board connector; see Chapter 4 for connector dimensions.

To secure the SoM to the carrier board, use the recommended M2 SMD nuts (5.56 mm outer diameter, 2 mm stud height) and M2 × 4 mm screws.

Refer to the development board design and the figures below for SMD nut specifications:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720055814219_26674965_242f_4a82_9c44_743672b7717c.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1795749537854-8.png)

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

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1721197352551-0105554a-7581-4aca-87ba-d60297f315a9.png)
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1721197358610_2b228097_0f30_4858_ac8d_b3d5874db65a.png)
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1721197365179-4403f109-1037-44ce-beab-1968dd0424ab.png)
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1721197371652_05757a9c_bfa4_4c62_855a_14a7de511987.png)

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

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1721197379781_d2984d44_c346_4a60_b5bd_004edf0a97af.png)

Refer to Chapter 6 for the minimal system schematic. In addition to the minimal system, provide a debug serial port and a system programming port to verify system startup. Add other required functions according to the default SoM interface definitions provided by Forlinx.

For the design of the SoM peripheral circuits, refer to Section 3.5 "OK527x-C Carrier Board Description" in Chapter 3.

## 3. Development Board Introduction

### 3.1 OK527x-C Development Board Interface Diagram
The Forlinx OK527x-C development platform connects the SoM to the carrier board through board-to-board connectors. The main interfaces are shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083237373_8b95995e_18ee_4914_b1ba_3f6b54baf923.jpeg)

### 3.2 OK527x-C Development Board Dimensions
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083237787_0bd1cfcd_6435_4bd2_be5e_fd405369957d.png)

PCB dimensions: 130 mm×190 mm.

Mounting hole spacing: 120 mm×180 mm, hole diameter: 3 mm.

PCB: 4-layer board; thickness: 1.6 mm.

Power supply voltage: DC 12 V. 

### 3.3 Heatsink Dimensions
The OK527x-C carrier board provides two 3.2 mm mounting holes for a heatsink. Install a heatsink as required by the operating environment. Place an electrically insulating, thermally conductive silicone pad between the heatsink and the SoM. The Forlinx heatsink measures 39 × 39 × 23 mm. See the figure below for detailed dimensions: 

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1795749537854-16.png)

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
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083238084_6d79c69e_7790_4bd3_b147_ec32af084e33.png)

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
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1795749537854-18.png)

Press AP-RESET to reset and restart the system. Press FEL to enter forced upgrade mode for system programming over USB from a PC. Use PWRON to power the system on or off.

#### 3.5.4 Debug Interfaces
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083238754_52161a71_5b65_4ffe_8d4b_8396838bd80c.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083238950_3c23ef98_ee64_4a52_8866_3f556e16aade.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083239131_c59795f0_44e2_415f_bd6a_ed57546a554d.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083239681_e81a9a17_4498_43a5_a451_04ac85fc879d.png)

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
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083239884_f05f835c_e2ee_479e_a646_524afa77c8af.png)

The development board exposes the CPUX, CPUS, and DSP/RISC-V JTAG interfaces through a 2 × 7 box header with a 2.0 mm pitch, consistent with the official reference design. The official dedicated emulator supports all three cores.

#### 3.5.6 TF Card
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083240112_a6024e78_7d58_41e1_ac0a_d97b52d03b01.png)

The TF card interface uses the processor SDC0 channel. The TF card must be powered by the VDD33 output from the SoM.

**Note:**

- **Bus pull-up resistors are already provided on the SoM. Do not add pull-up resistors on the carrier board.**
- **Provide ESD protection for the hot-pluggable TF card interface.**
- **Length-match the SD signal traces.**

#### 3.5.7 RTC
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083240305_8fcf2fdf_fafa_45f7_8b23_de03b7a05cd4.png)

The carrier board connects an external RTC via TWI0. D4 allows the RTC to be powered by either VCC_3V3 or a coin cell. The coin cell maintains RTC power when the carrier board is off. The default design uses a PCF8563T/5 RTC and a CR2032 coin cell.

#### 3.5.8 LRADC Keys
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1795749537854-26.png)

The carrier board uses two ADCKEY signals. The ADC identifies each key by sampling the voltage produced by its corresponding resistor divider.

The SoM includes a 51 kΩ pull-up resistor to 1.8 V. Only the corresponding pull-down resistors are required on the carrier board.

#### 3.5.9 GPADC
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083240758_9c07d0a4_efcc_446e_bf77_897732818819.png)

GPADC signals are accessible through two 2 × 4 pin headers with a 2.54 mm pitch. A slide potentiometer can be connected directly using Dupont jumper wires. The SoM has 14 GPADC channels in total, with a maximum sampling voltage of 1.8 V.

#### 3.5.10 IR Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083240962_f7889f8c_f23e_4a25_9c0a_9ca84ed2ad46.png)

The IR interface is connected to an HS0038B receiver; an infrared remote control can be used to send infrared signals to the receiver. Received signal information can be viewed through the debug serial port.

#### 3.5.11 USB Type-C Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083241185_83d9ec7f_2b4d_4fd4_bf21_1c62d4f3f79a.png)

The carrier board USB Type-C connector is connected to the SoM USB0 interface. This interface supports OTG functionality and can be connected to a PC for USB programming or to a USB flash drive for storage.

#### 3.5.12 USB 2.0 Hub
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083241430_521f65a1_5f1b_462f_afdb_312d4f458a82.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083241645_11e752cb_c7cd_4cfc_8765_a9ff409d47f8.png)

The carrier board includes a USB 2.0 hub that expands USB1 into four downstream host ports: three USB 2.0 Type-A ports and one Mini PCIe interface. The Mini PCIe interface supports an EC20 4G module for Internet access. The other ports support standard USB devices.

#### 3.5.13 Wi-Fi and Bluetooth
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083241873_e47efe78_55ee_4f2c_8536_c0305d17bd5b.png)

The carrier board includes an AW-CM358SM Wi-Fi and Bluetooth module. Wi-Fi uses SDIO, supports the 2.4 GHz and 5 GHz bands, and complies with IEEE 802.11a/b/g/n/ac. Bluetooth 5.0 uses UART and PCM interfaces. The antenna supports both frequency bands.

#### 3.5.14 4G
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083242213_f1eb7891_a59d_4b03_aba8_9f0f24db9b4f.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083242436_e7c3506f_38fb_4f98_baa8_1f3b13ab9800.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083242760_9c1c7925_fcf5_4c99_8c30_831781403acc.png)

The carrier board provides a Mini PCIe interface for an EC20 4G module, with an independently controllable power supply and an onboard SIM card interface. Install the module and secure it with the latch before powering on the development board.

#### 3.5.15 USB 3.0/PCIe 2.1
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083242988_baecf6fa_b61e_4770_b525_9aedd0336af4.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083243198_9576b8d4_752a_41e0_9285_a85865aa1506.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083243397_73dc1adb_0bad_4aa3_ab14_d003426c28b8.png)

The SoM supports USB 3.0 and PCIe 2.1, which share the same pins. The carrier board provides both interfaces and uses a high-speed analog switch controlled by a DIP switch to select the active interface. USB 3.0 is accessible through a standard USB Type-A connector and operates in host mode only. PCIe 2.1 is accessible through a standard PCIe x1 connector and supports only devices with a compatible PCIe x1 edge connector.

#### 3.5.16 Buzzer
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083243659_62aa1496_1339_4654_b6f8_ea11a3d84650.png)

The carrier board provides a PWM-driven buzzer interface. Different alarm tones can be generated under software control.

#### 3.5.17 UART and SPI Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083243915_e63cf0d3_fcdd_4d29_bd83_68a85afe141e.png)

UART2/3 and SPI0 are accessible through a 2 × 5 box header with a 2.0 mm pitch for connecting external debugging devices. These functions share pins and cannot be used simultaneously.

#### 3.5.18 I2S Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083244658_16ce0ae1_c1f9_4d29_9b20_853dc48e9a28.png)

The carrier board exposes I2S2 through a 2 × 7 pin header with a 2.54 mm pitch for connecting an external audio IC. TWI3 controls the audio IC, and GPIOs provide basic I/O control.

#### 3.5.19 DMIC Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083245141_314108ed_c0c9_43e3_b2f3_ac7be81bd015.png)

The DMIC interface is accessible through a 2 × 5 pin header with a 2.54 mm pitch. The SoM supports up to eight digital microphones at sampling rates from 8 kHz to 48 kHz.

#### 3.5.20 LED
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083245329_c33ba1fb_25f5_477a_8f5a_e9dea59b1832.png)

The carrier board includes two user-configurable LEDs controlled through GPIOs. These GPIOs are multiplexed with those on the I2S and DMIC interfaces.

#### 3.5.21 HP Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083245559_96db9cc1_fee4_4159_9905_73eb085235ef.png)

The carrier board provides a standard 3.5 mm headphone jack with stereo output, microphone input (differential only), and plug insertion/removal detection. Audio playback uses the native SoM HP signal.

#### 3.5.22 MIC
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083245750_9657dd84_af9f_4983_b3ca_318b67916ba0.png)

The carrier board includes an onboard electret microphone (differential input only) for capturing ambient sound.

#### 3.5.23 Speaker Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083245989_a305bbf9_52bb_47de_9b1b_74f264a75a0e.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083246189_e54bc3b1_459f_464a_af5c_6baf4bd26a5e.png)

The carrier board uses two native differential LINEOUT signals and a TPA6017A2PWP amplifier to drive 3 Ω, 2 W speakers. The two channels support stereo playback. The playback signal is fed back to the SoM through the MIC interface (differential input only) for echo cancellation.

#### 3.5.24 OWA Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083246386_6429c2c5_5dfd_4a29_91d0_b6576bafbc27.png)

The OWA interface is accessible through a 2 × 3 pin header with a 2.54 mm pitch. It complies with IEC 60958 and supports up to 24-bit data.

#### 3.5.25 RGMII Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083246596_a94927d6_cff8_499f_acf5_e4395f39361d.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083246889_4d1325c0_495f_4b4e_99cc_332696c0aaae.png)

The carrier board provides two auto-negotiating 10/100/1000 Mbit/s Ethernet ports using the SoM RGMII interfaces and YT8521SH ICs. Standard RJ45 connectors with integrated network transformers provide connectivity to external LAN and WAN devices.

#### 3.5.26 DP Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083247184_38b73499_04ff_42b2_aaf4_a522b966750b.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083247397_47b90d7b_8a5b_4a19_bdc2_1fff43df9558.png)

The carrier board provides a standard DisplayPort (DP) connector for connecting a DP display. The interface currently operates in eDP mode. Connect and power on the display before powering on the development board, then select DP in U-Boot. The platform supports dual displays with independent content. When paired with LVDS, LCD, or MIPI, DP must be the secondary display. When paired with HDMI, DP must be the primary display.

#### 3.5.27 HDMI Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083247748_36fc871d_3f1d_41ae_a562_7cef4e61bb8c.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083247957_ced533ce_a4a5_4394_8e0c_78f2e1df20c2.png)

The carrier board provides a standard HDMI connector for HDMI displays and supports hot-plugging. Select HDMI in U-Boot. The platform supports dual displays with independent content. When HDMI is paired with DP, DP must be the primary display.

#### 3.5.28 LVDS/MIPI Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083248214_1bbcf082_1b89_49da_921b_8600d77bc321.png)

The carrier board exposes LVDS signals through a 2 × 19 pin header with a 2.0 mm pitch. These signals share pins with MIPI and LCD. The interface supports a standard Forlinx 10.1-inch LVDS display or a dual 8-lane LVDS display. A standard Forlinx LVDS-to-MIPI adapter board supports connection to a Forlinx 7-inch MIPI display. Select the corresponding display in U-Boot. The platform supports dual displays with independent content. However, only one of LVDS, MIPI, and LCD can be used at a time because they share pins. When paired with DP, the LVDS, LCD, or MIPI display must be the primary display.

#### 3.5.29 LCD-RGB666 Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083248480_bb9f1c20_bbcb_4e96_b70d_099b6c63fa61.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083248718_35c8e0d8_09ba_4a75_8e15_8a18210423ca.png)

The carrier board exposes LCD signals through a 54-pin FPC connector with a 0.5 mm pitch. These signals share pins with MIPI and LVDS. The interface includes a TSC2007 resistive touch controller. Select the corresponding display in U-Boot. The platform supports dual displays with independent content. However, only one of LVDS, MIPI, and LCD can be used at a time because they share pins. When paired with DP, the LVDS, LCD, or MIPI display must be the primary display.

#### 3.5.30 RS-485 Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083248973_85e59887_6485_4f99_96a6_77d2160b82a2.png)

The carrier board provides two standard RS-485 interfaces using native UART signals and the TDH341S485S. These interfaces support automatic transmit/receive control and level 4 EMC protection designed to meet the requirements of most applications.

#### 3.5.31 CAN Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083249234_826e8b9a_20a3_4c2a_b4cb_bdaa27d60fe0.png)

The carrier board provides two standard CAN interfaces using native CAN signals and the TDH541SCANFD. These interfaces support a maximum data rate of 1 Mbit/s and level 4 EMC protection designed to meet the requirements of most applications.

#### 3.5.32 OV13850 Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083249560_0af6b897_5f05_44dc_b77b_2c346fd36147.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083249847_a0144cf7_2226_4db1_96ef_974db0afe3ac.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083250066_a08c4817_da02_4d9f_9445_22304cc0b1c0.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083250269_2b78506a_c403_4e22_a2f7_8c0416417822.png)

The carrier board exposes a 4-lane MIPI interface through a 26-pin FPC connector for a standard Forlinx OV13850 camera. This interface shares pins with MIPI_4ACAM.

#### 3.5.33 OV5645 Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083250492_633f9e2b_867b_4bbc_88bb_7507ea8e36d6.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083250724_8fee6bee_7e31_431e_92db_f09ef90862a4.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083250947_4d6e4776_2dbe_427a_a976_10c6899fdf30.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083251163_cb35c509_e545_48ab_bc53_db6a36810bb5.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083251367_6e46ea35_ff61_49ba_8bd0_1c4e567a8315.png)

The carrier board exposes two 2-lane MIPI interfaces through two 26-pin FPC connectors for standard Forlinx OV5645 cameras.

#### 3.5.34 MIPI_4ACAM Interface
![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083251579_62e52b30_4162_4263_8f57_80dd5918c5d7.png)

The carrier board exposes a 4-lane MIPI interface through a 2 × 10 pin header with a 2.0 mm pitch. This interface shares pins with OV13850 and supports a standard Forlinx MIPI-to-four-analog-camera adapter board, allowing four high-definition analog cameras to be connected simultaneously.

## 4. Connector Dimensions

The SoM connector specifications are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083259491_c6adc8da_e087_48fe_a202_3af319141371.png)

The carrier board connector specifications are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083259167_17d1f04a_4d8d_4a33_a0ab_c7ad5dc16534.png)

## 5. OK527x-C Development Board Power Consumption under Linux

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

## 6. Minimal System Schematic

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083228592_0fa8657e_b1c7_4a58_b863_52c2026b14f0.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083228858_98fc348e_3430_475b_8898_2936333f36cd.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083229087_fc3d2378_d239_4b32_9454_ce0c2c44b94d.png)![Image](https://www.forlinx.net/docs_assets/images/platform/allwinner/ok527n-c/ok527n-c_user-hardware_manual_en/1720083229278_9ffcb124_2107_4475_a558_4423b6e9fb64.png)
