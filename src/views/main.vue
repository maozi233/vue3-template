<template lang="pug">
el-container#main-container
  el-aside(width="200px")
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
            component(:is="Component" :key="$route.path" v-if="!$route.meta.noCahce")
          component(:is="Component" :key="$route.path" v-if="$route.meta.noCahce")
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
</style>
