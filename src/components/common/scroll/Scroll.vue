<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import BScroll from "better-scroll";

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Scroll",
  components: {},
  data() {
    //这里存放数据
    return {
      scroll: null,
    };
  },
  props: {
    // 0,1,2,3四种选项。0代表不监听滚动，3代表实时监听每次滚动距离
    probeType: {
      type: Number,
      default: 0,
    },
    // 是否允许下拉监听
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {
    // time默认值300
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 上拉方法，
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 刷新scroll方法(动态更改了scroll内容，推荐手动调用refresh方法)
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("防抖ing...");
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 创建Bscroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", -position.y);
    });

    // 监听下拉，下拉了则返回pullingUp事件给调用者
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>