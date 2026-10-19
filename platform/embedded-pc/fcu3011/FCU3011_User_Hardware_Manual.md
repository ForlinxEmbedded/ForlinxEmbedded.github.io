# User's Hardware Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## 1. 产品简介
### 1.1 FCU3011简介
FCU3011嵌入式控制单元基于NVIDIA公司的JetsonOrinNano模块设计，主频最高1.5GHz，支持至高40TOPS算力（8G版本）。支持5G移动网络，千兆网，USB3.0，CAN，RS485，DI，DO等丰富外设接口，支持Ubuntu操作系统。

![](https://cdn.nlark.com/yuque/0/2026/jpg/45205328/1787722374443-2399a99b-8517-413a-a7f2-c38f7952b346.jpg)

产品特点：

● 6核 Arm® Cortex®-A78AE v8.2 处理器，最高支持1.5GHz

● 4GB 64位LPDDR5，可达34GB/s的带宽

● 8GB 64位LPDDR5，可达68GB/s的带宽

● 4G版本有512核 NVIDIA  Ampere 架构 GPU，可以达到20TOPS（INT8）的算力

● 8G版本有1024核 NVIDIA  Ampere 架构 GPU，可以达到40TOPS（INT8）的算力

● 具有强大的编解码能力，编码最大1080p@30，解码最大1x4K@60（H265）

● 无风扇设计，系统运行更稳定，温度控制更优秀，壳体密封性更强，适应更多环境情况

● m.2 Type 2230接口，即E KEY标准接口，默认外接RTL8822CE WIFI模块；

● M.2 KEY M (PCIex4 NVMe 2280)

● 支持4G /5G模组

● Ubuntu22.04 LTS系统，丰富的第三方应用和插件，方便用户开发。

### 1.2 应用领域
边缘AI计算网关、 智能物联网、智慧城市、工业自动化、视频监控、机器人等应用领域。

### 1.3 接口示意图
![](https://cdn.nlark.com/yuque/0/2026/jpg/45205328/1787722374554-886b6477-122b-4008-a8a2-f97f31f7e243.jpg)

![](https://cdn.nlark.com/yuque/0/2026/jpg/45205328/1787722374668-ae2547d1-f633-45bc-b92b-502200cf89e3.jpg)

### 1.4 硬件参数
| 设备 | 描述 |
| --- | --- |
| CPU | 6-core NVIDIA Carmel   Arm® Cortex®-A78AE v8.2 |
| GPU | 4G：512 NVIDIA® Ampere cores，16 Tensor cores |
| GPU | 8G：1024 NVIDIA® Ampere cores，32 Tensor cores |
| RAM | LPDDR4  4GB/8GB可选 |
| ROM | Nvme扩展 |
| 移动通信（选配） | 5G模块：   移远RM500U/RM500Q模块；   4G模块：   移远EM05模块；   支持全网通；    采用标准micro SIM卡槽 |
| 开关量输出 | 2路，电磁继电器隔离；   触点容量：5A 30VDC / 5A 250VAC   接口：3.81mm间距绿端子 |
| 开关量输入 | 2路，1.5KV光耦隔离，采用3.81mm间距绿端子； |
| RS-485 | 1路，1.5KV隔离防护，采用3.81mm间距绿端子； |
| CAN | 1路，1.5KV隔离防护，采用3.81mm间距绿端子； |
| USB | 2个USB3.0，2个USB2.0接口，采用标准USB A型插座，1个OTG接口用于烧写系统，均为ESD3级防护 |
| 以太网 | 4路千兆网，标准RJ-45插座，10M/100/1000M自适应，ESD3级防护 |
| HDMI | 1路，HDMI 2.0，支持最高4K显示 |
| SSD（选配） | 1路，M.2 PCIex4 2280/2260/2242 KEY M标准接口 |
| WiFi（选配） | 1路，M.2 PCIex1 2230 KEY E标准接口 |
| 实时时钟 | CR2032电池 |
| 恢复按键 | 1个，用于系统恢复 |
| 电源与功耗 | 额定电压：12V5A |
| 尺寸 | 178_110_55mm |
| 安装 | 可选挂耳，4只Φ3mm螺钉 |
| 工作环境 | 湿度：5％～95％，无凝露。    工作温度：0℃～70℃   存储温度：-20℃～125℃ |


## 2. 平台接口
此章节主要说明FCU3011外设接口的使用方法。

### 2.1 USB HOST接口
说明：

支持USB鼠标、USB键盘、U盘设备的热插拔。

使用U盘测试时，建议用格式化工具将其格式化为能被linux系统识别的FAT32格式。

目前U盘测试支持到128G，128G以上并未测试。

U盘挂载目录为/meidia/“用户名”/

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722374782-52a079bb-0033-4fc3-9614-914add8528b1.png)

FCU3011上有四个USB HOST接口，如红框所示，两个蓝色接口为USB3.0，白色接口为USB2.0。可选择任意一个进行测试，插入U盘系统文件浏览器自动显示U盘内容。

### 2.2 有线网络
FCU3011内部集成五口网络交换，对外有四个千兆以太网，任意网口均可连接外网或者设备，对内有一个网口和交换通信。

说明：

本节示例在飞凌的网络环境下进行测试，实际使用中网络环境会有差异，请用户按照自己实际网络环境进行配置。

FCU3011网卡名为eth0，首次开机无默认IP。

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722374875-fd1a0022-2d26-4acb-84ea-0c25f99b6b34.png)

### 2.3 4G/5G上网
说明：

目前FCU3011支持移远EM05-CE 4G模组，移远RM500Q-GL 5G模组和移远RM500U-CN 5G模组。

确保FCU3011内部安装了4G/5G模块，并连接了4G/5G天线，插入SIM卡。SIM卡扣位置如图红框。

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722374971-2cdda1f5-1c23-42c5-b9f0-a9d05fc25472.png)

### 2.4 RS485
RS485接口位置如图红框所示：

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375060-dc06f037-0aa6-4b35-b79c-387b61254ac9.png)

按照标记A、B和对端设备连接。

该接口在系统中对应的设备为/dev/ttyTHS0。如果是编程控制RS485,方法同串口。

### 2.5 CAN
FCU3011有一路CAN总线，按照L、H对应关系和对端设备连接。接口位置如下图：

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375146-0b80f13d-ca5b-4348-b66d-581160b334e9.png)

### 2.6 HDMI
HDMI接口如下图红框所示：

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375230-0095398b-b0c7-4c97-9e55-70f3bc182181.png)

HDMI支持自适应分辨率，最大支持到4K分辨率。

### 2.7 LED
FCU3011仅有一个LED可供用户控制，位置如图：

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375324-2fb5cb7f-ab84-4e11-93b0-ec9c43ca2da0.png)

### 2.8 DI
FCU3011有两组数字量输入IN1、IN2，公共端为IGND。如下图

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375425-5c7b0352-636e-4a87-a82b-6774bac076ee.png)

### 2.9 DO
FCU3011有两组数字量输出，分别为DO1、DO2

![](https://cdn.nlark.com/yuque/0/2026/png/45205328/1787722375503-b582d03f-481c-4164-84fd-2a194337d1ca.png)

DO1两个引脚：A-1、A-2

DO2两个引脚：B-1、B-2

### 2.10 NVME
设备提供M.2 key-E硬盘插槽，支持NvME协议。

## 附录
### FCU3011整机功耗表
表1 FCU3011实测整机功耗表

| 编号 | 测试项目 | 开发板功率   （含核心板）（W） |
| --- | --- | --- |
| 1 | 无负载启动峰值功率 | 13.8 |
| 2 | 无负载待机功率 | 8.3 |
| 3 | CPU压力测试+内存压力测试 | 12.6 |
| 4 | CPU压力测试+GPU压力测试+内存压力测试+全接口运行 | 21.9 |

