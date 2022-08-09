/*
 * @Author: Andy
 * @Date: 2022-04-24 16:46:16
 * @LastEditTime: 2022-06-30 16:22:10
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  $message: any
  $notification:any
  $dialog:any
  WIDGET: any
}