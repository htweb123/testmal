<template>
  <div class="detail-img-info">
    <div class="detail-img-info-tile">
      <div class="detail-img-info-cip1"></div>
      <div class="detail-img-info-tile">{{detailimg.desc}}</div>
      <div class="detail-img-info-cip2"></div>
    </div>
    <div class="detail-img-info-list">
      <div
        class="detail-img-info-list-item"
        v-for="(item,index) in detailimg.detailImage"
        :key="index"
      >
        <div class="detail-img-info-list-item-tile">{{item.key}}</div>
        <div class="detail-img-info-list-item-show">
          <div v-for="(itemd,indexd) in item.list" :key="indexd">
            <img :src="itemd" @load="imageload" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImageInfo",

  data() {
    return {};
  },
  props: {
    detailimg: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    imageload() {
      this.$emit("detailImageLoad");
    },
  },
  components: {},
};
</script>

<style scoped>
.detail-img-info {
  background-color: #fff;
}

.detail-img-info-tile {
  font-size: 14px;
  line-height: 160%;
  color: #555;
  letter-spacing: 0.5px;
  padding: 8px 4px;
}
.detail-img-info-cip1 {
  width: 50%;
  height: 1px;
  background-color: #333;
}
.detail-img-info-cip2 {
  width: 50%;
  height: 1px;
  background-color: #333;
  margin-left: auto;
}
.detail-img-info-list-item-tile {
  font-size: 16px;
  line-height: 1.2;
  color: #555;
  letter-spacing: 0.5px;
  padding: 6px 0;
  text-align: center;
}

.detail-img-info-list-item-show img {
  max-width: 100%;
}
</style>
