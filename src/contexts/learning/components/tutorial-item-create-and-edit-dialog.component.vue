<script setup>
import { ref } from 'vue'

const name = ref('');

function ChangeName() {
  name.value = name.value + ' updates';
}
</script>
<label for="name">Name:</label>
<input type="text" id="name" v-model="name" >
{{ 'Hello '+  name }}
<input type="button" :value="'Add text to ' + name" @click="ChangeName">
<template>

</template>

<style scoped>

</style>