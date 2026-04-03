# OK3568J-UP4_Linux5.10.160_User's Compilation Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.  1\. VMware Virtual Machine Software Installation

## 1. VMware Virtual Machine Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 15 Pro v15.1.0 as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version Version.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278513268-e1e3d73c-ea58-4db6-86b2-2bcb430bf195.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the setup file to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278513453-fcba4324-b61c-4700-a5a0-0dffae59dbbd.png)

Click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278513616-4d573560-c60f-4f95-a2bf-7b0a38394f83.png)

Check “I accept the terms in the license agreement” and click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278513807-4fea4ba5-6c3f-4774-9046-4ac308ae7838.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278513983-81c57db7-35b1-4416-bb29-36120e02a747.png)

Check, then click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278514135-8b46b82c-621d-44fc-89d8-d33018b427f4.png)

Check “Add shortcuts” and click “Next.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278514310-369d17b9-d01f-4d95-a676-04fb377558fd.png)

Click “Install.”

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278514482-82865f12-b42f-4c32-aca1-30a96a2fa309.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278514655-325d6ab7-c6cd-4de5-a879-6248cd24fcde.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **Development Environment Account: forlinx; password: forlinx.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

Extract the Compressed File:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278548687-41fb4543-911d-4ce3-9b88-09f7fb114c01.png)

After the extraction is complete, select the .vmx file as the virtual machine file to open.

Open the virtual machine and choose the extracted 3588 development environment.vmx file.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278548894-5a126d86-d30f-4f1c-906b-1d615fdf2e0a.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface."

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549103-fbe0d3f1-43ad-4b37-aa46-27fd9fc4a526.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549304-2128d94e-45fa-4091-83c8-678157602b7b.png)

The development environment account is: **forlinx**, and the password is : **forlinx**. After entering the password, select **Sign in** to log in

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549464-41fc41e5-d024-4e97-a993-d6b193bc8aae.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278549733-cae28152-e433-4a1e-90ab-8a2479049af5.png)

## 3\. Setting Up a New Ubuntu Development Environment

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software and click “Create a New Virtual Machine”. Enter the following interface:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278531825-28237039-37c8-4a5f-8597-f64b71e7e312.png)

Select ''Custom'' and click ''Next.''

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532008-920d71ea-3371-425c-9b27-a15b1789fdf9.png)

Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532173-48b35578-2a3d-4aff-9888-513f9b66eaaf.png)

Select install the operation later and click Select ''I will install the operating system later'' and click ''Next.''

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532371-cd7442c7-21c1-4c8a-8463-24ea3de5f6c1.png)

Keep the default settings and click ''Next.''

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532534-39687568-6ee3-4284-b373-2104df01f0fb.png)

Modify the virtual machine's name and installation location, then click ''Next.''

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532718-2cd2ea2a-0f97-46d5-ad8b-4f004e889a20.png)

Set the number of processors according to your needs.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278532900-dd3f7357-07c5-4dc4-9fd1-7d367c7a7111.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533112-8f49bb5a-64b5-47df-8798-044888bfa83b.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533381-8dc68236-561d-4840-abb7-3512def5cecf.png)

Choose the default LSI for the IO controller type.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533635-d54cda44-50e2-4643-b3d3-54dc41a1bfa6.png)

Similarly, select SCSI as the default here.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278533807-86b2d601-916f-4f7d-b7c0-4a672e97d659.png)

Choose to create a new virtual disk:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534036-c400a9dc-bdac-4dde-bd52-d4e721fb4ccd.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534210-b2fc7391-1c76-4148-80c8-855cd9174698.png)

Specify the disk file, the default setting is fine here.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534358-9585162d-5c54-42eb-be37-f9361aebf91d.png)

Click ''Finish'' by default to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534538-0cb90337-6bc8-4fc5-8009-267ab1d2617c.png)

At this point, the virtual machine creation is complete.

The installation process on a physical machine is similar to the one on a virtual machine, but here we will focus on installing Ubuntu in the virtual machine. 

### 3.1.2 System Installation

The installed Ubuntu version is 20.04. First, go to the official Ubuntu website to download the Ubuntu 20.04 64-bit ISO image. The download link is: http://sources.ubuntu.com/20.04/

. Download the version ubuntu-20.04.6-desktop-amd64.iso.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534726-3aa57e5a-99a5-4638-a835-5b80b82fc03d.png)

Right-click the Ubuntu 64-bit virtual machine that was created and select "Settings" from the context menu.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278534926-94943ef2-c4d9-4ddd-91e9-50c5088dfacc.png)

The "Virtual Machine Settings Menu" will pop up as shown in the image below.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535121-beaef4c9-b729-4a86-8299-02e28a716d2d.png)

Click on CD/DVD (SATA), select Use ISO image file, then browse and select the previously downloaded Ubuntu ISO image, and click "OK".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535409-a8fcb60d-f0a2-428c-8be7-0e124dcbc137.png)

After configuring the image, ensure that the network is working, and then start the virtual machine to begin installing the Ubuntu image.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535587-6fcfdee5-51f1-4e1c-9906-d39fc0048711.png)

Once the virtual machine starts, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278535793-fd516f0e-e8ab-4dee-9119-5ad4232b0450.png)

Select the language on the left side and click "Install Ubuntu." A language selection screen will pop up.  
By default, Ubuntu's language is English, but you can also select Chinese. The selected language can be changed later during the installation. Once you've selected the language, click “Continue”.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536000-eb047135-c38a-4252-8c28-ab4160903086.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click Continue again.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536210-5beb2cde-35d4-44aa-b6b6-4e9c8e760b06.png)

Click "Install Now" by default, and a prompt will appear. Click "Continue" to proceed.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536401-c42c25c7-6384-4061-a7e2-76c6349c64be.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278536688-120370eb-2370-46c6-805f-a2041fe0149c.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue. Finally, set up your username and password. Click Continue, and the installation will begin automatically.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278537143-ccb45ffe-9c1d-42e6-a4ae-0da143112cbf.png)

The installation process is shown in the figure below. If the network is not good, you can skip it without affecting the installation.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278537449-a7f018e6-bdb2-4867-9e95-42fa1c7d2cb1.png)

After the installation is completed, as shown in the following figure, click "Restart Now" Restart " (or click" Restart Client "):

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278537830-e34fbcf1-8a51-4008-af9d-7f58d0899130.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538153-32d91128-59b7-4c50-9745-84b3186f5a51.png)

After restarting and logging in, the system interface is as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538378-ec2e5454-98ce-4802-820d-82c55f5ae9a8.png)

### 3.1.3 Basic Configuration of Ubuntu

After installing the Ubuntu 20.04 operating system, some configurations need to be done.

+ **VMware Tools Installation：**

Next, install VMware Tools. Without this tool, you won't be able to copy and paste or drag files between the Windows host and the virtual machine. First, click on Virtual Machine in the VMware navigation bar, then select Install VMware Tools from the dropdown menu.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538688-9700b495-f48a-4190-9391-8d970fdb36ec.png)

After this, go to the Ubuntu desktop, where you will see the VMware Tools disk icon. Click to open it.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278538895-1625dbb7-305b-4f49-ac94-850a3b19510e.png)

Inside, you will see a compressed file named VMwareTools-10.3.10-12406962.tar.gz (the version number may vary depending on the VMware version). 

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539134-a41b7a36-aa5c-4523-a560-8cfce32569f6.png)

Copy the file to the home directory (i.e., the personal username directory).

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539323-74442df4-84e4-492a-8633-8ed6f333949c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539510-050c7a0a-ec54-4cd5-85a1-9f5e81e426fa.png)

Open a terminal by pressing Ctrl + Alt + T, and use the tar command to extract the VMware Tools installation package. Use sudo to run the command (you will be prompted to enter your password. Linux passwords do not show any feedback when typed, so ensure the password is correct and press Enter to confirm).

```plain
forlinx@ubuntu:~$ sudo tar -xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

After the extraction, use the ls command to check, and you should see a vmware-tools-distrib directory. Enter this directory.

```plain
forlinx@ubuntu:~$ ls
Desktop   examples.desktop   nfs   snap   tftp   VMwareTools-10.3.10-12406962.tar.gz  vmware-tools-distrib   work
forlinx@ubuntu:~$ cd vmware-tools-distrib/	                      //Use the CD command to enter the directory
forlinx@ubuntu:~/vmware-tools-distrib$ ls                         //View the files in this directory
bin   caf   doc   etc   FILES   INSTALL   installer   lib   vgauth   vmware-install.pl
```

In the current directory, type sudo ./vmware-install.pl to start the installation. After pressing Enter, input your password, and the installation process will begin. If you are prompted with \[yes]/\[no], type yes, and for other prompts, press Enter to go with the default installation options.

```plain
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl
[sudo] password for forlinx: 		     //Enter the password of the forlinx account, no response, cannot see the input content
```

The installation process may take some time, and this part is skipped in the instructions.

```plain
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes			//输入yes
... ...		
```


After installation, VMware Tools will enable file copy/paste between Windows and Ubuntu, as well as full-screen adjustments for the virtual machine. If the virtual machine is not displaying in full-screen mode, click View, select Auto-resize guest display, and choose Fit Guest Now to solve the full-screen issue. This means VMware Tools has been successfully installed.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539710-8c366a71-823a-4180-8309-32189be7ce07.png)

+ **Basic Configuration:**

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278539972-31f94d63-6f34-4904-846e-cd72975c7e99.png)

### 3.1.4 Network Configuration of Ubuntu

+ **NAT Mode**

Before using the network, make sure that your virtual machine can connect to the internet. Open the virtual machine settings, and change the network adapter's network bridging mode to NAT Mode:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540173-d56c3ec8-1d83-49da-99f7-6bbd9a9b6830.png)

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device and the host network card are connected. This is the most commonly used method to connect the virtual machine to the external network. 

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540394-95e15661-d1d0-427e-93ed-e365eb39c296.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540571-3d28eb06-aea3-4fda-8397-e821b2b7fca1.png)

The network is set to dynamic IP.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278540815-009829ab-476a-45b8-b02e-d7f42bfbe34f.png)

+ **Bridge Mode：**

If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode. When Vmware virtual network card is set to bridged mode, the host network card and the virtual machine network card communicate through a virtual bridge, and you need to ensure that the IP address of Ubuntu is in the same subnet as the host machine.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541083-4d9634db-a591-45be-ad82-f0c7b1e12e3e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541277-05740351-022e-45fc-96c7-06caac0e068d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541434-9c36b6f6-6539-4295-8eec-4df165beb02c.png)

Set the static IP. At this time, the Ubuntu IP and the host IP should be set in the same network segment.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541630-bf5fd69d-adc1-407d-915f-2503b2055225.png)

**Note: The IP and DNS settings mentioned in the network configuration section should be configured based on the user's actual environment. The manual provides examples for illustration.**

### 3.1.5 USB Device Loading

Open the virtual machine settings, go to USB Controller, and in the compatibility section, choose USB 3.0, then click OK. As shown below, most modern computers support USB 3.0 ports. If not configured, the USB 3.0 device will not be connected to the virtual machine when inserted. As shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278541851-33d6ec29-11c4-499b-867c-528314eef0ca.png)

After the virtual machine starts, insert the USB flash drive. An icon similar to a "USB drive" will appear in the lower-right corner of the virtual machine. Right-click it and select Connect. Then, you should see a new directory in the file system, indicating that the USB drive has been successfully loaded, as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542123-ad4e8176-1557-40a0-b545-a4aa290b16d2.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542337-c0fe4886-515f-4fe1-9446-22882a83577e.png)

### 3.1.6 Basic Library Installation for the Virtual Machine

Before development, some other necessary libraries need to be installed. Use the following commands to install them one by one. Make sure the network is functioning properly and can connect to the internet before installing.

```plain
forlinx@ubuntu:~$ sudo apt-get update                             # Update the package source information
forlinx@ubuntu:~$ sudo apt-get install build-essential            # Install essential software packages for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*                # Install libraries for generating text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                       # Install Lzo-based compression and decompression tool
forlinx@ubuntu:~$ sudo apt-get install net-tools                  # Install network configuration tools
```

### 3.1.7 Installation of Necessary Libraries for Compiling OK3568 Linux Source Code

```plain
forlinx@ubuntu:~$ sudo apt-get update                                         # Update the apt-get package sources
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot        # Install essential tool packages
forlinx@ubuntu:~$ sudo apt-get install repo git ssh make gcc libssl-dev liblz4-tool expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler python-pip libncurses5-dev
forlinx@ubuntu:~$ sudo apt-get install libgmp-dev  libmpc-dev libicu-dev bsdmainutils
```

These libraries are required when setting up the 3568 Linux compilation environment and preparing to compile the Linux source code. If you're not setting up the OK3568 Linux development environment, you can skip this step.

### 3.1.8 Increasing Swap Partition Size

Please check the current system swap partition size. If the swap partition is insufficient, it can cause source code compilation to fail. It is recommended to have 16GB for the swap partition. It is also suggested to adjust the development environment memory to 16GB.

1\. Check the Swap Partition:

```plain
forlinx@ubuntu:~$ cat /proc/swaps
```

The virtual machine provided by Forlinx has already configured the swap partition. If you are using another virtual machine, you can increase the swap partition size by creating a swap file.  

```plain
forlinx@ubuntu:~$ sudo swapoff /swapfile
forlinx@ubuntu:~$ sudo fallocate -l 10G /swapfile
forlinx@ubuntu:~$ sudo chmod 600 /swapfile
forlinx@ubuntu:~$ sudo mkswap /swapfile
forlinx@ubuntu:~$ sudo swapon /swapfile
forlinx@ubuntu:~$ sudo vim /etc/fstab
```

Add the following content at the end of the /etc/fstab file:

```plain
forlinx@ubuntu:~$ /swapfile none swap sw 0 0
```

2\. Memory Adjustment:  
It is recommended to adjust the development environment memory to 16GB. Low memory may cause compilation failure.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542580-d0fd91fe-bf0c-47fd-aa6f-774dad1fd478.png)

## 3.2 Qt Creator Installation

Copy the file qt-creator-opensource-linux-x86\_64-4.7.0.run to any directory in the current user’s home directory and execute the following command.

+ Path: OK3568-C (Linux) User Data\\Linux\\Source\\qt-creator-opensource-linux-x86\_64-4.7.0.run

```plain
forlinx@ubuntu:~$ ./qt-creator-opensource-linux-x86_64-4.7.0.run                   
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542788-a08554d9-9ff7-485a-a499-6a5b274fd48f.png)

This will open a graphical installation window. Follow the prompts to install:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278542977-d1772186-fa60-442a-8cf2-6e5cffefaae2.png)		 ![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543199-cbc234c5-2d49-43aa-864e-4daf0abe7a4c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543389-eaacabb8-9343-4e45-8626-9a68c043e0a0.png) 	![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543608-c9d367f7-56c3-44b6-829c-04f29286f63d.png)

Online users need to register for a Qt account. Existing Qt account holders can log in directly. The Qt password requires a mix of uppercase letters, lowercase letters, and numbers. After registering and logging in successfully, click Next.

Offline users can click Skip.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278543830-11d43ecf-8d67-4bd0-a472-fc52383a77b1.png)

Click “Next”:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544047-02ae511b-f6df-49fc-94ad-50606afa9ac1.png)

You can set the installation path according to your preferences; here use the default here. Click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544274-25984f38-7e0d-4029-97ec-25fc13e82651.png)

Choose Complete Installation and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544480-43ea98bb-67e7-4632-a1cf-b917e22a17eb.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544690-a23e2f5f-b76b-46c9-8ebc-ef0ddc395677.png)

Click Install and wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278544902-6e395fac-45b1-428e-b5ed-dd3045ed1597.png)

After installation, click Finish. The Qt interface will automatically open, or you can launch it from the command line. To open Qt Creator in the background, use the following command, replacing it with your actual installation path:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~$ ./qtcreator &
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278545088-f7954df3-4aa6-40d1-9046-723786b916af.png)

The Qt Creator tool interface will appear. Qt Creator installation is now complete.

# 4\. Compilation of Related Code

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

## 4.1 Preparation Before Compilation

### 4.1.1 Environment Description

+ Recommended Development OS: Ubuntu 22.04 64-bit
+ Cross-Toolchain: aarch64-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-5.10.160
+ Qt Version Ported to Development Board: QT 5.15.8

### 4.1.2 Copying the Source Code

+ Program Source Code: User Data\\Linux\\Source\\ OK3568\_Linux\_fs.tar.bz2.0\*

Create Working Directory:

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/3568							//Create the working directory in order
```

Copy the source code file OK3568\_Linux\_fs.tar.bz2.0\* from User Data to /home/forlinx/3568 on the virtual machine.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/3568									//Switch to the working directory
forlinx@ubuntu:~/3568$ cat OK3568_Linux_fs.tar.bz2.0* > OK3568_Linux_fs.tar.bz2
forlinx@ubuntu:~/3568$ tar -xvf OK3568_Linux_fs.tar.bz2				//Decompress the compressed packet in the current location
```

Wait for the copy process to complete after running the command.

+ Toolchain Path: OK3568-Linux5.10.160-User Data\\Linux\\Source\\dl.tar.bz2

When compiling Buildroot, the toolchain will be downloaded from the official website based on the configuration. To save time, download and unzip dl.tar.bz2 from User Data into the Buildroot directory.

## 4.2 Kernel Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation;**
+ **This source code compilation requires at least 16GB of RAM in the development environment. Please do not modify the provided VM configuration;**
+ **To shorten the initial compilation time, we use pre-compiled file system images and do not rebuild the file system.**

### 4.2.1 Full Compilation Test

Switch to the extracted source code directory in the terminal:

```plain
forlinx@ubuntu:~$ cd /home/forlinx/3568/OK3568_Linux_fs
```

The following operations should be performed in the source code directory. For the first compilation, specify the chip you are using:

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$./build.sh chip
"/* After executing, there will be options to input, as follows: */"
Log saved at /home/forlinx/work/3568/OK3568_Linux_fs/output/sessions/2023-10-21_16-45-26

Pick a chip:

1. OK3568
2. rk3566_rk3568
3. rk3588
Which would you like? [1]: 1 "/* Enter 1 and press Enter to continue. */"
Pick a defconfig:

1. OK-x-U40-linux_defconfig
2. OK3568-C-linux_defconfig
Which would you like? [1]: 1 "/* Enter 1 and press Enter to continue. */"
Switching to defconfig: /home/forlinx/work/3568/OK3568_Linux_fs/device/rockchip/.chip/OK-x-U40-linux_defconfig
make: Entering directory '/home/forlinx/work/3568/OK3568_Linux_fs/device/rockchip/common'
#
# configuration written to /home/forlinx/work/3568/OK3568_Linux_fs/output/.config
#
make: Leaving directory '/home/forlinx/work/3568/OK3568_Linux_fs/device/rockchip/common'
```

After that, you can proceed with the compilation. The default file system used is from the linuxfs directory (OK3568-C file system, which is adapted for the OK3568-C motherboard). To compile the OK3568-UP4 file system, you must compile Buildroot separately first. If you need to recompile Buildroot, refer to the separate compilation instructions.

```plain
forlinx@forlinx-ubuntu:~/work/3568/OK3568_Linux_fs$ ./build.sh
```

The final compilation result will look like the image below (paths may vary based on the actual situation).

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278519464-b89aebf0-bcc5-4f08-85d7-7a0e0cea8f6a.png)

After compilation, corresponding build files will be generated in the OK3568\_Linux\_fs/rockdev folder. You can find the image files there.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278519744-a17e751c-a98e-4d42-baa3-928eee7838b6.png)

**Note:  **

- **update.img is packaged for full flashing using OTG or TF card.  Other files are for step-by-step flashing.**

- **Important: The 3568 5.10 SDK contains a precompiled file system, located in the OK3568\_Linux\_fs/linuxfs directory.**  

- **When running the full compilation script, linuxfs/rootfs.img will be copied to buildroot/output/OK3568/images to generate the compiled file system results, reducing the time to generate update.img in the first compilation.** 

- **If you need to compile the file system, do so separately, and after compiling, replace linuxfs/rootfs.img with the new rootfs.img. Subsequent executions of build.sh will continue using linuxfs/rootfs.img.**

****

### 4.2.2 Individual Compilation Test

Before performing an individual compilation, you must have completed a full compilation. Perform the following in the kernel source code directory:

To compile Buildroot individually, you must modify the following files:  

Remove depends on BR2\_PACKAGE\_DWKEYBOARD from OK3568\_Linux\_fs/buildroot/package/forlinx/flapp/Config.in and save.  

Remove DWKeyboard from the FLAPP\_DEPENDENCIES parameter in OK3568\_Linux\_fs/buildroot/package/forlinx/flapp/flapp.mk and save.

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh uboot        # Compile uboot separately
# This will generate uboot.img, and the path is /OK3568_Linux_fs/u-boot/uboot.img

forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh kernel      # Compile the kernel separately
# This will generate boot.img, and the path is /OK3568_Linux_fs/kernel/boot.img

forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh buildroot   # Compile the Buildroot file system separately
# This will generate rootfs.ext2, and the path is /OK3568-linux-source/output/OK3568/image/rootfs.ext2
# Note: The 3568 5.10 SDK includes a factory rootfs.img in the linuxfs directory. Running Buildroot separately will overwrite it. 
# Users who need to roll back to the factory file system should back up before performing this step.
# Recompiling the file system can take a long time, usually 4-6 hours. Please be patient if there is no error message at exit.

forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh recovery     # Compile the recovery file system separately
# This will generate rootfs.cpio.gz, and the path is /OK3568_Linux_fs/output/recovery/rootfs.cpio.gz

forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh updateimg    # Generate update.img separately
# This will use the paths above (uboot.img, boot.img, rootfs.ext2) to generate update.img, and the path is rockdev/update.img
```

After compilation, the kernel in update.img will not be updated. Flash the boot.img file from OK3568\_Linux\_fs/kernel/ step-by-step. For detailed flashing steps, refer to Section 5.1.3 "OTG Step-by-Step Flashing Test" in the user manual.

**Note:**  

- **After modifying kernel configuration through the graphical interface (e.g., adding USB-to-serial driver for CH340), run ./build.sh kernel and flash the boot.img image;**  

- **If the graphical configuration doesn't take effect after booting the development board, you can use one of the following methods to resolve it:**  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278519952-52a94c0e-c1cd-4712-ace8-93361052f010.png)

Method 1: Directly write the configuration to the kernel default configuration file: /OK3568\_Linux\_fs/kernel/arch/arm64/configs/OK3568-C-linux\_defconfig.  

```plain
CONFIG_USB_SERIAL_CH341=y
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh kernel
```

Method 2: Use the graphical interface to configure the kernel, and comment out the command in source/device/rockchip/common/scripts/mk-kernel.sh.  

![](https://cdn.nlark.com/yuque/0/2024/png/45534390/1729748971129-8aaac971-6fc6-46b9-82b1-07ec208f8250.png)

Edit the kernel/Makefile file.

![](https://cdn.nlark.com/yuque/0/2024/png/45534390/1729748796793-7588d772-02d0-4b6e-a597-68abe1e049a6.png)

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs/kernel$ make ARCH=arm64 menuconfig
```

Configure the kernel according to the requirements, write the configuration to the `.config` file, then save and exit.

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh kernel
```

**Note:**  

**After modifying the Buildroot configuration (e.g., adding Python3 support), run ./build.sh buildroot and flash the rootfs.ext2 image.**  

**If the graphical configuration doesn't take effect after booting the development board, you can use one of the following methods to resolve it:**  

Method 1: Directly write the configuration to the Buildroot default configuration file: /OK3568\_Linux\_fs/buildroot/configs/OK3568\_defconfig.  

```plain
BR2_PACKAGE_PYTHON3=y	
BR2_PACKAGE_PYTHON3_PY_PYC=y
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh buildroot
```

During compilation, when prompted:  
Found old config, override it? (y/n): <font style='color:#0000FF;'>y</font>
Choose 'y' to indicate that you want to overwrite the previous `.config` file.

Method 2: Use the graphical interface to configure Buildroot, and comment out the corresponding command in device/rockchip/common/scripts/mk-buildroot.sh.

![](https://cdn.nlark.com/yuque/0/2024/png/45534390/1729133678368-3f66e00b-a5eb-4e60-9d18-12bfe4052b4b.png)

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs/buildroot/output/OK3568$ make menuconfig
```

Configure the kernel according to the requirements, write the configuration to the `.config` file, then save and exit.

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs$ ./build.sh buildroot
```

During compilation, when prompted:  
Found old config, override it? (y/n): <font style='color:#0000FF;'>y</font>
Choose 'y' to indicate that you want to overwrite the previous `.config` file.

### 4.2.3 Cross-Compilation Toolchain Location

Driver Compilation Toolchain Source Path:

```shell
OK3568-linux-sdk5.10/prebuilts/gcc/linux-x86/aarch64/gcc-arm-10.3-2021.07-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu-
```

File System Application (QT, etc.) Compilation Toolchain Source Path:

```shell
OK3568-linux-sdk5.10/buildroot/output/OK3568/host/bin/aarch64-linux-
```

These paths are generated after running ./build.sh buildroot. If you use the preset host.tar.bz2 to compile the whole package, unpack host.tar.bz2 in these paths after compilation to get the cross-compilation toolchain.

## 4.3 Use of Image Files

update.img is packaged for full flashing using OTG or TF card.  

Other files are for step-by-step flashing.  

The image files generated by individual compilation will not update update.img and should be flashed step-by-step (refer to the OTG flashing section in the user manual). 

## 4.4 Qt Creator Environment Configuration

Qt is a cross-platform graphics development library that supports multiple operating systems. Before compilation, you need to configure the Qt Creator environment for cross-compilation.

### 4.4.1 Cross-Compiler Configuration

**Note: **

**The path to the cross-compiler used by Qt Creator should be generated after full compilation. For convenience, we placed the host.tar.bz2 package in /OK3568-C (Linux) User Data/Tools. **

**You can check the HostPrefix path recorded in the /host/bin/qt.conf file inside, and create an absolute path that matches the HostPrefix after extracting host.tar.bz2 to the corresponding location. Continue with this section after extraction.**  

**It is strongly recommended to complete the full compilation before proceeding with this section.**  

1. In Qt Creator, click Tools -> Options -> Kits -> Compilers, then click Add -> GCC -> C;

2. Name it GCC;

3. For Compiler Path, click Browse and select the cross-compiler path: aarch64-linux-gcc and aarch64-linux-g++ as shown below; 
   Path: OK3568\_Linux\_fs/buildroot/output/OK3568/host/bin  

**Note: The output directory under Buildroot must be generated after full compilation.**  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278520399-97607db9-0b25-4da5-a25f-627035faf646.png)

4. Add the GCC C++ compiler in the same way by clicking Add -> GCC -> C++. As shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278520769-d05d050c-d4eb-41fe-8191-f158b073c500.png)

### 4.4.2 Qt Versions Configuration

1. Click Tools -> Options -> Qt Versions in Qt Creator; 

2. Click Add, then select OK3568\_Linux\_fs/buildroot/output/OK3568/host/bin/qmake;

3. Click Open to add it;

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278521034-d7cf7714-3105-4689-9683-c4a8ed6c6efd.png)

4. Return to the Qt Version configuration window, and you can change the Version name;

5. Click "Apply and OK".

### 4.4.3 Kits Configuration

Kits are used to build and select the development environment for compiling projects. They are useful for projects with multiple Qt libraries. 

1. Click Tools -> Options -> Kits in Qt Creator, then click Add to configure a new kit; 

2. Change the Name as desired.; 

3. Choose GCC for the Compiler; 

4. Select the Qt version that you entered in the previous step; 

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278521412-b439e3bd-e015-4425-affc-02a52c66f43c.png)

5. Click "Apply and OK."

## 4.5 Application Compilation and Running

### 4.5.1 Compile and Run Command-Line Application

This subsection uses the watchdog test program, and the default program is copied to /home/forlinx/3568.  

1. Use the cd command to navigate to the /home/forlinx/work directory.  

```plain
forlinx@ubuntu:~$ cd /home/forlinx/3568/OK3568_Linux_fs/app/forlinx/forlinx_cmd/fltest_watchdog
```

2. Add the cross-compiler path and use make for cross-compilation.  

```plain
forlinx@ubuntu: ~/3568/OK3568_Linux_fs/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=/home/forlinx/3568/OK3568_Linux_fs/buildroot/output/OK3568/host/bin/:$PATH
forlinx@ubuntu: ~/3568/OK3568_Linux_fs/app/forlinx/forlinx_cmd/fltest_watchdog$ make	
aarch64-linux-gcc watchdog.c -o fltest_watchdog  
generate fltest_watchdog success!!!
```

Use the file command to check the generated file information.  

```plain
forlinx@ubuntu:~/3568/OK3568_Linux_fs/app/forlinx/forlinx_cmd/fltest_watchdog$ 
file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The result will show that the compiled file is 64-bit and ARM-based.  

3. Copy the compiled fltest\_watchdog file to the board via USB or FTP, for example to the /forlinx directory, and run the test (using TF card as an example).  

```plain
[root@ok3568:/]# cp /run/media/mmcblk1p1/fltest_watchdog /home/forlinx
[root@ok3568:/]# cd /home/forlinx
[root@ok3568:/home/forlinx]# ./fltest_watchdog
Watchdog Ticking Away!
```

4. Refer to the user manual "Watchdog Test" section for testing.

### 4.5.2 Compile and Run Qt Application

In the development environment, open Qt Creator (open according to your actual path). Click File -> Open File or Project, then select /3568/OK3568\_Linux\_fs/app/forlinx/forlinx\_qt/watchdog/watchdog.pro.  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278521691-446f0d66-a6de-4eb4-b2b9-adbac3c23ffb.png)

After opening the project, the interface should appear as shown. If the page doesn't change automatically, follow the screenshot instructions.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278521907-882537ff-aab0-4987-a170-8c64515f8de1.png)

Click Configure Project, which will adapt to the compilation environment built in the "Qt Creator Environment Configuration" section.  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278522180-76d20235-a09d-4dff-9cb2-0135a93d5442.png)

Then click Build -> Clean All to clean up the previous build files.  
(If intermediate files are not cleaned, you can delete them manually.)  
Uncheck Shadow build in the Projects section.  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278522421-8c6a5ab7-a9ce-4a72-88be-0902f222e58d.png)

Click Build -> Build All to compile.  

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278522722-eccde718-c389-4662-ba54-bad05baaceb2.png)

Once the build progress bar completes, the new executable file fltest\_qt\_watchdog will be located in the /app/forlinx/forlinx\_qt/watchdog directory.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719278523014-cd2cfd24-0659-4cda-be02-d2ebfe309ef1.png)
