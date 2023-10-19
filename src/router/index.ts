import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/components/header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Home',
      component: () => import("@/views/home.vue"),
    },
  ]
})

export default router