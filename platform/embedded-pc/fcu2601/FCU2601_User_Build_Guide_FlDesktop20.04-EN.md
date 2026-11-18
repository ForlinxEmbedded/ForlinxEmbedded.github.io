# Forlinx Desktop 20.04_User's Compilation Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Installing VMware Workstation
This chapter shows how to install VMware Workstation and configure the operating system, using version 17 Pro v17.0.0 as an example.

### 1.1 Downloading and Purchasing VMware Workstation
[Visit the VMware website](https://www.vmware.com/cn.html) to download Workstation Pro and get a product key. VMware is paid software; purchase a license or use the trial.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278513268_e1e3d73c_ea58_4db6_86b2_2bcb430bf195.png)

When the download finishes, double-click the installer to start the setup wizard.

### 1.2 Installing VMware Workstation
Double-click the installer to open the setup wizard, then click Next.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209495516_2577c76e_b873_4413_bd12_9cdb9bb35cd1.png)

Check "I accept the terms in the License Agreement" and click Next.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209495744_b2803b4e_0808_49a0_a39c_37b0e1bb062e.png)

Change the installation location to the partition where you install software, click Next, then clear the checkboxes and click Next.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209495901_47b073cf_6bcf_4610_9da4_eabfb0dcd192.png)

Check the option to add a shortcut and click Next.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209496313_08157317_dbf5_40e0_a9cf_610e2526d95f.png)

Click Install and wait for the installation to finish.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209496500_20204188_b425_4016_b17c_de930587ae2e.png)

Click Finish to start the trial. For long-term use, purchase a license from the official site and enter the product key.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719209497041_1df7c12a_752d_4fa8_9730_2a07c6cafa98.png)

​     

## 2. Loading an Existing Ubuntu Development Environment
**Note:**

+ **Beginners should use the ready-made VM image provided by Forlinx; it already includes the cross-compiler and Qt. After reading this chapter, you can skip straight to the build chapter;**
+ **The default user is forlinx with password forlinx; the superuser is root with password root;**
+ **Download site: Use the cloud-drive link provided by Forlinx (please ask your sales representative for the download link) to obtain the software and hardware documentation, source code, and development environment.**

There are two ways to use a VM environment in VMware: load an existing one or create a new one. This section covers loading an existing environment.

First, download the development environment from Forlinx. The package includes an MD5 checksum file. Verify the MD5 checksum of the downloaded archive (use an online MD5 tool or a local MD5 utility) and compare it with the checksum file. If they match, the download is intact; if not, the file may be corrupted, so download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/057.png)

Select all archive files, right-click, and extract them to the current folder or a directory of your choice:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/058.png)

After extraction you get the development environment OK3568-VM15.1.0-ubuntu18.04.

**Note:**

+ **FCU2601 and 3568 share the same Ubuntu18.04 development environment;**
+ **Vmware17.0.0 used in this demo is compatible with Vmware15.1.0 and does not affect later use.**

 The "3568.vmx" file in the "3568 Development Environment" folder is the one to open for the VM.

Open the installed VMware Workstation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

Select the directory containing the extracted 3568.vmx file and double-click it to open.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/060.png)

Once loaded, click "Power on this virtual machine" to boot into the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1779074935696_ad89ca8a_9c1c_4538_8541_0b0c4bc19fbe.png)

The development environment logs in automatically at boot as forlinx with password forlinx.

## 3. Setting Up a New Ubuntu Development Environment
**Note: **

- **Beginners should not set up the system from scratch; use the existing VM environment instead. Skip this section if you do not need to build a new environment;**
- **This chapter explains how to set up an Ubuntu system.**

### 3.1 Setting Up an Ubuntu System
We use Ubuntu 18.04.3 LTS; all instructions and development in this document are based on Ubuntu18.04.3 LTS. First, download the Ubuntu18.04.3 LTS 64-bit image from the Ubuntu website: [https://releases.ubuntu.com/bionic/](https://releases.ubuntu.com/bionic/)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/062.png)

#### 3.1.1 Creating an Ubuntu Virtual Machine
Step 1: Open VMware Workstation and click Create a New Virtual Machine. In the following screen, select "Custom (advanced)" and click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278531825_28237039_37c8_4a5f_8597_f64b71e7e312.png)

Step 2: Select the compatibility for your VMware version (check it under Help -> About VMware Workstation), then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278532008_920d71ea_3371_425c_9b27_a15b1789fdf9.png)

Select "Installer disc image file" and click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278532173_48b35578_2a3d_4aff_9888_513f9b66eaaf.png)

Enter your full name, username, and password, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/066.png)

Enter the virtual machine name and installation location, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/067.png)

Set the number of processor cores, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278532718_2cd2ea2a_0f97_46d5_ad8b_4f004e889a20.png)

Allocate at least 8 GB of memory, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278532900_dd3f7357_07c5_4dc4_9fd1_7d367c7a7111.png)

Set the network type to the default NAT, then click Next. Keep the defaults for the remaining steps until you reach Specify Disk Capacity.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278533112_8f49bb5a_64b5_47df_8798_044888bfa83b.png)

Use the recommended I/O controller type, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278533381_8dc68236_561d_4840_abb7_3512def5cecf.png)

Use the recommended disk type, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278533635_d54cda44_50e2_4643_b3d3_54dc41a1bfa6.png)

Keep the default option to create a new virtual disk, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278533807_86b2d601_916f_4f7d_b7c0_4a672e97d659.png)

Set the disk size to 200 GB and split the virtual disk into multiple files, then click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278534036_c400a9dc_bdac_4dde_bd52_d4e721fb4ccd.png)

Keep the defaults and click Next:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/075.png)

Click Finish:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/076.png)

The virtual machine is created. Click "Power on this virtual machine" to start installing the image and wait for it to complete. The Ubuntu system is now installed. The next section explains how to install Ubuntu in the VM; installing it on a physical machine is similar. This section covers the VM installation method.

#### 3.1.2 System Installation
The previous section created a VM but did not install an operating system, so it cannot boot yet. Now install Ubuntu in this new VM.

Step 1: Download the Ubuntu18.04 64-bit image from the Ubuntu website:

[http://sources.ubuntu.com/18.04/](http://releases.ubuntu.com/18.04/)

Right-click the created VM name and select Settings from the menu.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/105.png)

The Virtual Machine Settings dialog opens.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278535121_beaef4c9_b729_4a86_8299_02e28a716d2d_1794982021635.png)

Click CD/DVD (SATA), select Use ISO image file, browse to the Ubuntu image downloaded earlier, then click OK.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278535409_a8fcb60d_f0a2_428c_8be7_0e124dcbc137.png)

After setting the image, make sure the network is available, then power on the VM to install the Ubuntu image.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

After powering on the VM, wait for the following installation screen:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/081.png)

Select a language on the left, then click "Install Ubuntu" to open the language selection screen. Ubuntu defaults to English; you can also choose Chinese. The default language can be changed later. Click continue when done.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/082.png)

Keep the defaults and click continue to proceed; the installation takes a while. Then click "continue":

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/083.png)

Keep the defaults and click Install Now; click continue in the dialog that appears:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/084.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/085.png)

Select the time zone: click the Shanghai time zone or enter Shanghai (choose your own time zone as needed), then click Continue.

Finally, set the username and password, choose automatic login or password login, then click continue to start the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/086.png)

If the network is slow, click Skip; it does not affect the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/087.png)

Click Restart Now to reboot.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/088.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/089.png)

The system screen after reboot.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/090.png)

The Ubuntu system installation is complete.

#### 3.1.3 Basic Ubuntu Configuration
After installing Ubuntu18.04, apply a few settings.

VMware Tools Installation:

Next, install VMware Tools. Without it, you cannot copy/paste or drag files between the Windows host and the virtual machine. On the VMware menu bar, click "Virtual Machine", then click "Install VMware Tools" from the drop-down list.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/091.png)

When it finishes, a VMware Tools disc appears on the Ubuntu desktop. Open it.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/092.png)

Inside, you will find the archive VMwareTools-10.3.10-12406962.tar.gz (the filename may differ with the VMware version). Copy it to your home directory (the folder named after your username under home).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/093.png)

Press Ctrl+Alt+T to open a terminal and run:
```bash
forlinx@ubuntu:~$ sudo tar xvf VMwareTools-10.3.10-12406962.tar.gz
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/094.png)

After extraction, a vmware-tools-distrib folder appears.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/095.png)

Back in the terminal, run cd vmware-tools-distrib to enter that directory.

Then run sudo ./vmware-install.pl, press Enter, and enter your password. The installation starts; type yes at any prompt and press Enter to accept the defaults.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/096.png)

Once VMware Tools is installed, you can copy files between Windows and Ubuntu.

Full-Screen Display:

If the virtual machine does not fill the screen, click View, select Autoresize, and then click Fit Guest.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/097.png)



Make most system settings here, as shown. Most Ubuntu configuration is done in this panel.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/098.png)

Sleep Settings:

The default sleep timeout is 5 min. To disable sleep, set Power->Blank screen to Never.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/099.png)

#### 3.1.4 Virtual Machine Network Settings
**3.1.4.1 NAT Connection Mode**

By default, the virtual machine uses NAT after installation, as shown below, and shares one IP address with the host. You do not need to change it to install dependency packages or compile code. With the VMware virtual adapter in NAT mode, set Ubuntu to use a dynamic IP. In this mode the virtual NAT device connects to the host adapter for Internet access. This is the most common way for a virtual machine to reach the Internet.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1740967890224_d642497d_9876_4d31_897d_02276b6462f3.png)

**3.1.4.2 Bridged Connection Mode**

In bridged mode, the host adapter and the virtual adapter communicate over a virtual bridge. Set the Ubuntu IP on the same subnet as the host, and set DNS to match the host adapter for Internet access. Use bridged mode when working with TFTP, SFTP, or similar servers.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/1719278541083_4d9634db_a591_45be_ad82_f0c7b1e12e3e.png)

## 4. Source Code Compilation
Forlinx Desktop is a desktop OS that Forlinx built on ubuntu base. It is fully compatible with ubuntu18.04, supports apt-get, and is easier to use than a traditional Linux system.

This chapter describes how to compile the board's source code, including the kernel and applications.

### 4.1 Pre-Build Preparation
#### 4.1.1 Environment Description
+ Development OS: Ubuntu18.04 64-bit
+ Cross toolchain: aarch64-linux-gnu
+ Bootloader on the board: u-boot-2017.09
+ Board kernel version: linux-4.19.206
+ Ported Qt version: qt5.14.2

#### 4.1.2 Copying the Source Code 
+ Source code: User Materials\Linux\Source\OK3568-linux-source.tar.bz2

Create a working directory
```bash
forlinx@ubuntu:~$ mkdir -p /home/forlinx/3568						// Create the working directory

Copy the source files OK3568-linux-source.tar.bz2.0* from the user materials to the /home/forlinx/3568 directory on the virtual machine.

forlinx@ubuntu:~$ cd /home/forlinx/3568								// Switch to the working directory

forlinx@ubuntu:~/3568$ cat OK3568-linux-source.tar.bz2.0* > OK3568-linux-source.tar.bz2

forlinx@ubuntu:~/3568$ tar -xvf OK3568-linux-source.tar.bz2			// Extract the archive here
```
Wait for the command to finish.

### 4.2 Compiling the Source Code
**Note:**

+ **After extracting the kernel source for the first time, run a full build first;**
+ **After the full build, you can build individual components as needed;**
+ **Building this source requires at least 16 GB of RAM in the development environment. Do not change the configuration of the VM image we provide.**

#### 4.2.1 Full Build Test
The source directory contains the build.sh script, which builds the entire source tree. In the terminal, switch to the extracted source directory and locate build.sh.
```bash
forlinx@ubuntu:~$ cd /home/forlinx/3568/OK3568-linux-source
```

Run the following in the source directory. Full build:
```bash
forlinx@ubuntu:~$ cd /home/forlinx/3568/OK3568-linux-source
```

The build prompts for an option, as shown below. Enter 1 and press Enter to continue.

**Note: If the options below do not appear, the configuration is already done and the build can proceed normally. This step is optional.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/102.png)

After a while, the screen below appears and requires a selection. From the information shown, choose 1800000 for VCCIO4 and VCCIO6 and 3300000 for the rest. Use the up/down arrow keys to select an option and press Enter to confirm.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/103.png)

After a successful build, buildroot generates the system image in the Image folder, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/104.png)

**Note: update.img is a packaged image for full flashing over OTG or a microSD card; the other files are for step-by-step flashing**

#### 4.2.2 Building the ForlinxDesktop Image
**Note: Building the Forlinx Desktop20.04 image uses many files generated by the full build in the previous section, so run that full build first. After it completes, run the following commands:**

Work in the kernel source directory. 
```bash
forlinx@ubuntu:~/3568/OK3568-linux-source$ ./build.sh kernel

forlinx@ubuntu: ~/3568/OK3568-linux-source$ ./build.sh updateimg

ForlinxDesktop image generation location:

forlinx@ubuntu: ~/3568/OK3568-linux-source$ ls rockdev/update.img

rockdev/update.img
```

#### 4.2.3 Compiling the Kernel Independently
Work in the kernel source directory. 
```bash
forlinx@ubuntu: ~/3568/OK3568-linux-source$ ./build.sh kernel 
```


![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/105.png)

After a successful build, the kernel in update.img is not updated. Flash kernel/boot.img step by step instead.

#### 4.2.4 Cleaning the Build Output
**Note: The clenall command deletes intermediate files in the uboot folder. Before using it, edit build.sh and comment out the uboot section. Our uboot is not open source, so losing those intermediate files prevents a full build.**

Work in the source directory. 
```bash
forlinx@ubuntu:~/3568/OK3568-linux-source$ ./build.sh cleanall 
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/106.png)

This clears all intermediate files but leaves the source files untouched, including modified ones.

### 4.3 Using the Image Files
update.img is a packaged image for full flashing over OTG or a microSD card; the other files are for step-by-step flashing. Image files from a standalone build are not updated in update.img, so flash them individually (see OTG Flashing in the Software Manual).

### 4.4 Ubuntu Application Development
#### 4.4.1 Downloading and Installing the Required Tools
```bash
forlinx@ubuntu:~/3568/OK3568-linux-source$ sudo apt update && sudo apt install qemu-user-static

[sudo] password for forlinx: 

Get:1 http://mirrors.aliyun.com/docker-ce/linux/ubuntu bionic InRelease [64.4 kB]

Get:2 http://security.ubuntu.com/ubuntu bionic-security InRelease [102 kB]        

Hit:3 http://us.archive.ubuntu.com/ubuntu bionic InRelease                        

Get:4 http://us.archive.ubuntu.com/ubuntu bionic-updates InRelease [102 kB]       

Fetched 1,132 kB in 7s (172 kB/s)                                                 

Reading package lists... Done

Building dependency tree       

Reading state information... Done

172 packages can be upgraded. Run 'apt list --upgradable' to see them.

Reading package lists... Done

Building dependency tree       

Reading state information... Done

1 upgraded, 0 newly installed, 0 to remove and 171 not upgraded.

Need to get 9,973 kB of archives.

After this operation, 0 B of additional disk space will be used.

Get:1 http://us.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 qemu-user-static amd64 1:2.11+dfsg-1ubuntu7.42 [9,973 kB]

Fetched 9,973 kB in 4s (2,547 kB/s)           

(Reading database ... 271706 files and directories currently installed.)

Preparing to unpack .../qemu-user-static_1%3a2.11+dfsg-1ubuntu7.42_amd64.deb ...

Unpacking qemu-user-static (1:2.11+dfsg-1ubuntu7.42) over (1:2.11+dfsg-1ubuntu7.41) ...

Setting up qemu-user-static (1:2.11+dfsg-1ubuntu7.42) ...

Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
```

#### 4.4.2 Mounting armubuntu and Copying the Source Code
```bash
forlinx@ubuntu:~/3568/OK3568-linux-source$ cd ubuntu/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$ mkdir ubuntufs
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$ ls
focal-rootfs.img     focal-rootfs.img.ab  focal-rootfs.img.ad  ubuntufs
focal-rootfs.img.aa  focal-rootfs.img.ac  split_img.sh         ubuntu-param.txt
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$ sudo mount focal-rootfs.img ubuntufs//Mount the file system image of ARM Ubuntu
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$ cd ubuntufs/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ ls
apps  build-bak.sh    dev              home        media  proc  sbin  tmp
bin   build.sh        etc              lib         mnt    root  srv   usr
boot  debian-base.sh  forlinx-base.sh  lost+found  opt    run   sys   var
Switch to the source code directory
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ cd ..
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$ cd ..
forlinx@ubuntu:~/3568/OK3568-linux-source$ sudo cp -r app/forlinx/forlinx_qt/rtc ubuntu/ubuntufs/home/forlinx/
```

#### 4.4.3 Entering the Ubuntu Virtual Environment
```bash
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo mount -t proc /proc proc/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo mount -t sysfs /sys  sys/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /dev dev/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /dev/pts dev/pts
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo mount -o bind /run run/
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ sudo chroot . /usr/bin/qemu-aarch64-static /bin/bash
```

#### 4.4.4 Compiling the Program
```bash
root@ubuntu:/# cd /home/forlinx
root@ubuntu:/home/forlinx# cd rtc/
root@ubuntu:/home/forlinx/rtc# qmake
root@ubuntu:/home/forlinx/rtc# make
root@ubuntu:/home/forlinx/rtc# ls
Makefile       main.o          mainwindow.o        moc_mainwindow.o  ui_mainwindow.h
fltest_qt_rtc  mainwindow.cpp  mainwindow.ui       moc_predefs.h
main.cpp       mainwindow.h    moc_mainwindow.cpp  rtc.pro
```

Test: Copy fltest_qt_rtc to the board

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_User_Build_Guide_FlDesktop20.04-EN/107.png)

#### 4.4.5 Unmounting and Exiting
```bash
oot@ubuntu:/home/forlinx/rtc# exit
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu/ubuntufs$ cd ..
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs/proc
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs/sys
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs/dev/pts
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs/dev
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs/run
forlinx@ubuntu:~/3568/OK3568-linux-source/ubuntu$sudo umount ubuntufs
```