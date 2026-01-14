# OK3568 4.19.206 Buildroot JDK_Support

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022 | V1.0| Initial Version|

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## JDK Support

1\. SDK Download

[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Download:

jdk-8u351-linux-aarch64.tar.gz

jdk-8-linux-aarch64-demos.tar.gz

2\. Extract jdk-8u351-linux-aarch64.tar.gz to generate jdk1.8.0\_351. For example, extract it to /home/forlinx/.

    gzip -d jdk-8u351-linux-aarch64.tar.gz
    
    tar xvf jdk-8u351-linux-aarch64.tar
    
    ![Image](./images/OK3568_4_19_206_Buildroot_JDK_Support/1719646083092_036d29c4_fb24_4f98_a9c5_189b2788fff6.png)

3\. Append the Following to /etc/profile (at the end of the file):

<font style="color:#0000FF;">JAVA\_HOME=/home/forlinx/jdk1.8.0\_351</font>

<font style="color:#0000FF;">CLASSPATH=.:$JAVA\_HOME/jre/lib/rt.jar:$JAVA\_HOME/lib/dt.jar:$JAVA\_HOME/lib/tools.jar</font>

<font style="color:#0000FF;">PATH=$JAVA\_HOME/bin:$PATH</font>

<font style="color:#0000FF;">export JAVA\_HOME CLASSPATH PATH</font>

4\. Source /etc/profile

In theory, it should appear:

![Image](./images/OK3568_4_19_206_Buildroot_JDK_Support/1719646083307_b7ecdda5_c1f7_4e51_9be6_b3542ec36a71.png)

5\. Verification

There are many test programs in jdk-8-linux-aarch64-demos.tar.gz.

Extract it to jdk1.8.0\_341.

<font style="color:#0000FF;">The routine d jdk1.8.0\_341/sample/forkjoin/mergesort/ requires running javac in the routine directory, otherwise an error will be reported.</font>

Test (Here, due to version mismatch between the demo and JDK, two files from jdk1.8.0\_341 were copied to jdk1.8.0\_351):

![Image](./images/OK3568_4_19_206_Buildroot_JDK_Support/1719646083512_dee2ad25_4f89_4c55_b5eb_23ad4077151b.png)

The test programs should now work correctly.

Other sample routines can be tested in the same way.