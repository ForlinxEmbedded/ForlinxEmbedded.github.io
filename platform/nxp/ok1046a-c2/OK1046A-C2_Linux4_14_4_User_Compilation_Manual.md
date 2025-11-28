# Ubuntu18.04+Linux4.14.47\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

|  **Date**  | **User Manual Version** | **Revision History**                                  |
| :--------: | :---------------------: | ----------------------------------------------------- |
| 2022/02/10 |          V1.0           | OK1046A-C2\_User’s Compilation Manual Initial Version |

## Overview

This manual is designed to enable you to quickly understand the compilation process of the products and familiarize yourselves with the compilation methods of Forlinx products. The application needs to be cross-compiled on an ubuntu host before it can run on the development board. By following the methods provided in the compilation manual and performing practical operations, users will be able to successfully compile their own software code.

The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.

Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine. Hardware Requirements: It is recommended to have at least8GB memory or above.It allows for allocating a sufficient memory to the virtual machine (recommended to allocate2GBor above), while still leaving enough resources for other operations onWindows. Insufficient memory allocation may result in slower performance onWindows.

The manual is mainly divided into four chapters:

+ Chapter 1. is mainly about the installation of VMware, and the version used is VMware Workstation 15 Pro15.1.0. You need to install VMware before using the ubuntu development environment;
+ Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu18;
+ Chapter 3. mainly introduces the method of building a new ubuntu development environment; It takes 64-bit Ubuntu 18.04 as an example to describe the creation process of Ubuntu. Due to different computer configurations, unexpected problems may arise during the setup process. It is recommended for beginners to use the environment that we have set up directly.
+ Chapter 4. mainly describes the compiling method of the source code related to the development board, including the kernel source code compilation and the application program compilation.

A description of some of the symbols and formats associated with this manual:

|                          **Format**                          | **Meaning**                                                  |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| <font style="color:rgb(0,0,255);background-color:rgb(215,215,215);">Blue font on grey background</font> | Refers to commands entered at the command line (Manual input required). |
| <font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">Black font on gray background</font> | Serial port output message after entering a command          |
| **<font style="color:rgb(0,0,0);background-color:rgb(215,215,215);">Bold black on gray background** | Key information in the serial port output message            |
|                              //                              | Interpretation of input instructions or output information   |
|                      Username@Hostname                       | root @ localhost: ~ : development board serial port login account information,<br />forlinx @ localhost: ~ : Development board network login account information<br />forlinx @ Ubuntu ~ $: Development environment Ubuntu account information<br />This information allows you to determine the environment, in which the feature operates. |

<font style="color:rgb(0,0,0);">Example: View the files that exist in the current path.</font>

```plain
forlinx@ubuntu:~/work$ ls
OK10xx-linux-fs.tar.bz2                  //Source code package
```

<font style="color:rgb(0,0,0);">forlinx@ubuntu~/work$：User name: forlinx，host name: ubuntu, means to operate in the development environment Ubuntu.</font>

<font style="color:rgb(0,0,0);">// : Explanation of operating instructions, no need to enter</font>

<font style="color:rgb(0,0,255);background-color:rgb(217,217,217);">ls</font><font style="color:rgb(0,0,0);">：Blue font with gray background, indicating relevant commands requiring manual input</font>

**<font style="color:rgb(0,0,0);background-color:rgb(127,127,127);">OK10xx-linux-fs.tar.bz2</font><font style="color:rgb(0,0,0);">：</font>**<font style="color:rgb(0,0,0);">The black font with gray background is the output information after the input command, and the bold font is the key information. Here is the source code package.</font>

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of VMware virtual machine, and takes VMware workstation 15 Pro v15.1.0 as an example to show the installation and configuration process of the operating system.

### 1.1 VMware Software Download and Purchase

Go to the VMware website https://www.vmware.com/cn.html to download Workstation Pro and get the product key. VMware is a paid software that requires purchasing, or you can choose to use a trial version.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394388525-bb90a30a-3124-408d-947c-693bbf2596d4.png)

After the download is complete, double-click the startup file to start the installer.

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394388828-96aac25a-1af3-4b4e-a8e3-8a86dcdb7c1f.png)

Click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394389067-7186d3a1-1737-4760-8456-b2b7df4126da.png)

Check I accept the terms in the license agreement and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394389272-1cd87701-83b4-4750-b334-656fe28426e0.png)

Modify the installation location to the partition of your computer where the software is installed, and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394389492-e78fd85f-adc7-4b51-85c1-c6caaa6233a4.png)

Check and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394389730-88ba23eb-ac47-4a82-bdbe-5d4c9f705223.png)

Check Add Shortcut and click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394389948-783b3ba3-667e-4ad0-a0fb-134c3cf3b5bb.png)

Click "Installation".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394390146-729472d9-6ec6-4434-8f27-318fe80a2594.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394390370-f7596cd3-9011-48ad-ae3b-082fec9ce9c9.png)

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

## 2\. Loading the Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners use the virtual machine environment built by Forlinx directly. After understanding this chapter, you can directly jump to the compilation chapter for further study;**
+ **The account that provides the development environment is: for Linux and the password is: forlinx.**

There are two ways to use a virtual machine environment under VMware. One is to directly load an existing environment, and the other is to create a new environment. Let's first talk about how to load an existing environment.

First, download the development environment provided by Forlinx. After downloading, select the Ubuntu 18 compressed package and right click to extract it to the OK1043\&OK1046\&OK1012-Linux4.14.47-VM 15\_1\_0-ubuntu18\_04 folder:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394379459-ba72f11a-5a21-4bd3-b9c1-8539e714f2b7.png)

After the decompression is completed, as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394379791-323d0cf9-9595-42ae-a2cd-a5630e95f2ec.png)

Ubuntu18.vmx in the ubuntu18 folder is the file to be clocked by the virtual machine.

Open the installed virtual machine.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394380093-66437dec-9085-482a-95eb-cecc7341ea9a.png)

Select the directory where the newly extracted ubuntu18 virtual machine file is located, select ubuntu18.vmx, and click “Open”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394380332-dfc0fca3-a145-4ac9-8aaf-ae18acae52c2.png)

After loading, click to open the virtual machine to run and enter the system interface.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394380588-2e337648-ef6e-4476-b7cc-d976808b2223.png)

When the development environment is loaded for the first time, the following will appear. Select "I have copied this virtual machine (P)", and the system will automatically load it..

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394380795-bd1a6acb-36c6-4056-b8d7-99e74dc0d904.png)

After loading, you will enter the following interface, enter the password: forlinx, and select “Sign in” to log in after filling in the password..

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394381131-20258bb8-f54e-40fb-a09d-622c61a9579d.png)

Password: forlinx.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394381496-4ff54a3f-01b8-485c-be0a-40d4ab2677ac.png)

## 3\. New Ubuntu Development Environment Setup

**Note: **

- **Beginners are not recommended to set up a system on their own. It is recommended to use an existing virtual machine environment. If you do not need to set up the environment, you can skip this section;**

- **This chapter focuses on the process of creating the Ubuntu system and does not cover the setting up of the compilation environment. The main reason for this is that in order to build a compilable source code environment, one needs to download the official source code of NXP in Ubuntu 18.04. Setting up Ubuntu compilation can be complex and prone to compilation problems.**

### 3.1 Ubuntu System Setup

#### 3.1.1 Ubuntu Virtual Machine Setup

Open the VMware software, click on create a new virtual machine. Enter the following interface:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394361294-463420a4-c9f3-42dd-8f72-fc7bbf8726ee.png)

Choose custom, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394361514-9e186583-9f15-490e-8939-1c976175158c.png)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394361728-47ef0923-0c6e-4b7f-a0ba-81c2802e9496.png)

Select Install the operating system later and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394361970-8d3d5ff2-849d-4a7d-85e7-cb51e0b60bf2.png)

Leave the default and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394362171-23f537d3-e411-4d8e-9690-4a9e8353664f.png)

Modify the virtual machine name and installation location, click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394362408-616dac9c-b2e8-4494-8d86-56df86377c94.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394362607-756d8bf3-8e1f-4be3-87d3-9344c9a8c364.png)

Again, set the memory size as appropriate.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394362823-500a97ad-cddf-4ba0-8eb0-04435eecab87.png)

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394363044-66b2a976-f18d-4996-9312-e517b6cf5931.png)

The default selection for the IO controller type here is LSI.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394363247-89f3facb-0802-467d-bc96-79baeab9c49b.png)

The default selection here is also SCSI.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394363487-2a828644-c374-4b24-bfe1-edf6ba017fa9.png)

Choose to create a new virtual disk here.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394363662-581e7231-4262-414b-93bc-85b42262ca13.png)

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click Next to finish.

Specify the disk file, the default one here is fine.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394363873-289aa837-8337-4406-83ca-f0e46e0340f2.png)

Click Finish by default.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394364073-3926cbeb-a9fb-42b7-b73f-9c602c39d422.png)

The virtual machine creation is now complete.

In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.

#### 3.1.2 System Installation

The Ubuntu version chosen to install is 18.04. First, go to the Ubuntu official website to get the Ubuntu 18.04 64-bit image. Go to http://releases.ubuntu.com/18.04/ to downlaod "ubuntu-18.04.5-desktop-amd64.iso.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394364250-932c72b4-4992-408b-b19e-806dcbc334f9.png)

Right-click the newly created Ubuntu 64-bit and select Settings from the pop-up menu:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394364496-a3207cd9-0ff9-453c-ac9d-0f5d7bacd03a.png)

The "Virtual Machine Settings Menu" pops up as shown below:： 

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394364692-916e8c8d-f97d-4ace-9f4b-bdc47070d2cf.png)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394364874-e6f14c68-1f5d-4edb-8c2f-d81b8b722931.png)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394365102-8ffc8f77-3492-44db-8638-0a87f33a7dd6.png)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394365493-74b12d93-1cd8-4171-8916-80b55e3312bb.png)

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394365745-02853d15-a2dd-4253-b18f-ef7c5eeeafa8.png)

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394365959-c25c4f32-d17e-41f7-a124-ed7d0fcd76a2.png)

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394366166-2c7246cc-d995-462e-9493-d87fd0db766c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394366368-dd524488-8b95-4bbe-b5fb-a93ded5c9ca9.png)

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set the user name and password (take the user name: forlinx, password: forlinx as an example, the user can set it according to actual needs), and click "continue" to automatically install:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394366561-42c01678-998d-4664-ae98-77c9bb4a520a.png)

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394366811-994c96d1-8ca3-4f7a-abc8-bc91661c8b1b.png)

After the installation, click "Restart Now" to reboot (or click "Reboot Client"):

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394367141-370600e2-b37a-43ff-baba-a246d7e6ef16.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394367443-d23ffd5d-87f9-4d8d-9c9f-241014ba9360.png)

After the restart, you need to use the user name and password to log in. The system interface after login is as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394367779-0f392c5e-13c8-4026-8d72-a34d879af244.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394368209-09135edf-5d85-4c6c-8711-d104449727b9.png)

Above, the Ubuntu system installation is completed by the following figure configuration, click "OK", and then re-open the virtual machine to see if you can start Ubuntu normally.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394368514-442bf5cd-14b0-4ff5-90b4-765075535216.png)

#### 3.1.3 Basic Ubuntu Installation

After installing the Ubuntu 18.04 operating system, there are a few configurations to make.

+ **VMware Tools Installation:**

Next, install VMware Tools. Without installing this tool, you won't be able to copy and paste and drag file between the Windows host and the virtual machine. First click on "Virtual Machines" on the VMware navigation bar, then click "Install VMware Tools" in the drop-down box.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394368740-4862aeea-f7c4-433c-93bf-63bf2b70d632.png)

Once done, enter Ubuntu and the VMware Tools CD icon will appear on your desktop, click into it:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394368975-f1fbae24-0787-4419-a297-edf0145f7159.png)

Double-click on the VMwareTools icon, go to it and see a zip file VMwareTools-10.3.10-12406962.tar.gz (it may be different for different VM versions).

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394369196-8a4d5f38-3c40-44c9-be30-13b6c6425cd7.png)

Copy the file under the home directory (i.e., the directory of the home personal username):

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394369428-fe154176-d1e4-4b85-905b-9dfca00ac034.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394369751-1925cdea-8e86-4330-bca3-a199bc34c51d.png)

Press \[Ctrl+Alt+T] to bring up the terminal command interface, and use the tar command to decompress the VMware tools installation package (using the sudo command will prompt for the password, according to the prompts directly enter the password enter can be used, Linux system password input does not show):

```plain
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

After executing the extract command, use ls to view the file directory vmware-tools-distrib, and go to the directory.

```plain
forlinx@ubuntu:~$ ls
Desktop examples.desktop nfs snap tftp VMwareTools-10.3.10-12406962.tar.gz vmware-tools-distrib work
forlinx@ubuntu:~$ cd vmware-tools-distrib/  //Use the CD command to enter the directory
forlinx@ubuntu:~/vmware-tools-distrib$ ls //View the files in this directory
bin caf doc etc FILES INSTALL installer lib vgauth vmware-install.pl
```

In the current directory, enter sudo ./vmware-install.pl to install, enter the password after pressing Enter, and then start the installation. When you encounter yes, enter yes, and press Enter for the rest to install by default.

```plain
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl
[sudo] password for forlinx: //Enter the password of the forlinx account, no display, cannot see the input content
```

The installation process information is long, here omitted.

```plain
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes //Enter yes
... ... 
```

After completing the VMware tools tool, you can achieve file copy and paste, virtual machine adaptive full display and other functions between Windows and Ubuntu. If the virtual machine cannot be displayed in full screen, enable Auto Resize by clicking View, then Auto Adapt to Client. Ensure that VMware tools have been installed successfully.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394369970-77877781-616f-4639-9af2-c094c3b7c496.png)

+ **Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394370218-e7ae0eef-22bd-4169-96a9-757abf704313.png)

#### 3.1.4 Ubuntu Network Settings

+ **NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394370454-ef558318-b462-40e1-9ac3-1796f10f487a.png)

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VMs to get on the extranet.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394370711-47d183f2-b67b-45e3-bece-31e628de5a3f.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394370954-0945307b-e013-4ca7-9933-0011ecdaedb3.png)

The network is set to dynamic IP.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394371155-a9059469-ecfc-46c5-91d8-41d7b0c221e7.png)

**Bridge Mode:**

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

If you use TFTP, SFTP and other servers, you need to set the virtual machine as the bridge mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394371341-2ac00101-cfeb-45bf-a17d-63b562b8e56b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394371541-cca09c17-304c-4eea-b52c-4946f07d6f76.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394371702-1f7f579f-1d82-42c8-8a96-0fcd0bb73652.png)

 Set up static ip, at this time Ubuntu's IP and the host IP need to be set in the same network segment.

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394371888-bbde3a0f-9b11-4998-b47e-27555d29645c.png)

#### 3.1.5 U Disk Loading

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if we don't set it up, when we plug in the USB3.0 port, we can't connect to the virtual machine. As shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394372132-e8c1f877-90f3-446a-a83f-eac9b63da82f.png)

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394372354-777fb423-d535-427b-95d3-1015f63a1afe.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394372562-4c52d051-8585-4957-9d0f-e75e6a6ae50e.png)

#### 3.1.6 Required Library Installation

Before development, there are some other necessary libraries, we use the following commands to install them one by one, before installation, you need to ensure that the network can be used normally, you can get on the extranet:

```plain
forlinx@ubuntu:~$ sudo apt-get update  // Update the download source information.
forlinx@ubuntu:~$ sudo apt-get install build-essential // Provide the list information of software packages necessary for compiling programs.
forlinx@ubuntu:~$ sudo apt-get install libncurses* // Used to generate text-based user interfaces.
forlinx@ubuntu:~$ sudo apt-get install lzop // A compression and decompression tool based on the Lzo library.
forlinx@ubuntu:~$ sudo apt-get install net-tools // Network configuration tools. 
```

## 4\. Related Code Compilation

flexbuild is the official compilation environment provided by NXP for the QorIQ LS series. Forlinx has customized and modified the official NXP version of flexbuild for the OK1046A-C2 platform, which is more suitable for users to develop quickly. flexbuild provides all the source code needed to compile the entire system, such as the Linux kernel, uboot, firmware, app program, and a complete file system. Users can directly use the provided file system. However, it is also possible to compile a new files ystem from scratch. It is important to note that building a file system from scratch may result in missing configurations when compared to the file system provided by Forlinx. Therefore, it is not recommended to do so.

Flexbuild defaults to supporting only Ubuntu 18, but it also supports Docker. Since most users are not familiar with Docker, it is strongly recommended that you use Forlinx's provided Ubuntu 18 virtual machine for compiling and development.

Note: The virtual machine username is forlinx and the password is forlinx.

The compilation of OK1043A-C3 software image is divided into two parts. The first part is related to the first stage of startup, which mainly includes rcw, u-boot, network-related firmware and security-related firmware. The whole is compiled into a 16M firmware image. Chapter 2. Ubuntu File System

### 4.1 Preparation Before Compilation

#### 4.1.1 Description of the Environment

+ OS: Ubuntu18.04 64-bit version
+ Cross-toolchain: aarch64-linux-gnu-gcc
+ Bootloader of Development board: u-boot 2018.03
+ Development Board Kernel: Linux-4.14. 47
+ SDK version: LSDK-18.06-V4.14.47

#### 4.1.2 Source Code Copy

+ Source code package: user profile \\ Linux \\ source code \\ OK10xx-Linux-fs. Tar

There are many kinds of file transfers between ubuntu and Windows hosts. After installing VMware Tools, you can set up a virtual machine shared folder to mount the file directory of the Windows host to ubuntu for file sharing. Two methods are described below, and the first is recommended.

+ Method 1: You can directly copy the source code to the virtual machine/home/forlinx/work/directory.
+ Method 2: Use the method of sharing files. The setting method is as follows. Click "Virtual Machine" in the menu bar and select "Settings".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394346034-6a8e0424-6377-4030-8c74-895cfb2cb966.png)

Click "Options", enable "Shared Folder", set the shared directory on the Windows host, and click "OK".

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394346248-f740b869-11b2-4b6d-8265-228fff8e0410.png)

After the virtual machine's file sharing is set up, put the kernel source code OK10xx-linux-fs.tar.bz2 used for the test into the shared folder of the Windows host.

The shared folder is in the Ubuntu mount directory/mnt/hgfs/share. View the files in the mount directory.

```plain
forlinx@ubuntu:~$ ls /mnt/hgfs/share/
OK10xx-linux-fs.tar.bz2
```

Copy the source code from the shared folder to the Ubuntu/home/forlinx/work directory.

```plain
forlinx@ubuntu:~$ sudo cp -r /mnt/hgfs/share/OK10xx-linux-fs.tar.bz2 /home/forlinx/work/
[sudo] password for forlinx: // Enter the password. The password is “forlinx”, and there will be no echo when you type it.
forlinx@ubuntu:~$ cd /home/forlinx/work/
forlinx@ubuntu:~/work$ ls
OK10xx-linux-fs.tar.bz2 // File copied successfully.
```

Switch to the root account and extract the kernel source code copied to the /home/forlinx/work directory using the tar command to the kernel source path.

```plain
forlinx@ubuntu:~$ sudo -s // Switch to the root user identity.
[sudo] password for forlinx: // Enter the password “forlinx” as prompted and then press Enter.
root@ubuntu:~# cd work
root@ubuntu:~/work# ls
OK10xx-linux-fs.tar.bz2 // Kernel source code.
root@ubuntu:~/work# tar OK10xx-linux-fs.tar.bz2 // Extract the kernel source code.
… … Omit the extraction information here.
root@ubuntu:~/work# cd OK10xx-linux-fs/flexbuild
// Enter the flexbuild source code directory.
```

Introduction to Main Directories/Files:

| File      | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| packages  | Source code directory with source code for linux firmware apps ramdisk |
| build     | The compilation directory is used for the temporary files generated by the compilation process, and the compilation results are located in the build/images directory. |
| configs   | Compile configuration, flexbuild is applicable to multiple platforms, and configuration information for different platforms. |
| tools     | Compiling tools, flex-builder, flex-installer, etc.          |
| setup.env | Used to configure compilation environment variables.         |

#### 4.1.3 Environment Variables Settings

**Note:**

+ **Reset the environment variables after switching accounts;**
+ **To set environment variables before compiling related source code. When compiling the kernel, it is recommended to use the root account to reduce some permission problems. The following source code compilations default to having environment variables set.**

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# source setup.env
```

### 4.2 Source Code Compilation

+ **Note:**
+ **Use root privileges**
+ **After the kernel source code is decompressed for the first time, the source code needs to be compiled as a whole.**
+ **After the overall compilation, it can be compiled separately according to the actual situation.**

#### 4.2.1 Source Code Path

The paths in the source code of configuration files such as RCW (reset control word), device tree, kernel source code, kernel configuration file, and test program used in the user manual, which are commonly used by users in daily development, are as follows:

| Configuration file:       | Source code path                                             |
| :------------------------ | :----------------------------------------------------------- |
| RCW                       | OK10xx-linux-fs/flexbuild/packages/firmware/rcw/ls1046ardb/FORLINX/rcw\_1800\_qspiboot\_1133\_5a59.rcw |
| Device tree               | OK10xx-linux-fs/flexbuild/packages/linux/linux/arch/arm64/boot/dts/freescale/fsl-ok1046a-1133-5a59-c2.dts |
| Source code               | OK10xx-linux-fs/flexbuild/packages/linux/linux               |
| Kernel configuration file | OK10xx-linux-fs/packages/linux/linux/arch/arm64/configs/ls1046\_defconfig |
| Test program:             | OK10xx-linux-fs/flexbuild/packages/apps/forlinx              |

#### 4.2.2 Full Compilation of Source Code

**Note: If you have compiled apps before, execute flex-builder -i clean-apps, otherwise the compilation will report an error.**

The entire flex build environment is based on this operation. If you restart the virtual machine or Shell terminal, you need to perform this operation again.

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# source setup.env
```

When compiling for the first time, it is recommended that you use all the compilation commands to compile. The advantage is that the operation is simple, and only one command is needed to compile all the required files.

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -a arm64 -m ls1046ardb -S 1133
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394346466-5219fdba-1be8-479b-a670-60ecc8b35aa0.png)

After successful compilation, the generated file is located in the build/images directory. View the generated image file:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394346813-7f2d903a-326c-4dd8-b7b3-7d1a45c034a3.png)

**Note: The first time you use the tree command, you need to install it. The installation command is sudo apt-get install tree.**

#### 4.2.3 Compiling Firmware Separately

LS series of chips require loading some firmware during startup, such as RCW (Reset Control Word), ppa.itb(optee os), uboot, etc. If you have made any changes to these files during development, then you need to recompile and package these files into a firmware image file and burn it to the boot device. The command to compile the firmware is:

+ Clear previously compiled files:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i clean-firmware
```

+ Compile all the Firmware:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c firmware -a arm64 -m ls1046ardb -b qspi -S 1133  //Compiling firmware for QSPI Nor Flash startup
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c firmware -a arm64 -m ls1046ardb -b sd -S 1133 //Compile firmware for SD startup
```

+ Generate a firmware image of the QSPI Nor Flash boot:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i mkfw -a arm64 -m ls1046ardb -b qspi -S 1133
```

Compile successfully as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394347154-37bff890-1600-44d2-9ecd-375fcb2c6a5c.png)

+ Generate sd boot firmware image:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i mkfw -a arm64 -m ls1046ardb -b sd -S 1133
```

Some information about the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394347480-846f51a5-294e-4802-9fee-53f21c3c343f.png)

#### 4.2.4 Compiling Kernel and Modules Separately

Clear previously-compiled files:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i clean-linux
```

To configure the kernel (which can be skipped if using the default configuration), open the menuconfig command:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c linux:custom -m ls1046ardb -a arm64
```

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394347774-57cb4a6e-e536-4be0-b21c-bfc6df3b5bab.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394348242-956024ad-e092-4738-9670-b84782ab8898.png)

Save the exit print information after the setting is completed, as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394348598-320f29c9-3800-4d06-a8bd-76e2fc813ff2.png)

The generated configuration file is: build/linux/linux/arm64/output/.config

You can overwrite a changed file:packages/linux/linux/arch/arm64/configs/ls1046\_defconfig

+ Compile the kernel commands separately:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c linux -a arm64 -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394348972-844239ba-3c37-498e-a095-0ef1b22c1788.png)

+ Compile the cryptodev driver separately:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c cryptodev-linux -a arm64 -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394349360-ef25befa-43b2-47e6-8d7f-bb47b64546bc.png)

+ Automatically update the drive module to the file system:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i merge-component -a arm64 -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394349656-198d14f9-49d3-4840-a748-a6b83ccf7109.png)

+ Re-generate the Ubuntu image:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i compressrfs -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394349904-6c3f06e9-cd75-4e77-80f7-5eaf59ee8655.png)

+ Update the compiled kernel and device tree files to the build/images directory:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i genboot -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394350238-7c1bb728-2b3f-4cfd-80fc-87a6ce487fd3.png)

#### 4.2.5 Compiling the App Program Separately

In the build/rfs/rootfs\_ubuntu\_bionic\_arm64 directory, the OK1046A-C2 platform has already included the upper application layer tools such as OpenSSL by default, in general, users do not need to recompile, if you change the source code of this part, you need to use the following commands to compile it separately:

+ The compilation command is as follows:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -c apps -m ls1046ardb
```

**Note: If you have compiled apps before, execute flex-builder -i clean-apps, otherwise the compilation will report an error.**

 The print information of the successful compilation part is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394350479-b7792bcc-59e8-42e1-a181-b4da5746de5b.png)

+ Update the app to the file system:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i merge-component -a arm64 -m ls1046ardb
```

The print information of the successful compilation is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394350757-f52dc627-33ae-4eb6-9c3d-2aeb9c2c220a.png)

+ Re-generate the Ubuntu image:

```plain
root@ubuntu:~/work/OK10xx-linux-fs/flexbuild# flex-builder -i compressrfs -m ls1046ardb
```

The print information is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43856062/1719394350993-67c28d5a-b1e2-4691-9fe1-afbbfc6f6bcf.png)

#### 4.2.6 Compilation and Operation of Application Program

This section uses the UART test program source code as an example to copy the uarttest. C source code program to the/home/forlinx/work directory.

```plain
forlinx@ubuntu:~$ cd work/OK10xx-linux-fs/flexbuild/packages/apps/forlinx/uarttest/
forlinx@ubuntu:~ /forlinx/uarttest$ cp uarttest.c /home/forlinx/work
```

1. Use the cd command to enter the/home/forlinx/work directory.

```plain
forlinx@ubuntu:~ $ cd /home/forlinx/work/
forlinx@ubuntu:~/work$ ls 
OK10xx-linux-fs  OK10xx-linux-fs.tar.bz2  uarttest.c
```

2\. Use aarch64-linux-gun-gcc to cross-compile. The environment variables have been set in the default environment and can be used directly.

```plain
forlinx@ubuntu:~/work$ aarch64-linux-gnu-gcc uarttest.c -o uarttest
```

After successful compilation, use the file command to view the generated file information.

```plain
forlinx@ubuntu:~/work$file uarttest 
uarttest: ELF 64-bit LSB shared object, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, BuildID[sha1]=dad62c46c28894445d8b6829fb74e6e428d4a478, not stripped
```

3\. Copy the uarttest generated by compiling to the board through the U disk, such as/home/forlinx path, and run the test.

Use the cd command to go to the/home/forlinx path on the board.

```plain
root@localhost:~#cd /home/forlinx
```

Copy the uarttest program generated by compiling from the U disk mounting path to the current path.

```plain
root@localhost:/home/forlinx# cp /run/media/sda1/uarttest ./
```

Give the program executable permission and run it

```plain
root@localhost:/home/forlinx#  chmod 777 uarttest			     //Set executable permissions for the program
root@localhost:/home/forlinx#	./uarttest -d /dev/ttyS1                       //Run the program
```

4\. Refer to the chapter "UART Test" in the software user manual for test.