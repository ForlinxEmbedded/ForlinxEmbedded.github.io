# Linux6.1.118\_User’s Compilation Manual

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Overview

This manual is designed to help you quickly understand the compilation process and become familiar with the compilation methods for Forlinx Embedded products. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

The manual starts with instructions on setting up the development environment. Since unexpected issues may arise during this process, it is recommended that beginners use the pre-configured development environment. This approach allows for a faster start, reducing overall development time.

There are generally three installation methods for Linux systems: dual-boot on a physical machine, single-boot on a physical machine, and using a virtual machine. This manual will focus on setting up Ubuntu within a virtual machine. Hardware Requirements: A minimum of 6GB of RAM is recommended. This will allow you to allocate 2GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 4 chapters:

+ Chapter 1 covers the installation of VMware, specifically version Workstation 17 Pro v17.0.0. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2 explains how to load the Ubuntu development environment provided by Feilin. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3 outlines the process of setting up a new Ubuntu development environment. Using 64-bit Ubuntu 22.04 as an example, this chapter describes the creation of the environment. Due to potential differences in computer configurations, unforeseen issues may arise. Beginners are advised to use the pre-configured environment to avoid complications.3. Setting Up a New Ubuntu Development Environment; This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work.
+ Chapter 4 explains how to compile source code for the development board.

The manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️️️🛤️ ️ | Related paths.|
| <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">Blue font on gray background</font></font> | Refers to the command entered on the command line, which needs to be entered manually.|
| <font style="color:#0000FF;"><font style="color:black;background-color:#e5e5e5;">Black font on a gray background</font></font> | Serial output information after command input|
| **Black Bold font on a gray background** | Key information in the serial output:|
| <font style="color:#000000;">//</font>| Explanation of the input command or output information.|
| Username@Hostname| root@OK3568-buildroot:~# : Development board login account information;<br />forlinx@ubuntu: Ubuntu account information in the development environment. |

You can use this information to determine the operating environment for functional operations.

Example: After packaging the file system, use the ls command to view the generated files.

```bash
forlinx@ubuntu:~/3568$ ls //List the files in this directory
OK3568-linux-source.tar.bz2 OK3568-linux-source.tar.bz2.00 OK3568-linux-source.tar.bz2.01 OK3568-linux-source.tar.bz2.02 OK3568-linux-source.tar.bz2.03 OK3568-linux-source.tar.bz2.04
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu.
+ //: Explanation of the command. No need to enter this when typing the command.
+ Ls: blue font with gray background, indicating the relevant command that needs to be entered manually
+ **OK3568-linux-source.tar.bz2**<font style="color:#000000;">: The output information after inputting the command is shown in black font, and the key information is in bold font. In this case, it refers to the packaged file system.</font>

## Application Scope

This software manual is designed for the OK3568-C platform running Linux6.1.118. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 18/05/2026| <font style="color:#000000;">V1.0</font>| User’s Compilation Manual Initial Version;   |
**Note: This Compilation Manual is only applicable to OK3568 development board of Forlinx.**

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](1719278513268_e1e3d73c_ea58_4db6_86b2_2bcb430bf195.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.

![Image](1719209495516_2577c76e_b873_4413_bd12_9cdb9bb35cd1.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](1719209495744_b2803b4e_0808_49a0_a39c_37b0e1bb062e.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](1719209495901_47b073cf_6bcf_4610_9da4_eabfb0dcd192.png)

Check, then click “Next.”

![Image](1719209496107_e2d70089_70d9_4c62_a773_15c510eb170d.png)

Check “Add shortcuts” and click “Next.”

![Image](1719209496313_08157317_dbf5_40e0_a9cf_610e2526d95f.png)

Click “Install.”

![Image](1719209496500_20204188_b425_4016_b17c_de930587ae2e.png)

Wait for the installation to complete.

![Image](1719209496717_f6f5d128_1585_41b0_83a6_c9bec52d7d15.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

![Image](1719209497041_1df7c12a_752d_4fa8_9730_2a07c6cafa98.png)

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The regular user account for the development environment is: “forlinx”, and the corresponding password is: “forlinx”;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074935335-2e9a961f-fa58-479e-afd5-fff2aaaf56a7.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory: After extraction, you will obtain the development environment folder 35XX.

The file 35XX.vmx in the OK35XX-linux6.1-VM17-ubuntu22.04 development environment folder is the file that the virtual machine needs to open.

Open the installed virtual machine software.

![Image](1719278548894_5a126d86_d30f_4f1c_906b_1d615fdf2e0a.png)

Select the directory where the newly extracted - OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, and double-click the startup file to open it

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074935534-0eee62ec-c630-4fdc-a1db-b17e8b1c56da.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

The default account for auto-login upon system boot in the development environment is: “forlinx”, with the password: “forlinx.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074935696-ad89ca8a-9c1c-4538-8541-0b0c4bc19fbe.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click “Create a New Virtual Machine”. Enter the following interface:

![Image](1719278531825_28237039_37c8_4a5f_8597_f64b71e7e312.png)

Select ''Custom'' and click ''Next.''

![Image](1719278532008_920d71ea_3371_425c_9b27_a15b1789fdf9.png)

Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''

![Image](1719278532173_48b35578_2a3d_4aff_9888_513f9b66eaaf.png)

Select install the operation later and click Select 'I will install the operating system later' and click ''Next.''

![Image](1719278532371_cd7442c7_21c1_4c8a_8463_24ea3de5f6c1.png)

Keep the default settings and click ''Next.''

![Image](1719278532534_39687568_6ee3_4284_b373_2104df01f0fb.png)

Modify the virtual machine's name and installation location, then click ''Next.''

![Image](1719278532718_2cd2ea2a_0f97_46d5_ad8b_4f004e889a20.png)

Set the number of processors according to your needs.

![Image](1719278532900_dd3f7357_07c5_4dc4_9fd1_7d367c7a7111.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3568-c/OK3568-C_Forlinx_Desktop22_04_User_Compilation_Manual/1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

Choose the default LSI for the IO controller type.

![Image](1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

Similarly, select SCSI as the default here.

![Image](1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Choose to create a new virtual disk:

![Image](1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.

![Image](1719278534210_b2fc7391_1c76_4148_80c8_855cd9174698.png)

Specify the disk file, the default setting is fine here.

![Image](1719278534358_9585162d_5c54_42eb_be37_f9361aebf91d.png)

Click ''Finish'' by default to complete.

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

The installed Ubuntu version is 22.04. First, go to the official Ubuntu website to download the 64-bit image. The download link is: [https://old-releases.ubuntu.com/releases/22.04.4/.](https://old-releases.ubuntu.com/releases/22.04.4/)Download the version ubuntu-22.04.4-desktop-amd64.iso.

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

![Image](1740967889311_2d81dcbe_0cae_4c55_97c9_537521a15233.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3568-c/OK3568-C_Linux5_10_160_User_Compilation_Manual/1719278535121_beaef4c9_b729_4a86_8299_02e28a716d2d.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click “OK”.

![Image](1719278535409_a8fcb60d_f0a2_428c_8be7_0e124dcbc137.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3568-c/OK3568-C_Linux5_10_160_User_Compilation_Manual/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074939161-b522a748-25e0-4c08-bfee-edbeda7fe615.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click “Continue”.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536000-eb047135-c38a-4252-8c28-ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536210-5beb2cde-35d4-44aa-b6b6-4e9c8e760b06.png)

Click Install Now by default, and a prompt will appear. Click Continue to proceed.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536401-c42c25c7-6384-4061-a7e2-76c6349c64be.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536688-120370eb-2370-46c6-805f-a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074939340-40476459-4415-4706-bfd4-8f1719103f7d.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074939455-72678fce-59fb-4a00-b71f-c9cf932616ba.png)

After installation is complete, the screen will look like the image below. Click “Restart Now” to reboot (or click “Restart Guest”).

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074939602-d94a77cd-d058-40c1-98ee-750ec860b571.png)

After restarting and logging in, the system interface is as shown below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074939706-daf27d61-ef08-4639-b411-552e3b4aece3.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

+ **VMware Tools Installation：**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](1740967889588_bda78844_fce6_43a6_a75d_1404d2f9ad28.png)

#### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:

![Image](1740967890224_d642497d_9876_4d31_897d_02276b6462f3.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

![Image](1.png)

The network is set to dynamic IP.

![Image](1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f.png)

+ **Bridge Mode：**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

![Image](1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)

![Image](1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99.png)

Set the static IP. At this time, the Ubuntu IP and the host IP should be set in the same network segment.

![Image](1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f-1790660964244.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click “OK”. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:

![Image](1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca.png)

After starting the virtual machine, insert the USB drive. A "USB icon" will appear in the lower-right corner of the virtual machine. Right-click on it and select “Connect”. You will then see an additional directory in the file system, indicating the USB drive has been successfully mounted, as shown in the following figure:

![Image](1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)

![Image](1719278542337_c0fe4886_515f_4fe1_9446_22882a83577e.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update                   //Update apt-get download sources
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot        //Necessary toolkit installation
forlinx@ubuntu:~$ sudo apt-get install repo git ssh make gcc libssl-dev liblz4-tool
expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static
live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler python-pip libncurses5-dev
forlinx@ubuntu:~$ sudo apt-get install libgmp-dev  libmpc-dev libicu-dev bsdmainutils
```

### 3.1.7 Installation of Necessary Libraries for Compiling OK3568 Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update apt-get download sources
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Necessary toolkit installation
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \ 
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \ 
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \ 
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \ 
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \ 
libmpc-dev bc python-is-python3 python2 \
gettext scons
```

These libraries are required when setting up the 3568 Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK3568 Linux development environment, you can skip this step.

### 3.2 Installing the Cross-compilation Toolchain

User Profiles/2-Images and 0-Source Code/Cross-compilation Toolchains/aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz

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

+ Path: user data \\ 2-image and source \\ 0-source \\ qt-creator-opensource-linux-x86 \_ 64-4.7.0.run

```bash
forlinx@ubuntu:~$ ./qt-creator-opensource-linux-x86_64-4.7.0.run                   
```

This will open a graphical installation window. Follow the prompts to install:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542977-d1772186-fa60-442a-8cf2-6e5cffefaae2.png)![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543199-cbc234c5-2d49-43aa-864e-4daf0abe7a4c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543389-eaacabb8-9343-4e45-8626-9a68c043e0a0.png) ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543608-c9d367f7-56c3-44b6-829c-04f29286f63d.png)

Online users need to register for a Qt account. Existing Qt account holders can log in directly. The Qt password requires a mix of uppercase letters, lowercase letters, and numbers. After registering and logging in successfully, click Next.

Offline users can click Skip.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543830-11d43ecf-8d67-4bd0-a472-fc52383a77b1.png)

Click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544047-02ae511b-f6df-49fc-94ad-50606afa9ac1.png)

You can set the installation path according to your preferences; we use the default here. Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544274-25984f38-7e0d-4029-97ec-25fc13e82651.png)

Choose Complete Installation and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544480-43ea98bb-67e7-4632-a1cf-b917e22a17eb.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544690-a23e2f5f-b76b-46c9-8ebc-ef0ddc395677.png)

Click Install and wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544902-6e395fac-45b1-428e-b5ed-dd3045ed1597.png)

After installation, click Finish. The Qt interface will automatically open, or you can launch it from the command line. To open Qt Creator in the background, use the following command, replacing it with your actual installation path:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278545088-f7954df3-4aa6-40d1-9046-723786b916af.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

## 4\. Compilation of Related Code

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation. Note: Currently, only the kernel source code is available. This section only describes how to compile the kernel and the application.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-Toolchain: aarch64-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-6.1.118
+ Qt Version Ported to Development Board: qt5.15.11

#### 4.1.2 Copying the Source Code

Source Code: User Information \\ 2-Image and Source Code \\ 0-Source Code \\OK3568-linux-source.tar.bz2.0\*

Buildroot packages: User Data\\2-Images and Source Code\\0-Source Code\\dl.tar.bz2

Create a working directory and place the source code and dl.tar.bz2 into the work directory.

**Note:**

- **During the Buildroot build process, the source code for various software packages needs to be downloaded. This requires internet access and may fail or result in incomplete downloads due to network fluctuations, restrictions, or issues with the source server, potentially causing compilation errors. Due to network fluctuations, restrictions, or issues with the source server, the download of source packages may fail or become incomplete, leading to compilation errors. To increase the success rate and reduce build time, it is strongly recommended to use the pre-configured solution by extracting the pre-downloaded software package archive dl.tar.bz2 into the Buildroot source directory;**
- **The source code unzip path should not be too long, otherwise it may cause compilation exceptions.**

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work								//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK3568-linux-source.tar.bz2.0* > OK3568-linux-source.tar.bz2
forlinx@ubuntu:~/work$ tar -vxf OK3568-linux-source.tar.bz2  //Extract the archive in the current directory
forlinx@ubuntu:~/work$ cd /home/forlinx/work/OK3568-linux-source/buildroot
forlinx@ubuntu:~/work/OK3568-linux-source/buildroot$ tar -vxf ../../dl.tar.bz2	//Extract dl.tar.bz2 under the Buildroot directory.
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
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3568-linux-source
```

The following operations need to be performed in the source code directory. Compilation method:

Perform a full compilation.

**Note: Since the default is to use the precompiled file system, kernel modules need to be installed during the full compilation process. Therefore, a user password needs to be manually entered once during the compilation process for mounting the image.**

```bash
forlinx@ubuntu:~/work/OK3568-linux-source$ ./build.sh
```

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074941558-cb4b0ec2-5b67-4833-ace9-3bfffd115eab.png)

Once the compilation is complete, the system image will be generated in the rockdev folder, as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074941704-cbc856ea-6887-40cd-9d5d-f353ed3c931d.png)

Please note: update.img is a pre-packaged file intended for full flashing via OTG or a TF card; the other files are for step-by-step flashing.

The source code comes with a pre-compiled filesystem image:

OK3568-linux-source/prebuilts/forlinx/rk3568/buildroot/rootfs.ext4, using this image can significantly reduce the time for creating a system image. If you need to modify the contents or configuration of the file system (rootfs), you must remove this rootfs.ext4 image file. After removal, execute the compilation script; Buildroot will then recompile and generate a new root filesystem image.

#### 4.2.2 Individual Compilation

You can operate in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK3568-linux-source$ ./build.sh kernel
```

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074941794-a005d01a-b98c-47e6-ac57-69fa92a02f1d.png)

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

#### 4.2.3 Cleaning up Generated Files

You can operate in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK3568-linux-source$ ./build.sh cleanall
```

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074941942-9267c39a-1539-4017-9156-42eec3bf7fd9.png)

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

#### **4.2.4 Kernel Configuration**

If you want to configure the kernel, a full compilation must be completed first

Carry out the following steps in the source code directory.

```bash
forlinx@ubuntu:~/work/OK3568-linux-source$ ./build.sh kconfig
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

Navigate to the installation directory of Qt Creator and open Qt Creator;

```bash
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator
```

In Qt Creator, go to Tools → Options → Kits → Compilers, then click Add → GCC → C;

Enter GCC in the Name field.

Paste the path to the build chain into the Compiler Path field, as shown in the figure below:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-gcc

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942139-bc81d5d1-44c1-4bc3-ae78-4990e46c24a7.png)

Add the GCC compiler using the same method, and click "Add->GCC->C" on the right, as shown in the image:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942326-65748314-2a7b-4e0e-a454-84154e722744.png)

#### 4.4.2 Qt Versions Configuration

- Click Tools -> Options -> Qt Versions in Qt Creator;

- Then click Add; a dialogue box will appear for you to make your selection /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake

- Click Open to add it;

- Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

- Click "Apply and then OK".


![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942483-f48e81e9-97d8-4389-aadb-8054eb7923de.png)

#### 4.4.3 Kits Configuration

Kits are a set of build tools used to configure and select development environments. They are particularly useful for projects that involve multiple Qt libraries. Integrate the previously added cross-compiler and Qt Version into the Kits to build a compilation environment suitable for the development board.

- In Qt Creator, navigate to Tools → Options → Kits, then click Add to open the configuration section;

- Modify the Name as desired;

- Select GCC in the Compiler field;

- In the Qt version field, select the name you entered when creating the Qt version;

- Click "Apply and then OK".

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942607-fd9c0011-b79d-464e-a360-018c9cb35906.png)

### 4.5 Application Compilation and Running

#### 4.5.1 Command-Line Applications Compilation and Operation

This section uses the watchdog test programme; by default, the source code is copied to the /home/forlinx/work directory.

Use the cd command to navigate to the test source code directory;

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3568-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

Add the cross-compiler path and use make to cross-compile;

```bash
forlinx@ubuntu:~/work/OK3568-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~/work/OK3568-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gcc watchdog.c -o fltest_watchdog
```

Use the file command to view information about the generated file.

```bash
forlinx@ubuntu:~/work/OK3568-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that a 64-bit ARM file is generated.

Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, copy it to the development board and run the test.

```bash
root@OK3568-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK3568-buildroot:~# ./fltest_watchdog
Watchdog Ticking Away!
```

#### 4.5.2 QT Application Compilation and Operation

Open Qt Creator in your development environment (users should open it using their own path), click File → Open File or Project in Qt Creator, and in the pop-up window, select /home/forlinx/work/OK3568-linux-source/app/forlinx/flapp/src/watchdog/watchdog.pro

```bash
forlinx@ubuntu:~$ cd qtcreator-4.7.0/bin/
forlinx@ubuntu~/qtcreator-4.7.0/bin$ ./qtcreator &
```

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942717-26e6b447-050d-4562-926f-9e1027e9dd45.png)

After opening the project, the interface should appear as follows: (If the page does not change automatically, please select according to the screenshot.)

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942810-7fae24f2-effc-4da0-90b5-65f1a5bf0deb.png)

Clicking Configure Project will apply the compilation environment built in the “Qt Creator Environment Configuration” chapter of this manual.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942889-ccec03ba-feb2-4db3-ab01-59b8bae9ed6c.png)

Click Build-> Clean All to clear. (If the intermediate file is not cleared, it can be deleted manually).

Click Configure Project, which will adapt to the compilation environment built in the "Qt Creator Environment Configuration" section.  
Then click Build -> Clean All to clean up the previous build files.  
(If intermediate files are not cleaned, you can delete them manually.)  
Uncheck Shadow build in the Projects section.  
Click Build -> Build All to compile.  
Once the build progress bar completes, the new executable file fltest\_qt\_watchdog will be located in the /app/forlinx/forlinx\_qt/watchdog directory.

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074942961-2ea5ca43-2a0e-4991-bb7e-f1607f133830.png)

Then, click Build → Build All to start the compilation.

Once the Build progress bar in the bottom-right corner has completed, this indicates that the compilation is finished. At this point, you will see the newly generated binary file fltest\_qt\_watchdog in the directory /home/forlinx/work/OK3568-linux-source/app/forlinx/flapp\_out/\`, as shown below:

![](https://cdn.nlark.com/yuque/0/2026/png/50461850/1779074943072-6c38e19a-56d3-4e48-b74a-b72f1b5ddd9c.png)

Copy the compiled executable file to the board via a USB drive, FTP, or other methods. Once copied to the development board, run the test.