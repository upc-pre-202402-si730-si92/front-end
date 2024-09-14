<script setup></script>

<template>
  <div class="not-found-container">
    <h1 class="not-found-title">404 Not Found</h1>
    <h2 class="not-found-subtitle">Page under construction</h2>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Full viewport height */
  text-align: center;
  background-color: #f4f4f9; /* Light gray background */
}

.not-found-title {
  font-size: 3rem;
  font-weight: bold;
  color: #ff4d4d; /* Red color */
  margin-bottom: 1rem;
}

.not-found-subtitle {
  font-size: 1.5rem;
  color: #666; /* Darker gray */
}
</style>
