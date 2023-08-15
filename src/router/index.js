import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../views/main.vue'

const routes = [
  {
    path: '/',
    redirect: 'welcome',
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
          title: '欢迎'
        },
        component: () => import(/* webpackChunkName: "welcome-view" */ '@/views/other/welcome-view.vue')
      }
    ]
  },
  {
    path: '/orders',
    meta: {
      icon: 'Menu',
      title: '订单管理'
    },
    component: main,
    children: [
      {
        path: 'order-list',
        name: 'orderList',
        meta: {
          title: '订单列表'
        },
        component: () => import(/* webpackChunkName: "order-list" */ '@/views/orders/order-list.vue')
      },
      {
        path: 'order-detail',
        name: 'orderDetail',
        meta: {
          title: '订单详情'
        },
        component: () => import(/* webpackChunkName: "order-detail" */ '@/views/orders/order-detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'loginView',
    meta: {
      hide: true,
      title: '登录'
    },
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/login-view.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    meta: {
      hide: true
    },
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
