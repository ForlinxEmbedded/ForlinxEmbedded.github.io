# AI Algorithm User Manual V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms. 

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1. Overview

The AI application for the FCU runs on multiple platforms. Once installed, it can be accessed and configured through a web browser.

### 1.1 Starting the Web Service

The following line is present at the end of `/etc/rc.local`:

```
/web/shell/up.sh
```

`up.sh` starts the Boa service and runs the `start.sh` script. Boa is the backend web service and listens on port 80 by default. To change the port, edit `/web/boa/boa.conf` and modify the number in the `Port 80` directive.

Two lines are configured in `/etc/profile`:

```bash
export LD_LIBRARY_PATH=/web/lib:/web/lib/opencv2
export PATH=$PATH:/web/shell
```

Do not change this configuration. The `PATH` entry lets you call the four scripts in `/web/shell` — `up.sh`, `start.sh`, `stop.sh`, and `restart.sh` — directly from the command line.

| Script       | Function                        |
| ------------ | ------------------------------- |
| `start.sh`   | Starts the web service          |
| `stop.sh`    | Stops the web service           |
| `restart.sh` | Restarts the web service        |
| `status.sh`  | Shows the web service status    |

---

## 2. Using the AI Web Interface

### 2.1 Signing In

Before signing in, assign the device an accessible IP address. Once the address is reachable (for example, it responds to `ping`), open a browser and enter `http://<IP>` to load the web interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/01_L51_1787722479649_0d2466e7_bcf1_4b5f_bab7_f2aee2835e20.png)

The account and password fields on the sign-in page show hints for the default credentials. Enter the user name and password as prompted, then click **Sign In**.

Tip: select **Remember Password** to have the credentials filled in automatically next time.

### 2.2 Session Persistence

Once the page stops polling the backend, the server keeps the session valid for 24 hours. The web interface also refreshes the session every hour, so as long as the page stays open, the session will not expire. If the browser tab is sent to the background, however, it may stop running the JavaScript — and if that lasts more than 24 hours, the session will expire. In short: keep the page open and visible, and the session stays alive.

### 2.3 Dashboard

The dashboard shows the monitoring wall: camera online status, live alarms, camera previews, and various statistics.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/02_L65_1787722479751_84c28b4f_7013_4247_943e_de98155740f1.png)

The monitoring wall supports full-screen display. Click the full-screen button to the left of the clock in the top-right corner:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/03_L69_1787722480036_3eec7794_8276_4fa3_8e66_2bd6faabc63b.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/04_L71_1787722480256_2bb81797_33ed_48e5_a347_29e784be9ae1.png)

Press **Esc** or click the icon again to exit full screen.

Live monitoring tiles can also be expanded by double-clicking the video (this shows the live feed only).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/05_L77_1787722480374_8352a380_360f_4948_b126_e1af7d509b54.png)

In the top-right corner of the live view there is a vertical three-dot menu (also available in full-screen mode). Clicking it opens a floating camera list where you can select multiple cameras for preview.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/06_L81_1787722480503_2c5ff6dd_86d2_48e9_bcc9_8e361299eb08.png)

The preview is mainly used to show inference results. The label in the top-left corner of each bounding box indicates the inference result.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/07_L85_1787722480614_db1c7f1e_63b7_481c_9434_59c13dab4a2b.png)

The screenshot above shows the fall-detection algorithm enabled: when the inference result includes both person detection and pose estimation, the system draws bounding boxes and pose keypoint connections.

### 2.4 Algorithms

#### 2.4.1 Algorithm Categories

Algorithm categories group algorithms so that, when assigning algorithms to a camera, you can pick a category first and then a specific algorithm. The category page supports adding, editing, and deleting categories.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/08_L95_1787722480709_0c4accaf_5cde_41aa_8680_6377eaf4d418.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/09_L97_1787722480797_ebc83e6b_a609_4fc4_90c1_1f83f477c800.png)

Categories are sorted by their numeric value, in ascending order.

#### 2.4.2 Parameter Types

Some algorithms share the same parameters. Fire detection, hard-hat detection, and smoking detection, for example, are all object-detection algorithms with identical parameters, so they are assigned the same parameter type when deployed. This page is normally maintained by the algorithm developer, since only the developer knows which parameters a given algorithm uses.

#### 2.4.3 Algorithm List

The algorithm list maintains the algorithms available on the system. Adding and editing algorithms is a developer task, because only the developer knows which algorithm file (`libxxx.so`) and which model file (`xxx.rknn`) a given algorithm uses. Once an algorithm is set up, the developer exports it as a `{algorithm-name}.algo` file; users then import that file.

To add an algorithm:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/10_L111_1787722480890_9fc77f5f_41b8_4935_be5e_8c943aed2819.png)

- **Algorithm Name** — a short summary of what the algorithm does, so users can identify it.
- **Algorithm Category** — used only to group algorithms when assigning them to cameras; pick the category the algorithm belongs to.
- **Parameter Type** — closely tied to the algorithm source code. Once a parameter type is selected, the code can access the parameters configured for each camera in the camera list.
- **Model File** — the inference file used by the algorithm. It becomes selectable here only after you upload it with the **Manage Model Files** button on the algorithm list page.
- **Algorithm File** — the shared library into which the algorithm is compiled. It becomes selectable here only after you upload it with the **Manage Algorithm Files** button.
- **Algorithm Class Name** — the C++ class name of the algorithm.
- **Algorithm Description** — describes what the algorithm does. It has no effect at runtime.
- **Default Parameters** — populated automatically from the selected parameter type. When a new camera is created, these defaults are used to prefill its configuration.

The configuration for the smoke alarm algorithm, for example, looks like this:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/11_L124_1787722480970_e2807e9b_f1e6_49a9_bec0_ea2747193b22.png)

To develop your own algorithm, contact us for sample code.

After an algorithm is added, use the **Enable** / **Disable** buttons in the Actions column to turn it on or off. Note that enabling or disabling only controls whether the algorithm can be selected in the camera list — algorithms already assigned to a camera keep running even if they are disabled.

The model file management page looks like this:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/12_L132_1787722481048_e66351bd_e719_494a_9656_1cadfddf2f58.png)

Click **Choose File**, select an `xxx.rknn` file, then click **Upload**. If the file name matches an existing model, a dialog asks whether to continue:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/13_L136_1787722481123_f45b21e7_c222_4cbb_b83a_89947e728c36.png)

Click **Confirm** to update the file. If no file of that name exists, the upload succeeds directly.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/14_L140_1787722481197_4023898f_15fb_4609_ac3c_dccf4c030588.png)

Once the algorithm is ready, click **Export** to export it as an `xxx.algo` file. Send that file to the user, who imports it and can then assign the algorithm to cameras.

### 2.5 Image Library

#### 2.5.1 Face Database

The face database page maintains the data used for face recognition. Photos should resemble an ID portrait: the face should occupy most of the frame.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/15_L150_1787722481277_f11c4912_bdbe_41a7_8595_857dc33c85ef.png)

- **Add** — click **Add**, enter the person's name, gender, and other details, upload a face image (JPG or PNG), and click **Save**.
- **Edit** — modify the details or the image of an existing record.
- **Delete** — remove a face record.

**Importing a Face Database:**

Prepare the face images, resize them to a width of 600 px, and convert them all to `.jpg` (PNG is not supported). With at least one face record already added on the page, click **Export** and unzip the downloaded archive. Edit `human_face.csv` inside it (in Excel or WPS): fill the `id` column with values from 1 to N (Excel's drag-to-fill handles the increment), and prepare a `{id}.jpg` image for each id — for example, record 1 needs `1.jpg`. Then select all the files, compress them into a `xxxx.zip` archive, click **Import**, choose that archive, and click **Open**. If something is wrong, the system reports the specific error; correct the data or add the missing images accordingly.

### 2.6 Cameras

#### 2.6.1 Camera List

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/16_L164_1787722481384_2bc2359c_6d44_44d7_8c5e_96291112dd2e.png)

The camera list shows every configured camera.

To add a camera:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/17_L170_1787722481474_d99a45e7_bf54_4299_ae4d_706b0e0b09c5.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/18_L172_1787722481545_a6af5e83_49f3_4af0_8ed4_e04f766d2faf.png)

As shown above, the name can reflect the camera's location or purpose.

The connection address must match the RTSP address provided by the camera vendor. For a Hikvision camera, for example, obtain the camera's IP address, port, user name, and password, then substitute them into this format:

```
rtsp://username:password@IP:port/Streaming/Channels/1
```

For a camera with IP 192.168.12.68, port 554, user name `admin`, and password `12345678`, the RTSP stream address is:

```
rtsp://admin:12345678@192.168.12.68:554/Streaming/Channels/1
```

After entering the address, click **Capture** (test the camera) to take a snapshot and verify the camera works, then click **Auto-Fill Parameters Below**:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/19_L190_1787722481661_727e60c7_8585_4c02_8ea9_972866edabc9.png)

The codec, frame size, and frame rate are detected when you click that button.

**Inference Rate** — set according to the camera's frame rate. At 25 fps the camera delivers 25 frames per second; an inference rate of 5 means one frame in every five is inferred, i.e. 5 frames per second are actually processed. Choose a rate that meets your business needs while using GPU inference and RGA image-processing resources sensibly.

**Enabling Algorithms** — click a category tab to switch between the algorithms in each category. If there are too many, type a name to filter. Click an algorithm name to add it to the enabled list:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/20_L198_1787722481743_79ec6804_9dd1_42c9_8ad2_e9ed4a57faad.png)

**Note: once an algorithm is added, it disappears from the category list below and appears in the enabled list above.**

After an algorithm is added, its parameters appear below. Click the algorithm name under **Algorithm Parameters** to expand the details.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/21_L204_1787722481815_77c0b616_ed5e_4ef0_97e7_7b4e948f283a.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/22_L206_1787722481890_697c1a3d_39e1_47a8_b5f7_19ec5e4ca94d.png)

The specific parameters depend on the algorithm; see the algorithm reference chapter.

When you are done, click **Save** to add the camera. A new camera is **disabled** by default. Click the status text, or the **Disable** / **Enable** buttons in the Actions column, to toggle its state.

**Tip for Adding Many Cameras at Once:**

- Add one camera and name it "Camera 01";
- Use **Clone**: the dialog increments the name to "Camera 02" and the last octet of the RTSP IP address by one, so you can simply click **Save**. Repeat until you have the required number of cameras;
- Click **More**, then **Export Camera Configuration** to download an Excel file. Edit each camera's name and address in the file (only columns other than `id` may be changed — adding or deleting rows is not allowed), then click **Import Camera Configuration** and select the edited file. All cameras are now configured.

If every camera uses the same algorithm and parameters, no further work is needed. Otherwise, adjust the algorithms and parameters for each camera individually.

The buttons in the camera Actions column:

- **Edit** — modify an existing camera;
- **Disable / Enable** — turn the camera off or on;
- **More** — additional functions:

  **Recorded Video List** — click **More** next to a camera, then **Recorded Video List**. In the dialog, click **Request Video Recording**, enter a duration in minutes (1–10), and confirm. After that time has elapsed, reopen the list to see the recording, which you can play, download, or delete:

  ![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/23_L228_1787722481976_d309bb14_fa93_4c42_b0bd_27a688753952.png)

  **Note: inference pauses while recording, so the live view shows no bounding boxes.**

  **Sync Device Algorithms** — copy the current camera's algorithms and parameters to other cameras, so they use the same configuration. A dialog lists all cameras for selection.

  **Clone** — create a new camera based on this one, with the same settings.

  **Detect** — check the camera's codec, resolution, and frame rate (the same as **Auto-Fill Parameters Below** in the edit dialog).

  **Alarms** — jump to the alarm page, filtered to this camera's alarms.

  **Delete** — prompts for confirmation, then deletes the camera.

- **More** (page-level) — the dialog offers **Export Camera Configuration** and **Import Camera Configuration**. Export, edit each camera's address and name, then import again. This is the practical way to change many camera addresses at once.

#### 2.6.2 Live View

Click **Cameras → Live View** in the left menu. The page opens with the first enabled camera displayed.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/24_L248_1787722482085_f0339b8d_31e7_41bc_a128_6c63eb6a07a7.png)

This page is used to monitor capture status and algorithm hits. When an alarm algorithm matches a target, the bounding-box information is pushed to the live view.

When several streams are selected, the backend tiles them automatically. 4-up, 9-up, and 16-up layouts are supported.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/25_L254_1787722482205_00fcf14e_575e_4266_a9f2_9d99c962073b.png)

**Note: a hit does not necessarily raise an alarm — alarms depend on the algorithm's threshold parameters. Hard-hat detection, for example, may require several hits (configurable) before one alarm is raised, and only one alarm is raised within a given interval.**

#### 2.6.3 Live Alarms

Click the play button to the left of the avatar to toggle live alarms:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/26_L262_1787722482458_85e70dac_caef_431c_a0bc_de693686ba6e.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/27_L264_1787722482553_65df28e5_fab1_48d9_bbd0_ab8a2d6735d1.png)

Once the button switches to the pause icon, any live alarm pops up a message on the left side of the page.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/28_L268_1787722482638_905786be_36f5_465e_8c8a_57f2a8e79aa2.png)

If you click the pause button, it reverts to the play icon and live alarms are only indicated by a numeric badge on the bell icon:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/29_L272_1787722482723_bd6d7c02_6b49_4ca2_893c_644427564062.png)

#### 2.6.4 Alarm List

Click the bell icon in the top-right corner, or choose **Alarms → Alarm List** in the left menu, to open the alarm list. This page shows the historical alarms from all cameras (snapshots are masked to protect privacy).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/30_L278_1787722482842_0e4a0c1d_1d5e_47c6_8829_1d47642880f4.png)

Alarm records can be acknowledged, marked as false alarms, or deleted.

Select the checkboxes on the left and use the buttons in the top-right corner to act on several records at once.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/31_L284_1787722482958_629af802_4ac4_4467_85b3_ff2451f85c35.png)

**Note: the last button clears all alarm records. It is intended for use after deployment testing and before going live — use it with care.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/32_L288_1787722483086_f9c2ac99_05ef_4ecd_b5ff_62e18664b27f.png)

### 2.7 Users

#### 2.7.1 User Management

The user management page supports adding, editing, and deleting users.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/33_L296_1787722483177_4589414d_76be_4d18_af56_f852270b7695.png)

User name, password, display name, and role can all be modified.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/34_L300_1787722483309_00e80394_9d1d_4076_ad95_5cc67a5e48fc.png)

The built-in account is listed at the bottom. It cannot be deleted and its role cannot be changed, which prevents an accidental lockout with no account left to manage the web interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/35_L304_1787722483443_e23b024d_7eb1_4ca3_9958_bd0184b8eb4e.png)

**Note: the role drop-down is populated from the role management page. If you do not need fine-grained roles, simply use the built-in `admin` account.**

#### 2.7.2 Role Management

If you need to separate permissions, open the role page, add roles, and configure page and button permissions for each role:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/36_L312_1787722483555_bf93936f_54a3_49a0_a08f_bac65a7a13f4.png)

The first and second levels correspond to the first- and second-level menus on the left; the third level corresponds to the action buttons inside a page. **View** grants access to the page — without it, visiting the page redirects to a "no permission" page.

**Note: the super administrator role is not listed. That account is not subject to permission control and has all permissions by default.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/37_L318_1787722483681_e1c478c0_d4f0_4b3c_90ff_7cb38250e3bf.png)

### 2.8 Network

#### 2.8.1 Wired Network

The wired network page shows the NIC's MAC address and IP configuration.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/38_L326_1787722483772_dc1db900_b3ea_4bf5_96a5_f79f2677e031.png)

Click **Settings** to configure the network:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/39_L330_1787722483880_cb7b6b46_9b83_4146_92f1_ca15f256ec83.png)

There is no limit on the number of DNS servers, but one or two is normally enough.

#### 2.8.2 Wireless Network

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/40_L336_1787722483961_7d7606be_23bb_4e2a_b840_581e3f6f5922.png)

Click **Settings** to configure the Wi-Fi connection's IP address.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/41_L340_1787722484051_e30a5096_c920_4990_8e5b_b124632dc9d3.png)

Click **Connect** in the list to open the Wi-Fi list, choose a network, click **Connect**, enter the password, and confirm.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/42_L344_1787722484130_a1362101_dcd4_4e31_b583_abfce858f7be.png)

Once connected, the status shows as connected.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/43_L348_1787722484206_8bfac8b8_d9a6_4df8_9df1_19a85d9f9d80.png)



**Note: after a successful connection, the device reconnects to that Wi-Fi network automatically after a restart.**

#### 2.8.3 Mobile Network

For a standard IoT SIM card, no user name or authentication method is needed: leave the APN at its default value `cmnet` and the authentication method at `1`. Set the connection to automatic and save, so the background process keeps the mobile connection alive.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/44_L358_1787722484363_e34ab793_faf4_49c3_90de_616f1d53e460.png)

### 2.9 Applications

#### 2.9.1 Application Monitoring

The application monitoring page shows whether the services the system depends on are running:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/45_L366_1787722484470_3385473e_6acd_4e9c_863a_fa1d0137c3ce.png)

The processes listed are briefly described in the introduction column; hover over the text to see the full description.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/46_L370_1787722484605_e6fe257f_bcf5_4131_b89f_12b870b5c99d.png)

#### 2.9.2 Application Upgrade

The application upgrade page simply requires a ZIP archive that meets the requirements: the archive root must contain an `update.sh` script, which performs the upgrade steps. This makes the mechanism generic — besides upgrading the web management program, it can upgrade any other application.

As a minimal test, write this into `update.sh`:

```bash
echo "OK" > /tmp/test_upgrade.txt
```

Then compress `update.sh` into a ZIP file:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/47_L384_1787722484685_2bae2e49_8d64_43a6_9cda_a7dbead6d8cd.png)

On the page, click **Choose File**:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/48_L388_1787722484801_537b2fdf_8eaf_425c_91a2_eac0a92cd0cd.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/49_L390_1787722484900_1b71ad04_ac8a_4700_8c6a_9383c97b6ef6.png)

Select `update.zip` and click **Open**:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/50_L394_1787722485003_da2e6e54_b574_4505_a98f_39f2dac6d26f.png)

Click **Start Upgrade**; a success message appears:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/51_L398_1787722485107_20a2b1be_ae31_4f1d_accb_09cc62014725.png)

On the device's shell, run `cat /tmp/update.log`:

```
OK
```

This confirms that `update.sh` ran correctly on the Linux side.

Note: the web management interface runs with root privileges, so anything `update.sh` does must be safe and controlled — it must not damage system files.

### 2.10 System

#### 2.10.1 System Settings

The system settings page has four tabs: **System Settings**, **Export Configuration**, **Import Configuration**, and **Backup List**.

**1. System Settings**

Here you can set the platform name, device model, company name, and the daily reboot time. If a daily reboot is not needed, set the reboot time to `-1`.

After changing a setting, a **Save** button appears next to the field; click it to apply the change.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/52_L422_1787722485190_0753fd23_1914_4267_99e1_16dfd9134fe5.png)

**2. Export Configuration**

Click the **Export Configuration** tab:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/53_L428_1787722485271_9270dfcc_cf90_4ad8_a60b_97ec8cb37dee.png)

What can be exported:

*Data*

Data-type items generally map to a table in `/web/data/web.db`.

| Item                        | Description                                                                     |
| --------------------------- | ------------------------------------------------------------------------------- |
| Roles                       | The role table — all roles maintained under **Users → Role Management**. Usually selected together with Users. |
| Users                       | The user table — all users maintained under **Users → User Management**. Usually selected together with Roles. |
| System / NTP settings       | Settings from **System → System Settings** and the NTP synchronization settings on **System → System Time** are stored in the same table. |
| Parameter types             | Information maintained on **Algorithms → Parameter Types**.                      |
| Algorithm list              | Information maintained on **Algorithms → Algorithm List**.                       |
| Algorithm categories        | Information maintained on **Algorithms → Algorithm Categories**.                 |
| Cameras                     | Information maintained on **Cameras → Camera List**.                             |

*Files*

| Item                | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| Application config  | `/web/bin/cfg`                                                       |
| Model files         | `/web/data/weights` — the model files used for inference             |
| Algorithm files     | `/web/data/algo` — the algorithm files (shared libraries)            |

In short, the export covers a set of database tables and a few directories. Only configuration is exported; alarm records cannot be exported.

To export, tick the items you need (or keep the default select-all), then click **Export Selected Configuration**. The browser downloads a ZIP file, which can be imported on another device through **Import Configuration**.

**3. Import Configuration**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/54_L460_1787722485398_eb4deb1c_c7db_4704_b62c_6c4949f1a123.png)

Click the **Import Configuration** tab, then **Choose Backup File** to open the file picker. Select an exported configuration (ZIP) and click **Open**:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/55_L464_1787722485473_42c448f1_2110_403c_b132_9ec72f93d43d.png)

The page shows which items the archive contains:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/56_L468_1787722485555_5085b434_d425_4a1f_95f4_a8e0aa6e8b0d.png)

Items that were not selected during export are greyed out and cannot be imported.

#### 2.10.2 System Resources

The system resources page shows the running state of the system in sections: system information, resource usage, wired network, wireless network, and CPU utilization.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/57_L476_1787722485648_1fa72bd5_c398_427e_b6bc_23dbd85b1577.png)

CPU, NPU, and RGA utilization curves update periodically, so after leaving the page open for a while you can see how resource usage fluctuates over time.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/58_L480_1787722485735_9f235652_e80c_470f_acb7_41c4cb69078f.png)

#### 2.10.3 System Time

System time can be set from the web interface, or configured to synchronize periodically over NTP (the device must be able to reach an NTP server).

For manual synchronization, simply click **Synchronize Local Time to System**:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/59_L488_1787722485825_9c0e4a5e_2c17_4032_a18b_ba84b5c5c93d.png)

If the device has internet access, or a standard NTP server is available on the local network, configure NTP synchronization:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/60_L492_1787722485911_3e1c1807_fe9e_4306_b939_7039d4ca28cd.png)

Make sure **Enable Service** is selected. Otherwise the configuration only supports manual synchronization — the background `webservice` process will not synchronize at the configured interval (in hours).

#### 2.10.4 Cloud Platform

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/61_L498_1787722486100_b910eaea_7f73_4b46_8e21_7f7cdfeda52d.png)

Hover over a field to see a tooltip:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/62_L502_1787722486181_e978334e_1815_4ba3_8f77_cbb3fc8eddf6.png)

The device name, cloud platform SSH port, and "push alarms to cloud platform" settings do not affect MQTT communication between the device and the cloud platform, so they can be changed freely on the cloud side.

**Note: the cloud platform SSH port must be the one provided by the cloud platform's host machine (not the port inside a Docker container), and the device's public key must be deployed on the cloud platform during setup. Otherwise alarm images, model files, and algorithm files cannot be transferred.**

#### 2.10.5 Sound Column Settings

The system can send alarm announcements to a Paike sound column. You first need to purchase the speaker; the Tmall store is at <https://danmaipaike.tmall.com/>. When ordering, tell the seller that it is for "BH integration" (or add "BH integration" in the order notes) — the speaker's built-in firmware provides the API this system connects to.

When the speaker arrives, ask support for the documentation link, follow the document to install the software and set the speaker's IP address, and make sure the AI system can ping that IP. Then open the sound column settings page:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/63_L514_1787722486255_70b08b91_e3bd_4bd1_9acc_32452d134988.png)

Enter the sound column URL, select **Enable**, and click **Save**. From then on, when an alarm is raised, the sound column plays the announcement.

**Note: the volume setting here controls the synthesized speech, and works together with the playback volume set on the device. During commissioning, set the playback volume on the device management page (`http://<device-IP>:8080`) as appropriate (100 in noisy environments, 50 in quiet ones), then set a suitable speech volume on this page.**

The page exposes only part of the configuration; the remaining settings live in this file. `body` corresponds to the request body described in *Direct LAN Integration with Speaker Devices — Text TTS and Media URL Playback API (Speaker Integration)*. Refer to that document for the parameter descriptions.

```bash
cat /web/bin/cfg/player.json
```

```json
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
  "url": "http://172.20.0.104"
}
```

#### 2.10.6 Watchdog

The watchdog can be configured to be fed either by an application or by the kernel. With application feeding enabled, the `appwatching` process feeds the watchdog periodically; if `appwatching` exits unexpectedly, the system restarts automatically once the timeout (in seconds) expires.

If another application should feed the watchdog instead, disable application feeding here and manage it from that application.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/64_L553_1787722486334_8a4afcd2_3159_4bad_adbb_264d8e7c647c.png)

### 2.11 Logs

#### 2.11.1 Application Logs

Application logs give access to every file in `/web/bin/log`. By default this directory holds the logs of `appwatching`, `applogging`, and the Wi-Fi connection.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/65_L561_1787722486410_c0265c0e_b9b5_4855_ae21_8270181b0e58.png)

#### 2.11.2 Operation Logs

The operation log records the key actions users perform in the web interface. Records can be deleted individually or cleared entirely.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3101/fcu3101-ai-algorithm-user-manual-EN/66_L567_1787722486519_f0d041a3_ffa2_4c28_93dc_08efafe4c8cb.png)

---

## 3. Algorithm Reference

All object-detection algorithms assume a bright scene, a clear target, and a target occupying at least 10% of the frame. A dirty lens, a cluttered scene, occlusion, dim light, or a very small target will all reduce detection accuracy.

Nearly all detection algorithms share the following standard parameters:

| Parameter         | Description                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Confidence        | The minimum confidence for a detection to count; targets below this value are ignored.                                                                                                                                      |
| Detection window  | Used together with the alarm threshold.                                                                                                                                                                                     |
| Alarm threshold   | The number of hits required within a detection window before an alarm can be raised. With a window of 5 and a threshold of 3, at least 3 of the 5 inference results sent to the alarm program must match the alarm rule (note the camera's inference rate). Whether the alarm is actually stored and pushed as a live alarm is then decided by the alarm interval. |
| Alarm interval    | The minimum time between two alarms. If the previous alarm is more recent than this interval, no new alarm is raised.                                                                                                        |

FCU3101 ships with the 17 AI algorithms listed below; more are being added.

| Category    | No.  | Algorithm                       | Description                                                  |
| ----------- | ---- | ------------------------------- | ------------------------------------------------------------ |
| Safety      | 1    | Smoke detection                 | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: smoke. <br />Logic: an alarm is raised when the smoke target's confidence reaches the threshold. <br />Input: color image. Device: fixed 1080P camera. |
| Safety      | 2    | Open flame detection            | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: open flame. <br />Logic: an alarm is raised when the flame target's confidence reaches the threshold. <br />Input: color image. Device: fixed 1080P camera. |
| Personnel   | 3    | Hard hat detection              | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Targets: person, hard hat. Logic: target tracking assigns each detected person a tracking ID; an alarm is raised when no hard hat matches the person's head region and the same tracking ID accumulates N hits within the configured time window. <br />Input: color image. Device: fixed 1080P camera. |
| Personnel   | 4    | High-visibility vest detection  | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Targets: person, vest. <br />Logic: each detected person gets a tracking ID; an alarm is raised when no vest matches the specified body region and the same tracking ID accumulates N hits within the time window. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 5    | Smoking detection               | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Targets: person, cigarette. <br />Logic: each detected person gets a tracking ID; an alarm is raised when the cigarette box overlaps the head-and-shoulders region above the threshold and the same tracking ID accumulates N hits within the time window. <br />Input: color image. Device: fixed 1080P camera. |
| Personnel   | 6    | Phone use detection             | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Targets: person, phone. <br />Logic: an alarm is raised when the phone box overlaps the head-and-shoulders region above the threshold and the same tracking ID accumulates N hits within the time window. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 7    | Fall detection                  | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. Logic: each detected person gets a tracking ID; an alarm is raised when keypoint quality reaches the threshold, the pose satisfies the lying-on-ground condition, and the same tracking ID accumulates N hits within the time window. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 8    | Intrusion detection             | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. <br />Logic: each detected person gets a tracking ID; when a person enters the configured region and that ID accumulates N consecutive hits (consecutive-frame confirmation) and stays for the configured dwell time, an alarm is raised. <br />Input: color image. Device: fixed 1080P camera. |
| Personnel   | 9    | Absence-from-post detection     | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. Logic: an alarm is raised when a person has been away from the region longer than the buffer time and the number of people on post drops below the configured value. Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 10   | Loitering detection             | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. Logic: each detected person gets a tracking ID; an alarm is raised when that ID stays in the configured region for the specified time and its direction reversals and path ratio reach the thresholds. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 11   | Dwelling detection              | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. <br />Logic: each detected person gets a tracking ID; an alarm is raised when the same ID remains continuously inside the configured region for the specified time. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 12   | Sleeping-on-duty detection      | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. Logic: each detected person gets a tracking ID; an alarm is raised when the same ID is judged to be sleeping for N consecutive frames. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 13   | Crowd gathering detection       | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: person. Logic: an alarm is raised when the configured region reaches the minimum headcount and the spacing between people meets the gathering-distance threshold. Input: color image. <br />Device: fixed 1080P camera. |
| Personnel   | 14   | People counting                 | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. Target: person.<br />Logic: an alarm is raised when the headcount in the configured region reaches the threshold for N consecutive frames. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Vehicles    | 15   | License plate recognition       | Scene: outdoor, industrial site. <br />Conditions: outdoors, day or night with adequate light. <br />Target: license plate. Logic: an alarm is raised when plate detection and recognition are valid but the plate number is not in the authorized plate database. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Vehicles    | 16   | License plate color recognition | Scene: outdoor, industrial site. <br />Conditions: outdoors, day or night with adequate light. <br />Target: license plate. <br />Input: color image. <br />Device: fixed 1080P camera. |
| Environment | 17   | Garbage detection               | Scene: outdoor, indoor, industrial site. <br />Conditions: indoors or outdoors, day or night with adequate light. <br />Target: garbage. Logic: an alarm is raised when the center of the garbage target falls inside the configured region. <br />Input: color image. <br />Device: fixed 1080P camera. |

