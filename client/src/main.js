import Vue from 'vue';
import Vuetify from 'vuetify';
import VueYoutubeEmbed from 'vue-youtube-embed';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

sync(store, router);

Vue.use(Vuetify);
Vue.use(VueYoutubeEmbed);
// Vue.use(router);

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
