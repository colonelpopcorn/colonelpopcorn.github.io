<template>
  <v-app>
    <navigation-menu></navigation-menu>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import * as store from "./models/Store";
import NavigationMenu from "./navigation/NavigationMenu.vue";
export default Vue.extend({
  components: {
    "navigation-menu": NavigationMenu,
  },
  data: () => { /*Data goes here*/ },
  methods: {
    toggleSideMenu(): void {
      this.$store.commit("toggleNavMenuOpen");
    },
  },
});
</script>

