<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <el-menu-item-group>
            <template slot="title"><i class="el-icon-menu"></i>综合信息</template>
            <el-menu-item index="/">首页</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title"><i class="el-icon-user"></i>管理员账户</template>
            <el-menu-item index="/admin/list">管理员列表</el-menu-item>
            <el-menu-item index="/admin/operate">管理员操作</el-menu-item>
          </el-menu-item-group>
          <template slot="title"><i class="el-icon-user-solid"></i>会员管理</template>
          <el-menu-item-group>
            <template slot="title"><i class="el-icon-user"></i>会员账户</template>
            <el-menu-item index="/user/lists">会员列表</el-menu-item>
            <el-menu-item index="/user/operate">会员操作</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title"><i class="el-icon-tickets"></i>交易信息</template>
            <el-menu-item index="/user/trans">订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-opportunity"></i>文章管理</template>
          <el-menu-item-group>
            <template slot="title">文章管理</template>
            <el-menu-item index="article/list">文章列表</el-menu-item>
            <el-menu-item index="article/edit">文章操作</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px;color: #fff;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/user/info">查看</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/user/create">新增</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {}
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/Home.scss";
</style>
