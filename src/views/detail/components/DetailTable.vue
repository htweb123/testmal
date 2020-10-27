<template>
  <div class="detail-table" v-if="Object.keys(itemParams).length!=0">
    <table class="detail-tab-size" v-for="(table,index) in itemParams.rule.tables" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="detail-tab-info">
      <tr v-for="(tr,index) in itemParams.info.set" :key="index">
        <td width="20%">{{tr.key}}</td>
        <td width="50%">{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailTable",
  props: {
    itemParams: {
      type: Object,
      defaUlt() {
        return {};
      },
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

.detail-table{
  background-color: #fff;
}

tr,
table {
  width: 100%;
}
td {
  padding: 4px;
  font-size: 14px;
}
tr {
  border-bottom: 1px #999 solid;
  display: inline-table;
}

.detail-tab-info td:nth-child(2) {
  line-height: 140%;
  color: var(--color-high-text);
}

.detail-tab-size,.detail-tab-info {
  border-bottom: 4px rgb(231, 225, 225) solid;
  padding: 3% 0;
}

.detail-tab-size td:nth-child(1){
  width: 24%;
}

tr:nth-last-child(1){
  border-bottom: 0;
}

</style>
