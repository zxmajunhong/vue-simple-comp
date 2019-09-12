import NineLottery from './src/main.vue';

NineLottery.install = (Vue) => {
  Vue.component(NineLottery.name, NineLottery);
};

export default NineLottery;
