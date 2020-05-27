<template>
  <div class="m-hcity op-area">
    <dl>
      <dt>热门城市:</dt>
      <dd v-for="item in hotList" :key="item.id">{{item.name === '市辖区' ? item.province.replace('市', '') : item.name.replace('市', '')}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: []
    };
  },
  async mounted() {
    let {
      status,
      data: { hots }
    } = await this.$axios.get("/geo/hotCity");
    if (status === 200) {
      this.hotList = hots;
    }
  }
};
</script>

<style lang="scss" scoped>
 @import "@/assets/css/changeCity/hot.scss";
  .op-area {
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  }
</style>
