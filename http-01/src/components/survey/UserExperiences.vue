<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="loading">Loadnig...</p>
      <p v-else-if="!loading && error">{{ error }}</p>
      <p v-else-if="!loading && (!results || results.length === 0)">No reviews were found!!!</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      loading: false,
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.loading = true;
      this.error = null;
      // We will try to handle browser errors by modifying the https string that we fetch
      fetch('https://gv-vue-demo-default-rtdb.firebaseio.com/gv_surveys.json')
      .then((response) => {
        if(response.ok) {
          return response.json();
          }
        })
        .then((data) => {
          this.loading = false;
          const results = [];
          for (const id in data)
          { results.push({id: id, 
                          name: data[id].name, 
                          rating: data[id].rating});
          }
          this.results = results})
        .catch((error)=> { // We define the error to catch in case there is no connection to the Firebase server
          console.Log(error);
          this.loading = false;
          this.error = 'Failed to fetch the reviews data! Please try again later';});
  },// We trigger the LoadExperiences method here
    // When this component is becoming visible it will go ahead and load all the data
  mounted() { this.loadExperiences(); }
},
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>