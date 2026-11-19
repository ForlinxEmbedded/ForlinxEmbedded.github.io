# Startup Script Configuration (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview
This method applies to the 2601 Forlinx Desktop 20.04 system, R3 version. 
You can use this method to create a startup script; at boot time, the system automatically applies the configuration defined in the script.

## Revision History
| **Date**    | **Manual Version**    | Revision History |
| --- | --- | --- |
| 17/06/2025 | V1.0    | Initial version    |

## 1. Introduction
The 2601 Forlinx Desktop 20.04 system is special in that it involves internal service dependencies, so using rc.local as a startup script is not recommended.

Instead, create a separate startup service. This method describes the specific procedure for creating one.

## 2. Modification Method
### 2.1 Creating the Service Configuration File
Use the following command to create the service configuration file:

```plain
root@FCU2601:~# vi /lib/systemd/system/start.service 
```

In this file, enter the following content and save:

```plain
[Unit]
Description=/etc/start.local Compatibility
ConditionFileIsExecutable=/etc/start.local
After=network.target
[Service]
Type=forking
ExecStart=/etc/start.local start
TimeoutSec=0
RemainAfterExit=yes
GuessMainPID=no
[Install]
WantedBy=multi-user.target
Alias=start.service
```

The meaning of the three configuration sections above:

[Unit] section: startup order and dependencies

[Service] section: startup behavior, how it is started, and the startup type

[Install] section: defines how to install this configuration file, that is, how to enable startup at boot

### 2.2 Creating the Startup Script
The configuration file above specifies the startup script location as /etc/start.local. To place the script elsewhere, modify the corresponding path in that configuration file.

```plain
root@FCU2601:~# vi /etc/start.local
```

You can edit this script as needed. The example below waits 10 seconds, then saves the text "this just a test" to the /usr/local/text.log file.

```plain
#! /bin/bash
sleep 10
echo "this just a test" >> /usr/local/text.log
```

After saving the script, add execute permission to it:

```plain
root@FCU2601:~# chmod +x /etc/start.local
```

### 2.3 Enabling the Service at Startup
By default, systemd reads configuration files under /etc/systemd/system and starts them at boot. Files in this directory link to files under /lib/systemd/system/.

Use the following command to create the necessary symbolic links so the service starts at boot:

```plain
root@FCU2601:~# systemctl enable start
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Startup_Script_FlDesktop20.04-EN/007.png)

Save and reboot. The start.local script will then run at system startup.

```plain
root@FCU2601:~# sync
root@FCU2601:~# reboot
```

If you do not want the service to start at boot, use the following command to disable it:

```plain
root@FCU2601:~# systemctl disable start
```

## 3. Verification Method
The example startup script above already saves the test text to the /usr/local/text.log file. You can use the cat command to check whether the corresponding information exists in that file.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu2601/FCU2601_Startup_Script_FlDesktop20.04-EN/008.png)

As shown in the figure, if it exists, the startup script has been created successfully.

## 4. FAQ
- **The Device's Environment Variables Are Not Fully Configured**

Because systemd controls startup services, the specific startup order cannot be determined unless a startup order and dependencies are explicitly defined. This means that when a startup service runs, some environment variables may not yet be configured, causing programs that depend on them to fail to start.

Adding "sleep 10" to the startup script, as mentioned above, is not strictly necessary. However, to ensure that other services have finished running and environment variables are fully configured, it is recommended that you keep this pause statement.

- **The Root User's Environment Lacks Environment Variables**

This startup script runs as the root user. During actual testing, because the root user's environment variables differ from those of a regular user, some programs may fail to run as root.

In this case, consider the following solutions:

​      ○ **Switch to the Forlinx User**

You can use the following format in the startup script to run a program. The example opens the Firefox browser as the forlinx user:

```plain
su - forlinx -c "firefox"
```

​     ○ **Add Environment Variables to the Root User's Environment**

You can manually add environment variables in the startup script. The following are examples of environment variables commonly used by programs:

```plain
export XAUTHORITY=/home/forlinx/.Xauthority
export DISPLAY=:0.0
export QT_QPA_PLATFORM_PLUGIN_PATH=/usr/lib/aarch64-linux-gnu/qt5/plugins/platforms/
```
