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
import { ref } from 'vue';
import TutorialList from '../components/tutorial-list.component.vue';
import TutorialForm from '../components/tutorial-form.component.vue';
import { Tutorial } from '../models/tutorial-entity.js';

const tutorials = ref([
  new Tutorial(1, 'Vue Basics', 'Learn the basics of Vue.js', 'Technology', 'Beginner', 120, 'John Doe', new Date('2023-01-01'), true, 4),
  new Tutorial(2, 'Advanced Vue Patterns', 'Explore advanced design patterns in Vue.js', 'Technology', 'Advanced', 180, 'Jane Smith', new Date('2023-06-15'), false, 5),
  new Tutorial(3, 'JavaScript Essentials', 'Master the fundamentals of JavaScript', 'Programming', 'Intermediate', 90, 'Alex Johnson', new Date('2023-08-10'), true, 3),
  new Tutorial(4, 'React vs Vue', 'Compare React.js and Vue.js frameworks', 'Technology', 'Beginner', 110, 'Lisa Brown', new Date('2023-03-20'), false, 4)
]);

const selectedTutorial = ref({});
const isFormVisible = ref(false);
const isEdit = ref(false);

const loadForm = (tutorial) => {
  selectedTutorial.value = { ...tutorial };
  isFormVisible.value = true;
  isEdit.value = true;
};

const showCreateForm = () => {
  selectedTutorial.value = new Tutorial();
  isFormVisible.value = true;
  isEdit.value = false;
};

const saveTutorial = (tutorial) => {
  if (isEdit.value) {
    const index = tutorials.value.findIndex(t => t.id === tutorial.id);
    if (index !== -1) {
      tutorials.value[index] = tutorial;
    }
  } else {
    tutorial.id = tutorials.value.length + 1;
    tutorials.value.push(tutorial);
  }
  isFormVisible.value = false;
};

const cancelForm = () => {
  isFormVisible.value = false;
};

const deleteTutorial = (id) => {
  tutorials.value = tutorials.value.filter(t => t.id !== id);
};
</script>
