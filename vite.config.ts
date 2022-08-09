/*
 * @Author: Andy
 * @Date: 2022-04-24 16:00:45
 * @LastEditTime: 2022-06-21 15:35:22
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { NaiveUiResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [NaiveUiResolver()],
      globalComponentsDeclaration: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    host: true,
    port: 2475,
  },
  build: {
    assetsDir: 'static',
  },
})
