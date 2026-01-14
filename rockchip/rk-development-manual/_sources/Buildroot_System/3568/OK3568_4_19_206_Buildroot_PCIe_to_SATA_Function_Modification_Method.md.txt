# OK3568 4.19.206 Buildroot PCIe to SATA Function Modification Method

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022 | V1.0| Initial Version|

## Method to Modify PCIe to SATA Function

### Hardware Requirements

FIT-PCIE-SATA V1.0 adapter board (converts PCIe 2.0 interface to dual SATA 2.0 ports)

![Image](./images/OK3568_4_19_206_Buildroot_PCIe_to_SATA_Function_Modification_Method/1719647161368_b8033fb6_0f7c_4f04_88b0_8841bc918546.jpeg)

### Software Configuration

**Modify Device Tree**

**OK3568-linux-source/kernel/arch/arm64/boot/dts/rockchip/OK3568-C-common.dtsi**

**Note: Red text indicates fields to be modified or manually added**

Turn off pcie 2.0 function and add SATA function description

\&pcie2x1 {

    reset-gpios = <&gpio0 RK_PB6 GPIO_ACTIVE_HIGH>;
    
    vpcie3v3-supply = <&vcc3v3_sys>;
    
    status = "<font style="color:#FF0000;">disabled</font>";

};

<font style="color:#FF0000;">\&sata2 {</font>

<font style="color:#FF0000;">	status = "okay";</font>

<font style="color:#FF0000;">	assigned-clock-rates = \<24000000>;</font>

<font style="color:#FF0000;">};</font>

Modify the default configuration file**

**/OK3568-linux-source/kernel/arch/arm64/configs/OK3568-C-linux\_defconfig**

**Add the followings:**

<font style="color:#FF0000;">CONFIG\_ATA=y </font>

<font style="color:#FF0000;">CONFIG\_SATA\_AHCI=y </font>

<font style="color:#FF0000;">CONFIG\_SATA\_AHCI\_PLATFORM=y </font>

<font style="color:#FF0000;">CONFIG\_PHY\_ROCKCHIP\_NANENG\_COMBO\_PHY=y</font>

**Execute the./build. sh kernel in the/OK3568-linux-source directory.**

Separately flash /OK3568-linux-source/kernel/boot.img

## Test

Write data:

![Image](./images/OK3568_4_19_206_Buildroot_PCIe_to_SATA_Function_Modification_Method/1719647161624_9c4aaf9e_f83d_401a_ae2a_c7d5408982e2.png)

Read data:

![Image](./images/OK3568_4_19_206_Buildroot_PCIe_to_SATA_Function_Modification_Method/1719647161810_f48384dd_bf03_46db_8468_949c156fa825.png)