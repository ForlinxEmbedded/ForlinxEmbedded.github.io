# OK3588 5.10.209 Buildroot Filesystem Building & System Tool Adding

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright                                                                                                                  

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 30/04/2025 | V1.0| Initial Version|

## Filesystem Building & System Tool Adding

The manual mainly describes the customized modification operations performed on the Buildroot for Linux **5.10.209.**

**Download and Extract SDK Source Code**

```shell
forlinx@ubuntu20:~/3-3588-SDK_Kernel_5.10.209/1-Linux5.10.209+Qt5.15.10+Forlinx_Desktop22.04/OK3588-linux-source$ ls
app             build_secret_uboot.sh  debian  external  output     rkbin       rtos    ubuntu
build_close.sh  build.sh               device  kernel    prebuilts  rkflash.sh  tools   uefi
buildroot       common                 docs    Makefile  README.md  rockdev     u-boot  yocto
```

**Allow Compiling Buildroot First**

Before compiling, ensure that Buildroot can be compiled by deleting or removing the rootfs.ext4 file in the relevant directory (you can move it to another directory or rename it).

```shell
forlinx@ubuntu20:~/3-3588-SDK_Kernel_5.10.209/1-Linux5.10.209+Qt5.15.10+Forlinx_Desktop22.04/OK3588-linux-source/prebuilts/forlinx/buildroot$ ls
rootfs.ext4
```

**Compile Default Configuration Items**

To ensure compatibility with the previous default Buildroot configuration (forlinx\_ok3588\_defconfig), recompile by executing ./build.sh or ./build.sh buildroot.

During the build process, the server will fetch the source code packages for software projects based on the forlinx\_ok3588\_defconfig configuration and place them in the /buildroot/package directory.

```shell
forlinx@ubuntu20:~/3-3588-SDK_Kernel_5.10.209/1-Linux5.10.209+Qt5.15.10+Forlinx_Desktop22.04/OK3588-linux-source/buildroot/package$ 
```

After compilation, numerous files will be added and generated. The following files and directories will be created under buildroot/output/forlinx\_ok3588/:

buildroot/output/forlinx\_ok3588/ generate files

| Table of Contents| Role| Description|
|----------|----------|----------|
| build| Stores intermediate and temporary files generated during compilation.| Deleting this directory will result in a long recompilation |
| host| Contains tools and binaries compiled for the build system host| (i.e., the cross-compiler)|
| images| Stores the final firmware image files| rootfs.ext4 is the Buildroot system image, which can be directly replaced.|
| scripts| Contains various script files used by Buildroot.| Used for automated builds, configuring environments, or handling specific tasks.|
| staging| Contains header files, library files, and other development-related files for the target system.| Required during cross-compilation|
| target| Contains the complete contents of the root file system (rootfs) for the target device.| Includes only runtime-required files, excluding development-related header files or libraries.|

After compilation, it will be directly packaged into update.img.

**Note: Many issues may arise during this process, such as package acquisition failures due to network timeouts, insufficient thread counts during compilation, insufficient memory, or insufficient swap partitions. Generally, non-software project source code issues should be considered from these aspects. Remember not to use sudo with root privileges.**

**Adding System Tools or Required Library Files to Buildroot**

Taking OpenCV4 as an example:

① Enter the Buildroot directory and compile the forlinx\_ok3588\_defconfig.

```shell
make forlinx_ok3588_defconfig
```

② Open the menuconfig graphical interface and select the projects you want to compile.

```plain
make menuconfig ARCH=arm64
```

![](https://typroa-xua.oss-cn-beijing.aliyuncs.com/20250430141844.png)

| Selection Option| Role|
|:----------|----------|
| Target options| Configure the architecture and hardware parameters of the target device |
| Build options| Configure Buildroot's Build operations |
| Toolchain| Configuring the cross-compilation toolchain |
| System configuration| Configure basic settings for the target system |
| Kernel| Configure the Linux kernel |
| Target packages| Select the packages installed on the target system |
| Filesystem images| Configure the type of file system image that is generated |
| Bootloaders| Configure the boot loader (e.g. U-Boot, GRUB) |
| Host utilities| Configure the tools that run on the host |
| Legacy config options| Dealing with obsolete or obsolete configuration options |


For example, if you need opencv4 now, you can directly search in the visual list, check the configuration items you need, and then save them to generate a new.config.

③ Compilation

Separate Tool Package Compilation:

```shell
make opencv4
```

Full Compilation:

    	Direct execute make

```shell
make
```

④ After completing the full compilation: Buildroot will automatically add the executable files and dependency libraries for OpenCV4 to the target file system. These files will be located in buildroot/output/forlinx\_ok3588/image/rootfs.ext4.

Buildroot will also copy the dependency libraries required for compiling OpenCV4 to the toolchain. These libraries will be stored in the host directory under buildroot/output/forlinx\_ok3588, as mentioned earlier. If necessary, the compiler can be packaged and used.

Usage: directly set the environment-setup environment variable under the host directory to deploy the cross-compilation environment

```shell
source environment-setup
```

⑤ Save the current configuration to defconfig

    	It is recommended to back up and keep the original forlinx_ok3588_defconfig

```shell
make savedefconfig
```

**Replacement and Transplantation**

Generally, the cross-compilation tool and the generated file system image are used, respectively

buildroot/output/forlinx\_ok3588/host

buildroot/output/forlinx\_ok3588/image/rootfs.ext4