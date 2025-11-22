# Linux6.1.36\_User’s Compilation Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Application Scope

This manual is mainly applicable to the Linux4.1.15 operating system on the Forlinx OKMX6ULL platform. Other platforms can also refer to it, but there will be differences between different platforms. Please make modifications according to the actual conditions.

## Revision History

|    Date    | Version |  Modification   |
| :--------: | :-----: | :-------------: |
| 20/01/2022 |  V1.0   | Initial Version |

## Overview

This manual is designed to enable you to quickly understand the compilation process of the products and familiarize yourself with the compilation methods of Forlinx products. The application needs to be cross-compiled on an Ubuntu host before it can run on the development board. By following the methods provided in the compilation manual and performing practical operations, you will be able to successfully compile your own software code.

The manual is mainly divided into four chapters:

- Chapter 1. is mainly about the installation of VMware, and the version used is VMware® Workstation 15 Pro15.1.0. Users need to install VMware before using the ubuntu development environment;
- Chapter 2. mainly introduces the method of loading the ubuntu development environment provided by Forlinx, and the development environment is 64-bit ubuntu18.04;
- Chapter 3. mainly introduces the method of building a new ubuntu development environment. This section uses the 64-bit Ubuntu 18.04 as an example to describe the process of Ubuntu creation, cross-compiler installation, and QT Creator installation. Due to different computer configurations, unexpected problems may occur in the building process. It is recommended that beginners directly use the environment we have built;
- Chapter 4. mainly describes the compiling method of the source code related to the development board, including the kernel source code compilation and the application program compilation.

## 1\. VMware Virtual Machine Software Installation

### 1.1 VMware Software Download and Purchase

Go to the VMware website https://www.vmware.com/cn.html to download Workstation Pro and get the product key. VMware is a paid software that requires purchasing, or you can choose to use a trial version.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130552795-1efff5fc-4341-43b9-aeb1-bd723941779d.png)

After the download is complete, double-click the installation file to start the installation program.

### 1.2 VMware Software Installation

Double-click the startup program to enter the installation wizard.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130553055-61c21413-07de-4beb-bed5-891acde85934.png)

Click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130553376-df065571-fcfa-4fde-83f1-e25539acc3b4.png)

Check the terms in the license agreement that I accept, then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130553578-781988f3-7dac-4da4-ab14-4ffc52417275.png)

Modify the installation location to the partition where you want to install the software on your computer, then click '"Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130553799-5e6fd4d4-9d73-41e7-b325-2e3b3a3423cf.png)

Check and click on "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130554136-cf6e6cf5-3ff8-4e60-b72f-7d96205b4ce7.png)

Check the box to add a shortcut, then click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130554602-7f51a899-ebcf-4dd9-bad3-1be0b24bd24f.png)

Click "Installation".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130554863-0a8ad89a-74aa-4fb0-8ed5-e8ae0bfe9798.png)

Wait for the installation to complete.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130555089-e26d12b8-7cc4-4afe-b9e1-3ff3d86cc4ae.png)

Click "Finish" to try it out. If users need to use it for a long time, they need to buy it from the official and fill in the license.

## 2\. Loading the Existing Ubuntu Development Environment

**Note:**

+ **It is recommended for beginners to directly use the pre-built virtual machine environment provided by Forlinx, which already includes installed cross-compiler and Qt environment. After understanding this chapter, you can directly jump to the compilation chapter for further study;**
+ **The development environment provided is: forlinx (username), forlinx (password).**

There are two ways to use a virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. Let's first talk about how to load an existing environment.

First, download the development environment provided by Forlinx. In the development environment documentation, there should be an MD5 checksum file. After downloading the development environment, you should verify the integrity of the compressed package using the MD5 checksum. (You can use an on-line MD5 checksum tool or download a specific MD5 checksum tool for this purpose). To check if the checksum in the verification file matches the checksum of the file itself. If they match, the file download is successful. If they don't match, it suggests that the file may be corrupt, and you should consider downloading it again.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130667841-7dd3f795-e862-4ab5-9123-97a4322a44b8.png)

Select all the compressed packages and right click to extract them to MX6UL\&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130668092-deb6353e-c58e-47a8-8f2c-0494bcde9373.png)

After the decompression is completed, as shown in the figure below:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130668390-1271091f-6304-4c3e-9d51-b2f46e4384ef.png)

The file "Ubuntu18.04 64-bit.vmx" in the MX6UL\&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04 folder is the file that needs to be opened by the virtual machine.

Open the installed virtual machine.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130668618-c3be439a-e840-4e42-a78f-1544448e447f.png)

Navigate to the directory where the recently extracted MX6UL\&MX6ULL-linux4.1.15-VM15.1.0-ubuntu18.04 virtual machine file is located, and double-click on the startup file to open it.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130668821-8323be81-5bc8-49df-abf1-3bdff8e0afb4.png)

Turn on this virtual machine after loading is complete to run it and enter the system's interface.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130669055-44003c55-25ea-4813-a29a-21ae2bb43ac1.png)

The development environment is: forlinx, and the password is: forlinx. After filling in the password, select Sign in to log in.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130669360-9f42398a-117a-414d-bb81-dbe1dbfbe120.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130669640-b1da4f71-0317-425c-962b-04428e1b57bc.png)

## 3\. New Ubuntu Development Environment Setup

**Note: Beginners are not recommended to set up a system on their own. It is recommended to use an existing virtual machine environment. If you do not need to set up the environment, you can skip this section.**

This chapter mainly explains the process of setting up the Ubuntu system, installing the cross-compiler, and installing Qt Creator. If the user is not using Qt, the installation of Qt Creator can be ignored.

### 3.1 Ubuntu System Setup

#### 3.1.1 Creating an Ubuntu Virtual Machine

Open the VMware software, click on create a new virtual machine. Enter the following interface

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130873710-b80a1010-8d6a-4ba1-8849-570651261519.png)

Choose custom, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130873998-716f2d13-f787-45ab-8034-3684dd19f526.png)

Select the compatibility with the corresponding version of VMware, which can be found in Help->About VMware Workstation, and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130874359-e15e9c36-4757-4c02-9d31-2b1f6621e444.png)

Select Install the operating system later and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130874643-3c1b5ca9-329e-4aee-bff3-3cbe693f69a2.png)

Leave the default and click “Next”.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130874873-6a547ee4-c88f-4467-aa57-6f62406eef17.png)

Modify the virtual machine name and installation location, click "Next".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130875136-bf052855-fc99-4273-8e0e-30c7e6de4c5e.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130875393-5d7c2ff3-a199-44b9-93cc-384f20420379.png)

Again, set the memory size as appropriate.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130875638-fb0ecd2e-a95f-45cc-95b8-033ac8bed1c4.png)

Set the network type, the default is NAT mode, click Next. Keep the default values for the remaining steps until you reach the step to specify the disk capacity.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130875870-58ea3361-855b-4639-b0f5-923e361758bd.png)

The default selection for the IO controller type here is LSI.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130876113-0bc98951-16b5-4084-90c8-37d896225d4b.png)

The default selection here is also SCSI.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130876355-b630e6a2-e66c-4629-bad9-95a5142f811e.png)

Choose to create a new virtual disk here.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130876565-ef041689-7337-4abc-9d05-63b82dfd2f92.png)

Set the disk size to 200 gigabytes and select the form in which the disk exists, then click “Next” to finish.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130876873-7c0856e0-6814-46f2-b1c3-4777c3f1ba82.png)

Specify the disk file, the default one here is fine.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130877128-50148b1b-37d8-4af0-9227-6bf60c93f956.png)

Click Finish by default.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130877325-cd17f07f-bb68-4ef0-bf8d-bcffdcef5d5e.png)

The virtual machine creation is now complete.

In the next section, we will introduce the installation of Ubuntu system in the virtual machine, which is similar to the installation method in the real machine. Here we describe the method of installing Ubuntu system in a virtual machine.

#### 3.1.2 System Installation

The Ubuntu version chosen to install is 18.04. First, go to the official Ubuntu website to obtain the 64-bit image of Ubuntu 18.04. The download address is: http://releases.ubuntu.com/18.04/. Download the version: “ubuntu-18.04.5-desktop-amd64.iso”.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130877616-c0116c9e-13fd-4dca-8aca-cd910dcc7df4.png)

Right-click on the newly created Ubuntu 64-bit and select Settings from the pop-up menu.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130877889-7e5b736b-ed71-4266-9d79-2af0c01d3ea4.png)

The "Virtual Machine Settings Menu" pops up as shown below:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130878173-7f3b9c86-a789-4b74-9139-237498289208.png)

Click on CD/DVD (SATA), select “Use ISO image file,” browse and choose the previously downloaded Ubuntu image, then click “OK” to confirm.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130878386-465f332a-846b-4654-9492-c7b334ae6452.png)

After setting up the image, ensure that the network is available. Then, start the virtual machine and proceed with the installation of the Ubuntu image.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130878629-7b9c4978-111f-4d6a-87c8-d74e18db979f.png)

After starting the virtual machine, wait for the installation interface to appear as shown below.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130878872-dfd1e144-c565-4bf5-ae65-96165fdfd0ee.png)

After selecting the language on the left side as shown in the image, click “Install Ubuntu”, and the language selection interface will pop up. Ubuntu default language is English, of course, you can also choose others, the default choice of language in the later stage can also be reset,after selection then click continue.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130879162-c887a891-5473-4470-8744-ea601caa884c.png)

Next, by default, select continue to finish the installation, the installation process will be very slow, then click "continue":

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130879424-f22b6351-4139-46ed-a5ae-9f07a0395579.png)

Next, select continue by default to continue the installation, the installation process will be very slow, and then click “continue”:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130879621-48c81c07-77b7-42ba-9252-bf0b57d67089.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130879995-f2e16814-cf7c-4fc5-9bab-7c617fadd3e2.png)

Next, select the timezone. You can either click on the Shanghai timezone or enter "Shanghai" (or choose the appropriate timezone based on your location). Then, click "Continue" to proceed. Finally, set your username and password and click "continue" to automatically install the program:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130880313-7ce73410-2829-4742-b833-8116daec3469.png)

The installation process is shown in the figure below, you can skip it if the network is bad, it will not affect the installation.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130880702-8f6f15db-0b72-41bb-baf3-8223b6f98062.png)

After the installation is completed, as shown in the following figure, click "Restart Now" (or click" Restart Client "):

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130880992-5934d52d-df50-4438-812a-6ae5fb555a22.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130881280-a25cd0ea-662d-4a5e-804d-c3409035be54.png)

After the reboot, you need to log in with your username and password, and the system interface is shown below after logging in:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130881517-50069bf3-e74b-42b5-902c-37145d6f82d0.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130881840-80f09913-0c90-45a6-8bcc-f8bf91fa6d34.png)

Above, the Ubuntu system installation is completed by the following figure configuration, click "OK", and then re-open the virtual machine to see if you can start Ubuntu normally.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130882093-342df8a6-a76b-4820-8df6-adae03cb2607.png)

#### 3.1.3 Basic Ubuntu Installation

After installing the Ubuntu 18.04 operating system, there are a few configurations to make.

+ **VMware Tools Installation:**

Next, install VMware Tools. Without installing this tool, you won't be able to copy and paste and drag file between the Windows host and the virtual machine. First click on "Virtual Machines" on the VMware navigation bar, then click "Install VMware Tools" in the drop-down box.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130882334-203d6ed3-4c69-471f-a20f-24af1b7ad171.png)

Once done, enter Ubuntu and the VMware Tools CD icon will appear on your desktop, click into it:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130882614-15de9f87-5997-40c0-b7a7-9e650e40ef7d.png)

Double-click on the VMwareTools icon, go to it and see a zip file VMwareTools-10.3.10-12406962.tar.gz (it may be different for different VM versions).

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130882882-b3eed435-b12d-4198-8a78-38d7a42a441e.png)

Copy the file under the home directory (i.e., the directory of the home personal username):

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130883102-6095e86b-ed29-4116-9acd-043e3dc27af8.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130883509-768a0307-4af6-4ee0-88af-6715ef57e4b2.png)

Press \[Ctrl+Alt+T] to bring up the terminal command interface, and use the tar command to decompress the VMware tools installation package (using the sudo command will prompt for the password, according to the prompts directly enter the password enter can be used, Linux system password input does not show):

```plain
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz 
[sudo] password for forlinx:
```

After executing the extract command, use ls to view the file directory vmware-tools-distrib, and go to the directory

```plain
forlinx@ubuntu:~$ ls
Desktop   examples.desktop   nfs   snap   tftp   VMwareTools-10.3.10-12406962.tar.gz  vmware-tools-distrib   work
forlinx@ubuntu:~$ cd vmware-tools-distrib/	                      //Use the CD command to enter the directory
forlinx@ubuntu:~/vmware-tools-distrib$ ls                         //View the files in this directory
bin   caf   doc   etc   FILES   INSTALL   installer   lib   vgauth   vmware-install.pl
```

In the current directory, enter sudo ./vmware-install.pl to install, enter the password after pressing Enter, and then start the installation. When you encounter yes, enter yes, and press Enter for the rest to install by default.

```plain
forlinx@ubuntu:~/vmware-tools-distrib$ sudo ./vmware-install.pl
[sudo] password for forlinx: 		     //Enter the password of the forlinx account, no display, cannot see the input content.
```

The installation process information is long, here omitted.

```plain
open-vm-tools packages are available from the OS vendor and VMware recommends 
using open-vm-tools packages. See http://kb.vmware.com/kb/2073803 for more 
information.
Do you still want to proceed with this installation? [no] yes			//Enter yes
... ...		
```

After completing the VMware tools tool, you can achieve file copy and paste, virtual machine adaptive full display and other functions between Windows and Ubuntu. If the virtual machine cannot be displayed in full screen, you can click View, select Auto Resize, and click Auto Adapt to Client to display the virtual machine in full screen. VMware tools is installed successfully.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130883706-0b9259e7-9335-4895-9e6a-47c8b270fd70.png)

+ **Basic Settings:**

Make most of the system settings in the location shown below. A lot of the setup requirements on Ubuntu can be done here.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130884066-fcfdc4c4-9b74-4e9a-ae37-bb38cddbc0a7.png)

#### 3.1.4 Ubuntu Network Settings

+ **NAT Mode**

Before using the network, make sure that our virtual machine can connect to the Internet, open the virtual machine settings, and change the network bridge mode in the network adapter to “NAT mode”:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130884252-18d04452-e6c6-4ac7-a7be-b8243e124e2a.png)

When the VMware virtual NIC is set to NAT mode in a virtual machine, the network in the Ubuntu environment can be set to dynamic IP. The virtual NAT device and the host NIC are connected to communicate for Internet access in this mode. This is the most common way for our VM to get on the extranet.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130884514-a79f3fb8-e9a6-4c0e-aaeb-e84b5e134598.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130884669-ee6af497-3c2b-4699-b5fa-aa7473a56744.png)

The network is set to dynamic ip.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130884910-31b3ff36-944c-4dcd-803b-61d261fc56a2.png)

+ **Bridge Mode:**

If TFTP, SFTP and other servers are used, it is necessary to set the network connection mode of the virtual machine as bridging mode. When the VMware virtual NIC is set to bridge mode, the host NIC and the VM NIC communicate via a virtual bridge, which requires the Ubuntu IP to be set to the same network segment as the host IP.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130885296-2e06ca75-268a-48ca-b8d8-d3e0df3cf340.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130885782-8a8f38ca-28f0-4339-ad00-929b39697312.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130885969-280935cf-acc5-4e8e-a155-b8ef4ea3c9ce.png)

    设置静态ip，此时Ubuntu的IP与主机IP需设置在同一个网段。

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130886234-d7029515-ec37-4f72-b240-d70dd584f554.png)

**Note: The IP and DNS involved in the network settings section should be set according to the user's own actual environment, the manual is an example.**

#### 3.1.5 U Disk Loading

Open VM Settings, USB Controller, select USB 3.0 in Compatibility and “OK”. As shown in the picture below, since most computers nowadays support USB3.0 ports, if we don't set it up, when we plug in the USB3.0 port, we can't connect to the virtual machine. The principle is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130886408-8d3ca670-ba9e-4095-8922-fa0612b8ebbb.png)

After the virtual machine boot, insert the U disk, the virtual machine will be more in the lower right corner of the icon similar to the "U disk", right-click --> connect, and then you can see in the file system to see more than a directory, that the U disk loaded successfully, as shown in the figure:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130886606-5c2f1d8f-b5b5-41b9-9380-b4658f50c8ae.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130886802-39cd79c3-8476-4aee-840b-4909dfce8097.png)

#### 3.1.6 Required Library Installation

Before development, there are some other necessary libraries, we use the following commands to install them one by one, before installation, you need to ensure that the network can be used normally, you can get on the extranet:

```plain
forlinx@ubuntu:~$ sudo apt-get update                        // Update the information of download sources
forlinx@ubuntu:~$ sudo apt-get install build-essential            // Provide the list information of software packages necessary for compiling programs
forlinx@ubuntu:~$ sudo apt-get install libncurses*               // Used to generate text-based user interfaces
forlinx@ubuntu:~$ sudo apt-get install lzop                     // Compression and decompression tool based on the Lzo library
forlinx@ubuntu:~$ sudo apt-get install net-tools                 // Network configuration tools
```

### 3.2 Setting up A Cross-compilation Environment

The cross-compilation environment can be subdivided into installing the SDK (which contains the cross-compilation toolchain) and setting cross-compilation environment variables.

#### 3.2.1 SDK Installation

+ Information/tool/fsl-imx-x11-glibc-x86\_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh

Copy the above script to any directory like /home/forlinx/ and execute it there:

```plain
forlinx@ubuntu:~$ ./fsl-imx-x11-glibc-x86_64-meta-toolchain-qt5-cortexa7hf-neon-toolchain-4.1.15-2.0.0.sh
```

The command line prompts: Enter target directory for SDK (default): /opt/fsl-imx-x11/4.1.15-2.0.0)

Press the Enter key twice in a row, the program will automatically install the cross-compilation toolchain (the cross-compilation toolchain can be installed once, you don't need to reinstall it when you change terminals or reboot the system). Make sure that the network is open during the installation process and that the Ubuntu system has access to an extranet.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130887061-4376335c-6c90-4aad-9262-a497d7a8515b.png)

You can determine whether the installation was successful by outputting the printed information.

#### 3.2.2 Environment Variables Settings

**Note:**

+ **After setting the environment variables, you don't need to reset them the next time you compile as long as you don't change terminals;**
+ **If you reopen a new terminal or switch accounts, you need to reset the environment variables before compiling.**

The main purpose of setting up the compilation environment is to specify the target architecture and cross-compilation toolchain, as well as the paths of some libraries used in the compilation process, etc. Use the following commands to configure the compilation environment (**.followed by a space**):

```plain
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
```

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130887289-6e9810ff-f2ba-441c-8935-c2f4ea2ccd2e.png)

Then use the command arm-poky-linux-gnueabi-gcc -v to determine if the setup was successful (note: -v is preceded by a space):

Normally the gcc version information is printed, gcc version 5.3.0 (GCC):

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130887554-e8c33fab-d0c2-4eb8-90aa-a6d4ed1279c9.png)

### 3.3 Qt Creator Installation

Qt Creator is a cross-platform QT integrated development environment (IDE) that includes advanced C + + code editors, project and build management tools for QT application framework design and application development. Qt Creator 3.2.1 installation package selected for this installation:[qt-creator-opensource-linux-x86\_64-3.2.1.run](https://download.qt.io/archive/qtcreator/3.2/3.2.1/qt-creator-opensource-linux-x86_64-3.2.1.run). Copy the installation package to the path /home/forlinx/work/. Installation package acquisition site:[https://download.qt.io/archive/qtcreator/3.2/3.2.1/](https://download.qt.io/archive/qtcreator/3.2/3.2.1/)

#### 3.3.1 Modifying the QT Configuration File

After installing the SDK, modify the QT profile qmake. Conf.

Open the configuration file to be modified, the path of the file in the development environment is: /opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/cortexa7hf-neon-poky-linux-gnueabi/usr/lib/qt5/mkspe

cs/linux-oe-g++/qmake.conf

Remove the line include(...) from the file qmake.conf. /oe-device-extra.pri) line in the qmake.conf file.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130887910-04ba5e0d-3874-4ee5-9d51-5c49feb0ffc8.png)

Save and exit after making changes

#### 3.3.2 Qt Creator Installation

Execute the following command in the/home/forlinx/work/path to install Qt Creator:

```plain
forlinx@ubuntu:~/work$ chmod u+x qt-creator-opensource-linux-x86_64-3.2.1.run 
forlinx@ubuntu:~/work$ ./qt-creator-opensource-linux-x86_64-3.2.1.run
```

Then the installation window of the graphical interface will pop up, and install according to the instructions:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130888223-7286e0f2-c770-4453-b3ca-ea4551750c0b.png)

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130888466-f4e7734a-41e3-4822-b570-e3363bdf6067.png)

Users can set the installation path according to their own habits.

Execute the following command to open Qt Creator in the background, and users should follow their actual installation path when opening it:

```plain
forlinx@ubuntu:~$ /home/forlinx/qtcreator-3.2.1/bin/ qtcreator.sh &
```

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130888709-cd7f89bb-5f27-400b-aaca-60fe98366722.png)

The Qt Creator tool screen appears. Qt Creator is installed.

#### 3.3.3 Environment Configuration

**Note:**

+ **Be sure to configure the environment variables first (see “3.2.2 Environment Variables Setting”), then open the Qt Creator with the command;**
+ **Open Qt Creator according to your actual installation path.**

Qt is a cross-platform graphics development library, which supports many operating systems. Before compiling, you need to configure the compiling environment of Qt Creator.

##### **3.3.3.1 Configuration of the Cross-compiler**

1\. Click Qt Creator Tools ->Options->Build \& Run->Compilers， and then click Add ->GCC;

2\. Name enters GCC;

3\. Compiler Path Click Browse to select the path of the cross-compiler as: /opt/fsl-imx-x11/4.1.15-2.0.0/sysroots/x86\_64-pokysdk-linux/usr/bin/arm-poky-linux-gnueabi/arm-poky-linux-gnueabi-g++ As shown in the following figure:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130889406-5c81a0f9-9e69-47ba-8799-704f8bc84dbe.png)

4\. Then click Apply and OK

##### **3.3.3.2 Qt Versions Configuration**

1\. Click Qt Creator Tools ->Options->Build \& Run->Qt Versions;

2\. Then click Add, a pop-up dialog box to select the/opt/fsl-imx-x11/4.1.15-2.1.0/sysroots/x86\_64-pokysdk-linux/usr/bin/qt5/qmake;

3\. Click open to add.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130889611-4726e704-8541-4f90-8ce1-73cc86ddb01b.png)

4\. It will then return to the Qt Version configuration box, and the Version name will be entered in the Qt 5.6.2.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130889900-7c9610ab-ef88-4567-a6b1-4f4e6667766b.png)

5\. Then click "Apply and OK".

##### **3.3.3.3 Kits Configuration**

Kits is a build kit for building and selecting development build environments useful for projects with multiple QT libraries. Add the previously added cross-compiler and QT Version to Kits to build a compilation environment suitable for the development board.

1\. Click Qt Creator 的Tools ->Options->Build \& Run->Kits，and then click Add; the configuration section appears;

2\. Name input qt5.6.2;

3\. Compiler selects GCC;

4\. Qt Version Qt 5.6.2;

5\. Qt mkspec write linux-oe-g++.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130890194-90666ddb-0adf-48a6-a4fd-3cb5316845c5.png)

6\. Then click "Apply and OK".

### 3.3.4 Installation Issues

**Note: The following presents some problems and solutions encountered during the installation of Qt Creator 3.2.1. The issues may differ depending on the Ubuntu and Qt Creator version used. The example below details one specific installation case, and serves only as a reference. Users should focus on their own actual situation and resolve any issues accordingly.**

1\. Opening Qt Creator appears qtcreator-3.2.1/lib/qtcreator/plugins/libHelp.so: Cannot load library /home/forlinx/qt; You cannot use help to report an error. You need to modify the software source and download and install some installation packages;

Method:

1\) Add mirror sources to sources.list in etc/apt, use sudo vi /etc/apt/sources.list to open the file and add them at the end: deb http://archive.ubuntu.com/ubuntu/ trusty main universe restricted multiverse；

2) Inform Ubuntu to enable the new update source: sudo apt-get update

3\) Install the relevant installation package:

sudo apt-get  install libgstreamer0.10-dev

sudo apt-get  install libgstreamer-plugins-base0.10-dev

2\. Open the project file in Qt Creator with an ordinary account, and there is a write permission error;

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715130890507-fa6a691a-3d47-466a-bbb7-84abdbd1f630.png)

Solutions:

1\) Check if the original qt file, under the current account, has executable permissions;

2\) Add writable permissions to the user group: sudo chmod -R o+w audio/.

## 4\. Related Code Compilation

**Note: This chapter uses the development environment with SDK (including cross-compilation chain) installed by default, and the development environment provided by Forlinx can directly operate this chapter. If users use their own development environment, they need to refer to the previous section to build the environment.** 

This chapter mainly describes the compilation methods of the development board-related source code, including kernel source code compilation, making file system methods, and application program compilation methods.

### 4.1 Preparation Before Compilation

#### 4.1.1 Description of the Environment

+ Development environment OS: Ubuntu18.04 64-bit version
+ Cross tool chain: arm-poky-linux-gnueabi-gcc 5.3.0
+ The board uses the Bootloader version: u-boot-2016.03.
+ Development board kernel: Linux -4.1.15
+ Development board porting QT version: qt5.6.2

#### 4.1.2 Source Code Copy

+ Kernel Source: User Profile \\ Linux \\ source \\ kernel \\ linux-4.1.15.tar.bz2
+ File system: User Profile \\Linux\\ mirror \\ rootfs-console.tar.bz2 and rootfs-qt.tar.bz2
+ Command line test program: User Data\\Linux\\Test Program\\cmd.
+ QT test program: User Data\\Linux\\Test Program\\qt5.6.

There are many kinds of file transfers between ubuntu and Windows hosts. After installing VMware Tools, you can set up a virtual machine shared folder to mount the file directory of the Windows host to ubuntu for file sharing.

Click "Virtual Machine" in the menu bar and select "Settings".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131102725-8c309a2c-faeb-452b-b442-009fea435688.png)

Click "Options", enable "Shared Folders", set the shared directory on the Windows host, and click "OK".

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131102937-07075d0b-532f-48f2-947d-8aaa50a98e27.png)

After the virtual machine's file sharing is set up, put the following items for testing: the kernel source code linux-4.1.15.tar.bz2, the file system (rootfs-console.tar.bz2 is used as an example in this section), the command line test program wdttest.c, and the QT test program audio into the shared folder on the Windows host.

The shared folder is in the mount directory /mnt/hgfs/share in ubuntu；view the files in the mount directory

```plain
forlinx@ubuntu:~$ ls /mnt/hgfs/share/
audio  linux-4.1.15.tar.bz2  rootfs-console.tar.bz2  wdttest.c
```

Copy the source code from the shared folder to ubuntu/home/forlinx/work.

```plain
forlinx@ubuntu:~$ sudo cp -r /mnt/hgfs/share/audio /home/forlinx/work/      
[sudo] password for forlinx: 
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/linux-4.1.15.tar.bz2 /home/forlinx/work/
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/rootfs-console.tar.bz2 /home/forlinx/work/
forlinx@ubuntu:~$ sudo cp /mnt/hgfs/share/wdttest.c /home/forlinx/work/
forlinx@ubuntu:~$ cd /home/forlinx/work/
forlinx@ubuntu:~/work$ ls
audio  linux-4.1.15.tar.bz2  rootfs-console.tar.bz2  wdttest.c        //File copy succeeded
forlinx@ubuntu:~/work$
```

#### 4.1.3 Environment Variables Settings

**Note: After switching accounts, you need to set the environment variables again.**

To set environment variables before compiling related source code. When compiling the kernel, it is recommended to use the root account to reduce some permission problems. The following source code compilations default to having environment variables set. Set the environment variable requires the following command:

```plain
. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi
```

### 4.2 Kernel Compilation

**Note:**

+ **After the kernel source code is decompressed for the first time, the source code needs to be compiled as a whole;**
+ **After the overall compilation, it can be compiled separately according to the actual situation.**

Switch to the root account and extract the kernel source code copied to the /home/forlinx/work directory using the tar command to the kernel source path.

```plain
forlinx@ubuntu:~/work$ sudo su                       // Switch to the root user identity
[sudo] password for forlinx:                        // Enter the password for the forlinx account as prompted. The input is not echoed.
root@ubuntu:/home/forlinx/work# tar xvf linux-4.1.15.tar.bz2     // Extract the kernel source code
… …The extraction information is omitted here.
root@ubuntu:/home/forlinx/work# cd linux-4.1.15                 // Enter the kernel source code directory
```

Reset the environment variables after switching accounts:

. /opt/fsl-imx-x11/4.1.15-2.0.0/environment-setup-cortexa7hf-neon-poky-linux-gnueabi

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131103158-a0d86cd0-3f4e-4591-a938-bcac008e5789.png)

#### 4.2.1 Linux-4.1.15 Kernel Full Compilation

In the source code directory, there is a compilation script named "build.sh". Running this script will compile the entire source code.

```plain
root@ubuntu:/home/forlinx/work# cd linux-4.1.15
```

The following operations need to be done in the source directory to compile the kernel methods:

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# ./imx6ull_c_build.sh
```

After executing the compilation, there is a lot of information generated, so only the last part need to be captured.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131103434-1d844066-f8c6-4f4b-ad84-6c45d2684478.png)

After a successful compilation, module files with the extension ".ko" will be generated. In the directory "linux-4.1.15/arch/arm/boot/", a file named "zImage" will be generated. In the directory "linux-4.1.15/arch/arm/boot/dts/", related dtb (Device Tree Blob) files will be generated. Please refer to the separate section on compiling Device Trees for detailed information.

Explanation of some of the commands in build.sh:

|        **File**         | **Description**                                              |
| :---------------------: | ------------------------------------------------------------ |
| make imx6ull\_defconfig | 1\. This command loads a configuration file into .config (which is read from .config when menuconfig does graphical configuration);<br />2\. inux-4.1.15/arch/arm/configs/imx6ull\_defconfig is the kernel configuration file, when you use the source code for the first time, you need to configure the kernel through this step;<br />3\. To configure using “menuconfig”, you need to perform this step first.<br />After saving and exiting the graphical interface configuration, the latest configuration will be updated in the “.config” file.<br />At this point, you can copy the configurations from the “.config” file to “imx6ull\_defconfig”,<br />which will serve as the new configuration file. |
|       make zImage       | To compile “zImage”, after a successful compilation, the “zImage” file<br />will be generated in the “linux-4.1.15/arch/arm/boot/” directory. |
|        make dtbs        | Compile the device tree. Generate the corresponding dtb file under<br />the path inux-4.1.15/arch/arm/boot/dts. |
|      make modules       | Compile module                                               |
|     make distclean      | The latest.config is cleared and the kernel needs to be reconfigured after the operation. |

#### 4.2.2 Separate zImage Compilation

The user operates under the kernel source path, provided that the environment variables are set.

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make imx6ull_defconfig
root@ubuntu:/home/forlinx/work/linux-4.1.15# make zImage
```

Successful compilation will generate zImage in linux-4.1.15/arch/arm/boot/ path.

#### 4.2.3 Separate Device Tree Compilation

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make dtbs
```

The device tree is under the path in source linux-4.1.15/arch/arm/boot/dts/, and the corresponding dtb file will be generated under that path after successful compilation:

|                     **Device tree file**                     |                      **Generate files**                      | **Description**              |
| :----------------------------------------------------------: | :----------------------------------------------------------: | ---------------------------- |
| <font style="color:rgb(0, 0, 0);">okmx6ULL-C-emmc.dts</font> | <font style="color:rgb(0, 0, 0);">okmx6ULL-C-emmc.dtb</font> | Applicable for eMMC SoM      |
| <font style="color:rgb(0, 0, 0);">okmx6ULL-C-nand.dts</font> | <font style="color:rgb(0, 0, 0);">okmx6ULL-C-nand.dtb</font> | Applicable for 256M-NAND SoM |

#### 4.2.4 Independent Module Compilation

```plain
root@ubuntu:/home/forlinx/work/linux-4.1.15# make modules
```

After successful compilation, the corresponding .ko file will be generated under the corresponding path of the driver.

Use the command "make modules\_install INSTALL\_MOD\_PATH=/home/forlinx/work/" to export the modules to the specified directory /home/forlinx/work/, and then compress and package the exported modules as modules.tar.bz2, and replace the same file in the burning tool when burning.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131103730-2aec4ee9-1abb-4a35-a281-69c556fb0c13.png)![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131103941-36e20512-d247-402d-a586-7d259e77385b.png)

### 4.3 Creating the File System

**Note:**

+ **Forlinx provides two types of file systems: the Qt version (rootfs-qt.tar.bz2) and the console version (rootfs-console.tar.bz2);**
+ **The file system used by different SoM varies and is described in the software manual.**

When adding applications or modifying the file system during use, you can refer to the following methods.

Take rootfs-console.tar.bz2 as an example:

1. Create a folder where the target filesystem rootfs is stored, e.g. /home/forlinx/work, and enter that directory.

```plain
forlinx@ubuntu:~/work$ sudo mkdir rootfs
[sudo] password for forlinx:
forlinx@ubuntu:~/work$ cd rootfs/
forlinx@ubuntu:~/work/rootfs$ 
```

2. Copy the filesystems in the /home/forlinx/work path to the newly created rootfs directory and unpack it.

```plain
forlinx@ubuntu:~/work/rootfs$ sudo cp ../rootfs-console.tar.bz2 ./
forlinx@ubuntu:~/work/rootfs$ ls
rootfs-console.tar.bz2					//Copy succeeded
forlinx@ubuntu:~/work/rootfs$ sudo tar xvf rootfs-console.tar.bz2 	//Extract file system
```

3. Remove the original filesystem archive with the rm command

```plain
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  rootfs-console.tar.bz2  run  sbin  sys  tmp  usr  var
forlinx@ubuntu:~/work/rootfs$ sudo rm rootfs-console.tar.bz2 
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  run  sbin  sys  tmp  usr  var
forlinx@ubuntu:~/work/rootfs$ 
```

4. After the user has made changes to the file system according to his needs, he can use the tar command to compress the file system again. If you are operating with a regular account, you need to use the fakeroot command emulates root permissions to avoid file permissions changes.

```plain
forlinx@ubuntu:~/work/rootfs$ sudo fakeroot tar cvjf rootfs-console.tar.bz2 *      //*There is a space in front of it
forlinx@ubuntu:~/work/rootfs$ ls
bin  dev  etc  forlinx  home  lib  media  mnt  proc  rootfs-console.tar.bz2  run  sbin  sys  tmp  usr  var
```

Using the “ls” command, you can see the generated “rootfs-console.tar.bz2” compressed package, which is the filesystem image that can be flashed to the development board's flash memory.

### 4.4 Application Compilation and Operation

#### 4.4.1 Command Line Application Compilation and Operation

**Note: The cross-compiler is installed and the environment variables are set by default for the following operations.**

This subsection uses the watchdog test program, the default program is copied to the /home/forlinx/work directory, refer to "4.1.2 Copying the Source Code”

1\. Use the cd command to enter the /home/forlinx/work directory;

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/
```

2\. Use $CC to cross-compile, after setting environment variables; $CC is the GCC of the cross-compiler; the specific configuration can be found in the script for setting environment variables: environment-setup-cortexa7hf-neon-poky-linux-gnueabi

```plain
forlinx@ubuntu:~/work$ $CC wdttest.c -o wdttest
```

Use the file command to view the generated file information

```plain
forlinx@ubuntu:~/work$ file wdttest
```

Information results:

```plain
wdttest: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter 	/lib/ld-linux-armhf.so.3, for GNU/Linux 2.6.32,
BuildID[sha1]=400fbba6005ea8e7344df7080ab10d9ef54e3a45, not stripped
```

From the result, you can see that the compiled 32-bit ARM file.

3\. Copy the compiled wdttest to the board via USB flash drive, for example, under the path /home/root, and run the test.

The default user login path is /home/root.

Copy the compiled wdttest program from the USB drive mount path to the current path.

```plain
root@fl-imx6ull:~# cp /run/media/sda1/wdttest  ./
```

Give the program executable permission and run it

```plain
root@fl-imx6ull:~# chmod 766 wdttest				   //Set executable permissions for the program
root@fl-imx6ull:~#./wdttest	 /dev/watchdog settimeout 60 &           //Run the program
```

4\. Refer to the "Watchdog Test" section of the software manual for testing.

#### 4.4.2 QT Application Compilation and Running

##### 4.4.2.1 QT Application Compilation

**Note: The cross-compiler is installed and the environment variables are set by default for the following operations.**

+ Method 1: Compile with qmake from the command line

```plain
forlinx@ubuntu:~/work$ sudo chmod -R 766 audio/	             // Add permissions to audio application
forlinx@ubuntu:~/work$ qmake
forlinx@ubuntu:~/work$ make
```

+ Method 2: Call qmake to compile through Qt Creator

Add permissions to the audio application

```plain
forlinx@ubuntu:~/work$ sudo chmod -R 777 audio/
```

Open Qt Creator using the command line method (users open it according to their actual path)

```plain
forlinx@ubuntu:~/work$ /home/forlinx/qtcreator-3.2.1/bin/qtcreator.sh &
```

Click File->Open File or Project in Qt Creator, a pop-up window will appear, select /root/Desktop/audio/audio.pro.

The principle is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131104216-6d917100-4bbe-49fc-beb7-c90a784bc990.png)

Click "Open".

A pop-up window will appear to indicate whether to keep the original environment settings, select no, as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131104467-b45ec108-2b76-45dc-80e3-d137b571fcd6.png)

The Configure Project window pops up as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131104680-ad195f5a-417c-470d-9fcd-8d2e5cc0c619.png)

Click “Configure Project”.

After opening the project, the interface is as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131104939-4923c2ae-79fb-4abf-9fe3-1117eff0da68.png)

Click Build->Clean All to clear it. (If the intermediate file is not cleared, it can be deleted manually)

Click Projects to uncheck Shadow build

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131105189-2a6a8767-a29b-4424-84b8-cb96aa54ef21.png)

Then click Build-> Build All to compile.

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131105485-41b7d280-eb3b-4ec7-a439-e84675b3784a.png)

After the Build progress bar in the lower right corner is finished, you will see the newly generated audio binary file in the /files/audio/ directory as follows:

![](https://cdn.nlark.com/yuque/0/2024/png/43555360/1715131105880-d25368ef-b526-437d-9b80-9ccfb6ea02c3.png)

##### **4.4.2.2 QT Application Running**

+ Replace the method of running QT program in the desktop

1\. Flash the development board and boot qt system;

2.Copy the generated audio executable file to the SD card, and then insert the SD card to the development board;

3\. Execute the following commands to copy the audio to the appropriate directory, replace the original audio application, set executable permissions for the program, and reboot the board after file synchronization.

Use the cd command to enter the default path to the qt program on the development board's desktop system:

```plain
root@fl-imx6ull:~# cd /usr/bin/ 
```

Rename the original audio file for backup with the mv command

```plain
root@fl-imx6ull:/usr/bin/# mv fltest_qt_audio fltest_qt_audiobak
```

Copy the audio program in the SD card to the current directory.

```plain
root@fl-imx6ull:/usr/bin# cp /run/media/mmcblk1p1/audio ./fltest_qt_audio
```

Give executable permissions and save to reboot the development board:

```plain
root@fl-imx6ull:/usr/bin# chmod a+x fltest_qt_audio                     // Grant executable permissions to all user groups.
root@fl-imx6ull:/usr/bin# sync                                         // Synchronize files.
root@fl-imx6ull:/usr/bin# reboot                                      // Reboot the development board.
```

4\. After the board restarts, if the audio test application in the Qt interface is the latest version and you can play audio by clicking on "play," it indicates that the newly compiled Qt application is functional. This also confirms the successful configuration of the Qt application development environment.

+ Method of testing the QT program individually

1. Copy the generated audio executable file to the SD card, insert the SD card to the development board, and copy the program to the/home path;
2. Set executable permissions to the program;
3. You need to use the command export DISPLAY=:0.0 to load the QT environment variables before testing the QT program.

Copy the audio file from the sd mounted path to the /home path of the development board.

```plain
root@fl-imx6ull:~#cp /run/media/mmcblk1p1/audio /home
```

Go into the /home directory with the cd command and give audio executable permissions

```plain
root@fl-imx6ull:/home# chmod a+x audio
```

Set the environment variable for QT

```plain
root@fl-imx6ull:/home# export DISPLAY=:0.0
```

Run the audio application

```plain
root@fl-imx6ull:/home# ./audio
```

##### **4.4.2.3 QT Desktop (EMMC Version Only)**

**Startup Applications**

After the Qt system boots up, the desktop program starts by default. If you need to automatically start a user program, please modify the following file in the file system: /etc/matchbox/session.

Add your own application after matchbox-desktop \&. For example, to add a ping test program: fltest\_qt\_ping \&.

The ping test program will then start automatically when the system boots.

If you comment out the following part:

```plain
# matchbox-desktop &
# matchbox-panel --titlebar --start-applets $START_APPLETS --end-applets $END_APPLETS &
```

The desktop will not run and the title bar will not be displayed.

If you modify the match-panel option, the content of the title bar will be changed. For example, if you remove clock from "END\_APPLETS=clock,battery,$KEYBOARD\_APPLET,systray,startup-notify,notify", the time will not be displayed. e.g.:

```plain
START_APPLETS=showdesktop,windowselector
END_APPLETS=battery,$KEYBOARD_APPLET,systray,startup-notify,notify
matchbox-panel --titlebar --start-applets $START_APPLETS --end-applets $END_APPLETS &
```

**Add Desktop Application**

This section describes how to set up folders such as Forlinx and Application:

1\. Folder settings are stored in: /usr/share/matchbox/vfolders </font><font style="color:#000000;">e.g: </font><font style="color:#0000FF;"> Forlinx.directory</font>

```plain
[Desktop Entry]
Name=Forlinx
Name[de]=Einstellungen
Comment=Forlinx test app
Comment[de]=Forlinx test app
Icon=mbfolder.png
Type=Directory
Match=Forlinx
```

The important thing is the Match property, which determines what type of App is displayed in the folder

Folders are displayed in the following order: /usr/share/matchbox/vfolders/Root.order

```plain
Forlinx
Applications
Utilities
Games
Settings
All
```

+ **Application Settings:**

Icon directory: /usr/share/pixmaps

Application Settings: </font><font style="color:#0000FF;">/usr/share/applications</font>

Each application corresponds to a.desktop file. Take Ping as an example:

```plain
[Desktop Entry]
Name=Qt5 Ping
Exec=/usr/bin/fltest_qt_ping
Icon=ping-icon
Type=Application
Categories=Forlinx;
```

Each application corresponds to a.desktop file. Take Ping as an example:

It specifies the icon, the location of the executable program, and the folder in which it is displayed on the desktop.