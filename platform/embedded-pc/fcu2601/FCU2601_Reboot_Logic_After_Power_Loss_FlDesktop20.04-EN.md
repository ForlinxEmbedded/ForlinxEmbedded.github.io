# Reboot Logic After Power Loss and Restoration (Forlinx Desktop 20.04)

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History
| **Date**                   | **Manual Version**                   | Revision History   |
| --- | --- | --- |
| 22/09/2025          | V1.0                   | Initial release                   |

## Overview

By default, the R2 image of Forlinx Desktop for the FCU2601 includes a script named FCU2601_deamon.sh.

This script repeatedly checks whether the device has lost power. If power is lost for more than two seconds and then restored, the script reboots the system.

This script exists because the FCU2601 may be installed in remote areas where power fluctuations can occur. If a power loss occurs, the FCU2601's built-in large capacitor keeps the system running for a short time, giving running programs time to save data and avoid data loss.

During a power loss, to keep the system running longer, external devices such as USB lose power before the system does. Even after power is restored, they do not resume working and require a reboot to reset.

Hence this script, which proactively reboots the system after detecting a prolonged power loss.

The following is the recommended modification to the script at /usr/local/bin/FCU2601_deamon.sh:

Because of power fluctuations, the capacitor may not be fully charged. In this case, a power loss of less than two seconds can also cause USB devices to lose power, but the original script logic would not trigger a reboot.

Therefore, instead of rebooting only after a power loss of more than two seconds, reboot whenever power is restored after any detected power loss, and do so after 10s.

```shell
#!/bin/bash

HDMI_STATUS="$(cat /sys/class/drm/card0-HDMI-A-1/status)"
if [ "$HDMI_STATUS" = "connected" ]
then
        echo '1' > /usr/local/bin/hdmistatus
else
        echo '0' > /usr/local/bin/hdmistatus
fi


STATE_FILE="/sys/class/gpio-input/POW_DET/state"
last_state=$(cat $STATE_FILE)
start_time=0
INTERVAL=0.1
THRESHOLD=0  # This value was originally 2; reboot when the power-loss duration exceeds it

while true; do
    current_state=$(cat $STATE_FILE)

    if [ "$current_state" -eq 1 ]; then
        if [ "$last_state" -eq 0 ]; then
            echo "FCU2601 power supply is disconnected !!"
            start_time=$(date +%s)
        fi
    else
        if [ "$last_state" -eq 1 ]; then
            end_time=$(date +%s)
            duration=$((end_time - start_time))

            if [ "$duration" -gt $THRESHOLD ]; then
                echo "FCU2601 power supply disconnected above two seconds !! System will rebooting"
                sleep 10  # This is newly added; wait 10 seconds before a confirmed reboot
                sudo reboot
            fi
            echo "FCU2601 power supply is connected !!"
            start_time=0
        fi
    fi

    last_state=$current_state

    sleep $INTERVAL
done

```
