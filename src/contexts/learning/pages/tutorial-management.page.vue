<template>
  <div>
    <TutorialList
      v-if="!isFormVisible"
      :tutorials="tutorials"
      @edit="loadForm"
      @delete="deleteTutorial"
      @create="showCreateForm"
    />

    <TutorialForm
      v-else
      :tutorial="selectedTutorial"
      :isEdit="isEdit"
      @save="saveTutorial"
      @cancel="cancelForm"
    />
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import TutorialList from '../components/tutorial-list.component.vue'
import TutorialForm from '../components/tutorial-form.component.vue'
import { Tutorial } from '../models/tutorial-entity.js'
import { TutorialApiService } from '@/contexts/learning/services/tutorial-api.service.js'

const tutorialApiService = new TutorialApiService()

const tutorials = ref([])

const selectedTutorial = ref({})
const isFormVisible = ref(false)
const isEdit = ref(false)

const loadForm = (tutorial) => {
  selectedTutorial.value = { ...tutorial }
  isFormVisible.value = true
  isEdit.value = true
}

const showCreateForm = () => {
  selectedTutorial.value = new Tutorial()
  isFormVisible.value = true
  isEdit.value = false
}

const saveTutorial = async () => {
  await loadTutorials()
  isFormVisible.value = false
}

const cancelForm = () => {
  isFormVisible.value = false
}

const deleteTutorial = async (id) => {
  await tutorialApiService.delete(id).then(() => {
    loadTutorials()
  })
}

const loadTutorials = async () => {
  const response = await tutorialApiService.getAll()
  tutorials.value = response.data
}

onBeforeMount(async () => {
  await loadTutorials()
})
</script>
