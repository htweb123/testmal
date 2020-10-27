<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.png" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
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
.check-button {
  border: 2px #aaa solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check {
  border-color: var(--color-high-text);
  background-color: var(--color-high-text);
}
</style>
