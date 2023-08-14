import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../views/main.vue'

const routes = [
  {
    path: '/',
    redirect: '/welcome',
    name: 'welcome',
    meta: {
      hide: true,
      icon: 'Menu'
    },
    component: main,
    children: [
      {
        path: 'welcome',
        name: 'welcomeView',
        meta: {
          hide: true,
          keepAlive: true,
          title: '欢迎'
        },
        component: () => import(/* webpackChunkName: "welcome-view" */ '@/views/other/welcome-view.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'loginView',
    meta: {
      hide: true,
      keepAlive: true,
      title: '登录'
    },
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login-view.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
