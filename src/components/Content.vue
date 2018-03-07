<template>
<div id='content'>
	<p>
    Hello and welcome to my portfolio page! Below you'll find various open-source projects and components from <a href='https://freecodecamp.org'>Free Code Camp</a> excercises. I'm a UI developer, currently working for Aptean on a UI framework for internal use. I primarily work in JavaScript, but I also have experience in C#, PHP, Python, and C++ for Windows. I am very interested in learning more about computers and the various open-source tools available to me.
  </p>
  <p>
    Over the years I've built a few open-source projects. These projects have solved a wide range of problems from process management in a repair depot to a simple microservice that sends email notifications. Some of them have no releases yet, and are very much a work in progress. If you'd like to contribute just go to the project and open an issue to work on.
  </p>
  <h1>Projects</h1>
  <hr />

	<p>
    Some of the open source tools that I enjoy working with are:
  </p>
  <h1>Tools</h1>
    <hr />
    <div class='row'>
      <icon-card v-for='(item, index) in tools' :key='index' :tech-name='item.name' :icon-src='item.icon' :card-link='item.link'/>
    </div>
</div>
</template>

<script>
import IconCard from './Cards/IconCard'

export default {
  components: {
    'icon-card': IconCard
  },
  data () {
    return {
      tools: [
        { 'name': 'Docker', 'icon': 'https://www.docker.com/sites/default/files/vertical.png', 'link': 'https://www.docker.org/' },
        { 'name': 'Jenkins', 'icon': 'https://wiki.jenkins.io/download/attachments/2916393/headshot.png', 'link': 'https://jenkins.io/' },
        { 'name': 'Proxmox', 'icon': 'https://www.proxmox.com/images/proxmox/Proxmox_standard_logo_stacked_hex_160x160.png', 'link': 'https://www.proxmox.com/en/' },
        { 'name': 'Mattermost', 'icon': 'https://www.mattermost.org/wp-content/uploads/2016/04/icon.png', 'link': 'https://about.mattermost.com/' },
        { 'name': 'Gitlab', 'icon': 'https://gitlab.com/gitlab-com/gitlab-artwork/raw/master/logo/logo-square.png', 'link': 'https://about.gitlab.com/' },
        { 'name': 'Unity', 'icon': 'https://static.techspot.com/images2/downloads/topdownload/2014/05/unity.png', 'link': 'https://unity3d.com/' },
        { 'name': 'Laravel', 'icon': 'https://www.shareicon.net/data/128x128/2015/10/05/112472_development_512x512.png', 'link': 'https://laravel.com/' },
        { 'name': 'ASP.NET Core', 'icon': 'https://chocolatey.org/content/packageimages/aspnetcore-runtimepackagestore.2.0.3.png', 'link': 'https://www.asp.net/core/overview/aspnet-vnext' },
        { 'name': 'Phoenix', 'icon': 'https://ludu-assets.s3.amazonaws.com/lesson-icons/26/QLkrP5nrS6jIL99GMbV3', 'link': 'http://phoenixframework.org/' },
        { 'name': 'Vue.js', 'icon': 'https://raw.githubusercontent.com/vuejs/art/master/logo.png', 'link': 'https://vuejs.org/' },
        { 'name': 'Bootstrap', 'icon': 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg', 'link': 'https://v4-alpha.getbootstrap.com/' },
        { 'name': 'Express.js', 'icon': 'https://i2.wp.com/nodejs-cloud.com/img/128px/expressjs.png', 'link': 'https://expressjs.com/' },
        { 'name': 'Hugo', 'icon': 'https://assets.gitlab-static.net/uploads/-/system/project/avatar/912096/hugo.png', 'link': 'https://gohugo.io/' },
        { 'name': 'Kotlin', 'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/512px-Kotlin-logo.svg.png', 'link': 'https://kotlinlang.org/' }
      ],
      projects: [
        { 'name': '', 'url': '' }
      ]
    }
  }
}

</script>

<style>

</style>

