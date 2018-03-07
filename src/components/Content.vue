<template>
<div id="content">
	<p>
    Hello and welcome to my portfolio page! Below you'll find various open-source projects and components from <a href="https://freecodecamp.org">Free Code Camp</a> excercises. I'm a UI developer, currently working for Aptean on a UI framework for internal use. I primarily work in JavaScript, but I also have experience in C#, PHP, Python, and C++ for Windows. I am very interested in learning more about computers and the various open-source tools available to me.
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
    <div class="row">
      <icon-card v-for="(item, index) in tech" :key="index" :tech-name="item.name" :icon-src="item.icon" :card-link="item.link"/>
    </div>
</div>
</template>

<script>
import IconCard from './Cards/IconCard'
import tech from '../data/tech.json'

export default {
  components: {
    'icon-card': IconCard
  },
  data () { return { tech: tech.items } }
}

</script>

<style>

</style>

