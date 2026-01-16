# OK3568 4.19.206 Buildroot PWM PWM Multiplexing Method and Test

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## PWM Multiplexing Method and Test

This method causes the LVDS screen to not work properly.

Turn off the PWM multiplexing function

To modify the device tree file:

/OK3568-linux-source/kernel/arch/arm64/boot/dts/rockchip/OK3568-C-common.dtsi

Comment out LVDS \_ backlight nodes.

![Image](./images/OK3568_4_19_206_Buildroot_PWM_Multiplexing_Method_and_Test/1719647124654_ab8d20fa_7801_4d09_80b2_f689b0b80032.png)

![Image](./images/OK3568_4_19_206_Buildroot_PWM_Multiplexing_Method_and_Test/1719647124881_98a73fbf_2359_49fa_b4fc_29c7d83e2565.png)

Comment out backlight.

![Image](./images/OK3568_4_19_206_Buildroot_PWM_Multiplexing_Method_and_Test/1719647125162_14a9ffa0_551c_4be6_8f89_cf6bf35a0284.png)

Compile the kernel input./build. sh kernel command.

forlinx@ubuntu:~/linux-3568/OK3568-linux-release/./build.sh kernel

Single-step flash /OK 3568-linux-release/kernel/boot.img files to the development board.

PWM user state operation interface/sys/class/PWM.

If several PWMs are set in the device tree, several corresponding PWM chipNs will be generated in the/sys/class/PWM directory.

Bring up the PWM subdirectory.

<font style="color:#000000;">echo 0 > /sys/class/pwm/pwmchip2/export </font>

Turn off the PWM subdirectory.

<font style="color:#000000;">echo 0 > /sys/class/pwm/pwmchip2/unexport </font>

Pin level normal or flipped.

<font style="color:#000000;">echo normal> /sys/class/pwm/pwmchip2/pwm0/polarity</font>

Frequency \* period = 1, calculate the frequency.

Set the PWM period in ns.

<font style="color:#000000;">echo 50000 > /sys/class/pwm/pwmchip2/pwm0/period</font>

Set the PWM duty cycle in ns.

<font style="color:#000000;">echo 10000 > /sys/class/pwm/pwmchip2/pwm0/duty\_cycle</font>

Enable PWM.

<font style="color:#000000;">echo 1 > /sys/class/pwm/pwmchip2/pwm0/enable</font>

Turn off the PWM.

<font style="color:#000000;">echo 0 > /sys/class/pwm/pwmchip2/pwm0/enable</font>

![Image](./images/OK3568_4_19_206_Buildroot_PWM_Multiplexing_Method_and_Test/1719647125365_34f99ac5_c079_4af3_b8c6_2be8eb31fb67.png)

![Image](./images/OK3568_4_19_206_Buildroot_PWM_Multiplexing_Method_and_Test/1719647125581_665cd276_a4f3_4f71_9e24_1c68c94e2f43.png)