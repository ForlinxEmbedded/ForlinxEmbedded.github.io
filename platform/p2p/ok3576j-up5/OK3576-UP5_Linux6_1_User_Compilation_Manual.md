# Linux6.1.14\_User's Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.  

## Application Scope

This software manual is designed for the OK3576-UP5 platform running Linux6.1. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 09/10/2026| V1.0| V1.1| V1.2 and above| OK3576-UP5 Linux6.1 User’s Compilation Manual Initial Version |

This manual is designed to help you quickly understand the compilation process and become the compilation methods. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware Requirements: A minimum of 6GB of RAM is recommended. This will allow you to allocate 2GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 5 chapters:

+ Chapter 1. covers the installation of VMware, specifically version VMware® Workstation 17 Pro v17.0.0. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2. explains how to load the Ubuntu development environment provided by Feilin. The environment is based on 64-bit Ubuntu 22.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. This section takes the 64-bit Ubuntu 22.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work;
+ Chapter 4. explains how to compile source code for the development board;
+ Chapter 5. mainly covers how to compile C and Qt applications.

Additionally, the manual includes explanations of some symbols and formats.

|                          **Format**                          | **Meaning**                                                  |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
|                           **Note**                           | Note or information that requires special attention, be sure to read carefully |
|                              📚                               | Relevant notes on the test chapters                          |
|                              ️️🛤️ ️                              | Indicates the related path.                                  |
| <font style="color:blue;">Blue font on gray background</font> | Refers to commands entered at the command line(Manual input required). |
|         <font style="color:black;">Black font</font>         | Serial port output message after entering a command          |
|       **<font style="color:black;">Bold black</font>**       | Key information in the serial port output message            |
|                              //                              | Interpretation of input instructions or output information   |
|                      Username@Hostname                       | root@OK3576-buildroot:~# : Development board serial port and network login account information, Ubuntu account information. You can use this information to determine the functional operating environment. |

Example: After packaging the file system, use the ls command to view the generated files.

```bash
forlinx@ubuntu:~/3576$ ls   //List the files in this directory
OK3576-linux-source.tar.bz2 OK3576-linux-source.tar.bz2.00 OK3576-linux-source.tar.bz2.01 OK3576-linux-source.tar.bz2.02 OK3576-linux-source.tar.bz2.03 OK3576-linux-source.tar.bz2.04 OK3576-linux-source.tar.bz2.05
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu.
+ //: Explanation of the command. No need to enter this when typing the command.
+ For detailed information, please refer to the OK3576-UP5 User Materials. All file paths for user materials mentioned in this document are relative to the root directory of the OK3576-UP5 User Materials.

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro v17.0.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

After registering for and logging into your BROADCOM website account, visit [https://support.broadcom.com/group/ecx/downloads](https://support.broadcom.com/group/ecx/downloads) to download VMware workstation pro.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350505056-e43fd6f7-bccd-4a64-bebf-490ea89ea1de.png)

Enter "VMware Workstation" to search, then click on the VMware Workstation Pro that appears in the search results.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350505213-3a1630c8-9424-429e-be75-6cf13cbdc64b.png)

Download the corresponding version of VMware Workstation Pro.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350505349-b5970ca1-f20c-4f79-b61c-6c132553581a.png)

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350505480-a8a9cec6-5543-4a3f-a287-c4163e8f4915.png)

Click "Yes", fill in your personal information, then click "Submit".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350505739-e8348ba0-1cac-40db-8ea1-fa00121d9aa2.png)

### 1.2 VMware Software Installation

Double-click the downloaded VMware Workstation Pro to enter the installation wizard. When the following interface pops up, click "Next".

![Image](1726292019102_966a3de3_90e4_43c5_8d09_638579d0a5ad.png)

Check "I accept the terms in the license agreement" and click "Next."

![Image](1726292019326_bbe7eaef_ef8c_420c_9a24_c318002f625b.png)

Change the installation location — you can customize the installation path, then click "Next".

![Image](1726292019516_d327a170_62c9_4921_8243_13806619bec3.png)

Check the options for product updates and the "Customer Experience Improvement Program", then click "Next".

![Image](1726292019727_ca602d71_8eb8_479d_836a_433822d8404f.png)

Check the option to create a shortcut, then click "Next".

![Image](1726292019978_f50a4b96_86f6_4b81_b46a_24aeb5e39e8f.png)

Click "Install."

![Image](1726292020296_68686b42_4114_438d_bd79_cc171fa88b02.png)

Wait for the installation to complete.

![Image](1726292020500_b5aec052_b5fe_4a5a_84a0_cf4630dec74d.png)

When the installation is complete, click "Finish"; or click "License" to enter the license key.

![Image](1726292020748_89dabfcd_6ac8_48a9_85db_74c39c551c00.png)

## 2\. Loading an Existing Ubuntu Development Environment

### 2.1 Downloading and Verifying The Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The regular user account for the development environment is: "forlinx", and the corresponding password is: "forlinx";**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

Development Environment Compatibility Note: The development environment described in this manual (based on Ubuntu 22.04) is highly versatile.

There are two methods for using a virtual machine environment in VMware: you can either load an existing development environment or create a new one.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508028-eb50916c-0d53-4426-bdf4-7b2c0cbb967e.png)

Press and hold the Shift key, then right-click the blank area and select "Open PowerShell window here" to bring up the following interface:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508111-8e6f7eef-a074-4516-8852-b5d9dc38dd3e.png)

Enter the command certutil -hashfile \[file name] md5 to verify each archive package one by one, and compare the generated value with the MD5 checksum recorded in the checksums.md5 file. If any checksum does not match, re-download it (please ask your sales representative for the download link).

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508189-f8828937-87fd-4370-ba85-2e286d6438d9.png)

Once all archive packages pass the verification, select all, right-click and extract them to the current folder. After the extraction completes, you will obtain the 3576 development environment.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508272-0f6dffcf-4741-4522-85bf-ce00f097c2b6.png)

### 2.2 Launching the Development Environment

Open the VMware Workstation software and click "Open Virtual Machine".

![Image](1726291989979_2b8d681a_40e2_4572_8cb0_35d6320a4abc.png)

Navigate to the directory where the newly extracted OK35XX-linux6.1-VM17-ubuntu22.04 virtual machine files are stored, select the OK35XX.vmx file, then click "Open".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508423-a7074335-a73f-46ac-a58f-c5ab58c43c5b.png)

Once the loading is complete", click "Power on this virtual machine".

![Image](1726291990280_09eace25_36da_4f07_8e8e_f479dd385778.png)

Select the option "I copied this virtual machine" when prompted.

The default login credentials for the development environment are:

Username: forlinx

Password: forlinx

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508688-9aa1b4ae-741f-4247-bec9-0ce8dae12d61.png)

The system will display the following interface after successful boot:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350508780-63eea62c-f151-492e-af02-ed56cdffddcd.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open VMware Workstation software and click "Create New Virtual Machine".

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3576-c/OK3576-C_Linux6_1_84_User_Compilation_Manual/1726291996421_80355a1a_1a92_46e3_9818_8b3496d88bb9.png)

When you enter the following interface, select "Custom (Advanced)", then click "Next".

Set the hardware compatibility to "Workstation 17.x", then click "Next"

![Image](1719278532008_920d71ea_3371_425c_9b27_a15b1789fdf9.png)

Select "I will install the operating system later", then click "Next".

![Image](1719278532173_48b35578_2a3d_4aff_9888_513f9b66eaaf.png)

For guest operating system selection, pick "Linux", set the version to "Ubuntu 64-bit", then click "Next"

![Image](1719278532371_cd7442c7_21c1_4c8a_8463_24ea3de5f6c1.png)

You can customize the virtual machine name and its installation storage path, then click "Next".

![Image](1719278532534_39687568_6ee3_4284_b373_2104df01f0fb.png)

Set the number of processors to 4, and the number of cores per processor to 1, then click "Next".

![Image](1719278532718_2cd2ea2a_0f97_46d5_ad8b_4f004e889a20.png)

Allocate the virtual machine memory to 16384MB, then click "Next".

![Image](1719278532900_dd3f7357_07c5_4dc4_9fd1_7d367c7a7111.png)

Select "Use network address translation (NAT)", then click "Next".

![Image](1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Select "LSI Logic" as the virtual disk adapter, then click "Next".

![Image](1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

Set the virtual disk type to "SCSI", then click "Next".

![Image](1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

Select "Create a new virtual disk", then click "Next".

![Image](1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Set the maximum disk size to 200GB, check the option "Split virtual disk into multiple files", then click "Next".

![Image](1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Keep the default disk file name, then click "Next".

![Image](1719278534210_b2fc7391_1c76_4148_80c8_855cd9174698.png)

Click "Finish".

![Image](1719278534358_9585162d_5c54_42eb_be37_f9361aebf91d.png)

You can see the basic configuration of the current Ubuntu development environment on the left side of VMware Workstation.

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. Here's how to install Ubuntu in a virtual machine

#### 3.1.2 System Installation

**3.1.2.1 Downloading the Image**

The selected Ubuntu version for installation is 22.04. Please contact your sales representative to obtain the download link. Download the exact version named ubuntu-22.04.5-desktop-amd64.iso.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350512606-1dfcd8a6-5976-4cc9-837e-6262bfb28c18.png)

**3.1.2.2 Installing the Image**

After downloading the image, click "Edit Virtual Machine Settings".

![Image](1740967889311_2d81dcbe_0cae_4c55_97c9_537521a15233.png)

The pop-up Virtual Machine Settings menu is shown in the figure below:

![Image](1719278535121_beaef4c9_b729_4a86_8299_02e28a716d2d.png)

Click "CD/DVD (SATA)", select the option "Use ISO image file", browse and select the previously downloaded ubuntu-22.04.5-desktop-amd64.iso image, then click "OK".

![Image](1719278535409_a8fcb60d_f0a2_428c_8be7_0e124dcbc137.png)

After mounting the image, ensure the network connection is available, then click "Power on this virtual machine" to start the Ubuntu image installation process.

![Image](1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711-1793773748273.png)

Click "Yes".

After the virtual machine boots up, wait for the installation interface to appear, then click "Install Ubuntu" on the right side.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513266-09505bc7-fd7b-4a75-9909-8f997ea8ed22.png)

The default language of Ubuntu is English, but you can also select other languages. Note that the selected language can still be reconfigured later in the system. After making your selection, click "Continue".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513356-612e6ab6-f40e-43f6-b284-7b69fb9b166f.png)

Select "Normal installation" (corrected the original typo installtation), then click "Continue".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513438-3cbb5c3d-5afe-4ef7-a997-d469f4b6dd88.png)Select "Erase disk and install Ubuntu", then click "Install Now".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513531-2ce9594a-1d90-47a5-9939-54e5336c409d.png)

Click "Continue".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513617-70b15aa1-891c-4703-8cc7-23a956cd289e.png)

Click the territory of your country or enter city to set the time zone, then click "Continue".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513696-ef285b6d-a9a8-4423-a438-7e7b480e7a6f.png)

Set your full name, computer name, user account and password (then confirm the password), then click "Continue".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513781-c041b103-92bc-4053-8a27-a119bfabe00a.png)

After the installation finishes, the system interface shown below will appear. Click the account forlinx and enter the password forlinx to log in.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513908-7f8887b9-6421-4bf5-9614-74a758772b79.png)

You will then enter the system desktop interface:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350513983-4cf1b7ce-6a0a-4c16-9b60-6de821610dc2.png)

#### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 22.04 operating system, some configurations need to be done.

**3.1.3.1 Installing open-vm-tools**

Next, install open-vm-tools. If this utility is not installed, copy-paste and file drag-and-drop functions cannot be used between the Windows host machine and the virtual machine. Right-click on the desktop and select "Open in Terminal".

```bash
forlinx@ubuntu:~$ sudo apt-get update                        //Update the download source information
forlinx@ubuntu:~$ sudo apt-get install open-vm-tools open-vm-tools-desktop //Install open-vm-tools
```

After installing the open-vm-tools, restart the virtual machine. Then click "View" on the menu bar, select Auto-Resize, and click "Fit Guest Now" to enable full-screen display of the virtual machine interface.

![Image](1779074939706_daf27d61_ef08_4639_b411_552e3b4aece3.png)

**3.1.3.2 Basic Configuration**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350514198-940dbbe7-e9e5-4d7c-8dd6-c10ee51e9c82.png)

#### 3.1.4 Network Configuration of Ubuntu

**3.1.4.1 NAT Mode**

Before using the network, first confirm that the virtual machine can access the Internet by clicking "Edit Virtual Machine Settings".

Change the network mode of the Network Adapter to "NAT Mode":

![Image](1740967890224_d642497d_9876_4d31_897d_02276b6462f3-1793773924346.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. This is the most commonly used method for the virtual machine to access the external network.

Open "Settings":

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350514510-91ecbb49-181e-48c8-ae60-b882a5ac2f17.png)

Set the Internet:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350514587-60eda762-af47-4a04-b4e8-aa8ff5075128.png)

Set the network to obtain an IP address automatically, and configure the DNS as 8.8.8.8, then click "Apply" to save the settings.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350514663-f9af697b-4ca0-4ed6-9767-40ed0d6cfee5.png)

**3.1.4.2 Bridge Mode**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

Change the network bridging mode in the network adapter to "Bridge Mode":

![Image](1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)

Open "Settings":

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350514510-91ecbb49-181e-48c8-ae60-b882a5ac2f17.png)

Set the Internet:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350515118-2b8a8d89-e6a5-4335-8513-0f465ceb5785.png)

Setting a Static IP Address

When configuring a static IP, the Ubuntu IP must be set in the same subnet as the host machine’s IP.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350515244-faf411d3-120e-4eda-9fc1-d02659af86a1.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

#### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.1, then click "OK". As shown below, most modern computers support USB 3.1 ports. If not configured, the USB 3.1 device will not be connected to the virtual machine when inserted. As shown in the figure:

![Image](1719278541851_33d6ec29_11c4_499b_867c_528314eef0ca.png)

After the virtual machine starts, insert the USB drive. An icon resembling a "USB drive" will appear in the lower-right corner of the virtual machine. Right-click it --> select "Connect", then you can see the USB drive icon in the taskbar, as shown in the figure below:

![Image](1719278542123_ad4e8176_1557_40a0_b545_a4aa290b16d2.png)

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516045-4dfbf3f3-045b-4325-bd7f-a600107b0dfc.png)

Click the USB drive icon to enter its internal directory.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516133-0a753b31-b403-45f7-a9b1-ff2e86c4ddb8.png)

#### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```bash
forlinx@ubuntu:~$ sudo apt-get update                        // Update download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide the list information of necessary software packages for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used to generate text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                     // Compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OK3576 Linux Source Code

```bash
forlinx@ubuntu:~$ sudo apt-get update                                  //Updated apt-get download source
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev     
# Necessary toolkit installation
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc \
libssl-dev liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \ 
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \ 
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \ 
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \ 
libmpc-dev bc python-is-python3 python2 gettext scons
```

These libraries are required when setting up the 3576 Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK3576 Linux development environment, you can skip this step.

### 3.2 Installing the Cross-compilation Toolchain

Path: `User profile/2-source code and image/2-cross-compiler/aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz`

Copy the above compressed file to the directory in the development environment `/home/forlinx/`, and extract it there:

```bash
forlinx@ubuntu:~$ tar -zvxf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

Enter`aarch64-buildroot-linux-gnu_sdk-buildroot `directory to execute relocate-sdk.sh

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

### 3.3 Qt Creator Installation

Copy the file qt-creator-opensource-linux-x86\_64-4.7.0.run to any directory in the current user’s home directory and execute the following command.

Path:`User profile\3-tools\qt-creator-opensource-linux-x86_64-4.7.0.run`

```bash
forlinx@ubuntu:~$ chmod +x qt-creator-opensource-linux-x86_64-4.7.0.run
forlinx@ubuntu:~$ ./qt-creator-opensource-linux-x86_64-4.7.0.run                   
```

Then a graphical installation window will pop up, click "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516208-e29bc1d2-9ad6-4a04-bd07-fa3848846028.png)

If you already have a Qt account, enter your account and password in the Login input field; if you do not have a Qt account, fill in your account email, password and confirm password in the Sign-up section, check the terms of service, and click "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516287-f10acac9-55b1-4401-af1b-fc6b43c3f91d.png)

Click "Next":

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516362-56cfc6b6-c107-4811-b06b-5c20a45ada93.png)

You can set the installation path according to your preferences; here, we’ll use the default settings and click "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516437-44fb27fb-26ed-4263-b5b2-6998e2f104b9.png)

Installation finishes, click "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516516-50862acf-f1d7-4266-b871-9d62895d6218.png)

Choose "I agree to the License Agreement" and click "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516591-3836cda0-ef29-4893-8d83-a6eab708f65c.png)

Click "Install" to start the installation.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516687-8e075c79-e8cb-40e1-9522-d5b1db422b95.png)

Launch Qt Creator and click "Finish".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516771-c520fcce-db97-404a-82a8-3e0815e43a97.png)

The Qt interface will automatically open, or you can launch it from the command line. To open Qt Creator in the background, use the following command, replacing it with your actual installation path:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

Interface:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1786350516843-14901225-c9a0-4bca-b629-622dfdf0ea65.png)

## 4\. SDK Source Code Compilation Development

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Development OS: Ubuntu22.04  64 bit
+ Qt Creator: Qt Creator 4.7.0 Based on Qt 5.15.11
+ Cross-Toolchain: aarch64-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: Linux-6.1
+ Qt Version Ported to Development Board: qt5.15.11

#### 4.1.2 Copying the Source Code

Program source code:

Create Working Directory:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work			//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK3576-linux-source.tar.bz2.* > OK3576-linux-source.tar.bz2
forlinx@ubuntu:~/work$ tar -xvf OK3576-linux-source.tar.bz2			//Unzip the compressed file at the current location
```

Wait for the copy process to complete after running the command.

#### 4.1.3 Directory Structure

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ tree -L 1
.
├── app																	                          // 	
├── buildroot                                                   	// Related to the buildroot system
├── build.sh -> device/rockchip/common/scripts/build.sh           // Compilation script
├── common -> device/rockchip/common            
├── debian                                                        // Related to the debian system
├── device															  
├── docs															                          	// Rockchip development documents
├── external                                                      // Third-party libraries and external components
├── hal 															
├── kernel -> kernel-6.1											
├── kernel-6.1															                      // Kernel source code
├── Makefile -> device/rockchip/common/Makefile										
├── prebuilts															                        // Precompilation
├── README.md -> device/rockchip/common/README.md						      // Project description file
├── rkbin																                          // DDR initialization code
├── rkflash.sh -> device/rockchip/common/scripts/rkflash.sh			
├── rtos																                          // Related to the rtos system
├── tools																                          // Tools
├── u-boot																                        // U-Boot source code
└── yocto																                          // Related to the yocto system
```

#### 4.1.4 Common Source Code File Paths

| File| Path|
|----------|----------|
| U-Boot Default Configuration File:| OK3576-linux-source/u-boot/configs/OK3576-C\_defconfig|
| Camera Configuration Device Tree File：| OK3576-linux-source/kernel-6.1/arch/arm64/boot/dts/rockchip/OK3576-UP5-cam.dtsi|
| Configuration Device Tree File:| OK3576-linux-source/kernel-6.1/arch/arm64/boot/dts/rockchip/OK3576-UP5-common.dtsi|
| Top-level Device Tree File:| OK3576-linux-source/kernel-6.1/arch/arm64/boot/dts/rockchip/OK3576-UP5-linux.dts|
| Kernel Configuration File| OK3576-linux-source/kernel-6.1/arch/arm64/configs/OK3576-UP5-linux\_defconfig|
| Buildroot Configuration File:| OK3576-linux-source/buildroot/configs/rockchip\_ok3576-up5\_defconfig|
| Partition table configuration file| OK3576-linux-source/device/rockchip/rk3576/parameter.txt|

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 8GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### 4.2.1 Full Compilation

In the source code directory there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3576-linux-source
```

The following operations need to be operated in the source code directory. Full compilation method:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh
```

**The precompiled file system used by default in the SDK is located at the path:

OK3576-linux-source/prebuilts/forlinx/rk3576/buildroot/rootfs.ext4

If you need to compile the file system on your own, simply delete or move this file out of the directory.**

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608227526-ddbc2fb0-284a-4bcd-8fa9-4fb6afd567a1.png)

After successful compilation, the system image will be generated under the path OK3576-linux-source/output/update/Image/, as shown below:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608227665-7081933a-7e27-4dd6-8344-46411eee2982.png)

Description of Generated Files:

| File| Description|
|----------|----------|
| boot.img| Consists of resource.img and kernel.img, and contains the device tree and the kernel|
| env.img| Environment variable image file|
| MiniLoaderAll.bin| Miniloader image file|
| misc.img| Miscellaneous image files|
| parameter.txt| Partition table configuration file|
| recovery.img| System recovery image file|
| rootfs.img| File system image files|
| uboot.img| uboot image files|
| update.img| Complete image file|
| userdata.img| User data partition image|

**Note: update.img is a pre-packaged file intended for full flashing via OTG or a TF card; the other files are for step-by-step flashing.**

#### 4.2.2 Image Flashing File

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

#### 4.2.3 Cleaning up Generated Files

**Note: Please be careful. This operation will delete the compiled intermediate files and generated image files.**

Compile the script to operate under the source code path.

```bash
forlinx@ubuntu: ~/work/OK3576-linux-source$ ./build.sh cleanall
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608227778-0957501c-1228-4a2e-9e5b-e811759ba606.png)

This operation deletes all temporary files, but does not affect the source files, including those that have already been modified.

### 4.3 User-defined Configuration and Compilation

#### 4.3.1 Configuring and Compiling U-boot

Commands for compiling u-boot separately:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh uboot
```

Please follow the step-by-step instructions to flash the Ok3576-linux-source/u-boot/uboot.img file.

#### 4.3.2 Configuring and Compiling the Kernel (Example: Adding the ch341.c Driver)

**Method 1: Configuring the graphical interface**

**Keyboard Shortcuts:**

| Button| Function|
|----------|----------|
| **↑ ↓**| Move up and down|
| **← →**| Bottom buttons for switching between left and right|
| **Enter**| Enter the sub-menu|
| **Esc**| Back to previous level / Exit|
| **Y**| Select (compile into the kernel); the symbol is `[*]`or`[*]`.|
| **N**| Unselected; symbol is `[ ]`or`< >`|
| **M**| Select (compile into the kernel); the symbol is `[M]`or`<M>`.|
| **Space**| Cycle through Y/N/M|
| **/**| Search configuration options:|
| **?**| Show Help|
| **Z**| Show/Hide Options (Unmet Dependencies)|

**Meaning of Symbols:**

| Symbols| Meaning| Description|
|----------|----------|----------|
| `[ ]`| Not Selected| Do not compile this feature|
| `[*]`| Built-in| Compiled into the kernel (bool type)|
| `< >`| Not Selected| Can be compiled as a module (tristate type)|
| `<*>`| Built-in| Compiled into the kernel (tristate type)|
| `<M>`| Module| Compiled as `.ko` module|
| `(value)`| String/Number| Configuration values that can be entered|
| `--->`| Sub-menu| Press Enter|
| `---`| Not available| Unfulfilled dependencies or mandatory selections|

**Main Menu Categories:**

```bash
General setup                    # Kernel general configuration (version, compression, namespaces)
Processor type and features      # CPU architecture, SMP, NUMA, memory model
Power management options         # Power management
CPU Power Management			 # CPU frequency and idle management
Executable file formats          # ELF, script support
Memory Management options        # Memory management, huge pages, swap
Networking support               # Network protocol stack, netfilter
Device Drivers                   # Device drivers (the largest category)
  ├─ Block devices               # Hard disk, loop devices
  ├─ Network device support      # Network card drivers
  ├─ Input device support        # Keyboard, mouse, touchscreen
  ├─ Graphics support            # GPU, DRM, Framebuffer
  ├─ USB support                 # USB host/device drivers
  └─ ...
File systems                     # ext4, btrfs, NFS, FUSE
Kernel hacking                   # Debugging options, kernel log level
Security options                 # SELinux, AppArmor, kernel hardening
Cryptographic API                # Cryptographic algorithm support
Library routines                 # CRC, compression libraries
```

Before modifying the default configuration, you should back up the old configuration, as the old xxx\_defconfig file will be modified directly.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ cp kernel/arch/arm64/configs/OK3576-UP5-linux_defconfig kernel/arch/arm64/configs/OK3576-UP5-linux_defconfig-backup
```

If you wish to configure the kernel, you must first complete a full compilation; then, in the source code directory, carry out the following steps.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh kconfig
```

After adding and modifying the configuration, save and exit, and then you can compile directly.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608227858-f516458a-b8a2-4ada-bfc0-650ed657dc16.png)

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608227940-dc8b5c0a-28e4-4e7b-b4fd-33a1e8bb1791.png)

Press the / key to activate the quick search function. After entering USB\_SERIAL\_CH341 and pressing Enter, the option information corresponding to CH341 will be displayed.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228034-3b874a07-9a0e-4db6-8707-0d0029b0b7ad.png)

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228284-05ce867b-1f6f-465a-96cd-e56deb4bc36a.png)

Press 1 to access the specific configuration menu:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228453-05d167ff-03a0-4362-bd9a-a7480e52dc59.png)

You can see that this driver is not selected in the current configuration. Move the cursor to the CH341 item and press the Space key to complete the selection. The configuration is successful when the item is marked with`<*>`or`<M>`. Here,`<*>`means the driver is compiled directly into the kernel and cannot be unloaded after system startup;`<M>`means it is compiled as a kernel module, which is loaded dynamically at system power-on, and users can also manually unload the module driver.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228565-c6d716f9-6bd7-4b42-993d-68231c93a45e.png)

At this point, the CH341 configuration is completed. Move the cursor left and right to select "Ok", press Enter to confirm saving and exit the menu.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228684-5600c095-08b0-4fc0-8205-cbc72256e6a3.png)

Method 2: Modify the default configuration file

Add "USB\_SERIAL\_CH341" to the kernel configuration on the development board.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ vi kernel/arch/arm64/configs/OK3576-UP5-linux_defconfig 
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608228953-4f4694f9-4185-4d40-8dae-3a7e9178f8e9.png)

Add the USB\_SERIAL\_CH341 configuration directly to the configuration file:

![](image-20260327164458183.png)

After adding the configuration via either of the two methods above, you need to separately compile the device tree and kernel to generate the new Image file. The modification will take effect after you replace the corresponding Image file on the development board.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh kernel
```

Please flash the OK3576-linux-source/kernel/boot.img file in steps.

#### 4.3.3 Configuring and Compiling Buildroot (Example: Adding gdbserver)

**Note: The source code comes with a pre-compiled filesystem image:**

- **OK3576-linux-source/prebuilts/forlinx/rk3576/buildroot/rootfs.ext4, using this image can significantly reduce the time for creating a system image. If you need to modify the contents or configuration of the file system (rootfs), you must remove this rootfs.ext4 image file. After removal, execute the compilation script; Buildroot will then recompile and generate a new root filesystem image;**

- **Before adding the required features, you need to first determine the name of the corresponding feature macro in buildroot. There are two methods: one is to find it layer by layer according to the structure of buildroot, and the other is to directly search for the corresponding name of the feature on-line. For the gdbserver feature, first search for the macro corresponding to the GDB feature, which is BR2\_PACKAGE\_GDB. Search for BR2\_PACKAGE\_GDB in Buildroot, and enable GDBSERVER in this configuration.**

**Method 1: Configuring the graphical interface**

Interface Operation:

| Button| Function|
|----------|----------|
| **Direction keys ↑↓**| Move the cursor up and down|
| **Enter**| Enter submenu / Select item|
| **Space**| Toggle option status （`[ ]` → `[*]` → `< >` → \`\`）|
| **Esc Esc**| Return to upper menu / Exit|
| **/**| Search configuration items (enter keywords)|
| **?**| Display help information for the current option|
| **Tab**| Switch between bottom buttons (Select / Exit / Help / Save / Load)|

Meaning of Symbols

| Symbols| Meaning|
|----------|----------|
| `[ ]`| Unselected (not compiled)|
| `[*]`| Selected (compiled into the system)|
| `(value)`| String/number configuration item|
| `--->`| With sub-menu|
| `(NEW)`| Newly added configuration item:|

Menu Categories：

```bash
Target options          # Target architecture (ARM/x86/MIPS, etc.), CPU model
Build options           # Compilation options, download path, number of parallel compilations
Toolchain              # Toolchain selection (internal/external), C library type (glibc/musl/uclibc)
System configuration   # Host name, root password, init system, /dev management
Kernel # Kernel configuration (use custom kernel or Buildroot built-in)
Target packages        # Application software packages (busybox/network tools/libraries/GUI, etc.)
  ├─ Audio and video applications   # ffmpeg, gstreamer, alsa-utils
  ├─ Networking applications        # openssh, iperf3, nginx
  ├─ Debugging, profiling and benchmark       # gdb, strace
  └─ ...
Filesystem images      # Output format (ext4/squashfs/tar/cpio/initramfs)
Bootloaders            # U-Boot/Grub configuration
Host utilities         # Host-side tools (genimage/mtools, etc.)
Legacy config          # Obsolete old configuration items
```

Before modifying the default configuration, you should back up the old configuration, as the old xxx\_defconfig file will be modified directly.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ cp buildroot/configs/rockchip_ok3576-up5_defconfig buildroot/configs/rockchip_ok3576-up5_defconfig-backup
```

If you want to configure buildroot, you must first complete a full compilation, and perform the following operations in the source code directory.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh bconfig
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229167-05cdf8b3-eb56-44fa-89ca-48f79339a2cd.png)

After execution, the following page appears.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229256-ae9a9ab8-4ea9-44d6-813f-6ede981a9bf8.png)

Press / to perform a quick search, enter BR2\_PACKAGE\_GDB and press Enter, then the option information corresponding to GDB will be displayed.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229348-b64edb0b-9af5-441b-a251-794e0339ed76.png)

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229446-e78e08fc-e762-4f55-aeff-42b9de186c07.png)

Press 1 to access the specific configuration menu:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229526-035a05e5-8a05-4aff-9a68-61e4eba2ed62.png)

You can see that the current configuration is not selected. Press the space bar at the gdb position to select it. When it becomes`[*]`, the selection is successful![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229607-136ddee4-89b9-4c2c-a5ae-9bb5f7c28d79.png)

It can be seen that when gdb becomes`[*]`, gdbserver will automatically become below`-*-`. At this time, the gdbserver selection is successful. Move the cursor to`< Save>`, press Enter to select Ok, save and exit.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229707-b4ebc681-331b-412a-9de2-4d22cc2eed25.png)

**Method 2: Modify the default configuration file**

Add the GDB configuration BR2\_PACKAGE\_GDB to the buildroot configuration of the development board

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ vi buildroot/configs/rockchip_ok3576-up5_defconfig
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229786-3b119cd4-b4ca-4c67-9224-5b3f47cca69a.png)Open the configuration file and add the GDB configuration. After adding the GDB configuration, the GDBSERVER feature will automatically be available.  
![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608229875-7b0472e4-0e08-4f13-bc44-c216fabd47d6.png)

After selecting the features, compile buildroot separately.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh buildroot
```

Please flash the OK3576-linux-source/buildroot/output/rockchip\_ok3576-up5/images/rootfs.ext4 file in steps.

#### 4.3.4 Customization of System Partition Size

Partition table configuration file path:  OK3576-linux-source/device/rockchip/rk3576/parameter.txt

The contents of the document are as follows:

```bash
FIRMWARE_VER: 1.0
MACHINE_MODEL: RK3576
MACHINE_ID: 007
MANUFACTURER: RK3576
MAGIC: 0x5041524B
ATAG: 0x00200800
MACHINE: 0xffffffff
CHECK_MASK: 0x80
PWR_HLD: 0,0,A,0,1
TYPE: GPT
GROW_ALIGN: 0
CMDLINE: mtdparts=:0x00002000@0x00004000(uboot),0x00002000@0x00006000(env),0x00002000@0x00008000(misc),0x00020000@0x0000a000(boot),0x00080000@0x0002a000(recovery),0x00010000@0x000aa000(logo),0x00400000@0x000ba000(userdata),-@0x004ba000(rootfs:grow)
uuid:rootfs=614e0000-0000-4b53-8000-1d28000054a9
uuid:boot=7A3F0000-0000-446A-8000-702F00006273
```

Example for uboot:

The part before @ is the partition size, and the part after @ is the starting address. The starting address of the next partition equals the starting address of the previous partition plus the partition size. Each block of the partition is 512 bytes.

0x00002000 \*512byte = 8192 \* 512byte = 4,194,304byte

4,194,304÷1024 = 4096KB

4096÷1024=4MB

So the size set for the uboot partition is 4MB.

**Note: After adjusting the size of a certain partition, the starting addresses of subsequent partitions must be adjusted in sequence. After the configuration is completed, execute the full compilation or the complete image packaging command.**

#### 4.3.5 Complete Image Packaging

How to take effect: Package update.img

```bash
forlinx@ubuntu:~/work/OK3576-linux-source$ ./build.sh updateimg
```

Please completely flash the OK3576-linux-source/output/update/Image/update.img file.

## 5\. Application Compilation and Development

### 5.1 Redirection of the Cross Compiler

**Notes: Ensure that the Ubuntu host and the development board are on the same network and can communicate with each other.**

️Cross-compiler path:`User Profile \ 2-Sources and Images \ 2-Cross Compiler\aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz`

Copy the cross-compiler to the /home/forlinx directory.

```bash
forlinx@ubuntu:~$ ls
aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz
```

First extract the compressed package, then execute the following command to redirect the cross-compiler:

```bash
forlinx@ubuntu:~/aarch64-buildroot-linux-gnu_sdk-buildroot$ ./relocate-sdk.sh
```

### 5.2 C Application Program Compilation, Operation and Debugging

#### 5.2.1 Compiling and Operation C Language Applications via Command Line

This section uses the watchdog test programme; by default, the source code is copied to the /home/forlinx/work directory.

Use the cd command to navigate to the test source code directory;.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3576-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog
```

Set the environment variables of the cross-compilation toolchain and use the cross-compiler for cross-compilation.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ source /home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/environment-setup
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ aarch64-linux-gcc watchdog.c -o fltest_watchdog
```

Use the file command to view the generated file information.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ /usr/bin/file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

From the result, you can see that the compiled file is for 64-bit ARM architecture.

Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/root path. Take U disk as an example, copy it to the development board and run the test.

```bash
root@OK3576-buildroot:~# cp /run/media/sda1/fltest_watchdog /root/
root@OK3576-buildroot:~# ./fltest_watchdog
Watchdog Ticking Away!
```

#### 5.2.2 Debugging C Language Applications via Command Line

GDB implements remote debugging in embedded systems through gdbserver (target board) + gdb (host). It can set breakpoints, execute step by step, view variables and call stacks, directly read and write hardware registers and memory addresses, analyze multi-thread status and crash scenes, and locate bugs and debug driver programs without modifying the code.

Write the demo and compile it on Ubuntu.

```plain
forlinx@ubuntu:~$ cat demo.c 
#include <stdio.h>

int add(int a, int b) {
    int result = a + b;
    return result;
}

int main() {
    int x = 5;
    int y = 10;
    int sum;

    printf("x = %d, y = %d\n", x, y);

    sum = add(x, y);

    printf("sum = %d\n", sum);

    return 0;
}
```

Add the cross-compiler path and execute the following command to generate the binary demo file.

**Notes: The -g parameter needs to be added during the compilation process to retain debugging information.**

```bash
forlinx@ubuntu:~$ export PATH=/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/:$PATH
forlinx@ubuntu:~$ aarch64-linux-gcc -g demo.c -o demo
forlinx@ubuntu:~$ ls demo
demo
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608351937-2539f16c-17df-4c47-9fb9-46aca83adc5c.png)

**Environment Setup:**

Ensure that the Ubuntu host and the development board are on the same network and can communicate with each other.

**Host:**

Set the host IP according to 3.1.4 of the compilation manual.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352031-5c104c5b-cf63-4cfc-a517-ba008dc41329.png)

**Development board IP Settings:**

```bash
root@OK3576-UP5-buildroot:~# ifconfig eth0 172.20.0.145
```

**Debugging:**

**Development Board:**

Put the test demo on the development board, and execute gdbserver in the corresponding path. At this time, it will monitor the host end.

```bash
root@OK3576-UP5-buildroot:~# gdbserver 172.20.0.176:1234 demo
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352150-75d3e34e-73fd-4419-a092-3bd48728a217.png)

**Host:**

Use the gdb of the cross-compilation toolchain for debugging.

```bash
forlinx@ubuntu:~$ aarch64-linux-gdb demo
GNU gdb (GDB) 13.2
Copyright (C) 2023 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
Type "show copying" and "show warranty" for details.
This GDB was configured as "--host=x86_64-pc-linux-gnu --target=aarch64-buildroot-linux-gnu".
Type "show configuration" for configuration details.
For bug reporting instructions, please see:
<https://www.gnu.org/software/gdb/bugs/>.
Find the GDB manual and other documentation resources online at:
    <http://www.gnu.org/software/gdb/documentation/>.

For help, type "help".
Type "apropos word" to search for commands related to "word"...
Reading symbols from demo...
(gdb) 
```

Connect to the development board end.

```bash
(gdb) target remote 172.20.0.145:1234
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352247-8840ccb6-f310-485d-b502-4fdfcb191950.png)

After the connection is successful, you can start debugging officially.

**Quick Commands:**

| File | Select the debugging file |
|----------|----------|
| list（l） | List source code |
| break（b) | Set breakpoint |
| info breakpoints（info b) | List breakpoints |
| continue（c) | Resume program execution until a breakpoint is triggered or the program ends |
| print(p) | Print a variable or variable address |
| quit(q) | Exit GDB mode |

Select the debugging file.

```bash
(gdb) file demo
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352338-950ff305-3427-4641-b225-a2bd661c1537.png)

View the file content.

```bash
(gdb) l
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352445-4bbeab1f-d28c-4c53-bfe6-50f1b22fece8.png)

Insert breakpoints and view breakpoints.

```bash
(gdb) b main
Breakpoint 1 at 0x55555557d4: file demo.c, line 9.
(gdb) b 13
Breakpoint 2 at 0x55555557e4: file demo.c, line 13.
(gdb) b 17
Breakpoint 3 at 0x5555555808: file demo.c, line 17.
(gdb) info b
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x00000055555557d4 in main at demo.c:9
2       breakpoint     keep y   0x00000055555557e4 in main at demo.c:13
3       breakpoint     keep y   0x0000005555555808 in main at demo.c:17

```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352549-654d2739-8ab6-4edf-b11c-6be2e333210e.png)

Enter c to execute to the breakpoint until the execution ends.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352735-b55c59ff-d4ab-4940-9dca-b0605e9317a9.png)

Print on the development board end:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608352959-bc6f8247-dbb9-473c-81ad-7b58272dde9a.png)

### 5.3 Qt Creator Environment Configuration

Qt is a cross-platform graphics development library that supports multiple operating systems. Before compilation, you need to configure the Qt Creator environment for cross-compilation.

#### 5.3.1 Configuration of the Cross Compiler

Navigation to Qt Creator via its installation directory:

```bash
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator
```

Access to Tools – Options on the Qt Creator menu bar (as shown in the figure below):

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353042-43e13eba-eac7-4556-b510-d53a46885701.png)

Selection of Kits, Compilers, followed by Add – GCC – C (as shown in the figure below):

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353165-70c2c3e4-c852-400f-88bb-d552130708ed.png)

Input of "GCC" in the Name field, input of the following path in the Compiler path field, and click on "Apply".

Path:`/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/aarch64-linux-gcc`

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353289-bd2a7a8a-41d0-41a5-862d-06fe7fd410f6.png)

Selection of Kits, Compilers, followed by Add – GCC – C++:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353454-94be0c90-e913-4268-9834-a365a2f72bf4.png)

Input of "G++" in the Name field, input of the following path in the Compiler path field, and click on "Apply":

Path:`/home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/aarch64-linux-g++`

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353578-50a82140-3280-4538-b514-061cc8ad8d32.png)

#### 5.3.2 Configuration of Qt Versions

Selection of kits and qt versions, followed by the add operation:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353683-f9fb9274-f1a3-4525-a6a9-08c8b08b61a0.png)

Selection of <font style="color:#0000ff;">/home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake </font>in the pop-up dialog box and click on "Open".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353825-6666b529-dd2f-4e87-893c-c32557203d92.png)

Input of QMAKE in the Version name field within the Qt Versions configuration box, then click "Apply".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354009-c087f9de-a2b8-4385-9344-dd325426f757.png)

#### 5.3.3 Configuration of Kits

Kits are a set of build tools used to configure and select development environments. They are particularly useful for projects that involve multiple Qt libraries. Integrate the previously added cross-compiler and Qt Version into the Kits to build a compilation environment suitable for the development board.

Click "Kits" and then the "Add" to bring up the configuration section.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354133-1295e209-fc22-478c-932f-f5ac612b079b.png)

Self-modification of the Name; selection of GCC and G++ for the Compiler; selection of QMAKE for Qt Version; followed by the clicks on "Apply" and "OK"

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354218-835cc8e9-3b93-4aaa-8181-b622d8992b90.png)

### 5.4 Compilation, Operation and Debugging of Qt Projects

#### 5.4.1 Command-Line Compilation and Operation of Qt Applications

Switching to the path of Qt source codes:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3576-linux-source/app/forlinx/flapp/src/watchdog							
```

Configuration of environment variables:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/flapp/src/watchdog$ source /home/forlinx/aarch64-buildroot-linux-gnu_sdk-buildroot/environment-setup		
```

Configuration of the project:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/flapp/src/watchdog$ qmake	
```

Compilation of the project:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/flapp/src/watchdog$ make	
```

Path of the generated executable file:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK3576-linux-source/app/forlinx/flapp_out/release/bin		
```

Operations: Copy the compiled executable file to the development board via a USB flash drive, FTP or other methods, then conduct operation and testing.

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/flapp_out/release/bin$ ls
fltest_qt_watchdog					
```

#### 5.4.2 Compilation and Operation of Qt Applications via Qt Creator

Opening of Qt Creator in the development environment (please open it according to your actual paths)

```bash
forlinx@ubuntu:~$ cd qtcreator-4.7.0/bin/
forlinx@ubuntu~/qtcreator-4.7.0/bin$ ./qtcreator &
```

Click on File – Open File or Project in Qt Creator

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354305-4b3e70f0-124f-4057-b0ce-257419cb8959.png)

Selection of the watchdog.pro project in the pop-up window and click on "Open".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354412-2fc6e70c-3378-4c69-9aac-04572f91ae35.png)

Configuration of the project suite: Select 35XXLinux and click on Configure Project.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354760-ef6e40e4-0e41-41b6-8a0a-6ba096966fd6.png)

The project interface is displayed as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354875-c25592bf-6da9-4230-ad47-2f442b449f81.png)

Click on Build – Clean All to clean the project.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354963-b1b796c2-7f6d-4e59-b19a-344a758312a1.png)

Click on Projects and Build, then deselect Shadow build.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355070-ca6bf3ef-096c-4d97-878b-daf41a7ca56f.png)

Click on the "hammer icon" to start compilation.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355173-ca0044d3-cf04-430c-aca2-1ce4bd23d75f.png)

Once the Build progress bar in the bottom-right corner has completed, this indicates that the compilation is finished. At this point, you will see the newly generated binary files in the specified directory, as shown below:

```bash
forlinx@ubuntu:~/work/OK3576-linux-source/app/forlinx/flapp_out/debug/bin $ ls
total 64
-rwxrwxr-x 1 forlinx forlinx 63120 11月 4 19:15 fltest_qt_watchdog
```

Copy the compiled executable file to the board via a USB drive, FTP, or other methods. Once copied to the development board, run the test.

#### 5.4.3 Remote Debugging of Qt Applications

**Note: Configure the Ubuntu virtual machine in bridged mode to ensure that the Ubuntu virtual machine and the development board are on the same network for mutual communication.**

Set development board ssh password.

```bash
root@OK3576-UP5-buildroot:~# passwd root
Changing password for root
New password:							# Input password "root"
Bad password: too short
Retype password:						# Confirm password "root"
passwd: password for root changed by root
```

If there is no password, leave it blank. However, note that some platforms do not allow SSH login with a blank password. It is recommended to set a password before performing operations.

Install debugging software in Ubuntu virtual machine.

```bash
forlinx@ubuntu:~$ sudo apt-get install gdb-multiarch
```

Add the gdb tool.

Access to Tools – Options on the Qt Creator menu bar (as shown in the figure below):

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608353042-43e13eba-eac7-4556-b510-d53a46885701.png)

Click Kits-->Debuggers-->Add.![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355270-291368f9-8a2f-4a81-9a2f-52bb86f70a03.png)

Configuration of "GDB" as the Name, configuration of "/usr/bin/gdb-multiarch" as the Path, and click on "Apply"

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355355-a5207c3f-01d0-4eda-bd8b-66a64549b5a6.png)

Configure devices.

Tools->options->Devices->Devices->Add

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355479-7144261a-1708-40df-a771-60a815a83db3.png)

Select "Generic Linux Device" and click on "Start Wizard".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355578-70eb973f-004e-49ca-8fdb-606f8cd7a743.png)

Input "Generic Linux Device", the IP address of the development board, and the SSH account and password of the development board, then click on "Next".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355670-ceaeafd2-e389-4e9b-b3ed-712b8db2c2a5.png)

Click "Finish".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608355791-cf482e90-c617-433d-a5d5-032e1a4eef27.png)The figure below indicates the normal connection between the Ubuntu virtual machine and the development board, then click on "Close"

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1787563244991-eea8280f-3323-493c-9a56-5c24915c195c.png)

Click "Apply".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356018-a495d37e-cc0a-4a35-9aad-a14da80d93b5.png)

Configure the Kit Suite.

Open the project file and select the Kit package you set up earlier.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356141-b58d37f8-7809-4cb8-8a1d-266de547928b.png)

Open the project.

Click "File" and select "Open File or Project".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356241-ef88fe23-902e-4215-80af-7fa9902faa84.png)

Select the watchdog. pro project and click "Open".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356338-599f127c-e067-4b4b-bdad-a674d41c14f9.png)

Select the 35XX Linux suite to configure the project.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608354760-ef6e40e4-0e41-41b6-8a0a-6ba096966fd6.png)

**Note: To compile and debug this demo remotely, please make modifications to the source code.**

Edit the "watchdog.pro" file and add the following content:

```bash
target.path = /var/run
QMAKE_CXXFLAGS += -g
QMAKE_CXXFLAGS_DEBUG += -O0
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356440-08cec970-b1bf-40a1-83dd-0aa29c88fcd8.png)

Comment out the following content in buildout.pri:

```bash
#appdata.files = $$PWD/../resource/*
```

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356534-1d402475-5ca2-4434-a849-3b8cb186508d.png)

Save the file.

Configuration of the project:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356633-8171bb73-6bbb-4ba7-a8df-949e894a2ef3.png)

Compiling and run the application:

Click on the "hammer icon" to compile the project, then click on the "triangle icon" to run the program on the development board.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356740-5fb76bc8-ed16-4072-b823-a20d65fad446.png)

The corresponding Qt demo will be displayed after the operation on the development board.  
![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608356896-fff6e69e-7070-4ba5-a88e-72c6b1b30d56.png)

```bash
root@OK3576-UP5-buildroot:~# cd /var/run
root@OK3576-UP5-buildroot:/var/run# ls
fltest_qt_watchdog									# The virtual machine copies the executable file to the specified path via SSH
```

Close the application:

Click on the cross icon to close the application.

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357022-3d89f224-ea79-4b79-8b7e-ddb49489a611.png)

Click on "Force Quit".

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357155-98ce642a-9d51-45bf-babb-1c84ff007b55.png)

**Remote Debugging the Application:**

Set a breakpoint at the line number on the left side of the codes:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357273-4d847391-38e4-47c6-a17e-a2294f4014be.png)

Click on the triangle-and-bug icon to start code debugging:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357413-6aa95106-9eed-4527-b1e5-7ecd222ce8ca.png)

Click on the icon below to proceed with breakpoint debugging:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357592-3960e005-e7b3-48a7-b4c3-04babda7f750.png)

Click on the button below to stop debugging:

![](https://cdn.nlark.com/yuque/0/2026/png/12459611/1789608357724-9707e04c-4cec-461c-9618-d292fd0349e6.png)