/*
 * @Author: Andy
 * @Date: 2022-04-24 16:13:03
 * @LastEditTime: 2022-09-24 15:34:49
 */
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './routerGuards'
import layout from '@/components/layOut.vue'
import homeView from '@/views/home/index.vue'
import userlist from '@/views/user/UserList.vue'
import city from '@/views/city/city.vue'
import map from '@/views/city/map.vue'
import monster from '@/views/monster/monster.vue'
import skill from '@/views/skill/skill.vue'
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
      {
        path: '/player',
        component: userlist,
      },
      {
        path: '/city/city',
        component: city,
      },
      {
        path: '/city/map',
        component: map,
      },
      {
        path: '/monster/list',
        component: monster,
      },
      {
        path: '/skill/list',
        component: skill,
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
