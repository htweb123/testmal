<template>
  <div class="backtop">
    <img src="~/assets/img/top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 9999;
}
</style>
