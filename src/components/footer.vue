<template lang="html">
  <div class="footer">
    <div class="fillInDiv">

    </div>
    <mt-tabbar fixed>
      <mt-tab-item id="正在热映">
        <img slot="icon" @click="toNextPage('/hot')" src="../assets/images/hotIcon.png">
        正在热映
      </mt-tab-item>
      <mt-tab-item id="即将上映">
        <img slot="icon" @click="toNextPage('/coming_soon')" src="../assets/images/coming.png">
        即将上映
      </mt-tab-item>
      <mt-tab-item id="TOP250">
        <img slot="icon" @click="toNextPage('/top250')" src="../assets/images/top200Icon.png">
      TOP250
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" @click="toNextPage('/user')" src="../assets/images/user.png">
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
