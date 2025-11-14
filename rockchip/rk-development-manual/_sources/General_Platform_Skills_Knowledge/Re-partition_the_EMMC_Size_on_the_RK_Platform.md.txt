# Re-partition the EMMC Size on the RK Platform

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

Introduction to the method for modifying the size of EMMC partition on the RK platform.

## Revision History

| **Date**   | **Manual Version** | **Revision History** |
| ---------- | ------------------ | -------------------- |
| 07/02/2025 | V1.0               | Initial Version      |

## Re-partition the EMMC Size on the RK Platform

On the RK platform, the EMMC partitions are divided through the parameter.txt file, which takes effect when creating the update.img.

You can see:

```shell
FIRMWARE_VER: 1.0
MACHINE_MODEL: RK3568
MACHINE_ID: 007
MANUFACTURER: RK3568
MAGIC: 0x5041524B
ATAG: 0x00200800
MACHINE: 0xffffffff
CHECK_MASK: 0x80
PWR_HLD: 0,0,A,0,1
TYPE: GPT
CMDLINE: mtdparts=rk29xxnand:0x00002000@0x00004000(uboot),0x00002000@0x00006000(misc),0x00010000@0x00008000(boot),0x00010000@0x00018000(recovery),0x00010000@0x00028000(backup),0x00c00000@0x00038000(rootfs),0x00040000@0x00c38000(oem),-@0x00c78000(userdata:grow)
uuid:rootfs=614e0000-0000-4b53-8000-1d28000054a9
```

The partition information of 3568linux is as above.

**Note:**

- **The format is: partition size + @ + starting address;**
- **When modifying the partition size, you must pay attention. If you modify a certain partition, you need to correspondingly modify the starting address of the next partition, and so on;**

- **The starting address of the next partition is the starting address of the previous partition plus the partition size.**

The rootfs partition is the root partition. The value after @ is the starting address, and the value before @ is the partition size. Note that the starting address of the userdate partition is the starting address of the oem partition plus the partition size.

Each partition is 512 bytes.

Uboot e.g:

0x00002000 \*512byte = 8192 \* 512byte = 4,194,304byte

4,194,304÷1024 = 4096KB

4096÷1024=4MB

So the size set for uboot is 4M.