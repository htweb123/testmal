<!--  -->
<template>
  <div class="profile" v-if="login_state_store.loginInfo_state">
    <scroll class="content">
      <profile-info :infoData="login_state_store" />
      <profile-lump>
        <div slot="profile_ico">
          <img src="~assets/img/profile/dd.png" alt />
        </div>
        <div slot="profile_test">我的订单</div>
        <div slot="profile_detail">查看全部订单&nbsp;&gt;</div>

        <template slot="profile_conten">
          <div class="profile_conten_lay_item">
            <img src="~assets/img/profile/d1.png" alt />
            <p>代付款</p>
          </div>
          <div class="profile_conten_lay_item">
            <img src="~assets/img/profile/d2.png" alt />
            <p>代收货</p>
          </div>
          <div class="profile_conten_lay_item">
            <img src="~assets/img/profile/d3.png" alt />
            <p>代评价</p>
          </div>
          <div class="profile_conten_lay_item">
            <img src="~assets/img/profile/d4.png" alt />
            <p>退修/退换</p>
          </div>
        </template>
      </profile-lump>
      <profile-lump>
        <div slot="profile_ico">
          <img src="~assets/img/profile/d5.png" alt />
        </div>
        <div slot="profile_test">我的钱包</div>
        <div slot="profile_detail">小金库、金条等&nbsp;&gt;</div>

        <template slot="profile_conten">
          <div class="profile_conten_lay_item">
            <p>0.00</p>
            <p>账户余额</p>
          </div>
          <div class="profile_conten_lay_item">
            <p>0</p>
            <p>优惠券</p>
          </div>
          <div class="profile_conten_lay_item">
            <p>0</p>
            <p>京豆</p>
          </div>
          <div class="profile_conten_lay_item">
            <p>0</p>
            <p>京东卡/E卡</p>
          </div>
        </template>
      </profile-lump>
      <div class="profile_fun_lay">
        <profile-fun>
          <div slot="profile_ico">
            <img src="~assets/img/profile/d6.png" alt />
          </div>
          <div slot="profile_name">我的服务</div>
          <div slot="profile_text">小金库、金卡&nbsp;&gt;</div>
        </profile-fun>
        <profile-fun>
          <div slot="profile_ico">
            <img src="~assets/img/profile/d7.png" alt />
          </div>
          <div slot="profile_name">我的会员</div>
          <div slot="profile_text">会员俱乐部&nbsp;&gt;</div>
        </profile-fun>
        <profile-fun>
          <div slot="profile_ico">
            <img src="~assets/img/profile/d8.png" alt />
          </div>
          <div slot="profile_name">我的收货地址</div>
          <div slot="profile_text">去设置&nbsp;&gt;</div>
        </profile-fun>
      </div>
      <div class="exit_go">
        <profile-fun>
          <div slot="profile_ico">
            <img src="~assets/img/profile/d9.png" alt />
          </div>
          <div slot="profile_name">退出登录</div>
          <div slot="profile_text"></div>
        </profile-fun>
      </div>
    </scroll>
  </div>
</template>

<script>
// 导入scroll滚动
import Scroll from "components/common/scroll/Scroll";

// 用户信息
import ProfileInfo from "./components/ProfileInfo";
// 各个公共块
import ProfileLump from "components/content/profileLump/ProfileLump";
import ProfileFun from "components/content/profileFun/ProfileFun";

import { Dialog } from "vant";

export default {
  name: "Profile",
  data() {
    return {
      login_state_store: {},
    };
  },
  components: {
    ProfileInfo,
    ProfileLump,
    Scroll,
    ProfileFun,
    Dialog,
  },
  created() {},
  computed: {},
  methods: {
    go_url() {
      Dialog.confirm({
        title: "提示！",
        message: "暂未进行登录，是否进入登录页面。",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
    // 获取vuex中的用户信息
    loginState_update() {
      if (this.$store.state.loginInfo.loginInfo_state) {
        this.login_state_store = this.$store.state.loginInfo;
      } else {
        this.go_url();
      }
    },
  },
  activated() {
    this.$nextTick(() => {
      this.loginState_update();
    });
  },
};
</script>

<style  scoped>
.profile {
  background-color: rgb(243, 243, 243);
}

.content {
  height: calc(100vh - 49px);
}

.profile_conten_lay_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile_conten_lay_item p {
  padding-top: 5px;
}
.profile_fun_lay {
  border-top: 1px rgb(175, 175, 175) solid;
}

.exit_go {
  border-top: 1px rgb(175, 175, 175) solid;
  margin-top: 24px;
}
</style>
