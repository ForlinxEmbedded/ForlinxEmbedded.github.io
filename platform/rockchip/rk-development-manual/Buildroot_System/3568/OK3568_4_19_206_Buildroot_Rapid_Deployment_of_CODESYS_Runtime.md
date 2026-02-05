# OK3568 4.19.206 Buildroot Rapid Deployment of CODESYS Runtime

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 06/27/2025| V1.0| Initial Version|

## Rapid Deployment of CODESYS Runtime

Preparation

    PC-win10 system
    
    RK3568-debian system, the kernel has been patched in real time to enable the SSH service.

Download and install on PC: CODESYS Development System V3.5.17.0

    [https://store.codesys.com/en/codesys.html#product.attributes.wrapper](https://store.codesys.com/en/codesys.html#product.attributes.wrapper)

Download and install on PC: CODESYS Control for Linux ARM64 SL 4.1.0.0.package

    [https://store.codesys.com/en/codesys-control-for-linux-arm-sl-1.html](https://store.codesys.com/en/codesys-control-for-linux-arm-sl-1.html)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750993042523_657b32ff_dd34_432d_83ff_47e8491f2fbf.png)

    CODESYS Development System -> tools -> Package manager to install
    
    Note: codesys runtime can only run for 2 hours without a license.

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992320827_b2d203cc_bf24_4df9_bc78_7564cea3f1b7.png)

If an error is reported during installation:

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992336656_aa11f66a_8626_4180_b3b0_8157a37f86ba.png)

Search the relevant package in the search bar to install it.

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992352849_d4dbe142_af1d_4271_ab71_dac884b70cb4.png)

After installing the CODE SYS Control for Linux ARM64 SL 4.1.0.0.package.

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750993042523_657b32ff_dd34_432d_83ff_47e8491f2fbf.png)

CODESYS Development System-> Tools-> Update Linux ARM64 for RK3568 configuration 
The network cable connects the PC and RK3568 to ensure that they are in the same network segment and can be pinged. 
Fill in the SSH account, password and IP address, and click Install 

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750993523500_24c36d2b_baed_4211_8d6b_dc7380e7b925.png)

Installation complete, check if RK3568 is running codesys

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992382532_92697225_f574_444e_829d_f580b28d3780.png)

PC build engineering, functional verification.

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992395187_a2c9976a_8839_433a_9d04_4f244583749d.png)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992405119_163e4589_3e92_40a1_854a_5c4fd3e9ea63.png)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992413977_335bfd93_a6d6_4f77_9cdf_e79914d284b7.png)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992421853_7cf6b748_091a_4a5b_9512_90a324316f2d.png)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992430165_8078816e_bb44_4186_b396_8b02423dc46d.png)

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992442479_595da924_ba77_49f4_a8bd_6ab5ba750574.png)

Click Online- > Login, configure the user name and password, and click OK

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992452985_1382f18c_20e5_438d_a86a_8f56bef3873a.png)

Click Debug, Start and Stop.

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992461407_8aefbdfe_5399_4800_ba2e_beb2a9579fa1.png)

Click Online- > Exit to finish debugging

![Image](./images/OK3568_4_19_206_Buildroot_Rapid_Deployment_of_CODESYS_Runtime/1750992469433_e7b4a719_5d24_4e82_be62_bbb04742be95.png)