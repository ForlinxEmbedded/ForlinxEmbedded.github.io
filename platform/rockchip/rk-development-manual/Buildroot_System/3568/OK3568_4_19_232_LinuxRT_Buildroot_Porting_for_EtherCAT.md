# OK3568 4.19.232 LinuxRT Buildroot Porting for EtherCAT

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## LinuxRT Buildroot Porting for EtherCAT

Add the followings in the buildroot:

> BR2\_PACKAGE\_BUSYBOX=y//Wait to add the depmod and modinfo commands  
BR2\_LINUX\_KERNEL=y//Dependency on ethercat  
BR2\_PACKAGE\_IGH\_ETHERCAT=y//ethercat package  
BR2\_LINUX\_KERNEL\_DEFCONFIG="OK3568-C-Linux"//Specified kernel configuration

The defconfig file used for buildroot is buildroot/configs/rockchip \_ OK3568-C \_ defconfig. 

 After the make menuconfig configuration is completed, the.config needs to be overwritten to the rockchip \_ OK3568-C \_ defconfig. 

Otherwise, the configuration will not take effect.

Problems encountered in compiling the file system.

After adding the above content in the buildroot file system, then compile it.

`./build.sh buildroot`

**Possible Problems During Compilation**

1\. linux custom Building errors during the compilation

> Done in 6min 39s (error code: 2\)  
Failed to build rockchip\_OK3568-C:  
2024-04-19T09:46:11 error, forbidden warning:rga\_policy.c:199  
2024-04-19T09:46:11 199 \| if (DEBUGGER\_EN(MSG))  
2024-04-19T09:46:11 \| \^~  
2024-04-19T09:46:11 drivers/video/rockchip/rga3/rga\_policy.c:201:33: note: ...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'  
2024-04-19T09:46:11 201 \| continue;  
2024-04-19T09:46:11 \| \^~~~~~~~  
2024-04-19T09:46:11 make\[6]: \*\*\* \[scripts/Makefile.build:334: drivers/video/rockchip/rga3/rga\_policy.o] Error 1  
2024-04-19T09:46:11 make\[6]: \*\*\* Waiting for unfinished jobs....  
2024-04-19T09:46:11 CC drivers/usb/dwc3/ep0.o  
2024-04-19T09:46:11 AR drivers/video/rockchip/mpp/built-in.a  
2024-04-19T09:46:11 CC drivers/usb/dwc3/drd.o  
2024-04-19T09:46:11 CC drivers/usb/dwc3/debugfs.o  
2024-04-19T09:46:11 make\[5]: \*\*\* \[scripts/Makefile.build:637: drivers/video/rockchip/rga3] Error 2  
2024-04-19T09:46:11 make\[4]: \*\*\* \[scripts/Makefile.build:637: drivers/video/rockchip] Error 2  
2024-04-19T09:46:11 make\[3]: \*\*\* \[scripts/Makefile.build:637: drivers/video] Error 2  
2024-04-19T09:46:11 make\[3]: \*\*\* Waiting for unfinished jobs....

The key points of error reporting are: drivers/video/rockchip/rga3/rga\_policy.c:201:33: note: ...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'

You can modify buildroot/output/rockchip\_OK3568-C/build/linux-custom/drivers/video/rockchip/rga3/rga\_policy.c  
Comment out the if DEBUGGER message on line 201 of the prompt and leave continue.

2\. igh-ethercat 1.5.2 Building kernel module(s)  errors during the process

> Done in 1min 03s (error code: 2\)  
Failed to build rockchip\_OK3568-C:   
2024-04-19T10:14:03 CC \[M] /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./examples/mini/mini.o  
2024-04-19T10:14:03 CC \[M] /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./master/datagram\_pair.o  
2024-04-19T10:14:03 ../igh-ethercat-1.5.2/examples/mini/mini.c: In function 'init\_mini\_module':  
2024-04-19T10:14:03 ../igh-ethercat-1.5.2/examples/mini/mini.c:495:5: error: implicit declaration of function 'init\_timer'; did you mean 'init\_timers'? \[-Werror=implicit-function-declaration]  
2024-04-19T10:14:03 495 \| init\_timer(\&timer);  
2024-04-19T10:14:03 \| \^~~~~~~~~~  
2024-04-19T10:14:03 \| init\_timers  
2024-04-19T10:14:03 ../igh-ethercat-1.5.2/examples/mini/mini.c:496:20: error: assignment to 'void (\*)(struct timer\_list )' from incompatible pointer type 'void ()(long unsigned int)' \[-Werror=incompatible-pointer-types]  
2024-04-19T10:14:03 496 \| timer.function = cyclic\_task;  
2024-04-19T10:14:03 \| \^  
2024-04-19T10:14:03 cc1: some warnings being treated as errors  
2024-04-19T10:14:03 make\[5]: \*\*\* \[scripts/Makefile.build:334: /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./examples/mini/mini.o] Error 1  
2024-04-19T10:14:03 make\[4]: \*\*\* \[scripts/Makefile.build:637: /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./examples/mini] Error 2  
2024-04-19T10:14:03 make\[3]: \*\*\* \[scripts/Makefile.build:637: /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./examples] Error 2

The error focus is:./igh-ethercat-1.5.2/examples/mini/mini. C init \_ timer problem 

Solution:

```c
//Modify row 495 of the corresponding igh-ethercat-1.5.2/examples/mini/mini. C to read as follows:

    printk(KERN_INFO PFX "Starting cyclic sample thread.\n");
    //init_timer(&timer);
    //timer.function = cyclic_task;
    //timer.expires = jiffies + 10;
    //add_timer(&timer);

    printk(KERN_INFO PFX "Started.\n");
    return 0;
```

Error is still reported when recompiling after modification

> Done in 7s (error code: 2\)  
Failed to build rockchip\_OK3568-C:   
2024-04-19T11:34:00 \| \^~~~~~~~~~~~~~~~  
2024-04-19T11:34:00 ../igh-ethercat-1.5.2/master/cdev.c:87:14: note: (near initialization for 'eccdev\_vm\_ops.fault')  
2024-04-19T11:34:00 In file included from ../igh-ethercat-1.5.2/master/cdev.c:42:  
2024-04-19T11:34:00 ../igh-ethercat-1.5.2/master/cdev.c: In function 'eccdev\_vma\_fault':  
2024-04-19T11:34:00 ../igh-ethercat-1.5.2/master/cdev.c:277:46: error: ‘struct vm\_fault' has no member named 'virtual\_address'  
2024-04-19T11:34:00 277 \| " offset = %lu, page = %pn", vmf->virtual\_address, offset, page);  
2024-04-19T11:34:00 \| \^~  
2024-04-19T11:34:00 ../igh-ethercat-1.5.2/master/master.h:115:38: note: in definition of macro 'EC\_MASTER\_DBG'  
2024-04-19T11:34:00 115 \| master->index, ##args); \| \^~~~  
2024-04-19T11:34:00 cc1: some warnings being treated as errors

The key error is:./igh-ethercat-1.5.2/master/cdev. C. 

Solution:   
65 line:

```c
#define PAGE_FAULT_VERSION KERNEL_VERSION(2, 6, 23)
 
#if LINUX_VERSION_CODE >= PAGE_FAULT_VERSION
//static int eccdev_vma_fault(struct vm_area_struct *, struct vm_fault *);
static int eccdev_vma_fault(struct vm_fault *);
#else
static struct page *eccdev_vma_nopage(
        struct vm_area_struct *, unsigned long, int *);
#endif
```

259 line:

```c
//static int eccdev_vma_fault(
 //   #if LINUX_VERSION_CODE < KERNEL_VERSION(5, 4, 0)
// vm_area_struct *vma, /**< Virtual memory area. */
 //   #endif
   //     struct vm_fault *vmf /**< Fault data. */
   //     )
//
static vm_fault_t eccdev_vma_fault(struct vm_area_struct *vma)
```

278 line:

```c
EC_MASTER_DBG(priv->cdev->master, 1, "Vma fault, virtual_address = %p,"
            " offset = %lu, page = %p\n", vmf->virtual_address, offset, page);
Modify to 
EC_MASTER_DBG(priv->cdev->master, 1, "Vma fault, virtual_address = %p,"
            " offset = %lu, page = %p\n", (void *)vmf->address, offset, page);
```

Error is still reported when recompiling after modification

> 2024-04-19T10:33:31 /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./devices/generic.c: In function 'ec\_gen\_device\_init':  
2024-04-19T10:33:31 /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./devices/generic.c:152:77: error: macro "alloc\_netdev" requires 4 arguments, but only 3 given  
2024-04-19T10:33:31 152 \| dev->netdev = alloc\_netdev(sizeof(ec\_gen\_device\_t \*), \&null, ether\_setup);  
2024-04-19T10:33:31 \| \^  
2024-04-19T10:33:31 In file included from ./include/uapi/linux/if\_arp.h:27,  
2024-04-19T10:33:31 from ./include/linux/if\_arp.h:27,  
2024-04-19T10:33:31 from /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./devices/generic.c:40:  
2024-04-19T10:33:31 ./include/linux/netdevice.h:4176: note: macro "alloc\_netdev" defined here  
2024-04-19T10:33:31 4176 \| #define alloc\_netdev(sizeof\_priv, name, name\_assign\_type, setup) \|  
2024-04-19T10:33:31 /home/forlinx/3568-rt/OK3568-linux-sdk232/buildroot/output/rockchip\_OK3568-C/build/igh-ethercat-1.5.2/./devices/generic.c:152:19: error: 'alloc\_netdev' undeclared (first use in this function); did you mean 'alloc\_netdev\_mqs'?  
2024-04-19T10:33:31 152 \| dev->netdev = alloc\_netdev(sizeof(ec\_gen\_device\_t \*), \&null, ether\_setup);  
2024-04-19T10:33:31 \| \^~~~~~~~~~~~  
2024-04-19T10:33:31 \| alloc\_netdev\_mqs

The key points of error reporting are: igh-ethercat-1.5.2/./devices/generic. C:   
Solution:

```c
//Add NET_NAME_UNKNOWN in line 152 
dev->netdev = alloc_netdev(sizeof(ec_gen_device_t *), &null, NET_NAME_UNKNOWN, ether_setup);
 
//Line 210 is modified to 
ret = sock_create_kern(&init_net, PF_PACKET, SOCK_RAW, htons(ETH_P_ETHERCAT),&dev->socket);
```

All of the above documents involved in the modification:

1. buildroot/output/rockchip\_OK3568-C/build/linux-custom/drivers/video/rockchip/rga3/rga\_policy.c[rga\_policy-20240419155808-owl5at5.c](https://forlinx-book.yuque.com/attachments/yuque/0/2024/c/45387297/1724219187682-684533cc-5a11-41ce-a65e-ba7fd670a345.c)
2. igh-ethercat-1.5.2/examples/mini/mini.c

[mini-20240419160018-gob584d.c](https://forlinx-book.yuque.com/attachments/yuque/0/2024/c/45387297/1724219187845-30e956c5-9427-400c-9602-3a70b2eb7830.c)

3. igh-ethercat-1.5.2/master/cdev.c

[cdev-20240419160245-r0kq12c.c](https://forlinx-book.yuque.com/attachments/yuque/0/2024/c/45387297/1724219187935-3e0ca572-a18d-4020-911e-87c55391f0f1.c)

4. igh-ethercat-1.5.2/devices/generic.c

[generic-20240419160249-mqbflde.c](https://forlinx-book.yuque.com/attachments/yuque/0/2024/c/45387297/1724219188021-9177313d-1c57-4a51-b6f2-10405fe8e7ed.c)

Finally, after completing the above modifications, ethercat-1.5.2 can be compiled successfully. However, during the ethercat install step, the system unexpectedly prompted “modetest is ARM, need AARCH64”.

Using the file command to check buildroot/output/rockchip\_OK3568-C/target/usr/bin/modetest, it indeed showed that the file was not compiled for AARCH64.

Rebuilding and reinstalling “libdrm” in buildroot will restore normal system functionality. This issue may have been caused by problems in the previous full source code compilation. This note is kept for reference. If anyone encounters the same error, please try to recompile the relevant components.

**Development Board Verification**

After the above modification is completed, recompile and generate the file system./build. sh buildroot package update image. After the /build.sh updateimg flashing verification starts, then verify in the development board.

Ifconfig # Check if there are currently available NIC devices 

 Ifconfig -a # Check if the network card device is currently present 

 Ifconfig eth0 up # Select a NIC device to make it available 

 Ifconfig eth0 # View the mac address of the NIC device

```shell
root@OK3568-C-buildroot:/# ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 72:D0:18:BC:C8:C9
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:39
```

You can see HWaddr 72:D0:18:BC:C8:C9, and then configure it in the (development board)/etc/sysconfig/ethercat file.

```shell
# Modify the following so that 72: D0: 18: BC: C8: C9 is the corresponding mac
MASTER0_DEVICE="72:D0:18:BC:C8:C9"
MASTER0_BACKUP="72:D0:18:BC:C8:C9"
MODPROBE_FLAGS="-b"
```

Execute/etc/init.d/ethercat start

```shell
root@OK3568-C-buildroot:/# /etc/init.d/ethercat start
Starting EtherCAT master 1.5.2 [  253.539612] ec_master: loading out-of-tree module taints kernel.
[  253.555547] EtherCAT: Master driver 1.5.2 2eff7c993a63
 done
root@OK3568-C-buildroot:/# [  253.555648] EtherCAT WARNING 0: Ignoring backup MAC address!
[  253.555929] EtherCAT: 1 master waiting for devices.
```

Execute ethercat master

```shell
root@OK3568-C-buildroot:/# ethercat master
Master0
  Phase: Waiting for device(s)...
  Active: no
  Slaves: 0
  Ethernet devices:
    Main: 72:d0:18:bc:c8:c9 (waiting...)
      Link: DOWN
      Tx frames:   0
      Tx bytes:    0
      Rx frames:   0
      Rx bytes:    0
      Tx errors:   0
      Tx frame rate [1/s]:      0      0      0
      Tx rate [KByte/s]:      0.0    0.0    0.0
      Rx frame rate [1/s]:      0      0      0
      Rx rate [KByte/s]:      0.0    0.0    0.0
    Common:
      Tx frames:   0
      Tx bytes:    0
      Rx frames:   0
      Rx bytes:    0
      Lost frames: 0
      Tx frame rate [1/s]:      0      0      0
      Tx rate [KByte/s]:      0.0    0.0    0.0
      Rx frame rate [1/s]: 1230259 1631408 1140876
      Rx rate [KByte/s]:   1904971.9 1105049.4 1359893.1
      Loss rate [1/s]:          0      0      0
      Frame loss [%]:         0.0    0.0    0.0
  Distributed clocks:
    Reference clock: None
    Application time: 0
                      2000-01-01 00:00:00.000000000
```

Execute ethercat slaves.

```shell
root@OK3568-C-buildroot:/# ethercat slaves
root@OK3568-C-buildroot:/#
```