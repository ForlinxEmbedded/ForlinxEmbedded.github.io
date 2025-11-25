# 00_OK1046-C2_硬件手册

<font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">版本：V2.0  
发布日期：2022.09.30  
文件密级：□绝密 □秘密 □内部资料 ■公开</font>

# 声明
	本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。



保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。	

# 概 述
<font style="color:#333333;">本手册以使用户快速熟悉产品，了解接口功能和功能配置为目的，主要讲述了开发板接口功能，接口介绍，产品功耗，以及使用过程中出现的一些问题如何排查。在说明过程中，对一些命令进行了注释，方便</font>用户理解，以实用够用为主。涉及到引脚功能复用、硬件问题排查方法等请

**本手册一共分为4部分：**

+ 第一部分CPU整体概述，简单介绍了CPU性能和应用行业；
+ 第二部分核心板的整体介绍，包括连接器引脚的相关说明和功能介绍；
+ 第三部分开发板的整体介绍，分为多个章节介绍，包括了硬件原理和简单的设计思路两大部分；
+ 第四部分产品的功耗及其他说明，主要描述板卡的功耗方面表现和其他注意事项。
+ 本手册中一些符号及格式的相关说明：

| **表现形式** | **含义** |
| :---: | --- |
| ⁉️ | 注意或者是需要特别关注的信息，一定要仔细阅读 |
| 📚 | 对测试章节做的相关说明 |
| 🛤️ | 表示相关路径 |


# 更新记录
| **<font style="color:black;">日期</font>** | **<font style="color:black;">手册版本</font>** | **<font style="color:black;">核心板版本</font>** | **<font style="color:black;">底板版本</font>** | **<font style="color:black;">更新内容</font>** |
| :---: | --- | --- | --- | --- |
| <font style="color:black;">20200722</font> | <font style="color:black;">V1.0</font> | <font style="color:black;">V1.3</font> | <font style="color:black;">V1.1</font> | <font style="color:black;">OK1043A/1046A-C2</font><font style="color:black;">合并硬件手册初版</font> |
| <font style="color:black;">20201105</font> | <font style="color:black;">V1.1</font> | <font style="color:black;">V1.3</font> | <font style="color:black;">V1.1</font> | <font style="color:black;">核心板接口资源中</font><font style="color:black;">PCIE</font><font style="color:black;">参数修正</font> |
| <font style="color:black;">20210520</font> | <font style="color:black;">V1.2</font> | <font style="color:black;">V1.3/V2.0</font> | <font style="color:black;">V1.1</font> | <font style="color:black;">1. </font><font style="color:black;">添加</font><font style="color:black;">V2.0</font><font style="color:black;">版本核心板订购信息；</font><br/><font style="color:black;">2. </font><font style="color:black;">附录添加</font><font style="color:black;">1.x</font><font style="color:black;">核心板与</font><font style="color:black;">V2.x</font><font style="color:black;">核心内存读写参数对比表。</font> |
| <font style="color:black;">20210727</font> | <font style="color:black;">V1.3</font> | <font style="color:black;">V1.3/V2.0</font> | <font style="color:black;">V1.1</font> | <font style="color:black;">修改</font><font style="color:black;">boot</font><font style="color:black;">配置部分描述</font> |
| <font style="color:black;">20220930</font> | <font style="color:black;">V2.0</font> | <font style="color:black;">V1.5/V2.2</font> | <font style="color:black;">V2.1</font> | <font style="color:black;">1.</font><font style="color:black;">核心板接口资源中</font><font style="color:black;">SATA</font><font style="color:black;">参数修正；</font><br/><font style="color:black;">2.</font><font style="color:black;">因核心板芯片缺货，以下芯片做了型号替换：</font><br/><font style="color:black;">1</font><font style="color:black;">）网口</font><font style="color:black;">PHY</font><font style="color:black;">芯片型号由</font><font style="color:black;">AR8031</font><font style="color:black;">替换为</font><font style="color:black;">YT8521S</font><font style="color:black;">；</font><br/><font style="color:black;">2</font><font style="color:black;">）</font><font style="color:black;">RTC</font><font style="color:black;">芯片由</font><font style="color:black;">RX8010SJ</font><font style="color:black;">替换为</font><font style="color:black;">PCF8563</font><font style="color:black;">；</font><br/><font style="color:black;">3</font><font style="color:black;">）</font><font style="color:black;">PCIE</font><font style="color:black;">时钟芯片由</font><font style="color:black;">9DML0441AKILFT</font><font style="color:black;">替换为</font><font style="color:black;">RC19004A100GNL</font><font style="color:black;">；</font><br/><font style="color:black;">3.</font><font style="color:black;">核心板因光模块可能通过</font><font style="color:black;">IIC</font><font style="color:black;">进行配置，将两路光模块分别连接到</font><font style="color:black;">IIC3</font><font style="color:black;">和</font><font style="color:black;">IIC4</font><font style="color:black;">总线上，预留</font><font style="color:black;">0R</font><font style="color:black;">电阻，防止其与底板其他设备地址冲突；</font><br/><font style="color:black;">4.</font><font style="color:black;">更改了核心板命名规则和订购信息</font><br/><font style="color:black;">5.</font><font style="color:black;">底板修改了网络部分的原理描述；</font><br/><font style="color:black;">6.</font><font style="color:black;">底板修改了</font><font style="color:black;">5G</font><font style="color:black;">部分的原理图；</font><br/><font style="color:black;">7.</font><font style="color:black;">更新了</font><font style="color:black;">OK104xA-C2</font><font style="color:black;">开发板接口图和尺寸图。</font> |


****



# 01_NXP QorIQ LS104xA简介

# **第一章 NXP QorIQ LS104xA简介**
QorIQ® LS104xA处理器是恩智浦面向嵌入式网络推出的一款四核64位ARM®处理器。LS1023A (双核版本)和LS104xA (四核版本)可通过支持无风扇设计的灵活I/O封装，提供超过10 Gbps的性能。这款SoC是专为小规格网络和工业应用而设计的解决方案，针对经济型低端PCB进行了BOM优化，降低了电源成本，采用了单时钟设计。全新0.9V版本的LS104xA和LS1023A能够面向无线LAN和以太网供电系统提供额外的功耗节省。全新23x23封装方式，支持引脚兼容设计，可扩展至LS1046A (四核A72处理器)。QorIQ LS104xA能够提升双核32位ARM产品的性能，并且延续了QorIQ系列一贯的I/O灵活性，集成了QUICC Engine®，继续提供对HDLC、TDM或Profibus的无缝支持。

FET104xA-C核心板CPU采用的是LS1043AXE8QQB和LS1046AXE8T1A。如下为LS1043A和LS1046A的应用处理框图：



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687154128-c2d0264a-5679-4c66-97b6-6d45831eca46.png)

**LS1043A应用处理器框图**

![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687154340-02c0c45b-9d63-4a5d-b005-9a903dd842af.png)

**LS1046A应用处理器框图**



更多关于LS104xA的内容请浏览NXP官方网站：[https://www.nxp.com/cn/products/processors-and-microcontrollers/arm-based-processors-and-mcus/qoriq-layerscape-arm-processors/qoriq-layerscape-1043a-and-1023a-multicore-communications-processors:LS1043A](https://www.nxp.com/cn/products/processors-and-microcontrollers/arm-based-processors-and-mcus/qoriq-layerscape-arm-processors/qoriq-layerscape-1043a-and-1023a-multicore-communications-processors:LS1043A)







# 02_FET104xA-C核心板介绍

# **第二章 FET104xA-C核心板介绍 **
## <font style="color:#000000;">2.1 FET104xA-C核心板外观图</font>


![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687135565-b6c2afd7-0421-471e-a9d7-8bbbe29a29ec.png)

**FET1043A-C核心板正面视图**

![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687136534-d9f0cf92-2f47-4643-81a0-2ba55fa116b8.png)





**FET1046A-C核心板正面视图**

## <font style="color:#000000;">2.2 FET104xA-C核心板尺寸图</font>
FET104x-C核心板尺寸图如下所示：

![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687136985-cd64178f-4441-4ef1-b0a9-1965f0111906.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687137291-3eb69adb-a71a-4bfb-8f93-814193949fa9.png)

结构尺寸：84mm×55mm。

制版工艺：厚度2mm，12层沉金PCB。

连接器：一个双排0.5mm间距，220pin 板对板连接器。连接器尺寸图见附录。

核心板的四角预留了四个直径2.7mm的安装孔。核心板整体结构符合COM Express® Mini Type 10 标准。

## <font style="color:#000000;">2.3 性能参数</font>
### <font style="color:#000000;">2.3.1 系统主频</font>
| **名称** | **规格** | | | | **说明** |
| --- | --- | --- | --- | --- | --- |
| | **最小** | **典型** | **最大** | **单位** |
| 系统主频 | — | — | 1600 | MHz | LS1046最大为1.8G |
| 系统RTC时钟 | — | 32.768 | — | KHz | — |
| DDR时钟 | 650 | — | 1600 | MT/s | — |
| SerDes参考时钟 | 100 | — | 156.25 | MHz | — |


### <font style="color:#000000;">2.3.2 供电参数</font>
| **参数** | **引脚标号** | **规格** | | | | **说明** |
| --- | --- | --- | --- | --- | --- | --- |
| | | **最小** | **典型** | **最大** | **单位** |
| 主电源电压 | VCC_12V | 9 | 12 | 15 | V | — |


### <font style="color:#000000;">2.3.3 工作环境</font>
| **参数描述** | | **规格** | | | | **说明** |
| --- | --- | --- | --- | --- | --- | --- |
| | | **最小** | **典型** | **最大** | **单位** |
| 工作温度 | 工作环境 | -40 | 25 | +80* | ℃ | 工业级 |
| | 存储环境 | -40 | 25 | +125 | ℃ | |
| 湿度 | 工作环境 | 10 | — | 90 | ％RH | 无凝露 |
| | 存储环境 | 5 | — | 95 | ％RH | |


注：FET1046A-C核心板工作环境温度最高为75℃。

### <font style="color:#000000;">2.3.4 核心板接口速度</font>
| **参数** | **规格** | | | | **说明** |
| --- | --- | --- | --- | --- | --- |
| | **最小** | **典型** | **最大** | **单位** |
| 串口通讯速度 | — | 115200 | — | bps | — |
| IIC通讯速度 | — | 100 | 400 | Kbps | — |
| SD/MMC/SDIO | — | — | 104 | Mbps | — |
| USB接口速度 | — | — | 5 | Gbps | — |




## <font style="color:#000000;">2.4 核心板接口资源</font>
| **功能** | **FET1043数量** | **FET1046数量** | **参数** |
| :---: | :---: | :---: | :---: |
| QSGMII | ≤1 | ≤1 | 最高通信速率5G |
| SGMII | ≤4 | ≤5 | 最高支持速率2.5G |
| RGMII | ≤2 | ≤2 | 最高支持速率1G |
| UART | ≤4 | ≤4 | 支持2路DUART或4路UART |
| IIC | ≤2 | ≤2 |  |
| USB3.0 | ≤3 | ≤3 | 最高支持速率5G |
| XFI | ≤1 | ≤2 | 最高支持速率10G，LS1046最大为2路 |
| eSDHC | ≤1 | ≤1 | 支持SD3.0 EMMC4.5，与核心板上eMMC共用。 |
| PCIE2.0 | ≤3 | - | 最高支持速率5G |
| PCIE3.0 | - | ≤3 | 最高支持速率8G |
| SATA3.0 | ≤1 | ≤1 | 最高支持速率6G |
| JTAG | 1 | 1 | 支持NXP官方 CodeWarrior TAP调试器 |


注：表中参数为硬件设计或CPU理论值；

## <font style="color:#000000;">2.5 FET104xA-C核心板引脚定义</font>
### <font style="color:#000000;">2.5.1 FET104xA-C核心板引脚原理图</font>


![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687137522-067c6d04-6591-4b17-878a-250b77430f37.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687137868-bb99ec8f-811b-47e5-bde2-c42eba1d3bf0.png)

### <font style="color:#000000;">2.5.2 FET104xA-C核心板引脚功能说明</font>
**注1：**

**    Num —— **核心板连接器引脚序号；

**    Ball —— **CPU引脚球号

**    GPIO —— **CPU引脚通用I/O口序号

**Vol  ——** 引脚信号电平

**NC  —— **引脚未连接

**注2：**

**    信号名称 ——**核心板连接器网络名称

**    引脚描述 ——**核心板引脚信号名称描述

**    默认功能 ——**核心板所有引脚功能均按下表的“默认功能”作了规定，请勿修改，否则可能和出厂

                  驱动冲突。如有疑问，请及时联系我们的销售或技术支持。

**注3: **默认功能中“*”表示此信号仅支持LS1046A芯片，LS1043A CPU无此引脚。

**表1  连接器接口引脚定义A**

| NUM | BALL | 信号名称 | GPIO | VOL | 引脚描述 | 默认功能 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| A1 | - | GND | - | - | 地 | GND |
| A2 | - | EC1_TRX3_N | - | 1.1V | YT8521S TR3- | EC1_TRX3_N |
| A3 | - | EC1_TRX3_P | - | 1.1V | YT8521S TR3+ | EC1_TRX3_P |
| A4 | - | EC1_LINK100 | - | 1.5V | 无意义，默认输出低 | EC1_LINK100 |
| A5 | - | EC1_LINK1000 | - | 1.5V | YT8521S 千兆指示 | EC1_LINK1000 |
| A6 | - | EC1_TRX2_N | - | 1.1V | YT8521S TR2- | EC1_TRX2_N |
| A7 | - | EC1_TRX2_P | - | 1.1V | YT8521S TR2+ | EC1_TRX2_P |
| A8 | - | NC | - | - | - | NC |
| A9 | - | EC1_TRX1_N | - | 1.1V | YT8521S TR1- | EC1_TRX1_N |
| A10 | - | EC1_TRX1_P | - | 1.1V | YT8521S TR1+ | EC1_TRX1_P |
| A11 | - | GND | - | - | 地 | GND |
| A12 | - | EC1_TRX0_N | - | 1.1V | YT8521S TR0- | EC1_TRX0_N |
| A13 | - | EC1_TRX0_P | - | 1.1V | YT8521S TR0+ | EC1_TRX0_P |
| A14 | - | NC | - | - | - | NC |
| A15 | - | NC | - | - | - | NC |
| A16 | AD19 | SD2_TX3_P | - | 1.35V | 1046：SD2_TX3_P | |
| | | | | | 1043：SD1_TX3_P | |
| A17 | AE19 | SD2_TX3_N | - | 1.35V | 1046：SD2_TX3_N | |
| | | | | | 1043：SD1_TX3_N | |
| A18 | - | NC | - | - | - | NC |
| A19 | AG19 | SD2_RX3_P | - | 1.0V | 1046：SD2_RX3_P | |
| | | | | | 1043：SD1_RX3_P | |
| A20 | AH19 | SD2_RX3_N | - | 1.0V | 1046：SD2_RX3_N | |
| | | | | | 1043：SD1_RX3_N | |
| A21 | - | GND | - | - | 地 | GND |
| A22 | E4 | USB1_RX_DM | - | 1.0V | USB1_RX- | USB1_RX_DM |
| A23 | E3 | USB1_RX_DP | - | 1.0V | USB1_RX+ | USB1_RX_DP |
| A24 | - | NC | - | - | - | NC |
| A25 | C4 | USB2_RX_DM | - | 1.0V | USB2_RX- | USB2_RX_DM |
| A26 | C3 | USB2_RX_DP | - | 1.0V | USB2_RX+ | USB2_RX_DP |
| A27 | J4 | BATLOW_B | GPIO1_24 | 3.3V | 通用IO | GPIO1_24 |
| A28 | E7 | USB1_VBUS | - | 5.25V | USB1 VBUS | USB1_VBUS |
| A29 | C7 | USB2_VBUS | - | 5.25V | USB2 VBUS | USB2_VBUS |
| A30 | A7 | USB3_VBUS | - | 5.25V | USB3 VBUS | USB3_VBUS |
| A31 | - | GND | - | - | 地 | GND |
| A32 | M3 | I2C4_SCL | GPIO4_12 | 3.3V | I2C4 SCL | I2C4_SCL |
| A33 | N3 | I2C4_SDA | GPIO4_13 | 3.3V | I2C4 SDA | I2C4_SDA |
| A34 | - | NC | - | - | - | NC |
| A35 | - | NC | - | - | - | NC |
| A36 | A4 | USB3_RX_DM | - | 1.0V | USB3_RX- | USB3_RX_DM |
| A37 | A3 | USB3_RX_DP | - | 1.0V | USB3_RX+ | USB3_RX_DP |
| A38 | - | NC | - | - | - | NC |
| A39 | - | NC | - | - | - | NC |
| A40 | - | NC | - | - | - | NC |
| A41 | - | GND | - | - | 地 | GND |
| A42 | A6 | USB3_DM | - | 3.3V | USB3_D- | USB3_DM |
| A43 | B6 | USB3_DP | - | 3.3V | USB3_D+ | USB3_DP |
| A44 | H6 | USB1_DRVVBUS | GPIO4_29 | 3.3V | USB1 DRVVBUS | USB1_DRVVBUS |
| A45 | E6 | USB1_DM | - | 3.3V | USB1_D- | USB1_DM |
| A46 | F6 | USB1_DP | - | 3.3V | USB1_D+ | USB1_DP |
| A47 | - | NC | - | - | - | NC |
| A48 | - | NC | - | - | - | NC |
| A49 | - | NC | - | - | - | NC |
| A50 | - | NC | - | - | - | NC |
| A51 | - | GND | - | - | 地 | GND |
| A52 | AD15 | SD2_TX0_P* | - | 1.35V | 1046：SD2_TX0_P | |
| | | | | | 1043：NC | |
| A53 | AE15 | SD2_TX0_N* | - | 1.35V | 1046：SD2_TX0_N | |
| | | | | | 1043：NC | |
| A54 | R3 | GPIO0 | GPIO2_01 | 1.8V | 通用IO | GPIO0 |
| A55 | AD16 | SD2_TX1_P | - | 1.35V | 1046：SD2_TX1_P | |
| | | | | | 1043：SD1_TX2_P | |
| A56 | AE16 | SD2_TX1_N | - | 1.35V | 1046：SD2_TX1_N | |
| | | | | | 1043：SD1_TX2_N | |
| A57 | - | GND | - | - | 地 | GND |
| A58 | AD11 | SD1_TX3_P* | - | 1.35V | 1046：SD1_TX3_P | |
| | | | | | 1043：NC | |
| A59 | AE11 | SD1_TX3_N* | - | 1.35V | 1046：SD1_TX3_P | |
| | | | | | 1043：NC | |
| A60 | - | GND | - | - | 地 | GND |
| A61 | AD10 | SD1_TX2_P | - | 1.35V | 1046：SD1_TX2_P | |
| | | | | | 1043：SD1_TX1_P | |
| A62 | AE10 | SD1_TX2_N | - | 1.35V | 1046：SD1_TX2_N | |
| | | | | | 1043：SD1_TX1_N | |
| A63 | T3 | GPIO1 | GPIO2_02 | 1.8V | 通用IO | GPIO1 |
| A64 | AD8 | SD1_TX1_P* | - | 1.35V | 1046：SD1_TX1_P | |
| | | | | | 1043：NC | |
| A65 | AE8 | SD1_TX1_N* | - | 1.35V | 1046：SD1_TX1_N | |
| | | | | | 1043：NC | |
| A66 | - | GND | - | - | 地 | GND |
| A67 | V1 | GPIO2 | GPIO3_13 | 1.8V | 通用IO | GPIO2 |
| A68 | AD6 | SD1_TX0_P | - | 1.35V | 1046：SD1_TX0_P | |
| | | | | | 1043：SD1_TX0_P | |
| A69 | AE6 | SD1_TX0_N | - | 1.35V | 1046：SD1_TX0_N | |
| | | | | | 1043：SD1_TX0_N | |
| A70 | - | NC | - | - | - | NC |
| A71 | - | NC | - | - | - | NC |
| A72 | - | NC | - | - | - | NC |
| A73 | - | NC | - | - | - | NC |
| A74 | - | NC | - | - | - | NC |
| A75 | - | NC | - | - | - | NC |
| A76 | - | NC | - | - | - | NC |
| A77 | - | NC | - | - | - | NC |
| A78 | - | NC | - | - | - | NC |
| A79 | - | NC | - | - | - | NC |
| A80 | - | GND | - | - | 地 | GND |
| A81 | - | NC | - | - | - | NC |
| A82 | - | NC | - | - | - | NC |
| A83 | - | NC | - | - | - | NC |
| A84 | - | NC | - | - | - | NC |
| A85 | C20 | GPIO3 | GPIO2_12 | 1.8V | 通用IO | GPIO3 |
| A86 | - | SD1_REFCLK_SEL | - | 3.3V | SERDES1时钟选择 | SD1_REFCLK_SEL |
| A87 | - | NC | - | - | - | NC |
| A88 | - | PCIE_REFCLK_S_P | - | 3.3V | PCIE_REFCLK+ | PCIE_REFCLK_S_P |
| A89 | - | PCIE_REFCLK_S_N | - | 3.3V | PCIE_REFCLK- | PCIE_REFCLK_S_N |
| A90 | - | GND | - | - | 地 | GND |
| A91 | - | NC | - | - | - | NC |
| A92 | G17 | CPU_TDI_18 | - | 1.8V | JTAG_TDI | CPU_TDI_18 |
| A93 | B18 | GPIO4 | GPIO2_13 | 1.8V | 通用IO | GPIO4 |
| A94 | E18 | CPU_TCK_18 | - | 1.8V | JTAG_TCK | CPU_TCK_18 |
| A95 | G18 | CPU_TMS_18 | - | 1.8V | JTAG_TMS | CPU_TMS_18 |
| A96 | E20 | CPU_TDO_18 | - | 1.8V | JTAG_TDO | CPU_TDO_18 |
| A97 | - | NC | - | - | - | NC |
| A98 | H1 | UART1_SOUT | GPIO1_15 | 3.3V | UART1_TX | UART1_SOUT |
| A99 | H2 | UART1_SIN | GPIO1_17 | 3.3V | UART1_RX | UART1_SIN |
| A100 | - | GND | - | - | 地 | GND |
| A101 | L2 | UART2_SOUT | GPIO1_16 | 3.3V | UART2_TX | UART2_SOUT |
| A102 | K1 | UART2_SIN | GPIO1_18 | 3.3V | UART2_RX | UART2_SIN |
| A103 | - | CPU_TRST_B_18 | - | 1.8V | JTAG_RST | CPU_TRST_B_18 |
| A104 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A105 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A106 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A107 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A108 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A109 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| A110 | - | GND | - | - | 地 | GND |




**表2  连接器接口引脚定义B**

| **<font style="color:#F2F2F2;">NUM </font>** | **<font style="color:#F2F2F2;">BALL</font>** | **<font style="color:#F2F2F2;">信号名称</font>** | **<font style="color:#F2F2F2;">GPIO</font>** | **<font style="color:#F2F2F2;">VOL</font>** | **<font style="color:#F2F2F2;">引脚描述</font>** | **<font style="color:#F2F2F2;">默认功能</font>** |
| --- | --- | --- | --- | --- | --- | --- |
| B1 | - | GND | - | - | 地 | GND |
| B2 | - | EC1_ACT | - | 1.5V | YT8521S 有效指示 | EC1_ACT |
| B3 | AE4 | EC2_TXD1 | GPIO3_17 | 1.8V | RGMII TXD1 | EC2_TXD1 |
| B4 | AE1 | EC2_RXD1 | GPIO3_24 | 1.8V | RGMII RXD1 | EC2_RXD1 |
| B5 | AF3 | EC2_TXD0 | GPIO3_18 | 1.8V | RGMII TXD0 | EC2_TXD0 |
| B6 | AE3 | EC2_TXD2 | GPIO3_16 | 1.8V | RGMII TXD2 | EC2_TXD2 |
| B7 | AD3 | EC2_TXD3 | GPIO3_15 | 1.8V | RGMII TXD3 | EC2_TXD3 |
| B8 | AF1 | EC2_RX_DV | GPIO3_27 | 1.8V | RGMII RX_DV | EC2_RX_DV |
| B9 | AE2 | EC2_RXD0 | GPIO3_25 | 1.8V | RGMII RXD0 | EC2_RXD0 |
| B10 | AC1 | EC2_RX_CLK | GPIO3_26 | 1.8V | RGMII RX_CLK | EC2_RX_CLK |
| B11 | - | GND | - | - | 地 | GND |
| B12 | - | NC | - | - | - | NC |
| B13 | AD1 | EC2_RXD2 | GPIO3_23 | 1.8V | RGMII RXD2 | EC2_RXD2 |
| B14 | AC2 | EC2_RXD3 | GPIO3_22 | 1.8V | RGMII RXD3 | EC2_RXD3 |
| B15 | AG3 | EC2_TXEN | GPIO3_19 | 1.8V | RGMII TXEN | EC2_TXEN |
| B16 | AD18 | SD2_TX2_P* | - | 1.35V | 1046：SD2_TX2_P |  |
| | | | | | 1043：NC | |
| B17 | AE18 | SD2_TX2_N* | - | 1.35V | 1046：SD2_TX2_N |  |
| | | | | | 1043：NC | |
| B18 | - | NC | - | - | - | NC |
| B19 | AG18 | SD2_RX2_P* | - | 1.0V | 1046：SD2_RX2_P |  |
| | | | | | 1043：NC | |
| B20 | AH18 | SD2_RX2_N* | - | 1.0V | 1046：SD2_RX2_N |  |
| | | | | | 1043：NC | |
| B21 | - | GND | - | - | 地 | GND |
| B22 | F2 | USB1_TX_DM | - | 1.0V | USB1 TX- | USB1_TX_DM |
| B23 | F1 | USB1_TX_DP | - | 1.0V | USB1 TX+ | USB1_TX_DP |
| B24 | - | PWR_OK | - |  | 底板上电正常信号 | PWR_OK |
| B25 | D2 | USB2_TX_DM | - | 1.0V | USB2 TX- | USB2_TX_DM |
| B26 | D1 | USB2_TX_DP | - | 1.0V | USB2 TX+ | USB2_TX_DP |
| B27 | F10 | RESET_REQ_B_18 | - | 1.8V | CPU复位输出 | RESET_REQ_B_18 |
| B28 | AC4 | EC2_GTX_CLK | GPIO3_20 | 1.8V | RGMII GTX_CLK | EC2_GTX_CLK |
| B29 | - | NC | - | - | - | NC |
| B30 | AG4 | EC2_GTX_CLK125 | GPIO3_21 | 1.8V | RGMII CLK125 | EC2_GTX_CLK125 |
| B31 | - | GND | - | - | 地 | GND |
| B32 | - | NC | - | - | - | NC |
| B33 | L4 | I2C3_SCL | GPIO4_10 | 3.3V | I2C3 SCL | I2C3_SCL |
| B34 | M4 | I2C3_SDA | GPIO4_11 | 3.3V | I2C3 SDA | I2C3_SDA |
| B35 | - | NC | - | - | - | NC |
| B36 | B2 | USB3_TX_DM | - | 1.0V | USB3 TX- | USB3_TX_DM |
| B37 | B1 | USB3_TX_DP | - | 1.0V | USB3 TX+ | USB3_TX_DP |
| B38 | - | NC | - | - | - | NC |
| B39 | - | NC | - | - | - | NC |
| B40 | - | NC | - | - | - | NC |
| B41 | - | GND | - | - | 地 | GND |
| B42 | - | NC | - | - | - | NC |
| B43 | - | NC | - | - | - | NC |
| B44 | G6 | USB1_PWRFAULT | GPIO4_30 | 3.3V | USB电源错误检测 | USB1_PWRFAULT |
| B45 | C6 | USB2_DM | - | 3.3V | USB2_D- | USB2_DM |
| B46 | D6 | USB2_DP | - | 3.3V | USB2_D+ | USB2_DP |
| B47 | - | NC | - | - | - | NC |
| B48 | - | NC | - | - | - | NC |
| B49 | - | SYS_RESET_B | - | 3.3V | 系统复位输入 | SYS_RESET_B |
| B50 | - | CB_RESET_B | - | 3.3V | 系统复位输出 | CB_RESET_B |
| B51 | - | GND | - | - | 地 | GND |
| B52 | AG15 | SD2_RX0_P* | - | 1.0V | 1046：SD2_RX0_P |  |
| | | | | | 1043：NC | |
| B53 | AH15 | SD2_RX0_N* | - | 1.0V | 1046：SD2_RX0_N |  |
| | | | | | 1043：NC | |
| B54 | D17 | GPIO5 | GPIO2_14 | 1.8V | 通用IO | GPIO5 |
| B55 | AG16 | SD2_RX1_P | - | 1.0V | 1046：SD2_RX1_P |  |
| | | | | | 1043：SD1_RX2_P | |
| B56 | AH16 | SD2_RX1_N | - | 1.0V | 1046：SD2_RX1_N |  |
| | | | | | 1043：SD1_RX2_N | |
| B57 | E17 | GPIO6 | GPIO2_15 | 1.8V | 通用IO | GPIO6 |
| B58 | AG11 | SD1_RX3_P* | - | 1.0V | 1046：SD1_RX3_P |  |
| | | | | | 1043：NC | |
| B59 | AH11 | SD1_RX3_N* | - | 1.0V | 1046：SD1_RX3_N |  |
| | | | | | 1043：NC | |
| B60 | - | GND | - | - | 地 | GND |
| B61 | AG10 | SD1_RX2_P | - | 1.0V | 1046：SD1_RX2_P |  |
| | | | | | 1043：SD1_RX1_P | |
| B62 | AH10 | SD1_RX2_N | - | 1.0V | 1046：SD1_RX2_N |  |
| | | | | | 1043：SD1_RX1_N | |
| B63 | W3 | GPIO7 | GPIO1_31 | 1.8V | 通用IO | GPIO7 |
| B64 | AG8 | SD1_RX1_P* | - | 1.0V | 1046：SD1_RX1_P |  |
| | | | | | 1043：NC | |
| B65 | AH8 | SD1_RX1_N* | - | 1.0V | 1046：SD1_RX1_N |  |
| | | | | | 1043：NC | |
| B66 | L3 | SD_WP | GPIO4_03 | 3.3V | SD写保护 | SD_WP |
| B67 | K3 | SD_CD_B | GPIO4_02 | 3.3V | SD插拔检测 | SD_CD_B |
| B68 | AG6 | SD1_RX0_P | - | 1.0V | 1046：SD1_RX0_P |  |
| | | | | | 1043：SD1_RX0_P | |
| B69 | AH6 | SD1_RX0_N | - | 1.0V | 1046：SD1_RX0_N |  |
| | | | | | 1043：SD1_RX0_N | |
| B70 | - | GND | - | - | 地 | GND |
| B71 | AG2 | MDC1 | GPIO3_00 | 1.8V | MDC1 | MDC1 |
| B72 | AF2 | MDIO1 | GPIO3_01 | 1.8V | MDIO1 | MDIO1 |
| B73 | AH4 | MDC2 | GPIO4_00 | 1.8V | MDC2 | MDC2 |
| B74 | AH3 | MDIO2 | GPIO4_01 | 1.8V | MDIO2 | MDIO2 |
| B75 | J2 | UART3_SOUT | GPIO1_19 | 3.3V | UART3 TX | UART3_SOUT |
| B76 | J1 | UART3_SIN | GPIO1_21 | 3.3V | UART3 RX | UART3_SIN |
| B77 | L1 | UART4_SOUT | GPIO1_20 | 3.3V | UART4 TX | UART4_SOUT |
| B78 | M2 | UART4_SIN | GPIO1_22 | 3.3V | UART4 RX | UART4_SIN |
| B79 | - | NC | - | - | - | NC |
| B80 | - | GND | - | - | 地 | GND |
| B81 | J5 | IRQ5_GPIO1_25 | GPIO1_25 | 3.3V | 通用IO | GPIO1_25 |
| B82 | K5 | IRQ6_GPIO1_26 | GPIO1_26 | 3.3V | 通用IO | GPIO1_26 |
| B83 | L5 | IRQ7_GPIO1_27 | GPIO1_27 | 3.3V | 中断输入 | IRQ7_GPIO1_27 |
| B84 | - | NC | - | - | - | NC |
| B85 | - | NC | - | - | - | NC |
| B86 | - | NC | - | - | - | NC |
| B87 | - | NC | - | - | - | NC |
| B88 | M5 | IRQ8_GPIO1_28 | GPIO1_28 | 3.3V | 中断输入 | IRQ8_GPIO1_28 |
| B89 | N5 | IRQ9_GPIO1_29 | GPIO1_29 | 3.3V | 通用IO | GPIO1_29 |
| B90 | - | GND | - | - | 地 | GND |
| B91 | P4 | IRQ10_GPIO1_30 | GPIO1_30 | 3.3V | 中断输入 | IRQ10_GPIO1_30 |
| B92 | - | NC | - | - | - | NC |
| B93 | A16 | BOOT_SEL0 | - | 1.8V | 启动选择 | BOOT_SEL0 |
| B94 | P3 | SD_CLK | GPIO2_09 | 1.8V/3.3V | SD CLK | SD_CLK |
| B95 | P2 | SD_CMD | GPIO2_04 | 1.8V/3.3V | SD CMD | SD_CMD |
| B96 | P1 | SD_DATA0 | GPIO2_05 | 1.8V/3.3V | SD DATA0 | SD_DATA0 |
| B97 | R2 | SD_DATA1 | GPIO2_06 | 1.8V/3.3V | SD DATA1 | SD_DATA1 |
| B98 | R1 | SD_DATA2 | GPIO2_07 | 1.8V/3.3V | SD DATA2 | SD_DATA2 |
| B99 | T1 | SD_DATA3 | GPIO2_08 | 1.8V/3.3V | SD DATA3 | SD_DATA3 |
| B100 | - | GND | - | - | 地 | GND |
| B101 | A19 | FAN_PWMOUT | GPIO2_10 | 1.8V | 风扇控制 | FAN_PWMOUT |
| B102 | D20 | FAN_TACHIN | GPIO2_11 | 1.8V | 风扇转速侦测 | FAN_TACHIN |
| B103 | - | NC | - | - | - | NC |
| B104 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B105 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B106 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B107 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B108 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B109 | - | VCC_12V | - | 12V | 核心板供电电源 | VCC_12V |
| B110 | - | GND | - | - | 地 | GND |


## 




# 03_飞凌OK104xA-C2嵌入式开发平台介绍

# **第三章 飞凌OK104xA-C2嵌入式开发平台介绍**
## <font style="color:#000000;">3.1 OK104xA-C2开发板接口图 </font>
飞凌OK104xA-C2开发平台为核心板加底板的结构，采用接插件的连接方式，因底板同时支持FET1043A-C和FET1046A-C 两款核心板，所以在 PCB 丝印以及本文表示开发板名称中会出现“OK104xA-C2”的字样，用来表示本产品所兼容 CPU 系列的代称。OK104xA-C2开发板主要接口如下图所示：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533304/1720687055019-7cef6a6f-24c4-4dfb-8137-48d66514697e.jpeg)![](https://cdn.nlark.com/yuque/0/2024/jpeg/45533304/1720687055510-eee05d9b-1fa7-4e98-98d0-903fda6542d3.jpeg)

## <font style="color:#000000;">3.2 OK104xA-C2开发板尺寸图</font>


![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687055907-649ff44d-9e8b-462b-8155-4649cb09b942.png)

PCB尺寸：200mm×150mm。

制版工艺：厚度2mm，6层PCB。

电源电压：直流12V。

固定孔直径: 3.2mm

## <font style="color:#000000;">3.3 底板命名规范</font>
A - B - C + D E F : G - H

| 字段 | 字段描述 | 值 | 说明 | |
| --- | --- | --- | --- | --- |
| A | 产品线标识 | OK | 飞凌嵌入式底板/开发板 | |
| | | TCU | 飞凌嵌入式计费控制单元 | |
| - | 分段标识 | - | 当CPU的值首位是字母，将产品线标识与CPU用“-”连接；<br/>当CPU的值首位是数字，省略“-”。 | |
| B | CPU名称 | 2440 | S3C2440 | |
| | | 2416 | S3C2416 | |
| | | 6410 | S3C6410 | |
| | | 210 | S5pV210 | |
| | | 335x | AM335x | |
| | | MX6x | x代表兼容多款CPU的底板，根据具体产品对x进行描述。 | |
| | | | i.MX6Q/QP/DP/DL/D | |
| | | MX6UL | i.MX6UL | |
| | | xx18 | S5p4418 / S5p6818 | |
| | | 5718 | AM5718 | |
| | | 1052 | i.MX RT1052 | |
| | | 1061 | i.MX RT1061 | |
| | | 1012A | LS1012A | |
| | | 104xA | LS1043A/LS1046A | |
| | | A40i | A40i | |
| | | T3 | T3 | |
| | | MX8MM | i.MX8M Mini | |
| | | MX8MQ | i.MX8MQ | |
| | | MX8MPQ | i.MX8MPQ | |
| | | T507 | T507 | |
| | | 1028A | LS1028A | |
| | | 3519A | Hi3519 | |
| | | 3399 | RK3399/3399K | |
| | | 3568 | RK3568/3568J | |
| | | G2LD | RZ/G2LD | |
| | | 6254 | AM6254 | |
| - | 分段标识 | - | 参数分段符 | |
| C | 连接方式 | Sx | 邮票孔 | |
| | | Dx | 插针 | |
| | | Cx | 板对板连接器 | |
| | | Gx | 金手指 | |
| | | 注：x的内容为空或2~N，以区分同种连接方式的不同产品； | | |
| + | 分段标识 | + | | 此标识之后为配置参数部分 |
| D | 类型标识 | M | | 底板<br/>（注意：底板标识M，默认不填写） |
| | | E | | 扩展板<br/>( 蓝牙板、WiFi板、232板、485板、天线板、接口板等 ，规格的类型标识都归属到扩展板E中，不允许随意指定字母标识。<br/>如同时有2款485扩展板，则规格中“E”后面标记1和2，分别代表第几款扩展板。举例: <br/>名称：OKMX6Q-C  RS485扩展板  <br/>规格：OKMX6Q-C+<font style="color:#FF0000;">E2</font>-485：10   代表第二款485扩展板**  )** |
| | | L | | 灯板 |
| | | D | | 显示板 |
| | | K | | 按键板 |
| | | P | | 电源板 |
| E | 运行温度 | C | | 0 to 70℃     商业级 |
| | | E | | -20 to 85℃   扩展商业级 |
| | | I | | -40 to 85℃   工业级 |
| | | A | | -40 to 125℃  车规级 |
| F | PCB版本号 | 10 | | V1.0 |
| | | xx | | Vx.x |
| : | 分隔符 | : | | 此符号之后为厂家内部标识 |
| G | 连接器产地<br/> | 0 | | 国产连接器 |
| | | 1 | | 进口连接器 |
| | | N | | 不区分\无连接器 |
| - | 连接符 | - | | 等级标识连接符 |
| H | 等级标识 | PC | | 原型样品 |
| | | 空白 | | 大规模生产 |
| | | SC | | 专用的，据客户特殊要求进行专项修改时（根据某项功能修改某颗物料等情况） |




## <font style="color:#000000;">3.4 底板资源</font>
| 功能 | 数量 | 参数<sup>5</sup> |
| :---: | :---: | :---: |
| RGMII | 2 | 10/100/1000Mbps自适应，RJ-45接口 |
| SGMII<sup>3</sup> | 3 | 10/100/1000Mbps自适应，RJ-45接口 |
| USB 3.0 | 1 | 最高支持速率5G |
| TF Card | 1 |  |
| Mini PCIE<sup>1</sup> | 1 | 外接SATA硬盘 |
| PCIE X1<sup>2</sup> | 2 | 最高支持速率5G |
| RTC | 1 | 板载CR2032电池 |
| UART | 3 | TTL电平 |
| RS232 | 1 | 调试串口  |
| JTAG  | 1 | 支持NXP官方 CodeWarrior TAP调试器 |
| SFP<sup>4</sup> | 2 | 支持XFI 10G |


注1：LS1043A只能用作mini PCIE使用；

注2：仅LS1046A支持；

注3：LS1043A仅支持2路，即底板上P26，P27；

注4：LS1043A仅支持1路，即底板上P28；

注5：表中参数为硬件设计或CPU理论值；



## <font style="color:#000000;">3.5 OK104xA-C2底板说明</font>
**注：下图中元件位号有“_DNP”标识的，代表此元器件默认不焊接。**

### <font style="color:#000000;">3.5.1 底板电源</font>
底板电源为直流12V，由DC-005插座（P10）或2pin5.08mm端子（P11）引入。整板的上电开关使用S1控制Q3 MOS管实现，可以减少上电瞬间大电流对开关触点的氧化，延长开关使用寿命。

开关前后均添加泄放电阻保证开关断开后能快速泄放电容电压。



### <font style="color:#000000;">3.5.2 复位</font>
开发板左方的轻触开关K1，按下后可复位CPU及外设芯片。

RESET_REQ_B_18为CPU输出的请求复位信号，CPU出现异常（例如看门狗动作时）会拉低此信号。当CPU启动过程异常时RESET_REQ_B_18必须延时一段时间再复位CPU，给JTAG一定的时间控制CPU，所以建议添加类似位号为U13的复位延迟芯片。

核心板引出的复位相关引脚共4个，分别是CPU_TRST_B_18，RESET_REQ_B_18，SYS_RESET_B，CB_RESET_B

| **名称** | **功能** |
| --- | --- |
| CPU_TRST_B_18 | JTAG复位，同时复位CPU及CB_RESET_B |
| RESET_REQ_B_18 | CPU异常复位输出 |
| SYS_RESET_B | 核心板复位输入，同时复位CB_RESET_B |
| CB_RESET_B | 核心板复位输出，用于复位底板外设芯片 |


### <font style="color:#000000;">3.5.3 Boot配置</font>
LS104xA CPU使用RCW（Reset configuration word）来选择启动项，FET104xA-C2核心板默认选择从QSPI NOR Flash启动（底板BOOT_SEL0悬空）。



Boot配置原理图



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687056764-14bb8dc7-b284-4523-9237-5b129b81782c.png)

PCB丝印

S2拨码开关说明：

| PCB丝印 | 名称 | 功能 |
| --- | --- | --- |
| A | BOOT_SEL0 | OFF(1):QSPI启动(默认) |
| | | ON(0)：SD/EMMC启动 |
| B | SD1_REFCLK_SEL | OFF(1)：156.25MHz参考时钟（默认） |
| | | ON(0)：100MHz参考时钟 |




SD1_REFCLK_SEL控制的是SD1_REFCLK2（CPU球号为AA8和AB8）的参考时钟，请根据SerDes的具体配置来选择此时钟源。



SD/EMMC启动模式下由SD卡的插拔检测引脚SD_CD_B控制SD卡启动或EMMC启动，插入SD卡后SD_CD_B引脚被拉低，CPU从SD卡启动，未插入SD卡时 SD_CD_B引脚默认拉高，CPU从核心板板载EMMC启动。

| 信号 | 状态 | 模式 |
| --- | --- | --- |
| SD_CD_B | 0 | SD卡 |
| | 1 | EMMC |


### <font style="color:#000000;">3.5.4 串口</font>
P20为标准9针RS-232串口，采用DB9弯头公座与电脑相连。若电脑无RS-232串口，可用USB转串口模块将串口引出。

P14,P15,P17分别为UART2，UART3，UART4 3.3V TTL电平串口。





**注意:**

**为方便后期调试，请用户在自行设计地板时将此调试串口引出。**

### <font style="color:#000000;">3.5.5 PCIE接口</font>
OK104xA-C2底板默认留有3个PCIE接口，分别为mini PCIE接口P21，PCIE X1接口P2，P23,其中FET1043A-C核心板只支持P21接口。

其中P21 mini PCIE接口在LS1046A上可配置为PCIE也可配置为mSATA接口。（mSATA接口中RX的极性与PICE标准中RX极性相反，软件支持更换，按照mini PCIE标准设计即可）

P2接口同时支持USB3.0和PCIEX1协议，可外接华为/移远的5G模块。

P23接口可外接PCIE接口WiFi模块。

因SATA硬盘/5G模块/WiFi模块功耗较高，其电源均使用单独DCDC提供。

注：PCIE设备不支持热插拔，对应模块电源应与底板同时上电。

![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687059285-5cef780b-3514-474a-b696-fea9cb5eea01.png)

**注意：**

**1、请保留PCIE复位引脚，确保每次上电PCIE设备均有效复位。**

**2、PCIE时钟芯片改为RC19004A100GNL。**

### <font style="color:#000000;">3.5.6 TF卡</font>
开发板上提供了一个自弹式TF卡座，支持SD UHS-1速度模式。 

**注意：**

**1.TF数据线上拉的电平匹配已由核心板完成，底板可不再做上拉处理；**

**2.设计时请注意TF卡插拔检测状态影响启动项，详见 3.5.3章节Boot配置。**

### <font style="color:#000000;">3.5.7 RGMII</font>
OK104xA-C2开发板提供两路RGMII类型千兆PHY接口，均使用YT8521SH芯片，一路PHY在核心板上，直接引出到底板RJ45，一路在底板上，RGMII信号接到了U10上。

**注意:1.** YT8521SH**的00000地址为广播地址，配置时请谨慎使用。**

**2.PCB设计时要保证PHY芯片有一个完整的参考地。**

**3.底板的RGMII连接的PHY芯片在硬件上裁减掉之后，核心板上的RGMII连接的**YT8521SH**芯片则无法正常工作，请尽量避免此种方案配置，如果一定要这样使用，请联系飞凌公司做软件上的修改。**

### <font style="color:#000000;">3.5.8 JTAG仿真调试接口</font>
开发板提供了JTAG调试接口（P19），方便用户通过NXP官方仿真设备对LS104xA进行仿真调试。



**注意：****复位信号CPU_TRST_B_18不可以悬空，无论是否使用JTAG功能，此引脚都需要上拉到1.8V**

### <font style="color:#000000;">3.5.9 SGMII接口</font>
	OK104xA-C2底板提供3路SGMII PHY，分别接到U18、U19、U20的 YT8521SH 芯片上。其中U19、U20对应的SGMII仅仅可以在LS1046A CPU上可以使用，LS1043A上为空接状态。









网络接口定义：



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687061954-60c73b42-184c-4607-a7db-92fc98f81f01.png)

| **连接器** | **功能** | **FET1046A-C** | **FET1043A-C** |
| --- | --- | --- | --- |
| P26 | 底板SGMII | 支持 | 支持 |
| P27上 | 底板SGMII | 支持 | 不支持 |
| P27下 | 底板SGMII | 支持 | 不支持 |
| P13上 | 核心板RGMII | 支持 | 支持 |
| P13上 | 底板RGMII | 支持 | 支持 |


### <font style="color:#000000;">3.5.10 USB3.0接口</font>
	USB3.0接口，使用TPS2065进行电流检测VBUS电源控制。为消除干扰，保证USB不会误报错，建议添加C135 ,C145 100pF电容。





### <font style="color:#000000;">3.5.11 SFP接口</font>
OK104xA-C2底板提供2个SFP接口，其中P30仅在LS1046A CPU上可用，LS1043A CPU上为空接状态。









**注意：**

**1、由于SPF接口理论最大速率可达10Gbps，在绘制PCB时，应尽量在表层走线，减少stub。**

**2、由于时钟buffer芯片ICS8304AMI不易采购，U21,U23的参考时钟改为有源晶振提供。**

**3、由于光模块可能会通过IIC总线进行配置，开发板中将两路光模块分别接到了IIC3和IIC4上，并预留了0Ω电阻，默认空焊，当需要进行配置时，焊接0Ω电阻，同时需要注意光模块地址是否会与底板其他设备有冲突。**

### <font style="color:#000000;">3.5.12 用户按键</font>
OK104xA-C2底板引出1路用户按键K2，功能可自定义。



### <font style="color:#000000;">3.5.13 LED</font>
OK104xA-C2底板引出3路LED D1，其中黄色为底板3.3V电源指示，绿色为5G网络状态指示，红色为用户自定义LED。









# 04_连接器尺寸图

核心板连接器规格如下：



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687029540-67600bd9-daf0-46ed-b627-9ab490a763ff.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687029753-794a0c8c-3e86-4b20-a2e2-116ee4af3829.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687030023-a7cc01fa-04d7-484c-8cd0-9bb37f964bbf.png)

底板连接器规格如下：



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687030259-6a34d84a-06d8-4854-ac60-96e2664d77d8.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687030569-955559ec-fedf-4d34-9128-2b4ff3f41a76.png)



![](https://cdn.nlark.com/yuque/0/2024/png/45533304/1720687030964-b5045ace-1cda-45a4-8387-2037762eabb4.png)







# 05_功耗实测数据

下表为供电电压为12V时OK1046A的功耗实测数据：

| 序号 | 测试项目 | 开发板（A） | 核心板(A) |
| --- | --- | --- | --- |
| 1 | 启动瞬时电流 | 1.58 | 1.27 |
| 2 | 零负载电流 | 1.15 | 0.85 |
| 3 | 满负载电流 | 1.5 | 1.19 |








# 06_核心板Lmbench测试数据

数据读写测试：

**V1.3版本核心板Lmbench测试结果**

| Cache/Memory  | rd  | wr  | rdwr  | cp  | frd  | fwr  | fcp  | bzero  | bcopy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| L1(MB/s)  | 28556 | 20928 | 19188 | 19760 | 7180 | 7178 | 6121 | 17892 | 14090 |
| L2(MB/s)  | 15767 | 17624 | 11256 | 9119 | 6780 | 7142 | 6522 | 11999 | 10137 |
| DDR(MB/s)  | 6440 | 2349 | 2387 | 1624 | 6431 | 6478 | 2726 | 6562 | 2718 |




**V2.0版本核心板Lmbench测试结果**

| Cache/Memory  | rd  | wr  | rdwr  | cp  | frd  | fwr  | fcp  | bzero  | bcopy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| L1(MB/s)  | 28552 | 20931 | 19191 | 19392 | 7181 | 7176 | 5666 | 17345 | 14051 |
| L2(MB/s)  | 15767 | 17671 | 11255 | 9059 | 6757 | 7142 | 6515 | 13693 | 10067 |
| DDR(MB/s)  | 9858 | 3649 | 3771 | 2740 | 6432 | 7191 | 5307 | 11026 | 5306 |










