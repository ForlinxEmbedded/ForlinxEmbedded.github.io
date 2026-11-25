# FlDesktop22.04_Application Update User's Manual_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. FCU3502 Linux Development Environment Setup
### 1.1 Version Information
+ Development environment OS: Ubuntu 22.04 64-bit 
+ Cross-toolchain: arm-none-linux-gnueabihf-gcc 10.3.1

### 1.2 Development Environment Description 
Virtual machine installation is demonstrated using VMware Workstation 15 Pro v15.1.0 as an example to show the OS installation and configuration process.

#### 1.2.1 Downloading and Purchasing VMware Software
Visit VMware's official global website https://www.vmware.com/ to download to download Workstation Pro and obtain the product key. VMware is paid software that must be purchased, or you can use the trial version provided by VMware.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209495299_799ee221_9dff_4815_b8d3_a685b32f971b.png)

After the download completes, double-click the executable file to launch the installer.

#### 1.2.2 Installing VMware Software
Double-click the installer to open the installation wizard.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209495516_2577c76e_b873_4413_bd12_9cdb9bb35cd1.png)

Click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209495744_b2803b4e_0808_49a0_a39c_37b0e1bb062e.png)

Select "I accept the terms in the license agreement" and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209495901_47b073cf_6bcf_4610_9da4_eabfb0dcd192.png)

Change the installation location to the partition where you install software on your computer, then click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209496107_e2d70089_70d9_4c62_a773_15c510eb170d.png)

Select the option and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209496313_08157317_dbf5_40e0_a9cf_610e2526d95f.png)

Select to add shortcuts and click "Next".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209496500_20204188_b425_4016_b17c_de930587ae2e.png)

Click "Install".

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209496717_f6f5d128_1585_41b0_83a6_c9bec52d7d15.png)

Wait for the installation to complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719209497041_1df7c12a_752d_4fa8_9730_2a07c6cafa98.png)

After installation, click "Finish" to start the trial. For long-term use, purchase a license from the official website and enter the license key.

#### **1.2.3 Loading an Existing Ubuntu Development Environment**
⚠️ **Note:**

+ **Beginners are advised to use the pre-built virtual machine environment provided by Forlinx. After reading this section, you can skip directly to the next section;**
+ **The account for the provided development environment is forlinx, and the password is forlinx**

There are two ways to use a virtual machine environment in VMware: loading an existing environment or creating a new one. This section only describes how to load an existing environment.

First, download the development environment provided by Forlinx. The development environment package includes an MD5 checksum file. After downloading it, verify the MD5 checksum of the archive (you can use an online MD5 tool or download an MD5 verification tool, whichever suits your situation). Check whether the computed checksum matches the one in the checksum file. If they match, the download is normal; if not, the file may be corrupted and needs to be downloaded again.

Select the archives and extract them together:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img146.png)

After extraction, a "3568 Standard Environment" folder appears. The .vmx file is the file to open for the virtual machine.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img147.png)

Open the virtual machine and select the extracted 3568.vmx:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719278548894_5a126d86_d30f_4f1c_906b_1d615fdf2e0a.png)

After loading, click "Start this virtual machine" to run it and enter the system interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719278535587_6fcfdee5_51f1_4e1c_9906_d39fc0048711.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

The account for the provided development environment is forlinx and the password is forlinx. After entering the password, select Sign in to log in.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img151.png)

After logging in successfully.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img152.png)

## 2. FCU3502 Linux Application Compilation
### 2.1 Configuring the Application Compilation Environment
The test programs in the software materials are built with buildroot by default, but can also be compiled directly. The following describes the direct compilation method.

- Configure the cross-compilation toolchain

Path of the packaged cross-compilation toolchain:

Software Materials\2-Images and Toolchain\Cross-compilation Tools\host.tar.bz archive

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work/toolchain
forlinx@ubuntu:~$ tar xf  host.tar.bz -C /home/forlinx/work/toolchain
forlinx@ubuntu:~$ cd /home/forlinx/work/toolchain/host
```

- Run relocate-sdk.sh

```plain
forlinx@ubuntu:~/work/toolchain/host$ ./relocate-sdk.sh
```

- Run environment-setup to set environment variables

```plain
forlinx@ubuntu:~/work/toolchain/host$ source ./environment-setup
```

The environment variables related to the cross-compilation toolchain are now automatically configured in the current terminal. You can use the env command to view them.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img153.png)

**Note: A terminal with configured environment variables cannot be used to build the full source code; doing so will cause errors. Open a new terminal to build the full source code!**

### 2.2 Compiling and Running a Command-Line Application
This section uses the watchdog test program at Software Materials\2-Images and Toolchain\Test Programs\forlinx_app_demo.tar.bz2. Copy this file to the virtual machine and extract it to the work directory, keeping the terminal from the previous section with the cross-compilation environment variables set. 

- Use the cd command to enter the /home/forlinx/work directory.

```plain
forlinx@ubuntu:~$ cd /home/forlinx/work/forlinx_app_demo
```

- Use make to cross-compile.

```plain
forlinx@ubuntu: ~/work/forlinx_app_demo/wd_demo $ make
make: 'watchdog' is up to date.
```

Use the file command to view information about the generated file

```plain
forlinx@ubuntu:~/work/forlinx_app_demo/wd_demo$ file watchdog
watchdog: ELF 32-bit LSB pie executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 3.2.0, not stripped
```

The result shows that the generated file is a 32-bit ARM file.

- Copy the compiled watchdog to the board via a USB drive or other means, for example to the /forlinx directory. The following uses a USB drive as an example to copy the file to the development board and run the test.

```plain
root@FCU3502# cp /run/media/sda1/watchdog  /
root@FCU3502## watchdog
Copyright 2025 Forlinx Embedded Technology Co., Ltd.
watchdog ver: ver01.001, repo: demo, commit: 796cd09a

open_watchdog success
Watchdog enabled.
keep alive
```

- For details, refer to the manual: **Linux Application Examples Guide**.

## 3. FCU3502 Filesystem Update

📂 Resource path: Software Materials\2-Images and Toolchain\EMMC\

📂 Resource path: Software Materials\2-Images and Toolchain\NAND\

Obtain the image corresponding to your model, or use the update.img image generated by a full build. This example uses the EMMC model. The overall update process consists of unpacking, mounting the root filesystem, modifying applications, unmounting the root filesystem, and packaging. Execute these five steps in order to complete the upgrade.

Create a working directory

```plain
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work	// Create the working directory in order
```

### 3.1 Unpacking
Use the tools provided in the software materials to unpack the image into flashing component packages, then mount the root filesystem locally and modify the applications under it to implement the application update. This document provides the unpacked image packages:

📂 Software Materials\2-Images and Toolchain\EMMC\Unpacked Images\

📂 Software Materials\2-Images and Toolchain\NAND\Unpacked Images\

Unpacking tool path:

📂 Software Materials\3-Tools\System Update Tools\Image_pack_tools.rar

Extract Image_pack_tools.rar as shown below

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img154.png)

Then copy these files to the working directory in the virtual machine

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/image.png)

Copy the flashing image update.img to this directory, or to any path

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/image_1795591553866.png)

Run the following command:

```plain
./myunpack.sh ./update.img
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img157.png)

Unpack completed successfully. Files are in: Image indicates a successful unpack.

**Note: ./myunpack.sh "path to the image"**

After unpacking, an Image directory is created in the working directory, and the unpacked component packages are also stored there.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/image_1795591569182.png)

The unpacking is now complete.

### 3.2 Mounting the Root Filesystem
Create a rootfs mount point in the working directory

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/image_1795591582725.png)

Perform the mount with sudo privileges. If using the virtual machine provided by Forlinx, the password is forlinx.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img160.png)

After a successful mount, a mounted disk appears on the desktop, and you can also verify it with ls.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img161.png)

Enter rootfs and view its contents. You can manually update or replace applications as needed.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img162.png)

The root filesystem is now mounted.

### 3.3 Adding an Application Example
This example demonstrates how to add an application. First, write the application; then compile it with the cross-compilation toolchain to build an executable; finally, package the executable into the filesystem and verify it.

Take the application hello.c as an example:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img163.png)

Configure the cross-compilation toolchain in the current terminal. For details, refer to the cross-compilation toolchain configuration in section 3.3;

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img164.png)

Compile the application by running $CC hello.c in the current terminal. By default, this generates an executable named a.out.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img165.png)

Copy a.out to the filesystem mount path, that is, the system root directory. You can add it to a specific path as needed.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img166.png)

The application is now added.

### 3.4 Unmounting the Root Filesystem
After completing **updates, modifications, replacements, and additions** to applications under the root filesystem, you can unmount the filesystem.

Run sudo  umount  ./rootfs ;

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img167.png)

The root filesystem is now unmounted.

### 3.5 Packaging
This step is the reverse of unpacking. It packages the unpacked component packages into a flashable image file, update.img. After updating with your custom applications, use this tool to repackage the image.

Run ./mymkupdate.sh -o ./undate-v2.img; the -o option specifies the filename of the generated image.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img168.png)

Successfully generated: ./undate-v2.img indicates that the undate-v2.img image was successfully created.

The new image file is now ready for direct flashing. For detailed flashing steps, refer to the system flashing section of the user manual.

After flashing, restart the system for verification. The a.out executable is visible in the root directory and runs as expected.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img169.png)

The filesystem application update verification is now complete.

## 4. QT Creator Environment Configuration
### 4.1 Configuring the Qt Creator Cross-Compiler Environment
Qt is a cross-platform graphical development library that supports many operating systems. Before compiling, you need to configure the Qt Creator build environment.

**Note: The cross-compiler path used by Qt Creator is generated after a full source build. For convenience, we have placed the host.tar.bz archive in the Software Materials\2-Images and Toolchain\Cross-compilation Tools\ directory. You can check the HostPrefix path recorded in the /host/bin/qt.conf file, then create an absolute path matching the HostPrefix in our development environment, extract host.tar.bz2 to the corresponding absolute path, and continue with the operations in this chapter.**

- In Qt Creator, click Tools -> Options -> Kits -> Compilers, then click Add -> GCC -> C;

- Enter GCC for Name;

- For Compiler Path, click Browse and select the cross-compiler paths: arm-buildroot-linux-gnueabihf-gc and arm-buildroot-linux-gnueabihf-g++, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img170.png)

Add the GCC compiler in the same way by clicking "Add -> GCC -> C++" on the right, as shown below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img171.png)

### 4.2 Qt Versions Configuration
- In Qt Creator, click Tools -> Options -> Qt Versions, 

- Then click Add. In the dialog that appears, select host/bin/qmake

- Click Open to add it.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img172.png)

- You will return to the Qt Version configuration dialog. You can change the Version name as needed.

- Then click Apply and OK.

### 4.3 Kits Configuration
A Kit is a build suite used to build and select the development and compilation environment, which is useful for projects with multiple Qt libraries. Add the previously configured cross-compiler and Qt Version to the Kit to build a compilation environment suitable for the development board.

- In Qt Creator, click Tools -> Options -> Kits, then click Add to display the configuration section.

- Change Name as needed.

- Select GCC for Compiler.

- For Qt version, select the name you entered when creating the Qt version.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img173.png)

- Then click Apply and OK.

## 5. FCU3502 Driver Update
### 5.1 Querying the Compute Card
```plain
rknn3_transfer_proxy devices
```

This command queries the hardware compute card on the PCIe interface, which can be identified by its unique ID.

![](images_fcu3502_desktop22_en/img174.png)

### 5.2 Updating the rknn3 Driver
#### 5.2.1 Prerequisites
The factory-installed rknn3 driver on the FCU3502 is v1.0.0, which cannot meet the minimum requirements for deploying large models such as Qwen v3.5, so the driver must be updated manually.

Attempting to deploy a large model on a system with too old a driver version results in a system error.

```plain
check ddr load addr request failed, service exit code 234
```

On the intranet FTP, download the corresponding interface software installation package from RK182X Software Materials\2-Compute Card SDK.

#### 5.2.2 Upgrading the Driver
Copy the software installation package to the device via FTP or similar, and create a separate folder under /home/ for the operation.

```plain
mkdir/home/rknn3_installer
```

Change the permissions of the software installation package

```plain
chmod+xrknn3_rk182x_m2_v1.1.0_installer_arm64.tgz
```

Check user permissions, then run the following commands with root privileges.

```plain
cp rknn3_rk182x_m2_v1.1.0_installer_arm64.tgz /tmp/installer.tgz
cd /tmp && tar xzf installer.tgz && ./install.sh
```

After successful execution, a reboot is recommended.

#### 5.2.3 Verifying the Driver
After rebooting, query via the command line. Both the device hardware version and API version are successfully upgraded to 1.1.0.

```plain
rkmm-smi info
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img175.png)

```plain
rknn-smi --version
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img176.png)

You can now proceed to deploy large models such as QWEN3.5.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3502/fcu3502_application_update_manual_fldesktop22.04/img177.png)



