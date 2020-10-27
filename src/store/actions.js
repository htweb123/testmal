import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types"
export default {
    addCart(context, payload) {
        /*
         oldProduct = state.cartList改变了oldProduct，也就改变了对应cartList对应内容
         对象=对象，他俩则绑定在了一个栈里面，改变其他一个，另一个数据也会跟随改变。
         所以下面的判断则是，找到拥有iid的数据，将里面的count+1   
         */

        return new Promise((res, req) => {
            let oldProduct = context.state.cartList.find((item) => {
                return item.iid === payload.iid;
            })
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct)
                res("商品购物车数量+1！")

            } else {
                context.commit(ADD_TO_CART, payload)
                res("成功添加到购物车！")
            }
        })
    },
    
}