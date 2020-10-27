<template>
  <div class="detail-vant">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in detailVant" :key="index">
        <img :src="item" alt srcset />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailVant",

  data() {
    return {};
  },
  props: {
    detailVant: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.my-swipe {
  height: 300px;
  overflow: hidden;
}
</style>
