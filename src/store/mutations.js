import { ADD_COUNTER, ADD_TO_CART, LOGIN_STATE } from "./mutations-types"

export default {

    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1;
        payload.checked = true;
        state.cartList.push(payload)
    },
    [LOGIN_STATE](state, payload) {

        let data_info = payload.info
        state.loginInfo.loginInfo_state = true
        state.loginInfo.headpt = data_info.headpt
        state.loginInfo.name = data_info.name
        state.loginInfo.sex = data_info.sex
        state.loginInfo.introduce = data_info.introduce
        state.loginInfo.interest = data_info.interest

    }
}