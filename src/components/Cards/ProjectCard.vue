<template>
    <div class="card project" @click="openLink">
        <div class="section">
          <h3>{{ projectName }}</h3>
          <p>{{ projectDesc }}</p>
        </div>
    </div>
</template>
<script>
  export default {
    props: ['projectName', 'projectDesc', 'cardLink'],
    methods: {
      openLink  (event) {
        event.stopPropagation()
        var href = this.cardLink
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
.project {
  max-width: 280px;
  min-height: 150px;

}
.project:hover {
  cursor: pointer;

}
</style>
