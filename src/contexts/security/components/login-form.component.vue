<template>
  <div class="form-container">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="form-group">
        <label for="userType">User Type:</label>
        <select id="userType" v-model="userType">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <pv-button label="Login" @click="login()" />
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SecurityApiService } from '@/contexts/security/services/security-api.service.js'

const username = ref('')
const password = ref('')
const userType = ref('User')

const securityApiService = new SecurityApiService()

const login = () => {
  const body = {
    username: username.value,
    password: password.value
  }

  const token = securityApiService.login(body)
  sessionStorage.setItem('jwt', token)
}

onMounted(() => {
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    username.value = localStorage.getItem('username')
    password.value = localStorage.getItem('password')
  }
})
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 10px;
}
</style>
