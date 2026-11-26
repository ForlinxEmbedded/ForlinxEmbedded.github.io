# Virtual Memory Expansion (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
This method applies to the 2601 Forlinx Desktop20.04 system, R3 version. 
Use this method to create swap space and thereby expand virtual memory.

## Revision History
| **Date**    | **Manual Version**    | Revision History |
| --- | --- | --- |
| 17/06/2025 | V1.0    | Initial release    |

## 1. Introduction
In the 2601 Forlinx Desktop20.04 system, the recommended way to build applications is to compile the source code directly on the 2601 system rather than cross-compiling. When building large Qt programs, this has led to insufficient memory and interrupted builds.

When this happens, use this method to expand virtual memory so that large programs compile successfully.

## 2. Modification Method
The recommended approach is to create a startup script that automatically activates swap space at every boot, expanding virtual memory.

Refer to the link below to create a startup script:

[FCU2601 4.19.206 Forlinx Desktop20.04 Startup Script Creation](https://forlinx-book.yuque.com/rh74yu/rkword/mxffp6vdy4e41tfg)

The recommended startup script content is as follows:

```plain
#!/bin/bash 
 
# Ensure the /swap directory exists (create it first regardless of whether the file exists, to avoid later failures) 
mkdir -p /swap/ 
 
# Use the file test operator to check whether the swap file exists (recommended method) 
if [ -f "/swap/swap0" ]; then 
    echo "swap file already exists: /swap/swap0" 
else 
    echo "swap file does not exist, creating..." 
    # Create a 4GB empty file (bs=64M, count=64 → 64M×64=4096M=4GB) 
    dd if=/dev/zero of=/swap/swap0 bs=64M count=64 status=progress 
    # Set permissions (only root can read and write, for security) 
    chmod 0600 /swap/swap0 
fi 
 
# Format the swap file (whether newly created or not, ensure the format is correct) 
mkswap /swap/swap0 
```

This method creates a swap partition file and uses a startup script to format the file and activate the swap partition at every boot, expanding virtual memory.

## 3. Verification Method

You can run the script directly or reboot the system. Once the swap partition file is created and activated, use the following command to check whether virtual memory has expanded:

```plain
root@FCU2601:~# free -h
```

Virtual memory not expanded:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Virtual_Memory_Expansion_FlDesktop20.04-EN/017.png)

Virtual memory expanded:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Virtual_Memory_Expansion_FlDesktop20.04-EN/018.png)

## 4. Common Issues
On the first run, the script creates the swap partition file. Because the file is large, the command line may appear unable to accept input.

In this case, wait patiently and do not exit the program midway; otherwise, the created swap partition file may be corrupted or smaller than the configured size.
