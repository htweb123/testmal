<template>
  <div class="login">
    <login-nav-bar />
    <login-user />
  </div>
</template>

<script>
import LoginNavBar from "./components/LoginNavBar";
import LoginUser from "./components/LoginUser";
export default {
  name: "Login",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    LoginNavBar,
    LoginUser,
  },
};
</script>

<style scoped>
</style>
