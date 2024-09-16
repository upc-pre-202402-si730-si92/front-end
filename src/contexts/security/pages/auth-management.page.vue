<template>
  <div class="auth-container">
    <div class="auth-buttons">
      <pv-button @click="toggleForm(true)" label="Login" class="auth-button" />
      <pv-button @click="toggleForm(false)" label="Register" class="auth-button" />
    </div>
    <div class="auth-form">
      <div v-if="showLogin">
        <login-form />
      </div>
      <div v-else>
        <register-form />
      </div>
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

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  background-color: #f9f9f9;
}

.auth-buttons {
  margin-bottom: 20px;
}

.auth-button {
  margin: 0 10px;
}

.auth-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
