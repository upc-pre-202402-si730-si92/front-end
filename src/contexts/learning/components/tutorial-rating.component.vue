<template>
  <div class="p-field">
    <label for="rating" class="form-label">Rating</label>
    <pv-rating
      id="rating"
      :model-value="modelValue"
      @update:model-value="updateValue"
      class="form-input"
      :stars="5"
      cancel="false"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.p-field {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 4px;
  font-weight: bold;
}

.form-input {
  width: 100%;
}
</style>
