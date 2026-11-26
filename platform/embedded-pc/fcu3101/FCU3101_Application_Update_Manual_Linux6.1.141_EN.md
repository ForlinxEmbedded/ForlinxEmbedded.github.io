# Application Update Manual (Linux 6.1.141)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms. 

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Setting Up the Development Environment

### 1.1 Version Information

- Host operating system: Ubuntu 22.04, 64-bit
- Cross toolchain: arm-none-linux-gnueabihf-gcc 10.3.1

### 1.2 Preparing the Virtual Machine

This section uses VMware Workstation 15 Pro v15.1.0 to illustrate how to install and configure the host operating system.

#### 1.2.1 Obtaining VMware Workstation Pro

Download Workstation Pro from the [VMware website](https://www.vmware.com/cn.html) and obtain a product key. VMware is commercial software; purchase a license or use the evaluation version.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719278513268_e1e3d73c_ea58_4db6_86b2_2bcb430bf195.png)

Once the download completes, double-click the installer.

#### 1.2.2 Installing VMware Workstation Pro

Double-click the installer to launch the setup wizard.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209495516_2577c76e_b873_4413_bd12_9cdb9bb35cd1.png)

Click **Next**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209495744_b2803b4e_0808_49a0_a39c_37b0e1bb062e.png)

Accept the terms of the license agreement and click **Next**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209495901_47b073cf_6bcf_4610_9da4_eabfb0dcd192.png)

If required, change the installation directory to a partition with sufficient free space, then click **Next**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209496107_e2d70089_70d9_4c62_a773_15c510eb170d.png)

Leave the default options selected and click **Next**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209496313_08157317_dbf5_40e0_a9cf_610e2526d95f.png)

Select the shortcuts to create and click **Next**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209496500_20204188_b425_4016_b17c_de930587ae2e.png)

Click **Install**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209496717_f6f5d128_1585_41b0_83a6_c9bec52d7d15.png)

Wait for the installation to finish.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719209497041_1df7c12a_752d_4fa8_9730_2a07c6cafa98.png)

Click **Finish** to begin the trial. For continued use, purchase a license and enter the product key.

#### 1.2.3 Opening the Prebuilt Ubuntu Development VM

**Note:**

- **Forlinx recommends using the preconfigured virtual machine. After reading this section, you can skip directly to the next one;**
- **VM credentials: user `forlinx`, password `forlinx`.**

VMware can either open an existing virtual machine or create a new one. This section describes how to open the prebuilt environment.

First, download the development environment supplied by Forlinx. The package includes an MD5 checksum file. Verify the downloaded archive against that checksum (using an online MD5 tool or a local utility) before extracting it. A matching checksum confirms a complete download; a mismatch means the archive is damaged and must be downloaded again.

Select all parts of the archive and extract them together:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_10.png)

Extraction creates the `3568` standard environment folder, which supports the FCU3101. The `.vmx` file is the virtual machine to open.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_11.png)

In VMware, select **Open a Virtual Machine** and choose the extracted `3568.vmx`:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719278548894_5a126d86_d30f_4f1c_906b_1d615fdf2e0a.png)

Power on the virtual machine to enter the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/1719278549304_2128d94e_45fa_4091_83c8_678157602b7b.png)

Log in with user `forlinx`, password `forlinx`, and click **Sign in**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_15.png)

After a successful login:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_16.png)

## 2. Building Linux Applications

### 2.1 Configuring the Build Environment

The sample applications are built with Buildroot by default. They can also be compiled directly, as described below.

- **Set up the cross toolchain.**

The packaged toolchain is located at:

`Software\2. Images and Toolchain\Cross Compiler\host.tar.bz`

```bash
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work/fcu3101
forlinx@ubuntu:~$ tar xf host.tar.bz -C /home/forlinx/work/fcu3101
forlinx@ubuntu:~$ cd /home/forlinx/work/fcu3101/host
```

- **Run `relocate-sdk.sh`.**

```bash
forlinx@ubuntu:~/work/fcu3101/host$ ./relocate-sdk.sh
```

**Load the environment variables.**

```bash
forlinx@ubuntu:~/work/fcu3101/host$ chmod +x environment-setup
forlinx@ubuntu:~/work/fcu3101/host$ source ./environment-setup
```

The current terminal is now configured with the cross-toolchain environment. Run `env` to inspect the variables.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_17.png)

**Note: Do not build the full source tree in this terminal, as it will fail. Open a new terminal for a full build.**

### 2.2 Building and Running a Command-Line Application

This section uses the watchdog demo, located at `Software\2. Images and Toolchain\Sample Applications\forlinx_app_demo.tar.bz2`. Copy it to the virtual machine and extract it into the `work` directory. Keep the terminal from the previous section open, with the toolchain environment loaded.

- **Change to the application directory.**

```bash
forlinx@ubuntu:~$ cd /home/forlinx/work/forlinx_app_demo
```

- **Cross-compile with `make`.**

```bash
forlinx@ubuntu:~/work/forlinx_app_demo/wd_demo$ make
make: 'watchdog' is up to date.
```

- **Inspect the resulting binary.**

```bash
forlinx@ubuntu:~/work/forlinx_app_demo/wd_demo$ file watchdog
watchdog: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, for GNU/Linux 3.7.0, not stripped
```

The output confirms a 64-bit Arm executable.

- **Copy `watchdog` to the board — for example, to `/forlinx` via a USB drive — and run it.**

```bash
[root@FCU3101:/]# cp /run/media/sda1/watchdog /
[root@FCU3101:/]# watchdog
Copyright 2025 Forlinx Embedded Technology Co., Ltd.
watchdog ver: ver01.001, repo: demo, commit: 796cd09a

open_watchdog success
Watchdog enabled.
keep alive
```

- **For detailed usage, see *FCU3101 Application Examples Manual (Linux 6.1.141)* in `Software\5. Application Notes`.**

## 3. Updating the Root Filesystem

Package path: `Software\2. Images and Toolchain\Images\`

Use the image that matches your board model, or an `update.img` produced by a full source build. The update follows five steps in order: unpack the image, mount the root filesystem, modify the applications, unmount, and repack.

Create a working directory:

```bash
forlinx@ubuntu:~$ mkdir -p /home/forlinx/work
```

### 3.1 Unpacking

The tools supplied with the software package split the firmware image into flashable component images. Mounting the root filesystem locally then lets you modify the applications it contains. A pre-unpacked image is also provided:

`Software\2. Images and Toolchain\Images\Unpacked Image - Image`

Unpacking tool:

`Software\3. Tools\System Update Tools\Image_pack_tools.rar`

Extract `Image_pack_tools.rar` as shown below.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_18.png)

Copy the extracted files into the working directory of the virtual machine.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_19.png)

Copy the flash image `update.img` into the same directory; any path is acceptable.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_20.png)

Run the unpack command:

```bash
forlinx@ubuntu:~$ ./myunpack.sh ./update.img
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_21.png)

`Unpack completed successfully. Files are in: Image` confirms that unpacking succeeded.

**Usage:** `./myunpack.sh <path-to-image>`

Unpacking creates an `Image` directory in the working directory containing the component images.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_22.png)

### 3.2 Mounting the Root Filesystem

Create a `rootfs` mount point in the working directory.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_23.png)

Mount with `sudo`. In the Forlinx virtual machine, the password is `forlinx`.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_24.png)

Once mounted, a drive appears on the desktop. Verify the mount with `ls`.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_25.png)

Enter `rootfs` to view the root filesystem contents, then add or replace applications as needed.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_26.png)

### 3.3 Adding an Application

This example adds an application: write the source, cross-compile it into an executable, and place the executable in the root filesystem for verification.

The sample program is `hello.c`.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_27.png)

Configure the cross toolchain in the current terminal as described in Section 2.1.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_28.png)

Compile the program. Running `$CC hello.c` produces an executable named `a.out` by default.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_29.png)

Copy `a.out` into the mounted root filesystem (the system root directory), or into any other directory required by your application.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_30.png)

### 3.4 Unmounting the Root Filesystem

After all application updates, modifications, replacements, and additions are complete, unmount the filesystem:

```bash
sudo umount ./rootfs
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_31.png)

### 3.5 Repacking

Repacking reverses the unpack step and produces a flashable `update.img` from the component images.

```bash
forlinx@ubuntu:~$ ./mymkupdate.sh -o ./undate-v2.img
```

The `-o` option specifies the output image filename.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_32.png)

`Successfully generated: ./undate-v2.img` confirms that the image was created.

The new image is ready to flash. For flashing instructions, see the system flashing section of the user manual. After flashing, reboot the board and verify that `a.out` is present in the root directory and runs as expected.

## 4. Configuring Qt Creator

### 4.1 Configuring the Cross Compiler

Qt is a cross-platform GUI framework that supports many operating systems. Configure the Qt Creator build environment before compiling.

> **Note:** The cross compiler used by Qt Creator is generated by a full source build. For convenience, `host.tar.bz` is supplied in `Software\2. Images and Toolchain\Cross Compiler`. Check the `HostPrefix` path recorded in `host/bin/qt.conf`, create that same absolute path in your development environment, extract `host.tar.bz2` there, and then continue with this section.

- In Qt Creator, open **Tools > Options > Kits > Compilers**, then choose **Add > GCC > C**;
- Set **Name** to `GCC`;
- For **Compiler Path**, browse to the C compiler `arm-buildroot-linux-gnueabihf-gcc`.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_33.png)

Add the C++ compiler `arm-buildroot-linux-gnueabihf-g++` the same way, using **Add > GCC > C++**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_34.png)

### 4.2 Qt Versions

- Open **Tools > Options > Qt Versions**;
- Click **Add** and select `host/bin/qmake`;
- Click **Open**.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_35.png)

- Back in the Qt Versions dialog, you can change **Version name**;
- Click **Apply** and **OK**.

### 4.3 Kits

A kit bundles a compiler and a Qt version into a build and run environment, which is useful for projects that target multiple Qt libraries. Add the cross compiler and Qt version created above to a kit for the target board.

- Open **Tools > Options > Kits** and click **Add**;
- Set a name for the kit;
- Select `GCC` as the compiler;
- Select the Qt version name entered earlier.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/FCU3101_Application_Update_Manual_Linux6.1.141_EN/update_36.png)

- Click **Apply** and **OK**.
