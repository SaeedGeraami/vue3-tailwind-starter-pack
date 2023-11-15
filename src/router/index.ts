import { createRouter, createWebHistory } from 'vue-router'
import ExampleFile from '../views/ExampleFileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExampleFile
    },
   
  ]
})

export default router
