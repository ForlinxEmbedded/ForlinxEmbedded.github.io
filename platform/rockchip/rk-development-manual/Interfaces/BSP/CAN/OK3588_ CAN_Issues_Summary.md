# OK3588 CAN Issues Summary

## Issue 1: Extended Frame ID Changes to Standard Frame

### Solution:

Replace the CAN driver. Before sending an extended frame, send a standard remote frame first to ensure the extended frame ID is not lost.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725007396223-930f543f-4fb7-438b-9e83-f64bbb956dfd.c)

Alternatively, you can obtain it via GitHub: [GitHub - rockchip-linux/kernel at develop-5.10](https://github.com/rockchip-linux/kernel/tree/develop-5.10)https://github.com/rockchip-linux/kernel/tree/develop-5.10

## Issue 2: System Lag When Using CAN

### Scenario:

Three devices are connected to the CAN bus: a CAN box, the 3588 CAN, and a motor, with a baud rate of 500K.

The 3588 only receives data.

The CAN box sends a data frame with frame ID 701. Upon receiving it, the motor responds with three frames with IDs 181, 281, and 381.

On the 3588 side, when receiving data, running `ip -d -s link show can0` shows that dropped packets are occurring.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725006701441-5ad4ab29-14b6-437c-a294-af11dddb74db.png)

After a period of time, the debugging serial port enters an unresponsive state.

After stopping the motor, the debugging serial port recovers.

At this time, checking the 3588 status shows high CPU load on a single core.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725006688112-044bea4b-e1e3-4f01-b91c-3afcce494f60.png)

Observing the system interrupts reveals a sharp increase in CAN-triggered interrupt counts, increasing by hundreds of thousands.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725006739469-8685a8ce-c95c-4411-a27d-7398a4c47332.png)

Checking the CAN register status shows `fifo_overflow`.

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725006786129-bd120d49-6575-4e4e-ad58-5df809f6b94c.png)

![Image](https://www.forlinx.net/docs_assets/images/platform/rockchip/rk-development-manual/Interfaces/BSP/CAN/OK3588_CAN_Issues_Summary/1725006794447-b997502b-5a56-4f63-9efc-1a2e47046eaa.png)

System-level packet dropping and frequent interrupts lead to system lag or even freezing.

### Solution:

No solution available. The issue was discussed with Rockchip (RK), but no resolution was provided.

### Appendix

Rockchip updated the RK3588 datasheet in July 2024, removing all descriptions related to CAN functionality. No longer provide any support for CAN functionality on RK3588 and RK3588J. If CAN functionality is required, it is recommended to use a chip expansion CAN interface solution or test with a newer RK chip, such as the RK3576.

