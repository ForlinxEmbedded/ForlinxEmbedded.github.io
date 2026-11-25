# Driver and Firmware Installation Guide_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms. 

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Application Scope
This procedure has been tested and verified on the OK3588-C platform, where both the rknn3_rk182x_m2_installer_arm64 installation package and the RK1820_RK1828_AI_SDK work properly. Users of OK3576-C and OK3568-C platforms may refer to this procedure, but must recompile the PCIe driver using the kernel source for their respective platform.

## Revision History
| **Date** | **Document Version** | Revision History |
| :---- | :---- | --- |
| 20/10/2026 | V1.0 | Initial release. |


## RK182x Software Package Installation
- Copy the corresponding interface software installation package provided under the RK182X Software Materials\2-Compute Card SDK path to the board.


```bash
rknn3_rk182x_m2_installer_arm64.tgz
```

- Install on the board using the following command:

```bash
cp rknn3_rk182x_m2_installer_arm64.tgz /tmp/installer.tgz
cd /tmp && tar xzf installer.tgz && ./install.sh
```

## RK182x Driver Installation

- Copy the pcie-rkep-build.sh script to the RK35XX platform SDK directory.

![Image](https://www.forlinx.net/docs_assets/images/platform/ai-accelerator/rk1820_rk1828/rk182x_driver_and_firmware_installation_guide-en/image_1795503470399.png)  

- Run the pcie-rkep-build.sh script to compile. 

```bash
./pcie-rkep-build.sh
```

- Once compilation is complete, the corresponding ko file will be generated.

![Image](https://www.forlinx.net/docs_assets/images/platform/ai-accelerator/rk1820_rk1828/rk182x_driver_and_firmware_installation_guide-en/image.png)

- Deploy the compiled  pcie-rkep.ko driver file to:  /usr/lib/modules/pcie-rkep.ko , load the 

  driver: 


```bash
insmod /usr/lib/modules/pcie-rkep.ko
```

- Once the driver is loaded successfully, the system creates a device node: 

```bash
root@rk3588-buildroot:~# ls -l /dev/pcie-rkep-*
crw------- 1 root root 10, 121 Jan 1 12:02 /dev/pcie-rkep-0001:11:00.0
```

- During system startup, the  rknn3_startup script will, before the  RK1820/RK1828 firmware download operation, automatically complete the driver installation, so subsequent startups no longer require manually loading the KO module.

## Environment Verification
After RK1820/RK1828 starts, you can use rknn-smi to obtain information:

![Image](https://www.forlinx.net/docs_assets/images/platform/ai-accelerator/rk1820_rk1828/rk182x_driver_and_firmware_installation_guide-en/image_1795507757483.png)

