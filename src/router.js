import AuthManagement from '@/contexts/security/pages/auth-management.page.vue'
import TutorialManagement from '@/contexts/learning/pages/tutorial-management.page.vue'
import NotFound from '@/contexts/shared/pages/not-found.page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TutorialForm from './contexts/learning/components/tutorial-form.component.vue'
import LoginForm from '@/contexts/security/components/login-form.component.vue'

const routes = [
  { path: '/', component: LoginForm },
  { path: '/login', component: LoginForm, name: 'login' },
  { path: '/security', component: AuthManagement, name: 'security' },
  { path: '/tutorial', component: TutorialManagement },
  { path: '/create-tutorial', component: TutorialForm, name: 'createTutorial' },
  { path: '/update-tutorial/:id', component: TutorialForm, name: 'updateTutorial' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
