<template>
  <div class="auth-container">
    <div class="auth-form">
      <register-form />
    </div>
  </div>
</template>

<script setup>
import RegisterForm from '@/contexts/security/components/register-form.component.vue'
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
