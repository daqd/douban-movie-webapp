<template lang="html">
  <div class="footer">
    <div class="fillInDiv">

    </div>
    <mt-tabbar fixed>
      <mt-tab-item id="正在热映">
        <img slot="icon" v-if="getPath.slice(1,getPath.length)=='hot' || (getSrcType=='hot' && getPath.slice(1,getPath.length)=='details')" @click="toNextPage('/hot')" src="../assets/images/hotIconHover.png">
        <img slot="icon" v-else @click="toNextPage('/hot')" src="../assets/images/hotIcon.png">
        <span :class="{hover:getPath.slice(1,getPath.length)=='hot' || (getSrcType=='hot' && getPath.slice(1,getPath.length)=='details')}">正在热映</span>
      </mt-tab-item>
      <mt-tab-item id="即将上映">
        <img slot="icon" v-if="getPath.slice(1,getPath.length)=='coming_soon' || (getSrcType=='coming' && getPath.slice(1,getPath.length)=='details')" @click="toNextPage('/coming_soon')" src="../assets/images/comingHover.png">
        <img slot="icon" v-else @click="toNextPage('/coming_soon')" src="../assets/images/coming.png">
        <span :class="{hover:getPath.slice(1,getPath.length)=='coming_soon' || (getSrcType=='coming' && getPath.slice(1,getPath.length)=='details')}">即将上映</span>
      </mt-tab-item>
      <mt-tab-item id="TOP250">
        <img slot="icon" v-if="getPath.slice(1,getPath.length)=='top250' || (getSrcType=='top250' && getPath.slice(1,getPath.length)=='details')" @click="toNextPage('/top250')" src="../assets/images/top200IconHover.png">
        <img slot="icon" v-else="getPath.slice(1,getPath.length)!='top250'" @click="toNextPage('/top250')" src="../assets/images/top200Icon.png">
        <span :class="{hover:getPath.slice(1,getPath.length)=='top250' || (getSrcType=='top250' && getPath.slice(1,getPath.length)=='details')}">TOP250</span>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" v-show="getPath.slice(1,getPath.length)!='user'" @click="toNextPage('/user')" src="../assets/images/user.png">
        <img slot="icon" v-show="getPath.slice(1,getPath.length)=='user'" @click="toNextPage('/user')" src="../assets/images/userHover.png">
        <span :class="{hover:getPath.slice(1,getPath.length)=='user'}">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';
import { mapGetters } from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed: mapGetters({
    getPath: 'getPath',
    getSrcType: 'getSrcType'
  }),
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
.hover{
  color: #ff3535;
}
</style>
