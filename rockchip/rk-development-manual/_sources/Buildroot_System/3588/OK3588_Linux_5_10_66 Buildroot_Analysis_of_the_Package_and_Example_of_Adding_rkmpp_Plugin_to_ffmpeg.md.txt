# OK3588 5.10.66 Buildroot Analysis of the Package and Example of Adding rkmpp Plugin to ffmpeg

Document classification: □ Top secret □ Secret □ Internal information ■ Open                                                                                                              

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|----------|----------|----------|
| 09/22/2025| V1.0| Initial Version|

## Analysis of the Package and Example of Adding rkmpp Plugin to ffmpeg

Platform：OK3588

Source code:

```bash
git clone -b jellyfin-mpp --depth=1 https://github.com/nyanmisaka/mpp.git rkmpp
git clone -b jellyfin-rga --depth=1 https://github.com/nyanmisaka/rk-mirrors.git rkrga
git clone --depth=1 https://github.com/nyanmisaka/ffmpeg-rockchip.git ffmpeg
```

Refere to: [Compilation · nyanmisaka/ffmpeg-rockchip Wiki (github.com)](https://github.com/nyanmisaka/ffmpeg-rockchip/wiki/Compilation)

Modified package：rockchip-mpp，rockchip-rga，opencv4，ffmpeg

**1\. Buildroot**

Buildroot is a tool that enables simple and automated cross-compilation to build a complete Linux system for embedded systems.

To achieve this, Buildroot can generate cross-build toolchains, root filesystems, Linux kernel images, and boot loaders for your system. BuildRoot can be used independently with any combination of these options (for example, you can use an existing cross-compilation toolchain and compile only the root filesystem). Buildroot is primarily intended for developers working with embedded systems. Embedded systems typically use processors other than regular x86 processors used on PCs. They can be PowerPC processors, MIPS processors, or ARM processors. 

Refere to: [Buildroot中文用户手册\_the buildroot user manual 中文-CSDN博客](https://blog.csdn.net/haimo_free/article/details/107677695)

**2\. Adding Software Packages to Buildroot**

 This section modifies the ffmpeg. mk and rockchip mpp. mk to adapt to the rkmpp plug-in of ffmpeg.

**2.1 Adding the rockchip-mpp Package**

Navigate to the Buildroot directory and examine the contents under ./package/rockchip/:

```bash
tree -L 1
.
├── Config.in
├── rockchip.mk
```

Config.in

It can be seen that the syntax of the Config. in is almost the same as that of KConfig, except that CONFIG \_ becomes the BR2 \_ PACKAGE \_. In fact, this is a naming rule derived from buildroot through a series of its own tools and scripts, which is described below.

```plain
menuconfig BR2_PACKAGE_ROCKCHIP
        bool "Rockchip Platform"

if BR2_PACKAGE_ROCKCHIP

config BR2_PACKAGE_ROCKCHIP_HAS_ISP1
        bool
        help
          Has Rockchip ISP1

config BR2_PACKAGE_ROCKCHIP_HAS_ISP2
        bool
        help
          Has Rockchip ISP2

config BR2_PACKAGE_ROCKCHIP_HAS_ISP3
        bool
        help
          Has Rockchip ISP3

choice
        default BR2_PACKAGE_RK3588
        prompt "Rockchip SoC"

config BR2_PACKAGE_RK3399
        bool "rk3399 chip"
        select BR2_ROCKCHIP_HAS_ISP1
        help
          Use Rockchip's rk3399 SoC

config BR2_PACKAGE_RK356X
        bool "rk356x chip"
        select BR2_ROCKCHIP_HAS_ISP2
        help
          Use Rockchip's rk356x SoC

config BR2_PACKAGE_RK3588
        bool "rk3588"
        select BR2_PACKAGE_ROCKCHIP_HAS_ISP3
        help
          Use Rockchip's rk3588 SoC

endchoice

# Camera Engine packages
```

rockchip.mk

```makefile
include $(sort $(wildcard package/rockchip/*/*.mk))
```

Next, examine the configuration of the rockchip-mpp package.

First, introduce the naming rules..

Relationship between package name, configuration entry name, and makefile variable.

In Buildroot, there are some relationships between them:

+ The package name, which is the package directory name, is also the.mk file name.
+ The configuration portal name is the name declared in the Config. In.
+ Makefile variable prefix.

The following rules must be used to ensure consistency between these elements:

+ The package directory and.mk file name is the package name itself, such as package/foo- bar \_ boo/foo- bar \_ boo. mk.
+ The make directory name is the package name itself, such as foo-bar \_ boo.
+ The configuration portal name is the package name in uppercase, where-is replaced by, and begins with BR2 \_ PACKAGE, as in the BR2 \_ PACKAGE \_ FOO \_ BAR \_ BOO.
+ The.mk file variable prefix is the package name in uppercase, where-is replaced by \_, as in FOO \_ BAR \_ BOO \_ VERSION.

```bash
tree -L 1
├── Config.in
├── rockchip-mpp.hash # During the software package building process, the hash checksum value will undergo comparison. Should the verification fail, the build process will be terminated. Typically, both the downloaded compressed package and the SHA256 value of the license are stored.
└── rockchip-mpp.mk
```

rockchip-mpp.mk

```makefile
################################################################################
#
# rockchip-mpp
#
################################################################################

#ROCKCHIP_MPP_SITE = $(TOPDIR)/../external/mpp
ROCKCHIP_MPP_SITE = $(TOPDIR)/../../../tools/rkmpp  #Configure source code download path
ROCKCHIP_MPP_VERSION = develop# Configure source code version, and create rockchip-mpp-$(ROCKCHIP_MPP_VERSION) directory under the build directory
ROCKCHIP_MPP_SITE_METHOD = local  #Download in local mode



ROCKCHIP_MPP_LICENSE = Apache-2.0  #License Type
ROCKCHIP_MPP_LICENSE_FILES = LICENSE.md  #License file

ROCKCHIP_MPP_CONF_OPTS = "-DRKPLATFORM=ON" 

ROCKCHIP_MPP_DEPENDENCIES += libdrm

ROCKCHIP_MPP_INSTALL_STAGING = YES #Whether to install in the starg space. When the library needs to be used as a dependent library, set YES, and it will be placed in the staging directory.

# Add CMake compilation options based on config. In compilation options 
ifeq ($(BR2_PACKAGE_ROCKCHIP_MPP_ALLOCATOR_DRM),y) 
ROCKCHIP_MPP_CONF_OPTS += "-DHAVE_DRM=ON"
endif

ifeq ($(BR2_PACKAGE_ROCKCHIP_MPP_TESTS),y)
ROCKCHIP_MPP_CONF_OPTS += "-DBUILD_TEST=ON"
endif
# Perform git repository operation in rsync phase
define ROCKCHIP_MPP_LINK_GIT  
        rm -rf $(@D)/.git
        ln -s $(SRCDIR)/.git $(@D)/
endef
ROCKCHIP_MPP_POST_RSYNC_HOOKS += ROCKCHIP_MPP_LINK_GIT #See PS below for HOOK operation addition

define ROCKCHIP_MPP_REMOVE_NOISY_LOGS
        sed -i -e "/pp_enable %d/d" \
                $(@D)/mpp/hal/vpu/jpegd/hal_jpegd_vdpu2.c || true
        sed -i -e "/reg size mismatch wr/i    if (0)" \
                $(@D)/osal/driver/vcodec_service.c || true
endef
ROCKCHIP_MPP_POST_RSYNC_HOOKS += ROCKCHIP_MPP_REMOVE_NOISY_LOGS

$(eval $(cmake-package))
```

PS: HOOK operation is described in chapter 17.22 of the official manual.

The generic infrastructure (as well as the derived infrastructures based on autotools and CMake build systems) allows packages to specify hooks. These hooks define additional actions to be performed after the corresponding steps. Most hooks are not particularly useful for generic packages, because the `.mk` file already has full control over the operations performed by the package at each step of the build process.

**HOOK operations provide a space for executing custom commands across all build steps of a package.**

DOWNLOAD, EXTRACT, RSYNC, PATCH, CONFIGURE, BUILD, INSTALL, INSTALL\_STAGING, INSTALL\_TARGET, INSTALL\_IMAGES, LEGAL\_INFO.

**2.2 Add ffmpeg Package**

```bash
tree -L 1 
├── Config.in
├── ffmpeg.hash
├── ffmpeg.mk
└── patch   #These patches were originally in the upper directory, but due to the modification of the package source and version of ffmpeg, these patches are no longer applicable and are placed in the patch.
    ├── 0001-swscale-x86-yuv2rgb-Fix-build-without-SSSE3.patch
    ├── 0002-avcodec-vaapi_h264-skip-decode-if-pic-has-no-slices.patch
    ├── 0003-libavutil-Fix-mips-build.patch
    └── 0004-configure-add-extralibs-to-extralibs_xxx.patch
```

ffmpeg.mk

```makefile
#FFMPEG_VERSION = 4.4.1
#FFMPEG_SOURCE = ffmpeg-$(FFMPEG_VERSION).tar.xz
#FFMPEG_SITE = http://ffmpeg.org/releases
FFMPEG_SITE = $(TOPDIR)/../../../tools/ffmpeg-rockchip-master
FFMPEG_VERSION = master
FFMPEG_SITE_METHOD = local
FFMPEG_INSTALL_STAGING = YES
···
ifeq ($(BR2_PACKAGE_ROCKCHIP_MPP),y)
FFMPEG_CONF_OPTS += --enable-rkmpp --enable-version3
FFMPEG_DEPENDENCIES += rockchip-mpp
endif
···
# Override FFMPEG_CONFIGURE_CMDS: FFmpeg does not support --target and others
#The variable for the phase + _ CMDS indicates an override of the operation for that phase, in which case the command for the CONFIGURE phase performs the operation defined below
define FFMPEG_CONFIGURE_CMDS
        (cd $(FFMPEG_SRCDIR) && rm -rf config.cache && \
        $(TARGET_CONFIGURE_OPTS) \
        $(TARGET_CONFIGURE_ARGS) \
        $(FFMPEG_CONF_ENV) \ #Operations required for the compilation environment prior to compilation
        ./configure \
                --enable-cross-compile \
                --cross-prefix=$(TARGET_CROSS) \
                --sysroot=$(STAGING_DIR) \
                --host-cc="$(HOSTCC)" \
                --arch=$(BR2_ARCH) \
                --target-os="linux" \
                --disable-stripping \
                --pkg-config="$(PKG_CONFIG_HOST_BINARY)" \
                $(SHARED_STATIC_LIBS_OPTS) \
                $(FFMPEG_CONF_OPTS) \
        )
endef

define FFMPEG_REMOVE_EXAMPLE_SRC_FILES
        rm -rf $(TARGET_DIR)/usr/share/ffmpeg/examples
endef
FFMPEG_POST_INSTALL_TARGET_HOOKS += FFMPEG_REMOVE_EXAMPLE_SRC_FILES

$(eval $(autotools-package))
```

**2.3 Upgrade of OpenCV package**

In Buildroot, version upgrades and adaptations of third-party toolkits demand caution. After modifying the above package configs, you may face FFMPEG-based software incompatibility, hence no direct cross-compile and porting. OpenCV 4.5.4's videoio module fails to compile due to missing AVCodec codec struct from AVStream in ffmpeg 4.4.1. It's unsurprising for ffmpeg-based tools to have issues, as  the ffmpeg 6.1 is used. Fortunately, comparing ffmpeg and OpenCV source codes reveals that version 4.7.0 offers compatibility for this ffmpeg modification.

```c
// AVStream.codec deprecated in favor of AVStream.codecpar
// https://github.com/FFmpeg/FFmpeg/blob/b6af56c034759b81985f8ea094e41cbd5f7fecfb/doc/APIchanges#L1039-L1040
#if LIBAVFORMAT_BUILD >= CALC_FFMPEG_VERSION(59, 16, 100)
//#if LIBAVFORMAT_BUILD >= CALC_FFMPEG_VERSION(57, 33, 100)
#  define CV_FFMPEG_CODECPAR
#  define CV_FFMPEG_CODEC_FIELD codecpar #The codec in version 4.1.1 is renamed to codecpar in version 6.1
#else
#  define CV_FFMPEG_CODEC_FIELD codec
#endif
```

The next step is to upgrade opencv4.7.0

```makefile
#Change the version, and then modify the compilation options for different versions.
#OPENCV4_VERSION = 4.5.4
OPENCV4_VERSION = 4.7.0
OPENCV4_SITE = $(call github,opencv,opencv,$(OPENCV4_VERSION))
OPENCV4_INSTALL_STAGING = YES
OPENCV4_LICENSE = Apache-2.0
OPENCV4_LICENSE_FILES = LICENSE
OPENCV4_CPE_ID_VENDOR = opencv
OPENCV4_CPE_ID_PRODUCT = opencv
OPENCV4_SUPPORTS_IN_SOURCE_BUILD = NO

# Disabled features (mostly because they are not available in Buildroot), but
# - eigen: OpenCV does not use it, not take any benefit from it.
OPENCV4_CONF_OPTS += \
        -DWITH_1394=OFF \
        -DWITH_CLP=OFF \
        -DWITH_EIGEN=OFF \
        -DWITH_GDAL=OFF \
        -DWITH_GPHOTO2=OFF \
        -DWITH_GSTREAMER_0_10=OFF \
        -DWITH_LAPACK=OFF \
        -DWITH_MATLAB=OFF \
        # -DWITH_OPENCL=OFF
        -DWITH_OPENCL=ON \  #Add OpenCL support
        -DWITH_OPENCL_SVM=OFF \
        -DWITH_OPENEXR=OFF \
        -DWITH_OPENNI2=OFF \
        -DWITH_OPENNI=OFF \
        -DWITH_UNICAP=OFF \
        -DWITH_VA=OFF \
        -DWITH_VA_INTEL=OFF \
        -DWITH_VTK=OFF \
        -DWITH_XINE=OFF
```