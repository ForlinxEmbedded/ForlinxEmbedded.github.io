# IPC\_SDK\_Linux6.1.157\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open    

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Application Scope

This software manual is designed for the OK1126B-C\& OK1126BJ-C platform running Linux6.1.157. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|------------|
| 26/08/2026 | V1.0 | IPC\_SDK\_Linux6.1.157\_User’s Compilation Manual\_V1.0 |

## Overview

This manual is designed to help you quickly understand the compilation process and become familiar with the compilation methods for Forlinx Embedded products. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

The manual starts with instructions on setting up the development environment. Since unexpected issues may arise during this process, it is recommended that beginners use the pre-configured development environment. This approach allows for a faster start, reducing overall development time.

There are generally three installation methods for Linux systems: dual-boot on a physical machine, single-boot on a physical machine, and using a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware Requirements: A minimum of 16GB of RAM is recommended. This will allow you to allocate 8GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 4 chapters:
+ Chapter 1. covers the installation of VMware, specifically version Workstation 17 Pro v17.0.0. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2. explains how to load the Ubuntu development environment provided by Forlinx. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. Using 64-bit Ubuntu 22.04 as an example, this chapter describes the creation of the environment. Due to potential differences in computer configurations, unforeseen issues may arise. Beginners are advised to use the pre-configured environment to avoid complications.3. Setting Up a New Ubuntu Development Environment; This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work.
+ Chapter 4. explains how to compile source code for the development board.

The manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️🛤️ ️ | Related paths.|
| <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">Blue font on gray background</font></font> | Refers to the command entered on the command line, which needs to be entered manually.|
| <font style="color:#0000FF;"><font style="color:black;background-color:#e5e5e5;">Black font on a gray background</font></font> | Serial output information after command input|
| **Black Bold**| Key information in the serial output:|
| //| Explanation of the input command or output information.|
| Username@Hostname| root@OK3568-buildroot:~# : Development board login account information;<br />forlinx@ubuntu: Ubuntu account information in the development environment;<br />You can use this information to determine the operating environment for functional operations. |

Example: After packaging the file system, use the ls command to view the generated files.

```plain
forlinx@ubuntu:~/3568$ ls                                  //List the files in this directory
OK3568_Linux_fs  OK3568_Linux_fs.tar.bz2.00 OK3568_Linux_fs.tar.bz2.01 OK3568_Linux_fs.tar.bz2.02 OK3568_Linux_fs.tar.bz2.03
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu.
+ //: Explanation of the command. No need to enter this when typing the command.
+ For detailed information, please refer to the OK1126B-C User Materials. All file paths for user materials mentioned in this document are relative to the root directory of the OK1126B-C User Materials.
+ <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">ls</font></font>: blue font with gray background, indicating the relevant command that needs to be entered manually
+ **OK3568\_Linux\_fs**: The output information after inputting the command is shown in black font, and the key information is in bold font. In this case, it refers to the packaged file system.

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278513268_e1e3d73c_ea58_4db6_86b2_2bcb430bf195.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209495516_2577c76e_b873_4413_bd12_9cdb9bb35cd1.png)

Check ''I accept the terms in the license agreement'' and click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209495744_b2803b4e_0808_49a0_a39c_37b0e1bb062e.png)

Modify the installation location to the partition on your computer where software is typically installed, then click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209495901_47b073cf_6bcf_4610_9da4_eabfb0dcd192.png)

Check, then click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209496107_e2d70089_70d9_4c62_a773_15c510eb170d.png)

Check ''Add shortcuts'' and click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209496313_08157317_dbf5_40e0_a9cf_610e2526d95f.png)

Click ''Install''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209496500_20204188_b425_4016_b17c_de930587ae2e.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209496717_f6f5d128_1585_41b0_83a6_c9bec52d7d15.png)

After clicking ''Finish,'' you can start the trial. For long-term use, please purchase from the official website and enter the license key.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719209497041_1df7c12a_752d_4fa8_9730_2a07c6cafa98.png)

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The regular user account for the development environment is: ''forlinx'', and the corresponding password is: ''forlinx'';**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1787636628014_c66dae29_6faf_4773_8da3_b4b2c63aebb9.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory: After extraction, you will obtain the development environment folder.

The file 35XX.vmx in the K1126B-linux6.1-VM17-ubuntu22.04 development environment folder is the file that the virtual machine needs to open.

Open the installed virtual machine software.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278548894_5a126d86_d30f_4f1c_906b_1d615fdf2e0a.png)

Select the directory where the newly extracted - OK1126B-linux6.1-VM17-ubuntu22.04 virtual machine file is located, and double-click the startup file to open it.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1787637473679_3ecb52df_0eb4_47ce_9a09_f97cb07edb07.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

The default account for auto-login upon system boot in the development environment is: ''forlinx'', with the password: ''forlinx''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1787637607212_3f31ab54_1396_4ee4_b17d_e57190f22b70.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click ''Create a New Virtual Machine''. Enter the following interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278531825_28237039_37c8_4a5f_8597_f64b71e7e312.png)

Select ''Custom'' and click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532008_920d71ea_3371_425c_9b27_a15b1789fdf9.png)

Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532173_48b35578_2a3d_4aff_9888_513f9b66eaaf.png)

Select install the operation later and click Select "I will install the operating system later" and click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532371_cd7442c7_21c1_4c8a_8463_24ea3de5f6c1.png)

Keep the default settings and click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532534_39687568_6ee3_4284_b373_2104df01f0fb.png)

Modify the virtual machine's name and installation location, then click ''Next''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532718_2cd2ea2a_0f97_46d5_ad8b_4f004e889a20.png)

Set the number of processors according to your needs.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278532900_dd3f7357_07c5_4dc4_9fd1_7d367c7a7111.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Set the network type, the default is NAT mode, and click "Next". Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

Choose the default LSI for the IO controller type.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

Similarly, select SCSI as the default here.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Choose to create a new virtual disk:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Set the disk size to 200GB and select the disk's format, then click "Next" to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278534210_b2fc7391_1c76_4148_80c8_855cd9174698.png)

Specify the disk file, the default setting is fine here.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278534358_9585162d_5c54_42eb_be37_f9361aebf91d.png)

Click ''Finish'' by default to complete.

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

The installed Ubuntu version is 22.04. First, go to the official Ubuntu website to download the 64-bit image. The download link is: [https://old-releases.ubuntu.com/releases/22.04.4/.](https://old-releases.ubuntu.com/releases/22.04.4/) Download the version ubuntu-22.04.4-desktop-amd64.iso.

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1740967889311_2d81dcbe_0cae_4c55_97c9_537521a15233.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278535121_beaef4c9_b729_4a86_8299_02e28a716d2d.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click ''OK''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278535409_a8fcb60d_f0a2_428c_8be7_0e124dcbc137.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382062740_8d4fffe6_3f92_47ff_82a5_9a738edd68c3.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click ''Continue''.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278536000_eb047135_c38a_4252_8c28_ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278536210_5beb2cde_35d4_44aa_b6b6_4e9c8e760b06.png)

Click "Install Now", and a prompt will appear. Click "Continue".

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278536401_c42c25c7_6384_4061_a7e2_76c6349c64be.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278536688_120370eb_2370_46c6_805f_a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382062807_b52339a1_ad54_46c0_aa7c_6bf5f0d357b8.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382062878_28446a75_0c69_4238_be5a_68b2dfa643d6.png)

After installation is complete, the screen will look like the image below. Click ''Restart Now'' to reboot (or click ''Restart Guest'').

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382062949_be55a3f4_2047_4102_b96b_3c11d505d5e5.png)

After restarting and logging in, the system interface is as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382063027_f48e7115_ead7_4aef_9d2e_d8450621631c.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

+ **VMware Tools Installation: **

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1740967889588_bda78844_fce6_43a6_a75d_1404d2f9ad28.png)

#### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode:**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1740967890224_d642497d_9876_4d31_897d_02276b6462f3.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99.png)

The network is set to dynamic IP.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f_1790660964244.png)

+ **Bridge Mode: **

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1730772113434_77bab373_f8a3_4f12_9d58_4a721f1be151.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)

Setting a Static IP Address

When configuring a static IP, the Ubuntu IP must be set in the same subnet as the host machine’s IP.

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click ''OK''. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca_1793682613743.png)

After starting the virtual machine, insert the USB drive. A "USB icon" will appear in the lower-right corner of the virtual machine. Right-click on it and select ''Connect''. You will then see an additional directory in the file system, indicating the USB drive has been successfully mounted, as shown in the following figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2_1793682638159.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1719278542337_c0fe4886_515f_4fe1_9446_22882a83577e.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update  //Update the download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential //Provide the list information of essential software packages for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*       //Used to generate text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop              //Compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools         //Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK1126B Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update apt-get download source
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Install the Essential Toolkit
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \
libmpc-dev bc python-is-python3 python2 gettext libc6-dev libncurses-dev rsync scons gperf automake repo
```

These libraries are required when setting up the OK1126B Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK1126B Linux development environment, you can skip this step.

### 3.2 Installing the Cross-compilation Toolchain

User Profiles/2 – Image and Source Code/Cross-compilation Toolchains/ arm-rockchip1240-linux-gnueabihf.tar.bz2

Copy the above compressed file to the /home/forlinx/ directory in the development environment, and extract it there:

```bash
forlinx@ubuntu:~$ tar -xf arm-rockchip1240-linux-gnueabihf.tar.bz2
```

Navigate to the arm-rockchip1240-linux-gnueabihf directory and run \`env\_install\_toolchain.sh\` using the \`source\` command.

```bash
forlinx@ubuntu:~/arm-rockchip1240-linux-gnueabihf$ source env_install_toolchain.sh
```

## 4\. Compilation of Related Code

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-platform toolchain:arm-rockchip1240-linux-gnueabihf
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-6.1.157

#### 4.1.2 Copying the Source Code

Program source code: User Data\\2-Images and Source Code\\1-Source Code\\ok1126b-ipc-source.tar.bz2.0\*

Create a working directory and place the source code in the ‘work’ directory

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work								//Switch to the working directory
forlinx@ubuntu:~/work$ cat ok1126b-ipc-source.tar.bz2.0* > ok1126b-ipc-source.tar.bz2
forlinx@ubuntu:~/work$ tar -vxf ok1126b-ipc-source.tar.bz2  //Decompress the archive in the current location
forlinx@ubuntu:~/work$ cd /home/forlinx/work/ok1126b-linux-source
```

Wait for the copy process to complete after running the command.

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 8GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### 4.2.1 Full Compilation Test

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

The following operations need to be performed in the source code directory. Compilation method:

First, select the compilation configuration and choose 0:

```bash
forlinx@ubuntu:~/work/ok1126b-linux-source$ ./build.sh lunch
```

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1784094609134_45ec514f_6974_4303_9827_b800cce413cf.png)

Perform a full compilation.

```bash
forlinx@ubuntu:~/work/ok1126b-linux-source$ ./build.sh
```

Once the build is complete, the system image will be generated in the \`output/image\` directory.

**Note: The update.img file is for OTG flashing, while the other files are for step-by-step flashing.**

#### 4.2.2 Individual Compilation

Follow the steps below to compile the kernel separately.

```bash
forlinx@ubuntu:~/work/ok1126b-linux-source$ ./build.sh kernel
```

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_IPC_User_Compilation_Manual/1766382065083_1d080843_e960_401a_84df_66948f623b6c.png)

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the ‘output/image/boot.img’ file.

Execute the following to compile the filesystem separately.

```bash
forlinx@ubuntu:~/work/ok1126b-linux-source$  ./build.sh rootfs
```

#### 4.2.3 Cleaning up Generated Files

You can operate in the source directory.

```bash
forlinx@ubuntu:~/work/ok1126b-linux-source$ ./build.sh clean
```

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

### 4.3 Use of Image Files

Note: The update.img file is for OTG flashing, while the other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.4 Application Compilation and Running

#### 4.4.1 Command-Line Applications Compilation and Operation

This section uses the UART test programme; by default, the source code is copied to the /home/forlinx/work directory.

Use the cd command to navigate to the test source code directory;

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/uart
```

In ''Chapter3. Setting Up a New Ubuntu Development Environment'', we have already installed the cross-compilation toolchain, so we can directly run make here for cross-compilation — the compiler has been specified in the Makefile.

```bash
forlinx@ubuntu:~/work/uart$ make
```

Use the file command to check the information of the generated file.

```bash
forlinx@ubuntu:~/work/uart$ file fltest_uarttest
fltest_uarttest: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 6.1.118, with debug_info, not stripped
```

From the result, you can see that the compiled output is a 32-bit ARM executable file.

Copy the generated fltest\_uarttest program to the development board via a USB flash drive or other methods, for example, to the path /userdata. The following steps take a TF card as an example to copy the file to the development board. Wire the hardware according to the UART test section in the user manual, then run the test.

```bash
# cp /mnt/sdcard/fltest_uarttest /userdata/
# /userdata/fltest_uarttest -d /dev/ttyS5
Welcome to uart test
Send test data:
forlinx_uart_test.1234567890...
Read Test Data finished,Read:
forlinx_uart_test.1234567890...
```

