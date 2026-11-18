# Firmware Modification (Forlinx Desktop 22.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## **Overview**  

To simplify the initial configuration of multiple devices, this section describes how to modify the image file. 

## **Revision History**

| **Date**    | **Manual Version**    | **Description**    |
| --- | --- | --- |
| 29/09/2025 | V1.0    | Initial release    |

## Application Scenarios

+ The FCU3501 hardware and software are not open source, so to simplify flashing, this section describes how to unpack the image file, modify the file system, and repackage it;
+ After completing these steps, you no longer need to repeatedly install programs and configure every device each time you flash the image file.

## Detailed Procedure
[Image_pack_tools.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2026/zip/45205328/1783914548622-253bdd6d-9741-4d9a-bea9-8cd70581bb6c.zip)

Do not mix it with the fcu2601 package, or an error will occur.

### Unpack the Tool Package

Copy the tool package to the development environment provided for download in the release materials, in any directory of the Ubuntu 22.04 virtual machine, then use the following command to unpack it.

```shell
forlinx@ubuntu:~/pxy/fcu3501$ unzip Image_pack_tools
Archive:  Image_pack_tools.zip
   creating: Image_pack_tools/
  inflating: Image_pack_tools/rk3588-mkupdate.sh  
  inflating: Image_pack_tools/afptool  
  inflating: Image_pack_tools/rkImageMaker  
  inflating: Image_pack_tools/unpack.sh  
```

### Copy the Image File
Copy the default image file into the Image_pack_tools folder created during unpacking.

### Unpack
In the terminal, enter the Image_pack_tools directory and use the following command to unpack it.

```shell
forlinx@ubuntu:~/pxy/fcu3501$ cd Image_pack_tools
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ ls
afptool  rk3588-mkupdate.sh  rkImageMaker  unpack.sh
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ ./unpack.sh 
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Firmware_Modification_FlDesktop22.04-EN/048.png)

### Modify the File System
In the terminal, enter the Image folder created during unpacking, use the following command to create a new directory, and then mount rootfs.img.

From there you can modify the relevant configuration files or add customer applications.

This section uses adding a customer application as an example: place the application in the /target/usr/bin folder and run chmod +x <application> to grant execute permission.

Test with the autostart script configuration: after modifying, flash the image file and the autostart script works normally.

```shell
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ mkdir target
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ sudo mount rootfs.img target/
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ cd target/
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools/target$ 
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Firmware_Modification_FlDesktop22.04-EN/049.png)

Modifying the target directory directly modifies the final file system.

You can also use the `chroot target` command to treat the target directory as the / directory (see the chroot command documentation for details).

This lets you simulate operating on the development board and configure the file system.

To preinstall programs with apt-get from the command line, use the following commands and run them with the mounted file system directory as the specified root directory:

```shell
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools/target$ cd ..
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ sudo chroot target/
```

Search for installed programs:

```plain
apt list --installed | grep <program-name>
```

Based on the search results, uninstall an existing program:

```plain
apt remove <package-name>
```

### Unmount the Directory and Repackage
Use the following command to unmount, then package the image file. A new, modified image file named update.img will be generated in the Image_pack_tools directory; flash it as usual.

```shell
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools/target$ cd ..
forlinx@ubuntu:~/pxy/fcu3501/Image_pack_tools$ sudo umount target 
$ ./rk3588-mkupdate.sh 
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Firmware_Modification_FlDesktop22.04-EN/050.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3501/FCU3501_Firmware_Modification_FlDesktop22.04-EN/051.png)
