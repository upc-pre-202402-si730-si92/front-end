<template>
  <div>
    <div>
      <pv-button @click="toggleForm(true)" label="Login" />
      <pv-button @click="toggleForm(false)" label="Register" />
    </div>
    <div v-if="showLogin">
      <login-form />
    </div>
    <div v-else>
      <register-form />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@/contexts/security/components/login-form.component.vue'
import RegisterForm from '@/contexts/security/components/register-form.component.vue'

const showLogin = ref(true)

function toggleForm(isLogin) {
  showLogin.value = isLogin
}
</script>
