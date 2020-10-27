<template>
  <div class="loginnavbar">
    <NavBar>
      <div class="back" slot="left" @click="ackClick()">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="title" slot="center">登录</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "LoginNavBar",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    ackClick() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.back i{
  font-size: 26px;
  color: #fff;
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loginnavbar {
  background-color: var(--color-high-text);
}

.title {
  color: #fff;
}
</style>
