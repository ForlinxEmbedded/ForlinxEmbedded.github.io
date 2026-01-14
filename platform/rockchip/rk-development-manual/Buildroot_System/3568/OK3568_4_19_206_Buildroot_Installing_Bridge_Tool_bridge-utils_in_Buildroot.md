# OK3568 4.19.206 Buildroot Installing Bridge Tool (bridge-utils) in Buildroot

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| Version | Revision History |
|:----------:|:----------:|----------|
| 04/08/2022 | V1.0| Initial Version|

## Installing Bridge Tool (bridge-utils) in Buildroot

Navigate to the /OK3568-linux-source/buildroot/output/OK3568 directory and execute the make menuconfig command.

Press the / key to open the search box. Enter the keyword bridge\_utils, select OK, and press Enter.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646566217_8f94987c_bb3c_41f2_a013_d09ec9da385e.png)

Once the result appears, press 1 to jump to the configuration page.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646566412_4f487359_c3ac_4108_964d_aa15a1a52a0a.png)

Select bridge-utils by marking it with y.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646566614_d13d7878_0f15_4825_9f3a_fcd0a1dd9523.png)

Continuously select Exit until you leave the graphical configuration interface. When prompted to save the configuration upon exiting, choose yes.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646566810_072376c2_e3c1_4a3d_8e27_ef5e20809c5a.png)

Switch to the /OK3568-linux-source directory and execute the ./build.sh buildroot command.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646567066_92d5ff69_f344_47c6_80ad_5e12c1e66465.png)

You will be prompted that a .config file already exists and asked if you want to regenerate it. Enter n (no); otherwise, your previous configuration will be overwritten.

After compilation completes, a rootfs.ext2 file will be generated in the OK3568-linux-source/buildroot/output/OK3568/images directory. Flash this file individually to the development board.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646567336_6b9c3abb_a5ef_4015_941e_7bf570ed4d57.png)

If the above steps result in an error, your kernel might have been compiled with CONFIG\_BRIDGE = n)

Kernel Support for Bridge

Added at the end of the/OK3568-linux-source/kernel/arch/arm64/configs/OK3568-C- Linux \_ defconfig.

CONFIG \_ BRIDGE = y save file

Switch to the /OK3568-linux-source directory and execute the ./build.sh kernel command.

This will generate a boot.img file in the /OK3568-linux-source/kernel/ directory. Flash the boot.img file individually to the development board. After this, the brctl command should function normally.

Configuring the Network Bridge

Set the IP addresses for eth0 and eth1 by editing the file /etc/network/interfaces (e.g., using vi).

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646567519_5f5c27b9_ee09_4fe8_9e51_53ae46b44c2f.png)

Create the self-start script vi/etc/init. d/S99 bridge.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646567799_4318d1e0_c49e_4209_a498_a17d28840573.png)

Test tcp and udp communication.

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646568081_2d371229_4ef2_4108_bb3e_924040438655.png)

![Image](./images/OK3568_4_19_206_Buildroot_Installing_Bridge_Tool_bridge-utils_in_Buildroot/1719646568323_f373194b_7adc_4f22_9b20_831edbaca212.png)