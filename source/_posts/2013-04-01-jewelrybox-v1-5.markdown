---
layout: post
title: "JewelryBox v1.5"
date: 2013-04-01 07:51
comments: true
categories: jewelrybox osx
---


No, this is not an April Fools' joke. I'm pleased to announce the immediate availability of JewelryBox v1.5. This brings improved compatability with RVM 1.19.x, which contains many major and important changes. Use the in-app updater, or grab it from [http://jewelrybox.unfiniti.com](http://jewelrybox.unfiniti.com)

Change log:

    - Compatability with newer RVM versions
    - Added RVM notes view
    - Added binary options to ruby installation view
    - Added verify download options to ruby installation view
    - Added ability to upgrade rubies
    - Added ability to clean gemsets
    - Added ability to clean links
    - Fixed manually specified compiler flag application
    - Fixed crash on launch and crash when no gcc is found
    - Fixed grey screen hang when multiple "logs" are found in ruby installation output
    - Fixed "About JewelryBox" menu item
    - Fixed crash on installing YAML step
    - Fixed RVM usage graph calculations
    - Fixed RVM usage graph coloring
    - Fixed typo in environment synchronization notification
    - Improved feedback while removing rubies
    - Silence cURL output when downloading rubies
    - Silence dot output during ruby installation


So what happened to v1.4.2?

I was finishing up the final touches for 1.4.2 and the RVM team started to introduce a lot of major changes that required updates to JewelryBox. Therefore, I thought it best to delay releasing until the RVM changes became stable and JewelryBox could be updated accordingly.

Thanks to everyone for your patience and support on the JewelryBox project.

Continue reading below for a detailed description of the major changes in v1.5.

<br>
<br>
<br>

####Compatability with newer RVM versions
JewelryBox v1.5 requires RVM 1.19.1 or newer.


####Added RVM notes view
The "Release Notes" view showed information from RVM requirements. RVM notes information was given its own area and named "Release Notes". RVM requirements information is now located under "Requirements" via the Dashboard view.

####Added binary options to ruby installation view
RVM supports precompiled binary installations on some operating systems and for specific ruby versions. It will attempt to install binary releases by default. Options were added to allow installing only binary releases or to disable attempts to install binary releases.

####Added verify download options to ruby installation view
RVM attempts to verify checksums for downloads when available. Some downloads don't have checksums available for various reasons. For added security, RVM will halt installation if checksums cannot be verified. Options have been added to JewelryBox to allow different levels and temporary overrides of checksum security.

####Added ability to upgrade rubies
You can now upgrade ruby versions from the manage rubies interface. NOTE: The target ruby for the upgrade must already be installed. The upgrade will migrate everything to the target ruby and remove the old ruby.

####Added ability to clean gemsets
Gemsets are now cleanable from the "Disk Usage" area.

####Added ability to clean links
Binary links are now cleanable from the "Disk Usage" area.

####Fixed manually specified compiler flag application
Compile flags entered in the text field on the ruby installation options view were not being passed to the ruby installation method. This is now fixed. "export" is NOT prefixed.

####Fixed crash on launch and crash when no gcc is found
When gcc was not detected, i.e. "command not found", an index out of bounds error was thrown causing an application crash. This has been fixed.

####Fixed grey screen hang when multiple "logs" are found in ruby installation output
A logic error for detecting log file paths in the output caused a crash. Not every occurrence of "Please read" is followed by a log path. The logic failed when it says things like "Please read 'rvm mount' ..." This should now be fixed.

####Fixed "About JewelryBox" menu item
View indexes weren't updated. Oops.

####Fixed crash on installing YAML step
This was caused by one or both of the log parser logic error or unexpected output by verify downloads issues.

####Fixed RVM usage graph calculations
Graph drawing calculations were incorrect resulting in incorrect usage representations in the meter graphic.

####Fixed RVM usage graph coloring
Graph coloring was not being applied to the correct keys.

####Fixed typo in environment synchronization notification
"Environment" was spelled incorrectly.

####Improved feedback while removing rubies
Improved interface interaction while removing rubies.

####Silence cURL output when downloading rubies
cURL output was extremely verbose while downloading archives. JewelryBox now quiets CURL output to make it easier to read installation output.

####Silence dot output during ruby installation
RVM now uses dots to indicate progress during the ruby installation process. JewelryBox now turns down the dot frequency to make it easier to read installation output.