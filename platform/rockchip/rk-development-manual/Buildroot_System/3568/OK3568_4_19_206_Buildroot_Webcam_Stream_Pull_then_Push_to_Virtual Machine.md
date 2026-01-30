# OK3568 4.19.206 Buildroot Webcam Stream: Pull then Push to Virtual Machine

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.   
Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.  
The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Webcam Stream: Pull then Push to Virtual Machine

1. vi /etc/network/interfaces  
   ![](image-20240426165656-bkh5bn3.png)

2. Execute at the board gst-launch-1.0 rtspsrc location=rtsp://admin:haikang1105@192.168.1.45:554/test ! udpsink host=172.16.0.173 port=8554 sync=false push the video stream to the virtual machine.  

3. The virtual machine executes gst-launch-1.0 udpsrc uri=udp://172.16.0.173:8554 ! application/x-rtp, media=video, clock-rate=90000,encoding-name=H264, payload=96 ! rtph264depay ! h264parse ! avdec\_h264 ! videoconvert ! videoscale ! autovideosink sync=false just pull the stream.