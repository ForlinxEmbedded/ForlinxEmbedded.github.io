# FCU3011\_User's Hardware Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1 . Product Description

### 1.1 FCU3011 Description

The FCU3011 embedded control unit is designed based on NVIDIA’s Jetson Orin Nano module, with a maximum main frequency of 1.5GHz, and supports a computing power of up to 40TOPS (for the 8GB version). It is equipped with rich peripheral interfaces including 5G mobile network, Gigabit Ethernet, USB3.0, CAN, RS485, DI, DO, etc., and supports the Ubuntu operating system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374443_2399a99b_8517_413a_a7f2_c38f7952b346.jpg)

**Product Features:**

● 6-core Arm® Cortex®-A78AE v8.2 processor, with a maximum frequency of 1.5GHz;

● 4GB 64-bit LPDDR5, delivering a bandwidth of up to 34GB/s;

● 8GB 64-bit LPDDR5, delivering a bandwidth of up to 68GB/s;

● The 4GB version is integrated with a 512-core NVIDIA Ampere architecture GPU, capable of achieving 20TOPS (INT8) computing performance;

● The 8GB version is integrated with a 1024-core NVIDIA Ampere architecture GPU, capable of achieving 40TOPS (INT8) computing performance;

● Powerful video encoding and decoding capabilities: maximum encoding performance of 1080p@30, maximum decoding performance of 1x4K@60 (H.265);

● Fanless design ensures more stable system operation, superior temperature control, and enhanced housing sealing, enabling adaptation to more diverse environmental conditions;

● M.2 Type 2230 interface, namely the E KEY standard interface, with an RTL8822CE WIFI module connected by default;

● M.2 KEY M (PCIex4 NVMe 2280);

● 4G/5G modules;

● Equipped with Ubuntu22.04 LTS system, a wealth of third-party applications and plugins to facilitate user development.

### 1.2 Application Areas

Edge AI computing gateways, smart IoT, smart cities, industrial automation, video surveillance, robotics, etc.

### 1.3 Interface Diagram

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374554_886b6477_122b_4008_a8a2_f97f31f7e243.jpg)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374668_ae2547d1_f633_45bc_b92b_502200cf89e3.jpg)

### 1.4 Software Parameter

| Device| Description|
|:---------|:---------|
| CPU| 6-core NVIDIA Carmel   Arm® Cortex®-A78AE v8.2|
| GPU| 4G：512 NVIDIA® Ampere cores, 16 Tensor cores |
| GPU| 8G：1024 NVIDIA® Ampere cores, 32 Tensor cores |
| RAM| LPDDR4  4GB/8GB optional|
| ROM| NVMe Expansion|
| Mobile Communication | 5G Module: Quectel RM500U/RM500Q Module;<br />4G Quectel EM05 Module; <br />Supports full-network access; <br />Adopts a standard micro SIM card slot. |
| Switching output| 2 x, electromagnetically isolated;<br />Contact rating: 5A 30VDC / 5A 250VAC;<br />Interface: green terminals with 3.81mm pitch. |
| Switching input| 2 x, 1.5KV optocoupler quarantine, using 3.81mm pitch green terminal.|
| RS-485| 1 x, 1.5KV optocoupler quarantine, using 3.81mm pitch green terminal.|
| CAN| 1 x, 1.5KV optocoupler quarantine, using 3.81mm pitch green terminal.|
| USB| 2 x USB3.0, 2 x USB2.0 (standard USB Type-A sockets); <br />1 x OTG (for system flashing), all with ESD3 protection |
| Ethernet| 4 x Gigabit Ethernet, standard RJ-45 sockets, 10M/100/1000M auto-negotiation, ESD Level 3 protection|
| HDMI| 1 x HDMI 2.0, supports up to 4K display|
| SSD (Optional)| 1 x, M.2 PCIex4 2280/ 2260/ 2280 KEY M standard interface|
| WiFi (Optional)| 1 x, M.2 PCIex1 2230 KEY E standard interface|
| RTC| CR2032 Battery|
| Restore Button| 1 x, used for system reset|
| Power and Consumption| Rated Voltage:12V5A|
| Dimensions| 178\_110\_55mm|
| Installation| Optional mounting brackets, 4 × Φ3mm screws|
| Working Environment| Humidity: 5%～95%, no condensation; <br />Operating temperature: 0°C to 70°C; <br />Storage temperature: -20°C to 125°C.|

## 2\. Platform Interface

This section primarily explains how to use the FCU3011 peripheral interfaces.

### 2.1 USB HOST Interface

**Note:**

- **Supports hot plugging of USB mice, USB keyboards, and USB flash drives;**
- **When testing with a USB flash drive, it is recommended to format the drive to the FAT32 format recognizable by Linux systems using a formatting tool;**
- **Currently, USB flash drive testing supports up to 128 GB. Capacities exceeding 128 GB are not tested;**
- **The mount directory for USB flash drives is /media/"username"/.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374782_52a079bb_0033_4fc3_9614_914add8528b1.png)

The FCU3011 is equipped with four USB HOST interfaces, as indicated by the red box. The two blue interfaces are USB 3.0 ports, and the white ones are USB 2.0 ports. Any of the interfaces can be selected for testing. When a USB flash drive is inserted, the system’s file browser will automatically display the contents of the drive.

### 2.2 Wired Network

The FCU3011 integrates a 5-port network switch internally, with four Gigabit Ethernet ports exposed externally — any of these ports can be connected to the external network or local devices. There is also one internal network port for communication with the switch.

**Note:**

- **The examples in this section are tested under Forlinx Embedded’s internal network environment. Since actual network conditions may vary in deployment, perform configurations according to the specific on-site network environment;**
- **The network interface name of the FCU3011 is eth0, and there is no default IP address upon first startup.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374875_fd1a0022_2d26_4acb_84ea_0c25f99b6b34.png)

### 2.3 4G/5G

**Note: The FCU3011 supports the Quectel EM05-CE 4G module, Quectel RM500Q-GL 5G module, and Quectel RM500U-CN 5G module.**

Ensure that the 4G/5G module is installed inside the FCU3011, the 4G/5G antenna is connected, and a SIM card is inserted. The position of the SIM card holder is indicated by the red box in the figure.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722374971_2cdda1f5_1c23_42c5_b9f0_a9d05fc25472.png)

### 2.4 RS485

The RS485 interface is located in the position marked by the red box in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375060_dc06f037_0aa6_4b35_b79c_387b61254ac9.png)

Connect to the peer device according to the labeled A and B pins.

This interface corresponds to the device /dev/ttyTHS0 in the system. If RS485 is controlled by programming, the method is the same as serial port.

### 2.5 CAN

The FCU3011 has one CAN bus channel. Connect to the peer device following the corresponding L (Low) and H (High) pins. The interface position is shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375146_0b80f13d_ca5b_4348_b66d_581160b334e9.png)

### 2.6 HDMI

The HDMI interface is shown in the red box in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375230_0095398b_b0c7_4c97_9e55_70f3bc182181.png)

HDMI supports adaptive resolution, with a maximum resolution of 4K.

### 2.7 LED

The FCU3011 has only one user-controllable LED, whose position is shown in the figure.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375324_2fb5cb7f_ab84_4e11_93b0_ec9c43ca2da0.png)

### 2.8 DI

The FCU3011 has two sets of digital inputs, IN1 and IN2, with a common terminal IGND. As shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375425_5c7b0352_636e_4a87_a82b_6774bac076ee.png)

### 2.9 DO

The FCU3011 has two sets of digital outputs, respectively DO1 and DO2

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_User_Hardware_Manual/1787722375503_b582d03f_481c_4164_84fd_2a194337d1ca.png)

DO1 has two pins: A-1 and A-2.

DO2 has two pins: B-1 and B-2.

### 2.10 NVME

The device features an M.2 Key-E drive slot and supports the NVMe protocol.

## Appendix

### FCU3011 Overall Power Consumption Table

Table 1 FCU3011 Development Board Overall Power Consumption

| No.| Test Item| Development Board Power (including SoM) (W)|
|----------|----------|----------|
| 1| No-load startup peak power| 13.8|
| 2| No-load standby power| 8.3|
| 3| CPU stress test + memory stress test| 12.6|
| 4| CPU stress test + GPU stress test + memory stress test + full-port operation| 21.9|

