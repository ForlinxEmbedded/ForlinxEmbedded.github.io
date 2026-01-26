# OK3568 4.19.206 Buildroot Delayline Parameter Scanning and Modification

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                  

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| **Date**| **Version**| **Revision History**|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Delayline Parameter Scanning and Modification

**Note: If a self-made carrier board is used and designed based on the schematic diagram provided by us (with only differences in hardware routing), when issues such as network port connectivity failure or frequent packet loss occur, you can try scanning and adjusting the relevant parameters to troubleshoot the problem.**

**Specific Steps:**

1. Node Confirmation

Taking RK3568 as an example, you can see the following nodes under the directory /sys/devices/platform/fe300000.ethernet:

2. Usage Instructions

Please note that if you are using an RTL8211E phy, you need to unplug the network cable before testing.

3. Scanning the Delayline Window

Scan for a window using the phy\_lb\_scan node, and you will obtain an intermediate coordinate. This scan should be performed using a gigabit speed of 1000.

echo 1000 > phy\_lb\_scan

Two parameters, tx\_delay and rx\_delay, will be outputted at the end.

4. Testing the Scanned Intermediate Values

Configure the scanned values to the rgmii\_delayline node using commands, and then test whether TX/RX data transmission is normal under this configuration.

Conduct the test through the phy\_lb node, and at least this test must pass.

echo (tx delayline) (rx delayline) > rgmii\_delayline

cat rgmii\_delayline

echo 1000 > phy\_lb

After test pass, fill delayline into dts respectively: tx\_delay = \<0x2e>; rx\_delay = \<0x0f>; reburn the firmware, and then continue to test the ping or iperf performance test. In general, this step is enough.

<font style="color:#981A1A;">\&</font><font style="color:#000000;">gmac { </font>

<font style="color:#000000;">assigned</font><font style="color:#981A1A;">-</font><font style="color:#000000;">clocks </font><font style="color:#981A1A;">\= \<\&</font><font style="color:#000000;">cru SCLK\_RMII\_SRC</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">assigned</font><font style="color:#981A1A;">-</font><font style="color:#000000;">clock</font><font style="color:#981A1A;">-</font><font style="color:#000000;">parents </font><font style="color:#981A1A;">\= \<\&</font><font style="color:#000000;">clkin\_gmac</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">clock\_in\_out </font><font style="color:#981A1A;">\= </font><font style="color:#AA1111;">"input"</font><font style="color:#000000;">; </font>

<font style="color:#000000;">phy</font><font style="color:#981A1A;">-</font><font style="color:#000000;">supply </font><font style="color:#981A1A;">\= \<\&</font><font style="color:#000000;">vcc\_lan</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">phy</font><font style="color:#981A1A;">-</font><font style="color:#000000;">mode </font><font style="color:#981A1A;">\= </font><font style="color:#AA1111;">"rgmii"</font><font style="color:#000000;">; </font>

<font style="color:#000000;">pinctrl</font><font style="color:#981A1A;">-</font><font style="color:#000000;">names </font><font style="color:#981A1A;">\= </font><font style="color:#AA1111;">"default"</font><font style="color:#000000;">; </font>

<font style="color:#000000;">pinctrl</font><font style="color:#981A1A;">-</font><font style="color:#116644;">0 </font><font style="color:#981A1A;">\= \<\&</font><font style="color:#000000;">rgmii\_pins</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">snps,reset</font><font style="color:#981A1A;">-</font><font style="color:#000000;">gpio </font><font style="color:#981A1A;">\= \<\&</font><font style="color:#000000;">gpio3 RK\_PB7 GPIO\_ACTIVE\_LOW</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">snps,reset</font><font style="color:#981A1A;">-</font><font style="color:#000000;">active</font><font style="color:#981A1A;">-</font><font style="color:#000000;">low; </font>

<font style="color:#000000;">snps,reset</font><font style="color:#981A1A;">-</font><font style="color:#000000;">delays</font><font style="color:#981A1A;">-</font><font style="color:#000000;">us </font><font style="color:#981A1A;">\= \<</font><font style="color:#116644;">0 10000 50000</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">tx\_delay </font><font style="color:#981A1A;">\= \<</font><font style="color:#116644;">0x2e</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">rx\_delay </font><font style="color:#981A1A;">\= \<</font><font style="color:#116644;">0x0f</font><font style="color:#981A1A;">></font><font style="color:#000000;">; </font>

<font style="color:#000000;">status </font><font style="color:#981A1A;">\= </font><font style="color:#AA1111;">"okay"</font><font style="color:#000000;">; </font>

<font style="color:#000000;">}; </font>