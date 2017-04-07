<template>
  <div class="top">
    <div class="logo">logo</div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">上海高欣</el-menu-item>
      <el-submenu index="2">
        <template slot="title">上海嵩恒</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">上海展盟</el-menu-item>
      <el-menu-item index="4">上海乐哈</el-menu-item>
    </el-menu>
    <div class="user">
      <div class="user-info">当前登录用户：<span class="user-name">{{username}}</span></div>
      <el-button type="primary" class="logout" @click.native="startHacking">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  props:['username'],
  methods: {
      startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
    handleSelect(key, keyPath) {
       console.log(key, keyPath);
    }
  }
}
</script>

<style>
.top{
  width: 100%;
  min-width: 1200px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99;
  padding-left: 220px;
  box-sizing: border-box;
}
.user{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.logout,.user-info{
  display: inline-block;
}
.logout{
  margin: 0 10px;
}
.logo{
  width: 220px;
  height: 100%;
  background-color: #dccccc;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 60px;
}
</style>