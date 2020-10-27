<template>
  <div class="profilelump">
    <div class="profilelump_layout">
      <div class="profilelump_layout_tile">
        <div class="profilelump_layout_tile_left">
          <div class="profilelump_layout_tile_left_ico">
            <slot name="profile_ico">xxx</slot>
          </div>
          <div class="profilelump_layout_tile_left_text">
            <slot name="profile_test">xxx</slot>
          </div>
        </div>
        <div class="profilelump_layout_tile_right">
          <slot name="profile_detail">xxx</slot>
        </div>
      </div>
      <div class="profilelump_layout_conten">
        <slot name="profile_conten">xxx</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLump",
  props: {},
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
.profilelump_layout_tile_left,
.profilelump_layout_tile {
  display: flex;
  align-items: center;
}

.profilelump_layout_tile {
  padding: 10px 6px;
  border-top: 1px rgb(175, 175, 175) solid;
  border-bottom: 1px rgb(175, 175, 175) solid;
}

.profilelump_layout_tile_left,
.profilelump_layout_tile_right {
  flex: 1;
}

.profilelump_layout_tile_left_text {
  font-size: 16px;
  color: #333;
}

.profilelump_layout_tile_right {
  text-align: right;
  color: rgb(175, 175, 175);
  font-size: 13px;
}

.profilelump_layout_tile_left_ico {
  margin-right: 4px;
}

.profilelump_layout_conten {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.profilelump_layout {
  margin-bottom: 24px;
  background-color: #fff;
  border-bottom: 1px rgb(175, 175, 175) solid;
}
</style>
