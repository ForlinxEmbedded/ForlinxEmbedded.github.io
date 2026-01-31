# OK3568 4.19.206 Buildroot  Modification of BusyBox Configuration

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Modification of BusyBox Configuration

This document takes adding the -z parameter to the tar command as an example..

```plain
[root@ok3568:/]# tar --help
BusyBox v1.27.2 (2023-03-19 08:54:20 PDT) multi-call binary.

Usage: tar -[cxthvO] [-X FILE] [-T FILE] [-f TARFILE] [-C DIR] [FILE]...

Create, extract, or list files from a tar file

Operation:
        c       Create
        x       Extract
        t       List
        f       Name of TARFILE ('-' for stdin/out)
        C       Change to DIR before operation
        v       Verbose
        O       Extract to stdout
        h       Follow symlinks
        exclude File to exclude
        X       File with names to exclude
        T       File with names to include
[root@ok3568:/]#
```

Execute the following command in the Ubuntu source directory /OK3568-linux-source/buildroot/output/OK3568 to enter the busybox configuration interface.

```plain
source/buildroot/output/OK3568$ make busybox-menuconfig		//If an error is reported, execute sudo
make busybox-menuconfig
```

In the graphical interface, locate the two marked options and enable them.

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1722501507457-da40b882-2d07-43b1-a270-f774b9046711.png)

Press Esc to exit and select Yes to save the configuration.

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1722501603729-f5182bb8-3947-45e0-a590-3423f86d701a.png)

Regenerate the file system.

```plain
forlinx@ubuntu:~/3568/OK3568-linux-source$ ./build.sh  buildroot
```

The generated busybox is located at /OK3568-linux-source/buildroot/output/OK3568/build/busybox-1.27.2/busybox-1.27.2.tar. Extract it to the root directory of the development board for use.

```plain
[root@ok3568:/home]# tar --help
BusyBox v1.27.2 (2024-08-01 16:11:32 CST) multi-call binary.

Usage: tar -[cxtzjhvO] [-X FILE] [-T FILE] [-f TARFILE] [-C DIR] [FILE]...

Create, extract, or list files from a tar file

Operation:
        c       Create
        x       Extract
        t       List
        f       Name of TARFILE ('-' for stdin/out)
        C       Change to DIR before operation
        v       Verbose
        z       (De)compress using gzip
        j       (De)compress using bzip2
        O       Extract to stdout
        h       Follow symlinks
        exclude File to exclude
        X       File with names to exclude
        T       File with names to include
```