# 自用的一些VUE组件

## 目前已有的组件
* [NineLottery](./packages/nine-lottery/readme.md) 九宫格抽奖滚动动画

## 安装
```shell
npm i vue-simple-comp -S
```

## 使用
如果按照上述方法安装后可以这样使用
```js
// main.js
import Vue from 'vue';

// 注册所有组件
import * as simpleComp from 'vue-simple-comp';
Vue.use(simpleComp);

// 或者注册单个组件比如NineLottery
import { NineLottery } from 'vue-simple-comp';
Vue.use(NineLottery);
```
在Vue项目的入口文件中这样注册，属于全局注册，可以在任何vue的单文件中直接使用
```js
<template>
  <div id="app">
    <NineLottery></NineLottery>
  </div>
</template>
<script>
</script>
```
除了全局注册也可以单文件注册，比如在demo.vue这个文件中
```js
<template>
  <div id="demo">
    <NineLottery></NineLottery>
  </div>
</template>
<script>
import { NineLottery } from 'vue-simple-comp';
export default {
  components: {
    [NineLottery.name]: NineLottery,
  },
  ...
}
</script>
```

## 说明
每个组件的详细使用说明点击上面的组件列表查看 [在线实例](https://zxmajunhong.github.io/vue-simple-comp/dist/index.html)