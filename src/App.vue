<template>
  <div id="app">
    <top :username="hello"></top>
    <div class="main-content">
    <router-link to="/gaoxin/page">Go page</router-link>
    <router-link to="/">Go index</router-link>
    <router-view></router-view>
      <side-bar class="side-bar"></side-bar>
      <el-pagination
        layout="prev, pager, next"
        :total="500">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue'
import top from './components/top.vue'
import 'normalize.css'

export default {
  data () {
    return {
      hello: 'yagnhc'
    }
  },
  components: {
    top,
    sideBar
  },
  methods: {

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
body {
  height: 100%;
  font-family: Helvetica, sans-serif;
}
#app{
  height: 100%;
}
.main-content{
  height: 100%;
  position: relative;
  padding-left: 220px;
  padding-top: 80px;
  box-sizing: border-box;
}
.side-bar{
  width: 200px;
  height: 100%;
  left: 10px;
  top: 0;
  padding-top: 80px;
  position: absolute;
  box-sizing: border-box;
}
</style>
