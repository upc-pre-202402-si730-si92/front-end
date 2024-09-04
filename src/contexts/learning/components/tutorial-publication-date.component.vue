<template>
  <div class="p-field">
    <label for="publicationDate" class="form-label">Publication Date</label>
    <pv-calendar
      id="publicationDate"
      :model-value="modelValue"
      @update:model-value="updateValue"
      class="form-input"
      date-format="mm/dd/yy"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Date,
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
