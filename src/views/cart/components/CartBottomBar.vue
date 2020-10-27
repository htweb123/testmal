<template>
  <div class="cart-bottom-bar">
    <div class="cart-bottom-bar-all">
      <div class="cart-bottom-bar-all-check">
        <check-button :isChecked="isChecked" @click.native="checkClick" />
      </div>
      <p>全选</p>
    </div>
    <div class="cart-bottom-bar-sum">
      <p>
        合计：￥
        <span>{{totalPrice}}</span>
      </p>
    </div>
    <div class="cart-bottom-bar-go" @click="goCount">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  props: {},
  data() {
    return {};
  },
  computed: {
    /*
        这里的this.cartList对应的是this.$store.state.cartList
        因为我们用了引用mapGetters，将vuex中的getters中的方法
        使用...mapGetters(["cartList"])方式注入了进来
    */

    // 引用mapGetters
    ...mapGetters(["cartList"]),

    //   合计
    totalPrice() {
      /*
       判断购物车对应vuex数据中是否有数据，
       若无：则返回‘0’

       若有：则将vuex对应数组数据进行filter数组函数过滤，找到checked为true的，
       则将对应数据组成返回，再进行reduce函数计算，
       获取对应价格和个数进行相乘，再使用里preValue参数进行数据的累计。
      */

      if (this.cartList != undefined && this.cartList != null) {
        return this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0);
      } else {
        return "0";
      }
    },

    // 去计算
    checkLength() {
      if (this.cartList != undefined && this.cartList != null) {
        return this.cartList.filter((item) => {
          return item.checked;
        }).length;
      } else {
        return "0";
      }
    },

    // 全选选择
    isChecked() {
      // all_checked记录carList里中是否存在没有选中状态物品，若有则返回false状态展示

      if (this.cartList.length <= 0) {
        return false;
      } else {
        let all_checked = this.cartList.find((item) => {
          return !item.checked;
        });

        if (all_checked) {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 全选点击
    checkClick() {
      /* 
      判断isChcked是否为ture，则是商品全处于选中状态，则这时我们将vuex的cartList的选中状态取为false状态
      则之反而
      */
      if (this.isChecked) {
        this.cartList.forEach((element) => {
          element.checked = false;
        });
      } else {
        this.cartList.forEach((element) => {
          element.checked = true;
        });
      }
    },
    // 点击去结算
    goCount() {
      if (this.checkLength === 0) {
        this.$toast.show("暂无结算商品！", 1000);
      } else {
        this.$toast.show("支付API暂未开通...", 1000);
      }
    },
  },

  components: {
    CheckButton,
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  width: 100%;
  background-color: rgb(230, 230, 230);
  position: absolute;
  bottom: 49px;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}

.cart-bottom-bar-all-check {
  width: 26%;
}

.cart-bottom-bar-all {
  width: 20%;
  display: flex;
  align-items: center;
}

.cart-bottom-bar-all p {
  font-size: 15px;
  color: #999;
  margin-left: 10%;
}

.cart-bottom-bar-sum {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-bottom-bar-sum p {
  font-size: 15px;
  color: #999;
}

.cart-bottom-bar-go {
  width: 34%;
  background-color: rgb(247, 47, 47);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #fff;
}
</style>
