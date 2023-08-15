<template lang="pug">
el-container#main-container
  el-aside(width="200px")
    el-menu(router id='custom-menu')
      sideMenu
  el-container
    el-header Header
    el-container
      el-main
        router-view(v-slot="{ Component }")
          keep-alive
            component(:is="Component" :key="$route.path" v-if="$route.meta.keepAlive")
          component(:is="Component" v-if="!$route.meta.keepAlive")
</template>

<script>
import sideMenu from '@/components/side-menu'

export default {
  name: 'HomeView',
  components: {
    sideMenu
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
</style>
