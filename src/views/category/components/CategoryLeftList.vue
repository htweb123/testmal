<template>
  <div class="categoryleftlist">
    <div>
      <div
        class="categoryleftlistitemblock"
        v-for="(item,index) in categoryLeft"
        :class="{active:currentIndex==index}"
        :key="index"
        @click="cCategoryLnav(index,{maitKey:item.maitKey,miniWallkey:item.miniWallkey})"
      >
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryLeftList",
  props: {
    categoryLeft: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      tes: 100,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.cCategoryLnav();
  },
  watch: {},
  methods: {
    /*

  cCategoryLnav需要设置默认值，因为页面category刚进组件获取什么？。
  所以将左侧第一个的第一个分类数据进行查询并渲染

*/

    cCategoryLnav(
      index = 0,
      maitKeyi = {
        maitKey: this.categoryLeft[0].maitKey,
        miniWallkey: this.categoryLeft[0].miniWallkey,
      }
    ) {
      this.currentIndex = index;
      this.$emit("CategoryLKey", maitKeyi);
    },
  },
  components: {},
};
</script>

<style scoped>
.categoryleftlistitemblock {
  font-size: 16px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: rgb(224, 224, 224);
}
.active {
  color: var(--color-high-text);
  border-left: 2px var(--color-high-text) solid;
  background-color: #fff;
}
</style>
