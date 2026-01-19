# OK3588 4.19.206 Buildroot Nginx Installation

Document classification: □ Top secret □ Secret □ Internal information ■ Open Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|----------|----------|----------|
| 02/20/2022| V1.0| Initial Version |

## Nginx Installation

Install nginx by modifying the filesystem defconfig. Nginx is a high-performance web server and reverse proxy server, widely used in scenarios such as load balancing, HTTP caching, reverse proxy, and static file serving.

Modify the default configuration file.

File path: OK3568-linux-source/buildroot/configs/OK3568\_defconfig

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source$ vi buildroot/configs/OK3568_defconfig
```

Add BR\_PACKAGE\_NGINX=y

![Image](./images/OK3588_4_19_206_Buildroot_Nginx_Installation/1723445582697_11a7f8d5_5c84_4784_9328_0a9c9623378a.png)

Execute./build. sh build root to compile filesystem.

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source$ ./build.sh  buildroot
processing option: buildroot
==========Start building buildroot==========
TARGET_BUILDROOT_CONFIG=OK3568
=========================================
Top of tree: /home/forlinx/3568.4.19/OK3568-linux-source
===========================================

#TARGET_BOARD=OK3568
#OUTPUT_DIR=output/OK3568
#CONFIG=OK3568_defconfig

===========================================
Found old config, override it? (y/n):y    	//Select y
2024-08-12T14:59:10 >>> nginx 1.12.2 Downloading
2024-08-12T14:59:23 >>> nginx 1.12.2 Extracting
2024-08-12T14:59:23 >>> nginx 1.12.2 Patching
2024-08-12T14:59:23 >>> nginx 1.12.2 Configuring
2024-08-12T14:59:29 >>> nginx 1.12.2 Building
```

Possible errors:

```plain
2024-08-12T15:12:52 rsync -a --ignore-times --exclude .svn --exclude .git --exclude .hg --exclude .bzr --exclude CVS --chmod=u=rwX,go=rX --exclude .empty --exclude '*~' package/skeleton-init-sysv//skeleton/ /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/OK3568/target/
2024-08-12T15:12:52 cannot delete non-empty directory: var/log
2024-08-12T15:12:52 could not make way for new symlink: var/log
2024-08-12T15:12:52 rsync error: some files/attrs were not transferred (see previous errors) (code 23) at main.c(1196) [sender=3.1.2]
2024-08-12T15:12:52 package/pkg-generic.mk:310: recipe for target '/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/OK3568/build/skeleton-init-sysv/.stamp_target_installed' failed
2024-08-12T15:12:52 make[1]: *** [/home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/OK3568/build/skeleton-init-sysv/.stamp_target_installed] Error 23
2024-08-12T15:12:52 /home/forlinx/3568.4.19/OK3568-linux-source/buildroot/output/OK3568/Makefile:16: recipe for target '_all' failed
2024-08-12T15:12:52 make: *** [_all] Error 2
Command exited with non-zero status 1
you take 8:30.06 to build builroot
ERROR: Running build_buildroot failed!
ERROR: exit code 1 from line 565:
    /usr/bin/time -f "you take %E to build builroot" $COMMON_DIR/mk-buildroot.sh $BOARD_CONFIG
```

Delete buildroot/output/OK3568/target

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source$ rm  -rf buildroot/output/OK3568/target
```

And then execute again.

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source$ ./build.sh  buildroot
```

Flash the generated rootfs.ext2 into the development board in a single step.

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source$ cd buildroot/output/OK3568/images/
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source/buildroot/output/OK3568/images$ ls
rootfs.cpio  rootfs.cpio.gz  rootfs.ext2  rootfs.ext4  rootfs.squashfs  rootfs.tar
```