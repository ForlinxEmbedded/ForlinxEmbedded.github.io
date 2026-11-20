# User's Hardware Manual_V1.3

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible. Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms. The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

|  **Date**  | **Manual Version** | **SoM Version** | **Carrier Board Version** | **Revision Content**                                         |
| :--------: | :----------------: | :--------------------: | :--------------------: | ------------------------------------------------------------ |
| 26/02/2025 |        V1.0        |          V1.1          |          V1.1          | First release of the hardware manual.                        |
| 26/05/2026 |        V1.1        |          V1.1          |          V1.1          | 1. Updated the development board photos and dimension drawings;<br/>2. Completed the description of the SoM I2C2;<br/>3. Corrected the figures in sections 3.5.4 and 3.5.6 of Chapter 3;<br/>4. Corrected the description of USB_VBUSDET in section 3.5.5 of Chapter 3 and in Chapter 6;<br/>5. Corrected the resistance value of R99 in Chapter . |
| 16/07/2025 |        V1.2        |          V1.1          |          V1.1          | Updated the figure in section 3.5.7.                         |
| 21/11/2025 |        V1.3        |          V1.1          |          V1.1          | Added section 2.6.2 "Anti-Vibration Design Guide for the SoM". |

## Overview

This manual aims to help you quickly become familiar with the product and understand the interface functions and configurations. It mainly describes the development board interfaces, interface introduction, product power consumption, and how to troubleshoot problems that occur during use. In the description, some commands are annotated for ease of understanding, with an emphasis on practicality. For pin function multiplexing, hardware troubleshooting methods and other topics, please refer to the "FET3506x-S Pin Multiplexing Comparison Table" and the "OK3506x-S Design Guide" provided by Forlinx.

There are total four chapters:
- Chapter 1. an overall introduction to the CPU, briefly covering CPU performance and target industries;
- Chapter 2.  an overall introduction to the SoM, including the connector pin descriptions and functions;
- Chapter 3.  an overall introduction to the development board, divided into several chapters covering both hardware principles and basic design ideas;
- Chapter 4.  product power consumption and other descriptions, mainly covering the board's power consumption and other notes.

Explanation of the symbols and formats used in this manual:

| **Symbol** | **Meaning** |
| :---: | --- |
| **Note** | Information that requires attention or special attention — read carefully |
| 📚 | Notes on the test section |
| 🛤️ | Indicates a related path |

## 1. Introduction to Rockchip RK3506J/RK3506B

The RK3506 is a high-performance application processor launched by Rockchip. Fabricated with advanced 22nm process technology, it integrates three ARM Cortex-A7 cores (up to 1.5GHz) and a 200MHz M0 core, targeting digital multimedia applications including intelligent voice interaction, audio I/O processing and image output processing.

This processor integrates a 2D hardware engine and display output engine to minimize CPU overhead for image display tasks. Equipped with a high-performance external memory interface supporting DDR2/DDR3/DDR3L, it is capable of meeting demanding memory bandwidth requirements.

The chip embeds rich peripheral interfaces such as I2S, PCM, TDM, PDM, SPDIF, Audio DSM, Audio ADC, USB2 OTG, RMII and CAN, which accommodates diverse application development needs while reducing hardware development complexity and cost.ioo

**RK3506B/J Processor Block Diagram**

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550549558-b504786d-99b6-4b79-9359-93114694c4c4.png)

---

## 2. FET3506J-S/FET3506B-S SoM Introduction

### 2.1 SoM Appearance

FET3506J-S/FET3506B-S SoM (NAND version) Front View

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550551059-ad3cc7d2-01b2-46b0-9541-261580f4b2b3.png)

FET3506J-S/FET3506B-S SoM Back View

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550551216-fde9c5c7-b7ac-4a12-b202-6b7389ebc94b.png)

### 2.2 FET3506J-S/FET3506B-S SoM Dimensions

![](../1740550551367-68ba1556-2aa9-4d18-a638-610d980b1906.png)

Mechanical dimensions: 44 mm × 35 mm, dimension tolerance ±0.13 mm. For more dimension details, see the DXF file.

Fabrication process: 1.2 mm thick, 8-layer ENIG PCB.

Stamp-hole package with 146 PINs in total.

### 2.3 Performance Parameters

#### 2.3.1 System Clock Frequency

| **Name** | **Specification** | | | | **Description** |
| :---: | :---: | --- | --- | --- | :---: |
| | **Min** | **Typical** | **Max** | **Unit** | |
| System Clock Frequency | — | — | 1.5 | GHz | — |
| System RTC Clock | — | 32.768 | — | KHz | — |

#### 2.3.2 Power Supply Parameters

| **Parameter** | **Pin Label** | **Specification** | | | | **Description** |
| :---: | :---: | :---: | --- | --- | --- | :---: |
| | | **Min** | **Typical** | **Max** | **Unit** | |
| Main Power Supply Voltage | VSYS | 4.75 | 5 | 5.25 | V | — |
| No-load Current | — | | 54 | | mA | See the power consumption table in the appendix |
| Heavy-load Current | — | | 145 | | mA | See the power consumption table in the appendix |

#### 2.3.3 Operating Environment

| **Parameter** | | **Specification** | | | | **Description** |
| :---: | --- | :---: | --- | --- | --- | :---: |
| | | **Min** | **Typical** | **Max** | **Unit** | |
| Operating Temperature | Operating Environment | 0 | 25 | +80 | ℃ | Commercial Grade |
| | Storage environment | -40 | 25 | +125 | ℃ | |
| | Operating Environment | -40 | 25 | +85 | ℃ | Industrial Grade |
| | Storage environment | -40 | 25 | +125 | ℃ | |
| Humidity | Operating Environment | 10 | — | 90 | %RH | No condensation |
| | Storage Environment | 5 | — | 95 | %RH | |

#### 2.4 SoM Interface Resources

| **Function** | **Quantity** | **Parameters** |
| :---: | :---: | --- |
| USB2.0 | 2 | Supports one 2-port USB2.0 OTG; one of the OTG ports supports image flashing |
| UART<sup>(1)</sup> | ≤6 | UART3/UART4/UART5 support flow control, with a maximum baud rate of 4 Mbps |
| SPI | ≤3 | SPI0/SPI1 are general-purpose SPI controllers supporting master and slave modes; SPI2 is an SPI2APB controller supporting slave mode only, typically used for pushing firmware or other data streams |
| I2C<sup>(2)</sup> | ≤3 | Maximum rate up to 1 Mbit/s |
| RMII | ≤2 | Supports 10/100 Mbps RMII interfaces |
| SARADC<sup>(3)</sup> | ≤4 | 10-bit resolution, maximum sampling rate 1 MS/s |
| FLEXBUS | ≤1 | FLEXBUS is equivalent to a 16-bit parallel interface, divided into two groups: FLEXBUS0/1 |
| Touch Key | ≤8 | |
| MIPI-DSI<sup>(4)</sup> | ≤1 | Supports 1 MIPI DSI TX, 2-lane, 1.5 Gbps/lane, resolution up to 1280 × 1280 @60fps |
| RGB | ≤1 | Supports RGB 888 format, resolution up to 1280 × 1280 @60fps |
| DSMC | ≤1 | Supports 1 master or 1 slave |
| TF card<sup>(5)</sup> | ≤1 | Compatible with SDIO3.0 protocol, 4-bit data width |
| SAI | ≤4 | Supports I2S, PCM and TDM protocols, maximum sampling rate 192 kHz |
| ACODEC | ≤1 | The RK3506 has a built-in ACODEC supporting 1 pair of differential MIC input |
| PDM | ≤1 | Up to 8 channels, sampling rate up to 192 kHz, master receive mode |
| SPDIF | ≤1 | |
| CAN | ≤2 | Supports CAN2.0 and CAN-FD |
| PWM | ≤11 | |
| RM_IO | ≤32 | RM_IO is an IO matrix with 32 pins in total |
| GPIO<sup>(6)</sup> | ≤93 | |

**Note:** 

- **The parameters in the table are hardware design values or CPU theoretical values;**
- **"TBD" refers to functions not yet developed;**
- **UART0 is the debug serial port and is not recommended for other functions; users have up to 5 serial ports available;**
- **I2C2 is already connected on the SoM to an EEPROM with address 0x50, plus 2K pull-ups to 3V3. When using the carrier board, be careful not to create device address conflicts. Note that if the I2C2 bus is damaged externally, it will affect the SoM's reading of the EEPROM data and thus affect normal SoM startup;**
- **SARADC_IN0 is dedicated to the SYSTEM BOOT boot-order setting and cannot be used for other functions; SARADC_IN1 is used as the key-value input sampling for buttons and is multiplexed as the Recovery mode button (not modifiable). It is not recommended to use it as a regular ADC; users have a maximum of 2 ADCs available;**
- **RGB and MIPI-DSI share one VOP; only single-screen display is possible;**
- **The TF card and the SoM eMMC share the same SDMMC controller, so the TF card can only be used on NAND-version SoMs;**
- **The 6 pins related to MIPI_DSI can only be used as GPO.**

### 2.5 FET3506J-S/FET3506B-S SoM Pin Definitions

#### 2.5.1 SoM Pin Schematic

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550551449-ba9d3b59-d697-4211-8d7d-3dc5d40ab0ee.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550551522-d2f26f8b-a040-4305-94dc-554ae2068da9.png)

#### 2.5.2 SoM Pin Function Description

Users with multiple function expansion requirements can refer to the "OK3506-S Pin Multiplexing Table" in the user materials. For more detailed information, it is recommended to consult the related documentation as well as the chip datasheet and reference manual.

### 2.6 SoM Hardware Design Guide

#### 2.6.1 SoM Circuit Design Guide

**Power Pins**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin No.** |
| :---: | :---: | :---: | --- | :---: |
| Power | VCC5V0_SYS | Power input | 5 V SoM power supply pin; the carrier board must supply no less than 2.0 A | 2,3 |
| Power enable | VCC_3V3 | Power output | Used only as the enable signal controlling the external power of the carrier board, output by the SoM | 5 |
| Ground | GND | Ground | SoM power ground and signal ground; all GND pins must be connected | |

**Function Control Pins**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin No.** |
| :---: | :---: | :---: | --- | :---: |
| CPU reset | NPOR_L | I | SoM power reset, active low. Users should not add extra capacitive load to this pin, so as not to affect normal SoM startup | 7 |
| BOOT selection | SARADC0_IN0_BOOT | I | When the signal is grounded, the board boots into Maskrom download mode. <br />With a 12K pull-down resistor: eMMC or SD Card boot first; left floating: FSPI boot first | 9 |
| Recovery mode | SARADC0_IN1_RECOVERY/KEY | I | When the signal is grounded, the board boots into Recovery download mode | 10 |
| Debug serial port | UART0_TX_DEBUG UART0_RX_DEBUG | I/O | Debug serial port; users are advised to keep this port function | 12,13 |

The FET3506J-S/FET3506B-S SoM integrates the power supply, reset monitoring circuit and storage circuit on a compact module, requiring very simple external circuitry — a minimum system needs only a 5 V power supply to run, as shown below:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550551596-d6549cf6-e70a-4606-a0dc-3c2cd5d35a30.png)

The minimum system schematic can be found in Appendix 4. Generally, however, besides the minimum system it is recommended to connect some external devices, such as a debug serial port and an image flashing port; otherwise the user cannot determine whether the system has started. After that, add the functions you need based on Forlinx's default SoM interface definitions.

The design of the SoM peripheral circuit can refer to section 3.5 "OK3506x-S Carrier Board Description" in Chapter 3.

#### 2.6.2 Anti-Vibration Design Guide for the SoM

Mechanical limiting holes are added at the mid-section positions on both sides of the SoM on the carrier board. Fixing the carrier board to the equipment with screws can effectively improve the overall structural rigidity, thereby enhancing performance stability in vibration environments. The assembly diagram is as follows.

![](https://cdn.nlark.com/yuque/0/2025/jpeg/50461850/1763703033835-432db838-fb9e-4e37-b4ab-e5b39cc9566a.jpeg)

This design has been verified by the vibration test specified in GB/T 2423.10-2008 / IEC 60068-2-6:1995, meeting the following ratings:

- Frequency range: 10 Hz ~ 150 Hz
- Test axes: X, Y, Z (three axes)
- Displacement amplitude: 0.35 mm
- Acceleration amplitude: 5 g

The performance data listed in this manual were obtained under standard laboratory conditions and are applicable to general industrial equipment. Actual performance in real applications may vary depending on installation methods, combined stresses and other factors.

## 3. Forlinx OK3506x-S Embedded Development Platform Introduction

### 3.1 OK3506x-S Development Board Interface Diagram

The Forlinx OK3506x-S development platform connects the SoM and carrier board via stamp holes. The main interfaces are shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1748221226194-deac0a9a-6753-425a-94af-bd15fd4ab2b6.png)

### 3.2 OK3506x-S Development Board Dimensions

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1748221240280-b8c1ff76-c77c-4866-8648-1f7d737cb195.png)

PCB dimensions: 130 mm × 190 mm.

Mounting hole dimensions: spacing 120 mm × 180 mm, hole diameter 3.2 mm.

Fabrication process: 1.6 mm thick, 4-layer PCB.

Power supply voltage: DC 12 V.

The OK3506x-S carrier board reserves 2 mounting holes of 3.2 mm diameter for heat sinks. Users can optionally install a heat sink according to the on-site environment; please add an insulating thermally conductive silicone pad between the heat sink and the SoM. The SoM heat sink selected by Forlinx measures 38 mm × 38 mm × 10 mm; for more details see the figure below:

![](https://cdn.nlark.com/yuque/0/2025/png/52601381/1755142680443-eca49f39-991c-4354-a005-4f678db42918.png)

### 3.3 Carrier Board Naming Convention

A-B-C+DEF:G-H

| **Field** | **Field Description** | **Value** | **Description** |
| :---: | :---: | :---: | :---: |
| A | Product line identifier | OK | Forlinx Embedded carrier board |
| - | Separator | - | |
| B | CPU name | 3506 | RK3506 |
| - | Segment identifier | - | |
| C | Connection type | Sx | Stamp hole |
| + | Segment identifier | + | Configuration parameters follow this identifier |
| D | Type identifier | M | Carrier board (carrier board is marked M, left blank by default) |
| | | E | Expansion board |
| E | Operating temperature | C | 0 to 80℃, commercial grade |
| | | I | -40 to 85℃, industrial grade |
| F | PCB version | 11 | V1.1 |
| | | xx | Vx.x |
| : | Separator | : | Manufacturer's internal identifier follows this symbol |
| G | Connector origin and code | N | Not distinguished / no connector |
| - | Connector | - | Grade identifier connector |
| H | Grade identifier | PC | Prototype sample |
| | | Blank | Mass production |
| | | SC | Special — modified per specific customer requirements |

### 3.4 Carrier Board Resources

| **Function** | **Quantity** | **Parameters** |
| :---: | :---: | :---: |
| MIPI-DSI<sup>(1)</sup> | 1 | 2-lane MIPI-DSI, supports capacitive touch screens and backlight brightness adjustment |
| LCD<sup>(1)</sup> | 1 | 24-bit (RGB888), up to 1280 × 1280 @60fps |
| CAN | 2 | CAN FD, supports CAN 2.0B protocol, electrically isolated |
| RS485 | 1 | Electrically isolated |
| DSMC<sup>(2)</sup> | 1 | Supports master and slave modes |
| WiFi | 1 | Single antenna, 2.4G & 5 GHz Wi-Fi dual-band 1X1 802.11b/g/n |
| Bluetooth | 1 | Bluetooth 4.2 |
| 4G | 1 | Supports miniPCIE 4G module, including USB2.0 communication signals |
| TF Card | 1 | Supports up to SDR52 speed |
| KEY ADC | 4 | Uses one SARADC channel, 4 buttons exported |
| USB2.0 | 2 | Exported from USB HUB, host mode only |
| Ethernet<sup>(3)</sup> | 2 | Exported via standard RJ45 sockets, dual 100 Mbps ports |
| Audio | 1 | Stereo headphone output; headphone recording + onboard MIC recording |
| OTG | 1 | Supports USB firmware flashing and OTG function |
| RTC | 1 | Onboard CR2032 battery, time keeping during power-off |
| PWM | 1 | Connected to the display for backlight brightness adjustment |
| UART Debug | 2 | Integrated in one Type-C port, connectable to a PC for debugging |
| JTAG Debug | 1 | Pin headers reserved on the carrier board for easy debugging |

**Note:** 

- **The parameters in the table are hardware design values or CPU theoretical values;**
- **MIPI-DSI and LCD are multiplexed interfaces; only one of them can be used;**

- **DSMC and LCD cannot be used at the same time;**

- **PHY1 is a compatibility design supporting 1.8 V signaling;** 
- **See section 3.5.7 "Dual 100 Mbps Ethernet".**

### 3.5 OK3506x-S Carrier Board Description

**Note: **

- **Components marked with "_DNP" in the figures below are not soldered by default;**
- **The schematics in this manual are for interface description only. For hardware design, please refer to the source files.**

#### 3.5.1 Carrier Board Power

The carrier board is powered by DC 12 V, introduced through the DC-005 socket (P1). The 12 V DC power passes through a switch (S1), TVS protection, a self-recovery fuse and a reverse-polarity diode, and is then converted to 5 V DC via DC-DC, with a maximum continuous current of 6 A. Both power rails are uncontrolled; their net names are VCC_12V and VDD_5V.

VDD_5V is converted to VCC5V0_SYS through two parallel 0-ohm resistors R8 and R13. VCC5V0_SYS is the 5 V power supply of the SoM. After the SoM powers up, it outputs a 3.3 V DC voltage as the carrier board power enable signal, net name VCC_3V3_EN.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553431-c24c64f2-36f7-4b86-9b28-d543089c2a7d.png)

When VCC_3V3_EN goes high, Q1 turns on. After Q1 turns on, U2 turns on, connecting VDD_5V to the VCC_5V net, and the whole carrier board powers up.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553504-392bd44b-7a0a-4d98-aa42-3d879836cdc2.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553581-c88feedf-e95d-4059-813c-6a254eaf09db.png)

This circuit ensures that the SoM powers up first and the carrier board second, preventing latch-up damage to the CPU.

The carrier board's 3.3 V DC is provided by two independent DC-DC converters and one LDO. The 3.3 V DC supply for the 4G module is converted from 5 V DC via a DC-DC, net name VCC_3V3_4G. The 3.3 V DC for the audio section is derived from 5 V DC via an LDO, supplying the audio section separately with a clean power rail, net name VCC_3V3_CODEC. The remaining 3.3 V DC of the carrier board is converted from 5 V DC through another DC-DC, net name VCC_3V3.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553670-f248d8f7-3441-430b-b2c8-f49e1842444d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553748-6fee63e9-8ec6-49f5-b805-669935f74a5f.png)

#### 3.5.2 Buttons

NPOR_L is the system reset button, located at the middle of the right side of the carrier board, silkscreened "RESET". Pressing it resets and reboots the development board.

SARADC_IN0_BOOT is the MASKROM button, located at the middle of the right side of the carrier board, silkscreened "MASKROM". Press this button while the board is powered off and then power on — the system enters MASKROM flashing mode.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550553849-b7c18ae5-a93a-4e03-9560-f8f06bb294e5.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554046-5ecb8296-ca98-49ef-a27f-324cf8dafd46.png)

SARADC_IN1_RECOVER/KEY is the system user button and boot item selection button. KEY1 is the RECOVERY/V+ button: press it while the board is powered off and then power on — the system enters BOOTLOADER mode; after the system starts, users can customize it as a volume-up key. KEY2 is the V- button, which users can configure as a volume-down key. KEY3 is MENU, configurable as a menu key. KEY4 is ESC, configurable as a back key. All four buttons are on the right side of the development board, facing right.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554150-cb7303f9-1b84-4bd6-a414-dc38aa34ce0b.png)

#### 3.5.3 BOOT Configuration

Besides being a button, SARADC_IN0_BOOT is also the system boot item selection pin. When using a SoM configured with SPI_NAND, turn on switch S3: the boot order is eMMC/TF card first, then USB. With S3 off, the boot order is SPI_NAND first, then eMMC/TF card, and finally USB.

Since the eMMC and the TF card share the same data bus, only one of them can be used at a time. On a SoM with eMMC, the TF card cannot be used as the system boot medium nor as a storage device.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554231-f1f79948-eaa4-45e0-9184-10cc6c14f3bf.png)

#### 3.5.4 Debug Serial Port

The carrier board uses a USB Type-C port as the debug serial port. Connect it to a PC with a data cable and select the corresponding serial port to start debugging.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1748221302081-177f3c5d-479f-4562-9636-9b8abab4f253.png)

**Note: For convenient debugging, please export this debug serial port when designing your own carrier board.**

#### 3.5.5 4G Module

The carrier board reserves a MINI PCIE interface, on which a Quectel EC20 4G module can be installed. With a SIM card installed, 4G Internet access is possible. When using the 4G module, the matched 4G antenna must be installed.

P8 is a self-ejecting nano SIM card slot. Follow the board's label for the insertion direction. Hot-plugging of the card is not supported.

Before using the 4G function, power off the board, install the 4G module, install the SIM card, and move the 4G IPEX jumper cable from the module to P10 on the board; then an antenna can be connected externally via the SMA connector P9.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554329-1cacb2fc-3b27-4508-8c81-2f8f648041fe.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554460-fd30182b-fd26-481e-a5ea-a80b6eb4c22e.png)

#### 3.5.6 USB Download/OTG

The P14 USB Type-C port at the upper-left corner of the development board supports firmware flashing and OTG functions. The function of this Type-C port is selected by S2: when S2 is on, the USB is HOST and can be used as a host; when S2 is off, the USB is Device, and the development board image can be flashed by connecting it to a PC with a data cable.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554603-be02d755-b1ad-4e5c-b314-cf8441087f29.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554698-12dd652f-f895-4b69-b791-b526c0667fd8.png)

![](../1748221355267-9b29e459-05d9-411f-bb02-eb7989a84994.png)

#### 3.5.7 Dual 100 Mbps Ethernet

The CPU supports up to two 100 Mbps Ethernet ports. The carrier board provides two 100 Mbps Ethernet interfaces, both connected to PHY chips via RMII and exported through RJ45 sockets P6 and P7, socket model FC62115BNL with built-in isolation transformers.

The first Ethernet port uses the YT8512H as the PHY chip. The second Ethernet circuit is a compatibility design: the PHY chip can be either a YT8512H or a YT8522H operating in 1.8 V supply mode. YT8512H is used by default.

Component soldering details for the Ethernet design are shown in the table below:

| **Ethernet** | **PHY Chip** | **Interface Level** | **Component Soldering** |
| :---: | :---: | :---: | --- |
| PHY1 | YT8512H | 3.3V | Keep default |
| PHY2 | YT8512H | 3.3V | Keep default |
| PHY2 | YT8522H | 3.3V | Solder R64 R124 R132 on top of the default configuration |
| PHY2 | YT8522H | 1.8V | Solder R64 R71 R124 R132 R192 R193 R194 R197 R202 R204; leave Q11 Q12 Q13 unmounted; solder R47 R66 R129 R140 R195 |

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554879-000e253e-0897-4208-a0bd-d7aa01529b04.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550554958-55997869-d358-485f-a328-11cb706926b3.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555044-c9ea3b7f-341a-4c29-8707-66e960f3a559.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555121-6701aab4-a832-45d2-ad73-b91ec512e09d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/45533839/1752633984453-d15b4df4-9fcc-45c5-b41f-1d6f7a379f2a.png)

**Note: In PCB design, ensure the PHY chip has a complete ground plane.**

#### 3.5.8 JTAG/SWD

The carrier board provides a JTAG debug interface (P17), allowing users to debug the RK3506 with an emulator via 2.54 mm pitch pin headers.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555284-fdcc49a9-c578-409e-a47d-014b794313e7.png)

#### 3.5.9 RTC

The carrier board connects an external RTC device via I2C2, and uses D12 to combine the VCC_3V3 supply with the coin cell battery supply, so that after the carrier board is powered off, the coin cell keeps the RTC chip powered. The RX8010SJ chip is used by default. The coin cell model is CR2032.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555360-3fe560f0-fae9-44df-9d6c-1a06ba0f4c4d.png)

#### 3.5.10 TF Card

The development board's TF Card uses the CPU's SDMMC channel, which is also used by the SoM's eMMC; therefore the TF Card cannot be used on a development board with an eMMC configuration.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555435-ae5730d2-00c4-4397-b3e6-46319c4a2919.png)

**Note:**

- **The bus pull-up resistors are already fitted on the SoM; the carrier board must not add pull-ups to the bus;**
- **The TF card is a hot-pluggable device — provide ESD protection;**
- **SD signals require length matching.**

#### 3.5.11 MIPI-DSI

The FPC connector P20 on the development board can connect a MIPI-DSI display; the connector is 30P.

Supports a 2-lane MIPI-DSI connection at 1.5 Gbps/lane, and touch screens with an I2C interface. The MIPI-DSI and LCD screens can only be used alternatively.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555515-441620a5-10d5-4aa5-b4ee-a1abb20cd5f1.png)

#### 3.5.12 LCD Display

The CPU supports a parallel 24-bit LCD, up to RGB888 24-bit, with a maximum resolution of 1280 × 1280 and a refresh rate of 60 Hz. The FPC connector P21 on the development board can connect an LCD display; the connector is 54P, 0.5 mm pitch, bottom-contact flip type, compatible with Forlinx's capacitive touch screens. The LCD interface uses RGB888 24-bit mode wiring. The MIPI-DSI and LCD screens can only be used alternatively.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555585-d7cff198-8426-4223-a4e2-1ac6f88c6b88.png)

#### 3.5.13 DSMC

The pin header P27 on the development board reserves the DSMC interface. This interface is multiplexed with the LCD data lines; users can choose the function themselves.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555671-026c48d9-c1ba-4eea-bf6e-15290d7f768a.png)

#### 3.5.14 Audio

The development board provides a standard 3.5 mm headphone jack (CTIA international standard), reference designator P19, implementing stereo headphone playback and mono MIC recording.

P26 is the onboard MIC, enabling mono recording.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555747-60ef92e1-656d-4856-9311-c25537200066.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555839-f4a61ae2-116d-439c-b3c2-faf94b5b7467.png)

#### 3.5.15 USB2.0

The development board has an onboard USB2.0 HUB (reference designator U10), expanding to four downstream USB HOST nodes: on the development board, two USB2.0-A standard ports (reference designator P13), one mini-PCIE interface and the WiFi module are connected; the mini-PCIE interface can host a 4G module.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555916-b68fa112-8fd7-4947-a5c5-e98e1818b6d1.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550555991-4b9b8b0d-4ebc-469f-a66d-83d30a31716b.png)

#### 3.5.16 WiFi & Bluetooth

The development board has an onboard WiFi & Bluetooth combo module, model BL-M8723DU. The WiFi uses a USB2.0 interface, 2.4 GHz band, compliant with IEEE 802.11b/g/n, with a theoretical maximum rate of 150 Mbps. The Bluetooth controller complies with the Bluetooth V4.2 standard. P16 is the SMA connector for the antenna.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550556061-c6e88f8a-c2ee-498b-9584-3c58eeb3dad2.png)

#### 3.5.17 CAN

The development board uses the native CAN0 and CAN1 to provide two CAN FD interfaces, supporting the CAN 2.0B protocol with electrical isolation, meeting the protection requirements of most scenarios.

CAN signals are exported through 3.81 mm pitch green terminals; the 120-ohm termination resistor is installed with a jumper cap.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550556132-ca54d702-0df5-4471-8373-4fc1fd5b63d6.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550556199-d749bef6-d786-44c2-a873-dbc4aa95d91a.png)

**Note: whether the capacitors after the common-mode inductors need to be soldered depends on on-site testing; it is recommended to reserve capacitor positions in the design.**

#### 3.5.18 RS485

The development board uses the native UART2 to provide one standard RS485 interface. This interface supports automatic transmit/receive control and is electrically isolated, meeting the protection requirements of most scenarios.

RS485 signals are exported through 3.81 mm pitch green terminals; the 120-ohm termination resistor is installed with a jumper cap.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550556272-f03e4027-b689-4cce-b653-da3f464aac51.png)

#### 3.5.19 SPI

The carrier board reserves an SPI external storage circuit. The SPI data lines are shared with the NAND FLASH on the SoM; the two cannot be used at the same time.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550556344-2f7dc7ba-adb6-4f39-a522-5c221c34b8a2.png)

## 4. Connector Dimension Drawings

For more detailed dimensions, see the DXF files in the user materials.

- The figure below shows the pin numbers of the carrier board stamp-hole connector footprint.

![](https://cdn.nlark.com/yuque/0/2026/png/45533839/1776837076042-7e15a0f6-2b0d-4a6c-96b6-19eca92f20b6.png)

- The figure below shows the dimensions of the carrier board stamp-hole connector footprint.

![](https://cdn.nlark.com/yuque/0/2026/png/45533839/1776837151955-2f8d17c2-1fb1-491e-96ce-709bfc94bf11.png)

## 5. OK3506X-S Development Board Linux System Power Consumption Table

| **No.** | **Test Item** | **SoM Power (W)** | **Development Board Power incl. SoM (W)** |
| :---: | :---: | :---: | :---: |
| 1 | No load | 0.271 | 1.416 |
| 2 | USB read/write | 0.351 | 1.956 |
| 3 | 4G module PING | 0.272 | 1.536 |
| 4 | TF card read/write | 0.363 | 1.536 |
| 5 | Ethernet PING | 0.324 | 1.956 |
| 6 | With 7-inch LCD screen attached | 0.404 | 3.72 |
| 7 | With 7-inch MIPI screen attached | 0.358 | 3.936 |
| 8 | CPU full load | 0.724 | 1.932 |

**Note:**

  - **Test conditions: the SoM configuration is 512 MB memory + 8 GB eMMC, the 4G module is a Quectel EC20, and the screens are products selected by Forlinx. The SoM is powered at 5 V and the carrier board at 12 V;**
  - **The power consumption is for reference only.**

---

## 6. Minimum System Schematic

**The minimum system includes the SoM, power supply, debug serial port and system image flashing interface.**

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1748221697975-a935d2cb-b95a-4d65-bd47-1a2f894a259b.png)

![](../1740550560758-31b2e8dc-02ca-479c-8e85-27948cc46c92.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550560894-0541479a-e4bf-4253-9c67-307e4c0e22ab.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550561012-83193ccd-d7b1-4531-80b8-580cb94ae4e8.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550561201-c52690aa-569a-4594-9aaf-864464d61f5e.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550561404-c93027b9-2fe2-48ff-b906-48476311ecff.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550561603-6f67d173-1ff0-4a66-a5d0-ee51dd05a3b4.png)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740550561693-948c1e79-7813-4a83-a5c4-46bab31b48d8.png)

![](../1748223343086-eee11fef-c522-4836-8444-11b00e416ab2.png)
