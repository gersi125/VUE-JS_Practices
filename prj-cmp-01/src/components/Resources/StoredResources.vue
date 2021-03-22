<template>
  <ul>
    <resource-sites 
      v-for="res in resources" 
            :key="res.id" 
            :id="res.id"
            :title="res.title" 
            :desc="res.desc" 
            :link="res.link"
    ></resource-sites>
  </ul>
</template>

<script>
import ResourceSites from './ResourceSites.vue';

export default {
  inject: ['resources'],
  components: {
      ResourceSites
    }    
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>