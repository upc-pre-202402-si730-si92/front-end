<template>
  <div class="p-field">
    <pv-button label="Save" @click="save" class="p-button-success" />
    <pv-button label="Cancel" @click="cancel" class="p-button-secondary" />
  </div>
</template>

<script setup>
const emit = defineEmits(['save', 'cancel'])

const save = () => {
  emit('save')
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.p-field {
  display: flex;
  gap: 10px;
}
</style>
