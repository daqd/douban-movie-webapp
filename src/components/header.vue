<template lang="html">
<div class="header-wrap">
  <div class="header">
    <div class="back" @click="goBack" v-if="getPath.slice(1,getPath.length)=='details'">

    </div>
    {{getHeaderTit}}
  </div>
  <div class="fillInHeader">

  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    getPath: 'getPath',
    getHeaderTit:'getHeaderTit'
  }),
  methods:{
    //返回路径
    goBack(){
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="less" scoped>
.header-wrap{
  .header{
    width: 100%;
    max-width: 540px;
    height: 45px;
    background: #df2d2d;
    line-height: 45px;
    text-align: center;
    color: #FFF;
    position: fixed;
    z-index: 9999;
    .back{
      width: 45px;
      height: 45px;
      float: left;
      position: absolute;
    }
    .back:after{
      content: '';
      position: absolute;
      top: 16px;
      left: 12px;
      width: 13px;
      height: 13px;
      border: 2px solid #FFF;
      border-width: 0 0 2px 2px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  .fillInHeader{
    width: 100%;
    height: 45px;
  }
}
</style>
