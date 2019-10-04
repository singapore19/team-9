import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
