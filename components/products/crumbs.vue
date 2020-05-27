<template>
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{this.$store.state.geo.position.city.replace('市', '')}}美团</el-breadcrumb-item>
      <el-breadcrumb-item><a href="#">{{ this.$store.state.geo.position.city.replace('市','') }}{{ decodeURIComponent(keyword) }}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.el-breadcrumb-item {
  font-weight: 400;
}
.el-breadcrumb {
  margin: 20px 0;
}
</style>
