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

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1718949366000_e93d3524_0f65_4365_8c35_fd502cdeb864.jpeg)

After the download is complete, double-click the startup file to start the installer.

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard, and click on "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236062_e6163fc5_83f0_49e5_929c_eebc92b1a120.png)

Check "I accept the terms in the license agreement" and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236157_1918637e_6248_43c7_b9a5_da1bf102a3d1.png)

Modify the installation location to the partition of your computer where the software is installed, and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236236_cc76f4d3_e20c_43f3_8c1b_c220b4612d89.png)

Uncheck and click on "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236318_03575207_5d88_460c_960c_a0a9aa376413.png)

Check Add Shortcut and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236415_14a81961_27b3_45e0_b913_0e6a57d7f0a7.png)

Click "Installation".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236499_00595516_2ab4_4710_8e66_e106ba2373f8.png)

Wait for the installation to complete.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236612_a2ed395b_f9d8_4e02_bdb8_c328421677b1.png)

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053236706_bd43dd1e_44de_401c_9e61_6b8d181f0f55.png)

## 2\. Loading the Existing Ubuntu Development Environment

**Note:**

+ **It is recommended for beginners to directly use the pre-built virtual machine environment provided by Forlinx, which already includes installed cross-compiler and Qt environment. After understanding this chapter, you can directly jump to the compilation chapter for further study;**
+ **The development environment provided for general users is: forlinx (username), forlinx (password);**
+ **Please ask your sales representative for the download link.**

There are two ways to use a virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382060256_61fea8f4_1836_4bc3_8430_1a1e3a2b7169.png)

Select all compressed files, right-click and extract to the current folder or your own directory: After unzipping, the development environment 35XX is obtained.

In the development environment folder of OK35XX - linux6.1 - VM17 - ubuntu22.04, the file 35XX.vmx is the one to be opened by the virtual machine.

Open the installed virtual machine.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382060335_6b9be91f_fc9c_4874_86ef_2e5e4b37e5bf.png)

Select the directory where the recently extracted OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine file is located, then double-click to open the startup file.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382060407_2cc177c9_24c3_4989_9698_ca1bad96d584.png)

Turn on this virtual machine after loading is complete to run it and enter the system's interface.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382060472_c64edde3_62fb_4d3c_9239_9e55cb61a8d4.png)

The default automatic login account is "forlinx", and the password is "forlinx".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1731053238308_7897f6cc_11b8_43dc_9aea_19646fa266ec.png)

## 3\. New Ubuntu Development Environment Setup

Note: Beginners are not recommended to build the system by themselves. It is suggested to use the existing virtual machine environment. If you do not need to build the environment, you can skip this section. This section mainly explains the process of building the **ubuntu** system.

### 3.1 Ubuntu System Setup

#### 3.1.1 Ubuntu Virtual Machine Setup

Open the VMware software, click on create a new virtual machine. Enter the following interface

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382061988_04c94945_484b_4487_9596_42ac7a277785.png)

Choose custom, and click “Next”.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062060_30b39de8_153d_43a3_aafa_a6470e1a5489.png)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062231_90a01986_7bb6_4173_ba1a_625399fc05e2.png)

Select Install the operating system later and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062317_2700dd52_596b_468c_ba2a_b024e30f06aa.png)

Leave the default and click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062408_f66500a0_f66d_41f8_9564_5fe7eaa208c6.png)

Modify the virtual machine name and installation location, click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062491_b0dca4b0_8393_4d74_8988_49a12e807db7.png)

Set the number of processors as appropriate.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062557_e2f2b034_5acb_4fae_b932_fa19ab06e419.png)

Set the memory size according to the actual situation. It is recommended to use 16G.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

The default selection for the IO controller type here is LSI.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

The default selection here is also SCSI.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Choose to create a new virtual disk here.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click "Next" to finish.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278534210_b2fc7391_1c76_4148_80c8_855cd9174698.png)

Specify the disk file, the default one here is fine.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278534358_9585162d_5c54_42eb_be37_f9361aebf91d.png)

Click "Finish" by default.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278534538_0cb90337_6bc8_4fc5_8009_267ab1d2617c.png)

The virtual machine creation is now complete.

In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.

#### 3.1.2 System Installation

The Ubuntu version to be installed is 22.04. First, go to the official Ubuntu website to obtain the 64-bit image of Ubuntu 22.04. The download address is [https://old-releases.ubuntu.com/releases/22.04.4/](https://old-releases.ubuntu.com/releases/22.04.4/). Download the version “ubuntu-22.04.4-desktop-amd64.iso”.

Right-click on the newly created Ubuntu 64bit and select Settings from the pop-up menu.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278534926_94943ef2_c4d9_4ddd_91e9_50c5088dfacc.png)

The "Virtual Machine Settings Menu" pops up as shown below:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062619_7ab02551_ab95_41c9_bc43_3923409db1c5.png)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062680_c9c5193e_3353_4424_acd0_3d19755db6a6.png)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062740_8d4fffe6_3f92_47ff_82a5_9a738edd68c3.png)

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278536000_eb047135_c38a_4252_8c28_ab4160903086.png)

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278536210_5beb2cde_35d4_44aa_b6b6_4e9c8e760b06.png)

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278536401_c42c25c7_6384_4061_a7e2_76c6349c64be.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278536688_120370eb_2370_46c6_805f_a2041fe0149c.png)

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set your username and password and click "continue" to automatically install the program:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062807_b52339a1_ad54_46c0_aa7c_6bf5f0d357b8.png)

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062878_28446a75_0c69_4238_be5a_68b2dfa643d6.png)

After the installation, click "Restart Now" to reboot (or click "Reboot Client"):

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382062949_be55a3f4_2047_4102_b96b_3c11d505d5e5.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278538153_32d91128_59b7_4c50_9745_84b3186f5a51.png)

The system interface after the reboot is complete as shown below:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382063027_f48e7115_ead7_4aef_9d2e_d8450621631c.png)

#### 3.1.3 Basic Ubuntu Installation

After installing the Ubuntu22.04 operating system, there are a few configurations to make.

+ **VMware Tools Installation:**

```bash
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop
```

+ **Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278539972_31f94d63_6f34_4904_846e_cd72975c7e99.png)

#### 3.1.4 Ubuntu Network Settings

+ **NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278540173_d56c3ec8_1d83_49da_99f7_6bbd9a9b6830.png)

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VM to get on the extranet.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278540394_95e15661_d1d0_427e_93ed_e365eb39c296.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278540571_3d28eb06_aea3_4fda_8397_e821b2b7fca1.png)

The network is set to dynamic IP.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278540815_009829ab_476a_45b8_b02e_d7f42bfbe34f.png)

+ **Bridge Mode:**

If TFTP, SFTP and other servers are used, the network contact mode of the virtual machine needs to be set as the bridge mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278541277_05740351_022e_45fc_96c7_06caac0e068d.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278541434_9c36b6f6_6539_4295_8eec_4df165beb02c.png)

Set a static IP, where Ubuntu's IP and host IP need to be set in the same network segment.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278541630_bf5fd69d_adc1_407d_915f_2503b2055225.png)

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

#### 3.1.5 U Disk Loading

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if we don't set it up, when we plug in the USB3.0 port, we can't connect to the virtual machine. The principle is as follows:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca.png)

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278542337_c0fe4886_515f_4fe1_9446_22882a83577e.png)

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

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278542977_d1772186_fa60_442a_8cf2_6e5cffefaae2.png) ![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278543199_cbc234c5_2d49_43aa_864e_4daf0abe7a4c.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278543389_eaacabb8_9343_4e45_8626_9a68c043e0a0.png) ![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278543608_c9d367f7_56c3_44b6_829c_04f29286f63d.png)

If you install online, you need to register your own Qt account. If you already have a Qt account, you can log in directly. The requirements for the Qt password are: it should include capital letters, lowercase letters, and numbers. After successful registration and login, click "Next‘.

If you install offline, you can skip it.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278543830_11d43ecf_8d67_4bd0_a472_fc52383a77b1.png)

Click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278544047_02ae511b_f6df_49fc_94ad_50606afa9ac1.png)

You can set the installation path according to your own habits. It is set by default here, so click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278544274_25984f38_7e0d_4029_97ec_25fc13e82651.png)

To fully install, click "Next".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278544480_43ea98bb_67e7_4632_a1cf_b917e22a17eb.png)

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278544690_a23e2f5f_b76b_46c9_8ebc_ef0ddc395677.png)

Click "Install" and wait for the installation to complete.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278544902_6e395fac_45b1_428e_b5ed_dd3045ed1597.png)

When the installation is complete, click "Finish". At this time, the Qt interface will be opened automatically. You can also start it through the command line. Execute the following command to open Qt Creator in the backstage. When you opens it, the actual installation path shall prevail:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1719278545088_f7954df3_4aa6_40d1_9046_723786b916af.png)

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

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382064881_3a068219_95c8_4feb_96c4_d3b505267669.png)

After successful compilation, the system image will be generated under the rockdev folder, as shown in the following figure:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382064975_3caccdb5_8262_491c_86cb_8a953348dada.png)

**Note: The update. img is packaged for full programming of OTG or TF card, and other files are programmed step by step.**

#### 4.2.2 Individual Compilation

The user performs the operation in the kernel source code path.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh kernel
```

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065083_1d080843_e960_401a_84df_66948f623b6c.png)

The kernel in the update. img is not updated after successful compilation. Please flash the kernel/boot. img file step by step.

#### 4.2.3 Clearance of Files Generated by the Compilation

Perform the operation in the source code path.

```bash
forlinx@ubuntu:~/work/OK1126B-linux-source$ ./build.sh cleanall
```

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065175_a5de4356_0ed8_4d3a_acd8_7d1b39a9687a.png)

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


![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065325_5e782e89_6cef_430a_950f_f53deb46bd3b.png)

5\. Follow the same method to add the GCC compiler, click “Add->GCC->C++” on the right, as shown in the figure:

- Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++


![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065472_071286a0_07ff_4c35_a1bf_224dfd005874.png)

#### 4.4.2 Qt Versions Configuration

1\. Click Tools- > Options- > Qt Versions in Qt Creator;

2\. Then click Add to pop up a dialog box to select /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake;

3\. Click open to add;

4\. Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

5\. Then click "Apply and OK".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065550_14f7a743_402d_4bdd_84ba_00f069d1c974.png)

#### 4.4.3 Kits Configuration

Kits is a build kit for building and selecting development build environments useful for projects with multiple QT libraries. Add the previously added cross-compiler and QT Version to Kits to build a compilation environment suitable for the development board.

1\. Click Tools- > Options- > Kits in Qt Creator, and then click Add to display the configuration section;

2\. Name changes by itself;

3\. Compiler selects GCC;

4\. Qt version selects the name entered when the Qt version was created;

5\. Then click "Apply and OK".

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065647_1ca23892_98fa_45dc_852f_bd63156eca6a.png)

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

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065759_68535180_827b_401c_9f5c_02ae512b187c.png)

After opening the project, the interface is as follows: (If the page is not automatically changed, please select as shown in the screenshot).

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065860_f672a529_25ec_4069_9d2f_c0bed8e9b081.png)

Click Configure Project to adapt to the build environment described in the “Qt Creator Environment Configuration” section of this manual.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382065976_06b8a5a1_ce6b_4e63_9e96_f4a5bdaf8fa7.png)

Click Build->Clean All to clear it. (If the intermediate file is not cleared, it can be deleted manually).

Click Projects to uncheck Shadow build.

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382066079_0da61d98_b203_4c14_ab16_fab371086756.png)

Then click Build-> Build All to compile.

After the Build progress bar in the lower - right corner finishes, it means the compilation is complete. At this time, you will see the newly generated binary file fltest\_qt\_watchdog in the directory /home/forlinx/work/OK1126B - linux - source/app/forlinx/flapp\_out/, as follows:

![Image](./images/OK1126B-S_OK1126BJ-S_Linux6_1_141_User_Compilation_Manual/1766382066173_3aa58730_665e_42a5_9ead_2ff89ef1938f.png)

Copy the executable file generated by compiling to the board through U disk or FTP, copy it to the development board, and run the test.