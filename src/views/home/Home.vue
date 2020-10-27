<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      ref="tabControl1"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contenScroll"
      @pullingUp="lodeMore"
    >
      <banner-vant @vantImageLoad="vantImageLoad()" />
      <Recommend />
      <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>

    <back-top v-show="showTop" @click.native="backClick" />
  </div>
</template>

<script>
// 头部导入
import NavBar from "components/common/navbar/NavBar";
// 封装的scroll导入
import Scroll from "components/common/scroll/Scroll";

// tab导入
import TabControl from "components/content/tabControl/TabControl";
// 首页pop和new和sell数据
import GoodsList from "components/content/goods/GoodsList";

// 首页banner图导入
import BannerVant from "./components/BannerVant";
// 推荐
import Recommend from "./components/Recommend";

// 首页请求导入
import { getHomeGoods } from "network/home";

// comm导入防抖函数
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "Home",
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTo: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    NavBar,
    BannerVant,
    Recommend,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    // 请求多个类型数据保存
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    // 事件

    // 点击首页tab下标转数据类型(根据数据类型改变currentType，vue会响应到绑定的数据，中展示对应数据)
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;

      this.$refs.tabControl2.currentIndex = index;
    },

    // 监听滚动的数值
    contenScroll(index) {
      //  此方法在混入当中，执行滚动数据在多少时进行展示回到顶部组件show
      this.showBackItem(index);
      // 根据每滚动的值，来判断值是否到达，然后进行吸顶效果
      this.isTabFixed = index >= this.tabOffsetTo;
    },

    //下拉执行getHomeGoods
    lodeMore() {
      this.getHomeGoods(this.currentType);
    },
    // banner图的每次加载
    vantImageLoad() {
      this.tabOffsetTo = this.$refs.tabControl2.$el.offsetTop;
    },

    // 网络请求的数据
    /*
      获取传递过来的属性，获取当前属性的goods对应的page分页。+1是每次请求则会计算下一页。
    */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        if (res == undefined) {
          console.log(type + "数据请求超时！");
        } else {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // 完成上拉加载时
          this.$refs.scroll.finishPullUp();
        }
      });
    },
  },
  // 进入首页路由事件(需使用keep-alive)
  activated() {
    // 调用scroll的scrollTo方法，取出离开首页路由时保存的saveY值
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // 离开首页路由事件
  deactivated() {
    // 保存当前scroll的Y值
    this.saveY = this.$refs.scroll.getScrollY();

    // 离开此组件取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style  scoped>
#home {
  position: relative;
  width: 100%;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 999;
  width: 100%;
}
.botm_margin {
  height: 49px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 99;
}
</style>
