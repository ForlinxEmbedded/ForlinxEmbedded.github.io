# Linux 6.12.58\_User’s Compilation Manual Initial Version\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open    

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly understand the compilation process and become the compilation methods. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware Requirements: A minimum of 6GB of RAM is recommended. This will allow you to allocate 2GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 4 chapters:

+ Chapter 1. covers the installation of VMware, specifically version VMware®Workstation 17 Pro v17.0.0. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2. explains how to load the Ubuntu development environment provided by Feilin. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work.
+ Chapter 4. explains how to compile source code for the development board.

Additionally, the manual includes explanations of some symbols and formats.

| **Format** | **Meaning**|
|:--------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️️️🛤️ ️ | Related paths.|
| <font style="color:blue;">Blue font on gray background</font> | Refers to the command entered on the command line, which needs to be entered manually.|
| Black font on a gray background| Serial output information after command input|
| **Black Bold font on a gray background**| Key information in the serial output:|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@ok3572-buildroot:/# : Development board serial port and network login account information, Ubuntu account information. You can use this information to determine the functional operating environment.|

Example: After packaging the file system, use the ls command to view the generated files.

```bash
forlinx@ubuntu:~/3572$ ls //List the files in this directory
OK3572-linux-source.tar.bz2 OK3572-linux-source.tar.bz2.00 OK3572-linux-source.tar.bz2.01 OK3572-linux-source.tar.bz2.02 OK3572-linux-source.tar.bz2.03 OK3572-linux-source.tar.bz2.04
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu.
+ //: Explanation of the command. No need to enter this when typing the command.
+ <font style="color:#0000FF;"><font style="color:blue;background-color:#e5e5e5;">ls</font></font>:  blue font with gray background, indicating the relevant command that needs to be entered manually
+ **OK3572-linux-source.tar.bz2**: The output information after inputting the command is shown in black font, and the key information is in bold font. In this case, it refers to the packaged file system.

## Application Scope

This software manual is designed for the OK3572 platform running Linux6.12.58. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| Date| Version| Revision History|
|:-----------|:-----------|----------|
| 16/06/2026 | V1.0| Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](1726292018801_8230a6f7_bdc2_4fd7_a6ac_9b9051a28f3d.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.

![Image](1726292019102_966a3de3_90e4_43c5_8d09_638579d0a5ad.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](1726292019326_bbe7eaef_ef8c_420c_9a24_c318002f625b.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](1726292019516_d327a170_62c9_4921_8243_13806619bec3.png)

Check, then click “Next.”

![Image](1726292019727_ca602d71_8eb8_479d_836a_433822d8404f.png)

Check “Add shortcuts” and click “Next.”

![Image](1726292019978_f50a4b96_86f6_4b81_b46a_24aeb5e39e8f.png)

Click “Install.”

![Image](1726292020296_68686b42_4114_438d_bd79_cc171fa88b02.png)

Wait for the installation to complete.

![Image](1726292020500_b5aec052_b5fe_4a5a_84a0_cf4630dec74d.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

![Image](1726292020748_89dabfcd_6ac8_48a9_85db_74c39c551c00.png)

<font style="color:#000000;">     </font>

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **Development Environment Account: forlinx; password: forlinx;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512262705_ab537e45_63b1_4551_9583_5cbb059c167e.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory: After extraction, you will obtain the development environment folder 35XX.

The file 35XX.vmx in the OK35XX-linux6.1-VM17-ubuntu22.04 development environment folder is the file that the virtual machine needs to open.

Open the installed virtual machine software.

![Image](1726291989979_2b8d681a_40e2_4572_8cb0_35d6320a4abc.png)

Select the directory where the newly extracted - OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, and double-click the startup file to open it

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512263178_137cfa8f_f0e7_402d_87b0_6df824638cd7.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](1726291990450_b1f74516_c288_4574_baf3_ab9f4d6c3ebd.png)

Development Environment Account: forlinx; password: forlinx

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512263469_14d32479_0808_41b4_ad17_78f17711d279.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click “Create a New Virtual Machine”. Enter the following interface:

![Image](1726291996421_80355a1a_1a92_46e3_9818_8b3496d88bb9.png)

Select ''Custom'' and click ''Next.''

![Image](1726291996662_59902e0c_a9fd_4a7c_aebb_9c825cc1a759.png)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click "Next".

![Image](1726291996865_5c88406f_2ad2_4afe_9f13_e6096bcc0e4e-1783653515013.png)

Select Install the operating system later and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512265731_9fe1675d_4eb8_4b8d_820a_c130ad73eb58.png)

Keep the default settings and click ''Next.''

![Image](1726291997449_e9665fd6_38ca_490b_ab72_91f7c783eb18.png)

Modify the virtual machine's name and installation location, then click ''Next.''

![Image](1726291997629_8dbe5f95_19c8_45f5_af0a_f3b373534742.png)

Set the number of processors according to your needs.

![Image](1726291997860_f391be4d_7d2f_4d92_a1db_90dd94208b7f.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![Image](1726291998076_65147b0e_e965_47f5_9b9c_5d3815292955.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](1726291998283_b3431f5b_4dbf_4775_abf7_333e6e29413c.png)

Choose the default LSI for the IO controller type.

![Image](1726291998524_8ae2b9e4_31b7_4720_b517_8649ff9fe0b9.png)

Similarly, select SCSI as the default here.

![Image](1726291998524_8ae2b9e4_31b7_4720_b517_8649ff9fe0b9-1783654738538.png)

Choose to create a new virtual disk:

![Image](1726291998756_bdaa4dd0_eb22_423f_b558_4bb3f8f07563-1783654756783.png)

Set the disk size to 200GB and select the disk's format, then click "Next" to complete.

![Image](1726291998967_827fe271_3974_4f53_becf_0be10af4a52a.png)

Specify the disk file, the default setting is fine here.

![Image](1726291999485_de6c555b_c557_4f25_8b33_44810fdc22cc.png)

Click ''Finish'' by default to complete.

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

The installed Ubuntu version is 22.04. First, go to the official Ubuntu website to download the 64-bit image. The download link is: [https://old-releases.ubuntu.com/releases/22.04.4/.](https://old-releases.ubuntu.com/releases/22.04.4/) Download the version ubuntu-22.04.4-desktop-amd64.iso.

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

![Image](28.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

![Image](29.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click "OK".

![Image](29-1783655084630.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.

![Image](30.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512266328_d690cbe0_2ea1_4feb_a313_26c85709d46b.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1719278536000_eb047135_c38a_4252_8c28_ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1719278536210_5beb2cde_35d4_44aa_b6b6_4e9c8e760b06.png)

Click Install Now by default, and a prompt will appear. Click Continue to proceed.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1719278536401_c42c25c7_6384_4061_a7e2_76c6349c64be.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1719278536688_120370eb_2370_46c6_805f_a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512266486_52626a1c_3325_43cc_bbe6_8d001d7bdee9.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512266556_6c43c4b8_db50_409e_bb84_35e4a5cf53eb.png)

After installation is complete, the screen will look like the image below. Click “Restart Now” to reboot (or click “Restart Guest”).

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512266723_5722a4f0_1db0_4cc8_ae8a_5f808d4a1d21.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1719278538153_32d91128_59b7_4c50_9745_84b3186f5a51.png)

After restarting and logging in, the system interface is as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Linux_6_12_58_User_Compilation_Manual/1781512266942_4afcee48_98f1_4ef1_97f1_dd01a602eace.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

+ **VMware Tools Installation：**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99.png)

#### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:

![Image](1719278540173_d56c3ec8_1d83_49da_99f7_6bbd9a9b6830.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

![Image](1.png)

The network is set to dynamic IP.

![Image](1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f.png)

+ **Bridge Mode：**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

![Image](1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)

![Image](1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99-1783655281485.png)

Set the static IP. At this time, the Ubuntu IP and the host IP should be set in the same network segment.

![Image](1-1783655315226.png)

![Image](1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f-1783655325812.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click OK. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:

![Image](1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca.png)

After the virtual machine starts, insert the USB flash drive. An icon similar to a "USB drive" will appear in the lower-right corner of the virtual machine. Right-click it and select Connect. Then, you should see a new directory in the file system, indicating that the USB drive has been successfully loaded, as shown below:

![Image](1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)

![Image](1719278542337_c0fe4886_515f_4fe1_9446_22882a83577e.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update                        // Updates download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential       // Provides a list of essential packages for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*          // Used for generating text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                  // A compression/decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools             // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK3572 Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update the apt-get download sources
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Install essential tool packages
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \ 
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \ 
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \ 
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \ 
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \ 
libmpc-dev bc python-is-python3 python2 \
gettext scons curl
```

These libraries are required when setting up the 3572 Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK3572 Linux development environment, you can skip this step.

### 3.2 Installing the Cross-compilation Toolchain

Software Resources/3-Tools/aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz

Copy the above compressed file to the /home/forlinx/ directory in the development environment, and extract it there:

```bash
forlinx@ubuntu:~$ tar -zvxf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

Enter aarch64-buildroot-linux-gnu\_sdk-buildroot and execute relocate-sdk.sh.

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

## 4\. Compilation of Related Code

This section primarily describes how to compile the source code for the development board, including methods for compiling the entire SDK, compiling individual components, and compiling applications.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-Toolchain: aarch64-none-linux-gnu-
+ Bootloader Version for Development Board: u-boot-2025.04
+ Kernel Version for Development Board: linux-6.12.58

#### 4.1.2 Copying the Source Code

Program source code: Software Documents\\2-Images and Source Code\\1-Source Code\\OK3572-linux-source.tar.bz2.0\*

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work								//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK3572-linux-source.tar.bz2.0* > OK3572-linux-source.tar.bz2
forlinx@ubuntu:~/work$ tar -vxf OK3572-linux-source.tar.bz2  //Extract the compressed file to its default location
```

Wait for the copy process to complete after running the command.

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 8GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### **4.2.1 Full Compilation Test**

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3572-linux-source
```

The following steps must be carried out in the source code directory to perform a full compilation:

```bash
forlinx@ubuntu:~/work/OK3572-linux-source$ ./build.sh config
Log colors: message notice warning error fatal

OK3572-C_Linux_fs
.......
Pick a defconfig:

1. forlinx_defconfig
2. forlinx_ok3572_linux_defconfig
Which would you like? [1]: 1
```

```bash
forlinx@ubuntu:~/work/OK3572-linux-source$ ./build.sh 
```

Once compilation is complete, the system image will be generated in the output/firmware/ folder, as shown in the figure below:

```bash
lrwxrwxrwx  1 root root   40 Apr 30 19:46 MiniLoaderAll.bin -> ../../u-boot/rk3572_loader_v1.01.101.bin
lrwxrwxrwx  1 root root   26 Apr 30 19:46 boot.img -> ../../kernel-6.12/boot.img
lrwxrwxrwx  1 root root   11 Apr 30 19:46 misc.img -> ../misc.img
lrwxrwxrwx  1 root root   22 Apr 30 19:53 oem.img -> ../extra-parts/oem.img
lrwxrwxrwx  1 root root   48 Apr 30 19:53 parameter.txt -> ../../device/forlinx/.chips/ok3572/parameter.txt
lrwxrwxrwx  1 root root   23 Apr 30 19:53 recovery.img -> ../recovery/ramboot.img
lrwxrwxrwx  1 root root   75 Apr 30 19:51 rootfs.img -> ../../buildroot/output/forlinx_ok3572_linux/OK3572-Linux/images/rootfs.ext2
lrwxrwxrwx  1 root root   22 Apr 30 19:46 uboot.img -> ../../u-boot/uboot.img
lrwxrwxrwx  1 root root   26 Apr 30 19:53 update.img -> ../update/Image/update.img
lrwxrwxrwx  1 root root   27 Apr 30 19:53 userdata.img -> ../extra-parts/userdata.img
```

Please note: update.img is a pre-packaged file intended for full flashing via OTG or a TF card; the other files are for step-by-step flashing.

#### **4.2.2 Individual Compilation**

You should carry out these operations in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK3572-linux-source$ ./build.sh kernel
```

```bash
FIT description: U-Boot FIT source file for arm
Created:         Thu Apr 30 20:00:35 2026
 Image 0 (fdt)
  Description:  unavailable
  Created:      Thu Apr 30 20:00:35 2026
  Type:         Flat Device Tree
  Compression:  uncompressed
  Data Size:    259597 Bytes = 253.51 KiB = 0.25 MiB
  Architecture: AArch64
  Load Address: 0xffffff00
  Hash algo:    sha256
  Hash value:   5ec142de6b6f381b84eea7573543d484f3a58e12309408d06cdc207d0787a40f
 Image 1 (kernel)
  Description:  unavailable
  Created:      Thu Apr 30 20:00:35 2026
  Type:         Kernel Image
  Compression:  uncompressed
  Data Size:    46457344 Bytes = 45368.50 KiB = 44.31 MiB
  Architecture: AArch64
  OS:           Linux
  Load Address: 0xffffff01
  Entry Point:  0xffffff01
  Hash algo:    sha256
  Hash value:   8b545b812b3d8e17cfca7e87000b03636024b32941cedda3948834da8140e420
 Image 2 (resource)
  Description:  unavailable
  Created:      Thu Apr 30 20:00:35 2026
  Type:         Multi-File Image
  Compression:  uncompressed
  Data Size:    2336768 Bytes = 2282.00 KiB = 2.23 MiB
  Hash algo:    sha256
  Hash value:   33bc54c34577db0d69fe40805a979b18ae9609c4a3c90b88b774da99f2201676
 Default Configuration: 'conf'
 Configuration 0 (conf)
  Description:  unavailable
  Kernel:       kernel
  FDT:          fdt
+ ln -rsf kernel/boot.img /home/forlinx/work/OK3572-linux-source/output/firmware/boot.img
Not Found io-domains in
Running 10-kernel.sh - build_kernel succeeded.
```

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

Device tree used by the kernel: **arch/arm64/boot/dts/rockchip/OK3572-C-Linux.dts**
Configuration files used by the kernel: **arch/arm64/configs/OK3572-C-Linux\_defconfig**

#### **4.2.3 Cleaning up Generated Files**

You should carry out these operations in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK3572-linux-source$ ./build.sh cleanall
Log colors: message notice warning error fatal

Log saved at /home/forlinx/work/OK3572-linux-source/output/sessions/2026-04-30_20-04-22
Using last kernel version(6.12)
make: Entering directory '/home/forlinx/work/OK3572-linux-source/kernel-6.12'
  CLEAN   certs
  CLEAN   drivers/firmware/efi/libstub
  CLEAN   drivers/misc/lkdtm
  CLEAN   drivers/scsi
  CLEAN   drivers/tty/vt
  CLEAN   fs/unicode
  CLEAN   init
  CLEAN   kernel
  CLEAN   lib
  CLEAN   net/wireless
  CLEAN   usr
  CLEAN   .
  CLEAN   modules.builtin modules.builtin.modinfo .vmlinux.export.c
  CLEAN   scripts/basic
  CLEAN   scripts/dtc
  CLEAN   scripts/kconfig
  CLEAN   scripts/mod
  CLEAN   scripts
  CLEAN   include/config include/generated .config .config.old .version Module.symvers
make: Leaving directory '/home/forlinx/work/OK3572-linux-source/kernel-6.12'
make: Entering directory '/home/forlinx/work/OK3572-linux-source/u-boot'
  CLEAN   dts/./upstream/src/arm64
  CLEAN   dts
  CLEAN   tools/env
  CLEAN   tools
  CLEAN   tools/generated
  CLEAN   spl/arch spl/board spl/boot spl/cmd spl/common spl/disk spl/drivers spl/dts spl/env spl/fs spl/lib spl/u-boot-spl spl/u-boot-spl-dtb.bin spl/u-boot-spl-nodtb.bin spl/u-boot-spl.bin spl/u-boot-spl.dtb spl/u-boot-spl.lds spl/u-boot-spl.map spl/u-boot-spl.sym spl/u-boot.cfg
  CLEAN   include/autoconf.mk include/autoconf.mk.dep include/bmp_logo.h include/bmp_logo_data.h include/config.h include/generated/env.in include/generated/env.txt drivers/video/u_boot_logo.S tools/version.h u-boot-nodtb.bin u-boot.lds u-boot.dtb u-boot-initial-env u-boot.map u-boot.srec u-boot.cfg u-boot.bin u-boot-dtb.bin u-boot u-boot.sym System.map bl31.elf bl31_0x40040000.bin bl31_0x4005a000.bin bl31_0x40056000.bin bl31_0x400e0000.bin
  CLEAN   scripts/basic
  CLEAN   scripts/dtc
  CLEAN   scripts/kconfig
  CLEAN   include/config include/generated spl
  CLEAN   .config .config.old
make: Leaving directory '/home/forlinx/work/OK3572-linux-source/u-boot'
Running build.sh - cleanall succeeded.
```

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

#### **4.2.4 Kernel Configuration**

If you want to configure the kernel, a full compilation must be completed first

Carry out the following steps in the source code directory.

```bash
forlinx@ubuntu:~/work/OK3572-linux-source$ ./build.sh kconfig
```

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

### 4.3 Use of Image Files

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing.  
The image files generated by individual compilation will not update update.img and should be flashed step-by-step (refer to the OTG flashing section in the user manual). The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.4 Application Compilation and Running

#### 4.4.1 Command-Line Applications Compilation and Operation

This section uses the watchdog test programme; by default, the source code is copied to the /home/forlinx/work directory.

1\. Use the cd command to navigate to the test source code directory;

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3572-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

2\. Add the cross-compiler path and use make to cross-compile;

```bash
forlinx@ubuntu:~/work/OK3572-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~/work/OK3572-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gnu-gcc watchdog.c -o fltest_watchdog
```

3\. Use the file command to view information about the generated file.

```bash
forlinx@ubuntu:~/work/OK3572-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that a 64-bit ARM file is generated.

4\. Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, copy it to the development board and run the test.

```bash
root@OK3572-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK3572-buildroot:~# ./fltest_watchdog -c
Watchdog Ticking Away!
```