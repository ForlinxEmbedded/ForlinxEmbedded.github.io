# OK3568 4.19.206 Compatibility Method for 32-bit Applications

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Compatibility Method for 32-bit Applications

The 3568 is a 64-bit processor, and the cross-compiler provided is also 64-bit. Therefore, if you intend to compile 32-bit applications, you must already have your own cross-compilation toolchains. 

    gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf

Taking cross-compilation tools as an example, this describes how to use a 32-bit cross-compiler to compile 32-bit applications for running on the 3568 platform.

The 3568 kernel, as shipped by default, already supports EL0, so no additional kernel configuration is required.

Currently, the only missing component is the 32-bit runtime library. Follow these steps to set it up:

    Package the lib directory under the libc directory in the cross-compilation tool chain
    
    	gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf/arm-linux-gnueabihf/libc

Manually create a /lib32 folder in the root directory of the development board.

```plain
cp ./* /lib32/ -rf					//Place the packaged library file in the development board root directory/lib32 as the runtime library.
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/lib32 //Add an environment variable to add lib32 to the lookup path	
ln -s /lib32/ld-linux-armhf.so.3 /lib 						//Create a soft connection
```

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646087203-a31d8858-e0e4-4049-9291-7628e9643ec8.png)

Use ld-linux- armhf. so. 3 --list as the ldd command to detect the library files required by test. It is found that all the library files exist. Execute the test executable file successfully.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646087367-2184fde5-7862-42a2-a607-196124d3202a.png)

In the development environment, check that the test is 32-bit ELF

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646087556-8232b693-551a-4c4b-a487-5ca96edc3fa5.png)



**Note: The glibc version used in the cross-compilation tool chain found by yourself must meet the glibc version required by the application, otherwise it cannot run normally.**

Tip: You can also manually specify the location of libraries in/lib/ld-linux-armhf. So. 3 --library-path/lib32 --list/home/forlinx/test.