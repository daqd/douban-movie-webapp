import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//应用级状态
import base from './modules/base'

export default new Vuex.Store({
    modules: {
        base
    },
    strict: true
})
