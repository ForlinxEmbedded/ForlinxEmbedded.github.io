## OK3568 4.19.206 Buildroot Qt-creator Remote Debug

## Copyright                                                                                                    

Document classification: □ Top secret □ Secret □ Internal information ■ Open

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 15/09/2023| V1.0| Initial Version|

## Qt-creator Remote Debug

**Note: Set the virtual machine IP address and the development board IP address in the same network segment.**

**Virtual machine IP: 172.16.0.174**

**Development board IP: 172.16.0.169**

Install debugging software in Ubuntu virtual machine.

```c
sudo apt-get install gdb-multiarch
```

Modify the source code file.

/OK3568-linux-source/buildroot/output/OK3568/host/mkspecs/devices/linux-buildroot-g++/qmake.conf

Just comment out the variables as follows:

#QMAKE\_CFLAGS\_OPTIMIZE       =

#QMAKE\_CFLAGS\_OPTIMIZE\_DEBUG =

#QMAKE\_CFLAGS\_OPTIMIZE\_FULL  =

#QMAKE\_CFLAGS\_OPTIMIZE\_SIZE  =

#QMAKE\_CFLAGS\_DEBUG =

#QMAKE\_CXXFLAGS\_DEBUG =

#QMAKE\_CFLAGS\_RELEASE =

#QMAKE\_CXXFLAGS\_RELEASE =

Set development board ssh password.

Passwd: root

Enter the password "root" twice.

Add qmake.

Tools->options->Kits->Compilers->Add（<font style="color:#FF0000;">The red path is configured according to the customer path</font>）

<font style="color:#FF0000;">/home/forlinx/linux-3568</font>/OK3568-linux-source/buildroot/output/OK3568/host/bin/qmake

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647256993_649e500e_ac2b_4820_9d7d_b2cd35d35359.png)

Add gcc.

Tools->options->Kits->Compilers->Add（<font style="color:#FF0000;">The red path is configured according to the customer path</font>）

<font style="color:#FF0000;">/home/forlinx/linux-3568/</font>OK3568-linux-source/buildroot/output/OK3568/host/bin/aarch64-linux-gcc

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647257185_a5fb4c99_9e70_42ee_8db9_29400ee08da0.png)

Add g++.

Tools->options->Kits->Compilers->Add（<font style="color:#FF0000;">The red path is configured according to the customer path</font>）

<font style="color:#FF0000;">/home/forlinx/linux-3568</font>/OK3568-linux-source/buildroot/output/OK3568/host/bin/aarch64-linux-g++

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647257423_dd3a0b70_132d_4b5b_9479_7d5d06c8b7a5.png)

Add the gdb tool.

Tools->options->Kits->Debuggers->Add

Name: 3568

Path:/usr/bin/gdb-multiarch

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647257668_95a67ee5_c2f9_42be_b723_34d336898a38.png)

Configure devices.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647257890_bcc9b8ce_9547_4576_b72e_81fab1eaf72e.png)

Configure complete test. 

<font style="color:#FF0000;">Note: To configure the development board and the computer virtual machine to be on the same network segment.</font>

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647258191_2418fe9d_b7d9_46c9_9456_086a4e7dfcc9.png)

Host name: Development board IP address

SSH port：22

Username：root

Password：root

Then click “Test” to test the ssh communication.

The diagram indicates a successful connection.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647258450_a7049f8c_801f_420a_8fb3_cfb6ef71f821.png)

Configure the Kit Suite.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647258672_b566fb09_ded3_4b21_b5f4_6e0eb196af9a.png)

Select the previously configured Kit Suite 3568 for the project code.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647258910_e1874225_8590_4024_9073_9a495f9e9d98.png)

Specify the installation directory for the program on the development board: target.path = /home/forlinx

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647259224_d906f9b0_283a_448b_b159_d7649766a61e.png)

After configuration, the executable files can run on the development board.

Click the Run button:

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647259407_cce2244c_6a64_45b6_90f8_098bd4fc9847.png)

The development board displays the following:

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647259597_42bb542e_aba1_429c_bf5d_02691d3a2995.jpeg)

To enable remote debugging of the development board application, proceed with the following settings:

Remote Debugging the Application.

Close the application that was just launched on the development board.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647259830_32a54fe6_716e_4b4f_ab28_74d27f60613c.png)

Enter the following command on the development board to enter listening mode:

\[root@ok3568:/home/forlinx]# <font style="color:#FF0000;">gdbserver 172.16.0.169:2345 ./fltest\_qt\_backlight</font>

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647260100_c28372bb_2475_4736_90a7_c27b9a36aa56.png)

On the virtual machine:

Debug->Start Debugging->Attach to Running Debug Server...

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647260430_bb000f6a_1277_4189_bec7_88c663cd96c5.png)

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647260656_922ed5c3_56c6_44ce_b386_3bacb7d98c5e.png)

Connect to the development board service to enter debug mode.

Breakpoint Debugging Example:

Set a breakpoint in the application, then click the Step Over button repeatedly.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647260907_f4cac003_4926_4e6e_bc55_b5f2cce16e2e.png)

The development board will output breakpoint debugging information.

![Image](./images/OK3568_4_19_206_Buildroot_Qt-creator_Remote_Debug/1719647261082_07d3b0e1_6d05_422e_90b4_6a4043aa08e1.png)