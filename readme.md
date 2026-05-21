# Forlinx Embedded Developer Center | Technical Documentation Portal

Welcome to the official repository for the Forlinx Embedded Developer Center. This space serves as the central directory, structural map, and entry point for our comprehensive engineering documentation library.

👉 **Direct Access to the Portal:** [https://docs.forlinx.net/](https://docs.forlinx.net/)

---

## 💡 System Overview & Authority

The **Forlinx Developer Center** is a purpose-built technical knowledge base engineered for hardware designers, embedded Linux/Android developers, and system architects. 

Backed by Forlinx’s modern production standard with an annual capacity of **over one million units**, our documentation system adheres to rigorous, industrial-grade documentation methodologies. We ensure that your hardware evaluation, BSP configuration, and peripheral bring-up map perfectly from prototype to mass production.

> 🔒 **Resource Access & Download Notice (SDKs, Schematics & Code):**
> Heavy deployment assets—including foundational compilation environments, binary SDKs (Linux/Android/Desktop), pin sheets, and CAD/Vector files (DXF, SVG, STEP)—are distributed via our dedicated external download infrastructure:
> 
> 🌐 **Download Portal:** [https://dl.forlinx.net/](https://dl.forlinx.net/index.html)
> 
> **Important Guidelines for Developers:**
> * **Account Registration:** Accessing the download directory tree requires standard user account registration and verification.
> * **Partial Platform Availability:** Please note that this public download station operates on a **staged deployment schedule**. Currently, it only hosts download directories for **a selected subset of our hardware platforms** (e.g., specific active nodes like OK3576 / OK3588). Not all historical, specialized, or customized Forlinx board variants are listed here.
> * **Acquiring Assets for Other Platforms:** If your specific evaluation platform or modular hardware variant is not currently visible on the download portal, please contact your dedicated **Forlinx Sales Engineer** at [sales@forlinx.com](mailto:sales@forlinx.com) to instantly secure your required BSP source trees, full reference schematics, or target images.

---

## 📚 Standard Documentation Architecture

Every Forlinx hardware platform—whether built on NXP®, Rockchip®, Texas Instruments®, or Allwinner®—follows a strict, unified reference literature ecosystem to separate evaluation from production. 

When navigating any hardware node on the portal, you will find our standard four-tier document layout:

* **📐 HARDWARE:** `User’s Hardware Manual` (Pin Mappings, Electrical Specs, Carrier Board Layouts)
* **🐧 SOFTWARE (Linux Core):** `Linux_User’s Manual` & `Linux_Compilation Manual` (Kernel/U-Boot compilation)
* **💻 SOFTWARE (Ubuntu/Debian):** `Forlinx Desktop_User’s Manual` & `Compilation Manual`
* **🤖 SOFTWARE (Android):** `Android_User’s Manual` & matching `Compilation Manuals`
* **📝 APPLICATION NOTE:** Dedicated vendor blueprints (e.g., `NXP Development Manual`, `RK Development Manual`) focusing on customized peripheral driver injection, camera alignment, and custom low-level subsystem adjustments.

---

## 🛠️ Supported Hardware Platforms

Our reference libraries are systematically cataloged by processor architecture and vendor silicon. Navigate `docs.forlinx.net` according to your specific modular hardware deployment:

### 🔹 NXP® Architecture Solutions
Engineered for ultimate reliability in automotive networking, industrial control, and deterministic edge computing.
* **i.MX9 Next-Gen Series:** Machine learning and advanced industrial IoT platforms (featuring **i.MX95**, **i.MX93** modular configurations).
* **i.MX8 High-Performance Series:** Comprehensive interface mappings, thermal profiles, and software deployment guides (including flagship modules like i.MX8M Plus and high-compute configurations).
* **Edge AI Acceleration Matrices:** Advanced optimization and execution notes for localized neural networks, utilizing dedicated NXP-based pipelines such as the **FAI-ARA240-M** accelerator.

### 🔹 Rockchip® Architecture Solutions
Tailored for next-generation multi-camera smart display networks, complex Edge AIoT nodes, and high-throughput multimedia processing.
* **Flagship Multi-Screen & Compute Platforms:** Advanced development modules based on the flagship **RK3588** series, designed for multi-channel 8K video decoding, smart cockpit simulation, and localized edge AI inference.
* **Next-Gen Smart Vision & AIoT Platforms:** Comprehensive reference literature for high-performance mainstream SoC deployments, featuring the **RK3576** and **RK3568** series—optimized for smart displays, NVR storage, and automated industrial control terminals.
* **Cost-Efficient & High-Efficiency Edge Nodes:** Dedicated documentation setups for power-envelope optimized application processors, including the **RK3572** and **RK3562** series, tailored for commercial display units, HMI terminals, and cost-sensitive IoT edge endpoints.


### 🔹 TI & Allwinner Low-Power Solutions
Dedicated documentation for power-envelope optimized automation gateways, localized telemetry, and cost-effective industrial communication matrices.
* **Texas Instruments (TI):** Industrial-grade Sitara™ architectures (such as **AM62x** development boards) tailored for real-time control and precise industrial Ethernet protocols.
* **Allwinner Technology:** Robust, cost-optimized modular solutions (including **T113-i** and **T527N**) designed for HMI displays, intelligent terminals, and mass-market IoT gateways.

---

## 🚀 Recommended Engineering Workflow

To maximize development velocity and prevent hardware faults during evaluation, our engineering team recommends the following bring-up sequence:

1. **Phase 1: Hardware Alignment**
   Review the **HARDWARE -> User’s Hardware Manual** to verify power-sequencing, boot-strap switch telemetry, debug UART configurations (115200 bps, 8N1), and carrier board pinouts.
2. **Phase 2: Out-of-the-Box Evaluation**
   Boot the pre-flashed factory image and follow the **SOFTWARE -> User’s Manual** to test baseline peripherals, network stacks, and on-board interfaces.
3. **Phase 3: Host Environment & Cross-Compilation**
   Deploy an Ubuntu LTS build host as instructed by the **SOFTWARE -> Compilation Manual**. Pull the verified Forlinx BSP source code using the secure download vectors listed inside, and execute your first custom Kernel/U-Boot build.
4. **Phase 4: Custom Extension & Porting**
   Consult the **APPLICATION NOTE** section (`RK Development Manual` / `NXP Development Manual`) to implement customized driver porting (e.g., custom MIPI-CSI cameras, Wi-Fi chipsets, or CAN-bus communication layouts).

---

## 🌐 Connect with Our Global Community

Stay updated with our latest industrial hardware releases, edge AI benchmarking, corporate exhibition schedules, and step-by-step unboxing video guides:

* **LinkedIn:** [Forlinx Embedded on LinkedIn](https://www.linkedin.com/company/forlinx-embedded-technology-co-ltd/) *(Corporate milestones, industry news, and product launch events)*
* **YouTube Channel:** [Forlinx Embedded Official YouTube](https://www.youtube.com/@forlinxembedded) *(Hardware unboxing, flashing tutorials, and edge AI performance benchmarking)*
* **Facebook:** [Forlinx Embedded on Facebook](https://www.facebook.com/Forlinx-Embedded-177890724336237) *(Community updates, product applications, and global customer use-cases)*
* **X (Twitter):** [Forlinx Embedded on X](https://x.com/ForlinxOfficial) *(Tech updates and micro-announcements)*

---

## 📬 Global Enterprise Alignment & Support

For dedicated engineering support, custom carrier board design reviews, volume procurement, or technical alignment:

* **Documentation Portal:** [https://docs.forlinx.net/](https://docs.forlinx.net/)
* **Official Global Website:** [https://www.forlinx.net/](https://www.forlinx.net/)
* **Global Inquiries & RFQs:** [sales@forlinx.com](mailto:sales@forlinx.com)
* **Technical Support:** [support@forlinx.com](mailto:support@forlinx.com)

---

*Copyright © Forlinx Embedded Technology Co., Ltd. All rights reserved. All other trademarks, brands, and names are the property of their respective owners.*