import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// PrimeVue Components
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import Checkbox from 'primevue/checkbox'
import Rating from 'primevue/rating'
import Button from 'primevue/button'
import i18n from '@/translate/i18n.js'
import {createWebHistory,  createRouter } from 'vue-router'

import AuthManagement from '@/contexts/security/pages/auth-management.page.vue'
import TutorialManagement from '@/contexts/learning/pages/tutorial-management.page.vue'

const routes = [
  { path: '/', redirect: '/security' },
  { path: '/security', component: AuthManagement },
  { path: '/tutorial', component: TutorialManagement },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

// Apply PrimeVue with custom settings
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

// Register PrimeVue components globally
app.component('pv-input-text', InputText)
app.component('pv-textarea', Textarea)
app.component('pv-dropdown', Dropdown)
app.component('pv-radio-button', RadioButton)
app.component('pv-input-number', InputNumber)
app.component('pv-calendar', Calendar)
app.component('pv-checkbox', Checkbox)
app.component('pv-rating', Rating)
app.component('pv-button', Button)


app.use(router);
app.use(i18n)
app.mount('#app')
