# 00_inux5.10.198+Qt5.15.10_ 用户使用手册

版本：V1.1  

发布日期：2025.06.21 

文件密级：□绝密 □秘密 □内部资料 ■公开

# 免责声明
本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。

保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。  

# 适用范围

OK3562-C开发板目前提供了Linux系统的相关资料，本手册针对Linux5.10.198系统的相关功能测试进行说明，用户要选择与开发板中镜像一致的资料进行操作。用户可以通过本公司提供的网盘链接获取软件和硬件的文档及源码。

资料下载网站为：[http://bbs.witech.com.cn/forum.php?gid=64](http://bbs.witech.com.cn/forum.php?gid=64)，用户需要通过销售获取下载权限方可自行下载。

⁉️**注意：**

+ 详细资料参看OK3562-C Linux用户资料,本文中提到用户资料的所在目录以 OK3562-C Linux用户资料为根目录。

# 更新记录

| **<font style="color:#000000;">日期</font>** | **<font style="color:#000000;">手册版本</font>** | **<font style="color:#000000;">核心板版本</font>** | **<font style="color:#000000;">底板版本</font>** | **<font style="color:#000000;">更新内容</font>**             |
| :------------------------------------------: | :----------------------------------------------: | :------------------------------------------------: | :----------------------------------------------: | ------------------------------------------------------------ |
|                   20240524                   |                       V1.0                       |                        V1.0                        |                 V1.0及其以上版本                 | OK3562-C Linux软件手册初版                                   |
|                   20250621                   |                       V1.1                       |                        V1.0                        |                 V1.0及其以上版本                 | <font style="color:rgb(0, 0, 0);">修改CAN和NPU测试中的描述 </font> |

# 概 述
<font style="color:#333333;">本手册以使用户快速熟悉产品，了解接口功能和测试方法为目的，主要讲述了开发板接口功能的测试，烧写镜像方法，以及使用过程中出现的一些问题如何排查。在测试过程中，对一些命令进行了注释，方便</font>用户理解，以实用够用为主。涉及到内核编译、相关应用编译方法，开发环境搭建等请参考飞凌提供的《OK3562-C_Linux_用户编译手册》

本手册各部分主要内容如下：

+ 第一部分产品的整体概述，简单介绍了开发板在接口资源、内核源码中相关驱动路径、开发板支持的烧写和启动方式，以及资料中重点部分的说明；
+ 第二部分产品的快速开机启动，可采用串口登录和网络登录两种方式；
+ 第三部分产品的桌面功能及QT界面功能测试，命令行操作进行功能测试；
+ 第四部分产品的多媒体测试，包括了摄像头的播放测试以及视频硬件编解码测试；
+ 第五部分产品的镜像更新，主要描述更新镜像到存储设备的方法，用户可根据实际情况选择对应的烧录方式。

       本手册中一些符号及格式的相关说明：

| **表现形式** | **含义** |
| --- | --- |
| ⁉️  | 注意或者是需要特别关注的信息，一定要仔细阅读 |
|  📚    | 对测试章节做的相关说明 |
|                 🛤️ | 表示相关路径 |
| <font style="color:#2F4BDA;">蓝色</font> | 指在命令行输入的命令，需要手动输入 |
| 黑色字体 | 输入命令后的串口输出信息 |
| **黑色加粗** | 串口输出信息中的关键信息 |
| // | 对输入指令或输出信息的解释内容 |
| 用户名@主机名 | root@ok3562: 开发板串口登录账户信息<br/>forlinx@ok3562：开发板远程登录账户信息<br/>forlinx@Linux：开发环境Linux账户信息<br/>用户可通过该信息确定功能操作的环境 |


例：查看6221A-SRC模块驱动的加载状态：

```plain
root@ok3562:~$ lsmod                                         //查看已加载的模块
Module                  Size  Used by
8821cs               2793472  0
```

+ root@ok3562：用户名为root，主机名为forlinx，表示在开发板上使用root用户进行操作。
+ // ：对指令操作或打印信息的解释内容，不需要输入。
+ <font style="color:#0000FF;">lsmod</font>：灰底蓝色字体，表示需要手动输入的相关命令。
+ **8821cs   2793472  0**：灰底黑色字体为输入命令后的输出信息，加粗字体为关键信息，在此处表示已加载6221A-SRC模块驱动。


# 01_OK3562开发板介绍

## **<font style="color:rgb(38, 38, 38);">1.1 OK3562开发板简介</font>**
<font style="color:rgb(38, 38, 38);"></font><font style="color:rgb(38, 38, 38);">RK3562J是基于ARM64架构的低功耗高性能处理器，它包括4核Cortex-A53和1核Conrtex-M0以及独立的NEON协处理器，可应用于计算机、手机、个人移动互联网，数字多媒体设备。  
</font><font style="color:rgb(38, 38, 38);">飞凌OK3562-C开发平台核心板和底板采用接插件的连接方式，主要接口如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720418437155-411d3da0-4c0d-4d73-a18a-c2bfac3554cc.jpeg?x-oss-process=image%2Fformat%2Cwebp%2Finterlace%2C1)

正面视图

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418437554-c4288f3d-892a-4c80-b8de-0bde8c386265.png?x-oss-process=image%2Fformat%2Cwebp)

反面视图

📖**<font style="color:rgb(38, 38, 38);"> 请阅读：</font>**<font style="color:rgb(38, 38, 38);">  
</font><font style="color:rgb(38, 38, 38);">本软件手册中不再对硬件参数进行叙述，在参考本手册进行软件开发前请阅读“02-用户资料\03-硬件资料\02-手册”路径下的“OK3562-C_硬件手册”，以了解产品命名规则和您所使用产品的硬件配置信息，这样有助于您对本产品的使用。</font>

## <font style="color:rgb(38, 38, 38);"></font>**<font style="color:rgb(38, 38, 38);">1.2 Linux 5.10.198系统软件资源介绍</font>**
| **<font style="color:rgb(38, 38, 38);">设备</font>**<font style="color:rgb(38, 38, 38);"></font> | **<font style="color:rgb(38, 38, 38);">驱动程序源代码在内核中的位置</font>** | **<font style="color:rgb(38, 38, 38);">设备名</font>**<font style="color:rgb(38, 38, 38);"></font> |
| --- | --- | --- |
| <font style="color:rgb(38, 38, 38);">LCD背光驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/video/backlight/pwm_bl.c</font> | <font style="color:rgb(38, 38, 38);">/sys/class/backlight</font> |
| <font style="color:rgb(38, 38, 38);">USB接口U盘</font> | <font style="color:rgb(38, 38, 38);">drivers/usb/storage/</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">USB鼠标</font> | <font style="color:rgb(38, 38, 38);">drivers/hid/usbhid/</font> | <font style="color:rgb(38, 38, 38);">/dev/input/mice</font> |
| <font style="color:rgb(38, 38, 38);">以太网</font> | <font style="color:rgb(38, 38, 38);">drivers/net/ethernet/stmicro/stmmac</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">SD/micro TF卡驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/mmc/host/dw_mmc-rockchip.c</font> | <font style="color:rgb(38, 38, 38);">/dev/block/mmcblk1pX</font> |
| <font style="color:rgb(38, 38, 38);">EMMC驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/mmc/host/dw_mmc-rockchip.c</font> | <font style="color:rgb(38, 38, 38);">/dev/block/mmcblk2pX</font> |
| <font style="color:rgb(38, 38, 38);">摄像头</font> | <font style="color:rgb(38, 38, 38);">drivers/media/i2c/ov13855.c   </font><font style="color:rgb(38, 38, 38);">drivers/media/i2c/ov5645.c</font> | <font style="color:rgb(38, 38, 38);">/dev/videoX</font> |
| <font style="color:rgb(38, 38, 38);">LCD 控制器</font> | <font style="color:rgb(38, 38, 38);">drivers/gpu/drm/rockchip/rockchip_drm_vop.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">MIPI CSI</font> | <font style="color:rgb(38, 38, 38);">drivers/phy/rockchip/phy-rockchip-mipi-rx.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">MIPI DSI</font> | <font style="color:rgb(38, 38, 38);">drivers/phy/rockchip/phy-rockchip-inno-mipi-dphy.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">LCD触摸驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/input/touchscreen/goodix.c   </font><font style="color:rgb(38, 38, 38);">drivers/input/touchscreen/edt-ft5x06.c</font> | <font style="color:rgb(38, 38, 38);">/dev/input/eventX</font> |
| <font style="color:rgb(38, 38, 38);">RTC实时时钟驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/rtc/rtc-rx8010.c   </font><font style="color:rgb(38, 38, 38);">drivers/rtc/rtc-pcf8563.c</font> | <font style="color:rgb(38, 38, 38);">/dev/rtc0</font> |
| <font style="color:rgb(38, 38, 38);">串口</font> | <font style="color:rgb(38, 38, 38);">drivers/tty/serial/8250/8250_dw.c</font> | <font style="color:rgb(38, 38, 38);">/dev/ttySX</font> |
| <font style="color:rgb(38, 38, 38);">按键驱动</font> | <font style="color:rgb(38, 38, 38);">drivers/input/keyboard/adc-keys.c</font> | <font style="color:rgb(38, 38, 38);">/dev/input/eventX</font> |
| <font style="color:rgb(38, 38, 38);">LED</font> | <font style="color:rgb(38, 38, 38);">drivers/leds/leds-gpio.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">I2S</font> | <font style="color:rgb(38, 38, 38);">sound/soc/rockchip/rockchip_i2s.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">PMIC</font> | <font style="color:rgb(38, 38, 38);">drivers/mfd/rk808.c   </font><font style="color:rgb(38, 38, 38);">drivers/regulator/rk808-regulator.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">PCIE</font> | <font style="color:rgb(38, 38, 38);">drivers/pci/controller/pcie-rockchip.c</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">看门狗</font> | <font style="color:rgb(38, 38, 38);">drivers/watchdog/dw_wdt.c</font> | <font style="color:rgb(38, 38, 38);">/dev/watchdog</font> |
| <font style="color:rgb(38, 38, 38);">SPI</font> | <font style="color:rgb(38, 38, 38);">drivers/spi/spi-rockchip.c</font> | <font style="color:rgb(38, 38, 38);">/dev/spidev2.0</font> |
| <font style="color:rgb(38, 38, 38);">PWM</font> | <font style="color:rgb(38, 38, 38);">drivers/video/backlight/pwm_bl.c</font> | <font style="color:rgb(38, 38, 38);"></font> |


## **<font style="color:rgb(38, 38, 38);">1.3 eMMC存储器分区表</font>**
<font style="color:rgb(38, 38, 38);"></font><font style="color:rgb(38, 38, 38);">下面表格是Linux操作系统的eMMC存储器分区信息（计算时一个块大小为512bit）：</font>

| **<font style="color:rgb(38, 38, 38);">分区索引</font>**<font style="color:rgb(38, 38, 38);"></font> | **<font style="color:rgb(38, 38, 38);">名称</font>**<font style="color:rgb(38, 38, 38);"></font> | **<font style="color:rgb(38, 38, 38);">偏移/block</font>**<font style="color:rgb(38, 38, 38);"></font> | **<font style="color:rgb(38, 38, 38);">大小/block</font>**<font style="color:rgb(38, 38, 38);"></font> | **<font style="color:rgb(38, 38, 38);">内容</font>**<font style="color:rgb(38, 38, 38);"></font> |
| --- | --- | --- | --- | --- |
| <font style="color:rgb(38, 38, 38);">N/A</font> | <font style="color:rgb(38, 38, 38);">security</font> | <font style="color:rgb(38, 38, 38);">0x00000000</font> | <font style="color:rgb(38, 38, 38);">0x00004000</font> | <font style="color:rgb(38, 38, 38);">MiniLoaderAll.bin</font> |
| <font style="color:rgb(38, 38, 38);">1</font> | <font style="color:rgb(38, 38, 38);">uboot</font> | <font style="color:rgb(38, 38, 38);">0x00004000</font> | <font style="color:rgb(38, 38, 38);">0x00002000</font> | <font style="color:rgb(38, 38, 38);">uboot.img</font> |
| <font style="color:rgb(38, 38, 38);">2</font> | <font style="color:rgb(38, 38, 38);">misc</font> | <font style="color:rgb(38, 38, 38);">0x00006000</font> | <font style="color:rgb(38, 38, 38);">0x00002000</font> | <font style="color:rgb(38, 38, 38);">misc.img</font> |
| <font style="color:rgb(38, 38, 38);">3</font> | <font style="color:rgb(38, 38, 38);">boot</font> | <font style="color:rgb(38, 38, 38);">0x00008000</font> | <font style="color:rgb(38, 38, 38);">0x00020000</font> | <font style="color:rgb(38, 38, 38);">boot.img</font> |
| <font style="color:rgb(38, 38, 38);">4</font> | <font style="color:rgb(38, 38, 38);">recovery</font> | <font style="color:rgb(38, 38, 38);">0x00028000</font> | <font style="color:rgb(38, 38, 38);">0x00040000</font> | <font style="color:rgb(38, 38, 38);">recovery.img</font> |
| <font style="color:rgb(38, 38, 38);">5</font> | <font style="color:rgb(38, 38, 38);">backup</font> | <font style="color:rgb(38, 38, 38);">0x00068000</font> | <font style="color:rgb(38, 38, 38);">0x00010000</font> | <font style="color:rgb(38, 38, 38);"></font> |
| <font style="color:rgb(38, 38, 38);">6</font> | <font style="color:rgb(38, 38, 38);">rootfs</font> | <font style="color:rgb(38, 38, 38);">0x00078000</font> | <font style="color:rgb(38, 38, 38);">0x00c00000</font> | <font style="color:rgb(38, 38, 38);">rootfs.img</font> |
| <font style="color:rgb(38, 38, 38);">7</font> | <font style="color:rgb(38, 38, 38);">oem</font> | <font style="color:rgb(38, 38, 38);">0x00c78000</font> | <font style="color:rgb(38, 38, 38);">0x00040000</font> | <font style="color:rgb(38, 38, 38);">oem.img</font> |
| <font style="color:rgb(38, 38, 38);">8</font> | <font style="color:rgb(38, 38, 38);">amp</font> | <font style="color:rgb(38, 38, 38);">0x00cb8000</font> | <font style="color:rgb(38, 38, 38);">0x00002000</font> | <font style="color:rgb(38, 38, 38);">amp.img</font> |
| <font style="color:rgb(38, 38, 38);">9</font> | <font style="color:rgb(38, 38, 38);">userdata</font> | <font style="color:rgb(38, 38, 38);">0x00cba000</font> | <font style="color:rgb(38, 38, 38);"></font> | <font style="color:rgb(38, 38, 38);">userdata.img</font> |


<font style="color:rgb(38, 38, 38);">  
</font><font style="color:rgb(38, 38, 38);">  
</font>

  




# 02_快速开机启动

## 2.1 开机前的准备
OK3562开发板有串口登录和网络登录两种系统登录方式，系统开机前硬件准备：

+ 12V3A DC电源
+ 调试串口线（串口登录使用）

开发板上的调试串口为Type-C USB插孔，用户可以使用USB Type-A转Type-C线连接开发板和PC机，以便查看开发板状态。

+ 网线（网络登录使用）
+ 屏幕，根据开发板接口连接屏幕（不需要显示的可以不接）

![](https://cdn.nlark.com/yuque/0/2024/png/45201767/1730773402955-b39ed59a-e86f-4f98-a7e1-ae880aedc5b4.png)

⚠️ **注意：图中标出的调试串口实际上是UART0和UART9共用一个Type-C接口，其中UART9为开启AMP功能时裸核的调试串口（需要将拨码开关S4拨为UART）。**

## 2.2 相关驱动安装
+ 使用02-用户资料\01-软件资料\04-工具\DriverAssitant_v5.1.1.zip进行安装rockchip驱动
+ 解压完成后直接运行DriverInstall.exe，为确保安装最新的驱动，请先点击驱动卸载，再驱动安装
+ 使用02-用户资料\01-软件资料\04-工具\CH343SER.EXE进行安装串口驱动

## 2.3 串口登录方式
OK3562-C平台调试串口使用的是Type-C接口，板载USB转UART芯片，无需客户购买USB转串口调试工具，使用极其简单方便。

### 2.3.1  串口连接设置
📖 **说明：**

+ **串口设置：波特率115200、数据位8、停止位1、无校验位、无流控制**
+ **串口终端免账户登录**
+ **软件需求：PC端Windows系统需要安装串口终端软件，串口终端软件有多种，可自行使用自己熟悉的串口终端软件**

以下我们以putty为例介绍串口的登录方式：

**步骤1：**首先需要确认连接电脑的串口端口号，从设备管理器中查看串口端口号，以电脑实际识别的端口号为准。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417652369-c946e9c8-f6b4-450a-a2d9-c9cd0527ed2f.png)

**步骤2：**打开putty并设置，serial line根据使用的电脑COM口设置，波特率115200

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417652635-c2ca3610-6708-4704-ac4a-90416d6b9c76.png)

**步骤3：**上述设置完成后可以在Saved Sessions输入电脑使用的COM口，下图以COM24为例，将设置保存，之后再打开串口时，直接点击保存的端口号即可。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417652851-8f35def3-7095-4026-b2c3-e32f6294f73b.png)

**步骤4：**打开开发板的电源开关，串口会有打印信息输出，免密登录。

```plain
input-event-daemon: Adding device: /dev/input/event9...
input-event-daemon: Start listening on 12 devices...
done
root@ok3562:/# [   37.424104] vbus5v0_typec0: disabling
[   37.424151] vbus5v0_typec1: disabling
```

### 2.3.2  串口登录常见问题
USB转串口需要安装驱动程序（02-用户资料\01-软件资料\04-工具\CP210x_Windows_Drivers.zip）

建议使用质量好的串口线以避免出现乱码情况

## 2.4 网络登录方式
### 2.4.1  网络连接测试
📖 **说明：**

+ **出厂时网卡默认配置为静态IP，IP地址为192.168.0.232，更改静态IP的方法可参考“3.2.17 以太网配置”测试章节；**
+ **测试时电脑和开发板需要在同一网段。**

在进行网络登录前，需要先确保电脑和开发板直连的网络连接正常，可通过ping指令测试电脑和开发板的连接状态。具体方法操作如下：

1、将开发板的eth0和电脑通过网线连接，给开发板上电，内核启动后核心板上会有蓝色心跳灯闪烁，与电脑连接的网卡在正常启动后网卡灯快速闪烁，此时可以测试网络连接。

2、**关闭电脑防火墙（此处不作关闭防火墙的介绍，电脑通用操作）**，打开电脑的运行命令

3、使用cmd打开电脑管理员界面，使用ping指令测试电脑和开发板的网络连接状态

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417653045-77232463-9341-42e0-99fd-fff6c8c185f3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417653364-4f5e0630-f435-4a4d-9c88-23a027ea9bcb.png)

有数据返回，网络连接正常。

### 2.4.2  SSH服务器
📖 **说明：**

+ **出厂时网卡默认配置为静态IP，IP地址为192.168.0.232，更改静态IP的方法可参考“3.2.17 以太网配置”测试章节**
+ **登录为forlinx用户，密码forlinx**
+ **登录为root用户，密码root**

1、使用ssh登录开发板

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417653640-cd0cf583-62bc-4715-824a-58f2939f6143.png)

点击“Open”,出现如下对话框，点击“是”进入登录界面

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417654059-94355051-1e28-4cfd-8a4b-f559d4ff136a.png)



```plain
Login as：forlinx
forlinx@192.168.0.232's password:               //按照提示输入开发板forlinx账户的密码forlinx
forlinx@ok3562:~#
```

### 2.4.3  FTP和SFTP
📂** 路径：OK3562-C（Linux）用户资料\工具\FileZilla***

OK3562开发板支持 FTP和SFTP 服务并启动时已自动开启，设置好 IP 地址后就可以作为一台 SFTP 服务器。

下面以SFTP为例介绍如何利用filezilla工具进行文件传输。

在 windows上安装好filezilla工具，并按照下图所示步骤进行设置,用户名和密码均为forlinx。

打开filezilla工具，点击文件，选择站点管理器（site Manager)。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417654405-e51665a5-81c7-4442-a2ae-e8cc99e78fff.png)

登录成功后便可以进行上传下载操作。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417654928-2b604387-bb81-4ac6-a13d-02437d5c0800.png)

## 2.5 屏幕切换
OK3562支持MIPI DSI、LVDS屏幕接口，只能支持1个屏显示。目前屏幕切换控制方式有三种：uboot菜单动态控制；内核设备树指定；QT UbootMenu应用程序控制。

### 2.5.1  uboot菜单动态控制
该方式在现有已支持屏幕的基础上不需要重新编译和烧写，即可切换屏幕。

在uboot自启动过程中串口终端按下space空格按键，即可弹出控制选项：

```plain
Hit key to stop autoboot('Spacebar'):  0
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type:mipi
3:amp start:off
4:combphy type:usb
---------------------------------------------
```

终端输入2，进行屏幕切换。参考“4.2.29  Uboot菜单” 

### 2.5.2  内核设备树指定
该方式不需要连接串口终端，系统镜像默认为所期望的配置选择，适合量产。但需要修改设备树，重新生成一次系统镜像。

⚠️ **注意：该方式优先级高于uboot屏幕选择，在设备树修改后，uboot的选择不会生效。**

设备树路径为：kernel/arch/arm64/boot/dts/rockchip/OK3562-C-common.dtsi 

内核源码中，打开设备dtsi文件，找到forlinx-control节点，如下：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417655244-cf68dda2-b8e9-41e7-af19-85b8fea65d80.png)

该节点默认disabled状态，需要改为okay使能节点。根据屏幕需求更改。

**参数说明：**

| **参数** | **含义** |
| :---: | :---: |
| status | 描述节点状态：disabled为关闭节点，okay使能节点 |
| disp_type | 指定mipi or lvds屏显示。 |


用户根据需要更改设置参数，保存后，需要重新编译生成镜像。

**设置举例**:

使用lvds屏显示。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417655456-cb2ffa1e-8431-4ab1-a170-b82bfb1dcdf9.png)

保存后，重新编译生成镜像。

### 2.5.3  QT UbootMenu应用程序控制
[参考3.1.17  UbootMenu](https://forlinx-book.yuque.com/rh74yu/ok3562/hdfeyd97du7gi8n2#xPyoC)

## 2.6 系统关闭
一般情况下直接关闭电源即可，如果有数据存储、功能使用等操作，操作过程中不要随意断电，以防出现文件不可逆损坏。为确保数据完全写入，可输入 sync 命令完成数据同步后再关闭电源。

⚠️ **注意：用户依据核心板设计的产品，若在使用中存在意外掉电导致系统异常关闭的情景，可在设计中加入掉电保护等措施。**



# 03_OK3562平台界面功能使用及测试

OK3562平台对Qt的支持非常完善，特别是多媒体相关的类，例如视频解码播放、摄像头、视频录制等，均能结合硬件编解码以及OpenGL达到最佳效果。

## 3.1 桌面功能测试
### 3.1.1  界面功能简介
开发板启动后桌面显示如下：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417666181-97e8edf0-a899-44c8-a864-e5e77c6f2276.png)

### 3.1.2  硬件解码体验
	点击桌面图标进入打开视频播放器video player。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417666490-b1592cbf-8e29-4d12-bdb1-8fad5e6947ee.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417666946-d492a7d7-638a-4d45-916e-53f5a6d86da1.png)

⚠️** 注意：测试视频文件所在目录：/userdata/media/*.mp4**

### 3.1.3  OpenGL测试
OK3562支持OpenGL ES3.2,点击桌面图标进行OpenGL测试。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417667252-b669ae1a-e4b1-4d6e-9375-3d551571ea04.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417667643-205cee09-c967-46fa-910a-e6f5507c97cc.jpeg)

### 3.1.4  播放音乐测试
“musicplayer”是一款简单的音频测试应用，可用来测试声卡功能是否正常，也可用来作为一款简单的音频播放器。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417667864-988c35ee-7595-49ff-8c34-bcbd534ab54f.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417668047-619205fa-d4bb-4973-9442-0f2ec7c83d4c.jpeg)

应用界面

点击左下角的按钮，选择测试音频 /userdata/media/test.mp3

### 3.1.5  4G测试
⚠️** 注意：此测试需要插入可上网的SIM卡，注意事项可以参考本手册的命令行功能测试 4G章节。**

测试支持4G模组（EC20），在断电情况下插入4G模组和SIM卡，上电系统启动后打开测试应用。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417668348-585760c6-d57a-4312-a9f8-286595ed0d0f.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417668538-6c3dab1c-2eff-4bec-8297-5e79bb4855bf.png)

点击connect按钮，程序将自动进入拨号流程并获取IP设置DNS等

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417668807-5dbde941-f04f-42a2-af8d-3af71f8867b7.png)

点击ping按钮进行测试

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417669155-ecacded0-2bcd-408b-9a47-cbcff79124f3.png)

### 3.1.6  WIFI测试
“WIFI”是一款配置wifi的工具，OK3562平台默认板载6221A-SRC（RTL8821CS）模块。wifi模块在系统中会以wlan结点的形式存在，此测试对应wlan0（多设备时使用其它对应节点）：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417669341-739a22d7-ace1-4f5b-9db5-e21cb35038ce.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417669543-7bf02243-16fd-46ff-9d95-9f0c739d236f.jpeg)

应用界面

选中wlan0，在SSID栏中输入需要使用wifi连接的路由器名称，PAWD栏输入路由器密码，点击connect，即可通过wifi连接路由器，在IP栏中输入有效ip后，点击ping，可查看当前使用wifi网络是否畅通。

打开Wifi测试应用，输入正确的网络名称及密码，点击connect。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417669771-5248f8d6-f1ab-49b2-9066-18d500f6f775.png)

连接成功后可点击ping进行网络测试

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417670021-fcfbdedf-2532-401d-9c7b-f5156d545203.png)

### 3.1.7  网络配置测试
OK3562启动时eth0默认设置为static，可通过“Network”网络配置应用来选择 dhcp和static两种模式，static模式可配置ip地址、子网掩码、网关、DNS。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417670236-95f31c04-1439-4dae-bd45-8cb27d6a5717.png)

应用图标

DHCP模式界面如下：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417670841-cdf93cc4-07a3-4d22-92d3-bfe765899391.jpeg)

选中DHCP，在interface中选中需要配置的网卡设备，点击界面下方的Apply and Restart Network，即可重启网络并自动获取到ip。

static模式界面如下：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417671088-cd701fbb-b498-49fe-a689-bb0f128f8a8d.jpeg)

在interface中选中需要配置的网卡设备，在ip栏中输入要设定的ip，netmask栏中输入子网掩码，geteway栏中输入网关，dns栏中输入DNS。

注：在STATIC模式下设置的ip等信息会被保存至系统的相关配置文件中，因此每次重启都会使用本次设置的网络信息；而在DHCP模式下配置的网络信息则不需注意这一点，每次重新启动都会动态分配一次ip地址。

### 3.1.8  Ping测试
“Ping”是网络测试常用命令ping的界面版应用:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417671316-6cd27dc4-35ea-4210-a228-3f9e3bd4cf24.png)

在hostname一栏中写需要ping的目标ip，点击ping键后，result栏中会提示ping的结果，点击stop可停止ping测试，点击clear清空result中的信息。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417671577-2a67d0ff-3784-490d-b011-185caee8256a.png)

### 3.1.9  浏览器测试
“DemoBrowser”是一款简单实用的网络浏览器，在使用时请保证网络通畅，访问外网前需保证dns可用，浏览器启动时默认访问飞凌嵌入式官方网站，界面如下：

⚠️ **注意：如果开发板的时间异常会导致证书问题。使用浏览器后不可以立即关闭电源或者在关闭电源前在命令行使用sync命令，否则可能导致浏览器异常退出，无法正常运行，只能重新烧录解决。**

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417671857-74ed84ea-6805-42e5-989d-474e1c4e91aa.png)

通过上方导航栏 File->Quit 退出该浏览器。

### 3.1.10  看门狗测试
“WatchDog”是用来测试看门狗功能是否正常的应用

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417672177-e78efff9-8460-476b-bc51-217d84bb258a.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417672436-3e31ca5e-1b33-4d74-a750-5b8b2eb5f815.jpeg)

应用界面

勾选feed dog，点击open watchdog按键，此时看门狗功能会被启动，程序会进行喂狗操作，正常情况下系统不会重启；取消勾选feed dog时，点击open watchdog按键，看门狗功能会被启动，程序不进行喂狗操作，在打开看门狗约10s后，系统进入重启，说明看门狗功能正常。

### 3.1.11  按键测试
“Keypad”用于测试平台自带按键是否可用：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417672658-04c01b7c-a3a7-4ca1-88fc-38f2858709de.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417672897-d2c36032-e7fc-48b6-aeab-a0896895c358.jpeg)

应用界面

OK3562平台默认将4个物理按键V+、V-、Home、ESC分别配置为音量+键、音量-键，Home、返回键。当按下按键时测试应用中的对应按键会变为蓝色，说明按键功能正常。

“Exit”退出当前例程，返回到系统桌面。

### 3.1.12  RTC测试
通过“RTC”应用，可查看和设置当前的系统时间：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417673244-81838d8f-0c72-47e6-b63b-6ac8d9e821d6.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417673493-22d3d302-ed26-4b4d-b7fc-4a50a3764fa3.jpeg)

应用界面

点击set后，即可进行时间的设置，设置完毕点击保存，即可设置完成。

在安装RTC备用电池的情况下，断电重启开发板以确认RTC时钟设置成功。

### 3.1.13  Camera测试
点击桌面图标进入打开Camera，该测试程序支持USB Camera也支持OV13855和OV5645。插入USB Camera，这里以RMONCAM 720P为例。

⚠️** 注意：该应用需要连接摄像头后再打开。**

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417673759-9cf0f95f-7979-491a-b458-d5517100e3bd.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417673981-ab8ce1a2-a069-4571-8d99-cda8fa26f30c.jpeg)

打开应用后点击UVC Carmera，即可启动摄像头预览。

![](https://cdn.nlark.com/yuque/0/2024/png/45576790/1722218411300-e4824847-5eeb-40e7-9ea6-6d8d8cf9c669.png)

Video Mode模式下可以点击record按钮进行录像操作，点击recording按钮即可停止录像，生成的视频文件位于/userdata/VIDEO0.MOV

可以使用gst-play-1.0 /userdata/VIDEO0.mov 命令进行播放测试。

点击Video Mode按钮，可以切换到拍照模式，点击Capture可以进行拍照操作。

![](https://cdn.nlark.com/yuque/0/2024/png/45576790/1722218425115-0b9f51f2-5300-463e-99de-3688a456611a.png)

生成的文件位为/userdata/PIC0.jpg

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417675235-d9e50c99-9ff6-4a35-8468-6c5fee72c104.png)

### 3.1.14  UART测试
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417675445-75a88339-39db-44d0-8e0b-fa22bbfb8f74.png)

        应用图标

本次测试通过短接开发板上的两个RS485串口，来进行串口测试。

1、点击UART测试图标，进入如下界面，进行串口参数设置：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417675669-65b7392d-6502-4a9c-b25d-5b378d404585.jpeg)

2、点击左上角![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417675867-bfe209ce-4016-402c-aefe-3b47d8a828e0.png)设置按钮，设置串口参数与电脑端串口工具参数一致，如下图：

| **相关参数** | **含义** |
| --- | --- |
| Select Serial Port | 设置串口（选择UART2，即ttyS2） |
| BaudRate | 设置波特率（115200） |
| Data bits | 设置数据位（8位） |
| Parity | 设置校验位（无校验） |
| Stop bits | 设置停止位（1位） |
| Flow control | 设置流控（无流控） |




![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417676095-db8cc4ef-3eee-45ab-ac14-31a911477ebe.jpeg)

3、设置完串口参数后，点击左上角的![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417676339-c215e626-a2a3-46e5-b010-e2225245daad.png)连接按钮，此时测试程序可以进行数据收发测试。

4、在命令行终端运行fltest_uarttest，此时屏幕会显示串口接收到的数据。

```plain
root@ok3562:/# fltest_uarttest -d /dev/ttyS9 -b 115200 -w
tx_0: iz2Fu9DzFoR5YnMUtJUcxtJmH88LASWr
root@ok3562:/#
```

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417676596-de370248-1b87-4f70-9619-4a1f9b125a72.jpeg)

1. 在命令行终端运行fltest_uarttest，点击测试界面中间黑屏位置会弹出软键盘，连续输入32个字符之后，命令行终端打印的信息即为qt发送的数据。

```plain
root@ok3562:/# fltest_uarttest -d /dev/ttyS9 -b 115200 -r
rx_0: 12345678901234567890123456789012
root@ok3562:/#
```

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417676808-2c1e6291-ef9b-4eac-8bba-58b3b71374d0.jpeg)

### 3.1.15  数据库测试
点击桌面图标可以使用Sqlite测试数据库。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417676999-a26c436c-2b6b-43a5-ac34-061022a7b9ea.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417677226-5613cd21-0ac5-4fee-9c03-7c5281487fe0.png)	

### 3.1.16  背光测试
“BackLight”是lcd背光调整应用：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417677503-ce25fa41-3c86-4b58-8a69-b97342e9b73d.png)

应用图标

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417677716-64116b20-28e6-407b-b818-94daa5ac90a1.png)

拖动界面中的滑块即可设置Lcd背光亮度，0级为最低亮度，255级为最高亮度。

本测试程序限制最低亮度，在qt界面能设置最小值为1，如需关闭背光，参考3.2.20  LCD 背光调节，将背光亮度设置为0即可。

### 3.1.17  UbootMenu
点击桌面图标![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417677943-fb582525-076e-45bc-a77c-8cebe5ad2667.png)可以进行Uboot菜单配置

在disp_type选项卡中可以选择屏幕显示

	none：不开启屏幕显示
	
	mipi：开启mipi 1024*600屏幕显示
	
	lvds：开启lvds 1280*800屏幕显示

在amp_start选项卡中可以选择是否开启amp

	off：关闭
	
	on：开启

在combphy_type选项卡中可以选择usb和pcie的复用功能

	none：关闭combphy
	
	usb：combphy复用为usb功能
	
	pcie：combphy复用为pcie功能

修改成功即保存成功，配置完成之后，重启开发板生效。

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417678199-c414e37a-20b6-497c-bc0b-a8c857634b75.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417678430-81a084f5-0d93-419a-9b4a-8bb02bf23f01.jpeg)

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417678632-ac754c47-2928-45b0-96d8-2546590bc321.jpeg)

### 3.1.18  Web服务
OK3562开发板预装了lighttpd web服务器，并且系统启动时已经自动启动了lighttpd服务，在PC端的浏览器中输入开发板的IP 地址即可浏览开发板webserver 中的网页，如下图所示：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417679107-12d1f44a-8fba-4165-a4fe-ba2b015f28a7.png)

⚠️ **注意：开发板的网络ip需要和PC机的网络IP在同一网段下才可以正常使用该功能，或者PC在开发板所处网络的子网下。**

### 3.1.19  ADC测试
OK3562-C开发板内部提供了13路ADC，每个通道上可连接一个可调电阻，选择 saradc0_in5进行测试，ADC引脚硬件图如下，在P11的1引脚输入电压。当前芯片使用1.8V参考电压对应 10 位ADC最大值1024。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417679386-5ec56abe-ddc8-45a2-a3e6-a78456bf9912.png)

运行QT ADC![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417679554-156d7ae2-e065-46d6-9c57-64c76b6bfc6f.png)程序显示结果。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417679774-4094d713-9cbd-4e75-8a0e-2a14d00ad253.png)

### 3.1.20  Tftp升级系统
⚠️ **注意：**

+ **当前版本不支持MiniLoaderAll.bin升级。**
+ **使用tftp udp方式传输， 端口号为69。**
+ **安装tftpd服务器工具Tftpd64.4.64.exe。**

📂 **路径：OK3562-C-Linux 用户资料/工具/Tftpd64.4.64.exe**

1. 安装Tftpd64.4.64.exe
2. 打开Tftpd64.4.64.exe，进行测试

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417679978-d7fe01c5-7320-4e80-99cf-77b53dc1772d.png)

CurrentDirectory: 选择OK3562-C 分区固件存放路径。

Server interfaces: 选择电脑本地IP地址

⚠️ **注意：请关闭window防火墙，请客户自行验证tftp 下载文件测试。**

3. 打开桌面Tftp Update图标![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417680230-85b319c8-f19d-4966-9000-aaacc308263b.png)
4. 
5. ![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417680441-fabc1d48-0621-4c0a-9800-b1bbfa3f7ba1.jpeg)

请客户根据实际情况填写。 选择需要更新的固件。

单击 Tftp:Off 变成Tftp:On；重启板卡。

串口打印信息如下：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417680673-7b21e433-6173-4ed2-ba79-62d3d45120c3.png)

### 3.1.21  CPU频率配置测试
⚠️ **注意：当前界面只配置A53核。**

	点击桌面图标进入下一级菜单：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417681023-ee7bea0e-f25f-4ec2-be12-3580bff6f6e7.png)**->**![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417681224-3d726585-e187-49e3-9e1a-06953e06559c.png)

应用图标

	OK3562 CPU主频最大2.0Ghz，默认情况下CPU会根据负载动态调整主频，也可以通过设置固定CPU主频率。
	
	点击桌面 Power 图标进入CPU主频设置页面：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417681462-a08c0939-ae79-4034-8ea4-4da675d8f09b.jpeg)

	Set Userspace Governor：用户态设置主频

 Set FrequencyCPU0-3：设置主频

	以设置主频频率为例，如果需要设置固定频率，请先点击Set Userspace Governor，点击run，再返回上图操作界面，点击Set Frequency CPU0-3进行设置。

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417681695-f3a43e8f-34e2-4593-a70f-87260bd357e8.jpeg)

	根据需求选择对应的频率进行设置。

### 3.1.22  录音测试
图标：![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417681925-8a69aa3a-5bf4-4727-87c2-035e69ef3ce5.png)

在进行录音测试前，请将准备好的麦克插入mic接口，点击图标，进入录音测试应用，可用来测试声卡录音功能是否正常。

选择保存录音文件位置，按钮”开始”代表 开始录音，按钮”停止”代表停止录音， 

点击Input Device单选框选择”alsa:sysdefault:CARD=rockchiprk809”， 点击Channels单选框选择”2”， 界面如下：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720417682239-d0793e27-2ace-4398-bb45-1ee1ca099016.jpeg)

单击Record按钮， 进行录音测试。 录音文件保存到根目录下/clip_XXXX.avi文件。

### 3.1.23  SPI测试
图标：![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417682440-b869fc6d-7106-4ff7-b299-c35c55dc0c37.png)

点击图标进入SPI测试界面，短接SPI2_MOSI_M0和SPI2_MISO_M0引脚，点击下方send可以接收到发送出去的数据，完成测试。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417682692-9a531955-6bdb-4c5f-beec-1e2c0d5d078f.png)







# 04_OK3562命令行功能测试

## 4.2 命令行功能测试
OK3562平台内置了丰富的命令行工具可供用户使用。

### 4.2.1  系统信息查询
查看内核信息：

```plain
root@ok3562:~# uname -a
Linux ok3562 5.10.198 #12 SMP Wed Apr 3 14:22:58 CST 2024 aarch64 GNU/Linux
```

查看环境变量信息：

```plain
root@ok3562:/# env | sort
ADBD_SHELL=/bin/bash
AUTOAUDIOSINK_PREFERRED=pulsesink
CHROMIUM_FLAGS=--enable-wayland-ime
DBUS_SESSION_BUS_ADDRESS=unix:path=/var/run/dbus/system_bus_socket
EDITOR=/bin/vi
GST_DEBUG_NO_COLOR=1
GST_INSPECT_NO_COLORS=1
GST_V4L2SRC_DEFAULT_DEVICE=/dev/video-camera0
GST_V4L2SRC_MAX_RESOLUTION=3840x2160
GST_V4L2SRC_RK_DEVICES=_mainpath:_selfpath:_bypass:_scale
GST_V4L2_PREFERRED_FOURCC=NV12:YU12:NV16:YUY2
GST_V4L2_USE_LIBV4L2=1
GST_VIDEO_CONVERT_PREFERRED_FORMAT=NV12:NV16:I420:YUY2
GST_VIDEO_CONVERT_USE_RGA=1
GST_VIDEO_DECODER_QOS=0
GST_VIDEO_FLIP_USE_RGA=1
HOME=/
LANG=en_US.UTF-8
PATH=/usr/bin:/usr/sbin
PIXMAN_USE_RGA=1
PLAYBIN2_PREFERRED_AUDIOSINK=pulsesink
PULSE_HOME=/userdata/.pulse
PWD=/
QT_QPA_FONTDIR=/usr/share/fonts
QT_QPA_PLATFORM=wayland-egl
QT_QPA_PLATFORM_PLUGIN_PATH=/usr/lib/qt/plugins
RUNLEVEL=#f-04/13/2024
SHELL=/bin/sh
SHLVL=0
TERM=vt102
UMS_FILE=/userdata/ums_shared.img
UMS_FSTYPE=vfat
UMS_MOUNT=0
UMS_MOUNTPOINT=/mnt/ums
UMS_RO=0
UMS_SIZE=256M
USB_FUNCS=adb
USER=root
WAYLANDSINK_FORCE_DMABUF=1
WESTON_DISABLE_ATOMIC=1
WESTON_DRM_KEEP_RATIO=1
WESTON_DRM_MIN_BUFFERS=2
WESTON_DRM_MIRROR=1
WESTON_FREEZE_DISPLAY=/tmp/.freeze_weston
WL_OUTPUT_VERSION=3
XDG_RUNTIME_DIR=/var/run
_=/usr/bin/env
storagemedia=emmc
root@ok3562:/#
```

### 4.2.2  调频测试 
📖 **说明：四核A53分别是cpu0、cpu1、cpu2、cpu3。此过程以cpu0为例操作，实际过程cpu1、cpu2、cpu3会同时改变。**

1. 当前内核中支持的所有cpufreq governor类型：

```plain
root@ok3562:~# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
interactive  conservative  ondemand  userspace  powersave  performance  schedutil
```

其中userspace表示用户模式，在此模式下允许用户程序调节CPU频率。

2. 查看当前CPU支持的频率档位

```plain
root@ok3562:~# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
408000  600000  816000  1008000  1200000  1416000  1608000  1800000  2016000
//注 工业级CPU频率最高支持1.2GHZ
```

3. 设置为用户模式，修改频率为1200000：

```plain
root@ok3562:~# echo userspace > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
root@ok3562:~# echo 1200000 > /sys/devices/system/cpu/cpu0/cpufreq/scaling_setspeed
```

查看修改后当前频率：

```plain
root@ok3562:~# cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
1200000
```

### 4.2.3  温度测试
查看温度值：

```plain
root@ok3562:~# cat /sys/class/thermal/thermal_zone0/temp
45307
```

温度值即为45.3℃。

### 4.2.4  DDR测试
```plain
root@ok3562:~# fltest_memory_bandwidth.sh
L1 cache bandwidth rd test with # process
0.008192 9531.99
0.008192 9527.23
0.008192 9531.81
0.008192 9528.35
0.008192 9530.08
L2 cache bandwidth rd test
0.131072 7504.40
0.131072 7682.14
0.131072 7650.60
0.131072 7676.25
0.131072 7609.79
Main mem bandwidth rd test
52.43 3004.34
52.43 3011.42
52.43 3026.72
52.43 3011.59
52.43 3018.35
L1 cache bandwidth wr test with # process
0.008192 15139.01
0.008192 15141.75
0.008192 15139.01
0.008192 15147.22
0.008192 15139.49
L2 cache bandwidth wr test
0.131072 8190.42
0.131072 8724.72
0.131072 8671.11
0.131072 8689.86
0.131072 8733.35
Main mem bandwidth wr test
52.43 1889.05
52.43 1886.74
52.43 1895.13
52.43 1891.37
52.43 1877.35
```

OK3562-C的LPDDR4写带宽大约1877M/s，读带宽大约3004M/s。

### 4.2.5  看门狗测试
看门狗是嵌入式系统中经常用到的功能，OK3562中看门狗的设备节点为/dev/watchdog

启动看门狗，设置复位时间10s，并定时喂狗，系统不会重启：

```plain
root@ok3562:~# fltest_watchdog -t 10 -c
Watchdog Ticking Away!
```

使用ctrl+c结束测试程序时，停止喂狗，看门狗仍处于打开状态，10s后系统复位；

若不想复位，请在结束程序之后10s内输入关闭看门狗命令：

```plain
root@ok3562:~# fltest_watchdog -d
```

启动看门狗，设置复位时间10s，但是不喂狗，系统会在10秒后重启：

```plain
root@ok3562:~# fltest_watchdog -t 10
[  532.133075] watchdog: watchdog0: watchdog did not stop!
Watchdog Ticking Away!
```

### 4.2.6  RTC功能测试
⚠️** 注意：确保板子上已经安装了纽扣电池，并且电池电压正常。**

<font style="color:#000000;">RTC 测试，主要通过使用 date 和 hwclock 工具设置软、硬件时间，测试当板子断电再上电的时候，软件时钟读取 RTC 时钟是否同步</font>

	时间设置：

```plain
root@ok3562:~# date -s "2022-12-12 17:23:00"      //设置软件时间
Mon Dec 12 17:23:00 CST 2022
root@ok3562:~# hwclock -w					   						  //将软件时间同步到硬件时间
root@ok3562:~# hwclock -r					    						//显示硬件时间
Mon Dec 12 17:23:06 CST 2022
```

然后给板子断电再上电，进入系统后读取系统时间，可以看到时间已经同步。

```plain
root@ok3562:~# date
Mon Dec 12 17:23:20 CST 2022
```

### 4.2.7  按键测试
使用fltest_keytest命令行工具进行按键测试，目前fltest_keytest支持底板上4个按键VOL+、VOL-、MENU、ESC的测试，键码分别为115、114、139、158

执行如下命令，注意当存在触摸屏时为event4：

```plain
root@ok3562:~# fltest_keytest /dev/input/event3
```

此时依次按下抬起按键，终端上可输出如下内容：

```plain
key115 Presse                                                         // VOL+按下
key115 Released                                                       // VOL+抬起
key114 Presse                                                         // VOL-按下
key114 Released                                                       // VOL-抬起
key139 Presse                                                         // MENU按下
key139 Released                                                       // MENU抬起
key158 Presse                                                         // ESC按下
key158 Released                                                       // ESC抬起
```

### 4.2.8  UART测试 
OK3562平台底板原理图中标示引出的UART0、UART2、UART8、UART9共4路串口，其中UART0为调试串口，UART8为蓝牙串口，UART2和UART9为485串口。UART2、UART9在开发板中的默认设备名称分别为ttyS2，ttyS9。最高支持4M波特率。

| **UART** | **设备节点** | **说明** |
| :---: | :---: | --- |
| UART2 | /dev/ttyS2 | RS485 |
| UART8 | /dev/ttyS8 | 用于蓝牙，未单独引出，不能直接用于该测试 |
| UART9 | /dev/ttyS9 | RS485 |


本次测试采用UART2和UART9测试，短接P36端口中的 485_B1 和 485_B0 ，485_A1 和 485_A0 。GND_485_0，GND_485_1排针，如图：

![](https://cdn.nlark.com/yuque/0/2024/png/45576790/1722219092030-c1249903-b12e-48b0-8be6-51478d731f10.png)

在开发板串口中输入如下命令：

```plain
root@ok3562:/# fltest_uarttest -d /dev/ttyS2 -b 115200 -r &
[1] 1953
root@ok3562:/# fltest_uarttest -d /dev/ttyS9 -b 115200 -w
tx_0: Gpi2GoMkYywl2IE9sEBcG6yI0DpmDbFT
rx_0: Gpi2GoMkYywl2IE9sEBcG6yI0DpmDbFT
[1]+  Done                    fltest_uarttest -d /dev/ttyS2 -b 115200 -r
root@ok3562:/#
```

### 4.2.9  ADC测试
OK3562-C开发板内部提供了13路ADC，每个通道上可连接一个可调电阻，选择 saradc0_in5进行测试，ADC引脚硬件图如下，在P11的1引脚输入电压。当前芯片使用1.8V参考电压对应 10 位ADC最大值1024。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417683181-9552584f-5419-47e8-9307-1427849c8bae.png)

下面以SARADC_VIN2为例进行可调电阻数值测试：

```plain
root@ok3562:~# cd /sys/bus/iio/devices/iio:device0
root@ok3562:/sys/bus/iio/devices/iio:device0# cat in_voltage5_raw
809
```

### 4.2.10  TF卡测试
📖 **说明：SD卡挂载目录为/run/media/，支持热插拔。**

1、上电前将TF卡插入开发板底板的TF卡插槽，上电启动，运行命令dmesg，终端有如下打印信息：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417683449-f07dfde3-d452-4fdf-a8ae-951a7a0680f8.png)

2、查看挂载目录：

```plain
root@ok3562:~# mount | grep "mmcblk1"
/dev/mmcblk1p1 on /run/media/mmcblk1p1 type vfat (rw,relatime,gid=6,fmask=0007,dmask=0007,allow_utime=0020,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

3、写入测试：

```plain
root@ok3562:~# dd if=/dev/zero of=/run/media/mmcblk1p1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 10.1131 s, 51.8 MB/s
```

4、读取测试：

⚠️** 注意：为确保数据准确，请重启开发板后测试读取速度。**

```plain
root@ok3562:~# dd if=/run/media/mmcblk1p1/test of=/dev/null bs=1M count=500 iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 6.47351 s, 81.0 MB/s
```

5、TF卡使用完成后，在弹出TF卡前，需要使用umount卸载TF

```plain
root@ok3562:~# umount /run/media/mmcblk1p1
```

⚠️ **注意：退出TF卡挂载路径后再插拔TF卡。**

### 4.2.11  eMMC 测试
OK3562平台eMMC默认运行于HS200模式200MHz时钟，下面简单测试eMMC的读写速度，以读写ext4文件系统为例。

写入测试：

```plain
root@ok3562:~# dd if=/dev/zero of=/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 5.18805 s, 101 MB/s
```

	读取测试：

⚠️ **注意：**为确保数据准确，请重启开发板后测试读取速度。

```plain
root@ok3562:~# dd if=/test of=/dev/null bs=1M iflag=direct
500+0 records in 
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 2.1929 s, 239 MB/s
```

### 4.2.12  USB鼠标测试
<font style="color:#000000;">将USB鼠标接入OK3562平台的usb接口，使用dmesg命令， 串口终端的打印信息如下：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417683670-7cdcbb8f-c940-4f83-b982-1be0d074afc9.png)

<font style="color:#000000;">此时在屏幕上出现箭头光标，鼠标已可正常使用。</font>

### 4.2.13  USB2.0
OK3562支持一个USB2.0接口用户可以在任何一个板载USB HOST接口上连接USB鼠标、USB键盘、U盘等设备，并支持以上设备的热插拔。这里用挂载U盘为例进行演示，目前U盘测试支持到32G，32G以上并未测试。

终端会打印关于U盘的信息，由于存在很多种U盘，显示的信息可能会有差别：

1. 开发板启动后，连接USB接口u盘到开发板的USB host接口，默认log打印信息较低，不会有打印信息。可以使用dmesg命令查看，找到u盘相关信息

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417683973-a87d10d3-9892-451c-881f-e0d62c9a7589.png)

2. 查看挂载目录：

```plain
root@ok3562:~# mount | grep "sda1"
/dev/sda1 on /run/media/sda1 type vfat (rw,relatime,fmask=0022,dmask=0022,codepage=936,iocharset=utf8,shortname=mixed,errors=remount-ro)
```

可以看到/run/media/sda1为USB存储设备的挂载路径

3. 查看U盘内容(这里的sda1以实际U盘分区名称为准)

```plain
root@ok3562:~# ls -l /run/media/sda1/
total 8
drwxrwx--- 2 root disk 8192 Sep 23  2021 'System Volume Information'
-rwxrwx--- 1 root disk    0 Apr 25 09:25  test
```

4. 写入测试，写入速度受限于具体的存储设备：

```plain
root@ok3562:~# dd if=/dev/zero of=/run/media/sda1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 28.8323 s, 18.2 MB/s
```

5. 读取测试：

⚠️** 注意：**为确保数据准确，请重启开发板后测试读取速度。

```plain
root@ok3562:~# dd if=/run/media/sda1/test of=/dev/null bs=1M iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 25.0096 s, 21.0 MB/s
```

6. U盘使用完成后，在拔出U盘前，需要使用umount卸载

```plain
root@ok3562:~# umount /run/media/sda1
```

⚠️ **注意：退出U盘挂载路径后再插拔U盘。**

### 4.2.14  USB转四串口测试
📖 **说明：**

+ **支持XR21V1414 USB转串口芯片驱动；**
+ **USB转四串口为选配模块，如若有需求，请联系飞凌嵌入式销售人员。**

1、开发板上电启动后，通过USB HOST接口连接USB转四串口模块，终端上会有如下打印信息：

```plain
[  836.286313] usb 1-1.1: new full-speed USB device number 4 using ehci-platform
[  836.502174] usb 1-1.1: New USB device found, idVendor=04e2, idProduct=1414, bcdDevice= 0.03
[  836.502245] usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[  836.504546] cdc_xr_usb_serial 1-1.1:1.0: This device cannot do calls on its own. It is not a modem.
[  836.505009] cdc_xr_usb_serial 1-1.1:1.0: ttyXR_USB_SERIAL0: USB XR_USB_SERIAL device
[  836.509062] cdc_xr_usb_serial 1-1.1:1.2: This device cannot do calls on its own. It is not a modem.
[  836.509550] cdc_xr_usb_serial 1-1.1:1.2: ttyXR_USB_SERIAL1: USB XR_USB_SERIAL device
[  836.513236] cdc_xr_usb_serial 1-1.1:1.4: This device cannot do calls on its own. It is not a modem.
[  836.513640] cdc_xr_usb_serial 1-1.1:1.4: ttyXR_USB_SERIAL2: USB XR_USB_SERIAL device
[  836.517896] cdc_xr_usb_serial 1-1.1:1.6: This device cannot do calls on its own. It is not a modem.
[  836.518322] cdc_xr_usb_serial 1-1.1:1.6: ttyXR_USB_SERIAL3: USB XR_USB_SERIAL device
```

<font style="color:#000000;">2、通过lsusb查看usb设备状态：</font>

```plain
root@ok3562:/# lsusb
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 002: ID 1a40:0101
Bus 002 Device 001: ID 1d6b:0001
Bus 001 Device 004: ID 04e2:1414                             //该转换芯片的vid和pid
```

<font style="color:#000000;">查看dev下是否产生串口节点：</font>

```plain
root@3562:/# ls /dev/ ttyXRUSB*
/dev/ttyXRUSB0  /dev/ttyXRUSB1  /dev/ttyXRUSB2  /dev/ttyXRUSB3 
```

<font style="color:#000000;">3、扩展的四个串口与设备节点的对应关系如下图：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417684392-b4febc8c-5724-401d-a9a4-20165a269a9c.png)

<font style="color:#000000;">4、测试方法参考“</font>3.2.8  UART测试<font style="color:#000000;">”。</font>

### 4.2.15  USB3.0 / USB otg 测试
OK3562-C的USB3.0 / USB otg和PCIE为复用功能，其中USB3.0只支持Host模式，USB otg只支持USB2.0

要测试其中USB功能（包括USB3.0、USB otg）需要将开发板底板S3拨码开关拨到OFF位置，同时在Uboot菜单中将combphy_type设置为usb，参考4.2.29  Uboot菜单。

USB Host模式可以插入普通的USB 设备，Device模式可以用它来进行刷机，ADB文件传输、调试。

#### 4.2.15.1  USB3.0 Host模式：
1、将开发板底板S2拨码开关拨到ON位置。

2、修改设备树arch/arm64/boot/dts/rockchip/OK3562-C-common.dtsi（出厂镜像默认如此，无需修改）将usbdrd_dwc3节点的dr_mode属性修改为“host”，如下图所示：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417684738-0e90d5d6-c5d0-4484-806e-8fc65da65829.png)

3、重新编译镜像并烧录到开发板。

4、将开发板底板S3拨码开关拨到OFF位置，同时在Uboot菜单中将combphy_type设置为usb。

5、将USB3.0的U盘接到开发板USB3.0-A口（丝印P33）识别到U盘：

```plain
[   23.576515] usb 4-1: new SuperSpeed Gen 1 USB device number 2 using xhci-hcd
[   23.604126] usb 4-1: New USB device found, idVendor=0bda, idProduct=9210, bcdDevice=20.01
[   23.604191] usb 4-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[   23.604219] usb 4-1: Product: Ugreen Storage Device
[   23.604242] usb 4-1: Manufacturer: Ugreen
[   23.604263] usb 4-1: SerialNumber: 012938051990
[   23.668038] scsi host0: uas
[   24.080889] scsi 0:0:0:0: Direct-Access     INTEL SS DPEKKW256G8      1.00 PQ: 0 ANSI: 6
[   24.097622] sd 0:0:0:0: [sda] 500118192 512-byte logical blocks: (256 GB/238 GiB)
[   24.098918] sd 0:0:0:0: [sda] Write Protect is off
[   24.101591] sd 0:0:0:0: [sda] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
[   24.103837] sd 0:0:0:0: [sda] Optimal transfer size 33553920 bytes
[   24.134645]  sda: sda1
[   24.158935] sd 0:0:0:0: [sda] Attached SCSI disk
```

6、查看挂载目录：

```plain
root@ok3562:~# mount | grep "sda"
/dev/sda1 on /run/media/sda1 type fuseblk (rw,nosuid,nodev,relatime,user_id=0,group_id=0,default_permissions,allow_other,blksize=4096)
```

可以看到/run/media/sda为USB存储设备的挂载路径。

7、查看U盘内容(这里的sda以实际U盘分区名称为准)：

```plain
root@ok3562:~# ls -l /run/media/sda1/
total 1048576
-rwxrwxrwx 1 root root 1073741824 Jan  1  1980 test1g
```

8、写入测试，写入速度受限于具体的存储设备：

```plain
root@ok3562:~# dd if=/dev/zero of=/run/media/sda1/test bs=1M count=500 conv=fsync
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 3.60126 s, 146 MB/s
```

9、读取测试：

⚠️** 注意：**为确保数据准确，请重启开发板后测试读取速度。

```plain
root@ok3562:~# dd if=/run/media/sda1/test of=/dev/null bs=1M count=500 iflag=direct
500+0 records in
500+0 records out
524288000 bytes (524 MB, 500 MiB) copied, 1.15981 s, 452 MB/s
```

10、U盘使用完成后，在拔出U盘前，需要使用umount卸载：

```plain
root@ok3562:~# umount /run/media/sda1
```

⚠️ **注意：退出U盘挂载路径后再插拔U盘。**

#### 4.2.15.2  USB otg模式：
1、修改设备树arch/arm64/boot/dts/rockchip/OK3562-C-common.dtsi的usbdrd_dwc3节点，如下图所示

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417684997-25146b9b-12f9-40f2-a6e2-3938db623bb8.png)

2、重新编译镜像并烧录到开发板

3、将开发板底板S3拨码开关拨到OFF位置，同时在Uboot菜单中将combphy_type设置为usb

Host模式需要将开发板底板S2拨码开关拨到ON位置

此时在P33 USB-A座插上U盘即可识别，U盘速度为USB2.0（如果没有自动识别，将S2拨到OFF再拨回ON即可）

将U盘接到开发板USB3.0-A口（丝印P33）识别到U盘：

```plain
[   48.317004] usb 3-1: new high-speed USB device number 3 using xhci-hcd
[   48.460355] usb 3-1: New USB device found, idVendor=05e3, idProduct=0747, bcdDevice= 8.19
[   48.460422] usb 3-1: New USB device strings: Mfr=3, Product=4, SerialNumber=5
[   48.460449] usb 3-1: Product: USB Storage
[   48.460470] usb 3-1: Manufacturer: Generic
[   48.460491] usb 3-1: SerialNumber: 000000000819
[   48.463227] usb-storage 3-1:1.0: USB Mass Storage device detected
[   48.465081] scsi host0: usb-storage 3-1:1.0
[   49.492654] scsi 0:0:0:0: Direct-Access     Generic  STORAGE DEVICE   0819 PQ: 0 ANSI: 6
[   49.940084] sd 0:0:0:0: [sda] 124735488 512-byte logical blocks: (63.9 GB/59.5 GiB)
[   49.941418] sd 0:0:0:0: [sda] Write Protect is off
[   49.942545] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
[   49.970261] sd 0:0:0:0: [sda] Attached SCSI removable disk
```

Device模式需要将开发板底板S2拨码开关拨到OFF位置

用USB-A转USB-C线连接电脑和开发板P35 USB-typec座，重启开发板即可

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417685359-31c37e27-76b7-4b1f-acd6-01f0c457490a.png)

瑞芯微开发工具显示“发现一个ADB设备”，即可通过adb pull从开发板下载文件到电脑，通过adb push从电脑向开发板上传文件。

在win10 PowerShell终端中打开RKDevTool_Release/bin目录

```plain
Windows PowerShell
版权所有 (C) Microsoft Corporation。保留所有权利。

尝试新的跨平台 PowerShell https://aka.ms/pscore6

PS C:\Users\Acer> cd D:\rk3562\RKDevTool\RKDevTool_Release\bin
PS D:\rk3562\RKDevTool\RKDevTool_Release\bin> .\adb.exe devices
List of devices attached
38bc17e18f2c57bc        device

PS D:\rk3562\RKDevTool\RKDevTool_Release\bin> .\adb.exe push D:\test.mp3 /home/forlinx/
D:\test.mp3: 1 file pushed. 13.8 MB/s (4818092 bytes in 0.334s)
PS D:\rk3562\RKDevTool\RKDevTool_Release\bin>
PS D:\rk3562\RKDevTool\RKDevTool_Release\bin> .\adb.exe pull /home/forlinx/test
/home/forlinx/test: 1 file pulled. 0.0 MB/s (29 bytes in 0.002s)
PS D:\rk3562\RKDevTool\RKDevTool_Release\bin> ls .\test

    目录: D:\rk3562\RKDevTool\RKDevTool_Release\bin

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2024/4/25     12:14             29 test

PS D:\rk3562\RKDevTool\RKDevTool_Release\bin>
PS D:\rk3562\RKDevTool\RKDevTool_Release\bin>
```

### 4.2.16  PCIE测试 
⚠️ 注意：OK3562 PCIE2.0和USB3.0 不支持两个同时使用。

OK3562-C板卡有1个PCIE2.0 。

系统上电前将PCIE模块插入底板PCIE卡槽。将开发板底板S3拨码开关拨到ON位置，同时在Uboot菜单中将combphy_type设置为pcie，参考“4.2.29  Uboot菜单”。

上电后启动后，通过lspci可以看到对应设备枚举成功。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417685571-e8818454-b153-4e87-9125-15dba69fe57a.png)

由于pcie设备类型较多，有可能默认不被内核支持需自行添加编译设备对应的驱动程序。

以E1000 pcie网卡举例，linux内核默认已经包含该驱动。插入网卡后上电启动可以看到枚举信息，并出现以太网接口：

```plain
root@ok3562:/# dmesg | grep e1000e
[    4.529083] e1000e: Intel(R) PRO/1000 Network Driver
[    4.529098] e1000e: Copyright(c) 1999 - 2015 Intel Corporation.
[    4.773406] e1000e 0000:01:00.0: enabling device (0000 -> 0002)
[    4.773709] e1000e 0000:01:00.0: Interrupt Throttling Rate (ints/sec) set to dynamic conservative mode
[    4.819936] e1000e 0000:01:00.0 0000:01:00.0 (uninitialized): registered PHC clock
[    4.872420] e1000e 0000:01:00.0 eth2: (PCI Express:2.5GT/s:Width x1) 68:05:ca:1a:e4:33
[    4.872429] e1000e 0000:01:00.0 eth2: Intel(R) PRO/1000 Network Connection
[    4.872452] e1000e 0000:01:00.0 eth2: MAC: 3, PHY: 8, PBA No: E46981-008
root@ok3562:/#
root@ok3562:/# ifconfig eth2
eth2      Link encap:Ethernet  HWaddr 68:05:CA:1A:E4:33
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:92 Memory:fc2c0000-fc2e0000
root@ok3562:/#
```

<font style="color:#000000;">使用iperf3测试带宽：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417685858-f60dff6f-4e41-4ed9-924d-2744215572b1.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417686181-e408c980-ad76-4e34-ab64-143ccb996e04.png)

### 4.2.17  以太网配置
OK3562-C板载一个千兆网卡和一个百兆网卡，插入网线连接网络的情况下，出厂时eth0默认配置为静态IP。

配置文件的路径为：/etc/network/interfaces,设置动态ip的配置文件内容为

```plain
auto eth0
iface eth0 inet dhcp
```

设置静态配置ip，以下以eth0设置ip为192.168.0.232为例：

```plain
auto eth0
iface eth0 inet static
address 192.168.0.232
netmask 255.255.255.0
gateway 192.168.0.1
```



| **参数** | **含义** |
| :---: | --- |
| iface | 用于指定需要固定IP的网卡 |
| address | 用于指定需要固定的IP地址 |
| netmask | 用于设置子网掩码 |
| gateway | 用于指定网关 |


设置完后使用sync文件同步指令，重启开发板或者重启服务，配置生效。

```plain
root@ok3562:~# ifdown -a
root@ok3562:~# ifup -a
```

### 4.2.18  WIFI 测试 
📖 **说明：由于网络环境的不同，所以在您做本实验时，请根据实际情况进行设置。**

OK3562平台支持WIFI蓝牙二合一模块：6221A-SRC（RTL8821CS）。

+ **STA 模式 **

该模式即作为一个站点，连接到无线网络中。以下测试中，路由器采用wpa加密方式，连接的wifi热点名称为：“H3C_708_5G”，密码为：“123456785.”。由于网络环境的不同，用户在进行本次测试时，请根据实际情况进行设置：

1、开发板终端中输入如下命令：

```plain
root@ok3562:~# fltest_wifi.sh -I wlan0 -s H3C_708_5G -p 123456785.
```

命令中相关参数含义如下：

| **参数** | **含义** |
| :---: | --- |
| -I | 不同wifi模块所用参数不同，指定WIFI设备名称 |
| -s | 连接的实际wifi热点名称。 |
| -p | 后接参数Password指要连接的实际wifi热点的密码；<br/>如果当前热点没有密码，-p后参数写NONE。 |


串口打印如下：

```plain
root@ok3562:/# fltest_wifi.sh -i wlan0 -s H3C_708_5G -p 123456785.
[ 1493.212161] rk_gmac-dwmac ffa80000.ethernet eth0: Link is Down
wifi wlan0
ssid H3C_708_5G
pasw 123456785.
waiting...
[ 1494.995715] start_addr=(0x8000), end_addr=(0x10000), buffer_size=(0x8000), smp_number_max=(4096)
[ 1498.300935] RTW: wlan0- hw port(0) mac_addr =5c:c5:63:66:df:27
[ 1498.331973] ========== ACS (VER-3) ==========
[ 1498.332037] Best 24G Channel:2
[ 1498.332058] Best 5G Channel:40
[ 1498.332058]
[ 1498.339855] RTW: rtw_set_802_11_connect(wlan0)  fw_state=0x00000008
[ 1498.558831] RTW: start auth
[ 1498.559981] RTW: auth success, start assoc
[ 1498.561641] RTW: assoc success
[ 1498.563384] RTW: ============ STA [14:51:7e:62:fc:87]  ===================
[ 1498.563432] RTW: mac_id : 0
[ 1498.563440] RTW: wireless_mode : 0x24
[ 1498.563446] RTW: mimo_type : 0
[ 1498.563455] RTW: static smps : N
[ 1498.563463] RTW: bw_mode : 80MHz, ra_bw_mode : 80MHz
[ 1498.563471] RTW: rate_id : 10
[ 1498.563480] RTW: rssi : -1 (%), rssi_level : 0
[ 1498.563488] RTW: is_support_sgi : Y, is_vht_enable : Y
[ 1498.563495] RTW: disable_ra : N, disable_pt : N
[ 1498.563501] RTW: is_noisy : N
[ 1498.563509] RTW: txrx_state : 0
[ 1498.563517] RTW: curr_tx_rate : CCK_1M (L)
[ 1498.563524] RTW: curr_tx_bw : 20MHz
[ 1498.563532] RTW: curr_retry_ratio : 0
[ 1498.563538] RTW: ra_mask : 0x00000000003ffff0
[ 1498.563538]
[ 1498.564273] RTW: recv eapol packet 1/4
[ 1498.565226] RTW: send eapol packet 2/4
[ 1498.569129] RTW: recv eapol packet 3/4
[ 1498.569586] RTW: send eapol packet 4/4
[ 1498.570094] RTW: set pairwise key camid:0, addr:14:51:7e:62:fc:87, kid:0, type:AES
[ 1498.570729] IPv6: ADDRCONF(NETDEV_CHANGE): wlan0: link becomes ready
[ 1498.571163] RTW: set group key camid:1, addr:14:51:7e:62:fc:87, kid:1, type:TKIP
udhcpc: started, v1.36.0
udhcpc: broadcasting discover
udhcpc: broadcasting select for 192.168.1.30, server 192.168.1.1
udhcpc: lease of 192.168.1.30 obtained from 192.168.1.1, lease time 86400
deleting routers
adding dns 192.168.1.1
connect ok
root@ok3562:/#
```

2、检查是否能ping外网，在终端中输入如下命令：

```plain
root@ok3562:~# ping baidu.com -c 4                 //指定ping4次
PING baidu.com (39.156.66.10) 56(84) bytes of data.
64 bytes from 39.156.66.10 (39.156.66.10): icmp_seq=1 ttl=51 time=14.6 ms
64 bytes from 39.156.66.10 (39.156.66.10): icmp_seq=2 ttl=51 time=8.19 ms
64 bytes from 39.156.66.10 (39.156.66.10): icmp_seq=3 ttl=51 time=8.86 ms
64 bytes from 39.156.66.10 (39.156.66.10): icmp_seq=4 ttl=51 time=7.93 ms

--- baidu.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 7.925/9.884/14.565/2.723 ms
root@ok3562:/#
```

+ **AP 模式**

📖 **说明：进行该项测试前需要保证千兆网卡eth0连网，并且网络正常，这样手机连接热点后才能上网；**

1. 查看驱动加载状态 

```plain
root@ok3562:~# lsmod                    							   //查看已加载的模块
Module               Size      	Used by    Tainted: G
8821cs               2793472  	0
```

1. 配置热点

WiFi热点名称：OK3562_WIFI_2.4G_AP

密码：12345678

热点名称和密码和通过/etc/hostapd-2.4g.conf文件查看。

```plain
root@ok3562:~# fltest_hostap.sh
[  705.365653] wlan: Received disassociation request on mlan0, reason: 3
[  705.365693] wlan: REASON: (Deauth) Sending STA is leaving (or has left) IBSS or ESS
hostapd: no process found
Stopping dnsmasq (via systemctl): dnsmasq.service.
Configuration file: /etc/hostapd-2.4g.conf
[  706.760789] uap0: Skip change virtual intf on uap: type=3
Using interface uap0 with hwaddr 14:13:33:63:f0:73 and ssid "OK3562_WIFI_2.4G_AP"
[  706.777774] wlan: Starting AP
[  706.778591] Get ht_cap from beacon ies: 0xc
[  706.779094] fw doesn't support 11ax
[  706.789807] wlan: AP started
[  706.791465] Set AC=3, txop=47 cwmin=3, cwmax=7 aifs=1
[  706.793782] Set AC=2, txop=94 cwmin=7, cwmax=15 aifs=1
[  706.796067] Set AC=0, txop=0 cwmin=15, cwmax=63 aifs=3
[  706.798295] Set AC=1, txop=0 cwmin=15, cwmax=1023 aifs=7
uap0: interface state UNINITIALIZED->ENABLED
uap0: AP-ENABLED
Starting dnsmasq (via systemctl): dnsmasq.service.
```

### 4.2.19  蓝牙测试 
OK3562开发板中底板6221A-SRC（RTL8821CS）模块，集成了蓝牙功能，本节演示使用手机与开发板之间通过蓝牙进行数据传输，支持蓝牙4.2。 

1、蓝牙配置

```plain
root@ok3562:~# bluetoothctl                                      //打开bluez蓝牙工具
[NEW] Controller B8:4D:43:12:43:6F forlinx [default]
Agent registered
[bluetooth]# power on                                            //启动蓝牙设备
Changing power on succeeded
[bluetooth]# pairable on                                         //设置为配对模式
Changing pairable on succeeded
[bluetooth]# discoverable on                                     //设置为可发现模式
[bluetooth]# [ 1547.589820] Bluetooth: hu ffffffc066059c00 retransmitting 1 pkts
Changing discoverable on succeeded
[CHG] Controller B8:4D:43:12:43:6F Discoverable: yes
[bluetooth]# agent on                                            //启动代理
Agent is already registered
[bluetooth]# default-agent                                       //设置当前代理为默认
Default agent request successful
```

2、开发板被动配对

此时打开PC蓝牙搜索，会出现一个“OK3562”的设备，选择配对

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417686511-83a2a7db-1e20-494c-a796-882d0345561d.png)

同时开发板上打印信息如下，输入yes

```plain
[NEW] Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F
Request confirmation
[agent] Confirm passkey 678054 (yes/no): yes
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 Modalias: bluetooth:v0006p0001d0A00
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001000-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001115-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000111f-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001200-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: c7f94713-891e-496a-a0e7-983a0946126e
[CHG] Device 2C:DB:07:C7:4F:F6 ServicesResolved: yes
[CHG] Device 2C:DB:07:C7:4F:F6 Paired: yes
Authorize service
[agent] Authorize service 0000110e-0000-1000-8000-00805f9b34fb (yes/no): yes
Authorize service
[agent] Authorize service 0000110d-0000-1000-8000-00805f9b34fb (yes/no): yes
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001000-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110a-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110d-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001115-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 0000111f-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: 00001200-0000-1000-8000-00805f9b34fb
[CHG] Device 2C:DB:07:C7:4F:F6 UUIDs: c7f94713-891e-496a-a0e7-983a0946126e
```

	查看和移除连接设备：

```plain
[bluetooth]# devices		                                        //查看连接的蓝牙设备
Device 2C:DB:07:C7:4F:F6 DESKTOP-VND9V1F 
[bluetooth]# remove 2C:DB:07:C7:4F:F6                           //移除设备
```

3、开发板主动配对

除了被动配对，也可以在开发板终端发送主动配对的请求

```plain
[bluetooth]# scan on	                                               //搜索可被发现蓝牙
Discovery started
[CHG] Controller 14:13:33:63:EF:72 Discovering: yes
[NEW] Device FC:E8:00:CF:42:E3 EDIFIER BLE
[NEW] Device 5C:50:51:B5:85:4B 5C-50-51-B5-85-4B
[CHG] Device FC:E8:00:CF:42:E3 RSSI: -92
[bluetooth]# scan off		                                          //停止搜索
[bluetooth]# pair 2C:DB:07:C7:4F:F6                                 //配对蓝牙
Attempting to pair with 2C:DB:07:C7:4F:F6
[CHG] Device 2C:DB:07:C7:4F:F6 Connected: yes
Request confirmation
[agent] Confirm passkey 745068 (yes/no): yes	                       //口令确认
```

4、开发板接收文件

配对成功后，在PC端，可以使用蓝牙发送文件至OK3562-C中。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417686733-a7c68469-02b0-45da-af81-789c0d2f93e3.png)

接收到的文件保存在/tmp目录。

5、开发板发送文件

同样，可以OK3562-C可以发送文件至手机端，测试方法如下：

6、OK3562-C 开发板发送文件至手机端，测试方法如下： 

```plain
root@ok3562:~# fltest_obexctl.sh		                             //开启obexctl
[NEW] Client /org/bluez/obex
[obex]# connect 2C:DB:07:C7:4F:F6	                     					 //连接需要通讯的蓝牙的MAC
Attempting to connect to 2C:DB:07:C7:4F:F6
[NEW] Session /org/bluez/obex/client/session1 [default]
[NEW] ObjectPush /org/bluez/obex/client/session1
Connection successful
[C4:E1:A1:BA:A4:9E]# send /userdata/media/test.mp3	      		   //发送文件
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417686966-110c7eef-9546-4571-a9b6-be4a5f29c69c.png)

<font style="color:#000000;">手机将收到传入文件请求，点击接收，进行文件传输。</font> 

### 4.2.20  4G
📖 **说明：**

+ **使用物联网卡测试时，需确认模组固件版本，低版本固件不支持，需升级**EC20**固件**
+ **有些物联网卡拨号时需要设置专用账号和密码，用户需根据实际情况调整指令**
+ **可使用quectelCM --help指令查看相关参数含义**

OK3562支持4G模块EC20，开发板启动前接入4G模块 ，并插入SIM卡，启动开发板。

1、连接好模块，开发板和模块上电后，可通过lsusb指令查看USB状态

```plain
root@ok3562:~# lsusb
Bus 001 Device 001: ID 1d6b:0002
Bus 001 Device 004: ID 0bda:9210
Bus 001 Device 003: ID 17ef:608d
Bus 001 Device 002: ID 1a40:0101
Bus 002 Device 001: ID 1d6b:0001 
Bus 002 Device 003: ID 2c7c:0125	                             //EC20的VID和PID
```

/dev下查看设备节点状态：

```plain
root@ok3562:~# ls /dev/ttyUSB*
/dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```

2、设备识别成功后，可进行拨号上网测试。fltest_quectel.sh会调用quectelCM，具体指令可查看/usr/bin/fltest_quectel.sh

```plain
root@ok3562:~# fltest_quectel.sh &
```

打印信息如下：

```plain
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
eth1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
[04-02_01:24:28:549] Quectel_QConnectManager_Linux_V1.6.0.24
[04-02_01:24:28:550] Find /sys/bus/usb/devices/2-1 idVendor=0x2c7c idProduct=0x125, bus=0x002, dev=0x003
[04-02_01:24:28:559] Auto find qmichannel = /dev/qcqmi0
[04-02_01:24:28:563] Auto find usbnet_adapter = usb0
[04-02_01:24:28:568] netcard driver = GobiNet, driver version = V1.6.2.14
[04-02_01:24:28:574] Modem works in QMI mode
[04-02_01:24:28:631] Get clientWDS = 7
[04-02_01:24:28:663] Get clientDMS = 8
[04-02_01:24:28:695] Get clientNAS = 9
[04-02_01:24:28:727] Get clientUIM = 10
[04-02_01:24:28:759] Get clientWDA = 11
[04-02_01:24:28:790] requestBaseBandVersion EM05CEFCR06A02M1G_ND
[04-02_01:24:28:918] requestGetSIMStatus SIMStatus: SIM_READY
[04-02_01:24:28:950] requestGetProfile[1] 3gnet///0
[04-02_01:24:28:982] requestRegistrationState2 MCC: 460, MNC: 1, PS: Attached, DataCap: LTE
[04-02_01:24:29:015] requestQueryDataCall IPv4ConnectionStatus: DISCONNECTED
[04-02_01:24:29:016] ifconfig usb0 0.0.0.0
[04-02_01:24:29:031] ifconfig usb0 down
[04-02_01:24:29:110] requestSetupDataCall WdsConnectionIPv4Handle: 0x86cfbe60
[04-02_01:24:29:271] ifconfig usb0 up
[04-02_01:24:29:292] No default.script found, it should be in '/usr/share/udhcpc/' or '/etc//udhcpc' depend on your udhcpc version!
[04-02_01:24:29:298] busybox udhcpc -f -n -q -t 5 -i usb0
udhcpc: started, v1.30.1
udhcpc: sending discover
udhcpc: sending select for 10.117.151.120
udhcpc: lease of 10.117.151.120 obtained, lease time 7200
[04-02_01:24:29:440] ip -4 address flush dev usb0
[04-02_01:24:29:450] ip -4 address add 10.117.151.120/28 dev usb0
[04-02_01:24:29:465] ip -4 route add default via 10.117.151.121 dev usb0 
```

3、测试前，查看相关配置。

查看网关配置：

```plain
root@ok3562:~# route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         _gateway        0.0.0.0         UG    0      0        0 wwan0
10.52.86.48     0.0.0.0         255.255.255.248 U     0      0        0 wwan0
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
```

查看DNS配置：

```plain
root@ok3562:~# cat /etc/resolv.conf
nameserver 123.123.123.123 # IPV4 usb0
nameserver 123.123.123.124 # IPV4 usb0
nameserver 8.8.8.8
nameserver 114.114.114.114
nameserver 127.0.0.53
```

4、设置DNS 与路由之后，可ping 域名：

```plain
root@ok3562:~# ping -I usb0 www.baidu.com -c 3									//指定usb0网卡ping3次
PING www.a.shifen.com (110.242.68.4) from 10.52.86.52 wwan0: 56(84) bytes of data.
64 bytes from 110.242.68.4 (110.242.68.4): icmp_seq=1 ttl=55 time=47.4 ms
64 bytes from 110.242.68.4 (110.242.68.4): icmp_seq=2 ttl=55 time=54.2 ms
64 bytes from 110.242.68.4 (110.242.68.4): icmp_seq=3 ttl=55 time=40.2 ms
--- www.a.shifen.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 40.239/47.300/54.259/5.724 ms
```

### 4.2.21  放/录音测试
<font style="color:#000000;">OK3562提供1路标准3.5mm音频插座1个XH2.0-2P白色插座P22引出,可驱动8Ω 喇叭，最高输出功率为 1W，在进行放音测试前，请将准备好的耳机插入听筒接口，或将扬声器插入底板上的对应插槽上进行测试。</font>

播放声音：

```plain
root@ok3562:~# gst-play-1.0 /userdata/media/test.mp3
```

<font style="color:#000000;">默认通过扬声器播放，插入耳机之后扬声器自动静音。</font>

       MIC输入：

```plain
root@ok3562:~# arecord -l 
**** List of CAPTURE Hardware Devices ****
card 0: rockchiprk809 [rockchip-rk809], device 0: dailink-multicodecs rk817-hifi-0 [dailink-multicodecs rk817-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
root@ok3562:~# arecord -d 5 -f cd -t wav test1.wav    		//采集声音5秒，并保存为wav格式
root@ok3562:~# aplay  test1.wav   												//播放采集声音
```

### 4.2.22  LCD 背光调节 
背光的亮度设置范围为（0--255），255表示亮度最高，0表示关闭背光亮度。在mipi dsi0上接上mipi屏幕后，上电启动。进入系统后在终端输入如下命令进行背光测试。

1、查看当前屏幕背光值：

```plain
root@ok3562:~# cat /sys/class/backlight/backlight/brightness
200                                           			//当前背光值为200
```

2、背光熄灭：

```plain
root@ok3562:~# echo 0 > /sys/class/backlight/backlight/brightness
```

3、LCD背光亮起：

```plain
root@ok3562:~# echo 125 > /sys/class/backlight/backlight/brightness
```

### 4.2.23  CAN测试 
	OK3562-C平台有两路CAN总线接口，CAN 连线方式： CAN 的 H 端子与其它 CAN 设备 H 端连接；CAN的 L 端子与其它 CAN 设备 L 端子连接。

短接CAN0和CAN1，短接P36端口中的CAN1_L和CAN0_L和CAN1_H和CAN0_H 排针，如图：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417687199-550c88e4-6a67-4cac-a4bb-574c91738d6d.png)

在开发板终端执行如下命令：

<font style="color:#000000;">1、查看CAN网络设备：</font>

```plain
root@ok3562:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:78

can1      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:79
```

2、设备CAN设备波特率：

```plain
root@ok3562:/# ip link set can0 type can bitrate 500000
root@ok3562:/# ip link set can1 type can bitrate 500000
```

设置can0和can1设备波特率为500000。

3、打开can设备：

```plain
root@ok3562:/# ifconfig can0 up
root@ok3562:/# ifconfig can1 up
```

4、客户端发送数据服务端接收数据：

can0设备当服务端（服务端先执行以下命令）：

```plain
root@ok3562:/# candump can0 &
```

can1设备当客户端（客户端发送数据）：

```plain
root@ok3562:/# cansend can1 1F334455#1122334455667788
  can0  1F334455   [8]  11 22 33 44 55 66 77 88
```

### 4.2.24  睡眠唤醒测试
<font style="color:#000000;">OK3562平台支持睡眠唤醒。</font>

<font style="color:#000000;">短按电源键，效果如下：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417687430-a21640b3-a104-4022-8c6c-581949640d76.png)

再次短按电源键进行唤醒：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417687633-79d430f3-c733-4c1b-bcb1-88c730ff7c8a.png)

### 4.2.25  MCU测试 
<font style="color:#000000;">OK3562支持M0核测试。请联系保定飞凌要相关测试资料以及编写方法。</font>

<font style="color:#000000;">下面是使用UBOOT启动M0核固件通过调试串口输出内容一条内容。</font>

```plain
VOP VP0 enable Esmart0[1280x800->1280x800@0x0] fmt[1] addr[0x3e1ef000]
CLK: (sync kernel. arm: enter 600000 KHz, init 1008000 KHz, kernel 0N/A)
  apll 600000 KHz
  gpll 1188000 KHz
  vpll 710000 KHz
  hpll 983039 KHz
  cpll 1000000 KHz
  dpll 666000 KHz
  aclk_bus 198000 KHz
  hclk_bus 198000 KHz
  pclk_bus 99000 KHz
  aclk_peri 198000 KHz
  hclk_peri 148500 KHz
  pclk_peri 99000 KHz
## Loading loadables from FIT Image at 3c2c7040 ...
   Trying 'mcu' loadables subimage
     Description:  mcu
     Type:         Standalone Program
     Compression:  uncompressed
     Data Start:   0x3c2c7e40
     Data Size:    61952 Bytes = 60.5 KiB
     Architecture: ARM
     Load Address: 0x07b00000
     Entry Point:  unavailable
     Hash algo:    sha256
     Hash value:   b44067ea73f44adc1e96b31854949b12f3bcca3903335a89d7ddfa1972f89f45
   Verifying Hash Integrity ... sha256+ OK
   Loading loadables from 0x3c2c7e40 to 0x07b00000
Welcome to forlinx OK3562 board mcu000 ...O 这条语句为M0核打印出来信息
K
Net:   eth0: ethernet@ffa80000, eth1: ethernet@ffb30000
```

### 4.2.26  SQLite3测试
SQLite3是一款轻型的数据库，是遵守ACID的关系型数据库管理系统，占用资源低。OK3562-C开发板移植的是3.21.0版本的sqlit3。

```plain
root@ok3562:/# sqlite3
SQLite version 3.36.0 2021-06-18 18:36:39
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite> create table tbl1 (one varchar(10), two smallint);	//创建表tbl1
sqlite> insert into tbl1 values('hello!',10);								//tbl1表内插入数据hello!|10
sqlite> insert into tbl1 values('goodbye', 20);							//tbl1表内插入数据goodbye|20
sqlite> select * from tbl1;																	//查询表tbl1中内容
hello!|10
goodbye|20
sqlite> delete from tbl1 where one = 'hello!';							//删除数据
sqlite> select * from tbl1;																	//查询表tbl1中内容
goodbye|20
sqlite> .quit			                                					//退出数据库（或使用.exit命令）
root@ok3562:/#
```

### 4.2.27  SPI测试
OK3562平台底板原理图中引出SPI测试引脚，位于底板P8。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720417687846-dfff0204-6506-4d62-9a85-c3de443e5b21.png)

短接SPI2_MOSI_MO和SPI2_MISO_M0引脚。

```plain
root@ok3562:/# fltest_spidev_test -D /dev/spidev2.0
 spi mode: 0
bits per word: 8
max speed: 500000 Hz (500 KHz)

FF FF FF FF FF FF
40 00 00 00 00 95
FF FF FF FF FF FF
FF FF FF FF FF FF
FF FF FF FF FF FF
DE AD BE EF BA AD
F0 0D
PASS 
```

### 4.2.28  添加开机自启动脚本
+ **临时添加自启动脚本。**

1、修改/etc/autorun.sh即可：

```plain
root@ok3562:/# cat /etc/autorun.sh
#! /bin/sh
# env

# user command

exit 0
```

2、重启板卡验证。



+ **在烧写镜像里添加开机自启动脚本：**

修改 buildroot/board/forlinx/ok3562/fs-overlay/etc/autorun.sh 即可。

重新编译打包并烧写镜像。

### 4.2.29  Uboot菜单
在uboot启动过程中出现如下信息时按空格即可进入Uboot菜单：

```plain
Hit key to stop autoboot('Spacebar'):  0
```

菜单中各项前面的数字即对应的操作命令：

```plain
---------------------------------------------
0:Exit to console
1:Reboot
2:Display type:mipi
3:amp start:off
4:combphy type:usb
---------------------------------------------
```

输入0，进入uboot的shell

输入1，开发板重启

输入2，修改显示方式，Display type将在“mipi”“lvds”“none”三者中循环显示

	mipi，即在mipi显示，适配飞凌7寸电容触摸1024*600 mipi屏幕
	
	lvds，即在lvds显示，适配飞凌10.1寸电容触摸1280*800 lvds屏幕
	
	none，即关闭显示

输入3，修改amp工作状态，amp start将在“on”“off”两者中循环显示

	on，即开启amp
	
	off，即关闭amp

输入4，修改combphy的复用功能，combphy type将在“usb”“pcie”“none”三者中循环显示

	usb，即combphy复用为usb功能
	
	pcie，即combphy复用为pcie功能
	
	none，即关闭combphy功能

通过uboot菜单修改之后自动保存，无需手动保存。

### 4.2.30  NPU测试
```plain
root@ok3562:/# rknn_common_test /usr/share/model/RK3562/mobilenet_v1.rknn /usr/share/model/dog_224x224.jpg
rknn_api/rknnrt version: 1.6.0 (9a7b5d24c@2023-12-13T17:31:11), driver version: 0.9.3
model input num: 1, output num: 1
input tensors:
  index=0, name=input, n_dims=4, dims=[1, 224, 224, 3], n_elems=150528, size=150528, fmt=NHWC, type=INT8, qnt_type=AFFINE, zp=0, scale=0.007812
output tensors:
  index=0, name=MobilenetV1/Predictions/Reshape_1, n_dims=2, dims=[1, 1001, 0, 0], n_elems=1001, size=1001, fmt=UNDEFINED, type=INT8, qnt_type=AFFINE, zp=-128, scale=0.003906
custom string: 
Begin perf ...
   0: Elapse Time = 7.60ms, FPS = 131.56
---- Top5 ----
0.929688 - 156
0.007812 - 155
0.003906 - 205
0.000000 - 0
0.000000 - 1 
```

📂 NPU使用参考资料：01-软件资料\05-原厂资料\docs\cn\Common\NPU\





# 05_OK3562平台多媒体测试

OK3562平台音视频部分应用层软件采用的是Gstreamer，支持硬件编解码。本节所有的示例均是基于Gstreamer命令行的形式。如果您需要带界面的播放器，您也可以使用qt的多媒体类，同样支持硬编解，可以参考Qt测试章节。

OK3562平台内部有一个视频处理单元VPU，支持以下格式的视频硬编解：

视频解码： H264, H265, VP9，最大支持4Kx2K@30fps

视频编码： H264，最大支持1080p@60fps

OK3562平台硬件编解码参数表：

| Video Decoder | Format | Profile | Resolution | Frame rate |
| :---: | :---: | :---: | :---: | :---: |
| | H.265 | Main Profile yuv420@L5.0 | 4096×2304 | 30 fps |
| | H.264 | Main Profile yuv400/yuv420/yuv422/@L5.0 | 1920x1080 | 60 fps |
| | VP9 | Profile0 yuv420@L5.0 | 4096x2304 | 30fps |
| Video Encoder | H.264 | High Profile level4.2 | 1920x1080 | 60 fps |


## 5.1 音频和视频播放体验
### 5.1.1  使用gst-play播放器播放视频和音频
Gplay 是基于 Gstreamer 实现的音视频播放器，能够自动根据硬件自动选择合适的插件进行音视频播放，运行也十分简单。

```plain
root@ok3562:/# gst-play-1.0 /userdata/media/1080p_60fps_h264-30S.mp4
//播放带声音视频文件，由耳机放音测试
Press 'k' to see a list of keyboard shortcuts.
Now playing /userdata/media/1080p_60fps_h265-30S.mp4
Redistribute latency...
Redistribute latency...
Redistribute latency...
0:00:30.0 / 0:00:30.0
Reached end of play list.
```

### 5.1.2  使用gst-launch 播放视频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_h265-30S.mp4 ! qtdemux ! queue ! h265parse ! mppvideodec ! waylandsink
//仅播放视频
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:01.0 / 0:00:30.0 (3.6 %)
```

### 5.1.3  使用gst-launch 播放音频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/test.mp3 ! id3demux ! mpegaudioparse ! mpg123audiodec ! alsasink device=plughw:0,0
//仅播放音频，由耳机放音测试，
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstAudioSinkClock
handling interrupt.
Interrupt: Stopping pipeline ...
Execution ended after 0:00:02.665159268
Setting pipeline to PAUSED ...
Setting pipeline to READY ...
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.1.4  使用gst-launch 播放视频和音频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_h265-30S.mp4 ! qtdemux name=dec dec. ! queue ! h265parse ! mppvideodec ! waylandsink dec. ! queue ! decodebin ! alsasink device=plughw:0,0
//播放带声音视频文件，由耳机放音测试
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Redistribute latency...
Redistribute latency...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
^Chandling interrupt. (2.6 %)
```

## 5.2 视频硬编码
OK3562最大支持H264 1920x1080@60fps。

### 5.2.1  视频硬编码H.264
```plain
root@ok3562:/# gst-launch-1.0 videotestsrc num-buffers=600 ! video/x-raw,framerate=60/1,width=1920,height=1080 ! mpph264enc ! h264parse ! mp4mux ! filesink location=test.mp4
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
0:00:18.2 / 0:00:20.0 (91.0 %)
```

## 5.3 视频硬解码
OK3562支持 H264，H265视频硬解码，H264解码器支持1920x1080@60fps，H265解码器支持4K@30fps。

OK3562使用mppvideodec组件进行视频硬解码，它的输出格式为：NV12，I420，YV12。

### 5.3.1  解码并播放H264格式视频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_h264-30S.mp4 ! qtdemux ! h264parse ! mppvideodec ! waylandsink 
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

### 5.3.2  解码并播放H264格式视频带音频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/1080p_60fps_h264-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h264parse ! mppvideodec ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink device=plughw:0,0
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

### 5.3.3  解码并播放H265格式视频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_h265-30S.mp4 ! qtdemux ! h265parse ! mppvideodec ! waylandsink
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

### 5.3.4  解码并播放H265格式视频带音频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_h265-30S.mp4 ! qtdemux name=demux demux.video_0 ! queue ! h265parse ! mppvideodec ! waylandsink demux.audio_0 ! queue ! aacparse ! faad ! alsasink device=plughw:0,0
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

### 5.3.5  解码并播放VP9格式视频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_vp9-30S.mp4 ! qtdemux name=dec dec. ! queue ! vp9parse ! mppvideodec ! waylandsink
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

### 5.3.6  解码并播放VP9格式视频带音频
```plain
root@ok3562:/# gst-launch-1.0 filesrc location=/userdata/media/4k_30fps_vp9-30S.mp4 ! qtdemux name=dec dec. ! queue ! vp9parse ! mppvideodec ! waylandsink dec. ! queue ! decodebin ! alsasink device=plughw:0,0
Pipeline is PREROLLING ...
[ 1705.438451] dwhdmi-rockchip fde80000.hdmi: Rate 266625000 missing; computeRedistribute latency. ..
NRedistribute latency...
 dynamically
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstAudioSinkClock
0:00:01.4 / 0:00:30.0 (4.8 %)
```

## 5.4 摄像头测试
OK3562支持OV13855 MIPI摄像头，同时也支持UVC摄像头。首先来测试一下UVC摄像头，这里以罗技C270进程测试，将USB摄像头插入开发板，将自动安装uvc驱动。

### 5.4.1  UVC Camera测试
**5.4.1.1摄像头识别检测和格式支持查询**

摄像头识别检测

```plain
root@ok3562:/# v4l2-ctl --list-devices	//查看设备节点，可见/dev/video40&41为USB摄像头节点
rk rkisp-statistics (platform: rkisp):
        /dev/video38
        /dev/video39

rkcif-mipi-lvds (platform:rkcif):
        /dev/media0
        /dev/media1
        /dev/media2
        ……..

WIN2 USB2.0 PC Camera: WIN2 USB (usb-fed00000.usb-1.3):
        /dev/video40
        /dev/video41
        /dev/media4
格式支持查询
root@ok3562:/# v4l2-ctl --list-formats-ext -d /dev/video40 	//查看摄像头支持的格式
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture

        [0]: 'YUYV' (YUYV 4:2:2)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 176x144
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 160x120
                        Interval: Discrete 0.033s (30.000 fps)
```

**5.4.1.2摄像头采集格式查询和修改**

摄像头采集格式查询

```plain
root@ok3562:/# v4l2-ctl -V -d /dev/video40
Format Video Capture:
        Width/Height      : 640/480
        Pixel Format      : 'YUYV' (YUYV 4:2:2)
        Field             : None
        Bytes per Line    : 1280
        Size Image        : 614400
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: ITU-R 601
        Quantization      : Default (maps to Limited Range)
        Flags             :
```

**5.4.1.3摄像头图像预览和拍照**

摄像头图像预览

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video40 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! waylandsink
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
0:00:19.3 / 99:99:99.
```

摄像头拍照

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video40 num-buffers=1 ! videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
Setting pipeline to PAUSED ...
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
Got EOS from element "pipeline0".
Execution ended after 0:00:01.224944503
Setting pipeline to NULL ...
Freeing pipeline ...
//执行完成后查看根目录下生成的pic.jpg文件即可
```

### 5.4.2  OV13855 测试
对于OV13855 等raw sensor，每一个sensor对应5个设备节点：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720421272482-6c8a7410-95c6-48b7-a81e-fb49d3e3668d.png)

Mainpath，指 Rockchip ISP的一个输出节点，可输出全分辨率图像，一般用来拍照，抓取 Raw 图。

Self Path，指 Rockchip ISP的一个输出节点，最高只能输出1080p分辨率，一般用作预览。

Statistics 3A 统计。

Input-params 3A 参数设置。

OV13855 的测试方法与UVC Camera的测试方法基本相同。本节测试以OV13855为例，

**5.4.2.1 摄像头识别检测和格式支持查询**

```plain
root@ok3562:/# v4l2-ctl --list-devices			//查看设备节点
rkcif (platform:rkcif-mipi-lvds):
        /dev/video0
        /dev/video1
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/video6
        /dev/video7
        /dev/video8
        /dev/video9
        /dev/video10

rkisp_mainpath (platform:rkisp-vir0):
/dev/video33
        /dev/video34
        /dev/video35
        /dev/video36
        /dev/video37
        /dev/media3

WIN2 USB2.0 PC Camera: WIN2 USB (usb-fed00000.usb-1.3):
        /dev/video40
        /dev/video41
        /dev/media4 
```

**5.4.2.2 摄像头预览**

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video33 ! video/x-raw, format=NV12, width=640, height=480, framerate=30/1 ! waylandsink
Setting pipeline to PAUSED ...
Using mplane plugin for capture

Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
0:00:16.3 / 99:99:99.
```

**5.4.2.3 摄像头拍照**

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video33 num-buffers=1 ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
Setting pipeline to PAUSED ...
mpi: mpp version: Without VCS info
mpp_rt: NOT found ion allocator
mpp_rt: found drm allocator
[  138.542571] rk_vcodec: vpu_service_ioctl:2138: error: unknown vpu service ioctl cmd 40086c01
Pipeline is live and does not need PREROLL ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:00.175951625
Setting pipeline to PAUSED ...
Setting pipeline to READY ...
Setting pipeline to NULL ...
Freeing pipeline ...
root@ok3562:/# ls -l pic.jpg
-rw-r--r-- 1 root root 15273 Apr 29 15:14 pic.jpg
root@ok3562:/#
```

**5.4.2.4录制H264格式视频**

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video33 num-buffers=100 ! video/x-raw,format=NV12, width=640,height=480 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! qtmux ! filesink location=13855_h264.mp4 t. ! queue ! waylandsink
//摄像头预览时编码H264
Setting pipeline to PAUSED ...
Using mplane plugin for capture
Pipeline is live and does not need PREROLL ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSyst[emClock
  424.198360] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_update_sensor_mbus fail to get dphy param, used default value
[  424.200657] rkisp_hw fdcb0000.rkisp: set isp clk = 396000000Hz
[  424.204220] rkcif-mipi-lvds: stream[0] start streaming
[  424.204242] rkcifhw fdce0000.rkcif: Only support one master device, master device count 0
[  424.204260] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_update_sensor_mbus fail to get dphy param, used default value
[  424.204962] rkcif-mipi-lvds: Allocate dummy buffer, size: 0x00436000
[  424.205013] rockchip-mipi-csi2 fdd10000.mipi0-csi2: stream on, src_sd: 00000000d34b3a12, sd_name:rockchip-csi2-dphy0
[  424.205021] rockchip-mipi-csi2 fdd10000.mipi0-csi2: stream ON
i  424.205043] rockchip-csi2-dphy csRedistribute latency...
 2-dcphy0: csi2_dphy_update_sensor_mbusRedistribute latency...
 fail to get dphy param, used default value
[  424.205051] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_update_sensor_mbus fail to get dphy param, used default value
[  424.205066] rockchip-csi2-dphy0: dphy0, data_rate_mbps 600
05073] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_update_sensor_mbus fail to get dphy param, used default value
[  424.205344] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_s_stream stream on:1, dphy0
[  424.205352] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_s_stream stream on:1, dphy0
Got EOS from element "pipeline0".
Execution ended after 0:00:03.382733006
Setting pipeline to NULL ...
[  427.611291] rkcif-mipi-lvds: stream[0] start stopping, total mode 0x1, cur 0x1
Freeing pipeline ...
[  427.614953] rockchip-mipi-csi2 fdd10000.mipi0-csi2: stream off, src_sd: 00000000d34b3a12, sd_name:rockchip-csi2-dphy0
[  427.615000] rockchip-mipi-csi2 fdd10000.mipi0-csi2: stream OFF
[  427.615827] rockchip-csi2-dproot@ok3562:/# hy csi2-dcphy0: csi2_dphy_s_stream_stop stream stop, dphy0
[  427.615868] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_s_stream stream on:0, dphy0
[  427.615934] rockchip-csi2-dphy csi2-dcphy0: csi2_dphy_s_stream stream on:0, dphy0
[  427.635242] rkcif-mipi-lvds: stream[0] stopping finished
[  427.674994] rkisp rkisp0-vir1: first params buf queue
root@ok3562:/# ls -l 13855_h264.mp4          //查看是否生成H264文件
-rw-r--r-- 1 root root 417871 Apr 29 15:15 13855_h264.mp4
root@ok3562:/#
```

**5.4.2.5播放H264格式视频**

```plain
root@ok3562:/# gst-launch-1.0 filesrc location=13855_h264.mp4 ! qtdemux ! queue ! h264parse ! mppvideodec ! waylandsink
//播放H264视频
Setting pipeline to PAUSED ...
Pipeline is PREROLLING ...
Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
Redistribute latency...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:03.303679248
Setting pipeline to NULL ...
Freeing pipeline ...
```

### 5.4.3  OV5645 测试
OV5645 的测试方法与UVC Camera的测试方法基本相同。本节测试以OV5645为例，

**5.4.2.1 摄像头识别检测和格式支持查询**

```plain
root@ok3562:/# v4l2-ctl --list-devices			//查看设备节点
rkisp-statistics (platform: rkisp):
        /dev/video38
        /dev/video39

rkcif-mipi-lvds (platform:rkcif):
        /dev/media0
        /dev/media1
        /dev/media2

rkcif (platform:rkcif-mipi-lvds3): //根据接入的位置可能是 rkcif-mipi-lvds2	
        /dev/video22
        /dev/video23
        /dev/video24
        /dev/video25
        /dev/video26
        /dev/video27
        /dev/video28
        /dev/video29
        /dev/video30
        /dev/video31
        /dev/video32

rkisp_mainpath (platform:rkisp-vir0):
        /dev/video33
        /dev/video34
        /dev/video35
        /dev/video36
        /dev/video37
        /dev/media3

```

**5.4.2.2 摄像头预览**

rkcif-mipi-lvds2  对应 /dev/video11  
rkcif-mipi-lvds3 对应 /dev/video22

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw, format=NV12, width=640, height=480, framerate=30/1 ! waylandsink
Setting pipeline to PAUSED ...
Using mplane plugin for capture

Pipeline is PREROLLED ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Redistribute latency...
0:00:16.3 / 99:99:99.
```

**5.4.2.3 摄像头拍照**

```plain
root@ok3562:/# gst-launch-1.0 v4l2src device=/dev/video22 num-buffers=1 ! video/x-raw,format=NV12,width=640,height=480 ! mppjpegenc ! filesink location=pic.jpg
Setting pipeline to PAUSED ...
mpi: mpp version: Without VCS info
mpp_rt: NOT found ion allocator
mpp_rt: found drm allocator
[  138.542571] rk_vcodec: vpu_service_ioctl:2138: error: unknown vpu service ioctl cmd 40086c01
Pipeline is live and does not need PREROLL ...
Setting pipeline to PLAYING ...
New clock: GstSystemClock
Got EOS from element "pipeline0".
Execution ended after 0:00:00.175951625
Setting pipeline to PAUSED ...
Setting pipeline to READY ...
Setting pipeline to NULL ...
Freeing pipeline ...
root@ok3562:/# ls -l pic.jpg
-rw-r--r-- 1 root root 15273 Apr 29 15:14 pic.jpg
root@ok3562:/#
```

## 5.5 Gst定点测试
OK3562 当前gstreamer支持播放视频定点功能，输入以下命令测试：

```plain
root@ok3562:/#  gst-launch-1.0 uridecodebin uri=file:///oem/SampleVideo_1280x720_5mb.mp4 ! fpsdisplaysink name=fps0 video-sink="waylandsink render-rectangle=\"<120,180,480,300>\"" text-overlay=false & gst-launch-1.0 uridecodebin uri=file:///userdata/media/1080p_60fps_h264-30S.mp4 ! fpsdisplaysink name=fps1 video-sink="waylandsink render-rectangle=\"<600,180,480,300>\"" text-overlay=false
```

屏幕显示结果：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1720421272829-c87e727b-555c-4c7f-8bd4-ab16f9a33c94.jpeg)

⚠️ **注意：多路解码播放H264 1080P60和H265 4KP30视频出现播放卡顿，解码能力不足造成的。**

## 5.6 GPU测试
OK3562支持GPU测试：

```plain
root@ok3562:/# glmark2-es2-wayland --fullscreen --visual-config='a=0:buf=24' --annotate    //全屏测试
arm_release_ver: g13p0-01eac0, rk_so_ver: 10
=======================================================
    glmark2 2023.01
=======================================================
    OpenGL Information
    GL_VENDOR:      ARM
    GL_RENDERER:    Mali-G52
    GL_VERSION:     OpenGL ES 3.2 v1.g13p0-01eac0.98c5dad4e3309b873e3189000b74ea36
    Surface Config: buf=24 r=8 g=8 b=8 a=0 depth=24 stencil=0 samples=0
    Surface Size:   1024x600 fullscreen
=======================================================
[build] use-vbo=false: FPS: 723 FrameTime: 1.385 ms
[build] use-vbo=true: FPS: 766 FrameTime: 1.306 ms
[texture] texture-filter=nearest: FPS: 1005 FrameTime: 0.996 ms
[texture] texture-filter=linear: FPS: 999 FrameTime: 1.001 ms
[texture] texture-filter=mipmap: FPS: 1014 FrameTime: 0.987 ms
[shading] shading=gouraud: FPS: 560 FrameTime: 1.788 ms
[shading] shading=blinn-phong-inf: FPS: 710 FrameTime: 1.409 ms
[shading] shading=phong: FPS: 563 FrameTime: 1.777 ms
[shading] shading=cel: FPS: 543 FrameTime: 1.842 ms
[bump] bump-render=high-poly: FPS: 309 FrameTime: 3.240 ms
[bump] bump-render=normals: FPS: 995 FrameTime: 1.005 ms
[bump] bump-render=height: FPS: 921 FrameTime: 1.087 ms
[effect2d] kernel=0,1,0;1,-4,1;0,1,0;: FPS: 390 FrameTime: 2.567 ms
[effect2d] kernel=1,1,1,1,1;1,1,1,1,1;1,1,1,1,1;: FPS: 151 FrameTime: 6.663 ms
[pulsar] light=false:quads=5:texture=false: FPS: 968 FrameTime: 1.034 ms
[desktop] blur-radius=5:effect=blur:passes=1:separable=true:windows=4: FPS: 214 FrameTime: 4.690 ms
[desktop] effect=shadow:windows=4: FPS: 674 FrameTime: 1.486 ms
[buffer] columns=200:interleave=false:update-dispersion=0.9:update-fraction=0.5:update-method=map: FPS: 140 FrameTime: 7.171 ms
[buffer] columns=200:interleave=false:update-dispersion=0.9:update-fraction=0.5:update-method=subdata: FPS: 139 FrameTime: 7.239 ms
[buffer] columns=200:interleave=true:update-dispersion=0.9:update-fraction=0.5:update-method=map: FPS: 223 FrameTime: 4.486 ms
[ideas] speed=duration: FPS: 350 FrameTime: 2.857 ms
[jellyfish] <default>: FPS: 410 FrameTime: 2.442 ms
[terrain] <default>: FPS: 32 FrameTime: 32.203 ms
[shadow] <default>: FPS: 304 FrameTime: 3.298 ms
[refract] <default>: FPS: 82 FrameTime: 12.213 ms
[conditionals] fragment-steps=0:vertex-steps=0: FPS: 965 FrameTime: 1.037 ms
[conditionals] fragment-steps=5:vertex-steps=0: FPS: 693 FrameTime: 1.445 ms
[conditionals] fragment-steps=0:vertex-steps=5: FPS: 931 FrameTime: 1.075 ms
[function] fragment-complexity=low:fragment-steps=5: FPS: 783 FrameTime: 1.279 ms
[function] fragment-complexity=medium:fragment-steps=5: FPS: 598 FrameTime: 1.673 ms
[loop] fragment-loop=false:fragment-steps=5:vertex-steps=5: FPS: 783 FrameTime: 1.279 ms
[loop] fragment-steps=5:fragment-uniform=false:vertex-steps=5: FPS: 785 FrameTime: 1.274 ms
[loop] fragment-steps=5:fragment-uniform=true:vertex-steps=5: FPS: 687 FrameTime: 1.457 ms
=======================================================
                                  glmark2 Score: 587
=======================================================
root@ok3562:/#  glmark2-es2-wayland --visual-config='a=0:buf=24' --annotate    //正常显示测试
arm_release_ver: g13p0-01eac0, rk_so_ver: 10
=======================================================
    glmark2 2023.01
=======================================================
    OpenGL Information
    GL_VENDOR:      ARM
    GL_RENDERER:    Mali-G52
    GL_VERSION:     OpenGL ES 3.2 v1.g13p0-01eac0.98c5dad4e3309b873e3189000b74ea36
    Surface Config: buf=24 r=8 g=8 b=8 a=0 depth=24 stencil=0 samples=0
    Surface Size:   1280x800 fullscreen
=======================================================
[build] use-vbo=false: FPS: 561 FrameTime: 1.783 ms
[build] use-vbo=true:
```







# 06_烧写系统

OK3562-C开发板目前支持OTG和TF卡两种烧写方式。在用户资料中提供了相应的烧写工具，用户可选择任意一种方式进行镜像烧写。

## 6.1 OTG烧写系统
### 6.1.1  OTG驱动安装
📂**<font style="color:#000000;"> 路径：</font>****02-用户资料\01-软件资料\04-工具\DriverAssitant_v5.1.1.zip**

将上述路径文件解压到任意目录，以管理员权限运行

打开DriverInstall.exe 程序。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418372654-458dfae6-fe39-4e90-a884-b5c76a0d4659.png)

点击“驱动安装”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418372998-55b52477-7160-490a-9674-11b926fabb18.png)



### 6.1.2  OTG完全烧写测试
**6.1.2.1 RKDevTool烧写测试**

<font style="color:#000000;"> </font>📂** ****<font style="color:#000000;">路径：02-用户资料\01-软件资料\04-工具\</font>****RKDevTool_v3.19_for_window.zip**

这是瑞芯微提供的一款开发工具，使用前将其解压到全英文路径下，用Type-C线连接开发板TYPE-C0口和主机，按住开发板的recovery键不要松开，然后按一下reset键系统复位，大约两秒后松开recovery键。瑞芯微开发工具上将提示发现loader设备。

**⚠️**** 注意：**

+ **识别设备的操作是开发板上电时recovery按键是按下的状态。**
+ **理论上瑞芯微开发工具解压目录随意，但有用户反馈瑞芯微开发工具解压目录需为全英文，若打开开发工具后与下图不一致，请考虑解压其在全英文目录下。**
+ **烧写OTG口位于开发板背面**

![](https://cdn.nlark.com/yuque/0/2025/jpeg/45534390/1750401730638-6b297042-f5f5-4712-af81-990a5731fe0f.jpeg)

打开瑞芯微开发工具：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418373238-ded5a5da-5ef9-4382-9150-a8fccf92f309.png)

点击“升级固件”选项卡，点击“固件”按钮选择完整的升级镜像update.img。程序将对固件进行解析，因此需要等待一会。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418373446-68f5d3be-afdc-4bdd-ac64-912497c76847.png)

点击“切换”等待板子进入LOADER模式，点击“升级”按钮进行升级。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418373687-e2ee7480-1523-4f1d-bba1-4836940ca5d5.png)

**MASKROM模式介绍**

<font style="color:#000000;">如果loader损坏无法进入Loader模式时，可以按住BOOT键然后按复位键进入maskrom模式进行烧写。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418373917-956f9b2d-54fd-48c6-b4e6-069c8e8488af.png)

此时系统将提示发现一个maskrom设备，烧写流程与loader模式一致，最好使用update.img烧写。

**⚠️**** 注意：**

+ **maskrom模式下不要点击“设备分区表”，为无效操作。**
+ **maskrom模式下单独烧写不会清除UBOOT环境变量。**

**6.1.2.2 FactoryTool烧写测试**

FactoryTool是工厂批量OTG烧写时使用到的工具，其不需要读取镜像，可以批量烧写，另外其可烧写某些较大的镜像文件，若RKDevTool兼容性不满足时，亦可尝试该方式，使用前将其解压到全英文路径下，用Type-C线连接开发板和主机，按住开发板的recovery键不要松开，然后按一下reset键系统复位，大约两秒后松开recovery键。瑞芯微开发工具上将提示发现loader设备。

**⚠️**** 注意：**

+ **识别设备的操作是开发板上电时recovery按键是按下的状态。**
+ ******理论上解压目录随意，但有用户反馈瑞芯微开发工具解压目录需为全英文，若打开开发工具后与下图不一致，请考虑解压其在全英文目录下。**

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418374138-b6613de5-c4e7-4c57-ab8b-6d41d165e5c3.png)

点击选择固件，点击启动，此时识别到loader设备将自动开始烧写。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418374490-7567e660-737f-4218-8cfa-3b7c9be57d3e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418374807-bd102591-2c43-41da-83b9-2f7307977ca3.png)

### 6.1.3  OTG分步烧写测试
在研发阶段每次都进行全部烧写是非常耗时的，因此这里介绍一下使用OTG烧写工具进行单独分区烧写的方法。

⚠️** 注意：识别设备的操作是开发板上电时recover按键是按下的状态。**

首先，在OK3562-linux-source编译完成后，在rockdev目录可以找到单独的分区镜像。

以单独烧写boot.img（包含设备树和开机logo）为例，演示烧写方法。

使用Type-C线连接开发板和主机，按住recover键然不要松开然后按reset键系统复位，大约两秒后松开recover键。系统将提示发现loader设备。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418375129-89e69424-6ab1-40ec-a113-86f2437728d9.png)

点击“设备分区表”按钮，将自动读取分区地址，提示是否更新下载地址，点击“是”，会报读分区表成功，点击分区右测区域选择分区镜像，并勾选分区。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418375357-f7716cdb-bc83-43f5-83d6-717dff0f7495.png)

点击“执行”按钮将自动烧写并重新启动。

## 6.2  TF卡烧写系统
烧写TF卡制作与烧写测试。

⚠️** 注意：测试TF卡容量最大为32G，使用32G以上TF卡可能会烧写失败。**

将用户资料工具目录的SDDiskTool_v1.76.zip拷贝到windows任意目录。以管理员权限运行SD_Firmware_Tool.exe。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418375573-2107d191-e37e-4a2c-96d2-442aa8f4b146.png)

选择磁盘设备，勾选“固件升级”，并选择update.img。点击开始创建。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418375797-0c018d08-61c7-48e9-9500-72810e54ce87.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418375991-5a26cc1b-497f-4931-a823-0e988fadcaf9.png)

将TF卡插入开发板并启动，系统将自动进入烧写流程。烧写完成后屏幕和串口都将提示：

Please remove SD CARD!!!, wait for reboot.

此时，拔出TF卡，系统自动重新启动(请勿直接断电)。

批量生产时，可以根据核心板的心跳灯来判断烧写是否完成，烧写过程中的心跳灯变化如下：

1. 内核启动阶段：心跳灯模式，规律的间歇性闪烁。
2. 烧写准备阶段：EMMC指示灯，熄灭。
3. 烧写进行阶段：EMMC指示灯，常亮。
4. 烧写完成阶段：心跳灯模式，规律的间歇性闪烁。

烧写状态串口信息：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1720418376211-f91fcd64-b82e-4d38-bd9d-aa4f8d390be0.png)

若移除TF未自动重启，手动重启也可完成烧写。烧写过程中请耐心等待。



