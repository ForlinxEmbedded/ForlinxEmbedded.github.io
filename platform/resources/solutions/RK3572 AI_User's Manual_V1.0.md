# RK3572 AI_User's Manual

Document classification: □ Top secret □ Secret □ Internal information ■ Open    

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Overview

This manual aims to assist users in completing AI model conversion and deployment on the RK3572 platform. It is based on RK1820\_RK1828\_AI\_SDK\_V1.0.4 and covers the complete workflow from setting up the PC environment and model conversion to board-side compilation, deployment, and execution. It also explains known limitations and common issues encountered during use.

There are five chapters:

+ RK3572 Platform Positioning and Two Modes: Explains the differences between the co-processor mode and non-co-processor (standalone) mode, clarifying the hardware platforms and operating systems supported by RK3572;
+ Environment Preparation: Includes hardware lists for both PC and board sides, system and Python version requirements, Toolkit installation, cross-compiler installation, etc;
+ Model Conversion (PC-side Toolkit): Introduces the conversion process and key configuration points for CNN and LLM models;
+ Compilation and Running Example Programs: Explains how to use the model-zoo to compile and run examples on the board;
+ Common Issues and Documentation Guide: Explains the limitations of RGA image acceleration on RK3572 and provides guidance for consulting related documentation.

## Application Scope

This manual is intended for engineers working on AI model conversion and deployment on the RK3572 platform, covering the complete chain from PC-side model conversion to board-side execution.

The software package referenced is `RK1820_RK1828_AI_SDK_V1.0.4`. Officially, this SDK is provided to “offer the software stack required for deploying AI models to RK1820/RK1828 and RK3572”. It consists of three parts:

PC-side development kit (RKNN3 Toolkit)

Board-side runtime API (RKNN3 Runtime)

Model conversion and deployment examples (RKNN3 Model Zoo)

**Note: This manual does not cover the co-processor mode (RK3588/RK3576 host + RK1820/1828 co-processor) and mentions it only when necessary for comparative explanation.**

## Revision History

| **Date**| **Version**| **SoM Version**| **Carrier Board Version**| **Revision History**|
|:----------:|:----------:|:----------:|:----------:|----------|
| 05/082026 | V1.0| V1.0| V1.0| Initial Version|

## 1\. RK3572 Platform Positioning and the Distinction Between Two Modes

### 1.1 Co-processor Mode vs. Non-co-processor Mode

The RKNN3 SDK supports two hardware configurations: the co-processor mode and the non-co-processor mode.

**\[Co-processor Mode (RK182X)]**

+ Host SoC: Serves as the system core, responsible for task scheduling, resource allocation, and overall control.
+ RK1820/1828 Co-processor: Acts as an AI computing acceleration unit, dedicated to high-performance neural network inference tasks.
+ High-speed Interfaces (PCIe/USB/Ethernet): Enable low-latency, high-bandwidth data exchange between the host and the co-processor.

**\[Non-co-processor Mode (RK3572)]**

+ RK3572 SoC: An SoC platform with an integrated high-performance NPU, supporting direct execution of AI inference tasks.
+ Unified Memory Architecture: The NPU shares memory space with the CPU/GPU.

Comparison Table:

| Items| Co-processor Mode| Non-co-processor Mode|
|----------|----------|----------|
| Chipset Composition| RK3588 / RK3576 Host + RK1820 / RK1828 Co-processor| Single RK3572 SoC|
| NPU Location| External Co-processor| Built into the SoC|
| Host-to-NPU Communication| PCIe / USB / Ethernet| None (local, unified memory)|
| Board-side Runtime Library| `librknn3_api_rkcp.so`| `librknn3_api_native.so`|
| Board-side service process| `rknn3_transfer_proxy`| `rknn3-server`|

+ `librknn3_api.so`: Core library required for both modes.
+ `librknn3_api_rkcp.so`: Runtime library for Co-processor Mode (RK182X).
+ `librknn3_api_native.so`: Runtime library for Non-co-processor Mode (RK3572).

---

### 1.2 Supported Hardware Platforms and Operating Systems

**Supported Hardware Platforms**：

+ RK3572

**Supported Operating Systems：**

+ **Non-coprocessor mode (RK3572): Android, Linux (aarch64 only)**

The RK3572 does not support Windows, and on the Linux side, it only supports aarch64.

---


## 2\. Environment Preparation

### 2.1 Hardware Checklist

The required hardware is listed below:

+ Computer (PC) X 1
+ OK3572-C Development Board X 1
+ USB Type-C Cable X 1
+ OK3572-C Power Adapter X 1

Connect the development board’s serial port to the computer using a data cable → Switch on the power and wait for the system to boot up → Check on the PC that the device is connected:

```bash
# Install ADB  
sudo apt install adb  
# Query ADB-connected devices  
adb devices  
# Upon successful connection, the output is as follows, where 13af7b28115662cd is the device ID of RK3572 (the ID is not fixed as 13af7b28115662cd)
List of devices attached
13af7b28115662cd        device
```

---


### 2.2 PC-side System and Python Version Requirements

| Item| Combination 1| Combination 2|
|----------|----------|----------|
| OS| Ubuntu 22.04| Ubuntu 24.04|
| Python| 3.10| 3.12|

This document primarily uses Ubuntu 22.04 and Python 3.10 as examples; for details of the specific Python library dependencies, please refer to the SDK’s `requirements*.txt`.

### 2.3 Installing the Python Environment (Miniforge Conda)

If Python 3.10 is not installed on your system, or if multiple versions of Python are present, the official recommendation is to create an isolated environment using Miniforge Conda.

```bash
# Check if installed  
conda -V  
# Example output: conda 23.3.1  
# If "conda: command not found" appears, it means Miniforge is not installed  

# Download the installation package  
wget -c https://github.com/conda-forge/miniforge/releases/download/25.3.0-1/Miniforge3-25.3.0-1-Linux-x86_64.sh  

# Copy to user directory, add execute permission, and run the installation script  
cp /path/to/Miniforge3-25.3.0-1-Linux-x86_64.sh ~  
chmod 777 Miniforge3-25.3.0-1-Linux-x86_64.sh  
bash Miniforge3-25.3.0-1-Linux-x86_64.sh  

# Refresh environment variables  
source ~/.bashrc  
# After success, the command line prompt changes to: (base) xxx@xxx:~$  

# Create and activate a Python 3.10 environment named toolkit3  
conda create -n toolkit3 python=3.10  
conda activate toolkit3  
# After success, the command line prompt changes to: (toolkit3) xxx@xxx:~$
```

---


### 2.4 Installing the rknn3-toolkit 

Once the environment has been activated, install it using the local wheel package. The official command template is as follows:

```bash
# Enter the rknn3-toolkit directory
cd Projects/rknn3-toolkit/rknn3-toolkit/packages

# Select the appropriate requirements file based on Python version and processor architecture
pip install -r requirements_cpxxx-x.x.x.txt

# Select the appropriate wheel installation package based on Python version and processor architecture
pip install rknn3_toolkit-x.x.x-cpxx-cpxx-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
```

The files actually included in this SDK under the  directory  `rknn/rknn3-toolkit/rknn3-toolkit/packages/`  are:

```plain
md5sum.txt
requirements_cp310-1.0.4.txt
requirements_cp312-1.0.4.txt
rknn3_toolkit-1.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
rknn3_toolkit-1.0.4-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
```

Therefore, the actual command in a Python 3.10 environment is:

```bash
pip install -r requirements_cp310-1.0.4.txt
pip install rknn3_toolkit-1.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
```

---


### 2.5 Verifying the Installation

```bash
# Enter Python interactive mode
python
# Import the RKNN class
from rknn.api import RKNN
```

If no error messages appear, the installation was successful.

---


### 2.6 Installing CMake

```bash
sudo apt update
sudo apt install cmake
```

---


### 2.7 Confirming the board-level System type and Architecture

Before compiling the C/C++ examples, you must first check whether the board is running Android or Linux, and identify the CPU architecture.

```bash
# Determine system type
adb shell getprop ro.build.version.release
# If the output is a number (e.g., 12) → Android system
# If the output is /bin/bash: line 1: getprop: command not found → Linux system

# Query architecture for Android system
adb shell getprop ro.product.cpu.abi
# Example output: arm64-v8a

# Query architecture for Linux system
adb shell uname -a
# Example output: Linux rk3588-buildroot 6.1.118 #4 SMP ... aarch64 GNU/Linux
```

For the RK3572, the Linux side only supports aarch64, so `uname -a` should be output `aarch64`.

---


### 2.8 Installing the Cross-compilation Toolchain

**Linux System Development Board — GCC Cross-Compiler**

Official download links and path conventions:

```plain
https://releases.linaro.org/components/toolchain/binaries/6.3-2017.05/aarch64-linux-gnu/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu.tar.xz
```

It is recommend extracting the `Projects` files to the following folder:

```plain
Projects
├── rknn3-toolkit
├── rknn3-model-zoo
└── gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu   # This is used when compiling the RKNN3 C demo
```

At this point, the GCC compiler path is `Projects/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu`.

**Android Development Board — NDK**

```plain
https://dl.google.com/android/repository/android-ndk-r19c-linux-x86_64.zip
```

The official recommendation is to download version r19c and extract it to the `Projects`  folder; at this point, the NDK compiler path is `Projects/android-ndk-r19c`.

---


### 2.9 Setting up the RKNPU3 Environment on the Board

The board-level components required for each of the two modes:

+ Runtime library (`librknn3_api.so`): Responsible for loading the RKNN model and invoking the NPU to perform inference; required in both modes.
+ `rknn3_transfer_proxy`: A background proxy service running on the RK3588 in coprocessor mode transfers data between the RK3588 and the RK1820/1828 via PCIe, USB or Ethernet.
+ `rknn3-server`: In non-coprocessor mode, the communication service running on the RK3572 is responsible for handling inference requests from the PC.

Sections to be implemented for the RK3572:

```bash
# Enter the rknn3-runtime directory
cd Projects/rknn3-toolkit/rknn3-runtime

# ---- Install Runtime Libraries ----
# Android System
# Restart adbd with root privileges (the board must allow root)
adb root
# Remount /system /vendor etc. as writable
adb remount
adb push rknn3-api/Android/arm64-v8a/librknn3_api.so        /vendor/lib64/
adb push rknn3-api/Android/arm64-v8a/librknn3_api_native.so /vendor/lib64/

# Linux System
adb push rknn3-api/Linux/aarch64/librknn3_api.so        /usr/lib/
adb push rknn3-api/Linux/aarch64/librknn3_api_native.so /usr/lib/

# ---- Install Communication Service: Install rknn3-server for non-coprocessor mode (RK3572) ----
# Android System
adb push rknn3-server/Android/arm64-v8a/rknn3-server /vendor/bin/
# Linux System
adb push rknn3-server/Linux/aarch64/rknn3-server /usr/bin/
# Add executable permission
adb shell chmod +x /usr/bin/rknn3-server

# Must execute sync
adb shell sync
```

Regarding**`rknn3-server`**whether it must be started: it is defined as the service that handles consecutive board inference requests from the PC. If you are simply pushing a compiled C/C++ programme to the board for local execution (without performing on-board inference), `rknn3-server`is not essential;

## 3\. Model Conversion (PC Toolkit)

### 3.1 Overview of the Conversion Process

CNN model development is divided into three stages: model conversion → model evaluation → on-board execution The model conversion comprises five steps:

a. Obtain the source model: Obtain or train a deep learning model; we recommend using mainstream frameworks such as ONNX, PyTorch or TensorFlow;   
b. Model Configuration: Perform necessary configurations within the RKNN3 Toolkit, such as normalization parameters, quantization parameters, and the target platform;   
c. Model Loading: Load the model into the RKNN3-Toolkit using the appropriate loading interface;   
d. Model Building: Build the RKNN model via the `rknn.build()` interface, with an option for quantization; 
e. Model Export: Export the RKNN model using the export\_rknn `rknn.export_rknn()` interface.

Corresponding Code Structure:

```python
from rknn.api import RKNN

rknn = RKNN(verbose=True)              # Create object

rknn.config(...)                        # Model configuration
ret = rknn.load_onnx(model='../model/yolov6n.onnx')   # Load model
ret = rknn.build(do_quantization=True, dataset=args.dataset_path)  # Build model
ret = rknn.export_rknn(export_path='./yolov6.rknn')   # Export model

rknn.release()                          # Release object
```

The exported output consists of two files: the exported model includes two parts—a model file ending with `.rknn` and a weight file ending with `.weight`. Both files are required for subsequent deployment. This is different from the old version of RKNN2, which only produces a single `.rknn` file, so the command line on the board has one more parameter `weight_path`.

---


### 3.2 `core_num` with the RK3572 Single-Core NPU

> core\_num: Number of NPU cores required by the model. The NPU core count for the RK1820 ranges from 1 to 8, with a default value of 0 indicating automatic selection.
> 
> 1. Transformer-class models can be configured to use the desired number of NPU cores, while other models (such as CNN models) are recommended to be set to 1.
> 2. In automatic mode (core\_num=0), `load_llm` loaded with the load\_darknet interface will utilize 8 NPU cores; all other scenarios will default to using 1 NPU core.
> 3. **The RK3572 platform features a single-core NPU and only supports a value of 1.**

+ `core_num=0` (Automatic by default) For the LLM class model, 8 cores will be taken, which is not true on RK3572. When converting an LLM, you should set `core_num=1`.
+ There are several conversion scripts in model-zoo that write **`core_num`** greater than 1. Direct use of RK3572 will conflict with the single-core limit, and the script needs to be changed. After checking each one individually, the following have hard-coded values greater than 1:

| Script| Hardcoded Values:
|----------|----------
| `examples/paddleocr_vl/python/vision/export_rknn.py:74`| `core_num=8`
| `examples/paddleocr_vl/python/vision/export_rknn.py:142`| `core_num=8`
| `examples/Qwen3_ASR/python/audio/online/export_audio_rknn.py:28`| `core_num=8`
| `examples/Qwen3_TTS/python/talker/export_talker_rknn.py:46`| `core_num=8`
| `examples/Qwen3_TTS/python/code_predictor/export_code_predictor_rknn.py:46`| `core_num=8`
| `examples/gemma4/python/audio/export_rknn.py:38`| `core_num=4`

Scripts that hardcode the value to 1 (no change required for RK3572): `examples/yolov6/python/convert.py:59`, `examples/vits/python/convert_step1.py:54`, `convert_step2.py:57`, `examples/zipformer/python/convert_encoder.py:43`, `examples/Qwen3_TTS/python/text_projector/export_text_projector_rknn.py:29`. Other scripts `core_num=args.core_num`, may be specified via the command line.

---


### 3.3 Example of a CNN Model Conversion (YOLOv6)

Taking YOLOv6 as an example, the complete process is as follows.

**1\. Model Preparation**

```bash
cd Projects/rknn3-model-zoo/examples/yolov6/model
wget -O ./yolov6n.onnx https://ftrg.zbox.filez.com/v2/delivery/data/95f00b0fc900458ba134f8b180b3f7a1/examples/yolov6/yolov6n.onnx
```

Do not run ./download\_model.sh directly. By default, this script downloads a model with the suffix \_rknn3 (the line for downloading the standard model has been commented out in the script); this model is not suitable for the RK3572,

**2\. Model Conversion**

```bash
cd Projects/rknn3-model-zoo/examples/yolov6/python
# Usage: python3 convert.py onnx_model_path [platform] [dtype(optional)] [output_rknn_path(optional)]
# platform optional: rk1820 or rk3572
python convert.py ../model/yolov6n_rknn3.onnx rk3572 i8
```

The configuration actually called within this script is (taken from   `examples/yolov6/python/convert.py:57-63`):

```python
    rknn.config(mean_values=[[0, 0, 0]], std_values=[[255, 255, 255]], target_platform=platform,
                input_attrs={'image_arrays': {'dtype': 'uint8', 'layout': 'NHWC'}}, subgraph_dtype_target = subgraph, core_num=1,
                quantized_dtype='w8a8',
                quantized_algorithm='normal',
                quantized_method='channel',)
```

This value `core_num=1` is hard-coded as 1, so no changes are required for the RK3572;`dtype`the parameter can be set to  `w8a8` / `i8` (quantised) or `fp` (unquantised).

**3\. Quantization Dataset**

`convert.py` The variable quantization\_dataset is defined `DATASET_PATH = '../../../datasets/COCO/coco_subset_20.txt'`at the top of the script, pointing to the COCO subset (20 images) included with model-zoo.`normal` For int8 quantization: Recommended 20–100 images.`mmse`

For int16 quantization: Recommended 20–50 images.`kl_divergence`

For float16 quantization: Recommended 20–100 images.

`gdq`/`grq` are only effective under`w4a16` the quant\_aware\_training mode, requiring 200+ images and GPU acceleration.

---


### 3.4 LLM Model Conversion Example

The LLM process differs from CNN. The HuggingFace model must first be converted to ONNX, then exported to RKNN.

```bash
cd Projects/rknn3-model-zoo
pip install -r requirements.txt
export PYTHONPATH=Projects/rknn3-model-zoo/

# Export ONNX models and configuration files
cd Projects/rknn3-model-zoo/examples/Qwen2_5/python/
python export_llm.py --modelscope

# Convert to rknn model
python export_rknn.py --platform rk3572
```

The provided configuration example:

```python
# Select rk1820/rk1828 or rk3572 depending on the target platform
    rknn.config(target_platform=args.platform, 
                quantized_dtype='w4a16', quantized_algorithm='grq', 
                quantized_method='group32',
                )
ret = rknn.load_llm(model=args.onnx_path, config=args.config)
```

Key specifications:

+ `target_platform`：Target chip platform, supports `rk1820`, `rk1828`, and `rk3572`
+ `quantized_dtype`：LLM model requirements `w4a16`
+ `quantized_algorithm`：Options `grq` or `normal`, generally `grq` offers higher precision, recommended for use
+ `quantized_method`：Recommended to use `group32`

**Outputs**：At this stage, all necessary files for on-device execution will be generated, including `xxx.rknn`, `xxx.weight`, `xxx.embed.bin`, and `xxx.tokenizer.gguf`.

The purpose of `embed.bin` is to optimize memory usage; the embedding from the LLM model is processed on the CPU side for use by the `embed_callback` in the device-side `RKLLMCallback`. `tokenizer.gguf` uses the llama.cpp tokenizer but can also be replaced with your own implementation.

---


## 4\. Example Programs Compilation and Operation

### 4.1 Why Prefer Using Model-zoo?

List of supported platforms:

| Main Chip| Co-Processor| OS|
|----------|----------|----------|
| RK3588 Series| RK1820 / RK1828| Linux / Android|
| RK3576 Series| RK1820 / RK1828| Linux / Android|
| **RK3572 Series**| **\-**| **Linux / Android**|

Notes on the structure and runtime library of this section:

> + Top-level build scripts `build-linux.sh` / `build-android.sh` support the `-t` parameter with options `rk3588`, `rk3576`, `rk3572`, and `x86`.  
> + In the example installation directory `lib/`, the RKNN3 Runtime libraries are differentiated by SoC:  
>   - For **RK3588** / **RK3576**: Install `librknn3_api.so` and `librknn3_api_rkcp.so`.  
>   - For **RK3572**: Install `librknn3_api.so` and `librknn3_api_native.so`.

In other words, model-zoo is the only module in the SDK that includes the RK3572 in the platform table, build scripts and CMake installation rules, and comes with its own native library (`3rdparty/rknpu3/`).

---


### 4.2 Compilation Command

**Linux target board:**

```bash
# Import GCC cross-compiler environment variables
export GCC_COMPILER=<toolchain_path>/bin/aarch64-linux-gnu

cd rknn3-model-zoo
# Non-coprocessor mode (RK3572), target board is Linux system, compile yolov6 C++ inference program
./build-linux.sh -t rk3572 -a aarch64 -b Release -d yolov6
```

**Android target board:**

```bash
# First, add the following at the beginning of the build-android.sh script:
# export ANDROID_NDK_PATH=Projects/android-ndk-r19c

cd rknn3-model-zoo
./build-android.sh -t rk3572 -a arm64-v8a -b Release -d yolov6
```

The full list of arguments for `build-linux.sh` (output of `-h` as per the original text):

```plain
    -t : target (rk3588/rk3576/rk3572/x86)
    -a : arch (aarch64/armhf/x86_64)
    -d : demo name
    -b : build_type(Debug/Release)
    -m : enable address sanitizer, build_type need set to Debug
    -r : disable rga, use cpu resize image
    -j : disable libjpeg to avoid conflicts between libjpeg and opencv
```

The script validates the `-t` parameter against a whitelist, and `rk3572` is included in it:

```bash
case ${TARGET_SOC} in
    rk3588) ;;
    rk3576) ;;
    rk3572) ;;
    x86)    ;;
    *)
        echo "Invalid target: ${TARGET_SOC}"
        echo "Valid target: rk3588,rk3576,rk3572,x86"
        exit -1
        ;;
esac
```

Product Path Rules：`install/${TARGET_SOC}_linux_${TARGET_ARCH}/rknn_${DEMO}_demo`，e.g.`install/rk3572_linux_aarch64/rknn_yolov6_demo`.

---

### 4.3 Valid Values of `-d` and Platform Compatibility of Each Example

If the specified demo is not found, `build-linux.sh` will iterate through all items containing a `cpp` subdirectory under `examples` and `tested_models` and print the available options. There are **29 examples** in the SDK's `examples/` directory, all containing a `cpp` subdirectory, thus all can be used as values for `-d`:

**CV category**: `mobilenet_v1`, `mobilenet_v2`, `resnet`, `yolov5`, `yolov6`, `yolov8`  
**LLM category**: `Qwen2_5`, `Qwen3`, `gemma4`, `glm_edge`, `HY_MT_1_5`  
**VLM / Multimodal category**: `FastVLM`, `GME-Qwen2-VL`, `InternVLM`, `Janus_Pro`, `MiniCPM_V_4`, `paddleocr_vl`, `Qwen2_5_Omni`, `Qwen2_5_VL`, `Qwen2_5_VL`, `Qwen3_VL`, `Qwen3_VL_LoRA`, `SmolVLM`, `SmolVLM2`  
**Speech / Others**: `Qwen3_ASR`, `Qwen3_TTS`, `Qwen3_Embedding`, `Qwen3_Reranker`, `vits`, `zipformer`

**After randomly sampling the platform branches for each example, the conclusions are as follows:**

> **Among the **`cpp/`** and **`python/`** directories of all 29 examples, none contain the strings **`rk3572`** or **`RK3572`**.** (Full directory search only found one match in `zipformer/model/tokens.txt`, which is platform-independent vocabulary content.)

This does not mean "unsupported"; rather, **platform differences have been completely centralized to the common layer**:

| Layer                                        | Has rk3572 branch? | Location                                                     |
| -------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| Top-level build scripts                      | ✅ Yes              | `-t` whitelist in `build-linux.sh` / `build-android.sh`      |
| Third-party library and runtime installation | ✅ Yes              | `3rdparty/CMakeLists.txt:42-56`                              |
| Image tools (RGA)                            | ⚠️ Partial          | `utils/CMakeLists.txt` only recognizes `DISABLE_RGA` (see §5.1) |
| **Each example's** `cpp/`                    | ❌ No               | Platform-agnostic, relies on `TARGET_SOC` passthrough        |
| **Each example's** `python/`                 | ❌ No               | Platform is passed via command-line arguments or hardcoded strings (see below) |

**Therefore, no example code needs to be modified for RK3572 on the C++ side**; attention is required on the Python conversion script side:

| Situations Requiring Modification                            | Related Scripts                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `target_platform` **hardcoded as** `'rk1820'` without command-line option, must modify source code for RK3572 usage | `gemma4/python/llm/export_rknn.py:96`, `paddleocr_vl/python/llm/export_rknn.py:25`, `paddleocr_vl/python/vision/export_rknn.py:74,142`, `paddleocr_vl/python/infer.py:264,266,268`, `SmolVLM2/python/llm/export_rknn.py:23`, `SmolVLM2/python/vision/export_rknn.py:21`, `Qwen3_VL_LoRA/python/llm/export_rknn.py:43`, `Qwen3_ASR/python/llm/export_rknn.py:41`, `Qwen3_ASR/python/audio/online/export_audio_rknn.py:10` |
| `core_num` hardcoded to >1, conflicting with RK3572's single-core configuration | See the table in §3.2                                        |
| Only `--platform` default value is `rk1820`, can be overridden via command line | Most other `export_rknn.py` scripts                          |

### 4.4 Deployment and Execution on Board

**Push**:

```bash
adb root
# For Linux system
adb push rknn3-model-zoo/install/rk3572_linux_aarch64/rknn_yolov6_demo /data
# For Android system
adb push rknn3-model-zoo/install/rk3572_android_arm64-v8a/rknn_yolov6_demo /data
```

**Run**:

```bash
adb shell
cd /data/rknn_yolov6_demo
export LD_LIBRARY_PATH=/data/rknn_yolov6_demo/lib
# Usage: ./rknn_yolov6_demo <model_path> <weight_path> <image_path> <core_mask>
./rknn_yolov6_demo ./model/yolov6n.rknn ./model/yolov6n.weight ./model/bus.jpg 0x1
```

Run command for LLM example:

```bash
cd /data/rknn_Qwen2_5_demo/
export LD_LIBRARY_PATH=/data/rknn_Qwen2_5_demo/lib
# Usage: ./rknn_qwen2_5_demo <model_path> <weight_path> <tokenizer_path> <embedding_path> <core_mask> <prompt>
./rknn_qwen2_5_demo ./model/Qwen2.5-3B-Instruct.rknn \
   ./model/Qwen2.5-3B-Instruct.weight \
   ./model/Qwen2.5-3B-Instruct.tokenizer.gguf \
   ./model/Qwen2.5-3B-Instruct.embed.bin 0x1 \
   "who are you?"
```

The RK3572 board has limited memory. When running LLM-type models, insufficient memory will result in a `Killed` error (process terminated by the kernel). For boards with smaller memory (e.g., 4 GB or less), select smaller models (e.g., Qwen2.5-1.5B or smaller) and avoid directly using models of 3B or larger.

---

## 5. Common Issues and Documentation Lookup Guide

### 5.1 RGA Image Acceleration Disabled on RK3572

RGA image acceleration is disabled on RK3572 due to hardware issues (SDK code comment original: `Disable RGA on RK3572 due to hardware issues`). Image preprocessing will fall back to the CPU.

---

### 5.2 Documentation Lookup Guide

| Requirement                                           | Where to Look                                                |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| Getting started, environment setup, complete workflow | `rknn/rknn3-runtime/doc/01_*Quick_Start*.pdf` (65 pages, mentions RK3572 44 times, includes a dedicated chapter for RK3572) |
| Toolkit Python API                                    | `03_API_Reference_RKNN3_Toolkit` (25 pages, mentioned 3 times) – Note: section §2.2 `target_platform` entry is not updated |
| Board-side C API                                      | `rknn3-api/include/rknn3_api.h` header file + Quick Start §4.1.4 |
| Library installation rules                            | `rknn3_model_test_demo/README_CN.md` (Linux / Android sections) |
| Compilation and examples                              | `rknn3-model-zoo/README_CN.md` + `build-linux.sh`            |
| In-depth usage                                        | `02_User_Guide` (186 pages, mentions RK3572 55 times)        |



