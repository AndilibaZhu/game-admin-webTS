/*
 * @Author: Andy
 * @Date: 2022-04-24 16:27:39
 * @LastEditTime: 2022-08-11 21:10:08
 */

import { defineStore } from 'pinia'

// 创建一个新的 store 实例
interface state{
  token: string,
  PageHeight: number,
}
export const mainStore = defineStore('main', {
  // state 类似组件的data选项，函数形式返回对象
  state: ():state => (
    {
      token: '',
      PageHeight: 0,
    }
  ),
  getters: {},
  actions: {

  },
})
