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

![Image](./images/OK3568_4_19_206_Python3_Installation/1723443799373_9df69321_e520_48c8_9365_5b1c0938fec5.png)

<font style="color:rgb(0,0,0);">Provide dynamic libraries: -->Build options</font>

![Image](./images/OK3568_4_19_206_Python3_Installation/1723443860302_0021a157_7c17_4acb_8a6d_4d30fce7760e.png)

Enable python support: Target packages --> Interpreter languages and scripting

![Image](./images/OK3568_4_19_206_Python3_Installation/1723443992297_71b9abb0_0498_4b09_9ba7_34abc5a322b1.png)

Python3 module format to install options.

![Image](./images/OK3568_4_19_206_Python3_Installation/1723444254315_8e8c8b98_a05e_4d45_b495_1ae4953d8bd7.png)

2\. core python3 modules are Python libraries, which can be added as needed.

![Image](./images/OK3568_4_19_206_Python3_Installation/1723444392554_079d1200_0af2_4c31_9085_02dc4d07d375.png)

External python3 modules are external libraries, which can also be added as needed.

![Image](./images/OK3568_4_19_206_Python3_Installation/1723444410258_ceed9033_736d_4ca8_b96c_85efeac3f158.png)

Then re - compile the file system and perform single - step flashing.

**Note: When configuring Python library support again after compiling and generating the file system, sometimes the added libraries may not take effect. In this case, you can choose to execute the command to regenerate the packages.**