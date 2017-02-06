<template lang="html">
  <div class="hot-movive-list">
    <div class="onePxLineWrap" v-for="item in movData">
      <div class="movie-item onePxLine" @click="toShowDetails(item.id)">
        <!-- 电影海报 -->
        <div class="movie-item-pic">
          <img :src="item.images.large" alt="">
        </div>
        <!-- 电影基本信息 -->
        <div class="movie-item-info">
            <!-- 电影名称 -->
            <div class="movie-item-info-title">
              {{item.title}}
            </div>
            <!-- 电影评分 -->
            <div class="movie-item-info-star fontSize-13">
              观众评分：<span class="rating">{{item.rating.average}}</span> 分
            </div>
            <!-- 电影类型 -->
            <div class="movie-item-info-toppic fontSize-13">
              {{item.genres.toString().split(',').join('/')}}
            </div>
            <!-- 演员 -->
            <div class="movie-item-info-superStar fontSize-13">
              <span href="#" v-for="childItem in item.casts">{{childItem.name}} </span>
            </div>
        </div>
        <!-- 电影条目详细信息 -->
        <div class="movie-item-toShowDetails">
            <span class="toShowDetails">详细</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Indicator } from 'mint-ui';

export default {
  data(){
    return{
      movData:[]
    }
  },
  props:['type'],

  created(){
    this.getCustomers();
  },
  methods:{
    //获取数据
    getCustomers(){
      Indicator.open('加载中...');
      let apiUrl = this.getApiUrl(this.type);
      console.log(apiUrl);
      this.$http.jsonp(apiUrl).then(
                  function (res) {
                    console.log(res.body.subjects);
                      this.$data.movData = res.body.subjects;
                      Indicator.close();
                  },function (res) {
                      // 处理失败的结果
                      Indicator.close();
                  }
              );
    },
    // 显示详细信息
    toShowDetails(id){
      this.$router.push({path:'details',query:{type:this.type,mvId: id}});
    },
    //获取url
    getApiUrl(type){
      switch(type){
        case 'hot':
           return 'https://api.douban.com/v2/movie/in_theaters';
        case 'coming':
           return 'https://api.douban.com/v2/movie/coming_soon';
        default:
          return 'https://api.douban.com/v2/movie/top250';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.movie-item{
    width: 100%;
    height: 140px;
    // border-bottom:1px solid #c9c9c9;
    display: flex;
    .movie-item-pic{
      width: 180px;
      height: 120px;
      margin-left: 10px;
      margin-top: 10px;
      overflow: hidden;
    }
    .movie-item-pic img{
      width: 100%;
    }

    .movie-item-info{
      width: 100%;
      height: 140px;
      margin-top: 10px;
      margin-left: 7px;
      .movie-item-info-title{
        width: 100%;
        height: 30px;
        line-height:30px;
        font-size: 18px;
      }
      .movie-item-info-star,.movie-item-info-toppic,.movie-item-info-superStar{
        width: 100%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        .rating{
          color: #ffb400;
          font-size: 14px;
        }
      }
    }
    .movie-item-toShowDetails{
      width: 120px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      .toShowDetails{
        display: block;
        width: 60px;
        height: 30px;
        border:1px solid #df2d2d;
        color: #df2d2d;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        margin-right: 10px;
      }
    }
}
</style>
