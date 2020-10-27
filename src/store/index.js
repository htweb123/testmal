import Vue from "vue"

import Vuex from "vuex"

import mutations from "./mutations"

import actions from "./actions"

import getters from "./getters"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: [],
        // 登陆状态、登陆信息、账号、密码
        loginInfo: {
            loginInfo_state: false,
            headpt: "",
            name: "",
            sex: "",
            introduce: "",
            interest: [],
        },
    },
    mutations,
    actions,
    getters,

})


export default store