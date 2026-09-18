# Android16.0\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Overview

This manual is designed to help you quickly understand the compilation process and become the compilation methods. Applications need to be cross-compiled on an Ubuntu host before they can run on the development board. By following the methods in this compilation manual and through hands-on practice, you can successfully compile your own software code.   
The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.   
There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware requirements: It is recommended to have at least 16 GB of RAM or more. This ensures that after allocating memory for the virtual machine (it is recommended to allocate over 16 GB for the virtual machine), you can still perform other operations on Windows without significant lag.   

There are total 5 chapters:

+ Chapter 1. covers the installation of virtual machine software, briefly introducing the download and installation of VMware;
+ Chapter 2. covers loading the Ubuntu system Forlinx provide;
+ Chapter 3. covers setting up and configuring the Ubuntu system, installing necessary tools, and addressing common issues with the development environment;
+ Chapter 4. covers the deployment, addition, and usage of Docker containers, as well as the compilation of kernel and Android-related source code.
+ Chapter 5. introduces the development of Android applications.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or particularly important information must be read carefully.|
| 📚 | Relevant explanations regarding the testing section|
| ️️️️🛤️ ️ | Related paths.|
| <font style="color:blue;">Blue on gray</font> | Refers to the command entered on the command line, which needs to be entered manually.|
| Bold font.| Serial output information after command input|
| **Black Bold**| Key information in the serial output:|
| // | Explanation of input commands or output information:|
| Username@Hostname| forlinx@ubuntu: Development environment Ubuntu account information. You can use this information to determine the operating environment for specific functions.|

Example: Check the Version of Docker-CE

```shell
forlinx@ubuntu:~$ apt-cache madison docker-ce                   # Check the version of Docker-CE
docker-ce | 18.06.3~ce~3-0~ubuntu | http://mirrors.aliyun.com/docker-ce/linux/ubuntu/trusty/stable amd64 Packages
```

+ `forlinx@ubuntu`: Username: forlinx, Hostname: ubuntu — This indicates operating on the development environment ubuntu with the user forlinx.
+ `#` : Explanatory content for the operation, not to be entered.
+ `apt-cache madison docker-ce`: Blue text indicates relevant commands that need to be entered manually.
+ `docker-ce | 18.06.3~ce~3-0~ubuntu`: Black text is the output information after entering the command, with bold text highlighting key information.

## Application Scope

This software manual is designed for the OK3572-C platform running Android16. While other platforms may also reference this manual, there could be differences that require adjustments for the specific use.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 26/06/2026| V1.0| OK3572-C Android16 User’s Compilation Manual Initial Version|

## 1\. VMware Virtual Machine Software Installation

This chapter focuses on the installation of VMware virtual machines, using `VMware workstation 15 Pro` as an example to demonstrate the process of installing and configuring an operating system..

### 1\.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version Version.

![Image](1726292018801_8230a6f7_bdc2_4fd7_a6ac_9b9051a28f3d.png)

### 1.2 VMware Software Installation

Double-click the setup file to enter the installation wizard.

![Image](1726292019102_966a3de3_90e4_43c5_8d09_638579d0a5ad.png)

Click “Next”.

![Image](1726292019326_bbe7eaef_ef8c_420c_9a24_c318002f625b.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](1726292019516_d327a170_62c9_4921_8243_13806619bec3.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](1726292019727_ca602d71_8eb8_479d_836a_433822d8404f.png)

Check, then click “Next.”

![Image](1726292019978_f50a4b96_86f6_4b81_b46a_24aeb5e39e8f.png)

Check “Add shortcuts” and click “Next.”

![Image](1726292020296_68686b42_4114_438d_bd79_cc171fa88b02.png)

Click “Next”.

![Image](1726292020500_b5aec052_b5fe_4a5a_84a0_cf4630dec74d.png)

Wait for the installation to complete.

![Image](1726292020748_89dabfcd_6ac8_48a9_85db_74c39c551c00.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

**It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**

**Development Environment Account: `forlinx`, password: `forlinx`;**

**You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1780452108965_5531d0a1_e207_4df6_9c20_45a97daaaf45.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1780453638297_243ff165_5ebf_4e1f_b4a5_a5adfa925da4.png)

Once the files have been extracted, you will have a development environment `OK3572-VM17-ubuntu22_04`, which includes the virtual machine files `OK3572.vmx`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1780454608533_0dc4a27f_5cd0_4781_8a87_ac967b0d43bb.png)

Open your installed virtualization software (e.g., VMware, VirtualBox), select the newly extracted virtual machine, and double-click the startup file.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1780454543047_3f97e174_d019_49e9_abf3_91103225f15a.png)

After loading, click to run and enter the system interface.

The development environment includes two users: forlinx and root.

+ Username: `forlinx`, password: `forlinx`
+ Username: `root`, password: `root`

## 3\. Setting Up a New Ubuntu Development Environment

This chapter mainly explains the setup process of the Ubuntu system.

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Creating an Ubuntu Virtual Machine

Open VMware software and click File`-> `New Virtual Machine to enter the following interface:

![Image](1726291996421_80355a1a_1a92_46e3_9818_8b3496d88bb9.png)

Choose "Custom" and click ''Next.''

![Image](1726291996662_59902e0c_a9fd_4a7c_aebb_9c825cc1a759.png)

Select compatibility for the corresponding VMware version. The version can be viewed in `Help`-> `About VMwareVMware Workstation`. Click ''Next.''

![Image](1726291996865_5c88406f_2ad2_4afe_9f13_e6096bcc0e4e_1783653515013.png)

Choose to install the operating system later, and click ''Next.'’

![Image](16.png)

Keep the default settings and click ''Next.''

![Image](17.png)

Modify the virtual machine's name and installation location, then click ''Next.''

![Image](18.png)

Set the number of processors according to your needs.

![Image](19.png)

Similarly, set the memory size according to the actual situation (it is recommended to adjust the memory size to be more than 20GB).

![Image](20.png)

Set the network type, the default is NAT mode, and click "Next."

![Image](21.png)

Keep the default settings and click ''Next.''

![Image](22.png)

Keep the default settings and click ''Next.'’

![Image](23.png)

Choose to create a new virtual disk:

![Image](24.png)

Set the disk size to 500GB and select the disk's format, then click ''Next'' to complete.

![Image](25.png)

Specify the disk file, the default setting is fine here.

![Image](26.png)

Click ''Finish'' by default.

![Image](27.png)

At this point, the virtual machine creation is complete.

### 3.2 System Installation

The installed Ubuntu version is 22.04, and all the introductions and development in this manual were carried out on Ubuntu 22.04 Image, [https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04/ubuntu-22.04.4-desktop-amd64.iso](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04/ubuntu-22.04.4-desktop-amd64.iso)

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

![Image](28.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click “OK”.

![Image](29-1789700978029.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image

![Image](30.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1730964229347_0783b665_ffd3_42b5_935f_9d3c45fd1eb7.png)

After selecting the language on the left side of the image, click `Install Ubuntu` to open the language selection interface. The default language of Ubuntu is English, but others can also be selected. The default language can be changed later. After making your selection, click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1730964229421_67855201_9acb_4c81_8590_3f8826645d2a.png)

Then, use the default keyboard layout and click Continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1730964229511_2186fdfb_726d_4641_b0e3_2b7ea6f1ec58.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1730964229593_be840ab7_8bfc_488a_8386_320ecfdb591c.png)

Click “Next”.

![Image](1726292002173_2d36ed67_6b29_41d8_8ca7_ec1aa50d8a84.png)

Set a username and password, click, and wait for the installation to complete.

### 3.3 System Settings

#### 3.3.1 Virtual Memory (Swap) Setup

On certain platforms, compilation may require significant memory. If the host computer has limited total memory (e.g., allocating only 8GB or less to the virtual machine), compilation may fail due to insufficient memory. In such cases, a swap file can be configured to utilize a portion of the hard disk space as virtual memory. However, since hard disk read/write speeds are significantly slower than physical memory, using virtual memory will inevitably reduce performance. Therefore, using physical memory is strongly recommended whenever possible.   
When creating the virtual machine, 8GB of memory was allocated. If 8GB of memory is insufficient during compilation, you need to modify the size of the swapfile.

```bash
forlinx@ubuntu:~$ sudo swapoff /swapfile
forlinx@ubuntu:~$ sudo dd if=/dev/zero of=/swapfile bs=1G count=32
forlinx@ubuntu:~$ sudo mkswap /swapfile
forlinx@ubuntu:~$ sudo swapon /swapfile
```

#### 3.3.2 Network Configuration

![Image](1726292003563_ef1f0816_9727_475a_9115_1f2df7b52969.png)

**3.3.2.1 NAT (Network Address Translation) Connection Mode**

By default, after the virtual machine installation is complete, the network connection mode is set to NAT, as shown in the figure below, sharing an IP address with the host machine. This setting does not need to be changed when installing dependency packages, compiling code, etc.   
In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device connects and communicates with the host’s network card for internet access. This is the most commonly used method for the virtual machine to access the external network.

### 3.3 Bridged Connection Mode

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode.

## 4\. Android System Compilation

### 4.1 Preparation Before Compilation

#### 4.1.1 Compilation Environment

Install the compilation environment. The virtual machine provided by Forlinx has already completed the installation. You can skip this section.

```bash
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get install software-properties-common
forlinx@ubuntu:~$ sudo add-apt-repository ppa:openjdk-r/ppa
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get install uuid uuid-dev zlib1g-dev liblz-dev liblzo2-2 liblzo2-dev lzop \
    git curl u-boot-tools mtd-utils android-sdk-libsparse-utils openjdk-8-jdk \
    device-tree-compiler gdisk m4 make bc fakeroot unzip zip gawk busybox libncurses5 \
    libstdc++6 lib32stdc++6 bison flex python2 libssl-dev cpio lz4 rsync
forlinx@ubuntu:~$ sudo ln -s /usr/bin/python2 /usr/bin/python
```

#### 4.1.2 Prepare the Source Code

Copy the source code ( ) into the virtual machine directory and extract it.

```bash
forlinx@ubuntu:~/work$ cat OK3572-android-source.* | tar -jxv
```

### 4.2 Compilation

#### 4.2.1 Compiling the Kernel Separately

The kernel configuration is as follows:

+ config：
  - rockchip\_defconfig
  - android-16.config
  - OK3572-C-android.config
  - rk3572.config
+ dts：
  - OK3572-C-android.dts

Compile

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3572-android-source$ lunch ok3572_c-bp4a-userdebug
forlinx@ubuntu:~/work/OK3572-android-source$ ./build.sh -Ku
```

#### 4.2.2 Compiling Android Separately

The directory `device/rockchip/rk3572/ok3572_c` for Android configuration files.

Compilation Command

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3572-android-source$ lunch ok3572_c-bp4a-userdebug
forlinx@ubuntu:~/work/OK3572-android-source$ ./build.sh -Au
```

#### 4.2.3 Full Compilation and Image Packaging

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3572-android-source$ lunch ok3572_c-bp4a-userdebug
forlinx@ubuntu:~/work/OK3572-android-source$ ./build.sh -KAup
```

+ The generated files are located in the directory `rockdev/Image-ok3572_c`.
+ `update.img` can be used for flashing the system.

### 4.3 OTA Upgrade Package

A full OTA package contains the complete system. An incremental OTA package contains only the differences between two versions. Therefore, to perform an incremental upgrade correctly, the development board must already have the lower version of the system flashed.

#### 4.3.1 Full OTA Upgrade Package

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3572-android-source$ lunch ok3572_c-bp4a-userdebug
forlinx@ubuntu:~/work/OK3572-android-source$ ./build.sh -KAuop
```

+ The generated files are located in the directory `rockdev/Image-ok3572_c`.
+ Rename `ok3572_c-ota.zip` to `update.zip`, and it can be used for a full OTA upgrade.

#### 4.3.2 Incremental OTA Upgrade Package

First, release the v1.0 version image and flash it to the development board. (Flashing can be done via OTG cable, TF card, etc.)

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3572-android-source$ lunch ok3572_c-bp4a-userdebug
forlinx@ubuntu:~/work/OK3572-android-source$ ./build.sh -KAuop
```

Generate the `rockdev/Image-ok3572_c/ok3572_c-target_files.zip` for the v1.0 version. For the convenience of description in this document, rename it as `files-v1.0.zip`.

Modify the kernel code or Android code (to upgrade to v2.0).

Following the same steps as step 1, generate the v2.0 version target files, naming them as `files-v2.0.zip`.

Generate the incremental upgrade package from v1.0 to v2.0.

```bash
forlinx@ubuntu:~/work/OK3572-android-source$ out/host/linux-x86/bin/ota_from_target_files -v -i files-v1.0.zip --block -p ./out/host/linux-x86 files-v2.0.zip ./v1.0--v2.0.zip
```

The generated `v1.0--v2.0.zip` is the incremental upgrade package from v1.0 to v2.0.

Rename `v1.0--v2.0.zip`to`update.zip` , and it can be used for an incremental OTA upgrade (provided the development board is running the v1.0 version system).

If you encounter failures while generating OTA packages in the virtual machine, you can adjust line 3328 of the file build/make/tools/releasetools/common.py to increase the default timeout.![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1780373285882_bd20e4f6_d60b_424f_8c47_3d7858a75a5f.png)

## 5\. Android Application Development

This chapter explains how to set up an Android application development environment, including downloading and installing the Android SDK and the Android Studio integrated development environment, as well as how to use the OK3572 development board as a physical device for debugging. It is very suitable for Android beginners to learn and reference.

### 5.1 Installing Android Studio

Open `3-tools\android-studio-panda2-windows.exe`  
Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077134865_ad7b6839_eb98_4aec_9880_1cc15745f778.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077141668_7121b4f8_7c49_40c1_b041_47d42b51cb3e.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077397900_2ff5640e_b949_4ee9_a71a_0d42a9e6262c.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077277299_8a3832a1_eae3_403a_b458_9997e097a3ed.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077433893_fb71ccfe_c4f9_447b_92c2_86baaf9c056b.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077441667_cfe05dcf_32cc_463f_a815_fc31ed164fc9.png)

Installation is complete.

Configure the SDK. Click the small gear icon.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077534874_cd12d206_126b_4de1_8d78_6b718fc943bd.png)

Click "SDK Manager".

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077574553_76d56e7b_04c5_49c7_83a4_f232c8566ce1.png)

Click "Apply".

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077688240_e38ad252_437a_41ed_935f_a5948e919dac.png)

Click “OK”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779077719262_982135b3_d21f_4561_953b_7a54370a039e.png)

Wait for the download to complete, then click “Finish”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779079421237_1c39ecff_f7d1_462f_98a5_f8bae243104a.png)

### 5.2 Creating a New Project

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779081063944_c9e9cc9e_2c34_4832_8e7a_d4208f7b18ae.png)

Select `Empty View Acticity`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779081080056_0801b56f_6015_4d27_9a6f_33985c3ce826.png)

Modify project name and other information, then click `Finish`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779074825043_3733d440_7765_40d4_8151_a97cb5123164.png)

The first time you create a project, the relevant SDK and tools will be downloaded automatically, indicated by a prompt in the status bar.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779081130401_facde13a_0bdd_49ad_907e_2a5cf4d300f8.png)

If there are JDK-related errors, click `Setup SDK` and select the first option.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779081154001_7c665c28_6a29_4aa5_b880_642b95108d95.png)

Connect the development board to the computer, ensure adb works normally. Click the run button in the title bar to compile the project and install/run it on the development board.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779083197324_97fa779c_48a3_445b_a34d_db60d8b293a7.png)

### 5.3 APK Platform Signature

If your Windows system does not have the `openssl`command, please download and install it from [http://slproweb.com/products/Win32OpenSSL.html](http://slproweb.com/products/Win32OpenSSL.html) and set the environment variables.

In the Android platform, SELinux classifies Apps into three types: `untrusted_app` without platform signature and system permissions, `platform_app` with platform signature but without system permissions, and `system_app` with both platform signature and system permissions. This section will introduce how to sign an APK to obtain system permissions.

#### 5.3.1 Creating a Signature File

Copy the files `platform.x509.pem` and `platform.pk8` from `build/target/product/security/` in the Android system to Windows.

Open a command-line window and execute:

```bash
openssl pkcs8 -in platform.pk8 -inform DER -outform PEM -out shared.priv.pem –nocrypt
openssl pkcs12 -export -in platform.x509.pem -inkey shared.priv.pem -out shared.pk12 -name androiddebugkey
```

Enter the password `android`.

```bash
keytool -importkeystore -deststorepass android -destkeypass android -destkeystore debug.keystore -srckeystore shared.pk12 -srcstoretype PKCS12 -srcstorepass android -alias androiddebugkey
```

You can modify the `key-alias` and `password` as needed. Save the signature file `debug.keystore` to your commonly used directory.

#### 5.3.2 Configuring Android Studio

Open the Android Studio project and add a shared UID in `AndroidManifest.xml`, for example:

```bash
5.<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:sharedUserId="android.uid.system">
```

Click `File` -> `Project Structure`:

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779083432699_fda45b7f_5a73_4029_b3a1_ae86e94bb1b2.png)

Click `OK`.

Click the small `+` sign, fill in `release` in the same way as debug.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779083564676_8382dc9a_249b_4474_9d15_ffc0a164ebe9.png)

After modification, recompile and run the app. Now, using the `ps` command, you can see the app is running as the `system` user `system_app`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/ok3572-c/OK3572-C_Android16_User_Compilation_Manual/1779083665935_335e594e_d2db_4301_8986_8c635aec0bd6.png)

### 5.4 Method for System Pre-installed APK

Create a new directory in the Android system:

```bash
forlinx@ubuntu:~/work/OK3572-android-source/android$ mkdir packages/apps/helloworld
```

Copy the APK to be pre-installed (unsigned) to the directory. Using `helloworld.apk` as an example:

```bash
forlinx@ubuntu:~/work/OK3572-android-source/android$ cp helloworld.apk packages/apps/helloworld
```

Since Android 16 disables using `Android.mk` files for compilation in the `packages/app` directory, create a new `Android.bp` in `packages/apps/helloworld`.

```bash
package {
    // See: http://go/android-license-faq
    default_applicable_licenses: ["Android-Apache-2.0"],
}

android_app_import {
    name: "helloworld",
    apk: "helloworld.apk",
    certificate: "platform",
    privileged: true,
    dex_preopt: {
        enabled: false,
    }
}

```

Modify `device/softwinner/ok3572-c/ok3572_c.mk` and add the following content.

```bash
PRODUCT_PACKAGES += \
    helloworld
```

Recompile the image.

### 5.5 App Obtaining Root Permissions

Currently, only `system_app` can obtain root permissions. The `Root access` switch needs to be enabled in `Developer Options`. For related steps, refer to the 《OK3572-C_Android16_User Manual》. Refer to the app source code in `vendor/forlinx/RootChecker/`