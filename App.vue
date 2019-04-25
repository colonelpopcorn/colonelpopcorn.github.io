<template>
<div class="container">
  <div class="row">
    <div class="center">
      <h1 class="type-text">This should be red.<span class="cursor-blink">|</span></h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 col-md-6 col-lg-6">
      <figure class="profile-image">
        <img class="round" src="assets/profile.jpg" alt="">
        <figcaption>Jonathan Ling</figcaption>
      </figure>
      <div class="center col-sm-12 col-md-6 col-lg-6">
        {{ splashContent }}
      </div>
    </div>
      <div class="vertical-rule col-sm-1"></div>

    <div class="col-sm-4 col-md-6 col-lg-6">

      <a href="#">Blog</a>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      splashContent: `
        Hello! Welcome to my website! Here you'll find my personal blog, my tech blog, my github page,
        my youtube channel, and recruitment flowchart! I hope you enjoy your stay and look forward to hearing from you!
      `,
    };
  },
});
</script>

