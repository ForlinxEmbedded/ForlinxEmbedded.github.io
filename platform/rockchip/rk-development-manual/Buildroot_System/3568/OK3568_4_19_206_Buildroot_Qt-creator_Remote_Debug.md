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

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647256993-649e500e-ac2b-4820-9d7d-b2cd35d35359.png)

Add gcc.

Tools->options->Kits->Compilers->Add（<font style="color:#FF0000;">The red path is configured according to the customer path</font>）

<font style="color:#FF0000;">/home/forlinx/linux-3568/</font>OK3568-linux-source/buildroot/output/OK3568/host/bin/aarch64-linux-gcc

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647257185-a5fb4c99-9e70-42ee-8db9-29400ee08da0.png)

Add g++.

Tools->options->Kits->Compilers->Add（<font style="color:#FF0000;">The red path is configured according to the customer path</font>）

<font style="color:#FF0000;">/home/forlinx/linux-3568</font>/OK3568-linux-source/buildroot/output/OK3568/host/bin/aarch64-linux-g++

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647257423-dd3a0b70-132d-4b5b-9479-7d5d06c8b7a5.png)

Add the gdb tool.

Tools->options->Kits->Debuggers->Add

Name: 3568

Path:/usr/bin/gdb-multiarch

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647257668-95a67ee5-c2f9-42be-b723-34d336898a38.png)

Configure devices.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647257890-bcc9b8ce-9547-4576-b72e-81fab1eaf72e.png)

Configure complete test. 

<font style="color:#FF0000;">Note: To configure the development board and the computer virtual machine to be on the same network segment.</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647258191-2418fe9d-b7d9-46c9-9456-086a4e7dfcc9.png)

Host name: Development board IP address

SSH port：22

Username：root

Password：root

Then click “Test” to test the ssh communication.

The diagram indicates a successful connection.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647258450-a7049f8c-801f-420a-8fb3-cfb6ef71f821.png)

Configure the Kit Suite.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647258672-b566fb09-ded3-4b21-b5f4-6e0eb196af9a.png)

Select the previously configured Kit Suite 3568 for the project code.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647258910-e1874225-8590-4024-9073-9a495f9e9d98.png)

Specify the installation directory for the program on the development board: target.path = /home/forlinx

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647259224-d906f9b0-283a-448b-b159-d7649766a61e.png)

After configuration, the executable files can run on the development board.

Click the Run button:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647259407-cce2244c-6a64-45b6-90f8-098bd4fc9847.png)

The development board displays the following:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/45781369/1719647259597-42bb542e-aba1-429c-bf5d-02691d3a2995.jpeg)

To enable remote debugging of the development board application, proceed with the following settings:

Remote Debugging the Application.

Close the application that was just launched on the development board.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647259830-32a54fe6-716e-4b4f-ab28-74d27f60613c.png)

Enter the following command on the development board to enter listening mode:

\[root@ok3568:/home/forlinx]# <font style="color:#FF0000;">gdbserver 172.16.0.169:2345 ./fltest\_qt\_backlight</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647260100-c28372bb-2475-4736-90a7-c27b9a36aa56.png)

On the virtual machine:

Debug->Start Debugging->Attach to Running Debug Server...

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647260430-bb000f6a-1277-4189-bec7-88c663cd96c5.png)

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647260656-922ed5c3-56c6-44ce-b386-3bacb7d98c5e.png)

Connect to the development board service to enter debug mode.

Breakpoint Debugging Example:

Set a breakpoint in the application, then click the Step Over button repeatedly.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647260907-f4cac003-4926-4e6e-bc55-b5f2cce16e2e.png)

The development board will output breakpoint debugging information.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719647261082-07d3b0e1-6d05-422e-90b4-6a4043aa08e1.png)