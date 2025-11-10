import { createRouter, createWebHistory } from 'vue-router'

// Lazy-load the PlantView for better performance
const PlantView = () => import('../views/PlantView.vue')

const routes = [
  {
    path: '/plant/:id',
    name: 'PlantDetail',
    component: PlantView,
    props: true
  },
  {
    path: '/',
    redirect: '/plant/monstera-deliciosa'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      template: `<div style="padding:2rem;text-align:center"><h2>ไม่พบหน้าที่ต้องการ</h2><p>เส้นทางนี้ไม่มีอยู่ในระบบ</p></div>`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
