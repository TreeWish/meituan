<template>
  <div class="page-changeCity">
    <el-card>
      <el-row>
      <el-col :span="24">
        <select-city />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy/>
      </el-col>
    </el-row>
    </el-card>
  </div>
</template>

<script>
import SelectCity from '@/components/changeCity/select'
import Hot from '@/components/changeCity/hot'
import Categroy from '@/components/changeCity/categroy'
export default {
  components: {
    SelectCity,
    Hot,
    Categroy
  }
};
</script>

<style scoped>
  .el-card {
    margin-top: 20px;
  }
</style>
