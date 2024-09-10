<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>  <RouterLink to="/">Go to Home</RouterLink></li>
        <li>  <RouterLink to="/security">Security</RouterLink></li>
        <li>  <RouterLink to="/tutorial">Tutorial</RouterLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 15px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: #333;
}
</style>
