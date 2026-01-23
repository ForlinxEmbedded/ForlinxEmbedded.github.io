# OK3568 4.19.206 Non-effective Configuration Packages

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 22/09/2022| V1.0| Initial Version|
| 25/04/2025| V1.1| Consolidating the Same Issue|

## Non-effective Configuration Packages

When configuring a sub-option under an existing, previously configured option in Buildroot, the new sub-configuration may not take effect.

Example (Python):

For example, if you have configured and compiled python3, add the configuration python-aiocoap under the external python modules again, and then recompile the file system, the changes will not take effect.

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1745563843491-5f5a7cdf-b701-40d0-8b00-e7fc640eaea8.png)

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1745564166555-51f5cf40-89a9-445f-a103-033e7e0362d0.png)

**Solution:**

1\. You can simply re-make the package so that the changes are added. (Not recommended, because you need to re-package to add the changes to the file system.).

When you need to compile a package separately, you can use the make xxx-rebuild directive, using python3 as an example:

Execute at OK3568-linux-source/build root

```plain
forlinx@DESKTOP-ARR08M4:~/3568.4.19/OK3568-linux-source/buildroot$ make python3-rebuild
rm -f /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_staging_installed
rm -f /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_target_installed
rm -f /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_images_installed
rm -f /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_host_installed
touch /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_built || true
touch: cannot touch '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_built': No such file or directory
rm -f /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/python3-3.8.6/.stamp_built
/usr/bin/make -j1 O=/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output HOSTCC="/usr/bin/gcc" HOSTCXX="/usr/bin/g++" silentoldconfig
make[1]: Entering directory '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot'
mkdir -p /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config/lxdialog
PKG_CONFIG_PATH="" /usr/bin/make CC="/usr/bin/gcc" HOSTCC="/usr/bin/gcc" \
    obj=/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config -C support/kconfig -f Makefile.br conf
make[2]: Entering directory '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/support/kconfig'
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -I/usr/include/ncursesw -DCURSES_LOC="<ncurses.h>" -DNCURSES_WIDECHAR=1 -DLOCALE  -I/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config -DCONFIG_=\"\"   /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config/conf.o /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config/zconf.tab.o  -o /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/buildroot-config/conf
make[2]: Leaving directory '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/support/kconfig'
make[1]: Leaving directory '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot'
>>> host-lzip 1.19 Extracting
gzip -d -c /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/dl/lzip-1.19.tar.gz | tar --strip-components=1 -C /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/build/host-lzip-1.19   -xf -
>>> host-lzip 1.19 Patching
>>> host-lzip 1.19 Configuring
...
...
...						//Omit


```

Manually unzip the package to the root directory of the development board to take effect or recompile the file system to package the changes into the image.

![](https://cdn.nlark.com/yuque/0/2025/png/46863139/1745565266287-f8e2017c-2a25-4908-b5f7-b5643cdb9991.png)

2\. Delete the package directly and recompile (recommended)

A full Linux 5.10 kernel compilation does not automatically rebuild the filesystem. Please first execute: ./build.sh buildroot

```markdown
forlinx@ubuntu22:~/3568/OK3568-linux-source/buildroot/output/OK3568/build$ rm -rf python3-3.10.5
forlinx@ubuntu22:~/3568/OK3568-linux-source/buildroot/output/OK3568/build$ cd ../../../../
forlinx@ubuntu22:~/3568/OK3568-linux-source$ ./build.sh
Log saved at /home/forlinx/3568/OK3568-linux-sdk5.10/output/sessions/2025-04-25_14-59-29


==========================================
          Final configs
==========================================
RK_BOOT_FIT_ITS=boot.its
RK_BOOT_IMG=boot.img
RK_BUILDROOT_CFG=OK3568
RK_CHIP=OK3568
RK_CHIP_FAMILY=OK3568
RK_DEFCONFIG=/home/forlinx/3568/OK3568-linux-sdk5.10/device/rockchip/.chips/OK3568/OK3568-C-linux_defconfig
RK_EXTRA_PARTITION_NUM=2
RK_EXTRA_PARTITION_STR=oem:oem:/oem:ext4:defaults:normal:auto:@userdata:userdata:/userdata:ext4:defaults:normal:auto:@@@
RK_KERNEL_ARCH=arm64
RK_KERNEL_ARM64=y
RK_KERNEL_CFG=OK3568-C-linux_defconfig
RK_KERNEL_DTB=kernel/arch/arm64/boot/dts/rockchip/OK3568-C-linux.dtb
RK_KERNEL_DTS=kernel/arch/arm64/boot/dts/rockchip/OK3568-C-linux.dts
```