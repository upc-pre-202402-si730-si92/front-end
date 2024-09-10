<template>
  <div class="p-field">
    <label for="difficulty" class="form-label">Difficulty Level</label>
    <div class="difficulty-options">
      <pv-radio-button
        v-for="option in options"
        :key="option.value"
        :input-id="option.value"
        :name="'difficulty'"
        :value="option.value"
        :model-value="modelValue"
        @update:model-value="updateValue"
        :label="option.label"
        aria-label="Difficulty Level"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const options = [
  { label: 'Beginner', value: 'Beginner' },
  { label: 'Intermediate', value: 'Intermediate' },
  { label: 'Advanced', value: 'Advanced' }
]

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

.difficulty-options {
  display: flex;
  gap: 10px;
}
</style>
