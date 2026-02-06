# OK3588 Linux 5.10.209 Buildroot Auto-start QT Application

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright 

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.   

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 10/30/2025| V1.0| Initial Version|

## Auto-start QT Application

Create a new autostart script in /etc/init.d to automatically start the Qt application. After moving the mouse, the application disappears.

Create a new autostart file.

vi /etc/init.d/S99aotu.sh

```shell
#!/bin/sh
sleep 3
/untitled_test1 &
```

Grant executable permissions to the autostart script.

```shell
root@ok3588-buildroot:/# chmod 777 /etc/init.d/S99aotu.sh(Give permissions as required)
root@ok3588-buildroot:/# sync
root@ok3588-buildroot:/# reboot
```

When moving the mouse, the following error occurs.

![](https://cdn.nlark.com/yuque/0/2025/png/45411062/1761815468451-14335c7a-f005-48f2-b728-10d0243e9467.png)

**Solution**

This is due to EGLFS printing information, so add the relevant configuration file:

<font style="color:rgb(0, 0, 0);">vi /root/kms.conf</font>

```shell
{
  "device": "/dev/dri/card0",
  "hwcursor": false,
  "pbuffers": true,
  "outputs": [
    {
      "name": "HDMI-A-1",
      "mode": "current",
      "primary": true
    }
  ]
}

```

Modify the autostart script.

```shell
#!/bin/sh
sleep 3
export QT_QPA_EGLFS_KMS_ATOMIC=1
export QT_QPA_EGLFS_ALWAYS_SET_MODE='1'

export QT_QPA_EGLFS_KMS_CONFIG="/root/kms.conf"
/untitled_test1 &
```

Disable Weston.

```shell
root@ok3588-buildroot:/#vi /etc/init.d/S49weston
```

![](https://cdn.nlark.com/yuque/0/2025/png/45411062/1761816694286-02241146-db5e-4d03-beb3-158732e92eb0.png)

After performing sync, restart the system. Now, moving the mouse displays normally.