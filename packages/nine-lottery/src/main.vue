<template>
  <div class="lottery-box">
    <slot>
      <div v-for="(item, i) in prizeList" :key="i" :class="[item.class, {'on': item.order==cur}]"
       :order="item.order" @click="item.click">
        <template v-if="i !== 4">
          <img :src="item.icon" alt="" class="prize-icon" v-if="item.icon">
          <p class="prize-name">{{item.name}}</p>
        </template>
        <template v-else>{{btnTxt}}</template>
      </div>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'NineLottery',
  props: {
    list: {
      type: Array,
    },
    btnTxt: {
      type: String,
      default: '开始',
    },
    cycle: { // 基本需要转动的次数
      type: Number,
      default: 50,
    },
    speed: { // 初始转动速度
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      cur: 0, // 当前转到第几位
      prizeIndexMap: {
        0: 0,
        1: 1,
        2: 2,
        3: 7,
        5: 3,
        6: 6,
        7: 5,
        8: 4,
      },
      prizeList: [],
      hasChange: false, // 判断是否绑定修改奖品索引的方法
    };
  },
  mounted() {
    const temp = [];
    if (this.list) {
      // 在有传递list的情况下，不管是否有8个值，都填充8个值
      let i = 0;
      while (i < 9) {
        const index = this.prizeIndexMap[i];
        temp[i] = i === 4 ? { class: 'lottery-btn', click: this.startLottery } : Object.assign({ class: 'prize', order: index + 1, click: () => {} }, this.list[index] || { name: `奖品${index}` });
        i += 1;
      }
    }
    this.prizeList = temp;
    this.hasChange = !!this.$listeners.changeIndex;
  },
  methods: {
    startLottery() {
      this.$emit('start');
    },
    /**
     * 开始抽奖动画方法
     *
     * @param {Number} i 抽中了第几个1-8
     * @param {cb} cb 动画执行之后的回调函数
     */
    startCircle(i, cb = () => {}) {
      let start = this.cur;
      const that = this;

      // 实际转动动作
      function roll() {
        start += 1;
        if (start > 8) {
          start = 1;
        }
        that.cur = start;
        // eslint-disable-next-line no-unused-expressions
        that.hasChange && that.$emit('changeIndex', start);
      }

      let times = 0; // 转动次数
      let timer; // 转动定时器
      const baseCycle = this.cycle; // 基本需要转动的次数
      let baseSpeed = this.speed; // 初始转动速度

      function animating() {
        // 每次转动次数加一
        times += 1;
        roll(); // 执行一格的切换
        if (times > baseCycle + 10 && start == i) {
          // 转动结束的条件
          if (timer) {
            clearTimeout(timer);
          }
          times = 0;
          setTimeout(cb, 200);
        } else {
          if (times < baseCycle) {
            // 小于基本转动次数的时候 逐渐加速
            baseSpeed -= 10;
          } else if (times > baseCycle + 10 && ((i == 1 && start == 8) || (i == start + 1))) {
            baseSpeed += 80;
          } else {
            baseSpeed += 20;
          }
          if (baseSpeed < 40) {
            baseSpeed = 40; // 最小转动次数
          }
          timer = setTimeout(animating, baseSpeed);
        }
      }
      animating();
    },
  },
};
</script>

<style lang="scss" scoped>
// 提供基本样式
.lottery-box {
  width: 604px;
  height: 490px;
  border-radius: 15px;
  background-color: #3e2eb7;
  margin: 20px auto;
  padding: 5px;
  box-sizing: border-box;
  .prize {
    width: 188px;
    height: 150px;
    float: left;
    border-radius: 7px;
    margin: 5px;
    background-color: #6158e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    box-sizing: border-box;
    .prize-img {
      display: block;
      width: 168px;
      height: 72px;
      margin-bottom: 6px;
    }
    .prize-name {
      font-size: 20px;
      color: #ffffff;
      text-align: center;
    }
    &.on {
      background-color: #13aeff;
      border-color: #b7f1ff;
    }
  }
  .lottery-btn {
    width: 188px;
    height: 150px;
    border-radius: 7px;
    background-color: #f03c9f;
    float: left;
    margin: 5px;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
</style>
