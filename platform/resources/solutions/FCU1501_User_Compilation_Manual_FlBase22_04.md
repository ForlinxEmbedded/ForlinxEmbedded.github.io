# FCU1501_User's Compilation Manual_FlB22.04

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. VMware Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169299281_de348f8a_1c6b_48b0_8f4c_925f8e300cd0.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169299518_51ef1955_87b5_4d9c_ab23_6722043e1d57.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169299827_654af716_3d46_4609_97ff_054e119673bb.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169300116_b1714f26_bb47_4caf_9cc4_1eee167c5d18.png)

Check, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169300391_9f8d9ab4_de5b_47d0_ad38_1174177cefb9.png)

Check “Add shortcuts” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169300593_5bb0cd62_818b_4c31_90a9_c9dfffd00ea9.png)

Click “Install.”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169300791_4ae43a4d_510b_4f3e_b97a_b2bc70ee5a04.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169301003_be55046d_f49a_43ec_ba8a_b5374c82dfb6.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720169301226_f10b8e88_6191_4ecf_ba68_8d4b33278162.png)

<font style="color:#000000;">     </font>

## 2. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The regular user account for the development environment is: “forlinx”, and the corresponding password is: “forlinx”;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413769912_71c167ff_9700_4807_9556_11e82aeb58fd.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413770237_65e87c87_e47e_4a5d_a560_b9120084f93e.png)

Once the extraction is complete, you will obtain a folder named “ELF-RK3506\_Ubuntu22.04”.

**Note: **

- **The Ubuntu 22.04 development environment for models 3506, 3562, and 3568 is the same;**
- **The file "3506.vmx" in the "3506 Development Environment" folder is the virtual machine file that needs to be opened.**

Open the installed virtual machine software.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1720168594803_02ccb0b5_49ce_405e_a982_05e8e19f6759.png)

The file "3506.vmx" in the "3506 Development Environment" folder is the virtual machine file that needs to be opened.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413770904_6eb4cc3d_0762_4bea_8b55_a5bd7b276b75.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730770392113_46f60b0b_8a73_4880_bb2c_316b0b3f8e49.png)

The default account for auto-login upon system boot in the development environment is: “forlinx”, with the password: “forlinx..

## 3\. New Ubuntu Development Environment Setup

**Note:** 

- **It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment;**
- **This chapter mainly explains the setup process of the Ubuntu system.**

### 3.1 Ubuntu System Setup

The installed Ubuntu version is 22.04.5 LTS, and all the introductions and development in this manual were carried out on it. Download the “ubuntu-22.04.5-desktop-amd64.iso” version from [https://releases.ubuntu.com/22.04/](https://releases.ubuntu.com/22.04/) (the specific version to download can be based on your own needs; here we use version Ubuntu22.04.5 LTS as an example).

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413771706_93083072_49eb_446a_b1c8_8e9d05575c11.png)

### 3.1.1 Creating an Ubuntu Virtual Machine

Step 1: Open the VMware software and click “Create a New Virtual Machine”. On the following screen, check “Custom (advanced)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771838296_01415610_068d_4ba7_9267_09ed32dae4b8.png)

Step 2: Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771870249_10b484a8_ba3a_40fa_95f6_2c02a0fd3d3e.png)

Choose “Installer disc image file (iso)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771137989_9e9d0e8c_e015_469c_8a26_8317cb9b1097.png)

Enter the full name, username, and password, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771173023_0cf7d4a4_8d05_413b_a619_ec4a22d1c7a2.png)

Enter the virtual machine name and configure the installation location, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771243922_1e572b96_3307_4ecd_9195_6a43af7510ff.png)

Set the number of processors according to your needs.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771288477_46b84221_b5ba_47d9_8290_44ea8d9b24d9.png)

Configure at least 8GB of memory and select “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771323581_06a409ed_9b7e_4556_b756_13ec10650f37.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771350370_a2b56a01_a884_4708_9a99_cfaa88269611.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771380620_e67fd0b6_0d04_4311_abdf_3950d7457943.png)

Choose the default LSI for the IO controller type.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771409290_939fac95_52fb_4b3b_928f_190a882b601a.png)

Similarly, select SCSI as the default here.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771437575_1e6469fa_2570_4cf5_9c1d_cf248ece01e2.png)

Choose to create a new virtual disk:

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771537119_3de308b8_38d8_4371_959f_9b41d9bc9c92.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771561349_40a86987_5983_4b89_83f4_a244e936e55e.png)

Specify the disk file, the default setting is fine here.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771580713_c82bd0e0_f186_4d03_b6cb_10fb405bec2d.png)

Click ''Finish'' by default to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771631305_f669a381_7597_4f46_bba4_bedddb71a310.png)

At this point, the virtual machine creation is complete.

Once the virtual machine is created, wait for the installation interface to appear as shown below.：

The default language of Ubuntu is English, but others can also be selected. 

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413776620_c1d8e32f_8fb1_45a7_895a_da3afa648a4a.png)

The default language can be changed later. After making your selection, click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413777070_55cdb910_13aa_4258_861b_294753332fba.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click “Continue” again.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413777410_0f94958a_7fc5_498e_bcec_2e267d47baf6.png)

Click Install Now by default, and a prompt will appear. Click “Continue”. In any subsequent pop-up windows, simply click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413777766_7db3a590_7e7c_4f93_9b8d_c872064a2d7d.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue.

Finally, set your username and password, choose between automatic login and logging in with your username and password, and click “Continue” to start the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413778082_432116c0_8070_470b_8f2d_ab7e84167fa2.png)

If your internet connection is poor, you can click “Skip”—this won’t affect the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413778431_62795cf4_c08e_45f3_9e5d_20f74ffbbb1f.png)

Click “Restart Now” to restart the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413778904_b8194e83_3347_4c33_ab31_cc8cc780bd5b.png)

Once Ubuntu starts up, click “Skip” when this pop-up appears.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413779240_43b5482f_a8be_45a8_ae60_a4889df41b0c.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413779599_482e227e_cbaa_4186_884e_fbb1d8e198ed.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413780050_e8cd07f6_4d7f_40c5_822e_f6d80b3acc4f.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413780402_fbe4e7c3_55df_4fc5_a795_c87565bdc6eb.png)

Click “done”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413780886_684b7b41_8c4a_4b55_930f_b1a4f95c20bc.png)

Ubuntu is successfully installed.

#### 3.1.2 Basic Configuration of Ubuntu

After installing the Ubuntu 20.04 operating system, some configurations need to be done.

Open a terminal and use the system's built-in open-vm-tools:

sudo apt update \&\& sudo apt install open-vm-tools open-vm-tools-desktop –y

Ubuntu 22.04 uses Wayland by default, but the copy-and-paste functionality of VMware Tools currently does not work well with it. You need to switch to Xorg.

From the menu that appears when Ubuntu starts, select “Ubuntu on Xorg” or “Xorg”

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413781297_d38a173a_e5f3_487b_a587_7aa5a0f90e42.png)

to enable copying and pasting files between Windows and Ubuntu.

Full-screen display for the virtual machine:

If the virtual machine cannot display in full screen, you can click on “View”, select “Auto-Adjust Size”, and then click “Autofit Guest” to resolve the full-screen issue.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730771929996_f0425a36_2ebd_4581_9e35_d1b39be33837.png)

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413782044_ccd50506_78d8_4625_9a0f_e2206a3e9c06.png)

Virtual Machine Sleep Settings：

Additionally, the default sleep setting is 5 minutes. If you do not want the system to go to sleep, go to Settings -> Power -> Blank Screen and set it to “Never”.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413782400_c6291236_40e3_4fa3_a413_9a52d94f6dc3.png)

#### 3.1.3 Virtual Machine Network Configuration

##### 3.1.3.1 NAT Connection Mode

By default, after the virtual machine installation is complete, the network connection mode is set to NAT, as shown in the figure below, sharing an IP address with the host machine. This setting does not need to be changed when installing dependency packages, compiling code, etc.

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device connects and communicates with the host’s network card for internet access. This is the most commonly used method for the virtual machine to access the external network.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730772087100_ab80fe3b_3415_4524_9f09_a94042347a41.png)

#### 3.1.3.2 Bridged Connection Mode

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1730772113434_77bab373_f8a3_4f12_9d58_4a721f1be151.png)

## 4. Compilation of Related Code

The Linux system is a desktop operating system developed by Forlinx based on Buildroot.

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ OS: Ubuntu 22.04.5 LTS
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-6.1.118

#### 4.1.2 Copying the Source Code

 Program source code: FCU1501 Embedded Control Unit\_Linux6.1.99\_User Data\_R2\\2. Images and Source Code\\Source Code\\fcu1501-linux-source.tar.bz2.0\*

Create Working Directory:

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work						//Create the working directory in sequence
```

Copy the source code file fcu1501-linux-source.tar.bz2.0\* from the user’s home directory to the /home/forlinx/work directory on the virtual machine.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work														//Switch to the working directory
forlinx@ubuntu:~/work$ cat fcu1501-linux-source.tar.bz2.0* > fcu1501-linux-source.tar.bz2.0
forlinx@ubuntu:~/work$ tar -xvf fcu1501-linux-source.tar.bz2.0			//Extract the compressed file to its default location
Once you have run the command, simply wait for it to finish.
```

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 16GB of RAM in the development environment. Please do not modify the provided VM configuration.**

#### 4.2.1 Full Compilation Test

In the source code directory, there is a compilation script named build.sh. Running this script will compile the entire source code. You need to switch to the extracted source code path in the terminal and locate the build.sh file..

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/fcu1501-linux-source
```

The following operations need to be performed in the source code directory. Compilation method:

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$./build.sh chip
```

After executing, there will be options to input, as shown in the picture. After entering "1", press Enter to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413783411_d1d437b7_0452_4508_941e_65a00cefd961.png)

After executing, there will be options to input, as shown in the picture. After entering "1", press Enter to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413783668_b8375c83_3d3e_45a4_add1_b2cf396c3182.png)

Enter the corresponding number for the relevant board, then press Enter to continue.

**Note: The above configuration only needs to be done once. Then, execute build.sh for a full compilation.**

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh
```

**Note: update.img is packaged for full flashing using OTG or TF card.  Other files are for step-by-step flashing.**

#### 4.2.2 Individual Compilation

You can operate in the kernel source directory.

```plain
# Generate boot.img; the output path is kernel/boot.img
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh kernel 
```

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413784100_ac3ea955_6a47_4aac_bf53_6165272fe010.png)

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

#### 4.2.3 Cleaning up Generated Files

**Note: The cleanall command will delete the intermediate files in the uboot folder. Before use, please modify the build.sh script and comment out the uboot part. The uboot is not open source, and loss of these intermediate files will lead to full compilation failure.**

You can operate in the source directory.

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$ vi build.sh
```

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413784373_b2bb4188_0b8d_43fe_9f6e_01126571347d.png)

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$./build.sh cleanall
```

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413784667_056e45dc_fdff_4b9c_aad9_71bb5319abf2.png)

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

### 4.3 Image Files Usage

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

## 5. Ubuntu Application Development

This chapter explains how to set up the Ubuntu application development environment, develop Qt applications, and use the FCU1501 development board as a real device for program debugging. It is highly suitable for Ubuntu beginners to learn and reference.

**Note: The Ubuntu system image will not auto-expand. You need to refer to the documentation to complete the capacity expansion process (please ask your sales representative for it).**

### 5.1 Ubuntu Application Development Environment Setup

Download and install relevant tools.

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$ sudo apt update && sudo apt install qemu-user-static
[sudo] password for elf: 
Get:1 https://packages.microsoft.com/repos/code stable InRelease [3,590 B]                         
Hit:2 http://mirrors.huaweicloud.com/repository/ubuntu jammy InRelease                          
Get:3 http://mirrors.huaweicloud.com/repository/ubuntu jammy-updates InRelease [128 kB]
Hit:4 http://mirrors.huaweicloud.com/repository/ubuntu jammy-backports InRelease
Get:5 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security InRelease [129 kB]
Get:6 https://packages.microsoft.com/repos/code stable/main amd64 Packages [29.7 kB]
Get:7 http://mirrors.huaweicloud.com/repository/ubuntu jammy-updates/main amd64 Packages [3,721 kB]
Get:8 http://mirrors.huaweicloud.com/repository/ubuntu jammy-updates/main i386 Packages [1,060 kB]
Get:9 http://mirrors.huaweicloud.com/repository/ubuntu jammy-updates/main Translation-en [554 kB]                                                                                   
Get:10 http://mirrors.huaweicloud.com/repository/ubuntu jammy-updates/restricted Translation-en [1,229 kB]                                                                          
Get:11 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security/main i386 Packages [880 kB]                                                                                  
Get:12 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security/main amd64 Packages [3,448 kB]                                                                               
Get:13 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security/main Translation-en [486 kB]                                                                                 
Get:14 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security/restricted amd64 Packages [6,174 kB]                                                                         
Get:15 http://mirrors.huaweicloud.com/repository/ubuntu jammy-security/restricted Translation-en [1,186 kB]                                                                         
Fetched 19.0 MB in 9s (2,181 kB/s)                                                                                                                                                  
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
6 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
qemu-user-static is already the newest version (1:6.2+dfsg-2ubuntu6.31).
The following package was automatically installed and is no longer required:
  p7zip
Use 'sudo apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 6 not upgraded.
```

Mount armubuntu and copy the program source code.

```plain
forlinx@ubuntu:~/work/fcu1501-linux-source$ cd ubuntu/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$ mkdir ubuntufs
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$ sudo mount jammy-rootfs.img ubuntufs		// Mount the ARM Ubuntu root filesystem image
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$ cd ubuntufs/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ ls	// You can see the directory structure below is identical to that on the development board
apps  bin  boot  build.sh  debian-base.sh  dev  etc  forlinx-base.sh  home  lib  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ cd ../../  // Switch to the source code root directory
forlinx@ubuntu:~/work/fcu1501-linux-source/$ sudo cp -r  app/forlinx/forlinx_cmd_demo/fltest_watchdog  ubuntu/ubuntufs/home/forlinx	// Copy the program demo from the source directory to the home/forlinx path under the mounted Ubuntu virtual environment
```

Enter the Ubuntu virtual environment.

```plain
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo mount -t proc /proc proc/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo mount -t sysfs /sys  sys/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /dev dev/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /dev/pts dev/pts
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /run run/
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ sudo chroot .
```

Compile the program and import fltest\_watchdog to the development board.

```plain
root@ubuntu:/# cd /home/forlinx
root@ubuntu:/home/forlinx# cd fltest_watchdog/
root@ubuntu:/home/forlinx/fltest_qt_rtc# make
root@ubuntu:/home/forlinx/fltest_qt_rtc# ls
Makefile  fltest_watchdog  fltest_watchdog.c
```



![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413784899_7f38568f_2361_450e_9030_4e636b4bf389.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/resources/solutions/FCU1501_User_Compilation_Manual_FlBase22_04/1788413785231_11294695_3d29_4746_bbed_b2b138b4df89.png)

Unmount and exit.

```plain
root@ubuntu:/home/forlinx/rtc# exit
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu/ubuntufs$ cd ..
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs/proc
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs/sys
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs/dev/pts
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs/dev
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs/run
forlinx@ubuntu:~/work/fcu1501-linux-source/ubuntu$sudo umount ubuntufs
```
