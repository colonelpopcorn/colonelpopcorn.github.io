---
title: "colonelpopcorn/redirector"
date: 2023-10-18T15:41:43-04:00
img: cover.jpeg
draft: false
---
## [Redirector](https://gitlab.com/colonelpopcorn/redirector)

I began this project when I realized that I couldn\'t redirect to another URL with Traefik. I wanted my users to go to `plex.mydomain.net` and end up at `media.mydomain.net` instead. Turns out you can't do that with typical HTTP server configurations, and Traefik was no different. I decided it would be easy enough to build my own solution using a minimal Node.js web server. My solution to the problem was to forward all requests that ended in a 404 HTTP status code to a container. Said container then would lookup a URL in a configuration map based on the domain that threw the 404. Finally, the looked up URL was injected into an HTML template with a deferred `script` tag that finally redirected the user to the looked up URL. All this with a little bit of animation to provide the user some feedback.

I had a few more requirements before I got started on the project. I knew I didn't want the maintenance headache inherent in any `express.js` project. Dependabot is great, but its ubiquity and the ubiquity of Node security research mean I would have no rest from running `npm audit`. I found `urest` which promised a zero dependency framework with some amount of `express.js` compatibility. I also knew I wanted to be able to update the config without having to rebuild the docker image.

Ultimately, I ran the project for a very limited time. My code to persist the configuration didn't work and any container restarts caused all configuration to be lost. In the future, I'm going to use Traefik's 404 handling and a static page to achieve the same thing. It will require a rebuild of the page, but it's an easy enough to automate a template and an SCP command to put the file where it needs to go.
