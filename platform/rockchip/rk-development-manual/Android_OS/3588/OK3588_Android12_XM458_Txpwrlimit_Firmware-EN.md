# OK3588 Android 12: Adding the TX Power Limit Firmware for the XM458 Wi-Fi Module

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## **Overview**

This document addresses the issue where the XM458 module fails to meet the transmit frequency and sensitivity specifications in its datasheet.

## **Application Scope**

This document uses Android 12.0 as an example. The same procedure applies to other systems and can be used as a reference.

## **Revision History**

| **Date** | **Document Version** | **Changes** |
| --- | --- | --- |
| 27/03/2025 | V1.0 | Initial release |

## **Introduction**

RF Power refers to the power level of the electromagnetic wave used in RF signal transmission. It indicates the transmit or receive power when a wireless device sends or receives a signal. When adjusting the RF Power level, you must comply with the applicable regulations and set it appropriately for the specific device and network requirements. Excessively high RF Power may cause interference or violate regulations, while excessively low RF Power may limit the signal coverage or prevent normal data transmission. Therefore, RF Power adjustment in a wireless network requires proper planning and configuration.

## 1. Building the XM458 TX Power Limit Firmware
System: Android 12.0 (the same principle applies to other systems)

Module: AW-XM458

Driver version: PCIE-Wi-Fi-UART-BT-88W9098-mxm6x17423.p6

Firmware version: pcieuart9098_combo_v1.bin (PCIE-Wi-Fi-UART-BT-88W9098-mxm6x17423.p6)

### 1.1 Obtaining the mlanutl Tool Source Code

The mlanutl source code is usually located in the mapp directory of the driver provided by the vendor. If it is not available, clone the mlanutl or wlan_src source code as follows:

```c
git clone https://github.com/nxp-imx/mwifiex/tree/9b08cf4d6418bbde260581677e186464c720583d/mxm_wifiex/wlan_src/mapp/mlanutl
```

### 1.2 mlanutl Source Location
Copy the source directory to a new mlanutl directory under packages/apps/ in the Android SDK.

### 1.3 Creating Android.mk
Create Android.mk under the mlanutl tool to build the tool and specify the output directory.

```c
LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := mlanutl

LOCAL_C_INCLUDES := $(LOCAL_PATH)

LOCAL_SRC_FILES := mlanutl.c
LOCAL_CFLAGS := -Wno-unused-parameter

include $(BUILD_EXECUTABLE)
```

### 1.4 Building Android
After a successful build, the tool is generated at out/target/product/ok3588_c/system/bin/mlanutl in the SDK. It is already packaged into the system, so no manual copying is needed; the tool is located at /system/bin in the system.

### 1.5 Obtaining the CFG File for the Specific Wi-Fi Module from the Vendor
See the attached 2458_txpwrlimit_cfg_9098.conf.

You can also set different power values for different regions.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Android_OS/3588/001_EN.png)

Here, 11b, 11g, 11n, and 11ax refer to different Wi-Fi protocols and standards. 11 Mbps, 54 Mbps, HT20 MCS7, and similar values belong to modulation and coding schemes (MCS), which are groups used in wireless communications to describe different modulation methods and data rates. MCS groups organize modulation methods and data rates together for configuration and management in wireless communication systems.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Android_OS/3588/002_EN.png)

For 11b (11 Mbps), the index is 0 and the RF power is 18.

For 11g (54 Mbps), the index is 3 and the RF power is 17.

For 11n (HT20 MCS7), the index is 6 and the RF power is 16.

For 11n (HT40 MCS7), the index is 9 and the RF power is 16.

For 11ax (HE20 MCS11), the index is 29 and the RF power is 14.

For 11ax (HE40 MCS11), the index is 30 and the RF power is 14.

Refer to the attached NXP txpwrlimit configuration guide_210708 when making changes.

[[【Wi-Fi】802.11/802.11b/802.11g/802.11n/802.11a/802.11ac/802.11ax/802.11be Wi-Fi Rate Reference Table - CSDN Blog](https://blog.csdn.net/wgl307293845/article/details/130640502)]: For details on the relationship between wireless standards and modulation schemes, see this reference.

### 1.6 Generating the TX Power Limit Firmware from the txpwrlimit.cfg File
Log in to the development board and use the mlanutl tool added to the system to generate the corresponding firmware for the STA interface.

```shell
 ./mlanutl wlan0 hostcmd 2458_txpwrlimit_cfg_9098.conf generate_raw txpwrlimit.bin
```

[[AN13009.pdf (nxp.com.cn)](https://www.nxp.com.cn/docs/en/application-note/AN13009.pdf)]: Wi-Fi Tx Power Management in Linux

## 2. Verifying the TX Power Limit Firmware on Android 12.0
### 2.1 Accessing the Device via ADB
```shell
adb root
adb remount
adb shell
```

### 2.2 Unloading the Originally Auto-Loaded Wi-Fi Driver
```shell
ok3588_c:/ # lsmod
Module                  Size  Used by
moal                  659456  0 
mlan                  499712  1 moal
ok3588_c:/ # rmmod moal
ok3588_c:/ # rmmod mlan
ok3588_c:/ # lsmod
Module                  Size  Used by
ok3588_c:/ #
```

### 2.3 Loading the Wi-Fi Driver Module and TX Power Limit Firmware
```shell
ok3588_c:/ # insmod /vendor/lib/modules/mlan.ko
ok3588_c:/ # insmod /vendor/lib/modules/moal.ko drv_mode=1 sta_name=wlan cal_data_cfg=none ps_mode=2 auto_ds=2 cfg80211_wext=0xf txpwrlimit_cfg=txpwrlimit.bin  fw_name=pcieuart9098_combo_v1.bin
ok3588_c:/ # dmesg | grep txpwrlimit.bin    // If the output below is printed, the txpwrlimit firmware has been loaded
[   72.902932] Download txpwrlimit_cfg=txpwrlimit.bin
[   72.963172] Download txpwrlimit_cfg=txpwrlimit.bin
```

### 2.4 Checking the TX Power Limit Firmware Contents
```shell
ok3588_c:/ # mlanutl wlan0 get_txpwrlimit 0                                                                                      
------------------------------------------------------------------------------------
Get txpwrlimit: sub_band=0x0 len=1132
StartFreq: 2407
ChanWidth: 20
ChanNum:   1
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   2
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   3
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   4
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   5
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   6
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   7
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   8
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   9
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   10
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   11
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   12
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2407
ChanWidth: 20
ChanNum:   13
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
StartFreq: 2414
ChanWidth: 20
ChanNum:   14
Pwr:0,18,1,17,2,17,3,17,4,16,5,16,6,16,7,16,8,16,9,16,10,16,11,16,12,16,13,16,14,16,15,16,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,14,29,14,30,14,31,0,32,14,33,14,34,14,35,0
```

## 3. Adding Firmware Loading to the Android 12.0 SDK
### 3.1 Building the Firmware into the File System
```c
--- a/device/rockchip/rk3588/ok3588_c/BoardConfig.mk
+++ b/device/rockchip/rk3588/ok3588_c/BoardConfig.mk
@@ -42,4 +42,5 @@ BOARD_HS_ETHERNET := true
 # NXP 9098 8997 Wifi and Bluetooth Combo Firmware
 PRODUCT_COPY_FILES += \
 vendor/nxp/imx-firmware/nxp/FwImage_9098/pcieuart9098_combo_v1.bin:vendor/etc/firmware/pcieuart9098_combo_v1.bin \
-vendor/nxp/imx-firmware/nxp/FwImage_8997/pcieuart8997_combo_v4.bin:vendor/etc/firmware/pcieuart8997_combo_v4.bin
+vendor/nxp/imx-firmware/nxp/FwImage_8997/pcieuart8997_combo_v4.bin:vendor/etc/firmware/pcieuart8997_combo_v4.bin \
+vendor/nxp/imx-firmware/nxp/FwImage_9098/txpwrlimit.bin:vendor/etc/firmware/txpwrlimit.bin
```

Place the txpwrlimit firmware in the same directory as the initialization firmware: vendor/nxp/imx-firmware/nxp/FwImage_9098/. After the build, it will be copied to vendor/etc/firmware in the system.

### 3.2 Changing the Module Auto-Load Parameters
```c
--- a/frameworks/opt/net/wifi/libwifi_hal/wifi_hal_common.cpp
+++ b/frameworks/opt/net/wifi/libwifi_hal/wifi_hal_common.cpp
@@ -125,14 +125,14 @@ typedef struct _wifi_ko_file_name
        char wifi_name[64];
        char wifi_driver_name[64];
        char wifi_module_path[128];
-       char wifi_module_arg[128];
+       char wifi_module_arg[192];
 
 }wifi_ko_file_name;
 
 #define UNKKOWN_DRIVER_MODULE_ARG ""
 #define SSV6051_DRIVER_MODULE_ARG "stacfgpath=/vendor/etc/firmware/ssv6051-wifi.cfg"
 #define MVL88W8977_DRIVER_MODULE_ARG "drv_mode=1 fw_name=mrvl/sd8977_wlan_v2.bin cal_data_cfg=none cfg80211_wext=0xf"
-#define NXP_DRIVER_MODULE_ARG "sta_name=wlan uap_name=wlan wfd_name=p2p max_vir_bss=1 cfg80211_wext=0xf cal_data_cfg=none fw_name=pcieuart9098_combo_v1.bin"
+#define NXP_DRIVER_MODULE_ARG "sta_name=wlan uap_name=wlan wfd_name=p2p max_vir_bss=1 cfg80211_wext=0xf txpwrlimit_cfg=txpwrlimit.bin cal_data_cfg=none fw_name=pcieuart9098_combo_v1.bin"
 #define NXP_DRIVER_MODULE8997_ARG "sta_name=wlan uap_name=wlan wfd_name=p2p max_vir_bss=1 cfg80211_wext=0xf cal_data_cfg=none fw_name=pcieuart8997_combo_v4.bin"
 
 wifi_ko_file_name module_list[] =
diff --git a/vendor/nxp/imx-firmware/nxp/FwImage_9098/txpwrlimit.bin b/vendor/nxp/imx-firmware/nxp/FwImage_9098/txpwrlimit.bin
new file mode 100644
index 0000000000..e73ef69a49
```

### 3.3 Verifying That Firmware Loading Works
```shell
ok3588_c:/ # dmesg | grep txpwrlimit.bin    // If the output below is printed, the txpwrlimit firmware has been loaded
[   72.902932] Download txpwrlimit_cfg=txpwrlimit.bin
[   72.963172] Download txpwrlimit_cfg=txpwrlimit.bin
```

## 4. Verifying That the Power Was Set Successfully
Transmit power and RF sensitivity are typically verified in a laboratory using conducted measurements over a cable.

## 5. Fixed-Frequency Testing (Test Method)
Fixed-frequency testing is a test method that forces the device to transmit on a configured frequency, bandwidth, and channel in user space.

Because the XM458 is an integrated plug-in module with the antenna attached to the module, the RF power loss when the antenna cannot be routed to the carrier board is not included. However, when you design an antenna connector on the carrier board or select a transmission line and antenna, this method is still a convenient way to verify the loss on the carrier board.

Fixed-frequency testing is non-signaling and can force continuous transmission. Signaling involves uncertainty, so fixed-frequency testing is simpler and more accurate for measuring hardware loss.

Detailed documentation is available for specific module models.

1. Load the corresponding fixed-frequency firmware into the driver module.
2. Use the labtool utility to send test commands.

See the attached AW-CM358_labtool Command User Guide_v02_20211104.pdf. [2458_txpwrlimit_cfg_9098.conf](https://forlinx-book.yuque.com/attachments/yuque/0/2025/conf/34340616/1743065956179-76660c73-922c-4d21-8a16-8064ce3e4b28.conf) [AW-CM358_labtool Command User Guide_v02_20211104.pdf](https://forlinx-book.yuque.com/attachments/yuque/0/2025/pdf/34340616/1743065973571-6c8dbafa-565d-40ef-b24f-44fde865540b.pdf)
