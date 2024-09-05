<template>
  <div class="p-field">
    <label for="category" class="form-label">{{ $t('learning.category') }} </label>
    <pv-dropdown
      id="category"
      :value="modelValue"
      @change="updateValue"
      :options="categories"
      :optionLabel="'label'"
      :optionValue="'value'"
      class="form-input"
      placeholder="Select a category"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, null],
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const categories = [
  { label: 'Programming', value: 'Programming' },
  { label: 'Design', value: 'Design' },
  { label: 'Marketing', value: 'Marketing' }
]

const updateValue = (event) => {
  emit('update:modelValue', event.value)
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
