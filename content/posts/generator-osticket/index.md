---
title: "colonelpopcorn/generator-osticket"
img: yeoman.png
date: 2017-02-25T00:00:00Z
draft: false
---

I used to work on an osticket installation at a computer repair depot. We used it to keep track of engineering work to support the depot. Unfortuneately, we modified a copy of the osTicket source code instead of using the plugin system. While this arrangement gave us incredible control over the software, it made upgrading an install pretty difficult.

I tried to begin the process of moving our code over to a plugin system, but found the lack of boilerplate/documentation hard to live with. This was also around the time I was trying to encourage the team I was working with to use more JavaScript over PHP. Honestly, it was naive of me to think that new and shiny JavaScript was "better" than PHP for the tasks we were doing, but I wanted us to do more AJAX and less page-refreshing stuff because it was almost industry standard at that point (around 2014-2015).

I eventually found a use for that JavaScript though, and made a plugin boilerplate generator so we could at least make use of that system. However, I left that team shortly before I started work on this in earnest so I'm not sure it ever got used. It does have the honor of being my first open-source JavaScript project, though!