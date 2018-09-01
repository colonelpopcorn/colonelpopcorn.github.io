import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const WP_URL = "https://jonathanling.net/wp-json/wp/v2/posts";

const someStore: StoreOptions<RootState> = {
  actions: {
    loadBlogPosts({ commit }) {
      this.$http.get(WP_URL)
        .then((response) => {
          return response.data;
        })
        .then((posts) => {
          commit("SET_POSTS", posts);
        });
    },
  },
  getters: {
    isNavMenuOpen(state): boolean {
      return state.isNavMenuOpen;
    },
  },
  mutations: {
    toggleNavMenuOpen(state): void {
      state.isNavMenuOpen = !state.isNavMenuOpen;
    },
  },
  state: {
      isNavMenuOpen: false,
  },
};

export const store = new Vuex.Store<RootState>(someStore);
