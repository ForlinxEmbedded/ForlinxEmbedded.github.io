# OK3568 4.19.206 Implementing Logo Animation Effects

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Revision History

| Date| Version| Revision History|
|:----------:|:----------:|----------|
| 04/08/2022| V1.0| Initial Version|

## Implementing Logo Animation Effects

Prepare Files: A sequence of images for the boot animation.

If the format is PNG:

pngtopnm logo.png > logo.pnm	converted to pnm

IIf the format is BMP:

bmptopnm logo.bmp > logo.pnm	converted to pnm

Then execute:

pnmquant 224 logo.pnm > logo224.pnm

pnmtoplainpnm logo224.pnm > logo\_linux\_clut224.ppm

to generate the required PPM format files.

Copy the generated PPM file to the directory OK3568-linux-source/kernel/drivers/video/logo/

Rename it to end with "\_clut224.ppm".

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646689807-dbeb0b99-87f7-4e06-9c69-da9ff4de6e7e.png)

Modify Makefile.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646690063-31651eed-4a11-4b95-82fb-35d101e28b94.png)

Modify logo.c.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646690353-186ed452-c48f-45cc-b951-d392145508c0.png)

Modify OK3568-linux-source/kernel/include/linux/linux\_logo.h.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646690620-509927be-67ed-42ce-88ff-d47084a858c7.png)

Modify OK3568-linux-source/arch/arm64/configs/OK3568-C-linux\_defconfig to enable the kernel logo.

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646690837-fdea6a2f-42ac-4598-9f0f-b7fc4b31091c.png)

diff --git a/arch/arm64/configs/OK3568-C-linux\_defconfig b/arch/arm64/configs/OK3568-C-linux\_defconfig

index 97d46ceff..d5af9f21d 100644

--- a/arch/arm64/configs/OK3568-C-linux\_defconfig

+++ b/arch/arm64/configs/OK3568-C-linux\_defconfig

@@ -590,3 +590,45 @@ CONFIG\_RCU\_CPU\_STALL\_TIMEOUT=60

CONFIG\_FUNCTION\_TRACER=y

CONFIG\_BLK\_DEV\_IO\_TRACE=y

CONFIG\_LKDTM=y

\+

+#

+# Console display driver support

+#

+CONFIG\_FONT\_8x8=n

+CONFIG\_VGA\_CONSOLE=y

+CONFIG\_DUMMY\_CONSOLE=y

+CONFIG\_DUMMY\_CONSOLE\_COLUMNS=80

+CONFIG\_DUMMY\_CONSOLE\_ROWS=25

+CONFIG\_FRAMEBUFFER\_CONSOLE=y

+CONFIG\_FRAMEBUFFER\_CONSOLE\_DETECT\_PRIMARY=y

+# CONFIG\_FRAMEBUFFER\_CONSOLE\_ROTATION is not set

+# CONFIG\_FRAMEBUFFER\_CONSOLE\_DEFERRED\_TAKEOVER is not set

+CONFIG\_LOGO=y

+CONFIG\_LOGO\_LINUX\_MONO=n

+CONFIG\_LOGO\_LINUX\_VGA16=n

+CONFIG\_LOGO\_LINUX\_CLUT224=y

+CONFIG\_SOUND=y

+CONFIG\_SND=y

+CONFIG\_SND\_TIMER=y

+CONFIG\_SND\_PCM=y

+CONFIG\_SND\_PCM\_ELD=y

+CONFIG\_SND\_PCM\_IEC958=y

+CONFIG\_SND\_SEQ\_DEVICE=y

+CONFIG\_SND\_COMPRESS\_OFFLOAD=y

+CONFIG\_SND\_JACK=y

+CONFIG\_SND\_JACK\_INPUT\_DEV=y

+# CONFIG\_SND\_OSSEMUL is not set

+CONFIG\_SND\_PCM\_TIMER=y

+CONFIG\_SND\_HRTIMER=y

+CONFIG\_SND\_DYNAMIC\_MINORS=y

+CONFIG\_SND\_MAX\_CARDS=32

+# CONFIG\_SND\_SUPPORT\_OLD\_API is not set

+CONFIG\_SND\_PROC\_FS=y

+CONFIG\_SND\_VERBOSE\_PROCFS=y

+# CONFIG\_SND\_VERBOSE\_PRINTK is not set

+# CONFIG\_SND\_DEBUG is not set

+CONFIG\_SND\_DMA\_SGBUF=y

+CONFIG\_SND\_SEQUENCER=y

+CONFIG\_SND\_SEQ\_DUMMY=y

+CONFIG\_SND\_SEQ\_HRTIMER\_DEFAULT=y

+CONFIG\_SND\_DRIVERS=y

Modify OK3568-linux-source/kernel/drivers/video/fbdev/core/fbcon.c

OK3568-linux-source/kernel/drivers/video/fbdev/core/fbmem.c

Adjust logo position and continuous display

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646691041-b1ec253e-4571-410c-a55e-b269007c994b.png)

diff --git a/drivers/video/fbdev/core/fbcon.c b/drivers/video/fbdev/core/fbcon.c

index bf7959fdf..2607ac9cb 100644

--- a/drivers/video/fbdev/core/fbcon.c

+++ b/drivers/video/fbdev/core/fbcon.c

@@ -569,6 +569,7 @@ static void fbcon\_prepare\_logo(struct vc\_data \*vc, struct fb\_info \*info,

        if (fb_get_color_depth(&info->var, &info->fix) == 1)
    
                erase &= ~0x400;
    
        logo_height = fb_prepare_logo(info, ops->rotate);

+       logo_height += (info->var.yres / 2) - (logo_height / 2);
            
        logo_lines = DIV_ROUND_UP(logo_height, vc->vc_font.height);
            
        q = (unsigned short *) (vc->vc_origin +
            
        
                                vc->vc_size_row * rows);

@@ -2037,6 +2038,8 @@ static int fbcon\_resize(struct vc\_data \*vc, unsigned int width,

        return 0;

}

+extern int fb\_get\_logo(struct fb\_info \*info, int rotate);

\+

static int fbcon\_switch(struct vc\_data \*vc)

{

        struct fb_info *info, *old_info = NULL;

@@ -2158,7 +2161,14 @@ static int fbcon\_switch(struct vc\_data \*vc)

                logo_shown = fg_console;
    
                /* This is protected above by initmem_freed */

-               fb_show_logo(info, ops->rotate);

+               //fb_show_logo(info, ops->rotate);

+#if 1

+               for(i = 0; i < 25; i++){

+                       fb_get_logo(info, i);

+                       fb_show_logo(info, ops->rotate);

+                       msleep(50);//Sleep 50 ms as the switching interval for displaying pictures

+               }

+#endif

                update_region(vc,
    
                              vc->vc_origin + vc->vc_size_row * vc->vc_top,
    
                              vc->vc_size_row * (vc->vc_bottom -

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646691233-d2dc9c41-0ba3-4221-aa03-6af64936d8df.png)

diff --git a/drivers/video/fbdev/core/fbmem.c b/drivers/video/fbdev/core/fbmem.c

index 7a70e7b80..63cfad4c0 100644

--- a/drivers/video/fbdev/core/fbmem.c

+++ b/drivers/video/fbdev/core/fbmem.c

@@ -509,10 +509,10 @@ static int fb\_show\_logo\_line(struct fb\_info \*info, int rotate,

                fb_set_logo(info, logo, logo_new, fb_logo.depth);
    
        }

-       image.dx = 0;

-       image.dy = y;
            
        image.width = logo->width;
            
        image.height = logo->height;

+       image.dx = (info->var.xres / 2) - (logo->width / 2);

+       image.dy = (info->var.yres / 2) - (logo->height / 2);


​      
​        if (rotate) {
​      
                logo_rotate = kmalloc_array(logo->width, logo->height,

@@ -681,12 +681,25 @@ int fb\_show\_logo(struct fb\_info \*info, int rotate)

        return y;

}

\+

+int fb\_get\_logo(struct fb\_info \*info, int num)

+{

+       int depth = fb_get_color_depth(&info->var, &info->fix);

+       depth |= num << 16;

+       fb_logo.logo = fb_find_logo(depth);

+       if(!fb_logo.logo) {

+               return -1;

+       }

+       return 0;

+}

#else

int fb\_prepare\_logo(struct fb\_info \*info, int rotate) { return 0; }

int fb\_show\_logo(struct fb\_info \*info, int rotate) { return 0; }

+int fb\_get\_logo(struct fb\_info \*info, int rotate) { return 0; }

#endif /\* CONFIG\_LOGO \*/

EXPORT\_SYMBOL(fb\_prepare\_logo);

EXPORT\_SYMBOL(fb\_show\_logo);

+EXPORT\_SYMBOL(fb\_get\_logo);

static void \*fb\_seq\_start(struct seq\_file \*m, loff\_t \*pos)

{

Modify Ok3568-linux-source/kernel/drivers/video/fbdev/core/bitblit.c and remove the cursor

![](https://cdn.nlark.com/yuque/0/2024/png/45781369/1719646691442-1f4a1b44-48bf-44f6-a5e3-a9f8f43b00ae.png)

iff --git a/drivers/video/fbdev/core/bitblit.c b/drivers/video/fbdev/core/bitblit.c

index 436365efa..e8e874653 100644

--- a/drivers/video/fbdev/core/bitblit.c

+++ b/drivers/video/fbdev/core/bitblit.c

@@ -373,7 +373,8 @@ static void bit\_cursor(struct vc\_data \*vc, struct fb\_info \*info, int mode,

        if (info->fbops->fb_cursor)
    
                err = info->fbops->fb_cursor(info, &cursor);

-       if (err)

+       //if (err)

+       if (0)
            
        
                soft_cursor(info, &cursor);


​        ops->cursor_reset = 0;

Refer to [https://blog.csdn.net/qq\_37596943/article/details/127976078](https://blog.csdn.net/qq_37596943/article/details/127976078)