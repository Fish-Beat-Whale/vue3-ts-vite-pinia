<template>
 <el-card class="box-card">
  <div class="box">
   <div class="logo">logo</div>
 <div class="dropdown">
  <el-dropdown>
   
      <div>首页</div>
      
  </el-dropdown>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

 </div>
 <div>
  <el-input v-model="input" placeholder="Please input"  :prefix-icon="Search" />
 </div>
 <div class="userInfo"><el-icon><CirclePlus /></el-icon></div>
  </div>
  </el-card>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'Header'
  })
  
</script>
<script lang="ts" setup>
  import {  Search } from '@element-plus/icons-vue'
  import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped>
.userInfo{
  font-size: 20px;
  color: blue;
}
.dropdown{
  widows: 100px;
}
.box{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.logo{
width: 100px;
height: 40px;
background-color: #999;
display: flex;
justify-content: center;
color: #fff;
align-items: center;
}
.box-card{
  width: 100%;
  height: 70px;
   
}
</style>
