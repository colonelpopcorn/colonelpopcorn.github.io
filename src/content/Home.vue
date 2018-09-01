<template>
  <div class="home">
    <h1>User interfaces done right!</h1>
    <p>
      Hello and welcome to my portfolio page! Below you'll find various open-source projects and components from <a href="https://freecodecamp.org">Free Code Camp</a> excercises. I'm a UI developer, currently working for Aptean on a UI framework for internal use. I primarily work in JavaScript, but I also have experience in C#, PHP, Python, and C++ for Windows. I am very interested in learning more about computers and the various open-source tools available to me. Some of those open source or free tools that I've tinkered with in the past can be found further down the page.
    </p>
    <p>
      Over the years I've built a few open-source projects. These projects have solved a wide range of problems from process management in a repair depot to a simple microservice that sends email notifications. Some of them have no releases yet, and are very much a work in progress. If you'd like to contribute just go to the project and open an issue to work on.
    </p>
    <h1>Projects</h1>
    <hr />
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex v-for="(item, index) in projects" :key="index" xs4>
          <project-card :project-name="item.name" :project-desc="item.desc" :card-link="item.url" />
        </v-flex>
      </v-layout>
    </v-container>

    <h1 id="tools">Tools</h1>
    <hr />

    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex v-for="(item, index) in tools" :key="index" xs4>
          <icon-card :tech-name="item.name" :icon-src="item.icon" :card-link="item.link"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import IconCard from "../components/IconCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
export default Vue.extend({
  components: {
    "icon-card": IconCard,
    "project-card": ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          desc: "A configurable interface for starting desktop applications on Windows.",
          name: "RadDock",
          url: "https://github.com/colonelpopcorn/RadDock",
        }, {
          desc: "A content management system for process documents.",
          name: "Processaurus",
          url: "https://github.com/colonelpopcorn/Processaurus",
        }, {
          desc: "A generator for repeatable infrastructure as code.",
          name: "calf",
          url: "https://github.com/colonelpopcorn/calf",
        }, {
          desc: "A hardware test runner and suite for multiple operating systems.",
          name: "HardCandy",
          url: "https://github.com/colonelpopcorn/HardCandy",
        }, {
          desc: "A microservice for sending emails from applications.",
          name: "emailer",
          url: "https://github.com/colonelpopcorn/emailer",
        },
      ],
      tools: [
        {
          icon: "https://www.docker.com/sites/default/files/vertical.png",
          link: "https://www.docker.org/",
          name: "Docker",
        }, {
          icon: "https://wiki.jenkins.io/download/attachments/2916393/headshot.png",
          link: "https://jenkins.io/",
          name: "Jenkins",
        }, {
          icon: "https://www.proxmox.com/images/proxmox/Proxmox_standard_logo_stacked_hex_160x160.png",
          link: "https://www.proxmox.com/en/",
          name: "Proxmox",
        }, {
          icon: "https://www.mattermost.org/wp-content/uploads/2016/04/icon.png",
          link: "https://about.mattermost.com/",
          name: "Mattermost",
        }, {
          icon: "https://gitlab.com/gitlab-com/gitlab-artwork/raw/master/logo/logo-square.png",
          link: "https://about.gitlab.com/",
          name: "Gitlab",
        }, {
          icon: "https://static.techspot.com/images2/downloads/topdownload/2014/05/unity.png",
          link: "https://unity3d.com/",
          name: "Unity",
        }, {
          icon: "https://www.shareicon.net/data/128x128/2015/10/05/112472_development_512x512.png",
          link: "https://laravel.com/",
          name: "Laravel",
        }, {
          icon: "https://getcodify.com/wp-content/uploads/2016/07/asp.net-border.png",
          link: "https://www.asp.net/core/overview/aspnet-vnext",
          name: "ASP.NET Core",
        }, {
          icon: "https://ludu-assets.s3.amazonaws.com/lesson-icons/26/QLkrP5nrS6jIL99GMbV3",
          link: "http://phoenixframework.org/",
          name: "Phoenix",
        }, {
          icon: "https://raw.githubusercontent.com/vuejs/art/master/logo.png",
          link: "https://vuejs.org/",
          name: "Vue.js",
        }, {
          icon: "https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg",
          link: "https://v4-alpha.getbootstrap.com/",
          name: "Bootstrap",
        }, {
          icon: "https://i2.wp.com/nodejs-cloud.com/img/128px/expressjs.png",
          link: "https://expressjs.com/",
          name: "Express.js",
        }, {
          icon: "https://assets.gitlab-static.net/uploads/-/system/project/avatar/912096/hugo.png",
          link: "https://gohugo.io/",
          name: "Hugo",
        }, {
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/512px-Kotlin-logo.svg.png",
          link: "https://kotlinlang.org/",
          name: "Kotlin",
        },

      ],
    };
  },
});
</script>

