<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <index-menu />
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="24">
        <artistic/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IndexMenu from '@/components/index/menu.vue'
import Life from '@/components/index/life.vue'
import Artistic from '@/components/index/artistic.vue'

export default {
  components: {
    IndexMenu,
    Life,
    Artistic
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
