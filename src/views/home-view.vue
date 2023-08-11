<template>
  <el-container id="main-container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-main>Main</el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="less" scoped>
#main-container {
  width: 100%;
  height: 100%;
}
</style>
