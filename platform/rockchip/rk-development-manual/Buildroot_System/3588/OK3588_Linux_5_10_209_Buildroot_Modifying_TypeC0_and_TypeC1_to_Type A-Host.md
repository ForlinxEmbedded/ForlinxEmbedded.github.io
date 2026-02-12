# OK3588 5.10.209 Buildroot  Modifying TypeC0 and TypeC1 to Type A-Host

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 03/06/2025| V1.0| Initial Version|

## Modifying TypeC0 and TypeC1 to Type A-Host

This method needs jump wire test on the Forlinx carrier board.

The related patch file:

[TypeC-to-TypeAhost.patch](https://forlinx-book.yuque.com/attachments/yuque/0/2025/patch/45444988/1741248742303-cd3ad9db-473a-43fa-8f03-a60a49bfcec0.patch)

**Background**

Many customers prefer Type-A interfaces over Type-C interfaces when designing their custom carrier boards. Accordingly, this solution modifies the SoM’s Type-C port to function as a Type-A Host interface.

**1\. Software Modification: Device Tree**

```diff
diff --git a/arch/arm64/boot/dts/rockchip/OK3588-C-common.dtsi b/arch/arm64/boot/dts/rockchip/OK3588-C-common.dtsi
index 6dc06d53e..46eaf4f4a 100644
--- a/arch/arm64/boot/dts/rockchip/OK3588-C-common.dtsi
+++ b/arch/arm64/boot/dts/rockchip/OK3588-C-common.dtsi
@@ -719,72 +719,6 @@
         status = "okay";
     };
 
-	usbc0: fusb302@22 {
-		compatible = "fcs,fusb302";
-		reg = <0x22>;
-		interrupt-parent = <&gpio1>;
-		interrupts = <RK_PB0 IRQ_TYPE_LEVEL_LOW>;
-		pinctrl-names = "default";
-		pinctrl-0 = <&usbc0_int>;
-		vbus-supply = <&vbus5v0_typec0>;
-		status = "okay";
-
-		ports {
-			#address-cells = <1>;
-			#size-cells = <0>;
-
-			port@0 {
-				reg = <0>;
-				usbc0_role_sw: endpoint@0 {
-					remote-endpoint = <&dwc3_0_role_switch>;
-				};
-			};
-		};
-
-		usb_con0: connector {
-			compatible = "usb-c-connector";
-			label = "USB-C";
-			data-role = "dual";
-			power-role = "dual";
-			try-power-role = "sink";
-			op-sink-microwatt = <1000000>;
-			sink-pdos =
-				<PDO_FIXED(5000, 1000, PDO_FIXED_USB_COMM)>;
-			source-pdos =
-				<PDO_FIXED(5000, 3000, PDO_FIXED_USB_COMM)>;
-
-			altmodes {
-				#address-cells = <1>;
-				#size-cells = <0>;
-
-				altmode@0 {
-					reg = <0>;
-					svid = <0xff01>;
-					vdo = <0xffffffff>;
-				};
-			};
-
-			ports {
-				#address-cells = <1>;
-				#size-cells = <0>;
-
-				port@0 {
-					reg = <0>;
-					usbc0_orien_sw: endpoint {
-						remote-endpoint = <&usbdp_phy0_orientation_switch>;
-					};
-				};
-
-				port@1 {
-					reg = <1>;
-					dp0_altmode_mux: endpoint {
-						remote-endpoint = <&usbdp_phy0_dp_altmode_mux>;
-					};
-				};
-			};
-		};
-	};
-
 };
 
 &i2c3 {
@@ -846,71 +780,6 @@
 		status = "okay";
 	};
 
-	usbc1: fusb302@22 {
-		compatible = "fcs,fusb302";
-		reg = <0x22>;
-		interrupt-parent = <&gpio1>;
-		interrupts = <RK_PB3 IRQ_TYPE_LEVEL_LOW>;
-		pinctrl-names = "default";
-		pinctrl-0 = <&usbc1_int>;
-		vbus-supply = <&vbus5v0_typec1>;
-		status = "okay";
-
-		ports {
-			#address-cells = <1>;
-			#size-cells = <0>;
-
-			port@0 {
-				reg = <0>;
-				usbc1_role_sw: endpoint@0 {
-					remote-endpoint = <&dwc3_1_role_switch>;
-				};
-			};
-		};
-
-		usb_con1: connector {
-			compatible = "usb-c-connector";
-			label = "USB-C";
-			data-role = "dual";
-			power-role = "dual";
-			try-power-role = "sink";
-			op-sink-microwatt = <1000000>;
-			sink-pdos =
-				<PDO_FIXED(5000, 1000, PDO_FIXED_USB_COMM)>;
-			source-pdos =
-				<PDO_FIXED(5000, 3000, PDO_FIXED_USB_COMM)>;
-
-			altmodes {
-				#address-cells = <1>;
-				#size-cells = <0>;
-
-				altmode@0 {
-					reg = <0>;
-					svid = <0xff01>;
-					vdo = <0xffffffff>;
-				};
-			};
-
-			ports {
-				#address-cells = <1>;
-				#size-cells = <0>;
-
-				port@0 {
-					reg = <0>;
-					usbc1_orien_sw: endpoint {
-						remote-endpoint = <&usbdp_phy1_orientation_switch>;
-					};
-				};
-
-				port@1 {
-					reg = <1>;
-					dp1_altmode_mux: endpoint {
-						remote-endpoint = <&usbdp_phy1_dp_altmode_mux>;
-					};
-				};
-			};
-		};
-	};
 };
 
 &i2c7 {
@@ -1256,11 +1125,12 @@
 };
 
 &u2phy0_otg {
+	phy-supply = <&vbus5v0_typec0>;
 	status = "okay";
 };
 
 &u2phy1_otg {
-	phy-supply = <&vcc5v0_sys>;
+	phy-supply = <&vbus5v0_typec1>;
 	status = "okay";
 };
 
@@ -1290,25 +1160,7 @@
 
 &usbdp_phy0 {
 	status = "okay";
-	orientation-switch;
	rockchip,dp-lane-mux = <2 3>;
-	svid = <0xff01>;
-	sbu1-dc-gpios = <&gpio4 RK_PA0 GPIO_ACTIVE_HIGH>;
-	sbu2-dc-gpios = <&gpio4 RK_PB0 GPIO_ACTIVE_HIGH>;
-
-	port {
-		#address-cells = <1>;
-		#size-cells = <0>;
-		usbdp_phy0_orientation_switch: endpoint@0 {
-			reg = <0>;
-			remote-endpoint = <&usbc0_orien_sw>;
-		};
-
-		usbdp_phy0_dp_altmode_mux: endpoint@1 {
-			reg = <1>;
-			remote-endpoint = <&dp0_altmode_mux>;
-		};
-	};
 };
 
 &usbdp_phy0_dp {
@@ -1324,40 +1176,14 @@
 };
 
 &usbdrd_dwc3_0 {
-	dr_mode = "otg";
-	usb-role-switch;
+	dr_mode = "host";
 	status = "okay";
-	port {
-		#address-cells = <1>;
-		#size-cells = <0>;
-		dwc3_0_role_switch: endpoint@0 {
-			reg = <0>;
-			remote-endpoint = <&usbc0_role_sw>;
-		};
-	};
 };
 
 &usbdp_phy1 {
 	status = "okay";
-	orientation-switch;
	rockchip,dp-lane-mux = <2 3>;
-	svid = <0xff01>;
-	sbu1-dc-gpios = <&gpio4 RK_PA1 GPIO_ACTIVE_HIGH>;
-	sbu2-dc-gpios = <&gpio4 RK_PA2 GPIO_ACTIVE_HIGH>;
-
-	port {
-		#address-cells = <1>;
-		#size-cells = <0>;
-		usbdp_phy1_orientation_switch: endpoint@0 {
-			reg = <0>;
-			remote-endpoint = <&usbc1_orien_sw>;
-		};
-
-		usbdp_phy1_dp_altmode_mux: endpoint@1 {
-			reg = <1>;
-			remote-endpoint = <&dp1_altmode_mux>;
-		};
-	};
 };
 
 &usbdp_phy1_dp {
@@ -1374,16 +1200,7 @@
 
 &usbdrd_dwc3_1 {
 	status = "okay";
-	dr_mode = "otg";
-	usb-role-switch;
-	port {
-		#address-cells = <1>;
-		#size-cells = <0>;
-		dwc3_1_role_switch: endpoint@0 {
-			reg = <0>;
-			remote-endpoint = <&usbc1_role_sw>;
-		};
-	};
+	dr_mode = "host";
 };
 
 &usbhost3_0 {

```

Apply the above patch to the device tree file. Take the device tree file of 3588 Linux5.10.209 as an example: kernel/arch/arm64/boot/dts/rockchip/OK3588 - C - common.dtsi.

Apply the patch file to the kernel:

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248800750-b2a35198-a441-4baf-88da-5c46ac954ab3.png)

Compile the kernel and burn the boot.img image to verify the function.

**2\. Hardware Modification**

To test the Type - A - Host function on the Forlinx carrier board, an external Type - A socket is required. The connections are as follows:

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248830282-78d5ab70-a0d3-4448-b706-28a079396fc1.png)

At the Type - C0 port, connect the six wires in the above red - framed area, plus the power line and GND.

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248840655-fa600cd7-3213-45c5-a050-abe1cb845d34.png)

The same goes for Type - C1.

PS: Since USB3.0 is a high - speed signal line with relatively high requirements for signal rate, the length of the jump wires should be as short as possible.

**3\. Function Verification**

**3.1 Type - C0**

Update the boot to the SoM. With the hardware modifications completed, insert a USB flash drive at the Type - C0 port.

Use`fdisk -l`commands to query the USB flash drive.

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248931403-adfa9e6c-dab8-46eb-920d-f97365bc87cb.png)

You can see that the USB flash drive has been recognized.

Open /run/media/sda1, and you can see that the USB flash drive has been successfully mounted.

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248946150-ac09e7f4-70f8-4494-a1f6-6737d4abe18a.png)

3.2 Type - C1

`fdisk -l` Query the USB flash drive.

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248961965-ff8bde1e-38fb-4307-a199-b436f68f7d0e.png)

Open /run/media/sdb1, and you can see that the USB flash drive has been successfully mounted.

![](https://cdn.nlark.com/yuque/0/2025/png/45444988/1741248974799-c788b765-f1c8-42f8-a425-a6165f23761c.png)