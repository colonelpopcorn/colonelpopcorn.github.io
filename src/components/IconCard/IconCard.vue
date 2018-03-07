<template>
  <div class="card bigger" @click="doSomething" :href="cardLink">
    <img class="image-resize" :src="iconSrc">
    <h3 class="tech-name">{{ techName }}</h3>
  </div>

</template>
<script>

export default {
  props: ['techName', 'iconSrc', 'cardLink', 'imageType'],
  methods: {
    doSomething (event) {
      var href = event.target.getAttribute('href')
      if (href) {
        window.open(href, '_blank')
      } else {
        return
      }
    }
  }
}

</script>
<style>
.bigger {
  min-height: 140px;
  min-width: 60px;
  text-align: center;
}
.bigger:hover {
  cursor: pointer;
}
.image-resize {
  height: 140px;
  width: 140px;
  margin: auto;
  margin-top: 10px;
}
.tech-name {
  margin: 25px;
}

</style>
