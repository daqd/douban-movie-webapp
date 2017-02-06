<template lang="html">
  <div class="hot">
    <!-- banner -->
    <div class="banner" :style="{height:windowWith+'px'}">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/images/banner/banner1.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner/banner2.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner/banner3.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner/banner4.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner/banner5.jpeg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <movieList type="hot"></movieList>
  </div>
</template>

<script>
import movieList from '../components/movieList.vue';
import {getWindowWith} from '../js/common.js'

export default {
  data(){
    return{

    }
  },
  computed:{
    windowWith:function(){
      return getWindowWith().windowWidth/4.5;
    },
  },
  components:{
    movieList
  }
}
</script>

<style lang="less" scoped>
  .banner{
    width: 100%;
  }
  .mint-swipe-item img{
    width: 100%;
    height: auto;
  }
</style>
