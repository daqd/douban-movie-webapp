<template lang="html">
  <div class="" v-if="movData">
    <div class="movie-info">
      <div class="movie-info-content">
        <!-- 电影宣传片 -->
        <div class="movie-info-video">
            <img :src="movData.images.large" alt="">
        </div>
        <div class="movie-info-list">
          <div class="movie-info-list-item">
            {{movData.title}}
          </div>
          <div class="movie-info-list-item  fontSize-13" v-if="movData.aka.length>0">
            {{movData.aka[0].toString()}}
          </div>
          <div class="movie-info-list-item fontSize-13">
            <span class="rating">{{movData.rating.average}}</span> <span class="ratings_count">({{movData.ratings_count}}人评)</span>
          </div>
          <div class="movie-info-list-item fontSize-13">
            {{movData.genres.toString()}}
          </div>
          <div class="movie-info-list-item fontSize-13">
            {{movData.countries.toString()}}
          </div>
          <div class="movie-info-list-item fontSize-13">
            {{movData.year}}年上映
          </div>

        </div>
      </div>
      <!-- 观看人数信息 -->
      <div class="movie-info-ratings_count">
        <!-- 幽灵按钮 -->
        <a href="javascript:void(0)">({{movData.wish_count}}人)想看</a>
        <a href="javascript:void(0)">({{movData.collect_count}}人)看过</a>
      </div>
    </div>
    <!-- 电影介绍 -->
    <div class="movie-summary">
      <div class="content">
        {{movData.summary}}
      </div>
    </div>
    <!-- 明星 -->
    <div class="movie-casts-wrap">
      <div class="movie-casts-content">
        <!-- 单个明星 -->
        <div class="movie-casts-item" v-for="item in movData.casts">
          <div class="movie-casts-item-img">
            <img :src="item.avatars.medium" alt="">
          </div>
          <div class="movie-casts-item-name">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <!-- 影评信息 -->
      <!-- 长短影评切换按钮 -->
    <!-- <div class="commentsBtn-wrap">
      <a href="javascript:void(0)" class="shortComment">短评</a>
      <a href="javascript:void(0)" class="longComment">长评</a>
    </div>
    <commentsList :movId="movData.id"></commentsList> -->
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import commentsList from '../components/commentsList.vue';
export default {
  data(){
    return{
      movData:null,
      comments:null
    }
  },
  created(){
    // this.$store.dispatch('setPath',this.$route.query.type); //设置底部tabbar
    this.checkUrl();
    console.log(this)
  },
  components:{
    commentsList
  },
  methods:{
    //检查是否缺少参数
    checkUrl(){
      //console.log(this.$route);
      if(!this.$route.query.mvId){
        this.$router.replace({path:'hot'});
      }else{
        this.getCustomers(this.$route.query.mvId);
      }
    },
    //获取数据
    getCustomers(mvId){
      Indicator.open('加载中...');
      const apiUrl = 'https://api.douban.com/v2/movie/subject/'+mvId;
      // console.log(apiUrl);
      this.$http.jsonp(apiUrl).then(
                  function (res) {
                    // console.log(res.body);
                      this.$data.movData = res.body;
                      Indicator.close();
                  },function (res) {
                      // 处理失败的结果
                      Indicator.close();
                  }
              );
    },
  }
}
</script>

<style lang="less" scoped>
  .movie-info{
    width: 100%;
    height: 300px;
    background: url("../assets/images/background.jpg") no-repeat;
    background-size:cover;
    background-position: 0px -260px;
    .movie-info-content{
      width: 100%;
      height: 240px;
      display: flex;
    .movie-info-video{
      width: 130px;
      height: 200px;
      margin: 30px 0px 0px 10px;
    }
    .movie-info-video img{
      width: 130px;
    }
    .movie-info-list{
      width: 100%;
      height: 200px;
      margin: 30px 0px 0px 10px;
      .movie-info-list-item{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #FFF;
        .rating{
          font-size: 14px;
          color: #ffb400;
        }
        .ratings_count{
          font-size: 10px;
        }
      }
    }
  }

    .movie-info-ratings_count{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
    }
    .movie-info-ratings_count a{
      width: 45%;
      height: 45px;
      display: block;
      line-height: 45px;
      text-align: center;
      background: #595e57;
      color: #FFF;
      border-radius: 5px;
      text-decoration: none;
    }
  }

  /** 电影介绍 **/
  .movie-summary{
      width: 100%;
      height: 125px;
      margin-top: 5px;
      border-bottom: 5px solid #f5f5f5;
      .content{
        width: 95%;
        height: 120px;
        overflow: hidden;
        margin: 0 auto;
        line-height: 20px;
        text-align: justify;
        color: #505050;
      }
  }

  /** 明星 **/
  .movie-casts-wrap{
    &:extend(.movie-summary);
    height: 150px;
    display: flex;
    justify-content: center;
    .movie-casts-content{
      width: 95%;
      height: 150px;
      display: flex;
      .movie-casts-item{
        width: 25%;
        height: 120px;
        margin-right: 5px;
        .movie-casts-item-img{
          width: 100%;
          height: auto;
        }
        .movie-casts-item-img img{
          width: 100%;
        }
        .movie-casts-item-name{
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          overflow: hidden;
        }
      }
    }
  }


/** 长短影评切换 **/
  .commentsBtn-wrap{
    width: 95%;
    height: 40px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    &>a{
      display: block;
      width: 50%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border:1px solid #df2d2d;
      text-decoration: none;

    }
    .shortComment{
      border-right-width: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background: #df2d2d;
      color: #FFF;
    }
    .longComment{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
</style>
