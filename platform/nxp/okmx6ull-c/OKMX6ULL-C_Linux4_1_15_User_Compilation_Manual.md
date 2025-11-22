# 00_Linux4.1.15+Qt5.6软件编译手册

发布版本：V1.0

<font style="color:rgb(51,51,51);">日期：2024-05-21</font>

<font style="color:rgb(51,51,51);">文件密级：□绝密 □秘密 □内部资料 ■公开</font>

## <font style="color:rgb(51,51,51);">免责声明</font>
<font style="color:rgb(51,51,51);">本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。</font>

<font style="color:rgb(51,51,51);">保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。</font>

## <font style="color:rgb(51,51,51);">概述</font>
<font style="color:rgb(51,51,51);">本手册是为了让使用飞凌嵌入式开发板的人员能够快速了解飞凌产品的编译过程，熟悉飞凌产品的编译方式。应用程序需要在ubuntu主机上先进行交叉编译，才能在开发板上运行，</font>按照编译手册上的方法，通过实际操作，用户能够完成自己软件代码的编译。

在内容上手册主要分为4个章节描述：

l 第一章主要是VMware的安装，选用的版本为VMware® Workstation 15 Pro15.1.0，用户在使用ubuntu开发环境之前要先安装VMware 。

l 第二章主要是加载飞凌提供的ubuntu开发环境的方法，开发环境为64位ubuntu18.04。

l 第三章主要是搭建新的ubuntu开发环境的方法。本节选用的64位ubuntu18.04为例，描述了ubuntu的创建、交叉编译器安装、Qt Creator的安装过程，由于电脑配置不同，搭建过程可能会出现预料之外的问题，建议初学者直接使用我们搭建好的环境。

l 第四章主要是开发板相关源码编译方法，包括内核源码编译、制作rootfs文件系统、命令行应用编译、QT程序编译的方法。

## <font style="color:rgb(51,51,51);">适用范围</font>
<font style="color:rgb(51,51,51);">本文主要适用于飞凌OKMX6ULL平台Linux4.1.15操作系统，其他平台也可以参考，但是不同平台之间会存在差异，需客户自行修改以适应自己的使用。</font>

## <font style="color:rgb(51,51,51);">修订记录</font>
| <font style="color:rgb(51,51,51);">修改日期</font> | <font style="color:rgb(51,51,51);">版本号</font> | <font style="color:rgb(51,51,51);">修改说明</font> |
| :---: | :---: | :---: |
| <font style="color:rgb(51,51,51);">2022.02.20</font> | <font style="color:rgb(51,51,51);">V1.0</font> | <font style="color:rgb(51,51,51);">初版资劳发布</font> |






# 01_VMware虚拟机软件安装

## 1.1 VMware软件的下载与购买
[登陆VMware官网https://www.vmware.com/cn.h](https://www.vmware.com/cn.html)[tml下载](https://www.vmware.com/cn.html)Workstation Pro并获取产品密匙。VMware是付费软件，需要自行购买，或者可以选择使用试用。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130552795_1efff5fc_4341_43b9_aeb1_bd723941779d.png)

等待下载完成后双击启动文件启动安装程序。

## 1.2 VMware软件的安装
双击启动程序进入安装向导。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130553055_61c21413_07de_4beb_bed5_891acde85934.png)

点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130553376_df065571_fcfa_4fde_83f1_e25539acc3b4.png)

勾选我接受许可协议中的条款，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130553578_781988f3_7dac_4da4_ab14_4ffc52417275.png)

修改安装位置，装到自己电脑安装软件的分区，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130553799_5e6fd4d4_9d73_41e7_b325_2e3b3a3423cf.png)

勾选，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130554136_cf6e6cf5_3ff8_4e60_b72f_7d96205b4ce7.png)

勾选添加快捷方式，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130554602_7f51a899_ebcf_4dd9_bad3_1be0b24bd24f.png)

点击“安装”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130554863_0a8ad89a_74aa_4fb0_8ed5_e8ae0bfe9798.png)

等待安装完成。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130555089_e26d12b8_7cc4_4afe_b9e1_3ff3d86cc4ae.png)

点击完成后可进行试用。若用户需要长期使用，需要到官方购买，填写许可证。





# 02_加载已有ubuntu开发环境

+ **注意：**
+ **建议初学者直接使用飞凌搭建好的虚拟机环境，环境中已经安装好交叉编译器和Qt环境。了解完该章节后可以直接跳转到编译章节。**
+ **提供开发环境的账户为：forlinx，密码为：forlinx**

在VMware下使用虚拟机的环境有两种方式，一种是直接加载已有的环境，另一种是新建一个环境，我们先来说说如何加载一个已经存在的环境。

首先，下载飞凌提供的开发环境，开发环境资料中有MD5校验文件，用户下载完开发环境资料，先对开发环境压缩包进行MD5校验（MD5校验可以在网络上选择MD5在线工具校验，也可以下载MD5校验工具进行校验，可根据实际情况选择），查看校验码和校验文件中校验码是否一致，若一致则下载文件正常；若不一致，则文件可能有破损，需要重新下载。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130667841_7dd3f795_e862_4ab5_9123_97a4322a44b8.png)

选中所有压缩包，右键解压到MX6UL&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130668092_deb6353e_c58e_47a8_8f2c_0494bcde9373.png)

解压完成后，如下图：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130668390_1271091f_6304_4c3e_9d51_b2f46e4384ef.png)

MX6UL&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04文件夹中的Ubuntu18.04 64 位.vmx为虚拟机要打卡的文件。

打开安装好的虚拟机。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130668618_c3be439a_e840_4e42_a78f_1544448e447f.png)

选择刚解压生成的MX6UL&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04虚拟机文件所在的目录，双击打开启动文件

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130668821_8323be81_5bc8_49df_abf1_3bdff8e0afb4.png)

加载完成后点击开启此虚拟机，即可运行，进入系统的界面。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130669055_44003c55_25ea_4813_a29a_21ae2bb43ac1.png)

	提供开发环境的账户为forlinx，密码为forlinx，填好密码后选择Sign in登录

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130669360_9f42398a_117a_414d_bb81_dbe1dbfbe120.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130669640_b1da4f71_0317_425c_962b_04428e1b57bc.png)





# 03_搭建新的ubuntu开发环境

+ **注意：初学者不建议自己搭建系统，建议使用已有虚拟机环境，不需要搭建环境的此节可以跳过**

本章节主要讲解了ubuntu系统的搭建过程、交叉编译器安装以及Qt Creator的安装。若用户不使用QT，可忽略Qt Creator的安装。

## 3.1 Ubuntu系统搭建
### 3.1.1 创建Ubuntu虚拟机
打开VMware软件，点击创建新的虚拟机。进入以下界面：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130873710_b80a1010_8d6a_4ba1_8849_570651261519.png)

选择自定义，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130873998_716f2d13_f787_45ab_8034_3684dd19f526.png)

选择对应VMware版本的兼容性，版本可在帮助->关于VMware Workstation中查看，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130874359_e15e9c36_4757_4c02_9d31_2b1f6621e444.png)

选择稍后安装操作系统，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130874643_3c1b5ca9_329e_4aee_bff3_3cbe693f69a2.png)

保持默认，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130874873_6a547ee4_c88f_4467_aa57_6f62406eef17.png)

修改虚拟机名称及安装位置，点击“下一步”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130875136_bf052855_fc99_4273_8e0e_30c7e6de4c5e.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130875393_5d7c2ff3_a199_44b9_93cc_384f20420379.png)

同样按照实际情况设置内存大小。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130875638_fb0ecd2e_a95f_45cc_95b8_033ac8bed1c4.png)

设置网络类型，默认为NAT模式，点击下一步。后面的步骤保持默认值，直到指定磁盘容量步骤。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130875870_58ea3361_855b_4639_b0f5_923e361758bd.png)

IO控制器类型这里默认选择LSI就可以：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130876113_0bc98951_16b5_4084_90c8_37d896225d4b.png)

这里同样是默认选择SCSI。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130876355_b630e6a2_e66c_4629_bad9_95a5142f811e.png)

这里选择创建新的虚拟磁盘：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130876565_ef041689_7337_4abc_9d05_63b82dfd2f92.png)

设置磁盘大小为200G，并选择磁盘的存在形式，然后点击“下一步”完成。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130876873_7c0856e0_6814_46f2_b1c3_4777c3f1ba82.png)

指定磁盘文件，这里默认即可。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130877128_50148b1b_37d8_4af0_9227_6bf60c93f956.png)

默认点击“完成”即可。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130877325_cd17f07f_bb68_4ef0_bf8d_bcffdcef5d5e.png)

至此，虚拟机创建完成。

下一小节中我们介绍Ubuntu系统在虚拟机中的安装，其在真机中的安装方法与虚拟机类似。这里我们介绍在虚拟机中安装Ubuntu系统的方法。

### 3.1.2 系统安装
我们选择安装的Ubuntu 版本是18.04，首先去Ubuntu官网获取Ubuntu18.04 64位镜像，下载地址为：[http://releases.ubuntu](http://releases.ubuntu.com/18.04/)[.com/18.04/](http://releases.ubuntu.com/18.04/)下载“ubuntu-18.04.5-desktop-amd64.iso”这个版本。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130877616_c0116c9e_13fd_4dca_8aca_cd910dcc7df4.png)

右击刚创建完成的Ubuntu64位 在弹出菜单中选择设置：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130877889_7e5b736b_ed71_4266_9d79_2af0c01d3ea4.png)

弹出“虚拟机设置菜单”根据如下图： 

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130878173_7f3b9c86_a789_4b74_9139_237498289208.png)

点击CD/DVD（SATA），选择使用ISO映像文件，浏览选择前面下载的Ubuntu镜像，然后确定。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130878386_465f332a_846b_4654_9492_c7b334ae6452.png)

设置好镜像后，保证网络可用，然后开启虚拟机，进行Ubuntu镜像的安装。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130878629_7b9c4978_111f_4d6a_87c8_d74e18db979f.png)

开启虚拟机后，等待出现安装界面如下：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130878872_dfd1e144_c565_4bf5_ae65_96165fdfd0ee.png)

如图左侧选择语言后,点击“Install  Ubuntu”后弹出选择语言界面。Ubuntu默认语言是英文的，当然，也可以选择中文，默认选择的语言在后期也是可以重新设置的，选择完成后continue。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130879162_c887a891_5473_4470_8744_ea601caa884c.png)

接下来，默认选择continue继续安装，安装过程会很慢，然后点击“continue”：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130879424_f22b6351_4139_46ed_a5ae_9f07a0395579.png)

默认，点击Install Now，会弹出下图，点击“continue”即可。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130879621_48c81c07_77b7_42ba_9252_bf0b57d67089.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130879995_f2e16814_cf7c_4fc5_9bab_7c617fadd3e2.png)

接下来选择时区，这里点击上海时区或输入Shanghai即可（不同时区根据实际情况选择即可），点击“继续”。最后设置用户名和密码，点击“continue”就会自动安装：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130880313_7ce73410_2829_4742_b833_8116daec3469.png)

安装过程下图，网络不好可以Skip跳过，不影响安装。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130880702_8f6f15db_0b72_41bb_baf3_8223b6f98062.png)

安装完成后显示如下图，点击“Restart Now”重启<font style="background-color:yellow;">（或者点击“重新启动客户机</font>”）：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130880992_5934d52d_df50_4438_812a_6ae5fb555a22.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130881280_a25cd0ea_662d_4a5e_804d_c3409035be54.png)

重启完成需要使用用户名和密码登录，登录后系统界面如下图：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130881517_50069bf3_e74b_42b5_902c_37145d6f82d0.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130881840_80f09913_0c90_45a6_8bcc_f8bf91fa6d34.png)

以上，ubuntu系统安装完成按照下图配置，点击确定，然后重新打开虚拟机，看能否正常启动Ubuntu。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130882093_342df8a6_a76b_4820_8df6_adae03cb2607.png)

### 3.1.3 Ubuntu的基本配置
安装好Ubuntu18.04操作系统后，要进行一些配置。

+ **VMware Tools安装：**

接下来安装VMware Tools，如果不安装该工具，在Windows主机和虚拟机之间无法使用复制粘贴、文件拖拽。首先点击VMware 导航栏上的“虚拟机”，然后在下拉框中点击“安装VMware Tools”：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130882334_203d6ed3_4c69_471f_a20f_24af1b7ad171.png)

完成后进入Ubuntu，桌面会出现VMware Tools的光盘图标，点击进入其中：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130882614_15de9f87_5997_40c0_b7a7_9e650e40ef7d.png)

双击VMwareTools图标，进入后看到一个压缩文件VMwareTools-10.3.10-12406962.tar.gz（不同的虚拟机版本可能会不同），



![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130882882_b3eed435_b12d_4198_8a78_38d7a42a441e.png)

复制文件到主目录下面（即home 个人用户名的目录下）：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130883102_6095e86b_ed29_4116_9acd_043e3dc27af8.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130883509_768a0307_4af6_4ee0_88af_6715ef57e4b2.png)

按键盘【Ctrl+Alt+T】调出终端命令界面，使用tar命令对VMwareTools安装包解压（使用sudo命令会提示输入密码，根据提示直接输入密码回车即可，Linux系统密码输入无显示）：

```plain
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

执行完解压命令后，使用ls查看，会出现一个vmware-tools-distrib的文件目录， 进入到该目录

```plain
forlinx@ubuntu:~$ ls
Desktop   examples.desktop   nfs   snap   tftp   VMwareTools-10.3.10-12406962.tar.gz  vmware-tools-distrib   work
forlinx@ubuntu:~$ cd vmware-tools-distrib/	                      //使用cd命令进入该目录
forlinx@ubuntu:~/vmware-tools-distrib$ ls                         //查看该目录下的文件
bin   caf   doc   etc   FILES   INSTALL   installer   lib   vgauth   vmware-install.pl
```

在当前目录下，输入sudo ./vmware-install.pl，进行安装，回车后输入密码，然后就开始安装，遇到yes就输入yes，其他一律回车默认安装就可以。

```plain
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl
[sudo] password for forlinx: 		     //输入forlinx账户的密码，无回显，无法看到输入内容
```

安装过程信息较长，此处省略

```plain
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes			//输入yes
... ...		
```

VMware tools工具完成后，可以实现Windows和Ubuntu之间的文件复制粘贴，虚拟机自适应全显等功能。如果虚拟机不能够全屏显示，可以通过点击查看，选择自动调整大小，点击自动适应客户机，即可实现虚拟机的全屏显示，VMware tools安装成功。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130883706_0b9259e7_9335_4895_9e6a_47c8b270fd70.png)

+ **基本设置：**

在下图位置进行大部分的系统设置。Ubuntu上很多设置的需求都可以在这里完成。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130884066_fcfdc4c4_9b74_4e9a_ae37_bb38cddbc0a7.png)

### 3.1.4 Ubuntu的网络设置
+ **NAT模式**

在使用网络前，先确保我们的虚拟机能连接互联网，打开虚拟机设置，网络适配器中的网络连接模式改为“NAT模式”：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130884252_18d04452_e6c6_4ac7_a7be_b8243e124e2a.png)

在虚拟机中，VMware虚拟网卡设置为NAT模式时，Ubuntu环境中网络设置为动态IP即可。在这种模式下虚拟NAT设备和主机网卡相连通。这是我们虚拟机上外网最常用的方式。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130884514_a79f3fb8_e9a6_4c0e_aaeb_e84b5e134598.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130884669_ee6af497_3c2b_4699_b5fa_aa7473a56744.png)

网络设置为动态ip。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130884910_31b3ff36_944c_4dcd_803b_61d261fc56a2.png)

+ **桥接模式：**

如果在使用TFTP，SFTP等服务器时则需要设置虚拟机的网络连接方式为桥接方式。VMware虚拟网卡设置为桥接模式时，主机网卡和虚拟机网卡通过虚拟网桥进行通信，需要将Ubuntu的IP与主机IP设置在同一个网段。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130885296_2e06ca75_268a_48ca_b8d8_d3e0df3cf340.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130885782_8a8f38ca_28f0_4339_ad00_929b39697312.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130885969_280935cf_acc5_4e8e_a155_b8ef4ea3c9ce.png)

 	设置静态ip，此时Ubuntu的IP与主机IP需设置在同一个网段。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130886234_d7029515_ec37_4f72_b240_d70dd584f554.png)

+ **注意：网络设置部分涉及到的IP以及DNS请按照用户自身的实际环境来设置，手册为举例说明。**

### 3.1.5 U盘的加载
打开虚拟机设置，USB控制器，在兼容性里面选择USB3.0，然后确定。如下图，因为目前大多数电脑都支持USB3.0的接口，如果不设置，当我们插入USB3.0接口，是不能连接到虚拟机的。如下图：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130886408_8d3ca670_ba9e_4095_8922_fa0612b8ebbb.png)

虚拟机启动后，插入U盘，虚拟机右下角会多出一个类似“U盘”的图标，右击-->连接即可，然后就可以在文件系统看到多一个目录，说明U盘加载成功，如图：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130886606_5c2f1d8f_b5b5_41b9_9380_b4658f50c8ae.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130886802_39cd79c3_8476_4aee_840b_4909dfce8097.png)

### 3.1.6 必要库安装
在进行开发之前，还需要一些其他的必要库，我们使用以下命令逐一安装，安装前需保证网络可正常使用，能上外网：

```plain
forlinx@ubuntu:~$ sudo apt-get update                        //更新下载源信息
forlinx@ubuntu:~$ sudo apt-get install build-essential            //提供编译程序必须软件包的列表信息
forlinx@ubuntu:~$ sudo apt-get install libncurses*               //用于生成基于文本的用户界面
forlinx@ubuntu:~$ sudo apt-get install lzop                     //基于Lzo库的压缩解压工具
forlinx@ubuntu:~$ sudo apt-get install net-tools                 //网络配置工具
```

## 3.2 建立交叉编译环境
建立交叉编译环境又可分为安装SDK（其中包含了交叉编译工具链）和设置交叉编译环境变量。

### 3.2.1 安装SDK
+ 资料/工具/fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh

将上述脚本复制到任意目录比如/home/forlinx/下，并在该目录下执行：

```plain
forlinx@ubuntu:~$ ./fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh
```

命令行会提示：Enter target directory for SDK (default: /opt/fsl-imx-x11/4.1.15-2.0.0)

连续两次按下回车键，程序将会自动安装交叉编译工具链（交叉编译工具链安装一次即可，更换终端或重启系统不必重新安装）。安装过程中一定要保证网络畅通，Ubuntu系统可以访问外网。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130887061_4376335c_6c90_4aad_9262_a497d7a8515b.png)

通过输出打印信息，可以判断安装是否成功。

### 3.2.2 设置环境变量
+ **注意：**
+ **设置环境变量之后，只要不更换终端，下次再编译就不需要重新设置。**
+ **如果重新打开新终端或者切换账户，编译前需要重新设置环境变量。**

设置编译环境主要是指定目标架构和交叉编译工具链，以及编译过程中使用到的一些库的路径等，使用如下命令配置(**.后边有空格**)：

```plain
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
```



![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130887289_6e9810ff_f2ba_441c_8935_c2f4ea2ccd2e.png)

然后使用命令arm-poky-linux-gnueabi-gcc -v判断是否设置成功(注：-v前边有空格)：

正常情况下会打印出gcc的版本信息，gcc version 5.3.0 (GCC)：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130887554_e8c33fab_d0c2_4eb8_90aa_a6d4ed1279c9.png)

## 3.3 Qt Creator安装
Qt Creator是一个跨平台的QT集成开发环境（IDE），包括了高级C++代码编辑器、项目和生成管理等工具，适用于QT应用程序框架设计和应用程序开发。本次安装选用的Qt Creator3.2.1安装包：[qt-creator-opensource-linux-x86_64-3.2.1.run](https://download.qt.io/archive/qtcreator/3.2/3.2.1/qt-creator-opensource-linux-x86_64-3.2.1.run)。将安装包拷贝到/home/forlinx/work/路径下。安装包获取网站：[https://download.qt.io/archive/qtcreator/3.2/3.2.1/](https://download.qt.io/archive/qtcreator/3.2/3.2.1/)

### 3.3.1 修改QT配置文件
安装完SDK后，修改QT配置文件qmake.conf.

打开要修改的配置文件，文件的在开发环境中的路径为：/opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/cortexa7hf-neon-poky-linux-gnueabi/usr/lib/qt5/mkspe

cs/linux-oe-g++/qmake.conf

删除文件qmake.conf中include(../oe-device-extra.pri) 这一行。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130887910_04ba5e0d_3874_4ee5_9d51_5c49feb0ffc8.png)

修改完保存并退出。

### 3.3.2 安装Qt Creator
在/home/forlinx/work/路径下执行以下命令安装Qt Creator：

```plain
forlinx@ubuntu:~/work$ chmod u+x qt-creator-opensource-linux-x86_64-3.2.1.run 
forlinx@ubuntu:~/work$ ./qt-creator-opensource-linux-x86_64-3.2.1.run
```

然后会弹出图形界面的安装窗口，按照提示进行安装：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130888223_7286e0f2_c770_4453_b3ca_ea4551750c0b.png)

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130888466_f4e7734a_41e3_4822_b570_e3363bdf6067.png)

用户可根据自己习惯设置安装路径。

执行以下命令，以后台方式打开Qt Creator，用户打开时以自己实际安装路径为准：

```plain
forlinx@ubuntu:~$ /home/forlinx/qtcreator-3.2.1/bin/ qtcreator.sh &
```

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130888709_cd7f89bb_5f27_400b_aaca_60fe98366722.png)

出现Qt Creator工具界面。Qt Creator安装完毕。

### 3.3.3 环境配置
+ **注意：**
+ **一定要先配置好环境变量（参考“3.2.2设置环境变量”）后，再使用命令打开Qt Creator**
+ **根据自己实际安装的路径打开Qt Creator**

Qt是跨平台的图形开发库，支持众多操作系统，在进行编译前需要对Qt Creator的编译环境进行配置。

**3.3.3.1 交叉编译器配置**

1、点击Qt Creator 的Tools ->Options->Build & Run->Compilers， 然后点击Add ->GCC。

2、Name输入GCC；

3、Compiler Path点击Browse 选择交叉编译器的路径为：/opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/x86_64-pokysdk-linux/usr/bin/arm-poky-linux-gnueabi/arm-poky-linux-gnueabi-g++如下图所示：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130889406_5c81a0f9_9e69_47ba_8799_704f8bc84dbe.png)

4、然后点击Apply及OK。

**3.3.3.2 Qt Versions 配置**

1、点击Qt Creator 的Tools ->Options->Build & Run->Qt Versions， 

2、然后点击Add，弹出对话框选择/opt/fsl-imx-x11/4.1.15-2.1.0/sysroots/x86_64-pokysdk-linux/usr/bin/qt5/qmake 文件，

3、点击open添加。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130889611_4726e704_8541_4f90_8ce1_73cc86ddb01b.png)

4、然后会返回 Qt Version配置框，Version name输入Qt 5.6.2。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130889900_7c9610ab_ef88_4567_a6b1_4f4e6667766b.png)

5、然后点击Apply及OK。

**3.3.3.3 Kits 配置**

Kits是一个构建套件，用来构建和选择开发编译环境，对于有多种QT库的项目很有用。将之前添加的交叉编译器和QT Version添加到Kits中，构建适合开发板的编译环境。

1、点击Qt Creator 的Tools ->Options->Build & Run->Kits， 然后点击Add，出现配置部分。

2、Name输入qt5.6.2。

3、Compiler选择GCC。

4、Qt version选择Qt 5.6.2。

5、Qt mkspec 写上 linux-oe-g++。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130890194_90666ddb_0adf_48a6_a4fd_3cb5316845c5.png)

6、然后点击Apply及OK。

### 3.3.4 安装中可能遇到的问题
+ **注意：以下是在安装Qt Creator3.2.1时遇到的一些问题及解决办法，不同的ubuntu和Qt Creator版本遇到的问题会不同，以下只是安装时遇到的一种情况，仅供参考，用户安装时请以自己的实际情况为主自行解决。**

1、打开Qt Creator时出现qtcreator-3.2.1/lib/qtcreator/plugins/libHelp.so: Cannot load library /home/forlinx/qt，不能使用help的报错，需要修改软件源，并下载安装一些安装包。

<font style="color:#4D4D4D;">解决方法：</font>

1）在etc/apt 的sources.list 添加镜像源，使用 sudo vi /etc/apt/sources.list 打开文件，在末尾添加： deb [http://archive.ubuntu.com/ubuntu/](http://archive.ubuntu.com/ubuntu/) trusty main universe restricted multiverse；

2）通知ubuntu启用新的更新源：sudo apt-get update

3）安装相关安装包：

sudo apt-get  install libgstreamer0.10-dev

sudo apt-get  install libgstreamer-plugins-base0.10-dev

2、用普通账户在Qt Creator打开工程文件，出现写入权限报错

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715130890507_fa6a691a_3d47_466a_bbb7_84abdbd1f630.png)

解决方法：

1）查看qt原文件，在当前账户下，是否有可执行权限

2）给用户组添加可写入权限：sudo chmod -R o+w audio/





# 04_相关代码编译

+ **注意：**

**本章节默认使用已安装SDK（包括交叉编译链）的开发环境，飞凌提供的开发环境可直接进行本章节操作。若用户使用自己开发环境，需参考前边章节进行环境搭建。 **

本章节主要描述开发板相关源码的编译方法，包括内核源码编译、制作文件系统方法、应用程序编译方法。

## 4.1  编译前准备
### 4.1.1 环境说明
+ 开发环境操作系统：Ubuntu18.04  64位版
+ 交叉工具链：arm-poky-linux-gnueabi-gcc 5.3.0
+ 开发板使用Bootloader 版本：u-boot-2016.03
+ 开发板内核版本：Linux-4.1.15
+ 开发板移植QT版本：qt5.6.2

### 4.1.2 拷贝源码 
+ 内核源码：用户资料\Linux\源码\kernel\linux-4.1.15.tar.bz2
+ 文件系统：用户资料\Linux\镜像\ rootfs-console.tar.bz2和rootfs-qt.tar.bz2 
+ 命令行测试程序：用户资料\Linux\测试程序\cmd 
+ QT测试程序：用户资料\Linux\测试程序\qt5.6  



ubuntu和Windows主机之间的文件传输有很多种，安装VMware Tools后，可以设置虚拟机共享文件夹，将Windows主机的文件目录挂载到ubuntu中，实现文件共享。

设置方法如下，点击菜单栏的“虚拟机”，选择“设置”

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131102725_8c309a2c_faeb_452b_b442_009fea435688.png)

点击“选项”，启用“共享文件夹”，设置Windows主机上的共享目录，点击“确定”。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131102937_07075d0b_532f_48f2_947d_8aaa50a98e27.png)

虚拟机的文件共享设置完成后，将测试的所用的：内核源码linux-4.1.15.tar.bz2、文件系统（本节以rootfs-console.tar.bz2为例）、命令行测试程序wdttest.c、QT测试程序audio放到Windows主机的共享文件夹后。

共享文件夹在ubuntu中的挂载目录/mnt/hgfs/share，查看挂载目录下文件

```plain
forlinx@ubuntu:~$ ls /mnt/hgfs/share/
audio  linux-4.1.15.tar.bz2  rootfs-console.tar.bz2  wdttest.c
```

将共享文件夹中的源码拷贝到ubuntu的/home/forlinx/work目录下

```plain
forlinx@ubuntu:~$ sudo cp -r /mnt/hgfs/share/audio /home/forlinx/work/      
[sudo] password for forlinx: 
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/linux-4.1.15.tar.bz2 /home/forlinx/work/
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/rootfs-console.tar.bz2 /home/forlinx/work/
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/wdttest.c /home/forlinx/work/
forlinx@ubuntu:~$ cd /home/forlinx/work/
forlinx@ubuntu:~/work$ ls
audio  linux-4.1.15.tar.bz2  rootfs-console.tar.bz2  wdttest.c        //文件拷贝成功
forlinx@ubuntu:~/work$
```

### 4.1.3 设置环境变量
+ **注意：切换账户后需要重新设置环境变量**

相关源码在编译前需要设置环境变量。进行内核编译时，建议使用root账户，减少一些权限问题。以下源码编译均默认为已设置环境变量。设置环境变量需要执行以下命令：

```plain
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
```



## 4.2  内核编译
+ **注意：**
+ **初次解压内核源码后，需要先对源码进行整体编译**
+ **整体编译过后，可根据实际情况在进行单独编译**

切换到root账户，将拷贝到/home/forlinx/work目录下的内核源码使用tar指令解压，进入到内核源码路径。

```plain
forlinx@ubuntu:~/work$ sudo su                       //切换到root用户身份
[sudo] password for forlinx:                        //按提示输入forlinx账户密码，无回显
root@ubuntu:/home/forlinx/work# tar xvf linux-4.1.15.tar.bz2     //解压内核源码
… …此处省略解压信息
root@ubuntu:/home/forlinx/work# cd linux-4.1.15                 //进入到内核源码目录
```

切换账户后要重新设置环境变量：

. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131103158_a0d86cd0_3f4e_4591_a938_bcac008e5789.png)

### 4.2.1 整体编译Linux-4.1.15内核
在源码路径内，提供了编译脚本build.sh，运行该脚本对整个源码进行编译

```plain
root@ubuntu:/home/forlinx/work# cd linux-4.1.15
```

以下操作需要在源码目录下操作，编译内核方法：

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# ./imx6ull_c_build.sh
```

编译执行后结果，信息较多，指截取最后部分信息：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131103434_1d844066_f8c6_4f4b_ad84_6c45d2684478.png)

编译成功后，会生成.ko的模块文件，linux-4.1.15/arch/arm/boot/路径下生成zImage，linux-4.1.15/arch/arm/boot/dts路径下生成相关的dtb文件（单独编译设备树章节做详细说明）。

对build.sh中部分命令进行说明：

| **文件** | **说明** |
| :---: | --- |
| make imx6ull_defconfig | 1、该指令是加载配置文件到.config（menuconfig进行图形配置时，是从.config中读取出来）。<br/>2、linux-4.1.15/arch/arm/configs/imx6ull_defconfig是内核配置文件，初次使用源码时，需要通过该步进行内核配置。<br/>3、使用menuconfig进行配置，需先进行该步操作，保存退出图形界面配置后，会把最新的配置更新到.config,此时可以把.config文件中配置复制到imx6ull_defconfig中，作为新的配置文件。 |
| make zImage | 编译zImage，编译成功后，会在linux-4.1.15/arch/arm/boot/路径下生成zImage文件。 |
| make dtbs | 编译设备树。在inux-4.1.15/arch/arm/boot/dts路径下生成对应的dtb文件。 |
| make modules | 编译模块。 |
| make distclean | 会清除最新的.config，操作后需重新对内核进行配置。 |


### 4.2.2 单独编译zImage
用户在内核源码路径下进行操作，前提是设置好环境变量

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make imx6ull_defconfig
root@ubuntu:/home/forlinx/work/linux-4.1.15# make zImage
```

编译成功后会在linux-4.1.15/arch/arm/boot/路径下生成zImage。

### 4.2.3 单独编译设备树
```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make dtbs
```

设备树在源码linux-4.1.15/arch/arm/boot/dts/中的路径下，编译成功后，会在该路径下生成对应的dtb文件：

| **设备树文件** | **生成文件** | **说明** |
| :---: | :---: | --- |
| <font style="color:rgb(0, 0, 0);">okmx6ULL-C-emmc.dts</font> | <font style="color:rgb(0, 0, 0);">okmx6ULL-C-emmc.dtb</font> | 适用于eMMC核心板 |
| <font style="color:rgb(0, 0, 0);">okmx6ULL-C-nand.dts</font> | <font style="color:rgb(0, 0, 0);">okmx6ULL-C-nand.dtb</font> | 适用于256M-NAND核心板 |


### 4.2.4 单独编译模块
```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make modules
```

编译成功后，在驱动对应路径下会生成相应的.ko	文件。

使用“make modules_install INSTALL_MOD_PATH=/home/forlinx/work/”指令将模块导出到指定目录/home/forlinx/work/下，将导出的模块压缩打包为modules.tar.bz2，烧录时替换烧录工具的相同文件。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131103730_2aec4ee9_1abb_4a35_a281_69c556fb0c13.png)![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131103941_36e20512_d247_402d_a586_7d259e77385b.png)

## 4.3  制作文件系统
+ **注意：**
+ **飞凌提供了两种文件系统：qt版（rootfs-qt.tar.bz2）和console版（rootfs-console.tar.bz2）**
+ **不同核心板使用的文件系统有差异，使用情况在软件使用手册 中做了资料说明**

用户在使用过程中需要添加应用等涉及到修改文件系统，可以参考以下方法。

以rootfs-console.tar.bz2为例进行操作：

1. 建立目标文件系统rootfs存放文件夹如/home/forlinx/work，并进入该目录

```plain
forlinx@ubuntu:~/work$ sudo mkdir rootfs
[sudo] password for forlinx:
forlinx@ubuntu:~/work$ cd rootfs/
forlinx@ubuntu:~/work/rootfs$ 
```

2. 拷贝/home/forlinx/work路径下的文件系统到新建的rootfs目录，并解压

```plain
forlinx@ubuntu:~/work/rootfs$ sudo cp ../rootfs-console.tar.bz2 ./
forlinx@ubuntu:~/work/rootfs$ ls
rootfs-console.tar.bz2					//拷贝成功
forlinx@ubuntu:~/work/rootfs$ sudo tar xvf rootfs-console.tar.bz2 	//解压文件系统
```

3. 用rm命令删除原文件系统压缩包

```plain
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  rootfs-console.tar.bz2  run  sbin  sys  tmp  usr  var
forlinx@ubuntu:~/work/rootfs$ sudo rm rootfs-console.tar.bz2 
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  run  sbin  sys  tmp  usr  var
forlinx@ubuntu:~/work/rootfs$ 
```

4. 用户根据自己需求对文件系统做出修改后，利用tar 命令再压缩文件系统。若使用普通账户操作，需要使用fakeroot指令模拟root权限，避免文件权限发生改变。

```plain
forlinx@ubuntu:~/work/rootfs$ sudo fakeroot tar cvjf rootfs-console.tar.bz2 *      //*前边有空格
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  rootfs-console.tar.bz2  run  sbin  sys  tmp  usr  var
```

用ls查看，可以看到生成rootfs-console.tar.bz2压缩包，是可以烧写到开发板flash中的文件系统镜像。

## 4.4 应用程序编译及运行
### 4.4.1 编译并运行命令行应用
+ **注意：以下操作默认已经安装了交叉编译器，并设置好环境变量**

本小节使用看门狗测试程序，默认程序拷贝到/home/forlinx/work目录，方法参考“4.1.2拷贝源码”

1、使用cd命令进入/home/forlinx/work目录

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/
```

2、使用$CC进行交叉编译，设置完环境变量后$CC为交叉编译器的GCC，具体配置可查看设置环境变量的脚本：environment-setup-cortexa7hf-neon-poky-linux-gnueabi

```plain
forlinx@ubuntu:~/work$ $CC wdttest.c -o wdttest
```

用file命令查看生成的文件信息

```plain
forlinx@ubuntu:~/work$ file wdttest
```

信息结果为：

```plain
wdttest: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter 	/lib/ld-linux-armhf.so.3, for GNU/Linux 2.6.32,
BuildID[sha1]=400fbba6005ea8e7344df7080ab10d9ef54e3a45, not stripped
```

通过结果可以看到编译生成的是32位、ARM的文件。

3、将编译生成的wdttest通过U盘拷贝到板子上，比如/home/root路径下，运行测试。

用户默认登录的路径就为/home/root

将编译生成的wdttest程序从U盘挂载路径拷贝到当前路径下

```plain
root@fl-imx6ull:~# cp /run/media/sda1/wdttest  ./
```

赋予程序可执行权限，并运行

```plain
root@fl-imx6ull:~# chmod 766 wdttest				   //给程序设置可执行权限
root@fl-imx6ull:~#./wdttest	 /dev/watchdog settimeout 60 &           //运行程序
```

4、参考软件使用手册“看门狗测试”章节测试。

### 4.4.2 编译并运行QT应用程序
**4.4.2.1 编译QT应用程序**

+ **注意：以下操作默认已经安装了交叉编译器，并设置好环境变量**
+ 方法一：通过命令行使用qmake进行编译

```plain
forlinx@ubuntu:~/work$ sudo chmod -R 766 audio/	             // audio应用程序添加权限
forlinx@ubuntu:~/work$ qmake
forlinx@ubuntu:~/work$ make
```

+ 方法二：通过Qt Creator调用qmake进行编译

给audio应用程序添加权限

```plain
forlinx@ubuntu:~/work$ sudo chmod -R 777 audio/
```

使用命令行方式打开Qt Creator（用户根据自己的实际路径打开）

```plain
forlinx@ubuntu:~/work$ /home/forlinx/qtcreator-3.2.1/bin/qtcreator.sh &
```

点击Qt Creator 的File->Open File or Project，弹出窗口，选择/root/Desktop/audio/audio.pro

如下图：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131104216_6d917100_4bbe_49fc_beb7_c90a784bc990.png)

点击open。

弹出是否保留原环境设置的窗口，选择no，如下：



![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131104467_b45ec108_2b76_45dc_80e3_d137b571fcd6.png)

弹出Configure Project窗口,如下：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131104680_ad195f5a_417c_470d_9fcd_8d2e5cc0c619.png)

点击Configure Project。



打开项目后界面如下：



![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131104939_4923c2ae_79fb_4abf_9fe3_1117eff0da68.png)

点击Build->Clean All进行清空。（如果没有清除中间文件可以手动删除）

点击Projects 取消选中Shadow build

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131105189_2a6a8767_a29b_4424_84b8_cb96aa54ef21.png)

然后点击Build->Build All进行编译。

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131105485_41b7d280_eb3b_4ec7_a439_e84675b3784a.png)



右下角Build进度条走完之后代表编译完成，此时在路径/files/audio/目录下会看到新生成的二进制文件audio，如下：

![Image](./images/OKMX6ULL-C_Linux4_1_15_User_Compilation_Manual/1715131105880_d25368ef_b526_437d_9b80_9ccfb6ea02c3.png)

**4.4.2.2 运行QT应用程序**

+ 替换桌面中已有qt程序运行的方法

1、开发板烧写并启动qt系统。

2、将生成的audio可执行文件复制到sd卡里，再将sd卡插到开发板上。

3、执行以下命令复制audio到相应目录下，替换原来的audio应用程序，给程序设置可执行权限，文件同步后重启开发板。

用cd命令进入开发板桌面系统中qt程序的默认路径

```plain
root@fl-imx6ull:~# cd /usr/bin/ 
```

用mv命令将原audio文件重命名备份

```plain
root@fl-imx6ull:/usr/bin/# mv fltest_qt_audio fltest_qt_audiobak
```

拷贝sd卡中audio程序到当前目录下

```plain
root@fl-imx6ull:/usr/bin# cp /run/media/mmcblk1p1/audio ./fltest_qt_audio
```

赋予可执行权限，并保存重启开发板

```plain
root@fl-imx6ull:/usr/bin# chmod a+x fltest_qt_audio                     //给所有组均赋予可执行权限
root@fl-imx6ull:/usr/bin# sync                                         //文件同步
root@fl-imx6ull:/usr/bin# reboot                                      //重启开发板
```

4、板子重启后，qt界面的audio test应用程序已经是最新的，点击play能播放音频即可说明新编译的qt应用程序可以使用，同时Qt应用程序开发环境配置成功。

+ 单独测试QT程序方法
1. 将生成的audio可执行文件复制到sd卡里，再将sd卡插到开发板上，将程序拷贝到/home路径。
2. 给程序设置可执行权限。
3. 需要使用指令export DISPLAY=:0.0加载QT环境变量后，在测试QT程序

将audio文件从sd挂在路径拷贝到开发板/home路径下

```plain
root@fl-imx6ull:~#cp /run/media/mmcblk1p1/audio /home
```

用cd命令进入/home目录下给audio赋予可执行权限

```plain
root@fl-imx6ull:/home# chmod a+x audio
```

设置qt的环境变量

```plain
root@fl-imx6ull:/home# export DISPLAY=:0.0
```

运行audio应用程序

```plain
root@fl-imx6ull:/home# ./audio
```

**4.4.2.3 QT桌面程序（只支持EMMC版本）**

**开机自启动应用**

<font style="color:#000000;">Qt 系统开机后默认启动桌面程序，如果需要自动启动用户程序，请修改文件系统中的：</font><font style="color:#0000FF;">/etc/matchbox/session</font>

<font style="color:#000000;">在</font><font style="color:#0000FF;"> matchbox-desktop &</font><font style="color:#000000;">后添加用户自己的应用程序，例如 ping 测试程序：</font><font style="color:#0000FF;">fltest_qt_ping &</font>

<font style="color:#000000;">开机就会自动启动 ping 测试程序。</font>

<font style="color:#000000;">如果注释掉如下部分：</font>

```plain
# matchbox-desktop &
# matchbox-panel --titlebar --start-applets $START_APPLETS --end-applets $END_APPLETS &
```

<font style="color:#000000;">则不运行桌面且不显示标题栏。</font>

<font style="color:#000000;">如果修改 match-panel 选项，会修改标题栏内容，例如去掉：</font><font style="color:#0000FF;">”END_APPLETS=clock,battery,$KEYBOARD_APPLET,systray,startup-notify,notify” </font><font style="color:#000000;">内的 clock，会不显示时间。例如：</font>

```plain
START_APPLETS=showdesktop,windowselector
END_APPLETS=battery,$KEYBOARD_APPLET,systray,startup-notify,notify
matchbox-panel --titlebar --start-applets $START_APPLETS --end-applets $END_APPLETS &
```

**添加桌面应用程序**

+ **<font style="color:#000000;">关于 Forlinx、 Application 等文件夹的设置：</font>**

<font style="color:#000000;">1. 文件夹设置存放在：</font><font style="color:#0000FF;"> /usr/share/matchbox/vfolders </font><font style="color:#000000;">比如： </font><font style="color:#0000FF;">Forlinx.directory</font>

```plain
[Desktop Entry]
Name=Forlinx
Name[de]=Einstellungen
Comment=Forlinx test app
Comment[de]=Forlinx test app
Icon=mbfolder.png
Type=Directory
Match=Forlinx
```

<font style="color:#000000;">重要的是 Match 属性，它将决定何种类型的 App 显示在该文件夹中</font>

1. <font style="color:#000000;"> 文件夹的显示顺序在：</font><font style="color:#0000FF;"> /usr/share/matchbox/vfolders/Root.order</font>

```plain
Forlinx
Applications
Utilities
Games
Settings
All
```

+ **<font style="color:#000000;">应用程序设置：</font>**

<font style="color:#000000;">图标目录：</font><font style="color:#0000FF;"> /usr/share/pixmaps</font>

<font style="color:#000000;">应用程序的设置： </font><font style="color:#0000FF;">/usr/share/applications</font>

<font style="color:#000000;">每一个应用程序对应一个 .desktop 文件，以 Ping 为例：</font>

```plain
[Desktop Entry]
Name=Qt5 Ping
Exec=/usr/bin/fltest_qt_ping
Icon=ping-icon
Type=Application
Categories=Forlinx;
```

<font style="color:#000000;">每一个应用程序对应一个 .desktop 文件，以 Ping 为例：</font>

<font style="color:#000000;">它指定了图标，可执行程序的位置，以及在桌面中的哪个文件夹中显示。</font>



