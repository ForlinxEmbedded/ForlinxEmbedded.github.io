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

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801896310_9d681580_8ab7_4f7e_8d33_d85260ce4476.png)

Unzip the python-pip archive of the attachment in the buildroot/package directory

[python-pip-20240425100624-9049ncj.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2025/zip/45781369/1740040907638-bb858a66-a173-4ff0-9a89-88bb781e398e.zip)

Modify the defconfig file used by buildroot

Execute make menuconfig in the buildroot/output/OK3568 directory to select python3 and python-pip

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801917602_f974ac74_f69e_4c4c_9d77_4a1b6dfeb61e.png)

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801931211_8aadbae1_b2dc_4143_b004_25bd57dc57c3.png)

After modification, save the modified.config file to buildroot/configs/OK3568 \_ defconfig 

After saving, you can compile the whole package. When compiling, you can see that the download, compilation and installation of pip related packages are successful.

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801945283_1b2f492c_5d86_475e_b2cc_20e660d2c171.png)

Flash the compiled file system to the development board to use the pip command.

Potential Compilation Errors

Error During Compilation:

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801963536_42a24321_8ed5_4a80_b8af_418870a4b1d5.png)

Solution:   
Solution: Re-link the symbolic link for OK3568-linux-source/buildroot/output/OK3568/host/bin/python to point to python3.

```plain
cd buildroot/output/OK3568/host/bin
rm python
ln -s python3 python
```

After re-establishing the link, recompile. After successful linking, the result of ls -l python should be as shown.

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718801989420_f97195fd_7409_4f66_9417_c66638a51853.png)

SSL Error when running pip install on the board after flashing:

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718802005736_e3095524_12a8_4060_81e1_0bf7f86f4203.png)

Solution:   
Delete the Python-related files in the OK3568-linux-source/buildroot/output/OK3568/build/ directory and recompile. Installing pip depends on SSL. If a full compilation was previously completed during the first issue, it was done using python2 for SSL compilation.

```plain
rm buildroot/output/OK3568/build/python-* -rf
./build.sh buildroot
```

Once the compilation is complete, flash the new build to the board and verify its functionality. You can then proceed to test by installing opencv-python.

![Image](./images/OK3568_4_19_206_Buildroot_Adding_the_Python3_pip_Installation_Package/1718802052811_d0d9a5ff_53dd_4948_b524_2d0b8f6816e3.png)

If you encounter an error about the pip package download failing, place the specified package files into the buildroot/dl/ directory.

[pip-21.2.4.tar.gz](https://forlinx-book.yuque.com/attachments/yuque/0/2025/gz/45781369/1740042129652-e1e53ba6-ee55-4a94-979e-aa86e40b5927.gz)