# Linux 6.1.141\_User’s Compilation Manual\_V1.0

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
+ Chapter 2. explains how to load the Ubuntu development environment provided by Forlinx. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work;
+ Chapter 4. explains how to compile source code for the development board.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️️️️️️🛤️️ | Related paths.|
| **Black Bold**| Key information in the serial output:|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@OK3568-buildroot:~# : Development board login account information;<br />forlinx@ubuntu: Ubuntu account information in the development environment.   <br/>You can use this information to determine the operating environment for functional operations. |
Example: After packaging the file system, use the ls command to view the generated files.

```bash
forlinx@ubuntu:~/3568$ ls                                  //List the files in this directory
OK3568_Linux_fs  OK3568_Linux_fs.tar.bz2.00 OK3568_Linux_fs.tar.bz2.01 OK3568_Linux_fs.tar.bz2.02 OK3568_Linux_fs.tar.bz2.03
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu;
+ //: Explanation of the command. No need to enter this when typing the command;
+ For detailed information, please refer to the OK1126B-S User Materials. All file paths for user materials mentioned in this document are relative to the root directory of the OK1126B-S User Materials.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|:----------:|
| 22/12/2025 | V1.0| Linux6.1.141 User’s Compilation Manual Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/OK1126B-S_Linux6_1_141_User_Compilation_Manua/1726292018801_8230a6f7_bdc2_4fd7_a6ac_9b9051a28f3d_1767171625516.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236062-e6163fc5-83f0-49e5-929c-eebc92b1a120.png)

Check “I accept the terms in the license agreement” and click “Next.”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236157-1918637e-6248-43c7-b9a5-da1bf102a3d1.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236236-cc76f4d3-e20c-43f3-8c1b-c220b4612d89.png)

Check, then click “Next.”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236318-03575207-5d88-460c-960c-a0a9aa376413.png)

Check “Add shortcuts” and click “Next.”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236415-14a81961-27b3-45e0-b913-0e6a57d7f0a7.png)

Click “Install.”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236499-00595516-2ab4-4710-8e66-e106ba2373f8.png)

Wait for the installation to complete.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236612-a2ed395b-f9d8-4e02-bdb8-c328421677b1.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236706-bd43dd1e-44de-401c-9e61-6b8d181f0f55.png)

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **Development Environment Account: forlinx; password: forlinx;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060256-61fea8f4-1836-4bc3-8430-1a1e3a2b7169.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory: After extraction, you will obtain the development environment folder 35XX.

The file 35XX.vmx in the OK35XX-linux6.1-VM17-ubuntu22.04 development environment folder is the file that the virtual machine needs to open.

Open the installed virtual machine software.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060335-6b9be91f-fc9c-4874-86ef-2e5e4b37e5bf.png)

Select the directory where the newly extracted - OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, and double-click the startup file to open it

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060407-2cc177c9-24c3-4989-9698-ca1bad96d584.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060472-c64edde3-62fb-4d3c-9239-9e55cb61a8d4.png)

Development Environment Account: forlinx; password: forlinx.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053238308-7897f6cc-11b8-43dc-9aea-19646fa266ec.png)

The existing Ubuntu development environment does not include a cross-compilation toolchain or Qt Creator. If required, please refer to sections “3.2 Installing the Cross-compilation Toolchain” and “3.3 Installing Qt Creator” in the user compilation manual.

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click “Create a New Virtual Machine”. Enter the following interface:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382061988-04c94945-484b-4487-9596-42ac7a277785.png)

Select ''Custom'' and click ''Next.''

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062060-30b39de8-153d-43a3-aafa-a6470e1a5489.png)

Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062231-90a01986-7bb6-4173-ba1a-625399fc05e2.png)

Select instal the operation later and click Select 'I will install the operating system later' and click ''Next.''

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062317-2700dd52-596b-468c-ba2a-b024e30f06aa.png)

Keep the default settings and click ''Next.''

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062408-f66500a0-f66d-41f8-9564-5fe7eaa208c6.png)

Modify the virtual machine's name and installation location, then click ''Next.''

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062491-b0dca4b0-8393-4d74-8988-49a12e807db7.png)

Set the number of processors according to your needs.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062557-e2f2b034-5acb-4fae-b932-fa19ab06e419.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533112-8f49bb5a-64b5-47df-8798-044888bfa83b.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533381-8dc68236-561d-4840-abb7-3512def5cecf.png)

Choose the default LSI for the IO controller type.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533635-d54cda44-50e2-4643-b3d3-54dc41a1bfa6.png)

Similarly, select SCSI as the default here.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533807-86b2d601-916f-4f7d-b7c0-4a672e97d659.png)

Choose to create a new virtual disk:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534036-c400a9dc-bdac-4dde-bd52-d4e721fb4ccd.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534210-b2fc7391-1c76-4148-80c8-855cd9174698.png)

Specify the disk file, the default setting is fine here.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534358-9585162d-5c54-42eb-be37-f9361aebf91d.png)

Click ''Finish'' by default to complete.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534538-0cb90337-6bc8-4fc5-8009-267ab1d2617c.png)

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

The installed Ubuntu version is 22.04. First, go to the official Ubuntu website to download the 64-bit image. The download link is: [https://old-releases.ubuntu.com/releases/22.04.4/.](https://old-releases.ubuntu.com/releases/22.04.4/)Download the version ubuntu-22.04.4-desktop-amd64.iso.

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534926-94943ef2-c4d9-4ddd-91e9-50c5088dfacc.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062619-7ab02551-ab95-41c9-bc43-3923409db1c5.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click OK.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062680-c9c5193e-3353-4424-acd0-3d19755db6a6.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535587-6fcfdee5-51f1-4e1c-9906-d39fc0048711.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062740-8d4fffe6-3f92-47ff-82a5-9a738edd68c3.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click “Continue”.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536000-eb047135-c38a-4252-8c28-ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536210-5beb2cde-35d4-44aa-b6b6-4e9c8e760b06.png)

Click Install Now by default, and a prompt will appear. Click Continue to proceed.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536401-c42c25c7-6384-4061-a7e2-76c6349c64be.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536688-120370eb-2370-46c6-805f-a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062807-b52339a1-ad54-46c0-aa7c-6bf5f0d357b8.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062878-28446a75-0c69-4238-be5a-68b2dfa643d6.png)

After installation is complete, the screen will look like the image below. Click “Restart Now” to reboot (or click “Restart Guest”).

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062949-be55a3f4-2047-4102-b96b-3c11d505d5e5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538153-32d91128-59b7-4c50-9745-84b3186f5a51.png)

After restarting and logging in, the system interface is as shown below:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382063027-f48e7115-ead7-4aef-9d2e-d8450621631c.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

+ **VMware Tools Installation：**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539972-31f94d63-6f34-4904-846e-cd72975c7e99.png)

#### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540173-d56c3ec8-1d83-49da-99f7-6bbd9a9b6830.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540394-95e15661-d1d0-427e-93ed-e365eb39c296.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540571-3d28eb06-aea3-4fda-8397-e821b2b7fca1.png)

The network is set to dynamic IP.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540815-009829ab-476a-45b8-b02e-d7f42bfbe34f.png)

+ **Bridge Mode：**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541083-4d9634db-a591-45be-ad82-f0c7b1e12e3e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541277-05740351-022e-45fc-96c7-06caac0e068d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541434-9c36b6f6-6539-4295-8eec-4df165beb02c.png)

```plain
 设置静态ip，此时Ubuntu的IP与主机IP需设置在同一个网段。
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541630-bf5fd69d-adc1-407d-915f-2503b2055225.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click OK. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541851-33d6ec29-11c4-499b-867c-528314eef0ca.png)

After starting the virtual machine, insert the USB drive. A "USB icon" will appear in the lower-right corner of the virtual machine. Right-click on it and select “Connect”. You will then see an additional directory in the file system, indicating the USB drive has been successfully mounted, as shown in the following figure:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542123-ad4e8176-1557-40a0-b545-a4aa290b16d2.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542337-c0fe4886-515f-4fe1-9446-22882a83577e.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update                        // Update the download source information

forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provides a list of packages required for program compilation

forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used for generating text-based user interfaces

forlinx@ubuntu:~$ sudo apt-get install lzop                     // Compression and decompression tool based on the Lzo library

forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK1126B Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update the apt-get repositories
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Installation of the Essential Toolkit
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

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542977-d1772186-fa60-442a-8cf2-6e5cffefaae2.png) <!-- 这是一张图片，ocr 内容为： --> ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543199-cbc234c5-2d49-43aa-864e-4daf0abe7a4c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543389-eaacabb8-9343-4e45-8626-9a68c043e0a0.png) <!-- 这是一张图片，ocr 内容为： --> ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543608-c9d367f7-56c3-44b6-829c-04f29286f63d.png)

Online users need to register for a Qt account. Existing Qt account holders can log in directly. The Qt password requires a mix of uppercase letters, lowercase letters, and numbers. After registering and logging in successfully, click Next.

Offline users can click Skip.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543830-11d43ecf-8d67-4bd0-a472-fc52383a77b1.png)

Click “Next”:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544047-02ae511b-f6df-49fc-94ad-50606afa9ac1.png)

You can set the installation path according to your preferences; we use the default here. Click Next.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544274-25984f38-7e0d-4029-97ec-25fc13e82651.png)

Choose Complete Installation and click Next.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544480-43ea98bb-67e7-4632-a1cf-b917e22a17eb.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544690-a23e2f5f-b76b-46c9-8ebc-ef0ddc395677.png)

Click Install and wait for the installation to complete.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544902-6e395fac-45b1-428e-b5ed-dd3045ed1597.png)

After installation, click Finish. The Qt interface will automatically open, or you can launch it from the command line. To open Qt Creator in the background, use the following command, replacing it with your actual installation path:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278545088-f7954df3-4aa6-40d1-9046-723786b916af.png)

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

Buildroot packages: User Data\\2-Images and Source Code\\Source Code\\dl.tar.bz2

Create a working directory and place the source code and dl.tar.bz2 into the work directory.

**Note:**

**During the Buildroot build process, the source code for various software packages needs to be downloaded. This requires internet access and may fail or result in incomplete downloads due to network fluctuations, restrictions, or issues with the source server, potentially causing compilation errors. This process requires access to external networks. Due to network fluctuations, restrictions, or issues with the source server, the download of source packages may fail or become incomplete, leading to compilation errors. To increase the success rate and reduce build time, it is strongly recommended to use the pre-configured solution by extracting the pre-downloaded software package archive dl.tar.bz2 into the Buildroot source directory.**

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work								//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK1126B-linux-source.tar.bz2.0* > OK1126B-linux-source.tar.bz2
forlinx@ubuntu:~/work$ tar -vxf OK1126B-linux-source.tar.bz2  //Extract the compressed file to its default location
forlinx@ubuntu:~/work$ cd /home/forlinx/work/OK1126B-linux-source/buildroot
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ tar -vxf ../../dl.tar.bz2	//Unzip dl.tar.bz2 in the Buildroot directory
```

Wait for the copy process to complete after running the command.

#### 4.1.3 Directory Structure

| Directory Name| Description|
|:----------:|:----------:|
| app| Used to store upper-layer application instances and test programmes.|
| debian| Scripts and configuration files for building the Debian root filesystem.|
| docs| RK Official Documentation|
| prebuilts| Used to store pre-compiled cross-compilation toolchains for compiling u-boot and the kernel|
| rkbin| To store the pre-compiled binaries and tools provided by RK.|
| tools| A repository for various development, debugging and mass production tools for Windows and Linux|
| buildroot| Scripts and configuration files for building the Buildroot root filesystem|
| device| SDK configuration directory, containing chip-level board configurations, partition tables, compilation and packaging scripts, etc.|
| external| Hosting third-party open-source software repositories.|
| hal| AMP bare-metal programme|
| rtos| AMP real-time operating system|
| kernel| Store Linux kernel code|
| u-boot| Store the source code for the U-Boot bootloader|
| yocto| Scripts and configuration files for building the Yocto root filesystem|

#### 4.1.4 Common Source Code File Paths

| File Descriptions| File Names| File Path|
|:----------:|:----------:|:----------:|
| Uboot Configuration File| OK1126B-S\_defconfig| OK1126B-linux-source/u-boot/configs/OK1126B-S\_defconfig|
| Kernel Configuration File| OK1126B-S-linux.dts| OK1126B-linux-source/kernel/arch/arm64/configs/OK1126B-S-linux\_defconfig|
| Buildroot Configuration File| rockchip\_ok1126b-s\_defconfig| OK1126B-linux-source/buildroot/configs/rockchip\_ok1126b-s\_defconfig|
| Uboot Device Tree| OK1126B-S-Linux.dts| OK1126B-linux-source/u-boot/arch/arm/dts/OK1126B-S-Linux.dts|
| Kernel Device Tree| OK1126B-S-linux.dts| OK1126B-linux-source/kernel/arch/arm64/boot/dts/rockchip/OK1126B-S-linux.dts|
| Uboot default environment variables| env\_default.h| OK1126B-linux-source/u-boot/include/env\_default.h|
| u-boot logo file| logo.bmp| OK1126B-linux-source/kernel/logo.bmp|
| Kernel Logo File| logo\_kernel.bmp| OK1126B-linux-source/kernel/logo\_kernel.bmp|
| Command-line test demo| forlinx\_cmd| OK1126B-linux-source/app/forlinx/forlinx\_cmd|
| Qt Testing Demo| flapp| OK1126B-linux-source/app/forlinx/flapp|

### 4.2 Source Code Compilation

**Note:**

- **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**

- **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**

- **This source code compilation requires at least 8GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### 4.2.1 Full Compilation Test

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ cd /home/forlinx/work/OK1126B-linux-source
forlinx@ubuntu:~/work/OK1126B-linux-source$ rm output/defconfig
```

The following operations need to be performed in the source code directory. Compilation method:

Perform a full compilation.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382064881-3a068219-95c8-4feb-96c4-d3b505267669.png)

Once the compilation is complete, the system image will be generated in the rockdev folder, as shown in the figure below:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382064975-3caccdb5-8262-491c-86cb-8a953348dada.png)

Actual file paths and descriptions:

| Image File| Actual Path| Description|
|:----------:|:----------:|----------|
| boot.img| kernel/boot.img| Consists of resource.img and kernel.img, and contains the device tree and the kernel|
| env.img| output/env.img| Environment variable image file|
| MiniLoaderAll.bin| u-boot/rv1126b\_spl\_loader\_v1.09.105.bin| Miniloader image file |
| misc.img| output/misc.img| Miscellaneous image files|
| parameter.txt| device/rockchip/.chips/rv1126b/parameter.txt| Partition table configuration file|
| recovery.img| output/recovery/ramboot.img| System recovery image file|
| rootfs.img| output/buildroot/images/rootfs.ext4| File system image files|
| uboot.img| u-boot/uboot.img| uboot image files|
| update.img| output/update/Image/update.img| Complete image file|
| userdata.img| output/extra-parts/userdata.img| User data partition image|

**Note:**

- **update.img is packaged for full flashing using OTG or TF card. Other files are for step-by-step flashing;**
- **The source code comes with a pre-compiled filesystem image:**

- **OK1126B-linux-source/prebuilts/forlinx/rv1126b/buildroot/rootfs.ext4, using this image can significantly reduce the time for creating a system image. If you need to modify the contents or configuration of the file system (rootfs), you must remove this rootfs.ext4 image file. After removal, execute the compilation script; Buildroot will then recompile and generate a new root filesystem image.**

#### 4.2.2 Individual Compilation

Follow the steps below to compile the kernel separately.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065083-1d080843-e960-401a-84df-66948f623b6c.png)

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

Execute the following to compile the filesystem separately.

```shell
forlinx@ubuntu:~/work/OK1126B-linux-source$  ./build.sh rootfs
```

If a message similar to the following appears, this indicates that the file system is being compiled:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/46863139/1772523772244-37853205-bb39-4206-8075-b360e58365b8.png)

After compilation, the kernel in update.img will not be updated.

Please flash the device step by step OK1126B-linux-source/buildroot/output/rockchip\_ok1126b-s/images/rootfs.ext4文件。

Alternatively, use the command below to repackage the image and generate a new update.img file.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh updateimg
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409170435009.png)

#### 4.2.3 Cleaning up Generated Files

You should carry out these operations in the kernel source directory.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh cleanall
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065175-a5de4356-0ed8-4d3a-acd8-7d1b39a9687a.png)

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

If you delete the file OK1126B-linux-source/prebuilts/forlinx/rv1126b/buildroot/rootfs.ext4 during the compilation stage—even if you are using a self-built Buildroot—this action will result in the deletion of all intermediate files generated during the Buildroot compilation. The next compilation will recompile Buildroot from scratch, which is a time-consuming process. Please exercise caution when using this command!!!

#### **4.2.4 Image Flashing File**

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.3 User-defined Configuration and Compilation

#### 4.3.1 Configuring and Compiling Uboot

The default u-boot configuration file is u-boot/configs/OK1126B-S\_defconfig. You can manually add or remove configuration options to configure U-Boot.

Commands for compiling u-boot separately:

```plain
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh uboot
```

Please follow the step-by-step instructions to flash the OK1126B-linux-source/u-boot/uboot.img file.

#### 4.3.2 Configuring and Compiling the Kernel

**Method 1: Configuring the graphical interface**

If you wish to configure the kernel, you must first complete a full compilation; then, in the source code directory, carry out the following steps.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kconfig
```

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

Command for compiling the kernel separately:

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20251107130639683.png)

**Method 2: Manually edit the default configuration file**

If you do not wish to use the graphical interface for configuration, you can also configure the system by manually editing the kernel configuration file. The default configuration file for the kernel is kernel/arch/arm64/configs/OK1126B-S-linux\_defconfig.

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

Command for compiling the kernel separately:

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20251107130639683.png)

#### 4.3.3 Configuring and Compiling Buildroot

**Note:** 

**The source code comes with a pre-compiled filesystem image:**

**OK1126B-linux-source/prebuilts/forlinx/rv1126b/buildroot/rootfs.ext4, using this image can significantly reduce the time for creating a system image. If you need to modify the contents or configuration of the file system (rootfs), you must remove this rootfs.ext4 image file. After removal, execute the compilation script; Buildroot will then recompile and generate a new root filesystem image.**

Method 1: Configuring the graphical interface

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh bconfig
```

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

Command for compiling Buildroot separately:

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh buildroot
```

Method 2: Modify the default configuration file

If you do not wish to use the graphical interface for configuration, you can also configure the system by manually editing the Buildroot configuration file. The default Buildroot configuration file is located at buildroot/configs/rockchip\_ok1126b-s\_defconfig.

After adding or modifying the configuration, save and exit. You can then proceed to compile it directly.

Command for compiling Buildroot separately:

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh buildroot
```

#### 4.3.4 Partition Table Configuration

**Extend a specific partition.**

Taking the expansion of the userdata partition as an example, the default size of userdata is 2 GB; this will be expanded to 3 GB.

Navigate to the SDK root directory and run the following command.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh edit-parts
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409165259358.png)

Change the userdata to 0x00600000, where 0x00600000 represents the partition size in units of 512 bytes. Once you have made the change, save and exit. Then recompile image.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh
```

Once compilation is complete, reflash the image and use the command to view the partition information.

```bash
root@OK1126B-buildroot:~# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 122224640 sectors, 2336M
Logical sector size: 512
Disk identifier (GUID): 96210000-0000-415f-8000-1bd400007776
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 122224606

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K env
     3           32768           40959 4096K misc
     4           40960          172031 64.0M boot
     5          172032          434175  128M recovery
     6          434176          499711 32.0M backup
     7          499712         6791167 3072M userdata
     8         6791168       122224606 55.0G rootfs
Disk /dev/mmcblk0boot0: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot0 doesn't contain a valid partition table
Disk /dev/mmcblk0boot1: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot1 doesn't contain a valid partition table
```

**Add a new partition.**

Take the new logo section as an example; its size is 32M.

Navigate to the SDK root directory and run the following command.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh edit-parts
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409170248548.png)

Add the information shown in the figure, save and exit, then recompile the image.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh
```

Once compilation is complete, reflash the image and use the command to view the partition information.

```bash
root@OK1126B-buildroot:~# fdisk -l
Found valid GPT with protective MBR; using GPT

Disk /dev/mmcblk0: 122224640 sectors, 2336M
Logical sector size: 512
Disk identifier (GUID): 4c6f0000-0000-4a56-8000-532700007f30
Partition table holds up to 128 entries
First usable sector is 34, last usable sector is 122224606

Number  Start (sector)    End (sector)  Size Name
     1           16384           24575 4096K uboot
     2           24576           32767 4096K env
     3           32768           40959 4096K misc
     4           40960          172031 64.0M boot
     5          172032          434175  128M recovery
     6          434176          499711 32.0M backup
     7          499712         4694015 2048M userdata
     8         4694016         4759551 32.0M logo
     9         4759552       122224606 56.0G rootfs
Disk /dev/mmcblk0boot0: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot0 doesn't contain a valid partition table
Disk /dev/mmcblk0boot1: 4 MB, 4194304 bytes, 8192 sectors
128 cylinders, 4 heads, 16 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/mmcblk0boot1 doesn't contain a valid partition table
```

### 4.4 Qt Creator Environment Configuration

Qt is a cross-platform graphics development library that supports multiple operating systems. Before compilation, you need to configure the Qt Creator environment for cross-compilation.

#### 4.4.1 Cross-Compiler Configuration

Note: The default development environment does not include a cross-compilation chain. Please refer to Section 3.3, ‘Installing the Cross-Compilation Chain’, to install one (the recommended installation path is /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot).

**Note: Enter aarch64-buildroot-linux-gnu\_sdk-buildroot and execute relocate-sdk.sh.**

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

- Navigate to the installation directory of Qt Creator and open Qt Creator;

```bash
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator
```

- In Qt Creator, go to Tools → Options → Kits → Compilers, then click Add → GCC → C;

- Enter GCC in the Name field;

- Paste the path to the build chain into the Compiler Path field, as shown in the figure below:


Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-gcc

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065325-5e782e89-6cef-430a-950f-f53deb46bd3b.png)

- Add the GCC compiler using the same method, and click "Add->GCC->C" on the right, as shown in the image:


Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065472-071286a0-07ff-4c35-a1bf-224dfd005874.png)

#### 4.4.2 Qt Versions Configuration

- Click Tools -> Options -> Qt Versions in Qt Creator;

- Then click Add; a dialogue box will appear for you to make your selection /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake;

- Click Open to add it;

- Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

- Click Apply and then OK.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065550-14f7a743-402d-4bdd-84ba-00f069d1c974.png)

#### 4.4.3 Kits Configuration

Kits are a set of build tools used to configure and select development environments. They are particularly useful for projects that involve multiple Qt libraries. Integrate the previously added cross-compiler and Qt Version into the Kits to build a compilation environment suitable for the development board.

- In Qt Creator, navigate to Tools → Options → Kits, then click Add to open the configuration section;


- Modify the Name as desired;

- Select GCC in the Compiler field;

- In the Qt version field, select the name you entered when creating the Qt version;

- Click Apply and then OK.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065647-1ca23892-98fa-45dc-852f-bd63156eca6a.png)

### 4.5 Application Compilation and Running

#### 4.5.1 Command-Line Applications Compilation and Operation

This section uses the watchdog test programme; by default, the source code is copied to the /home/forlinx/work directory.

- Use the cd command to navigate to the test source code directory;


```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

- Add the cross-compiler path and use make to cross-compile;


```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gcc watchdog.c -o fltest_watchdog
```

- Use the file command to view information about the generated file;


```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that a 64-bit ARM file is generated.

- Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, copy it to the development board and run the test.


```bash
root@OK1126B-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK1126B-buildroot:~# ./fltest_watchdog
Watchdog Ticking Away!
```

#### 4.5.2 Qt Application Compilation and Operation

Open Qt Creator in your development environment (users should open it using their own path), click File → Open File or Project in Qt Creator, and in the pop-up window, select /home/forlinx/work/OK3568-linux-source/app/forlinx/flapp/src/watchdog/watchdog.pro.

```bash
forlinx@ubuntu:~$ cd qtcreator-4.7.0/bin/
forlinx@ubuntu~/qtcreator-4.7.0/bin$ ./qtcreator &
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065759-68535180-827b-401c-9f5c-02ae512b187c.png)

After opening the project, the interface should appear as follows: (If the page does not change automatically, please select according to the screenshot.)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065860-f672a529-25ec-4069-9d2f-c0bed8e9b081.png)

Clicking Configure Project will apply the compilation environment built in the “Qt Creator Environment Configuration” chapter of this manual.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065976-06b8a5a1-ce6b-4e63-9e96-f4a5bdaf8fa7.png)

Click Build-> Clean All to clear. (If the intermediate file is not cleared, it can be deleted manually).

Click Configure Project, which will adapt to the compilation environment built in the "Qt Creator Environment Configuration" section.  
Then click Build -> Clean All to clean up the previous build files.  
(If intermediate files are not cleaned, you can delete them manually.)  
Uncheck Shadow build in the Projects section.  
Click Build -> Build All to compile.  
Once the build progress bar completes, the new executable file fltest\_qt\_watchdog will be located in the /app/forlinx/forlinx\_qt/watchdog directory.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382066079-0da61d98-b203-4c14-ab16-fab371086756.png)

Then, click Build → Build All to start the compilation.

Once the Build progress bar in the bottom-right corner has completed, this indicates that the compilation is finished. At this point, you will see the newly generated binary file fltest\_qt\_watchdog in the directory /home/forlinx/work/OK1126B-linux-source/app/forlinx/flapp\_out/\`, as shown below:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382066173-3aa58730-665e-42a5-9ead-2ff89ef1938f.png)

Copy the compiled executable file to the board via a USB drive, FTP, or other methods. Once copied to the development board, run the test.

### 4.6 Unpacking and Packing

#### 4.6.1 Unpacking and Packing under Linux

Copy the Linux\_Pack\_Firmware.tar tool to the Ubuntu virtual machine and extract it. The tool is located at: User Data\\3-Tools\\Linux\_Pack\_Firmware.tar

```bash
forlinx@ubuntu:~/work$ tar -vxf Linux_Pack_Firmware.tar
```

Navigate to the tools directory and copy the update.img file you wish to unpack and repack into that directory.

```bash
forlinx@ubuntu:~/work$ cd Linux_Pack_Firmware/rockdev/
forlinx@ubuntu:~/work/Linux_Pack_Firmware/rockdev$ 
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180430532.png)

Execute the command to unpack the files.

```bash
forlinx@ubuntu:~/work/Linux_Pack_Firmware/rockdev$ ./unpack.sh
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180500935.png)

Press q to exit; the extracted image files are located in the output directory. Navigate to the output directory and run the following command to package the operation.

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180525380.png)

```bash
forlinx@ubuntu:~/work/Linux_Pack_Firmware/rockdev/output$ ../afptool -pack ./ tmp.img || pause

forlinx@ubuntu:~/work/Linux_Pack_Firmware/rockdev/output$ ../rkImageMaker -RK110F MiniLoaderAll.bin tmp.img update.img -os_type:androidos || pause
```

Once the packaging is complete, an update.img file will be generated in the current directory.

#### 4.6.2 Unpacking and Packing under Windows

Unzip RKDevTool\_Release\_v3.37.zip on Windows. The tool path is: User Data\\3-Tools\\RKDevTool\_Release\_v3.37.zip.

Open the Rockchip development tool, go to Advanced Features, select the update.img file you wish to unpack, and click Unpack to proceed.

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180737709.png)

The unpacked image file is located in the output\\Android directory.

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180756416.png)

To package the files, you will need to use RKDevTool, which can be found in User Data\\3-Tools\\RKDevTool.tar.

After extracting the files, navigate to the rockdev directory and create an Image folder, then copy all the files from the output\\Android directory (generated by the extraction process) into the Image folder.

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180816630.png)

Open Windows PowerShell in the current directory and enter the following command.

```bash
G:\RKDevTool\rockdev\Image> ..\afptool.exe -pack ./ tmp.img

G:\RKDevTool\rockdev\Image> ..\rkImageMaker.exe -RK110F .\MiniLoaderAll.bin .\tmp.img update.img -os_type:androidos
```

<!-- 这是一张图片，ocr 内容为： -->
![](images/image-20260409180851024.png)

Once the packaging is complete, an update.img file will be generated in the current directory.