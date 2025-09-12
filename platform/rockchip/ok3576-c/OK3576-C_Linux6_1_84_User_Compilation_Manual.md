# OK3576-C\_Linux6.1.84\_User’s Compilation Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open Copyright Notice

## Copyright Notice

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

<font style="color:#333333;">This manual is designed to enable you board to quickly understand the </font><font style="color:#333333;">compilation process</font><font style="color:#333333;">of the products and familiarize yourselves with the </font><font style="color:#333333;">compilation</font> <font style="color:#333333;">methods </font><font style="color:#333333;">of</font> Forlinx products. The application program needs to be cross-compiled on the  Linux operating system before it can run on the development board. According to the method in the compilation manual, you can compile your own software code through practical operation.

The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.

Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine. 

Hardware requirements: It is recommended to have at least 6GB of memory or more, so that you can allocate some memory to run the virtual machine (the virtual machine is recommended to have more than 2GB) and still do other operations on Windows, otherwise it will affect the performance of Windows.

This manual is mainly divided into four chapters:

+ Chapter 1. is mainly about the installation of VMware, and the version used is VMware® Workstation 15 Pro15.1.0. Please install VMware before using the ubuntu development environment.
+ Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu22.04.
+ Chapter 3. mainly introduces the method of building a new ubuntu development environment. It takes 64-bit Ubuntu 22.04 as an example to describe the creation process of Ubuntu. Due to different computer configurations, unexpected problems may arise during the setup process. It is recommended for beginners to use the environment that we have set up directly.
+ Chapter 4. mainly introduces the methods of compiling the source code related to the development board.

A description of some of the symbols and formats in the manual:

| **Format**| **Meaning**|
|----------|----------|
| **Note** | Note or information that requires special attention, be sure to read carefully|
| | Relevant notes on the test chapters|
| ️| Indicates the related path.|
| <font style="color:blue;background-color:#d7d7d7;">Blue font on gray background</font>| Refers to commands entered at the command line(Manual input required).|
| <font style="color:black;background-color:#d7d7d7;">Black font on gray background</font>| Serial port output message after entering a command|
| **<font style="color:black;background-color:#d7d7d7;">Bold black on gray background</font>**| Key information in the serial port output message|
| //| Interpretation of input instructions or output information|
| Username@Hostname| root@ok3576: Development board serial port login account information, forlinx@ok3576: Development board network login account information forlinx@ubuntu: Development environment Ubuntu account information. Users can use this information to determine the environment for functional operations.|

After packaging the file system, you can use the “ls” command to view the generated files.

| **forlinx@ubuntu:~/3576$ ls                                  //List files in this directory  kernel-6.1.tar.bz2** |
| ------------------------------------------------------------ |

forlinx@ubuntu: the username is forlinx and the hostname is ubuntu, indicating that the operation is performed in the development environment ubuntu.

//: Explanation of the instruction, no input

<font style="color:blue;background-color:#d9d9d9;">Ls:</font> Blue font on a gray background, indicating relevant commands that need to be entered manually

kernel-6.1.tar.bz2: The black font at the bottom is the output information after the input command, and the bold font is the key information. Here is the packaged file system.

## **Application Scope**

This manual is mainly applicable to the Linux6.1.84 operating system on the Forlinx OK3576-C platform. Other platforms can also refer to it, but there will be differences between different platforms. Please make modifications according to the actual conditions.

## **Revision History**

| **Date** | **Manual Version** | **Revision History** |
|:----------:|:----------:|----------|
| **23/01/2025** | **V1.0** | **OK3576-C Linux6.1.84 User’s Compilation Manual Initial Version** |

## **1\. VMware Virtual Machine Software Installation**

This chapter mainly introduces the installation of VMware virtual machines, using VMware Workstation 15 Pro v15.1.0 as an example to demonstrate the installation and configuration process of the operating system.

### **1.1 VMware Software Download and Purchase**

Go to the VMware website https://www.vmware.com/cn.html to download Workstation Pro and get the product key. VMware is a paid software, you need to buy it yourself, or use the trial version provided by VMware.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292018801-8230a6f7-bdc2-4fd7-a6ac-9b9051a28f3d.png)**

After the download is complete, double-click the installation file to start the installation program.

### **1.2 VMware Software Installation**

Double-click the startup program to enter the installation wizard.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292019102-966a3de3-90e4-43c5-8d09-638579d0a5ad.png)**

Click on "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292019326-bbe7eaef-ef8c-420c-9a24-c318002f625b.png)**

Check the terms in the license agreement that I accept, then click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292019516-d327a170-62c9-4921-8243-13806619bec3.png)**

Modify the installation location to the partition where you want to install the software on your computer, then click '"Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292019727-ca602d71-8eb8-479d-836a-433822d8404f.png)**

Check and click on "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292019978-f50a4b96-86f6-4b81-b46a-24aeb5e39e8f.png)**

Check the box to add a shortcut, then click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292020296-68686b42-4114-438d-bd79-cc171fa88b02.png)**

Click "Installation".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292020500-b5aec052-b5fe-4a5a-84a0-cf4630dec74d.png)**

Wait for the installation to complete.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292020748-89dabfcd-6ac8-48a9-85db-74c39c551c00.png)**

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

## **2\. Loading the Existing Ubuntu Development Environment**

**Note: **

**It is recommended that beginners use the virtual machine environment built by Forlinx directly. After understanding this chapter, you can directly jump to the compilation chapter for further study. The development environment provided is: forlinx (username), forlinx (password).**

There are two ways to use a virtual machine environment in VMware: One is to directly load an existing environment, and the other is to create a new environment. First talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum. (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

Select the zip file to unzip together.

After decompression, a 3576 standard environment folder appears, where .vmx is the file that the virtual machine needs to open.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291989704-d40b3337-f04a-45a5-8056-f6118bda4b1f.png)**

Open the virtual machine and select the extracted OK3576.vmx.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291989979-2b8d681a-40e2-4572-8cb0-35d6320a4abc.png)**

Turn on this virtual machine after loading is complete to run it and enter the system's interface.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291990280-09eace25-36da-4f07-8e8e-f479dd385778.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291990450-b1f74516-c288-4574-baf3-ab9f4d6c3ebd.png)**

The account of the development environment is forlinx, and the password is forlinx. After filling in the password, select "Sign in".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291990738-f09dadaa-6483-4668-9eae-edc0ac839c47.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291991069-fefb2fc8-71c7-4c5c-a7da-48ca3f224c1e.png)**

## **3\. New Ubuntu Development Environment Setup**

**Note: Beginners are not recommended to build the system by themselves. It is suggested to use the existing virtual machine environment. If you do not need to build the environment, you can skip this section. This section mainly explains the process of building the ubuntu system.**

### **3.1 Ubuntu System Setup**

#### **3.1.1 Ubuntu Virtual Machine Setting up**

Open the VMware software, click on create a new virtual machine. Enter the following interface.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291996421-80355a1a-1a92-46e3-9818-8b3496d88bb9.png)**

Choose custom, and click “Next”.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291996662-59902e0c-a9fd-4a7c-aebb-9c825cc1a759.png)**

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291996865-5c88406f-2ad2-4afe-9f13-e6096bcc0e4e.png)**

Select Install the operating system later and click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291997184-5eaf907f-a1c1-4c4b-8283-6b5da7471afa.png)**

Leave the default and click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291997449-e9665fd6-38ca-490b-ab72-91f7c783eb18.png)**

Modify the virtual machine name and installation location, click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291997629-8dbe5f95-19c8-45f5-af0a-f3b373534742.png)**

Set the number of processors as appropriate.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291997860-f391be4d-7d2f-4d92-a1db-90dd94208b7f.png)**

Also set the memory size according to the actual situation (it is recommended to adjust the memory size to 20G or more).

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291998076-65147b0e-e965-47f5-9b9c-5d3815292955.png)**

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291998283-b3431f5b-4dbf-4775-abf7-333e6e29413c.png)**

The default selection for the IO controller type here is LSI.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291998524-8ae2b9e4-31b7-4720-b517-8649ff9fe0b9.png)**

The default selection here is also SCSI.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291998756-bdaa4dd0-eb22-423f-b558-4bb3f8f07563.png)**

Choose to create a new virtual disk here.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291998967-827fe271-3974-4f53-becf-0be10af4a52a.png)**

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click Next to finish.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291999188-8e9fadd5-d4f3-4219-87fb-ca2236450bc4.png)**

Specify the disk file, the default one here is fine.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291999485-de6c555b-c557-4f25-8b33-44810fdc22cc.png)**

Click "Finish" by default.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291999684-58604469-ab8c-47cb-b122-510b20e26c4e.png)**

**The virtual machine creation is now complete.**

**In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.**

#### **3.1.2 System Installation**

Go to the Ubuntu official website to download ubuntu-22.04.4-desktop-amd64.iso. Download address is: [https://releases.ubuntu.com/22.04/?\_gl=1\_9cp3d2\_\_gcl\_au\*MjA2NTM4NTAwNy4xNzIyMzEwNTA2\&\_ga=2.183316389.2088500894.1722310494-245248835.1722310494](https://releases.ubuntu.com/22.04/?_gl=1*9cp3d2*_gcl_au*MjA2NTM4NTAwNy4xNzIyMzEwNTA2&_ga=2.183316389.2088500894.1722310494-245248835.1722310494)

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726291999942-fee95f13-8639-4990-8fa3-afbb15de10de.png)**

Right-click on the newly created Ubuntu 64-bit and select Settings from the pop-up menu.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292000133-a5ddc130-e7db-4665-bc87-2eac0727de05.png)**

The "Virtual Machine Settings Menu" pops up as shown below:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292000353-217e0d76-7354-4cbe-8efe-c3f035d93cf9.png)**

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292000560-e3d861c0-9ed3-4480-9f55-0e683232d196.png)**

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292000834-30c3dc16-166f-4def-ad82-6963dc34a49a.png)**

After starting the virtual machine, wait for the installation interface to appear as shown below.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292001022-ed024429-fb62-4157-bfd7-ef4377237625.png)**

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292001288-733ef9b3-54a9-4716-894d-b72f474b1b62.png)**

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292001544-6b3065b3-c359-48ea-8d0a-8c6d44864443.png)**

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292001765-bd510418-c151-493b-99c9-df8fa2743c57.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292001954-2bfe5f45-e2f9-4603-b6d6-6ecdd2eb1f1c.png)**

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set your username and password and click "continue" to automatically install the program:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292002173-2d36ed67-6b29-41d8-8ca7-ec1aa50d8a84.png)**

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292002407-35cf418a-79b0-46e1-99d7-1611216b9b12.png)**

After the installation, click "Restart Now" to reboot (or click "Reboot Client"):

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292002667-ede40fd9-d5cb-4e86-b604-08dd0f80eee8.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292002889-8980f712-6552-4894-bf5c-33d2b51ba7cf.png)**

After the reboot, you need to log in with your username and password, and the system interface is shown below after logging in:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292003099-a75fed1f-f6d4-45b4-b286-1f603f685384.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292003353-f6c7f186-d3e8-4032-81c5-b06fcf6191cc.png)**

Above, after shutting down the virtual machine, restore the CD settings, configure it as shown below, click “OK”, and then reopen the virtual machine to see if you can boot Ubuntu normally.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292003563-ef1f0816-9727-475a-9115-1f2df7b52969.png)**

#### **3.1.3 Basic Ubuntu Installation**

After installing the Ubuntu22.04 operating system, there are a few configurations to make.

+ **VMware Tools Installation:**

Next, install VMware Tools. Without installing this tool, you won't be able to copy and paste and drag file between the Windows host and the virtual machine. First click on "Virtual Machines" on the VMware navigation bar, then click "Install VMware Tools" in the drop-down box.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292003779-6baa64f8-28d4-4824-b40b-e387d58f43f5.png)**

Once done, enter Ubuntu and the VMware Tools CD icon will appear on your desktop, click into it:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292004000-d9b6aad0-b305-4f3e-ae71-b0cbe331f7aa.png)**

Double-click on the VMwareTools icon, go to it and see a zip file VMwareTools-10.3.10-12406962.tar.gz (it may be different for different VM versions).

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292004276-217dc0b2-b933-4db0-8cb5-74e76356e758.png)**

Copy the file under the home directory (i.e., the directory of the home personal username):

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292004513-7fc77843-abea-455d-aa38-fd19042fb215.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292004759-2c08eaa3-47d8-473d-b005-abf1cdd1fcba.png)**

Press the keyboard \[Ctrl+Alt+T] to bring up the terminal command interface, use the tar command to unzip the VMwareTools installation package (using the sudo command will prompt you to enter the password, follow the prompt to enter the password and press Enter, Linux system password input has no echo, make sure the password is correct and press Enter to confirm):

```shell
forlinx@ubuntu:~$ sudo tar -xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

After executing the extract command, use ls to view the file directory vmware-tools-distrib, and go to the directory.

```shell
forlinx@ubuntu:~$ ls
Desktop   examples.desktop   nfs   snap   tftp   VMwareTools-10.3.10-12406962.tar.gz  vmware-tools-distrib   work
forlinx@ubuntu:~$ cd vmware-tools-distrib/	                      //Use the CD command to enter the directory
forlinx@ubuntu:~/vmware-tools-distrib$ ls                         //View the files in this directory
bin   caf   doc   etc   FILES   INSTALL   installer   lib   vgauth   vmware-install.pl
```

In the current directory, enter sudo ./vmware-install.pl to install, enter the password after pressing Enter, and then start the installation. When you encounter \[yes]/\[no], enter yes, and press Enter for the rest to install by default.

```shell
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl
[sudo] password for forlinx: 		     //Enter the password of the forlinx account, no display, cannot see the input content
```

The installation process information is long, here omitted.

```shell
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes			//Enter yes
... ...		
```

After completing the VMware tools tool, you can achieve file copy and paste, virtual machine adaptive full display and other functions between Windows and Ubuntu. If the virtual machine cannot be displayed in full screen, you can click View, select Auto-resize Guest Display, and click Fit Guest Now to achieve the virtual machine. VMware tools installation is successful.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292005046-4ae15ccc-dc17-4409-8ab1-e8759109c85a.png)**

+ **Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292005306-c6a3b048-302b-4ab7-866c-8f19fd7f5460.png)**

#### **3.1.4 Ubuntu Network Settings**

+ **NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292005593-68072555-c721-42bf-94e9-ae7b9a7623a6.png)**

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VM to get on the extranet.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292005833-ce6a8ba3-1497-4b73-85ff-975feb14156c.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006018-e0d1e16c-ff96-4d66-b7f9-69176c2e2016.png)**

The network is set to dynamic IP.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006241-d5076fa9-a2fa-4ea8-a13c-b7403d1ec41a.png)**

+ **Bridge Mode:**

If TFTP, SFTP and other servers are used, the network contact mode of the virtual machine needs to be set as the bridge mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006438-728a31b9-a0fe-4bd7-860c-a58fd2eaefb4.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006617-7239178f-ce4e-4376-85ae-65cc8bf188d5.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006785-937aa108-f7ef-4db9-94a4-35cea41c4334.png)**

Set the static IP. At this time, the Ubuntu IP and the host IP should be set in the same network segment.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292006964-455c03ff-fb5d-4aaa-b1bb-2b5c0bc32a72.png)**

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

#### **3.1.5  Loading U Disk**

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if you don't set it up, when you plug in the USB3.0 port, we can't connect to the virtual machine. 

The principle is as follows:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292007208-01f651ae-3e11-444a-8d5f-f90577c66be8.png)**

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292007385-06234740-73df-42f1-82a7-b6ab21226a15.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292007604-f6a8b8e4-95fb-48da-a676-e97f0a0f88a0.png)**

#### **3.1.6 Virtual Machine Basic Library Installation**

Before development, there are some other necessary libraries, we use the following commands to install them one by one, before installation, you need to ensure that the network can be used normally, you can get on the extranet:

```shell
forlinx@ubuntu:~$ sudo apt-get update                        // Update the information of download sources
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide the list information of software packages necessary for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used to generate a text-based user interface
forlinx@ubuntu:~$ sudo apt-get install lzop                     // A compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### **3.1.7 Installation of Necessary Libraries for Compiling OK3576 Linux Source Code**

```shell
forlinx@ubuntu:~$ sudo apt-get update                                       //Update apt-get download source
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot libsqlite3-dev          //Installation of necessary toolkits
forlinx@ubuntu:~$ sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \ 
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \ 
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \ 
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \ 
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \ 
libmpc-dev bc python-is-python3 python2
```

These library files are the ones that need to be downloaded when compiling the Linux source code by building the 3576 Linux compilation environment by yourself. If you are not building the OK3576 Linux development environment, you can skip this step.**

### **3.2 Installation of Cross-compilation Chain**

Data/Linux/2-Image and Source Code/2-Image and Source Code/Cross Compile Chain//prebuilts.tar.bz2

Copy the above compressed package to the development environment/home/forlinx/3576, and decompress it in this directory:

```shell
forlinx@ubuntu:~/3576/$ tar -xjvf aarch64-buildroot-linux-gnu_sdk-buildroot.tar.bz2
```

<font style="color:#000000;">Enter aarch64-buildroot-linux-gnu\_sdk-buildroot and execute:</font>
```shell
forlinx@ubuntu:~/3576/aarch64-buildroot-linux-gnu\_sdk-buildroot$ sudo ./relocate-sdk.sh
forlinx@ubuntu:~/3576/aarch64-buildroot-linux-gnu\_sdk-buildroot$ source environment-setup </font>
```

### 3.3 Qt Creator Installation

Copy qt-creator-opensource-linux-x86\_64-4.1.0.run to any directory under the home directory of the current user, and execute the command.

Data/Linux/2-image and source/2-image and source/source/qt-creator-opensource-linux-x86 \_ 64-4.7.0.run

```shell
forlinx@ubuntu:~/3576/$ ./qt-creator-opensource-linux-x86_64-4.7.0.run 
```

Then the installation window of the graphical interface will pop up, and install according to the prompts:

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292007856-62b327cf-b6d3-4a01-a3e5-72d7a5daed4f.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292008062-714bd1e3-9c76-4653-afd5-7d19675b74fb.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292008398-612d2afe-1e52-44b8-907f-0f18f835d9fd.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292008623-f46a9ef1-62cd-44af-adc9-eb48741e85c4.png)**

For online installation, you need to register a Qt account on your own. If you already have a Qt account, you can simply log in directly. The requirements for the Qt password are: it should contain uppercase letters, lowercase letters and numbers. After successful registration and login, click “Next”.

Users who install offline can skip it.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292008870-86317daa-2d6b-45cc-ab7f-52da7751913c.png)**

*Click “Next”.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292009060-29a13eb7-302d-4389-bbb1-64e9565ddd77.png)**

Users can set the installation path according to their own habits. It is set by default here, so click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292009257-5b78d7e0-6b14-4b28-9a6d-a4046cba0f28.png)**

To fully install, click "Next".

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292009502-2b8da9f1-1f8c-4bc1-a980-353e9c507441.png)**

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292009801-a785b499-9653-4a22-a867-18582f3cb7b6.png)**

Click Install and wait for the installation to complete.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292009996-1ee45c44-93fb-4680-96b4-c9b8d9b11585.png)**

When the installation is complete, click Finish. At this time, the Qt interface will be opened automatically. You can also start it through the command line. Execute the following command to open Qt Creator in the background. When you open it, the actual installation path shall prevail:

```shell
forlinx@ubuntu:~/3576/$cd /home/forlinx/qtcreator-4.7.0/bin
forlinx@ubuntu:~/qtcreator-4.7.0/bin$  ./qtcreator &
```

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292010216-50a6fdd3-969f-4f80-b0dd-abed100c331b.png)**

The Qt Creator tool screen appears. Qt Creator is installed.

## **4\. Related Code Compilation**

This chapter mainly describes the compiling method of the source code related to the development board, including the kernel source code compilation and the application program compilation. Note: Currently only the kernel source code is available, this section only describes how to compile the kernel and applications.

### **4.1. Preparation Before Compilation** 

**4.1.1 Description of the Environment**

+ Development environment OS: Ubuntu22.04 64-bit version
+ Cross-toolchaining: aarch64-none-linux-gnu
+ The board uses the Bootloader version: u-boot-2017.09.
+ Development Board Kernel: Linux-6.1.84

#### **4.1.2 Source Code Copy**

+ Program Source Code: User Information \\ Linux \\ Source Code \\

```shell
forlinx@ubuntu:~$ mkdir -p /home/forlinx/3576						//Create the working directory in order
```

```shell
forlinx@ubuntu:~$ cd /home/forlinx/3576									     //Switch to the working directory in order
forlinx@ubuntu:~/3576$ cat ok3576-linux-source.tar.bz2.0* > OK3576_linux_source.tar.bz2   
forlinx@ubuntu:~/3576$ tar -vxf OK3576_linux_source.tar.bz2  //Decompress the compressed package at the current location
```

Just run the command and wait for it to complete.

### **4.2 Source Code Compilation**

**Note:**

**After compiling as a whole, you can compile separately according to the actual situation;**

**The source code compilation requires a development environment with a running memory of 18G or above. Please do not modify the VM virtual machine image configuration provided by us.**

#### **4.2.1 Full Compilation Test**

There’s a compilation script `build.sh` in the source code path. Run the script to compile the entire source code. You need to switch to the decompressed source code path at the terminal to find the build. sh file. 

```shell
forlinx@ubuntu:~/3576$ cd OK3576_linux_source/                     // Jump to source path
```

You need to compile it under the source code directory, and the full compilation method is:

```shell
forlinx@ubuntu:~/3576/OK3576_linux_source$ ./build.sh chip  //To set the environment variable, select ok3576 here
forlinx@ubuntu:~/3576/OK3576_linux_source$ ./build.sh       //Perform a full compilation
```

After compilation, the system image generates update. image in the output/update/Image/folder.

**Note: The update. img is packaged for full programming of OTG or TF card, and other files are programmed step by step.**

### **4.2.2 Individual Compilation**

```shell
forlinx@ubuntu: ~/3576$ cd OK3576_linux_source/       // Jump to source path
forlinx@ubuntu: ~/3576$ ./build.sh chip               //To set the environment variable, select ok3576 here
forlinx@ubuntu: ~/3576$ ./build.sh kernel             //Compile the kernel
```

After individual compilation, boot.img will be generated in the kernel/path. Because the kernel in update.img does not update after successful compilation. Please flash the kernel/boot. img file step by step. Refer to the OTG flashing test chapter in the user manual, and use the generated boot.img to replace the default factory image to flash.

### **4.2.3 Clearance of Files Generated by the Compilation**

Operate in the source code path.

```shell
forlinx@ubuntu: ~/3576$ ./build.sh cleanall               // Clean up all files generated by compilation
```

### **4.2.4 Kernel Configuration**

 If you want to configure the kernel, you must first complete a full compilation.

Perform the following operations in the source code directory.

```plain
forlinx@ubuntu:~/3576$ ./build.sh kconfig
```

After adding or modifying configurations, save and exit. Afterwards, it can be compiled directly.

### **4.3 Application Compilation and Operation**

#### **4.3.1 Command Line Application Compilation and Operation**

This subsection uses the Forlinx Watchdog test program for demonstration, or you can build your project.

1\. Use the cd command to enter the directory /home/forlinx/3576;

```shell
forlinx@ubuntu:~$ cd OK3576_linux_source/app/forlinx/forlinx_cmd/fltest_watchdog
```

2\. Configure the cross-compiler path and use make to cross-compile;

```shell
forlinx@ubuntu:~/3576/OK3576_linux_source/app/forlinx/forlinx_cmd/fltest_watchdog$ export CROSS_COMPILE=/home/forlinx/3576/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/aarch64-buildroot-linux-gnu-
forlinx@ubuntu:~/3576/OK3576_linux_source/app/forlinx/forlinx_cmd/fltest_watchdog$ export PATH=$PATH:/home/forlinx/3576/aarch64-buildroot-linux-gnu_sdk-buildroot/bin/
Modify the CPP option of the Makefile to CPP=$(CROSS_COMPILE)gcc
forlinx@ubuntu:~/3576/OK3576_linux_source/app/forlinx/forlinx_cmd/fltest_watchdog$ make	
aarch64-linux-gcc watchdog.c -o fltest_watchdog  
generate fltest_watchdog success!!!
```

Use the file command to view the generated file information.

```shell
forlinx@ubuntu:~/3576/OK3576-linux-source/app/forlinx/forlinx_cmd/fltest_watchdog$ 
file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, with debug_info, not stripped
```

From the result, you can see that the compiled 64-bit ARM file.

3\. Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the/forlinx path. Take the TF card as an example, and copy it to the development board and run the test.

```shell
[root@ok3576:/]# cp /run/media/mmcblk1p1/fltest_watchdog /home/forlinx
[root@ok3576:/]# cd /home/forlinx
[root@ok3576:/home/forlinx]# ./fltest_watchdog
Watchdog Ticking Away!
```

Refer to the chapter "Watchdog Test" in the user's manual for the test.

### **4.4 Qt Creator Environment Configuration**

#### **4.4.1 Cross Compiler Configuration**

**Note: The cross-compilation chain has been installed in the default development environment. If you build your own development environment, please refer to 3.3 Cross-compilation Chain Default Installation (Default installation path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot)**

 <font style="color:#000000;">Enter aarch64-buildroot-linux-gnu\_sdk-buildroot directory to execute:</font>
```shell
forlinx@ubuntu:~/3576/aarch64-buildroot-linux-gnu\_sdk-buildroot$ sudo ./relocate-sdk.sh
forlinx@ubuntu:~/3576/aarch64-buildroot-linux-gnu\_sdk-buildroot$ source environment-setup 
```
**Qt Version: Qt 5.15.11**

<font style="color:#000000;">Qt is a cross platform graphics development library that supports numerous operating systems. Before compiling, it is necessary to configure the Qt Creator compilation environment.</font>

1\. Enter the installation path of qtcreator and open qtcreator；

```shell
forlinx@ubuntu:~/qtcreator-4.7.0/bin$ ./qtcreator &
```

2\. Click Tools-> Options-> Kits-> Compilers in Qt Creator, and then click Add-> GCC-> C;

3\. Name enters GCC;

4\. Paste the path of the compilation chain to the Compiler Path, as shown in the following figure:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-gcc

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292014485-f06907c5-932b-4414-80ff-d76ced326a9a.png)**

5\. Add the GCC compiler in the same way, and click "Add-> GCC-> C" on the right, as shown in the figure:

Path: /home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/aarch64-linux-g++

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292014769-384507d5-8651-47a2-93a8-c288b8a17df3.png)**

#### **4.4.2 Qt Versions Configuration**

1\. Click Tools- > Options- > Qt Versions in Qt Creator;

2\. Then click Add to pop up a dialog box to select <font style="color:#0000ff;">/home/forlinx/aarch64-buildroot-linux-gnu\_sdk-buildroot/bin/qmake </font>;

3\. Click open to add;

4\. Then it will return to the Qt Version configuration box, and the Version name can be changed by itself;

5\. Then click Apply and OK.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292015054-64cf2592-9fbc-4fa7-9c02-5167becea1fe.png)**

#### **4.4.3 Kits Configuration**

Kits is a build kit for building and selecting development build environments useful for projects with multiple QT libraries.

Add the previously added cross-compiler and QT Version to Kits to build a compilation environment suitable for the development board.

1\. Click Tools- > Options- > Kits in Qt Creator, and then click Add to display the configuration section;

2\. Name changes by itself;

3\. Compiler selects GCC;

4\. Qt version selects the name entered when the Qt version was created;

5\. Then click “Apply and OK”.

**![](https://cdn.nlark.com/yuque/0/2024/png/45535139/1726292015332-5cb82538-73e7-437c-9e21-ede225f2efcb.png)**