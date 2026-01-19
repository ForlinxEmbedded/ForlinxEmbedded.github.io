# OK3568 4.19.206 Memory View and Capacity Storage

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Memory View and Capacity Storage

Check the storage capacity of the development board.

```plain
[master@ok3568:/]# df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       5.9G  724M  4.9G  13% /
devtmpfs        978M     0  978M   0% /dev
tmpfs           986M     0  986M   0% /dev/shm
tmpfs           986M  592K  986M   1% /tmp
tmpfs           986M  280K  986M   1% /run
/dev/mmcblk0p7  126M   13M  107M  11% /oem
/dev/mmcblk0p8  8.4G  501M  7.6G   7% /userdata
```

Since memory and eMMC manufacturers use the conversion rate of 1000KB = 1M, the actual memory capacity will be less than the labeled capacity.

The mounted file systems are /dev/root, /dev/mmcblk0p7, and /dev/mmcblk0p8, and the total capacity is equal to 5.9G + 126M + 8.4G = 14.5G.

Check the memory capacity.

```plain
[master@ok3568:/]# free -h
              total        used        free      shared  buff/cache   available
Mem:           1.9G        119M        1.6G         15M        180M        1.8G
```

total=1.9G