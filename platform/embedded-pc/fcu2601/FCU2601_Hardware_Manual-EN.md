# User's Hardware Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Product Overview
The FCU2601 Embedded Control Unit is built on our FET3568J-C quad-core industrial-grade System-on-Module (SoM), running at 1.8 GHz with a quad-core 64-bit Cortex-A55 architecture. It integrates Rockchip's in-house NPU with 1 TOPS of compute for lightweight on-device AI inference. It supports up to 8 GB of memory and up to 64 GB of eMMC storage.

The product uses a System-on-Module (SoM), carrier board, and expansion board design to reduce total system cost, and supports a wide range of hardware peripherals, including RS485, RS232, CAN, USB, Ethernet, 4G, Wi-Fi, DI, DO, mSATA, and HDMI interfaces and modules. The FCU2601 measures within 190 x 140 x 45 mm and comes in Base and Extended versions. Both versions are planned to share the same enclosure size but offer different numbers of interfaces, so you can select one based on your application.

## 2. Interface Diagram
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/069.png)

Figure 1 Front-Panel Interface Diagram

Four 6-position green terminal blocks (3.81 mm pitch) provide 8 RS485 interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Definition | A1 | B1 | G1 | A2 | B2 | G2 |

**Note: The RS485 interfaces have no internal termination resistors by default. If needed, add external termination resistors. The same applies below.**

One 6-position green terminal block (3.81 mm pitch) provides 2 CAN interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Definition | L1 | H1 | CG1 | L2 | H2 | CG2 |

**Note: The CAN interfaces have no internal termination resistors by default. If needed, add external termination resistors.**

2 x two-layer LED indicators with user-definable functions

1 x Wi-Fi antenna

2 x Gigabit Ethernet ports: eth0 and eth1

2 x Fast Ethernet ports: eth2 and eth3

2 x 5-position green terminal blocks (3.81 mm pitch) provide 2 multiplexed RS485/RS232 interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Definition | A10 | B10 | G10 | T10 | R10 |


One 3-position green terminal block (3.81 mm pitch) provides 1 RS485 interface

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Definition | A9 | B9 | G9 |


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/070.png)

Figure 2 Rear-Panel Interface Diagram

1 x DEBUG port (RJ45), RS232 levels, with a pinout matching the console port on Cisco switches

2 x standard Type-A USB connectors

1 x standard HDMI port

One 10-position green terminal block (3.81 mm pitch) provides 8 DI interfaces

The terminal block pinout is as follows:

| No. | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Definition | DI1 | DI2 | DI3 | DI4 | DI5 | DI6 | DI7 | DI8 | COM | COM |


Figure 3 Dry Contact Principle and Connection Diagram

2 x 6-position green terminal blocks (3.81 mm pitch) provide 6 DO interfaces

The terminal block pinout is as follows:

|  | + | - | + | - | + | - | + | - | + | - | + | - |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Definition | DO1 | DO1 | DO2 | DO2 | DO3 | DO3 | DO4 | DO4 | DO5 | DO5 | DO6 | DO6 |


The two-layer buttons are a user-defined button and a reset button, respectively.

The two-layer LEDs are the power indicator and the RUN indicator: the red LED turns on when power is applied, and the green LED blinks as a heartbeat when the Embedded Control Unit is operating normally.

The rated power input is DC 24 V, including a protective earth terminal.

Protective Earth

2 x antenna connectors for the main and secondary 4G antennas

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/071.png)

Figure 4 Side Interface Diagram

1 x self-ejecting Micro SIM card slot for SIM card installation and 1 microSD card slot for flashing or data storage

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/072.png)

Figure 5 Bottom View

The 4G module and mSATA SSD are installed under the bottom cover.

## 3. Hardware Specifications
| Device | Description |
| --- | --- |
| CPU | Rockchip RK3568J   ARM Cortex-A55 1.8 GHz |
| RAM | 8 GB (max) |
| ROM | eMMC  64 GB (max) |
| Ethernet | 2 x 10/100 Mbps, 2 x 10/100/1000 Mbps, ESD Level 4, EFT Level 4 |
| RS485 | 11 channels (2 multiplexed with RS232), 3 kV isolation protection, ESD Level 4, EFT Level 4 |
| RS232 | 2 channels (multiplexed with RS485), 3 kV isolation protection, ESD Level 4, EFT Level 4 |
| DO | 6 channels, relay output   contact rating: 5 A 250 VAC, 5 A 30 VDC |
| DI | 8 channels, dry contact input |
| CAN | 2 channels, 3 kV power isolation, ESD Level 4, EFT Level 4 |
| HDMI | 1 standard HDMI 1.4 port, supporting 1080P@60fps (up to 4K) |
| 4G | Models: EC200N, EC20, EC25   one SIM card slot |
| WIFI | Supports STA mode and AP mode |
| USB Host | 2 ports, USB Host 2.0, ESD Level 4 |
| RTC | Onboard CR2032 battery |
| Hard Disk Storage | Supports mSATA SSD |
| Power IN | Rated DC 24 V, supports a wide DC 9~36 V input, with reverse-polarity and overcurrent protection. |
| Power-Loss Detection | The CPU can detect loss of external power; the supercapacitor can keep the system powered for 5 s (on carrier board V1.4 and later, the supercapacitor can be enabled or disabled in software). |
| Reset Key | Reset button |
| Key | User-defined button |
| Indicator 1 | 2 LEDs indicating system power-on and normal operation |
| Indicator 2 | 4 LEDs: 2 CAN communication LEDs and 2 user-definable LEDs |
| DEBUG | 1 RS232-level DEBUG port with a pinout matching the console port on Cisco switches |
| Operating Environment | Humidity: 5%~95%, non-condensing.    Operating temperature: -40°C~+75°C   Storage temperature: -40°C~+85°C |
| Dimensions (Including Mounting Ears) | 214mm_140mm_45mm (L x W x H) |


## 4. Power Supply
### 4.1 Power Supply
The product has a rated DC 24 V input and supports a wide DC 9~36 V input range.

| Board Photo | Description |
| --- | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/073.png) |  |


## 5. Electromagnetic Compatibility (EMC)
### 5.1 EMC Test
| No. | Test Item | Test Standard | Test Level |
| --- | --- | --- | --- |
| 1 | High-Frequency Interference Test | GB/T 13729-2019 | Level 3 |
| 2 | Electrostatic Discharge Interference Test (ESD) | GB/T 13729-2019 | Level 3 |
| 3 | Radiated Electromagnetic Field Interference Test | GB/T 13729-2019 | Level 3 |
| 4 | Fast Transient/Burst Interference Test (EFT) | GB/T 13729-2019 | Level 3 |
| 5 | Surge Interference Test (SUGRE) | GB/T 13729-2019 | Level 3 |
| 6 | Power-Frequency Magnetic Field Interference Test | GB/T 13729-2019 | Level 3 |
| 7 | Damped Oscillatory Magnetic Field Interference Test | GB/T 13729-2019 | Level 3 |
| 8 | DC Supply Voltage Dips and Interruptions Test | GB/T 17626.29-2006 | 60% voltage dip lasting 0.5 s and interruption lasting 0.1 s |


### 5.2 Safety Compliance Test
Insulation resistance, dielectric strength, and impulse voltage comply with the requirements of GB/T 13729-2019.

### 5.3 Certifications
FCC, CE, RoHS, Kaipu telecontrol standard EMC certification, relay protection standard EMC testing, etc.

## 6. Mechanical Dimensions
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/074.png)

Overall Dimensions

## Appendix A
Recommended Tools for Opening the Enclosure

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/075.png)

Figure A.1

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/076.png)

Figure A.2

For the enclosure removal screws (M3 countersunk) shown in Figure A.1 and Figure A.2, a PH2 screwdriver (6.5 mm diameter) is recommended.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Hardware_Manual-EN/077.png)

Figure A.3
