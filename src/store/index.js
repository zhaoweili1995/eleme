import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import createLogger from "vuex/dist/logger"
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict:debug, //严格模式
    plugins:debug ? [createLogger()] : []  //插件：根据debug真还是假来安装打印日志的插件
})

export default store