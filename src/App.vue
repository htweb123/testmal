<template>
  <div id="app">
    <keep-alive exclude="Detail Profile">
      <router-view></router-view>
    </keep-alive>
    <!-- 判断有些页面不需要底部，在router中设置meta -->
    <main-tab-bar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
