export default [
  //重定向
  {
    path: '/', redirect: '/home'
  },
  //首页
  {
    path: '/home',
    component: resolve => {
            require(['./views/home.vue'], resolve)
        },
    name:'猫眼电影'
  },
  //top250
  {
    path: '/top250',
    component: resolve => {
            require(['./views/top250.vue'], resolve)
        },
    name:'top250'
  },
];
