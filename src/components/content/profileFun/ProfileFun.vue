<template>
  <div class="profilefun">
    <div class="profilefun_conten">
      <div class="profilefun_conten_left">
        <slot name="profile_ico">xxx</slot>
      </div>
      <div class="profilefun_conten_right">
        <div class="profilefun_conten_right_name">
          <slot name="profile_name">xxx</slot>
        </div>
        <div class="profilefun_conten_right_text">
          <slot name="profile_text">xxx</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileFun",
  props: {},
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
.profilefun_conten {
  padding-left: 6px;
  background-color: #fff;
}

.profilefun_conten,
.profilefun_conten_right {
  display: flex;
  align-items: center;
}

.profilefun_conten_left {
  width: 24px;
}
.profilefun_conten_right {
  flex: 1;
  justify-content: space-between;
  border-bottom: 1px rgb(175, 175, 175) solid;
  padding: 13px 0;
  margin-left: 6px;
  padding-right: 6px;
}
.profilefun_conten_right_name {
  font-size: 16px;
  color: #333;
}
.profilefun_conten_right_text {
  font-size: 13px;
  color: rgb(175, 175, 175);
}
</style>

