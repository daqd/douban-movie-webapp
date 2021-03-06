//设置返回路径
export const setPath = ({commit}, path) => {
  commit('SET_PATH', path)
}

//中断路由跳转的时候，将要跳转到的地址存储下来
export const setNextPath = ({commit}, path) => {
  commit('NEXT_PATH', path)
}

//路由切换的时候，将路由切换的方式存储下来 go/back
export const setPageChangeStatus = ({commit}, status) => {
  commit('PAGE_CHANGE_STATUS', status)
}

//设置顶部title
export const setHeaderTit = ({commit}, tit) => {
  commit('HEADER_TIT', tit)
}

//设置用户名
export const setUserName = ({commit}, userName) => {
  commit('SET_USERNAME', userName)
}

//设置登录状态
export const setLoginStatus = ({commit}, loginStatus) => {
  commit('SET_LOGINSTATUS', loginStatus)
}

//设置电影详细页来源
export const setMovieSrc = ({commit}, src) => {
  commit('SET_MOVIE_SRC', src)
}
