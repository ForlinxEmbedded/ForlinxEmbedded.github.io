# Android11.0\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Application Scope

<font style="color:rgb(38,38,38);background-color:rgb(255,255,255);">This software manual is applicable to the OKMX8MPQ-C platform Android11.0 operating system of Forlinx.</font>

## Revision History

|    Date    | Version |                       Revision History                       |
| :--------: | :-----: | :----------------------------------------------------------: |
| 16/08/2022 |  V1.0   | OKMX8MPQ-C-Android 11.0 User’s Compilation Manual Initial Version. |

## Overview

This manual is designed to enable you to quickly understand the compilation process of the products and familiarize yourself with the compilation methods of Forlinx products. The application needs to be cross-compiled on an ubuntu host before it can run on the development board. By following the methods provided in the compilation manual and performing practical operations, you will be able to successfully compile your own software code.

The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.

Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine.

Hardware Requirements: It is recommended to have at least<font style="color:rgb(0,0,0);">32GB</font><font style="color:rgb(0,0,0);"> memory or above.It allows for allocating a sufficient memory to the virtual machine (recommended to allocate</font><font style="color:rgb(0,0,0);">16GB</font><font style="color:rgb(0,0,0);">or above), while still leaving enough resources for other operations on</font><font style="color:rgb(0,0,0);">Windows</font><font style="color:rgb(0,0,0);">. Insufficient memory allocation may result in slower performance on</font><font style="color:rgb(0,0,0);">Windows.</font>

The manual is mainly divided into four chapters:

+ Chapter 1. mainly covers the installation of VMware and Ubuntu, using VMware Workstation 15 Pro 15.1.0 and 64-bit Ubuntu 18.04 respectively. If you are not very familiar with virtual machines and Ubuntu, it is recommended to use the same versions as ours;
+ Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu18.04;
+ Chapter 3. provides methods for setting up a new Ubuntu development environment. This section uses 64-bit Ubuntu 18.04 as an example to describe the creation of Ubuntu. Due to different computer configurations, there may be unexpected problems in the building process. It is recommended that beginners directly use the environment we have built;
+ Chapter 4. mainly covers the methods for compiling development board-related source code, including installing cross-compilation tools and compiling kernel source code;
+ Chapter 5. is mainly about the development of Android application, which introduces the installation and use of Android studio;
+ Chapter 6. focuses on the two ways to burn the compiled image into the development board, which is also described in the software manual.

A description of some of the symbols and formats associated with this manual:

| **Format**| **<font style="color:rgb(0,0,0);">Meaning</font>**|
|:----------:|----------|
| <font style="color:rgb(0,0,255);background-color:rgb(215,215,215);">Blue font on gray background</font>| Refers to commands entered at the command line (Manual input required). |
| <font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">Black font on gray background</font>| Serial port output message after entering a command |
| **<font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">Bold black on gray background</font>**| Key information in the serial port output message |
| <font style="color:rgb(0,0,0);">//</font>| Interpretation of input instructions or output information |
| <font style="color:rgb(0,0,0);">Username</font><font style="color:rgb(0,0,0);">@</font><font style="color:rgb(0,0,0);">Hostname</font>| root@OK8MP: Account information for serial port login and network login of the development board;<br/>forlinx@ubuntu: Account information of the Ubuntu development environment;<br/>C:\Users\Administrator>: The path of the currently used console in the cmd of Windows.<br/>You can determine the environment for functional operations based on this information. |

root@okmx8mm: The user name is root and the host name is OK-MX8MPX-C, indicating that the root user is used for operations on the development board;

//：Explanation of the instruction, no input required;

<font style="color:rgb(0,0,255);background-color:rgb(127,127,127);"> </font><font style="color:rgb(0,0,255);background-color:rgb(127,127,127);">lls /run/media</font><font style="color:rgb(0,0,0);">:</font> Blue text on a gray background indicates relevant commands that need to be manually input;

<font style="color:rgb(0,0,0);background-color:rgb(127,127,127);">mmcblk2p1  </font>**<font style="color:rgb(0,0,0);background-color:rgb(127,127,127);">sda1 </font><font style="color:rgb(0,0,0);">：</font>**The black font with gray background is the output information after the command is input, and the bold font is the key information, which indicates the mounting directory of the TF card.

## 1\. Vmware Installation

Virtual Machine refers to a complete computer system with complete hardware system functions simulated by software and running in a completely isolated environment. Virtual machines can simulate other kinds of operating systems; it is convenient for us to manage and use different development environments and operating systems in the development process.

Common virtual machine software includes VMware (VMWare ACE), Virtual Boxand Virtual PC, all of which can virtualize multiple computers on Windows systems. Our company adopts VMware. If you are not familiar with the virtual machine software, it is recommended to use the same virtual machine software as ours.

### 1.1 VMware Software Download and Purchase

Go to the VMware website https://www.vmware.com/cn.html to download Workstation Pro and get the product key. VMware is a paid software that requires purchasing, or you can choose to use a trial version.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457886444_caabbc0a_32a0_432c_8e04_701808285926.png)

After the download is complete, double-click the installation file to start the installation program.

### 1.2 VMware Installation

Step 1: Double-click the startup program to enter the installation wizard, and click "Next";

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457886752_0714bdf8_527c_436f_883c_fb460f482bdc.png)

Step 2: Check "I accept the terms in the license agreement (A)" and click "Next";

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457886964_945fb9b5_8ff9_47d3_ad3f_3dce429c2bfd.png)

Step 3: You can modify the installation location, install it to the partition where your computer installs the software, and click "Next";

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457887168_4835d7f3_0100_40e4_81f7_ad8802214ace.png)

Step 4: Decide whether to check the two check boxes and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457887452_0408fcb9_235b_4983_8137_1f7391744838.png)

Step 5: Check the option to add the shortcuts and click "Next";

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457887685_67675977_0219_493a_a07e_6286710ce9d0.png)

Step 6: Click "Install";

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457887915_2487dfac_515d_449c_9a79_275789e2fd0b.png)

Step 7: Wait for the installation to complete;

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457888123_9c16fba2_02df_41bb_9363_bc491c4b8370.png)

Step 8: After the installation is completed, you can click "Finish" for trial. If you need to use it for a long time, please buy it from the official and fill in the license. Go to the license activation page and enter the purchased license key.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457888338_18d58329_f21c_4622_af9a_ef0e906089d6.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457888571_a2fd7d63_354b_473c_b9e9_a4bed592194a.png)

You can also click “Skip”. Once done, open the VMware software, click on “Help” in the status at the top, and enter the license key in the pop-up window.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457888814_4c74ee69_d262_4a70_ad9c_668f6cf0f740.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457889090_24adf987_58ff_4d59_8939_0f2d5e383cfc.png)

### 1.3 VMware Network Connection

#### 1.3.1 NAT Connection Method

By default, after the virtual machine is installed, the network connection method is set to NAT, which shares the host machine's IP address. This configuration does not need to be changed when performing tasks like installing dependencies or compiling code.

In the virtual machine, when the VMware virtual network card is set to NAT mode, the network in the Ubuntu environment can be set to dynamic IP. In this mode, the virtual NAT device is connected to the host network card to communicate with the Internet. This is the most commonly used way for our virtual machine to access the external network.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457889424_246fd1fa_e18c_4d6b_993a_6542890d5094.png)

#### 1.3.2 Connections for Bridge

##### 1.3.2.1 Vmware Settings

If you are using TFTP, the SFTP virtual machine's network connection is “Bridge”.

Step 1：Click on the "Settings" option under the VM menu, and if it is a server, then you will need to configure the settings. This will open the virtual machine settings dialog box, as shown in the following image；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457889737_2373d64f_c315_4731_9437_ef88246ca419.png)

Step 2：Connect the mode and set it；

Step 3：After entering the virtual machine system, set the IP and other parameters of the virtual machine according to the "Set Network Parameters".

##### 1.3.2.2 Ubuntu Network Settings

The following describes the steps to set the network in the virtual machine:

Step 1: Start Ubuntu, the root user logs in the system, click the drop-down button at the top right of the desktop, and the following options will pop up；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457889978_9ef27645_1215_420a_a652_1b00e53f3ccb.png)

Step 2: Click "Network" to enter the network settings；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457890185_e31dc24c_e874_4c9d_812b_4df9142490ec.png)

Step 3: Click IPv4, select “Manual”, enter your IP address, subnet mask, gateway, and DNS, and click “Apply” to save. The network settings are successful；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457890400_93f1813a_39e3_4327_8917_2b8287af8fc2.png)

Step 4: Restart network services, close and reopen Wired；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457890596_c728aad1_4a4b_45d3_ae5d_b5f388449c2a.png)

Step 5: Test the IP of the host is 192.168.0.200. Use the virtual machine to ping the host:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457890800_220e3e98_8114_4812_8947_15825dda1f04.png)

As shown in the figure, the network setting is successful. Once you've set this up, you're ready to set up the server you need.

## 2\. Importing the Forlinx Development Environment

**Note:**

+ **It is recommended for beginners to directly use the pre-built virtual machine environment provided by Forlinx, which already includes installed cross-compiler and Qt environment. After understanding this chapter, you can jump directly to Chapter 4. Compilation;**
+ **If you need to manually set up the development environment, you can directly skip this chapter and refer to “Chapter 3. Building the Development Environment Manually”;**
+ **The development environment provided is: forlinx (username), forlinx (password).**

Forlinx provides an installed Ubuntu development environment, which you can directly open and use in Vmware without installing additional software.

First, download the development environment provided by Forlinx. There is MD5 verification file in the development environment data. After downloading the development environment data, first perform MD5 verification on the compressed package of the development environment (MD5 verification can be performed by selecting MD5 online tools on the network, or by downloading MD5 verification tools, which can be selected according to the actual situation). Check whether the verification code is consistent with the verification code in the verification file. If they are consistent, the downloaded file is normal; otherwise, the file may be damaged and needs to be downloaded again.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457835929_698898eb_10af_4834_bb5e_31fa459e01f4.png)

Select the zip and right-click to extract it to OKMX8MP-Android11.0-VM 15\_1\_0-ubuntu18\_04.

After unzipping, the OK8MP-Android11.0-VM 15\_1\_0-ubuntu18\_04文件夹中的OK8MP Android11.0 folder is the file to be opened by the virtual machine.

Open the installed virtual machine.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457836154_bd008ab1_ca4f_4833_8542_23b87ee1ad88.png)

Navigate to the directory where the recently extracted OKMX8MPQ-C-Linux5.4.70-VM15.1.0-ubuntu18.04 virtual machine file is located, and double-click on the startup file to open it：

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457836351_03144a7a_c1a7_400b_bdfe_e718cfd45fb5.png)

After loading, click to start the virtual machine to run. Enter the system's interface.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457836576_1d5d5c76_8ca5_4c01_a477_b667f5459abd.png)

The provided development environment account is: forlinx and the password is: forlinx, fill in the password and select Sign in to log in.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457836821_89ebd518_5dec_438b_8dd3_b016e780d09e.png)

So far, the development environment provided by Forlinx has been successfully entered, and you can put the source code in the user information folder into the development environment to start compiling and other operations（**See 4. Linux Compilation)**.

## 3\. Building the Development Environment Manually

Ubuntu is a Linux operating system distribution primarily focused on desktop applications. Ubuntu has many advantages and offers its own strengths compared to other Linux distributions. First of all, the installation system is very simple, only very few settings are needed, which can be completely comparable to the Windows desktop system. Secondly, the graphical interface is very user-friendly, imitating the commonly used shortcut keys under XP; in addition, when installing and upgrading programs, the system can install the dependent file packages by itself through the network, so it is no longer necessary to worry about the dependencies of the Linux system. Considering everyone's usage habits and learning needs, it would be a good choice to use Ubuntu Linux.

There are numerous versions of Linux desktop systems, and currently, all the Linux experiments and source code in this manual are performed on the Ubuntu 18.04 system. With other versions of Linux desktop systems, problems related to the gcc compiler and library files may occur. If you encounter similar issues, you can seek advice and inquire on the official forums of the Linux distribution vendor. If you are not familiar with Linux, the method introduced by Forlinx is highly recommended.

Why do we need to install these things? Because a Linux environment is needed to do development work. The Kernel source code, Qt applications, uboot and so on can’t be compiled under Windows. These tasks need to be carried out in a Linux environment. Given that most users are accustomed to the Windows environment, VMware software is used to provide Ubuntu virtual machines. Of course, you can also install Linux on your computer or server for development.

Next, the process of building the virtual machine will be introduced.

**Note:**

+ **Beginners are not recommended to set up a system on their own. It is recommended to use an existing virtual machine environment. If you do not need to set up the environment, you can skip this section;**
+ **The Ubuntu version requires the use of 18.04. Using other versions may lead to the loss of some libraries in the Android use phase. If this phenomenon occurs, we need to study the migration of libraries;**
+ **Recommended computer configuration Processor: Core (TM) i7 Memory: 32G or more; virtual machine hard disk 300G or more, memory 16G or more.**

### 3.1 Ubuntu System Virtual Machine Installation

The version of Ubuntu chosen to install is 18.04, and the introduction and development in this manual are all carried out on Ubuntu 18.04. First, go to the Ubuntu official website to get the Ubuntu 18.04 64 bit image. The download address is https://releases.ubuntu.com/18.04/.

Download "Ubuntu-18.04.6-desktop-amd64.iso" (you can download the version that you actually need; this is just an example with 18.04.6).

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457853470_337f97f3_60f7_4485_8dc1_093fd10cc82b.png)

#### 3.1.1 Vmware Ubuntu Image Installation

If users want to learn to build their own virtual machines, they can choose to install new virtual machines. However, if you don't have a need for this, we recommend downloading the virtual machine we built to save time and avoid problems, as building a virtual machine is tedious and time-consuming.

Step 1: Open the VMware software and click on "Create New Virtual Machine". Enter the following interface, check "Customize (Advanced)" and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457853690_2264ae43_83c9_4976_9c22_d058c16694d2.png)

Step 2: Select the compatibility of the corresponding VMware version. The version can be viewed in Help-> About VMware Workstation. Click "Next" after confirmation:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457853957_bcea17d6_5dc3_41c1_ad66_849f693f3baa.png)

Select “Install program from disc image file”, then click “Next”；

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457854180_dba3fc6a_a781_45a2_81d7_241ea8f8de34.png)

Enter full name, user name and password and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457854407_cd22bbf2_0548_4353_b4e2_7e292cab7680.png)

Enter the virtual machine name and configuration installation location, and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457854611_b4b096de_b00d_438d_a6ee_290bf2e69db0.png)

To configure the number of cores, click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457854811_aa60ca81_063b_4244_9d96_59357977fc74.png)

Configure appropriate memory space and select "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457855021_b6f412bc_2dbb_447b_9220_06d7367005d7.png)

Set the network type, use the default NAT form for networking, and click "Next". Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457855229_6d89dfbf_789f_4706_bb85_bbb1109e5336.png)

Using the recommended I/O controller, click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457855491_f17d6b19_9d04_42c7_afc7_ea00f44d3993.png)

Using the recommended disk type, click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457855778_e4182a80_42d6_411b_b806_c099c50a825d.png)

Using the default options, create a new virtual disk and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457856016_9edb5973_4bde_41e3_add7_0cea9cab0d04.png)

Allocate a disk size of 300G and divide the virtual disk into multiple files, and click "Next":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457856257_a7a6f99d_4761_409c_b977_5c47a171d12a.png)

Click "Next" by default:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457856505_03a6eeee_22ea_4fbb_bd77_9b816c1866f1.png)

Click "Finish":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457856683_cc7bf2d1_d559_4f3d_805e_92afbfcc054b.png)

After that, the virtual machine starts to install the image and wait patiently.

#### 3.1.2 Solutions to VMware Error Reporting

**Error 1**: Unable to connect to MKS: Too many socket connection attempts; giving up.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457856910_a60f35cf_0499_42b4_bbbc_3a376756e9c9.png)

Solution: Right click on my computer to manage services and application services, and turn on all services related to VMware. After the service has started successfully, restart the virtual machine; or hang the virtual machine first, wait for it to start, and then continue to run the hung virtual machine.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457857162_f125b850_99b0_4d55_a3d4_a11de899a9ba.png)

**Error 2**: Internal error.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457857428_ca7dbb92_d841_44d4_9e05_724fff4c690f.png)

Solution: Refer to error 1.

**Error 3**: Unable to install service VMware Authorization Service (VMAuthdService):

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457857698_93c40334_c407_4962_b4e8_e5de2b0c4e6a.png)

Solution:

    win+R
    
    Input services.msc

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457857917_f2c3e9f7_88a1_4c4b_9528_b219233a5287.png)

Then find the service and start it up as an authorization and authentication service for starting and accessing virtual machines.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457858161_3212bdcd_d46e_4101_9a2a_141f4f4fcff4.png)

WMI must start first.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457858526_1731341b_5bfe_409b_b0f3_24ddcbca711c.png)

**Error 4**: Failed to install the hcmon driver

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457858843_d2834905_e67d_487e_abec_17951aabf1e5.png)

Solution: Delete C:\\Windows\\System32\\drivers\\hcmon.sys, then install again.

**Error 5**: Intel VT-x is disabled

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457859025_060be046_34d6_4d47_9f82_755fcd9f5de0.png)

Solution:

1. Enter the BIOS interface (F2 or F12) when booting;
2. Configuration -- > intel virtual technology -- > Change disabled to enabled -- > Save the settings, exit and restart;
3. Reopen VMware and start the virtual machine. 

If that doesn't work, just turn the firewall off and reopen the VM. (varies by machine)

Error 6: The virtual machine appears to be in use... Acquiring Ownership (T)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457859248_50d33827_944c_4d6f_ac10_d54f0d3a4e81.png)

Solution:

1. Shut down the virtual machine;
2. Enter the storage directory of the virtual machine and delete the *.lck file. The lck represents the locked file;
3. Open the Windows Task Manager and kill the VMware process. 

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457859484_42173e81_ebd4_47d9_847c_411b82678371.png)

4. Restart the virtual machine.

Error 7: Failed to lock file

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457859688_cdb3acb0_9bc6_4453_b4b0_bfa8bda34a66.png)

Solution:

1. Enter the storage directory of the virtual machine;
2. Delete. Vmem. Lck. Vmdk. Lck, *. Vmx. Lck;
3. Reopen the virtual machine to enter the virtual machine normally. 

Error 8：The virtual machine could not be started because there was not enough memory available on the host.

Solution:

The virtual machine does not have enough memory to run the image's maximum requirements； increase the virtual machine's memory and reboot the virtual machine

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457859960_8e61a4d9_48a3_49c5_b283_d13fba4a381a.png)

### 3.2 Ubuntu Common Software Installation

#### 3.2.1 VScode

Click the icon similar to a package on the left side of the desktop to see some tools. We can also search for the tools we want. For example, we download a VScode tool, which is very convenient for our daily coding.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457860186_3ac4c6a2_3b58_4cff_8f67_1936c677e217.png)

Please search for the tool we need, click in to view details, click install to download, wait for the download to complete automatic installation, and then click "Launch" to run it.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457860483_efa6ff74_9c57_42bd_9646_1141459b7af3.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457860764_4f2ffcb1_afa5_44a9_ba1b_4e5fcaaf1c2c.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457861053_0f74f7a7_0f1e_4797_8531_ca18e03e1c53.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457861267_6ec9c245_4290_48a0_b221_d98827dd1546.png)

## 4\. Android Compilation

**Versions :**

+ Development environment OS: Ubuntu18.04 64-bit version
+ Cross tool chain: aarch64-poky-linux-gcc
+ Bootloader of Development board: u-boot 2020.04
+ Development board kernel: Android 11.0

### 4.1 Ubuntu 18.04 x 64bit and Compilation Environment Installation

It is recommended to use Ubuntu virtual machine to compile. We provide Android 11.0 code compiled and tested under Ubuntu 18.04 64-bit system. In addition, the company's network disk provides a virtual machine with library files and compilers as a reference.

**Note: Recommended computer configuration processor: Core (TM) i7 Memory: 32G; virtual machine hard disk 300G or more, memory 16G or more.**

### 4.2 Installation of the Library Needed to Compile Android

Android compilation requires the installation of several toolkits. Make sure that your computer or virtual machine can be connected to the Internet normally before the operation in this section. If the network is disconnected during the installation, please follow the following steps to install.

1. Install and compile the necessary packages for Android.

```plain
forlinx@ubuntu:~$ sudo add-apt-repository ppa:openjdk-r/ppa
[sudo] password for forlinx:                                      //Enter password forlinx, no display
 More info: https://launchpad.net/~openjdk-r/+archive/ubuntu/ppa
Press [ENTER] to continue or ctrl-c to cancel adding it
                                                     //Press enter to continue and ctrl C to exit
gpg: keyring `/tmp/tmpgkgmg6e4/secring.gpg' created
gpg: keyring `/tmp/tmpgkgmg6e4/pubring.gpg' created
gpg: requesting key 86F44E2A from hkp server keyserver.ubuntu.com
gpg: /tmp/tmpgkgmg6e4/trustdb.gpg: trustdb created
gpg: key 86F44E2A: public key "Launchpad OpenJDK builds (all archs)" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
OK
forlinx@ubuntu:~$ sudo apt-get update
Hit:1 http://ppa.launchpad.net/openjdk-r/ppa/ubuntu xenial InRelease           
Hit:2 http://us.archive.ubuntu.com/ubuntu xenial InRelease                     
Get:3 http://security.ubuntu.com/ubuntu xenial-security InRelease [99.8 kB]
Get:4 http://us.archive.ubuntu.com/ubuntu xenial-updates InRelease [99.8 kB]   
Get:5 http://us.archive.ubuntu.com/ubuntu xenial-backports InRelease [97.4 kB] 
Get:6 http://us.archive.ubuntu.com/ubuntu xenial-updates/main amd64 DEP-11 Metadata [327 kB]
Get:7 http://us.archive.ubuntu.com/ubuntu xenial-updates/universe amd64 DEP-11 Metadata [281 kB]
Get:8 http://us.archive.ubuntu.com/ubuntu xenial-updates/multiverse amd64 DEP-11 Metadata [5,964 B]
Get:9 http://us.archive.ubuntu.com/ubuntu xenial-backports/main amd64 DEP-11 Metadata [3,332 B]
Get:10 http://us.archive.ubuntu.com/ubuntu xenial-backports/universe amd64 DEP-11 Metadata [6,604 B]
Get:11 http://security.ubuntu.com/ubuntu xenial-security/main amd64 DEP-11 Metadata [93.9 kB]
Get:12 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 DEP-11 Metadata [130 kB]
Get:13 http://security.ubuntu.com/ubuntu xenial-security/multiverse amd64 DEP-11 Metadata [2,464 B]
Fetched 1,147 kB in 13s (83.3 kB/s)                                            
Reading package lists... Done
forlinx@ubuntu:~$ sudo apt-get install openjdk-8-jdk
uilding dependency tree       
Reading state information... Done
The following additional packages will be installed:
  ca-certificates-java fonts-dejavu-extra libatk-wrapper-java libatk-wrapper-java-jni libgif7 libice-dev libpthread-stubs0-dev libsm-dev libx11-dev libx11-doc libxau-dev
  libxcb1-dev libxdmcp-dev libxt-dev openjdk-8-jdk-headless openjdk-8-jre openjdk-8-jre-headless x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
Suggested packages:
  libice-doc libsm-doc libxcb-doc libxt-doc openjdk-8-demo openjdk-8-source visualvm fonts-ipafont-gothic fonts-ipafont-mincho fonts-wqy-microhei fonts-wqy-zenhei
The following NEW packages will be installed:
  ca-certificates-java fonts-dejavu-extra libatk-wrapper-java libatk-wrapper-java-jni libgif7 libice-dev libpthread-stubs0-dev libsm-dev libx11-dev libx11-doc libxau-dev
  libxcb1-dev libxdmcp-dev libxt-dev openjdk-8-jdk openjdk-8-jdk-headless openjdk-8-jre openjdk-8-jre-headless x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev
0 upgraded, 22 newly installed, 0 to remove and 6 not upgraded.
Need to get 46.4 MB of archives.
After this operation, 173 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
[…]
forlinx@ubuntu:~$ sudo apt-get install uuid uuid-dev zlib1g-dev liblz-dev liblzo2-2 liblzo2-dev lzop git-core curl u-boot-tools mtd-utils android-tools-fsutils device-tree-compiler gdisk m4 libz-dev bison flex make libssl-dev gcc-multilib
Reading package lists... Done
Building dependency tree       
Reading state information... Done
[…]
The following packages will be upgraded:
  libuuid1 uuid-dev
2 upgraded, 0 newly installed, 0 to remove and 87 not upgraded.
Need to get 41.0 kB of archives.
After this operation, 2,048 B of additional disk space will be used.
Do you want to continue? [Y/n]   Y
[…]
```

2. Switch to the JDK version

If you have previously installed another version of the JDK, you will need to switch versions.

To view the installed version:

```plain
forlinx@ubuntu:~$ update-java-alternatives -l
java-1.8.0-openjdk-amd64       1081       /usr/lib/jvm/java-1.8.0-openjdk-amd64
forlinx@ubuntu:~$ sudo update-alternatives --config java
There is only one alternative in link group java (providing /usr/bin/java): /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
Nothing to configure.  
```

For example, there is only one version of the above print information, which can be used directly. If there are multiple versions, enter the second command, select the option corresponding to java8, and press Enter to confirm.

### 4.3 Android System Compilation

#### 4.3.1 Preparation Before Compilation

1. Please confirm the size of the swap partition of the current system. If the swap partition is insufficient, the compilation of the Android source code will fail. The recommended size is 4G;

Confirm the swap partition：

```plain
forlinx@ubuntu:~$ cat /proc/swaps
Filename			Type		Size	        Used	  Priority
/dev/sda5           partition	    8387580	    0	      -2
```

For reference, here is a way to increase the size of a swap partition by creating a swap file:

```plain
forlinx@ubuntu:~$ sudo fallocate -l 4G /swapfile
[sudo] password for forlinx:                                     //Enter password forlinx,no display
```

If an error is reported during the above operation: fallocate: fallocate failed: Text file busy

The follow operations are perform:

```plain
forlinx@ubuntu:~$ sudo swapoff -a
forlinx@ubuntu:~$ sudo fallocate -l 4G /swapfile
```

Execute the following command to set the correct permissions for the swapfile file:

```plain
forlinx@ubuntu:~$ sudo chmod 600 /swapfile
```

Use the mkswap utility to set up a Linux SWAP zone on a file:

```plain
forlinx@ubuntu:~$ sudo mkswap /swapfile
mkswap: /swapfile: warning: wiping old swap signature.
Setting up swapspace version 1, size = 4 GiB (4294963200 bytes)
no label, UUID=a40195d9-42c0-441a-8d8e-900115b9ad3b
```

To activate a swap file:

```plain
forlinx@ubuntu:~$ sudo swapon /swapfile
```

To make the created swap partition permanent, the swapfile path contents can be written to /etc/\[fstab](https://so.csdn.net/so/search?q=fstab\&spm=1001.2101.3001.7020" \\t "https://blog.csdn.net/mucheni/article/details/\_blank)  in a file.

Add the following at the end of the/etc/fstab file:<font style="color:#0101F5;">/swapfile none swap sw 0 0</font>

```plain
forlinx@ubuntu:~$ sudo vi /etc/fstab
[…]
/dev/fd0        /media/floppy0  auto    rw,user,noauto,exec,utf8 0       0
/swapfile 	none	swap	sw	0	0
```

Check the current partition after the modification is completed:

```plain
forlinx@ubuntu:~$ cat /proc/swaps
Filename			Type		Size     	Used	   Priority
/dev/sda5           partition     8387580	    0	       -2
/swapfile            file		    4194300	    0	       -3
```

2. Put the source code into the development environment and unzip it.

Path: OKMX8MP-C (Android) User Profile\\Android\\Source Code\\OKMX8MP-android-source.tar.bz2\_xa\*

Copy the source code package to the Ubuntu folder/home/forlinx/imx8mp/, and check the md5 code of the source code package:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/imx8mp
forlinx@ubuntu:~/imx8mp$ md5sum OK8MP-android-source.tar.bz2_a*
c59eea85c601c3e4a0c6c6e131a55d0c  OK8MP-android-source.tar.bz2_aa
4c00d1d2d1c0d0e1e3dc26659c294f17  OK8MP-android-source.tar.bz2_ab
6b7969ae7372fbcc231ab8ecefd1e262  OK8MP-android-source.tar.bz2_ac
07f6a8a6a549d907e5285be41d300813  OK8MP-android-source.tar.bz2_ad
5c30fb7d2dc51bf1ddb434887eb5306a  OK8MP-android-source.tar.bz2_ae
3339dadb910de24d261825e49ceaa17c  OK8MP-android-source.tar.bz2_af
012af931f240da8a716d9ad252b09891  OK8MP-android-source.tar.bz2_ag
8bc7a12e14b62ee25b533c03bfb53876  OK8MP-android-source.tar.bz2_ah
3e34eddd412167c4ef70e0eebf3c009a  OK8MP-android-source.tar.bz2_ai
9eec886b83c8d830bfbd08f3e40a1dbd  OK8MP-android-source.tar.bz2_aj
3eec33dc40d1ea8f57a4f201f4a15b2e  OK8MP-android-source.tar.bz2_ak
773969dbf7ef53c5a4208eb29a3db092  OK8MP-android-source.tar.bz2_al
```

**Note: The source code used here is the source code in the "11/02/2022" version data. The md5 code of the source code in different versions may be different. For details, please refer to "user data/Android/source code/md5sum.txt".**

Compare the md5 code with the md5 check code in the "User Profile/Android/Source Code" directory, after confirming that they are the same, merge them into a zip file and check the md5 code:

```plain
forlinx@ubuntu:~/imx8mp$ cat OK8MP-android-source.tar.bz2_a* > OK8MP-android-source.tar.bz2                         //Merging takes a long time, so please be patient
forlinx@ubuntu:~/imx8mp$ md5sum OK8MP-android-source.tar.bz2
94907c99c44e7a17fefd1a472f0519e0  OK8MP-android-source.tar.bz2
```

After following the above steps to confirm that the md5 code is fine, unpack the Android source code with the following command:

```plain
forlinx@ubuntu:~/imx8mp$ tar xvf OK8MP-android-source.tar.bz2
OK8MP-android-source/
OK8MP-android-source/development/
OK8MP-android-source/development/testrunner/
OK8MP-android-source/development/testrunner/coverage_targets.xml
[…]
OK8MP-android-source/pdk/util/
OK8MP-android-source/pdk/util/diff_products.py
forlinx@ubuntu:~/imx8mp$ 
```

#### 4.3.2 Compiling Android File System

1. Configure compilation environment

Compile Android 9.0 into this directory and execute the following command:

```plain
forlinx@ubuntu:~/imx8mp$ cd /home/forlinx/imx8mp/OK8MP-android-source
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ source env.sh
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ lunch evk_8mp-userdebug
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.3.0-28-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================
forlinx@ubuntu:~/imx8mp/8MP-android-source$ 
```

2. Full compilation

```plain
forlinx@ubuntu:~/imx8mpOK8MPandroid-source$ ./imx-make.sh
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.3.0-28-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
[…]
lpmake I 08-15 22:07:23   518   518 builder.cpp:1031] [liblp]Partition product_a will resize from 0 bytes to 227995648 bytes
2022-08-15 22:15:37 - build_super_image.py - INFO    : Done writing image out/target/product/evk_8mp/super.img

#### build completed successfully (06:40:17 (hh:mm:ss)) ####
```

Because the android system is too large, the compilation time is slightly longer, please wait patiently for the completion of the compilation.

After the compilation is complete, execute the command./vendor/pack\_images.sh under the current path, you can generate a uuu folder under OK8MP-android-source/out/target/product/evk\_8mp/, which is the image file used for uuu flashing.

The image generated after compilation are located in the OK8MP-android-source/out/target/product/evk\_8mp/uuu.

Describe the files in uuu:

| **File**| **Description**
|----------|----------
| boot.img| boot.img contains two parts, kernel and ramdisk. It is the file that must be loaded when the Android system starts.
| dtbo-imx8mp.img| Device tree file
| partition-table.img| Android disc partition image
| vbmeta-imx8mp.img| Verify the boot image for security verification is an important security feature of Android.
| vendor\_boot.img| Include all binaries that are not distributable to the Android Open Source Project.
| u-boot-imx8mpevk-uuu.imx| Uboot image. Since the uboot source code in the 8mp source code is not open source, it will not be generated during the compilation process. When flashing, you need to put the two files under "User Data \\ Android \\ Image \\ uuu" into the uuu folder.
| u-boot-imx8mp.imx| 
| logo.img| Image of boot logo.
| super.img| Responsible for configuring dynamic partitions.
| uuu\_imx\_android\_flash.sh| Flashing tool
| uuu\_imx\_android\_flash.bat| 

Note:

+ **You have to compile all of them before you can use individual compilation, and as long as you don't clean after compiling all of them, the compilation after that will take a lot less time.**
+ **If the first full compilation is terminated in advance or an error is reported, the recompilation will report an error. At this time, you need to clean first and then compile. The complete command is:**make clean**.**
+ Compile separately boot.img

```plain
forlinx@ubuntu:~/imx8mp/OK8MP-android-source$ ./imx-make.sh bootimage
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.4.0-113-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
 […]
[100% 731/731] Target boot image from recovery: out/target/product/evk_8mp/boot.img  
//Path to the image generated by the compilation

#### build completed successfully (27 seconds) ####
```

+ Compile the device tree separately

```plain
forlinx@ubuntu:~/imx8mm/OK8MM-android-source$ make dtboimage -j8
============================================
PLATFORM_VERSION_CODENAME=REL
PLATFORM_VERSION=11
TARGET_PRODUCT=evk_8mp
TARGET_BUILD_VARIANT=userdebug
TARGET_BUILD_TYPE=release
TARGET_ARCH=arm64
TARGET_ARCH_VARIANT=armv8-a
TARGET_CPU_VARIANT=cortex-a53
TARGET_2ND_ARCH=arm
TARGET_2ND_ARCH_VARIANT=armv7-a-neon
TARGET_2ND_CPU_VARIANT=cortex-a9
HOST_ARCH=x86_64
HOST_2ND_ARCH=x86
HOST_OS=linux
HOST_OS_EXTRA=Linux-5.4.0-113-generic-x86_64-Ubuntu-18.04.4-LTS
HOST_CROSS_OS=windows
HOST_CROSS_ARCH=x86
HOST_CROSS_2ND_ARCH=x86_64
HOST_BUILD_TYPE=release
BUILD_ID=RQ1A.201205.003
OUT_DIR=out
PRODUCT_SOONG_NAMESPACES=device/generic/goldfish device/generic/goldfish-opengl external/mesa3d vendor/nxp-opensource/imx/power hardware/google/pixel vendor/partner_gms hardware/google/camera vendor/nxp-opensource/imx/camera
============================================ 
 […]
create image file: out/target/product/evk_8mp/dtbo-imx8mp.img...  //Path to the image generated by the compilation
Total 1 entries.

#### build completed successfully (03:59 (mm:ss)) ####
```

## 5\. Android Application Development

### 5.1 Android Application Development Environment Setup

#### 5.1.1 JDK Download and Installation

Since the Android application code is written in Java, you need to install the JDK on Windows first. The JDK can be downloaded as follows:

Visit [<u>http://www.oracle.com/technetwork/java/javase/downloads/index.html</u>](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

Click java archive：

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457873155_b51e2b89_ec03_4059_b17f_21478dcdaa51.png)

Click java SE（8u211 and later）：

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457873398_f2928a92_ef46_4d14_bad5_49778378d196.png)

Select the red box.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457873621_ffd7982e_c5ee_4c98_980d_52176330bc46.png)

According to the prompt, register the account and download it normally.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457873813_78d13108_0a8c_4b42_aff2_6bf95ca903cf.png)

After the download is completed, double-click the installer to complete the installation according to the wizard's prompts.

To check for a successful installation, open the command prompt tool and type Java -version.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457874047_a592ece1_5a4d_4b41_bf9e_d54f9b1bae03.png)

The correct display of the Java version indicates a successful installation.

#### 5.1.2 Android Studio Installation

Android Studio is a new development tool for Android development launched by Google at the 2013 I/O conference. It can be downloaded and installed at: [http://www.android-studio.org/](http://www.android-studio.org/).

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457874242_c86d18e4_dd58_4f0a_b9bc_2c1bcc97fe8f.jpeg)

After downloading, follow the prompts to install it. When the installation is complete, the following figure appears:

Select “Do not import settings ":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457874472_dfc3177f_8efa_45e2_ae59_9abc11020a08.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457874692_60122454_d263_470f_b58a_42ad1a6737ac.png)

Select “Cancel ":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457874927_51fc023e_3e11_4d58_84a8_b0c253515ce3.png)

Click "Next" to go to the next step:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457875198_2703db49_18f0_4295_b7f6_59c85607afc7.png)

Select "Custom" here:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457875429_1ea43ae6_aea2_4a50_8992_b7e0d063072b.png)

Choose a UI theme based on your personal preference:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457875617_8fc1b91a_72d5_436f_ba65_8b98328807b1.png)

Select the installation path of Android SDK according to the actual situation:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457875801_527d65cd_76f2_42a0_aa6c_7a0d55e04129.png)

Select the memory size for the emulator:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457876047_d8f9d21c_06ae_44b0_b442_00b473621874.png)

Click “Finish”.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457876287_4a4371cd_5292_4e52_9b8c_5fbf4eb21705.png)

When the installation is complete, click “Finish”.

#### 5.1.3 Helloworld Project Creation

1. Select “start a new android studio project”：

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457876500_3a3a41c9_30fc_4c0a_a00b_653a476fa1bc.png)

2\. Modify the project name, select Empty Activity, click "Next", and select the lowest supported SDK version:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457876686_e7fc1966_c21e_40cb_b691_51579163930d.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457876892_298b29df_918d_447a_8364_b9a82c88952d.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457877084_df070458_67b7_4a30_afad_4529216634b2.png)

Click “Finish”.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457877406_8b0ab60b_ee5d_437d_b61f_0ea0553e43b3.png)

Tools such as Gradle will be downloaded for the first use, so please be patient.

3\. Install android 11.0 SDK

Click "File"-> "settings" to search the SDK and open the interface as shown in the figure below. Check "Android 11.0" and click "OK" to install:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457877608_170843e0_3e71_499f_82b0_0bff6469c5c4.png)

After the flashing is completed, click "Finish":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457877798_5bbafee6_8a3d_413c_9ab1_97e1006aa31d.png)

4\. Click "build"-> "Make Project" to compile:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457877986_3dfcb3b5_057d_46cd_8e40_77e77293739b.png)

5\. After compiling, use the OTG cable to connect the development board to the computer and start the development board. In the Android studio menu bar, select Device 8mp:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457878166_baf70fbf_1bf4_440f_b732_a77a24a69ef9.png)

Click the green triangle icon in the menu bar to run the application on the development board.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457878364_0f7e53e4_b446_430b_a151_ebc55265c4c6.png)

After a while, the program runs on the development board:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457878576_00f37993_feae_406e_a59d_0ed8f7d38397.png)

#### 5.1.4 Existing App Project Compilation

This section mainly introduces how to import and compile the existing App project source code, taking CanTest as an example.

##### 5.1.4.1 Compiling CanTest Application

Path: OKMX8MPQ-C (Android) User Profile \\Android\\Test Program\\SerialPortTest.rar

1. First, decompress the source code of the test program provided by Forlinx to the full English path. Otherwise, it will compile and report errors. You can see the contents of CanTest as follows:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457878876_6e3cc9d2_61d9_4393_9b9d_db3d651fe219.png)

2. Select "Open an existing Android Studio project" "in Android studio, select the CanTest extracted in the previous step, and click" OK “;

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457879123_c97983cd_1947_404a_809c_4e03eef192e1.png)

3. Click "build"-> "Make Project" to compile:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457879357_23198a8a_c88f_448a_91f4_94a125f34b99.png)

4. After compiling, use the OTG cable to connect the development board to the computer and start the development board. In the Android studio menu bar, select Device 8mp:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457879591_3b08bf71_6e96_4a21_8dac_7ce29a144a25.png)

Click the green triangle icon in the menu bar to run the application on the development board.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457879805_0a237ed5_fae1_41c4_81f6_0bac080738da.png)

After a while, the program runs on the development board:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457880137_e22da7f0_0914_49e5_a0cc_ba90ba8c32ce.png)

The test was successful and the generated APK path: app\\build\\outputs\\apk\\debug\\app-debug.apk

The .apk file can be copied to the development board for installation.

##### 5.1.4.2 Common Issues

+ **Problem 1: The following errors may occur during compilation:**

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457880427_326afa9a_8358_4ae3_b3bc_a0af3cfdbd2c.png)

The reason is that the APK signature is added to the opened source code by default, and the prompt is that the signature file cannot be found. At this time, you need to create your own signature file according to Section 5.2.

Specific operation: File-> Project Structure-> Modules-> app-> Signing Configs-> Store File, modify the path to your signature file path, and then click "OK":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457880638_0be5f29f_3f5b_4dde_8d9f_467d72c4eb59.png)

+ **Problem 2: How to open the project in different versions of Android studio:**

1. Creating a new project according to "Chapter 5.1.3 Creating HelloWorld Project";
2. Unzip the “app” directory from the source code into the new project path, replacing the existing “app” folder;

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457880856_ce1e58e1_47d7_4c59_938b_d60f7ff4ee0c.png)

3. Reopen the HelloWorld project after replacing the app directory. After loading, change the APK key (see Problem 1 above for the operation process) and compile it;
4. After successful compilation, connect the development board and computer with an OTG cable, run it on the development board, and you can now successfully run it.

+ **Problem 3: The development board is connected to the computer via an OTG cable, and the development board is on, but Android Studio cannot detect the device.**

Check whether the development board has been set to USB debugging mode (first click the version number crazily to enter the developer mode, and then start USB debugging in the developer options), and click run in Android studio to start debugging.

### 5.2 Apk Platform Signature

In the Android platform, SELinux divides apps into three types, including untrusted\_app which has no platform signature and system privileges, platform\_app which has platform signature and no system privileges, and system\_app which has platform signature and system privileges. This chapter will introduce how to sign the apk and obtain system permissions.

#### 5.2.1 Preparation of Signature Document

Copy device/fsl/common/security/platform.x509.pem and device/fsl/common/security/platform.pk8 from Android to windows.

Open the command line window and enter the folder directory to execute:

```plain
openssl pkcs8 -in platform.pk8 -inform DER -outform PEM -out shared.priv.pem -nocrypt
openssl pkcs12 -export -in platform.x509.pem -inkey shared.priv.pem -out shared.pk12 -name androiddebugkey
Enter the password twice

keytool -importkeystore -deststorepass 123456 -destkeypass 123456 -destkeystore debug.keystore -srckeystore shared.pk12 -srcstoretype PKCS12 -srcstorepass android -alias androiddebugkey
```

The android is the password you enter, and the android debugkey is the alias, which you can modify to other contents according to your needs. 123456 for Store Password and Key Password, save the signature debug.keystore file to your usual directory.

+ **If you do not have the openssl command in your Windows system, please go to **[**<u>http://slproweb.com/products/Win32OpenSSL.html</u>**](http://slproweb.com/products/Win32OpenSSL.html) **to download and install it, then set the environment variable (please search online for instructions).**

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457881085_e974f778_212a_423e_ac6f_2d47b73cc32c.png)

#### 5.2.2 Setting up Andorid Studio

Open any android studio project, and add the shared UID at the corresponding position in the AndroidManifest.xml, for example:

\<manifest xmlns:android="http://schemas.android.com/apk/res/android"

    package="com.example.forlinx.serialporttest"

**android: sharedUserId="android.uid.system**" >

Click “File”->“project structure”：

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457881346_2e10c222_9d66_4d9e_b2aa_4c19d33c3e53.png)

Create a new release:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457881621_c886bcdd_5e8d_4686_83b4_f0ed14e4a04e.png)

Add signature configuration of debug version and release version, and click build Variants ":

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457881889_f6724962_77d0_42ea_a3c8_4ceb42d13567.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457882073_385ce032_9046_4195_98b2_8bba21a5e434.png)

Set the signature configuration of the corresponding version as shown in the figure.

Click the run button on android studio to launch the app. Enter ps-Z in the serial port:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457882327_a107587e_c015_43e9_8222_4ef41f3f6ed0.jpeg)

Confirm whether your app has become system \_ app.

### 5.3 Method of System Pre-installation of APK

1\. Create a new directory in Android:

```plain
mkdir packages/apps/serialporttest
```

2\. Copy the apk that needs to be pre-installed (no signature is required) to the directory. Take the serialporttest.apk as an example:

```plain
cp serialporttest.apk packages/apps/serialporttest
```

3\. Create a new Android.mk in packages/apps/serialporttest and add the following:

```plain
LOCAL_PATH := $(call my-dir) 
include $(CLEAR_VARS)
LOCAL_MODULE := serialporttest 
LOCAL_SRC_FILES := serialporttest.apk 
LOCAL_MODULE_CLASS := APPS 
LOCAL_MODULE_SUFFIX := .apk 
LOCAL_BUILT_MODULE_STEM := package.apk 
LOCAL_CERTIFICATE := platform 
LOCAL_DEX_PREOPT := false 
LOCAL_PRIVILEGED_MODULE := true 
include $(BUILD_PREBUILT) 
```

4\. Also modify device/nxp/imx8m/evk \_ 8mp/evk \_ 8mp.mk to add;

```plain
PRODUCT_PACKAGES += \ 
Serialporttest
```

5\. Recompile the image.

## 6\. System Flashing

### 6.1 Flashing the Image with UUU

UUU is a command-line tool that can be used to flash images onto the OKMX8MPQ development board in Linux or Windows environments. For the Android system, NXP provides integrated scripts for both Linux (uuu\_imx\_android\_flash.sh) and Windows (uuu\_imx\_android\_flash.bat) platforms. 

Here are the instructions for using each of these two tools.

uuu\_imx\_android\_flash parameter description:

| **Parameter**| **Description**|
|----------|:----------|
| -h| help|
| -f| soc\_name|
| -a| flash only slot \_ a|
| -b| flash only slot \_ b|
| -c| Default use partition-table. img<br/>-c 7; use partition-table -7 GB. img (8g emmc)<br/>-C 14; use partition-table -14 GB. img (16g emmc)<br/>-C 28 up partition-table-28GB.img(32G emmc)|
| -m| Flash Cortex-M7 image|
| -d| Flash a specific dtbo vbmeta recovery image|
| -e| Erase the userdata partition after the write is complete.|
| -l| Lock the device after flashing is complete.|
| -D| Image path, use current path by default without specifying|
| -s| Serial port number, used when multiple devices are connected to the PC at the same times.|

The following describes the use of UUU tools under Linux and Windows respectively.

**Note:**

+ **Do not use the uuu\_imx\_android\_flash.sh generated by the android environment compiler. Please use "User Profile Tool \\uuu\_imx\_android\_flash.sh";**
+ **Plug the OTG cable into the Linux host's USB port If you use a virtual machine, mount the following devices in the virtual machine.**

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457841677_c3cdc53e_4eec_4754_a4cb_b4bee95be8a1.png)

#### 6.1.1 Use of the uuu\_imx\_android\_flash.sh tool on Linux

**Path: OKMX8MPQ-C (Android) User Profile \\ Tool**

Copy the uuu of the tool directory in the downloaded user profile to the/usr/bin/directory and add executable permissions. Copy uuu\_imx\_android\_flash.sh to the /home/forlinx/imx8mp/uuu directory.

**Note: Do not use the uuu\_imx\_android\_flash.sh generated by the android environment compilation. Meanwhile, if the fastboot version is too low, the device cannot be identified. Please extract the tools such as the fastboot adb in the platform-tools \_ r28.0.3- Linux. zip in the CD tool directory to the/usr/bin directory and add executable permissions.**

1. Plug the type C cable into the USB port of the Linux host. If you are using a virtual machine, move the following devices to the virtual machine.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457841893_9aa5405d_7bda_4244_9187_fd236471aba0.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457842092_f9003885_34b9_493f_a520_cbe735f4c0dc.png)

2. Copy the compiled image (*. img and u-boot* to the/home/forlinx/imx8mp/uuu directory.

**Note:**

+ **Copy the compiled image (\*.img and u-*) to the/home/forlinx/imx8mp/uuu directory. Where. img is a fully compiled generated file, because u-boot is not open source. Therefore, you need to copy the "u-boot-imx8mp.imx" and "u-boot-imx8mp-evk" uuu. Imx "under the" user information/Android/image/uuu/ "path to the/home/forlinx/imx8mp/uuu directory;**
+ **If the user has not compiled the source code and simply uses the image in the user profile to flash, you can directly copy the (\*.img and u-boot \*) under the path of "user profile/Android/image/uuu/" to the directory of/home/forlinx/imx8mp/uuu.**

- **According to the schematic diagram, change the dial-up startup mode to USB, and start the development board;**

- **Enter the following command to enter the corresponding path for programming.**

```plain
forlinx@ubuntu: ~$ cd /home/forlinx/imx8mp/uuu
forlinx@ubuntu: ~/imx8mp/uuu$ sudo ./uuu_imx_android_flash.sh -f imx8mp -e
```

**Note: Do not insert the TF card when flashing.**

Once the flashing process begins, you will receive a prompt to connect the device to the host machine or virtual machine. Please actively select the option to connect it to the virtual machine.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457842291_afad18aa_4ff5_45ae_bfe2_6af4996297f4.png)

Wait for the flashing process to complete. A successful flashing operation will be indicated as shown in the following image:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457842611_95b4d994_de4a_4d12_abf4_24205623f671.png)

#### 6.1.2 Use of uuu\_imx\_android\_flash.bat tool on Windows

**Note: The command line window must be run with administrator privileges when flashing uuu.**

Step 1: Copy file;

Path: OKMX8MPQ-C (Android) User Profile \\ Tool\\uuu.exe

Copy uuu.exe from the downloaded material to the C:\\Windows\\System32 directory.

Path: OKMX8MPQ-C (Android) User Profile\\Tools\\platform-tools\_r28.0.3-windows.zip

Extract the platform-tools\_r28.0.3-windows.zip file from the user profile tools directory to C:\\Windows\\System32, or to C:\\Windows\\SysWOW64 for 64-bit windows systems.

Step 2: Connect the USB interface of the host to the Type-C interface of the development board using an OTG cable, then set the dip switch to \[specific setting], remove the TF card, and power on the development board;

Step 3: Check the installation.

By clicking on the start menu, type “cmd” in the search box at the bottom of the start menu, and press enter on cmd.exe to open the DOS window. In the DOS window, type “uuu” and press enter.

```plain
C:\Users\Administrator>uuu
uuu (Universal Update Utility) for nxp imx chips -- libuuu_1.4.139-0-g1a8f760

uuu [-d -m -v -V] <bootloader|cmdlists|cmd>

    bootloader  download bootloader to board by usb
    cmdlist     run all commands in cmdlist file
                If it is path, search uuu.auto in dir
                If it is zip, search uuu.auto in zip
    cmd         Run one command, use -H see detail
                example: SDPS: boot -f flash.bin
    -d          Daemon mode, wait for forever.
    -v -V       verbose mode, -V enable libusb error\warning info
    -m          USBPATH Only monitor these paths.
                    -m 1:2 -m 1:3
[…]
Register-ArgumentCompleter -CommandName uuu -ScriptBlock {param($commandName,$parameterName,$wordToComplete,$commandAst,$fakeBoundParameter); C:\WINDOWS\system32\uuu.exe -autocomplete $parameterName }
```

Switch to the directory where the extracted files are located.

```plain
Microsoft Windows [Version 10.0.19044.1645]
(c) Microsoft Corporation.All rights reserved

C:\Users\Administrator>cd c:\
c:\>cd \Windows\System32\platform-tools
```

Enter fastboot -h Confirm whether the installation is successful.

```plain
c:\Windows\System32\platform-tools>fastboot -h
usage: fastboot [OPTION...] COMMAND...

flashing:
 update ZIP                 Flash all partitions from an update.zip package.
 flashall                   Flash all partitions from $ANDROID_PRODUCT_OUT.
                            On A/B devices, flashed slot is set as active.
                            Secondary images may be flashed to inactive slot.
 flash PARTITION [FILENAME] Flash given partition, using the image from
                            $ANDROID_PRODUCT_OUT if no filename is given.
[…]
options:
[…]
 --version                  Display version.
 --help, -h                 Show this message.
```

Enter adb Confirm whether the installation is successful

```plain
c:\Windows\System32\platform-tools>adb
Android Debug Bridge version 1.0.41
Version 28.0.3-5475833
Installed as c:\Windows\System32\platform-tools\adb.exe

global options:
 -a         listen on all network interfaces, not just localhost
 -d         use USB device (error if multiple devices connected)
 -e         use TCP/IP device (error if multiple TCP/IP devices available)
 -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
 -t ID      use device with given transport id
 -H         name of adb server host [default=localhost]
 -P         port of adb server [default=5037]
 -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]
[…]
environment variables:
[…]
 $ANDROID_LOG_TAGS        tags to be used by logcat (see logcat --help)
 $ADB_LOCAL_TRANSPORT_MAX_PORT max emulator scan port (default 5585, 16 emus)
```

**Note: If prompted that api-ms-win-crt-runtime-l1-1-0.dll is missing, install patch KB2999226 on your system.**

Step 4: Create the uuu folder and put the corresponding image in the folder.

Path: OKMX8MPQ-C (Android) User Profile \\ Android \\ Image \\ uuu

Copy the files in the above path to the uuu directory created in any disk other than the C disk, for example, D: \\ uuu.

Step 5: Enter the command to burn in the Windows host.

Enter the uuu directory:

```plain
C:\WINDOWS\system32> d:
D:\> cd uuu
```

Flash system image:

```plain
D:\uuu> uuu_imx_android_flash.bat -f imx8mp -e
```

Successful burning is shown in the following figure:

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457842929_a8c66f11_850d_4a83_8319_3a81cd0efcca.png)

When uuu burns, an error occurs as shown in the figure, you can re-plug the usb cable to ensure that the usb is not mounted to the virtual machine.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457843110_c941e88a_4d17_4acc_89aa_12a8627dbcb4.png)

### 6.2 Flashing the Image with TF Card

#### 6.2.1 Making and Writing TF Card

**Note:**

+ **When using a TF card to burn the system, please use a genuine TF card with a capacity of 8G and above to test;**
+ **Before making card, you need to format the TF card to the FAT32 format. Insert the TF card into the PC using a USB card reader**.

Path: OKMX8MPQ-C (Android) User Profile\\tool\\sdfuse

Copy the sdfuse folder in the CD material to the virtual machine/home/forlinx/imx8mp/tools/sdfuse directory, and insert the TF card into the virtual machine.

Enter the flashing directory:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/imx8mp/tools/sdfuse
```

Execute the business card printing script:

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ sudo ./mksdcard8mp.sh
```

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457843294_fd26bc70_6b5c_442b_a09a_7fd44b7f4d6b.png)

Select the TF card device, taking "1" as an example.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457843567_c9902772_9caa_4116_9f1e_e09991c1e08a.png)

Enter "y" to confirm.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457843744_e52783bc_db2c_45a8_b869_24795a9bf1d6.png)

Production is complete.

Note: After business card printing according to the script at this time, the TF card will be automatically unloaded. If you want to still mount it on the development environment after business card printing is completed, you need to modify the business card printing script mksdcard8mp.sh:

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ vi mksdcard8mp.sh
[…]
for i in `ls -1 $DRIVE?`; do
        echo "unmounting device '$i'"
#       umount $i 2>/dev/null                        //Comment out the command at the end of the script
done
```

#### 6.2.2 Copying and Writing Image

The factory image can be copied to the FAT32 partition of the TF card in the downloaded data, and the image is in the following path

Path: OKMX8MPQ-C (Android) user profile \\ Android \\ image \\ tfcard

Specific options to be copied are shown in the table below.

Copy the android image and the burning tool to the FAT32 partition of the burning TF card.

| File| Description|
|----------|----------|
| config.ini| Flash configuration files, in the tools/sdfuse directory|
| ramdisk.img| Flash configuration files, in the tools/sdfuse directory|
| imx-boot.bin| The card provisioning file is located in the tools/sdfuse directory.|
| dtbo-imx8mp.img| Flash image, compile and generate|
| partition-table.img| Flash image, compile and generate|
| vendor\_boot.img| Flash image, compile and generate|
| u-boot-imx8mp.imx| Flash image, compile and generate|
| vbmeta-imx8mp.img| Flash image, compile and generate|
| boot.img| Flash image, compile and generate|
| logo\_raw.img| Flash image, generated using logo.img|
| super\_raw.img| Flash image, generated using super.img|
| kernel| Image and OK8MP.dtb are placed in the folder, which is used to boot during the burning phase|

How to generate logo\_raw.img and system\_raw.img:

```plain
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ simg2img logo.img logo_raw.img
forlinx@ubuntu:~/imx8mp/tools/sdfuse$ simg2img super.img super_raw.img
```

If simg2img is not found, use the sudo apt-get install android-tools-fsutil command to install it.

#### 6.2.3 TF Card Flashing Test

Turn off the power of the development board, insert the TF card into the TF card holder, and set the startup dial code to the TF card startup state according to the schematic diagram

Turn on the power switch, and the development board will automatically start to enter the flashing program. Please pay attention to the flashing progress by debugging the serial port or observing the flashing change of the heartbeat lamp D1. When D1 flashes once per second, it indicates that the flashing is completed.

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457843920_7183676f_9525_46af_895f_ed2770c064bf.png)

![Image](./images/OK-MX8MPQ-C_Android11_User_Compilation_Manual/1719457844100_b754df76_9e3b_46f7_8eda_f2079db5248d.png)	