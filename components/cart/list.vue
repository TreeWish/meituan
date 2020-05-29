<template>
  <div>
    <el-table :data="cartData" stripe style="width: 980px">
      <el-table-column label="项目" prop="name" width="500"></el-table-column>
      <el-table-column label="单价" prop="price" width="130"></el-table-column>
      <el-table-column label="数量" width="200">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.count" :min="0"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">{{scope.row.price * scope.row.count}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    cartData: Array
  }
};
</script>

<style scoped>
</style>
