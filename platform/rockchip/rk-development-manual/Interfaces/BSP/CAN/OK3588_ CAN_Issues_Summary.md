# OK3588 CAN Issues Summary

## Issue 1: Extended Frame ID Changes to Standard Frame

### Solution:

Replace the CAN driver. Before sending an extended frame, send a standard remote frame first to ensure the extended frame ID is not lost.

[rockchip_canfd (20240119).c](https://forlinx-book.yuque.com/attachments/yuque/0/2024/c/45387297/1725007396223-930f543f-4fb7-438b-9e83-f64bbb956dfd.c)

Alternatively, you can obtain it via GitHub: [GitHub - rockchip-linux/kernel at develop-5.10](https://github.com/rockchip-linux/kernel/tree/develop-5.10)

## Issue 2: System Lag When Using CAN

### Scenario:

Three devices are connected to the CAN bus: a CAN box, the 3588 CAN, and a motor, with a baud rate of 500K.

The 3588 only receives data.

The CAN box sends a data frame with frame ID 701. Upon receiving it, the motor responds with three frames with IDs 181, 281, and 381.

On the 3588 side, when receiving data, running `ip -d -s link show can0` shows that dropped packets are occurring.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_ CAN_Issues_Summary/1.png)

After a period of time, the debugging serial port enters an unresponsive state.

After stopping the motor, the debugging serial port recovers.

At this time, checking the 3588 status shows high CPU load on a single core.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_ CAN_Issues_Summary/2.png)

Observing the system interrupts reveals a sharp increase in CAN-triggered interrupt counts, increasing by hundreds of thousands.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_ CAN_Issues_Summary/3.png)

Checking the CAN register status shows `fifo_overflow`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_ CAN_Issues_Summary/4.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_ CAN_Issues_Summary/5.png)

System-level packet dropping and frequent interrupts lead to system lag or even freezing.

### Solution:

No solution available. The issue was discussed with Rockchip (RK), but no resolution was provided.

### Appendix

Rockchip updated the RK3588 datasheet in July 2024, removing all descriptions related to CAN functionality. No longer provide any support for CAN functionality on RK3588 and RK3588J. If CAN functionality is required, it is recommended to use a chip expansion CAN interface solution or test with a newer RK chip, such as the RK3576.

