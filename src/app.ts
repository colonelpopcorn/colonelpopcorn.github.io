import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuex from "vuex";
// Theirs ^

// Mine v
import App from "./App.vue";
import { store } from "./models/Store";

/* Test comps */
import Blog from "./content/Blog.vue";
import Contact from "./content/Contact.vue";
import Home from "./content/Home.vue";

// Put the plugins where they go.
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);

// Turn off extraneous warnings.
Vue.config.productionTip = false;

// Get some routes in here, boi!
const routes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];

const router = new VueRouter({ routes });

// Finally our Vue instance is created.
const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
