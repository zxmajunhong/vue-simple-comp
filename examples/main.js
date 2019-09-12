import Vue from 'vue';
// import { install } from 'vue-simple-comp';
import App from './App.vue';
// eslint-disable-next-line import/named
import { install } from '../lib/vue-simple-com.umd';

Vue.config.productionTip = false;
Vue.use(install);

new Vue({
  render: h => h(App),
}).$mount('#app');
