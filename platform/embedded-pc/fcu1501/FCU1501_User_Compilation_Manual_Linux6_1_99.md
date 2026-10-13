# FCU1501\_User's Compilation Manual\_Linux6.1.99\_V1.0

## 1 . VMware Virtual Machine Software Installation

This chapter mainly introduces the installation of the VMware virtual machine, using VMware Workstation 17 Pro as an example to demonstrate the operating system installation and configuration process.

### 1.1 Downloading and Purchasing VMware Software

Visit the VMware official website at https://www.vmware.com/cn.html to download Workstation Pro and obtain the product key. VMware is paid software that requires individual purchase, or you can choose to use a trial version.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414452367_ba3f1362_5262_4a29_bd49_89e338c764df.png)

After the download is complete, double-click the setup file to launch the installer.

### 1.2 VMware Software Installation

Double-click the programme to launch the installation wizard, then click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169299518_51ef1955_87b5_4d9c_ab23_6722043e1d57.png)

Check “I accept the terms in the license agreement” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169299827_654af716_3d46_4609_97ff_054e119673bb.png)

Modify the installation location to the partition on your computer where software is typically installed, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169300116_b1714f26_bb47_4caf_9cc4_1eee167c5d18.png)

Check, then click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169300391_9f8d9ab4_de5b_47d0_ad38_1174177cefb9.png)

Check “Add shortcuts” and click “Next.”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169300593_5bb0cd62_818b_4c31_90a9_c9dfffd00ea9.png)

Click “Install.”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169300791_4ae43a4d_510b_4f3e_b97a_b2bc70ee5a04.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169301003_be55046d_f49a_43ec_ba8a_b5374c82dfb6.png)

After clicking “Finish,” you can start the trial. For long-term use, please purchase from the official website and enter the license key.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720169301226_f10b8e88_6191_4ecf_ba68_8d4b33278162.png)



## 2\. Loading an Existing Ubuntu Development Environment

**Note:**

+ **It is recommended that beginners directly use the virtual machine environment pre-configured by Forlinx, which already has the cross-compiler and Qt environment installed. After reviewing this chapter, you can skip directly to the compilation chapters;**
+ **The regular user account for the development environment is: “forlinx”, and the corresponding password is: “forlinx”;**
+ **You can access software and hardware documentation, source code, and the development environment via the cloud storage link provided by Forlinx. Please ask your sales representative for the download link.**

There are two ways to use the virtual machine environment in VMware: one is to directly load an existing environment, and the other is to create a new environment. First explain how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading the package, you should verify the integrity of the compressed file by performing an MD5 checksum check. You can either use an online MD5 verification tool or download a dedicated MD5 verification tool, depending on your preference. Compare the checksum that you generate with the one listed in the checksum file. If they match, the downloaded file is intact. If they do not match, the file may be corrupted, and you will need to download it again.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414455462_c87f746f_0b1c_41b4_887a_b8c540995e38.png)

Select all the compressed packages and right click to extract them to the current folder or your own directory:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414455747_4965331d_3dbf_4132_98b2_2a444242ee2b.png)

Once the extraction is complete, you will obtain a folder named “ELF-RK3506\_Ubuntu22.04”.

**Note: The Ubuntu 22.04 development environment for models 3506, 3562, and 3568 is the same.**

The file "3506.vmx" in the "3506 Development Environment" folder is the virtual machine file that needs to be opened.

Open the installed virtual machine software.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1720168594803_02ccb0b5_49ce_405e_a982_05e8e19f6759.png)

The file "3506.vmx" in the "3506 Development Environment" folder is the virtual machine file that needs to be opened.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414456336_11272b6a_2f5a_41b5_981f_9a687d5e231e.png)

Once it has finished loading, click to start the virtual machine, and you will be able to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730770392113_46f60b0b_8a73_4880_bb2c_316b0b3f8e49.png)

The default account for auto-login upon system boot in the development environment is: “forlinx”, with the password: “forlinx”.

## 3\. New Ubuntu Development Environment Setup

**Note: It is not recommended for beginners to build the system by themselves. It is recommended to use the existing virtual machine environment. This section can be skipped if there is no need to build the environment.**

**This chapter mainly explains the setup process of the Ubuntu system.**

### 3.1 Ubuntu System Setup

The installed Ubuntu version is 22.04.5 LTS, and all the introductions and development in this manual were carried out on it. Download the “ubuntu-22.04.5-desktop-amd64.iso” version from [https://releases.ubuntu.com/22.04/](https://releases.ubuntu.com/22.04/)(the specific version to download can be based on your own needs; here we use version Ubuntu22.04.5 LTS as an example).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414456996_cd5d2646_003d_44e8_91cf_e5ed4574dba8.png)

#### 3.1.1 Creating an Ubuntu Virtual Machine

Step 1: Open the VMware software and click “Create a New Virtual Machine”. On the following screen, check “Custom (advanced)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771838296_01415610_068d_4ba7_9267_09ed32dae4b8.png)

Step 2: Choose the compatibility for the corresponding VMware version. The version can be found under Help ->About VMware Workstation. Click ''Next.''

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771870249_10b484a8_ba3a_40fa_95f6_2c02a0fd3d3e.png)

Choose “Installer disc image file (iso)” and click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771137989_9e9d0e8c_e015_469c_8a26_8317cb9b1097.png)

Enter the full name, username, and password, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771173023_0cf7d4a4_8d05_413b_a619_ec4a22d1c7a2.png)

Enter the virtual machine name and configure the installation location, then click “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771243922_1e572b96_3307_4ecd_9195_6a43af7510ff.png)

Set the number of processors according to your needs.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771288477_46b84221_b5ba_47d9_8290_44ea8d9b24d9.png)

Configure at least 8GB of memory and select “Next”:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771323581_06a409ed_9b7e_4556_b756_13ec10650f37.png)

Similarly, set the memory size according to your needs. It is recommended to use 16GB.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771350370_a2b56a01_a884_4708_9a99_cfaa88269611.png)

Set the network type, the default is NAT mode, and click "Next." Subsequent steps remain at their default values until the disk capacity step is specified.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771380620_e67fd0b6_0d04_4311_abdf_3950d7457943.png)

Choose the default LSI for the IO controller type.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771409290_939fac95_52fb_4b3b_928f_190a882b601a.png)

Similarly, select SCSI as the default here.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771437575_1e6469fa_2570_4cf5_9c1d_cf248ece01e2.png)

Choose to create a new virtual disk:.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771537119_3de308b8_38d8_4371_959f_9b41d9bc9c92.png)

Set the disk size to 200GB and select the disk's format, then click 'Next' to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771561349_40a86987_5983_4b89_83f4_a244e936e55e.png)

Specify the disk file, the default setting is fine here.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771580713_c82bd0e0_f186_4d03_b6cb_10fb405bec2d.png)

Click ''Finish'' by default to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771631305_f669a381_7597_4f46_bba4_bedddb71a310.png)

At this point, the virtual machine creation is complete.

Once the virtual machine is created, wait for the installation interface to appear as shown below.：

The default language of Ubuntu is English, but others can also be selected.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414462161_b971cb29_fa98_4b6e_a331_1ca8e2c61e26.png)

The default language can be changed later. After making your selection, click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414462478_cf866540_7b45_4c4a_8a6e_50a81b5522e7.png)

Next, choose the default option, click Continue to proceed with the installation. The process will take some time. Then click “Continue” again.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414462826_abec62d8_df23_4f74_8705_67e1a2ed4d6b.png)

Click Install Now by default, and a prompt will appear. Click “Continue”. In any subsequent pop-up windows, simply click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414463220_7c7cb959_7503_439e_9ff7_1b429055249b.png)

Choose your timezone. Here, you can click Shanghai or type Shanghai to select the timezone (choose a different timezone based on your location if needed), and click Continue.

Finally, set your username and password, choose between automatic login and logging in with your username and password, and click “Continue” to start the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414463561_6afffd42_5c43_42ee_a78a_7b5a36542547.png)

If your internet connection is poor, you can click “Skip”—this won’t affect the installation.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414463831_1105b728_3f1f_4329_aa17_83da9f3f3598.png)

Click “Restart Now” to restart the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414464259_610e7194_0b1e_4e2f_b2d9_66199bfb2172.png)

Once Ubuntu starts up, click “Skip” when this pop-up appears.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414464566_47b1638e_8bf6_4fd2_81e1_c0f008f6c898.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414464949_703505ee_358b_492d_a56f_92731d18a96f.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414465300_e3c72a7d_57a4_40a8_9a08_45d204d9474e.png)

Click “Next”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414465681_6b57b26d_5c57_4eed_9cc2_4b29b1fcb4b8.png)

Click “done”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414466087_2419e29b_533b_4fac_b858_150ebc8028a1.png)

Ubuntu is successfully installed.

#### 3.1.2 Basic Configuration of Ubuntu

After installing the Ubuntu 20.04 operating system, some configurations need to be done.

Open a terminal and use the system's built-in open-vm-tools:

sudo apt update \&\& sudo apt install open-vm-tools open-vm-tools-desktop –y

Ubuntu 22.04 uses Wayland by default, but the copy-and-paste functionality of VMware Tools currently does not work well with it. You need to switch to Xorg.

From the menu that appears when Ubuntu starts, select “Ubuntu on Xorg” or “Xorg”

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414466398_d6da769c_fdba_42c3_a34f_fa3d9730b2c5.png)

to enable copying and pasting files between Windows and Ubuntu.

Full-screen display for the virtual machine:

If the virtual machine cannot display in full screen, you can click on “View”, select “Auto-Adjust Size”, and then click “Autofit Guest” to resolve the full-screen issue.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730771929996_f0425a36_2ebd_4581_9e35_d1b39be33837.png)

Most system settings can be configured in the location shown in the figure. Many settings requirements on Ubuntu can be completed here.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414467069_1cbd3c28_5b0e_4333_b763_adca75059e4b.png)

Virtual Machine Sleep Settings：

Additionally, the default sleep setting is 5 minutes. If you do not want the system to go to sleep, go to Settings -> Power -> Blank Screen and set it to “Never”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414467521_52bea689_ee5d_4b8a_80db_9b673f251a37.png)

#### 3.1.3 Virtual Machine Network Configuration

**3.1.3.1 NAT Connection Mode**

By default, after the virtual machine installation is complete, the network connection mode is set to NAT, as shown in the figure below, sharing an IP address with the host machine. This setting does not need to be changed when installing dependency packages, compiling code, etc.

In the virtual machine, when the VMware virtual network adapter is set to NAT mode, the network in the Ubuntu environment should be set to dynamic IP. In this mode, the virtual NAT device connects and communicates with the host’s network card for internet access. This is the most commonly used method for the virtual machine to access the external network.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730772087100_ab80fe3b_3415_4524_9f09_a94042347a41.png)

**3.1.3.2 Bridged Connection Mode**

When the VMware virtual network adapter device is in bridged mode, the host network card and the virtual machine network card communicate through a virtual network bridge. In the Ubuntu environment, you need to set a network IP in the same subnet as the host. To access the external network, you need to set the DNS to be consistent with the host network card. If using servers like TFTP or SFTP, you need to set the virtual machine's network connection to Bridged Mode.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1730772113434_77bab373_f8a3_4f12_9d58_4a721f1be151.png)

## 4\. Compilation of Related Code

The Linux system is a desktop operating system developed by Forlinx based on Buildroot.

This section mainly describes the compilation methods for the development board-related source code, including kernel source code compilation and application program compilation.

### 4.1 Preparation Before Compilation

#### 4.1.1 Environment Description

+ OS: Ubuntu 22.04.5 LTS  64 bit
+ Cross-Toolchain: aarch64-buildroot-linux-gnu
+ Bootloader Version for Development Board: u-boot-2017.09
+ Kernel Version for Development Board: linux-6.1.118

#### 4.1.2 Copying the Source Code

 Program source code: FCU1501 Embedded Control Unit\_Linux6.1.99\_User Data\_R2\\2. Images and Source Code\\Source Code\\fcu1501-linux-source.tar.bz2.0\*

Buildroot packages: User Data\\2-Images and Source Code\\Source Code\\dl.tar.bz2

Create a working directory and place the source code and dl.tar.bz2 into the work directory.

**Note: During the Buildroot build process, the source code for various software packages needs to be downloaded. This requires internet access and may fail or result in incomplete downloads due to network fluctuations, restrictions, or issues with the source server, potentially causing compilation errors. This process requires access to external networks. Due to network fluctuations, restrictions, or issues with the source server, the download of source packages may fail or become incomplete, leading to compilation errors. To increase the success rate and reduce build time, it is strongly recommended to use the pre-configured solution by extracting the pre-downloaded software package archive dl.tar.bz2 into the Buildroot source directory.**

Create Working Directory:

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work						//Create the working directory in sequence
```

Copy the source code file fcu1501-linux-source.tar.bz2.0\* from the user’s home directory to the /home/forlinx/work directory on the virtual machine.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work														//Switch to the working directory
forlinx@ubuntu:~/work$ cat fcu1501-linux-source.tar.bz2.0* > fcu1501-linux-source.tar.bz2.0
forlinx@ubuntu:~/work$ tar -xvf fcu1501-linux-source.tar.bz2.0			//Extract the compressed file to its default location
forlinx@ubuntu:~/work$ cd /home/forlinx/work/fcu1501-linux-source/buildroot
forlinx@ubuntu:~/work/fcu1501-linux-source/buildroot$ tar -vxf ../../dl.tar.bz2	//Unzip dl.tar.bz2 under buildroot
```

Wait for the copy process to complete after running the command.

### 4.2 Source Code Compilation

**Note:**

+ **After extracting the kernel source code for the first time, you need to perform a full compilation of the source code;**
+ **Root privileges are required when compiling the source code. The following operations are carried out by the “forlinx” user using the “sudo” command; the password is also “forlinx”;**
+ **After the initial full compilation, you can proceed with individual compilations based on the actual situation.**

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

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414468312_f9575b71_e643_44e3_8172_7cea12616166.png)

After executing, there will be options to input, as shown in the picture. After entering "1", press Enter to continue.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu1501/FCU1501_User_Compilation_Manual_Linux6_1_99/1788414468652_fab81bc4_0e87_4871_b202_a662827979f6.png)

Enter the corresponding number for the relevant board, then press Enter to continue.

**Note: The above configuration only needs to be done once.** 

Then, execute build.sh for a full compilation:

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$ sudo ./build.sh
```

Once compilation is complete, the system image will be generated in the output/firmware/ folder.

**Note: update.img is packaged for full flashing using OTG or TF card.  Other files are for step-by-step flashing.**

#### 4.2.2 Individual Compilation

You can operate in the kernel source directory.

```plain
# Configure SDK
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh bconfig

# Generate uboot.img, output path: u-boot/uboot.img
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh uboot

# Generate boot.img, output path: kernel/boot.img
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh kernel 

# Generate rootfs.img, output path: buildroot/output/rockchip_fcu1501_emmc/images/rootfs.ext2
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh rootfs

# Generate update.img using the above uboot.img, boot.img and rootfs.ext2, output path: rockdev/update.img 
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh updateimg
```

After compilation, the kernel in update.img will not be updated. Please follow the step-by-step instructions to flash the kernel/boot.img file.

#### 4.2.3 Cleaning up Generated Files

You can operate in the source directory.

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source$ sudo ./build.sh cleanall  # Clear all compiled generated files
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh clean:kernel    # Clear kernel
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh clean:rootfs   # Clear rootfs
forlinx@ubuntu: ~/work/fcu1501-linux-source$ ./build.sh clean:recovery # Clear recovery
```

This operation removes all intermediate files but does not affect the source files, including any modified source files. However, it does not affect the source files, including those that have already been modified.

### 4.3 Image Files Usage

update.img is packaged for full flashing using OTG or TF card.  
Other files are for step-by-step flashing. The Image file generated from separate compilation will not be updated in update.img. Use step-by-step flashing (refer to the OTG flashing section in the user manual).

### 4.4 Application Compilation and Running

#### 4.4.1 Configure Cross-Compilation Toolchain

Path of packaged cross-compilation tool chain: FCU1501 embedded control unit \_ Linux 6.1.99 \_ user information \_ R2 \\ 2-image and source code \\ cross-compilation tool \\ host.tar.bz2

Extract the toolchain to any directory, e.g., /home/forlinx/work/toolchain;

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work/toolchain
forlinx@ubuntu:~$ tar xf host.tar.bz2 -C /home/forlinx/work/toolchain
forlinx@ubuntu:~$ cd /home/forlinx/work/toolchain/host
```

Run relocate-sdk.sh;

```plain
forlinx@ubuntu:~/work/toolchain/host$ ./relocate-sdk.sh
```

This buildroot SDK has already been relocated!

Run environment-setup to set up environment variables.

```plain
forlinx@ubuntu:~/work/toolchain/host$ source ./environment-setup
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

The terminal will automatically configure the environment variables for the cross-compilation toolchain. You can check the current environment variables using the env command.

**Note: After setting environment variables, the terminal cannot compile the full source code, and an error will occur. A new terminal must be used to compile the full source code.**

#### 4.4.2 Command-Line Applications Compilation and Operation

This section uses the watchdog test program.

Use cd to go to /home/forlinx/work;

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/fcu1501-linux-source/app/forlinx/forlinx_cmd_demo/fltest_watchdogt
```

Use make for cross-compilation;

```plain
forlinx@ubuntu: ~/work/fcu1501-linux-source/app/forlinx/forlinx_cmd_demo/fltest_watchdog$ make
arm-buildroot-linux-gnueabihf-gcc fltest_watchdog.c -o fltest_watchdog
fltest_watchdog make finish!!!
```

Use the file command to check the generated file information.

```plain
forlinx@ubuntu:~/work/fcu1501-linux-source/app/forlinx/forlinx_cmd_demo/fltest_watchdog$ file fltest_watchdog
fltest_watchdog: ELF 32-bit LSB pie executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 3.2.0, not stripped
```

The result will show that a 32-bit ARM file is generated.

Copy the compiled fltest\_watchdog file to the board using a USB drive or other methods, for example, to the /forlinx directory. The following example uses a USB drive to copy it to the development board and run the test;

```plain
[root@ok3506-buildroot:/]# cp /run/media/sda1/fltest_watchdog /
[root@ok3506-buildroot:/]# /fltest_watchdog
Usage: fltest_watchdog [-t <timeout>] [-c] [-d/-e]
  -t --timeout   set timeout (default 10), range ( 1 - 16)
  -c --continue  enable watchdog with feed dogs
  -d --disable   disable watchdog, conflict with enable
  -e --enable    enable watchdog, conflict with disable
```

Refer to the "Watchdog Test" section in the user manual for details.