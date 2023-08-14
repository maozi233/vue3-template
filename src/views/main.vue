<template lang="pug">
el-container#main-container
  el-aside(width="200px")
    el-menu(router)
      side-menu(:routes="routes")
  el-container
    el-header Header
    el-container
      el-main
        router-view(v-slot="{ Component }")
          keep-alive
            component(:is="Component" :key="$route.path" v-if="$route.meta.keepAlive")
          component(:is="Component" v-if="!$route.meta.keepAlive")
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'

import sideMenu from '@/components/side-menu'

const routes = ref()
routes.value = router.options.routes
console.log(routes.value)
</script>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="less" scoped>
#main-container {
  width: 100%;
  height: 100%;
}
</style>
