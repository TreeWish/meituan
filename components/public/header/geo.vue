<template>
  <div class="m-geo">
    <i class="el-icon-location">{{ $store.state.geo.position.city }}</i>
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>
