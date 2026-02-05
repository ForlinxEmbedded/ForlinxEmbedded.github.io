# OK3568 4.19.206 Adding Fortran Compilers

Document classification: □ Top secret □ Secret □ Internal information ■ Open

## Copyright

The copyright of this manual belongs to Baoding Folinx Embedded Technology Co., Ltd. Without the written permission of our company, no organizations or individuals have the right to copy, distribute, or reproduce any part of this manual in any form, and violators will be held legally responsible.

Forlinx adheres to copyrights of all graphics and texts used in all publications in original or license-free forms.

The drivers and utilities used for the components are subject to the copyrights of the respective manufacturers. The license conditions of the respective manufacturer are to be adhered to. Related license expenses for the operating system and applications should be calculated/declared separately by the related party or its representatives.

## Adding Fortran Compilers

**I. Buildroot Configuration**

1. Open the graphical configuration interface by going to/3568/OK3568-linux-source/buildroot/output/OK3568;

2. After entering the graphical configuration interface, enter/search fortran and press 1 on the keyboard.

![Image](./images/OK3568_4_19_206_Adding_Fortran_Compilers/1722820748129_bd297689_dd0e_4756_b5a7_1bf011f099b3.png)![Image](./images/OK3568_4_19_206_Adding_Fortran_Compilers/1722820782207_5a4d1f6a_9125_433c_99f5_ab18ade011b0.png)

3. Press Y to select the enable fortran support and save it.

4. Go back to the/3568/OK3568-linux-source path to compile the file system. Select n when compiling.

Go after compiling.

```plain
/home/forlinx/3568/OK3568-linux-source/buildroot/output/OK3568/host/bin
```

Check for aarch64-linux-gfortran under the path.

**II. Possible Problems**

The aarch64-linux-gfortran is not generated.

```plain
/home/forlinx/3568/OK3568-linux-source/buildroot/output/OK3568/build
```

Delete host-gcc-final-9.3.0 in the path.

![Image](./images/OK3568_4_19_206_Adding_Fortran_Compilers/1722820798304_ebb622d7_e554_43da_becb_4613c7c57588.png)

Recompile buildroot.

The final generated compiler is:

aarch64-linux-gfortran