export default [
  //重定向
  {
    path: '/', redirect: '/hot'
  },
  //首页
  {
    path: '/hot',
    component: resolve => {
            require(['./views/home.vue'], resolve)
        },
    name:'豆瓣电影',
  },
  //即将上映
  {
    path: '/coming_soon',
    component: resolve => {
            require(['./views/coming_soon.vue'], resolve)
        },
    name:'即将上映'
  },
  //top250
  {
    path: '/top250',
    component: resolve => {
            require(['./views/top250.vue'], resolve)
        },
    name:'top250'
  },
  //我的
  {
    path: '/user',
    component: resolve => {
            require(['./views/user.vue'], resolve)
        },
    name:'关于我'
  },
  //电影详细信息
  {
    path: '/details',
    component: resolve => {
            require(['./views/movDetails.vue'], resolve)
        },
    name:'电影详情'
  }
];
