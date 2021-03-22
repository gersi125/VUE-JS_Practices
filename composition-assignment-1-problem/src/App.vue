<template>
  <h2>My Course Goal</h2>
  <h2 v-if="courseGoals.visibility">{{ courseGoals.description }}</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="changeVisibility">Toggle Goal Visibility</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <h2>Course Participant: {{ courseParticipant.firstname + ' ' + courseParticipant.surname }}</h2>
</template>

<script>
import { reactive } from 'vue';
import { ref } from 'vue';

export default {
  setup() {
    const goals = reactive ({
      description: "Finish all the Vue JS practices.",
      visibility: true
    });

    const participant = ref({
      firstname: "Gersi",
      surname: "Veshi" 
    })

    function toggleVisibility() {
     if(goals.visibility === true) {
       goals.visibility = false
     } else {
       goals.visibility = true
     }
    }

    return {
      courseParticipant: participant,
      courseGoals: goals,
      changeVisibility: toggleVisibility
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>