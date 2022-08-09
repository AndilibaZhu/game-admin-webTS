/*
 * @Author: Andy
 * @Date: 2022-05-01 15:34:03
 * @LastEditTime: 2022-08-09 17:08:35
 */
import { Router } from 'vue-router'
import { mainStore } from '@/store/index'

const whiteList = ['/login']

// 创建路由守卫
export const createRouterGuards = (router: Router) => {
  router.beforeEach(async (to, form, next) => {
    const store = mainStore()
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else if (!window.sessionStorage.getItem('token')) {
      next({ path: '/login', replace: true })
    } else {
      next()
    }
  })
}
