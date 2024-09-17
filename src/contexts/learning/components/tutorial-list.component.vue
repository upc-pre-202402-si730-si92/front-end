<template>
  <div>
    <h2>Tutorials List</h2>
    <ul>
      <li v-for="tutorial in tutorials" :key="tutorial.id || tutorial.title">
        <strong>{{ tutorial.id || 'No ID' }} </strong>
        <strong>{{ tutorial.title }}</strong> - Category: {{ tutorial.category || 'Unknown' }} -
        Difficulty:
        {{ tutorial.difficulty || 'Unknown' }}
        <br />
        Instructor: {{ tutorial.instructor || 'Unknown' }} | Duration:
        {{ tutorial.duration || 0 }} mins
        <br />
        Publication Date:
        {{
          tutorial.publicationDate
            ? new Date(tutorial.publicationDate).toLocaleDateString()
            : 'Unknown'
        }}
        <br />
        Rating: {{ tutorial.rating || 0 }} / 5 | Status: {{ tutorial.status || 'Unpublished' }}
        <br />

        <!-- Conditionally show the edit link if tutorial.id exists -->
        <router-link
          v-if="tutorial.id"
          :to="{ name: 'updateTutorial', params: { id: tutorial.id } }"
          >Edit</router-link
        >

        <!-- Conditionally show the delete button if tutorial.id exists -->
        <pv-button
          v-if="tutorial.id"
          @click="deleteTutorial(tutorial.id)"
          severity="danger"
          label="Delete"
        />
      </li>
    </ul>

    <!-- Button to create a new tutorial -->
    <pv-button @click="showCreateForm" label="Create New Tutorial" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tutorials: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete', 'create'])

const deleteTutorial = (id) => {
  emit('delete', id)
}

const showCreateForm = () => {
  emit('create')
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
}

h2 {
  margin-bottom: 20px;
}

pv-button {
  margin-right: 10px;
}
</style>
