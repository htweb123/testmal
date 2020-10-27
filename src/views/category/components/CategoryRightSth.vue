<template>
  <div class="categoryrightsth">
    <div class="categoryrightsthItem" v-for="(item,index) in CategoryRdata" :key="index">
      <img :src="item.image" alt />
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryRightSth",
  props: {
    CategoryRdata: {
      type: Array,
      default() {
        return [];
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
.categoryrightsth {
  display: flex;
  flex-wrap: wrap;
}
.categoryrightsthItem{
  text-align: center;
}
.categoryrightsthItem img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
 
}
.categoryrightsthItem p {
  text-align: center;
  font-size: 16px;
  line-height: 1.2; 
}
.categoryrightsthItem {
  width: 50%;
  margin-top: 16px;
}
</style>
