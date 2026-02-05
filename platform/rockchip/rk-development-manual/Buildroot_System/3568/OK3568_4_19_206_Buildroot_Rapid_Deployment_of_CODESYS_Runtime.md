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

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750993042523-657b32ff-dd34-432d-83ff-47e8491f2fbf.png)

    CODESYS Development System -> tools -> Package manager to install
    
    Note: codesys runtime can only run for 2 hours without a license.

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992320827-b2d203cc-bf24-4df9-bc78-7564cea3f1b7.png)

If an error is reported during installation:

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992336656-aa11f66a-8626-4180-b3b0-8157a37f86ba.png)

Search the relevant package in the search bar to install it.

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992352849-d4dbe142-af1d-4271-ab71-dac884b70cb4.png)

After installing the CODE SYS Control for Linux ARM64 SL 4.1.0.0.package.

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750993042523-657b32ff-dd34-432d-83ff-47e8491f2fbf.png?x-oss-process=image%2Fformat%2Cwebp)

CODESYS Development System-> Tools-> Update Linux ARM64 for RK3568 configuration 
The network cable connects the PC and RK3568 to ensure that they are in the same network segment and can be pinged. 
Fill in the SSH account, password and IP address, and click Install 

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750993523500-24c36d2b-baed-4211-8d6b-dc7380e7b925.png)

Installation complete, check if RK3568 is running codesys

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992382532-92697225-f574-444e-829d-f580b28d3780.png)

PC build engineering, functional verification.

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992395187-a2c9976a-8839-433a-9d04-4f244583749d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992405119-163e4589-3e92-40a1-854a-5c4fd3e9ea63.png)

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992413977-335bfd93-a6d6-4f77-9cdf-e79914d284b7.png)

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992421853-7cf6b748-091a-4a5b-9512-90a324316f2d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992430165-8078816e-bb44-4186-b396-8b02423dc46d.png)

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992442479-595da924-ba77-49f4-a8bd-6ab5ba750574.png)

Click Online- > Login, configure the user name and password, and click OK

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992452985-1382f18c-20e5-438d-a86a-8f56bef3873a.png)

Click Debug, Start and Stop.

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992461407-8aefbdfe-5399-4800-ba2e-beb2a9579fa1.png)

Click Online- > Exit to finish debugging

![](https://cdn.nlark.com/yuque/0/2025/png/40395721/1750992469433-e7b4a719-5d24-4e82-be62-bbb04742be95.png)