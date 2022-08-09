/*
 * @Author: Andy
 * @Date: 2022-04-24 16:00:45
 * @LastEditTime: 2022-06-30 17:55:33
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from './router'
import '@/styles/index.less'
import 'animate.css'

const pinia = createPinia()

const app = createApp(App)
setupRouter(app)
app.use(pinia).mount('#app')
