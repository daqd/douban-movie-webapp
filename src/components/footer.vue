<template lang="html">
  <div class="footer">
    <div class="fillInDiv">

    </div>
    <mt-tabbar fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" @click="toNextPage('/home')" src="../assets/images/tab_user_focus.png">
        正在热映
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" @click="toNextPage('/top250')" src="../assets/images/tab_user_focus.png">
      TOP250
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/images/tab_user_focus.png">
        排行榜
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/images/tab_user_focus.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

export default {
  data(){
    return{

    }
  },
  methods:{
    toNextPage(toPath){
      this.$router.push({path:toPath});
    }
  }
}
</script>

<style lang="less" scoped>
.fillInDiv{
  width: 100%;
  height: 55px;
  float: left;
}
</style>
