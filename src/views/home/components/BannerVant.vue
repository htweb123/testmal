<!--  -->
<template>
  <div class="home-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <img @load="imageLoad()" :src="item.image" alt srcset />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getHomeMultidata } from "network/home";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "BannerVant",
  components: {},
  data() {
    //这里存放数据
    return {
      banners: [],
      recommends: [],
      isLoad: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("vantImageLoad");
        this.isLoad = true;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      if (res && Object.keys(res.data).length != 0) {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      } else {
        console.log("banner数据请求超时。");
      }
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.home-banner img {
  max-width: 100%;
  height: 195px;
}

.home-banner {
  height: 195px;
  
}
</style>