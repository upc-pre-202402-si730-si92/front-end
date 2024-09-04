<template>
  <div class="p-field">
    <label for="description" class="form-label">Description</label>
    <pv-textarea
      id="description"
      :value="modelValue"
      @input="updateValue"
      class="form-input"
      rows="5"
      maxlength="500"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
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
