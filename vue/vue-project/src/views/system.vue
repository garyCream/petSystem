<template>
  <div>
    <h1>平台管理系统</h1>
    <!-- <div class="container">
            <div>
                <dl>
                    <dt>商户管理</dt>
                    <dd><router-link to="/system/studentsList">商户列表</router-link></dd>
                    <dd><router-link to="/system/addStudents">申请处理</router-link></dd>
                </dl>
                <dl>
                    <dt>门店管理</dt>
                    <dd><router-link to="/system/studentsList">门店列表</router-link></dd>
                    <dd><router-link to="/system/addStudents">申请处理</router-link></dd>
                </dl>
                <dl>
                    <dt>宠主管理</dt>
                    <dd><router-link to="/system/studentsList">宠主列表</router-link></dd>
                    <dd><router-link to="/system/addStudents">修改信息</router-link></dd>
                </dl>
            </div>
            <div class="container-left">
                <router-view></router-view>
            </div>
    </div>-->
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>商户管理
            </template>
            <el-menu-item-group>
              <template slot="title">店主管理</template>
              <el-menu-item index="1-1">店主列表</el-menu-item>
              <el-menu-item index="1-2">申请处理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">门店管理</template>
              <el-menu-item index="1-1">门店列表</el-menu-item>
              <el-menu-item index="1-2">申请处理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>宠主管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">宠主列表</el-menu-item>
              <el-menu-item index="2-2">修改信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>通知
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">系统通知</el-menu-item>
              <el-menu-item index="3-2">处理通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px"></el-header>
        <el-main>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.container {
  display: flex;
}
.container-left {
  margin-left: 30px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
