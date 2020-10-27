<template>
  <div class="bottom-bar">
    <div class="bottom-bar-service bottom-bar-fn">
      <img src="~/assets/img/detail/service_ico.png" alt />
      <p>客服</p>
    </div>
    <div class="bottom-bar-store bottom-bar-fn">
      <img src="~/assets/img/detail/store_ico.png" alt />
      <p>店铺</p>
    </div>
    <div class="bottom-bar-collect bottom-bar-fn">
      <img src="~/assets/img/detail/collect_ico.png" alt />
      <p>收藏</p>
    </div>
    <div class="bottom-bar-goshop" @click="addToCar">
      <p>加入购物车</p>
    </div>
    <div class="bottom-bar-buy">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    addToCar() {
      this.$emit("addCar");
    },
  },
  components: {},
};
</script>

<style scoped>
.bottom-bar {
  height: 45px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
}
.bottom-bar-fn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
}
.bottom-bar-fn p {
  font-size: 12px;
  color: #333;
  text-align: center;
  margin-top: 5px;
}
.bottom-bar-fn img {
  width: 22px;
  height: 22px;
}
.bottom-bar-goshop,
.bottom-bar-buy {
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bottom-bar-goshop p,
.bottom-bar-buy p {
  font-size: 13.5px;
}
.bottom-bar-goshop {
  background-color: greenyellow;
}
.bottom-bar-buy {
  background-color: var(--color-high-text);
}
.bottom-bar-goshop p {
  color: #333;
}
.bottom-bar-buy p {
  color: #fff;
}
</style>
