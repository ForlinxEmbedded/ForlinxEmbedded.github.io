# 00_Forlinx Desktop 22.04用户编译手册

版本：V1.0  

发布日期：2025.02.28  

文件密级：□绝密 □秘密 □内部资料 ■公开

# <font style="color:#000000;">免责声明</font>
<font style="color:#000000;">本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。</font>

<font style="color:#000000;">保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。 </font>

# <font style="color:#000000;">概述</font>
<font style="color:rgb(51,51,51);">本手册是为了让使用飞凌嵌入式开发板的人员能够快速了解飞凌产品的编译过程，熟悉飞凌产品的编译方式。应用程序需要在</font>linux操作系统<font style="color:rgb(51,51,51);">上先进行交叉编译，才能在开发板上运行，</font>按照编译手册上的方法，通过实际操作，用户能够完成自己软件代码的编译。

手册会从环境搭建进行说明，环境搭建过程可能会出现一些不可预见的问题，建议初学者直接使用我们搭建好的开发环境，可以快速上手，缩短开发时间。

Linux系统通常情况下有三种安装方式：真机双系统、真机单系统、虚拟机。不同安装方式都有其优缺点，本文仅提供在虚拟机中搭建ubuntu的方法。计算机硬件要求：建议内存至少在6GB及以上，这样在给虚拟机分一部内存运行的同时（虚拟机建议2GB以上 ），还可以在Windows做其他操作，否则会影响到Windows的操作。

在内容上手册主要分为4个章节描述：

第一章主要是VMware的安装，选用的版本为VMware® Workstation 15 Pro15.1.0，用户在使用ubuntu开发环境之前要先安装VMware 。

第二章主要是加载飞凌提供的ubuntu开发环境的方法，开发环境为64位ubuntu22.04。

第三章主要是搭建新的ubuntu开发环境的方法。本节选用的64位ubuntu22.04为例，描述了ubuntu的创建，由于电脑配置不同，搭建过程可能会出现预料之外的问题，建议初学者直接使用我们搭建好的环境。

第四章主要是开发板相关源码编译方法。

本手册中一些符号及格式的相关说明：

| **表现形式** | **含义** |
| :---: | --- |
| ⁉️ | 注意或者是需要特别关注的信息，一定要仔细阅读 |
| 📚 | 对测试章节做的相关说明 |
| 🛤️ | 表示相关路径 |
| <font style="color:blue;">蓝色字体</font> | 指在命令行输入的命令，需要手动输入 |
| <font style="color:black;">黑色字体</font> | 输入命令后的串口输出信息 |
| **<font style="color:black;">黑色加粗</font>** | 串口输出信息中的关键信息 |
| // | 对输入指令或输出信息的解释内容 |
| 用户名@主机名 | root@ok3568 ：开发板串口登录账户信息，   forlinx@rk3568：开发板网络登录账户信息   forlinx@ubuntu：开发环境ubuntu账户信息   用户可通过该信息确定功能操作的环境 |


例：打包文件系统后，使用ls查看生成文件的操作

```markdown
forlinx@ubuntu:~/3568$ ls                                  //列出该目录下的文件
OK3568-linux-source  OK3568-linux-source.tar.bz2
```

forlinx@ubuntu：用户名为forlinx，主机名为ubuntu，表示在开发环境ubuntu中进行操作。

// ：对操作指令的解释说明内容，不需要输入

<font style="color:rgb(0,0,255);background-color:rgb(217,217,217);">ls</font>：灰底蓝色字体，表示需要手动输入的相关命令

**OK3568-linux-source**：底黑色字体为输入命令后的输出信息，加粗字体为关键信息，此处为打包后的文件系统。

# **<font style="color:rgb(38, 38, 38);">更新记录</font>**
| **日期****   ** | **手册版本****   ** | **更新记录****   ** |
| :---: | :---: | --- |
| 20250228 | <font style="color:rgb(38, 38, 38);">V1.0</font><font style="color:rgb(38, 38, 38);">   </font> | <font style="color:rgb(38, 38, 38);">OK</font><font style="color:rgb(38, 38, 38);">3</font><font style="color:rgb(38, 38, 38);">568 Forlinx Desktop22.04</font><font style="color:rgb(38, 38, 38);">用户编译手册第一版；</font><br/><font style="color:rgb(38, 38, 38);"> 注：本编译手册只适用于飞凌公司的OK3568 开发板   </font> |




# 01_VMware虚拟机软件安装

本章主要介绍VMware虚拟机的安装，以VMware workstation 15 Pro v15.1.0为例展示操作系统的安装配置过程。

## <font style="color:#000000;">1.1 VMware软件的下载与购买</font>
[登陆VMware官网https://www.vmware.com/cn.h](https://www.vmware.com/cn.html)[tml下载](https://www.vmware.com/cn.html)Workstation Pro并获取产品密匙。VMware是付费软件，需要自行购买，或者使用VMware提供的试用版本。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209495299-799ee221-9dff-4815-b8d3-a685b32f971b.png)

等待下载完成后双击启动文件启动安装程序。

## <font style="color:#000000;">1.2 VMware软件的安装</font>
双击启动程序进入安装向导。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209495516-2577c76e-b873-4413-bd12-9cdb9bb35cd1.png)

点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209495744-b2803b4e-0808-49a0-a39c-37b0e1bb062e.png)

勾选我接受许可协议中的条款，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209495901-47b073cf-6bcf-4610-9da4-eabfb0dcd192.png)

修改安装位置，装到自己电脑安装软件的分区，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209496107-e2d70089-70d9-4c62-a773-15c510eb170d.png)

勾选，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209496313-08157317-dbf5-40e0-a9cf-610e2526d95f.png)

勾选添加快捷方式，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209496500-20204188-b425-4016-b17c-de930587ae2e.png)

点击“安装”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209496717-f6f5d128-1585-41b0-83a6-c9bec52d7d15.png)

等待安装完成。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719209497041-1df7c12a-752d-4fa8-9730-2a07c6cafa98.png)

点击完成后可进行试用。若用户需要长期使用，需要到官方购买，填写许可证。



# 02_加载已有ubuntu开发环境

<font style="color:rgb(0, 0, 0);background-color:rgb(218, 234, 252);">⁉️</font>**注意：**

+ **建议初学者直接使用飞凌搭建好的虚拟机环境。了解完该章节后可以直接跳转到编译章节。**
+ **提供开发环境的账户为：forlinx，密码为：forlinx**

在VMware下使用虚拟机的环境有两种方式，一种是直接加载已有的环境，另一种是新建一个环境，我们先来说说如何加载一个已经存在的环境。

首先，下载飞凌提供的开发环境，开发环境资料中有MD5校验文件，用户下载完开发环境资料，先对开发环境压缩包进行MD5校验（MD5校验可以在网络上选择MD5在线工具校验，也可以下载MD5校验工具进行校验，可根据实际情况选择），查看校验码和校验文件中校验码是否一致，若一致则下载文件正常；若不一致，则文件可能有破损，需要重新下载。

选中压缩包一起解压

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278548687-41fb4543-911d-4ce3-9b88-09f7fb114c01.png)

解压完成后选中.vmx为虚拟机要打开的文件。

打开虚拟机，选择解压出来的3588开发环境.vmx

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278548894-5a126d86-d30f-4f1c-906b-1d615fdf2e0a.png)

加载完成后点击开启此虚拟机，即可运行，进入系统的界面。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549103-fbe0d3f1-43ad-4b37-aa46-27fd9fc4a526.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549304-2128d94e-45fa-4091-83c8-678157602b7b.png)

```plain
提供开发环境的账户为forlinx，密码为forlinx，填好密码后选择Sign in登录。
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549464-41fc41e5-d024-4e97-a993-d6b193bc8aae.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549733-cae28152-e433-4a1e-90ab-8a2479049af5.png)



# 03_搭建新的ubuntu开发环境

<font style="color:rgb(0, 0, 0);background-color:rgb(218, 234, 252);">⁉️</font>**注意：初学者不建议自己搭建系统，建议使用已有虚拟机环境，不需要搭建环境的此节可以跳过本章节主要讲解了ubuntu系统的搭建过程。**

## 3.1 ubuntu系统搭建
### 3.1.1 创建ubuntu虚拟机
打开VMware软件，点击创建新的虚拟机。进入以下界面：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278531825-28237039-37c8-4a5f-8597-f64b71e7e312.png)

选择自定义，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532008-920d71ea-3371-425c-9b27-a15b1789fdf9.png)

选择对应VMware版本的兼容性，版本可在帮助->关于VMware Workstation中查看，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532173-48b35578-2a3d-4aff-9888-513f9b66eaaf.png)

选择稍后安装操作系统，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532371-cd7442c7-21c1-4c8a-8463-24ea3de5f6c1.png)

保持默认，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532534-39687568-6ee3-4284-b373-2104df01f0fb.png)

修改虚拟机名称及安装位置，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532718-2cd2ea2a-0f97-46d5-ad8b-4f004e889a20.png)

按照实际情况设置处理器数量。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532900-dd3f7357-07c5-4dc4-9fd1-7d367c7a7111.png)

同样按照实际情况设置内存大小，建议使用16G。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533112-8f49bb5a-64b5-47df-8798-044888bfa83b.png)

设置网络类型，默认为NAT模式，点击下一步。后面的步骤保持默认值，直到指定磁盘容量步骤。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533381-8dc68236-561d-4840-abb7-3512def5cecf.png)

IO控制器类型这里默认选择LSI就可以：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533635-d54cda44-50e2-4643-b3d3-54dc41a1bfa6.png)

这里同样是默认选择SCSI。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533807-86b2d601-916f-4f7d-b7c0-4a672e97d659.png)

这里选择创建新的虚拟磁盘：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534036-c400a9dc-bdac-4dde-bd52-d4e721fb4ccd.png)

设置磁盘大小为200G，并选择磁盘的存在形式，然后点击“下一步”完成。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534210-b2fc7391-1c76-4148-80c8-855cd9174698.png)

指定磁盘文件，这里默认即可。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534358-9585162d-5c54-42eb-be37-f9361aebf91d.png)

默认点击“完成”即可。

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534538-0cb90337-6bc8-4fc5-8009-267ab1d2617c.png)

至此，虚拟机创建完成。

下一小节中我们介绍Ubuntu系统在虚拟机中的安装，其在真机中的安装方法与虚拟机类似。这里我们介绍在虚拟机中安装Ubuntu系统的方法。

### 3.1.2 系统安装
上一节，我们已经创建了一个虚拟机，但并没有安装操作系统，所以虚拟机还是无法启动，接下来我们就是要在刚刚新建的这个虚拟机中安装Ubuntu操作系统。

步骤1：<font style="color:#000000;">首先去Ubuntu官网获取Ubuntu22.04 64位镜像，下载地址为：</font>

[https://old-releases.ubuntu.com/releases/22.04.4/](https://old-releases.ubuntu.com/releases/22.04.4/)

我们安装的Ubuntu版本是22.04的，之所以选择22.04，是因为我们的源码编译操作都是在22.04上编译验证过的。不同的Ubuntu系统版本在进行这些操作可能会有略微的差别。

下载“ubuntu-22.04.4-desktop-amd64.iso”这个版本。

由于是国外的源，下载过程不稳定，而且很慢，可以直接找百度网盘的资源下载。下载镜像后就可以进行系统安装操作。

右击创建的虚拟机名称，在弹出菜单中选择设置。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889311-2d81dcbe-0cae-4c55-97c9-537521a15233.png)

弹出“虚拟机设置”菜单。点击CD/DVD（SATA），选择使用ISO映像文件，浏览选择前面下载的Ubuntu镜像，然后确定。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889395-57b816c7-f087-4484-b199-0ae4072b78a9.png)

设置好镜像后，保证网络可用，然后开启虚拟机，进行Ubuntu镜像的安装。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889505-af95223f-7c56-4ac1-91b2-d0b296a66d56.png)

开启虚拟机后，等待出现安装界面如下 ：

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890419-f63f9e4b-a842-4803-b4a0-14ba03114355.png)

如图左侧选择语言后,点击“Install Ubuntu”后弹出选择语言界面。Ubuntu默认语言是英文的，当然，也可以选择中文。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890557-18555bfc-fbf5-45d6-8e16-feac46c251c5.png)

默认选择的语言在后期也是可以重新设置的，选择完成后continue。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890734-0b3511e9-b2f6-4f36-bdd6-c31587e228c4.png)

接下来，默认选择continue继续安装，安装过程会很慢，然后continue。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890857-a70f3458-1cbc-4a95-b05a-b043523c2459.png)

默认，点击Install Now，会弹出如图，点击continue即可。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890982-dbea3986-b673-407e-9503-1be99e3e94fc.png)

接下来选择时区，这里点击上海时区或输入Shanghai即可（不同时区根据实际情况选择即可），点击继续。

最后设置用户名和密码，选择自动登录或账号密码登录，点击continue就会自动安装。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891072-cb8c2930-a9c8-49ed-8808-9031ac4d4639.png)

网络不好可以Skip跳过，不影响安装。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891156-8ffa342c-1e22-46b3-82f6-b83a8e086885.png)

点击Restart Now重启。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891244-2e59f99c-d450-4eb1-994a-581e1f12e959.png)

重启完成后系统界面。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891329-4c85569f-7904-478e-8988-52069ee388c2.png)

以上，ubuntu系统安装完成。

### 3.1.3 Ubuntu的基本配置
安装好Ubuntu22.04操作系统后，要进行一些配置。

VMware Tools安装：

接下来安装VMware Tools，如果不安装该工具，在Windows主机和虚拟机之间无法使用复制粘贴、文件拖拽。首先点击VMware 导航栏上的“虚拟机”，然后在下拉框中点击“安装VMware Tools”。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889588-bda78844-fce6-43a6-a75d-1404d2f9ad28.png)

完成后进入Ubuntu，桌面会出现VMware Tools的光盘，点击进入其中。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891407-959cc772-0a6c-4379-b8e2-5e5af5220e8a.png)

进入后看到一个压缩文件VMwareTools-10.3.25-20206839.tar.gz（不同的虚拟机版本可能会不同），复制文件到主目录下面（即home 个人用户名的目录下）。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889665-e29da06d-684b-43f3-95e7-723c8e0e49ce.png)

按【Ctrl+Alt+T】调出终端命令界面，输入命令：

```plain
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.25-20206839.tar.gz
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889754-5ef28ab4-bca1-4dd0-b8c4-c86632732fc7.png)

解压完成后会出现一个vmware-tools-distrib的文件。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889840-6772f25c-e453-43cc-bd60-d866a66ab021.png)

回到终端，输入：<font style="color:#0000ff;">cd vmware-tools-distrib</font> 进入该目录。

再输入：<font style="color:#0000ff;">sudo ./vmware-install.pl</font> 回车后输入密码，然后就开始安装，遇到询问就输入yes，其他一律回车默认安装就可以。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967889932-d60cd0ca-104a-4e8d-8a07-5b2ac92de3ed.png)

VMware tools工具完成后，我们就可以实现Windows和Ubuntu之间的文件复制粘贴。

虚拟机全屏显示：

如果虚拟机不能够全屏显示，可以通过点击查看，选择自动调整大小，点击自动适应客户机，即可实现虚拟的全屏问题。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890068-b095fc4a-3c1b-4cbe-ba18-ac9c69d9fff9.png)

在如图位置进行大部分的系统设置。Ubuntu上很多设置的需求都可以在这里完成。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890138-709b6bde-91ee-490c-984b-731cd8421348.png)

虚拟机休眠设置：

另外，默认的休眠是5min，如果不想设置休眠，通过设置Power->Screen Blank设置成Never即可。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967891518-9640b2fc-00da-4b18-966e-7696f18aafae.png)

### 3.1.4 Ubuntu的网络设置
+ **NAT模式**

默认情况下，虚拟机安装完成后网络连接方式如下图所示为NAT，与宿主机共享一个IP地址，我们在进行依赖包的安装，代码的编译等工作时是不需要更改的。

在虚拟机中，VMware虚拟网卡设置为NAT模式时，Ubuntu环境中网络设置为动态IP即可。在这种模式下虚拟NAT设备和主机网卡相连通信上网。这种是我们虚拟机上外网最常用的方式。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890224-d642497d-9876-4d31-897d-02276b6462f3.png)

+ **桥接模式：**

VMware虚拟网卡设备为桥接模式时，主机网卡和虚拟机网卡通过虚拟网桥进行通信，需要在Ubuntu环境中设置网络IP与主机在同一个网段，如果需要上外网需要设置DNS与主机网卡一致。如果在使用TFTP，SFTP等服务器时则需要设置虚拟机的网络联系方式为桥接方式。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967890300-c8f1cdf9-6868-4ca0-95a1-41ca03dceff4.png)

## 3.2 安装编译Linux系统所需要的库
⁉️ 注意：若您使用的是我们提供的开发环境，本小节可以直接跳过。

Linux系统的编译需要安装一些工具包。本节操作前必须确保您的计算机或虚拟机能正常连接互联网，如您在安装中出现网络断开连接请再按照以下步骤进行安装。

1. 安装编译Linux必要的包

```plain
forlinx@ubuntu:~$ sudo apt-get update                                         //更新apt-get下载源
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot        //必备工具包的安装
forlinx@ubuntu:~$ sudo apt-get install repo git ssh make gcc libssl-dev liblz4-tool expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler python-pip libncurses5-dev
forlinx@ubuntu:~$ sudo apt-get install libgmp-dev  libmpc-dev libicu-dev bsdmainutils
```

使用网络配置工具和menuconfig时还需要安装以下库：

```plain
forlinx@ubuntu:~$ sudo apt-get update                             //更新下载源信息
forlinx@ubuntu:~$ sudo apt-get install build-essential            //提供编译程序必须软件包的列表信息
forlinx@ubuntu:~$ sudo apt-get install libncurses*                //用于生成基于文本的用户界面
forlinx@ubuntu:~$ sudo apt-get install lzop                       //基于Lzo库的压缩解压工具
forlinx@ubuntu:~$ sudo apt-get install net-tools                  //网络配置工具
```



# 04_相关代码编译

Forlinx Desktop系统是飞凌在ubuntu base的基础上构建的桌面操作系统，完全兼容ubuntu22.04，支持apt-get等，相对传统的Linux系统易用性更高。

本章节主要描述开发板相关源码的编译方法，包括内核源码编译、应用程序编译方法。

## <font style="color:#000000;">4.1编译前准备</font>
### <font style="color:#000000;">4.1.1 环境说明</font>
+ 开发环境操作系统：Ubuntu22.04  64位版
+ 交叉工具链：aarch64-linux-gnu
+ 开发板使用Bootloader 版本：u-boot-2017.09
+ 开发板内核版本：linux-5.10.160
+ 开发板移植QT版本：qt5.15.3

### <font style="color:#000000;">4.1.2 拷贝源码 </font>
🛤️ 程序源码：用户资料\Linux\源码\OK3568-linux-source.tar.bz2

创建工作目录

```markdown
forlinx@ubuntu:~$ mkdir -p /home/forlinx/3568						//按照顺序创建工作目录
将用户资料中的源码文件OK3568_Linux_fs.tar.bz2.0*拷贝到虚拟机/home/forlinx/3568目录。
forlinx@ubuntu:~$ cd /home/forlinx/3568									//切换到工作目录
forlinx@ubuntu:~/3568$ cat OK3568_Linux_fs.tar.bz2.0* > OK3568_Linux_fs.tar.bz2
forlinx@ubuntu:~/3568$ tar -xvf OK3568_Linux_fs.tar.bz2			//在当然位置解压压缩包
```

运行命令后等待完成即可。

## <font style="color:#000000;">4.2 源码编译</font>
⁉️ **注意：**

+ **初次解压内核源码后，需要先对源码进行整体编译**
+ **整体编译过后，可根据实际情况再进行单独编译**
+ **该源码编译需要开发环境运行内存8G及以上，请不要修改我们提供的VM虚拟机镜像配置**

### <font style="color:#000000;">4.2.1 全编译测试</font>
在源码路径内，提供了编译脚本build.sh，运行该脚本对整个源码进行编译，需要在终端切换到解压出来的源码路径，找到build.sh文件。

```markdown
forlinx@ubuntu:~$ cd /home/forlinx/3568/OK3568_Linux_fs
```

以下操作需要在源码目录下操作，选择编译配置：

```markdown
forlinx@ubuntu:~/3568/OK3568_Linux_fs$ ./build.sh defconfig
```

执行后会有选项输入，如下图，输入3后按回车继续。

![](https://cdn.nlark.com/yuque/0/2025/png/45471259/1743478942763-68265633-64e9-49f3-ac39-c6ff42aacd60.png)

完成上述配置后，使用命令进行全编译：

```markdown
forlinx@ubuntu:~/3568/OK3568_Linux_fs$ ./build.sh
```

![](https://cdn.nlark.com/yuque/0/2025/png/45471259/1743479316064-731d8384-6211-4515-b401-2d1d585dadc7.png)

编译成功后，将在OK3568_Linux_fs/rockdev文件夹下生成对应编译工程结果文件，找到其中的镜像文件。

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967893085-6993301c-972a-4cb2-ac2d-64e43e932d7d.png)

⁉️ **注意：**update.img为打包好用于OTG或者TF卡完全烧写用，其它文件为分步烧写使用

### <font style="color:#000000;">4.2.2 单独编译内核</font>
用户在内核源码路径下进行操作。 

```markdown
forlinx@ubuntu:~/3568/OK3568_Linux_fs$ ./build.sh kernel
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967893180-f35264b3-2934-481f-ba51-cea6b23f3581.png)

编译成功后update.img里的内核不更新。请分步烧写kerndl/boot.img文件。

### <font style="color:#000000;">4.2.3 清除编译生成的文件</font>
用户在内核源码路径下进行操作。

```markdown
forlinx@ubuntu:~/3568/OK3568_Linux_fs$ ./build.sh cleanall
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740967893261-34870309-6fb4-4476-bda2-174341658293.png)

该操作清除所有中间文件。但不影响源文件，包括已经有改动的源文件。

## <font style="color:#000000;">4.3 Image文件的使用</font>
update.img为打包好用于OTG或者TF卡完全烧写用，其它文件为分步烧写使用。单独编译生成的Image文件不会在update.img文件中更新，需使用单步烧写来烧录（详见软件手册OTG烧写）。



# 05_Ubuntu应用程序开发

本章节讲解如何建立**Ubuntu**应用开发环境和qt应用的开发，以及如何使用**OK3568**开发板作为真机调试程序，非常适合**ubuntu**初学者学习和参考。

## 5.1 建立Ubuntu应用开发环境	
### 5.1.1下载安装相关工具
```markdown
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu$ sudo apt update && sudo apt install qemu-user-static
[sudo] password for forlinx:
Hit:1 http://mirrors.huaweicloud.com/ubuntu jammy InRelease
Hit:2 http://mirrors.huaweicloud.com/ubuntu jammy-updates InRelease
Hit:3 http://mirrors.huaweicloud.com/ubuntu jammy-backports InRelease
Hit:4 http://mirrors.huaweicloud.com/ubuntu jammy-security InRelease
Hit:5 https://mirrors.aliyun.com/ubuntu jammy InRelease
Get:6 https://mirrors.aliyun.com/ubuntu jammy-security InRelease [129 kB]
Get:7 https://mirrors.aliyun.com/ubuntu jammy-updates InRelease [128 kB]
Hit:8 https://mirrors.aliyun.com/ubuntu jammy-backports InRelease
Get:9 https://mirrors.aliyun.com/ubuntu jammy-updates/restricted Sources [80.8 kB]
Get:10 https://mirrors.aliyun.com/ubuntu jammy-updates/main Sources [550 kB]
Get:11 https://mirrors.aliyun.com/ubuntu jammy-updates/main amd64 Packages [2665 kB]
Get:12 https://mirrors.aliyun.com/ubuntu jammy-updates/main Translation-en [428 kB]
Get:13 https://mirrors.aliyun.com/ubuntu jammy-updates/restricted amd64 Packages [3714 kB]
Get:14 https://mirrors.aliyun.com/ubuntu jammy-updates/restricted Translation-en [666 kB]
Fetched 8361 kB in 2s (4281 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
9 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
qemu-user-static is already the newest version (1:6.2+dfsg-2ubuntu6.26).
The following packages were automatically installed and are no longer required:
  libevent-2.1-7 libpython2-stdlib libpython2.7-minimal libpython2.7-stdlib openbsd-inetd python-pkg-resources python-setuptools python2 python2-minimal python2.7 python2.7-minimal tcpd update-inetd
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 9 not upgraded.
```

### 5.1.2挂载armubuntu并拷贝程序源码
```markdown
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu$ mkdir ubuntufs
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu$ sudo mount jammy-rootfs.img ubuntufs/
[sudo] password for forlinx: 
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu$ cd ubuntufs/
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ ls
bin  boot  camera_engine_rkaiq_rk3568_arm64.deb  dev  etc  home  lib  lost+found  media  mnt  opt  proc  qopenglwidget  rknpu2-v1.5.0.tar  root  run  sbin  snap  srv  sys  tmp  usr  var
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo cp -r /mnt/hgfs/share/qopenglwidget/ home/forlinx/

```

### 5.1.3进入ubuntu虚拟环境
```markdown
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo mount -t proc /proc/ proc/
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo mount -t sysfs /sys/ sys/
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo mount -o bind /dev/ dev/
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo mount -o bind /dev/pts dev/pts
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo mount -o bind /run/ run/
forlinx@ubuntu:~/3568/user/OK3568_Linux_fs/ubuntu/ubuntufs$ sudo chroot . /usr/bin/qemu-aarch64-static /bin/bash
root@ubuntu:/# lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.5 LTS
Release:	22.04
Codename:	jammy
```

### 5.1.4编译程序
```markdown
root@ubuntu:/# cd home/forlinx/qopenglwidget/
root@ubuntu:~/qopenglwidget# ls
bubble.cpp  bubble.h  glwidget.cpp  glwidget.h  main.cpp  mainwindow.cpp  mainwindow.h  qopenglwidget.pro  qt.png  texture.qrc
root@ubuntu:~/qopenglwidget# sudo apt update && sudo apt install qtbase5-dev
命中:1 http://ports.ubuntu.com/ubuntu-ports jammy InRelease
命中:2 http://ports.ubuntu.com/ubuntu-ports jammy-updates InRelease
命中:3 http://ports.ubuntu.com/ubuntu-ports jammy-backports InRelease
命中:4 http://ports.ubuntu.com/ubuntu-ports jammy-security InRelease
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
有 85 个软件包可以升级。请执行 ‘apt list --upgradable’ 来查看它们。
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
下列软件包是自动安装的并且现在不需要了：
  activity-log-manager ibus-data ibus-gtk ibus-gtk3 ibus-gtk4 libdee-1.0-4 libgeonames-common libgeonames0 libtimezonemap-data libtimezonemap1 libunity-control-center1 libxcb-xv0 libzeitgeist-2.0-0
  python3-ibus-1.0 zeitgeist-core
使用'sudo apt autoremove'来卸载它(它们)。
将会同时安装下列软件：
  libegl-dev libglu1-mesa-dev libqt5opengl5-dev libvulkan-dev libxext-dev qt5-qmake qt5-qmake-bin
建议安装：
  libxext-doc default-libmysqlclient-dev firebird-dev libpq-dev libsqlite3-dev unixodbc-dev
下列【新】软件包将被安装：
  libegl-dev libglu1-mesa-dev libqt5opengl5-dev libvulkan-dev libxext-dev qt5-qmake qt5-qmake-bin qtbase5-dev
升级了 0 个软件包，新安装了 8 个软件包， 要卸载 0 个软件包，有 85 个软件包未被升级。
需要下载 3,641 kB 的归档。
解压缩后会消耗 38.7 MB 的额外空间。
您希望继续执行吗？ [Y/n] Y
获取:1 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libegl-dev arm64 1.4.0-1 [18.0 kB]
获取:2 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libglu1-mesa-dev arm64 9.0.2-1 [217 kB]
获取:3 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libvulkan-dev arm64 1.3.204.1-2 [892 kB]
获取:4 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libxext-dev arm64 2:1.3.4-1build1 [85.5 kB]
获取:5 http://ports.ubuntu.com/ubuntu-ports jammy-updates/universe arm64 qt5-qmake-bin arm64 5.15.3+d
...
...
...
root@ubuntu:~/qopenglwidget# qmake -v
QMake version 3.1
Using Qt version 5.15.3 in /usr/lib/aarch64-linux-gnu
root@ubuntu:~/qopenglwidget# qmake
Info: creating stash file /home/forlinx/qopenglwidget/.qmake.stash
root@ubuntu:~/qopenglwidget# make
...
...
...
...
root@ubuntu:~/qopenglwidget# ls
Makefile    bubble.h  fltest_qt_qopenglwidget  glwidget.h  main.cpp  mainwindow.cpp  mainwindow.o      moc_glwidget.o      moc_mainwindow.o  qopenglwidget.pro  qrc_texture.o  texture.qrc
bubble.cpp  bubble.o  glwidget.cpp             glwidget.o  main.o    mainwindow.h    moc_glwidget.cpp  moc_mainwindow.cpp  moc_predefs.h     qrc_texture.cpp    qt.png
```

测试：

将fltest_qt_qopenglwidget导入到开发板

注意，需要配置动态链接的库指向/usr/shar/aarch64-linux-gnu

```markdown
root@ok3568:~# vi /etc/profile
```

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1750813440772-cece3f1a-57cf-4868-8724-4c353438347d.png)

运行交叉编译出的程序：

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1750814103651-1b9bcf60-4e10-481a-925e-8dad8b8c331f.png)

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1750814121476-f3f5fc73-f90d-493a-b273-6de85cda38c7.png)

把相同的程序源码导入开发板并编译：

```markdown
forlinx@ok3568:~$ sudo apt update && sudo apt install qtbase5-dev
forlinx@ok3568:~$ qmake -v
QMake version 3.1
Using Qt version 5.15.3 in /usr/lib/aarch64-linux-gnu
forlinx@ok3568:~/qopenglwidget$ make
g++ -c -pipe -O2 -Wall -Wextra -D_REENTRANT -fPIC -DQT_NO_DEBUG -DQT_WIDGETS_LIB -DQT_GUI_LIB -DQT_CORE_LIB -I. -I/usr/include/aarch64-linux-gnu/qt5 -I/usr/include/aarch64-linux-gnu/qt5/QtWidgets -I/usr/include/aarch64-linux-gnu/qt5/QtGui -I/usr/include/aarch64-linux-gnu/qt5/QtCore -I. -I/usr/lib/aarch64-linux-gnu/qt5/mkspecs/linux-g++ -o main.o main.cpp
```

运行：

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1750814222619-ea489fc0-74e8-43d2-9662-5a4105228fa1.png)

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1750814226922-7b19f518-91f0-4bc8-abb5-06e0e920f5a9.png)

### 5.1.5解挂退出
```markdown
root@ubuntu18:/home/forlinx/rtc# exit
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04/ubuntufs$ cd ..
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs/proc
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs/sys
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs/dev
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs/dev/pts
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs/run
forlinx@ubuntu18:~/3568/OK3568-linux-source/ubuntu-20.04$sudo umount ubuntufs
```



