# Linux6.1.141\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Manual Version**| **Revision History**|
|:----------:|:----------:|:----------:|
| 22/12/2025| V1.0| Linux6.1.141 User’s Compilation Manual Initial Version|

## Overview

This manual is designed to enable you to quickly understand the compilation process of the products and familiarize yourselves with the compilation methods of Forlinx products. The application program needs to be cross-compiled on the  Linux operating system before it can run on the development board. According to the method in the compilation manual, users can compile their own software code through practical operation.

The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.

Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine. 

Hardware requirements: It is recommended to have at least 16GB of memory or more, so that you can allocate some memory to run the virtual machine (the virtual machine is recommended to have more than 8GB) and still do other operations on Windows, otherwise it will affect the performance of Windows.

The manual is mainly divided into four chapters:

+ Chapter 1. is mainly about the installation of VMware, and the version used is VMware® Workstation 17 v17.0.0. Users need to install VMware before using the ubuntu development environment;
+ Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu22.04;
+ Chapter 3. mainly introduces the method of building a new ubuntu development environment. Chapter 4. uses 64bit Ubuntu 22.04 as an example to describe the creation process of Ubuntu. Due to different computer configurations, unexpected problems may arise during the setup process. It is recommended for beginners to use the environment that we have set up directly;
+ Chapter 4. mainly introduces the methods of compiling the source code related to the development board.

A description of some of the symbols and formats in the manual:

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or information that requires special attention, be sure to read carefully.|
| 📚 | Relevant notes on the test chapters|
| ️️️️️🛤️️ | Indicates the related path.|
| **Bold black**| Key information in the serial port output message|
| //| Interpretation of input instructions or output information|
| Username@Hostname| root@OK3568 - buildroot:~#: Account information for serial port and network login of the development board;<br />forlinx@ubuntu: Account information for the Ubuntu development environment. |

After packaging the file system, you can use the “ls” command to view the generated files.

```bash
forlinx@ubuntu:~/3568$ ls                              //List the files in this directory
OK3568_Linux_fs  OK3568_Linux_fs.tar.bz2.00 OK3568_Linux_fs.tar.bz2.01 OK3568_Linux_fs.tar.bz2.02 OK3568_Linux_fs.tar.bz2.03
```

+ forlinx@ubuntu: the username is forlinx and the hostname is ubuntu, indicating that the operation is performed in the development environment ubuntu;
+ //: Explanation of the instruction, no input required;
+ For detailed information, refer to the OK1126B-S user manual. In this document, the directory where the user manual is located is taken as the root directory of the OK1126B-S user manual.

## 1\. VMware Virtual Machine Software Installation

<font style="color:#000000;">This chapter mainly introduces the installation of</font>VMware virtual machines, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the installation and configuration process of the operating system.

### 1.1 VMware Software Download and Purchase

Go to the VMware website https://www.vmware.com/cn.html to download Workstation Pro and get the product key. VMware is a paid software that requires purchasing, or you can choose to use a trial version.

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45535139/1718949366000-e93d3524-0f65-4365-8c35-fd502cdeb864.jpeg)

After the download is complete, double-click the startup file to start the installer.

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard, and click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236062-e6163fc5-83f0-49e5-929c-eebc92b1a120.png)

Check "I accept the terms in the license agreement" and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236157-1918637e-6248-43c7-b9a5-da1bf102a3d1.png)

Modify the installation location to the partition of your computer where the software is installed, and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236236-cc76f4d3-e20c-43f3-8c1b-c220b4612d89.png)

Uncheck and click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236318-03575207-5d88-460c-960c-a0a9aa376413.png)

Check Add Shortcut and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236415-14a81961-27b3-45e0-b913-0e6a57d7f0a7.png)

Click "Installation".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236499-00595516-2ab4-4710-8e66-e106ba2373f8.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236612-a2ed395b-f9d8-4e02-bdb8-c328421677b1.png)

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053236706-bd43dd1e-44de-401c-9e61-6b8d181f0f55.png)

## 2\. Loading the Existing Ubuntu Development Environment

**Note:**

+ **It is recommended for beginners to directly use the pre-built virtual machine environment provided by Forlinx, which already includes installed cross-compiler and Qt environment. After understanding this chapter, you can directly jump to the compilation chapter for further study;**
+ **The development environment provided for general users is: forlinx (username), forlinx (password);**
+ **Please ask your sales representative for the download link.**

There are two ways to use a virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060256-61fea8f4-1836-4bc3-8430-1a1e3a2b7169.png)

Select all compressed files, right-click and extract to the current folder or your own directory: After unzipping, the development environment 35XX is obtained.

In the development environment folder of OK35XX - linux6.1 - VM17 - ubuntu22.04, the file 35XX.vmx is the one to be opened by the virtual machine.

Open the installed virtual machine.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060335-6b9be91f-fc9c-4874-86ef-2e5e4b37e5bf.png)

Select the directory where the recently extracted OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, then double-click to open the startup file.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060407-2cc177c9-24c3-4989-9698-ca1bad96d584.png)

Turn on this virtual machine after loading is complete to run it and enter the system's interface.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382060472-c64edde3-62fb-4d3c-9239-9e55cb61a8d4.png)

The default automatic login account is "forlinx", and the password is "forlinx".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1731053238308-7897f6cc-11b8-43dc-9aea-19646fa266ec.png)

## 3\. New Ubuntu Development Environment Setup

Note: Beginners are not recommended to build the system by themselves. It is suggested to use the existing virtual machine environment. If you do not need to build the environment, you can skip this section. This section mainly explains the process of building the **ubuntu** system.

### 3.1 Ubuntu System Setup

#### 3.1.1 Ubuntu Virtual Machine Setup

Open the VMware software, click on create a new virtual machine. Enter the following interface

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382061988-04c94945-484b-4487-9596-42ac7a277785.png)

Choose custom, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062060-30b39de8-153d-43a3-aafa-a6470e1a5489.png)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click "Next".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062231-90a01986-7bb6-4173-ba1a-625399fc05e2.png)

Select Install the operating system later and click "Next".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062317-2700dd52-596b-468c-ba2a-b024e30f06aa.png)

Leave the default and click "Next".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062408-f66500a0-f66d-41f8-9564-5fe7eaa208c6.png)

Modify the virtual machine name and installation location, click "Next".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062491-b0dca4b0-8393-4d74-8988-49a12e807db7.png)

Set the number of processors as appropriate.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062557-e2f2b034-5acb-4fae-b932-fa19ab06e419.png)

Set the memory size according to the actual situation. It is recommended to use 16G.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533112-8f49bb5a-64b5-47df-8798-044888bfa83b.png)

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533381-8dc68236-561d-4840-abb7-3512def5cecf.png)

The default selection for the IO controller type here is LSI.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533635-d54cda44-50e2-4643-b3d3-54dc41a1bfa6.png)

The default selection here is also SCSI.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533807-86b2d601-916f-4f7d-b7c0-4a672e97d659.png)

Choose to create a new virtual disk here.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534036-c400a9dc-bdac-4dde-bd52-d4e721fb4ccd.png)

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click "Next" to finish.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534210-b2fc7391-1c76-4148-80c8-855cd9174698.png)

Specify the disk file, the default one here is fine.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534358-9585162d-5c54-42eb-be37-f9361aebf91d.png)

Click "Finish" by default.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534538-0cb90337-6bc8-4fc5-8009-267ab1d2617c.png)

The virtual machine creation is now complete.

In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.

#### 3.1.2 System Installation

The Ubuntu version to be installed is 22.04. First, go to the official Ubuntu website to obtain the 64-bit image of Ubuntu 22.04. The download address is [https://old-releases.ubuntu.com/releases/22.04.4/](https://old-releases.ubuntu.com/releases/22.04.4/). Download the version “ubuntu-22.04.4-desktop-amd64.iso”.

Right-click on the newly created Ubuntu 64bit and select Settings from the pop-up menu.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534926-94943ef2-c4d9-4ddd-91e9-50c5088dfacc.png)

The "Virtual Machine Settings Menu" pops up as shown below:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062619-7ab02551-ab95-41c9-bc43-3923409db1c5.png)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062680-c9c5193e-3353-4424-acd0-3d19755db6a6.png)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535587-6fcfdee5-51f1-4e1c-9906-d39fc0048711.png)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062740-8d4fffe6-3f92-47ff-82a5-9a738edd68c3.png)

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536000-eb047135-c38a-4252-8c28-ab4160903086.png)

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536210-5beb2cde-35d4-44aa-b6b6-4e9c8e760b06.png)

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536401-c42c25c7-6384-4061-a7e2-76c6349c64be.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536688-120370eb-2370-46c6-805f-a2041fe0149c.png)

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set your username and password and click "continue" to automatically install the program:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062807-b52339a1-ad54-46c0-aa7c-6bf5f0d357b8.png)

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062878-28446a75-0c69-4238-be5a-68b2dfa643d6.png)

After the installation, click "Restart Now" to reboot (or click "Reboot Client"):

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382062949-be55a3f4-2047-4102-b96b-3c11d505d5e5.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538153-32d91128-59b7-4c50-9745-84b3186f5a51.png)

The system interface after the reboot is complete as shown below:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382063027-f48e7115-ead7-4aef-9d2e-d8450621631c.png)

#### 3.1.3 Basic Ubuntu Installation

After installing the Ubuntu22.04 operating system, there are a few configurations to make.

+ **VMware Tools Installation:**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539972-31f94d63-6f34-4904-846e-cd72975c7e99.png)

#### 3.1.4 Ubuntu Network Settings

+ **NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540173-d56c3ec8-1d83-49da-99f7-6bbd9a9b6830.png)

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VM to get on the extranet.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540394-95e15661-d1d0-427e-93ed-e365eb39c296.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540571-3d28eb06-aea3-4fda-8397-e821b2b7fca1.png)

The network is set to dynamic IP.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540815-009829ab-476a-45b8-b02e-d7f42bfbe34f.png)

+ **Bridge Mode:**

If TFTP, SFTP and other servers are used, the network contact mode of the virtual machine needs to be set as the bridge mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541083-4d9634db-a591-45be-ad82-f0c7b1e12e3e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541277-05740351-022e-45fc-96c7-06caac0e068d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541434-9c36b6f6-6539-4295-8eec-4df165beb02c.png)

Set a static IP, where Ubuntu's IP and host IP need to be set in the same network segment.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541630-bf5fd69d-adc1-407d-915f-2503b2055225.png)

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

#### 3.1.5 U Disk Loading

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if we don't set it up, when we plug in the USB3.0 port, we can't connect to the virtual machine. The principle is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541851-33d6ec29-11c4-499b-867c-528314eef0ca.png)

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542123-ad4e8176-1557-40a0-b545-a4aa290b16d2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542337-c0fe4886-515f-4fe1-9446-22882a83577e.png)

#### 3.1.6 Virtual Machine Basic Library Installation

Before development, there are some other necessary libraries, we use the following commands to install them one by one, before installation, you need to ensure that the network can be used normally, you can get on the extranet:

```bash
forlinx@ubuntu:~$ sudo apt-get update                        // Update the download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide the list information of software packages necessary for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used to generate text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                     // A compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK1126B Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                       //Update apt-get download source
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Installation of the necessary tool kit
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \
libmpc-dev bc python-is-python3 python2 gettext libc6-dev libncurses-dev rsync
```

These library files are the ones that need to be downloaded when compiling the Linux source code by building the OK1126B Linux compilation environment by yourself. If you are not building the OK1126B Linux development environment, you can skip this step.

### 3.2 Installation of Cross-compilation Chain

User Materials/2 - Images and Source Codes/Cross - Compilation Toolchain/aarch64 - buildroot - linux - gnu\_sdk - buildroot.tar.gz.

Copy the above compressed package to the development environment/home/forlinx/, and decompress it in this directory:

```bash
forlinx@ubuntu:~$ tar -zvxf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

Go to the aarch64-buildroot-linux-gnu \_ sdk -buildroot directory and execute relocate-sdk. Sh.

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

### 3.3 Qt Creator Installation

Copy qt-creator-opensource-linux-x86\_64-4.7.0.run to any directory within the current user’s home directory, and then run the following command.

+ Path: OK1126B-C（Linux）User's Manual\\Linux\\source code \\qt-creator-opensource-linux-x86\_64-4.7.0.run

```bash
forlinx@ubuntu:~$ ./qt-creator-opensource-linux-x86_64-4.7.0.run                   
```

Then the installation window of the graphical interface will pop up, and install according to the instructions:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542977-d1772186-fa60-442a-8cf2-6e5cffefaae2.png) ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543199-cbc234c5-2d49-43aa-864e-4daf0abe7a4c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543389-eaacabb8-9343-4e45-8626-9a68c043e0a0.png) ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543608-c9d367f7-56c3-44b6-829c-04f29286f63d.png)

If you install online, you need to register your own Qt account. If you already have a Qt account, you can log in directly. The requirements for the Qt password are: it should include capital letters, lowercase letters, and numbers. After successful registration and login, click "Next‘.

If you install offline, you can skip it.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543830-11d43ecf-8d67-4bd0-a472-fc52383a77b1.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544047-02ae511b-f6df-49fc-94ad-50606afa9ac1.png)

You can set the installation path according to your own habits. It is set by default here, so click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544274-25984f38-7e0d-4029-97ec-25fc13e82651.png)

To fully install, click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544480-43ea98bb-67e7-4632-a1cf-b917e22a17eb.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544690-a23e2f5f-b76b-46c9-8ebc-ef0ddc395677.png)

Click "Install" and wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544902-6e395fac-45b1-428e-b5ed-dd3045ed1597.png)

When the installation is complete, click "Finish". At this time, the Qt interface will be opened automatically. You can also start it through the command line. Execute the following command to open Qt Creator in the backstage. When you opens it, the actual installation path shall prevail:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278545088-f7954df3-4aa6-40d1-9046-723786b916af.png)

The Qt Creator tool screen appears. Qt Creator is installed.

## 4\. Related Code Compilation

This chapter mainly describes the compiling method of the source code related to the development board, including the kernel source code compilation and the application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description 

+ Development environment OS: Ubuntu22.04 64 bit version
+ Cross-toolchain: aarch64-linux-gnu
+ The board uses the Bootloader version: u-boot-2017.09.
+ Development Board Kernel: Linux-6.1.118
+ Development board porting QT version: qt5.15.11

#### 4.1.2 Source Code Copy

Program source code: User Materials\\2 - Images and Source Codes\\Source Codes\\OK1126B - linux - source.tar.bz2.0\*

Buildroot software package: User Materials\\2 - Images and Source Codes\\Source Codes\\dl.tar.bz2

Create a working directory and place the source code and dl.tar.bz2 in the work directory.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work					//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK1126B-linux-source.tar.bz2.0* > OK1126B-linux-source.tar.bz2
forlinx@ubuntu:~/work$ tar -vxf OK1126B-linux-source.tar.bz2  //Decompress the compressed packet in the current location
forlinx@ubuntu:~/work$ cd /home/forlinx/work/OK1126B-linux-source/buildroot
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ tar -vxf ../../dl.tar.bz2	//Unzip dl.tar.bz2 under buildroot
```

Just run the command and wait for it to complete.

### 4.2 Source Code Compilation

**Note:**

+ **After the kernel source code is decompressed for the first time, the source code needs to be compiled as a whole;**
+ **After compiling as a whole, you can compile separately according to the actual situation;**
+ **The source code compilation requires a development environment with a running memory of 8G or above. Please do not modify the VM virtual machine image configuration provided by us.**

#### 4.2.1 Full Compilation Test

In the source code path, the compilation script build. Sh is provided. Run the script to compile the entire source code. You need to switch to the decompressed source code path at the terminal and find the build. Sh films

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/buildroot$ cd /home/forlinx/work/OK1126B-linux-source
forlinx@ubuntu:~/work/OK1126B-linux-source$ rm output/defconfig
```

The following operations need to be operated under the source code directory, and the full compilation method is:

Full Compilation.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382064881-3a068219-95c8-4feb-96c4-d3b505267669.png)

After successful compilation, the system image will be generated under the rockdev folder, as shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382064975-3caccdb5-8262-491c-86cb-8a953348dada.png)

**Note: The update. img is packaged for full programming of OTG or TF card, and other files are programmed step by step.**

#### 4.2.2 Individual Compilation

The user performs the operation in the kernel source code path.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065083-1d080843-e960-401a-84df-66948f623b6c.png)

The kernel in the update. img is not updated after successful compilation. Please flash the kernel/boot. img file step by step.

#### 4.2.3 Clearance of Files Generated by the Compilation

Perform the operation in the source code path.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh cleanall
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065175-a5de4356-0ed8-4d3a-acd8-7d1b39a9687a.png)

This operation clears all intermediate files. However, it does not affect the source files, including those that have already had changes made to them.

#### 4.2.4 Kernel Configuration

If you want to configure the kernel, you must first complete a full compilation.

Perform the following operations in the source code directory.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kconfig
```

After adding or modifying configurations, save and exit. Afterwards, it can be compiled directly.

### 4.3 Use of Image File 

The update. img is packaged for full programming of OTG or TF card, and other files are programmed step by step. The Image file, generated by a separate compilation, will not be updated in the update.img file. And it needs to be burned using single-step burn (see user manual OTG burn for details).

### 4.4 Qt Creator Environment Configuration

Qt is a cross-platform graphics development library, which supports many operating systems. Before compiling, you need to configure the compiling environment of Qt Creator.

#### 4.4.1 Cross Compiler Configuration

Note: The default development environment does not have the cross - compilation chain installed. You need to refer to 3.3 Install the Cross - Compilation Chain to install it (the recommended installation path is /home/forlinx/aarch64 - buildroot - linux - gnu\_sdk - buildroot).

**Note: Enter aarch64-buildroot-linux-gnu\_sdk-buildroot to execute relocate-sdk.sh.**

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

1\. Enter the installation path of qtcreator and open qtcreator;

```bash
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator
```

2\. Click Tools-> Options-> Kits-> Compilers in Qt Creator, and then click Add-> GCC-> C;

3\. Name enters GCC;

4\. Paste the path of the compilation chain to the Compiler Path, as shown in the following figure:

- Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-gcc


![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065325-5e782e89-6cef-430a-950f-f53deb46bd3b.png)

5\. Follow the same method to add the GCC compiler, click “Add->GCC->C++” on the right, as shown in the figure:

- Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++


![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065472-071286a0-07ff-4c35-a1bf-224dfd005874.png)

#### 4.4.2 Qt Versions Configuration

1\. Click Tools- > Options- > Qt Versions in Qt Creator;

2\. Then click Add to pop up a dialog box to select /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake;

3\. Click open to add;

4\. Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

5\. Then click "Apply and OK".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065550-14f7a743-402d-4bdd-84ba-00f069d1c974.png)

#### 4.4.3 Kits Configuration

Kits is a build kit for building and selecting development build environments useful for projects with multiple QT libraries. Add the previously added cross-compiler and QT Version to Kits to build a compilation environment suitable for the development board.

1\. Click Tools- > Options- > Kits in Qt Creator, and then click Add to display the configuration section;

2\. Name changes by itself;

3\. Compiler selects GCC;

4\. Qt version selects the name entered when the Qt version was created;

5\. Then click "Apply and OK".

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065647-1ca23892-98fa-45dc-852f-bd63156eca6a.png)

### 4.5 Application Compilation and Operation

#### 4.5.1 Command Line Application Compilation and Operation

In this section, the watchdog test program is used. By default, the source code is copied to the /home/forlinx/work directory.

1\. Use the cd command to enter the test source code directory;

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

2\. Add the cross-compiler path and use make to cross-compile;

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gcc watchdog.c -o fltest_watchdog
```

3\. Use the file command to view the generated file information.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

From the result, you can see that the compiled 64-bit ARM file.

4\. Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, and copy it to the development board and run the test.

```bash
root@OK1126B-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK1126B-buildroot:~# ./fltest_watchdog
Watchdog Ticking Away!
```

#### 4.5.2 QT Application Compilation and Operation

Open Qt Creator in the development environment (users should open it according to their actual paths). Click File -> Open File or Project in Qt Creator. In the pop - up window, select /home/forlinx/work/OK3568 - linux - source/app/forlinx/flapp/src/watchdog/watchdog.pro.

```bash
forlinx@ubuntu:~$ cd qtcreator-4.7.0/bin/
forlinx@ubuntu~/qtcreator-4.7.0/bin$ ./qtcreator &
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065759-68535180-827b-401c-9f5c-02ae512b187c.png)

After opening the project, the interface is as follows: (If the page is not automatically changed, please select as shown in the screenshot).

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065860-f672a529-25ec-4069-9d2f-c0bed8e9b081.png)

Click Configure Project to adapt to the build environment described in the “Qt Creator Environment Configuration” section of this manual.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382065976-06b8a5a1-ce6b-4e63-9e96-f4a5bdaf8fa7.png)

Click Build->Clean All to clear it. (If the intermediate file is not cleared, it can be deleted manually).

Click Projects to uncheck Shadow build.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382066079-0da61d98-b203-4c14-ab16-fab371086756.png)

Then click Build-> Build All to compile.

After the Build progress bar in the lower - right corner finishes, it means the compilation is complete. At this time, you will see the newly generated binary file fltest\_qt\_watchdog in the directory /home/forlinx/work/OK1126B - linux - source/app/forlinx/flapp\_out/, as follows:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1766382066173-3aa58730-665e-42a5-9ead-2ff89ef1938f.png)

Copy the executable file generated by compiling to the board through U disk or FTP, copy it to the development board, and run the test.