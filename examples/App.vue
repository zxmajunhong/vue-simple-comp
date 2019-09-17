<template>
  <div id="app">
    <div class="demo-list">
      <router-link tag="div" to="/ninelottery" class="item">NineLottery</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
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
  .demo-list {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 5px 10px;
      margin: 0 10px 10px 0;
      border: 1px solid #dfdfdf;
      cursor: pointer;
      &:hover {
        background: #e4e687;
      }
    }
  }
}
</style>
