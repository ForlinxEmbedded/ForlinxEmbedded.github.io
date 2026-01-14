# OK3568 4.19.206 Buildroot Debugging with GDB and GDB Server

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date|Version|Revision History|
|:----------:|:----------:|----------|
| 15/09/2023 | V1.0| Initial Version|

## Debugging with GDB and GDB Server

GDB Path in Ubuntu Virtual Machine:

forlinx@ubuntu:~/ok3568/OK3568-linux-source/prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86\_64\_aarch64-linux-gnu/bin$

Set Up Environment Variables:

(Modify the path according to your actual environment)

After configuring the environment variables, you can directly invoke the cross-compilation toolchain from the command line.

```c
export 	PATH=$PATH:/home/forlinx/ok3568/OK3568-linux-source/prebuilts/gcc/linux-x86/aarch64/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin
```

1\. Set the board IP and port number;

![Image](./images/OK3568_4_19_206_Buildroot_Debugging_with_GDB_and_GDB_Server/1719647266927_284d29e6_1d83_4014_8c57_35a1202b8c98.png)

2\. Set the IP address of the virtual machine to ensure that the development board IP can be pinged.

Use the network cable to connect the development board and the computer, and set the development board, the computer and the virtual machine in the same network segment;

3\. Compile the application in the development environment;

```c
aarch64-linux-gnu-gcc -g gpiotest.c -o gpiotest
```

4\. Copy to the development board;

![Image](./images/OK3568_4_19_206_Buildroot_Debugging_with_GDB_and_GDB_Server/1719647267133_2a7a7827_19c5_4c4a_92a9_5e3188f26a03.png)

Copy the gpiotest executable file to the development board and execute the following command:

```c
gdbserver 172.16.0.169:2345 gpiotest
```

Where 172.16.0.169 is the IP address of the board and the port number is 2345.

5\. Debug.

Change to the gpiotest executable directory:

Execute the following command:

```c
arch64-linux-gnu-gdb ./gpiotest
target remote 172.16.0.169:2345
```

At this point, you can debug according to your needs. Here are some common commands.

(1) l (list): List): List all source code

(2) b (breakpoint): Set a breakpoint

(3) c (continue): Continue execution until the next breakpoint

(4) s: Single step execution

(5) n: Single step execution, but step will enter the function, but next will not

(6) p a: Print the value of the variable a

(7) Q: Exit. Enter this command to exit gdbserver on the development board.

![Image](./images/OK3568_4_19_206_Buildroot_Debugging_with_GDB_and_GDB_Server/1719647267357_1f3f469f_0d05_4f19_8b2c_b491ac4ff249.png)