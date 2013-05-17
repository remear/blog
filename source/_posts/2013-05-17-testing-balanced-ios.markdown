---
layout: post
title: "Testing balanced-ios"
date: 2013-05-17 13:26
comments: true
categories: ios balanced
---

A few months ago I authored balanced-ios, an iOS framework for tokenizing credit cards and bank accounts for Balanced Payments. It's since seen great adoption and as more people use it, automated testing of pull requests have become imparative to the project's growth and stability.

### balanced-ios Architecture in a Nutshell

Open source software is great. The easier it is to integrate an open source solution into my project, the happier I am. I wanted to make balanced-ios incredibly simple to install. Having worked with and written Mac OS X frameworks in the past, I figured it would be a trivial task to build balanced-ios as a drop-in framework. Yes, I did find out it was me who was mistaken, about a great many things.

I fired up Xcode and looked for an iOS static framework template but found none. So I headed over to google to figure out if it was possible. The results weren't promissing. We'll just leave it at that. I then came accross an open source project, [iOS-Universal-Framework](https://github.com/kstenerud/iOS-Universal-Framework), explaining the issue.

{% blockquote Karl Stenerud, https://github.com/kstenerud/iOS-Universal-Framework iOS Universal Framework %}
Distributing libraries in a developer-friendly manner is tricky. You need to include not only the library itself, but also any public include files, resources, scripts etc.

Apple's solution to this problem is frameworks, which are basically folders that follow a standard structure to include everything required to use a library. Unfortunately, in disallowing dynamically linked libraries in iOS, Apple also removed static iOS framework creation functionality in XCode.
{% endblockquote %}

Frameworks are a fantastic tool that is completely absent from iOS development. Perhaps developers were once able to create static frameworks on iOS but no longer can, I'm still not sure on that. If that's indeed the case, uncool, Apple. Bad form. 

{% blockquote Karl Stenerud, https://github.com/kstenerud/iOS-Universal-Framework iOS Universal Framework %}
Xcode is still technically capable of building frameworks for iOS, and with a little tweaking it can be re-enabled.

Static frameworks are perfectly acceptable for packaging code intended for the app store. Despite appearances, it's just a static library at the core.
{% endblockquote %}

Fantastic! I cloned the proejct and fired up the installer. It required sudo access to install the templates into my Xcode application directory. So I entered in my password and bam, I was in business.


### The Problem(s)

Making use of iOS-Universal-Framework introduced a dependency for getting the project running on any given machine. Some developers found it difficult to understand what they needed to do to get the project to build. I usually try my best to avoid any such dependencies for this very reason and was disappointed to see people have difficulties getting it to build. I was aiming for simplicity and I felt I was unable to achieve it in this project, despite my best efforts.

As more people began to use the framework and submit pull requests to make balanced-ios even better, it became extremely time consuming to pull down each fork and manually run the tests to make sure everything passed and retest again after attempting a local merge. Obviously I needed to get automated testing implemented. Travis-ci was an obvious choice. I added in the configurations and worked through each issue I encountered until it happened. Travis-ci does not allow sudo access and the installation of iOS-Universal-Framework required it to install the templates into the Xocde application directory. I realized I had reached a dead end. I had to come up with some kind of alternative or give up any hope of automated testing with travis-ci.


### Static Library

I decided to drop the framework design in favor of building a universal iOS static library. Unfortunately this change comes at a small sacrifice. Instead of being a matter of dropping into an iOS project a single framework file that encapsulates all balanced-ios content, users of the pre-built project will need to drop the static library, balanced.a, and the header files into their project. This change removed the requirement for iOS-Universal-Framework which opened the door for testing with travis-ci.

{-% img /images/reactions/warp_gate.gif %}