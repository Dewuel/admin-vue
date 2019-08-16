<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="用户名" width="200"> </el-table-column>
    <el-table-column prop="email" label="邮箱" width="220"> </el-table-column>
    <el-table-column prop="avatar" label="头像"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      tableData: []
    }
  }
};
</script>

<style scoped></style>