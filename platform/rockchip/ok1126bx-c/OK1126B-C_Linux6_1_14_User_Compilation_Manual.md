# Linux6.1.14\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open    

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly understand the compilation process and become the compilation methods. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware Requirements: A minimum of 16GB of RAM is recommended. This will allow you to allocate 8GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 4 chapters:
+ Chapter 1. covers the installation of VMware, specifically version VMware® Workstation 17 Pro v17.0.0. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2. explains how to load the Ubuntu development environment provided by Feilin. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work.
+ Chapter 4. explains how to compile source code for the development board.

## Application Scope

This software manual is designed for the OK1126B-C\& OK1126BJ-C platform running Linux6.1.141. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|:----------:|
| 22/07/2026| V1.0| User’s Compilation Manual Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278513268_e1e3d73c_ea58_4db6_86b2_2bcb430bf195.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1726292019102_966a3de3_90e4_43c5_8d09_638579d0a5ad.png)

Check “I accept the terms in the license agreement” and click “Next.”


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278513616_4d573560_c60f_4f95_a2bf_7b0a38394f83.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278513807_4fea4ba5_6c3f_4774_9046_4ac308ae7838.png)

Check, then click “Next.”


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278513983_81c57db7_35b1_4416_bb29_36120e02a747.png)

Check “Add shortcuts” and click “Next.”


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278514135_8b46b82c_621d_44fc_89d8_d33018b427f4.png)

Click “Install.”


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278514310_369d17b9_d01f_4d95_a676_04fb377558fd.png)

Wait for the installation to complete.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278514482_82865f12_b42f_4c32_aca1_30a96a2fa309.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278514655_325d6ab7_c6cd_4de5_a879_6248cd24fcde.png)

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters.**
+ **Development Environment Account: forlinx; password: forlinx**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702064553_6bb304fb_aa53_44db_bf20_85567b620059.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory: After extraction, you will obtain the development environment folder 35XX.

The file 35XX.vmx in the OK35XX-linux6.1-VM17-ubuntu22.04 development environment folder is the file that the virtual machine needs to open.

Open the installed virtual machine software.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278548894_5a126d86_d30f_4f1c_906b_1d615fdf2e0a.png)

Select the directory where the newly extracted - OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, and double-click the startup file to open it


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702064768_949158f0_85cb_4f22_adbd_dc0b9ed60409.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

Development Environment Account: forlinx; password: forlinx


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1731053238308_7897f6cc_11b8_43dc_9aea_19646fa266ec.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click “Create a New Virtual Machine”. Enter the following interface:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278531825_28237039_37c8_4a5f_8597_f64b71e7e312.png)

Select ''Custom'' and click ''Next.''


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532008_920d71ea_3371_425c_9b27_a15b1789fdf9.png)

Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532173_48b35578_2a3d_4aff_9888_513f9b66eaaf.png)

Select instal the operation later and click Select 'I will install the operating system later' and click ''Next.''


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532371_cd7442c7_21c1_4c8a_8463_24ea3de5f6c1.png)

Keep the default settings and click ''Next.''


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532534_39687568_6ee3_4284_b373_2104df01f0fb.png)

Modify the virtual machine's name and installation location, then click ''Next.''


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532718_2cd2ea2a_0f97_46d5_ad8b_4f004e889a20.png)

Set the number of processors according to your needs.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278532900_dd3f7357_07c5_4dc4_9fd1_7d367c7a7111.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

Choose the default LSI for the IO controller type.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

Similarly, select SCSI as the default here.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Choose to create a new virtual disk:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278534210_b2fc7391_1c76_4148_80c8_855cd9174698.png)

Specify the disk file, the default setting is fine here.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278534358_9585162d_5c54_42eb_be37_f9361aebf91d.png)

Click ''Finish'' by default to complete.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278534538_0cb90337_6bc8_4fc5_8009_267ab1d2617c.png)

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

The installed Ubuntu version is 22.04. First, go to the official Ubuntu website to download the 64-bit image. The download link is: [https://old-releases.ubuntu.com/releases/22.04.4/.](https://old-releases.ubuntu.com/releases/22.04.4/) Download the version ubuntu-22.04.4-desktop-amd64.iso.

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278534926_94943ef2_c4d9_4ddd_91e9_50c5088dfacc.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278535121_beaef4c9_b729_4a86_8299_02e28a716d2d.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click “OK”.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278535409_a8fcb60d_f0a2_428c_8be7_0e124dcbc137.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702067919_c3e6a887_b979_4bd0_a398_f04889e36c72.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click “Continue”.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278536000_eb047135_c38a_4252_8c28_ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278536210_5beb2cde_35d4_44aa_b6b6_4e9c8e760b06.png)

Click Install Now by default, and a prompt will appear. Click Continue to proceed.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278536401_c42c25c7_6384_4061_a7e2_76c6349c64be.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278536688_120370eb_2370_46c6_805f_a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702068024_2042c0b6_cb99_43e6_ac9f_7e05ad8004ef.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702068142_1ab9f6b9_6936_4dfb_b228_2c5a12d18eee.png)

After installation is complete, the screen will look like the image below. Click “Restart Now” to reboot (or click “Restart Guest”).


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702068249_23854806_07f5_4d77_bf8a_01edda1d442d.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278538153_32d91128_59b7_4c50_9745_84b3186f5a51.png)

After restarting and logging in, the system interface is as shown below:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702068355_b84e7b9c_b3d1_42a2_a089_f0f0bbf8a58a.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

+ **VMware Tools Installation：**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99.png)

#### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278540173_d56c3ec8_1d83_49da_99f7_6bbd9a9b6830.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

The network is set to dynamic IP.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f.png)

+ **Bridge Mode：**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99_1789714412585.png)

Set a static IP address. At this time, the IP address of Ubuntu and the host IP address should be set in the same network segment.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1-1789716562026.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f_1789714455702.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click “OK”. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca.png)

After starting the virtual machine, insert the USB drive. A "USB icon" will appear in the lower-right corner of the virtual machine. Right-click on it and select “Connect”. You will then see an additional directory in the file system, indicating the USB drive has been successfully mounted, as shown in the following figure:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278542337_c0fe4886_515f_4fe1_9446_22882a83577e.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update                        // Update download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide a list of essential software packages for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used for generating text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                     // Compression/decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK1126B Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update the apt-get download source
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Installation of the essential toolkit
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \

diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \

cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \

libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \

libmpc-dev bc python-is-python3 python2 gettext libc6-dev libncurses-dev rsync
```

These libraries are required when setting up the OK1126B Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK1126B Linux development environment, you can skip this step.

### 3.2 Installing the Cross-compilation Toolchain

User Profiles/2-Images and Source Code/Cross-compilation Toolchains/aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz

Copy the above compressed file to the /home/forlinx/ directory in the development environment, and extract it there:

```bash
forlinx@ubuntu:~$ tar -zvxf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

Enter aarch64-buildroot-linux-gnu\_sdk-buildroot and execute relocate-sdk.sh.

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

### 3.3 Qt Creator Installation

Copy the file qt-creator-opensource-linux-x86\_64-4.7.0.run to any directory in the current user’s home directory and execute the following command.

+ Path: OK1126B-C (Linux) User Data\\Linux\\Source\\qt-creator-opensource-linux-x86\_64-4.7.0.run

```bash
forlinx@ubuntu:~$ ./qt-creator-opensource-linux-x86_64-4.7.0.run                   
```

This will open a graphical installation window. Follow the prompts to install:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278542977_d1772186_fa60_442a_8cf2_6e5cffefaae2.png) ![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278543199_cbc234c5_2d49_43aa_864e_4daf0abe7a4c.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278543389_eaacabb8_9343_4e45_8626_9a68c043e0a0.png)  ![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278543608_c9d367f7_56c3_44b6_829c_04f29286f63d.png)

Online users need to register for a Qt account. Existing Qt account holders can log in directly. The Qt password requires a mix of uppercase letters, lowercase letters, and numbers. After registering and logging in successfully, click Next.

Offline users can click Skip.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278543830_11d43ecf_8d67_4bd0_a472_fc52383a77b1.png)

Click “Next”:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278544047_02ae511b_f6df_49fc_94ad_50606afa9ac1.png)

You can set the installation path according to your preferences; we use the default here. Click Next.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278544274_25984f38_7e0d_4029_97ec_25fc13e82651.png)

Choose Complete Installation and click Next.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278544480_43ea98bb_67e7_4632_a1cf_b917e22a17eb.png)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278544690_a23e2f5f_b76b_46c9_8ebc_ef0ddc395677.png)

Click Install and wait for the installation to complete.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278544902_6e395fac_45b1_428e_b5ed_dd3045ed1597.png)

After installation, click Finish. The Qt interface will automatically open, or you can launch it from the command line. To open Qt Creator in the background, use the following command, replacing it with your actual installation path:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1719278545088_f7954df3_4aa6_40d1_9046_723786b916af.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

## 4\. Compilation of Related Code

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-Toolchain: aarch64-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-6.1.141
+ Qt Version Ported to Development Board: qt5.15.11

#### 4.1.2 Copying the Source Code

Program source code: User Data\\2-Images and Source Code\\Source Code\\OK1126B-linux-source.tar.bz2.0\*

Buildroot packages: User Data\\2-Images and Source Code\\1-Source Code\\dl.tar.bz2

Create a working directory and place the source code and dl.tar.bz2 into the work directory.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work                                // Switch to the working directory  
forlinx@ubuntu:~/work$ cat OK1126B-linux-source.tar.bz2.0* > OK1126B-linux-source.tar.bz2  
forlinx@ubuntu:~/work$ tar -vxf OK1126B-linux-source.tar.bz2           // Extract the archive at the current location  
forlinx@ubuntu:~/work$ cd /home/forlinx/work/OK1126B-linux-source/buildroot  
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ tar -vxf ../../dl.tar.bz2    // Extract dl.tar.bz2 under the buildroot directory
```

Wait for the copy process to complete after running the command.

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 8GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### 4.2.1 Full Compilation Test

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ cd /home/forlinx/work/OK1126B-linux-source
forlinx@ubuntu:~/work/OK1126B-linux-source$ rm output/defconfig
```

The following operations need to be performed in the source code directory. Compilation method:

To perform a full compilation, select option 1 and press Enter.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh
```


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702070110_e3861a2e_bf1e_4ac2_8c23_9921eae2906c.png)

Once the compilation is complete, the system image will be generated in the rockdev folder, as shown in the figure below:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702070327_057c5991_41f0_4c63_a2a2_b5820275f969.png)

Please note: update.img is a pre-packaged file intended for full flashing via OTG or a TF card; the other files are for step-by-step flashing.

#### 4.2.2 Individual Compilation

You should carry out these operations in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702070446_79fb3386_359b_4b72_a110_3d7a070dbdde.png)

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

#### 4.2.3 Cleaning up Generated Files

You should carry out these operations in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh cleanall
```


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702070556_7ba11865_b807_4f8f_b539_1269f86eb626.png)

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

#### **4.2.4 Kernel Configuration**

If you want to configure the kernel, a full compilation must be completed first

Carry out the following steps in the source code directory.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kconfig
```

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

### 4.3 Use of Image Files

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.4 Qt Creator Environment Configuration

Qt is a cross-platform graphics development library that supports multiple operating systems. Before compilation, you need to configure the Qt Creator environment for cross-compilation.

#### 4.4.1 Cross-Compiler Configuration

**Note:** 

- **The default development environment does not include a cross-compilation chain. Please refer to Section 3.3, ‘Installing the Cross-Compilation Chain’, to install one (the recommended installation path is /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot);**

- **Enter aarch64-buildroot-linux-gnu\_sdk-buildroot and execute relocate-sdk.sh.**

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

1\. Navigate to the installation directory of Qt Creator and open Qt Creator;

```bash
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator
```

2\. In Qt Creator, go to Tools → Options → Kits → Compilers, then click Add → GCC → C;

3\. Enter GCC in the Name field.

4\. Paste the path to the build chain into the Compiler Path field, as shown in the figure below:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-gcc


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702070657_9de20ce4_1c07_4088_9eb5_d33ad6186c1d.png)

Add the GCC compiler using the same method, and click "Add->GCC->C" on the right, as shown in the image:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071089_7fab5088_7577_4d5a_9759_2774f222b9fa.png)

#### 4.4.2 Qt Versions Configuration

Click Tools -> Options -> Qt Versions in Qt Creator;

Then click Add; a dialogue box will appear for you to make your selection /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake

Click Open to add it;

Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

Click Apply and then "OK".


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071289_460e78b8_590d_4650_a089_92c93ccd5571.png)

#### 4.4.3 Kits Configuration

Kits are a set of build tools used to configure and select development environments. They are particularly useful for projects that involve multiple Qt libraries. Integrate the previously added cross-compiler and Qt Version into the Kits to build a compilation environment suitable for the development board.

In Qt Creator, navigate to Tools → Options → Kits, then click Add to open the configuration section;

Modify the Name as desired;

Select GCC in the Compiler field;

In the Qt version field, select the name you entered when creating the Qt version;

Click Apply and then "OK".


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071379_c99be63d_e870_4634_8c02_652d53440657.png)

### 4.5 Application Compilation and Running

#### 4.5.1 Command-Line Applications Compilation and Operation

This section uses the watchdog test programme; by default, the source code is copied to the /home/forlinx/work directory.

Use the cd command to navigate to the test source code directory;

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

Add the cross-compiler path and use make to cross-compile;

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gcc watchdog.c -o fltest_watchdog
```

Use the file command to view information about the generated file.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that a 64-bit ARM file is generated.

Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, copy it to the development board and run the test.

```bash
root@OK1126B-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK1126B-buildroot:~# ./fltest_watchdog
Watchdog Ticking Away!
```

#### 4.5.2 QT Application Compilation and Operation

Open Qt Creator in your development environment (users should open it using their own path), click File → Open File or Project in Qt Creator, and in the pop-up window, select /home/forlinx/work/OK3568-linux-source/app/forlinx/flapp/src/watchdog/watchdog.pro

```bash
forlinx@ubuntu:~$ cd qtcreator-4.7.0/bin/
forlinx@ubuntu~/qtcreator-4.7.0/bin$ ./qtcreator &
```


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071461_1ca10cdd_979d_4545_8463_503a714b7757.png)

After opening the project, the interface should appear as follows: (If the page does not change automatically, please select according to the screenshot.)


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071537_9d57825f_bf59_42cd_a626_79e9c5c659d8.png)

Clicking Configure Project will apply the compilation environment built in the “Qt Creator Environment Configuration” chapter of this manual.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071616_ef0b895f_9f9d_43fc_99b7_681135dcd3e9.png)

Click Build-> Clean All to clear. (If the intermediate file is not cleared, it can be deleted manually).

Click Configure Project, which will adapt to the compilation environment built in the "Qt Creator Environment Configuration" section.  
Then click Build -> Clean All to clean up the previous build files.  
(If intermediate files are not cleaned, you can delete them manually.)  
Uncheck Shadow build in the Projects section.  
Click Build -> Build All to compile.  
Once the build progress bar completes, the new executable file fltest\_qt\_watchdog will be located in the /app/forlinx/forlinx\_qt/watchdog directory.


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071721_da3ab402_a87f_4891_986f_459344e99adb.png)

Then, click Build → Build All to start the compilation.

Once the Build progress bar in the bottom-right corner has completed, this indicates that the compilation is finished. At this point, you will see the newly generated binary file fltest\_qt\_watchdog in the directory /home/forlinx/work/OK1126B-linux-source/app/forlinx/flapp\_out/\`, as shown below:


![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok1126bx-c/OK1126B-C_Linux6_1_14_User_Compilation_Manual/1784702071796_7c11504f_ef05_4cee_b969_d7636812f62e.png)

Copy the compiled executable file to the board via a USB drive, FTP, or other methods. Once copied to the development board, run the test.