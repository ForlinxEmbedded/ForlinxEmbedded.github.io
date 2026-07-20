# OK3588 5.10.66 Buildroot Fixed HDMI Resolution

<font style="color:red;"> Note: All modifications are made in the file/OK3588-linux-source/kernel/drivers/gpu/drm/bridge/synopsys/dw-hdmi-qp.c</font>

## 1. Choose HDMI as the screen in U-Boot;

## 2. Modify DW-HDMI. C films;
Add <font style="color:red;">edid = NULL;</font>

```shell
static int dw_hdmi_connector_get_modes(struct drm_connector *connector)
{
struct dw_hdmi *hdmi = container_of(connector, struct dw_hdmi,
     connector);
struct hdr_static_metadata *metedata =
&connector->hdr_sink_metadata.hdmi_type1;
struct edid *edid;
struct drm_display_mode *mode;
struct drm_display_info *info = &connector->display_info;
int i, ret = 0;

memset(metedata, 0, sizeof(*metedata));
if (!hdmi->ddc)
return 0;

edid = drm_get_edid(connector, hdmi->ddc);
edid = NULL   //Add here
if (edid) {
dev_dbg(hdmi->dev, "got edid: width[%d] x height[%d]\n",
edid->width_cm, edid->height_cm);

hdmi->support_hdmi = drm_detect_hdmi_monitor(edid);
hdmi->sink_has_audio = drm_detect_monitor_audio(edid);
drm_connector_update_edid_property(connector, edid);
cec_notifier_set_phys_addr_from_edid(hdmi->cec_notifier, edid);
ret = drm_add_edid_modes(connector, edid);
dw_hdmi_update_hdr_property(connector);
kfree(edid);
} else {
hdmi->support_hdmi = true;
hdmi->sink_has_audio = true;

for (i = 0; i < ARRAY_SIZE(dw_hdmi_default_modes); i++) {
const struct drm_display_mode *ptr =
&dw_hdmi_default_modes[i];

mode = drm_mode_duplicate(connector->dev, ptr);
if (mode) {
if (!i) {
mode->type = DRM_MODE_TYPE_PREFERRED;
mode->picture_aspect_ratio =
HDMI_PICTURE_ASPECT_NONE;
}
drm_mode_probed_add(connector, mode);
ret++;
}
}
info->edid_hdmi_dc_modes = 0;
info->hdmi.y420_dc_modes = 0;
info->color_formats = 0;

dev_info(hdmi->dev, "failed to get edid\n");
}
dw_hdmi_check_output_type_changed(hdmi);

return ret;
}
```

## 3. Fixed resolution
In the file `OK3588-linux-source/kernel/drivers/gpu/drm/bridge/synopsys/dw-hdmi-qp.c`:

Locate `static const struct drm_display_mode dw_hdmi_default_modes[] = {};` and comment out all existing resolutions within this array. Other resolution definitions can be found in the file `OK3588-linux-source/kernel/drivers/gpu/drm/drm_edid.c`. Select the desired mode(s) from there.

Add the chosen mode(s) into the `static const struct drm_display_mode dw_hdmi_default_modes[] = {};` array in the `dw-hdmi-qp.c` file.

```shell
static const struct drm_display_mode dw_hdmi_default_modes[] = {
/* 108 - 1920x1080@60Hz */
{ DRM_MODE("1920x1080", DRM_MODE_TYPE_DRIVER, 148500, 1920, 2008,
2052, 2200, 0, 1080, 1084, 1089, 1125, 0,
DRM_MODE_FLAG_NHSYNC | DRM_MODE_FLAG_NVSYNC), 
.vrefresh = 60, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_64_27, }, 
/* 
4 - 1280x720@60Hz 16:9 
{ DRM_MODE("1280x720", DRM_MODE_TYPE_DRIVER, 74250, 1280, 1390,
   1430, 1650, 0, 720, 725, 730, 750, 0,
   DRM_MODE_FLAG_PHSYNC | DRM_MODE_FLAG_PVSYNC),
  .vrefresh = 60, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_16_9, },
 16 - 1920x1080@60Hz 16:9 
{ DRM_MODE("1920x1080", DRM_MODE_TYPE_DRIVER, 148500, 1920, 2008,
   2052, 2200, 0, 1080, 1084, 1089, 1125, 0,
   DRM_MODE_FLAG_PHSYNC | DRM_MODE_FLAG_PVSYNC),
  .vrefresh = 60, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_16_9, },
 31 - 1920x1080@50Hz 16:9 
{ DRM_MODE("1920x1080", DRM_MODE_TYPE_DRIVER, 148500, 1920, 2448,
   2492, 2640, 0, 1080, 1084, 1089, 1125, 0,
   DRM_MODE_FLAG_PHSYNC | DRM_MODE_FLAG_PVSYNC),
  .vrefresh = 50, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_16_9, },
 19 - 1280x720@50Hz 16:9 
{ DRM_MODE("1280x720", DRM_MODE_TYPE_DRIVER, 74250, 1280, 1720,
   1760, 1980, 0, 720, 725, 730, 750, 0,
   DRM_MODE_FLAG_PHSYNC | DRM_MODE_FLAG_PVSYNC),
  .vrefresh = 50, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_16_9, },
 0x10 - 1024x768@60Hz 
{ DRM_MODE("1024x768", DRM_MODE_TYPE_DRIVER, 65000, 1024, 1048,
   1184, 1344, 0,  768, 771, 777, 806, 0,
   DRM_MODE_FLAG_NHSYNC | DRM_MODE_FLAG_NVSYNC) },
 17 - 720x576@50Hz 4:3 
{ DRM_MODE("720x576", DRM_MODE_TYPE_DRIVER, 27000, 720, 732,
   796, 864, 0, 576, 581, 586, 625, 0,
   DRM_MODE_FLAG_NHSYNC | DRM_MODE_FLAG_NVSYNC),
  .vrefresh = 50, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_4_3, },
 2 - 720x480@60Hz 4:3 
{ DRM_MODE("720x480", DRM_MODE_TYPE_DRIVER, 27000, 720, 736,
   798, 858, 0, 480, 489, 495, 525, 0,
   DRM_MODE_FLAG_NHSYNC | DRM_MODE_FLAG_NVSYNC),
  .vrefresh = 60, .picture_aspect_ratio = HDMI_PICTURE_ASPECT_4_3, },
*/   //Comment out, leaving only the desired resolution
};
```

## 4. Compile the Kernel separately

Use `./build.sh kernel` to compile the kernel individually, which will generate the `/kernel/boot.img` file. Flash the `boot.img` file separately.

