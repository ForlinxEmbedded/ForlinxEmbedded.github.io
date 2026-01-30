# **OK3568 4.19.206 Buildroot Adding the Python3 - pip Installation Package**

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## **Revision History**

| Date| Version| Revision History|
|----------|----------|----------|
| 01/23/2025| V1.0| Initial Version|

## Adding the Python3 - pip Installation Package

This manual describes how to add python3-pip to a buildroot system.

**Modification Method**

Modify Configuration File: buildroot/package/Config.in

Add pyhon-pip/Config.in

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801896310-9d681580-8ab7-4f7e-8d33-d85260ce4476.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

Unzip the python-pip archive of the attachment in the buildroot/package directory

[python-pip-20240425100624-9049ncj.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2025/zip/45781369/1740040907638-bb858a66-a173-4ff0-9a89-88bb781e398e.zip)

Modify the defconfig file used by buildroot

Execute make menuconfig in the buildroot/output/OK3568 directory to select python3 and python-pip

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801917602-f974ac74-f69e-4c4c-9d77-4a1b6dfeb61e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801931211-8aadbae1-b2dc-4143-b004-25bd57dc57c3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_13%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

After modification, save the modified.config file to buildroot/configs/OK3568 \_ defconfig 

After saving, you can compile the whole package. When compiling, you can see that the download, compilation and installation of pip related packages are successful.

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801945283-1b2f492c-5d86-475e-b2cc-20e660d2c171.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_19%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

Flash the compiled file system to the development board to use the pip command.

Potential Compilation Errors

Error During Compilation:

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801963536-42a24321-8ed5-4a80-b8af-418870a4b1d5.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp%2Fresize%2Cw_570%2Climit_0)

Solution:   
Solution: Re-link the symbolic link for OK3568-linux-source/buildroot/output/OK3568/host/bin/python to point to python3.

```plain
cd buildroot/output/OK3568/host/bin
rm python
ln -s python3 python
```

After re-establishing the link, recompile. After successful linking, the result of ls -l python should be as shown.

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718801989420-f97195fd-7409-4f66-9417-c66638a51853.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_22%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

SSL Error when running pip install on the board after flashing:

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718802005736-e3095524-12a8-4060-81e1-0bf7f86f4203.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_26%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp%2Fresize%2Cw_928%2Climit_0)

Solution:   
Delete the Python-related files in the OK3568-linux-source/buildroot/output/OK3568/build/ directory and recompile. Installing pip depends on SSL. If a full compilation was previously completed during the first issue, it was done using python2 for SSL compilation.

```plain
rm buildroot/output/OK3568/build/python-* -rf
./build.sh buildroot
```

Once the compilation is complete, flash the new build to the board and verify its functionality. You can then proceed to test by installing opencv-python.

![](https://cdn.nlark.com/yuque/0/2024/png/45387297/1718802052811-d0d9a5ff-53dd-4948-b524-2d0b8f6816e3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_Rk9STElOWA%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10%2Fformat%2Cwebp)

If you encounter an error about the pip package download failing, place the specified package files into the buildroot/dl/ directory.

[pip-21.2.4.tar.gz](https://forlinx-book.yuque.com/attachments/yuque/0/2025/gz/45781369/1740042129652-e1e53ba6-ee55-4a94-979e-aa86e40b5927.gz)