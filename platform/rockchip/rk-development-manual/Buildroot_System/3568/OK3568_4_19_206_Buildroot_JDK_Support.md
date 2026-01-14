# 免责声明
本手册版权归保定飞凌嵌入式技术有限公司所有。未经本公司的书面许可，任何单位和个人无权以任何形式复制、传播、转载本手册的任何部分，违者将被追究法律责任。  
保定飞凌嵌入式有限公司所提供的所有服务内容旨在协助用户加速产品的研发进度，在服务过程中所提供的任何程序、文档、测试结果、方案、支持等资料和信息，都仅供参考，用户有权不使用或自行参考修改，本公司不提供任何的完整性、可靠性等保证，若在用户使用过程中因任何原因造成的特别的、偶然的或间接的损失，本公司不承担任何责任。

# 更新记录
| **日期** | **手册版本** | **更新内容** |
| :---: | :---: | --- |
| 20220804 | V1.0 | 初版 |


# JDK支持
1.sdk下载

[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

在此网址下载的

jdk-8u351-linux-aarch64.tar.gz

jdk-8-linux-aarch64-demos.tar.gz

2.解压jdk-8u351-linux-aarch64.tar.gz生成jdk1.8.0_351，比如解压到/home/forlinx/下

	gzip -d jdk-8u351-linux-aarch64.tar.gz

	tar xvf jdk-8u351-linux-aarch64.tar

	![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646083092-036d29c4-fb24-4f98-a9c5-189b2788fff6.png)

3.在/etc/profile 最后添加

<font style="color:#0000FF;">JAVA_HOME=/home/forlinx/jdk1.8.0_351</font>

<font style="color:#0000FF;">CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar</font>

<font style="color:#0000FF;">PATH=$JAVA_HOME/bin:$PATH</font>

<font style="color:#0000FF;">export JAVA_HOME CLASSPATH PATH</font>

4. source /etc/profile 

理论上应该出现：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646083307-b7ecdda5-c1f7-4e51-9be6-b3542ec36a71.png)

5.验证

jdk-8-linux-aarch64-demos.tar.gz这里面有很多测试程序。

解压为jdk1.8.0_341

<font style="color:#0000FF;">cd jdk1.8.0_341/sample/forkjoin/mergesort/   这个例程需要在例程目录下运行javac，不然会报错</font>

测试(此处由于demo和jdk的版本不一致，顺便把jdk341中的两个文件拷贝到jdk351了)：

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646083512-dee2ad25-4f89-4c55-b5eb-23ad4077151b.png)

测试程序可用。

其他例程也可这样测试。

