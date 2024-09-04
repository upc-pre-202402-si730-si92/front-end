<template>
  <div class="p-field-checkbox">
    <pv-checkbox
      id="published"
      :model-value="modelValue"
      @update:model-value="updateValue"
      binary="true"
    />
    <label for="published" class="form-label">Published</label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.p-field-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-label {
  font-weight: bold;
}
</style>
