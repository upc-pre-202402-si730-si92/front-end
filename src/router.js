import AuthManagement from '@/contexts/security/pages/auth-management.page.vue'
import TutorialManagement from '@/contexts/learning/pages/tutorial-management.page.vue'
import NotFound from '@/contexts/shared/pages/not-found.page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/contexts/shared/pages/the-home.page.vue'

const routes = [
  { path: '/', component: TheHome },
  { path: '/security', component: AuthManagement },
  { path: '/tutorial', component: TutorialManagement },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
