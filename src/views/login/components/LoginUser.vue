<template>
  <div class="loginuser">
    <van-form class="conten_login" @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { loginInfo } from "network/login";
export default {
  name: "LoginUser",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onSubmit() {
      Toast.loading("登陆中...");
      setTimeout(() => {
        loginInfo().then((res) => {
          let login_state = res.data.find((res) => {
            if (
              res.login.id == this.username &&
              res.login.code == this.password
            ) {
              return res;
            } else {
              return "";
            }
            Toast.clear();
          });

          if (login_state != "" && login_state != undefined) {
            Toast.success("登陆成功！");
            // localStorage.setItem("")
            console.log(login_state);
            this.$store.commit("login_state", login_state);
            this.$router.push("/");
          } else {
            Toast.fail("登陆失败,账号或密码有误");
          }
        });
      }, 1000);
    },
  },
  components: {},
};
</script>

<style scoped>
input,
span {
  font-size: 16px;
}
.conten_login {
  margin-top: 20px;
}
</style>
