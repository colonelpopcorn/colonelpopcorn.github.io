<template>
    <v-card class="card project" @click="openLink" hover="true">
      <div class="section">
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ projectName }}</h3>
          <div>{{ projectDesc }}</div>
        </v-card-title>
      </div>
    </v-card>
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
