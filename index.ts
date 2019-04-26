import Vue from "vue";
import VueTyperPlugin from "vue-typer";
import App from "./App";
import "./app.scss";

Vue.use(VueTyperPlugin);

const app = new Vue({
  el: "#app",
  render: (h) => h(App),
});
