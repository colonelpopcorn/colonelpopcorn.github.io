<template>
<div class="container" style="padding:100px;">
  <div class="row">
    <div class="center">
      <h1 class="type-text">Get more <vue-typer
      :text='this.skillsArray'
      :repeat='Infinity'
      :shuffle='true'
      initial-action="erasing"
      :type-delay='70'
      :pre-erase-delay='2000'
      :erase-delay='900'
      erase-style='select-all'
      :erase-on-complete='false'
      caret-animation='smooth'></vue-typer> done.</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-md">
      <figure class="profile-image">
        <img class="round" src="assets/profile.jpg" alt="">
        <figcaption>Jonathan Ling</figcaption>
      </figure>
      <div class="center col-sm-12 col-md-6 col-lg-6">
        {{ splashContent }}
      </div>
    </div>
    <div class="col-sm-12 col-md">
      <div class="center col-sm-12 col-md-6 col-lg-6">
        <span class="link-span"><a class="ext-link" href="#">Personal Blog</a></span>
        <span class="link-span"><a class="ext-link" href="#">Tech Blog</a></span>
        <span class="link-span"><a class="ext-link" href="https://shamrocksweb.com">Web Design</a></span>
        <span class="link-span"><a class="ext-link" href="https://small-biz-hosting.com">Web Hosting</a></span>
        <span class="link-span"><a class="ext-link" href="#">Recruiters</a></span>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      skillsArray: [
        "business software",
        "hardware testing",
        "cloud services",
        "serverless apps",
        "single-page apps",
        "engineer training",
      ],
      // tslint:disable
      splashContent: `
        Hello! Welcome to my website! Here you'll find my personal blog, my tech blog, my github page, my youtube channel, and recruitment flowchart! I hope you enjoy your stay and look forward to hearing from you!
      `,
      // tslint:enable
    };
  },
});
</script>

