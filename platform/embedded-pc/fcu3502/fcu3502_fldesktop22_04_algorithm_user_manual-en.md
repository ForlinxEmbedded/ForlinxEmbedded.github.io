# FlDesktop22.04_Algorithm User's Manual__V1.0 

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Overview
### 1.1 Introduction
The AI FCU application can be adapted to multiple platforms. Once installed, it can be accessed and configured via the web.

### 1.2 Impact on Other Components
#### 1.2.1 Impact on the Default Web Service on Port 80
The program files for the AI-enabled Field Control Unit (AI FCU) are stored in the `/web` directory. If the target FCU already hosts a native pre-installed application under this `/web` path, the original web service will be completely overwritten and removed during the AI application deployment. Note that the dedicated AI web interface covers nearly all native web features pre-bundled on the device.

Take the FCU3101 model as a typical case: its factory-configured Nginx service is set to auto-start on system boot by default, a status that can be verified via the command `systemctl status nginx`. After the AI application is fully installed, however, the original Nginx service will be disabled by default — an effect identical to running the `systemctl disable nginx` operation.

#### 1.2.2 Impact on Time Zone
The AI-enabled Field Control Unit (AI FCU) modifies the system default time zone to the path `/usr/share/zoneinfo/Asia/Shanghai` after deployment. If the deployment region of your device does not correspond to this time zone, please manually configure the target local time zone. You may refer to the following command to complete the Shanghai time zone configuration:

```plain
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### 1.3 Starting the Web Service
The following configuration is found at the bottom of /etc/rc.local:

```plain
/web/shell/up.sh 
```

up.sh starts the boa service and runs the start.sh script. boa is the backend web service, with a default port of 8. To change this port, open /web/boa/boa.conf and modify the number in Port 80.

The following two lines are configured in /etc/profile:

```plain
export LD_LIBRARY_PATH=/web/lib:/web/lib/opencv2
export PATH=$PATH:/web/shell
```

Do not modify this configuration. The PATH is configured so that the four scripts up.sh, start.sh, stop.sh, restart.sh, and status.sh in /web/shell can be invoked directly from the command line.

```plain
start.sh 
```

Start the web service.

```plain
stop.sh
```

 Stop the web service.

```plain
restart.sh
```

Restart the web service.

```plain
status.sh 
```

Check the web service status.

### 1.4 Impact on the Existing System
- When installed on the FCU1501, the system's built-in mosquitto is disabled by default. 
  See the programs and configuration in the /web/mosquitto/ directory.

```plain
ps aux | grep mosquitto
```

- /web/boa/boa is the web service and occupies the system's port 80.

- Video capture consumes significant CPU resources.

- Video frame inference consumes significant NPU resources.

- If the alarm video feature is enabled (saving a total of 10 seconds of footage before and after an alarm as an mp4 file), it will consume significant memory and some CPU resources. Enable this feature only on devices with at least 8 GB of memory. It is not recommended on the FCU3101, and should not be enabled unless necessary.

- Live view preview consumes significant CPU and network resources. Live frames are transmitted as images marked with inference results at several frames per second, and also consume RGA hardware resources.

- If the mobile network is configured for automatic connection, the webservice process will maintain the mobile network connection. If you want to control the mobile network with a script, disable the automatic connection option on that page.

- If application watchdog feeding is enabled on the watchdog page, the appwatching process must not remain unstarted beyond the timeout period, or the system will reboot.

- For NTP time synchronization, if the service is enabled, ensure no other NTP service is running on the system; otherwise this service will compete with others for time correction (if the clock sources differ, the time may fluctuate slightly back and forth).

## 2. Using the AI Web Interface
### 2.1 User Login

Before logging in, set an accessible IP address for the device. Once you can reach that IP (for example, by pinging it), open a browser and enter http://IP to access the web interface.

![](images_fcu3502_desktop22_en/img010.png)

The account and password fields on the login page display the initial account and password. Enter the username and password as prompted, then click the Login button.

**<font style="color:#548DD4;">Tip: Select "Remember Password" to have the username and password filled in automatically at the next login.</font>**

### 2.2 Session Persistence
After the page stops requesting backend APIs, the backend keeps the login valid for 24 hours. However, the web interface globally renews the session every hour, so the login rarely expires as long as the web interface remains open. If the page is moved to the background, the browser may stop running the web JS code; if this lasts more than 24 hours, the login will expire. In general, as long as you keep using the page normally and keep it displayed on screen, the login will not expire.

### 2.3 Home Page
The home page displays the monitoring dashboard, including camera online status, real-time alarms, camera previews, and various statistics.

![](images_fcu3502_desktop22_en/img011.png)

The monitoring dashboard on the home page supports full-screen display. Click the full-screen button to the left of the time in the upper right ![](images_fcu3502_desktop22_en/img012.png) to display the content in full screen:

![](images_fcu3502_desktop22_en/img013.png)

Press Esc or click the icon again to exit full-screen mode.

The live monitoring on the home page also supports double-clicking a frame to display it full screen (showing only the live monitoring frame).

![](images_fcu3502_desktop22_en/img014.png)

The upper-right corner of the live view shows three vertically arranged dots (also available in full-screen mode). Click them to display a camera list overlay, where you can select multiple cameras for preview.

![](images_fcu3502_desktop22_en/img015.png)

The preview feature mainly shows inference results; the annotations in the upper-left corner of the bounding boxes in the frame indicate the inference status.

![](images_fcu3502_desktop22_en/img016.png)

As shown above, with the Fall Detection algorithm enabled and the inference results including both person object detection and human pose detection, the bounding boxes and pose keypoint connections are drawn.

### 2.4 Algorithms
#### 2.4.1 Algorithm Types
Algorithm types group algorithms into categories, so that when selecting an algorithm for a camera you can first choose a category and then an algorithm. On the algorithm category page, you can add, edit, and delete categories.

![](images_fcu3502_desktop22_en/img017.png)

![](images_fcu3502_desktop22_en/img018.png)

The display order is sorted by number in ascending order.

#### 2.4.2 Parameter Types
Some algorithms share the same parameters. For example, fire monitoring, missing safety helmet detection, and smoking detection are all object detection algorithms with identical parameters, so when deploying them you can assign them the same parameter type. This page is generally maintained by algorithm developers, since only they know which parameters an algorithm uses.

#### 2.4.3 Algorithm List
The algorithm list maintains the algorithms in the system. Adding and editing algorithms on this page is handled by developers, since only they know which algorithm file (libxxx.so) an algorithm belongs to and which model file (xxx.rknn) it uses. After developers have configured an algorithm, they export it as a {algorithm_name}.algo file, which users can obtain and import.

To add an algorithm:

![](images_fcu3502_desktop22_en/img019.png)

The algorithm name summarizes the algorithm's function and helps users identify it.

The algorithm type is used only to select a category when choosing an algorithm for a camera; classify it according to the algorithm's type.

The parameter type is closely related to the algorithm code. After a parameter type is selected, the code can access the parameters configured for the camera in the camera list.

The model file is selected according to the inference file used by the algorithm. The inference file must first be uploaded by clicking "Manage Model Files" on the algorithm list page before it can be selected here.

The algorithm file specifies which dynamic library the algorithm is compiled into. The dynamic library must first be uploaded by clicking "Manage Algorithm Files" on the algorithm list page before it can be selected here.

The algorithm class name is the name of the C++ class that implements the algorithm.

The algorithm description is only used to describe the algorithm's function and has no effect at runtime.

Default parameters are filled in automatically according to the selected parameter type. Once default parameters are entered, new cameras will be populated with these defaults.

For example, the smoke alarm algorithm is configured as follows:

![](images_fcu3502_desktop22_en/img020.png)

For algorithm development, contact us to obtain example code.

After adding an algorithm, you can enable or disable it using the Enable/Disable buttons in the Operation column. Note that enabling or disabling an algorithm only affects whether it can be selected in the camera list; disabling an algorithm already assigned to a camera does not affect that camera's operation.

The model file management interface is as follows:

![](images_fcu3502_desktop22_en/img021.png)

First click "Select File", choose an xxx.rknn file, then click Upload. If the file name matches an existing model name, a dialog will ask whether to continue:

![](images_fcu3502_desktop22_en/img022.png)

Click Confirm to update the file. If no file with the same name exists, an upload success message appears directly.

![](images_fcu3502_desktop22_en/img023.png)

Once the algorithm is ready, click Export to export its xxx.algo file. Send the file to users for import; they can then use the algorithm to configure cameras.

### 2.5 Image Library
#### 2.5.1 Face Library
The face library page maintains the information required for face recognition. Photos should preferably resemble ID photos, with the face occupying most of the image.

![](images_fcu3502_desktop22_en/img024.png)

Add: Click Add to enter the name, gender, and other information for the face, upload a face image (jpg/png supported), then click Save.

Edit: For saved entries, you can modify the information and image.

Delete: Click Delete to remove the corresponding face entry.

Importing the face library:

Prepare the face images and compress them to a width of 600 pixels, then convert all images to .jpg format (.png is not supported). After adding at least one face entry on the page, click Export, extract the exported archive, and edit the human_face.csv file inside it (editable with Excel or WPS). Fill the id column in the first column with values from 1 to N (Excel's drag-to-increment feature can number the rows automatically), and prepare a {id}.jpg file for each id (for example, an entry with id 1 needs a 1.jpg image). Then select all files and compress them into an xxxx.zip file. Click Import, select the archive, and click Open to complete the import. If an error occurs, a specific error message will be shown; correct the data or add missing images as indicated by the error.

### 2.6 Cameras
#### 2.6.1 Camera List
![](images_fcu3502_desktop22_en/img025.png)

The camera list page displays all configured cameras.

#### 2.6.2 Adding a Camera
Click Add Camera:

![](images_fcu3502_desktop22_en/img026.png)

![](images_fcu3502_desktop22_en/img027.png)

As shown above, **<font style="color:#0000FF;">Name</font>** can be filled in according to the camera's location or function.

**<font style="color:#0000FF;">Connection Address</font>** must be filled in with the RTSP address provided by the camera manufacturer. For example, for a Hikvision camera, obtain the camera IP, port, username, and password, then replace them in the following format:

rtsp://username:password@IP:port/Streaming/Channels/1

For example, the following is the RTSP streaming address of a camera with IP 192.168.12.6, port 554, username admin, and password 12345678:

rtsp://admin:12345678@192.168.12.68:554/Streaming/Channels/1

You can also click the Select button below the connection address field to add an ONVIF or GB28181 camera, or select a video. See the following sections for details.

After entering the connection address, click the Snapshot (Test Camera) button to take a snapshot and verify that the camera works, then click "Get Parameters Below":

![](images_fcu3502_desktop22_en/img028.png)

**<font style="color:#0000FF;">Encoding format, frame size, and frame rate</font>** are all detected after clicking this button.

**<font style="color:#0000FF;">Inference Frequency</font>**: Set the inference frequency based on the camera's frame rate. For example, a frame rate of 25 means 25 camera frames are captured per second; an inference frequency of 5 means one inference every 5 frames, resulting in 4 inferences per second. Set an appropriate frame rate according to actual needs to meet business requirements while making reasonable use of GPU inference and RGA image-processing resources.

**<font style="color:#0000FF;">Enabled Algorithms</font>**: Click the category tabs below to switch between algorithms in each category. If there are many algorithms, you can also enter a name to filter them. Once you find the algorithm you want to add, click its name to add it to Enabled Algorithms:

![](images_fcu3502_desktop22_en/img029.png)

**Note: Once added, an algorithm no longer appears in the categories below but is shown under Enabled Algorithms above.**

After an algorithm is added, its parameters are displayed below. Click the algorithm name under Algorithm Parameters to expand and view the detailed parameters.

![](images_fcu3502_desktop22_en/img030.png)

![](images_fcu3502_desktop22_en/img031.png)

The specific parameters depend on each algorithm; see the Algorithm Introduction chapter for details.

After completing the settings, click Save to finish adding the camera. <font style="color:#FF0000;">Newly added cameras are Disabled by default. Click the status text, or the Disable/Enable buttons in the Operation column, to toggle the camera's status.</font>

**<font style="color:#0E00C6;">Practical Tips (when adding a large number of cameras):</font>**

- <font style="color:#0E00C6;">First add one camera named "Camera 01".</font>
- <font style="color:#0E00C6;">Use the Clone button. In the dialog, the camera name automatically increments by 1 to "Camera 02", and the IP in the RTSP address also increments by 1, so you can simply click Save. Continue cloning until you have the required number of cameras.</font>
- <font style="color:#0E00C6;">Click "More Functions" above, then "Export Camera Configuration" to download an Excel file. Edit each camera's name and address in the file (note: only columns other than id can be modified; rows cannot be added or deleted), then click "Import Camera Configuration" and select the file you just exported and edited. All cameras are then configured.</font>
- <font style="color:#0E00C6;">If all cameras use the same algorithms and parameters, no further action is needed. Otherwise, adjust the algorithms and parameters for each camera individually.</font>

The buttons in the camera Operation column are described below:

**Disable/Enable:** Click the "Enabled" or "Disabled" text in the Status column to toggle.

**Edit:** Modify an added camera;

**More:** Includes the following functions.

**Recorded Video List**: Click the More button next to a camera, then click Recorded Video List. In the dialog, click Send Recording Request; another window opens where you enter the recording duration in minutes (1-10) and confirm. After the specified time has elapsed, reopen this list to see the recorded videos, which can be played, downloaded, or deleted:

![](images_fcu3502_desktop22_en/img032.png)

**<font style="color:#FF0000;">Note: While recording, inference is paused and no inference boxes appear in the live view.</font>**

**Sync Device Algorithms:** Synchronize the algorithms and parameters set for the current camera to other cameras, so they use the same algorithms and parameters. Clicking this opens a dialog listing all cameras.

**Clone:** Add a new camera based on this camera's information, with modifications.

**Detect:** Detect the camera's encoding format, resolution, and frame rate (same as "Get Parameters Below" in the edit dialog).

**Alarms:** Click to jump to the Alarm page, filtered by default to show this camera's alarms.

**Delete:** Clicking opens a confirmation dialog asking whether to delete the camera; click Confirm to delete. Enabled cameras cannot be deleted.

**More Functions button:** Clicking opens a dialog with Export Camera Configuration and Import Camera Configuration. After exporting, you can modify each camera's address and name, then import the file again. This is useful when you need to batch-edit camera addresses.

#### 2.6.3 Live View
Click the Camera > Live View menu on the left to open the live view page, which displays the first enabled camera by default.

![](images_fcu3502_desktop22_en/img033.png)

This page is mainly used to check camera capture status and alarm algorithm hits. When an alarm algorithm hits a target, the inference bounding box information is pushed to the live view for display.

When different frames are selected, the backend automatically tiles them according to the count. 4-grid, 9-grid, and 16-grid layouts are supported.

![](images_fcu3502_desktop22_en/img034.png)

**<font style="color:#FF0000;">Note: A detected target does not necessarily trigger an alarm. Alarms are generated according to the algorithm's threshold parameters. For example, safety helmet detection may require several hits (configurable) to produce one alarm, and only one alarm is generated within a given time interval.</font>**

#### 2.6.4 Real-Time Alarms
Click the Play button to the left of the avatar on the page to toggle real-time alarm display:

![](images_fcu3502_desktop22_en/img035.png)

![](images_fcu3502_desktop22_en/img036.png)

After the Play button is clicked, it changes to a Pause button with two vertical bars. When a real-time alarm occurs, a message box pops up on the left side of the page.

![](images_fcu3502_desktop22_en/img037.png)

If the Pause button is clicked, it switches back to the Play button. In this state, a real-time alarm is indicated only by a number on the small bell icon:

![](images_fcu3502_desktop22_en/img038.png)

#### 2.6.5 Alarm List
Click the small alarm bell in the upper-right corner of the page, or click the Alarms > Alarm List menu on the left, to open the alarm list page. This page shows the historical alarm records for all cameras.

![](images_fcu3502_desktop22_en/img039.png)

Click the Details button on the right to view more detailed information, including a preview of the alarm video (if the alarm video feature is enabled on the device).

![](images_fcu3502_desktop22_en/img040.png)

To enable alarm video, set app.alarm_mp4_enable to true in the application configuration /web/bin/cfg/config.json, then restart all services on the Application > Application Monitor page (or run /web/shell/restart.sh in the device's SSH terminal).

On this page, you can acknowledge, mark as false alarm, or delete alarm records.

![](images_fcu3502_desktop22_en/img041.png)

Select the checkboxes on the left and click the corresponding buttons in the upper right to perform batch operations.

![](images_fcu3502_desktop22_en/img042.png)

**<font style="color:#FF0000;">Note: The last button</font>![](images_fcu3502_desktop22_en/img043.png)<font style="color:#FF0000;"> clears all alarm records. It is typically used after deployment testing passes and before going live. Use with caution!!</font>**

#### 2.6.6 Discovering Cameras via ONVIF
This feature requires one of the network interface's IP addresses to be on the same subnet as the camera. For example, if the camera address is 192.168.1.xxx, configure an IP in that subnet on the device. The new web interface provides a method for setting multiple IPs, as shown below:

![](images_fcu3502_desktop22_en/img044.png)

After setting an IP in the same subnet, click the Edit button next to a camera on the camera list page, or click Add Camera, then click the Select button below the connection address:

In the dialog, select the ONVIF tab, choose an IP in the same subnet (be sure to select the one you configured), and click "Discover ONVIF Devices". The camera drop-down list will be populated. Select the camera to bind and enter the username and password set on the camera's ONVIF page. Note that these must be the ONVIF credentials, not the platform login credentials. The protocol-binding user interface typically looks like the screenshots below:

![](images_fcu3502_desktop22_en/img045.png)

![](images_fcu3502_desktop22_en/img046.png)

However, the camera's own management user does not mention the word "protocol", as shown below:

![](images_fcu3502_desktop22_en/img047.png)

After entering the correct username and password, click Get RTSP Address and wait a few seconds; the RTSP address field will be populated.

The following error may occur when getting the RTSP address:

<font style="color:#F56C6C;">fault SOAP-ENV:Receiver [no subcode] "No route to host" Detail: connect failed in tcp_connect()</font>

This is generally caused by conflicting routes. Enter ip route show to see output like the following:

```plain
root@FCU3501:~# ip route show
default via 172.20.0.1 dev eth0 proto static metric 102 
default via 10.10.23.254 dev wlx3a7acc708d34 proto dhcp metric 605 
default via 10.10.23.254 dev wlx387acc708d34 proto dhcp metric 20604 
10.10.20.0/22 dev wlx387acc708d34 proto kernel scope link src 10.10.20.198 metric 604 
10.10.20.0/22 dev wlx3a7acc708d34 proto kernel scope link src 10.10.20.197 metric 605 
169.254.0.0/16 dev docker0 scope link metric 1000 
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 
172.20.0.0/24 dev eth0 proto kernel scope link src 172.20.0.252 metric 102 
192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.253 metric 102 
192.168.1.0/24 dev eth1 proto kernel scope link src 192.168.1.202 metric 101 linkdown 
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.253 metric 102 
192.168.6.0/24 dev eth0 proto kernel scope link src 192.168.6.253 metric 102
```

We can see that 192.168.1.0/24 exists on both eth0 and eth1. Set eth1 to a different subnet and enable it to automatically remove that route. After removal, repeat the operation to obtain the RTSP address, as shown below:

![](images_fcu3502_desktop22_en/img048.png)

Click OK to return to the Edit Camera page, then click Snapshot to verify the correct camera is selected. Click "Get Parameters Below" to obtain the frame rate, fill in the frame-skip count accordingly, select the appropriate algorithm, and save.

#### 2.6.7 Selecting a GB28181 Camera
First configure the server parameters as described in the GB28181 Configuration section below, as shown:

![](images_fcu3502_desktop22_en/img049.png)

Configure GB28181 on the camera side accordingly, as shown:

![](images_fcu3502_desktop22_en/img050.png)

After configuration, wait about 1 minute.

On the camera list page, click Add Camera or Edit a camera, click the Select button in the drawer, and select the GB28181 tab to see the list of online cameras. Choose the appropriate camera; the remaining steps are the same as for adding an RTSP address camera.

![](images_fcu3502_desktop22_en/img051.png)

#### 2.6.8 IP Configuration
Different FCU devices use different operating systems. Depending on the IP management tools available in each system, you can choose different methods to set the device IP manually. This method does not rely on the web interface and is suitable for users familiar with Linux system configuration or those who want to control the network through scripts.

The old web interface allows only 1 IP. Connect to the device's shell terminal (you can also connect via System > SSH Terminal in the web interface) and run the appropriate commands to temporarily or permanently assign multiple IPs to a network interface. Using eth0 as an example:

On Ubuntu systems that use nmcli to manage IPs (such as the FCU3501), use the following commands to set multiple IPs:

**Set directly:**

```plain
nmcli con mod "Wired connection 1" ipv4.addresses "172.20.0.250/24,192.168.6.250" ipv4.gateway "172.20.0.1" ipv4.dns "222.222.222.222" ipv4.method manual
```

**Add one to the existing settings:**

```plain
nmcli connection modify "Wired connection 1" +ipv4.addresses 192.168.1.173/24
```

Command to apply immediately:

```plain
nmcli con up "Wired connection 1"
```

<font style="color:#DF2A3F;">**Note that "Wired connection 1" here is eth0 and "Wired connection 2" is eth1, as shown by the following command:**</font>

```plain
root@FCU3501:~# nmcli con show
NAME                UUID                                  TYPE      DEVICE          
Wired connection 1  3efa44bd-0c31-3b3c-8da8-1c12e48ab072  ethernet  eth0            
docker0             0279a6f9-9285-4412-a84f-ed51e6e210cd  bridge    docker0         
forlinx-wlan        7e8a348d-6ac3-4a95-bd14-ca5829c53d5b  wifi      wlx387acc708d34 
forlinx-wlan 1      2e5bfe98-4be4-402e-af73-71cbc04f2a9c  wifi      wlx3a7acc708d34 
Wired connection 2  4bf9f312-22bc-3f48-9b62-f96834bf5334  ethernet  eth1   
```

For more operations, refer to the nmcli documentation.

For the FCU3101, which uses systemd-networkd to manage the network, refer to that tool's documentation to configure /etc/systemd/network/10-eth0.network or /etc/systemd/network/20-eth1.network.

Command to apply immediately: systemctl restart systemd-networkd.

Command to temporarily add an IP (lost after reboot):

ip addr add 192.168.6.24/24 dev eth0

The above command takes effect immediately but is lost after reboot. For a permanent change, modify the configuration file or use the nmcli commands above.

View all IPs bound to eth0: ip addr show eth0

Because this procedure is complex, it is recommended to upgrade to the new web version, which lets you set multiple IPs directly from the web interface.

#### 2.6.9 Inference Video (for Testing)
Version 1.0.1 adds video inference. Usage is as follows:

Click the Edit button on the Camera > Camera List page, then enter the video's absolute path in the field below the connection address in the drawer on the right (if you know where the .mp4 file is on the device), or click the Select button at the lower-left of the field (if the video has not yet been transferred to the device).

![](images_fcu3502_desktop22_en/img052.png)

After clicking Select, open the MP4/JPG tab in the new dialog to see the list of uploaded files. Video inference supports videos or images in mp4/jpg/png format. Click Upload to select a video or image; after uploading, select the uploaded video (file names are changed, so note the approximate file size to identify it).

![](images_fcu3502_desktop22_en/img053.png)

After selection, the connection address is filled with the file's absolute path. For a video, you can also click "Get Parameters Below" to obtain the frame rate and fill in the frame-skip parameter accordingly. The remaining steps are the same as for a normal camera; after adding the desired algorithm, click Save.

After saving, if the status is Disabled, click the "Disabled" label to switch to "Enabled". Once enabled, wait a few seconds and click the Refresh button above to see the "Inferring" status:

![](images_fcu3502_desktop22_en/img054.png)

The Refresh button is at the top of the page, as shown:

![](images_fcu3502_desktop22_en/img055.png)

After waiting for the video duration (i.e., until playback finishes), click Refresh again. The camera will show as Enabled but offline (playback complete), with a blue Play button next to the connection address:

![](images_fcu3502_desktop22_en/img056.png)

Click the Play button to preview the mp4 playback or download the file directly. On the FCU3501, videos are saved as mp4 files, which browsers can play directly for preview. To download, right-click the previewed video and select "Save video as" to save it locally. On the FCU3101, videos are saved in avi format and downloaded directly by the browser. Note that operations may differ between browsers, so the button names you see may vary.

For a single image, refresh the page two seconds after enabling the camera to see the Play button directly (equivalent to 1 video frame, played very quickly).

### 2.7 Users
#### 2.7.1 User Management
On the User Management page, you can add, edit, and delete users.

![](images_fcu3502_desktop22_en/img057.png)

Username, password, name, and role can all be modified.

![](images_fcu3502_desktop22_en/img058.png)

The built-in accounts at the bottom cannot be deleted and their roles cannot be changed, to prevent accidental loss of all manageable web accounts.

![](images_fcu3502_desktop22_en/img059.png)

**<font style="color:#FF0000;">Note: The Role drop-down list is populated from the Role Permission Management page. If you do not need detailed user differentiation, simply use the built-in admin account.</font>**

#### 2.7.2 Role Management
If you need to differentiate user permissions, open the Role Permission page, add several roles, and configure different page and button operation permissions for each role, as shown:

![](images_fcu3502_desktop22_en/img060.png)



The first and second levels correspond to the first- and second-level menu names on the left; the third level corresponds to the operation buttons within the page. "View" represents access permission to a page; only when checked can the page be accessed, otherwise accessing it redirects to a no-permission page.

**<font style="color:#FF0000;">Note: The super administrator role does not appear in the role list. This user is not subject to permission control and has all operation permissions by default.</font>**

![](images_fcu3502_desktop22_en/img061.png)

### 2.8 Network
#### 2.8.1 Wired Network
The Wired Network page displays the network interface's MAC address, IP address, and other information.

![](images_fcu3502_desktop22_en/img062.png)

Click the Settings button to configure the network. The new web interface supports setting multiple IPs, allowing you to bind different subnet IPs to the same network interface. However, if IP addresses are not scarce on site, it is recommended to use a single IP for management.

The new web interface lets you set the enabled status of an IP. If Auto Connect is grayed out, the interface will not be enabled automatically after saving or rebooting. Disable or enable it as needed. **<font style="color:#FF0000;">If the interface contains the IP used to access the web interface, this option must be colored (enabled), or the network will be disconnected immediately or after reboot.</font>**

![](images_fcu3502_desktop22_en/img063.png)

The old interface is shown below; only one IP can be entered:

![](images_fcu3502_desktop22_en/img064.png)

There is no limit on DNS settings; generally 1-2 are sufficient.

#### 2.8.2 Wireless Network
The Network > Wireless Network menu shows all supported wireless networks, typically 1-2 networks depending on the FCU type.

![](images_fcu3502_desktop22_en/img065.png)

Click the Connect button to see all scanned wireless networks in the dialog.

![](images_fcu3502_desktop22_en/img066.png)

![](images_fcu3502_desktop22_en/img067.png)

Click the Connect button, enter the Wi-Fi password in the dialog, and click Confirm to connect to the Wi-Fi network.

After connection, the status shows Connected.

![](images_fcu3502_desktop22_en/img068.png)

<font style="color:#FF0000;">**Note: Once a Wi-Fi network is connected successfully, the system will reconnect to it automatically after each reboot.**</font>

#### 2.8.3 Mobile Network
For a standard IoT SIM card, no username or authentication method is required. Keep the APN at its default value cmnet and the authentication method at its default value 1.

Likewise, set Auto Connect and save to let the backend process maintain the mobile network connection.

![](images_fcu3502_desktop22_en/img069.png)

### 2.9 Applications
#### 2.9.1 Application Monitor
The Application Monitor page shows whether the applications required by the services are running normally, as shown:

![](images_fcu3502_desktop22_en/img070.png)

The processes shown above are briefly described in the Description column; hover over the description text to see detailed information.

![](images_fcu3502_desktop22_en/img071.png)

#### 2.9.2 Application Upgrade
The Application Upgrade page only requires uploading a valid zip archive whose root directory contains an update.sh shell script that performs the upgrade operations. Application upgrade is therefore general-purpose: in addition to upgrading the web management program, it can upgrade all other applications.

For a simple test, write the following shell script in update.sh:

echo "OK" > /tmp/test_upgrade.txt

Then compress update.sh into a zip file:

![](images_fcu3502_desktop22_en/img072.png)

On the page, click Select File:

![](images_fcu3502_desktop22_en/img073.png)

![](images_fcu3502_desktop22_en/img074.png)

Select update.zip and click Open:

![](images_fcu3502_desktop22_en/img075.png)

Click Start Upgrade to see the success message:

![](images_fcu3502_desktop22_en/img076.png)

Run the following command in the device's shell terminal:

```plain
cat /tmp/update.log 
OK
```

This confirms that update.sh was executed correctly on the Linux side.

**Note: Because the web management interface has root privileges, ensure that the operations performed by update.sh are safe and controlled and do not damage system files.**

### 2.10 System
#### 2.10.1 System Settings
There are four tabs at the top of System Settings: **<font style="color:#548DD4;">System Settings, Export Configuration, Import Configuration, Backup List</font>**.

#### System Settings
System Settings lets you configure the platform name, company name, daily reboot time, and many other items. After changing a setting, a Save button appears next to the input field; click it to save.

![](images_fcu3502_desktop22_en/img077.png)

Platform Name: The title displayed above the username field on the login page and in the upper-left corner after login.

Maximum Supported Cameras: The maximum number of cameras that can be enabled on the camera list page. This varies by device due to differing resources and camera parameters. For example, the FCU3101 is recommended to support at most 4 cameras at 1080P 25 fps, while the FCU3501 supports up to 36.

Company Name: Displayed below the platform name on the login page.

Daily Reboot Time: Used by the webservice process. Set to -1 to never reboot; set to 0-23 to reboot once daily at that hour. If a reboot occurred within the previous 1 hour, no reboot is performed. For example, if the daily reboot time is 0 o'clock but the user rebooted at 23:59:59, the reboot at 0 o'clock will not occur. However, if the user rebooted at 23:59:0, the device will reboot around 0:59:10 (checked every 10 seconds).

Platform Language: Can be set to Simplified Chinese or English. When set to English, all page menus, text (except user-configured content), prompts, and alarm content are displayed in English. Because the English version has not been fully tested, it must undergo strict testing and refinement before delivery if required.

Disk Free Space 1: An alarm is generated when the free space in the partition containing the application falls below this value. This alarm requires a DingTalk notification URL or WeCom notification URL to be configured; the alarm information is pushed to a DingTalk group or WeCom group and is not stored together with device alarms. Supports %, MB, and GB.

Disk Free Space 2: Each time the device saves an alarm image or video, it checks whether the free space in the application partition is below this value. If so, alarm images and videos are deleted starting from the oldest alarm record until the free-space requirement is met. Supports %, MB, and GB.

Local Alarm Retention: Disk Free Space 2 only deletes older alarm images and videos. If Local Storage Duration is set to a number of days greater than 0, the alarm_store process periodically (every 10 seconds) deletes expired alarm database records, images, and videos. A value of 0 means permanent storage, and the user must maintain alarm information manually. -1 means alarm records are deleted after being pushed to the cloud platform.

DingTalk Notification URL: After creating a group chat in DingTalk, open Group Settings and find the Bot option to add a bot:

![](images_fcu3502_desktop22_en/img078.png) ![](images_fcu3502_desktop22_en/img079.png)

Select Custom (connect a custom service via Webhook):

![](images_fcu3502_desktop22_en/img080.png)

Click Add:

![](images_fcu3502_desktop22_en/img081.png)

Set the bot name and keywords (you can also set an IP address range if you have a fixed public IP), check "I have read and agree to the Custom Bot Service and Disclaimer", then click Done:

![](images_fcu3502_desktop22_en/img082.png)

A Webhook address is generated. Click the Copy button next to it:

![](images_fcu3502_desktop22_en/img083.png)

Enter the copied address in DingTalk Notification URL and enable the DingTalk Notification toggle (colored) to receive notifications when an alarm occurs or Disk Free Space 1 is exceeded (1 message per minute, handled by alarm_notify).

Enable DingTalk Notification: A toggle switch; click to change its state and see a floating save confirmation. The DingTalk Notification URL takes effect only when this option is enabled (colored).

WeCom Notification URL: Similar to DingTalk group notification settings, but the procedure differs and may vary with WeCom versions. First create a WeCom group chat (you are the group owner), click the three-dot icon in the upper-right of the group window, then click Message Push:

![](images_fcu3502_desktop22_en/img084.png)



In the Message Push Settings window, click Add:

![](images_fcu3502_desktop22_en/img085.png)

Enter a name, copy the Webhook address, and click Save (the icon and description can be customized or left unset):

![](images_fcu3502_desktop22_en/img086.png)

Set the copied Webhook address in WeCom Notification URL and enable the WeCom Notification toggle (colored) to receive notifications when an alarm occurs or Disk Free Space 1 is exceeded (1 message per minute, handled by alarm_notify).

Enable WeCom Notification: Enable (colored) this option for the WeCom Notification URL to take effect.

- #### Export Configuration

Click the Export Configuration tab to open the export interface:

![](images_fcu3502_desktop22_en/img087.png)

Details of Export Configuration:

- Data


Data-type configurations generally involve a table in /web/data/web.db.

Role: The role data table; all roles maintained on the Users > Role Management page. Usually selected together with the role table.

User: The user data table; all users maintained on the Users > User Management page. Usually selected together with the role table.

System/NTP Settings: The settings from the System > System Settings page and the NTP synchronization settings from System > System Time are stored in the same table.

Parameter Types: Information maintained on the Algorithms > Parameter Types page.

Algorithm List: Information maintained on the Algorithms > Algorithm List page.

Algorithm Types: Information maintained on the Algorithms > Algorithm Types page.

Camera: Information maintained on Cameras > Camera List.

- Files


Application Configuration: the /web/bin/cfg directory.

Model Files: the /web/data/weights directory, which stores the model files required for inference.

Algorithm Files: the /web/data/algo directory, which stores algorithm files (shared library .so files).

In summary, you can export several data tables and directories. Note that export covers configuration only; alarm information cannot be exported.

Procedure:

Select the configurations to export as needed, or keep the default Select All, then click Export Selected Configuration; the browser downloads a zip file. This file can be imported on other devices via the Import Configuration page.

- #### Import Configuration

Procedure:

![](images_fcu3502_desktop22_en/img088.png)

Click the Import Configuration tab to open the import interface, then click "Select Backup File" to open the file dialog. Select an exported configuration (zip file) and click Open:

![](images_fcu3502_desktop22_en/img089.png)

You will see which items are included in the previously exported configuration file:

![](images_fcu3502_desktop22_en/img090.png)

If an item was deselected during export, it cannot be selected during import, as shown:

#### 2.10.2 System Time
On the web interface, you can easily set the system time or configure NTP synchronization (the device must be able to reach the NTP server) so it can synchronize periodically.

For manual synchronization, simply click "Sync Local Time to System", as shown:

![](images_fcu3502_desktop22_en/img091.png)

If the device can access the Internet or a standard NTP server is deployed on the LAN, you can configure NTP synchronization, as shown:

![](images_fcu3502_desktop22_en/img092.png)

Be sure to enable the Enable Service option; otherwise the configuration only applies when you manually click Sync Now, and the backend webservice process will not synchronize periodically at the configured frequency (hours).

#### 2.10.3 Cloud Platform
![](images_fcu3502_desktop22_en/img093.png)

Hover over the settings area to display a floating tooltip:

![](images_fcu3502_desktop22_en/img094.png)

Among these, Device Name, Cloud Platform SSH Port, and Push Alarms to Cloud Platform do not affect the device's MQTT communication with the cloud platform, so they can also be modified on the cloud platform side.

**<font style="color:#FF0000;">Note: The Cloud Platform SSH Port must correspond to the SSH service on the cloud platform host (not inside a Docker container), and the device's public key must be deployed on the cloud platform during deployment; otherwise alarm images, model files, and algorithm files cannot be transferred or synchronized.</font>**

#### 2.10.4 Sound Column Settings
This system supports sending alarm announcements to "Danmai Paike" sound columns. First purchase a sound column; the store's Tmall address is: [https://danmaipaike.tmall.com/](https://danmaipaike.tmall.com/). When purchasing, tell the seller it is for "BH integration" or note "BH integration" in the order. The speaker's built-in program provides the API interface used by this system.

After receiving the speaker, ask customer service for a documentation link, install the software as described, and set the speaker's IP address so that it can be pinged from the AI system. Then open the Sound Column Settings page in the web interface:

![](images_fcu3502_desktop22_en/img095.png)

Set the sound column URL, enable the Enable button, and click Save. Once configured, the sound column announces alarms when they occur.

**Note:** 

- **The Volume setting controls the volume of the synthesized speech and must be used together with the playback volume set on the device. During commissioning, adjust the playback volume as needed on the device management page (http://device_IP:8080) (100 is recommended in noisy environments, 50 in quiet environments). Then set an appropriate volume (speech synthesis volume) on the Sound Column Settings page above;**
- **Only some of the key settings are configured on the Sound Column page. The remaining settings can be seen in the following file, where body is the request content from the document "Local Area Network Direct Speaker Device API / Text TTS and Media URL Playback Interface (Speaker Integration).pdf". Refer to that document for parameter descriptions.**

```plain
cat /web/bin/cfg/player.json 
{
        "body": {
                "intercut": false,
                "prompt": false,
                "queue": true,
                "rcn": "0",
                "rdn": "0",
                "reg": 0,
                "speed": 50,
                "sync": false,
                "text": "",
                "vcn": "xiaoyan",
                "volume": 25 
        },
        "enabled": false,
        "password": "888888",
        "url": "http:\/\/172.20.0.104" 
} 
```

#### 2.10.5 Watchdog
The watchdog can be set to application feeding or kernel feeding. When application feeding is enabled, the appwatching process feeds the watchdog periodically. If appwatching exits abnormally, the system reboots automatically after the timeout (seconds) is reached.

If another application should feed the watchdog, disable application feeding here and manage it in that application instead.

![](images_fcu3502_desktop22_en/img096.png)

#### 2.10.6 GB28181 Configuration
To support GB28181, ensure gb28181_encode is true in /web/bin/cfg/config.json.

Click System > GB28181 Configuration. The configuration includes two directions:

**Pull Stream:** Supports pulling streams from cameras for inference and alarm determination. Configure the areas shown in the following screenshot:

![](images_fcu3502_desktop22_en/img097.png)

Server ID: A 20-digit code, of which the first 10 digits should be the server domain code.

Server Domain: A 10-digit code, the first 10 digits of the Server ID.

Server IP: Select the IP through which cameras access the device (and ensure the device can ping the cameras). If you do not want to support GB28181 stream pulling, set this IP to 0.0.0.0 (or directly set MediaIP to 0.0.0.0 in /web/bin/cfg/sip_server.json); sip_server will then sleep and stop listening for GB protocol requests.

Server Port: The port on which sip_server listens.

Server Password: An access password; it can be left empty. Note that if some cameras do not support passwords, this field must be left empty.

After the above configuration is set, configure the GB28181 parameters on all connected cameras. For example, the following is the GB28181 configuration of a camera (note that the UDP protocol must be selected; testing has shown that the TCP protocol of some cameras cannot establish communication with the server).

![](images_fcu3502_desktop22_en/img098.png)

**Push Stream:** Supports pushing locally captured video to the cloud.

**<font style="color:#FF0000;">Note: This feature requires setting pusher_enable to true in /web/bin/cfg/config.json. Once set to true, live views cannot be viewed on the device's web management page; they can only be viewed through the cloud service receiving the pushed stream.</font>**

![](images_fcu3502_desktop22_en/img099.png)

All configuration items correspond one-to-one with those for stream pulling, except that "Upper-level" is prefixed to the parameter names. Configure these according to the upper-level server settings, just as the pull-stream settings are entered in the camera configuration.

To simply test whether push streaming works, you can use the open-source project EasyGBS as the upper-level server.

Docker deployment URL: [https://www.easygbs.com/docs/down/docker-deployment](https://www.easygbs.com/docs/down/docker-deployment)

Windows or Linux deployment URL: [https://www.easygbs.com/docs/down/user-guide#21-%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85](https://www.easygbs.com/docs/down/user-guide#21-%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)

After installing the server, open http://IP:10000/ and log in with username admin and password admin. Select Basic Configuration at the top of the page and enter the server IP (the IP through which cameras access the server).

![](images_fcu3502_desktop22_en/img100.png)

Then click GB28181 on the left and configure the SIP ID and other information. You may also keep all defaults, but this configuration must correspond one-to-one with the push-stream configuration described above.

Once configured, the FCU device appears in the device list and you can preview the stream pushed from the FCU.

![](images_fcu3502_desktop22_en/img101.png)

![](images_fcu3502_desktop22_en/img102.png)

![](images_fcu3502_desktop22_en/img103.png)

#### 2.10.7 SSH Terminal
The SSH Terminal page is used to log in to the device's SSH console with a password or private key.

![](images_fcu3502_desktop22_en/img104.png)

A successful login is shown below. Usage is identical to an SSH client, but transfer tools such as sz/rz are not supported (files cannot be transferred to the device).

![](images_fcu3502_desktop22_en/img105.png)

Tip: If the device will be exposed to the Internet, set a 16-character password mixing digits, upper- and lower-case letters, and punctuation to prevent brute-force attacks from external users (especially users in some other countries). Alternatively, disable password login and keep only SSH key certificate login.

#### 2.10.8 Resource Usage
The System Resources page displays system status by section, including system information, resource consumption, wired network, wireless network, and CPU usage monitoring.

![](images_fcu3502_desktop22_en/img106.png)

The CPU/NPU/RGA usage curves update periodically, so by staying on the page long enough you can observe resource usage fluctuations over that period.

![](images_fcu3502_desktop22_en/img107.png)

#### 2.10.9 EMMC Monitoring
Because most devices use EMMC storage, it is necessary to enable Health Monitoring in EMMC Monitoring. Configure as follows:

![](images_fcu3502_desktop22_en/img108.png)

Once Health Monitoring is enabled, webservice calls mmcinfo once daily to check the configured device node. This page shows MMC read/write information and wear.

![](images_fcu3502_desktop22_en/img109.png)

The most important values are the average erase count and the remaining erase count (industry default is 3000). The excess count is estimated based on the default service life. If the excess count keeps growing, the EMMC usage will not reach the currently configured service life.

### 2.11 Logs
#### 2.11.1 Application Logs
Application Logs shows all files in the /web/bin/log directory, which by default stores logs for appwatching, applogging, and Wi-Fi connections.

![](images_fcu3502_desktop22_en/img110.png)

#### 2.11.2 Operation Logs
Operation Logs records key operations performed by users through the web interface. Delete and Clear functions are supported.

![](images_fcu3502_desktop22_en/img111.png)



### 2.12 Configuration Files
#### 2.12.1 Application Management APP.JSON
Which processes the backend appwatching process monitors is determined by the configuration file /web/bin/cfg/app.json.

app.json is an array in which each element is an object. For example, the configuration of the device_proxy process that communicates with the cloud is as follows:

```plain
{
        "name": "device_proxy",
        "disabled": false,
        "cannotstop": true,
        "max_memory_MB": 100,
        "log_enabled": true,
        "log_level": "info",
        "log_max_size_MB": 1,
        "log_rotate_count": 3,
        "log_file": "log/device_proxy.log",
        "pid_file": "pid/device_proxy.pid",
        "start_cmd": "./device_proxy",
        "cmd_arg1": "NULL",
        "cmd_arg2": "NULL",
        "help_en": "Cloud Platform Agent",
        "help": "Cloud Platform Agent",
        "comment_en": "receiving and executing cloud platform commands; cannot stop on the cloud platform's web interface",
        "comment": "Receives and executes cloud platform commands; cannot be stopped on the cloud platform web interface"
    }
```

The configuration parameters are described below:

**name: ** Application name, built into the process code and cannot be modified. It is generally identical to the application file name. The application itself also reads app.json and compares its built-in name with each name setting until it finds its own.

**disabled: ** Whether startup is disabled. If set to true, appwatching does not monitor its status (it can be started manually, but appwatching will not restart it if it exits).

**cannotstop: ** A property required by device_proxy and must be true; other processes may omit it. It determines whether a process can be stopped when managed from the cloud. device_proxy maintains communication with the cloud and can be restarted but not stopped; stopping it would cause the cloud to lose control of the device.

**max_memory_MB:** Maximum memory usage in MB. A value of 0 means no limit; a value greater than 0 sets the maximum. For example, if set to 10 MB, appwatching restarts the application as soon as its memory usage exceeds 10 MB.

**log_enabled:** Whether to enable application logs. Only when set to true are log files written to the path configured in log_file, which helps diagnose problems. If the program is stable and you do not want logs, set this to false, or configure log_file to point into /run/ to reduce EMMC write wear. All subsequent parameters beginning with log_ take effect only when this parameter is true.

**log_level:** Log level. Can be set to trace, debug, info, warning, error, or critical, representing progressively higher levels and progressively less logged output.

**log_max_size_MB:** The size in MB at which a log file is renamed to xxx.{N}.log, where N is 1, 2, 3..., up to log_rotate_count.

**log_rotate_count:** Maximum number of log backups, used together with log_max_size_MB.

**log_file:** Log file location. Since application working directories are all under /web/bin, you can use the relative path log/xxxx.log as the application log path.

**start_cmd:** The command appwatching uses to start this process.

**cmd_arg1:** The first argument passed by appwatching when starting the process.

**cmd_arg2:** The second argument passed by appwatching when starting the process.

**help_en:** A brief introduction to the application's purpose, displayed in the Description column of the Application Monitor page when the language is set to English in the web interface System Settings.

**help:** A brief introduction to the application's purpose, displayed in the Description column of the Application Monitor page when the language is set to Chinese in the web interface System Settings.

**comment_en:** A detailed description of the application's purpose, displayed when hovering over the description on the Application Monitor page when the language is set to English in the web interface System Settings.

**comment:** A detailed description of the application's purpose, displayed when hovering over the description on the Application Monitor page when the language is set to Chinese in the web interface System Settings.

#### 2.12.2 Application Configuration CONFIG.JSON
The following configuration is found in /web/bin/cfg/config.json:

```plain
{
    "app": {
        "alarm_mp4_enable": true,
        "pusher_enable": true,
        "mppencoder_enable": true,
        "gb28181_encode": true
    },  
    "mqtt": {
        "broker": "tcp://127.0.0.1:1883",
        "username": "admin",
        "password": "forlinx_BD_mqtt"
    }   
}
```

**app node:**

alarm_mp4_enable: Set to true to enable alarm video storage. When enabled, an alarm saves not only the alarm image but also a video clip from 5 seconds before to 5 seconds after the alarm (10 seconds in total), which can be viewed on the Alarm page. Note that this feature requires substantial memory; if you need it, use a device with at least 8 GB of memory.

pusher_enable: Whether to push video to the cloud. Once enabled, live views on the device cannot be viewed. Note that the upper-level server configuration on the page's GB28181 Configuration (see the previous section) takes effect only when this switch is enabled.

mppencoder_enable: Whether to use hardware encoding when pushing to the cloud. When set to false, CPU encoding is used; keep it at true, as most hardware now supports hardware encoding. If camera_infer reports a fault in this area, try setting it to false to see if the problem is resolved. Hardware encoding reduces the latency of pushed video.

gb28181_encode: Whether to encapsulate video using the GB28181 protocol when pushing to the cloud. Set to true if the cloud requires GB28181, otherwise set to false. When set to false, the cloud must be able to access the device directly, for example if both are on the same LAN, or if the device has a fixed IP with port forwarding configured.

**mqtt node:**

Since mosquitto is already configured during application installation, leave the entire mqtt node configuration unchanged.

brocker: The connection method for the mosquitto installed on the device.

**username: mosquitto ** configured username.

**password: mosquitto ** configured password.

#### 2.12.2 Other Configuration Files
**/web/bin/cfg/mobile.json **

Configuration for automatic mobile network connection. It contains only the auto_connect item; set to true for automatic connection. The webservice process reads this configuration periodically. The auto-connect setting on the Network > Mobile Network page of the web interface writes to this file.

**/web/bin/cfg/model_config.yaml** 

Algorithm configuration. This file contains settings for the models used by algorithms and for pre- and post-processing. Do not modify this configuration unless you are a developer.

**/web/bin/cfg/player.json **

Sound column configuration, configured on the System > Sound Column Settings page of the web interface. This file contains some settings not shown on the page, such as password. To configure them manually, refer to the "Text TTS and Media URL Playback Interface" and "Play Text-to-Speech" sections of the document provided by the sound column hardware vendor for the request data.

## 3. Algorithm Introduction
All object recognition and detection algorithms apply to well-lit scenes with clear targets occupying more than 10% of the frame. A dirty camera, complex scene, occlusion, dim lighting, or overly small targets will reduce detection accuracy.

Almost all object recognition algorithms have the following **standard parameters**:

- Confidence: The minimum confidence for open flame and smoke. Detected targets below this value are ignored.
- Detection Cycle: Used together with the Alarm Threshold.
- Alarm Threshold: Within a detection cycle, an alarm can be generated when the number of hits is greater than or equal to this value. For example, a detection cycle of 5 and an alarm threshold of 3 means that of 5 inference results sent to the alarm program for a camera frame (note the camera's inference frame rate), at least 3 must hit the alarm rule for an alarm to be eligible. The alarm algorithm then returns alarm information; whether the main process treats this information as requiring storage and a real-time alarm notification depends on the Alarm Interval parameter.
- Alarm Interval: The minimum time between two alarms. If the time since the last alarm is shorter than the configured interval, no alarm is generated.

The FCU3502 supports the following 17 AI algorithms, with more being added:

| **Algorithm Type** | **No.** | **Algorithm Name** | **Algorithm Description** |
| :---: | :---: | :---: | :---: |
| **Safety Protection** | **1** | **Smoke Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: smoke<br/>Alarm logic: Generate an alarm when the smoke target confidence reaches the threshold<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **2** | **Open Flame Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: open flame<br/>Alarm logic: Generate an alarm when the open flame target confidence reaches the threshold<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| **Personnel Status** | **3** | **Missing Safety Helmet Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person, safety helmet<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the person's head region has no matching helmet and the same tracking ID accumulates N hits within the specified time window<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **4** | **Missing Reflective Vest Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person, reflective vest<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when no reflective vest is matched in the designated body region and the same tracking ID accumulates N hits within the specified time window<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **5** | **Smoking Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person, cigarette<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the cigarette box overlaps the person's head-and-shoulder region above the threshold and the same tracking ID accumulates N hits within the specified time window<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **6** | **Mobile Phone Use Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person, mobile phone<br/>Alarm logic: Generate an alarm when the phone box overlaps the person's head-and-shoulder region above the threshold and the same tracking ID accumulates N hits within the time window<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **7** | **Fall Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the person's keypoint quality reaches the threshold, the pose meets the fall condition, and the same tracking ID accumulates N hits within the specified time window<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **8** | **Intrusion Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the bottom center of a person's bounding box enters the configured zone, the target (tracking ID) is hit N consecutive times within the specified time (N = consecutive confirmation frames), and the dwell time in the zone is reached<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **9** | **Leaving Post Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: Generate an alarm when the number of people on duty falls below the set value after a person leaves the zone for longer than the buffer time<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **10** | **Person Loitering Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the same tracking ID (bottom center of the person's bounding box) remains in the configured zone for the specified time and the number of trajectory direction reversals and the path ratio reach the thresholds<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **11** | **Person Lingering Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the same tracking ID (bottom center of the person's bounding box) remains continuously in the configured zone for the specified time<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **12** | **Sleeping on Duty Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: An integrated object tracking algorithm assigns a tracking ID to every detected person. Generate an alarm when the same tracking ID (bottom center of the person's bounding box) is judged as sleeping for N consecutive frames<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **13** | **Crowd Gathering Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: Generate an alarm when the bottom center of a person's bounding box lies within the configured zone, the minimum number of people is reached, and the spacing between people meets the gathering distance threshold<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| | **14** | **People Counting** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: person<br/>Alarm logic: Generate an alarm when the number of people whose bounding-box bottom center lies in the configured zone reaches the threshold for N consecutive frames<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| **Vehicle Status** | **15** | **License Plate Recognition** | Recognition scenario: outdoor, factory<br/>Environmental requirements: outdoor with ample light, day or night<br/>Recognition target: license plate<br/>Alarm logic: Generate an alarm when the license plate detection and recognition result is valid and the recognized number is not in the authorized license plate database<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
| **Environment Status** | **17** | **Garbage Detection** | Recognition scenario: outdoor, indoor, factory<br/>Environmental requirements: indoor or outdoor with ample light, day or night<br/>Recognition target: garbage<br/>Alarm logic: Generate an alarm when the center of a garbage target lies within the configured zone<br/>Algorithm input: color frame<br/>Input device: 1080P camera recommended |
