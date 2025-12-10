import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import NewsPage from '@/components/NewsPage.vue'
import NewDetail from '@/components/NewDetail.vue'
import { createPinia } from 'pinia'

// 配置路由规则
const routes = [
  // 路由规则
  { path: "/home", component: HomePage },
  { path: "/about", component: AboutPage },
  {
    path: "/news", component: NewsPage,name: 'news',
    children: [
      { name: 'newsDetail', path: "detail/:id/:title/:content", component: NewDetail }
    ]
  },
]
//创建路由实例
const router = createRouter({
  history: createWebHistory(), // 路由工作模式
  routes
})
// 挂载路由
const app = createApp(App)
app.use(router)

// 挂载状态管理
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
