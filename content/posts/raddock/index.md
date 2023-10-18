---
layout: post
title: "colonelpopcorn/RadDock"
date: 2021-03-23T15:20:04Z
img: raddock.png
draft: false
---
## [RadDock](https://gitlab.com/colonelpopcorn/RadDock)

[![Build Status](https://gitlab.com/colonelpopcorn/RadDock/badges/master/pipeline.svg)](https://gitlab.com/colonelpopcorn/RadDock/-/pipelines) 

RadDock is a program I made while working as a computer repair technician for a company that specializes in point-of-sale computers. My original idea was to make it easy for users to find common functions that they might use once a day, but not all the time. This way they wouldn't have to minimize whatever they were working on to find their application. The idea was mainly inspired by browser bookmarks, but for everything instead of just websites. Normally, bookmarks and desktop shortcuts would solve for that use case. However, in the department I lead, there was an ingrained way of doing things that was harder to change than just writing this software. 

This particular version is a more advanced version than the one that I originally developed. I originally hard-coded the UI and buttons, but this new version builds its UI from an XML configuration file. I created a very simple XML parser using MSDN documentation and persistence, and I think it works quite nicely for my use case. However, I don't think that I looked hard enough for an XML parsing lib before I set out to write it myself. It's really just a small wrapper for the Microsoft provided XML api.

I pitched this particular piece of software to my boss's boss as a showcase of my programming ability. It worked, and I eventually got recruited by the plant's engineering org to start work on various web applications with another upstart developer who learned the LAMP stack. On the web apps team I implemented some osTicket modifications that helped to organize engineering support requests. I learned a lot about jQuery and PHP.

Eventually, I got back to work on C#/WinForms applications when I was transferred to the hardware test software team. This team focused on the program that orchestrated hardware tests for each Point-of-Sale system we repaired. There was a great deal of interconnected-ness between the test orchestrator our resident ERP client, and I was often frustrated because we weren't able to even look at the code of the ERP client to see what was going on. Still, I learned a very little bit about C and C++, lot's about hardware, and a good bit about the power of networked programs.
