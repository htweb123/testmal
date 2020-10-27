<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="detail-comment">
    <div class="user-evaluate-tile">
      <p>用户评价</p>
      <p>更多&gt;</p>
    </div>
    <div class="user-evaluate-conten">
      <div class="evaluat-lis">
        <div class="evaluat-lis-nr" v-for="(itema,index) in commentInfo.list" :key="index">
          <div class="evaluat-lis-tile">
            <div>
              <img :src="itema.user.avatar" alt />
            </div>
            <p>{{itema.user.uname}}</p>
          </div>
          <div class="evaluat-lis-des">{{itema.content}}</div>
          <div class="evaluat-lis-time">{{itema.created | showDate}}&emsp;{{itema.style}}</div>
          <div class="evaluat-lis-img">
            <div class="evaluat-lis-img-item">
              <img v-for="(itemb,indey) in itema.images" :key="indey" :src="itemb" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
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
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-mm-dd");
    },
  },
};
</script>

<style scoped>
.detail-comment {
  background-color: #fff;
  border-bottom: 4px rgb(231, 225, 225) solid;
}

.evaluat-lis-des {
  font-size: 14px;
  color: #333;
  line-height: 150%;
  padding: 4px 0;
}

.evaluat-lis-time {
  font-size: 13px;
  color: #999;
  line-height: 1.2;
}

.evaluat-lis-tile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.evaluat-lis-tile p {
  font-size: 15px;
  color: #333;
  line-height: 1.2;
  margin-left: 10px;
}

.evaluat-lis-tile {
  display: flex;
  align-items: center;
}

.user-evaluate-tile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 4px;
  border-bottom: 1px #666 solid;
}

.evaluat-lis-nr {
  padding: 10px 4px;
}

.user-evaluate-tile p:nth-child(1) {
  font-size: 15px;
  color: #333;
  line-height: 1.2;
}

.user-evaluate-tile p:nth-child(2) {
  font-size: 13px;
  color: #333;
  line-height: 1.2;
}

.evaluat-lis-img-item {
  display: flex;
  align-items: flex-start;
  margin-top: 6px;
}

.evaluat-lis-img-item img:nth-last-child(1) {
  margin-right: 0;
}

.evaluat-lis-img-item:nth-last-child(1) {
  margin-right: 0;
}

.evaluat-lis-img-item img {
  width: 20%;
  margin-right: 10px;
}
</style>
