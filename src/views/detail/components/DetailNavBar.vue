<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="ackClick()">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="title" slot="center">
        <div
          class="title-item"
          :class="{active:currentIndex==index}"
          v-for="(item,index) in titles"
          :key="index"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
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
.title {
  display: flex;
}

.title .title-item {
  flex: 1;
  font-size: 13px;
}

.active {
  color: var(--color-high-text);
}
.back i {
  font-size: 26px;
  color: #333;
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
