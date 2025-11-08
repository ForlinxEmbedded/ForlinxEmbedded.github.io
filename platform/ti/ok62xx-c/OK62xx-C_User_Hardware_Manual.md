# User’s Hardware Manual\_V1.2

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

|    Date    | User Manual Version | <font style="color:black;">SoM Version</font> | <font style="color:black;">Carrier Board Version</font> | Revision History                                             |
| :--------: | :-----------------: | :-------------------------------------------: | :-----------------------------------------------------: | ------------------------------------------------------------ |
| 05/07/2022 |        V1.0         |                     V1.1                      |                          V1.1                           | Initial Version                                              |
| 12/01/2023 |        V1.1         |                     V1.2                      |                          V1.2                           | Modifying the SoM model in the ordering information          |
| 05/05/2023 |        V1.2         |                     V1.2                      |                          V1.2                           | Improving the WIFI schematic diagram                         |
| 29/05/2023 |        V1.3         |                     V1.2                      |                          V1.2                           | Updating BOOT configuration description                      |
| 13/06/2023 |        V1.4         |                     V1.2                      |                          V1.2                           | Completing CPU description and minimum system schematic      |
| 20/01/2024 |        V1.5         |                     V1.2                      |                          V1.2                           | 1\. Completing the description of reset signal;  <br/>2\. Correcting the description of pin number;  <br/>3\. Adding the information of AM6232 and AM6231 board. |
| 18/03/2023 |        V1.6         |                     V1.2                      |                          V1.2                           | Correcting the errors in the manual.                         |
| 27/08/2024 |        V1.7         |                     V1.2                      |                          V1.2                           | 1\. Updating the dimension and glitch tolerance information of the SoM;  <br/>2\. Update the comment information of the Boot configuration;  <br/>3\. Correcting the DEBUG UART parameter of the carrier board resource. |

## 1\. Introduction to AM62X

The AM62x is an extension of the Sitara™ industrial/automotive-grade heterogeneous Arm® processor family, featuring embedded 3D graphics acceleration, dual display interfaces, and a wide range of peripheral and networking options. The AM62x is built for a wide range of industrial and automotive applications. It includes up to four Arm® Cortex®-A53 cores with a 64-bit architecture, a single-core Arm® Cortex®-R5F device manager subsystem, an IMG AXE1 - 16 3D graphics module, a dual-core PRU module, and a Cortex®-M4F MCU module. The Cortex - A53x provides the powerful computing elements required for Linux applications. Linux and real - time (RT) Linux are provided through TI’s Processor SDK Linux, which is updated annually to the latest long - term support (LTS) Linux kernel, bootloader, and Yocto file system.

The AM62x has a powerful IMG AXE1 - 16 3D graphics core, suitable for HMI applications and QT acceleration, with dual display output options at a resolution of up to 2K and 60fps. Functional safety features can be enabled through the integrated Cortex - M4F and its dedicated peripherals, all of which can be isolated from the rest of the SoC. There are two external Gigabit Ethernet ports that support TSN. The additional PRU module can provide real - time I/O capabilities for customers’ own use cases. In addition, the AM62x also includes a wide range of peripheral sets to achieve system - level connectivity, such as USB, MMC/SD, camera interface, OSPI, CAN - FD, and GPMC for parallel host interfaces with external ASIC/FPGA. The AM62x supports secure boot for IP protection through a built - in HSM (Hardware Security Module) and also adopts advanced power management support for portable and power - sensitive applications.

Target Applications:

• Human - Machine Interface (HMI)

• **Retail Automation**

• Driver Monitoring System (DMS/OMS)/Interior Monitoring (ICM)

• Telematics Control Unit (TCU)

• 3D Point Cloud

• Vehicle-to-Infrastructure/Vehicle-to-Vehicle (V2X / V2V)

• 3D Reconfigurable Automotive Instrument Panel

• Device User Interface and Connectivity

• Medical Equipment .....

**AM62x Block Diagram**

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590071389-a0067869-42ac-4569-86b8-1e542c88e4ee.png)

## 2\. FET62xx-C SoM Description

### 2.1 FET62xx-C SoM

FET62xx-C SoM Appearance:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590440052-71b10ca7-ef6c-4bc9-aa5b-8f96bf5b8312.png)

**Front**

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590440726-f8f2c901-6f7a-4818-8ab9-65317aedecdd.png)

**Back**

### 2.2 FET62xx-C SoM Dimension Diagram



![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590441127-93d519ad-5278-4645-8bba-e77b1b1486e7.png)

**Top**

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590441346-0bb3f67e-4a7b-4e75-bf5d-ddac24acc9b1.png)

**Bottom **

Structure size: 60mm × 38mm, size tolerance ± 0.13mm, single side of burr tolerance ± 0.2mm.

Plate making process: 1.6mm thickness, 10-layer immersion gold PCB.

Connector: Four 0.5mm pitch, 80pin board-to-board connectors. Refer to Appendix for the connector dimension diagram.

Four mounting holes (2.2mm) are reserved at the four corners of the SoM to facilitate the installation of fixing screws and to improve the reliability of the product connection so that the product can be used in vibration environments.

Please refer to the development board design and use SMT nuts of M2 with a length (L) of 2 mm on the carrier board. Please refer to the following figure for the specifications of the SMT nuts.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590441570-f03f838b-b7fd-48ac-9428-551d63279d67.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590441882-6b774f8a-f77c-42c3-a005-8493fc2d8749.png)

### 2.3 SoM Configuration Resources

#### 2.3.1 SoM Naming Rules

A-B-C+DEFGHIJ:KL-M

| Field |       Field Description        | Value | Description                                                  |
| :---: | :----------------------------: | :---: | ------------------------------------------------------------ |
|   A   |  Product Line Identification   |  FET  | Forlinx Embedded SoM                                         |
|  \-   |     Segment Identification     |  \-   | When the first digit of the CPU value is a letter, connect the product line identifier to the CPU with "-"; when the first digit of the CPU value is a number, omit "-". |
|   B   |            CPU Name            | 62xx  | AM6254, AM6231, AM6232                                       |
|  \-   |     Segment Identification     |  \-   | Parameter segment sign                                       |
|   C   |           Connection           |   C   | Board to Board Connector                                     |
|  \+   |     Segment Identification     |  \+   | The configuration parameter section follows this identifier. |
|   D   |           CPU Clock            |  14   | 1.4 GHz （AM6231 clock 1.0GHZ）                              |
|   E   | RAM capacity<br/>(Unit: Byte)  | 1G/2G | 1G/2G                                                        |
|   F   |        Single ROM Type         |  SE   | eMMC                                                         |
|   G   | ROM capacity<br/> (Unit: Byte) |  8G   | 8GB                                                          |
|   H   |     Operating Temperature      |   I   | -40 to 85℃   industrial  level                               |
|   I   |       Configuration No.        |  A~Z  | If the D~H field values are the same for each product, then this field has the same value. It is in ascending order according to the configuration release time. |
|   J   |          PCB Version           |  12   | V1.2                                                         |
|   :   |           Separator            |   :   | It’s followed by the manufacture’s internal identification.  |
|   K   |           Chip Type            |  A~Z  | This is the internal identification of the manufacturer and has no impact on the use. |
|   L   |        Connector origin        |   1   | Imported connector                                           |

#### 2.3.2 Order Information

| No.  | Specification Model    | CPU Clock | RAM  | ROM  | Temperature Level |
| :--: | ---------------------- | :-------: | :--: | :--: | :---------------: |
|  A   | FET6254-C+141GSE8GIA12 |  1.4 GHZ  |  1G  |  8G  | Industrial-grade  |
|  B   | FET6254-C+142GSE8GIB12 |  1.4 GHZ  |  2G  |  8G  | Industrial-grade  |
|  A   | FET6232-C+142GSE8GIA12 |  1.4 GHZ  |  2G  |  8G  | Industrial-grade  |
|  B   | FET6232-C+141GSE8GIB12 |  1.4 GHZ  |  1G  |  8G  | Industrial-grade  |
|  A   | FET6231-C+101GSE8GIA12 |  1.0 GHZ  |  1G  |  8G  | Industrial-grade  |

This table shows examples of the SoM specifications and models, but it does not cover all possible specifications. The latest specifications and models can be found in the latest product hardware manual. If the specifications you need are not listed in the table, or if you have any questions about the specifications, please visit www.forlinx.net or contact your Forlinx sales representative.

### 2.4 Performance Parameters

#### 2.4.1 System Main Frequency

| **Name**                        | **Specification** |             |             |          | **Description** |
| ------------------------------- | :---------------: | ----------- | ----------- | -------- | :-------------: |
|                                 |    **Minimum**    | **Typical** | **Maximum** | **Unit** |                 |
| System clock Arm ® Cortex ® -53 |         —         | —           | 1400        | MHz      |        —        |
| System clock y Arm® Cortex®-M4F |         —         | —           | 400         | MHz      |                 |
| RTC clock                       |         —         | 32.768      | —           | KHz      |        —        |

AM6231 system clock is up to 1000MHZ

#### 2.4.2 Power Parameter

|       **Parameter**       | **Pin Number** | **Specification** |             |             |          | **Description** |
| :-----------------------: | :------------: | :---------------: | ----------- | ----------- | -------- | :-------------: |
|                           |                |    **Minimum**    | **Typical** | **Maximum** | **Unit** |                 |
| Main Power Supply Voltage |      ACIN      |        4.5        | 5           | 5.5         | V        |                 |

#### 2.4.3 Operating Environment

|     **Parameter**     |                       | **Specification** |             |             |          | **Description**  |
| :-------------------: | --------------------- | :---------------: | ----------- | ----------- | -------- | :--------------: |
|                       |                       |    **Minimum**    | **Typical** | **Maximum** | **Unit** |                  |
| Operating Temperature | Operating Environment |        -40        | 25          | 85          | ℃        | Industrial-grade |
|                       | Storage Environment   |        -40        | 25          | 85          | ℃        |                  |
|       Humidity        | Operating Environment |        10         | —           | 90          | ％RH     | No condensation  |
|                       | Storage Environment   |         5         | —           | 95          | ％RH     |                  |

#### 2.4.4 SoM Interface Speed

|          **Parameter**          | **Specification** |             |             |          | **Description** |
| :-----------------------------: | :---------------: | ----------- | ----------- | -------- | :-------------: |
|                                 |    **Minimum**    | **Typical** | **Maximum** | **Unit** |                 |
| Serial Port Communication Speed |         —         | 115200      | 3.6M        | bps      |        —        |
|       SPI Clock Frequncey       |         —         | —           | 50          | MHz      |        —        |
|     I2C Communication Speed     |         —         | 100         | 400         | Kbps     |        —        |
|       USB interface speed       |         —         | —           | 480         | Mbps     |        —        |
|   CAN-FD Communication speed    |         —         | —           | 5           | Mbps     |        —        |

### 2.5 SoM Interface Speed

|    **Function**     | Quantity | Parameter                                                    |
| :-----------------: | :------: | ------------------------------------------------------------ |
| LVDS<sup>*1*2</sup> |    2     | 2 x 4-lane LVDS display serial interfaces supporting up to 1.19 Gbps per lane;<br />1 x single LVDS interface supports resolutions up to WUXGA (1920 X 1200 @ 60fps, 162MHz pixel clock);<br />The following three output modes are supported:<br /> ·Single LVDS output mode: At this time, only 1 x LVDS interface displays the output;<br />·2 X Single-channel LVDS (copy) output mode: In this mode, 2 x LVDS display output the same content;<br />·Dual-channel LVDS output mode: 8-lane data and 2-lane clock form the same display output channel. |
|    RGB Parallel     |    1     | 1 x 24bit RGB parallel display interface, up to WUXGA (1920 X 1200 @ 60fps,<br />165 MHz pixel clock) |
|      MIPI CSI       |    1     | One 4-lane MIPI camera serial interface MIPI-DPHY 1.2;<br />Supports 1, 2, 3, or 4 wire modes up to 2.5g bps per wire. |
|      Ethernet       |    2     | Supports RMII（10/100）or RGMII (10/100/1000);<br/>Supports IEEE1588 (Annex D，Annex E, Annex F with 802.1AS PTP);<br/>Supports TSN;<br/>Supports hardware IP/UDP/TCP checksum offload. |
|         USB         |    2     | USB 2.0 (up to 480 Mbps);<br/>Port can be configured as a USB host, USB peripheral, or USB dual role<br />device (DRD mode);<br />Integrated USB VBUS detection. |
|  UART<sup>*3</sup>  |    ≤9    | Compatible with 16C750;<br />Supports RS485 external transceiver automatic flow control;<br />Supports baud rates up to 3.6Mbps;<br />Supports stop bits: 1, 1.5, 2bit (s);<br />Parity bits: even, odd, none |
|  SPI<sup>*4</sup>   |    ≤5    | Serial clock with programmable frequency, polarity, and phase per channel;<br />MCSPI controller clock rates up to 50 MHz |
|  I2C<sup>*5</sup>   |    ≤6    | Supports standard-mode (up to 100Kbps) and fast-mode (up to 400Kbps);<br />7-bit and 10-bit device addressing modes. |
|        Audio        |    ≤3    | Send and receive clocks up to 50MHz;<br />Supports Time Division Multiplexing (TDM), Inter-IC Sound (I2C), and similar formats;<br />Supports digital audio interface transfers (SPDIF, IEC60958-1, and AES-3 formats);<br />Supports audio reference output clock. |
|        ePWM         |    ≤3    | Each set of PWM supports two PWM outputs (EPWMxA and EPWMxB) for<br />the following configurations:<br /> · Two independent PWM outputs, Single edge operation<br /> · Two independent PWM outputs with bilateral symmetric operation<br /> · One independent PWM output with bilateral asymmetric operation<br />  · Dead time generation with independent rising and falling edge delay control. |
|        eQEP         |    ≤3    | Enhanced Quadrature Encoder Pulse Input;<br />Supports Input Synchronization;<br />Supports Quadrature Decoder Unit;<br />Supports Position Counter and Control Unit for Position Measurement;<br />Supports Quadrature Edge Capture Unit for Low Speed Measurement. |
|        eCAP         |    ≤3    | The enhanced capture module can be used for:<br />·Sample rate measurement of the audio input;<br />·Speed measurement of the rotating machinery<br /> (for example, Toothed sprocket sensed by a Hall sensor);<br /> · Measurement of the elapsed time between position sensor pulses;<br /> · Measurement of the period and duty cycle of the pulse train signal;<br />· Decoding the current or voltage amplitude from a duty cycle<br />encoded current/voltage sensor. |
| CAN-FD<sup>*6</sup> |    ≤3    | Complies with CAN2.0a, B or ISO 11898 -1 protocols;<br />Supports full CAN FD (up to 64 data bytes);<br />Supports parity/ECC checking of message RAM<br />Up to 5Mbps. |
|         SD          |    ≤2    | Supports 2 x 4-bit SD/SDIO interfaces up to UHS-I;<br />Compliant with eMMC 5.1, SD 3.0 and SDIO version 3.0. |
|        GPMC         |    1     | Clock speeds up to 133MHz;<br />Flexible 8-bit and 16-bit asynchronous memory interface with up to four chips (22-bit address);<br />NAND, NOR, Muxed-NOR, and SRAN. |
|      OSPI/QSPI      |    1     | Supports 166MHz DDR/200MHz SDR mode                          |
|        JTAG         |    1     | Supports JTAG interface                                      |

**Note: The interface number listed in the table is the hardware design or CPU theoretical maximum quantity, and most of the function pins are multiplexed. Please refer to the PinMux table for easy configuration.**

1. A single LVDS interface can support WUXGA (1920x1200@60p, 162MHz pixel clock). It requires that the receiving display or link bridging device can accept the video output of the device through a single LVDS link. Normally, single - link interfaces are only used for display resolutions smaller than 1366 x 768. In the dual - link mode, the second interface does not increase the available bandwidth but reduces the required pixel clock by half;

2. It can support 1 x 2048x1080 + 1 x 1280x720;

3. 7 x out of the 9 x UART are resources in the main domain, and the other 2 x are resources in the MCU domain. The names of the MCU - domain UARTs are: WKUP\_UART0 and MCU\_UART0;

4. 3 x out of the 5 x SPI are resources in the main domain, and the other 2 x are resources in the MCU domain;

5. 2 x out of the 6 x I2C are resources in the main domain, and the other 2 x are resources in the MCU domain;

6. 1 x out of the 3 x CAN FD is a resource in the main domain, and the other 2 x are resources in the MCU domain;

7. The AM6231 SoM has a single - core A53 and no 3D Graphics Engine;

8. The AM6232 SoM has a dual - core A53 and no 3D Graphics Engine.

### 2.6 FET62xx SoM Pins Definition

#### 2.6.1 FET62xx SoM Pins Schematic

FET62xx-C SoM Pins Schematic are as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590442184-aec990ca-1523-40ec-b403-84704cc38b18.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590442541-1831c35d-703b-4bb4-8927-e3bb054eff83.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590442861-c7c6c1be-0573-4e7f-bb32-57f56250f4f7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590443218-c9d9b7ff-9b3e-432c-b59d-77143a88ddc4.png)

#### 2.6.2 FET62xx SoM Pin Functions Description

**Note1:**

**Num ——SoM connector pin no.:**

**Ball —— CPU pin ball no.**

**GPIO ——CPU pin general I/O port serial number**

**Vol  ——Pin signal level**

**Note2:**

**Signal Name——SoM connector network name, the top right corner subscripts’ meaning are as follows:**

| **Superscript No.** | **Superscript Description**                                  |
| :-----------------: | ------------------------------------------------------------ |
|        \[1]         | Pins can be configured for interrupt use.                    |
|        \[2]         | The default pin level is 1.8 V.                              |
|        \[3]         | Pins are CPU boot-related pins, which are not recommended for IO. |
|        \[4]         | Special-purpose pins and can not be used as IO.              |

Pin Description—— SoM Pin Signal Descriptions

Default function-All pin functions of the SoM are specified according to the "default function" in the table below. Please do not modify it, otherwise it may be delivered from the factory.

Drive conflict. If you have any questions, please contact our sales or technical support.

**Note3: The pins marked as "Do not use on carrier board" in the "Default Function" column are those already utilized by the core board and should not be used in the design of the baseboard.**

**Table 1 LEFT\_UP（P1） Connector Interface(Odd) Pin Definition**

| **NUM** | **BALL** | **Signal Name** | **GPIO** | **VOL** | **Pin Description** | **Default Function** |
| :-----: | :------: | :-------------: | :------: | :-----: | ------------------- | :------------------: |
|    1    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|    3    |    \-    | CH1\_LVDS\_A0P  |    \-    |   \-    | CH1\_LVDS data A0+  |    CH1\_LVDS\_A0P    |
|    5    |    \-    | CH1\_LVDS\_A0N  |    \-    |   \-    | CH1\_LVDS data A0-  |    CH1\_LVDS\_A0N    |
|    7    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|    9    |    \-    | CH1\_LVDS\_A1P  |    \-    |   \-    | CH1\_LVDS data A1+  |    CH1\_LVDS\_A1P    |
|   11    |    \-    | CH1\_LVDS\_A1N  |    \-    |   \-    | CH1\_LVDS data A1-  |    CH1\_LVDS\_A1N    |
|   13    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   15    |    \-    | CH1\_LVDS\_A2P  |    \-    |   \-    | CH1\_LVDS data A2+  |    CH1\_LVDS\_A2P    |
|   17    |    \-    | CH1\_LVDS\_A2N  |    \-    |   \-    | CH1\_LVDS data A2-  |    CH1\_LVDS\_A2N    |
|   19    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   21    |    \-    | CH1\_LVDS\_CLKP |    \-    |   \-    | CH1\_LVDS clock+    |   CH1\_LVDS\_CLKP    |
|   23    |    \-    | CH1\_LVDS\_CLKN |    \-    |   \-    | CH1\_LVDS clock-    |   CH1\_LVDS\_CLKN    |
|   25    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   27    |    \-    | CH1\_LVDS\_A3P  |    \-    |   \-    | CH1\_LVDS data A3+  |    CH1\_LVDS\_A3P    |
|   29    |    \-    | CH1\_LVDS\_A3N  |    \-    |   \-    | CH1\_LVDS data A3-  |    CH1\_LVDS\_A3N    |
|   31    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   33    |    \-    | CH2\_LVDS\_CLKN |    \-    |   \-    | CH2\_LVDS clock-    |   CH2\_LVDS\_CLKN    |
|   35    |    \-    | CH2\_LVDS\_CLKP |    \-    |   \-    | CH2\_LVDS clock+    |   CH2\_LVDS\_CLKP    |
|   37    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   39    |    \-    | CH2\_LVDS\_A1N  |    \-    |   \-    | CH2\_LVDS data A1-  |    CH2\_LVDS\_A1N    |
|   41    |    \-    | CH2\_LVDS\_A1P  |    \-    |   \-    | CH2\_LVDS data A1+  |    CH2\_LVDS\_A1P    |
|   43    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   45    |    \-    | CH2\_LVDS\_A2N  |    \-    |   \-    | CH2\_LVDS data A2-  |    CH2\_LVDS\_A2N    |
|   47    |    \-    | CH2\_LVDS\_A2P  |    \-    |   \-    | CH2\_LVDS data A2+  |    CH2\_LVDS\_A2P    |
|   49    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   51    |    \-    | CH2\_LVDS\_A0P  |    \-    |   \-    | CH2\_LVDS data A0+  |    CH2\_LVDS\_A0P    |
|   53    |    \-    | CH2\_LVDS\_A0N  |    \-    |   \-    | CH2\_LCDS data A0-  |    CH2\_LVDS\_A0N    |
|   55    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   57    |    \-    | CH2\_LVDS\_A3P  |    \-    |   \-    | CH2\_LVDS data A3+  |    CH2\_LVDS\_A3P    |
|   59    |    \-    | CH2\_LVDS\_A3N  |    \-    |   \-    | CH2\_LVDS data A3-  |    CH2\_LVDS\_A3N    |
|   61    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   63    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   65    |    \-    |    USB1\_DP     |    \-    |   \-    | USB1 data+          |       USB1\_DP       |
|   67    |    \-    |    USB1\_DM     |    \-    |   \-    | USB1 data-          |       USB1\_DM       |
|   69    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   71    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   73    |    \-    |    USB0\_DP     |    \-    |   \-    | USB0 data+          |       USB0\_DP       |
|   75    |    \-    |    USB0\_DM     |    \-    |   \-    | USB0 data-          |       USB0\_DM       |
|   77    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |
|   79    |    \-    |       GND       |    \-    |   \-    | Ground              |         GND          |

**Table 2 LEFT\_UP（P1） Connector Interface(Even) Pin Definition**

| **NUM** | **BALL** | **Signal Name** | **GPIO** | **VOL** | **Pin Description**          | **Default Function** |
| :-----: | :------: | :-------------: | :------: | :-----: | ---------------------------- | :------------------: |
|    2    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|    4    |    \-    |  CSI0\_RXCLKP   |    \-    |   \-    | MIPI\_CSI0 Receiving clock+  |     CSI0\_RXCLKP     |
|    6    |    \-    |  CSI0\_RXCLKN   |    \-    |   \-    | MIPI\_CSI0 Receiving clock-  |     CSI0\_RXCLKN     |
|    8    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   10    |    \-    |   CSI0\_RXP3    |    \-    |   \-    | MIPI\_CSI0 Receiving data 3+ |      CSI0\_RXP3      |
|   12    |    \-    |   CSI0\_RXN3    |    \-    |   \-    | MIPI\_CSI0 Receiving data 3- |      CSI0\_RXN3      |
|   14    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   16    |    \-    |   CSI0\_RXP1    |    \-    |   \-    | MIPI\_CSI0 Receiving data1+  |      CSI0\_RXP1      |
|   18    |    \-    |   CSI0\_RXN1    |    \-    |   \-    | MIPI\_CSI0 Receiving data1-  |      CSI0\_RXN1      |
|   20    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   22    |    \-    |   CSI0\_RXP2    |    \-    |   \-    | MIPI\_CSI0 Receiving data 2+ |      CSI0\_RXP2      |
|   24    |    \-    |   CSI0\_RXN2    |    \-    |   \-    | MIPI\_CSI0 Receiving data 2- |      CSI0\_RXN2      |
|   26    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   28    |    \-    |   CSI0\_RXP0    |    \-    |   \-    | MIPI\_CSI0 Receiving data 0+ |      CSI0\_RXP0      |
|   30    |    \-    |   CSI0\_RXN0    |    \-    |   \-    | MIPI\_CSI0 Receiving data 0- |      CSI0\_RXN0      |
|   32    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   34    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   36    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   38    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   40    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   42    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   44    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   46    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   48    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   50    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   52    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   54    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   56    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   58    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   60    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   62    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   64    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   66    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   68    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   70    |    \-    |   USB0\_VBUS    |    \-    |  1.8V   | USB0\_VBUS detection input   |      USB0\_VBUS      |
|   72    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   74    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   76    |    \-    |   USB1\_VBUS    |    \-    |  1.8V   | USB1\_VBUS detection input   |      USB1\_VBUS      |
|   78    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |
|   80    |    \-    |       GND       |    \-    |   \-    | Ground                       |         GND          |

**Table 3 RIGHT\_UP（P2） Connector Interface(Odd) Pin Definition**

| **NUM** | **BALL** |   **Signal Name**   |    **GPIO**    | **VOL** | **Pin Description**                            | **Default Function** |
| :-----: | :------: | :-----------------: | :------------: | :-----: | ---------------------------------------------- | :------------------: |
|    1    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|    3    |    D4    |   MCU\_GPIO0\_16    | MCU\_GPIO0\_16 |  3.3V   | MCU domain GPIO0\_16                           |    MCU\_GPIO0\_16    |
|    5    |    E5    |   MCU\_GPIO0\_15    | MCU\_GPIO0\_16 |  3.3V   | MCU domain GPIO0\_15                           |    MCU\_GPIO0\_15    |
|    7    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|    9    |    A5    |   MCU\_UART0\_TXD   | MCU\_GPIO0\_6  |  3.3V   | MCU domain UART0 send                          |   MCU\_UART0\_TXD    |
|   11    |    B5    |   MCU\_UART0\_RXD   | MCU\_GPIO0\_5  |  3.3V   | MCU domain UART0 receive                       |   MCU\_UART0\_RXD    |
|   13    |    A6    |   MCU\_UART0\_CTS   | MCU\_GPIO0\_7  |  3.3V   | MCU domain UART0 clear to send (active low)    |    MCU\_GPIO0\_7     |
|   15    |    B6    |   MCU\_UART0\_RTS   | MCU\_GPIO0\_8  |  3.3V   | MCU domain UART0 request to send (active low)  |    MCU\_GPIO0\_8     |
|   17    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   19    |    A8    |   MCU\_I2C0\_SCL    | MCU\_GPIO0\_17 |  3.3V   | MCU domain I2C0 clock                          |    MCU\_I2C0\_SCL    |
|   21    |   D10    |   MCU\_I2C0\_SDA    | MCU\_GPIO0\_18 |  3.3V   | MCU domain I2C0 data                           |    MCU\_I2C0\_SDA    |
|   23    |    B9    |   WKUP\_I2C0\_SCL   | MCU\_GPIO0\_19 |  3.3V   | WKUP domain I2C0 clock                         |   WKUP\_I2C0\_SCL    |
|   25    |    A9    |   WKUP\_I2C0\_SDA   | MCU\_GPIO0\_20 |  3.3V   | WKUP domain I2C0 data                          |   WKUP\_I2C0\_SDA    |
|   27    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   29    |   A12    |    WKUP\_CLKOUT0    | MCU\_GPIO0\_23 |  3.3V   | WKUP domain CLKOUT0 output                     |    WKUP\_CLKOUT0     |
|   31    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   33    |    \-    | MCU\_SAFETY\_ERRORZ |       \-       |  1.8V   | MCU domain ESM error signal output             | MCU\_SAFETY\_ERRORZ  |
|   35    |    \-    |   CONN\_MCU\_PORZ   |       \-       |  3.3V   | MCU domain cold reset input                    |   CONN\_MCU\_PORZ    |
|   37    |    \-    |     MCU\_RESETZ     |       \-       |  3.3V   | MCU domain warm reset input                    |     MCU\_RESETZ      |
|   39    |    \-    |   MCU\_RESETSTATZ   |       \-       |  3.3V   | MCU domain hot reset status output             |   MCU\_RESETSTATZ    |
|   41    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   43    |    \-    |        EMU0         |       \-       |  3.3V   | Simulation control 0                           |         EMU0         |
|   45    |    \-    |        EMU1         |       \-       |  3.3V   | Simulation control 1                           |         EMU1         |
|   47    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   49    |    \-    |   JTAG\_EMU\_RSTN   |       \-       |  3.3V   | JTAG\_EMU cold reset                           |   JTAG\_EMU\_RSTN    |
|   51    |   B10    |        TRSTN        |       \-       |  3.3V   | JTAG reset                                     |        TRSTN         |
|   53    |   A10    |         TCK         |       \-       |  3.3V   | JTAG test clock input                          |         TCK          |
|   55    |   B11    |         TMS         |       \-       |  3.3V   | JTAG test mode selection input                 |         TMS          |
|   57    |   A11    |         TDI         |       \-       |  3.3V   | JTAG test data input                           |         TDI          |
|   59    |   D12    |         TDO         |       \-       |  3.3V   | JTAG test data output                          |         TDO          |
|   61    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   63    |   D14    |     UART0\_RXD      |   GPIO1\_20    |  3.3V   | Main domain UART0 receive                      |      UART0\_RXD      |
|   65    |   E14    |     UART0\_TXD      |   GPIO1\_21    |  3.3V   | Main domain UART0 send                         |      UART0\_TXD      |
|   67    |   A15    |     UART0\_CTS      |   GPIO1\_22    |  3.3V   | Main domain UART0 clear sending（active low）  |      GPIO1\_22       |
|   69    |   B15    |     UART0\_RTS      |   GPIO1\_23    |  3.3V   | Main domain UART0 request to send (active low) | AUDIO\_EXT\_REFCLK1  |
|   71    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   73    |    \-    |     SOC\_CLKIN      |       \-       |  1.8V   | SoM clock input (floating by default)          |      SOC\_CLKIN      |
|   75    |    \-    |         GND         |       \-       |   \-    | Ground                                         |         GND          |
|   77    |    \-    |    USB0\_DRVVBUS    |       \-       |  3.3V   | USB0 VBUS control output                       |    USB0\_DRVVBUS     |
|   79    |    \-    |    USB1\_DRVVBUS    |       \-       |  3.3V   | USB1 VBUS control output                       |    USB1\_DRVVBUS     |

**Table 4 RIGHT\_UP（P2） Connector Interface(Even) Pin Definition**

| **NUM** | **BALL** | **Signal Name**  |    **GPIO**    | **VOL** | **Pin Description**                     | **Default Function** |
| :-----: | :------: | :--------------: | :------------: | :-----: | --------------------------------------- | :------------------: |
|    2    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|    4    |    B3    |  MCU\_MCAN0\_RX  | MCU\_GPIO0\_14 |  3.3V   | MCU domain CAN0 receive                 |    MCU\_MCAN0\_RX    |
|    6    |    D6    |  MCU\_MCAN0\_TX  | MCU\_GPIO0\_13 |  3.3V   | MCU domain CAN0 send                    |    MCU\_MCAN0\_TX    |
|    8    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   10    |    C6    | WKUP\_UART0\_CTS | MCU\_GPIO0\_11 |  3.3V   | WKUP domain UART0 clear sending         |    MCU\_GPIO0\_11    |
|   12    |    A4    | WKUP\_UART0\_RTS | MCU\_GPIO0\_12 |  3.3V   | WKUP domain UART0 request to send       |    MCU\_GPIO0\_12    |
|   14    |    B4    | WKUP\_UART0\_RX  | MCU\_GPIO0\_9  |  3.3V   | WKUP domain UART0 receive               |   WKUP\_UART0\_RX    |
|   16    |    C5    | WKUP\_UART0\_TX  | MCU\_GPIO0\_10 |  3.3V   | WKUP domain UART0 send                  |   WKUP\_UART0\_TX    |
|   18    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   20    |    A7    |  MCU\_SPI0\_CLK  | MCU\_GPIO0\_2  |  3.3V   | MCU domain SPI0 clock                   |    MCU\_SPI0\_CLK    |
|   22    |    D9    |  MCU\_SPI0\_D0   | MCU\_GPIO0\_3  |  3.3V   | MCU domain SPI0 data 0                  |    MCU\_SPI0\_D0     |
|   24    |    C9    |  MCU\_SPI0\_D1   | MCU\_GPIO0\_4  |  3.3V   | MCU domain SPI0 data 1                  |    MCU\_SPI0\_D1     |
|   26    |    E8    |  MCU\_SPI0\_CS0  | MCU\_GPIO0\_0  |  3.3V   | MCU domain SPI0 chip selection 0        |    MCU\_SPI0\_CS0    |
|   28    |    B8    |  MCU\_SPI0\_CS1  | MCU\_GPIO0\_1  |  3.3V   | MCU domain SPI0 chip selection 1        |    MCU\_SPI0\_CS1    |
|   30    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   32    |   C13    |    SPI0\_CS1     |   GPIO1\_16    |  3.3V   | Main domain SPI0 chip selection 1       |      GPIO1\_16       |
|   34    |   A13    |    SPI0\_CS0     |   GPIO1\_15    |  3.3V   | Main domain SPI0 chip selection 0       |      GPIO1\_15       |
|   36    |   B13    |     SPI0\_D0     |   GPIO1\_18    |  3.3V   | Main domain SPI0 data 0                 |      GPIO1\_18       |
|   38    |   A14    |    SPI0\_CLK     |   GPIO1\_17    |  3.3V   | Main domain SPI0 clock                  |      GPIO1\_17       |
|   40    |   B14    |     SPI0\_D1     |   GPIO1\_19    |  3.3V   | Main domain SPI0 data 1                 |      GPIO1\_19       |
|   42    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   44    |   C15    |    UART5\_RXD    |   GPIO1\_24    |  3.3V   | Main domain UART5 receive               |      UART5\_RXD      |
|   46    |   E15    |    UART5\_TXD    |   GPIO1\_25    |  3.3V   | Main domain UART5 send                  |      UART5\_TXD      |
|   48    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   50    |   B16    |  SOC\_I2C0\_SCL  |   GPIO1\_26    |  3.3V   | Main domain I2C0 clock                  |    SOC\_I2C0\_SCL    |
|   52    |   A16    |  SOC\_I2C0\_SDA  |   GPIO1\_27    |  3.3V   | Main domain I2C0 data                   |    SOC\_I2C0\_SDA    |
|   54    |   B17    |    I2C1\_SCL     |   GPIO1\_28    |  3.3V   | Main domain I2C1 clock                  |      I2C1\_SCL       |
|   56    |   A17    |    I2C1\_SDA     |   GPIO1\_29    |  3.3V   | Main domain I2C1 data                   |      I2C1\_SDA       |
|   58    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   60    |    \-    |   EXT\_REFCLK1   |       \-       |  3.3V   | External clock input to the Main domain |     EXT\_REFCLK1     |
|   62    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |
|   64    |   E18    |   MCASP0\_AXR0   |   GPIO1\_10    |  3.3V   | MCASP0 serial data 0                    |       LCD\_PWM       |
|   66    |   B18    |   MCASP0\_AXR1   |    GPIO1\_9    |  3.3V   | MCASP0 serial data 1                    |      LVDS\_PWM       |
|   68    |   A19    |   MCASP0\_AXR2   |    GPIO1\_8    |  3.3V   | MCASP0 serial data 2                    |     MCASP0\_AXR2     |
|   70    |   B19    |   MCASP0\_AXR3   |    GPIO1\_7    |  3.3V   | MCASP0 serial data 3                    |     MCASP0\_AXR3     |
|   72    |   A20    |  MCASP0\_ACLKR   |   GPIO1\_14    |  3.3V   | MCASP0 receive bit reference clock      |    MCASP0\_ACLKR     |
|   74    |   E19    |   MCASP0\_AFSR   |   GPIO1\_13    |  3.3V   | MCASP0 receives the frame sync          |     MCASP0\_AFSR     |
|   76    |   D20    |   MCASP0\_AFSX   |   GPIO1\_12    |  3.3V   | MCASP0 send bit reference clock         |     MCASP0\_AFSX     |
|   78    |   B20    |  MCASP0\_ACLKX   |   GPIO1\_11    |  3.3V   | MCASP0 sends frame sync                 |    MCASP0\_ACLKX     |
|   80    |    \-    |       GND        |       \-       |   \-    | Ground                                  |         GND          |

**Table 5 LEFT \_ DOWN (P3) Connector Interface (Odd) Pin Definition**

| **NUM** | **BALL** | **Signal Name**       | **GPIO**  | **VOL** | **Pin Description**                        | **Default Function**  |
| :-----: | :------: | --------------------- | :-------: | :-----: | ------------------------------------------ | :-------------------: |
|    1    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|    3    |   AC25   | VOUT0\_VSYNC          | GPIO0\_63 |  3.3V   | Vertical synchronization of video output   |     VOUT0\_VSYNC      |
|    5    |   AB24   | VOUT0\_HSYNC          | GPIO0\_61 |  3.3V   | Horizontal synchronization of video output |     VOUT0\_HSYNC      |
|    7    |   Y20    | VOUT0\_DE             | GPIO0\_62 |  3.3V   | Enable video output data                   |       VOUT0\_DE       |
|    9    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   11    |   AD24   | CPSW\_RGMII2\_MDC     | GPIO0\_86 |  3.3V   | MDIO clock                                 |   CPSW\_RGMII2\_MDC   |
|   13    |   AB22   | CPSW\_RGMII2\_MDIO    | GPIO0\_85 |  3.3V   | MDIO data                                  |  CPSW\_RGMII2\_MDIO   |
|   15    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   17    |   AD17   | CPSW\_RGMII1\_RXC     | GPIO0\_80 |  3.3V   | RGMII1 Receiving clock-                    |   CPSW\_RGMII1\_RXC   |
|   19    |   AE17   | CPSW\_RGMII1\_RX\_CTL | GPIO0\_79 |  3.3V   | RGMII1 receiving control                   | CPSW\_RGMII1\_RX\_CTL |
|   21    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   23    |   AB17   | CPSW\_RGMII1\_RD0     | GPIO0\_81 |  3.3V   | RGMII1 receive data 0                      |   CPSW\_RGMII1\_RD0   |
|   25    |   AC17   | CPSW\_RGMII1\_RD1     | GPIO0\_82 |  3.3V   | RGMII1 receive data 1                      |   CPSW\_RGMII1\_RD1   |
|   27    |   AB16   | CPSW\_RGMII1\_RD2     | GPIO0\_83 |  3.3V   | RGMII1 receive data 2                      |   CPSW\_RGMII1\_RD2   |
|   29    |   AA15   | CPSW\_RGMII1\_RD3     | GPIO0\_84 |  3.3V   | RGMII1 receive data 3                      |   CPSW\_RGMII1\_RD3   |
|   31    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   33    |   AE19   | CPSW\_RGMII1\_TXC     | GPIO0\_74 |  3.3V   | RGMII1 clock sending                       |   CPSW\_RGMII1\_TXC   |
|   35    |   AD19   | CPSW\_RGMII1\_TX\_CTL | GPIO0\_73 |  3.3V   | RGMII1 sending control                     | CPSW\_RGMII1\_TX\_CTL |
|   37    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   39    |   AE20   | CPSW\_RGMII1\_TD0     | GPIO0\_75 |  3.3V   | RGMII1 sends data 0                        |   CPSW\_RGMII1\_TD0   |
|   41    |   AD20   | CPSW\_RGMII1\_TD1     | GPIO0\_76 |  3.3V   | RGMII1 sends data 1                        |   CPSW\_RGMII1\_TD1   |
|   43    |   AE18   | CPSW\_RGMII1\_TD2     | GPIO0\_77 |  3.3V   | RGMII1 sends data 2                        |   CPSW\_RGMII1\_TD2   |
|   45    |   AD18   | CPSW\_RGMII1\_TD3     | GPIO0\_78 |  3.3V   | RGMII1\_send data 3                        |   CPSW\_RGMII1\_TD3   |
|   47    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   49    |   AD23   | CPSW\_RGMII2\_RXC     | GPIO1\_2  |  3.3V   | RGMII2 Receiving clock-                    |   CPSW\_RGMII2\_RXC   |
|   51    |   AD22   | CPSW\_RGMII2\_RX\_CTL | GPIO1\_1  |  3.3V   | RGMII2 receiving control                   | CPSW\_RGMII2\_RX\_CTL |
|   53    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   55    |   AE23   | CPSW\_RGMII2\_RD0     | GPIO1\_3  |  3.3V   | RGMII2 receive data 0                      |   CPSW\_RGMII2\_RD0   |
|   57    |   AB20   | CPSW\_RGMII2\_RD1     | GPIO1\_4  |  3.3V   | RGMII2 receive data 1                      |   CPSW\_RGMII2\_RD1   |
|   59    |   AC21   | CPSW\_RGMII2\_RD2     | GPIO1\_5  |  3.3V   | RGMII2 receive data 2                      |   CPSW\_RGMII2\_RD2   |
|   61    |   AE22   | CPSW\_RGMII2\_RD3     | GPIO1\_6  |  3.3V   | RGMII2 receive data 3                      |   CPSW\_RGMII2\_RD3   |
|   63    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   65    |   AE21   | CPSW\_RGMII2\_TXC     | GPIO0\_88 |  3.3V   | RGMII2 clock sending                       |   CPSW\_RGMII2\_TXC   |
|   67    |   AA19   | CPSW\_RGMII2\_TX\_CTL | GPIO0\_87 |  3.3V   | RGMII2 sending control                     | CPSW\_RGMII2\_TX\_CTL |
|   69    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |
|   71    |   Y18    | CPSW\_RGMII2\_TD0     | GPIO0\_89 |  3.3V   | RGMII2 sends data 0                        |   CPSW\_RGMII2\_TD0   |
|   73    |   AA18   | CPSW\_RGMII2\_TD1     | GPIO0\_90 |  3.3V   | RGMII2 sends data 1                        |   CPSW\_RGMII2\_TD1   |
|   75    |   AD21   | CPSW\_RGMII2\_TD2     | GPIO0\_91 |  3.3V   | RGMII2 sends data 2                        |   CPSW\_RGMII2\_TD2   |
|   77    |   AC20   | CPSW\_RGMII2\_TD3     | GPIO1\_0  |  3.3V   | RGMII2 sends data 3                        |   CPSW\_RGMII2\_TD3   |
|   79    |    \-    | GND                   |    \-     |   \-    | Ground                                     |          GND          |

**Table 6 LEFT \_ DOWN (P3) Connector Interface (Even) Pin Definition**

| **NUM** | **BALL** | **Signal Name** | **GPIO**  | **VOL** | **Pin Description**      | **Default Function** |
| :-----: | :------: | --------------- | :-------: | :-----: | ------------------------ | :------------------: |
|    2    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|    4    |   AC24   | VOUT0\_PCLK     | GPIO0\_64 |  3.3V   | Video output pixel clock |     VOUT0\_PCLK      |
|    6    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|    8    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|   10    |   U22    | VOUT0\_DATA0    | GPIO0\_45 |  3.3V   | Video output data 0      |     VOUT0\_DATA0     |
|   12    |   V24    | VOUT0\_DATA1    | GPIO0\_46 |  3.3V   | Video output data 1      |     VOUT0\_DATA1     |
|   14    |   W25    | VOUT0\_DATA2    | GPIO0\_47 |  3.3V   | Video output data 2      |     VOUT0\_DATA2     |
|   16    |   W24    | VOUT0\_DATA3    | GPIO0\_48 |  3.3V   | Video output data 3      |     VOUT0\_DATA3     |
|   18    |   Y25    | VOUT0\_DATA4    | GPIO0\_49 |  3.3V   | Video output data 4      |     VOUT0\_DATA4     |
|   20    |   Y24    | VOUT0\_DATA5    | GPIO0\_50 |  3.3V   | Video output data 5      |     VOUT0\_DATA5     |
|   22    |   Y23    | VOUT0\_DATA6    | GPIO0\_51 |  3.3V   | Video output data 6      |     VOUT0\_DATA6     |
|   24    |   AA25   | VOUT0\_DATA7    | GPIO0\_52 |  3.3V   | Video output data 7      |     VOUT0\_DATA7     |
|   26    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|   28    |   V21    | VOUT0\_DATA8    | GPIO0\_53 |  3.3V   | Video output data 8      |     VOUT0\_DATA8     |
|   30    |   W21    | VOUT0\_DATA9    | GPIO0\_54 |  3.3V   | Video output data 9      |     VOUT0\_DATA9     |
|   32    |   V20    | VOUT0\_DATA10   | GPIO0\_55 |  3.3V   | Video output data 10     |    VOUT0\_DATA10     |
|   34    |   AA23   | VOUT0\_DATA11   | GPIO0\_56 |  3.3V   | Video output data 11     |    VOUT0\_DATA11     |
|   36    |   AB25   | VOUT0\_DATA12   | GPIO0\_57 |  3.3V   | Video output data 12     |    VOUT0\_DATA12     |
|   38    |   AA24   | VOUT0\_DATA13   | GPIO0\_58 |  3.3V   | Video output data 13     |    VOUT0\_DATA13     |
|   40    |   Y22    | VOUT0\_DATA14   | GPIO0\_59 |  3.3V   | Video output data 14     |    VOUT0\_DATA14     |
|   42    |   AA21   | VOUT0\_DATA15   | GPIO0\_60 |  3.3V   | Video output data 15     |    VOUT0\_DATA15     |
|   44    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|   46    |   U24    | GPMC0\_AD15     | GPIO0\_30 |  3.3V   | GPMC data 15/address 16  |     GPMC0\_AD15      |
|   48    |   U25    | GPMC0\_AD14     | GPIO0\_29 |  3.3V   | GPMC data 14/address 15  |     GPMC0\_AD14      |
|   50    |   T24    | GPMC0\_AD13     | GPIO0\_28 |  3.3V   | GPMC data 13/address 14  |     GPMC0\_AD13      |
|   52    |   T22    | GPMC0\_AD12     | GPIO0\_27 |  3.3V   | GPMC data 12/address 13  |     GPMC0\_AD12      |
|   54    |   R21    | GPMC0\_AD11     | GPIO0\_26 |  3.3V   | GPMC data 11/address 12  |     GPMC0\_AD11      |
|   56    |   T25    | GPMC0\_AD10     | GPIO0\_25 |  3.3V   | GPMC data 10/address 11  |     GPMC0\_AD10      |
|   58    |   R25    | GPMC0\_AD9      | GPIO0\_24 |  3.3V   | GPMC data 9/address 10   |      GPMC0\_AD9      |
|   60    |   R24    | GPMC0\_AD8      | GPIO0\_23 |  3.3V   | GPMC data 8/address 9    |      GPMC0\_AD8      |
|   62    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |
|   64    |   R23    | GPMC0\_AD7      | GPIO0\_22 |  3.3V   | GPMC data 7/address 8    |      GPMC0\_AD7      |
|   66    |   P21    | GPMC0\_AD6      | GPIO0\_21 |  3.3V   | GPMC data 6/address 7    |      GPMC0\_AD6      |
|   68    |   P22    | GPMC0\_AD5      | GPIO0\_20 |  3.3V   | GPMC data 5/address 6    |      GPMC0\_AD5      |
|   70    |   P24    | GPMC0\_AD4      | GPIO0\_19 |  3.3V   | GPMC data 4/address 5    |      GPMC0\_AD4      |
|   72    |   N25    | GPMC0\_AD3      | GPIO0\_18 |  3.3V   | GPMC data 3/address 4    |      GPMC0\_AD3      |
|   74    |   N24    | GPMC0\_AD2      | GPIO0\_17 |  3.3V   | GPMC data 2/address 3    |      GPMC0\_AD2      |
|   76    |   N23    | GPMC0\_AD1      | GPIO0\_16 |  3.3V   | GPMC data 1/address 2    |      GPMC0\_AD1      |
|   78    |   M25    | GPMC0\_AD0      | GPIO0\_15 |  3.3V   | GPMC data 0/address 1    |      GPMC0\_AD0      |
|   80    |    \-    | GND             |    \-     |   \-    | Ground                   |         GND          |

**Table 7. RIGHT\_ DOWN (P4) Connector Interface (Odd) Pin Definition**

| **NUM** | **BALL** | **Signal Name**  | **GPIO**  | **VOL** | **Pin Description**                                      | **Default Function** |
| :-----: | :------: | ---------------- | :-------: | :-----: | -------------------------------------------------------- | :------------------: |
|    1    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|    3    |   F23    | OSPI0\_CSN0      | GPIO0\_11 |  1.8V   | OSPI chip select 0                                       |     OSPI0\_CSN0      |
|    5    |   G21    | OSPI0\_CSN1      | GPIO0\_12 |  1.8V   | OSPI chip select 1                                       |      GPIO0\_12       |
|    7    |   H21    | OSPI0\_CSN2      | GPIO0\_13 |  1.8V   | OSPI chip select 2                                       |     OSPI0\_CSN2      |
|    9    |   E24    | OSPI0\_CSN3      | GPIO0\_14 |  1.8V   | OSPI chip select 3                                       |     OSPI0\_CSN3      |
|   11    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   13    |   E25    | OSPI\_DQ0        | GPIO0\_3  |  1.8V   | OSPI Data 0                                              |      OSPI\_DQ0       |
|   15    |   G24    | OSPI\_DQ1        | GPIO0\_4  |  1.8V   | OSPI Data 1                                              |      OSPI\_DQ1       |
|   17    |   F25    | OSPI\_DQ2        | GPIO0\_5  |  1.8V   | OSPI Data 2                                              |      OSPI\_DQ2       |
|   19    |   F24    | OSPI\_DQ3        | GPIO0\_6  |  1.8V   | OSPI Data 3                                              |      OSPI\_DQ3       |
|   21    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   23    |   J23    | OSPI\_DQ4        | GPIO0\_7  |  1.8V   | OSPI Data 4                                              |       GPIO0\_7       |
|   25    |   J25    | OSPI\_DQ5        | GPIO0\_8  |  1.8V   | OSPI Data 5                                              |       GPIO0\_8       |
|   27    |   H25    | OSPI\_DQ6        | GPIO0\_9  |  1.8V   | OSPI Data 6                                              |       GPIO0\_9       |
|   29    |   J22    | OSPI\_DQ7        | GPIO0\_10 |  1.8V   | OSPI Data 7                                              |      GPIO0\_10       |
|   31    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   33    |   G25    | OSPI0\_LBCLK     | GPIO0\_1  |  1.8V   | OSPI loop clock input/output                             |     OSPI0\_LBCLK     |
|   35    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   37    |   J24    | OSPI\_DQS        | GPIO0\_2  |  1.8V   | OSPI data strobe or loopback clock input                 |      OSPI\_DQS       |
|   39    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   41    |   H24    | OSPI\_CLK        | GPIO0\_0  |  1.8V   | OSPI clock output-                                       |      OSPI\_CLK       |
|   43    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   45    |   U23    | GPMC0\_WAIT0     | GPIO0\_37 |  3.3V   | GPMC external wait for indication input                  |     GPMC0\_WAIT0     |
|   47    |   V25    | GPIO0\_38        | GPIO0\_38 |  3.3V   | Main domain GPIO0\_38                                    |      GPIO0\_38       |
|   49    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   51    |   M21    | GPMC0\_CSN0      | GPIO0\_41 |  3.3V   | GPMC chip select 0                                       |     GPMC0\_CSN0      |
|   53    |   L21    | GPIO0\_42        | GPIO0\_42 |  3.3V   | Main domain GPIO0\_42                                    |      GPIO0\_42       |
|   55    |   K22    | GPMC0\_CSN2      | GPIO0\_43 |  3.3V   | GPMC chip select 2                                       |     GPMC0\_CSN2      |
|   57    |   K24    | GPMC0\_CSN3      | GPIO0\_44 |  3.3V   | GPMC chip select 3                                       |     GPMC0\_CSN3      |
|   59    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   61    |   K25    | GPMC0\_WPN       | GPIO0\_39 |  3.3V   | GPMC Flash write protect                                 |      GPIO0\_39       |
|   63    |   L25    | GPMC0\_WEN       | GPIO0\_34 |  3.3V   | GPMC write enable                                        |      GPMC0\_WEN      |
|   65    |   L24    | GPMC0\_OEN\_REN  | GPIO0\_33 |  3.3V   | GPMC output enable or read enable                        |   GPMC0\_OEN\_REN    |
|   67    |   L23    | GPMC0\_ADVN\_ALE | GPIO0\_32 |  3.3V   | GPMC address active (active low) or address latch enable |   GPMC0\_ADVN\_ALE   |
|   69    |   M24    | GPMC0\_BE0N\_CLE | GPIO0\_35 |  3.3V   | GPMC low byte enable or command latch enable             |      GPIO0\_35       |
|   71    |   M22    | GPMC0\_DIR       | GPIO0\_35 |  3.3V   | GPMC data bus signal direction control                   |      GPIO0\_40       |
|   73    |   N20    | GPMC0\_BE1N      | GPIO0\_36 |  3.3V   | GPMC high byte enable                                    |      GPIO0\_36       |
|   75    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |
|   77    |   P25    | GPMC0\_CLK       | GPIO0\_31 |  3.3V   | GPMC clock output-                                       |      GPIO0\_31       |
|   79    |    \-    | GND              |    \-     |   \-    | Ground                                                   |         GND          |

**Table 8. RIGHT\_ DOWN (P4) Connector Interface (Even) Pin Definition**

| NUM** | **BALL** |  **Signal Name**  | **GPIO**  |  **VOL**  | **Pin Description**                                          | **Default Function** |
| :---: | :------: | :---------------: | :-------: | :-------: | ------------------------------------------------------------ | :------------------: |
|   2   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|   4   |   C21    |    MMC1\_DATA2    | GPIO1\_43 | 1.8V/3.3V | MMC1 data bit 2-                                             |     MMC1\_DATA2      |
|   6   |   D22    |    MMC1\_DATA3    | GPIO1\_42 | 1.8V/3.3V | MMC1 data bit 3-                                             |     MMC1\_DATA3      |
|   8   |   A21    |     MMC1\_CMD     | GPIO1\_47 | 1.8V/3.3V | MMC1 command                                                 |      MMC1\_CMD       |
|  10   |   D17    |    MMC1\_SDCD     | GPIO1\_48 |   3.3V    | MMC1 card detection                                          |      MMC1\_SDCD      |
|  12   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  14   |   B22    |     MMC1\_CLK     | GPIO1\_46 | 1.8V/3.3V | MMC1 clock                                                   |      MMC1\_CLK       |
|  16   |   A22    |    MMC1\_DATA0    | GPIO1\_45 | 1.8V/3.3V | MMC1 data bit 0-                                             |     MMC1\_DATA0      |
|  18   |   B21    |    MMC1\_DATA1    | GPIO1\_44 | 1.8V/3.3V | MMC1 data bit 1-                                             |     MMC1\_DATA1      |
|  20   |   C17    |     GPIO1\_49     | GPIO1\_49 |   3.3V    | Main domain GPIO1\_49                                        |      GPIO1\_49       |
|  22   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  24   |   E23    |    MMC2\_DATA2    | GPIO0\_66 |   1.8V    | MMC2 data bit 2-                                             |     MMC2\_DATA2      |
|  26   |   D24    |    MMC2\_DATA3    | GPIO0\_65 |   1.8V    | MMC2 data bit 3-                                             |     MMC2\_DATA3      |
|  28   |   C24    |     MMC2\_CMD     | GPIO0\_70 |   1.8V    | MMC2 command                                                 |      MMC2\_CMD       |
|  30   |   D25    |     MMC2\_CLK     | GPIO0\_69 |   1.8V    | MMC2 clock                                                   |      MMC2\_CLK       |
|  32   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  34   |   B24    |    MMC2\_DATA0    | GPIO0\_68 |   1.8V    | MMC2 data bit 0-                                             |     MMC2\_DATA0      |
|  36   |   C25    |    MMC2\_DATA1    | GPIO0\_67 |   1.8V    | MMC2 data bit 1-                                             |     MMC2\_DATA1      |
|  38   |   A23    |     GPIO0\_71     | GPIO0\_71 |   1.8V    | Main domain GPIO0\_71                                        |      GPIO0\_71       |
|  40   |   B23    |     GPIO0\_72     | GPIO0\_72 |   1.8V    | Main domain GPIO0\_72                                        |      GPIO0\_72       |
|  42   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  44   |    \-    |   VPP\_1V8\_EN    |    \-     |   3.3V    | SoM VPP\_1V8 enable input                                    |     VPP\_1V8\_EN     |
|  46   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  48   |    \-    |      EXTINTN      |    \-     |   3.3V    | External interrupt input                                     |       EXTINTN        |
|  50   |    \-    |    RESET\_REQZ    |    \-     |   3.3V    | Main domain external hot reset request input                 |     RESET\_REQZ      |
|  52   |    \-    |     PORZ\_OUT     |    \-     |   3.3V    | Main domain POR status output                                |      PORZ\_OUT       |
|  54   |    \-    |    RESETSTATZ     |    \-     |   3.3V    | Main domain hot reset state output                           |      RESETSTATZ      |
|  56   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  58   |    \-    |  PMIC\_LPM\_EN0   |    \-     |   3.3V    | Dual function PMIC control output, low power mode (low level active) or PMIC enabled (high level active) |    PMIC\_LPM\_EN0    |
|  60   |    \-    | VCC\_3V3\_SYS\_PG |    \-     |   3.3V    | SoM VCC3V3 Power Good output, used to control the power on of the carrier board |  VCC\_3V3\_SYS\_PG   |
|  62   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  64   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  66   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  68   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  70   |    \-    |        GND        |    \-     |    \-     | Ground                                                       |         GND          |
|  72   |    \-    |     DCDC\_5V      |    \-     |    5V     | SoM 5V power input                                           |       DCDC\_5V       |
|  74   |    \-    |     DCDC\_5V      |    \-     |    5V     | SoM 5V power input                                           |       DCDC\_5V       |
|  76   |    \-    |     DCDC\_5V      |    \-     |    5V     | SoM 5V power input                                           |       DCDC\_5V       |
|  78   |    \-    |     DCDC\_5V      |    \-     |    5V     | SoM 5V power input                                           |       DCDC\_5V       |
|  80   |    \-    |     DCDC\_5V      |    \-     |    5V     | SoM 5V power input                                           |       DCDC\_5V       |

### 2.7 FET62xx SoM Pin Description (Divided by Function)

**Note:**

**All the pin functions of the SoM are specified according to the "Default Functions" in the following table, please do not modify them, otherwise, they may conflict with the factory driver. Please contact us with any questions in time.**

****

**When you have requirements for multiple function expansions, please refer to the "FET62xx-C Pin Multiplexing Comparison Table" in the reference materials. However, if you need more detailed information, please consult relevant documentation, the chip data sheet, and the reference manual.**

****

**The pins marked as "Do not use on carrier board" in the "Default Function" column are those already utilized by the SoM and should not be used in the design of the carrier board.**

****

**"Signal Name" column defaults to SoM pin name, and the red mark is carrier board pin definition name.**

#### 2.7.1 Power Pin

| Function | Signal Name |   **I/O**   | **Default Function**          |        **Pin Number**         |
| :------: | :---------: | :---------: | ----------------------------- | :---------------------------: |
|  Power   |  DCDC\_5V   | Power Input | External power supply pin, 5V |            P4\_72             |
|          |             |  DCDC\_5V   | Power Input                   | External power supply pin, 5V |
|          |             |  DCDC\_5V   | Power Input                   | External power supply pin, 5V |
|          |             |  DCDC\_5V   | Power Input                   | External power supply pin, 5V |
|          |             |  DCDC\_5V   | Power Input                   | External power supply pin, 5V |
|          |     GND     |      —      | Power ground                  |             P1_1              |
|          |     GND     |      —      | Power ground                  |             P1_2              |
|          |     GND     |      —      | Power ground                  |             P1_7              |
|          |     GND     |      —      | Power ground                  |             P1_8              |
|          |     GND     |      —      | Power ground                  |             P1_13             |
|          |     GND     |      —      | Power ground                  |             P1_14             |
|          |     GND     |      —      | Power ground                  |             P1_19             |
|          |     GND     |      —      | Power ground                  |             P1_20             |
|          |     GND     |      —      | Power ground                  |             P1_25             |
|          |     GND     |      —      | Power ground                  |             P1_26             |
|          |     GND     |      —      | Power ground                  |             P1_31             |
|          |     GND     |      —      | Power ground                  |             P1_32             |
|          |     GND     |      —      | Power ground                  |             P1_34             |
|          |     GND     |      —      | Power ground                  |             P1_36             |
|          |     GND     |      —      | Power ground                  |             P1_37             |
|          |     GND     |      —      | Power ground                  |             P1_38             |
|          |     GND     |      —      | Power ground                  |             P1_40             |
|          |     GND     |      —      | Power ground                  |             P1_42             |
|          |     GND     |      —      | Power ground                  |             P1_43             |
|          |     GND     |      —      | Power ground                  |             P1_44             |
|          |     GND     |      —      | Power ground                  |             P1_46             |
|          |     GND     |      —      | Power ground                  |             P1_48             |
|          |     GND     |      —      | Power ground                  |             P1_49             |
|          |     GND     |      —      | Power ground                  |             P1_50             |
|          |     GND     |      —      | Power ground                  |             P1_52             |
|          |     GND     |      —      | Power ground                  |             P1_54             |
|          |     GND     |      —      | Power ground                  |             P1_55             |
|          |     GND     |      —      | Power ground                  |             P1_56             |
|          |     GND     |      —      | Power ground                  |             P1_58             |
|          |     GND     |      —      | Power ground                  |             P1_60             |
|          |     GND     |      —      | Power ground                  |             P1_61             |
|          |     GND     |      —      | Power ground                  |             P1_62             |
|          |     GND     |      —      | Power ground                  |             P1_63             |
|          |     GND     |      —      | Power ground                  |             P1_64             |
|          |     GND     |      —      | Power ground                  |             P1_66             |
|          |     GND     |      —      | Power ground                  |             P1_68             |
|          |     GND     |      —      | Power ground                  |             P1_69             |
|          |     GND     |      —      | Power ground                  |             P1_71             |
|          |     GND     |      —      | Power ground                  |             P1_72             |
|          |     GND     |      —      | Power ground                  |             P1_74             |
|          |     GND     |      —      | Power ground                  |             P1_77             |
|          |     GND     |      —      | Power ground                  |             P1_78             |
|          |     GND     |      —      | Power ground                  |             P1_79             |
|          |     GND     |      —      | Power ground                  |             P1_80             |
|          |     GND     |      —      | Power ground                  |             P2_1              |
|          |     GND     |      —      | Power ground                  |             P2_2              |
|          |     GND     |      —      | Power ground                  |             P2_7              |
|          |     GND     |      —      | Power ground                  |             P2_8              |
|          |     GND     |      —      | Power ground                  |             P2_17             |
|          |     GND     |      —      | Power ground                  |             P2_18             |
|          |     GND     |      —      | Power ground                  |             P2_27             |
|          |     GND     |      —      | Power ground                  |             P2_30             |
|          |     GND     |      —      | Power ground                  |             P2_31             |
|          |     GND     |      —      | Power ground                  |             P2_41             |
|          |     GND     |      —      | Power ground                  |             P2_42             |
|          |     GND     |      —      | Power ground                  |             P2_47             |
|          |     GND     |      —      | Power ground                  |             P2_48             |
|          |     GND     |      —      | Power ground                  |             P2_61             |
|          |     GND     |      —      | Power ground                  |             P2_62             |
|          |     GND     |      —      | Power ground                  |             P2_71             |
|          |     GND     |      —      | Power ground                  |             P2_75             |
|          |     GND     |      —      | Power ground                  |             P2_80             |
|          |     GND     |      —      | Power ground                  |             P2_79             |
|          |     GND     |      —      | Power ground                  |             P2_80             |
|          |     GND     |      —      | Power ground                  |             P3_1              |
|          |     GND     |      —      | Power ground                  |             P3_2              |
|          |     GND     |      —      | Power ground                  |             P3_6              |
|          |     GND     |      —      | Power ground                  |             P3_8              |
|          |     GND     |      —      | Power ground                  |             P3_9              |
|          |     GND     |      —      | Power ground                  |             P3_15             |
|          |     GND     |      —      | Power ground                  |             P3_21             |
|          |     GND     |      —      | Power ground                  |             P3_26             |
|          |     GND     |      —      | Power ground                  |             P3_31             |
|          |     GND     |      —      | Power ground                  |             P3_37             |
|          |     GND     |      —      | Power ground                  |             P3_44             |
|          |     GND     |      —      | Power ground                  |             P3_47             |
|          |     GND     |      —      | Power ground                  |             P3_53             |
|          |     GND     |      —      | Power ground                  |             P3_62             |
|          |     GND     |      —      | Power ground                  |             P3_63             |
|          |     GND     |      —      | Power ground                  |             P3_69             |
|          |     GND     |      —      | Power ground                  |             P3_79             |
|          |     GND     |      —      | Power ground                  |             P3_80             |
|          |     GND     |      —      | Power ground                  |             P4_1              |
|          |     GND     |      —      | Power ground                  |             P4_2              |
|          |     GND     |      —      | Power ground                  |             P4_11             |
|          |     GND     |      —      | Power ground                  |             P4_12             |
|          |     GND     |      —      | Power ground                  |             P4_21             |
|          |     GND     |      —      | Power ground                  |             P4_22             |
|          |     GND     |      —      | Power ground                  |             P4_31             |
|          |     GND     |      —      | Power ground                  |             P4_32             |
|          |     GND     |      —      | Power ground                  |             P4_35             |
|          |     GND     |      —      | Power ground                  |             P4_39             |
|          |     GND     |      —      | Power ground                  |             P4_42             |
|          |     GND     |      —      | Power ground                  |             P4_43             |
|          |     GND     |      —      | Power ground                  |             P4_46             |
|          |     GND     |      —      | Power ground                  |             P4_49             |
|          |     GND     |      —      | Power ground                  |             P4_56             |
|          |     GND     |      —      | Power ground                  |             P4_59             |
|          |     GND     |      —      | Power ground                  |             P4_62             |
|          |     GND     |      —      | Power ground                  |             P4_64             |
|          |     GND     |      —      | Power ground                  |             P4_66             |
|          |     GND     |      —      | Power ground                  |             P4_68             |
|          |     GND     |      —      | Power ground                  |             P4_70             |
|          |     GND     |      —      | Power ground                  |             P4_75             |
|          |     GND     |      —      | Power ground                  |             P4_79             |

#### 2.7.2 Boot Control Pin

****

**Note: Refer to "3.5.4 Boot Configuration" for boot startup configuration pin.**

| **Function** | **Signal Name** | **I/O** | **Default Function**       | **Pin Number** |
| :----------: | :-------------: | :-----: | -------------------------- | :------------: |
|   BOOTMODE   |   BOOTMODE00    |    I    | BOOT Mode Configuration 0  |     P3\_78     |
|              |   BOOTMODE01    |    I    | BOOT Mode Configuration 1  |     P3\_76     |
|              |   BOOTMODE02    |    I    | BOOT Mode Configuration 2  |     P3\_74     |
|              |   BOOTMODE03    |    I    | BOOT Mode Configuration 3  |     P3\_72     |
|              |   BOOTMODE04    |    I    | BOOT Mode Configuration 4  |     P3\_70     |
|              |   BOOTMODE05    |    I    | BOOT Mode Configuration 5  |     P3\_68     |
|              |   BOOTMODE06    |    I    | BOOT Mode Configuration 6  |     P3\_66     |
|              |   BOOTMODE07    |    I    | BOOT Mode Configuration 7  |     P3\_64     |
|              |   BOOTMODE08    |    I    | BOOT Mode Configuration 8  |     P3\_60     |
|              |   BOOTMODE09    |    I    | BOOT Mode Configuration 9  |     P3\_58     |
|              |   BOOTMODE10    |    I    | BOOT Mode Configuration 10 |     P3\_56     |
|              |   BOOTMODE11    |    I    | BOOT Mode Configuration 11 |     P3\_54     |
|              |   BOOTMODE12    |    I    | BOOT Mode Configuration 12 |     P3\_52     |
|              |   BOOTMODE13    |    I    | BOOT Mode Configuration 13 |     P3\_50     |
|              |   BOOTMODE14    |    I    | BOOT Mode Configuration 14 |     P3\_48     |
|              |   BOOTMODE15    |    I    | BOOT Mode Configuration 15 |     P3\_46     |

#### 2.7.3 LVDS Output Pin

**MAIN Domain：**

|       Function       | Signal Name     | **I/O** | Default Function      | **Pin Number** |
| :------------------: | --------------- | :-----: | --------------------- | :------------: |
|         LVDS         | CH1\_LVDS\_A0P  |    O    | CH1\_LVDS data 0+     |     P1\_3      |
|                      | CH1\_LVDS\_A0N  |    O    | CH1\_LVDS data bit 0- |     P1\_5      |
|                      | CH1\_LVDS\_A1P  |    O    | CH1\_LVDS data 1+     |     P1\_9      |
|                      | CH1\_LVDS\_A1N  |    O    | CH1\_LVDS data bit 1- |     P1\_11     |
|                      | CH1\_LVDS\_A2P  |    O    | CH1\_LVDS data 2+     |     P1\_15     |
|                      | CH1\_LVDS\_A2N  |    O    | CH1\_LVDS data bit 2- |     P1\_17     |
|                      | CH1\_LVDS\_CLKP |    O    | CH1\_LVDS clock+      |     P1\_21     |
|                      | CH1\_LVDS\_CLKN |    O    | CH1\_LVDS clock-      |     P1\_23     |
|                      | CH1\_LVDS\_A3P  |    O    | CH1\_LVDS data 3+     |     P1\_27     |
|                      | CH1\_LVDS\_A3N  |    O    | CH1\_LVDS data bit 3- |     P1\_29     |
|                      | CH2\_LVDS\_CLKN |    O    | CH2\_LVDS clock-      |     P1\_33     |
|                      | CH2\_LVDS\_CLKP |    O    | CH2\_LVDS clock+      |     P1\_35     |
|                      | CH2\_LVDS\_A1N  |    O    | CH2\_LVDS data bit 1- |     P1\_39     |
|                      | CH2\_LVDS\_A1P  |    O    | CH2\_LVDS data 1+     |     P1\_41     |
|                      | CH2\_LVDS\_A2N  |    O    | CH2\_LVDS data bit 2- |     P1\_45     |
|                      | CH2\_LVDS\_A2P  |    O    | CH2\_LVDS data 2+     |     P1\_47     |
|                      | CH2\_LVDS\_A0P  |    O    | CH2\_LVDS data 0+     |     P1\_51     |
|                      | CH2\_LVDS\_A0N  |    O    | CH2\_LVDS data bit 0- |     P1\_53     |
|                      | CH2\_LVDS\_A3P  |    O    | CH2\_LVDS data 3+     |     P1\_57     |
|                      | CH2\_LVDS\_A3N  |    O    | CH2\_LVDS data bit 3- |     P1\_59     |
| Backlight Adjustment | EHRPWM1\_A      |    O    | EHRPWM1\_A function   |     P2\_66     |

#### 2.7.4 MIPI CSI Input Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**   | **Pin Number** |
| :----------: | --------------- | :-----: | ---------------------- | :------------: |
|   MIPI CSI   | CSI0\_RXCLKP    |    I    | CSI0 clock+            |     P1\_4      |
|              | CSI0\_RXCLKN    |    I    | CSI0 clock-            |     P1\_6      |
|              | CSI0\_RXP3      |    I    | CSI0 data receiving 3+ |     P1\_10     |
|              | CSI0\_RXN3      |    I    | CSI0 data receiving 3- |     P1\_12     |
|              | CSI0\_RXP1      |    I    | CSI0 data receiving 1+ |     P1\_16     |
|              | CSI0\_RXN1      |    I    | CSI0 data receiving 1- |     P1\_18     |
|              | CSI0\_RXP2      |    I    | CSI0 data receiving 2+ |     P1\_22     |
|              | CSI0\_RXN2      |    I    | CSI0 data receiving 2- |     P1\_24     |
|              | CSI0\_RXP0      |    I    | CSI0 data receiving 0+ |     P1\_28     |
|              | CSI0\_RXN0      |    I    | CSI0 data receiving 0- |     P1\_30     |

#### 2.7.5 USB Function Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| :----------: | --------------- | :-----: | -------------------- | :------------: |
|     USB0     | USB0\_DP        |   I/O   | USB0 data+           |     P1\_73     |
|              | USB0\_DM        |   I/O   | USB0 data-           |     P1\_75     |
|              | USB0\_VBUS      |    I    | USB0 VBUS detection  |     P1\_70     |
|              | USB0\_DRVBUS    |    O    | USB0 VBUS enable     |     P2\_77     |
|     USB1     | USB1\_DP        |   I/O   | USB1 data+           |     P1\_65     |
|              | USB1\_DM        |   I/O   | USB1 data-           |     P1\_67     |
|              | USB1\_VBUS      |    I    | USB1 VBUS detection  |     P1\_76     |
|              | USB1\_DRVVBUS   |    O    | USB1 VBUS enable     |     P2\_79     |

#### 2.7.6 Ethernet Interface Control Pin

**MAIN Domain: RGMII Signal Description**

| **Default Function** | **Signal Name**       | **I/O** | **Default Function**   | **Pin Number** |
| :------------------: | --------------------- | :-----: | ---------------------- | :------------: |
|        RGMII1        | CPSW\_RGMII1\_RXC     |    I    | RGMII receive clock    |     P3\_17     |
|                      | CPSW\_RGMII1\_RX\_CTL |    I    | RGMII receives control |     P3\_19     |
|                      | CPSW\_RGMII1\_RD0     |    I    | RGMII receive data 0   |     P3\_23     |
|                      | CPSW\_RGMII1\_RD1     |    I    | RGMII receive data 1   |     P3\_25     |
|                      | CPSW\_RGMII1\_RD2     |    I    | RGMII receive data 2   |     P3\_27     |
|                      | CPSW\_RGMII1\_RD3     |    I    | RGMII receive data 3   |     P3\_29     |
|                      | CPSW\_RGMII1\_TXC     |    O    | RGMII send clock       |     P3\_33     |
|                      | CPSW\_RGMII1\_TX\_CTL |    O    | RGMII send control     |     P3\_35     |
|                      | CPSW\_RGMII1\_TD0     |    O    | RGMII send data 0      |     P3\_39     |
|                      | CPSW\_RGMII1\_TD1     |    O    | RGMII send data 1      |     P3\_41     |
|                      | CPSW\_RGMII1\_TD2     |    O    | RGMII send data 2      |     P3\_43     |
|                      | CPSW\_RGMII1\_TD3     |    O    | RGMII send data 3      |     P3\_45     |
|        RGMII2        | CPSW\_RGMII1\_RXC     |    I    | RGMII receive clock    |     P3\_49     |
|                      | CPSW\_RGMII1\_RX\_CTL |    I    | RGMII receives control |     P3\_51     |
|                      | CPSW\_RGMII1\_RD0     |    I    | RGMII receive data 0   |     P3\_55     |
|                      | CPSW\_RGMII1\_RD1     |    I    | RGMII receive data 1   |     P3\_57     |
|                      | CPSW\_RGMII1\_RD2     |    I    | RGMII receive data 2   |     P3\_59     |
|                      | CPSW\_RGMII1\_RD3     |    I    | RGMII receive data 3   |     P3\_61     |
|                      | CPSW\_RGMII1\_TXC     |    O    | RGMII send clock       |     P3\_65     |
|                      | CPSW\_RGMII1\_TX\_CTL |    O    | RGMII send control     |     P3\_67     |
|                      | CPSW\_RGMII1\_TD0     |    O    | RGMII send data 0      |     P3\_71     |
|                      | CPSW\_RGMII1\_TD1     |    O    | RGMII send data 1      |     P3\_73     |
|                      | CPSW\_RGMII1\_TD2     |    O    | RGMII send data 2      |     P3\_75     |
|                      | CPSW\_RGMII1\_TD3     |    O    | RGMII send data 3      |     P3\_77     |

**MAIN Domain: RMII Signal Description**

| **Default Function** | **Signal Name** | **I/O** | **Default Function**          | **Pin Number** |
| :------------------: | --------------- | :-----: | ----------------------------- | :------------: |
|        RMII1         | RMII1\_CRS\_DV  |    I    | RMII Carrier Sense/Data Valid |     P3\_33     |
|                      | RMII1\_REF\_CLK |    I    | RMII reference clock          |     P3\_17     |
|                      | RMII1\_RX\_ER   |    I    | RMII receive data error       |     P3\_19     |
|                      | RMII1\_TX\_EN   |    O    | RMII send enable              |     P3\_35     |
|                      | RMII1\_RXD0     |    I    | RMII receive data 0           |     P3\_23     |
|                      | RMII1\_RXD1     |    I    | RMII receive data 1           |     P3\_25     |
|                      | RMII1\_TXD0     |    O    | RMII send data 0              |     P3\_39     |
|                      | MII1\_TXD1      |    O    | RMII send data 1              |     P3\_41     |
|        RMII2         | RMII2\_CRS\_DV  |    I    | RMII Carrier Sense/Data Valid |     P3\_65     |
|                      | RMII2\_REF\_CLK |    I    | RMII reference clock          |     P3\_49     |
|                      | RMII2\_RX\_ER   |    I    | RMII receive data error       |     P3\_51     |
|                      | RMII2\_TX\_EN   |    O    | RMII send enable              |     P3\_67     |
|                      | RMII2\_RXD0     |    I    | RMII receive data 0           |     P3\_55     |
|                      | RMII2\_RXD1     |    I    | RMII receive data 1           |     P3\_57     |
|                      | RMII2\_TXD0     |    O    | RMII send data 0              |     P3\_71     |
|                      | RMII2\_TXD1     |    O    | RMII send data 1              |     P3\_73     |

#### 2.7.7 CPTS Interface Control Pin

**MAIN Domain：**

| **Default Function** | **Signal Name**             | **I/O** | **Default Function**                                         | **Pin Number** |
| :------------------: | --------------------------- | :-----: | ------------------------------------------------------------ | :------------: |
|         CPTS         | CP\_GEMAC\_CPTS0\_RFT\_CLK  |    I    | CPTS reference clock input                                   |     P2\_60     |
|                      | CP\_GEMAC\_CPTS0\_TS\_COMP  |    O    | CPTS timestamp counter comparison output from CPSW3G0 CPTS   | P2\_32, P4\_6  |
|                      | CP\_GEMAC\_CPTS0\_TS\_SYNC  |    O    | CPTS timestamp counter bits output from CPSW3G0 CPTS         | P2\_38, P4\_4  |
|                      | CP\_GEMAC\_CPTS0\_HW1TSPUSH |    I    | CPTS hardware timestamp push input to time synchronization router | P2\_36, P4\_18 |
|                      | CP\_GEMAC\_CPTS0\_HW2TSPUSH |    I    | CPTS hardware timestamp push input to time synchronization router | P4\_16, P2\_40 |
|                      | SYNC0\_OUT                  |    O    | CPTS timestamp generator bit 0 output of time synchronization router |     P2\_50     |
|                      | SYNC2\_OUT                  |    O    | CPTS timestamp generator bit 2 output of time synchronization router |     P2\_44     |
|                      | SYNC3\_OUT                  |    O    | CPTS timestamp generator bit 3 output of time synchronization router |     P2\_46     |

#### 2.7.8 DSS（Display Subsystem）Signal Pin

**MAIN Domain：**

| **Function** | **Signal Name**  | **I/O** | **Default Function**                       | **Pin Number** |
| :----------: | ---------------- | :-----: | ------------------------------------------ | :------------: |
|     VOUT     | VOUT0\_DE        |    O    | Enable video output data                   |     P3\_7      |
|              | VOUT0\_EXTPCLKIN |    I    | Video output external pixel clock input    |     P4\_47     |
|              | VOUT0\_HSYNC     |    O    | Horizontal synchronization of video output |     P3\_5      |
|              | VOUT0\_PCLK      |    O    | Video output pixel clock Output            |     P3\_4      |
|              | VOUT0\_VSYNC     |    O    | Vertical synchronization of video output   |     P3\_3      |
|              | VOUT0\_DATA0     |    O    | Video output data 0                        |     P3\_10     |
|              | VOUT0\_DATA1     |    O    | Video output data 1                        |     P3\_12     |
|              | VOUT0\_DATA2     |    O    | Video output data 2                        |     P3\_14     |
|              | VOUT0\_DATA3     |    O    | Video output data 3                        |     P3\_16     |
|              | VOUT0\_DATA4     |    O    | Video output data 4                        |     P3\_18     |
|              | VOUT0\_DATA5     |    O    | Video output data 5                        |     P3\_20     |
|              | VOUT0\_DATA6     |    O    | Video output data 6                        |     P3\_22     |
|              | VOUT0\_DATA7     |    O    | Video output data 7                        |     P3\_24     |
|              | VOUT0\_DATA8     |    O    | Video output data 8                        |     P3\_28     |
|              | VOUT0\_DATA9     |    O    | Video output data 9                        |     P3\_30     |
|              | VOUT0\_DATA10    |    O    | Video output data 10                       |     P3\_32     |
|              | VOUT0\_DATA11    |    O    | Video output data 11                       |     P3\_34     |
|              | VOUT0\_DATA12    |    O    | Video output data 12                       |     P3\_36     |
|              | VOUT0\_DATA13    |    O    | Video output data 13                       |     P3\_38     |
|              | VOUT0\_DATA14    |    O    | Video output data 14                       |     P3\_40     |
|              | VOUT0\_DATA15    |    O    | Video output data 15                       |     P3\_42     |
|              | VOUT0\_DATA16    |    O    | Video output data 16                       |     P3\_60     |
|              | VOUT0\_DATA17    |    O    | Video output data 17                       |     P3\_58     |
|              | VOUT0\_DATA18    |    O    | Video output data 18                       |     P3\_56     |
|              | VOUT0\_DATA19    |    O    | Video output data 19                       |     P3\_54     |
|              | VOUT0\_DATA20    |    O    | Video output data 20                       |     P3\_52     |
|              | VOUT0\_DATA21    |    O    | Video output data 21                       |     P3\_50     |
|              | VOUT0\_DATA22    |    O    | Video output data 22                       |     P3\_48     |
|              | VOUT0\_DATA23    |    O    | Video output data 23                       |    P3\_466     |

#### 2.7.9 ECAP Control Pin

**MAIN Domain：**

| **Function** |   **Signal Name**    | **I/O** | **Default Function**                                        |               **Pin Number**               |
| :----------: | :------------------: | :-----: | ----------------------------------------------------------- | :----------------------------------------: |
|    ECAP0     | ECAP0\_IN\_APWM\_OUT |   IO    | Enhanced capture (ECAP) input or auxiliary PWM (PWM) output |                   P2\_32                   |
|    ECAP1     | ECAP1\_IN\_APWM\_OUT |   IO    | Enhanced capture (ECAP) input or auxiliary PWM (PWM) output | P2\_50, P2\_66, P2\_70,<br/>P4\_18, P2\_63 |
|    ECAP2     | ECAP2\_IN\_APWM\_OUT |   IO    | Enhanced capture (ECAP) input or auxiliary PWM (PWM) output | P2\_52, P2\_68, P4\_16,<br/>P2\_78, P2\_65 |

#### 2.7.10  Emulation and Debug Interface Control Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| :----------: | --------------- | :-----: | -------------------- | :------------: |
| Trace Signal | TRC\_CLK        |    O    | Trace Clock          |     P3\_78     |
|              | TRC\_CTL        |    O    | Trace Control        |     P3\_76     |
|              | TRC\_DATA0      |    O    | Trace data 0         |     P3\_74     |
|              | TRC\_DATA1      |    O    | Trace data 1         |     P3\_72     |
|              | TRC\_DATA2      |    O    | Trace data 2         |     P3\_70     |
|              | TRC\_DATA3      |    O    | Trace data 3         |     P3\_68     |
|              | TRC\_DATA4      |    O    | Trace data 4         |     P3\_66     |
|              | TRC\_DATA5      |    O    | Trace data 5         |     P3\_64     |
|              | TRC\_DATA6      |    O    | Trace data 6         |     P4\_77     |
|              | TRC\_DATA7      |    O    | Trace data 7         |     P4\_67     |
|              | TRC\_DATA8      |    O    | Trace data 8         |     P4\_65     |
|              | TRC\_DATA9      |    O    | Trace data 9         |     P4\_63     |
|              | TRC\_DATA10     |    O    | Trace data 10        |     P4\_69     |
|              | TRC\_DATA11     |    O    | Trace data 11        |     P4\_73     |
|              | TRC\_DATA12     |    O    | Trace data 12        |     P4\_45     |
|              | TRC\_DATA13     |    O    | Trace data 13        |     P4\_61     |
|              | TRC\_DATA14     |    O    | Trace data 14        |     P4\_71     |
|              | TRC\_DATA15     |    O    | Trace data 15        |     P4\_51     |
|              | TRC\_DATA16     |    O    | Trace data 16        |     P4\_53     |
|              | TRC\_DATA17     |    O    | Trace data 17        |     P4\_55     |
|              | TRC\_DATA18     |    O    | Trace data 18        |     P4\_57     |
|              | TRC\_DATA19     |    O    | Trace data 19        |     P3\_46     |
|              | TRC\_DATA20     |    O    | Trace data 20        |     P3\_48     |
|              | TRC\_DATA21     |    O    | Trace data 21        |     P3\_50     |
|              | TRC\_DATA22     |    O    | Trace data 22        |     P3\_52     |
|              | TRC\_DATA23     |    O    | Trace data 23        |     P3\_54     |

**MCU Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**           | **Pin Number** |
| :----------: | --------------- | :-----: | ------------------------------ | :------------: |
|     JTAG     | EMU0            |   IO    | Simulation control 0           |     P2\_43     |
|              | EMU1            |   IO    | Simulation control 1           |     P2\_45     |
|              | TCK             |    I    | JTAG test clock input          |     P2\_53     |
|              | TDI             |    I    | JTAG test data input           |     P2\_57     |
|              | TDO             |   OZ    | JTAG test data output          |     P2\_59     |
|              | TMS             |    I    | JTAG test mode selection input |     P2\_55     |
|              | TRSTn           |    I    | JTAG reset                     |     P2\_51     |

#### 2.7.11 EPWM Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name**  | **I/O** | **Default Function**                                       |   **Pin Number**   |
| :----------: | ---------------- | :-----: | ---------------------------------------------------------- | :----------------: |
|     EPWM     | EHRPWM\_SOCA     |    O    | EHRPWM starts converting A                                 |       P2\_50       |
|              | EHRPWM\_SOCB     |    O    | EHRPWM starts converting B                                 |       P2\_52       |
|              | EHRPWM\_TZn\_IN0 |    I    | EHRPWM trigger zone input 0 (active low)                   |       P2\_40       |
|              | EHRPWM\_TZn\_IN3 |    I    | EHRPWM trigger zone input 3 (active low)                   |       P2\_44       |
|              | EHRPWM\_TZn\_IN4 |    I    | EHRPWM trigger zone input 4 (active low)                   |       P2\_46       |
|              | EHRPWM\_TZn\_IN5 |    I    | EHRPWM trigger zone input 5 (active low)                   |       P2\_32       |
|    EPWM0     | EHRPWM0\_A       |   IO    | EHRPWM output A                                            | P2\_34,<br/>P2\_74 |
|              | EHRPWM0\_B       |   IO    | EHRPWM output B                                            |  P2\_72, P2\_32,   |
|              | EHRPWM0\_SYNCI   |    I    | Synchronized input to the EHRPWM module from external pins |       P2\_54       |
|              | EHRPWM0\_SYNCO   |    O    | Synchronized input to the EHRPWM module from external pins |      P2\_56,       |
|    EPWM1     | EHRPWM1\_A       |   IO    | EHRPWM output A                                            | P2\_38,<br/>P2\_66 |
|              | EHRPWM1\_B       |   IO    | EHRPWM output B                                            |   P2\_36, P2\_64   |
|    EPWM2     | EHRPWM2\_A       |   IO    | EHRPWM output A                                            |   P2\_54, P2\_63   |
|              | EHRPWM2\_B       |   IO    | EHRPWM output B                                            |  P2\_56, P2\_65,   |

#### 2.7.12 EQEP Interface Pin

**MAIN Domain：**

| Function | **Signal Name** | **I/O** | **Default Function**    |       **Pin Number**       |
| :------: | --------------- | :-----: | ----------------------- | :------------------------: |
|  EQEP0   | EQEP0\_A        |    I    | EQEP quadrature input A |           P2\_70           |
|          | EQEP0\_B        |    I    | EQEP quadrature input B |           P2\_68           |
|          | EQEP0\_I        |   IO    | EQEP index              |           P2\_64           |
|          | EQEP0\_S        |   IO    | EQEP latch              |           P2\_66           |
|  EQEP1   | EQEP1\_A        |    I    | EQEP quadrature input A |           P2\_78           |
|          | EQEP1\_B        |    I    | EQEP quadrature input B |           P2\_76           |
|          | EQEP1\_I        |   IO    | EQEP index              |           P2\_72           |
|          | EQEP1\_S        |   IO    | EQEP latch              |           P2\_74           |
|  EQEP2   | EQEP2\_A        |    I    | EQEP quadrature input A |       P3\_59, P2\_50       |
|          | EQEP2\_B        |    I    | EQEP quadrature input B |     P3\_61,<br/>P2\_52     |
|          | EQEP2\_I        |   IO    | EQEP index              | P3\_75, P2\_44,<br/>P4\_47 |
|          | EQEP2\_S        |   IO    | EQEP latch              | P3\_77, P2\_46,<br/>P4\_71 |

#### 2.7.13 GPMC Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name**  | **I/O** | **Default Function**                                         | **Pin Number** |
| :----------: | ---------------- | :-----: | ------------------------------------------------------------ | :------------: |
|     GPMC     | GPMC0\_ADVn\_ALE |    O    | GPMC address active (active low) or address latch enabled    |     P4\_67     |
|              | GPMC0\_CLK       |    O    | GPMC clock                                                   |     P4\_77     |
|              | GPMC0\_DIR       |    O    | GPMC data bus signal direction control                       |     P4\_71     |
|              | GPMC0\_OEn\_REn  |    O    | GPMC output enable (active low) or read enable (active low)  |     P4\_65     |
|              | GPMC0\_WEn       |    O    | GPMC write enable (active low)                               |     P4\_63     |
|              | GPMC0\_WPn       |    O    | GPMC Flash write protection (active low)                     |     P4\_61     |
|              | GPMC0\_A0        |   OZ    | GPMC address 0 output Used only for effective addressing of 8-bit data-unmuxed memory |     P3\_10     |
|              | GPMC0\_A1        |   OZ    | GPMC address 1 is output in A/D non-multiplexed mode, and address 17 is output in A/D multiplexed mode |     P3\_12     |
|              | GPMC0\_A2        |   OZ    | GPMC address 2 is output in A/D non-multiplexed mode, and address 178 is output in A/D multiplexed mode |     P3\_14     |
|              | GPMC0\_A3        |   OZ    | GPMC address 3 is output in A/D non-multiplexed mode, and address 19 is output in A/D multiplexed mode |     P3\_16     |
|              | GPMC0\_A4        |   OZ    | GPMC address 4 is output in A/D non-multiplexed mode, and address 20 is output in A/D multiplexed mode |     P3\_18     |
|              | GPMC0\_A5        |   OZ    | GPMC address 5 is output in A/D non-multiplexed mode, and address 21 is output in A/D multiplexed mode |     P3\_20     |
|              | GPMC0\_A6        |   OZ    | GPMC address 6 is output in A/D non-multiplexed mode, and address 22 is output in A/D multiplexed mode |     P3\_22     |
|              | GPMC0\_A7        |   OZ    | GPMC address 7 is output in A/D non-multiplexed mode, and address 23 is output in A/D multiplexed mode |     P3\_24     |
|              | GPMC0\_A8        |   OZ    | GPMC address 8 is output in A/D non-multiplexed mode, and address 24 is output in A/D multiplexed mode |     P3\_28     |
|              | GPMC0\_A9        |   OZ    | GPMC address 9 is output in A/D non-multiplexed mode, and address 25 is output in A/D multiplexed mode |     P3\_30     |
|              | GPMC0\_A10       |   OZ    | GPMC address 10 is output in A/D non-multiplexed mode, and address 26 is output in A/D multiplexed mode |     P3\_32     |
|              | GPMC0\_A11       |   OZ    | GPMC address 11 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_34     |
|              | GPMC0\_A12       |   OZ    | GPMC address 12 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_36     |
|              | GPMC0\_A13       |   OZ    | GPMC address 13 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_38     |
|              | GPMC0\_A14       |   OZ    | GPMC address 14 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_40     |
|              | GPMC0\_A15       |   OZ    | GPMC address 15 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_42     |
|              | GPMC0\_A16       |   OZ    | GPMC address 16 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_5      |
|              | GPMC0\_A17       |   OZ    | GPMC address 17 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_7      |
|              | GPMC0\_A18       |   OZ    | GPMC address 18 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_3      |
|              | GPMC0\_A19       |   OZ    | GPMC address 19 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P3\_4      |
|              | GPMC0\_A20       |   OZ    | GPMC address 20 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P4\_57     |
|              | GPMC0\_A21       |   OZ    | GPMC address 21 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P4\_47     |
|              | GPMC0\_A22       |   OZ    | GPMC address 22 is output in A/D non-multiplexed mode and is not used in A/D multiplexed mode |     P4\_61     |
|              | GPMC0\_AD0       |   IO    | GPMC data 0 input/output in A/D non multiplexing mode and additional address 1 output in A/D multiplexing mode |     P3\_78     |
|              | GPMC0\_AD1       |   IO    | GPMC data 1 input/output in A/D non multiplexing mode and additional address 2 output in A/D multiplexing mode |     P3\_76     |
|              | GPMC0\_AD2       |   IO    | GPMC data 2 input/output in A/D non multiplexing mode and additional address 3 output in A/D multiplexing mode |     P3\_74     |
|              | GPMC0\_AD3       |   IO    | GPMC data 3 input/output in A/D non multiplexing mode and additional address 4 output in A/D multiplexing mode |     P3\_72     |
|              | GPMC0\_AD4       |   IO    | GPMC data 4 input/output in A/D non multiplexing mode and additional address 5 output in A/D multiplexing mode |     P3\_70     |
|              | GPMC0\_AD5       |   IO    | GPMC data 5 input/output in A/D non multiplexing mode and additional address 6 output in A/D multiplexing mode |     P3\_68     |
|              | GPMC0\_AD6       |   IO    | GPMC data 6 input/output in A/D non multiplexing mode and additional address 7 output in A/D multiplexing mode |     P3\_66     |
|              | GPMC0\_AD7       |   IO    | GPMC data 7 input/output in A/D non multiplexing mode and additional address 8 output in A/D multiplexing mode |     P3\_64     |
|              | GPMC0\_AD8       |   IO    | GPMC data 8 input/output in A/D non multiplexing mode and additional address 9 output in A/D multiplexing mode |     P3\_60     |
|              | GPMC0\_AD9       |   IO    | GPMC data 9 input/output in A/D non multiplexing mode and additional address 10 output in A/D multiplexing mode |     P3\_58     |
|              | GPMC0\_AD10      |   IO    | GPMC data 10 input/output in A/D non multiplexing mode and additional address 11 output in A/D multiplexing mode |     P3\_56     |
|              | GPMC0\_AD11      |   IO    | GPMC data 11 input/output in A/D non multiplexing mode and additional address 12 output in A/D multiplexing mode |     P3\_54     |
|              | GPMC0\_AD12      |   IO    | GPMC data 12 input/output in A/D non multiplexing mode and additional address 13 output in A/D multiplexing mode |     P3\_52     |
|              | GPMC0\_AD13      |   IO    | GPMC data 13 input/output in A/D non multiplexing mode and additional address 14 output in A/D multiplexing mode |     P3\_50     |
|              | GPMC0\_AD14      |   IO    | GPMC data 14 input/output in A/D non multiplexing mode and additional address 15 output in A/D multiplexing mode |     P3\_48     |
|              | GPMC0\_AD15      |   IO    | GPMC data 15 input/output in A/D non multiplexing mode and additional address 16 output in A/D multiplexing mode |     P3\_46     |
|              | GPMC0\_BE0n\_CLE |    O    | GPMC low byte enable (low level active) or command latch enable |     P4\_69     |
|              | GPMC0\_BE1n      |    O    | GPMC high byte enable (low level active)                     |     P4\_73     |
|              | GPMC0\_CSn0      |    O    | GPMC chip select 0                                           |     P4\_51     |
|              | GPMC0\_CSn1      |    O    | GPMC chip select 1                                           |     P4\_53     |
|              | GPMC0\_CSn2      |    O    | GPMC chip select 2                                           |     P4\_55     |
|              | GPMC0\_CSn3      |    O    | GPMC chip select 3                                           |     P4\_57     |
|              | GPMC0\_WAIT0     |    I    | GPMC external waiting for instructions                       |     P4\_45     |
|              | GPMC0\_WAIT1     |    I    | GPMC external waiting for instructions                       |    P4\_477     |

#### 2.7.14 I2C Interface Control Pin

**MAIN Domain：**

| Function | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| -------- | --------------- | ------- | -------------------- | :------------: |
| I2C0     | I2C0\_SCL       | IOD     | I2C clock            |     P2\_50     |
|          | I2C0\_SDA       | IOD     | I2C data             |     P2\_52     |
| I2C1     | I2C1\_SCL       | IOD     | I2C clock            |     P2\_54     |
|          | I2C1\_SDA       | IOD     | I2C data             |     P2\_56     |
| I2C2     | I2C2\_SCL       | IOD     | I2C clock            |     P4\_55     |
|          | I2C2\_SDA       | IOD     | I2C data             |     P4\_57     |
| I2C3     | I2C3\_SCL       | IOD     | I2C clock            |     P2\_67     |
|          | I2C3\_SDA       | IOD     | I2C data             |     P2\_69     |

**MCU Domain：**

| Function  | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| --------- | --------------- | ------- | -------------------- | :------------: |
| MCU\_I2C0 | MCU\_I2C0\_SCL  | IOD     | I2C clock            |     P2\_19     |
|           | MCU\_I2C0\_SDA  | IOD     | I2C data             |     P2\_21     |

**WKUP Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| ------------ | --------------- | ------- | -------------------- | :------------: |
| WKUP\_I2C0   | WKUP\_I2C0\_SCL | IOD     | I2C clock            |     P2\_23     |
|              | WKUP\_I2C0\_SDA | IOD     | I2C data             |     P2\_25     |

#### 2.7.15 MCAN Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| ------------ | --------------- | :-----: | -------------------- | :------------: |
| MCAN0        | MCAN0\_RX       |    I    | MCAN receive data    |     P2\_46     |
|              | MCAN0\_TX       |    O    | MCAN send data       |     P2\_44     |

**MCU Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| ------------ | --------------- | :-----: | -------------------- | :------------: |
| MCU\_MCAN0   | MCU\_MCAN0\_RX  |    I    | MCAN receive data    |     P2\_4      |
|              | MCU\_MCAN0\_TX  |    O    | MCAN send data       |     P2\_6      |
| MCU\_MCAN1   | MCU\_MCAN1\_RX  |    I    | MCAN receive data    |     P2\_3      |
|              | MCU\_MCAN1\_TX  |    O    | MCAN send data       |     P2\_5      |

#### 2.7.16 MCASP Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**             |       **Pin Number**       |
| ------------ | --------------- | :-----: | -------------------------------- | :------------------------: |
| MCASP0       | MCASP0\_ACLKR   |   IO    | MCASP receive bit clock          |           P2\_72           |
|              | MCASP0\_ACLKX   |   IO    | MCASP send bit clock             |           P2\_78           |
|              | MCASP0\_AFSR    |   IO    | MCASP receive the frame sync     |           P2\_74           |
|              | MCASP0\_AFSX    |   IO    | MCASP send the frame sync        |           P2\_76           |
|              | MCASP0\_AXR0    |   IO    | MCASP serial data (input/output) |           P2\_64           |
|              | MCASP0\_AXR1    |   IO    | MCASP serial data (input/output) |           P2\_66           |
|              | MCASP0\_AXR2    |   IO    | MCASP serial data (input/output) |           P2\_68           |
|              | MCASP0\_AXR3    |   IO    | MCASP serial data (input/output) |           P2\_70           |
| MCASP1       | MCASP1\_ACLKR   |   IO    | MCASP receive bit clock          |   P4\_30, P4\_9, P4\_57    |
|              | MCASP1\_ACLKX   |   IO    | MCASP send bit clock             |   P4\_38, P4\_27, P4\_69   |
|              | MCASP1\_AFSR    |   IO    | MCASP receive the frame sync     |   P4\_28, P4\_7, P4\_55    |
|              | MCASP1\_AFSX    |   IO    | MCASP send the frame sync        |   P4\_40, P4\_29, P4\_45   |
|              | MCASP1\_AXR0    |   IO    | MCASP serial data (input/output) |   P4\_34, P4\_25, P4\_63   |
|              | MCASP1\_AXR1    |   IO    | MCASP serial data (input/output) |   P4\_36, P4\_23, P4\_65   |
|              | MCASP1\_AXR2    |   IO    | MCASP serial data (input/output) |   P4\_24, P4\_7, P4\_67    |
|              | MCASP1\_AXR3    |   IO    | MCASP serial data (input/output) |   P4\_26, P4\_9, P4\_77    |
|              | MCASP1\_AXR4    |   IO    | MCASP serial data (input/output) |       P4\_28, P4\_55       |
|              | MCASP1\_AXR5    |   IO    | MCASP serial data (input/output) |       P4\_30, P4\_57       |
| MCASP2       | MCASP2\_ACLKR   |   IO    | MCASP receive bit clock          |       P3\_73, P3\_46       |
|              | MCASP2\_ACLKX   |   IO    | MCASP send bit clock             | P3\_77, P2\_69,<br/>P3\_50 |
|              | MCASP2\_AFSR    |   IO    | MCASP receive the frame sync     |       P3\_57, P3\_48       |
|              | MCASP2\_AFSX    |   IO    | MCASP send the frame sync        | P2\_67, P3\_75,<br/>P3\_52 |
|              | MCASP1\_AXR0    |   IO    | MCASP serial data (input/output) | P3\_59, P2\_44,<br/>P3\_60 |
|              | MCASP1\_AXR1    |   IO    | MCASP serial data (input/output) | P3\_49, P2\_46,<br/>P3\_58 |
|              | MCASP1\_AXR2    |   IO    | MCASP serial data (input/output) |       P3\_55, P3\_56       |
|              | MCASP1\_AXR3    |   IO    | MCASP serial data (input/output) |       P3\_51, P3\_54       |
|              | MCASP1\_AXR4    |   IO    | MCASP serial data (input/output) |       P3\_67, P3\_78       |
|              | MCASP1\_AXR5    |   IO    | MCASP serial data (input/output) |       P3\_65, P3\_76       |
|              | MCASP1\_AXR6    |   IO    | MCASP serial data (input/output) |       P3\_74, P3\_71       |
|              | MCASP1\_AXR7    |   IO    | MCASP serial data (input/output) |       P3\_57, P3\_72       |
|              | MCASP1\_AXR8    |   IO    | MCASP serial data (input/output) |       P3\_73, P3\_70       |
|              | MCASP1\_AXR9    |   IO    | MCASP serial data (input/output) |           P3\_68           |
|              | MCASP1\_AXR10   |   IO    | MCASP serial data (input/output) |           P3\_66           |
|              | MCASP1\_AXR11   |   IO    | MCASP serial data (input/output) |           P3\_64           |
|              | MCASP1\_AXR12   |   IO    | MCASP serial data (input/output) |           P4\_73           |
|              | MCASP1\_AXR13   |   IO    | MCASP serial data (input/output) |           P4\_71           |
|              | MCASP1\_AXR14   |   IO    | MCASP serial data (input/output) |           P4\_51           |
|              | MCASP1\_AXR15   |   IO    | MCASP serial data (input/output) |           P4\_53           |

#### 2.7.17 MCSPI Interface Pin

**MAIN Domain：**

| Function | **Signal Name** | **I/O** | **Default Function** |   **Pin Number**   |
| -------- | --------------- | :-----: | -------------------- | :----------------: |
| MCSPI0   | SPI0\_CLK       |   IO    | SPI clock            |       P2\_38       |
|          | SPI0\_CS0       |   IO    | SPI chip select 0    |       P2\_34       |
|          | SPI0\_CS1       |   IO    | SPI chip select 1    |       P2\_32       |
|          | SPI0\_CS2       |   IO    | SPI chip select 2    |       P2\_67       |
|          | SPI0\_CS3       |   IO    | SPI chip select 3    |       P2\_69       |
|          | SPI0\_D0        |   IO    | SPI Data 0           |       P2\_36       |
|          | SPI0\_D1        |   IO    | SPI Data 1           |       P2\_40       |
| MCSP1    | SPI1\_CLK       |   IO    | SPI clock            |       P4\_25       |
|          | SPI1\_CS0       |   IO    | SPI chip select 0    |       P4\_23       |
|          | SPI1\_CS1       |   IO    | SPI chip select 1    |       P4\_7        |
|          | SPI1\_D0        |   IO    | SPI Data 0           |       P4\_27       |
|          | SPI1\_D1        |   IO    | SPI Data 1           |       P4\_29       |
| MCSP2    | SPI2\_CLK       |   IO    | SPI clock            |   P3\_17, P2\_72   |
|          | SPI2\_CS0       |   IO    | SPI chip select 0    | P2\_50,<br/>P4\_74 |
|          | SPI2\_CS1       |   IO    | SPI chip select 1    |   P2\_54, P2\_78   |
|          | SPI2\_CS2       |   IO    | SPI chip select 2    |   P2\_52, P2\_66   |
|          | SPI2\_CS3       |   IO    | SPI chip select 3    |       P2\_76       |
|          | SPI2\_D0        |   IO    | SPI Data 0           |   P2\_70, P2\_63   |
|          | SPI2\_D1        |   IO    | SPI Data 1           |   P2\_68, P2\_65   |

**MCU Domain：**

| Function    | **Signal Name** | **I/O** | **Default Function** |  **Pin Number**  |
| ----------- | --------------- | :-----: | -------------------- | :--------------: |
| MCU\_MCSPI0 | MCU\_SPI0\_CLK  |   IO    | SPI clock            |      P2\_20      |
|             | MCU\_SPI0\_CS0  |   IO    | SPI chip select 0    |      P2\_26      |
|             | MCU\_SPI0\_CS1  |   IO    | SPI chip select 1    |      P2\_28      |
|             | MCU\_SPI0\_CS2  |   IO    | SPI chip select 2    | P2\_14<br/>P2\_3 |
|             | MCU\_SPI0\_CS3  |   IO    | SPI chip select 3    |      P2\_6       |
|             | MCU\_SPI0\_D0   |   IO    | SPI Data 0           |      P2\_22      |
|             | MCU\_SPI0\_D1   |   IO    | SPI Data 1           |      P2\_24      |
| MCU\_MCSPI1 | MCU\_SPI1\_CLK  |   IO    | SPI clock            |  P2\_12, P2\_3   |
|             | MCU\_SPI1\_CS0  |   IO    | SPI chip select 0    |      P2\_10      |
|             | MCU\_SPI1\_CS1  |   IO    | SPI chip select 1    |      P2\_5       |
|             | MCU\_SPI1\_CS2  |   IO    | SPI chip select 2    |  P2\_16, P2\_3   |
|             | MCU\_SPI1\_CS3  |   IO    | SPI chip select 3    |      P2\_4       |
|             | MCU\_SPI1\_D0   |   IO    | SPI Data 0           |      P2\_13      |
|             | MCU\_SPI1\_D1   |   IO    | SPI Data 1           |      P2\_15      |

#### 2.7.18 MDIO Interface Pin

**MAIN Domain：**

| Function | **Signal Name** | **I/O** | **Default Function** | **Pin Number** |
| -------- | --------------- | :-----: | -------------------- | :------------: |
| MDIO0    | MDIO0\_MDC      |   IO    | MDIO clock           |     P3\_11     |
|          | MDIO0\_MDIO     |   IO    | MDIO data            |     P3\_13     |

#### 2.7.19 MMC Interface Pin

**MAIN Domain：**

| **Function**       | **Signal Name**          | **I/O** | **Default Function** |     **Pin Number**     |
| ------------------ | ------------------------ | :-----: | -------------------- | :--------------------: |
| MMC1               | MMC1\_CLK                |   IO    | MMC/SD/SDIO clock    |         P4\_14         |
|                    | MMC1\_CMD                |   IO    | MMC/SD/SDIO command  |         P4\_8          |
|                    | MMC1\_SDCD               |    I    | SD card detection    |         P4\_10         |
|                    | MMC1\_SDWP\*<sup>1</sup> |    I    | SD card protection   |         P4\_20         |
|                    | MMC1\_DAT0               |   IO    | MMC/SD/SDIO data     |         P4\_16         |
|                    | MMC1\_DAT1               |   IO    | MMC/SD/SDIO data     |         P4\_18         |
|                    | MMC1\_DAT2               |   IO    | MMC/SD/SDIO data     |         P4\_4          |
|                    | MMC1\_DAT3               |   IO    | MMC/SD/SDIO data     |         P4\_6          |
| MMC2\*<sup>2</sup> | MMC2\_CLK                |   IO    | MMC/SD/SDIO clock    |         P4\_30         |
|                    | MMC2\_CMD                |   IO    | MMC/SD/SDIO command  |         P4\_28         |
|                    | MMC2\_SDCD               |    I    | SD card detection    | P2\_67, P4\_38, P2\_54 |
|                    | MMC2\_SDWP               |    I    | SD card protection   | P2\_56, P2\_69, P4\_40 |
|                    | MMC2\_DAT0               |   IO    | MMC/SD/SDIO data     |         P4\_34         |
|                    | MMC2\_DAT1               |   IO    | MMC/SD/SDIO data     |         P4\_36         |
|                    | MMC2\_DAT2               |   IO    | MMC/SD/SDIO data     |         P4\_24         |
|                    | MMC2\_DAT3               |   IO    | MMC/SD/SDIO data     |         P4\_26         |

**1\. On the SoM, MMC1\_SDWP is used for the multiplexed function of eMMC. Therefore, this pin on the carrier board is left floating; If the pin resources on the SoM are insufficient and this pin must be used, please contact Forlinx to obtain the usage method;**

**2\. The signal level of the entire MMC2 group of pins is 1.8V. Pay attention to level matching when using them.**

#### 2.7.20 OSPI Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name**    | **I/O** | **Default Function**                           | **Pin Number** |
| ------------ | ------------------ | :-----: | ---------------------------------------------- | :------------: |
| OSPI         | OSPI0\_CLK         |    O    | OSPI clock                                     |     P4\_41     |
|              | OSPI0\_DQS         |    I    | OSPI data strobe (DQS) or loopback clock input |     P4\_37     |
|              | OSPI0\_ECC\_FAIL   |    I    | OSPI ECC status                                |     P4\_9      |
|              | OSPI0\_LBCLKO      |   IO    | OSPI loopback clock output                     |     P4\_33     |
|              | OSPI0\_CSn0        |    O    | OSPI chip select 0                             |     P4\_3      |
|              | OSPI0\_CSn1        |    O    | OSPI chip select 1                             |     P4\_5      |
|              | OSPI0\_CSn2        |    O    | OSPI chip select 2                             |     P4\_7      |
|              | OSPI0\_CSn3        |    O    | OSPI chip select 3                             |     P4\_9      |
|              | OSPI0\_D0          |   IO    | OSPI Data 0                                    |     P4\_13     |
|              | OSPI0\_D1          |   IO    | OSPI Data 1                                    |     P4\_15     |
|              | OSPI0\_D2          |   IO    | OSPI Data 2                                    |     P4\_17     |
|              | OSPI0\_D3          |   IO    | OSPI Data 3                                    |     P4\_19     |
|              | OSPI0\_D4          |   IO    | OSPI Data 4                                    |     P4\_23     |
|              | OSPI0\_D5          |   IO    | OSPI Data 5                                    |     P4\_25     |
|              | OSPI0\_D6          |   IO    | OSPI Data 6                                    |     P4\_27     |
|              | OSPI0\_D7          |   IO    | OSPI Data 7                                    |     P4\_29     |
|              | OSPI0\_RESET\_OUT0 |    O    | OSPI reset                                     |     P4\_9      |
|              | OSPI0\_RESET\_OUT1 |    O    | OSPI reset                                     |     P4\_7      |

#### 2.7.21 System Signal Pin

**MAIN Domain：**

| Function      | **Signal Name**     | **I/O** | **Default Function**                                         |        **Pin Number**        |
| ------------- | ------------------- | :-----: | ------------------------------------------------------------ | :--------------------------: |
| System Signal | AUDIO\_EXT\_REFCLK0 |   IO    | External clock input to or from McASP                        |   P2\_67 <br/>P3\_67<br/>    |
|               | AUDIO\_EXT\_REFCLK1 |   IO    | External clock input to or from McASP                        |    P2\_69<br/>P2\_76<br/>    |
|               | CLKOUT0             |    O    | RMII clock output (50 MHz). This pin is used as the clock source for the external RMII PHY, and it must also be routed back to the corresponding RMII\[x]\_REF\_CLK pin to enable the device to operate properly. |            P2\_60            |
|               | EXTINTn             |    I    | External interrupt input                                     |            P4\_48            |
|               | EXT_REFCLK1         |    I    | External clock input to the Main domain                      |            P2_60             |
|               | OBSCLK0             |    O    | Main domain watch clock output for test and debug purposes only | P2_50*<sup>1</sup><br/>P3_56 |
|               | PORz_OUT            |    O    | Main domain POR status output                                |            P4_52             |
|               | RESETSTATz          |    O    | Main domain RESET status output                              |            P4_54             |
|               | RESET_REQz          |    I    | Main domain external hot reset request input                 |            P4_50             |
|               | SYSCLKOUT0          |    O    | Main domain system clock output for test and debug purposes only (divide-by-4) |            P2\_60            |

The default function of this pin is I2C0, and multiple devices are mounted on the SoM, so it is floated by default.

**MCU Domain：**

| **Function**  | **Signal Name**   | **I/O** | **Default Function**                                         |  **Pin Number**   |
| ------------- | ----------------- | :-----: | ------------------------------------------------------------ | :---------------: |
| System Signal | MCU\_ERRORn       |   IO    | Output error signal from MCU domain ESM                      |      P2\_33       |
|               | MCU\_EXT\_REFCLK0 |    I    | External clock input to MCU domain                           | P2\_28<br/>P2\_5  |
|               | MCU\_OBSCLK0      |    O    | MCU domain watch clock output for test and debug purposes only |      P2\_28       |
|               | MCU\_PORz         |    I    | MCU domain cold reset                                        | P2\_35<br/>P2\_49 |
|               | MCU\_RESETSTATz   |    O    | MCU domain hot reset status output                           |      P2\_39       |
|               | MCU\_RESETz       |    I    | MCU domain hot reset                                         |      P2\_37       |
|               | MCU\_SYSCLKOUT0   |    O    | The MCU domain system clock output (divide-by-4) is used for test and debug purposes only. |       P2\_        |

**WKUP Domain：**

| **Function**  | **Signal Name** | **I/O** | **Default Function**                                         | **Pin Number** |
| ------------- | --------------- | :-----: | ------------------------------------------------------------ | :------------: |
| System Signal | PMIC\_LPM\_EN0  |    O    | Dual-function PMIC control output, low power mode (active low) or PMIC enable (active high) |     P4\_58     |
|               | WKUP\_CLKOUT0   |    O    | WKUP domain CLKOUT0 output                                   |     P2\_29     |

#### 2.7.22 TIMER Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**                                         | **Pin Number** |
| :----------: | --------------- | :-----: | ------------------------------------------------------------ | :------------: |
|    TIMER     | TIMER\_IO0      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_54, P4\_6  |
|              | TIMER\_IO1      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_56, P4\_4  |
|              | TIMER\_IO2      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P4\_18, P2\_44 |
|              | TIMER\_IO3      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P4\_16, P2\_46 |
|              | TIMER\_IO4      |   IO    | Timer inputs and outputs (not tied to a single timer instance) |     P4\_14     |
|              | TIMER\_IO5      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_52, P4\_8  |
|              | TIMER\_IO6      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_67, P4\_10 |
|              | TIMER\_IO7      |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_69, P4\_20 |

**MCU Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**                                         | **Pin Number** |
| :----------: | --------------- | :-----: | ------------------------------------------------------------ | :------------: |
|  MCU\_TIMER  | MCU\_TIMER\_IO0 |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_13, P2\_4  |
|              | MCU\_TIMER\_IO1 |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_15, P2\_28 |
|              | MCU\_TIMER\_IO2 |   IO    | Timer inputs and outputs (not tied to a single timer instance) |     P2\_5      |
|              | MCU\_TIMER\_IO3 |   IO    | Timer inputs and outputs (not tied to a single timer instance) |     P2\_3      |

**WKUP Domain：**

| **Function** | **Signal Name**  | **I/O** | **Default Function**                                         | **Pin Number** |
| :----------: | ---------------- | :-----: | ------------------------------------------------------------ | :------------: |
| WKUP\_TIMER  | WKUP\_TIMER\_IO0 |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_10, P2\_6  |
|              | WKUP\_TIMER\_IO1 |   IO    | Timer inputs and outputs (not tied to a single timer instance) | P2\_12, P2\_26 |

#### 2.7.23 UART Interface Pin

**MAIN Domain：**

| **Function** | **Signal Name** | **I/O** | **Default Function**                     |                     **Pin Number**                     |
| :----------: | --------------- | :-----: | ---------------------------------------- | :----------------------------------------------------: |
|    UART0     | UART0\_CTSn     |    I    | UART clear sending（active low）         |                         P2\_67                         |
|              | UART0\_RTSn     |    O    | UART domain request to send (active low) |                         P2\_69                         |
|              | UART0\_RXD      |    I    | UART receive data                        |                         P2\_63                         |
|              | UART0\_TXD      |    O    | UART send data                           |                         P2\_65                         |
|    UART1     | UART1\_CTSn     |    I    | UART clear sending（active low）         |                         P2\_70                         |
|              | UART1\_DCDn     |    I    | UART data carrier detect (active low)    |                         P2\_50                         |
|              | UART1\_DSRn     |    I    | UART data ready (active low)             |                         P2\_52                         |
|              | UART1\_DTRn     |    O    | UART data terminal ready (active low)    |                         P2\_44                         |
|              | UART1\_RIn      |    I    | UART ringing indication                  |                         P2\_46                         |
|              | UART1\_RTSn     |    O    | UART request to send                     |                         P2\_68                         |
|              | UART1\_RXD      |    I    | UART receive data                        |                     P2\_54, P2\_74                     |
|              | UART1\_TXD      |    O    | UART send data                           |                     P2\_56, P2\_72                     |
|    UART2     | UART2\_CTSn     |    I    | UART clear sending（active low）         |               P2\_16,<br/>P3\_4, P3\_48                |
|              | UART2\_RTSn     |    O    | UART domain request to send (active low) |               P3\_3,<br/>P4\_18, P3\_46                |
|              | UART2\_RXD      |    I    | UART receive data                        |           P2\_67,<br/>P4\_6, P3\_60, P3\_10            |
|              | UART2\_TXD      |    O    | UART send data                           |           P2\_69,<br/>P4\_4, P3\_58, P3\_12            |
|    UART3     | UART3\_CTSn     |    I    | UART clear sending（active low）         |                     P4\_20, P3\_7                      |
|              | UART3\_RTSn     |    O    | UART domain request to send (active low) |                   P3\_5,<br/>P4\_10                    |
|              | UART3\_RXD      |    I    | UART receive data                        |              P4\_14, P3\_56,<br/>P3\_14,               |
|              | UART3\_TXD      |    O    | UART send data                           |               P4\_8,<br/>P3\_54, P3\_16                |
|    UART4     | UART4\_CTSn     |    I    | UART clear sending（active low）         |                         P3\_42                         |
|              | UART4\_RTSn     |    O    | UART domain request to send (active low) |                         P3\_40                         |
|              | UART4\_RXD      |    I    | UART receive data                        |           P4\_38, P4\_55, P3\_52,<br/>P3\_18           |
|              | UART4\_TXD      |    O    | UART send data                           |           P4\_40, P4\_57, P3\_50,<br/>P3\_20           |
|    UART5     | UART5\_CTSn     |    I    | UART clear sending（active low）         |                     P3\_38, P4\_37                     |
|              | UART5\_RTSn     |    O    | UART domain request to send (active low) |                     P3\_36, P3\_3                      |
|              | UART5\_RXD      |    I    | UART receive data                        |       P2\_44, P4\_26,<br/>P4\_7, P3\_48, P3\_22        |
|              | UART5\_TXD      |    O    | UART send data                           |       P3\_24, P2\_46,<br/>P4\_24, P4\_9, P3\_46        |
|    UART6     | UART6\_CTSn     |    I    | UART clear sending（active low）         |                     P3\_34, P4\_29                     |
|              | UART6\_RTSn     |    O    | UART domain request to send (active low) |                     P4\_27, P3\_32                     |
|              | UART6\_RXD      |    I    | UART receive data                        | P2\_70, P4\_10,<br/>P4\_30, P4\_23, P3\_28,<br/>P4\_47 |
|              | UART6\_TXD      |    O    | UART send data                           | P2\_68, P4\_20,<br/>P4\_28, P4\_25, P4\_61,<br/>P3\_30 |

**MCU Domain：**

| **Function** | **Signal Name**  | **I/O** | **Default Function**                     | **Pin Number** |
| :----------: | ---------------- | :-----: | ---------------------------------------- | :------------: |
|  MCU\_UART0  | MCU\_UART0\_CTSn |    I    | UART clear sending（active low）         |     P2\_13     |
|              | MCU\_UART0\_RTSn |    O    | UART domain request to send (active low) |     P2\_15     |
|              | MCU\_UART0\_RXD  |    I    | UART receive data                        |     P2\_11     |
|              | MCU\_UART0\_TXD  |    O    | UART send data                           |     P2\_9      |

**WKUP Domain：**

| **Function** | **Signal Name**   | **I/O** | **Default Function**                     | **Pin Number** |
| :----------: | ----------------- | :-----: | ---------------------------------------- | :------------: |
| WKUP\_UART0  | WKUP\_UART0\_CTSn |    I    | UART clear sending（active low）         |     P2\_10     |
|              | WKUP\_UART0\_RTSn |    O    | UART domain request to send (active low) |     P2\_12     |
|              | WKUP\_UART0\_RXD  |    I    | UART receive data                        |     P2\_14     |
|              | WKUP\_UART0\_TXD  |    O    | UART send data                           |     P2\_16     |

### 2.8 SoM Hardware Design Description

The FET62xx SoM integrates power and storage circuits into a compact module, requiring minimal external circuitry. A minimum system can operate with just power supply and boot configuration, as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208558843-2713adbb-b1a5-47aa-b361-f19dabb52f66.png)

Please refer to “Appendix IV. for the minimal system schematic diagram However, in most cases, it is recommended to connect some external devices in addition to the minimal system, such as a debugging serial port, otherwise, the user can not check whether the system is booted. After completing these steps, additional user-specific functions can be added based on the default interface definitions provided by Forlinx for the SoM.

Please refer to section 3.5 in “Chapter 3.OK62xx-C Carrier Board Description” for the peripheral circuits.

## 3\. OK62xx-C Development Platform Description

### 3.1 OK62xx-C Development Board Interface Diagram

The SoM and carrier board of the Forlinx OK62xx - C development platform are connected via board-to-board connectors. Since the carrier board is compatible with multiple SoMs from the AM62 series, the term "OK62xx - C" appears in the PCB silkscreen and when referring to the development board name in this document, representing the CPU series that this product is compatible with. The main interfaces are shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533338/1720590533663-8c6b9b60-52b8-4bee-b5e9-85596398a7e2.jpeg)

### 3.2 OK62xx-C Development Board Dimension Diagram

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590534013-0378bf81-c0e5-4e50-b26c-effc22304ae2.png)

PCB Size: 190mm × 130mm

Fixed hole size: spacing: 180mm × 120mm, hole diameter: 3.2mm.

Plate making process: thickness 1.6mm, 4-layer PCB.

Two mounting holes with a diameter of 3.2mm are reserved on the carrier board. You can select and install the heat sink according to the site environment. Please add a layer of insulated heat-conducting silicone pad on the contact surface between the heat sink and the core board. 38Mm×38mm×10mm. For more detailed dimensions, please refer to the following figure.

![](https://cdn.nlark.com/yuque/0/2025/png/58486295/1759202000942-897488d8-7829-4ed5-b6fa-f357009e33fd.png)

### 3.3 Carrier Board Naming Rules

A-B-C+DEF:G

| Field |              Field Description              | Value | Description                                                  |
| :---: | :-----------------------------------------: | :---: | ------------------------------------------------------------ |
|   A   |         Product Line Identification         |  OK   | Forlinx Embedded development board                           |
|  \-   |           Segment Identification            |  \-   | When the first digit of the CPU value is a letter, connect the product line identifier to the CPU with "-"; when the first digit of the CPU value is a number, omit "-". |
|   B   |                  CPU Name                   | 62xx  | xx stands for the same carrier board that can be adapted to SoMs with different configurations |
|  \-   |           Segment Identification            |  \-   | Parameter segment sign                                       |
|   C   |                 Connection                  |   C   | Board to Board Connector                                     |
|  \+   |           Segment Identification            |  \+   | The configuration parameter section follows this identifier. |
|   D   |                    Type                     |   M   | Carrier board(Note: carrier board identification M, not filled by default) |
|   E   |            Operating Temperature            |   I   | -40 to 85℃   industrial  level                               |
|   F   |                 PCB Version                 |  12   | V1.2                                                         |
|   :   | Internal Identification of the Manufacturer |  ：   | This is the internal identification of the manufacturer and has no impact on the use. |
|   G   |              Connector origin               |   1   | Imported connector                                           |

### 3.4 Carrier Board Resources

|         **Function**          | **Quantity** | **Parameter**                                                |
| :---------------------------: | :----------: | ------------------------------------------------------------ |
|             LVDS              |      2       | Dual asynchronous channels (8 data, 2clocks) support 1920x1200p60,<br />and all signals are led out to support the 10.1-inch LVDS screen<br />by default, with a resolution of 1280x800 @ 60fps |
| 16-bit RGB parallel interface |      1       | The 16 bit data interface led out from the FPC socket on the carrier board<br />is adapted to the 7-inch Forlinx resistance and capacitance touch<br />screen by default, with a resolution of 1024x600 @ 60fps. |
|            Camera             |      1       | The MIPI CSI signal is led out from the carrier board through the FPC seat<br />to support the Forlinx OV5645 camera, and the maximum<br />resolution of the camera is 2592X1944. |
|           Ethernet            |      2       | Supports 10/100/1000Mbps self-adaption, which is led out through RJ45 |
|            USB2.0             |      4       | 3 x USB HOST<br/>1 x USB OTG                                 |
|          DEBUG UART           |      3       | The UART0 in the main domain and the WKUP\_UART0 in the R5 domain<br />are converted into USB signals and led out through the Type - C interface.<br />The MCU\_UART0 in the MCU domain is led out through a pin header with a 2.54mm pitch. |
|             RS485             |      1       | Electrical quarantine, automatically control the direction of sending and receiving |
|              SPI              |      1       | MCU \_ SPI0 is clocked at up to 50 MHz through a 2.54 mm pitch pin header |
|              I2C              |      2       | MCU \_ I2C0 and WKUP \_ I2C0 are led out through a 2.54 mm pitch header |
|             GPMC              |      1       | GPMC \_ AD0 ~ AD15 16-bit data signals and corresponding control<br />signals are led out from the carrier board through the 2.54 mm pitch pin header. |
|            CAN-FD             |      1       | Electrical quarantine supporting CAN-FD, speed up to 5Mbps   |
|             Audio             |      1       | Supports 1 x headphone output and 1 x MIC input              |
|            TF-CARD            |      1       | Supports 1 x TF for UHS - I TF cards, up to 104MB/s.         |
|             4G/5G             |      1       | You can choose either the 4G or 5G function.<br />The 4G function supports 4G modules using the M.2 Key B socket,<br />and the Quectel EM05 is supported by default.<br />The 5G function supports 5G modules using the M.2 Key B socket,<br />and the Quectel RM500Q is supported by default. A MicroSIM card slot is used for the SIM card. |
|             WiFi              |      1       | Default on-board AW-CM358M; <br />IEEE 802.11 a/B/g/n/ac dual-band WIFI up to 433.3M bps; <br />Bluetooth 5 up to 3Mbps |
|           Bluetooth           |      1       |                                                              |
|              KEY              |      5       | A core 4 key inputs M core 1 key input                       |
|              LED              |      8       | A and 4 LED outputs M Core 4 LED outputs                     |
|              RTC              |      1       | On-board independent RTC chip, which can record time via a button<br />battery when the carrier board is powered off |
|            EEPROM             |      1       | 2K bit capacity is mounted to MCU \_ I2C0 or WKUP \_ I2C0 optionally |
|          QSPI Flash           |      1       | The capacity is 128M bit, which can be mounted to QSPI or MCU \_ SPI0 |
|             JTAG              |      1       | Led out via 2 X 10Pin double row 1.27 mm pitch socket        |

**Note:**

- **"TBD" means the function has not been developed in this phase;**
- **The parameters in the table are hardware design or theoretical CPU values.**

### 3.5 OK62xx -C Carrier Board Description

**Note: The component UID with "\_DNP" mark in the diagram below represents it is not soldered by default**

#### 3.5.1 Carrier Board Power

It uses a 12V power adapter for the power supply, and the power connector is a DC005 socket. S1(dip switch) is the power switch, which moves according to the screen printing indication on the board. The rear of S1 has TVS  for electrostatic protection, F1 for over-current protection, and D1 and F1 cooperate for anti-reverse connection protection.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208775192-e25395d5-c995-411e-b356-579e148cefb6.png)

VCC\_12V is decreased to VCC\_5V via U1. VCC\_5V directly powers the SoM to ensure that it can be powered on first.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208798524-2fedda1b-a647-4137-8c06-0e8ee0703d1e.png)

VCC\_5V is decreased to VCC\_3V3 via U2 U2 is controlled by the POWER\_EN signal of the SoM (this signal is an open-drain output, pulled up to the 3.3V of the SoM through a 100K resistor, and this signal is released after the key power supply of the SoM is powered on). VCC\_3V3 supplies power to all 3.3V power-consuming devices on the carrier board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208811707-d8abab38-cec5-423f-b7ae-307c202f6da1.png)

VCC\_5V outputs VDD\_5V in a controlled manner through U4. U4 is controlled by the PG signal of U2. After VCC\_3V3 is powered on, U4 conducts. VDD\_5V powers some 5V - powered devices on the carrier board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208832116-a73053f0-87ce-4739-b047-5ba6b5e6ea3c.png)

VCC\_3V3 is stepped down to VCC\_1V8 through U5 to supply power to the 1.8V power-consuming devices on the carrier board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208851447-7193cec3-4711-495e-b461-135100fa0e3c.png)

VCC\_5V is stepped down to VCC\_3V3\_TOUCH through U6 to supply power to the resistive touch chip. It should be noted that VCC\_3V3\_TOUCH and the SoM need to be powered on simultaneously to meet the power-on sequence requirements of TS2007.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208864836-10e25aff-2cf5-4eba-ac41-cd0e81b5145a.png)

**Note：**

- **When designing by yourself, please ensure the power-on sequence of the power supply;**
- **Refer to the corresponding chip manual for the component selection and external layout of the step-up and step-down chip to ensure a good power circuit.**

#### 3.5.2 Reset Signal

RESET\_REQZ is the reset signal input for the SoM. For ease of debugging, it is connected to a button.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208886276-79f38bbd-a26a-4b39-828f-a4f626c46cd0.png)

**Note: RESET\_REQZ can only reset the A core. If you need to reset both the A core and the M core simultaneously, it is recommended to use the MCU\_RESETz (RU37) pin.**

#### 3.5.3 Boot Configuration

GPMC0 \_ AD0 ~ GPMC0 \_ AD15 of the SoM correspond to BOOTMODE00 ~ BOOTMODE15 respectively.

BOOTMODE Pin Mapping：

| 15       | 14       |           13           |        12        |  11  |  10  |            9             |  8   |  7   |         6         |     5      |  4   |  3   |  2   |  1   |  0   |
| -------- | -------- | :--------------------: | :--------------: | :--: | :--: | :----------------------: | :--: | :--: | :---------------: | :--------: | :--: | :--: | :--: | :--: | :--: |
| Reserved | Reserved | BackupBoot Mode Config | Backup Boot Mode |      |      | Primary Boot Mode Config |      |      | Primary Boot Mode | PLL Config |      |      |      |      |      |

    BOOTMODE[02:00]: Configuration related to the CPU PLL. On the core board, it is configured as BOOTMODE[02:00] = 011. There is no need to repeat the configuration on the baseboard.
    
    BOOTMODE[03:06]: Requested boot (primary) mode after POR, that is, the peripheral/memory from which to boot. The default configuration on the core board is BOOTMODE[03:06] = 0001.
    
    BOOTMODE[07:09]: These pins provide optional configurations for the primary boot and are used in combination with the selected boot mode. The default configuration on the core board is BOOTMODE[07:09] = 000.
    
    BOOTMODE[10:12]: Select the backup boot mode, that is, if the primary boot device fails, boot from the backup peripheral/memory. The default configuration on the core board is BOOTMODE[10:12] = 011.
    
    BOOTMODE[13]: Optional configuration for the backup boot mode, used in combination with the selected boot mode. The default configuration on the core board is BOOTMODE[13]: 0.
    
    BOOTMODE[14:15]: Reserved pins. The default configuration on the core board is BOOTMODE[14:15] = 00.
    
    The following table shows the Primary Boot Mode Selection:

| Primary Boot Mode Config |            |            |      |      |      |      |                Primary Boot Mode                |
| :----------------------: | ---------- | ---------- | ---- | ---- | ---- | ---- | :---------------------------------------------: |
|            B9            | B8         | B7         | B6   | B5   | B4   | B3   |                                                 |
|         Reserved         | Read Mode2 | Read Mode1 | 0    | 0    | 0    | 0    |                   Serial NAND                   |
|         Reserved         | Iclk       | Csel       | 0    | 0    | 0    | 1    |                      OSPI                       |
|         Reserved         | Iclk       | Csel       | 0    | 0    | 1    | 0    |                      QSPI                       |
|         Reserved         | Mode       | Csel       | 0    | 0    | 1    | 1    |                       SPI                       |
|          Clkout          | 0          | Link Info  | 0    | 1    | 0    | 0    |                 Ethernet RGMII                  |
|          Clkout          | Clk src    | 0          | 0    | 1    | 0    | 1    |                  Ethernet RMII                  |
|        Bus reseet        | Reserved   | Ader       | 0    | 1    | 1    | 0    |                       I2C                       |
|         Reserved         | Reserved   | Reserved   | 0    | 1    | 1    | 1    |                      UART                       |
|            1             | Reserved   | Fs/raw     | 1    | 0    | 0    | 0    | MMCSD Boot(SD Card Boot or eMMC Boot using UDA) |
|         Reserved         | Reserved   | Reserved   | 1    | 0    | 0    | 1    |                    eMMC Boot                    |
|        Core Volt         | Mode       | Lane Swap  | 1    | 0    | 1    | 0    |                       USB                       |
|         Reserved         | Reserved   | Reserved   | 1    | 0    | 1    | 1    |                    GPMC NAND                    |
|         Reserved         | Reserved   | Reserved   | 1    | 1    | 0    | 0    |                    GPMC NOR                     |
|         Reserved         | Reserved   | Reserved   | 1    | 1    | 0    | 1    |                    Reserved                     |
|           SFPD           | Read Cmd   | Mode       | 1    | 1    | 1    | 0    |                      Xspi                       |
|         Reserved         | ARM/Thumb  | No/Dev     | 1    | 1    | 1    | 1    |                No-boot/Dev boot                 |

The OK62xx-C carrier board is compatible with multiple starting modes through the DIP switch S2, as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721208932997-03f5f46b-f1f1-4edd-87d0-356ac9ce6acc.png)

The following table shows the correspondence between the startup modes of the SoM and the DIP switches. "ON" and "OFF" indicate the toggling directions of the DIP switches. "S2 order" refers to the serial numbers of the DIP switches. On the PCB, there are markings from 1 to 8 above S2, where the 8th bit has nothing to do with startup. In the schematic diagram, "S2 order" corresponds to pins 1 to 8 of S2 respectively.

| Boot Media | S2 Order |      |      |      |      |      |      |
| :--------: | -------- | ---- | ---- | ---- | ---- | ---- | ---- |
|            | 1        | 2    | 3    | 4    | 5    | 6    | 7    |
|    eMMC    | OFF      | OFF  | OFF  | OFF  | OFF  | OFF  | OFF  |
|  TF Card   | OFF      | OFF  | OFF  | OFF  | OFF  | OFF  | ON   |
| QSPI Flash | ON       | ON   | OFF  | ON   | OFF  | ON   | OFF  |
|  USB Disk  | OFF      | ON   | OFF  | OFF  | OFF  | ON   | OFF  |
|  USB DFU   | OFF      | ON   | OFF  | OFF  | OFF  | OFF  | OFF  |

**Note:**

- **When designing the carrier board, please pay attention to the default configuration of the BOOTMODE configuration pins on the SoM and correctly configure the boot mode. Otherwise, the system may fail to start; The pins GPMC0\_AD0 - GPMC0\_AD15 are all boot - option pins. When there are sufficient pins, it is not recommended to use them for other functions. If they must be used, it is recommended to add a buffer circuit to prevent affecting the reading of boot options;**

- **It is not recommended to use USB Disk for flashing. When the processor is in the USB Disk boot mode, its compatibility with USB flash drives is poor, which may lead to flashing failure. The processor errata are described as follows:**![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720590534888-7b06bc41-cf7d-46e4-9dfb-ed90b935ed4f.png)

#### 3.5.4 Debugging Serial Port

The carrier board uses U9 to convert the SOC UART0 and WKUP UART0 of the CPU into USB signals and connect them to the P6 Type - C interface for  the convenience in debugging. To prevent the UART signals of U9 from reverse - injecting current into the SoM when the SoM is not started, which may affect the SoM’s startup or even damage it, the carrier board uses U7 to buffer the UART signals.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209269195-492d635d-a746-46f5-b99a-c8c24676a00b.png)

**Note:**

- **For the convenience of later debugging, please lead out the debugging serial port when designing the carrier board;**

- **U7 is only a reference circuit. Users can also use other circuits such as MOS to prevent reverse current flow;**

- **U9 is powered by the VBUS of the Type - C interface, which can ensure that the PC loads the driver in time and guarantee the integrity of the printed information.** 

#### 3.5.5 JTAG

The JTAG of the carrier board is a TI standard circuit, which can be directly plugged into a TI emulator to simulate the SoM.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209389997-d9bb0b08-1c0e-4b2c-acec-908e67c91b6e.png)

#### 3.5.6 User LED and Button

The development board divides the user LEDs and user buttons into two domains, namely the Main domain and the MCU domain, corresponding to the relevant GPIOs of the Main and MCU domains of the SoM.

The Main domain integrates user LEDs and user buttons together, facilitating users to test the input and output functions of GPIO. It should be noted that when testing the GPIO output function, do not press the key, otherwise the GPIO will be forced to a low level. The following figure shows the principle of the Main domain:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209409798-6d9a27e9-10d0-4fe6-8e32-77d19520a29e.png)

        MCU域设计了1个用户按键输入和4个用户LED。下图为MCU域原理：

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209424571-3fca08a6-b9fa-4d10-a289-95a3368333e5.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209424812-cd200075-d85d-45f0-bd47-dc9278002a04.png)

#### 3.5.7 Display Interface

The SoM supports dual LVDS and single RGB parallel interface outputs.

Among them, the dual - channel LVDS is led out through the P16 2x19P 2.0mm pitch double - row pin header, which is default - adapted to the Forlinx 10.1 - inch LVDS screen.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209733681-379949b1-1154-4095-a90b-65cd7ece86f6.png)

The single-channel RGB parallel interface (RGB 565 16bit bus by default) is led out through the P14 54P 0.5mm pitch FPC seat, which is suitable for the 7-inch LCD screen of Forlinx by default.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209753331-8a4c39ad-03f3-416e-a61d-4e2abcc0a9f3.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209754168-f51b05a5-c0aa-4fc1-ab47-739b59df12ba.png)

The reset and interrupt signals of the touchpad for the 7-inch LCD screen and the 10.1-inch LVDS screen are at 3.3 V level, while the four GPIOs of the CPU are at 1.8 V level, so level conversion is required, and the signal flow is bidirectional.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721209772489-b70bb9bf-45bf-45ed-9827-c46b0336178c.png)

**Note:**

- **Correctly allocate RGB signals;**

- **It is recommended not to mount the touch chips of the LCD and LVDS on the same group of IIC;**

- **Impedance requirements: Single-ended 50ohm;**

- **Differential: 100 ohm.**

#### 3.5.8 Video Input Interface

The SoM supports 1 x MIPI DPHY 4Lanes input interface. 4 Lanes are led out for standby through the P15 2x10P 2.0mm pitch double-row pin header from the development board, and 2Lanes are led out through the P13 26P 0.5mm pitch FPC socket, which is adapted to the Forlinx OV5645 camera module.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721271706260-bef6725a-7249-4a2c-8ee4-c15c9027d9b1.png)

**Note:**

- **Pay attention to the level matching of IIC;**

- **The power supply of the camera needs to be filtered with a magnetic bead;**

- **Impedance requirements: Differential: 100 ohm.**

#### 3.5.9 TF Card

The carrier board P7 is a TF Card interface, which can support system boot and burn.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721271971560-3084c19f-40a9-484d-b115-2929bc5691cc.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721271971801-203cb053-89cc-4c19-bf83-f5b61b785ef2.png)

**Note:**

- **The power supply for the TF card must be controlled; refer to the carrier board circuit for implementation;**

- **Impedance requirements: Single-ended 50ohm.**

#### 3.5.10 Ethernet Interface

The carrier board supports dual 1000/100/10M Ethernet interfaces, which are led out via RJ45.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272063541-36f553bb-f385-43b1-a566-ccefc7b658eb.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272063694-f4c64f0a-2382-43b4-ba7e-d82ddfbab160.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272064080-637b3edb-be84-4a69-8af4-33e7a4574a6a.png)

**Note：**

- **Note that the RGMII IO level is 3.3V, and the interface level at the PHY chip end needs to be set consistently;**

- **The PCB Layout needs to ensure the integrity of the RGMII signal reference plane and the integrity of the power supply reference plane around the PHY chip;**

- **2 x PHY are mounted on the same group of MDC MDIO interfaces, so attention should be paid to avoid conflicts in PHY addresses;**

- **Equivalent length requirement: the receiving and sending of RGMII can be grouped into equal lengths, with an equal length requirement ≤ 12.5 mil;**

- **Impedance requirement: 50 ohm. **

#### 3.5.11 USB Interface

The SoM supports 2 x USB2.0. Among them, USB1 expands 3 x USB2.0 Host through a HUB chip and is led out through 3 x USB sockets P19, P20, and P21.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272161309-289384d2-c71e-468c-b945-ef3ff9f0d007.png)

USB0 is configured in OTG mode and is led out through Type - C. The master - slave mode is selected through the DIP switch S3. When S3 is switched to OFF, the SoM is in Device mode; when switched to ON, the SoM is in Host mode.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272177843-6e4385cb-f5e5-4d4e-aa90-b75602a70790.png)

**Note：**

- **ESD protection devices need to be added to the data line;**

- **Impedance requirements: Differential 90 ohm.**

#### 3.5.12 4G\&5G

The P24 M.2 Key - B socket on the carrier board can be plugged with 4G and 5G modules, but they cannot be used simultaneously. P31 is the SIM card socket.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272288774-6b8d7f1c-7494-4b6d-8ac2-afc7e0b9a2e9.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272291561-a90e66da-5c1a-4342-b3e0-18241deb494d.png)

#### 3.5.13 WIFI\&BT

The carrier board is designed with a CAM358 WIFI \& BT module, which can realize WIFI \& BT functions.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721272404606-a604d8b8-37d2-4119-9bed-7c7962d0b6dc.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721273075349-dd882e52-8bd3-4e9d-92f7-c532aa65769d.png)

**Note: Impedance requirement: 50 ohm.**

#### 3.5.14 Audio Interface

The ES8388 Audio Codec is integrated on the carrier board and supports headphone output and MIC input.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274310892-21f7883a-a53d-4993-9f12-3a49ace048ee.png)

**Note: During PCB Layout, the return areas of analog and digital signals need to be separated to prevent crosstalk.**

#### 3.5.15 RTC

External RTC is integrated on the carrier board, and the power supply battery is CR2032. 

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274344297-3756249e-ca44-4806-9922-80a671f9a79a.png)

#### 3.5.16 QSPI Flash

The QSPI Flash is integrated on the carrier board, and the Main domain and the MCU domain select who mounts the Flash by means of jumpers.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274365686-7900fcc2-b065-4fec-9fb4-84dd79a3031a.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274364820-d1d5344a-a0ba-4a3f-b4c8-88a4f2bc474f.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274364508-52ac9074-e703-493c-8a9a-12553afdeac6.png)

#### 3.5.17 GPMC Interface

A part of the GPMC signals are led out through the P34 2x14 2.54mm pitch double - row pin header from the development board, supporting the 16 - bit address - data multiplexing mode.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274792339-f6449f82-c76c-441b-9deb-7638504bca08.png)

#### 3.5.18 CAN\&RS485

2 x CAN FD and 1 x RS485 are integrated on the carrier board. The 2 x CAN FD belongs to the Main domain and the MCU domain respectively.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274802175-10b55846-ed81-4dea-8c5c-6fa1f2279366.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274815633-a3aa792d-9a6d-4dd4-ad6a-6823abaa780d.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274815554-8a671304-3b36-4b76-9f12-ea090430a525.png)

**Note:**

- **The CAN and 485 signals of this development board need to undergo relevant EMC tests, and a large number of protection measures need to be added. If you have no relevant requirements or the test requirements are of a low level, please make deletions according to the scheme by yourselves;**

- **Please refer to the development board for the ground isolation part.**

#### 3.5.19 EEPROM

An EEPROM is integrated on the carrier board. The MCU and the WKUP domain can select which one mounts the EEPROM through a jumper.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274839109-c7442b4b-7cea-46d2-a6ac-ec4c9b6163b1.png)

#### 3.5.20 MCU User-defined Pins

A part of the MCU Pins are led out through the P36 2x14 2.54mm pitch double - row pin header from the development board.

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721274846243-3db8bbc4-4c67-4e67-a002-ab6b85729c37.png)

## 4\. Hardware Design Guide

**Power:**

1. When designing the carrier board, it is necessary to strictly follow the rule that the SoM is powered on first, and the VCC\_3V3\_SYS\_PG output from the SoM controls the power - on of the carrier board;
2. When the functional pins of the SoM directly communicate with peripherals, attention should be paid to the reverse current flow issue. That is, when the SoM is not powered on and the peripheral is powered on first, there is a certain risk of reverse current flowing into the SoM, which may affect the startup of the SoM. In this case, the power - on sequence of the peripherals should be controlled or a reverse - current prevention circuit should be added;
3. Some pins of the SoM have a level of 1.8V, and attention should be paid to level matching;
4. The power supply of the TF card needs to be controlled;
5. The display interface and USB interface devices have relatively high power consumption. Attention should be paid to PCB wiring and the corresponding over - current protection circuit;
6. Network PHY chips usually have multiple power - supply pins, such as AVDD, DVDD, DCDD\_RGMII, etc. The required voltage of each power - supply path needs to be checked. Moreover, magnetic beads are usually needed for filtering, and attention should be paid to ensuring that the value and quantity of bypass capacitors meet the requirements;
7. The power supply of 4G and 5G modules needs to meet the requirements. It is recommended that the power - supply voltage of the 5G module be 4.2V;
8. Usually, the pin level of SDIO and UART of WIFI \& BT module is 1.8 V, and it is necessary to check whether the pin level is matched;
9. If quarantine is required for CAN-RS485, quarantine is required for both signal and power.

**Reset Signal:**

The following figure shows the reset block diagram of the CPU:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720591205726-08d94c9c-816c-45eb-b7a5-1b1a45778114.png)

## 5\. OK62xx - C Development Board Linux System Whole - Machine Power Consumption Table

**AM6254:**

|   **Hardware**    | **Test Item**                              | **Power voltage** (V) |       **Current**        |                  |
| :---------------: | ------------------------------------------ | :-------------------: | :----------------------: | ---------------- |
|                   |                                            |                       | **Transient Peak Value** | **Stable Value** |
| Development Board | Power-on start without load                |          12           |           246            | 180              |
|                   | On-load LVDS + LCD                         |          12           |           602            | 562              |
|                   | On-load LVDS+LCD+cpu the usage rate is 90% |          12           |           753            | 743              |
|    Single SoM     | Power-on start without load                |           5           |           440            | 295              |
|                   | The CPU usage rate is 100%.                |           5           |            \-            | 415              |

**AM6232:**

|   **Hardware**    | **Test Item**                              | **Power voltage** (V) |       **Current**        |                  |
| :---------------: | ------------------------------------------ | :-------------------: | :----------------------: | ---------------- |
|                   |                                            |                       | **Transient Peak Value** | **Stable Value** |
| Development Board | Power-on start without load                |          12           |           237            | 182              |
|                   | On-load LVDS + LCD                         |          12           |           585            | 543              |
|                   | On-load LVDS+LCD+cpu the usage rate is 90% |          12           |           734            | 724              |
|    Single SoM     | Power-on start without load                |           5           |           420            | 300              |
|                   | The CPU usage rate is 100%.                |           5           |            \-            | 370              |

**AM6231:**

|   **Hardware**    | **Test Item**                              | **Power voltage** (V) |       **Current**        |                  |
| :---------------: | ------------------------------------------ | :-------------------: | :----------------------: | ---------------- |
|                   |                                            |                       | **Transient Peak Value** | **Stable Value** |
| Development Board | Power-on start without load                |          12           |           223            | 183              |
|                   | On-load LVDS + LCD                         |          12           |           578            | 538              |
|                   | On-load LVDS+LCD+cpu the usage rate is 90% |          12           |           728            | 717              |
|    Single SoM     | Power-on start without load                |           5           |           382            | 310              |
|                   | The CPU usage rate is 100%.                |           5           |            \-            | 355              |

**Note：**

- **Peak Current: Maximum current value during booting;**
- **Stable Value: Current value stays on the boot screen after booting.**                                                           

## 6\. Connector Dimension Diagram

SoM Connector Dimension:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720591196549-2bbd2973-a8af-43c7-956c-830584a2cce5.png)

Carrier board Connector Dimension:

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1720591196881-c83a1799-9352-4c4b-89ca-f75bb98eff60.png)

## 7\. Minimum System Schematic

![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280844329-6bb53b95-33b6-4c84-9482-5484093bd156.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280842142-66adc905-e26f-4b08-8cbe-4cf596dd5d43.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280841837-9e1afd29-fb59-4f60-a134-f10472dd5f29.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280841956-63b34f6f-b3a8-41e3-8e39-20e0619d33aa.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280841829-347a57be-c992-4d96-be9e-628dd245c516.png)![](https://cdn.nlark.com/yuque/0/2024/png/45533338/1721280845120-ac98fab7-9aa0-4272-bbf9-2fc10ab8f255.png)

![](https://cdn.nlark.com/yuque/0/2025/png/45533338/1735873043868-75c4e523-8868-4d8b-b0e3-9c4b6e227d96.png)

**Note：**

Note: The minimum system includes SoM power supply, system flash circuit, and debugging serial port circuit.