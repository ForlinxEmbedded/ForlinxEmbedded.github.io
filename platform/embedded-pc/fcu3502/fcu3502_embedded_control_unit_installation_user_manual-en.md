# Installation User's Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
This manual helps you quickly get familiar with the FCU3502 Embedded Control Unit, covering its interface functions, configurations, hardware parameters, mechanical dimensions, layout and EMC specifications.

## 1. Product Overview
The FCU3502 Embedded Control Unit is a high-performance edge AI terminal. Built on a dual-computing architecture combining the Rockchip RK3588 main processor and RK1828 AI accelerator, it targets high-concurrency video analytics and local large-model inference. This all-in-one platform integrates multi-channel IPC camera decoding, streaming, and AI inference. 
Forlinx delivers full-stack support: proprietary algorithm libraries, custom algorithm development, and private knowledge base customization. 
Equipped with abundant industrial interfaces, a unified family design, and a programmable indicator bar, the FCU3502 serves as the ideal hardware platform for high-compute AI applications in intelligent transportation, industrial vision, AI charging stations, and energy inspection.

Adopting a System-on-Module (SoM) plus carrier board design, it provides rich peripheral interfaces including HDMI IN, HDMI OUT, 5G, WiFi, Ethernet, USB3.0, audio, RS485, RS232, DI and DO. It features Forlinx’s signature family design and a user-programmable light bar.
Dimensions: 233mm (L) × 141mm (W) × 66mm (H)

Application scenarios: smart cockpit, in-vehicle vision, intelligent transportation, edge computing terminals, industrial vision, energy inspection, AI smart charging stations, etc.

## 2. Product Appearance and Interface Diagrams
### 2.1 Product Appearance Diagram






![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_embedded_control_unit_installation_user_manual-en/001_EN.png)

### 2.2 Interface Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_embedded_control_unit_installation_user_manual-en/002_EN.png)

HDMI IN: Video input interface

HDMI OUT: Video output interface

WIFI/BT Bluetooth: SMA antenna RF connector

4G/5G: SMA antenna RF connector

Indicator LEDs: power and running status

KEY: power on/off and system flashing button

Power: DC power input

DEBUG: RJ45-console debug interface

GbE: Gigabit/Fast Ethernet auto-sensing ports * 2

USB3.0: USB3.0 HOST ports * 2

USB2.0: USB2.0 HOST ports * 2

Speaker: built-in 8Ω 1W speaker

Headphone: 3.5mm headphone jack

RS232: RS232 communication ports *4, 3P 3.81mm green terminal block

RS485: RS485 communication ports *2, 3P 3.81mm green terminal block

DO: DO output ports *2, 4P 3.81mm green terminal block

DI: DI input ports *2, 4P 3.81mm green terminal block

TF&SIM: microSD and Nano SIM card slots

LED: indicator light

## 3. Hardware Specifications
| Device | Description |
| :---: | --- |
| CPU | Rockchip RK3588<br/>ARM Cortex-A76 *4 + ARM Cortex-A55 *4 |
| RAM | 8 GB (max) |
| ROM | eMMC  64 GB (max) |
| M.2 SSD | Storage can be expanded via the M.2 M-KEY connector |
| HDMI OUT | Video output, maximum resolution: 4K |
| HDMI IN | Video input, maximum resolution: 4K |
| M.2 AI accelerator card | Supports the RK1828 AI accelerator card |
| USB | USB2.0 HOST *2 + USB3.0 HOST *2 |
| Ethernet | 2 ports, 10/100/1000Mbps auto-sensing |
| DO | 2 channels, switching output, contact rating 5A　30VDC |
| DI | 2 channels, switching input, type: dry contact |
| RS232 | 4 channels, communication rate: 115200 bps |
| RS485 | 2 channels, communication rate: 115200 bps |
| Power IN | Rated DC 24 V, supports a wide DC 9~36 V input, with reverse-polarity and overcurrent protection. |
| DEBUG | Console port, RS232 |
| TF | Expandable up to 128G |
| AUDIO | 1 x 3.5mm AUX port, analog audio output, 1 x built-in 1W speaker |
| 4G/5G | Supports 4G/5G modules via the M.2 interface |
| WIFI | WIFI 4 + BT 4.2, WIFI supports STA and AP modes |
| KEY | Provides RESET, BOOT, RECOVERY, and power on/off buttons |
| Indicator 1 | 2 LEDs, indicating system power-on and system running respectively |
| Indicator 2 | Programmable light bar on the top |
| Dimensions | With mounting ears: 233mm*141mm*66mm (L*W*H) |
| Mounting | Desktop/mounting-ear installation |
| Electromagnetic Compatibility (EMC) | EMC Level 3 protection |


## 4. Mechanical Dimensions
L：233mm   W：141mm   H：66mm![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_embedded_control_unit_installation_user_manual-en/003_EN.png)![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_embedded_control_unit_installation_user_manual-en/004_EN.png)

Overall dimensions diagram

**Note: The mounting-ear fixing screws are M3.**

## 5. Overall Power Consumption
| No. | Test item | Device power (W) |
| :---: | :---: | :---: |
| 1 | Peak power at no-load startup | 15.5 |
| 2 | No-load standby | 8.5 |
| 3 | 100% CPU utilization | 14.6 |
| 4 | 100% memory utilization | 15.6 |
| 5 | Full-interface test program running | 32 |
