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

<script>
import { routes } from '@/router'
import { deepClone } from '@/utils'

const getDefaultMenus = () => {
  const menus = deepClone(routes)

  const filterMenu = (menus, result = [], father) => {
    menus.forEach(route => {
      if (route?.meta?.hide) {
        return
      }
      if (father?.path) {
        route.path = `${father.path}/${route.path}`
      }
      result.push(route)
      if (route.children) {
        route.children = filterMenu(route.children, [], route)
      }
    })
    return result
  }

  const validMenu = filterMenu(menus)

  return validMenu
}

export default {
  props: {
    routes: {
      type: Array,
      default: getDefaultMenus
    }
  }
}
</script>
