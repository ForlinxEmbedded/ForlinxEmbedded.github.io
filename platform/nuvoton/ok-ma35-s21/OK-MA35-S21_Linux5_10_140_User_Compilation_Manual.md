# Linux5.10.140\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright Notice

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Application Scope

This manual is mainly applicable to the Linux5.10.209 operating system on the Forlinx OK-MA35-S21 platform. Other platforms can also refer to it, but there will be differences between different platforms. Please make modifications according to the actual conditions.

## Revision History

|  **Date**  | Manual Version | **SoM Version** | **Carrier Board Version** | **Revision History**                                  |
| :--------: | :------------: | :-------------: | :-----------------------: | ----------------------------------------------------- |
| 10/12/2024 |      V1.0      |      V1.0       |      V1.1 and Above       | OK-MA35-S21 User's Compilation Manual Initial Version |

## Overview

This manual is designed to enable users of the Forlinx Embedded development board to quickly understand the compilation process of the products and familiarize themselves with the compilation methods of Forlinx products. The application program needs to be cross-compiled on the Linux operating system before it can run on the development board. According to the method in the compilation manual, users can compile their own software code through practical operation.

The manual will provide instructions for setting up the environment but there may be some unforeseen issues during the environment setup process. For beginners, it is recommended to use the pre-configured development environment provided by us. This will allow you to quickly get started and reduce development time.

Linux systems are typically installed in three ways: dual system on a real machine, single system on a real machine, and virtual machine. Different installation methods have their advantages and disadvantages. This manual only provides methods to build ubuntu in a virtual machine. Computer hardware requirements: It is recommended to have at least 6GB of memory or more, so that you can allocate some memory to run the virtual machine (the virtual machine is recommended to have more than 2GB) and still do other operations on Windows, otherwise it will affect the performance of Windows.

The manual is mainly divided into four chapters:

+ Chapter 1. is mainly about the installation of VMware, and the version used is VMware® Workstation 15 Pro15.1.0. Users need to install VMware before using the ubuntu development environment.

+ Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu20.04.

+ Chapter 3. mainly introduces the method of building a new ubuntu development environment. It takes 64-bit Ubuntu 20.04 as an example to describe the creation process of Ubuntu. Due to different computer configurations, unexpected problems may arise during the setup process. It is recommended for beginners to use the environment that we have set up directly.

+ Chapter 4. mainly introduces the methods of compiling the source code related to the development board.

A description of some of the symbols and formats in the manual:

|                          **Format**                          | **Meaning**                                                  |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
|                           **Note**                           | Note or information that requires special attention, be sure to read carefully. |
|                              📚                               | Relevant notes on the test chapters.                         |
|                              ️🛤️                               | Indicates the related path.                                  |
| <font style="color:blue;">Blue font on gray background</font> | <font style="color:#000000;">Refers to commands entered at the command line (Manual input required).</font> |
|         <font style="color:black;">Black font</font>         | Serial port output message after entering a command          |
|       **<font style="color:black;">Bold black</font>**       | <font style="color:#000000;">Key information in the serial port output message</font> |
|            <font style="color:#000000;">//</font>            | <font style="color:#000000;">Interpretation of input instructions or output information</font> |
|                      Username@Hostname                       | <font style="color:#000000;">root@ok3568: development board serial port login account information,</font><br/><font style="color:#000000;">forlinx @ ok3568: development board network login account information</font><br/><font style="color:#000000;">forlinx @ Ubuntu: development environment Ubuntu account information</font><br/>You can determine the environment for function operation through this information. |

You can determine the operating environment for functional operations based on this information.

## 1\. VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of VMware virtual machines, using VMware Workstation 15 Pro v15.1.0 as an example to demonstrate the installation and configuration process of the operating system.

### 1.1 VMware Software Download and Purchase

Visit Vmware official website [https://www.vmware.com/cn.html](https://www.vmware.com/cn.html) for downloading Workstation Pro and obtaining the product key. VMware is a paid software, you need to buy it yourself, or use the trial version provided by VMware.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822205-af9e963f-ead8-498e-92e7-3208486f2c24.jpg)

After the download is complete, double-click the installation file to start the installation program.

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822295-9e42dc0e-e466-46d8-ac13-d11d067644dc.jpg)

Click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822398-c3a35e52-7e01-4953-a7ed-15c823179813.jpg)

Check the terms in the license agreement that I accept, then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822485-b4af7e60-11ed-400a-b4a7-0609d58dd838.jpg)

Modify the installation location to the partition where you want to install the software on your computer, then click '"Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822582-4f1e9473-4183-4c27-835d-82748f3a8dfb.jpg)

Check and click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822696-9a6dd1b2-65ba-4241-b28e-306266f27c99.jpg)

Check the box to add a shortcut, then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822823-bc603fa8-6bc1-4a7f-823c-35f4d5a5a888.jpg)

Click "Installation".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822917-ba292b16-0c89-4caa-9335-aed18a8a9b08.jpg)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790822998-86a6e012-0c30-4c20-86fc-c38b92bb0249.jpg)

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

## 2\. Loading the Existing Ubuntu Development Environment

It is recommended that beginners use the virtual machine environment built by Forlinx directly. After understanding this chapter, you can directly jump to the compilation chapter for further study.

The development environment provided is: forlinx (username), forlinx (password).

There are two ways to use a virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. Let's first talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum. (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

Select all compressed files and right-click to extract them to Nuvoton Ubuntu 20.04, as shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790824390-7eae1b4b-6fbe-40af-ae12-a5c82c76742d.jpg)

The MA35 Standard Environment folder appears after the decompression is complete, where .vmx is the file to be opened by the virtual machine.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790824469-8696b737-a3dd-496a-91b6-d37b642868a8.png)

Open the virtual machine and select the extracted file in the MA35 development environment: Nuvoton-Ubuntu 20.04.vmx

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790824572-6a93c8bd-36d1-4013-b38b-a3af7a72c349.jpg)

Turn on this virtual machine after loading is complete to run it and enter the system's interface.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790824657-b2aeea91-7cc4-4f8e-bc60-75a70b9766a7.png)

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790824726-abecd732-3912-4234-b0bf-6b10a1dec667.png)

The account providing the development environment is “forlinx”, and the password is “forlinx”. After filling in the password, select Sign in to log in.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790824797-6d14e9fd-be89-46c9-b3a0-886cf1251025.jpg)

**Note: If, after booting, the "Client OS CPU Disabled" is displayed. Shut down or reset the virtual machine. Restart the virtual machine. During the startup process, press and hold the shift key to pop up the grub menu. Select advanced options for ubuntu。 Then select linux 5.13.0-30-generic to boot.**

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790824882-bd6b0846-1e19-4cf5-a4ad-698966c37cfa.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790824953-0d160266-9171-44dd-b66d-6206472f4c34.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790825062-c66163f7-b12b-44dd-8b8a-5ad22fb51533.jpg)

## 3\. New Ubuntu Development Environment Setup

**Note: Beginners are not recommended to build the system by themselves. It is suggested to use the existing virtual machine environment. If you do not need to build the environment, you can skip this section. This section mainly explains the process of building the ubuntu system.**

### 3.1 Ubuntu System Creation

#### 3.1.1 Ubuntu Virtual Machine Setup

Open the VMware software, click on create a new virtual machine. Enter the following interface

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790826446-535bfcff-4ef2-4c4a-9c8a-a91d8aae50ac.jpg)

Choose custom, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790826531-23e888a8-82af-49d4-9608-e6c391d55c12.jpg)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790826664-b2dc2020-bb2c-459b-b48f-5ae902adc707.jpg)

Select Install the operating system later and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790826733-30c16c1a-e3a1-4086-a246-a48e9bbec261.jpg)

Leave the default and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790826831-17f1d65c-5ef0-46e1-88ac-4cd75031eedd.png)

Modify the virtual machine name and installation location, click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790826916-1a8ab513-20f4-42f8-b464-2662bd289480.png)

Set the number of processors as appropriate.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790826987-e4d51f5b-075a-48d1-bcfe-a81a49b76108.jpg)

Also, set the memory size according to the actual situation; it is recommended to use 16G (adjusted according to the performance of your machine).

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827128-dc81f360-cdbc-4be2-ab28-12209bea6935.png)

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827200-409cb15a-39f2-4494-959a-1507d0b8c16b.png)

The default selection for the IO controller type here is LSI.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827365-4c11ac8e-3d34-4840-9806-6aa5f3d76e4b.png)

The default selection here is also SCSI.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827428-9586ad46-164b-424d-871f-68ab3cb6cbbd.png)

Choose to create a new virtual disk here.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827526-beea4fd8-ef46-4499-8cc0-de7c349fa185.png)

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click Next to finish.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827605-4c3ce394-a38c-4414-ae25-f27607ed7c47.png)

Specify the disk file, the default one here is fine.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827669-53ef8be5-1422-43c8-a95e-1686051ea4db.png)

Click Finish by default.

![](https://cdn.nlark.com/yuque/0/2024/png/50461850/1733790827733-b4218d06-a674-47d1-8043-062281cd3fca.png)

The virtual machine creation is now complete.

In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.

#### 3.1.2 System Installation

The version of Ubuntu chosen to install is 20.04, first of all, go to the official website of Ubuntu to get the Ubuntu20.04 64-bit image,the download address is download "ubuntu-20.04.6-desktop-amd64.iso" version.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790827796-7662c8fb-063b-42dc-8ce1-8c85f9381705.jpg)

Right-click on the newly created Ubuntu 64-bit and select Settings from the pop-up menu.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790827865-5ee59080-9d2d-4090-9db8-6252546aaed8.jpg)

The "Virtual Machine Settings Menu" pops up as shown below:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790827941-b89bcc96-9095-4fab-9fa5-c177b5b003cc.jpg)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828067-f1e8e135-1470-4c02-a438-16875862a70e.jpg)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828160-a11ca836-a830-4abd-9cc4-c0159be3bfb2.jpg)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828261-1256882c-65fa-46e0-93dc-00bd555dab80.jpg)

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828380-68fd77e4-67e6-46e4-9829-0c2e60fddd84.jpg)

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828482-f29424d0-0417-4fe5-bc31-e9b15ba6b761.jpg)

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828552-a220f7fc-5413-4dfa-bc1b-5843bf4322c3.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828638-ceb4aadd-48a2-491d-8c78-8ee7c06e5c60.jpg)

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set your username and password and click "continue" to automatically install the program:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828740-16883e62-e882-4315-a671-313eb3be7907.jpg)

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828884-85b8f077-6871-4f31-8012-51cff28f7c39.jpg)

After the installation, click "Restart Now" to reboot (or click "Reboot Client"):

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790828957-7593de8c-d633-4f37-8c8c-44ea15ffd67f.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829054-1cce6b86-dbfc-4a31-b539-5942931a1e90.jpg)

The system interface after the reboot is complete as shown below:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829137-75de9a16-3cea-4d71-bd15-1a0253e76f2c.jpg)

#### 3.1.3 Basic Ubuntu Installation

After installing the Ubuntu20.04 operating system, there are a few configurations to make.

**VMware Tools Installation:**

Next, install VMware Tools. Without installing this tool, you won't be able to copy and paste and drag file between the Windows host and the virtual machine. First click on "Virtual Machines" on the VMware navigation bar, then click "Install VMware Tools" in the drop-down box.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829213-d1f1c00d-87f3-4cc4-bccf-df3b9166c3d3.jpg)

Once done, enter Ubuntu and the VMware Tools CD icon will appear on your desktop, click into it:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829295-ba21503b-3c98-4404-99b3-4bb295daeb7c.jpg)

Double-click on the VMwareTools icon, go to it and see a zip file VMwareTools-10.3.10-12406962.tar.gz (it may be different for different VM versions).

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829361-007f7d7c-1c5c-4f65-bfe5-5469d56b440f.jpg)

Copy the file under the home directory (i.e., the directory of the home personal username):

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829479-22a3d660-ecee-4629-8889-177d5bc45aeb.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829582-da3a2404-cbd0-4d43-81de-683cb43f7b08.jpg)

Press the keyboard \[Ctrl+Alt+T] to bring up the terminal command interface, use the tar command to unzip the VMwareTools installation package (using the sudo command will prompt you to enter the password, follow the prompt to enter the password and press Enter, Linux system password input has no echo, make sure the password is correct and press Enter to confirm):

```plain
forlinx@ubuntu:~$ sudo tar -xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

After executing the extract command, use ls to view the file directory vmware-tools-distrib, and go to the directory

```plain
forlinx@ubuntu:~$ ls
Desktop   examples.desktop   nfs   snap   tftp   VMwareTools-10.3.10-12406962.tar.gz  vmware-tools-distrib   work
forlinx@ubuntu:~$ cd vmware-tools-distrib/	  //Use the CD command to enter the directory
forlinx@ubuntu:~/vmware-tools-distrib$ ls             //View the files in this directory
bin   caf   doc   etc   FILES   INSTALL   installer   lib   vgauth   vmware-install.pl
```

In the current directory, enter sudo ./vmware-install.pl to install, enter the password after pressing Enter, and then start the installation. When you encounter \[yes]/\[no], enter yes, and press Enter for the rest to install by default.

```plain
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl 
[sudo] password for forlinx: 		     //Enter the password of the forlinx account, no display, cannot see the input content
```

The installation process information is long, here omitted.

```plain
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes			//Enter yes
... ...		
```

After completing the VMware tools tool, you can achieve file copy and paste, virtual machine adaptive full display and other functions between Windows and Ubuntu. If the virtual machine cannot be displayed in full screen, you can click View, select Auto-resize Guest Display, and click Fit Guest Now to achieve the virtual machine. VMware tools installation is successful.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829673-793bfba7-97e2-4e50-906f-46b3aaad61f9.jpg)

**Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829796-4a5375c4-ad9f-4eea-abca-8dd8e9100aec.jpg)

#### 3.1.4 Ubuntu Network Settings

**NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790829987-18652420-2497-424f-8174-dbc3f381b047.jpg)

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VM to get on the extranet.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830080-7f1e10d6-053f-4fd2-acd3-1c4c197a689e.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830190-094e5261-4c9b-459b-99c0-94874e453dc5.jpg)

The network is set to dynamic IP.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830491-d7b932e4-851c-41ec-943e-0a813f05ce36.jpg)

**Bridge Mode:**

If TFTP, SFTP and other servers are used, the network contact mode of the virtual machine needs to be set as the bridge mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830724-3781a417-17b9-4452-b8f7-2d5da104e004.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830863-a0f2a24f-af97-4180-b548-2f62be6fa873.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790830962-36750898-baf3-4937-978f-6207507a1b96.jpg)

Set up static ip, at this time Ubuntu's IP and the host IP need to be set in the same network segment.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831068-0eaf6bc8-b53f-42a3-b43e-a27eb996c6fb.jpg)

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

#### 3.1.5 U Disk Loading

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if we don't set it up, when we plug in the USB3.0 port, we can't connect to the virtual machine. The principle is as follows:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831184-fc3d63d1-144b-49ea-9393-ddce8a5d3950.jpg)

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831270-41f4104a-f3cd-4f45-a8f8-8999f3f03850.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831348-490bfc41-59b4-4a9b-a98f-53bb128a1ced.jpg)

#### 3.1.6 Virtual Machine Basic Library Installation

Before development, there are some other necessary libraries, we use the following commands to install them one by one, before installation, you need to ensure that the network can be used normally, you can get on the extranet:

```plain
forlinx@ubuntu:~$ sudo apt-get update                        // Update the download source information
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide a list of software packages necessary for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used to generate text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                     // A compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

#### 3.1.7 Installation of Necessary Libraries for Compiling OKMA35 Linux Source Code

```plain
forlinx@ubuntu:~$ sudo apt-get update                                       //Update apt-get download sources
forlinx@ubuntu:~$ sudo apt-get install openssh-server vim git fakeroot           //Installation of essential toolkits
forlinx@ubuntu:~$ sudo apt-get install git ssh make gcc libssl-dev liblz4-tool expect g++ patchelf chrpath gawk texinfo chrpath diffstat binfmt-support qemu-user-static live-build bison flex fakeroot cmake gcc-multilib g++-multilib unzip device-tree-compiler python3-pip libncurses5-dev
forlinx@ubuntu:~$ sudo apt-get install libgmp-dev  libmpc-dev libicu-dev bsdmainutils expect
```

These library files are the ones that need to be downloaded when compiling the Linux source code by building the MA35 Linux compilation environment by yourself. If you are not building the MA35 Linux development environment, you can skip this step.

### 3.2 Ubuntu Common Software Installation

#### 3.2.1 VScode

Click the icon similar to a package on the left side of the desktop to see some tools. You can also search for the tools we want. For example, download a VScode tool, which is very convenient for our daily coding.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831428-ac1cff1a-91fe-4bc4-ab96-a1ef4711dc64.jpg)

Please search for the tool you need, click in to view details, click install to download, wait for the download to complete automatic installation, and then click "Launch" to run it.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831535-8d7c8212-80ba-4f35-bedc-52624e65e587.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831626-622d1600-2f75-417b-8a17-ec54fd3751a6.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831737-817dafba-97e4-47d3-b080-c2c1ef1cce36.jpg)

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831819-15468199-1aa6-4d09-a2d8-0bc7e4ef904d.jpg)

#### 3.2.3 NFS Installation

The terminal executes the following command:

```plain
  forlinx@ubuntu:~$ sudo apt-get  install -y nfs-kernel-server nfs-common portmap  
```

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790831910-3784468e-757b-4394-a2b3-12c98f127ef8.jpg)

### 3.3 QT Environment Setup and Use

Qt Creator is a cross-platform QT integrated development environment (IDE) that includes advanced C + + code editors, project and build management tools for QT application framework design and application development. Qt Creator5.12.8 selected for the installation.

The SDK provided by Forlinx provides a complete development environment for Qt5.12.8 (including Qt Quick).

#### 3.3.1 Qt Creator Environment Setup

Path: OK-MA35-S21 \_Linux5.10.140+Qt5.12.8\_User Profile\\2-Image and Source Code\\1-Source Code qt-creator-opensource-linux-x86\_64-4.7.0.zip

Extract qt-creator-opensource-linux-x86\_64-4.7.0.zip, copy qt-opensource-linux-x64-5.14.2.run to any directory under the current user's home directory, and execute it:

```plain
  forlinx@ubuntu:~/62xx$ chmod  777 qt-opensource-linux-x64-5.12.8.run  
  forlinx@ubuntu:~/62xx$ sudo ./qt-opensource-linux-x64-5.12.8.run  
```

The following interface will pop up. Click "Next" to enter the next step:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832012-310acc4f-7416-40ff-aacb-ace07767e318.jpg)

Click "Next" to go to the next step:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832112-371ed81a-1b23-49c1-b4a6-6fb471f30e62.jpg)

Enter the email address and password, and click "Next" to continue:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832191-5ee291ac-165c-45fe-92b6-39577337173e.jpg)

Check I have read … Click "Next" to continue:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832272-d2154e64-3aac-4401-828c-4967335bbf35.jpg)

In the following interface, click "Browse..." to select the installation path of Qtcreator, after the selection is complete, click "Next" to enter the next step:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832339-79675137-36a6-4771-ac9a-414dffde1444.jpg)

In the following interface, select the first item and click "Next" to enter the next step:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832410-d1c0d8ff-2aa9-4782-bffa-f4b78d7e1abc.jpg)

Agree to the agreement and click "Next":

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832485-38c8937c-4725-4a98-ba40-33ec3430ad3f.jpg)

Click “Install” to install:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832612-750a7f96-fa77-4bef-be0d-dbbc577b1b2d.jpg)

After the installation is completed, the following interface will be displayed. Uncheck the option "Launch Qt Creator" "and click" Finish "to complete the installation steps of Qt Creator:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832693-0acd29e8-509a-4bcf-942f-93b7e30ac0b9.jpg)

#### 3.3.2 Environment Configuration

**Note: Be sure to configure the environment variables first (refer to "4.3 Cross Compilation Tool Chain Configuration"), and then use the command to open Qt Creator. Open Qt Creator according to your actual installation path.**

Qt is a cross-platform graphics development library, which supports many operating systems. Before compiling, you need to configure the compiling environment of Qt Creator.

##### 3.3.2.1 Configuration of the Cross-compiler

Start Qt Creator, and the Qt development interface will appear. Click Tools- > option:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832767-5fa37015-5610-4822-be92-53e0c79c06c8.jpg)

Enter the Options interface, click "Kits" on the left, then click the "Compilers" tab on the top of the middle, and click "Add-> GCC-> C + +" on the right, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832838-bdc67dc6-8c39-4c93-a74d-21b29e4c586c.jpg)

In the pop-up window below, select Compiler path and click Browser to find "aarch64-linux-g + +" under/opt/aarch64-nuvoton-linux-gnu \_ sdk -buildroot/bin, select it and click Open. And change the Name to "G + +".

Follow the same method to add GCC compiler, click "Add->GCC->C" on the right side, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790832926-bfc11396-3b11-495d-98ea-e2ef9bcc9a42.jpg)

Click Browser and find "aarch64-oe-linux-gcc" under/opt/aarch64-nuvoton-linux-gnu \_ sdk-buildroot/bin, select it and click Open, and change the Name to "GCC"

##### 3.3.2.2 Debuggers Configuration

Click the Debuggers tab, the following screen will pop up, click Add:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790833040-e6197663-9fc0-44c2-839a-8c5ae94450dd.jpg)

In the pop-up window below, click Browser under the Path option and find "aarch64-linux-gdb" under/opt/aarch64-nuvoton-linux-gnu \_ sdk -buildroot/bin, select it and click Open. And change the Name to "debuggers".

##### 3.3.2.3 Qt Version Configuration

Click the Qt Versions tab and click Add:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790833152-16c28766-0418-426d-a322-3f5df87d56ae.jpg)

Find qmake under /opt/aarch64-buildroot-linux-gnu \_ sdk-buildroot/bin. Select it and click Open. After it is added, the interface shown below is displayed. Click “Apply”.

##### 3.3.2.4 Kits Configuration

Click on the "Kits" tab, then click "Add" on the right side to add a new kit. Modify the settings according to the content in the image below, and click on "Apply" afterwards.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790833230-43624074-d1e8-466b-9ab3-dcbf02543982.jpg)

## 4\. Linux Compilation

This chapter mainly describes the compiling method of the source code related to the development board, including the kernel source code compilation and the application program compilation.

### 4.1 Preparation Before Compilation

### 4.1.1 Description of the Environment

+ Development environment OS: Ubuntu20.04 64-bit version
+ Cross-toolchain: aarch64-nuvoton-linux-gnu-gcc
+ The board uses the Bootloader version: u-boot-2020.07.
+ Development Board Kernel: Linux-5.10.140
+ Development board porting QT version: qt5.12.8

### 4.1.2 Source Code Copy

Source Code: OK-MA35-S21 \_Linux6.1.33+Qt5.12.8\_User Profile\\2-Image and Source Code\\1-Source Code\\ OKMA35\_Linux\_SDK.tar.bz2.00

Create a working directory

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/MA35                       //Create the working directory in order
```

Copy the source code file OKMA35\_Linux\_SDK.tar.bz2.00 in the user data to the/home/forlinx/ MA35 directory of the virtual machine.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/MA35                //Switch to the working directory
forlinx@ubuntu:~/MA35$ cat OKMA35-linux-sdk.tar.bz2.0* > OKMA35-linux-sdk.tar.bz2
forlinx@ubuntu:~/MA35$ tar -xvf OKMA35-linux-sdk.tar.bz2             //Decompress the compressed package in the natural location
```

Just run the command and wait for it to complete.

#### 4.1.3 Configuration of the Cross-compiler

Copy OK-MA35-S21 \_ Linux 5.10.140 + Qt5.12.8 \_ User Profile\\ 3-Tools \\ aarch64-nuvoton-linux-gnu \_ sdk-build root \_ installer to the virtual machine ~ directory, and enter this directory.

```plain
forlinx@ubuntu: ~/$ chmod 777 aarch64-nuvoton-linux-gnu_sdk-buildroot_installer
forlinx@ubuntu: ~/$ sudo ./aarch64-nuvoton-linux-gnu_sdk-buildroot_installer
forlinx@ubuntu: ~/$ source /opt/aarch64-nuvoton-linux-gnu_sdk-buildroot/environment-setup
```

### 4.2 Source Code Compilation

**Note:**

+ **After the kernel source code is decompressed for the first time, the source code needs to be compiled as a whole;**
+ **After compiling as a whole, you can compile separately according to the actual situation;**
+ **The source code compilation requires a development environment with a running memory of 8G or above. Please do not modify the VM virtual machine image configuration provided by us.**

#### 4.2.1 Full Compilation Test

Switch to the extracted source code path at the terminal:

```plain
  forlinx@ubuntu:~$ cd  ~/MA35/OKMA35-linux-sdk/  
```

The following operations need to be done in the source directory:

**Note: For the first compilation, you need to configure the cross-compilation tool chain in Section 4.1.3**

If the memory capacity is 1G:

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  all 1g  
```

If the memory capacity is 512M:

```plain
 forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  all 512m  
```

The final compilation effect is shown in the following figure (the path may be different according to the actual situation):

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790834838-3159ebbf-0664-4548-a512-d26a606e56b4.jpg)

After successful compilation, the corresponding compilation project result file will be generated in the OKMA35-linux-sdk/images folder, and the image file will be found.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790834914-cd02399e-ccb2-4431-86d1-0174106aebb1.jpg)

**Note: pack-image-OKMA35-S2\_emmc-sdcard.bin is used for USB full flashing, other files are used for single-step flashing.**

#### 4.2.2 Individual Compilation Tests

Compile Uboot Separately:

```plain
  forlinx@ubuntu: ~/MA35/OKMA35_Linux_SDK$./build.sh  uboot 1g/512m     //Generate u-boot.bin，path/OKMA35-linux-sdk/images/  
```

Compile the kernel separately:

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh kernel 1g/512m       //Generate Image和Image.dtb，path/OKMA35-linux-sdk/images/  
```

Compile the apps separately

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  apps   //Generate a forlinx application that is automatically installed on the file system
```

Compile rootfs separately

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  rootfs      
```

#### 4.2.3 Clearance of Files Generated by the Compilation

The user performs the operation in the kernel source code path.

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  clean
```

This operation clears all intermediate files. However, it does not affect the source file, including the source file that has been changed, and the path may be different according to the actual situation.

Clear the kernel separately:

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  clean_kernel  
```

Clear Uboot separately：

```plain
  forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk$./build.sh  clean_uboot  
```

### 4.3 Application Compilation and Operation

#### 4.3.1 Command Line Application Compilation and Operation

This subsection uses the watchdog test program, the default program in the OKMA35-linux- sdk/app/forlinx/forlinx\_cmd/fltest\_watchdog.

1\. Use the cd command to enter the directory /home/forlinx/ MA35

```plain
  forlinx@ubuntu:~$  cd /home/forlinx/MA35/OKMA35-linux-sdk/app/forlinx/forlinx_cmd/fltest_watchdog  
```

2\. Add the cross-compiler path and use make to cross-compile.

```plain
forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk/app/forlinx/forlinx_cmd/fltest_watchdog$ source /opt/aarch64-nuvoton-linux-gnu_sdk-buildroot/environment-setup
（If the following content pops up, the setting is successful）
_           _ _     _                 _
| |__  _   _(_) | __| |_ __ ___   ___ | |_
| '_ \| | | | | |/ _` | '__/ _ \ / _ \| __|
| |_) | |_| | | | (_| | | | (_) | (_) | |_
|_.__/ \__,_|_|_|\__,_|_|  \___/ \___/ \__|

       Making embedded Linux easy!

Some tips:
* PATH now contains the SDK utilities
* Standard autotools variables (CC, LD, CFLAGS) are exported
* Kernel compilation variables (ARCH, CROSS_COMPILE, KERNELDIR) are exported
* To configure do "./configure $CONFIGURE_FLAGS" or use
  the "configure" alias
* To build CMake-based projects, use the "cmake" alias
```

3\. Use make to cross-compile.

```plain
forlinx@ubuntu: ~/MA35/OKMA35-linux-sdk/app/forlinx/forlinx_cmd/fltest_watchdog$ make	
aarch64-linux-gcc watchdog.c -o fltest_watchdog  
generate fltest_watchdog success!!!
```

Use the file command to view the generated file information

```plain
forlinx@ubuntu:~/MA35/OKMA35-linux-sdk/app/forlinx/forlinx_cmd/fltest_watchdog$ 
file fltest_watchdog 
fltest_watchdog: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 5.10.0, not stripped
```

From the result, you can see that the compiled 64-bit ARM file.

4\. Copy the fltest \_ watchdog generated by compiling to the board through U disk or FTP, for example, under the path. Take the USB disk as an example, copy it to the development board and run the test.

```plain
root@OKMA35-C:/# cp /run/media/sda1/fltest_watchdog /
root@OKMA35-C:/# ./fltest_watchdog
Watchdog Ticking Away!
```

5\. Refer to the chapter "Watchdog Test" in the user's manual for the test;

#### 4.3.2 Qt Application Compilation and Application

Enter/home/forlinx/Qt5.12.8/Tools/QtCreator/bin, start Qt creator：

```plain
forlinx@ubuntu:~/Qt5.12.8/Tools/QtCreator/bin$ ./qtcreator
```

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835078-33028446-0582-4aad-a5f8-877f5fd99b09.jpg)

Start the Qt Creator program, enter the Qt Creator interface, click New File or Project "to create a project, and select Application-> Qt Widgets Application". Then click "Choose" in the lower right corner:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835299-f562fe3b-33c7-49ff-9ee1-d1d5e92be52f.jpg)

In the following interface, change the name of the new project to "helloworld", select the installation path /home/forlinx, and then click "Next":

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835370-a93baa1a-b8ee-4f2f-9727-9f5bdd6d81f7.jpg)

Select qmake and click Next to continue.

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835448-d33e392f-e647-41f2-ba60-2d97da640a3e.jpg)

In the following screen, change the class name to "helloworld", select the base class to "Qwidget", and then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835513-fbca9cb1-42fd-4a32-b74b-d86b0a2206df.jpg)

In the following screen, select "ma35" as the kit of the current project, and then click "Next":

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835609-3fcf0d95-e495-4065-825f-ec2983c9631b.jpg)

In the following interface, click "Finish" to complete the new project:

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835694-1eb01fd6-ddec-41ae-9da9-18db96f0a457.jpg)

After the new project is created, the following window will be displayed:   

![](https://cdn.nlark.com/yuque/0/2024/jpg/50461850/1733790835804-a99535c3-d4fd-4937-89df-f82d1f491c42.jpg)

When the program is completed, click the hammer icon in the lower left corner to cross-compile. Copy the compiled executable program helloworld to the development board to test the application.