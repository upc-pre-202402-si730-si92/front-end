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
import { onMounted, reactive, ref } from 'vue'
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
import { TutorialApiService } from '@/contexts/learning/services/tutorial-api.service.js'
import router from '@/router.js'
import { useRoute } from 'vue-router';

const routes = useRoute();

const emit = defineEmits(['cancel'])

const form = reactive(new Tutorial())
const tutorialApiService = new TutorialApiService();

const id = ref(routes.params.id);
const onSubmit = () => {


  if (typeof id.value != 'undefined') {
    tutorialApiService.update(id.value,form)
    .then((response) => {
      if(response.status == 200){
          router.push('/tutorial');
      }
      emit('save')
    }).catch((error) => {
      console.error('Error: Error', error)
    })
    return
  }
else
  {

    tutorialApiService.save(form)
      .then((response) => {
        if (response.status == 201) {
          router.push('/tutorial');
        }
        emit('save')
      }).catch((error) => {
      console.error('Error: Error', error)
    })
  }
}

onMounted( () => {
    tutorialApiService.get(id.value) .then((response) => {
      const tutorialData = response.data;

      // Populate the form with the data from the API
      form.title = tutorialData.title;
      form.description = tutorialData.description;
      form.category = tutorialData.category;
      form.difficulty = tutorialData.difficulty;
      form.duration = tutorialData.duration;
      form.instructor = tutorialData.instructor;
      form.publicationDate = new Date(tutorialData.publicationDate); // Convert string to Date object if needed
      form.published = tutorialData.published;
      form.rating = tutorialData.rating;
      form.id = tutorialData.id;
    })
});


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

  emit('cancel')
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
