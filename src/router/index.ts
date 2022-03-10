import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AllBooksDashboard from '../views/AllBooksDashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'AllBooksDashboard' }
  },
  {
    path: '/all',
    name: 'AllBooksDashboard',
    component: AllBooksDashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
