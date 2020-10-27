<template>
  <div id="detail">
    <detail-nav-bar ref="detailNav" class="detail-nav" @titleClick="titleClick" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-vant :detailVant="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shopInfo" />
      <detail-image-info :detailimg="detailImage" @detailImageLoad="detailImageLoad" />
      <detail-table ref="params" :itemParams="itemParams" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <back-top v-show="showTop" @click.native="backClick" />
    <detail-button-bar @addCar="addCar" />
  </div>
</template>

<script>
// 顶部
import DetailNavBar from "./components/DetailNavBar";
// 详情轮播
import DetailVant from "./components/DetailVant";
// 详情基本商品数据(数据封装在detail.js的Goods类中)
import DetailBaseInfo from "./components/DetailBaseInfo";
// 详情店铺数据信息
import DetailShopInfo from "./components/DetailShopInfo";
// 图片详情数据信息
import DetailImageInfo from "./components/DetailImageInfo";
// 详情表格信息展示
import DetailTable from "./components/DetailTable";
// 详情评论区
import DetailCommentInfo from "./components/DetailCommentInfo";
// 详情底部工具栏
import DetailButtonBar from "./components/DetailButtonBar";

// 导入scroll滚动
import Scroll from "components/common/scroll/Scroll";

// 导入gooslist，将数据放入gooslist中 展示推荐数据。
import GoodsList from "components/content/goods/GoodsList";

// 详情network请求
import { getDetail, Goods, Shop, Image, getRecommend } from "network/detail";

// 导入混入
import { itemListenerMixin, backTopMixin } from "common/mixin";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  props: {},
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailImage: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currentInde: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  computed: {},
  created() {
    this.detail_go();
  },
  updated() {},
  mounted() {
    /*
      详情导航：
        因详情有一列图片组，而srcoll组件在图片加载未完成时获取到的对于dom高度不对
        则在每次图片返回时触发了图片load事件，且返回给父集detailImageLoad方法处理
        所以创建一个变量获取封装的这个方法，且用debuonce方法再次进行封装此方法，最后在图片load
        返回事件触发的方法中调用getThemeTopYs获取的防抖方法。每次图片加载一张都逐次获取高度，且进行了防抖。
    */
    this.getThemeTopYs = debounce(() => {
      console.log("detail-image-info in debounce");
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(
        this.$refs.params.$el.offsetTop - this.$refs.detailNav.$el.offsetHeight
      );
      this.themeTopYs.push(
        this.$refs.comment.$el.offsetTop - this.$refs.detailNav.$el.offsetHeight
      );
      this.themeTopYs.push(
        this.$refs.recommend.$el.offsetTop -
          this.$refs.detailNav.$el.offsetHeight
      );
    }, 200);
  },
  destroyed() {
    // 离开此组件取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  watch: {},
  methods: {
    // 封装各个数据请求。
    detail_go() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then((res) => {
        if (res != undefined) {
          const data = res && res.result;
          // 获取请求数据的详情banner图
          this.topImages = data.itemInfo.topImages;
          /*
       获取请求数据对应值，传递到自身封装的对象中。自身封装的对象将需要的数据在构造函数中取出。
      */
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );

          this.shopInfo = new Shop(data.shopInfo);

          this.detailImage = new Image(data.detailInfo);

          this.itemParams = data.itemParams;

          if (data.rate && data.rate.list && data.rate.list.length !== 0) {
            this.commentInfo = data.rate;
          }

          getRecommend().then((res) => {
            this.recommends = res.data.list;
          });
        } else {
          console.log("请求详情数据超时！");
          this.detail_go();
        }
      });
    },
    //  这里是详情的info图片组加载完成进行的事件（一般用于防抖计算）
    detailImageLoad() {
      /* 
      这里是详情的info图片组，进行图片加载事件绑定且返回给父组件进行防抖操作(防抖方法取的是mixin中的方法)
      且refresh在mixin中定义在的是data中，所以可以直接取。
      */
      // 注：详情底部的推荐使用的goods在混入中则就进行了防抖操作
      this.refresh();
      this.getThemeTopYs();
      // console.log(this.themeTopYs);
    },
    // 点击详情图跟随导航。
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    // 滚动页面头部跟随显示对应code效果
    contentScroll(option) {
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // if (option > this.themeTopYs[i] && option < this.themeTopYs[i + 1]) {
        //   console.log(i);
        // }

        /*
          条件一：
            去除重复，因为数值会根据滚动 一直变化，第一个判断则是，到达不同高度数值时赋值就行了。

          条件二：
            将除了最后一个高度的数值进行i的数据获取，因为最后一个高度是高于他则一直是一个数值
            
          条件三：
            将最后一个高度数值进行if获取，i==length-1意味符合则意味最后一个高度数值，
            且第二个判断条件则是滚动数值高于最后一个高度数值，也不会跳出判断，从而进入判断获取到高于
            最后一个高度数值的i数值。
        */
        if (
          this.currentInde !== i &&
          ((i < length - 1 &&
            option >= this.themeTopYs[i] &&
            option <= this.themeTopYs[i + 1]) ||
            (i == length - 1 && option >= this.themeTopYs[i]))
        ) {
          this.currentInde = i;
          this.$refs.detailNav.currentIndex = this.currentInde;
        }
      }
      let index = option;
      this.showBackItem(index);
    },
    // 点击加入购物车组件返回过来的事件
    addCar() {
      // 获取购物车需要展示的信息数据，进行保存抽取。
      const product = {};
      product.imge = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrie;
      product.iid = this.iid;

      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 1000);
      });
    },
  },

  components: {
    DetailNavBar,
    DetailVant,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImageInfo,
    DetailTable,
    DetailCommentInfo,
    GoodsList,
    DetailButtonBar,
  },
};
</script>

<style scoped>
#detail {
  background-color: #fff;
  z-index: 999;
  height: 100vh;
  position: relative;
}
.content {
  height: calc(100% - (44px + 45px));
}

.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>
