import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BooksDashboard from '../views/BooksDashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'AllBooksDashboard' }
  },
  {
    path: '/all',
    name: 'AllBooksDashboard',
    component: BooksDashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
