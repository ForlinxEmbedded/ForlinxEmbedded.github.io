# OK3568 4.19.206 Implementing Support for NFS Services

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Implementing Support for NFS Services

The 3568 Linux system does not support the NFS service by default. You can use the following methods to support NFS.

Open the file /OK3568-linux-source/buildroot/configs/OK3568\_defconfig, and add

<font style="color:#000000;">BR2\_PACKAGE\_NFS\_UTILS=y </font>

<font style="color:#000000;">BR2\_PACKAGE\_NFS\_UTILS\_RPCDEBUG=y BR2\_PACKAGE\_NFS\_UTILS\_RPC\_LOCKD=y </font>

<font style="color:#000000;">BR2\_PACKAGE\_NFS\_UTILS\_RPC\_NFSD=y BR2\_PACKAGE\_NFS\_UTILS\_RPC\_RQUOTAD=y</font>

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646560973-5dc78252-004f-4c54-ab4d-655a7fbeafe6.png)

Then compile according to the./build. sh buildroot shown above.

When compiling, choose whether to overwrite the original config file, do not enter, let it run automatically.

Results:

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646561206-0199043d-3077-4f9b-95a5-98f7b36f38ba.png)

And then the generated rootfs. IMG is separately programmed into the development board.

Type cd sbin in the development board and then ls to view it. As shown in the following figure, when you see mount.nfs, it indicates that the NFS service has been successfully started.

![](https://cdn.nlark.com/yuque/0/2024/png/45534390/1732070183020-a4714234-fab6-4500-b9a6-349dbe71eb1a.png)