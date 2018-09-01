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
const mainTitle = "colonelpopcorn.github.io";
const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/blog", component: Blog, meta: { title: "Blog" } },
  { path: "/contact", component: Contact, meta: { title: "Contact" } },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${mainTitle}`;
  next();
});

// Finally our Vue instance is created.
const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
