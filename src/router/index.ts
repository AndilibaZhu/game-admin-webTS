/*
 * @Author: Andy
 * @Date: 2022-04-24 16:13:03
 * @LastEditTime: 2022-08-09 17:06:41
 */
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './routerGuards'
import layout from '@/components/layout/layout.vue'
import homeView from'@/views/home/index.vue'
// 1. 定义路由组件.
// 也可以从其他文件导入
// import store from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: homeView,
      },
    ],
  },
  {
    path: '/user',
    component: layout,
    children: [],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export function setupRouter(app: App) {
  app.use(router)
  // 路由守卫
  createRouterGuards(router)
}

export default router
