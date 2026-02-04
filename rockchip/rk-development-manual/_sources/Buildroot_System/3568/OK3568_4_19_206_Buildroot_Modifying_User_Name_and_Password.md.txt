# OK3568 4.19.206 Buildroot Modifying User Name and Password

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Modifying User Name and Password

When modifying the username, you will need to use replacement commands. The steps are as follows:

After entering the file in vi mode, use vi commands to make replacements.

```plain
:%s/Contents need to be replaced/contents replaced/g			//Find and replace all matched items throughout the entire file.
For example: %s/foo/bar/g #Search for "foo" and replace it with "bar" throughout the entire file.
```

Refer to the link: [vim/vi 4种替换方法，批量替换，手动替换\_vim替换指定内容-CSDN博客](https://blog.csdn.net/qq_49643092/article/details/124390153)

1\. Change the root user to another username, e.g., master

1）Modify /etc/passwd – change root to master;

```plain
[root@ok3568:/]# vi /etc/passwd
```

After modification, it should look like this:

```plain
master:x:0:0:master:/master:/bin/sh
daemon:x:1:1:daemon:/usr/sbin:/bin/false
bin:x:2:2:bin:/bin:/bin/false
sys:x:3:3:sys:/dev:/bin/false
sync:x:4:100:sync:/bin:/bin/sync
mail:x:8:8:mail:/var/spool/mail:/bin/false
www-data:x:33:33:www-data:/var/www:/bin/false
operator:x:37:37:Operator:/var:/bin/false
nobody:x:65534:65534:nobody:/home:/bin/false
dbus:x:1000:1000:DBus messagebus user:/var/run/dbus:/bin/false
sshd:x:74:1002:SSH drop priv user:/:/bin/false
ftp:x:1001:1003:Anonymous FTP User:/home/ftp:/bin/false
forlinx:x:12:12:Linux User,,,:/home/forlinx:/bin/sh
```

2）Modify/etc/shadow, modify root to master;

```plain
[master@ok3568:/]# vi /etc/shadow
```

After modification, it should look like this:

```plain
master:$1$RkjqD35e$M1we0gOl4tzF647ebIn7z0:10933:0:99999:7:::
daemon:*:10933:0:99999:7:::
bin:*:10933:0:99999:7:::
sys:*:10933:0:99999:7:::
sync:*:10933:0:99999:7:::
mail:*:10933:0:99999:7:::
www-data:*:10933:0:99999:7:::
operator:*:10933:0:99999:7:::
nobody:*:10933:0:99999:7:::
dbus:*:::::::
sshd:*:::::::
ftp:*:::::::
forlinx:$5$PhqqXnHETuABtQdU$mHGsx6KlD1gWqSed73N9bv1EhPVjeUbUZjFh7I/FCC8:0:0:99999:7:::
```

Save and exit.

3）Modify/etc/group，modify root to master;

```plain
[master@ok3568:/]# vi /etc/group
```

After modification, it should look like this:

```plain
master:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
adm:x:4:
tty:x:5:
disk:x:6:
lp:x:7:
mail:x:8:
kmem:x:9:
wheel:x:10:master
cdrom:x:11:
dialout:x:18:
floppy:x:19:
video:x:28:
audio:x:29:
tape:x:32:
www-data:x:33:
//节选
```

Save and exit.

4） Modify the user folder

```plain
[master@ok3568:/]# ls
bin             etc   lib64       misc  proc           sbin       tmp       var
busybox.config  home  linuxrc     mnt   rockchip_test  sdcard     udisk
data            init  lost+found  oem   root           sys        userdata
dev             lib   media       opt   run            timestamp  usr
[master@ok3568:/]# mv root master
[master@ok3568:/]# ls
bin             home     lost+found  oem            sbin       udisk
busybox.config  init     master      opt            sdcard     userdata
data            lib      media       proc           sys        usr
dev             lib64    misc        rockchip_test  timestamp  var
etc             linuxrc  mnt         run            tmp
```

The default password for the account is root, which can be changed using the passwd master command.

```plain
[master@ok3568:/]# passwd master
Changing password for master
New password:
Bad password: too short
Retype password:
passwd: password for master changed by master
```

After entering the new password twice, it can be set successfully.

2\. Change forlinx to another user name, such as slave

1\) Modify/etc/passwd and change forlinx to slave.

```plain
[master@ok3568:/]# vi /etc/passwd
```

Execute the instruction

```plain
:%s/forlinx/slave/g
```

2\) Modify/etc/shadow and change forlinx to slave

```plain
[master@ok3568:/]# vi /etc/shadow
```

Execute the instruction

```plain
[master@ok3568:/]# vi /etc/shadow
```

3\) Final execute.

```plain
[master@ok3568:/]# mv /home/forlinx /home/slave
```

Modification succeeded.

```plain
[master@ok3568:/]# su slave
[slave@ok3568:/]#
```