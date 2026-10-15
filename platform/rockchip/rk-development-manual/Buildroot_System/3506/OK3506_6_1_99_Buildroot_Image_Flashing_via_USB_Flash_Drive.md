# OK3506 6.199 Buildroot Image Flashing via USB Flash Drive

Document classification: □ Top secret □ Secret □ Internal information ■ Open

##  Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

The eMMC version of the OK3506 development board does not support TF cards, so flashing images via TF card is unavailable. This document describes the method to flash images using a USB flash drive.

⚠️ **Note:**

- **This method applies to the OK3506 development board;**

- **Image Version: OK3506 Release Version 2;**
- **The native USB scanning command in U-Boot is time-consuming, so USB flash drive image flashing is disabled by default.**

PS: For OK3506 Release Version 3, the source and kernel patches mentioned in Step 2 have been integrated into the source code by default. To enable USB flash drive flashing, you still need to replace the U-Boot image and recompile as described in Step 3.

## Revision History

| Date       | Manual Version | Revision History |
| ---------- | -------------- | ---------------- |
| 03/07/2025 | V1.0           | Initial Version  |

## 1. Preparations Before Modification

The current source code does not support USB flash drive image flashing. To patch the source code, prepare the following items:

- Fully compiled OK3506 source code
- A USB flash drive formatted as FAT32, with capacity no greater than 32 GB

## 2. Source Code Modification

Source Patch

[0001-22485-recovery-fix-config-file-not-found.patch](https://forlinx-book.yuque.com/attachments/yuque/0/2025/patch/45444988/1751535973700-c51d6490-f10a-4fc4-b875-68b909230057.patch)

```diff
diff --git a/buildroot/package/rockchip/recovery/S40recovery b/buildroot/package/rockchip/recovery/S40recovery
index a9a5ec257..fac33d842 100755
--- a/buildroot/package/rockchip/recovery/S40recovery
+++ b/buildroot/package/rockchip/recovery/S40recovery
@@ -7,6 +7,10 @@ case "$1" in
   start)
 		echo "starting recovery... "
 	  	touch /dev/.coldboot_done
+		while [ ! -f "/mnt/udisk/sd_boot_config.config" ]
+		do
+			sleep 1
+		done
 		/usr/bin/recovery &

 	;;
-- 
2.34.1
```

[0002-22485-recovery-use-updateEngine.patch](https://forlinx-book.yuque.com/attachments/yuque/0/2025/patch/45444988/1751535989055-f1457be6-17f8-4d93-a958-98c2b5cb0a0b.patch)

```diff
diff --git a/buildroot/configs/rockchip_ok3506_recovery_defconfig b/buildroot/configs/rockchip_ok3506_recovery_defconfig
index 06ac4f111..2b79f72c4 100644
--- a/buildroot/configs/rockchip_ok3506_recovery_defconfig
+++ b/buildroot/configs/rockchip_ok3506_recovery_defconfig
@@ -1,3 +1,9 @@
 #include "base/base.config"
 #include "base/recovery.config"
 #include "chips/rk3506_arm.config"
+BR2_PACKAGE_MTD=y
+BR2_PACKAGE_RECOVERY=y
+BR2_PACKAGE_RECOVERY_USE_UPDATEENGINE=y
+BR2_PACKAGE_RECOVERY_RECOVERYBIN=y
+BR2_PACKAGE_RECOVERY_UPDATEENGINEBIN=y
+BR2_PACKAGE_RECOVERY_NO_UI=y
-- 
2.34.1
```

[0003-22485-recovery-fix-udisk-burn-nand.patch](https://forlinx-book.yuque.com/attachments/yuque/0/2025/patch/45444988/1751535999265-6909ae3f-6d47-448c-8c0b-903f20d87a72.patch)

```diff
diff --git a/external/recovery/update_engine/rkboot.c b/external/recovery/update_engine/rkboot.c
index 54cbcf9c1..0b7ce5563 100644
--- a/external/recovery/update_engine/rkboot.c
+++ b/external/recovery/update_engine/rkboot.c
@@ -31,13 +31,16 @@

 USHORT m_usFlashDataSec;
 USHORT m_usFlashBootSec;
+USHORT m_usFlashHeadSec;
 DWORD  m_dwLoaderSize;
 DWORD  m_dwLoaderDataSize;
+DWORD m_dwLoaderHeadSize;
 DWORD uiSecNumPerIDB;
 size_t uiFlashPageSize;
 size_t uiFlashBlockSize;
 USHORT usPhyBlokcPerIDB;
 bool m_bRc4Disable;
+bool m_NewIDBFlag;
 DWORD m_idBlockOffset[IDB_BLOCKS];

 long long m_FlashSize;
@@ -274,9 +277,41 @@ static int MakeIDBlockData(PBYTE lpIDBlock, PBYTE loaderCodeBuffer, PBYTE loader
     return 0;
 }

+static int MakeNewIDBlockData(PBYTE lpIDBlock, PBYTE loaderHeadBuffer, PBYTE loaderCodeBuffer, PBYTE loaderDataBuffer)
+{
+    int i;
+    if (lpIDBlock == NULL || loaderHeadBuffer == NULL ||
+        loaderCodeBuffer == NULL || loaderDataBuffer == NULL)
+        return -1;
+
+    if (m_bRc4Disable) {
+        //close rc4 encryption
+        for (i = 0; i < m_dwLoaderHeadSize / SECTOR_SIZE; i++) {
+            P_RC4(loaderHeadBuffer + SECTOR_SIZE * i, SECTOR_SIZE);
+        }
+        for (i = 0; i < m_dwLoaderDataSize / SECTOR_SIZE; i++) {
+            P_RC4(loaderDataBuffer + SECTOR_SIZE * i, SECTOR_SIZE);
+        }
+        for (i = 0; i < m_dwLoaderSize / SECTOR_SIZE; i++) {
+            P_RC4(loaderCodeBuffer + SECTOR_SIZE * i, SECTOR_SIZE);
+        }
+    }
+    memcpy(lpIDBlock, loaderHeadBuffer, m_dwLoaderHeadSize);
+    memcpy(lpIDBlock + SECTOR_SIZE * m_usFlashHeadSec, loaderDataBuffer, m_dwLoaderDataSize);
+    memcpy(lpIDBlock + SECTOR_SIZE * (m_usFlashHeadSec + m_usFlashDataSec), loaderCodeBuffer, m_dwLoaderSize);
+    LOGI("MakeNewIDBlockData out\n");
+
+    return 0;
+}
+
 static void calcIDBCount()
 {
-    uiSecNumPerIDB = 4 + m_usFlashDataSec + m_usFlashBootSec;
+    if (m_NewIDBFlag == false) {
+        uiSecNumPerIDB = 4 + m_usFlashDataSec + m_usFlashBootSec;
+    } else {
+        uiSecNumPerIDB = m_usFlashHeadSec + m_usFlashDataSec + m_usFlashBootSec;
+    }
+
     usPhyBlokcPerIDB = ((uiSecNumPerIDB > 0) ? ((uiSecNumPerIDB - 1) / 8 + 1) : (uiSecNumPerIDB));
     LOGI("usPhyBlokcPerIDB = %d.\n", usPhyBlokcPerIDB);
 }
@@ -305,7 +340,7 @@ static int reserveIDBlock()

 static int WriteIDBlock(PBYTE lpIDBlock, DWORD dwSectorNum, char *dest_path)
 {
-    LOGE("WriteIDBlock start %s \n", dest_path);
+    LOGI("WriteIDBlock start %s \n", dest_path);
     // int fd_dest = open("/tmp/loader2.txt", O_RDWR|O_SYNC, 0);
     int fd_dest = open(dest_path, O_CREAT | O_RDWR | O_SYNC | O_TRUNC, 0);
     if (fd_dest < 0) {
@@ -317,7 +352,7 @@ static int WriteIDBlock(PBYTE lpIDBlock, DWORD dwSectorNum, char *dest_path)
         //debug for 3308
         //256 为128k 的起始位置
         //每256k 备份一份
-        lseek64(fd_dest, (i * 512)*SECTOR_SIZE, SEEK_SET);
+        lseek64(fd_dest, (i * 1024)*SECTOR_SIZE, SEEK_SET);
         if (write(fd_dest, lpIDBlock, dwSectorNum * SECTOR_SIZE) != dwSectorNum * SECTOR_SIZE) {
             close(fd_dest);
             LOGE("[%s:%d] error (%s).\n", __func__, __LINE__, strerror(errno));
@@ -346,6 +381,13 @@ bool download_loader(PBYTE data_buf, int size, char *dest_path)
         return false;
     }

+    if (pBootHead->uiTag == 0x2052444C) {
+        m_NewIDBFlag = true;
+        LOGI("this is new IDB flag\n");
+    } else {
+        m_NewIDBFlag = false;
+    }
+
     if (pBootHead->ucRc4Flag) {
         m_bRc4Disable = true;
     } else {
@@ -364,6 +406,14 @@ bool download_loader(PBYTE data_buf, int size, char *dest_path)
     m_usFlashBootSec = PAGEALIGN(BYTE2SECTOR(m_dwLoaderSize)) * 4;
     LOGI("m_usFlashBootSec = %d, m_dwLoaderSize = %d.\n", m_usFlashBootSec, m_dwLoaderSize);

+    unsigned char *loaderHeadBuffer = NULL;
+    if (m_NewIDBFlag == true) {
+        char loaderHeadName[] = "FlashHead";
+        m_dwLoaderHeadSize = getLoaderSizeAndData(loaderHeadName, data_buf, &loaderHeadBuffer);
+        m_usFlashHeadSec = PAGEALIGN(BYTE2SECTOR(m_dwLoaderHeadSize)) * 4;
+        LOGI("m_usFlashHeadSec = %d, m_dwLoaderSize = %d.\n", m_usFlashHeadSec, m_dwLoaderHeadSize);
+    }
+
     calcIDBCount();
     reserveIDBlock();

@@ -380,9 +430,13 @@ bool download_loader(PBYTE data_buf, int size, char *dest_path)
     if ( !pIDBData )
         return false;
     memset(pIDBData, 0, uiSecNumPerIDB * SECTOR_SIZE);
-    if (MakeIDBlockData(pIDBData, loaderCodeBuffer, loaderDataBuffer) != 0 ) {
-        LOGE("[%s:%d] MakeIDBlockData failed.\n", __func__, __LINE__);
-        return false;
+    if (m_NewIDBFlag == true) {
+        MakeNewIDBlockData(pIDBData, loaderHeadBuffer, loaderCodeBuffer, loaderDataBuffer);
+    } else {
+        if (MakeIDBlockData(pIDBData, loaderCodeBuffer, loaderDataBuffer) != 0 ) {
+            LOGE("[%s:%d] MakeIDBlockData failed.\n", __func__, __LINE__);
+            return false;
+        }
     }

     if (WriteIDBlock(pIDBData, uiSecNumPerIDB, dest_path) != 0) {
@@ -392,6 +446,9 @@ bool download_loader(PBYTE data_buf, int size, char *dest_path)
     free(pIDBData);
     free(loaderCodeBuffer);
     free(loaderDataBuffer);
+    if (m_NewIDBFlag == true) {
+        free(loaderHeadBuffer);
+    }

     return true;
 }
-- 
2.34.1
```

Kernel source code patches:

[0001-22485-fix-recovery-fs-mount.patch](https://forlinx-book.yuque.com/attachments/yuque/0/2025/patch/45444988/1751536014251-b23b23c5-f428-4d26-86c0-c04c855dac62.patch)

```diff
diff --git a/arch/arm/configs/OK3506-S_linux_defconfig b/arch/arm/configs/OK3506-S_linux_defconfig
index 53538d515..b3f213c28 100644
--- a/arch/arm/configs/OK3506-S_linux_defconfig
+++ b/arch/arm/configs/OK3506-S_linux_defconfig
@@ -8,7 +8,6 @@ CONFIG_HIGH_RES_TIMERS=y
 CONFIG_PREEMPT=y
 CONFIG_LOG_BUF_SHIFT=18
 CONFIG_BLK_DEV_INITRD=y
-# CONFIG_RD_GZIP is not set
 # CONFIG_RD_BZIP2 is not set
 # CONFIG_RD_LZMA is not set
 # CONFIG_RD_XZ is not set
-- 
2.34.1
```

## 3. Re‑compilation

After applying the above‑mentioned source and kernel patches, re‑compile following the steps below.

Replace the `uboot.img` and `miniloader.bin` files.

[uboot.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2025/zip/45444988/1751536096898-396bec14-70eb-4b96-aeb2-1cccdff80d5a.zip)

[rk3506_spl_loader_v1.04.110.bin.zip](https://forlinx-book.yuque.com/attachments/yuque/0/2025/zip/45444988/1751536102659-c89029a3-6ed0-4882-bde8-50f83f4aadf5.zip)

Replace the `uboot.img` and `rk3506_spl_loader_v1.04.110.bin` files under `source/u‑boot`.

⚠️ Back up the original `uboot.img` and `rk3506_spl_loader_v1.04.110.bin` files before replacement.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3506/OK3506_6_1_99_Buildroot_Image_Flashing_via_USB_Flash_Drive/1751536050209_7ed1ffe9_ccbd_4b6b_8be5_71d72aa82bef.png)

Compile the kernel

```shell
forlinx@ubuntu:~/3506/OK3506-linux-source$ ./build.sh kernel
```

Compile recovery

Delete the directory `source/buildroot/output/rockchip_ok3506_recovery/build/recovery-develop`

Compile `recovery.img`

```shell
forlinx@ubuntu:~/3506/OK3506-linux-source$ ./build.sh recovery
```

Compile buildroot

```shell
forlinx@ubuntu:~/3506/OK3506-linux-source$ ./build.sh buildroot
```

Package update image

```shell
forlinx@ubuntu:~/3506/OK3506-linux-source$ ./build.sh updateimg
```

The packaged update image is located at `OK3506-linux-source/output/update/Image`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3506/OK3506_6_1_99_Buildroot_Image_Flashing_via_USB_Flash_Drive/1751536130701_77f04d74_ebf1_4c6f_941b_19a6822ae9ad.png)

## 4. USB Flash Drive Flashing Verification

The patched image supports USB flash drive flashing, while the default image does not. Before testing, use the PC flashing tool to burn the modified image to the SoM first, then perform flashing via USB flash drive.

You need to prepare a flashing USB drive before use. The creation procedure is the same as that for creating a TF flashing card. Refer to: https://forlinx-book.yuque.com/rh74yu/ok3588/c83a623f011d99af1feb5c769fe16d22#Q8pbX

Follow the USB drive preparation steps in the link; ignore the subsequent flashing behavior described there.

After flashing the patched image to the SoM and preparing the flashing USB drive, plug the USB drive into the USB2.0 port on the OK3506 baseboard. Press the reset button to reboot the development board. Connect the debug port of the board to view debug logs. The appearance of the following log messages indicates that the board has entered the flashing process.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3506/OK3506_6_1_99_Buildroot_Image_Flashing_via_USB_Flash_Drive/1751536164456_bcca8071_8496_4885_adb7_61864cc00094.png)

If the following message appears, this indicates that the flashing process is complete; remove the USB stick and the system will restart automatically. Flashing complete.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Buildroot_System/3506/OK3506_6_1_99_Buildroot_Image_Flashing_via_USB_Flash_Drive/1751536173302_808908b9_e576_4d2f_9e12_9429bcd369d2.png)

