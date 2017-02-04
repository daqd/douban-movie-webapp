<template lang="html">
  <div class="userCenter">
    <div class="user-avator">
      
    </div>
    <div class="part">
      <mt-cell title="我的订单" is-link></mt-cell>
      <mt-cell title="我的消息" is-link></mt-cell>
      <mt-cell title="我的收藏" is-link></mt-cell>
      <mt-cell title="会员中心" value="最牛逼的会员"></mt-cell>
      <mt-cell title="我的成就" is-link></mt-cell>
    </div>

  <div class="part">
    <mt-cell title="我的钱包" is-link></mt-cell>
    <mt-cell title="余额" value="0元"></mt-cell>
    <mt-cell title="优惠券" is-link></mt-cell>
    <mt-cell title="影院会员卡" is-link></mt-cell>
    <mt-cell title="商城" is-link></mt-cell>
  </div>

  <div class="part">
    <mt-cell title="设置" is-link></mt-cell>
  </div>
  </div>
</template>

<script>
import Vue from 'Vue';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);

export default {
}
</script>

<style lang="less" scoped>
.user-avator{
  width: 100%;
  height:120px;
  background: #df2d2d;
}
.part{
  border-bottom: 5px solid #e7e7e7;
}
</style>
