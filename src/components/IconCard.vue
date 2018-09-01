<template>
  <v-card class="card bigger" @click="openLink ">
    <img class="image-resize" :src="iconSrc" @click="openLink">
    <h3 class="tech-name" @click="openLink">{{ techName }}</h3>
  </v-card>
</template>
<script>

export default {
  props: ["techName", "iconSrc", "cardLink", "imageType"],
  methods: {
    openLink  (event) {
      event.stopPropagation()
      var href = this.cardLink
      if (href) {
        window.open(href, "_blank")
      } else {
        return
      }
    }
  }
}

</script>
<style>
.bigger {
  max-width: 240px;
  max-height: 240px;
  min-height: 140px;
  min-width: 140px;
  text-align: center;
}
.bigger:hover {
  cursor: pointer;
}
.image-resize {
  height: 120px;
  width: 120px;
  margin: auto;
  margin-top: 10px;
}
.tech-name {
  margin: 25px;
}

</style>
