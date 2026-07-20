# USB Resistive Touch Calibration Method

USB touch screens generally use universal touch drivers and can be used directly after connection. However, the parameters for touch position may not always be accurate, so a more universal screen calibration method is provided here.

The following screenshots and tests are based on the FCU2601.

## Linux System

1. Enter the system and use the following command to enable the calibration function:

```shell
vi /etc/xdg/weston/weston.ini
```

Delete the **<font style="color:#DF2A3F;"># symbols and spaces </font>** from these two entries in the image below, carry out the standard configuration, and then restart.

![](https://cdn.nlark.com/yuque/0/2024/png/45471259/1730533444293-2e3b0c1d-471b-4bdc-b1e6-ddfaf1587fb1.png)

2. After restarting, use the command below to launch the calibration programme and calibrate the four points; the touch position will then return to normal without the need for any further configuration.

```shell
weston-touch-calibrator
```

After restarting again, the calibration matrix parameters will be automatically added to the environment variables.

## Ubuntu System
Touch input is managed via libinput; the path to the default configuration file is as follows:

```shell
/usr/share/X11/xorg.conf.d/40-libinput.conf
```

To manually configure libinput for touch rotation, you must first create the following path on the board:

```shell
mkdir -p /etc/X11/xorg.conf.d/
```

Copy 40-libinput.conf to the directory where you created it.

Open the file, locate the field labelled "libinput touchscreen catchall", and add the following content to the field:

```shell
Section "InputClass"
        Identifier "libinput touchscreen catchall"
        Option "CalibrationMatrix" "0 1 0 -1 0 1 0 0 1
        Option "TransformationMatrix" "1.02 0 -0.003 0 1.09666775 -0.055 0 0 1"
        MatchIsTouchscreen "on"
        MatchDevicePath "/dev/input/event*"
        Driver "libinput"
EndSection

```

The nine numbers below form a rotation matrix:

```shell
Option "CalibrationMatrix" "0 1 0 -1 0 1 0 0 1
```

It can be modified according to the following form as required:

![](https://cdn.nlark.com/yuque/0/2024/png/45471259/1730970597953-fb35bb29-0fa7-4a89-a126-a8dc5ca6af7e.png)





The following shows the fine-tuned scaling matrix:

```shell
Option "TransformationMatrix" "1.02 0 -0.003 0 1.09666775 -0.055 0 0 1"
```

The number in the top-left of the matrix represents the x-axis scaling, whilst the number in the top-right represents the x-axis offset.

The middle number on the left represents the y-axis scaling, and the middle number on the right represents the y-axis offset.

The system recommends using the calibration program **xinput-calibrator**. After calibration is completed, it will report the touch parameters and the total parameters.  
Based on the ratio, calculate the values and fill them into the scaling matrix above.

```shell
apt-get update
apt-get install xinput-calibrator
```



