<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="detail-tile">{{goods.title}}</div>
    <div class="detail-money">
      <div class="detail-money-after">￥{{goods.realPrie}}</div>
      <div class="detail-money-first">{{goods.newPrice}}</div>
      <div class="detail-money-state">{{goods.discount}}</div>
    </div>
    <div class="detail-state">
      <div class="detail-state-sales">{{goods.columns[0]}}</div>
      <div class="detail-state-collect">{{goods.columns[1]}}</div>
      <div class="detail-state-carriage">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="detail-promise">
      <div class="detail-promise-item" v-for="(item,index) in goods.services.length-1" :key="index">
        <img :src="goods.services[item-1].icon" alt />
        <p>{{goods.services[item-1].name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
 
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  created() {},
  mounted() { 
  },
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.detail-tile {
  font-size: 15px;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: #333;
  padding: 4px;
}
.detail-money {
  display: flex;
  align-items: center;
}

.detail-money-first {
  font-size: 13px;
  color: #666;
  text-decoration: line-through;
  line-height: 1.2;
  margin: 0 5px;
}

.detail-money-after {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-high-text);
  line-height: 1.2;
}

.detail-money-state {
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 10px;
  padding: 3px 5px;
  border-radius: 8px;
  line-height: 1.2;
}

.detail-money {
  padding: 2px 4px 12px;
}

.detail-state {
  font-size: 14px;
  color: #666;
  line-height: 1.2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  border-bottom: 1px #b2b2b2 solid;
  padding-bottom: 10px;
}

.detail-promise img {
  width: 13px;
  height: 13px;
  margin-right: 3px;
}

.detail-promise {
  font-size: 14px;
  color: #333;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 4px;
  border-bottom: 4px rgb(231, 225, 225) solid;
  flex-wrap: wrap;
}

.detail-promise-item {
  display: flex;
  align-items: center;
  margin-top: 6px;
}
</style>
