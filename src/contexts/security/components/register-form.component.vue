<template>
  <div class="form-container">
    <h2>Register</h2>
    <form>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" />
      </div>
      <div class="form-group">
        <label for="userType">User Type:</label>
        <select id="userType" v-model="userType">
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <pv-button label="Register" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const userType = ref('User')
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
  border-radius: 4px;
}
</style>
