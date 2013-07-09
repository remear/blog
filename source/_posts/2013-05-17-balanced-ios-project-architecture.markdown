---
layout: post
title: "balanced-ios Project Architecture"
date: 2013-08-09 13:26
comments: true
categories: ios balanced
draft: true
---

A few months ago I authored balanced-ios, an iOS framework for tokenizing credit cards and bank accounts for Balanced Payments. It's since seen great adoption and as more people use it, automated testing of pull requests have become imparative to the project's growth and stability. Recently I change the architecture of balanced-ios. This post will explain how it used to work, how it works now, and the reasons for the changes.

### Old balanced-ios Architecture (Framework)

{% blockquote Karl Stenerud, https://github.com/kstenerud/iOS-Universal-Framework iOS Universal Framework %}
Distributing libraries in a developer-friendly manner is tricky. You need to include not only the library itself, but also any public include files, resources, scripts etc.

Apple's solution to this problem is frameworks, which are basically folders that follow a standard structure to include everything required to use a library. Unfortunately, in disallowing dynamically linked libraries in iOS, Apple also removed static iOS framework creation functionality in Xcode.
{% endblockquote %}

Unfortunately Xcode currently provides no template to create a framework for iOS. Following several guides for manually making one proved unfruitful and I eventually stumbled upon [iOS-Universal-Framework](https://github.com/kstenerud/iOS-Universal-Framework) which, amazingly enough, just worked.

{% blockquote Karl Stenerud, https://github.com/kstenerud/iOS-Universal-Framework iOS Universal Framework %}
Xcode is still technically capable of building frameworks for iOS, and with a little tweaking it can be re-enabled.

Static frameworks are perfectly acceptable for packaging code intended for the app store. Despite appearances, it's just a static library at the core.
{% endblockquote %}

Fantastic! Getting set up with iOS-Universal-Framework was as simple as cloning the project, firing up the installer script, answering a few questions that already had sensible defaults, and entering a sudo password.


### The Problem(s)

#### Integration Barrier
Making use of iOS-Universal-Framework introduced a dependency for getting the project running on any given machine. Some developers struggled to understand what they needed to do to get the project to build. Simplicity was the goal and it became obvious this framework template requirement was stifling the project's growth.

#### Testability
As more people began to use the framework and submit pull requests to make balanced-ios even better, it became increasingly time consuming to pull down each fork and run the test suite to ensure non-breaking changes. Implementing automated testing became imparative. Travis-ci was a clear choice for performing automated tests for balanced-ios but certain challenges made the integration difficult. Travis-ci does not allow sudo access. The installation of iOS-Universal-Framework requires sudo to install the templates into the Xcode templates directory.

The decision was made to drop the framework design in favor of building an iOS universal static library. Unfortunately this change doesn't come without sacrifice. Instead of integration being a matter of dropping into an iOS project a single framework file that encapsulates all balanced-ios content, users of the pre-built project will need to drop the static library, balanced.a, and the header files into their project.

For the sake of attempting to not be more long-winded on the subject, I'll tone down the verbosity of all the trial and error performed.


### New balanced-ios Architecture (Static Library)

The decision was made to drop the framework design in favor of building an iOS universal static library. Unfortunately this change doesn't come without sacrifice. Static libraries are a bit different from frameworks.  While frameworks encapsulate all project files, including headers, static libraries do not. Users of the pre-built library are required to add the static library, balanced.a, and the header files into their project.

#### Add Static Framework Targets

Unfortunately a single static framework doesn't want to build correctly for more than the device selected in the scheme chooser. The resulting binary usually reports something like the following, missing the simulator architecture, which makes developing iOS applications difficult:

```
libbalanced.a: Mach-O universal binary with 2 architectures
libbalanced.a (for architecture armv7): current ar archive random library
libbalanced.a (for architecture cputype (12) cpusubtype (11)): current ar archive random library
```

For the sake of simplicity and clarity, balanced-ios has been set up with two individual Cocoa Touch Static Library targets, balanced-iphonesimulator and balanced-iphoneos.

balanced-iphonesimulator is configured as follows:

* Architectures - i386
* Build Active Architecture Only - No
* Valid Architectues - i386

Self-explanatory here. The simulator uses the i386 arch so it can run on a Mac machine. If you build only the active arch, it's likely to be x86_64, which doesn't end well.

balanced-iphoneos is configured as follows:

* Architectures - $(ARCHS_STANDARD_32_BIT)
* Build Active Architecture Only - No
* Valid Architectues - armv7 armv7s

Again, self-explanatory. Build for armv7 armv7s and not only the active arch, which is likely to be x86_64.


#### Combine Framework Targets

Combining the targets into a single universal library proved to be more difficult. This process required a new aggregate target with a run script phase. This is the script to build each of the static library targets into a single static library.

``` shell
rm -rf "${PROJECT_DIR}/balanced.a"
rm -rf "${PROJECT_DIR}/include"

xcodebuild -project Balanced.xcodeproj -scheme balanced-iphonesimulator -sdk iphonesimulator6.1 "ARCHS=i386" "VALID_ARCHS=i386" build > /dev/null

xcodebuild -project Balanced.xcodeproj -scheme balanced-iphoneos -sdk iphoneos6.1 "ARCHS=armv6 armv7 armv7s" build > /dev/null

lipo -create "${BUILT_PRODUCTS_DIR}/../${CONFIGURATION}-iphonesimulator/libbalanced-iphonesimulator.a" \
"${BUILT_PRODUCTS_DIR}/../${CONFIGURATION}-iphoneos/libbalanced-iphoneos.a" -output \
"${PROJECT_DIR}/balanced.a"

cp -R "${BUILT_PRODUCTS_DIR}/../${CONFIGURATION}-iphoneos/include" "${PROJECT_DIR}/include"

mv "${PROJECT_DIR}/include/balanced-iphoneos" "${PROJECT_DIR}/include/balanced"
```

The script does the following:

* <i class="icon-angle-right"></i> Remove previous build artifacts
* <i class="icon-angle-right"></i> Build the balanced-iphonesimulator target with the i386 architecture
* <i class="icon-angle-right"></i> Build the balaced-iphoneos target with the armv6, armv7, and armv7s architectures
* <i class="icon-angle-right"></i> Use lipo to combine both static frameworks into one universal framework
* <i class="icon-angle-right"></i> Move the header includes to the project folder

This results in the desired Mach-O universal binary.

```
balanced.a: Mach-O universal binary with 3 architectures
balanced.a (for architecture i386): current ar archive random library
balanced.a (for architecture armv7): current ar archive random library
balanced.a (for architecture cputype (12) cpusubtype (11)): current ar archive random library
```

### Conclusion

While frameworks are a great tool, only static libraries are supported on iOS. Using a custom framework template proved to be a significant barrier for balanced-ios contributors and automated testing. Switching to building a universal static library came at a small cost but overall provided a much better development and testing experience.