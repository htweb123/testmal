<!--  -->
<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt @load="imageLoad" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "GoodsListItem",
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    goodsitem: Object,
  },
  //监听属性 类似于data概念
  computed: {
    showImage() {
      return (
        this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
      );
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 每一个图片加载完成则触发这个方法，将触发时的事件发送到$bus里（方法名为itemImageLoad）
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },

    // 点击对应图片，跳转详情页
    itemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { 
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
.goods-list-item {
  width: 48%;
  margin-top: 10px;
}
</style>