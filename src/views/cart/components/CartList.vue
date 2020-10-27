<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// 封装的scroll导入
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  props: {},
  data() {
    return {};
  },
  computed: {
    // 使用vuex中的mapGetters（对应文件为getters.js，中的方法，全部抽到此方法中）
    ...mapGetters(["cartLength", "cartList"]),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Scroll,
    CartListItem,
  },
  activated() {
    this.$refs.scroll.refresh;
    console.log("In the refresh,Data reloading(HT)");
  },
};
</script>

<style scoped>
.cart-list {
  height: 100%;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  height: calc(100% - (44px + 49px + 40px));
  overflow: hidden;
}
</style>
