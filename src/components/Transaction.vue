<template>
  <el-table :data="tableData">
    <el-table-column prop="uid" label="订单id" width="400"> </el-table-column>
    <el-table-column prop="name" label="用户名" width="220"> </el-table-column>
    <el-table-column prop="money" label="金额" width="150"> </el-table-column>
    <el-table-column prop="time" label="下单时间" width="300"> </el-table-column>
    <el-table-column prop="finished" label="订单完成"> </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "Transaction",
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style scoped>

</style>