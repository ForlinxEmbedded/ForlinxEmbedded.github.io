# OK3568 4.19.206 Buildroot Auto-start Applications on Boot

Document classification: □ Top secret □ Secret □ Internal information ■ Open   

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Auto-start Applications on Boot

When viewing the /etc/init.d directory, you will find many script files starting with “K” or “S”. These scripts run automatically during system startup and shutdown: scripts beginning with “S” run at boot, while those beginning with “K” run at shutdown.

In Linux buildroot, the desktop application is launched via the /etc/init.d/S99matrix-browser script file. To auto-start your own application, you can modify this file and replace the desktop application startup command with your own program.

Step 1: Create and compile a runnable “Hello World” Qt application to generate the executable binary file helloworld for the development board;

Step 2: Copy the helloworld file generated in Step 1 to the /usr/bin/ directory on the development board;

Step 3: Modify /etc/init.d/S99matrix-browser as shown in the following code, then save and exit:

#!/bin/sh

. /etc/profile

case "$1" in

start)

                printf "Starting matrix: "
    
                export LC_ALL='zh_CN.utf8'
                    # Uncomment to disable mirror mode
        

                # unset WESTON_DRM_MIRROR
                    export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-/var/run}
        

                export QT_QPA_PLATFORM=${QT_QPA_PLATFORM:-wayland}
    
                {
    
                        # Wait for weston ready
    
                        while [ ! -e ${XDG_RUNTIME_DIR}/wayland-0 ]; do
    
                                sleep .1
    
                        done

<font style="color:#FF0000;">#/usr/bin/matrix-browser -no-sandbox --disable-gpu 127.0.0.1 >> /dev/null \&</font>

<font style="color:#FF0000;">/usr/bin/helloworld</font>

                }&
    
        ;;

stop)

                #killall matrix-browser

killall helloworld

                printf "stop finished"
    
        ;;

\*)

        echo "Usage: $0 {start|stop}"
    
        exit 1
    
        ;;

esac

exit 0

Step 4: Enter the sync command to save changes synchronously, then reboot the development board. You will see the helloworld program start automatically.