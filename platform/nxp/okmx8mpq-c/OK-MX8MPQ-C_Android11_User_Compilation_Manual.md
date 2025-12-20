# 00_Android11.0_用户编译手册

<font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">版本：V1.0  
发布日期：2022.08.16  
文件密级：□绝密 □秘密 □内部资料 ■公开</font>

# <font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">免责声明</font>
<font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。  
</font><font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。</font>

# <font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">概述</font>
<font style="color:rgb(0,0,0);">本手册是为了让使用飞凌嵌入式开发板的人员能够快速了解飞凌产品的编译过程，熟悉飞凌产品的编译方式。应用程序需要在</font><font style="color:rgb(0,0,0);">ubuntu</font><font style="color:rgb(0,0,0);">主机上先进行交叉编译，才能在开发板上运行，按照编译手册上的方法，通过实际操作，用户能够完成自己软件代码的编译。</font>

<font style="color:rgb(0,0,0);">手册会从环境搭建进行说明，环境搭建过程可能会出现一些不可预见性的问题，建议初学者直接使用我们搭建好的开发环境，可以快速上手，缩短开发时间。</font>

<font style="color:rgb(0,0,0);">Linux</font><font style="color:rgb(0,0,0);">系统通常情况下有三种安装方式：真机双系统、真机单系统、虚拟机。不同安装方式都有其优缺点，本文仅提供在虚拟机中搭建</font><font style="color:rgb(0,0,0);">ubuntu</font><font style="color:rgb(0,0,0);">的方法。计算机硬件要求：建议内存至少在</font><font style="color:rgb(0,0,0);">32GB</font><font style="color:rgb(0,0,0);">及以上，这样在给虚拟机分一部内存运行的同时（虚拟机建议</font><font style="color:rgb(0,0,0);">16GB</font><font style="color:rgb(0,0,0);">以上 ），还可以在</font><font style="color:rgb(0,0,0);">Windows</font><font style="color:rgb(0,0,0);">做其他操作，否则对</font><font style="color:rgb(0,0,0);">Windows</font><font style="color:rgb(0,0,0);">的操作会非常的卡。</font>

<font style="color:rgb(0,0,0);">在内容上手册主要分为6个章节描述：</font>

+ <font style="color:rgb(0,0,0);">l第一章主要是VMware和ubuntu的安装，选用的版本分别为VMware</font><font style="color:rgb(0,0,0);">®</font><font style="color:rgb(0,0,0);"> Workstation 15 Pro15.1.0和64位ubuntu18.04，若对虚拟机和ubuntu不太熟悉，建议使用和我们相同的版本。</font>
+ <font style="color:rgb(0,0,0);">第二章主要是加载飞凌提供的ubuntu开发环境的方法，开发环境为64位ubuntu18.04。</font>
+ <font style="color:rgb(0,0,0);">第三章为搭建新的ubuntu开发环境的方法。本节选用的64位ubuntu18.04为例，描述了ubuntu的创建过程，由于电脑配置不同，搭建过程可能会出现预料之外的问题，建议初学者直接使用我们搭建好的环境。</font>
+ <font style="color:rgb(0,0,0);">第四章主要是开发板相关源码编译方法，包括安装交叉编译工具和内核源码编译。</font>
+ <font style="color:rgb(0,0,0);">第五章主要是Android应用程序的开发，介绍了Android studio的安装和使用。</font>
+ <font style="color:rgb(0,0,0);">第六章主要是将编译后的镜像烧写进开发板里的两种方式，这一章在软件手册中也有描述。</font>

<font style="color:rgb(0,0,0);">本手册中一些符号及格式的相关说明：</font>

| **<font style="color:rgb(0,0,0);">表现形式</font>** | **<font style="color:rgb(0,0,0);">含义</font>** |
| :---: | --- |
| <font style="color:rgb(0,0,255);background-color:rgb(215,215,215);">灰底蓝色字体</font> | <font style="color:rgb(0,0,0);">指在命令行输入的命令，需要手动输入</font> |
| <font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">灰底黑色字体</font> | <font style="color:rgb(0,0,0);">输入命令后的串口输出信息</font> |
| **<font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">灰底黑色加粗</font>** | <font style="color:rgb(0,0,0);">串口输出信息中的关键信息</font> |
| <font style="color:rgb(0,0,0);">//</font> | <font style="color:rgb(0,0,0);">对输入指令或输出信息的解释内容</font> |
| <font style="color:rgb(0,0,0);">用户名</font><font style="color:rgb(0,0,0);">@</font><font style="color:rgb(0,0,0);">主机名</font> | <font style="color:rgb(0,0,0);">root@OK8MP</font><font style="color:rgb(0,0,0);">：开发板串口登录账户信息及网络登录账户信息</font><br/><font style="color:rgb(0,0,0);">forlinx@ubuntu</font><font style="color:rgb(0,0,0);">：开发环境</font><font style="color:rgb(0,0,0);">ubuntu</font><font style="color:rgb(0,0,0);">账户信息</font><br/><font style="color:rgb(0,0,0);">C:\Users\Administrator> windows</font><font style="color:rgb(0,0,0);">中</font><font style="color:rgb(0,0,0);">cmd</font><font style="color:rgb(0,0,0);">当前使用控制台的路径</font><br/><font style="color:rgb(0,0,0);">用户可通过该信息确定功能操作的环境</font> |


<font style="color:rgb(0,0,0);"></font>

<font style="color:rgb(0,0,0);">例：插上</font><font style="color:rgb(0,0,0);">U</font><font style="color:rgb(0,0,0);">盘后，通过</font><font style="color:rgb(0,0,0);">ls</font><font style="color:rgb(0,0,0);">指令查看挂载目录</font>

| <font style="color:rgb(255,0,0);background-color:rgb(217,217,217);">root@OK8MP</font><font style="color:rgb(0,0,0);">:~# </font><font style="color:rgb(0,0,255);">ls /run/media </font><font style="color:rgb(0,0,255);">                     </font><font style="color:rgb(0,0,0);">//</font><font style="color:rgb(0,0,0);">列出</font><font style="color:rgb(0,0,0);">/run/media</font><font style="color:rgb(0,0,0);">目录下的文件</font><br/><font style="color:rgb(0,0,0);">mmcblk2p1 </font><font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">sda1</font>** |
| --- |


<font style="color:rgb(0,0,0);">l</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">root@okmx8mm:</font><font style="color:rgb(0,0,0);">用户名为</font><font style="color:rgb(0,0,0);">root,</font><font style="color:rgb(0,0,0);">主机名为</font><font style="color:rgb(0,0,0);">okmx8mm,</font><font style="color:rgb(0,0,0);">表示在开发板上使用</font><font style="color:rgb(0,0,0);">root</font><font style="color:rgb(0,0,0);">用户进行操作。</font>

<font style="color:rgb(0,0,0);">l</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">//</font><font style="color:rgb(0,0,0);">：对</font><font style="color:rgb(0,0,0);">ls /run/media</font><font style="color:rgb(0,0,0);">操作的解释内容，不需要输入。</font>

<font style="color:rgb(0,0,255);background-color:rgb(127,127,127);">l</font><font style="color:rgb(0,0,255);background-color:rgb(127,127,127);"> </font><font style="color:rgb(0,0,255);background-color:rgb(127,127,127);">ls /run/media</font><font style="color:rgb(0,0,0);">:</font><font style="color:rgb(0,0,0);">灰底蓝色字体，表示需要手动输入的相关命令。</font>

<font style="color:rgb(0,0,0);background-color:rgb(127,127,127);">mmcblk2p1  </font>**<font style="color:rgb(0,0,0);background-color:rgb(127,127,127);">sda1 </font>****<font style="color:rgb(0,0,0);">：</font>**<font style="color:rgb(0,0,0);">灰底黑色字体为输入命令后的输出信息，加粗字体为关键信息，在此处表示U盘的挂载目录。  
</font>

# <font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">适用范围</font>
<font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">本软件手册中适用于飞凌公司的OKMX8MPQ-C 平台 Android11.0 操作系统。</font>

# **<font style="color:rgb(0,0,0);">更新记录</font>**
| **<font style="color:rgb(0,0,0);">日期</font>** | **<font style="color:rgb(0,0,0);">版本</font>** | **<font style="color:rgb(0,0,0);">更新内容</font>** |
| :---: | :---: | :---: |
| 20220816 | V1.0 | 首次发布，OKMX8MPQ-C-Android11.0用户编译手册第一版。 |




# 01_安装VMware

虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。虚拟机可以模拟出其他种类的操作系统；便于我们在开发过程中管理和使用不同的开发环境和操作系统。

流行的虚拟机软件有VMware(VMWare ACE）、Virtual Box和Virtual PC，它们都能在Windows系统上虚拟出多个计算机。我司采用的VMware，如果您对虚拟机软件不太熟悉，建议使用和我们相同的虚拟机软件。

## 1.1 VMware软件的下载与购买
[登陆VMware官网<u><font style="color:#0000FF;">https://www.vmware.com/cn.h</font></u>](https://www.vmware.com/cn.html)<u><font style="color:#0000FF;">tml</font></u>下载Workstation Pro并获取产品密匙。VMware是付费软件，需要自行购买，或者可以选择使用试用。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457886444-caabbc0a-32a0-432c-8e04-701808285926.png)

等待下载完成后双击启动文件启动安装程序。

## 1.2 VMware的安装
**步骤1：**双击启动程序进入安装向导，鼠标点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457886752-0714bdf8-527c-436f-883c-fb460f482bdc.png)

**步骤2：**勾选“我接受许可协议中的条款(A)”，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457886964-945fb9b5-8ff9-47d3-ad3f-3dce429c2bfd.png)

**步骤3：**可以修改安装位置，装到自己电脑安装软件的分区，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457887168-4835d7f3-0100-40e4-81f7-ad8802214ace.png)

**步骤4：**自行判断是否勾选两个复选框，点击“下一步”。



![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457887452-0408fcb9-235b-4983-8137-1f7391744838.png)

**步骤5：**勾选添加快捷方式，点击“下一步”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457887685-67675977-0219-493a-a07e-6286710ce9d0.png)

**步骤6：**点击“安装”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457887915-2487dfac-515d-449c-9a79-275789e2fd0b.png)

**步骤7：**等待安装完成。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457888123-9c16fba2-02df-41bb-9363-bc491c4b8370.png)

**步骤8：**安装完成后可以点击“完成”后可进行试用。若用户需要长期使用，需要到官方购买，填写许可证。进入许可证激活页面，输入购买的许可证密匙。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457888338-18d58329-f21c-4622-af9a-ef0e906089d6.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457888571-a2fd7d63-354b-473c-b9e9-a4bed592194a.png)

也可点击跳过。完成后打开VMware软件，点击上方状态卡中的帮助，在弹出的窗口中输入许可证密匙。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457888814-4c74ee69-d262-4a70-ad9c-668f6cf0f740.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457889090-24adf987-58ff-4d59-8939-0f2d5e383cfc.png)

## 1.3 VMware网络连接方式
### <font style="color:#000000;">1.3.1 NAT连接方式</font>
默认情况下，虚拟机安装完成后网络连接方式如下图所示为NAT，与宿主机共享一个IP地址，我们在进行依赖包的安装，代码的编译等工作时是不需要更改的。

	在虚拟机中，VMware虚拟网卡设置为NAT模式时，Ubuntu环境中网络设置为动态IP即可。在这种模式下虚拟NAT设备和主机网卡相连通信上网。这种是我们虚拟机上外网最常用的方式。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457889424-246fd1fa-e18c-4d6b-993a-6542890d5094.png)

### <font style="color:#000000;">1.3.2 桥接的连接方式 </font>
#### 1.3.2.1 VMware中的设置
如果在使用TFTP，SFTP虚拟机的网络联系方式为桥接方式。

**步骤1：**单击VM菜单下面的Settings项等服务器时则需要设置，弹出虚拟机设置对话框，如下图：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457889737-2373d64f-c315-4731-9437-ef88246ca419.png)

**步骤2：**选择桥接模式，确定即可。

**步骤3：**进入虚拟机系统后根据对应系统的“设置网络参数”一节进行虚拟机的IP等参数设置。



#### 1.3.2.2 Ubuntu中设置网络参数
下面介绍选择桥接方式后在虚拟机中对网络的设置步骤。

**步骤1：**启动Ubuntu，root用户登陆系统，单击桌面最右上端的下拉按钮，弹出如下选项：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457889978-9ef27645-1215-420a-a652-1b00e53f3ccb.png)

**步骤2：**点击Network进入网络设置项：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457890185-e31dc24c-e874-4c9d-812b-4df9142490ec.png)

**步骤3：**点击IPv4，选择Manual手动配置，输入您的IP地址、子网掩码、网关、DNS，点击Apply保存，网络设置成功。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457890400-93f1813a-39e3-4327-8917-2b8287af8fc2.png)

**步骤4：**重启网络服务,关闭并从新打开Wired：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457890596-c728aad1-4a4b-45d3-ae5d-b5f388449c2a.png)

**步骤5：**测试一下，宿主机IP为192.168.0.200，用虚拟机来ping宿主机：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457890800-220e3e98-8114-4812-8947-15825dda1f04.png)

如图证明网络设置成功。设置完这些后，就可以搭建您需要的服务器了。







# 02_导入飞凌开发环境

⚠️**注意：**

+ **建议初学者直接使用飞凌搭建好的虚拟机环境，环境中已经安装好交叉编译器和Qt环境。了解完该章节后可以直接跳转到**[**<u>第四章编译章节</u>**](https://forlinx-book.yuque.com/okypkp/tgbpez/wte7d46s23x3t5bf)**。**
+ **若需要手动搭建开发环境，可直接跳过此章节，参考**[**<u>第三章手动搭建开发环境</u>**](https://forlinx-book.yuque.com/okypkp/tgbpez/ysh79b2exxdgkaix)**。**
+ **提供开发环境的账户为：forlinx，密码为：forlinx 。**

我司提供了一个安装好的Ubuntu开发环境，客户可以直接在Vmware中打开使用，无需额外安装软件。

首先，下载飞凌提供的开发环境，开发环境资料中有MD5校验文件，客户下载完开发环境资料，先对开发环境压缩包进行MD5校验（MD5校验可以在网络上选择MD5在线工具校验，也可以下载MD5校验工具进行校验，可根据实际情况选择），查看校验码和校验文件中的校验码是否一致，若一致则下载文件正常；若不一致，则文件可能有破损，需要重新下载。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457835929-698898eb-10af-4834-bb5e-31fa459e01f4.png)

选中压缩包，右键解压到OKMX8MP-Android11.0-VM 15_1_0-ubuntu18_04。

解压完成后，OK8MP-Android11.0-VM 15_1_0-ubuntu18_04文件夹中的OK8MP Android11.0为虚拟机要打开的文件。

打开安装好的虚拟机。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457836154-bd008ab1-ca4f-4833-8542-23b87ee1ad88.png)

选择刚解压生成的OKMX8MPQ-C-Linux5.4.70-VM15.1.0-ubuntu18.04虚拟机文件所在的目录，双击打开启动文件：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457836351-03144a7a-c1a7-400b-bdfe-e718cfd45fb5.png)

加载完成后点击开启此虚拟机，即可运行。进入系统的界面。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457836576-1d5d5c76-8ca5-4c01-a477-b667f5459abd.png)

提供开发环境的账户为forlinx，密码为forlinx，填好密码后选择Sign in登录：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457836821-89ebd518-5dec-438b-8dd3-b016e780d09e.png)

至此已成功进入飞凌提供的开发环境，客户可将用户资料文件夹中的源码放入开发环境中开始编译等操作。（见[**<u>04_Android编译篇</u>**](https://forlinx-book.yuque.com/okypkp/tgbpez/wte7d46s23x3t5bf)）





# 03_手动搭建开发环境

Ubuntu是一个以桌面应用为主的Linux操作系统发行版。Ubuntu拥有很多优点，相对于其他版本的Linux发行版，Ubuntu也有着自己的优势。首先，安装系统非常简单，只需要非常少的设置即可，完全可以和Windows桌面系统想媲美；其次，图形界面很人性化，模仿了在XP下常用的快捷键；还有，安装和升级程序时，可以通过网络，由系统自行安装依赖的文件包，从此不必再为Linux系统的依赖关系大伤脑筋。综合考虑大家的使用习惯和学习的需要，我们选用Ubuntu Linux。

Linux桌面系统版本众多，目前本手册所有Linux实验和源码在Ubuntu 18.04版本系统下操作。使用其他版本Linux桌面系统，可能会出现gcc编译器和库文件相关的问题。碰到类似问题，可以在Linux系统发行商的官方论坛上咨询和查询。如果对Linux不熟悉的用户，强烈建议使用飞凌介绍的方法。

为什么要安装这些东西，因为我们做开发工作需要一个Linux环境，我们在编译Kernel源码、Qt应用程序、uboot等在Windows下是不能完成的，我们要在Linux环境下进行这些工作。考虑到大多数用户习惯Windows环境，我们使用VMware软件搭载Ubuntu虚拟机的方式提供。当然您也可以在您的电脑或者服务器上装Linux真机进行开发。

下面我们介绍虚拟机的搭建过程。

⚠️**注意：**

+ **初学者不建议自己搭建系统，建议使用已有虚拟机环境，不需要搭建环境的此节可以跳过。**
+ **ubuntu版本要求使用18.04，用其他版本可能会导致安卓使用阶段的部分库缺失现象，若出现此现象还需要研究库的移植。**
+ **推荐电脑配置处理器：Core(TM) i7 内存：32G以上；虚拟机硬盘 300G 以上，内存 16G 以上。**

## 3.1 Ubuntu系统虚拟机的安装
我们选择安装的Ubuntu 版本是18.04，本文中的介绍及开发均是在Ubuntu18.04上进行的。首先去Ubuntu官网获取Ubuntu18.04 64位镜像，下载地址为：[**https://releases.ubuntu.com/18.04/**](https://releases.ubuntu.com/18.04/)

下载“ubuntu-18.04.6-desktop-amd64.iso”这个版本（具体下载哪个版本可根据您自己的需求，此处只是以18.04.6版本为例）。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457853470-337f97f3-60f7-4485-8dc1-093fd10cc82b.png)

### 3.1.1 <font style="color:#000000;">VMware</font>安装Ubuntu镜像
如果用户想自己学习搭建虚拟机，就可以选择安装新的虚拟机。不过如果没有这方面的需求，还是建议下载我们搭建好的虚拟机，可以节约时间，也可以避免遇到麻烦的问题，因为虚拟机的搭建过程是比较繁琐和麻烦的。

**步骤1：**打开VMware软件，点击创建新的虚拟机。进入以下界面，勾选“自定义（高级）”点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457853690-2264ae43-83c9-4976-9c22-d058c16694d2.png)

**步骤2：**选择对应VMware版本的兼容性，版本可在帮助->关于VMware Workstation中查看，确认无误点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457853957-bcea17d6-5dc3-41c1-ad66-849f693f3baa.png)

选择“安装程序光盘映像文件”，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457854180-dba3fc6a-a781-45a2-81d7-241ea8f8de34.png)

输入全名、用户名和密码，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457854407-cd22bbf2-0548-4353-b4e2-7e292cab7680.png)

输入虚拟机名称及配置安装位置，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457854611-b4b096de-b00d-438d-a6ee-290bf2e69db0.png)

配置核心数，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457854811-aa60ca81-063b-4244-9d96-59357977fc74.png)

配置合适的内存空间，选择“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457855021-b6f412bc-2dbb-447b-9220-06d7367005d7.png)

设置网络类型，使用默认NAT形式组网，点击“下一步”。后面的步骤保持默认值，直到指定磁盘容量步骤。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457855229-6d89dfbf-789f-4706-bb85-bbb1109e5336.png)

使用推荐的I/O控制器，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457855491-f17d6b19-9d04-42c7-afc7-ea00f44d3993.png)

使用推荐的磁盘类型，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457855778-e4182a80-42d6-411b-b806-c099c50a825d.png)

使用默认选项，创建新的虚拟磁盘，并点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457856016-9edb5973-4bde-41e3-add7-0cea9cab0d04.png)

分配磁盘大小为300G并将虚拟磁盘分为多个文件，点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457856257-a7a6f99d-4761-409c-b977-5c47a171d12a.png)

使用默认点击“下一步”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457856505-03a6eeee-22ea-4fbb-bd77-9b816c1866f1.png)

点击完成：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457856683-cc7bf2d1-d559-4f3d-805e-92afbfcc054b.png)

之后虚拟机则开始安装镜像，耐心等待。

### 3.1.2 VMware报错的解决方法
**报错1**：无法连接 MKS: 套接字连接尝试次数太多；正在放弃。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457856910-a60f35cf-0499-42b4-bbbc-3a376756e9c9.png)

解决办法：我的电脑🡪右键🡪管理🡪服务和应用程序🡪服务，把关于VMware的服务都开启。服务启动成功后，重启虚拟机；或者先挂起虚拟机，等服务启动后，继续运行挂起的虚拟机。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457857162-f125b850-99b0-4d55-a3d4-a11de899a9ba.png)

**报错2**：内部错误。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457857428-ca7dbb92-d841-44d4-9e05-724fff4c690f.png)

解决方法：参考报错1

**报错3**：无法安装服务VMware Authorization Service（VMAuthdService）

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457857698-93c40334-c407-4962-b4e8-e5de2b0c4e6a.png)

解决办法：

	win+R

	输入services.msc

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457857917-f2c3e9f7-88a1-4c4b-9528-b219233a5287.png)

	

然后找到该服务，把它启动服务，因为这个服务是用于启动和访问虚拟机的授权及身份验证服务。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457858161-3212bdcd-d46e-4101-9a2a-141f4f4fcff4.png)

WMI必须要先启动。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457858526-1731341b-5bfe-409b-b0f3-24ddcbca711c.png)



**报错4**：Falied to install the hcmon driver

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457858843-d2834905-e67d-487e-abec-17951aabf1e5.png)

解决办法：删除C:\Windows\System32\drivers\hcmon.sys，然后重新安装。

**报错5**：Intel VT-x 处于禁用状态

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457859025-060be046-34d6-4d47-9f82-755fcd9f5de0.png)

解决办法：

	1、开机的时候进入BIOS界面（F2或者F12）

	2、configuration--》intel virtual technology--》将disabled改成enabled--》保存设置，退出重启。

	3、重新打开VMware，开启虚拟机。

如果还不行，请将防火墙关闭，重开虚拟机即可。（因机器而异）



**报错6：**该虚拟机似乎正在使用中...获得所有权（T）

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457859248-50d33827-944c-4d6f-ac10-d54f0d3a4e81.png)

解决办法：

	1、关闭虚拟机

	2、进入虚拟机的存储目录，将*.lck文件删除，lck代表被锁文件

	3、打开Windows任务管理器，将VMware的进程杀死

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457859484-42173e81-ebd4-47d9-847c-411b82678371.png)

	4、重开虚拟机，即可



**报错7：**锁定文件失败

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457859688-cdb3acb0-9bc6-4453-b4b0-bfa8bda34a66.png)

解决办法：

	1、进入虚拟机的存储目录

	2、将.vmem.lck，.vmdk.lck，*.vmx.lck删除

	3、重开虚拟机，可以正常进入虚拟机

**报错8：**The virtual machine could not be started because there was not enough memory available on the host.

解决办法：

虚拟机不够内存运行该镜像最大的要求，将虚拟机的内存增加，重新开启虚拟机



![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457859960-8e61a4d9-48a3-49c5-b283-d13fba4a381a.png)

## 3.2 Ubuntu 常用软件安装
### 3.2.1 VScode 工具安装软件工具
点击桌面左侧类似一个包的图标，可以看到一些工具，我们也可以搜索我们想要的工具，例如我们下载一个VScode工具，这个工具在我们日常编写代码很方便。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457860186-3ac4c6a2-3b58-4cff-8f67-1936c677e217.png)

搜索到我们需要的工具，点击进入查看详情，点击install下载，等待下载完成自动安装，然后点击Launch运行即可。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457860483-efa6ff74-9c57-42bd-9646-1141459b7af3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457860764-4f2ffcb1-afa5-44a9-ba1b-4e5fcaaf1c2c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457861053-0f74f7a7-0f1e-4797-8531-ca18e03e1c53.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457861267-6ec9c245-4290-48a0-b221-d98827dd1546.png)

### 3.2.2 apt 命令指定国内源
apt命令用来下载管理应用程序，apt 采用的C/S模式，也就是客户端/服务器模式，我们的 PC 机作为客户端，当需要下载软件的时候就向服务器请求，因此我们需要知道服务器的地址，也叫做安装源或者更新源。

+ **注意：由于Ubuntu默认的源是国外的，可能有时候无法访问，国内各大高校和企业有其镜像源（清华源、阿里源等），建议切换国内镜像源。**

**方法：**

Ubuntu18.04系统中源的位置存放在/etc/apt/sources.list文件中，替换相应链接即可，该操作需要使用root用户。下面以阿里源为例：

安全起见需要备份需要修改的文件，如下操作：

```plain
forlinx@ubuntu:~$ sudo apt-get install vim
forlinx@ubuntu:~$ sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
forlinx@ubuntu:~$ sudo vi /etc/apt/sources.list
```

在/etc/apt/sources.list文件前面添加如下条目：

```plain
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457861524-0afe30b6-65dc-42cc-9b88-9ea8a15277ff.png)

保存后退出。在终端执行如下命令：

```plain
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get upgrade
```







# 04_Android编译篇

**版本说明：**

+ 开发环境操作系统：Ubuntu18.04 64位版
+ 交叉工具链：aarch64-poky-linux-gcc
+ 开发板使用BootLoader版本：u-boot 2020.04
+ 开发板内核版本：Android 11.0

## 4.1 安装 Ubuntu 18.04 x64bit 及编译环境 
在这里建议用户使用 Ubuntu 虚拟机进行编译，我们提供 Android 11.0 的代码在 Ubuntu18.04 64 位系统下编译测试通过。另外，本公司的网盘中提供了装有库文件及编译器的虚拟机，可作为参考。 

⚠️**注意：推荐电脑配置处理器：Core(TM) i7 内存：32G ，虚拟机硬盘 300G 以上，内存 16G 以上。**

## 4.2 安装编译Android系统所需要的库
Android系统的编译需要安装一些工具包。本节操作前必须确保您的计算机或虚拟机能正常连接互联网，如您在安装中出现网络断开连接请再按照以下步骤进行安装。

1. 安装编译Android必要的包

```plain
forlinx@ubuntu:~$ sudo add-apt-repository ppa:openjdk-r/ppa
[sudo] password for forlinx:                                      //输入密码forlinx，无回显
 More info: https://launchpad.net/~openjdk-r/+archive/ubuntu/ppa
Press [ENTER] to continue or ctrl-c to cancel adding it
                                                     //按回车键继续进行，按ctrl+c退出
gpg: keyring `/tmp/tmpgkgmg6e4/secring.gpg' created
gpg: keyring `/tmp/tmpgkgmg6e4/pubring.gpg' created
gpg: requesting key 86F44E2A from hkp server keyserver.ubuntu.com
gpg: /tmp/tmpgkgmg6e4/trustdb.gpg: trustdb created
gpg: key 86F44E2A: public key "Launchpad OpenJDK builds (all archs)" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
OK
forlinx@ubuntu:~$ sudo apt-get update
Hit:1 http://ppa.launchpad.net/openjdk-r/ppa/ubuntu xenial InRelease           
Hit:2 http://us.archive.ubuntu.com/ubuntu xenial InRelease                     
Get:3 http://security.ubuntu.com/ubuntu xenial-security InRelease [99.8 kB]
Get:4 http://us.archive.ubuntu.com/ubuntu xenial-updates InRelease [99.8 kB]   
Get:5 http://us.archive.ubuntu.com/ubuntu xenial-backports InRelease [97.4 kB] 
Get:6 http://us.archive.ubuntu.com/ubuntu xenial-updates/main amd64 DEP-11 Metadata [327 kB]
Get:7 http://us.archive.ubuntu.com/ubuntu xenial-updates/universe amd64 DEP-11 Metadata [281 kB]
Get:8 http://us.archive.ubuntu.com/ubuntu xenial-updates/multiverse amd64 DEP-11 Metadata [5,964 B]
Get:9 http://us.archive.ubuntu.com/ubuntu xenial-backports/main amd64 DEP-11 Metadata [3,332 B]
Get:10 http://us.archive.ubuntu.com/ubuntu xenial-backports/universe amd64 DEP-11 Metadata [6,604 B]
Get:11 http://security.ubuntu.com/ubuntu xenial-security/main amd64 DEP-11 Metadata [93.9 kB]
Get:12 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 DEP-11 Metadata [130 kB]
Get:13 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 DEP-11 Metadata [2,464 B]
Fetched 1,147 kB in 13s (83.3 kB/s)                                            
Reading package lists... Done
forlinx@ubuntu:~$ sudo apt-get install openjdk-8-jdk
uilding dependency tree       
Reading state information... Done
The following additional packages will be installed:
  ca-certificates-java fonts-dejavu-extra libatk-wrapper-java libatk-wrapper-java-jni libgif7 libice-dev libpthread-stubs0-dev libsm-dev libx11-dev libx11-doc libxau-dev
  libxcb1-dev libxdmcp-dev libxt-dev openjdk-8-jdk-headless openjdk-8-jre openjdk-8-jre-headless x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
Suggested packages:
  libice-doc libsm-doc libxcb-doc libxt-doc openjdk-8-demo openjdk-8-source visualvm fonts-ipafont-gothic fonts-ipafont-mincho fonts-wqy-microhei fonts-wqy-zenhei
The following NEW packages will be installed:
  ca-certificates-java fonts-dejavu-extra libatk-wrapper-java libatk-wrapper-java-jni libgif7 libice-dev libpthread-stubs0-dev libsm-dev libx11-dev libx11-doc libxau-dev
  libxcb1-dev libxdmcp-dev libxt-dev openjdk-8-jdk openjdk-8-jdk-headless openjdk-8-jre openjdk-8-jre-headless x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
0 upgraded, 22 newly installed, 0 to remove and 6 not upgraded.
Need to get 46.4 MB of archives.
After this operation, 173 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
[…]
forlinx@ubuntu:~$ sudo apt-get install uuid uuid-dev zlib1g-dev liblz-dev liblzo2-2 liblzo2-dev lzop git-core curl u-boot-tools mtd-utils android-tools-fsutils device-tree-compiler gdisk m4 libz-dev bison flex make libssl-dev gcc-multilib
Reading package lists... Done
Building dependency tree       
Reading state information... Done
[…]
The following packages will be upgraded:
  libuuid1 uuid-dev
2 upgraded, 0 newly installed, 0 to remove and 87 not upgraded.
Need to get 41.0 kB of archives.
After this operation, 2,048 B of additional disk space will be used.
Do you want to continue? [Y/n]   Y
[…]
```

2. 切换JDK版本

如果您之前安装过其他版本的JDK，需要进行版本切换。

查看安装版本：

```plain
forlinx@ubuntu:~$ update-java-alternatives -l
java-1.8.0-openjdk-amd64       1081       /usr/lib/jvm/java-1.8.0-openjdk-amd64
forlinx@ubuntu:~$ sudo update-alternatives --config java
There is only one alternative in link group java (providing /usr/bin/java): /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
Nothing to configure.  
```

如上述打印信息，只有一个版本，直接使用即可，若有多个版本就输入第二条命令后选择java8对应的选择项，按回车进行确认。

## 4.3 Android系统的编译
### 4.3.1 编译前的准备
1. 请确认当前系统 swap 分区大小，若 swap 分区不足会造成编译 Android 源码失败，推荐的大小为 4G。

查看 swap 分区情况：

```plain
forlinx@ubuntu:~$ cat /proc/swaps
Filename			Type		Size	        Used	  Priority
/dev/sda5           partition	    8387580	    0	      -2
```

在此提供一种通过创建 swap 文件的方式来增加 swap 分区大小的操作方法，可作为参考：

```plain
forlinx@ubuntu:~$ sudo fallocate -l 4G /swapfile
[sudo] password for forlinx:                                     //输入密码forlinx，无回显
```

若执行上述操作时报错：fallocate:fallocate failed:Text file busy

则执行下述操作：

```plain
forlinx@ubuntu:~$ sudo swapoff -a
forlinx@ubuntu:~$ sudo fallocate -l 4G /swapfile
```

执行以下命令为 swapfile 文件设置正确的权限：

```plain
forlinx@ubuntu:~$ sudo chmod 600 /swapfile
```

使用 mkswap 实用程序在文件上设置 Linux SWAP 区域：

```plain
forlinx@ubuntu:~$ sudo mkswap /swapfile
mkswap: /swapfile: warning: wiping old swap signature.
Setting up swapspace version 1, size = 4 GiB (4294963200 bytes)
no label, UUID=a40195d9-42c0-441a-8d8e-900115b9ad3b
```

激活 swap 文件：

```plain
forlinx@ubuntu:~$ sudo swapon /swapfile
```

要让创建好的 swap 分区永久生效，可以将 swapfile 路径内容写入到 /etc/[fstab](https://so.csdn.net/so/search?q=fstab&spm=1001.2101.3001.7020" \t "https://blog.csdn.net/mucheni/article/details/_blank) 文件当中。

在/etc/fstab文件最后添加如下内容：<font style="color:#0101F5;">/swapfile none swap sw 0 0</font>

```plain
forlinx@ubuntu:~$ sudo vi /etc/fstab
[…]
/dev/fd0        /media/floppy0  auto    rw,user,noauto,exec,utf8 0       0
/swapfile 	none	swap	sw	0	0
```

修改完成后再查看一下现在的分区：

```plain
forlinx@ubuntu:~$ cat /proc/swaps
Filename			Type		Size     	Used	   Priority
/dev/sda5           partition     8387580	    0	       -2
/swapfile            file		    4194300	    0	       -3
```

2. 将源码放入开发环境中并解压。

📂路径：OKMX8MP-C（Android）用户资料\Android\源码\OKMX8MP-android-source.tar.bz2_xa*

将源码压缩包拷贝到ubuntu文件夹/home/forlinx/imx8mp/下，查看源码压缩包的md5码：

```plain
forlinx@ubuntu:~$ cd /home/forlinx/imx8mp
forlinx@ubuntu:~/imx8mp$ md5sum OK8MP-android-source.tar.bz2_a*
c59eea85c601c3e4a0c6c6e131a55d0c  OK8MP-android-source.tar.bz2_aa
4c00d1d2d1c0d0e1e3dc26659c294f17  OK8MP-android-source.tar.bz2_ab
6b7969ae7372fbcc231ab8ecefd1e262  OK8MP-android-source.tar.bz2_ac
07f6a8a6a549d907e5285be41d300813  OK8MP-android-source.tar.bz2_ad
5c30fb7d2dc51bf1ddb434887eb5306a  OK8MP-android-source.tar.bz2_ae
3339dadb910de24d261825e49ceaa17c  OK8MP-android-source.tar.bz2_af
012af931f240da8a716d9ad252b09891  OK8MP-android-source.tar.bz2_ag
8bc7a12e14b62ee25b533c03bfb53876  OK8MP-android-source.tar.bz2_ah
3e34eddd412167c4ef70e0eebf3c009a  OK8MP-android-source.tar.bz2_ai
9eec886b83c8d830bfbd08f3e40a1dbd  OK8MP-android-source.tar.bz2_aj
3eec33dc40d1ea8f57a4f201f4a15b2e  OK8MP-android-source.tar.bz2_ak
773969dbf7ef53c5a4208eb29a3db092  OK8MP-android-source.tar.bz2_al
```

⚠️**注意：此处使用的是“20220211”版本资料中的源码，不同版本资料中源码的md5码可能不同，具体以“用户资料/Android/源码/md5sum.txt”为准。**

将查出来的md5码与“用户资料/Android/源码”目录下的md5校验码对比，确认相同后，将它们合并成一个压缩包，并查看md5码：

```plain
forlinx@ubuntu:~/imx8mp$ cat OK8MP-android-source.tar.bz2_a* > OK8MP-android-source.tar.bz2                                          //合并所需时间较长，请耐心等待
forlinx@ubuntu:~/imx8mp$ md5sum OK8MP-android-source.tar.bz2
94907c99c44e7a17fefd1a472f0519e0  OK8MP-android-source.tar.bz2
```

按照上述步骤确认md5码没有问题后，解压Android源码，解压命令如下：

```plain
forlinx@ubuntu:~/imx8mp$ tar xvf OK8MP-android-source.tar.bz2
OK8MP-android-source/
OK8MP-android-source/development/
OK8MP-android-source/development/testrunner/
OK8MP-android-source/development/testrunner/coverage_targets.xml
[…]
OK8MP-android-source/pdk/util/
OK8MP-android-source/pdk/util/diff_products.py
forlinx@ubuntu:~/imx8mp$ 
```

### 4.3.2 编译Android文件系统
1. 配置编译环境

编译Android9.0进入该目录，执行以下命令：

```plain
forlinx@ubuntu:~/imx8mp$ cd /home/forlinx/imx8mp/OK8MP-android-source
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ source env.sh
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ lunch evk_8mp-userdebug
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.3.0-28-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================
forlinx@ubuntu:~/imx8mp/8MP-android-source$ 
```

2. 全部编译：

```plain
forlinx@ubuntu:~/imx8mpOK8MPandroid-source$ ./imx-make.sh
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.3.0-28-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
[…]
lpmake I 08-15 22:07:23   518   518 builder.cpp:1031] [liblp]Partition product_a will resize from 0 bytes to 227995648 bytes
2022-08-15 22:15:37 - build_super_image.py - INFO    : Done writing image out/target/product/evk_8mp/super.img

#### build completed successfully (06:40:17 (hh:mm:ss)) ####
```

由于android系统过于庞大，编译时间略长，请耐心等待编译完成。



编译完成后，在当前路径下执行<font style="color:#0000FF;">./vendor/pack_images.sh</font> 命令，可在OK8MP-android-source/out/target/product/evk_8mp/下生成一个 uuu 文件夹，里面就是用于 uuu 烧写的镜像文件。

编译完成的镜像位于：OK8MP-android-source/out/target/product/evk_8mp/uuu 目录。

对uuu中的文件进行说明：

| **文件** | **说明** |
| --- | --- |
| boot.img | boot.img包含两部分，分别为kernel 和ramdisk。是Android系统启动所必须加载的文件 |
| dtbo-imx8mp.img | 设备树文件。 |
| partition-table.img | Android磁盘分区镜像。 |
| vbmeta-imx8mp.img | 验证启动镜像，⽤于安全验证，是Android一个重要的安全功能。 |
| vendor_boot.img | 包含所有不可分发给Android开源项目的二进制文件。 |
| u-boot-imx8mpevk-uuu.imx | uboot镜像，因8mp源码中uboot源码不开源，所以编译过程中不会生成，烧写时需要将“用户资料\Android\镜像\uuu”下的这两个文件放到uuu文件夹中 |
| u-boot-imx8mp.imx | |
| logo.img | 开机logo的镜像。 |
| super.img | 负责配置动态分区。 |
| uuu_imx_android_flash.sh | 烧写工具。 |
| uuu_imx_android_flash.bat | |


⚠️**注意：**

+ **必须要全部编译一遍后才能使用单独编译，全部编译后只要不clean，之后的编译耗时会短很多。**
+ **如果第一遍全编译没有完成就提前终止或出现报错了，那么重新编译会报错，此时就需要先clean后再编译，完整命令为：****<font style="color:#0000FF;">make clean</font>****。**
+ 单独编译boot.img

```plain
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ ./imx-make.sh bootimage
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.4.0-113-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
 […]
[100% 731/731] Target boot image from recovery: out/target/product/evk_8mp/boot.img  
//编译生成镜像的路径

#### build completed successfully (27 seconds) ####
```

+ 单独编译设备树

```plain
forlinx@ubuntu:~/imx8mm/OK8MM-android-source$ make dtboimage -j8
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.4.0-113-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
 […]
create image file: out/target/product/evk_8mp/dtbo-imx8mp.img...  //编译生成镜像的路径
Total 1 entries.

#### build completed successfully (03:59 (mm:ss)) ####
```











# 05_Android应用程序开发

## 5.1 建立Android应用开发环境
### 5.1.1 下载并安装JDK
由于Android 应用代码都是用 Java 编写的，因此需要先在Windows上安装JDK，JDK可按以下方法下载：

访问网站[<u>http://www.oracle.com/technetwork/java/javase/downloads/index.html</u>](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

点击java archive：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457873155-b51e2b89-ec03-4059-b17f-21478dcdaa51.png)

点击java SE（8u211 and later）：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457873398-f2928a92-ef46-4d14-bad5-49778378d196.png)

选择红框：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457873621-ffd7982e-c5ee-4c98-980d-52176330bc46.png)

根据提示，注册账号，正常下载。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457873813-78d13108-0a8c-4b42-aff2-6bf95ca903cf.png)

下载完成后，双击安装程序，根据向导的提示完成安装即可。

检查安装是否成功，打开命令提示符工具，输入 java -version 。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457874047-a592ece1-5a4d-4b41-bf9e-d54f9b1bae03.png)

正确显示Java版本即表示安装成功。

### 5.1.2 安装Android studio
Android Studio 是Google于2013 I/O 大会针对Android 开发推出的新的开发工具,国内可在[<u>http://www.android-studio.org/</u>](http://www.android-studio.org/)进行下载安装。

![](https://cdn.nlark.com/yuque/0/2024/jpeg/27181473/1719457874242-c86d18e4-dd58-4f0a-b9bc-2c1bcc97fe8f.jpeg)

下载完成后按照提示进行安装即可。安装完成后将出现下图所示：

选择“Do not import settings”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457874472-dfc3177f-8efa-45e2-ae59-9abc11020a08.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457874692-60122454-d263-470f-b58a-42ad1a6737ac.png)

选择“Cancel”取消。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457874927-51fc023e-3e11-4d58-84a8-b0c253515ce3.png)

点击“next”进行下一步：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457875198-2703db49-18f0-4295-b7f6-59c85607afc7.png)

这里选择“custom”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457875429-1ea43ae6-aea2-4a50-8992-b7e0d063072b.png)

根据个人喜好选择UI主题：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457875617-8fc1b91a-72d5-436f-ba65-8b98328807b1.png)

根据实际情况选择Android SDK的安装路径：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457875801-527d65cd-76f2-42a0-aa6c-7a0d55e04129.png)

选择模拟器的内存大小：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457876047-d8f9d21c-06ae-44b0-b442-00b473621874.png)

点击“Finish”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457876287-4a4371cd-5292-4e52-9b8c-5fbf4eb21705.png)

等待安装完成，点击“Finish”。

### 5.1.3 创建Helloworld工程
1. 选择“start a new android studio project”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457876500-3a3a41c9-30fc-4c0a-a00b-653a476fa1bc.png)

2．修改项目名称，选择Empty Activity，点击Next，选择最低支持的SDK版本：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457876686-e7fc1966-c21e-40cb-b691-51579163930d.png)



![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457876892-298b29df-918d-447a-8364-b9a82c88952d.png)



![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457877084-df070458-67b7-4a30-afad-4529216634b2.png)

点击“Finish”。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457877406-8b0ab60b-ee5d-437d-b61f-0ea0553e43b3.png)

初次使用时会下载Gradle等工具，请耐心等待。

3．安装android 11.0 SDK

点击“File”->“settings” 搜索SDK打开下图所示界面，勾选“Android 11.0”点击“OK”进行安装：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457877608-170843e0-3e71-499f-82b0-0bff6469c5c4.png)

烧写完成，点击finish：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457877798-5bbafee6-8a3d-413c-9ab1-97e1006aa31d.png)

4．点击“build”->“Make Project”进行编译：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457877986-3dfcb3b5-057d-46cd-8e40-77e77293739b.png)

5．编译完成后，使用OTG线将开发板连接到电脑上，启动开发板。在Android studio的菜单栏中选择设备8mp：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457878166-baf70fbf-1bf4-440f-b732-a77a24a69ef9.png)

点击菜单栏中的绿色三角形图标，使应用在开发板上运行。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457878364-0f7e53e4-b446-430b-a151-ebc55265c4c6.png)

稍等一会程序即在开发板上运行起来：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457878576-00f37993-feae-406e-a59d-0ed8f7d38397.png)

### 5.1.4 编译现有App工程
本节主要介绍如何导入并编译现有的App工程源码，以CanTest为例。

#### 5.1.4.1 编译CanTest应用
📂路径：OKMX8MPQ-C（Android）用户资料\Android\测试程序\SerialPortTest.rar

1. 首先解压飞凌提供的测试程序源码，解压到全英文的路径下，否则会编译报错，可以看到CanTest的内容如下：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457878876-6e3cc9d2-61d9-4393-9b9d-db3d651fe219.png)

2. 在Android studio中选择“Open an existing Android Studio project”，选择上一步解压的CanTest，点击“OK”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457879123-c97983cd-1947-404a-809c-4e03eef192e1.png)



3. 点击“build”->“Make Project”进行编译：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457879357-23198a8a-c88f-448a-91f4-94a125f34b99.png)

4. 编译完成后，使用OTG线将开发板连接到电脑上，启动开发板。在Android studio的菜单栏中选择设备8mp：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457879591-3b08bf71-6e96-4a21-8dac-7ce29a144a25.png)

点击菜单栏中的绿色三角形图标，使应用在开发板上运行。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457879805-0a237ed5-fae1-41c4-81f6-0bac080738da.png)

稍等一会程序即在开发板上运行起来：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457880137-e22da7f0-0914-49e5-a0cc-ba90ba8c32ce.png)

测试成功，生成的APK路径：app\build\outputs\apk\debug\app-debug.apk

可把.apk文件拷贝到开发板上进行安装。



#### 5.1.4.2 常见问题
+ **问题一：编译时可能会出现以下报错：**

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457880427-326afa9a-8358-4ae3-b3bc-a0af3cfdbd2c.png)

原因是：打开的源码默认添加了APK签名，提示的是签名文件找不到，此时需要按照5.2节先生成一个自己的签名文件，

具体操作：File->Project Structure->Modules->app->Signing Configs->Store File，修改路径为自己的签名文件路径然后，点击“OK”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457880638-0be5f29f-3f5b-4dde-8d9f-467d72c4eb59.png)

+ **问题二：****不同版本的Android studio如何打开工程**
1. 按照“**<u>5.1.3章 创建HelloWorld工程</u>**”创建新工程。
2. 把要打开的测试程序源码中的app目录解压到上述新建工程的路径，替换掉里面原本的app文件夹。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457880856-ce1e58e1-47d7-4c59-938b-d60f7ff4ee0c.png)

3. 重新打开替换app目录后的HelloWorld工程，加载完成后，更改APK密钥（操作过程详见上述**问题一**）并编译。
4. 编译成功后用otg线连接开发板和电脑，在开发板上运行，此时即可成功运行。
+ **问题三：开发板与电脑已通过otg线相连，且开发板已开启，但是Android studio无法识别到设备。**

检查开发板是否已设成USB调试模式（先疯狂点击版本号进入开发者模式，然后在开发者选项中开启USB调试），点击Android studio中的run即可开启调试

## 5.2 Apk platform签名
Android 平台中SELinux将App划分为三种,包括没有platform签名和系统权限的untrusted_app，拥有platform签名没有系统权限的platform_app,和拥有platform签名和系统权限的system_app。本节，将介绍如何给apk签名获得system权限。

### 5.2.1制作签名文件
将Android系统中device/fsl/common/security/platform.x509.pem 以及device/fsl/common/security/platform.pk8 拷贝到windows中。

打开命令行窗口进入到该文件夹目录执行：

```plain
openssl pkcs8 -in platform.pk8 -inform DER -outform PEM -out shared.priv.pem -nocrypt
openssl pkcs12 -export -in platform.x509.pem -inkey shared.priv.pem -out shared.pk12 -name androiddebugkey
输入两次密码

keytool -importkeystore -deststorepass 123456 -destkeypass 123456 -destkeystore debug.keystore -srckeystore shared.pk12 -srcstoretype PKCS12 -srcstorepass android -alias androiddebugkey
```

其中 **android**为你输入的密码，**androiddebugkey**为别名 您可以根据需求修改为其它内容。123456为Store Password和Key Password密码，将签名文件debug.keystore文件保存到您的常用目录中。

+ **注意：****如果您的windows系统中没有openssl命令，请前往**[**<u>http://slproweb.com/products/Win32OpenSSL.html</u>**](http://slproweb.com/products/Win32OpenSSL.html)** 下载安装，并设置环境变量（方法请自行百度）。**

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457881085-e974f778-212a-423e-ac6f-2d47b73cc32c.png)

### 5.2.2设置andorid studio
打开任意 android studio 工程，在AndroidManifest.xml中对应位置添加共享UID例如：

<manifest xmlns:android="http://schemas.android.com/apk/res/android"

    package="com.example.forlinx.serialporttest"

**android:sharedUserId="android.uid.system**" >

点击“File”->“project structure”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457881346-2e10c222-9d66-4d9e-b2aa-4c19d33c3e53.png)

新建一个release：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457881621-c886bcdd-5e8d-4686-83b4-f0ed14e4a04e.png)

添加debug版本和release版本的签名配置，并点击“build Variants”：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457881889-f6724962-77d0-42ea-a3c8-4ceb42d13567.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457882073-385ce032-9046-4195-98b2-8bba21a5e434.png)

如图设置对应版本的签名配置。

点击android studio 的运行按钮，启动app。在串口中输入 ps -Z：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/27181473/1719457882327-a107587e-c015-43e9-8222-4ef41f3f6ed0.jpeg)

确认你的 app 是否已经成为system_app。

## 5.3系统预装Apk的方法
1．在 Android 系统中新建目录：

```plain
mkdir packages/apps/serialporttest
```

2．将需要预装的apk(无需签名)拷贝到目录中以serialporttest.apk为例：

```plain
cp serialporttest.apk packages/apps/serialporttest
```

3．在 packages/apps/serialporttest 新建 Android.mk，添加下列内容：

```plain
LOCAL_PATH := $(call my-dir) 
include $(CLEAR_VARS)
LOCAL_MODULE := serialporttest 
LOCAL_SRC_FILES := serialporttest.apk 
LOCAL_MODULE_CLASS := APPS 
LOCAL_MODULE_SUFFIX := .apk 
LOCAL_BUILT_MODULE_STEM := package.apk 
LOCAL_CERTIFICATE := platform 
LOCAL_DEX_PREOPT := false 
LOCAL_PRIVILEGED_MODULE := true 
include $(BUILD_PREBUILT) 
```

4．同时修改 device/nxp/imx8m/evk_8mp/evk_8mp.mk 添加

```plain
PRODUCT_PACKAGES += \ 
Serialporttest
```

5．重新编译镜像







# 06_烧写系统

## 6.1 使用UUU烧写镜像
UUU是一个命令行工具，可以用于在Linux或者Windows下烧写镜像到OKMX8MPQ开发板，在android系统中NXP提供了Linux平台以及Windows平台的集成脚本uuu_imx_android_flash.sh及uuu_imx_android_flash.bat。下面分别介绍这两个工具的使用方法。

uuu_imx_android_flash 参数说明：

| **参数** | **说明** |
| --- | :--- |
| -h | 帮助 |
| -f | soc_name |
| -a | 只烧写slot_a |
| -b | 只烧写slot_b |
| -c | 默认使用use partition-table.img<br/>-c 7 使用 partition-table-7GB.img(8G emmc)<br/>-c 14 使用 partition-table-14GB.img(16G emmc)<br/>-c 28 使用 partition-table-28GB.img(32G emmc) |
| -m | 烧写 Cortex-M7 镜像 |
| -d | 烧写特定的 dtbo vbmeta recovery 镜像 |
| -e | 烧写完成之后擦除userdata分区 |
| -l | 烧写完成之后locks the device |
| -D | 镜像路径，不指定默认使用当前路径 |
| -s | 串口号，多个设备同时连接到PC时使用 |


下面分别介绍Linux和Windows下UUU工具的使用。

⚠️**注意：**

+ **不要使用 android 环境编译生成的 uuu_imx_android_flash.sh。请使用“用户资料\工具\uuu_imx_android_flash.sh”。**
+ **将 OTG 线插入 Linux 主机的 USB 接口中。如果您使用虚拟机，请将下列设备挂载到虚拟机中。**

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457841677-c3cdc53e-4eec-4754-a4cb-b4bee95be8a1.png)

### 6.1.1 Linux下uuu_imx_android_flash.sh工具的使用
📂**路径：OKMX8MPQ-C（Android）用户资料\工具**

将下载好的用户资料中工具目录的uuu拷贝到 /usr/bin/ 目录下并添加可执行权限。将uuu_imx_android_flash.sh 拷贝到 /home/forlinx/imx8mp/uuu 目录。

⚠️**注意：不要使用android环境编译生成的uuu_imx_android_flash.sh。同时fastboot版本过低则无法识别设备，请将光盘工具目录中的platform-tools_r28.0.3-linux.zip中的fastboot adb等工具解压到/usr/bin目录并添加可执行权限。**

1. 将type C线插入Linux主机的USB接口中。如果您使用虚拟机，请将下列设备移动到虚拟机中。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457841893-9aa5405d-7bda-4244-9187-fd236471aba0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457842092-f9003885-34b9-493f-a520-cbe735f4c0dc.png)

2. 将编译生成的镜像(*.img 和 u-boot*)拷贝到/home/forlinx/imx8mp/uuu目录。

⚠️**注意：**

+ **将编译生成的镜像(*.img 和 u-boot *)拷贝到/home/forlinx/imx8mp/uuu 目录。其中*.img为全编译生成文件，因为 u-boot不开源，所以需要将“用户资料/Android/镜像/uuu/”路径下的“u-boot-imx8mp.imx”和“u-boot-imx8mp-evk-uuu.imx”拷贝到 /home/forlinx/imx8mp/uuu 目录下。**
+ **如用户未进行源码编译，单纯使用用户资料中的镜像进行烧写，可直接将“用户资料/Android/镜像/uuu/”路径下的(*.img 和 u-boot *)拷贝到 /home/forlinx/imx8mp/uuu 目录下。**



3. 根据原理图修改拨码启动方式为USB，启动开发板。
4. 输入如下命令进入到相应路径下进行烧写：

```plain
forlinx@ubuntu: ~$ cd /home/forlinx/imx8mp/uuu
forlinx@ubuntu: ~/imx8mp/uuu$ sudo ./uuu_imx_android_flash.sh -f imx8mp -e
```

⚠️**注意**：**烧写时请勿插TF卡。**

开始烧写后，会提示连接设备到主机或虚拟机，选择连接到虚拟机。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457842291-afad18aa-4ff5-45ae-bfe2-6af4996297f4.png)

等待烧写完成，烧写成功如下图所示：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457842611-95b4d994-de4a-4d12-abf4-24205623f671.png)

### 6.1.2 Windows下uuu_imx_android_flash.bat工具的使用
⚠️**注意：uuu 烧写时命令行窗口需要使用管理员权限运行。**

**步骤1：**拷贝文件

📂路径：OKMX8MPQ-C（Android）用户资料\工具\uuu.exe 

将下载好的资料中的uuu.exe拷贝到 C:\Windows\System32 目录。

📂路径：OKMX8MPQ-C（Android）用户资料\工具\platform-tools_r28.0.3-windows.zip

将用户资料工具目录的platform-tools_r28.0.3-windows.zip文件解压到 C:\Windows\System32，如果是64位windows系统请解压到C:\Windows\SysWOW64。

**步骤2：**使用OTG线连接主机的USB接口和开发板的type-c接口，然后将拨码开关设置为USB方式，拔出TF卡，启动开发板。

**步骤3：**检查安装。

通过点击开始菜单，在开始菜单下方的搜索框中输入 cmd ，在 cmd.exe 上按回车来启动 DOS 窗口，在 DOS 窗口中，输入 uuu 按回车。

```plain
C:\Users\Administrator>uuu
uuu (Universal Update Utility) for nxp imx chips -- libuuu_1.4.139-0-g1a8f760

uuu [-d -m -v -V] <bootloader|cmdlists|cmd>

    bootloader  download bootloader to board by usb
    cmdlist     run all commands in cmdlist file
                If it is path, search uuu.auto in dir
                If it is zip, search uuu.auto in zip
    cmd         Run one command, use -H see detail
                example: SDPS: boot -f flash.bin
    -d          Daemon mode, wait for forever.
    -v -V       verbose mode, -V enable libusb error\warning info
    -m          USBPATH Only monitor these paths.
                    -m 1:2 -m 1:3
[…]
Register-ArgumentCompleter -CommandName uuu -ScriptBlock {param($commandName,$parameterName,$wordToComplete,$commandAst,$fakeBoundParameter); C:\WINDOWS\system32\uuu.exe -autocomplete $parameterName }
```

切换到解压文件目录下：

```plain
Microsoft Windows [版本 10.0.19044.1645]
(c) Microsoft Corporation。保留所有权利。

C:\Users\Administrator>cd c:\
c:\>cd \Windows\System32\platform-tools
```

输入 <font style="color:#0000FF;">fastboot -h </font>确认是否安装成功

```plain
c:\Windows\System32\platform-tools>fastboot -h
usage: fastboot [OPTION...] COMMAND...

flashing:
 update ZIP                 Flash all partitions from an update.zip package.
 flashall                   Flash all partitions from $ANDROID_PRODUCT_OUT.
                            On A/B devices, flashed slot is set as active.
                            Secondary images may be flashed to inactive slot.
 flash PARTITION [FILENAME] Flash given partition, using the image from
                            $ANDROID_PRODUCT_OUT if no filename is given.
[…]
options:
[…]
 --version                  Display version.
 --help, -h                 Show this message.
```

输入 <font style="color:#0000FF;">adb</font> 确认是否安装成功

```plain
c:\Windows\System32\platform-tools>adb
Android Debug Bridge version 1.0.41
Version 28.0.3-5475833
Installed as c:\Windows\System32\platform-tools\adb.exe

global options:
 -a         listen on all network interfaces, not just localhost
 -d         use USB device (error if multiple devices connected)
 -e         use TCP/IP device (error if multiple TCP/IP devices available)
 -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
 -t ID      use device with given transport id
 -H         name of adb server host [default=localhost]
 -P         port of adb server [default=5037]
 -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]
[…]
environment variables:
[…]
 $ANDROID_LOG_TAGS        tags to be used by logcat (see logcat --help)
 $ADB_LOCAL_TRANSPORT_MAX_PORT max emulator scan port (default 5585, 16 emus)
```

⚠️**注意：如果提示缺少 api-ms-win-crt-runtime-l1-1-0.dll，请在系统中安装 KB2999226 补丁。**

**步骤4：**创建uuu文件夹，并在文件夹中放入相应镜像。

📂路径：OKMX8MPQ-C（Android）用户资料\Android\镜像\uuu

将上述路径下的文件拷贝到除C盘外的任意盘中创建的uuu目录 下，例如D:\uuu路径下。

**步骤5：**在Windows主机中输入命令进行烧写。

进入uuu目录：

```plain
C:\WINDOWS\system32> d:
D:\> cd uuu
```

烧写系统镜像：

```plain
D:\uuu> uuu_imx_android_flash.bat -f imx8mp -e
```

烧写成功如下图所示：

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457842929-a8c66f11-850d-4a83-8319-3a81cd0efcca.png)

uuu 烧写时执行时，出现如图所示报错，在保证usb没挂载到虚拟机情况下，可以重新插拔usb线。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457843110-c941e88a-4d17-4acc-89aa-12a8627dbcb4.png)



## 6.2 使用TF卡烧写镜像
### 6.2.1 制作烧写TF卡
📋**说明：**

+ **使用TF卡烧写系统时，请使用8G及以上容量的正品TF卡来测试。**
+ **制卡前需要将TF卡格式化一下，格式为FAT32格式，将TF卡通过USB读卡器插入到PC机中**。

📂路径：OKMX8MPQ-C（Android）用户资料\工具\sdfuse 

将光盘资料中的sdfuse文件夹拷贝到虚拟机 /home/forlinx/imx8mp/tools/sdfuse目录，并将TF卡插入虚拟机中。

进入烧写目录：

```plain
forlinx@ubuntu:~$ cd /home/forlinx/imx8mp/tools/sdfuse
```

执行制卡脚本：

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ sudo ./mksdcard8mp.sh
```

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457843294-fd26bc70-6b5c-442b-a09a-7fd44b7f4d6b.png)

选择TF卡设备，这里以“1”为例。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457843567-c9902772-9caa-4116-9f1e-e09991c1e08a.png)

输入“<font style="color:#0000FF;">y</font>”进行确认。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457843744-e52783bc-db2c-45a8-b869-24795a9bf1d6.png)

制作完成。

⚠️**注意：****按照此时的脚本制卡后，会自动卸载TF卡，如果想制卡完成后仍挂载在开发环境上，需要修改制卡脚本mksdcard8mp.sh：**

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ vi mksdcard8mp.sh
[…]
for i in `ls -1 $DRIVE?`; do
        echo "unmounting device '$i'"
#       umount $i 2>/dev/null                                //注释掉脚本最后的这句命令
done
```



### 6.2.2 拷贝烧写镜像
出厂镜像可在下载好的资料中拷贝到TF卡的FAT32分区中，镜像在以下路径中

📂路径：OKMX8MPQ-C（Android）用户资料\Android\镜像\tfcard

具体需要拷贝的选项如下表格

将android镜像以及烧写工具拷贝到烧写TF卡的FAT32分区中。

| 文件 | 说明 |
| --- | --- |
| config.ini | 烧写配置文件，在工具/sdfuse目录下 |
| ramdisk.img | 烧写配置文件，在工具/sdfuse目录下 |
| imx-boot.bin | 制卡引导文件，在工具/sdfuse目录下 |
| dtbo-imx8mp.img | 烧写镜像，编译生成 |
| partition-table.img | 烧写镜像，编译生成 |
| vendor_boot.img | 烧写镜像，编译生成 |
| u-boot-imx8mp.imx | 烧写镜像，编译生成 |
| vbmeta-imx8mp.img | 烧写镜像，编译生成 |
| boot.img | 烧写镜像，编译生成 |
| logo_raw.img | 烧写镜像，使用logo.img生成 |
| super_raw.img | 烧写镜像，使用super.img生成 |
| kernel | 文件夹，里面放了Image和OK8MP.dtb，用于在烧写阶段引导启动 |


logo_raw.img 以及 system_raw.img 的生成方法：

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ simg2img logo.img logo_raw.img
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ simg2img super.img super_raw.img
```

如果找不到simg2img使用<font style="color:#0000FF;">sudo apt-get install android-tools-fsutil</font>命令安装。

### 6.2.3 TF卡烧写测试
关闭开发板电源，将TF卡插入TF卡座中，根据原理图将启动拨码设置到TF卡启动状态。

打开电源开关，开发板将自动启动进入烧写程序，烧写进度请留意调试串口或者观察心跳灯D1闪烁变化，当D1变为每秒闪烁一次表示烧写完成。

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457843920-7183676f-9525-46af-895f-ed2770c064bf.png)

![](https://cdn.nlark.com/yuque/0/2024/png/27181473/1719457844100-b754df76-9e3b-46f7-8eda-f2079db5248d.png)







