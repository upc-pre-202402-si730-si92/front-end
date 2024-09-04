<template>
  <div class="layout">
    <the-header />
    <div class="main-content">
      <the-sidebar />
      <main class="content">
<TutorialManagement />
      </main>
    </div>
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from './the-header.vue'
import TheFooter from './the-footer.vue'
import TheSidebar from './the-sidebar.vue'

import TutorialManagement from '@/contexts/learning/pages/tutorial-management.page.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  width: 100%;
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
