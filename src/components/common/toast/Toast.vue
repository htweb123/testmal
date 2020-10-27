<template>
  <div class="toast" v-show="isShow">{{messa}}</div>
</template>

<script>
export default {
  name: "Toast",
  props: {},
  data() {
    return {
      messa: "",
      isShow: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    show(messa, dura = 1000) {
      this.isShow = true;
      this.messa = messa;
      setTimeout(() => {
        this.isShow = false;
        this.mess = "";
      }, dura);
    },
  },
  components: {},
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  font-size: 14px;
}
</style>
