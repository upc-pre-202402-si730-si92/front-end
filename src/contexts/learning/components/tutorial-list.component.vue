<template>
  <div>
    <h2>Tutorials List</h2>
    <ul>
      <li v-for="tutorial in tutorials" :key="tutorial.id">
        <strong>{{ tutorial.title }}</strong> - Category: {{ tutorial.category }} - Difficulty:
        {{ tutorial.difficulty }}
        <br />
        Instructor: {{ tutorial.instructor }} | Duration: {{ tutorial.duration }} mins
        <br />
        Publication Date: {{ new Date(tutorial.publicationDate).toLocaleDateString() }}
        <br />
        Rating: {{ tutorial.rating }} / 5 | Status: {{ tutorial.status }}
        <br />
        <pv-button @click="editTutorial(tutorial)" label="Edit" />
        <pv-button @click="deleteTutorial(tutorial.id)" severity="danger" label="Delete" />
      </li>
    </ul>
    <pv-button @click="showCreateForm" label="Create New Tutorial" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tutorials: {
      type: Array,
      required: true
    }
  },
  emits: ['edit', 'delete', 'create'],
  setup(props, { emit }) {
    const editTutorial = (tutorial) => {
      emit('edit', tutorial)
    }

    const deleteTutorial = (id) => {
      emit('delete', id)
    }

    const showCreateForm = () => {
      emit('create')
    }

    return {
      editTutorial,
      deleteTutorial,
      showCreateForm
    }
  }
})
</script>
