<!--  -->
<template>
  <div>
    <nav-bar>
      <div class="nav-bar" slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex";

import CartList from "./components/CartList";

import CartBottomBar from "./components/CartBottomBar";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 使用vuex中的mapGetters（对应文件为getters.js，中的方法，全部抽到此方法中）
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
  font-weight: bold;
  justify-content: center;
}
</style>
