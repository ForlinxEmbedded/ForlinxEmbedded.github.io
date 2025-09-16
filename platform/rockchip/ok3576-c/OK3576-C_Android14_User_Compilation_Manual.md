# OK3576-C\_Android14.0\_User’s Compilation Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual is designed to enable you to quickly understand the compilation process of the products and familiarize yourselves with the compilation methods of Forlinx products. The application needs to be cross-compiled on an Ubuntu host before it can run on the development board. By following the methods provided in the compilation manual and performing practical operations, you will be able to successfully compile their own software code.   	The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.   
Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine. Computer Hardware Requirements: It is recommended to have at least 16GB memory or above.It allows for allocating a sufficient memory to the virtual machine (recommended to allocate 16GB or above), while still leaving enough resources for other operations on Windows. Insufficient memory allocation may result in slower performance on Windows.   
The manual is mainly divided into five chapters:

+ Chapter 1. Virtual Machine software installation - introduction to downloading and installing Vmware software;
+ Chapter 2. provides the loading of the ubuntu system;
+ Chapter 3. Building, setting up, and installing necessary tools for the Ubuntu system and common issues in development environments;
+ Chapter 4. mainly focuses on the deployment and usage of Docker containers, kernel compilation, as well as Android-related source code;
+ Chapter 5. is the description of android application development.

A description of some of the symbols and formats in the manual:

| **Format**| **Meaning**|
|:----------:|----------|
| **Note** | Note or information that requires special attention, be sure to read carefully|
| 📚 | Relevant notes on the test chapters|
| ️️🛤️️️️ | Indicates the related path.|
| <font style="color:blue;background-color:#d7d7d7;">Blue on gray</font> | Refers to commands entered at the command line (Manual input required).|
| <font style="color:black;background-color:#d7d7d7;">Black font on gray background</font> | Serial port output message after entering a command|
| **<font style="color:black;background-color:#d7d7d7;">Bold black on gray background</font>** | Key information in the serial port output message|
| // | Interpretation of input instructions or output information|
| Username@Hostname| forlinx@ubuntu: Development environment Ubuntu account information Users can determine the functional operating environment with this information.|

Example: Search the Docker-CE version:

```shell
forlinx@ubuntu:~$ apt-cache madison docker-ce                   # Find the version of Docker-CE
docker-ce | 18.06.3~ce~3-0~ubuntu | http://mirrors.aliyun.com/docker-ce/linux/ubuntu/trusty/stable amd64 Packages
```

+ `forlinx@ubuntu`：User’ name: forlinx, host name: ubuntu, whic indicating the user forlinx is used on the development environment ubuntu for operations.
+ `#` ：Explanation of the instruction, no input required.
+ `apt-cache madison docker-ce`：Blue font indicates the relevant commands that need to be entered manually.
+ `docker-ce | 18.06.3~ce~3-0~ubuntu`：Black font is the output information after the input command, and the bold font is the key information.

## Application Scope

This manual is mainly applicable to the Android14 operating system on the Forlinx OK3576-C platform. Other platforms can also refer to it, but there will be differences between different platforms. Please make modifications according to the actual conditions.

## Revision History

| **Date**| **Manual Version**| **Revision History**|
|:----------:|:----------:|----------|
| 08/11/2024| V1.0| OK3576-C Android14_User’s Compilation Manual Initial Version |

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces VMware virtual machine installation, and takes`VMware workstation 15 Pro`as an example to show the installation and configuration process of operating system.

### 1\.1 VMware Software Download \& Purchase

Visit Vmware official website https://www.vmware.com/cn.html for downloading Workstation Pro and obtaining the product key. VMware is a paid software, you need to buy it yourself, or use the trial version provided by VMware.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964222993-631476f6-6792-4565-88e3-5f35c07205e7.png)

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223101-381e785b-91aa-4bd5-b8a2-e9b57d3482c9.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223210-43737a0c-16a9-45d4-8987-335455f5e0bd.png)

Check the terms in the license agreement that I accept, then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223348-749b77fa-a5c5-4652-861f-96b2fd7de3fe.png)

Modify the installation location to the partition where the software is installed on your computer, and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223470-bc50d3be-b099-4fa4-b761-1381428e7b52.png)

Check and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223557-96743400-c69b-48f3-872c-455fd5dc92db.png)

Check Add Shortcut and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223686-8aa0f22c-0367-4c8d-8151-0fd9bfb5f8f3.png)

Click "Install".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223764-6ec848f6-efc5-41fa-80e6-c977054ec9e0.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964223871-9dec8163-07f0-45ed-82ea-193b4fc11e91.png)

Click "Finish" to try it out. For long-term usage, users need to purchase from the official site and fill out the license application.

## 2\. Loading the Existing Ubuntu Development Environment

It is recommended for beginners to directly use the pre-built virtual machine environment provided by Forlinx, which already includes installed cross-compiler and Qt environment. After understanding this chapter, you can directly jump to the compilation chapter for further study.

Common user name:`forlinx`, password:`forlinx`

Please ask your sales representative for the download link.

There are two ways to use a virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. Let's first talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum. (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964225451-9c9f1318-45b2-45c4-92e2-1cb2776ebce5.png)

Select all compressed files, right-click and extract to the current folder or your own directory:

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964225542-28d5ad72-4196-4829-b495-dd2fc5c3c5da.png)

After unpacking, you will get the development environment`OK3576-VM15.1.0-Ubuntu22.04`. `OK3576-VM15.1.0-Ubuntu22.04.vmx`is virtual machine file.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964225631-4c1e382f-229c-4aca-aeda-700d5528c645.png)

Open the installed virtual machine, select the`OK3576-VM15.1.0-Ubuntu22.04.vmx`just unzipped, and double-click to open the startup file.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964225763-2ea7d704-144d-4bd2-ba79-b2f2f603524c.png)

After loading, click`Open the virtual`to run and enter the system interface.

The development environment has forlinx user and root user.

+ User's name`forlinx`, password`forlinx`.
+ User's name`root`, password`root`.

## 3\. New Ubuntu Development Environment Setup

This chapter mainly explains the building process of Ubuntu system.

Beginners are not recommended to set up a system on their own. It is recommended to use an existing virtual machine environment. If you do not need to set up the environment, you can skip this section.

### 3.1 Creating an Ubuntu Virtual Machine

Open VMware software and click` File`->`Create New Virtual Machine`to enter the following：

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964227414-3edd9205-a894-4a51-97ae-8c39c94bb0be.png)

Select Custom and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964227622-9c601b37-1755-4889-959a-038ffeeaa8b5.png)

Select the compatibility that corresponds to the VMware version, the version can be viewed in`Help`->`About VMware Workstation`, click the “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964227731-3c701a08-2e09-4d3a-8ef2-442adb748eff.png)

Select to install the operating system later and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964227843-63162a40-ba19-4aea-b8d5-20642790227d.png)

To keep the default, click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964227978-67bb4b5f-f226-451c-ae90-7ff661b29a08.png)

Modify the virtual machine name and installation location, click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228070-4b5ca3fb-22e0-42ef-854e-e6dfdc31ef99.png)

Set the number of processors according to the actual situation.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228151-31374531-110f-47ab-88cc-eb3b560a3e7e.png)

Also set the memory size according to the actual situation (it is recommended to adjust the memory size to 20g or more).

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228260-aae4e91b-4c23-4aa3-aba4-1aa2b369d916.png)

Set the network type, the default is NAT mode, click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228359-2ede8765-c725-4ea3-90cc-4ae8a53d5a1c.png)

To keep the default, click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228435-a3379fa3-9cf7-4a33-b989-ad3718a9a5b8.png)

To keep the default, click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228519-8e111534-62d9-458c-a08d-1f233bdf810d.png)

Choose to create a new virtual disk here.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228623-3fea80d1-731f-4ac3-bc24-7536d48283e2.png)

Set the disc size to 500G, select the disc form, and click "Next" to finish.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228702-654b46e9-479d-4daf-abb3-7169868660eb.png)

Specify the disk file, the default one here is fine.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228785-5c7a5011-5baa-4dda-8eba-53afe89d710b.png)

Click “Finish” by default.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228887-db2d16d9-88f0-4027-af79-fedbc0080eef.png)

At this point, virtual machine creation is complete.

### 3.2 System Installation

Ubuntu version is 22.04; the introduction and development in this manual are carried out on Ubuntu22.04. Use the Tsinghua image site to download, the address is [https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04/ubuntu-22.04.4-desktop-amd64.iso](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04/ubuntu-22.04.4-desktop-amd64.iso)

Right-click on the newly created Ubuntu 64bit and select Settings from the pop-up menu.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964228965-3075e710-081a-42d8-8efa-4bf430708aba.png)

The "Virtual Machine Settings Menu" pops up as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229053-b0868896-bd7d-495d-8e1a-ff5d4b8189b5.png)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229132-37326492-cccc-44a8-8866-8b7ca247ef16.png)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with Ubuntu image installation.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229273-3d038bb3-f89a-4502-a3e8-e10a15a13cca.png)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229347-0783b665-ffd3-42b5-935f-9d3c45fd1eb7.png)

After selecting the language on the left side as shown in the figure, click`Install Ubuntu`to pop up the language selection interface. Ubuntu's default language is English, of course, you can also choose other language, the default language can also be reset at a later stage, select Complete and click`Continue`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229421-67855201-9acb-4c81-8590-3f8826645d2a.png)

Use the default keyboard layout, click`Continue`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229511-2186fdfb-726d-4641-b0e3-2b7ea6f1ec58.png)

Click `Continue`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229593-be840ab7-8bfc-488a-8386-320ecfdb591c.png)

Click `Continue`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229669-0b5f8aba-79e9-402a-8782-82f73f4e7c48.png)

Set the user name and password, click `Continue`, and wait for the installation to complete.

### 3\.3 System Settings

#### 3.3.1 Virtual Memory Settings

Some platforms require a large amount of memory when compiling. If the total memory of the computer is not large, resulting in only 8GB or less allocated to the virtual machine, the compilation may fail. Now, you can set swapfile to use a portion of the hard drive space as memory. Hard disc read/write speeds are much less than memory read/write speeds, so using virtual memory will inevitably lead to performance degradation. Try to use physical memory as much as possible.   
The memory allocated when creating the virtual machine is 8GB. If the 8GB memory is not enough during compilation, the size of the swapfile needs to be modified.

```plain
forlinx@ubuntu:~$ sudo swapoff /swapfile
forlinx@ubuntu:~$ sudo dd if=/dev/zero of=/swapfile bs=1G count=32
forlinx@ubuntu:~$ sudo mkswap /swapfile
forlinx@ubuntu:~$ sudo swapon /swapfile
```

#### 3.3.2 Network Configuration

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964229812-5497b436-9472-43b7-9c68-cc6a20c4b06d.png)

#### 3.3.3 NAT Connection Method

By default, after the virtual machine is installed, the network connection method is set to NAT, which shares the host machine's IP address. This configuration does not need to be changed when performing tasks like installing dependencies or compiling code.   
When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. In this mode the virtual NAT device and the host NIC are connected to communicate for Internet access. This is the most common way for our VM to access the external network.

#### 3.3.4 Bridge Connection

When the VMware virtual NIC device is in bridge mode, the host NIC and the virtual machine NIC communicate through the virtual bridge, and the network IP and the host need to be set in the same network segment in the Ubuntu environment. If accessing an external network, you need to set the DNS to be consistent with the host NIC. If TFTP, SFTP and other servers are used, the network contact mode of the virtual machine needs to be set as the bridge mode.

## 4\. Android System Compilation

### 4.1 Preparation Before Compilation

#### 4.1.1 Compilation Environment

Install the compilation environment. The virtual machine provided by Forlinx has been installed. This section can be skipped.

```shell
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

### 4.2 Code Preparation

Copy the code (`2-image and source code\1-source code`) to the virtual machine`/home/forlinx/work/`directory and unzip it

```plain
forlinx@ubuntu:~/work$ cat OK3576-android-source.* | tar -jxv
```

### 4.2.1 Compilation

##### 4.2.1.1 Individual Kernel Compilation

The kernel is configured as follows:

+ config：
  - rockchip\_defconfig
  - android-14.config
  - OK3576-C-android.config
  - rk3576.config
+ dts：
  - OK3576-C-android.dts

Compilation

```shell
forlinx@ubuntu:~/work/OK3576-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3576-android-source$ lunch ok3576_c-userdebug
forlinx@ubuntu:~/work/OK3576-android-source$ ./build.sh -Ku
```

##### 4.2.1.2 Individual Android Compilation

Android partial profile directory`device/rockchip/rk3576/ok3576_c/`

Compilation command.

```plain
forlinx@ubuntu:~/work/OK3576-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3576-android-source$ lunch ok3576_c-userdebug
forlinx@ubuntu:~/work/OK3576-android-source$ ./build.sh -Au
```

#### 4.2.3 Fully Compiled and Packaged Image

```plain
forlinx@ubuntu:~/work/OK3576-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3576-android-source$ lunch ok3576_c-userdebug
forlinx@ubuntu:~/work/OK3576-android-source$ ./build.sh -KAup
```

+ Generated files directory is`rockdev/`and`IMAGE/OK3576_C_USERDEBUG_OK3576-C-ANDROID__xxxxxxxxxx/`
+ `update.img`can be used for system flashing.

### 4.3 OTA Upgrade Package

Full package includes entire system, incremental package contains version differences. Ensure low version is flashed on the board before using incremental upgrade.

#### 4.3.1 OTA Full Upgrade Package

```plain
forlinx@ubuntu:~/work/OK3576-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3576-android-source$ lunch ok3576_c-userdebug
forlinx@ubuntu:~/work/OK3576-android-source$ ./build.sh -KAuop
```

+ Generated files directory is`rockdev/`and`IMAGE/OK3576_C_USERDEBUG_OK3576-C-ANDROID__xxxxxxxxxx/`
+ Rename`ok3576_c-ota-eng.root.zip`to`update.zip`for full OTA upgrade

#### 4.3.2 OTA Incremental Upgrade Package

1. First, release the v1.0 version image and burn it to the development board. (Both OTG and TF card flashing are OK).

```powershell
forlinx@ubuntu:~/work/OK3576-android-source$ source build/envsetup.sh
forlinx@ubuntu:~/work/OK3576-android-source$ lunch ok3576_c-userdebug
forlinx@ubuntu:~/work/OK3576-android-source$ ./build.sh -KAuop
```

The generated`IMAGE/OK3576_C_USERDEBUG_OK3576-C-ANDROID__xxxxxxx/IMAGES/ok3576_c-target_files-eng.root.zip`is v1.0 material package. For easy description, named as`files-v1.0.zip`

2. Modify the kernel code or Android code (upgraded to v2.0)
3. Same as step 1, generate a v2.0 package named`files-v2.0.zip`
4. Generate v1.0-v2.0 incremental upgrade package.

```plain
forlinx@ubuntu:~/work/OK3576-android-source$ out/host/linux-x86/bin/ota_from_target_files -v -i files-v1.0.zip --block -p ./out/host/linux-x86 files-v2.0.zip ./v1.0--v2.0.zip
```

Generated`v1.0--v2.0.zip`is the incremental upgrade package from v1.0 to v2.0.

5. Rename`v1.0--v2.0.zip`to`update.zip`, which can be used for OTA incremental upgrade (the development board needs to be a v1.0 system)

## 5\. Ubuntu Application Development

This chapter explains how to set up the Android application development environment, including downloading and installing the Android SDK and Android Studio integrated development environment, as well as using the OK3576 development board for on-device debugging. It is highly suitable for Android beginners to learn from and refer to.

### 5.1 Android Studio Installation

Open`3-tools\android-studio-2024.1.1.12-windows.exe`  
Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964232750-d2a7b496-d768-4569-a775-0d608ac99cf2.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964232840-74c91d77-0a6e-4905-8e1c-174e8da37729.png)

Click "Install".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964232985-6be34815-955e-4432-a511-ac1fd4285426.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233075-83f41638-9f1b-42a1-a402-d4259c696c90.png)

Click "Finish".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233166-39fd326f-3e00-43d4-84f7-8d66f2099771.png)

Installation completed.

Configure sdk, click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233294-cb3b13c3-5b25-416e-a281-b0ea94f29ead.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233481-6464b760-c699-4021-ae56-30c84718974e.png)

Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233572-20025940-de72-4e22-adbe-35a64e890f69.png)

Select "Accept" click "Finish".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233656-5ae7f139-f1f0-4cd8-b8af-99197c10d7db.png)

After waiting for the download to complete, click "Finish".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233751-8c70bcc4-d723-42c0-a32c-b133c18f03f8.png)

### 5.2 Creating New Project

Click `New Project`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233830-31138b20-047a-4a89-930b-0ceaa4ab7b41.png)

Select `Empty View Acticity`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964233902-cabb16b7-7142-43f0-948a-e559b56c840c.png)

Modify project name and other information, click "Finish".

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234049-50d8b770-2eb0-4fdf-8be3-987e10380c0d.png)

For the first time, relevant SDK and other tools will be automatically downloaded, and there will be a prompt in the status bar.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234185-14b03ff4-05ed-42ee-846d-9d18256af99f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234329-3f866496-3977-45a7-8bd7-6f10007a4b0a.png)

If there is a JDK-related error, click `Setup SDK`and select the first item.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234467-e49fe2b1-0090-4639-8592-9ee107b1d458.png)

Connect the development board to the computer to ensure that the ADB can be used normally; click the Run button in the title bar to compile the project and install it to the development board to run.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234560-8323128f-051e-4604-9822-b1b0d77e05e6.png)

### 5.3 Apk Platform Signature

If the`openssl`command is not available on your windows system, go to the [http://slproweb.com/products/Win32OpenSSL.html](http://slproweb.com/products/Win32OpenSSL.html) to download and install it, and set the environment variables.

SELinux in the Android platform will be divided into three kinds of Apps, including those without platform signature and system privileges `untrusted_app`, those with platform signature and no system privileges `platform_app`, and those with platform signature and system privileges `system_app`. This chapter will introduce how to sign the apk and obtain system permissions.

#### 5.3.1 Making Signature Document

Copy`build/target/product/security/platform.x509.pem` and`build/target/product/security/platform.pk8` in the Android system to Windows.

Open command line window to execute:

```plain
openssl pkcs8 -in platform.pk8 -inform DER -outform PEM -out shared.priv.pem –nocrypt
openssl pkcs12 -export -in platform.x509.pem -inkey shared.priv.pem -out shared.pk12 -name androiddebugkey
```

Enter the password`android`

```plain
keytool -importkeystore -deststorepass android -destkeypass android -destkeystore debug.keystore -srckeystore shared.pk12 -srcstoretype PKCS12 -srcstorepass android -alias androiddebugkey
```

You can modify`key-alias`and`password`according to the requirements. Save the signature file`debug.keystore`to your usually use directory.

#### 5.3.2 Andorid Studio Settings

Open “Android Studio”, add shared UID in`AndroidManifest.xml`:

```plain
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:sharedUserId="android.uid.system">
```

Click `File`->`project structure`:

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234712-9b808ecf-2eda-490d-9675-e0cf3d946b72.png)

Click `OK`.

Add the signature configuration of debug version and release version, and click `Build`->`Edit Build Types...`in the menu bar.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234842-4a5caae4-cb37-493b-b733-7819d1c71b16.png)

Modify debug and release `Signing Config`, and set to `$signingConfigs.debug`and `$signingConfigs.release` respectively, and click  `OK`to finish.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964234982-8377f125-0085-490f-8906-89b01dd12098.png)

After modification, recompile and run the app. At this time, you can see that the App is run by the system user through the PS command `system_app`.

![](https://cdn.nlark.com/yuque/0/2024/png/49874024/1730964235131-b878a053-7ade-4123-ba4d-7e5524d1fe82.png)

### 5.4 APK Pre-installation Method 

1. Create a new directory in Android system:

```plain
forlinx@ubuntu:~/work/OK3576-android-source/android$ mkdir packages/apps/helloworld
```

Copy the apk that needs to be pre-installed (no signature required) to the directory for`helloworld.apk`example:

```plain
forlinx@ubuntu:~/work/OK3576-android-source/android$ cp helloworld.apk packages/apps/helloworld
```

2. In `packages/apps/helloworld` create `Android.mk`

```plain
LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)
LOCAL_MODULE := helloworld
LOCAL_SRC_FILES := helloworld.apk
LOCAL_MODULE_CLASS := APPS
LOCAL_MODULE_SUFFIX := .apk
LOCAL_BUILT_MODULE_STEM := package.apk
LOCAL_CERTIFICATE := platform
LOCAL_DEX_PREOPT := false
LOCAL_PRIVILEGED_MODULE := true
include $(BUILD_PREBUILT)
```

3. Modify`device/softwinner/ok3576-c/ok3576_c.mk`, add the followings:

```plain
PRODUCT_PACKAGES += \
    helloworld
```

4. Recompile the image

### 5.5 Getting Root Permissions

Currently only `system_app`can get root privileges, need to `Developer options`open the `Root access`switch in the relevant steps referring to "OK3576-C\_Android14\_User’s Manual", app source code reference `vendor/forlinx/RootChecker/`.