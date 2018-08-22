<template>
  <v-navigation-drawer v-model="drawer" app>

  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';
export default Vue.extend({

  computed: {
    drawer() {
      return this.$store.getters.isNavMenuOpen;
    }
  }
});
</script>


