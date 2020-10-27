<template>
  <div class="cart-list-item">
    <div class="cart-list-item-check">
      <check-button :isChecked="product.checked" @click.native="checkClick" />
    </div>
    <div class="cart-list-item-img">
      <img :src="product.imge" alt />
    </div>
    <div class="cart-list-item-des">
      <div class="cart-list-item-des-tile">{{product.title}}</div>
      <div class="cart-list-item-des-suggest">{{product.desc}}</div>
      <div class="cart-list-item-des-price">
        <p>￥{{product.price}}</p>
        <p>x{{product.count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  props: {
    product: {
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
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
  components: {
    CheckButton,
  },
};
</script>

<style scoped>
.cart-list-item-check {
  width: 6%;
}

.cart-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px #999 solid;
}
.cart-list-item-img {
  width: 30%;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}
.cart-list-item-des {
  width: 60%;
  padding: 5px 0;
}
.cart-list-item-des-tile {
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cart-list-item-des-suggest {
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 14px 0;
}
.cart-list-item-des-price {
  display: flex;
  justify-content: space-between;
}
.cart-list-item-des-price p {
  font-size: 16px;
}
.cart-list-item-des-price p:nth-child(1) {
  color: lightsalmon;
}
.cart-list-item-des-price p:nth-child(2) {
  color: #333;
}
.cart-list-item-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 6px;
}
</style>
