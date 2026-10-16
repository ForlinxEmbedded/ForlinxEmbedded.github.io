# OK3588-C-3588J: Switch Frequency to Normal Mode - Application Note_V1.0

Document classification: □ Top secret □ Secret □ Internal information ■ Open 

## Copyright

The copyright of this manual belongs to Baoding Forlinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives. 

## Revision History

| Date       | Version | Revision History |
| ---------- | ------- | ---------------- |
| 21/03/2024 | V1.0    | Initial Version  |

 Switch the industrial-grade core board frequency to normal mode.

## Modification Steps

Navigate to the source code directory, and add the reference `#include "rk3588j.dtsi"` in the kernel device tree. The file path is as follows:

```
forlinx@ubuntu20:~/3588/OK3588_Linux_fs$ vi kernel/arch/arm64/boot/dts/rockchip/OK3588-C-common.dtsi
```

Modify the .dtsi file as shown below.

<img src="https://cdn.nlark.com/yuque/0/2024/png/45535139/1721955358351-95f678d7-d3da-4f22-9e2e-6334e1b058c0.png" width="604" alt="" title="" crop="0,0,1,1" id="xNx22" class="ne-image"> 

Perform a full compilation to generate the target image:

```plain forlinx@ubuntu20:~/3588/OK3588_Linux_fs$ sudo ./build.sh```

After the compilation, the system image will be generated in the `rockdev` folder, as shown in the figure below:

<img src="https://cdn.nlark.com/yuque/0/2024/png/45535139/1721955358579-bdb13747-959b-4112-b176-aa7d974ade02.png" width="982" alt="" title="" crop="0,0,1,1" id="ThFpL" class="ne-image"> Re-burn the image via RKDevTool. 

## Test

Use the command below to check the frequency levels supported by the current CPU:

```
root@ok3588:/# cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_frequencies
```

Before the switch, that is, under the overclocking mode, the tested frequencies are as follows:

<img src="https://cdn.nlark.com/yuque/0/2024/png/45535139/1721955596996-beb86908-8b76-47b1-bc83-957cb6ec04a1.png" width="903" alt="" title="" crop="0,0,1,1" id="ubc7f8504" class="ne-image"> After the switch, that is, under the normal mode, the tested frequencies are as follows:<img src="https://cdn.nlark.com/yuque/0/2024/png/45535139/1721955607774-da52ff69-64ee-4c51-885b-8051169a1a15.png" width="870" alt="" title="" crop="0,0,1,1" id="u70a7b129" class="ne-image">  