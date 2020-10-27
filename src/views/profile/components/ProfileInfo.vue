<template>
  <div class="profile_info">
    <van-skeleton title avatar :row="3" :loading="loading">
      <div>
        <div class="actual_profile_info">
          <div class="actual_profile_info_conten">
            <div class="profile_info_left">
              <img src="~assets/img/profile/head_img.png" alt />
            </div>
            <div class="profile_info_right">
              <div class="profile_info_right_name">{{infoData.name}}</div>
              <div class="profile_info_right_sgin">{{infoData.introduce}}</div>
              <div class="profile_info_right_des">
                <div class="right_des_age" v-for="(item,index) in infoData.interest" :key="index">
                  <van-tag round type="primary" :color="bgColore[index]">{{item}}</van-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {
    infoData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      loading: true,
      bgColore: [
        "rgb(31, 183, 189)",
        "rgb(26, 145, 45)",
        "rgb(90, 43, 177)",
        "rgb(201, 26, 26",
      ],
    };
  },

  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.profile_info {
  margin-bottom: 24px;
  background-color: #fff;
}
.actual_profile_info_conten {
  display: flex;
  justify-content: space-between;
  padding: 16px 10px;
  background-image: linear-gradient(rgb(20, 115, 153), rgb(52, 116, 189));
}
.profile_info_right_name {
  font-size: 16px;
  color: #fff;
}
.profile_info_right_sgin {
  font-size: 14px;
  line-height: 150%;
  padding: 8px 1px;
  color: #fff;
}

.profile_info_left {
  margin-right: 8px;
}

.profile_info_left,
.profile_info_left img {
  width: 48px;
  height: 48px;
}
.profile_info_left img {
  border-radius: 50%;
}

.profile_info_right {
  flex: 1;
}

.profile_info_right_des {
  display: flex;
  flex-wrap: wrap;
}

.profile_info_right_des .right_des_age {
  margin-right: 4px;
}
</style>
