<template>
  <div class="detail-info" v-if="Object.keys(shop).length!==0">
    <div class="detail-info-logo">
      <img :src="shop.shopLogo" alt />
      <p>{{shop.shopName}}</p>
    </div>
    <div class="detail-info-value">
      <div class="detail-info-baby">
        <div class="detail-info-baby-item">
          <p>{{shop.shopcSells | sellCountFilter}}</p>
          <p>总销量</p>
        </div>
        <div class="detail-info-baby-item">
          <p>{{shop.shopcGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="detail-info-describe">
        <div class="detail-info-describe-item" v-for="(item,index) in shop.shopScore" :key="index">
          <div class="detail-des-left">{{item.name}}</div>
          <div class="detail-des-center" :class="{detail_des_on:item.isBetter}">{{item.score}}</div>
          <div
            class="detail-des-right"
            :class="{detail_des_on:item.isBetter}"
          >{{item.isBetter?"高":"低"}}</div>
        </div>
      </div>
    </div>
    <div class="detail-info-go">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  
  data() {
    return {};
  },
  props: {
    shop: {
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
  methods: {},
  components: {},
  filters: {
    sellCountFilter(val) {
      var value = val > 10000 ? (val / 10000).toFixed(2) + "万" : val;
      return value;
    },
  },
};
</script>

<style scoped>
.detail-info {
  border-bottom: 4px rgb(231, 225, 225) solid;
  background-color: #fff;
}

.detail-info-value {
  display: flex;
  align-items: center;
}

.detail-info-logo img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px #333 solid;
  margin-right: 8px;
}
.detail-info-logo p {
  font-size: 15px;
  color: #666;
  line-height: 1.2;
  letter-spacing: 1px;
}
.detail-info-logo {
  display: flex;
  align-items: center;
  padding: 10px 4px;
}

.detail-info-baby {
  display: flex;
  width: 50%;
  border-right: 1px rgb(163, 163, 163) solid;
}

.detail-info-describe {
  width: 50%;
}

.detail-info-baby-item {
  flex: 1;
}

.detail-info-baby-item p {
  text-align: center;
}

.detail-info-baby-item p:nth-child(1) {
  font-size: 16px;
  color: #333;
  line-height: 1.2;
}
.detail-info-baby-item p:nth-child(2) {
  font-size: 13px;
  color: #333;
  line-height: 1.2;
  padding-top: 6px;
}

.detail-des-left {
  font-size: 13px;
  color: #333;
  line-height: 1.2;
  width: 40%;
}

.detail-des-center {
  font-size: 13px;
  color: rgb(197, 38, 38);
  line-height: 1.2;
  width: 20%;
}

.detail-des-right {
  font-size: 10px;
  color: #fff;
  line-height: 1.2;
  background-color: rgb(197, 38, 38);
  width: 14%;
  text-align: center;
  padding: 2px 0;
}

.detail-info-describe-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
}

.detail-info-describe-item:nth-child(1) {
  padding-top: 0;
}

.detail-des-right.detail_des_on {
  background-color: rgb(0, 253, 0);
}

.detail-des-center.detail_des_on {
  color: rgb(0, 253, 0);
}

.detail-info-go {
  width: 100px;
  background-color: #e9e6e6;
  border-radius: 6px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  text-decoration: underline;
  color: #444;
  font-size: 14px;
  margin: 10px auto;
}
</style>
