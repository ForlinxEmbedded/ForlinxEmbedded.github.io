# OK3568 4.19.206 Buildroot Controlling GPIO Pins via Sysfs in C Language

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Controlling GPIO Pins via Sysfs in C Language

1\. Write GPIO control program, reference source files can be found in the folder:

gpiotest-read(gpio3\_a5)

gpiotest-write(gpio3\_b0)

2\. Import environment variables (set the red font part according to the specific path):

export PATH=$PATH:<font style="color:#FF0000;">/home/forlinx/ubuntu-/</font>OK3568-linux-source/prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86\_64\_aarch64-linux-gnu/bin

3\. Compile the gpiotest-write.c file

aarch64-linux-gnu-gcc -o gpiotest gpiotest-write.c

4\. Copy the gpiotest executable file to the development board to run

5\. You can see that the green LED lights are on and off at intervals of 1 second.