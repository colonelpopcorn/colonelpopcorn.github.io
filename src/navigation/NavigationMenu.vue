<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-btn @click.native="drawer = !drawer">Click me!</v-btn>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';
export default Vue.extend({
  data() {
    return {
      drawer: true
    };
  },
  methods: {

  }
});
</script>


