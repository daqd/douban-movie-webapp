/**
 * Created by mimengyu on 16/12/19.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutation'

const state = {
  path:'',  //返回路径
  nextPath:'',  //被中断的路由路径
  headerTit:'', //当前路由的title
  loginStatus:false,  //是否已登录
  srcType:'', //电影详细页来源类型
  userName:'', //用户名
  pageChangeStatus:'' //当前路由的切换状态 go/back
}

export default{
  state,
  actions,
  getters,
  mutations
}
