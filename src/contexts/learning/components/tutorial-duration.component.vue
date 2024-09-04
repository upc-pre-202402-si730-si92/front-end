<template>
  <div class="p-field">
    <label for="duration" class="form-label">Duration (Minutes)</label>
    <pv-input-number
      id="duration"
      :model-value="modelValue"
      @update:model-value="updateValue"
      class="form-input"
      :min="5"
      :max="600"
      placeholder="Enter duration in minutes"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
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
