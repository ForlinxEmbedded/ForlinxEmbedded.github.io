# User's Hardware Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Product Overview
The FCU3501 Embedded Control Unit is based on the Rockchip RK3588/RK3588J processor with a 4×Cortex-A76+4×Cortex-A55 architecture (A76 up to 2.4 GHz, A55 up to 1.8 GHz), 8K encode/decode, and 6 TOPS of NPU compute. It supports AI accelerator card expansion—install a Hailo-8 26 TOPS M.2 AI accelerator card—for on-device AI inference in intelligent transportation, smart factories, smart buildings, and similar industries. A fanless passive-cooling design has passed rigorous environmental and EMC testing to ensure stable, reliable operation.

The FCU3501 Embedded Control Unit combines the FET3588J-C System-on-Module (SoM) with a carrier board and offers a rich set of industrial-grade peripherals, including RS485, RS232, USB, RGMII, HDMI, PCIe, I2S, SDIO, DI, and DO interfaces. It supports multiple modules—AI accelerator cards, 4G/5G modules, M.2 SSDs, and more—so you can choose options that fit your application.

## 2. Interface Diagram
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/059.png)

**Figure 1 Front Panel Interface Diagram**

- 1 x audio codec; the built-in speaker sounds alarms and a headphone jack is provided;
- 2 x USB2.0 Type-A connectors for external USB2.0 devices;
- 2 x USB3.0 Type-A connectors for external USB3.0 and USB2.0 devices;
- 2 x Gigabit Ethernet ports via RJ45 connectors, eth0 and eth1;
- 1 x DEBUG port, RJ45 connector, RS232 levels; connect to a PC via the optional console debug cable for debugging;
- 4 x industrial-grade isolated RS232 signals, each brought out through its own 3-position 3.81 mm pitch green terminal block.

The terminal pin definitions, from left to right, are as follows:

| No. | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: |
| Definition | COM | R[3:0] | T[3:0] |

2 x relay-isolated dry-contact outputs, brought out through one 4-position 3.81 mm pitch green terminal block;

The terminal pin definitions, from left to right, are as follows:

| No. | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: |
| Definition | DO1-2 | DO1-1 | DO0-2 | DO0-1 |

2 x optocoupler-isolated dry-contact inputs, brought out through one 4-position 3.81 mm pitch green terminal block;

The terminal pin definitions, from left to right, are as follows:

| No. | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: |
| Definition | COM | DI1 | COM | DI0 |

2 x industrial-grade isolated RS485 signals, each brought out through a 3-position 3.81 mm pitch green terminal block;

**Note: The RS485 interface has no internal termination resistor by default; add an external termination resistor if needed.**

The terminal pin definitions, from left to right, are as follows:

| No. | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: |
| Definition | COM | B[1:0] | A[1:0] |


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/060.png)

Figure 2 Rear Panel Interface Diagram

1 x power input connector, brought out through one 3-position 3.81 mm pitch green terminal block;

The terminal pin definitions, from left to right, are as follows:

| No. | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: |
| Definition | V+ | V- | PE |

4 x function buttons, with functions described below:

| Button Name | Button Function |
| :---: | --- |
| PWR | Power button; short press to power on, long press to power off |
| RESET | Reset button; a short press resets the unit |
| BOOT | Reserved; puts the device into Maskrom state |
| RECOVERY | Reserved; puts the device into Recovery state |

2 x LEDs: PWR LED stays on as the power indicator, and RUN LED blinks as the run indicator;

4 x SMA RF antenna connectors accept external antennas for the 5G/4G module;

1 x SMA RF antenna connector accepts an external antenna for the built-in WIFI&BT module;

1 x HDMI TX connector for an external display, up to 7680x4320@60Hz;

1 x HDMI RX connector, receiving up to 4K@60Hz;

Device grounding point, connected to the enclosure and the power supply PE;

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/061.png)

Figure 3 Side Interface Diagram

1 x microSD card slot, compatible with most microSD cards on the market;

1 x SIM card slot; insert a SIM card for use with the 5G/4G module;

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/062.png)

Figure 4 Bottom Interface Diagram

A removable cover under the bottom panel allows installation of one 2280 M.2 M-Key SSD

## 3. Hardware Specifications
| Function | Qty | Specifications |
| :---: | :---: | --- |
| CPU | / | Rockchip RK3588J; ARM Cortex-A76 + ARM Cortex-A55 |
| RAM | / | 8 GB |
| ROM | / | 64 GB eMMC |
| Power IN | / | Rated DC 24 V, supports 9-36 V wide-range input, with reverse-polarity and overvoltage protection |
| Ethernet | 2 | Independent transformer-isolated Ethernet ports brought out through RJ45 connectors;<br/>Supports 10/100/1000 Mbps data rates. |
| HDMI TX | 1 | Brought out through a standard HDMI connector;<br/>Supports up to 7680x4320@60Hz. |
| HDMI RX | 1 | Brought out through a standard HDMI connector;<br/>Supports up to 4K@60Hz. |
| M.2 AI Accelerator Card | 1 | PCIE 3.0 x4 interface brought out through an M.2 M-KEY connector;<br/>Optional Forlinx-compatible AI accelerator card module; |
| M.2 SSD | 1 | PCIE 2.0 x1 interface brought out through an M.2 M-KEY connector;<br/>An M.2 SSD can be installed as an option. |
| USB3.0 | 2 | 2 x USB3.0+USB2.0 channels brought out through USB3.0 Type-A connectors;<br/>Each VBUS provides 5 V/1 A output. |
| USB2.0 | 2 | 2 x USB2.0 channels brought out through USB2.0 Type-A connectors;<br/>Each VBUS provides 5 V/0.5 A output; |
| M.2 Wireless Module | 1 | 4G/5G module installed through an M.2 B-KEY connector (module and antenna kit optional);<br/>5G module: uses 1 USB3.0 interface and 1 USB2.0 interface;<br/>4G module: uses 1 USB2.0 interface. |
| WIFI&BT | 1 | 1 x USB2.0 WIFI4 & Bluetooth 4.2 module; external antenna via an SMA connector |
| TF Card | 1 | SDIO interface; accepts a microSD card at up to 150 MHz; supports SDR104 mode |
| Audio Codec | 1 | Audio codec with a built-in speaker and headphone output; |
| RS232 | 4 | Isolated RS232 level converters, brought out through 3Pin 15EDGK-3.81 green terminal blocks |
| RS485 | 2 | Isolated RS485 level converters, brought out through 3Pin 15EDGK-3.81 green terminal blocks |
| Debug | 1 | RJ45 connector, RS232 levels; connect to a PC via the console debug cable for debugging |
| DI | 2 | 2 optocoupler-isolated signal inputs, dry-contact |
| DO | 2 | 2 relay-isolated dry-contact outputs |
| KEY | 4 | The 4 buttons are: reset, power on/off, BOOT, RECOVERY |
| LED | 2 | 1 steady power LED;<br/>1 blinking system-run LED. |
| Operating Environment | / | Humidity: 5%~95%, non-condensing;<br/>Operating temperature: -40°C~+85°C;<br/>Storage temperature: -40°C~+85°C. |
| Dimensions (with mounting ears) | / | 232.5 x 140.5 x 56.5 mm (L x W x H) |


## 4. Power Supply
This product takes a rated DC 24 V input and supports a wide DC 9~36 V range.

| Board Photo | Description |
| :---: | --- |
| ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/063.png) |  |




## 5. Electromagnetic Compatibility (EMC)
### 5.1 EMC Test
| No. | Test Item | Test Standard | Test Level |
| :---: | :---: | :---: | :---: |
| 1 | Electrostatic discharge immunity test (ESD) | GB/T 13729-2019 | Level 3 |
| 2 | Electrical fast transient burst immunity test (EFT) | GB/T 13729-2019  | Level 3 |
| 3 | Surge immunity test (SUGRE) | GB/T 13729-2019  | Level 3 |




## 6. Mechanical Dimensions
![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/064.png)

**Front View Dimensions**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/065.png)

**Top View Dimensions**

## Appendix A
Recommended Tools for Opening the Enclosure

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/066.png)

Figure A.1

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Hardware_Manual-EN/067.png)

Figure A.2

As shown in Figure A.1 and Figure A.2, use a PH2 screwdriver (6.5 mm diameter) for the M3 countersunk enclosure screws.
