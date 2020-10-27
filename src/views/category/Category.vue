<!--  -->
<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <tab-control
      class="showFixed"
      v-show="isShowTab"
      :titles="titles"
      @tabClick="tabClick"
      ref="tabCont2"
    />
    <div class="category-content" ref="cateContent">
      <div class="categoryleftlist-content">
        <scroll class="content" ref="scroll">
          <category-left-list
            :categoryLeft="categoryLeft"
            v-if="categoryLeft&&categoryLeft.length>0"
            @CategoryLKey="CategoryLKey"
          />
        </scroll>
      </div>
      <div class="categoryrightlist-content">
        <scroll class="content" :probe-type="3" @scroll="contenScroll">
          <category-right-sth :CategoryRdata="CategoryRdata" />
          <tab-control :titles="titles" @tabClick="tabClick" ref="tabCont1" />

          <goods-list v-if="CategoryType&&CategoryType.length>0" :goods="CategoryType" />
        </scroll>
      </div>
    </div>
  </div>
</template>


<script>
// 头部导入
import NavBar from "components/common/navbar/NavBar";
// 封装的scroll导入
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { itemListenerMixin, backTopMixin } from "common/mixin";

import CategoryLeftList from "./components/CategoryLeftList";
import CategoryRightSth from "./components/CategoryRightSth";

import { getCategory, getSubCategory, getTypeCategory } from "network/category";

export default {
  name: "Category",
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    NavBar,
    CategoryLeftList,
    Scroll,
    CategoryRightSth,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categoryLeft: [],
      CategoryKey: 0,
      CategoryRdata: [],
      titles: ["流行", "新款", "精选"],
      CategoryType: [],
      currentType: "pop",
      miniWallkey: null,
      tabCont1Top: null,
      isShowTab: false,
    };
  },
  async created() {
    // 获取左侧文字data数据
    let getCategoryList = await getCategory();
    this.categoryLeft = getCategoryList && getCategoryList.data.category.list;
    // end

    // 创建时则先将第一波分类的流行数据查询出
  },
  mounted() {},
  computed: {},
  methods: {
    /*
    初始化刚开始数据:
      CategoryLKey：{maitKey，miniWallkey}
      通过从左侧nav中获取到对应maitKey值，找出接口中的数据，
      且传递给对应组件，进去数据抽取
      再取出其中的miniWallkey和第一个分类pop，getTypeCategory接口取出数据

    */
    async CategoryLKey(maitKey) {
      let CatgorySub = await getSubCategory(maitKey.maitKey);
      this.CategoryRdata = CatgorySub && CatgorySub.data.list;
      this.miniWallkey = maitKey && maitKey.miniWallkey;

      this.CategoryType = await getTypeCategory(
        this.miniWallkey,
        this.currentType
      );

      this.currentType = "pop";
      this.$refs.tabCont1.currentIndex = 0;
      this.initDataType();
    },

    /*
调用initDataType此方法则将当前类型数据的款式类型初始化。
（标识第一个款式类型样式，并展示第一个款式类型数据）
 */
    async initDataType() {
      let newData = await getTypeCategory(this.miniWallkey, this.currentType);

      this.$nextTick().then((res) => {
        this.CategoryType = newData;
      });
    },

    /*
tabClick点击右侧产品热销分类，
重新进行数据的对应更新
*/
    async tabClick(index) {
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
      this.$refs.tabCont1.currentIndex = index;

      this.$refs.tabCont2.currentIndex = index;

      this.initDataType();
    },

    // 获取右侧每次滚动的值,并更改浮动显示的tab的isShowTab

    contenScroll(index) {
      if (this.tabCont1Top != this.$refs.tabCont1.$el.offsetTop) {
        this.tabCont1Top = this.$refs.tabCont1.$el.offsetTop;
      }
      this.isShowTab = index >= this.tabCont1Top;
    },
  },

  //进入此组件时更新一下 滚动展示
  activated() {
    this.$refs.scroll.refresh();
  },

  // 离开首页路由事件
  deactivated() {
    // 离开此组件取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style  scoped>
.category {
  height: 100vh;
}

.category-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 999;
  width: 100%;
}

.category-content {
  height: calc(100% - (44px + 49px));
  overflow: hidden;
}
.content {
  height: 100%;
}
.categoryleftlist-content {
  width: 25%;
}
.categoryrightlist-content {
  width: 75%;
}
.category-content {
  display: flex;
}
.showFixed {
  position: fixed;
  width: 75%;
  right: 0;
  z-index: 999;
  top: 44px;
}
</style>
