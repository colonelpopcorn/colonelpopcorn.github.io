import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App.vue';

window.onload = () => {
  Vue.use(Vuetify);
  new Vue({
    el: '#app',
    render: h => h(App)
  });
};
