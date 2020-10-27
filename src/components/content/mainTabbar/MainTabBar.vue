<!--  -->
<template>
  <!--可在tab-bor-item组件可写activeColor属性设置颜色，会传递到组件的props中进行绑定。-->
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-ico" src="~/assets/img/tabbar/home.svg" alt />
      <img slot="item-ico-active" src="~/assets/img/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-ico" src="~/assets/img/tabbar/category.svg" alt />
      <img slot="item-ico-active" src="~/assets/img/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-ico" src="~/assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-ico-active" src="~/assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-ico" src="~/assets/img/tabbar/profile.svg" alt />
      <img slot="item-ico-active" src="~/assets/img/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style  scoped>
</style>
