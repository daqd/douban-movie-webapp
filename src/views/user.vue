<template lang="html">
  <div class="userCenter">
    <div class="user-avator">
      <div class="user-avator-img">
        <img src="../assets/images/ava.jpg" alt="" width="70" height="70">
      </div>
      <div class="user-avator-info">
        <div class="user-avator-info-item user-avator-info-name">
          米梦宇
        </div>
        <div class="user-avator-info-item user-avator-info-abstract">
          世界上最帅的人
        </div>
      </div>
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
  height:100px;
  padding-top: 30px;
  background: #df2d2d;
  display: flex;
  border-top: 1px solid #d12a2a;
  .user-avator-img{
    width: 70px;
    height: 70px;
    border: 1px solid #df2d2d;
    margin: 0px 10px 0px 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .user-avator-info{
    width: 200px;
    height: 70px;
    margin-top: 8px;
    color: #FFF;
    .user-avator-info-item{
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    .user-avator-info-abstract{
        font-size: 12px;
    }
  }
}
.part{
  border-bottom: 5px solid #e7e7e7;
}
</style>
