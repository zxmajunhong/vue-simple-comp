<template>
  <div>
    <NineLottery :list="list" @start="startLottery" ref="lottery"></NineLottery>
    <!-- <NineLottery @changeIndex="changeIndex" ref="lottery">
      <div class="prize" order="1" :class="{'on': prizeIndex == 1}">
        <p class="prize-name">奖品一</p>
      </div>
      <div class="prize" order="2" :class="{'on': prizeIndex == 2}">
        <p class="prize-name">奖品二</p>
      </div>
      <div class="prize" order="3" :class="{'on': prizeIndex == 3}">
        <p class="prize-name">奖品三</p>
      </div>
      <div class="prize" order="8" :class="{'on': prizeIndex == 8}">
        <p class="prize-name">奖品八</p>
      </div>
      <div class="lottery-btn" @click="startLottery">开始</div>
      <div class="prize" order="4" :class="{'on': prizeIndex == 4}">
        <p class="prize-name">奖品四</p>
      </div>
      <div class="prize" order="7" :class="{'on': prizeIndex == 7}">
        <p class="prize-name">奖品七</p>
      </div>
      <div class="prize" order="6" :class="{'on': prizeIndex == 6}">
        <p class="prize-name">奖品六</p>
      </div>
      <div class="prize" order="5" :class="{'on': prizeIndex == 5}">
        <p class="prize-name">奖品五</p>
      </div>
    </NineLottery> -->
  </div>
</template>

<script>
import { NineLottery } from 'vue-simple-comp';

export default {
  components: {
    [NineLottery.name]: NineLottery,
  },
  data() {
    return {
      list: [{ icon: 'http://iph.href.lu/168x72?text=%E5%A5%96%E5%93%81%E4%B8%80', name: '奖品1' }],
      prizeIndex: 0,
    };
  },
  methods: {
    startLottery() {
      console.log('开始抽奖');
      setTimeout(() => {
        // 模拟ajax请求抽奖
        this.$refs.lottery.startCircle(4, () => {
          console.log('抽中了第四个');
        });
      }, 500);
    },
    changeIndex(i) {
      this.prizeIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
