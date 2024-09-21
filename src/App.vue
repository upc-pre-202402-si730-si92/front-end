<script setup>
import MainLayout from '@/layouts/main-layout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLoginPage = computed(() => route.name === 'login' || route.path === '/')
</script>

<template>
  <div v-if="!isLoginPage">
    <main-layout />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<style scoped></style>
