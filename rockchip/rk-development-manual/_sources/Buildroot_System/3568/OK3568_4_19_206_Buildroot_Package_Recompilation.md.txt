# OK3568 4.19.206 Buildroot Package Recompilation

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Recompilation

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