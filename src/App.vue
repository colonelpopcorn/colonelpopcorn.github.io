<template>
  <v-app>
    <navigation-menu></navigation-menu>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <div>Hello hot moms.</div>

      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationMenu from "./navigation/NavigationMenu.vue";
export default Vue.extend({
  data: function() {
    return {
      testVal: "Hello World!"
    };
  },
  components: {
    "navigation-menu": NavigationMenu
  }
});
</script>

