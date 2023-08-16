<template lang="pug">
el-container#main-container
  el-aside.menu-wrapper(width="200px")
    div.menu-title 后台管理
    el-menu(
      id='custom-menu'
      router
    )
      sideMenu
  el-container
    el-header Header
    el-container
      el-main
        router-view(v-slot="{ Component }")
          keep-alive
            component(:is="Component" :key="$route.path" v-if="$route.meta.cache")
          component(:is="Component" :key="$route.path" v-if="!$route.meta.cahce")
</template>

<script>
import sideMenu from '@/components/side-menu'

export default {
  name: 'HomeView',
  components: {
    sideMenu
  },
  mounted() {
    console.log('main mounted')
  }
}
</script>

<style lang="less" scoped>
#main-container {
  width: 100%;
  height: 100%;
}

#custom-menu {
  height: 100%;
}

.menu-wrapper {
  display: flex;
  flex-direction: column;
}

.menu-title {
  background: #409EFF;
  color: rgba(255, 255, 255, 0.88);
  font-size: 24px;
  padding: 10px;
  height: 50px;
}
</style>
