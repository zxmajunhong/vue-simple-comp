import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  model: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('./Index.vue'),
  }, {
    path: '/ninelottery',
    name: 'NineLottery',
    component: () => import('./view/NineLottery.vue'),
  }],
});
