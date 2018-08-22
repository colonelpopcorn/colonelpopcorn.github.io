import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// Theirs ^

// Mine v
import App from './App.vue';
import { store } from './models/Store';


// Put the plugins where they go.
Vue.use(Vuex);
Vue.use(Vuetify);

// Turn off extraneous warnings.
Vue.config.productionTip = false;

// Finally our Vue instance is created.
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

