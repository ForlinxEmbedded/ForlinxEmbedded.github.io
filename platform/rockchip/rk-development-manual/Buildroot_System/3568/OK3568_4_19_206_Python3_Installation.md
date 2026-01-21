# OK3568 4.19.206 Python3 Installation

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|----------|----------|----------|
| 01/23/2025| V1.0| Initial Version |

## Python3 Installation

<font style="color:rgb(0,0,0);">Execute the make menuconfig command under the path OK3568-linux-source/buildroot/output/OK3568/.</font>

```plain
forlinx@ubuntu18:~/3568.4.19/OK3568-linux-source/buildroot/output/OK3568$ make menuconfig
```

<font style="color:rgb(0,0,0);">Turn on support for wide characters:Target packages-->Libraries-->Text and terminal-->handing-->ncurses</font>

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723443799373-9df69321-e520-48c8-9365-5b1c0938fec5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp%2Fresize%2Cw_554%2Climit_0)

<font style="color:rgb(0,0,0);">Provide dynamic libraries: -->Build options</font>

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723443860302-0021a157-7c17-4acb-8a6d-4d30fce7760e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp%2Fresize%2Cw_554%2Climit_0)

Enable python support: Target packages --> Interpreter languages and scripting

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723443992297-71b9abb0-0498-4b09-9ba7-34abc5a322b1.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp%2Fresize%2Cw_554%2Climit_0)

Python3 module format to install options.

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723444254315-8e8c8b98-a05e-4d45-b495-1ae4953d8bd7.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_32%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

2\. core python3 modules are Python libraries, which can be added as needed.

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723444392554-079d1200-0af2-4c31-9085-02dc4d07d375.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_32%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

External python3 modules are external libraries, which can also be added as needed.

![](https://cdn.nlark.com/yuque/0/2024/png/46863139/1723444410258-ceed9033-736d-4ca8-b96c-85efeac3f158.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_32%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

Then re - compile the file system and perform single - step flashing.

**Note: When configuring Python library support again after compiling and generating the file system, sometimes the added libraries may not take effect. In this case, you can choose to execute the command to regenerate the packages.**