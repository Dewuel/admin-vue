<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="width: 50vh;" @submit.native.prevent="save">
    <el-form-item label="姓名">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="formLabelAlign.phone"></el-input>
    </el-form-item>
    <el-form-item label="权限">
      <el-input v-model="formLabelAlign.authority"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.pass"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" style="width: 100%;" native-type="submit">确认添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    props: {},
    name: "CreateUser",
    data(){
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          phone: '',
          type: '',
          pass: ''
        }
      }
    },
    methods: {
      save(){

      }
    }
  }
</script>

<style scoped>

</style>