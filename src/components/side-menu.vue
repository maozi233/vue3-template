<template lang="pug">
template(v-for="menu in routes")
  //- 有children
  el-sub-menu(v-if="menu.children" :index="menu.path")
    template(#title)
      el-icon(v-if="menu.meta.icon")
        component(:is="menu.meta.icon")
      span {{ menu.meta.title || menu.path }}
    side-menu(:routes="menu.children")
  //- 无children
  el-menu-item(v-else :index="menu.path")
    el-icon(v-if="menu.meta.icon")
      component(:is="menu.meta.icon")
    span {{ menu.meta.title || menu.path }}
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  routes: {
    type: Array
  }
})
</script>
