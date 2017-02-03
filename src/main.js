import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Mint from 'mint-ui';
import resource from 'vue-resource';
import { sync } from 'vuex-router-sync';
//import store from 'store';
//import setWechatTitle from './utils/setWechatTitle';

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(resource);


// console.log(VueLazyload);

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

//配置全局钩子用来拦截非登录状态下的路由跳转
router.beforeEach((to, from, next) => {

  //判断拦截，是否需要登录
  const pathArr = to.path.split('/');
  const toPath = pathArr[pathArr.length-1];
  // if(noNeedLoginPage.indexOf(toPath)==-1 && !store.state.base.loginStatus){
  //   //store.dispatch('setNextPath', to.path);
  //   next({path:'/login'});
  // }else{
  //   next();
  // }
  //判断当前登录状态是前进还是后退
  next();
})

//配置全局钩子，设置返回路径至全局状态管理backpath
// router.afterEach((to, from) => {
//   store.dispatch('setBackPath', from.path);
//   store.dispatch('setHeaderTit', to.name);
//   //动态设置微信title
//   // let title = to.name;
//   // setWechatTitle(title)
// })

// sync(store, router);

const app = new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')