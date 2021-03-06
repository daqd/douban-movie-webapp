import {
  SET_PATH,
  NEXT_PATH,
  PAGE_CHANGE_STATUS,
  HEADER_TIT,
  SET_USERNAME,
  SET_LOGINSTATUS,
  SET_MOVIE_SRC

} from './mutation-types'

const mutations = {
  //设置当前路径
  [SET_PATH] (state, path) {
    state.path = path
  },
  //设置将要跳转到的路径
  [NEXT_PATH] (state, path) {
    state.nextPath = path
  },
  //设置路由切换时的状态
  [PAGE_CHANGE_STATUS] (state, status) {
    state.pageChangeStatus = status
  },
  //设置顶部tit
  [HEADER_TIT] (state, tit) {
    state.headerTit = tit
  },
  //设置用户名
  [SET_USERNAME] (state, userName) {
    state.userName = userName
  },
  //设置登录状态
  [SET_LOGINSTATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  },
  //设置token
  [SET_MOVIE_SRC] (state, srcType) {
    state.srcType = srcType
  },

}


export default mutations;
