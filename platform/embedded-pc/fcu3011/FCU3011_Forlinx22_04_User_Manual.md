# Forlinx22.04\_User's Manual\_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## 1\. FCU3011 Embedded Control Unit Description

### 1.1 Product Description

The FCU3011 embedded control unit is designed based on NVIDIA’s Jetson Orin NX and Nano modules. It supports 5G mobile networks, Gigabit Ethernet, USB 3.0, CAN, RS485, DI, DO and a wide range of other peripheral interfaces; compatible with the Ubuntu 22.04.4 LTS operating system.

Link to the official NVIDIA manual: [https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/index.html](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/index.html)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356252_6905e692_3573_42c1_9ea0_20fd6ffd37ab.jpg)

**Product Features:**

● Linux kernel version: Version 5.15.136; cross-compilation chain version: Aarch64 gcc-11.3-glibc-2.35;

● Fanless design ensures more stable system operation, superior temperature control, and enhanced housing sealing, enabling adaptation to more diverse environmental conditions;

● M.2 Type 2230 interface, namely the E KEY standard interface, with an RTL8822CE WIFI module connected by default;

● M.2 KEY M (PCIex4 NVMe 2280)

● 4G/5G modules

● Equipped with Ubuntu 22.04.4 LTS system, which has a wealth of third-party applications and plugins to facilitate user development.

### 1.2 Application Areas

Edge AI computing gateways, smart IoT, smart cities, industrial automation, video surveillance, robotics, etc.

## 2\. Startup

### 2.1 Preparation Before Startup

Preparation Before Startup:

- 12V3A DC power;
- Ethernet cable (required for internet access);

- HDMI cable and monitor, or micro USB.


Power interface as illustrated below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356370_d93ec883_4497_4134_af6d_4ca94802ccd5.png)

Choose either graphical configuration or serial port configuration

### 2.2 First Boot Configuration (Graphical Configuration)

**Note:**

- **When powering on for the first time, you need to configure a username and password, and this username has sudo privileges;**
- **It needs to be configured after flashing;**
- **Reconfigure the device after flashing the firmware.**

The first interface that appears on the HDMI monitor after power-on is as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356475_d176e4cb_9802_4642_b193_e53603b7bb70.png)

Check the box for “I accept the terms of these licenses”, then click the “Continue” button at the bottom right to enter the next configuration interface.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356583_ab130c4b_cac1_4748_a69b_1e1ec1644cff.png)

Language selection: Choose as needed. Generally, the default setting is sufficient, click “Continue”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356694_a2238d4d_1bb6_4ab6_9cc7_069a42af5f90.png)

Time zone selection: Click on the map according to the actual situation. 

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356809_d591fd0c_c552_40c8_9807_4a643cf26511.png)

Set the initial username and password. 

This manual uses “forlinx” as an example, with the reference configuration as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722356929_8ac1cce2_cd4c_4cca_8563_d1b677af5cd1.png)

Then click “Continue” (this interface does not appear after OTG flashing).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357059_3f24f0f7_3302_4147_97c4_3a06131268fe.png)

Click “Continue” with the default settings.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357179_ea04aedf_7c5e_46c7_8145_d823533ca0fa.png)

The system will enter the automatic configuration process. After the configuration is completed, the login interface will pop up. Enter the previously set username and password to access the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357286_6a76c290_e7d3_46ef_9dc3_6bcb744a279a.png)

Click “forlinx”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357379_e52daf6b_1928_49b5_ba3b_a92314db1484.png)

After entering the password, click “Sign In”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357475_e4309325_b978_4bf5_b4db_55b03832ffc0.png)

When entering the system for the first time, two interfaces with system operation guides will pop up—just close them. The power-on configuration is completed.

### 2.3 First Boot Configuration (Serial Port Configuration)

This configuration method is suitable for scenarios without a monitor to perform the first power-on boot configuration. It involves more steps and is less intuitive than the graphical interface. It is recommended to use the “Graphical Configuration” method in the previous section. Specific Steps:

Power on the device, and connect the OTG port to a Windows 10 computer via a micro USB cable. Open Device Manager and wait for the virtual serial port to be recognized. After the COM port (as shown in the figure below) appears in Device Manager, go to next step. The COM port number varies depending on the specific computer and port used.

![Image](1718954727852_9c9b1c4a_e1c9_4599_b47f_7248258645a1.png)

Set up Putty to open the USB virtual serial port:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357692_e26a14c5_c11a_49ab_a3b5_998f0ca067fd.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357793_30ed3ef3_ffb6_4b5d_bfe0_d7cfb506d460.png)

The serial port will print the first interface of the system configuration:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357893_5255efdf_071e_4899_af7a_e88ebada1d6b.png)

Press Enter, and the License interface will appear:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722357990_3cd58378_7635_4ad6_8f7d_6a8e1871085d.png)

Press ESC to exit the License interface, and the language selection interface will appear. Select according to actual needs—here take English as an example:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358092_9dcdaad6_2514_4a00_8efd_6d9e804f0f81.png)

Press Enter to enter the location selection. The location is related to the accuracy of the time zone. It needs to be selected according to the actual situation:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358182_bc7bd4be_41bb_44d0_b707_4aa9a6e7c6ff.png)



![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358301_999e9e0a_cad3_4857_bcfa_f019d67c41db.png)

Press Enter, and find “Asia” (as you needed) in the new interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358398_2b8fc0d1_d4e6_49f0_97dc_04d159eb7ace.png)

Press Enter, and find “Your Country” in the new interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358545_5f635df8_095f_4636_bec2_3de9ffa932e1.png)

Press Enter to enter the character encoding selection interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358639_9ff2a8c6_cdb3_40dc_bd2b_2cc38491c7c0.png)

Use the default en\_US.UTF-8 (if Chinese display is needed, select zh\_CN by yourself), then press Enter to enter the keyboard layout interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358733_0f949a71_7a8a_4e08_8c2d_016534c94375.png)

Use the default setting, press Enter to enter the second keyboard layout interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358864_10294fa2_5966_429a_90d6_cc7f2cabf898.png)

Use the default setting, press Enter to enter the UTC clock enable/disable interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722358994_bd5be435_e9a9_4463_ac50_2b474efea444.png)

Select “Yes” and press Enter to enter the username setting interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359112_9d2bc0d3_ca19_4928_9ff8_34eee32f43f2.png)

Enter according to actual needs:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359300_25935dce_1447_40f2_81b7_74001e8669b0.png)

Press Enter to enter the login username setting interface, enter according to the actual situation:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359433_d0529766_af29_4ecc_8152_52e3471edd4a.png)

Press Enter to reach the password input interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359570_15f2a3ae_5424_4faf_b35e_08d1c0d945d7.png)

After entering the password according to actual needs, press Enter to enter the password confirmation interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359698_673b3d4e_8b8c_4057_a621_6ebea2bc9f2b.png)

Enter the same password again and press Enter. If the password is set too simple, the following interface will pop up:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359839_69665abb_a28c_4274_9a3c_dd23b25c0e7b.png)

If you still want to keep the simple password, press the left key on the PC keyboard to move the cursor to “Yes”.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722359930_f46a4b08_1b28_4ea4_9e12_bc18687a5a50.png)

Press Enter to enter the APP partition size setting interface. The default is the maximum available value, no modification is needed (if you need to reserve space, subtract the reserved value here. This interface does not appear after OTG flashing): 

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360017_d00e9570_6a08_4473_8e47_d4f02f2da5ec.png)

Press Enter, you will enter the network port selection interface for network configuration:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360161_bd7f918e_93fd_445d_9356_ac12a93b2fcb.png)

Do not configure it for now, use the default setting and press Enter:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360389_3826acd7_776c_4d68_9ca3_31bf613c9ba5.png)

Wait for the automatic network configuration to fail, and the following interface will pop up:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360497_229a5f3b_93a6_4103_8333_a4644772a57c.png)

After pressing Enter, the network configuration interface will pop up:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360588_1beba6a9_f6e4_4192_9650_69e5f321c35d.png)

Move the cursor to the last option to skip network configuration temporarily (if you need to configure the network, select “Configure network manually” in this interface), press Enter to enter the hostname setting interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360674_ec0e879c_87ad_45df_b562_ea7ce5923c2c.png)

After setting the hostname according to the actual situation, press Enter to enter the NVIDIA power consumption configuration interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360779_05ac1ede_b83c_4ec2_90c2_fb194d842df8.png)

Select according to actual needs. The maximum power consumption is 15W—higher power consumption brings better performance but also more heat. After making the selection, press Enter, and the system will start automatic configuration:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722360900_6f372876_e67a_4588_a68b_756a1409270a.png)

After the configuration is completed, the USB virtual serial port will disconnect:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361014_772ac483_524f_4aef_8b43_73db13220feb.png)

Click the “OK” button, then click the top left corner and select to reconnect the virtual serial port from the pop-up interface:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361113_d5ef8643_96ef_4862_a363_798ab26d42ee.png)

At this point, the configuration is completed, and you can log in to the system through the USB virtual serial port using the username and password set above.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361253_968eed5e_ab17_4a6d_9da3_efe06f608d3f.png)

## 3\. FCU3011 Embedded Control Unit Interface

This chapter mainly describes how to use the peripheral interface of the FCU3011 embedded control unit.

### 3.1 USB Interface Usage

#### 3.1.1 USB HOST Interface Storage Test

**Note:**

- **Supports hot plugging of USB mice, USB keyboards, and USB flash drives;**
- **When testing with a USB flash drive, it is recommended to format the drive to the FAT32 format recognizable by Linux systems using a formatting tool;**
- **Currently, USB flash drive testing supports capacities up to 124 GB; capacities above 124 GB have not been tested;**
- **The mount directory for USB flash drives is /media/"username"/.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361356_0921941a_54ad_4ada_953a_4fd296c04b4e.png)

The FCU3011 is equipped with four USB HOST interfaces, as indicated by the red box. The two blue interfaces are USB 3.0 ports, and the white ones are USB 2.0 ports. Any of the interfaces can be selected for testing. When a USB flash drive is inserted, the system’s file browser will automatically display the contents of the drive.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361495_5f820408_8830_45e9_b519_1b01457d31c6.png)

Read-write Speed Test：

Write test:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361638_d586ccca_b8f6_40f6_9767_c0df54eaf2cd.png)

```plain
forlinx@forlinx-desktop:~$ dd if=/dev/zero of=/media/forlinx/0142-170E/test.bin  bs=1M  count=1024 conv=fsync
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 44.0724 s, 24.4 MB/s
```

Read test:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361741_d0003cfc_d1a9_41fd_af59_3c873a6640e7.png)

```plain
forlinx@forlinx-desktop:~$ dd if=/media/forlinx/0142-170E/test.bin of=/dev/null
2097152+0 records in
2097152+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 6.76511 s, 159 MB/s
```

#### 3.2.2 USB OTG Remote Login

It is recommended to use USB OTG on Windows 10. Windows 7 system has no driver. For other systems, refer to the README-usb-dev- mode. rxt in storage.

Connect the OTG port to a Windows 10 PC via a micro USB cable. After successful recognition, a USB mass storage device and a serial port device will be displayed.

The contents of the mass storage are as follows:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361843_eb4e3186_2c89_423c_89ae_e611b5b4f827.png)

Check the serial port number via Device Manager:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722361931_091e06c6_594a_48fc_be7a_da29067b8951.png)

As shown in the figure above, the serial port number is COM4. You can log in to the FCU3011 by opening this serial port with PuTTY. The serial port mode must be set to 8N1, that is, 8 data bits, no parity bit, and 1 stop bit (the explanation of the 8N1 serial port setting in READ-usb-dev-mode.txt is incorrect).

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362024_eb8c664a_c967_491e_87da_de595f73f1c9.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362140_d29daf3c_2330_4cb7_8cce_50d13c380a7a.png)

Click "Open", it prompts to enter the username and password:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362241_c30e2309_e053_46d7_a821_c576596274b6.png)

Enter the username and password to successfully log in to the system.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362378_f5196871_8cbb_4406_9a99_b07d6cd105aa.png)

#### 3.2.3 USB Camera Test

**Note: This product supports the USB camera: Webcam C270.**

For specific usage instructions, refer to Section 5.6 UVC Camera.

### 3.2 Wired Network

The FCU3011 integrates a 5-port network switch internally, with four Gigabit Ethernet ports exposed externally — any of these ports can be connected to the external network or local devices. There is also one internal network port for communication with the switch. All wired network configurations can be done through the Ubuntu interface, following the same methods as on a PC. This chapter only provides the terminal command line configuration methods.

**Note:** 

- **The examples in this section are tested under Forlinx Embedded’s internal network environment. Since actual network conditions may vary in deployment, perform configurations according to the specific on-site network environment;**
- **The network interface name of the FCU3011 is eth0, and there is no default IP address upon first startup.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362523_2e3eb44b_7e63_454e_8c5e_fd639c43045b.png)

#### 3.2.1 IPv4 Dynamic IP

If your FCU3011 is connected to a router that supports DHCP automatic IP address assignment, enter the command in the hyper terminal:

```plain
forlinx@forlinx-desktop:~$ sudo nmcli connection edit Wired\ connection\ 1 

===| nmcli interactive connection editor |===

Editing existing '802-3-ethernet' connection: 'Wired connection 1'

Type 'help' or '?' for available commands.
Type 'describe [<setting>.<prop>]' for detailed property description.

You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, dcb, ipv4, ipv6, tc, proxy
nmcli> set ipv4.method auto
Do you also want to clear 'ipv4.addresses'? [yes]: y
nmcli> set ipv4.gateway 0.0.0.0
nmcli> save 
Connection 'Wired connection 1' (452d61d0-2afd-36e2-bdd0-93bca31ead80) successfully updated.
nmcli> quit
forlinx@forlinx-desktop:~$ sudo nmcli connection up Wired\ connection\ 1 
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/2)
forlinx@forlinx-desktop:~$
```

If a static IP was configured previously, the system will prompt Do you also want to clear ”ipv4.addresses“? \[yes]:, enter y to confirm.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362660_1b3e8b8d_3cb9_4326_9c9b_80304c99afd4.png)

#### 3.2.2 IPv4 Static IP

Open the terminal on the FCU3011, then enter the following commands in sequence to configure a static IP:

```plain
forlinx@forlinx-desktop:~$ sudo nmcli connection edit Wired\ connection\ 1
===| nmcli interactive connection editor |===
Editing existing '802-3-ethernet' connection: 'Wired connection 1'
Type 'help' or '?' for available commands.
Type 'describe [<setting>.<prop>]' for detailed property description.
You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, dcb, ipv4, ipv6, tc, proxy
nmcli> set ipv4.method manual
nmcli> set ipv4.addresses 192.168.1.155/24
nmcli> set ipv4.gateway 192.168.1.1
nmcli> save 
Connection 'Wired connection 1' (452d61d0-2afd-36e2-bdd0-93bca31ead80) successfully updated.
nmcli> quit
forlinx@forlinx-desktop:~$ sudo nmcli connection up Wired\ connection\ 1
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/4)
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362805_758b2e62_7a6e_4f54_adac_2c9ba1110a15.png)

#### 3.2.3 MAC Address Modification

```plain
forlinx@forlinx-desktop:~$ sudo nmcli connection edit Wired\ connection\ 1 

===| nmcli interactive connection editor |===

Editing existing '802-3-ethernet' connection: 'Wired connection 1'

Type 'help' or '?' for available commands.
Type 'describe [<setting>.<prop>]' for detailed property description.

You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, dcb, ipv4, ipv6, tc, proxy
nmcli> set 802-3-ethernet.cloned-mac-address 00:11:22:33:44:55
nmcli> save 
Connection 'Wired connection 1' (452d61d0-2afd-36e2-bdd0-93bca31ead80) successfully updated.
nmcli> quit
forlinx@forlinx-desktop:~$ sudo nmcli connection up Wired\ connection\ 1 
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/5)
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722362947_233f7508_99cb_46ac_b06a_77df56b40589.png)

#### 3.2.4 IPV6

The configuration principle for IPv6 is the same as that for IPv4. Simply change the attribute name from ipv4 to ipv6, and configure addresses in compliance with the IPv6 format.

3.2.5 SSH Remote Login to FCU3011

The SSH service is enabled by default. After the IP address is configured, you can remotely log in to the FCU3011 from a PC.

### 3.4 Wireless Network

#### 3.4.1 4G/5G

**Note:**

- **The FCU3011 supports the Quectel EM05-CE 4G module, Quectel RM500Q-GL 5G module, and Quectel RM500U-CN 5G module;**
- **Ensure that the 4G/5G module is installed inside the FCU3011, the 4G/5G antenna is connected, and a SIM card is inserted. The position of the SIM card holder is indicated by the red box in the figure.**

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363056_38e4d469_e47f_449c_95a3_178b1c53c5bb.png)

3.4.1.1 4G/5G Recognition Check

**Quectel EM05-CE**

You can enter the following command in the FCU3011 console to check if the Quectel EM05-CE 4G module is successfully recognized.

```plain
forlinx@ubuntu:~$ lsusb
Bus 002 Device 003: ID 2c7c: 0125
Bus 002 Device 002: ID 04b4:6500 Cypress Semiconductor Corp.
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 04b4:6502 Cypress Semiconductor Corp.
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Using the ifconfig command, you will see that the node name generated by the Quectel EM05-CE 4G module is usb1.

**Quectel RM500Q-GL**

You can enter the following command in the FCU3011 console to check if the Quectel RM500Q-GL 5G module is successfully recognized.

```plain
forlinx@ubuntu:~$ lsusb
Bus 002 Device 003: ID 2c7c:0800
Bus 002 Device 002: ID 04b4:6500 Cypress Semiconductor Corp.
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 04b4:6502 Cypress Semiconductor Corp.
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Using the ifconfig command, you will see that the node name generated by the Quectel RM500Q-GL 5G module is usb1.

**Quectel RM500U-CN**

You can enter the following command in the FCU3011 console to check if the Quectel RM500U-CN 5G module is successfully recognized.

```plain
forlinx@ubuntu:~$ lsusb
Bus 002 Device 003: ID 2c7c:0900
Bus 002 Device 002: ID 04b4:6500 Cypress Semiconductor Corp.
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 04b4:6502 Cypress Semiconductor Corp.
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Using the ifconfig command, you will see that the node name generated by the Quectel RM500U-CN 5G module is usb1.

3.4.1.2 4G/5G Test

**Quectel EM05-CE**

Insert the SIM card to test the 4G Internet access, test whether it is connected to the external network, run the following command to automatically power on the module, and dial:

```plain
forlinx@ubuntu:~$ sudo fltest_4g5g.sh &
[sudo] password for forlinx:

Pruduct is EM05-CE

Start connecting to the network ...
udhcpc: started, v1.27.2
udhcpc: sending discover
udhcpc: sending select for 10.5.167.145
udhcpc: lease of 10.5.167.145 obtained, lease time 7200
cmp: EOF on /tmp/tmp.HNaVBpoVBZ which is empty
```

Run the following command to test connectivity.

```plain
forlinx@forlinx-desktop:~$ ping -I usb2 www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) from 192.168.2.103 usb1: 56(84) bytes of data.
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=1 ttl=50 time=40.5 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=2 ttl=50 time=43.3 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=3 ttl=50 time=38.7 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=4 ttl=50 time=38.1 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=5 ttl=50 time=44.8 ms
^C
--- s-526319.gotocdn.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 38.186/41.141/44.813/2.575 ms
```

**Quectel RM500U-GL**

Insert the SIM card to test the 5G Internet access, test whether it is connected to the external network, run the following command to automatically power on the module, and dial:

```plain
forlinx@forlinx-desktop:~$ sudo fltest_4g5g.sh
[sudo] password for forlinx:
Pruduct is RM500U-CN
Start connecting to the network ...
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/usb2/36:d4:a1:59:83:1e
Sending on   LPF/usb2/36:d4:a1:59:83:1e
Sending on   Socket/fallback
DHCPREQUEST for 192.168.42.2 on usb2 to 255.255.255.255 port 67 (xid=0xa01bbcf)
DHCPACK of 192.168.42.2 from 192.168.42.1 (xid=0xcfbb010a)
bound to 192.168.42.2 -- renewal in 36080 seconds.
```

Run the following command to test connectivity.

```plain
forlinx@forlinx-desktop:~$ ping -I usb2 www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) from 192.168.2.103 usb1: 56(84) bytes of data.
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=1 ttl=50 time=40.5 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=2 ttl=50 time=43.3 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=3 ttl=50 time=38.7 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=4 ttl=50 time=38.1 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=5 ttl=50 time=44.8 ms
^C
--- s-526319.gotocdn.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 38.186/41.141/44.813/2.575 ms
```

**Quectel RM500U-CN**

Insert the SIM card to test the 5G Internet access, test whether it is connected to the external network, run the following command to automatically power on the module, and dial:

```plain
forlinx@ubuntu:~$ sudo fltest_4g5g.sh &
[sudo] password for forlinx:

Pruduct is RM500U-CN

Start connecting to the network ...
udhcpc: started, v1.27.2
udhcpc: sending discover
udhcpc: sending select for 10.13.36.54
udhcpc: lease of 10.13.36.54 obtained, lease time 86400
cmp: EOF on /tmp/tmp.Boe9B5XaN1 which is empty
RM500U-CN dhcp Complite !!!
```

Run the following command to test connectivity.

```plain
forlinx@forlinx-desktop:~$ ping -I usb2 www.forlinx.com
PING s-526319.gotocdn.com (211.149.226.120) from 192.168.2.103 usb1: 56(84) bytes of data.
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=1 ttl=50 time=40.5 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=2 ttl=50 time=43.3 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=3 ttl=50 time=38.7 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=4 ttl=50 time=38.1 ms
64 bytes from s-526319.gotocdn.com (211.149.226.120): icmp_seq=5 ttl=50 time=44.8 ms
^C
--- s-526319.gotocdn.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 38.186/41.141/44.813/2.575 ms
```

#### 3.4.2 WiFi

Ensure that the RTL8822CE WiFi module is installed inside the FCU3011. It supports connection to 5G APs.

3.4.2.1 Viewing AP

```plain
forlinx@forlinx-desktop:~$ nmcli device wifi
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363170_06769015_fbc1_401a_b9c2_fe35a6cd81b8.png)

SSID refers to the name of the nearby AP, and BARS represents the signal strength value.

3.4.2.2 Connecting to an AP

AP name: bjfl;  
Password: 123456785 

```plain
forlinx@forlinx-desktop:~$ sudo nmcli device wifi connect bjfl password "123456785." ifname wlan0
（Enter sudo password）
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363284_1d1b9dd9_e4b5_489c_b008_a6fb261d002c.png)

Test connectivity.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363384_a5654928_c3f8_4ab2_8689_c1b79a25de17.png)

#### 3.4.3 AP Mode

When working in AP mode, devices such as mobile phones can directly connect to the FCU3011. If the eth0 interface can access the external network, devices connected through this AP can also access the Internet.

If you have executed the commands in Section 3.4.2 to connect to an AP before, you need to disconnect the AP connection first to ensure normal operation. The disconnection command is as follows (where bjfl is the previously connected AP name):

```plain
forlinx@forlinx-desktop:~$ sudo nmcli connection down bjfl
```

Execute fltest\_ap.sh — this script sets the Ethernet IP, configures the network firewall, and enables the AP at the same time.

```plain
forlinx@forlinx-desktop:~$ sudo fltest_ap.sh
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363523_34b6570d_6e73_4e4c_989c_0ac7b9d8c1e8.png)

Mobile terminals such as smartphones can connect to the FCU3011’s WiFi hot spot. The hot spot name is FCU3011 and the password is 12345678. The password can be changed to another value in /etc/hostapd/hostapd.conf.

If a device connects to the FCU3011, the following message will be printed:

```plain
wlan0: STA xx:xx:xx:xx:xx:xx IEEE 802.11: authenticated
wlan0: STA xx:xx:xx:xx:xx:xx IEEE 802.11: associated (aid 1)
wlan0: AP-STA-CONNECTED xx:xx:xx:xx:xx:xx
wlan0: STA xx:xx:xx:xx:xx:xx RADIUS: starting accounting session 2BF7DD81F6512143
wlan0: STA xx:xx:xx:xx:xx:xx WPA: pairwise key handshake completed (RSN)
```

(The MAC address of the STA varies by actual device, here it is replaced with xx:xx:xx:xx:xx:xx)

### 3.5 RS485

The RS485 interface is located in the position marked by the red box in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363633_02ed91f3_0e32_4884_b9e7_c6bd4172035f.png)

Connect to the peer device according to the labeled A and B pins.

This interface corresponds to the device /dev/ttyTHS1 in the system. If RS485 is controlled by programming, the method is the same as serial port.

Command-line connectivity test:

Use the built-in bash test on the FCU3011.

```plain
forlinx@forlinx-desktop:~$sudo stty -F /dev/ttyS0 ispeed 115200 ospeed 115200 cs8
forlinx@forlinx-desktop:~$sudo bash -c "cat /dev/ttyTHS1"            (收)
forlinx@forlinx-desktop:~$sudo bash -c "echo xxx > /dev/ttyTHS1"     (发)
```

Connect the A and B wires to the pins of a USB-to-485 module. On the PC side, open the serial port tool, select the COM port recognized by the PC, set the baud rate to 115200, data bits to 8, stop bits to 1, no parity, no flow control, and set it to send the string abcdefg at 1-second intervals. After configuring the parameters, open the serial port.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363715_1301c340_100a_48d8_8f61_26a5e916f807.png)

Input characters in the console of FCU3011, and the PC tool can receive them. Send characters to the FCU3011 with the PC tool, which can also be displayed in the console:

The serial port tool can receive the data sent by the test program.

### 3.6 CAN

The FCU3011 has one CAN bus channel. Connect to the peer device following the corresponding L (Low) and H (High) pins. The interface position is shown in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363820_192c887a_fc1a_4d99_8d61_7855564625c1.png)

Connectivity test:

Configure the CAN service as follows:

```plain
forlinx@forlinx-desktop:~$ sudo modprobe mttcan
[sudo] password for forlinx: 
forlinx@forlinx-desktop:~$ sudo ip link set can0 type can bitrate 125000
forlinx@forlinx-desktop:~$ sudo ifconfig can0 up
```

Set the baud rate of the can0 CAN device to 125000.

FCU3011 sending:

```plain
forlinx@forlinx-desktop:~$ cansend can0 123#aaaaaaddaabbccdd
```

FCU3011 receiving:

```plain
forlinx@forlinx-desktop:~$ candump can0 &
```

CAN0 received data:

```plain
can0  000   [8]  00 01 02 03 04 05 06 07
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722363911_384ecd5f_e453_4ac0_a018_c90eae0306d9.png)

PC side

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364003_3bf1ef0e_3f62_4cb6_9830_7d6cd7faa887.png)

### 3.7 HDMI

The HDMI interface is shown in the red box in the figure below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364095_5c276078_3019_4132_a657_27a44cc26d1b.png)

HDMI supports adaptive resolution, with a maximum resolution of 4K.

### 3.8 LED

The FCU3011 has only one user-controllable LED, whose position is shown in the figure.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364189_8e319e92_13cb_4c93_82cc_bfca261a6983.png)

Turn off the LED:

```plain
forlinx@forlinx-desktop:~$ sudo fltest_led.sh off
```

Turn on the LED:

```plain
forlinx@forlinx-desktop:~$sudo fltest_led.sh on
```

### 3.9 DI

The FCU3011 has two sets of digital inputs, IN1 and IN2, with a common terminal IGND. As shown in the figure:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364325_2fd3843c_6513_4187_9982_67159d7f5eba.png)

Query the status of DI1:

```plain
forlinx@forlinx-desktop:~$ fltest_di.sh IN1
IN1 state: 0
forlinx@forlinx-desktop:~$ fltest_di.sh IN1
IN1 state: 1
```

Query the status of DI2:

```plain
forlinx@forlinx-desktop:~$ fltest_di.sh IN2
IN1 state: 0
forlinx@forlinx-desktop:~$ fltest_di.sh IN2
IN1 state: 1
```

### 3.10 DO

The FCU3011 has two sets of digital outputs, respectively DO1 and DO2

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364440_4cafd815_a84a_4031_8919_5d976f46bf99.png)

DO1 has two pins: A-1 and A-2.

DO2 has two pins: B-1 and B-2.

When DO1 is closed: A-1 and A-2 are connected.

```plain
forlinx@forlinx-desktop:~$ fltest_do.sh DO1 on
```

When DO1 is open: A-1 and A-2 are disconnected.

```plain
forlinx@forlinx-desktop:~$ fltest_do.sh DO1 off
```

When DO2 is closed: B-1 and B-2 are connected.

```plain
forlinx@forlinx-desktop:~$ fltest_do.sh DO2 on
```

When DO2 is open: B-1 and B-2 are disconnected.

```plain
forlinx@forlinx-desktop:~$ fltest_do.sh DO2 off
```

### 3.11 NVME

If an NVMe solid-state drive is installed inside the FCU3011, it will be automatically mounted after the system boots, and can be operated in both the graphical desktop and command line. Verified model: Intel SSD 760p.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364538_94086a6b_ad0c_4a68_8d18_d465328dd887.png)

View the model via the command line:

```plain
forlinx@forlinx-desktop:~$  lspci 
0005:00:00.0 PCI bridge: NVIDIA Corporation Device 1ad0 (rev a1) 
0005:01:00.0 Non-Volatile memory controller: Intel Corporation SSD Pro 7600p/760p/E 6100p Series (rev 03)
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364664_a1690432_1176_48c3_be59_d5061bb26be5.png)

Command-line speed test (note that the speed test will damage data on the hard drive, please back up data in advance or conduct the test in file-based mode):

Write data:

```plain
forlinx@forlinx-desktop:~$ sudo dd if=/dev/zero of=/dev/nvme0n1 bs=1024M count=2 conv=fsync
2+0 records in
2+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 2.17506 s, 987 MB/s
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364763_f2bd592a_9ea3_4d0e_ad19_17d6bbf280b3.png)

Read test (it is recommended to restart the system before testing to get the actual speed):

```plain
forlinx@forlinx-desktop:~$  sudo dd if=/dev/nvme0n1 of=/dev/null bs=1M count=2048
[sudo] password for ubuntu:
2048+0 records in
2048+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 2.06022 s, 1.0 GB/s
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364853_dffdfb9b_4ab3_4c2f_a8aa_2485836dd9b8.png)

## 4\. GPU Computing Applications \& Deep Learning

### 4.1 JetPack Development Kit

JetPack SDK is a software development kit launched by NVIDIA for the Jetson platform, designed to help developers quickly build and deploy end-to-end accelerated AI applications. It includes all key components required for building AI applications, covering operating systems, drivers, libraries, sample code, documentation and developer tools. It integrates a host of practical modules, such as CUDA, cuDNN, TensorRT and more.

Install JetPack on FCU3011.

```plain
forlinx@forlinx-desktop:~$ sudo apt update
forlinx@forlinx-desktop:~$ sudo apt install nvidia-jetpack
```

### 4.2 CUDA

CUDA® is a parallel computing platform and programming model developed by NVIDIA specifically for general-purpose computing on GPU. With CUDA, developers can significantly speed up computing applications by leveraging the powerful performance of GPU.

In GPU-accelerated applications, the serial part of the workload runs on the CPU — which is optimized for single-threaded performance — while the computationally intensive portion of the application runs in parallel on thousands of GPU cores. When using CUDA, developers program in mainstream languages such as C, C++, Fortran, Python and MATLAB, and express parallelism via extensions in the form of a few basic keywords.

NVIDIA’s CUDA Toolkit provides everything needed to develop GPU-accelerated applications. The CUDA Toolkit contains multiple GPU-accelerated libraries, a compiler, a variety of development tools and the CUDA runtime environment.

CUDA accelerates applications across a wide range of fields, from image processing to deep learning, data analytics and computational science.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722364944_d04f457b_d99e_47d6_a999_ab27a5023fcd.png)

Upload the cuda-samples folder to the device, and run the image denoising sample in the cuda-samples directory to verify that CUDA is installed successfully.

```plain
forlinx@forlinx-desktop:~$ sudo apt-get install freeglut3-dev
forlinx@forlinx-desktop:~$ cd cuda-samples/Samples/2_Concepts_and_Techniques/imageDenoising/
forlinx@forlinx-desktop:~/cuda-samples/Samples/2_Concepts_and_Techniques/imageDenoising$ sudo make -j8
forlinx@forlinx-desktop:~/cuda-samples/Samples/2_Concepts_and_Techniques/imageDenoising$ cd ../../../bin/aarch64/linux/release/
forlinx@forlinx-desktop:~/cuda-samples/bin/aarch64/linux/release$ ./imageDenoising
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365047_645899a3_6a3e_49cb_bc4e_abd6573c19b6.png)

### 4.3 cuDNN

The NVIDIA CUDA® Deep Neural Network Library (cuDNN) is a GPU-accelerated library of deep neural network primitives. cuDNN can significantly optimize the implementation of standard routines, such as the convolution layers, pooling layers, normalization layers and activation layers used in forward propagation and backward propagation.

Deep learning researchers and framework developers around the world rely on cuDNN to achieve high-performance GPU acceleration. With cuDNN, researchers and developers can focus on training neural networks and developing software applications, instead of spending time on low-level GPU performance tuning. CuDNN can accelerate widely used deep learning frameworks, including Caffe2, Chainer, Keras, MATLAB, MxNet, PyTorch, and TensorFlow.

Run the cuDNN convolution sample on FCU3011:

```plain
forlinx@forlinx-desktop:~$ cd /usr/src/cudnn_samples_v8/conv_sample/
forlinx@forlinx-desktop:/usr/src/cudnn_samples_v8/conv_sample$ sudo make sudo make
[sudo] password for forlinx: 
CUDA_VERSION is 12020
Linking agains cublasLt = true
CUDA VERSION: 12020
TARGET ARCH: aarch64
TARGET OS: linux
SMS: 50 53 60 61 62 70 72 75 80 86 87 90
/usr/local/cuda/bin/nvcc -I/usr/local/cuda/include -I/usr/local/cuda/include -ccbin g++ -m64 -gencode arch=compute_50,code=sm_50 -gencode arch=compute_53,code=sm_53 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_61,code=sm_61 -gencode arch=compute_62,code=sm_62 -gencode arch=compute_70,code=sm_70 -gencode arch=compute_72,code=sm_72 -gencode arch=compute_75,code=sm_75 -gencode arch=compute_80,code=sm_80 -gencode arch=compute_86,code=sm_86 -gencode arch=compute_87,code=sm_87 -gencode arch=compute_90,code=sm_90 -gencode arch=compute_90,code=compute_90 -o fp16_dev.o -c fp16_dev.cu
g++ -I/usr/local/cuda/include -I/usr/local/cuda/include   -o fp16_emu.o -c fp16_emu.cpp
fp16_emu.cpp: In function ‘float convertToFloat(void*, cudnnDataType_t)’:
fp16_emu.cpp:163:1: warning: control reaches end of non-void function [-Wreturn-type]
  163 | }
      | ^
g++ -I/usr/local/cuda/include -I/usr/local/cuda/include   -o conv_sample.o -c conv_sample.cpp
/usr/local/cuda/bin/nvcc -ccbin g++ -m64 -gencode arch=compute_50,code=sm_50 -gencode arch=compute_53,code=sm_53 -gencode arch=compute_60,code=sm_60 -gencode arch=compute_61,code=sm_61 -gencode arch=compute_62,code=sm_62 -gencode arch=compute_70,code=sm_70 -gencode arch=compute_72,code=sm_72 -gencode arch=compute_75,code=sm_75 -gencode arch=compute_80,code=sm_80 -gencode arch=compute_86,code=sm_86 -gencode arch=compute_87,code=sm_87 -gencode arch=compute_90,code=sm_90 -gencode arch=compute_90,code=compute_90 -o conv_sample fp16_dev.o fp16_emu.o conv_sample.o -I/usr/local/cuda/include -I/usr/local/cuda/include -L/usr/local/cuda/lib64 -L/usr/local/cuda/lib64 -L/usr/local/cuda/lib64 -lcublasLt -lcudart -lcublas -lcudnn -lstdc++ -lm
```

Run:

```plain
forlinx@forlinx-desktop:/usr/src/cudnn_samples_v8/conv_sample$ ./conv_sample 
Executing: conv_sample
Using format CUDNN_TENSOR_NCHW (for INT8x4 and INT8x32 tests use CUDNN_TENSOR_NCHW_VECT_C)
Testing single precision
====USER DIMENSIONS====
input dims are 1, 32, 4, 4
filter dims are 32, 32, 1, 1
output dims are 1, 32, 4, 4
====PADDING DIMENSIONS====
padded input dims are 1, 32, 4, 4
padded filter dims are 32, 32, 1, 1
padded output dims are 1, 32, 4, 4
Testing conv
^^^^ CUDA : elapsed = 0.0256002 sec,  
Test PASSED
Testing half precision (math in single precision)
====USER DIMENSIONS====
input dims are 1, 32, 4, 4
filter dims are 32, 32, 1, 1
output dims are 1, 32, 4, 4
====PADDING DIMENSIONS====
padded input dims are 1, 32, 4, 4
padded filter dims are 32, 32, 1, 1
padded output dims are 1, 32, 4, 4
Testing conv
^^^^ CUDA : elapsed = 0.0190341 sec,  
Test PASSED
```

### 4.4 TensoRT

NVIDIA TensorRT™ is an SDK for high-performance deep learning inference. This SDK comprises a deep learning inference optimizer and runtime environment, which can deliver low latency and high throughput for deep learning inference applications.

During the inference process, TensorRT - based applications can execute up to 40 times faster than those on CPU platforms. With TensorRT, you can optimize neural network models trained in all major frameworks, calibrate low precision with high accuracy, and finally deploy the models to hyperscale data centers, embedded or automotive product platforms.

TensorRT is built on NVIDIA’s parallel programming model, CUDA, and can help you use the libraries, development tools, and technologies in CUDA - X to optimize inference in all deep learning frameworks for artificial intelligence, autonomous machines, high - performance computing, and graphics.

TensorRT provides INT8 and FP16 optimizations for production deployment of various deep learning inference applications, such as video streaming, speech recognition, recommendation and natural language processing. The reduced inference precision can significantly cut down application latency, which exactly meets the requirements of many real-time services, autonomous and embedded applications.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365156_2f5096d0_160b_4593_83cc_1a66adb70ab9.png)

Run the TensorRT handwritten character recognition test program on FCU3011.

```plain
forlinx@forlinx-desktop:/$ cd usr/src/tensorrt/samples/sampleOnnxMNIST/
forlinx@forlinx-desktop:/usr/src/tensorrt/samples/sampleOnnxMNIST$ sudo make
../Makefile.config:15: CUDA_INSTALL_DIR variable is not specified, using /usr/local/cuda by default, use CUDA_INSTALL_DIR=<cuda_directory> to change.
../Makefile.config:20: CUDNN_INSTALL_DIR variable is not specified, using /usr/local/cuda by default, use CUDNN_INSTALL_DIR=<cudnn_directory> to change.
../Makefile.config:40: TRT_LIB_DIR is not specified, searching ../../lib, ../../lib, ../lib by default, use TRT_LIB_DIR=<trt_lib_directory> to change.
../Makefile.config:45: PROTOBUF_INSTALL_DIR variable is not specified, use PROTOBUF_INSTALL_DIR=<protobuf_directory> to change. Using default value: /usr/lib/x86_64-linux-gnu
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: sampleOnnxMNIST.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/getOptions.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/logger.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleEngines.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleInference.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleOptions.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleReporting.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/dchobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleUtils.cpp
Linking: ../../bin/sample_onnx_mnist_debug
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: sampleOnnxMNIST.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/getOptions.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/logger.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleEngines.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleInference.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleOptions.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleReporting.cpp
if [ ! -d ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common ]; then mkdir -p ../../bin/chobj/sampleOnnxMNIST/sampleOnnxMNIST/../common; fi && :
Compiling: ../common/sampleUtils.cpp
Linking: ../../bin/sample_onnx_mnist


forlinx@forlinx-desktop:/usr/src/tensorrt/samples/sampleOnnxMNIST$ cd ../../bin
forlinx@forlinx-desktop:/usr/src/tensorrt/bin$ ./sample_onnx_mnist
&&&& RUNNING TensorRT.sample_onnx_mnist [TensorRT v8602] # ./sample_onnx_mnist
[09/26/2024-16:21:42] [I] Building and running a GPU inference engine for Onnx MNIST
[09/26/2024-16:21:42] [I] [TRT] [MemUsageChange] Init CUDA: CPU +13, GPU +0, now: CPU 33, GPU 2156 (MiB)
[09/26/2024-16:21:51] [I] [TRT] [MemUsageChange] Init builder kernel library: CPU +1154, GPU +1200, now: CPU 1223, GPU 3396 (MiB)
[09/26/2024-16:21:51] [I] [TRT] ----------------------------------------------------------------
[09/26/2024-16:21:51] [I] [TRT] Input filename:   ../data/mnist/mnist.onnx
[09/26/2024-16:21:51] [I] [TRT] ONNX IR version:  0.0.3
[09/26/2024-16:21:51] [I] [TRT] Opset version:    8
[09/26/2024-16:21:51] [I] [TRT] Producer name:    CNTK
[09/26/2024-16:21:51] [I] [TRT] Producer version: 2.5.1
[09/26/2024-16:21:51] [I] [TRT] Domain:           ai.cntk
[09/26/2024-16:21:51] [I] [TRT] Model version:    1
[09/26/2024-16:21:51] [I] [TRT] Doc string:       
[09/26/2024-16:21:51] [I] [TRT] ----------------------------------------------------------------
[09/26/2024-16:21:51] [W] [TRT] onnx2trt_utils.cpp:372: Your ONNX model has been generated with INT64 weights, while TensorRT does not natively support INT64. Attempting to cast down to INT32.
[09/26/2024-16:21:51] [I] [TRT] Graph optimization time: 0.00325815 seconds.
[09/26/2024-16:21:51] [I] [TRT] Local timing cache in use. Profiling results in this builder pass will not be stored.
[09/26/2024-16:21:58] [I] [TRT] Detected 1 inputs and 1 output network tensors.
[09/26/2024-16:21:58] [I] [TRT] Total Host Persistent Memory: 25696
[09/26/2024-16:21:58] [I] [TRT] Total Device Persistent Memory: 0
[09/26/2024-16:21:58] [I] [TRT] Total Scratch Memory: 0
[09/26/2024-16:21:58] [I] [TRT] [MemUsageStats] Peak memory usage of TRT CPU/GPU memory allocators: CPU 0 MiB, GPU 4 MiB
[09/26/2024-16:21:58] [I] [TRT] [BlockAssignment] Started assigning block shifts. This will take 10 steps to complete.
[09/26/2024-16:21:58] [I] [TRT] [BlockAssignment] Algorithm ShiftNTopDown took 0.140355ms to assign 3 blocks to 10 nodes requiring 32256 bytes.
[09/26/2024-16:21:58] [I] [TRT] Total Activation Memory: 31744
[09/26/2024-16:21:58] [I] [TRT] [MemUsageChange] TensorRT-managed allocation in building engine: CPU +0, GPU +4, now: CPU 0, GPU 4 (MiB)
[09/26/2024-16:21:58] [I] [TRT] Loaded engine size: 0 MiB
[09/26/2024-16:21:58] [I] [TRT] [MemUsageChange] TensorRT-managed allocation in engine deserialization: CPU +0, GPU +0, now: CPU 0, GPU 0 (MiB)
[09/26/2024-16:21:58] [I] [TRT] [MemUsageChange] TensorRT-managed allocation in IExecutionContext creation: CPU +0, GPU +0, now: CPU 0, GPU 0 (MiB)
[09/26/2024-16:21:58] [I] Input:
[09/26/2024-16:21:58] [I] @@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@+ @@@@@@@@@@@@@@
@@@@@@@@@@@@. @@@@@@@@@@@@@@
@@@@@@@@@@@@- @@@@@@@@@@@@@@
@@@@@@@@@@@#  @@@@@@@@@@@@@@
@@@@@@@@@@@#  *@@@@@@@@@@@@@
@@@@@@@@@@@@  :@@@@@@@@@@@@@
@@@@@@@@@@@@= .@@@@@@@@@@@@@
@@@@@@@@@@@@#  %@@@@@@@@@@@@
@@@@@@@@@@@@% .@@@@@@@@@@@@@
@@@@@@@@@@@@%  %@@@@@@@@@@@@
@@@@@@@@@@@@%  %@@@@@@@@@@@@
@@@@@@@@@@@@@= +@@@@@@@@@@@@
@@@@@@@@@@@@@* -@@@@@@@@@@@@
@@@@@@@@@@@@@*  @@@@@@@@@@@@
@@@@@@@@@@@@@@  @@@@@@@@@@@@
@@@@@@@@@@@@@@  *@@@@@@@@@@@
@@@@@@@@@@@@@@  *@@@@@@@@@@@
@@@@@@@@@@@@@@  *@@@@@@@@@@@
@@@@@@@@@@@@@@  *@@@@@@@@@@@
@@@@@@@@@@@@@@* @@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@

[09/26/2024-16:21:58] [I] Output:
[09/26/2024-16:21:58] [I]  Prob 0  0.0000 Class 0: 
[09/26/2024-16:21:58] [I]  Prob 1  1.0000 Class 1: **********
[09/26/2024-16:21:58] [I]  Prob 2  0.0000 Class 2: 
[09/26/2024-16:21:58] [I]  Prob 3  0.0000 Class 3: 
[09/26/2024-16:21:58] [I]  Prob 4  0.0000 Class 4: 
[09/26/2024-16:21:58] [I]  Prob 5  0.0000 Class 5: 
[09/26/2024-16:21:58] [I]  Prob 6  0.0000 Class 6: 
[09/26/2024-16:21:58] [I]  Prob 7  0.0000 Class 7: 
[09/26/2024-16:21:58] [I]  Prob 8  0.0000 Class 8: 
[09/26/2024-16:21:58] [I]  Prob 9  0.0000 Class 9: 
[09/26/2024-16:21:58] [I] 
&&&& PASSED TensorRT.sample_onnx_mnist [TensorRT v8602] # ./sample_onnx_mnist
```

### 4.5 Hello AI World

```plain
forlinx@forlinx-desktop:~$ sudo apt-get update	
forlinx@forlinx-desktop:~$ sudo apt-get install git cmake libpython3-dev python3-numpy

forlinx@forlinx-desktop:~$ git clone --recursive --depth=1 https://github.com/dusty-nv/jetson-inference
forlinx@forlinx-desktop:~$ cd jetson-inference
forlinx@forlinx-desktop:~/jetson-inference$ mkdir build
forlinx@forlinx-desktop:~/jetson-inference$ cd build
forlinx@forlinx-desktop:~/jetson-inference/build$ cmake ../
```

During the cmake process, a prompt will pop up asking whether to install PyTorch. Similarly, use the keyboard to move the cursor to the desired option and press Enter to proceed with the subsequent steps.

You can choose to install it if you need to train models on the Jetson, but in most cases, models are trained on a PC or in the cloud.

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365320_67bea1fd_fdab_4908_a233_db6b35c06808.png)

After configuration is completed, the following information will be output:

```plain
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-from-cv.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-from-numpy.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-from-pytorch.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-streams.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-to-cv.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-to-numpy.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/cuda-to-pytorch.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/test-cuda.sh
-- Copying /home/forlinx/jetson-inference/utils/python/examples/test-display.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/test-logging.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/test-video.py
-- Copying /home/forlinx/jetson-inference/utils/python/examples/video-viewer.py
-- trying to build Python bindings for Python versions:  3.10
-- detecting Python 3.10...
-- found Python version:  3.10 (3.10.12)
-- found Python include:  /usr/include/python3.10
-- found Python library:  /usr/lib/aarch64-linux-gnu/libpython3.10.so
-- CMake module path:  /home/forlinx/jetson-inference/utils/cuda;/home/forlinx/jetson-inference/python/bindings;/home/forlinx/jetson-inference/python/bindings/../../utils/python/bindings
-- NumPy ver. 1.24.3 found (include: /home/forlinx/.local/lib/python3.10/site-packages/numpy/core/include)
-- found NumPy version:  1.24.3
-- found NumPy include:  /home/forlinx/.local/lib/python3.10/site-packages/numpy/core/include
-- Copying /home/forlinx/jetson-inference/python/examples/actionnet.py
-- Copying /home/forlinx/jetson-inference/python/examples/backgroundnet.py
-- Copying /home/forlinx/jetson-inference/python/examples/depthnet.py
-- Copying /home/forlinx/jetson-inference/python/examples/depthnet_utils.py
-- Copying /home/forlinx/jetson-inference/python/examples/detectnet-snap.py
-- Copying /home/forlinx/jetson-inference/python/examples/detectnet.py
-- Copying /home/forlinx/jetson-inference/python/examples/imagenet.py
-- Copying /home/forlinx/jetson-inference/python/examples/my-detection.py
-- Copying /home/forlinx/jetson-inference/python/examples/my-recognition.py
-- Copying /home/forlinx/jetson-inference/python/examples/posenet.py
-- Copying /home/forlinx/jetson-inference/python/examples/segnet.py
-- Copying /home/forlinx/jetson-inference/python/examples/segnet_utils.py
-- linking jetson-inference with OpenCV 4.8.0
-- Configuring done
-- Generating done
-- Build files have been written to: /home/forlinx/jetson-inference/build
```

Enter the following command to start compilation:

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo make -j$(nproc)
```

The following output indicates that the compilation is correct and finished:

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo make -j$(nproc)
[ 46%] Built target jetson-utils
Consolidate compiler generated dependencies of target jetson-utils-python-310
[ 48%] Built target video-viewer
[ 68%] Built target jetson-inference
[ 75%] Built target jetson-utils-python-310
[ 77%] Built target detectnet
[ 78%] Built target imagenet
[ 80%] Built target posenet
[ 81%] Built target depthnet
[ 82%] Automatic MOC for target camera-capture
[ 87%] Built target backgroundnet
[ 87%] Built target segnet
[ 87%] Built target actionnet
Consolidate compiler generated dependencies of target jetson-inference-python-310
[ 87%] Built target camera-capture_autogen
[ 95%] Built target jetson-inference-python-310
[100%] Built target camera-capture
```

The cmake configuration process will attempt to update and install packages over the network. If no Ethernet cable is connected, it will automatically proceed to the next steps after waiting for a timeout, which will not affect the integrity of the code. The cmake configuration process will pop up the Model Downloader interface. If you want to use this tool to download models, you need an internet connection and access to Google. Three models are pre-installed in the default package to meet testing needs. If you need other models, you can download them later and copy them to the system.

Installation:

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo make install
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo ldconfig
```

The project will be built in the directory jetson-inference/build/aarch64, with the directory structure as follows:

```plain
|-build
   \aarch64
      \bin             Binary files (example programs and images are stored in this path)
         \networks     Network models
      \include         Header files
      \lib             Library files
```

Run the test program:

It will use ImageNet to classify images. First, enter the bin directory and run the console program. When you execute the test program for the first time, it will create the TensorRT engine cache and download the required models at the same time, which will take a few minutes. After the operation is completed, the result image will be generated in the current path. If the model download fails during operation, you can use the models in the resource library.

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ cd aarch64/bin/
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo ./imagenet /images/orange_0.jpg output_0.jpg
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365410_cc34cc93_027c_4d49_a53f_40615fd353dc.jpg)

Use DetectNet to perform object detection on images.

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ cd aarch64/bin/
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo ./detectnet /images/peds_0.jpg output_2.jpg
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365532_8d545f9e_6548_4f8a_a23d_7dc3f7fd6726.jpg)

Use SegNet to perform semantic segmentation on images.

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ cd aarch64/bin/
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo ./segnet /images/city_0.jpg output_3.jpg
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365656_ffb38b70_e3cb_4aea_862d_dd0b8fd2264a.jpg)

Insert the USB camera into the USB port of FCU3011 and execute the program. All of the above models are capable of performing camera data inference. 

```plain
forlinx@forlinx-desktop:~/jetson-inference/build$ cd aarch64/bin/
forlinx@forlinx-desktop:~/jetson-inference/build$ sudo ./segnet /dev/video0
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365781_c886c1dd_12b6_4eb9_80f0_c498466ce2ab.png)

### 4.6 TensorFlow

TensorFlow depends on CUDART. Refer to Section 4.1 to install CUDA, otherwise GPU acceleration cannot be used.

```plain
forlinx@forlinx-desktop:~$ sudo apt-get update
forlinx@forlinx-desktop:~$ sudo apt-get install libhdf5-serial-dev hdf5-tools libhdf5-dev zlib1g-dev zip libjpeg8-dev liblapack-dev libblas-dev gfortran

forlinx@forlinx-desktop:~$ sudo apt-get install python3-pip
forlinx@forlinx-desktop:~$ sudo python3 -m pip install --upgrade pip

forlinx@forlinx-desktop:~$ sudo pip3 install -U testresources setuptools==65.5.0
forlinx@forlinx-desktop:~$ sudo pip3 install -U numpy==1.24.3 future==0.18.2 mock==3.0.5 keras_preprocessing==1.1.2 keras_applications==1.0.8 gast==0.4.0 protobuf pybind11 cython pkgconfig packaging h5py==3.7.0

forlinx@forlinx-desktop:~$ sudo pip3 install --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v60 tensorflow==2.15.0
```

For installation verification, you can see that TensorFlow is successfully imported, the version is verified as 2.15.0, and the GPU availability is shown as True, which means the GPU is available.

```plain
forlinx@forlinx-desktop:~$ python3
Python 3.10.12 (main, Nov 20 2023, 15:14:05) [GCC 11.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tensorflow as tf
2024-09-27 17:08:41.390320: E external/local_xla/xla/stream_executor/cuda/cuda_dnn.cc:9373] Unable to register cuDNN factory: Attempting to register factory for plugin cuDNN when one has already been registered
2024-09-27 17:08:41.390394: E external/local_xla/xla/stream_executor/cuda/cuda_fft.cc:607] Unable to register cuFFT factory: Attempting to register factory for plugin cuFFT when one has already been registered
2024-09-27 17:08:41.392360: E external/local_xla/xla/stream_executor/cuda/cuda_blas.cc:1534] Unable to register cuBLAS factory: Attempting to register factory for plugin cuBLAS when one has already been registered
>>> tf.__version__ 
'2.15.0'
>>> print(tf.test.is_gpu_available())
WARNING:tensorflow:From <stdin>:1: is_gpu_available (from tensorflow.python.framework.test_util) is deprecated and will be removed in a future version.
Instructions for updating:
Use `tf.config.list_physical_devices('GPU')` instead.
2024-09-27 17:10:04.193011: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.240564: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.240772: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.314956: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.315256: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.315347: I tensorflow/core/common_runtime/gpu/gpu_device.cc:2019] Could not identify NUMA node of platform GPU id 0, defaulting to 0.  Your kernel may not have been built with NUMA support.
2024-09-27 17:10:04.315476: I external/local_xla/xla/stream_executor/cuda/cuda_executor.cc:887] could not open file to read NUMA node: /sys/bus/pci/devices/0000:00:00.0/numa_node
Your kernel may have been built without NUMA support.
2024-09-27 17:10:04.315573: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1926] Created device /device:GPU:0 with 2966 MB memory:  -> device: 0, name: Orin, pci bus id: 0000:00:00.0, compute capability: 8.7
True
>>> exit()
```

Enter exit() to exit the python3 command line.

## 5\. Multimedia

FCU3011 delivers excellent video encoding and decoding performance. Its feature parameters are listed in the table below:

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365877_783acff7_b164_4b1c_a3f7_cd9e8130ef83.png)

Test materials are located at:

FCU3011 (Ubuntu) User Resources\\Materials\\test\_av

On the PC side, copy the test\_av directory to a USB flash drive, then insert the USB flash drive into FCU3011, and execute the manual mount command:

```plain
forlinx@forlinx-desktop:~$ sudo mount /dev/sda1 /mnt
forlinx@forlinx-desktop:~$ sudo chown forlinx:forlinx -R /mnt
```

All tests in this chapter are performed based on the contents under /mnt (i.e. the USB flash drive).

Before starting encoding and decoding, you need to set up the environment first:

```plain
forlinx@forlinx-desktop:~$ sudo apt-get update
forlinx@forlinx-desktop:~$ sudo apt-get install gstreamer1.0-tools gstreamer1.0-alsa \
     gstreamer1.0-plugins-base gstreamer1.0-plugins-good \
     gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly \
     gstreamer1.0-libav
forlinx@forlinx-desktop:~$ sudo apt-get install libgstreamer1.0-dev \
     libgstreamer-plugins-base1.0-dev \
     libgstreamer-plugins-good1.0-dev \
     libgstreamer-plugins-bad1.0-dev
forlinx@forlinx-desktop:~$   sudo apt-get install nvidia-l4t-gstreamer
forlinx@forlinx-desktop:~$   sudo ldconfig
forlinx@forlinx-desktop:~$ rm -rf .cache/gstreamer-1.0/
```

Note: FCU3011 does not support hardware encoding. During testing, you need to test according to the supported formats in the table above.

Note: FCU3011 does not support hardware encoding. During testing, you need to test according to the supported formats in the table above.

Note: FCU3011 does not support hardware encoding. During testing, you need to test according to the supported formats in the table above.

### 5.1 Video Decoding

Video decoding utilises NVIDIA hardware acceleration：

Taking the videos on the CD-ROM as an example:

H265

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_30fps_h265.mp4 !      qtdemux ! queue ! h265parse ! nvv4l2decoder ! nv3dsink -e
```

H264

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_60fps_h264.mp4 !      qtdemux ! queue ! h264parse ! nvv4l2decoder ! nv3dsink -e
```

VP8

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_30fps_vp8.webm !        matroskademux ! queue ! nvv4l2decoder ! nv3dsink -e
```

VP9

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_30fps_vp9.webm ! matroskademux ! queue ! nvv4l2decoder ! nv3dsink -e
```

MPEG-4

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_60fps_m4v.mp4 !   qtdemux ! queue ! mpeg4videoparse ! nvv4l2decoder ! nv3dsink -e
```

Other References:

MPEG-4 Decode DivX 4/5 (NVIDIA Accelerated Decode):

```plain
gst-launch-1.0 filesrc location=<filename_divx.avi> ! \
     avidemux ! queue ! mpeg4videoparse ! nvv4l2decoder ! nv3dsink -e
```

12-bit H.265 Decode (NVIDIA Accelerated Decode)

```plain
gst-launch-1.0 filesrc location=<filename_12bit.mkv> ! \
     matroskademux ! queue ! h265parse ! nvv4l2decoder ! \
     nvvidconv ! \
     'video/x-raw(memory:NVMM), format=(string)NV12' ! \
     nv3dsink -e
```

### 5.2 Video Encoding

For detailed parameters, please refer to the relevant GST plug-in documentations:

MPEG-4 Encoding (Software Encoding)

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 videotestsrc ! \
'video/x-raw, format=(string)I420, width=(int)640, \
height=(int)480' ! avenc_mpeg4 ! qtmux ! \
filesink location=test.mp4 -e
```

### 5.3 JPEG

Image encoding:

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 videotestsrc num-buffers=1 ! \
     'video/x-raw, width=(int)640, height=(int)480, \
     format=(string)I420' ! nvjpegenc ! filesink location=test.jpg -e
```

NV12 Pitch-linear image encoding:

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 videotestsrc num-buffers=1 ! \
     'video/x-raw, width=(int)640, height=(int)480, \
     format=(string)NV12' ! nvvidconv bl-output=false ! \
     'video/x-raw(memory:NVMM)' ! nvjpegenc ! filesink location=test.jpg -e
```

NV12 Block-linear image encoding:

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 videotestsrc num-buffers=1 ! \
     'video/x-raw, width=(int)640, height=(int)480, \
     format=(string)NV12' ! nvvidconv bl-output=true ! \
     'video/x-raw(memory:NVMM)' ! nvjpegenc ! filesink location=test.jpg -e
```

### 5.4 Audio Decoding (Software Decoding)

Playback using files from the “test\_av” directory on the disc:

Play audio from the video only

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/video/1080p_30fps_h265.mp4 ! \
qtdemux name=demux demux.audio_0 !   \
queue ! avdec_aac ! audioconvert ! alsasink -e
```

Playback MP3 File:

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 filesrc location=/mnt/test_av/audio/test.mp3 ! \
mpegaudioparse !   avdec_mp3 ! audioconvert ! alsasink -e
```

Other References:

AAC Decode (OSS Software Decode)

```plain
gst-launch-1.0 filesrc location=<filename.mp4> ! \
  qtdemux name=demux demux.audio_0 ! \
  queue ! avdec_aac ! audioconvert ! alsasink -e
```

AMR-WB Decode (OSS Software Decode)

```plain
gst-launch-1.0 filesrc location=<filename.mp4> ! \
  qtdemux name=demux demux.audio_0 ! queue ! avdec_amrwb ! \
  audioconvert ! alsasink -e
```

AMR-NB Decode (OSS Software Decode)

```plain
gst-launch-1.0 filesrc location=<filename.mp4> ! \
  qtdemux name=demux demux.audio_0 ! queue ! avdec_amrnb ! \
  audioconvert ! alsasink -e
```

MP3 Decode (OSS Software Decode)

```plain
gst-launch-1.0 filesrc location=<filename.mp3> ! mpegaudioparse ! \
  avdec_mp3 ! audioconvert ! alsasink -e
```

### 5.5 Audio Encoding (Software Decoding)

AAC Encode

```plain
forlinx@forlinx-desktop:~$  gst-launch-1.0 audiotestsrc ! \
'audio/x-raw, format=(string)S16LE,
layout=(string)interleaved, rate=(int)44100, channels=(int)2' ! \
voaacenc ! qtmux ! filesink location=test.mp4 -e
```

AMR-WB Encode

```plain
forlinx@forlinx-desktop:~$  gst-launch-1.0 audiotestsrc ! \
'audio/x-raw, format=(string)S16LE, layout=(string)interleaved, \
rate=(int)16000, channels=(int)1' ! voamrwbenc ! qtmux ! \
filesink location=test.mp4 -e
```

### 5.6 UVC Camera

```plain
forlinx@forlinx-desktop:~$ gst-launch-1.0 v4l2src device="/dev/video0" ! \
"video/x-raw, width=640, height=480, format=(string)YUY2" ! \
xvimagesink -e
```

## 6\. Others

### 6.1 RTC Clock Driver Test

**Note: Ensure that a button battery is installed on the board and the battery voltage is normal.**

To perform the RTC test, the date and hwclock tools are used to set the system and hardware clocks. The device is then powered off and on to confirm that the system clock successfully synchronizes with the RTC upon reboot.

```plain
forlinx@forlinx-desktop:~$ date -u 072216162021.00	      // Set the system software time
forlinx@forlinx-desktop:~$ sudo hwclock -r                          # Read the hardware RTC time
[sudo] password for forlinx: 
2021-08-13 12:41:51.096703+0800
forlinx@forlinx-desktop:~$ sudo date -u 081412372021.00             # Set a new system time
Sat Aug 14 12:37:00 UTC 2021
forlinx@forlinx-desktop:~$ sudo hwclock –w                          # Write the current system time to the hardware RTC
[sudo] password for forlinx: 
forlinx@forlinx-desktop:~$ sudo hwclock –r                           # Read the RTC time again
2021-08-14 20:37:14.842342+0800
forlinx@forlinx-desktop:~$ date                                     # Read the current system time
Sat Aug 14 20:37:17 CST 2021
```

![Image](https://www.forlinx.net/docs_assets/images/platform/embedded-pc/fcu3011/FCU3011_Forlinx22_04_User_Manual/1787722365978_517aead7_f9ee_4231_bd5d_56181b23e5d0.png)

Then power off and power on the board. After entering the system, read the system time, and you can see that the time is synchronized.

**Note: The NTP service is enabled by default on the system, and it will automatically synchronize the system time when the device has access to an external network. To disable it, run the following command:**

**sudo systemctl disable systemd-timesyncd.service**

### 6.2 CPU Frequency Scaling

In general, there is no need to modify it, just follow the default. The following example demonstrates how to switch the default frequency scaling mode to performance mode:

All cpufreq governor types supported in the current kernel:

```plain
forlinx@forlinx-desktop:~$ cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
interactive conservative ondemand userspace powersave performance schedutil
```

Set the CPU to high-performance mode

First, create a script called performance.sh with the following content:

echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling\_governor

```plain
forlinx@forlinx-desktop:~$ echo "echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor" > performance.sh
forlinx@forlinx-desktop:~$ cat performance.sh
echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
forlinx@forlinx-desktop:~$ chmod +x performance.sh
forlinx@forlinx-desktop:~$ sudo ./performance.sh
```

### 6.3 Temperature 

View the current CPU temperature:

```plain
forlinx@forlinx-desktop:~$ cat /sys/class/thermal/thermal_zone0/temp
57000		                                       //The temperature value is 57 ℃ (57000/1000).
```

View the current GPU temperature:

```plain
forlinx@forlinx-desktop:~$ cat /sys/class/thermal/thermal_zone1/temp
57000	                                       //The temperature value is 57 ℃
```

### 6.4 Boot Auto-Start Configuration

In the file system, the /etc/autorun.sh script is used to configure applications to launch automatically on system startup. You can add the programs that require auto-start to this script.

Run systemctl status autorun to check the running status of the service.

```plain
forlinx@forlinx-desktop:~$ systemctl status autorun
● autorun.service - auto run something
   Loaded: loaded (/lib/systemd/system/autorun.service; enabled; vendor preset: enabled)
   Active: inactive (dead) since Thu 2021-08-26 18:08:39 CST; 5min ago
 Main PID: 5571 (code=exited, status=0/SUCCESS)

8月 26 18:08:39 forlinx-desktop systemd[1]: Started auto run something.
8月 26 18:08:39 forlinx-desktop autorun.sh[5571]: autorun script, put your code below
```

### 6.5 Logo Replacement

#### 6.5.1 Logging in Logo

The login logo is stored in the FCU3011 file system at /usr/share/backgrounds/NVIDIA\_Login\_Logo.png. Simply replace the NVIDIA\_Login\_Logo.png file with a properly formatted image to update the logo.

This custom image will be displayed after you enter the username and password on the login screen and press Enter.

#### 6.5.2 Desktop Wallpaper

The FCU desktop wallpaper is located at /usr/share/backgrounds/NVIDIA\_Wallpaper.jpg. It can be replaced with a properly sized PNG image.

## 7\. System Reflashing

If the original system of FCU3011 is damaged, you can refer to this chapter to refresh the machine. The FCU3011 supports OTG flashing. The OTG flashing tool is in the User Documents/Linux/Flashing Tools folder for the flashing process.

### 7.1 OTG Flashing

When the USB drive system update method is unavailable, you can use a USB cable to flash the system via a PC. This process must be carried out in an Ubuntu environment, with Ubuntu 22.04 being the optimal version. You can install an Ubuntu virtual machine on Windows to avoid installing Ubuntu on a physical machine.

The flashing package is located at:

FCU3011(ubuntu) User Documents\\Flashing Tools\\OTG Flashing\\Linux\_for\_Tegra.tar.bz2

Copy Linux\_for\_Tegra.tar.bz2 from the disc materials to the Ubuntu system on your PC and extract it. 

```plain
ubuntu@ubuntu:~$ tar xvf Linux_for_Tegra.tar.bz2
```

Press and hold the Recovery button, then power on the FCU3011 again.

Connect the OTG port to the PC using a Micro USB cable.

Execute the corresponding flashing commands on the PC side.

```plain
ubuntu@ubuntu:~$ cd Linux_for_Tegra
ubuntu@ubuntu:~/Linux_for_Tegra $ sudo ./fcu3011_flash.sh
```

Once the flashing is complete, the FCU3011 will automatically restart and boot into the system. Refer to “Chapter 2. Startup” to complete the initial configuration.