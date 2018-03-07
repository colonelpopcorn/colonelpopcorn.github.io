<template>
<div id="content">
	<p>Hello and welcome to my portfolio page! Below you'll find various open-source projects and components from <a href="https://freecodecamp.org">Free Code Camp</a> excercises. I'm a software developer, currently working for NCR with a specialization in bringing together hardware testing tools and front-end test orchestration. I primarily work in C#, but I also have experience in PHP, Javascript, Python, and C++ for Windows. I am very interested in learning more about computers and the various open-source tools available to me.</p>

	<p>

    Some of the open source tools that I enjoy working with are:

    <div class="row">
      <icon-card v-for="(item, index) in tech" :key="index" :tech-name="item.name" :icon-src="item.icon" :card-link="item.link"/>
    </div>

  </p>
</div>
</template>

<script>
import IconCard from './IconCard/IconCard'
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

