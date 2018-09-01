<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-toolbar color="primary" dark>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Navigation
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
export default Vue.extend({
  computed: {
    drawer: {
      get() {
        return this.$store.getters.isNavMenuOpen;
      },
      set(drawer) {
        // this.$store.commit("toggleNavMenuOpen");
      },
    },
  },

  data() {
    return {
      items: [
        { title: "Home", icon: "home", link: "/" },
        { title: "Blog", icon: "book", link: "/blog" },
        { title: "Contact", icon: "email", link: "/contact" },
      ],
      right: null,
    };
  },
});
</script>


