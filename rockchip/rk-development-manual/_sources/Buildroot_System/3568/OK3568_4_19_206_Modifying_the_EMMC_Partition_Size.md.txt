# OK3568 4.19.206 Modifying the EMMC Partition Size

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Modifying the EMMC Partition Size

Edit the /OK3568-linux-source/device/rockchip/ok3568/parameter-buildroot-fit.txt file.

FIRMWARE\_VER: 1.0

MACHINE\_MODEL: RK3568

MACHINE\_ID: 007

MANUFACTURER: RK3568

MAGIC: 0x5041524B

ATAG: 0x00200800

MACHINE: 0xffffffff

CHECK\_MASK: 0x80

PWR\_HLD: 0,0,A,0,1

TYPE: GPT

CMDLINE:

mtdparts=rk29xxnand:0x00002000@0x00004000(uboot),0x00002000@0x00006000(misc),0x00010000@0x00008000(boot),0x00010000@0x00018000(recovery),0x00010000@0x00028000(backup),0x00c00000@0x00038000(rootfs),0x00040000@0x00c38000(oem),-@0x00c78000(userdata:grow)

uuid:rootfs=614e0000-0000-4b53-8000-1d28000054a9

The rootfs partition is the root partition, where the value before “@” indicates the partition size, and the value after “@” indicates the starting address. Note: The starting address of the userdata partition is the starting address of rootfs plus the size of the rootfs partition.

Each block corresponds to 512 bytes.

Example for uboot:

0x00002000 \*512byte = 8192 \* 512byte = 4,194,304byte

4,194,304÷1024 = 4096KB

4096÷1024=4MB

Thus, the size allocated for uboot is 4 MB.