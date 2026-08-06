# Linux 5.10.98\_User’s Compilation Manual Initial Version\_V1.0

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly understand the compilation process and become familiar with the compilation methods for Forlinx Embedded products. Before running applications on the development board, they must be cross-compiled on a Linux operating system. By following the methods outlined in this manual and engaging in hands-on exercises, you will be able to compile their own software code.

It will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are three installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware Requirements: A minimum of 16GB of RAM is recommended. This will allow you to allocate 8GB or more to the virtual machine while still performing other tasks in Windows. Using less RAM may negatively impact the performance of Windows.

There are total 4 chapters:

+ Chapter 1. covers the installation of VMware, specifically version VMware® Workstation 15 Pro 15.5.6. VMware must be installed before setting up the Ubuntu development environment;
+ Chapter 2. explains how to load the Ubuntu development environment provided by Feilin. The environment is based on 64-bit Ubuntu 20.04;
+ Chapter 3. outlines the process of setting up a new Ubuntu development environment. This section takes the 64-bit Ubuntu 20.04 as an example to describe in detail the process of setting up an Ubuntu development environment. Due to the varied configurations of individual computers, unexpected issues may arise during the setup process. Therefore, it is recommended that beginners directly use our pre-configured development environment for more efficient subsequent work.
+ Chapter 4. explains how to compile source code for the development board.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|:-----------|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@OK-x-UP4：Development board serial login credentials  <br/>forlinx@OK-x-UP4：Development board network login credentials  <br/>forlinx@ubuntu：Development environment Ubuntu login credentials  <br/>You can reference this information to identify the operational environment for each function. |


Example: After packaging the file system, use the ls command to view the generated files.

```bash
forlinx@ubuntu:~/work$ ls                              //List the files in this directory
OK-x-UP4-source  OK-x-UP4-source.tar.bz2
```

+ forlinx@ubuntu: The username is forlinx, and the hostname is ubuntu, indicating that the operation is being performed in the development environment on Ubuntu.
+ //: Explanation of the command. No need to enter this when typing the command.

## Application Scope

This hardware manual applies to Forlinx OK3562J-UP4 development board (version 1.3 and above) and FET3562J-UP4 SoM (version 1.1 and above Linux5.10.198).

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|:-----------|
| 11/06/2026 | <font style="color:rgb(38, 38, 38);">V1.0</font><font style="color:rgb(38, 38, 38);">   </font>| User’s Compilation Manual Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 15 Pro v15.5.6 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at [VMware Global Website (English)](https://www.vmware.com/)to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169299281_de348f8a_1c6b_48b0_8f4c_925f8e300cd0.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the setup file to enter the installation wizard.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169299518_51ef1955_87b5_4d9c_ab23_6722043e1d57.png)

Click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169299827_654af716_3d46_4609_97ff_054e119673bb.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169300116_b1714f26_bb47_4caf_9cc4_1eee167c5d18.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169300391_9f8d9ab4_de5b_47d0_ad38_1174177cefb9.png)

Check, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169300593_5bb0cd62_818b_4c31_90a9_c9dfffd00ea9.png)

Check “Add shortcuts” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169300791_4ae43a4d_510b_4f3e_b97a_b2bc70ee5a04.png)

Click “Install.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169301003_be55046d_f49a_43ec_ba8a_b5374c82dfb6.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720169301226_f10b8e88_6191_4ecf_ba68_8d4b33278162.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The provided development environment has a regular user account: forlinx, with password: forlinx. The superuser account is: root, with password: root;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package will include an MD5 checksum file. After downloading the package, you should perform an MD5 checksum verification on the compressed file using the MD5 checksum tool for Windows, which you can find at User Data\\Software Tools\\3-Tools\\md5sums-1.2.zip. 

Generate the checksum and compare it with the value in the checksum file. If the checksums match, the downloaded file is valid. If they do not match, the file may be corrupted, and you should download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730769768995_94fc9c91_8bff_4506_a222_04aa291b0abc.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730769837121_d47df3f6_5507_4694_8dba_ba7ea0804ebe.png)

Once the extraction is complete, you will obtain a folder named “3568 Development Environment.”

**Note: The Ubuntu 22.04 development environment for models 3562 and 3568 is the same.**

The file "3568.vmx" in the "3568 Development Environment" folder is the virtual machine file that needs to be opened.

Open the installed virtual machine software.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1720168594803_02ccb0b5_49ce_405e_a982_05e8e19f6759.png)

Navigate to the directory where the "3568.vmx" file was extracted, and double-click to open the startup file.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730770320441_2cf924a2_dca8_4310_9c90_9c74ed10cf7b.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730770392113_46f60b0b_8a73_4880_bb2c_316b0b3f8e49.png)

The provided development environment is set to automatically log in to the account forlinx on startup by default.

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

This chapter mainly explains the setup process of the Ubuntu system and the installation of Qt Creator. If QT is not used, the installation of Qt Creator can be ignored.

### 3.1 Ubuntu System Setup

The installed Ubuntu version is 22.04, and all the introductions and development in this manual were carried out on Ubuntu 22.04. First, go to the Ubuntu official website to obtain the Ubuntu 22.04 64-bit image. The download address is: [https://releases.ubuntu.com/22.04/](https://releases.ubuntu.com/22.04/)

Download the “ubuntu-22.04.6-desktop-amd64.iso” version (the specific version to download can be based on your own needs; here we use version 22.04.6 as an example).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771033843_6436990d_2bc1_4115_a050_efa4c98863f7.png)

#### 3.1.1 Creating an Ubuntu Virtual Machine

**Step** **1:** Open the VMware software and click “Create a New Virtual Machine”. On the following screen, check “Custom (advanced)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771838296_01415610_068d_4ba7_9267_09ed32dae4b8.png)

**Step** **2:** Select the compatibility for the corresponding VMware version (you can view the version under Help -> About VMware Workstation). After confirming, click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771870249_10b484a8_ba3a_40fa_95f6_2c02a0fd3d3e.png)

Choose “Installer disc image file (iso)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771137989_9e9d0e8c_e015_469c_8a26_8317cb9b1097.png)

Enter the full name, username, and password, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771173023_0cf7d4a4_8d05_413b_a619_ec4a22d1c7a2.png)

Enter the virtual machine name and configure the installation location, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771243922_1e572b96_3307_4ecd_9195_6a43af7510ff.png)

Configure the number of cores, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771288477_46b84221_b5ba_47d9_8290_44ea8d9b24d9.png)

Configure at least 8GB of memory and select “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771323581_06a409ed_9b7e_4556_b756_13ec10650f37.png)

Set the network type, use the default NAT networking, and click “Next”. Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771350370_a2b56a01_a884_4708_9a99_cfaa88269611.png)

Use the recommended I/O controller and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771380620_e67fd0b6_0d04_4311_abdf_3950d7457943.png)

Use the recommended disk type and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771409290_939fac95_52fb_4b3b_928f_190a882b601a.png)

Use the default option, “Create a new virtual disk”, and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771437575_1e6469fa_2570_4cf5_9c1d_cf248ece01e2.png)

Allocate a disk size of 200GB and choose “Split virtual disk into multiple files”, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771537119_3de308b8_38d8_4371_959f_9b41d9bc9c92.png)

Use the default settings and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771561349_40a86987_5983_4b89_83f4_a244e936e55e.png)

Click “Finish”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771580713_c82bd0e0_f186_4d03_b6cb_10fb405bec2d.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771631305_f669a381_7597_4f46_bba4_bedddb71a310.png)

At this point, the virtual machine creation is complete.

Afterward, click “Power on this virtual machine” to start installing the image. Please wait patiently.

With the above, the Ubuntu system installation is complete.

#### 3.1.2 Ubuntu Basic Configuration

**3.1.2.1 VMware Tools Installation**

VMware Tools should be installed automatically after creating the virtual machine. If it is not successful, install it according to the following steps.

Without this tool installed, you cannot use copy and paste or drag and drop files between the Windows host and the virtual machine.

First, click “Virtual Machine” on the VMware navigation bar, then click “Install VMware Tools” in the dropdown menu.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771929996_f0425a36_2ebd_4581_9e35_d1b39be33837.png)

After completion, enter Ubuntu. A VMware Tools CD will appear on the desktop; click to enter it.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771946460_47f93c8a_72e6_4e35_b501_dfae1b28a58b.png)

After entering, you will see a compressed file VMware Tools-10.3.10-12406962. tar. gz (different virtual machine versions may be different), and copy the file to the home directory (that is, the directory of the home personal user name).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771960270_018814b3_60d9_4ae2_bd26_807f2493d1cd.png)

Press \[Ctrl+Alt+T] to bring up the terminal command interface and enter the command to extract it:

```bash
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771978710_e52e76d9_b4bf_4cff_a694_c5cab42ba60e.png)

After extraction completes, a folder named “vmware-tools-distrib” will appear.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730771995073_fec96427_d5e7_4ed1_bb8d_80f83a344e73.png)

Return to the terminal and type: cd vmware-tools-distrib to enter the directory.

Then type: sudo ./vmware-install.pl and press Enter. Enter your password and the installation will begin. When prompted, type yes; otherwise, just press Enter to install the default settings.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772008675_66b60f70_4165_495d_8133_fe57d8f45842.png)

After VMware Tools installation is complete, file copy-paste between Windows and Ubuntu will be enabled.

**3.1.2.2 Virtual Machine Full-Screen Display**

If the virtual machine cannot display in full screen, you can click on “View”, select “Auto-Adjust Size”, and then click “Autofit Guest” to resolve the full-screen issue.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772026300_6bc60f00_11ba_4a9c_b734_f1bc161d9cc3.png)

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772043441_6f816146_3616_4a85_941a_9acdc4bee9db.png)

**3.1.2.3 Virtual Machine Sleep Settings**

Additionally, the default sleep setting is 5 minutes. If you do not want the system to go to sleep, go to Settings -> Power -> Blank Screen and set it to “Never”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772063231_ce05c24d_3dd9_4165_abc7_ed83fc88b9f4.png)

#### 3.1.3 Virtual Machine Swapfile Configuration

When creating the virtual machine, 8GB of memory was allocated. If 8GB of memory is insufficient during compilation, you need to modify the size of the swapfile.

```bash
forlinx@ubuntu:~$ sudo swapoff /swapfile
forlinx@ubuntu:~$ sudo dd if=/dev/zero of=/swapfile bs=1M count=16384
forlinx@ubuntu:~$ sudo mkswap /swapfile
forlinx@ubuntu:~$ sudo swapon /swapfile
```

#### 3.1.4 Virtual Machine Network Configuration

**3.1.4.1 NAT Connection Mode**

By default, after the virtual machine installation is complete, the network connection mode is set to NAT, as shown in the figure below, sharing an IP address with the host machine. This setting does not need to be changed when installing dependency packages, compiling code, etc.

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device connects and communicates with the host’s network card for internet access. This is the most commonly used method for the virtual machine to access the external network.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772087100_ab80fe3b_3415_4524_9f09_a94042347a41.png)

**3.1.4.2 Bridged Connection Mode**

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772113434_77bab373_f8a3_4f12_9d58_4a721f1be151.png)

### 3.2 Installing Toolkits

To install the necessary toolkits required for compiling, please execute the following commands. Ensure the network is functioning normally and can access the external internet before installation:

```bash
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot make automake autoconf libtool libssl-dev bc dosfstools mtools parted iproute2 kmod libyaml-dev device-tree-compiler python-pip flex bison build-essential u-boot-tools libncurses-dev lib32stdc++6 lib32z1 libc6:i386 e2fsprogs scons libgmp-dev libmpc-dev
```

### 3.3 Qt Creator Installation

**Path:-Software Data \\ 3-Tools \\ qt-opensource-linux-x64-5.12.9.run**

Copy qt-opensource-linux-x64-5.12.9.run to any directory under the home directory of the current user, and execute:

```bash
forlinx@ubuntu:~$ chmod 777 qt-opensource-linux-x64-5.12.9.run
forlinx@ubuntu:~$ ./qt-opensource-linux-x64-5.12.9.run
```

The following interface will pop up. Click "Next" to enter the next step:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772140571_5f45f676_0d34_4581_bcd9_f5e399a90912.png)

Click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772156283_7396a37b_7226_485b_9e1c_4b2fc23924d6.png)

In the following screen, click "Browse …" Select the installation path of Qtcreator, and then click "Next" to enter the next step:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772180821_2960413d_d39b_478e_935d_3103f658c810.png)

Click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772195855_8eba793b_65dc_437c_893b_1c33081c6af3.png)

Agree to the license agreement and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772216086_955943c0_44a3_453e_b835_4698822d527f.png)

Click “Install”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772235873_7cd2765b_583b_4f36_a14a_ab778190ca3f.png)

After the installation is completed, the following interface will be displayed. Uncheck the option "Launch Qt Creator" "and click " Finish" to complete the installation of Qt Creator:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772263266_0a2eadd1_d398_42fb_b6c6_07b945b4c997.png)

Navigate to the actual Qt Creator installation directory: /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/

```bash
forlinx@ubuntu:~$ cd /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/
```

Start Qt Creator:

```bash
forlinx@ubuntu: ~/Qt5.12.9/Tools/QtCreator/bin $ sudo ./qtcreator
[sudo] password for forlinx: forlinx                    //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772283225_2f5e83b9_9ca5_42f8_aafe_33f8401db616.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

### 3.4 Qt Compilation Environment Configuration

**Software Resources/3-Tools/aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz**

The libraries and cross-compilation tools required to compile Qt programs are located in aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz. The configuration steps are as follows:

- Extract the compilation environment archive


Because the qmake tool depends on a local path, this toolkit must be placed in a fixed path: /opt/

Extract the toolkit.

```bash
forlinx@ubuntu:~$ sudo tar -xf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz -C /opt/
forlinx@ubuntu:~$ cd /opt/aarch64-buildroot-linux-gnu_sdk-buildroot
forlinx@ubuntu: /opt/aarch64-buildroot-linux-gnu_sdk-buildroot $ sudo ./relocate-sdk.sh
```

- Qt Creator Environment Configuration


First, open the Qt Creator software.

Execute:

Navigate to the actual Qt Creator installation directory: /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/

```bash
forlinx@ubuntu:~$ cd /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/
```

Start Qt Creator:

```bash
forlinx@ubuntu: ~/Qt5.12.9/Tools/QtCreator/bin $ sudo ./qtcreator
[sudo] password for forlinx: forlinx        //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

Start the Qt Creator program and click Tools- > option:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772317485_7b380dc7_35cb_4479_af70_51055512ed01.png)

Enter the Options interface, click "Kits" on the left, then click the "Compilers" tab on the top of the middle, and click "Add-> GCC-> C + +" on the right, as shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213045020_cdaa4a45_9caa_4d12_8791_69eb1d902462.png)

Locate “aarch64-linux-g++” in the /opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it, click “Open”, and change the “Name”.

Add the GCC compiler using the same method, and click "Add->GCC->C" on the right, as shown in the image:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213045113_ab9b95fa_b708_4205_99df_d9f6a0a40ea2.png)

Locate “aarch64-linux-gcc” in the /opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it, click “Open”, and change the Name.

Click the “Qt Versions” tab, then click “Add”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1730772447003_b50771bb_f0a0_4e39_9970_f535526eaf75.png)

Locate “qmake” in the /opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it and click “Open”. Once added, the screen will appear as shown below; click “Apply”.

Click the “Kits” tab, click “Add” on the right to add a new Kit. Modify the contents according to the figure below and click “Apply”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213045209_81fdbbd3_9e49_4ae9_8cf5_60333e4cb862.png)

## 4\. Compilation of Related Code

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-Toolchain: aarch64-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-5.10.198
+ Qt Version Ported to Development Board: qt5.15.10

#### 4.1.2 Copying the Source Code

 Program source code: Software Documents\\2-Images and Source Code\\1-Source Code\\OK-x-UP4.tar.bz2

Create Working Directory:

```bash
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work	//Create the working directory in order
```

Copy the source code files OK3562-UP4-source.tar.bz2.\* from the user’s home directory to the /home/forlinx/work directory on the virtual machine.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work														//Switch to the working directory
forlinx@ubuntu:~/work$ cat OK-x-UP4-source.tar.bz2.* > OK-x-UP4-source.tar.bz2
forlinx@ubuntu:~/work$ tar -xvf OK-x-UP4-source.tar.bz2				//Extract the compressed file to its default location
```

Wait for the copy process to complete after running the command.

### 4.2 Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code.**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation.**

#### 4.2.1 Full Compilation Test

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OK-x-UP4-source
```

The following operations need to be performed in the source code directory. Compilation method:

```bash
forlinx@ubuntu: ~/work/OK-x-UP4-source$./build.sh all
```

After executing, there will be options to input, as shown in the picture. After entering "1", press Enter to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213046758_8d5c785b_ad35_4db4_8c5c_fb9713f6336c.png)

**Note: If the prompt mentioned above does not appear, the configuration is complete and you can proceed to compile as normal; this is not a mandatory step.**

After a successful compilation, the corresponding image files will be generated in the rockdev folder.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213046876_6384d111_8025_4fe1_ac74_e183283564dc.png)

Note: update.img is a pre-packaged file intended for full flashing via OTG or a TF card; the other files are for step-by-step flashing.

#### 4.2.2 Individual Compilation Test

Before performing a separate compilation, a full compilation must be done in the kernel source directory.

```bash
#SDK Configuration
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh defconfig:OK-x-UP4-linux_defconfig       

# Generate uboot.img; the output path is u-boot/uboot.img
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh uboot

# Generate boot.img; the output path is kernel/boot.img
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh kernel 

# Generate rootfs.img; the output path is buildroot/output/ok3562_up4/image/rootfs.ext2
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh rootfs

# Use the uboot.img, boot.img and rootfs.ext2 files in the above path to generate update.img; the path is rockdev/update.img
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh updateimg
```

After a separate compilation, the kernel in the update.img file is not updated. Please flash the corresponding files step by step, or regenerate the update.img.

To configure the kernel using a graphical interface, run the following command:

```bash
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh kconfig
```

Once you have completed the configuration in the pop-up graphical interface, save and exit; the new configuration will automatically generate a new OK-x-UP4\_defconfig file.

#### 4.2.3 Cleaning up Generated Files

Note: Uboot is not open-source, only the image is available.

```bash
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh clean:kernel    		#Clear kernel
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh clean:rootfs   		#Clear rootfs
forlinx@ubuntu: ~/work/OK-x-UP4-source$ ./build.sh clean:recovery  		#Clear recovery
```

### 4.3 Use of Image Files

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The \*.img file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.4 Application Compilation and Operation

The SDK test programs are by default compiled using Buildroot, but can also be compiled directly. The following explains the direct compilation method.

#### 4.4.1 Command-Line Applications Compilation and Operation

This section uses the watchdog test programme, which is copied to the /home/forlinx/work directory by default.

- Use cd to go to /home/forlinx/work;


```bash
forlinx@ubuntu:~$ cd work/OK-x-UP4-source/app/forlinx/forlinx_up4_cmd/fltest_watchdog
```

- Add the cross-compiler path and use make to cross-compile;


```bash
forlinx@ubuntu: ~/work/OK-x-UP4-source/app/forlinx/forlinx_up4_cmd/fltest_watchdog$ export PATH=/opt/aarch64-buildroot-linux-gnu_sdk-buildroot/usr/bin:$PATH
forlinx@ubuntu: ~/work/OK-x-UP4-source/app/forlinx/forlinx_up4_cmd/fltest_watchdog$ make
aarch64-linux-gcc fltest_watchdog.c -o fltest_watchdog
fltest_watchdog make finish!!!
```

Use the file command to check the generated file information.

```bash
forlinx@ubuntu:~/work/OK-x-UP4-source/app/forlinx/forlinx_up4_cmd/fltest_watchdog$ file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB shared object, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that a 64-bit ARM file is generated.

- Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. 

Take the TF card as an example, copy it to the development board and run the test.

```bash
root@OK-x-UP4:/# cp /run/media/mmcblk1p1/fltest_watchdog /
root@OK-x-UP4:/# /fltest_watchdog
Usage: fltest_watchdog [-t <timeout>] [-c] [-d/-e]
  -t --timeout   set timeout (default 10), range ( 1 - 16)
  -c --continue  enable watchdog with feed dogs
  -d --disable   disable watchdog, conflict with enable
  -e --enable    enable watchdog, conflict with disable
```

- Refer to the "Watchdog Test" section in the user manual for details.


#### 4.4.2 Qt Application Compilation and Operation

Open Qt Creator in the development environment (please open it according to the actual path). Click on File → Open File or Project in Qt Creator, and a pop-up window will appear. Select ~/forlinx\_qt\_demo/fltest\_qt\_watchdog/fltest\_qt\_watchdog.pro.

Choose the OK3562-UP4 cross-compilation toolchain, then click Configure Project. For detailed cross-compilation toolchain configuration, refer to “3.4 Qt Compilation Environment Configuration”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213046962_f008b482_96ea_4f00_b4d9_e8658e2f2321.png)

Click the Project option and uncheck Shadow build on the left.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213047054_452c451f_754d_4f80_9a50_c65b49071b6a.png)

Next, click Build → Build All Projects from the menu bar to start compilation.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213047133_be14ff0e_c233_4982_b991_85e6edbc4c37.png)

Once the progress bar at the bottom right (Build) completes, the compilation is finished. At this point, a newly generated binary file named fltest\_qt\_watchdog can be found in the directory ~/forlinx\_qt\_demo/fltest\_qt\_watchdog.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok3562j-up4/OK3562J-UP4_Linux5_10_198_User_Compilation_Manual/1773213047235_5ea87231_66c9_47d5_ad30_7aab4fd09680.png)

Copy the compiled fltest\_qt\_watchdog to the development board to run the test.