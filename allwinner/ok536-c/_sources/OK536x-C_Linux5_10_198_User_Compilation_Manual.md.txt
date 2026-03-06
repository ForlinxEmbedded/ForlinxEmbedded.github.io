# Linux5.10.198_User's Compilation Manual\_V1.1

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.  

##  Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 03/03/2025 | V1.0| OK536-C Linux5.10.198 + Qt5.15.8 User’s Compilation Manual Initial Version|
| <font style="color:rgb(51, 51, 51);">28/07/2025</font>| <font style="color:rgb(51, 51, 51);">V1.1</font>| Adding command-line test program source code directory in section 4.1.3.|

## Application Scope

This software manual is applicable to the OK536 platform with Linux5.10 operating system from Forlinx.

## Overview

This manual is designed to help you quickly understand the compilation process and become familiar with the compilation methods. Applications need to be cross-compiled on an Ubuntu host before they can run on the development board. By following the methods in this compilation manual and through hands-on practice, you can successfully compile your own software code.

The manual will explain the environment setup process. Some unpredictable issues may arise during environment setup, so it is recommended that beginners directly use the pre-configured development environment Forlinx provide to get started quickly and reduce development time.

There are there installation methods: dual-boot on a physical machine, single-boot on a physical machine, or in a virtual machine. Each installation method has its advantages and disadvantages. This manual only provides a method for setting up Ubuntu in a virtual machine. Hardware requirements: It is recommended to have at least 16 GB of RAM or more. This ensures that after allocating memory for the virtual machine (it is recommended to allocate over 10 GB for the virtual machine), you can still perform other operations on Windows without significant lag.

There are total 5 chapeters:

Chapter 1. covers the installation of virtual machine software, briefly introducing the download and installation of VMware;

Chapter 2. covers loading the Ubuntu system Forlinx provide;

Chapter 3. covers setting up and configuring the Ubuntu system, installing necessary tools, and addressing common issues with the development environment;

Chapter 4. covers configuring the Qt compilation environment and methods for compiling programs.

Additionally, the manual includes explanations of some symbols and formats.

| **Format**| **Meaning**|
|:----------:|----------|
| //| Explanation of input commands or output information:|
| Username@Hostname| root@forlinx: Development board login account information; forlinx@ubuntu: Ubuntu account information in the development environment. You can use this information to determine the operating environment for functional operations.|

Example: When copying the source code, view the source code file through the ls command:

```plain
forlinx@ubuntu:~$ ls /mnt/hgfs/share/                                //View files in a shared directory
OKT536-linux-sdk.tar.bz2
```

Forlinx @ Ubuntu: The user name is forlinx and the host name is Ubuntu, which means that the forlinx user is used to operate on the development environment Ubuntu.

// : Explanation for the operation ls /run/media, no need to input.

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 15 Pro v15.5.6 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079121244-b1781bd8-d4da-4103-bf22-b85ea7b85834.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the setup file to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079142871-4a15056b-c774-4cdf-8285-2bb081323c93.png)

Click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079159587-f1bc696a-cc53-4b7d-8df1-9f0660cc88c5.png)

Check “I accept the terms in the license agreement” and click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079174511-f70aee38-d83e-4d75-b875-bbc0968ef617.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079184114-1cdf6c73-4a92-4713-9595-47a8c36c164c.png)

Check, then click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079198669-5c9c9b4c-9a51-41ef-9bcb-c157ed98e036.png)

Check “Add shortcuts” and click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079209843-fb94bed8-c4c3-40e6-badd-a9336c61b81d.png)

Click “Install.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079221521-57505963-3f30-4034-ab79-3febbe1b8959.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1723079233778-a6d19fda-9c5c-40cf-853b-c76a62f3f3b6.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

- **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters.**

- **The provided development environment has a regular user account: forlinx, with password: forlinx. The superuser account is: root, with password: root.**

You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment materials include an MD5 checksum file. After downloading the materials, please first perform an MD5 checksum on the development environment archive (located in 3-Tools\\md5sums-1.2.zip) to verify if the checksum matches the one in the checksum file. If they match, the download is successful; if not, the file may be corrupted and needs to be re-downloaded.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982150295-96b819ec-f9b9-4b51-a2da-b94dc6921394.png)

Select OK536-VM15.5.6-ubuntu20.04, right-click, and extract it to the current folder or your desired directory:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982150414-11ae999c-82bc-45d2-8401-030d4e8b3dab.png)

After extraction, you will obtain the development environment folder OK36-VM15.5.6-ubuntu20.04.

The file OK536-VM15.5.6-ubuntu20.04.vmx inside the OK536-VM15.5.6-ubuntu20.04 folder is the file to be opened by the virtual machine.

Open the installed virtual machine software.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948433154-61bdd056-eea7-412e-bb47-2ca27326221e.png)

Select the directory where the newly extracted OK536-VM15.5.6-ubuntu20.04 virtual machine file is located, and double-click the startup file to open it.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982150530-8e97d3f0-362c-4f1e-815f-73af12ff03c9.png)

After loading, click “Power on this virtual machine” to run it and enter the system interface.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982150611-24565f6d-f21a-4061-9e02-32973ee4618b.png)

The provided development environment is set to automatically log in to the account forlinx on startup by default.

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

This chapter mainly explains the setup process of the Ubuntu system and the installation of Qt Creator. If QT is not used, the installation of Qt Creator can be ignored.

### 3.1 Ubuntu System Setup

The Ubuntu version to install is 20.04. The descriptions and development in this document are all based on Ubuntu 20.04. First, go to the Ubuntu official website to obtain the Ubuntu 20.04 64-bit image. The download address is: http://releases.ubuntu.com/20.04/

Download the “ubuntu-20.04.6-desktop-amd64.iso” version (the specific version to download can be based on your own needs; here we use version 20.04.6 as an example).

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948846066-ec162f18-7e2d-4487-ac4d-e38cdc5ed1fa.png)

#### 3.1.1 Creating an Ubuntu Virtual Machine

Step 1: Open the VMware software and click “Create a New Virtual Machine”. On the following screen, check “Custom (advanced)” and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948893126-e3590cfb-7439-4651-924f-a2d10374da9f.png)

Step 2: Select the compatibility for the corresponding VMware version (you can view the version under Help -> About VMware Workstation). After confirming, click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948932428-9511048d-e2d7-4f7a-8395-0821cef9cb79.png)

Choose “Installer disc image file (iso)” and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948970851-e5167620-f7bc-4451-9278-0138cdc7719c.png)

Enter the full name, username, and password, then click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718948988345-6bc05b9f-e9f7-4f69-9958-6601680f096b.png)

Enter the virtual machine name and configure the installation location, then click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949004063-573e7818-db79-447f-87be-7300ada8564f.png)

Configure the number of cores, then click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949028219-34f18366-f692-4a22-b57b-54d17b6c25ad.png)

Configure at least 8GB of memory and select “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949106542-abdb4dd3-94ff-4717-aae8-49ff1552ddc5.png)

Set the network type, use the default NAT networking, and click “Next”. Subsequent steps remain at their default values until the disk capacity step is specified.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949123407-6494b5a1-1357-440c-95d5-99782ec611f7.png)

Use the recommended I/O controller and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949139079-ff464474-be29-4f7a-8bd4-947d20c6330c.png)

Use the recommended disk type and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949153183-98ee5751-ae4f-4587-94b0-471fc1a3ae2a.png)

Use the default option, “Create a new virtual disk”, and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949166693-8782adbb-56d4-4831-bb1c-31b4156f3740.png)

Allocate a disk size of 80GB and choose “Split virtual disk into multiple files”, then click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949181244-213bc0ba-c5c3-4af7-b2bf-e376f015b5c7.png)

Use the default settings and click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949199722-746f65a3-37d5-4f62-947b-a5569544f780.png)

Click “Finish”:

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949214671-bc902643-637a-486d-9ac4-61a49f72171d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949231445-fcd76a84-fea5-451c-ad59-800cd108292e.png)

At this point, the virtual machine creation is complete.

Afterward, click “Power on this virtual machine” to start installing the image. Please wait patiently.

With the above, the Ubuntu system installation is complete.

#### 3.1.2 Basic Configuration of Ubuntu

##### 3.1.2.1 VMware Tools Installation

VMware Tools should be installed automatically after creating the virtual machine. If it is not successful, install it according to the following steps.

Without this tool, copy-paste and file drag-and-drop between the Windows host and the virtual machine will not work.

First, click “Virtual Machine” on the VMware navigation bar, then click “Install VMware Tools” in the dropdown menu.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949273811-f3e92114-4eea-4b65-862c-dbb8304364f9.png)

After completion, enter Ubuntu. A VMware Tools CD will appear on the desktop; click to enter it.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949359798-ba856cf3-7059-41d2-96ed-a599e55d10fc.png)

After entering, you will see a compressed file VMware Tools-10.3.10-12406962. tar. gz (different virtual machine versions may be different), and copy the file to the home directory (that is, the directory of the home personal user name).

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949385494-91210da6-b0d4-4d43-a4b7-60b589eaf39f.png)

Press \[Ctrl+Alt+T] to bring up the terminal command interface and enter the command to extract it:

```plain
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz
```

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949403392-ae4f707b-f5e8-49ae-ad9a-70858568cbe2.png)

After extraction completes, a folder named “vmware-tools-distrib” will appear.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949418780-e8c547ab-60de-4c4c-a5bb-9f73fff7b700.png)

Return to the terminal and enter:

```plain
cd vmware-tools-distrib
```

to navigate into that directory.

Then enter:

```plain
sudo ./vmware-install.pl
```

Press Enter, enter your password, and the installation will begin. When prompted, enter “yes”; for other prompts, press Enter to accept the default installation.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949432279-4216de1f-7cf9-4c48-9d11-262568195cdb.png)

After VMware Tools installation is complete, file copy-paste between Windows and Ubuntu will be enabled.

##### 3.1.2.2 Virtual Machine Full-Screen Display

If the virtual machine cannot display in full screen, you can click on “View”, select “Auto-Adjust Size”, and then click “Autofit Guest” to resolve the full-screen issue.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949460433-abac797c-fb21-47c2-90a5-951390afdaee.png)

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949472087-a7f61941-4de2-49c9-acc8-4e93358132b0.png)

##### 3.1.2.3 Virtual Machine Sleep Settings

Additionally, the default sleep setting is 5 minutes. If you do not want the system to go to sleep, go to Settings -> Power -> Blank Screen and set it to “Never”.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949527824-2c751878-01cd-4e46-ad0f-9af78af1ccaf.png)

#### 3.1.3 Virtual Machine Swapfile Configuration

When creating the virtual machine, 8GB of memory was allocated. If 8GB of memory is insufficient during compilation, you need to modify the size of the swapfile.

```plain
forlinx@ubuntu:~$ sudo swapoff /swapfile
forlinx@ubuntu:~$ sudo dd if=/dev/zero of=/swapfile bs=1M count=16384
forlinx@ubuntu:~$ sudo mkswap /swapfile
forlinx@ubuntu:~$ sudo swapon /swapfile
```

#### 3.1.4 Virtual Machine Network Configuration

##### 3.1.4.1 NAT Connection Mode

By default, after the virtual machine installation is complete, the network connection mode is set to NAT, as shown in the figure below, sharing an IP address with the host machine. This setting does not need to be changed when installing dependency packages, compiling code, etc.

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device connects and communicates with the host’s network card for internet access. This is the most commonly used method for the virtual machine to access the external network.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949560787-ecabd604-18e6-4ed4-8e99-14b964deb1c9.png)

##### 3.1.4.2 Bridged Connection Mode

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. When using servers like TFTP or SFTP, you need to set the virtual machine’s network connection method to bridged mode.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718949577128-36c6f2e1-80d0-4fa6-8fad-8e99fe54be14.png)

### 3.2 Installing Toolkits

To install the necessary toolkits required for compiling T536N, please execute the following commands. Ensure the network is functioning normally and can access the external internet before installation:

```plain
forlinx@ubuntu:~$ sudo apt-get update
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot make automake \
autoconf libtool libssl-dev bc dosfstools mtools parted iproute2 kmod \
libyaml-dev device-tree-compiler python flex bison build-essential \
u-boot-tools libncurses-dev lib32stdc++6 lib32z1 libc6:i386 libxcb-cursor0 \
libxcb-cursor-dev libgl1-mesa-dev libxcb-xinerama0
```

### 3.3 Qt Creator Installation

QT no longer provides offline installation for versions 5.15 and above. Use the online installation method. The installation package is located at: 3-Tools\\qt-unified-linux-x64-online.run

Copy qt-unified-linux-x64-online.run to any directory under the current user’s home directory.

Execute in the terminal of the directory where the file is located ./qt-unified-linux-x64-online.run --mirror [https://mirrors.ustc.edu.cn/qtproject](https://mirrors.ustc.edu.cn/qtproject)

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152079-e53cba6d-2423-4b93-bd75-849acbc1080f.png)

Register a QT account, fill in the details, and proceed to the next step.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152168-6020319e-ba81-4429-9ab7-590d51b9a82e.png)

Click “Next”:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152344-d0d38baa-ee28-4294-aba3-b46425fc59fe.png)

Click “Next”:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152492-e4352d3c-c0c6-480b-b52b-10358cf15473.png)

Click “Next”:

**Note: In this step, you need to select “Archive” on the right, then click “Filter” to update it.**



![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152618-63b9d19d-f6b8-4e5b-bebd-923aa91e7ade.png)

Agree to the license agreement and click “Next”:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152702-ee92a683-bb03-463a-b433-78e743cb2d2c.png)

Click “Install”:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152809-59a5abc2-8d96-4d3d-aaa8-58317db54a4c.png)

After installation is complete, the following interface will be displayed. Click “Finish” to complete the Qt Creator installation steps:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152892-e49cfd4f-4c1c-4cdd-8784-e2026f80553c.png)

Navigate to the actual Qt Creator installation directory: /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/

```plain
forlinx@ubuntu:~$ cd /opt/Qt/Tools/QtCreator/bin/
```

Start Qt Creator:

```plain
forlinx@ubuntu:/opt/Qt/Tools/QtCreator/bin$ sudo./qtcreator
[sudo] password for forlinx: forlinx                         //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982152976-fab09aeb-8c1c-45f1-8d35-2775339dbcfb.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

### 3.4 Configuring the Qt Compilation Environment

Path: 3-Tools\\host.tar.gz

The host.tar.gz archive contains the libraries and cross-compilation tools needed to compile Qt programs. The configuration steps are as follows:

1\. Extract the compilation environment archive

Because the qmake tool depends on a local path, this toolkit must be placed in a fixed path: /opt/

Extract the toolkit.

```plain
forlinx@ubuntu:~$ sudo tar -xf host.tar.gz -C /opt/
forlinx@ubuntu:~$ cd /opt/host
```

2\. Qt Creator Environment Configuration

First, open the Qt Creator software.

Execute:

Navigate to the actual Qt Creator installation directory: /home/forlinx/Qt5.12.9/Tools/QtCreator/bin/

```plain
forlinx@ubuntu:~$ cd /opt/Qt/Tools/QtCreator/bin
```

Start Qt Creator:

```plain
forlinx@ubuntu:/opt/Qt/Tools/QtCreator/bin $ sudo./qtcreator
[sudo] password for forlinx: forlinx                         //输入forlinx用户的密码，无回显
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-root'
```

Start the Qt Creator program, click on Tools -> External -> Configure…:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982153059-4e7b7265-06ea-401e-a6a8-ab78aa1f9557.png)

Click on “Kits” on the left, then click the “Compilers” tab in the middle top section. Click “Add -> GCC” on the right, as shown:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982153167-d741944d-e3d3-4812-9498-4799590d2d60.png)

Find “aarch64-none-linux-gnu-gcc” under /opt/host/bin, select it and click Open. Then modify the Name and click “Apply”.

Click the “Qt Versions” tab, then click “Add”:

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982153282-e3228b2d-e16d-4794-92ee-804ad4254ffd.png)

Find “qmake” in the /opt/host/bin directory, select it and click Open. After adding, it will display as follows. Click “Apply”.

Click the “Kits” tab, click “Add” on the right to add a new Kit. Modify the contents according to the figure below and click “Apply”

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982153362-ccf5c580-6bfb-4214-b38e-1434c37c20b5.png)

### 3.5 VMware Error Resolution

Error 1: Unable to connect to MKS:  Too many socket connection attempts; giving up.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950065962-b1270a23-8379-465e-8ebb-074c27535b1b.png)

Solution:

My Computer -> Right-click -> Manage -> Services and Applications -> Services: Start all VMware-related services.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950090751-c1daea0f-13a9-4afe-b694-89126fbb76a2.png)

After the services start successfully, restart the virtual machine; or suspend the virtual machine first, then after the services start, resume the suspended virtual machine.

Error 2: Internal Error

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950103214-a7871f85-aa0b-41e9-a60d-1f1ad1d485b5.png)

Solution: Refer to Solution 1

Error 3: Unable to install the VMware Authorization Service (VMAuthdService)

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950118552-6d413624-2cac-4adf-870d-859727b1d73f.png)

Solution:

win+R

Enter services.msc

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950135095-dcf3ba1f-5104-40fd-a040-cec6bed9d893.png)

Then find the service and start it because this service is used for authorization and authentication to start and access virtual machines.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950195578-21d1856a-834a-4efe-8807-3d190d83ebdf.png)

The WMI service must be started first.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950209258-c350c7e6-c2cb-49e6-a5b5-501d59205fd5.png)

Error 4: Failed to install the hcmon driver

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950243863-dc11008b-5c1e-4f28-90bb-265e2b879287.png)

Solution: Delete C:\\Windows\\System32\\drivers\\hcmon.sys, then reinstall.

Error 5: Intel VT-x is disabled

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950313530-3343a477-e16a-4f01-b661-072c7cd3620f.png)

Solution:

① Enter the BIOS interface during startup (F2 or F12)

② Configuration -> Intel Virtual Technology -> Change from Disabled to Enabled -> Save settings and exit to restart.

③ Reopen VMware and start the virtual machine.

If it still doesn’t work, turn off the firewall and restart the virtual machine. (May vary depending on the machine)

Error 6: The virtual machine appears to be in use… Take Ownership (T)

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950333783-0d094cf5-34e2-401e-b8cb-600a9a4006e0.png)

Solution:

① Shut down the virtual machine.

② Navigate to the virtual machine’s storage directory and delete all \*.lck files (lck stands for lock files).

③ Open Windows Task Manager and kill all VMware processes.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950354133-3b24662e-114f-4a86-b27e-ed85982cf247.png)

④ Restart the virtual machine.

Error 7: Failed to lock the file

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950365534-20b50f59-a57a-4be7-acf4-667c16512c5e.png)

Solution:

① Navigate to the virtual machine’s storage directory.

② Delete .vmem.lck, .vmdk.lck, \*.vmx.lck files.

③ Restart the virtual machine; it should now start normally.

Error 8: The virtual machine could not be started because there was not enough memory available on the host.

Solution:

Solution:

The host does not have enough memory to meet the maximum requirements of the virtual machine image. Increase the virtual machine’s memory and restart it.

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950502280-738cd080-0319-4274-b239-59c91a70a889.png)

## 4\. Linux Compilation 

**Note: Please do not skip this paragraph.**

The development environment refers to the software and hardware platforms required by developers during the development process. The development environment is not fixed to a specific configuration. In the previous sections, detailed a method for setting up an embedded Linux development environment. If you are already very familiar with embedded development, you can set up the environment according to your own needs. If you encounter any usage issues, you can search for related information on major Linux forums and websites in China to resolve them.  The operations mentioned in this chapter are performed on the development environment provided. They have been tested. If you are not very familiar with embedded development, it is recommended to use the environment provided. **The ordinary user in the development environment is: forlinx, password: forlinx. The superuser is: root, password: root.**

### 4.1 Preparation Before Compilation

#### 4.1.1 Version Specifications

Virtualization Software: VMware 15.1.0

Recommended Development OS: Ubuntu 20.04 64-bit

Cross-Toolchain: aarch64-none-linux-gnu-gcc

```plain
1.Kernel：

`OKT536-linux-sdk/prebuilt/kernelbuilt/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu.tar.xz`

unzip directory：

`OKT536-linux-sdk/out/toolchain/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin`

2.Application：

`OKT536-linux-sdk/buildroot/buildroot-202205/dl/toolchain-external-arm-aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu.tar.xz`

unzip directory：

`OKT536-linux-sdk/out/t536/OKT536-C/buildroot/buildroot/host/bin`
```

Bootloader Version: u-boot-2023.04

Kernel Version: linux-5.10.198

Development Board QT Version: qt5.15.8

#### 4.1.2 Source Code Copying and Extraction

1 Kernel source code path: 2-Images and Source Code\\Source Code\\OKT536-linux-sdk.tar.bz2.\*\*

1\. Source Code Copying

The OKT536-linux-sdk.tar.bz2 includes the toolchain, user SDK, Linux kernel, filesystem, test program source code, and various tools.

```forlinx@ubuntu:~$ mkdir /home/forlinx/work                // Create working directory```

Copy the source code package to the virtual machine’s /home/forlinx/work directory.

You can directly drag and drop the source code package from your computer into a folder on the virtual machine’s desktop, or use a shared folder to copy it via command. Here, the focus is on using a shared folder.

There are many ways to transfer files between Ubuntu and the Windows host. After installing VMware Tools, a shared folder for the virtual machine can be set up, mounting a directory from the Windows host into Ubuntu to achieve file sharing.

Setup method: Click on the menu bar’s “Virtual Machine” and select “Settings.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950783159-aa38c988-c012-4406-8082-6a9a28411890.png)

Click on “Options,” enable “Shared Folders,” set the shared directory on the Windows host, and click “OK.”

![](https://cdn.nlark.com/yuque/0/2024/png/45383109/1718950804162-7efbad0f-793c-4665-ba22-9b194e4fd765.png)

Once the virtual machine’s file sharing is set up, place the source code package OKT536-linux-sdk.tar.bz2 into the Windows host’s shared folder. Here, it is named share.

The shared folder is mounted in Ubuntu at /mnt/hgfs/share. View the files in the mounted directory.

```plain
forlinx@ubuntu:~$ ls /mnt/hgfs/share/                  //View files in a shared directory
OKT536-linux-sdk.tar.bz2
```

Copy the source code from the shared folder to Ubuntu’s /home/forlinx/work directory and perform an MD5 checksum:

```plain
forlinx@ubuntu:~$ cp /mnt/hgfs/share/OKT536-linux-sdk.tar.bz2.* /home/forlinx/work/       
forlinx@ubuntu:~$ cd /home/forlinx/work
forlinx@ubuntu:~/work$ md5sum OKT536-linux-sdk.tar.bz2.*
```

If the returned MD5 checksum matches the one provided in the documentation, you can proceed to extract the source code:

forlinx@ubuntu:~/work$ cat OKT536-linux-sdk.tar.bz2.\* \| tar jxv

#### 4.1.3 Common Source Code File Paths

For the OK536-C platform, the software configuration file paths (starting from the SDK source code path OKT536-linux-sdk) are as follows:

| **File Type**| **Path**|
|----------|----------|
| Kernel configuration| <font style="color:rgb(51, 51, 51);">okt536-c/linux-5.10-origin/buildroot\_linux\_defconfig</font>|
| Device tree file:| <font style="color:rgb(51, 51, 51);">bsp/configs/linux-5.10-origin/sun55iw6p1.dtsi</font>|
| | <font style="color:rgb(51, 51, 51);">okt536-c/linux-5.10-origin/OKT536-C-Common.dtsi</font>|
| | <font style="color:rgb(51, 51, 51);">okt536-c/linux-5.10-origin/OKT536-C-Linux.dts</font>|
| <font style="color:rgb(51, 51, 51);">sysconfig.fex</font>| <font style="color:rgb(51, 51, 51);">okt536-c/sys\_config.fex</font>|
| File system| During compilation, files in buildroot/package/auto/forlinx/root will overwrite files with the same path under out/t536/OKT536-C/buildroot/buildroot/target. You can operate in the relevant directories when modifying the file system.|
| U-Boot environment variable configuration file:| okt536-c/buildroot/env.cfg - To modify or add default environment variables, edit this file.|

**Note: okt536-c is a symbolic link that points to device/config/chips/t536/configs/OKT536-C.**

Test program paths for the OK536-C platform (starting from the SDK source path OKT536-linux-sdk):

Command-line test program source directory:

buildroot/package/auto/forlinx/cmd\_demo

buildroot/package/forlinx/forlinx\_cmd

Qt test program source directory:

buildroot/package/auto/forlinx/qt\_demo

| | | **Source code path:** |
|----------|----------|---------- |
| <font style="color:rgb(51, 51, 51);">qt-demo</font>| <font style="color:rgb(51, 51, 51);">4G</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/4g</font> |
| | <font style="color:rgb(51, 51, 51);">ADC</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/adc</font> |
| | <font style="color:rgb(51, 51, 51);">Backlight</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/backlight</font> |
| | <font style="color:rgb(51, 51, 51);">SQL</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/books</font> |
| | <font style="color:rgb(51, 51, 51);">Browser</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/browser</font> |
| | <font style="color:rgb(51, 51, 51);">Audio Playback</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/musicplayer</font> |
| | <font style="color:rgb(51, 51, 51);">Key Test</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/keypad</font> |
| | <font style="color:rgb(51, 51, 51);">Desktop</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/matrix-browser</font> |
| | <font style="color:rgb(51, 51, 51);">Network Configuration</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/network</font> |
| | <font style="color:rgb(51, 51, 51);">ping</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/ping\_test</font> |
| | <font style="color:rgb(51, 51, 51);">rtc</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/rtc</font> |
| | <font style="color:rgb(51, 51, 51);">Spi</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/spitest</font> |
| | <font style="color:rgb(51, 51, 51);">Serial port test</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/terminal</font> |
| | <font style="color:rgb(51, 51, 51);">Watchdog</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/watchdog</font> |
| | <font style="color:rgb(51, 51, 51);">WiFi</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/qt\_demo/wifi</font> |
| <font style="color:rgb(51, 51, 51);">cmd-demo</font>| <font style="color:rgb(51, 51, 51);">GPADC</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/cmd\_demo/fltest\_adc</font> |
| | <font style="color:rgb(51, 51, 51);">Key Test</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/forlinx/forlinx\_cmd/fltest\_keytest</font> |
| | <font style="color:rgb(51, 51, 51);">SPI Test</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/forlinx/forlinx\_cmd/fltest\_spidev\_test</font> |
| | <font style="color:rgb(51, 51, 51);">UART</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/forlinx/forlinx\_cmd/fltest\_uarttest</font> |
| | <font style="color:rgb(51, 51, 51);">Watchdog</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/cmd\_demo/fltest\_watchdog</font> |
| | <font style="color:rgb(51, 51, 51);">ec20 4G</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/cmd\_demo/quectelCM</font> |
| | <font style="color:rgb(51, 51, 51);">wifi</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/root/usr/bin/fltest\_wifi.sh</font> |
| | <font style="color:rgb(51, 51, 51);">Wifi-ap</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/root/usr/bin/fltest\_hostap.sh</font> |
| | <font style="color:rgb(51, 51, 51);">Desktop</font>| <font style="color:rgb(51, 51, 51);">buildroot/package/auto/forlinx/root/etc/init.d/S60Matrix\_Browser</font> |

### 4.2 Source Code Compilation

#### 4.2.1 Full Compilation

**Note: When compiling the SDK using the Forlinx development environment, you need to comment out the PATH environment variable setting in ~/.bashrc. Save the file and reopen the terminal.**

![](https://cdn.nlark.com/yuque/0/2025/png/45415483/1742282403168-c63f848b-87da-4b14-ad9f-c7bb4b2018ff.png)

Full compilation refers to the unified compilation of the source code, including kernel source code, library files, applications, filesystem packaging, etc.

Step 1: Select Configuration:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT536-linux-sdk          //Enter the source code path
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh config     //Execute the configuration command
```

```plain
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh config
02-17 10:37:25.299 74175 D mkcommon  : ========ACTION List: mk_config ;========
02-17 10:37:25.301 74175 D mkcommon  : options :
All available platform: 1
   0. android
   1. linux
Choice [linux]:
All available linux_dev: 1
   0. bsp
   1. buildroot
Choice [buildroot]:
All available ic: 0
   0. t536
Choice [t536]:
All available board: 0
   0. OKT536-C
   1. demo
   2. demo_kylo
   3. demo_nand
   4. demo_nor
   5. demo_raw_nand
Choice [OKT536-C]: 0
All available flash:
   0. default
   1. nor
Choice [default]:
All available kern_name: 0
   0. linux-5.10-origin
   1. linux-5.10-rt
Choice [linux-5.10-origin]:

…
```

Run the compilation script to perform a full compilation:

```plain
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh rtos clean // Execute when compiling for the first time, otherwise an error will be reported
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh
```

After the source code compilation is complete, you need to generate the image. This involves packaging various compiled files and configuration files.

Execute the packaging command to generate the image file:

```plain
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh pack

…

Dragon execute image.cfg SUCCESS !
----------image is at----------

556M    ~/work/OKT536-linux-sdk/out/t536_linux_OKT536-C_uart0.img

pack finish
```

#### 4.2.2 Compiling the Kernel/Device Tree Separately

Compiling the kernel separately only builds the kernel source code and affects drivers. It is suitable when only the kernel has been modified.

After selecting the configuration using the method mentioned earlier:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT536-linux-sdk
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh kernel             //Execute compile kernel command

…

02-17 10:40:58.013 76618 D mkkernel  : Copy modules to target ...
02-17 10:40:58.543 76618 D mkkernel  : bootimg_build
02-17 10:40:58.546 76618 D mkkernel  : Copy boot.img to output directory ...
02-17 10:40:58.629 76618 I mkkernel  : sun55iw6p1 compile all(Kernel+modules+boot.img) successful
02-17 10:40:59.773 76558 I mkcommon  : build dts ...
02-17 10:40:59.777 76558 I mkcommon  : Prepare toolchain ...
02-17 10:40:59.830 86047 D bsp       : Setup BSP files
…

forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh pack
```

#### 4.2.3 Compiling Test Programs Separately

When only the test programs have been modified, you can compile only the test programs to reduce compilation time.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT536-linux-sdk
forlinx@ubuntu:~/work/OKT536-linux-sdk$ source .buildconfig           //Configure before compilation
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./buildroot/package/auto/build.sh
```

#### 4.2.4 Compiling U-Boot Separately

To compile U-Boot separately, use the following command:

```plain
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh bootloader
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh pack
```

#### 4.2.5 Cleaning the OKT536-linux-sdk

This operation removes all intermediate files but does not affect the source files, including any modified source files. 

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/OKT536-linux-sdk
forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh clean                    //Execute the clean command
```

#### 4.2.6 Changing the Boot Logo

Replace the boot logo file at:

device/config/chips/t536/boot-resource/boot-resource/bootlogo.bmp

The image must be in BMP format with a resolution of 720×480 and the filename must be “bootlogo.bmp”.

Repackage the image:

forlinx@ubuntu:~/work/OKT536-linux-sdk$ ./build.sh pack

### 4.3 Qt Configuration and Usage

The OKT536-linux-sdk.tar.bz2 provided by Forlinx includes the complete Qt5.15.8 development environment. Our development environment already has Qt 5.15.2 installed, but you can also set it up manually as described earlier.

#### 4.3.1 Installing OKT536-linux-sdk

Please refer to Chapter 3 for SDK installation and full compilation.

#### 4.3.2 Qt Creator Environment Configuration

Please refer to Chapter 3 for installation and configuration.

#### 4.3.3 Qt Creator Development Example

Open Qt Creator software and launch the Qt Creator application.

In the Qt Creator interface, click “File” → “New File or Project” to create a new project. Select “Application (Qt)” → “Qt Widgets Application”, then click “Choose” in the bottom right corner.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982154927-19972609-805e-4ad1-8628-6c921d9e1f6c.png)

In the following interface, set the project name to “helloworld”. Set the installation path to /home/forlinx, then click “Next”.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155023-145596e0-39cb-4679-ae0d-573f2360393f.png)

Select “qmake” and click “Next” to continue.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155117-01d96e5d-ed49-44d3-a1a1-c66ab29d482d.png)

In the following interface, you can modify the “Class name” and “Base class” as needed. Here, keep the default values and click “Next”.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155209-883c5db9-4cee-41f3-a513-9b79de7cd7f9.png)

Choose a translation file if you need multilingual support. Here, use the default and click “Next”.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155338-34a58956-2906-47c0-92c2-9d5c3adf478c.png)

In the following interface, select the previously added “OK536” as the kit for the current project, then click “Next”

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155538-4e0bc1e9-2afd-469e-a041-e534c57b19bb.png)

In the following interface, click “Finish” to complete the project creation.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155617-b280876a-19cd-4033-9e29-e2a6d6808c3c.png)

Once the project is created, the following window will appear:

Project created successfully.

![](https://cdn.nlark.com/yuque/0/2025/png/50461850/1740982155700-b21f4c01-effb-4687-ae8b-ab520366f675.png)

After writing the program, click the hammer icon in the bottom left corner to perform cross-compilation.

Copy the compiled executable to the development board for application testing.