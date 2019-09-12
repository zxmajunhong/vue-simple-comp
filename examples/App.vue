<template>
  <div id="app">
    <NineLottery :list="list" @start="startLottery" ref="lottery"></NineLottery>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: [{ icon: '', name: '奖品1' }],
    };
  },
  methods: {
    startLottery() {
      console.log('开始抽奖');
      this.$refs.lottery.startCircle(4, () => {
        console.log('抽中了第四个');
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
