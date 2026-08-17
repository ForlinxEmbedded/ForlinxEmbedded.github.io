# Linux 6.1.141\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to help you quickly understand the compilation process and become the compilation methods. Applications need to be cross-compiled on an Ubuntu host before they can run on the development board. By following the methods in this compilation manual and through hands-on practice, you can successfully compile your own software code.

The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware requirements: It is recommended to have at least 16 GB of RAM or more. This ensures that after allocating memory for the virtual machine (it is recommended to allocate over 10 GB for the virtual machine), you can still perform other operations on Windows without significant lag.

There are total 4 chapters:

- Chapter 1. covers the installation of virtual machine software, briefly introducing the download and installation of VMware;
- Chapter 2. covers loading the Ubuntu system Forlinx provide;
- Chapter 3. covers setting up and configuring the Ubuntu system, installing necessary tools, and addressing common issues with the development environment;
- Chapter 4. covers materials required for compiling the product’s source code, compilation methods, configuration of the Qt compilation environment, and methods for compiling the programme.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@forlinx: Development board login account information;<br />forlinx@ubuntu: Ubuntu account information in the development environment. <br />You can use this information to determine the operating environment for functional operations. |

Example: When copying the source code, view the source code file through the ls command:

```bash
forlinx@ubuntu:~$ ls /mnt/hgfs/share/                                //View files in a shared directory
OKT527-linux-sdk.tar.bz2
```

Forlinx @ Ubuntu: The user name is forlinx and the host name is Ubuntu, which means that the forlinx user is used to operate on the development environment Ubuntu.

// : Explanation for the operation ls /run/media, no need to input.

## Application Scope

This software manual applies to Forlinx OK527-UP4 and OK527N-UP4 development boards (version 1.3 and above), and the FET527-UP4 and FET527N-UP4 SoMs (version 1.2 and above) running the Linux 5.15.147 operating system. In the manual, the product is referred to collectively as FET527-UP4 or OK527-UP4.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 02/03/2026 | V1.0| User’s Compilation Manual Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 15 Pro v15.5.6 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079121244_b1781bd8_d4da_4103_bf22_b85ea7b85834.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the setup file to enter the installation wizard.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079142871_4a15056b_c774_4cdf_8285_2bb081323c93.png)

Click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079159587_f1bc696a_cc53_4b7d_8df1_9f0660cc88c5.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079174511_f70aee38_d83e_4d75_b875_bbc0968ef617.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079184114_1cdf6c73_4a92_4713_9595_47a8c36c164c.png)

Check, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079198669_5c9c9b4c_9a51_41ef_9bcb_c157ed98e036.png)

Check “Add shortcuts” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079209843_fb94bed8_c4c3_40e6_badd_a9336c61b81d.png)

Click “Install.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079221521_57505963_3f30_4034_ab79_3febbe1b8959.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1723079233778_a6d19fda_9c5c_40cf_853b_c76a62f3f3b6.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

- **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
- **The provided development environment has a regular user account: forlinx, with password: forlinx. The superuser account is: root, with password: root.**

You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment materials include an MD5 checksum file. After downloading the materials, please first perform an MD5 checksum on the development environment archive (located in 3-Tools\\md5sums-1.2.zip) to verify if the checksum matches the one in the checksum file. If they match, the download is successful; if not, the file may be corrupted and needs to be re-downloaded.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948365948_5822150f_e7ea_483d_8743_ea64e4ab08fd.png)

Select OK527-VM15.5.6-ubuntu20.04, right-click, and extract it to the current folder or your desired directory:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948388548_5aa3ea5e_8d97_4cab_98ec_f9689e6e2f7f.png)

After extraction, you will obtain the development environment folder OK527-VM15.5.6-ubuntu20.04.

The file OK527-VM15.5.6-ubuntu20.04.vmx inside the OK527-VM15.5.6-ubuntu20.04 folder is the file to be opened by the virtual machine.

Open the installed virtual machine software.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948433154_61bdd056_eea7_412e_bb47_2ca27326221e.png)

Select the directory where the newly extracted OK527-VM15.5.6-ubuntu20.04 virtual machine file is located, and double-click the startup file to open it.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948455858_24fdc770_800f_4c2b_8a57_4541461a3d0c.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948476623_d85ceac2_9abb_47c0_bf44_8b57fe5189bc.png)

The provided development environment is set to automatically log in to the account forlinx on startup by default.

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

This chapter mainly explains the setup process of the Ubuntu system and the installation of Qt Creator. If QT is not used, the installation of Qt Creator can be ignored.

### 3.1 Ubuntu System Setup

The Ubuntu version to install is 20.04. The descriptions and development in this document are all based on Ubuntu 20.04. First, go to the Ubuntu official website to obtain the Ubuntu 20.04 64-bit image. The download address is: http://releases.ubuntu.com/20.04/

Download the “ubuntu-20.04.6-desktop-amd64.iso” version (the specific version to download can be based on your own needs; here we use version 20.04.6 as an example).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948846066_ec162f18_7e2d_4487_ac4d_e38cdc5ed1fa.png)

#### 3.1.1 Creating an Ubuntu Virtual Machine

**Step 1**: Open the VMware software and click “Create a New Virtual Machine”. On the following screen, check “Custom (advanced)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948893126_e3590cfb_7439_4651_924f_a2d10374da9f.png)

**Step 2**: Select the compatibility for the corresponding VMware version (you can view the version under Help -> About VMware Workstation). After confirming, click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948932428_9511048d_e2d7_4f7a_8395_0821cef9cb79.png)

Choose “Installer disc image file (iso)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948970851_e5167620_f7bc_4451_9278_0138cdc7719c.png)

Enter the full name, username, and password, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718948988345_6bc05b9f_e9f7_4f69_9958_6601680f096b.png)

Enter the virtual machine name and configure the installation location, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949004063_573e7818_db79_447f_87be_7300ada8564f.png)

Configure the number of cores, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949028219_34f18366_f692_4a22_b57b_54d17b6c25ad.png)

Configure at least 8GB of memory and select “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949106542_abdb4dd3_94ff_4717_aae8_49ff1552ddc5.png)

Set the network type, use the default NAT networking, and click “Next”. Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949123407_6494b5a1_1357_440c_95d5_99782ec611f7.png)

Use the recommended I/O controller and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949139079_ff464474_be29_4f7a_8bd4_947d20c6330c.png)

Use the recommended disk type and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949153183_98ee5751_ae4f_4587_94b0_471fc1a3ae2a.png)

Use the default option, “Create a new virtual disk”, and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949166693_8782adbb_56d4_4831_bb1c_31b4156f3740.png)

Allocate a disk size of 80GB and choose “Split virtual disk into multiple files”, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949181244_213bc0ba_c5c3_4af7_b2bf_e376f015b5c7.png)

Use the default settings and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949199722_746f65a3_37d5_4f62_947b_a5569544f780.png)

Click “Finish”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949214671_bc902643_637a_486d_9ac4_61a49f72171d.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949231445_fcd76a84_fea5_451c_ad59_800cd108292e.png)

At this point, the virtual machine creation is complete.

Afterward, click “Power on this virtual machine” to start installing the image. Please wait patiently.

With the above, the Ubuntu system installation is complete.

#### 3.1.2 Basic Configuration of Ubuntu

**3.1.2.1 VMware Tools Installation**

VMware Tools should be installed automatically after creating the virtual machine. If it is not successful, install it according to the following steps.

Without this tool, copy-paste and file drag-and-drop between the Windows host and the virtual machine will not work.

First, click “Virtual Machine” on the VMware navigation bar, then click “Install VMware Tools” in the dropdown menu.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949273811_f3e92114_4eea_4b65_862c_dbb8304364f9.png)

After completion, enter Ubuntu. A VMware Tools CD will appear on the desktop; click to enter it.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949359798_ba856cf3_7059_41d2_96ed_a599e55d10fc.png)

After entering, you will see a compressed file VMware Tools-10.3.10-12406962. tar. gz (different virtual machine versions may be different), and copy the file to the home directory (that is, the directory of the home personal user name).

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949385494_91210da6_b0d4_4d43_a4b7_60b589eaf39f.png)

Press \[Ctrl+Alt+T] to bring up the terminal command interface and enter the command to extract it:

```bash
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949403392_ae4f707b_f5e8_49ae_ad9a_70858568cbe2.png)

After extraction completes, a folder named “vmware-tools-distrib” will appear.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949418780_e8c547ab_60de_4c4c_a5bb_9f73fff7b700.png)

Return to the terminal and enter:

```bash
cd vmware-tools-distrib
```

to navigate into that directory.

Then enter:

```bash
sudo ./vmware-install.pl
```

Press Enter, enter your password, and the installation will begin. When prompted, enter “yes”; for other prompts, press Enter to accept the default installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949432279_4216de1f_7cf9_4c48_9d11_262568195cdb.png)

After VMware Tools installation is complete, file copy-paste between Windows and Ubuntu will be enabled.

**3.1.2.2 Virtual Machine Full-Screen Display**

If the virtual machine cannot display in full screen, you can click on “View”, select “Auto-Adjust Size”, and then click “Autofit Guest” to resolve the full-screen issue.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949460433_abac797c_fb21_47c2_90a5_951390afdaee.png)

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949472087_a7f61941_4de2_49c9_acc8_4e93358132b0.png)

**3.1.2.3 Virtual Machine Sleep Settings**

Additionally, the default sleep setting is 5 minutes. If you do not want the system to go to sleep, go to Settings -> Power -> Blank Screen and set it to “Never”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949527824_2c751878_01cd_4e46_ad0f_9af78af1ccaf.png)

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

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949560787_ecabd604_18e6_4ed4_8e99_14b964deb1c9.png)

**3.1.4.2 Bridged Connection Mode**

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949577128_36c6f2e1_80d0_4fa6_8fad_8e99fe54be14.png)

### 3.2 Installing Toolkits

To install the necessary toolkits required for compiling T527N, please execute the following commands. Ensure the network is functioning normally and can access the external internet before installation:

```bash
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot make automake \
autoconf libtool libssl-dev bc dosfstools mtools parted iproute2 kmod \
libyaml-dev device-tree-compiler python flex bison build-essential \
u-boot-tools libncurses-dev lib32stdc++6 lib32z1 libc6:i386 \
nodejs gyp ninja-build  bison flex gperf ruby 
```

### 3.3 Qt Creator Installation

Path: 02-User Files\\01-Software Files\\04-Tools\\qt-opensource-linux-x64-5.12.9.run

Copy qt-opensource-linux-x64-5.12.9.run to any directory under the home directory of the current user, and execute:

```bash
forlinx@ubuntu:~$ chmod 777 qt-opensource-linux-x64-5.12.9.run
forlinx@ubuntu:~$ ./qt-opensource-linux-x64-5.12.9.run
```

The following interface will pop up. Click "Next" to enter the next step:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949644183_8f03f041_918e_488f_b607_c28206d44892.png)

Click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949656133_5a89edca_94ba_4209_913a_f43bf8b6d99c.png)

In the following screen, click "Browse …" Select the installation path of Qtcreator, and then click "Next" to enter the next step:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949673168_caaa5ebb_5e95_44fc_b70f_cfae68a38a59.png)

Click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949687856_8c7d69c6_1815_4e7b_ad12_c64a75c87cbf.png)

Agree to the license agreement and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949701721_f1d0408a_296a_4e43_b693_d158f2c84508.png)

Click “Install”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949715223_eea00453_23fc_48c2_81e2_47f755e7a935.png)

After the installation is completed, the following interface will be displayed. Uncheck the option "Launch Qt Creator" "and click " Finish" to complete the installation of Qt Creator:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949729984_de2da63e_1e6d_4d0c_bdba_c87880e5c665.png)

Navigate to the actual Qt Creator installation directory: /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/

```bash
forlinx@ubuntu:~$ cd /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/
```

Start Qt Creator:

```bash
forlinx@ubuntu:~/Qt5.12.9/Tools/QtCreator/bin $ sudo./qtcreator
[sudo] password for forlinx: forlinx                         //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949849986_73e1f541_6fdf_461c_b19b_f0b884b4a91b.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

### 3.4 Configuring the Qt Compilation Environment

Path: 02-User Data\\01-Software Data\\04-Tools\\aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz

The libraries and cross-compilation tools required to compile Qt programs are located in aarch64-buildroot-linux-gnu\_sdk-buildroot.tar.gz. The configuration steps are as follows:

- Extract the compilation environment archive


Because the qmake tool depends on a local path, this toolkit must be placed in a fixed path: /opt/

Extract the toolkit.

```bash
forlinx@ubuntu:~$ sudo tar -xf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.gz -C /opt/
forlinx@ubuntu:~$ cd /opt/aarch64-buildroot-linux-gnu_sdk-buildroot
forlinx@ubuntu:/opt/aarch64-buildroot-linux-gnu_sdk-buildroot $ sudo ./relocate-sdk.sh
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
forlinx@ubuntu:~/Qt5.12.9/Tools/QtCreator/bin $ sudo./qtcreator
[sudo] password for forlinx: forlinx                         //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

Start the Qt Creator program and click Tools- > option:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949891654_e1cd171c_54a1_4fab_8ca5_7de0fc03a81b.png)

Enter the Options interface, click "Kits" on the left, then click the "Compilers" tab on the top of the middle, and click "Add-> GCC-> C + +" on the right, as shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949906693_7d70ad42_e602_48fd_9b66_ba34c623c2b5.png)

Locate “aarch64-linux-g++” in the /opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it, click “Open”, and change the “Name”

Add the GCC compiler using the same method, and click "Add->GCC->C" on the right, as shown in the image:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949927007_0955d7d7_9ade_437d_8805_adcee501f531.png)

Locate “aarch64-none-linux-gnu-gcc” in the opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it, click “Open”, and change the Name.

Click the “Qt Versions” tab, then click “Add”:

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949939127_fb02b8cc_2b2b_4eff_b65e_a1810f3958c6.png)

Locate “qmake” in the /opt/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin directory, select it and click “Open”. Once added, the screen will appear as shown below; click “Apply”.

Click the “Kits” tab, click “Add” on the right to add a new Kit. Modify the contents according to the figure below and click “Apply”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718949959747_8303d04c_8ca8_4850_8baf_a0f6ce192f32.png)

### 3.5 VMware Error Resolution

Error 1: Unable to connect to MKS: Too many socket connection attempts; giving up.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950065962_b1270a23_8379_465e_8ebb_074c27535b1b.png)

Solution:

My Computer -> Right-click -> Manage -> Services and Applications -> Services: Start all VMware-related services.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950090751_c1daea0f_13a9_4afe_b694_89126fbb76a2.png)

After the services start successfully, restart the virtual machine; or suspend the virtual machine first, then after the services start, resume the suspended virtual machine.

Error 2: Internal Error

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950103214_a7871f85_aa0b_41e9_a60d_1f1ad1d485b5.png)

Solution: Refer to Solution 1

Error 3: Unable to install the VMware Authorization Service (VMAuthdService)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950118552_6d413624_2cac_4adf_870d_859727b1d73f.png)

Solution:

win+R

Enter services.msc

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950135095_dcf3ba1f_5104_40fd_a040_cec6bed9d893.png)

Then find the service and start it because this service is used for authorization and authentication to start and access virtual machines.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950195578_21d1856a_834a_4efe_8807_3d190d83ebdf.png)

The WMI service must be started first.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950209258_c350c7e6_c2cb_49e6_a5b5_501d59205fd5.png)

Error 4: Failed to install the hcmon driver

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950243863_dc11008b_5c1e_4f28_90bb_265e2b879287.png)

Solution: Delete C:\\Windows\\System32\\drivers\\hcmon.sys, then reinstall.

Error 5: Intel VT-x is disabled

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950313530_3343a477_e16a_4f01_b661_072c7cd3620f.png)

Solution:

- Enter the BIOS interface during startup (F2 or F12);

- Configuration -> Intel Virtual Technology -> Change from Disabled to Enabled -> Save settings and exit to restart;

- Reopen VMware and start the virtual machine.


If it still doesn’t work, turn off the firewall and restart the virtual machine. (May vary depending on the machine)

Error 6: The virtual machine appears to be in use… Take Ownership (T)

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950333783_0d094cf5_34e2_401e_b8cb_600a9a4006e0.png)

Solution:

- Shut down the virtual machine;

- Navigate to the virtual machine’s storage directory and delete all \*.lck files (lck stands for lock files);

- Open Windows Task Manager and kill all VMware processes.


![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950354133_3b24662e_114f_4a86_b27e_ed85982cf247.png)

- Restart the virtual machine.


Error 7: Failed to lock the file

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950365534_20b50f59_a57a_4be7_acf4_667c16512c5e.png)

Solution:

- Navigate to the virtual machine’s storage directory;

- Delete .vmem.lck, .vmdk.lck, \*.vmx.lck files;

- Restart the virtual machine; it should now start normally.


Error 8: The virtual machine could not be started because there was not enough memory available on the host.

Solution:

The host does not have enough memory to meet the maximum requirements of the virtual machine image. Increase the virtual machine’s memory and restart it.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950502280_738cd080_0319_4274_b239_59c91a70a889.png)

## 4\. Linux Compilation

**Note: Please do not skip this paragraph.**

**The development environment refers to the software and hardware platforms required by developers during the development process. The development environment is not fixed to a specific configuration. In the previous sections, detailed a method for setting up an embedded Linux development environment. If you are already very familiar with embedded development, you can set up the environment according to your own needs. If you encounter any usage issues, you can search for related information on major Linux forums and websites in China to resolve them. If you encounter any problems, you can search for relevant information on some major Linux forums and websites to find solutions. The operations mentioned in this chapter are performed on the development environment provided. They have been tested. If you are not very familiar with embedded development, it is recommended to use the environment provided.**
**General user is: forlinx, password: forlinx, and the superuser is: root, password: root.**

### 4.1 Preparation Before Compilation

#### 4.1.1 Version Description

Virtualization Software: VMware 15.1.0

Recommended Development OS: Ubuntu 20.04 64-bit

Cross-compiler: gcc-arm-10.3-2021.07-x86\_64-aarch64-none-linux-gnu (kernel)

```bash
aarch64-buildroot-linux-gnu_sdk-buildroot (Application)
```

Bootloader Version: u-boot-2018.07

Kernel Version: linux-5.15.147

Development Board QT Version: qt5.15.8

#### 4.1.2 Source Code Copying and Extraction

Kernel source code path: User Data - Software Data\\03-Image and Source Code\\02-Source Code\\OKT527-linux-sdk1.3.tar.bz2..

Source Code Copy:

The OKT527-linux-sdk1.3.tar.bz2 package is comprised of the followings: toolchain, user SDK, Linux kernel, filesystem, source code for test programs, and various tools.

```bash
forlinx@ubuntu:~$ mkdir /home/forlinx/work                              //Create working directory
```

Copy the source code package to the virtual machine’s /home/forlinx/work directory.

There are two primary methods to transfer the source code package: you can either drag and drop it directly from your computer to a folder on the virtual machine’s desktop, or utilize a shared folder for command-line copying. This guide focuses on the latter method.

A common method for file transfer between Ubuntu and the Windows host is to set up a shared folder via VMware Tools. This mounts a Windows directory within Ubuntu, providing an efficient channel for sharing files.

Setup method: Click on the “Virtual Machine” and select “Settings.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950783159_aa38c988_c012_4406_8082_6a9a28411890.png)

Click on “Options,” enable “Shared Folders,” set the shared directory on the Windows host, and click “OK.”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950804162_7efbad0f_793c_4665_ba22_9b194e4fd765.png)

Once the virtual machine’s file sharing is set up, place the source code package OKT527-linux-sdk1.3.tar.bz2 into the Windows host’s shared folder. Here, it is named share.

The shared folder is mounted in Ubuntu at /mnt/hgfs/share. View the files in the mounted directory.

```bash
forlinx@ubuntu:~$ ls /mnt/hgfs/share/                                //View files in the shared folder
OKT527-linux-sdk1.3.tar.bz2
```

Copy the source code from the shared folder to Ubuntu’s /home/forlinx/work directory and perform an MD5 checksum:

```bash
forlinx@ubuntu:~$ cp /mnt/hgfs/share/OKT527-linux-sdk1.3.tar.bz2.* /home/forlinx/work/       
forlinx@ubuntu:~$ cd /home/forlinx/work
forlinx@ubuntu:~/work$ md5sum OKT527-linux-sdk1.3.tar.bz2.*
```

If the returned MD5 checksum matches the one provided in the documentation, you can proceed to extract the source code:

```bash
forlinx@ubuntu:~/work$ cat OKT527-linux-sdk1.3.tar.bz2.0* | tar jxv
```

#### 4.1.3 Common Source Code File Paths

OK527\_UP4 platform: the software configuration file paths (starting from the OKT527-linux-sdk1.3 directory in the SDK source code) are as follows:

| **File Type**| **Path**|
|----------|----------|
| Kernel configuration| device/config/chips/t527/configs/OK527\_UP4/linux-5.15/bsp\_defconfig|
| Device tree file:| kernel/linux-5.15/bsp/configs/linux-5.15/sun55iw3p1.dtsi|
| | kernel/linux-5.15/arch/arm64/boot/dts/allwinner/OKT527-UP4-Common.dtsi|
| | kernel/linux-5.15/arch/arm64/boot/dts/allwinner/OKT527-UP4-Linux.dts|
| sysconfig.fex| device/config/chips/t527/configs/OK527\_UP4/sys\_config.fex|
| System File| out/t527/OK527\_UP4/buildroot/buildroot/target|
| U-Boot environment variable configuration file:| device/config/chips/t527/configs/OK527\_UP4/buildroot/env.cfg   If you need to modify or add default environment variables, you can edit this file.|

OK527\_UP4 platform: the path to the test programme (starting from the OKT527-linux-sdk1.3 directory in the SDK source code) is as follows

platform/forlinx/forlinx\_cmd\_demo/     Source code directory for the command-line test programme

platform/forlinx/forlinx\_qt\_demo/       Qt test programme source code directory

| | | Source code path:|
|----------|----------|----------|
| qt-demo| 4G| platform/forlinx/forlinx\_qt\_demo/4g|
| | ADC| platform/forlinx/forlinx\_qt\_demo/adc|
| | Backlight| platform/forlinx/forlinx\_qt\_demo/backlight|
| | SQL| platform/forlinx/forlinx\_qt\_demo/books|
| | Browser| platform/forlinx/forlinx\_qt\_demo/browser|
| | Camera test| platform/forlinx/forlinx\_qt\_demo/camera|
| | Recording| platform/forlinx/forlinx\_qt\_demo/fltest\_qt\_audiorecorder|
| | Audio Playback| platform/forlinx/forlinx\_qt\_demo/fltest\_qt\_musicplayer|
| | Key test| platform/forlinx/forlinx\_qt\_demo/keypad|
| | Desktop| platform/forlinx/forlinx\_qt\_demo/matrix-browser|
| | Network Configuration| platform/forlinx/forlinx\_qt\_demo/network|
| | ping| platform/forlinx/forlinx\_qt\_demo/ping\_test|
| | | platform/forlinx/forlinx\_qt\_demo/qopenglwidget|
| | rtc| platform/forlinx/forlinx\_qt\_demo/rtc|
| | Spi| platform/forlinx/forlinx\_qt\_demo/spitest|
| | Serial Port Testing| platform/forlinx/forlinx\_qt\_demo/terminal|
| | Watchdog| platform/forlinx/forlinx\_qt\_demo/watchdog|
| | WiFi| platform/forlinx/forlinx\_qt\_demo/wifi|
| cmd-demo| GPADC| platform/forlinx/forlinx\_cmd\_demo/fltest\_adc|
| | Backlight| platform/forlinx/forlinx\_cmd\_demo/fltest\_backlight|
| | Key test| platform/forlinx/forlinx\_cmd\_demo/fltest\_keytest|
| | SPI test| platform/forlinx/forlinx\_cmd\_demo/fltest\_spidev\_test|
| | UART| platform/forlinx/forlinx\_cmd\_demo/fltest\_uarttest|
| | USB camera| platform/forlinx/forlinx\_cmd\_demo/fltest\_usbcam|
| | Watchdog| platform/forlinx/forlinx\_cmd\_demo/fltest\_watchdog|
| | ec20 4G| platform/forlinx/forlinx\_cmd\_demo/quectelCM|
| | wifi| platform/forlinx/overlay\_rootfs/usr/bin/fltest\_wifi.sh|
| | Wifi-ap| platform/forlinx/overlay\_rootfs/usr/bin/fltest\_hostap.sh|
| | gpio| platform/forlinx/overlay\_rootfs/usr/bin/fltest\_gpio.sh|
| | Desktop| platform/forlinx/overlay\_rootfs/etc/init.d/S42matrix-browser|

### 4.2 Source Code Compilation

#### 4.2.1 Full Compilation

Full compilation refers to the unified compilation of source code, including kernel source code, library files, applications, file system packaging, etc.

Step 1: Select Configuration:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT527-linux-sdk1.3     //Navigate to the source code directory
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh config  //Execute the configuration command
```

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh config
========ACTION List: mk_config ;========
options : 
All available board:
   0. OK527_UP4
Choice [OK527_UP4]: 
Setup BSP files
.

…

```

Run the compilation script to perform a full compilation:

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh
```

After the source code compilation is complete, you need to generate the image. This involves packaging various compiled files and configuration files.

Execute the packaging command to generate the image file:

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh pack

…

Dragon execute image.cfg SUCCESS !
----------image is at----------

655M    ~/work/OKT527-linux-sdk1.3/out/t527_linux_OK527_UP4_uart0.img

pack finish
```

#### 4.2.2 Compiling the Kernel/Device Tree Separately

Compiling the kernel separately only compiles the kernel source code and affects the drivers. It is suitable for compiling when only the kernel needs to be modified.

After selecting the configuration as described above:

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT527-linux-sdk1.3
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh kernel                    //Execute the command to compile the kernel

…

Copy modules to target ...
15985 blocks
28830 blocks
bootimg_build
Copy boot.img to output directory ...

sun55iw3p1 compile all(Kernel+modules+boot.img) successful

…

forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh pack
```

#### 4.2.3 Compiling Test Programs Separately

When only the test programs have been modified, you can compile only the test programs to reduce compilation time.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT527-linux-sdk1.3
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ source .buildconfig              //Configuration before compilation
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./platform/forlinx/build.sh
```

#### 4.2.4 Compiling U-Boot Separately

To compile U-Boot separately, use the following command:

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh brandy
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh pack
```

#### 4.2.5 Individual Compilation Filesystem

The file system is not compiled during the full compilation process; it must be modified and compiled separately. Navigate to the file system directory to compile the software and make configuration changes.

The compilation instructions are as follows: use the compilation scripts in the buildroot-202205 directory to compile the project.

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3/buildroot/buildroot-202205$ ./build.sh
```

If you wish to amend the configuration, please do so as follows. Once you have made the changes, compile using the command above.

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3/buildroot/buildroot-202205$ make OKT527-UP4-Linux_defconfig ARCH=arm64					//Read the current configuration
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3/buildroot/buildroot-202205$ make menuconfig	//Access the graphics configuration interface to modify the settings
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3/buildroot/buildroot-202205$ cp ../../out/t527/OK527_UP4/buildroot/buildroot/.config configs/OKT527-UP4-Linux_defconfig		//Save the changes as the default configuration
```

#### 4.2.6 Cleaning the OKT527-linux-sdk

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT527-linux-sdk
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh clean                            //执行清除命令
```

#### 4.2.7 Changing the Boot Logo

Replace the boot logo file at: device/config/chips/t527/boot-resource/boot-resource/bootlogo.bmp

The image must be in BMP format with a resolution of 720×480 and the filename must be “bootlogo.bmp”.

Repackage the image.

```bash
forlinx@ubuntu:~/work/OKT527-linux-sdk1.3$ ./build.sh pack
```

### 4.3 Qt Configuration and Usage

The OKT527-linux-sdk1.3.tar.bz2 provided by Forlinx includes the complete Qt4.7.0 development environment. Our development environment already has Qt Creator5.12.9 installed, but you can also set it up manually as described earlier.

#### 4.3.1 OKT527-linux-sdk Installation

Please refer to Chapter 3 for SDK installation and full compilation.

#### 4.3.2 Qt Creator Environment Configuration

Please refer to Chapter 3 for installation and configuration.

#### 4.3.3 Qt Creator Development Example

Open Qt Creator software.

```bash
forlinx@ubuntu:~$ cd /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ sudo ./qtcreator
```

Launch the Qt Creator program and enter the Qt Creator interface. Click "File" -> "New File or Project" to create a new project. Select "Application (Qt)" -> "Qt Widgets Application", and then click "Choose" in the lower right corner.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950862335_48648f4d_29e4_48b2_8bec_96a15102c9ca.png)

In the following interface, set the project name to “helloworld”. Set the installation path to /home/forlinx, then click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950877270_ef232c40_5d0d_40bf_8e2e_4d37f996f4d0.png)

Select “qmake” and click “Next” to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950886144_54b37456_de62_48c7_b7cc_b2df962488b2.png)

In the following interface, you can modify the Class name and Base class as needed. Here, we'll use the default settings and then click "Next":

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950897755_f70676a4_65e7_4835_9c32_b977524dc66d.png)

Choose the file to be translated. If you require multilingual support, you can select the language. Here, use the default and click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950910018_0542302c_e7a7_4851_884b_53bd0b717a00.png)

In the following interface, select the previously added “OK527” as the kit for the current project, then click “Next”

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950921104_6b1d4af7_5ea5_4eaa_95c6_9402a26bca74.png)

In the following interface, click “Finish” to complete the project creation.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950932773_3bf58552_1a8c_4ee2_a872_fc9ea2d124ae.png)

Once the project is created, the following window will appear:

Project created successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950947708_0c81ca78_c489_44cd_aff2_714c433cbc67.png)

After writing the program, click the hammer icon in the bottom left corner to perform cross-compilation.

Copy the compiled executable to the development board for application testing.

#### 4.3.4 Qt Creator Common Issues and Solutions

Open the QtCreator integrated development environment from the command line or shortcut. After starting, you will see an interface similar to the one below.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950971164_9e266495_0250_4eb7_8f3b_dfb8feadda73.png)

The design button, project button, and build debug area on the left will only become available after a project is opened or created.

Below Qt Creator are the navigation tools and output panel, which are used when writing project code and running and debugging programs. The output panel includes seven sections: Issues (issues encountered during project build), Search Results (searching project file contents), Application Output (displaying running and debugging information), Compilation Output (compiling and linking commands and their output information), QML/JS Console (QML command window), Summary Information (project information summary), and Version Control (version control system).

If you click the hammer icon in the bottom left corner and find that there is no compilation information, the solution is as follows:

The default output panel selects 1 (Issues). If you need to view compilation information, you need to select 4 in the output panel (compile output).

Build and debug.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718950991143_dd0cec48_825b_49c9_a6a3_fe7388b5959b.png)

If the Run button in Qt Creator is greyed out, the solution is as follows:

This problem occurs because there was an issue with configuring the C, C++, and Qt versions in the kits package. It could be a path problem or an incomplete compilation. Changing the editor language should resolve the issue.

![Image](https://www.forlinx.net/docs_assets/images/platform/p2p/ok527n-up4/OK527-UP4_Linux5_15_147_User_Compilation_Manual/1718951003967_0782cdbd_fbb6_4ac2_9db9_f96e8c8b37f1.png)

Check that the cross-compiler path configuration in the box is correct.

For specific instructions on configuring the path, please refer to section “4.3.2, Qt Creator Environment Configuration”.