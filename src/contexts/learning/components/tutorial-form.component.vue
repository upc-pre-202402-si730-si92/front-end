<template>
  <form @submit.prevent="onSubmit" class="form-container">
    <div class="form-group">
      <tutorial-title v-model="form.title" />
    </div>
    <div class="form-group">
      <tutorial-description v-model="form.description" />
    </div>
    <div class="form-group">
      <tutorial-category v-model="form.category" />
    </div>
    <div class="form-group">
      <tutorial-difficulty-level v-model="form.difficulty" />
    </div>
    <div class="form-group">
      <tutorial-duration v-model="form.duration" />
    </div>
    <div class="form-group">
      <tutorial-instructor v-model="form.instructor" />
    </div>
    <div class="form-group">
      <tutorial-publication-date v-model="form.publicationDate" />
    </div>
    <div class="form-group">
      <tutorial-published v-model="form.published" />
    </div>
    <div class="form-group">
      <tutorial-rating v-model="form.rating" />
    </div>
    <div class="form-actions">
      <form-actions @save="onSubmit" @cancel="onCancel" />
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { Tutorial } from '../models/tutorial-entity.js'
import TutorialTitle from './tutorial-title.component.vue'
import TutorialDescription from './tutorial-description.component.vue'
import TutorialCategory from './tutorial-category.component.vue'
import TutorialDifficultyLevel from './tutorial-difficulty-level.component.vue'
import TutorialDuration from './tutorial-duration.component.vue'
import TutorialInstructor from './tutorial-instructor.component.vue'
import TutorialPublicationDate from './tutorial-publication-date.component.vue'
import TutorialPublished from './tutorial-published.component.vue'
import TutorialRating from './tutorial-rating.component.vue'
import FormActions from './form-actions.component.vue'

const form = reactive(new Tutorial())

const onSubmit = () => {


  console.log('Tutorial Object:', form)

  const jsonOutput = JSON.stringify(form, null, 2)
  console.log('JSON:', jsonOutput)
}

const onCancel = () => {
  form.title = ''
  form.description = ''
  form.category = 'General'
  form.difficulty = 'Beginner'
  form.duration = 0
  form.instructor = 'Unknown'
  form.publicationDate = new Date()
  form.published = false
  form.rating = 0
  form.id = 0
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 16px;
}

.form-actions {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
</style>
