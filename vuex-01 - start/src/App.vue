<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <favourite-val></favourite-val>
  <button @click="addOne">Add 1</button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteVal from './components/FavouriteVal.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteVal
  },
  methods: {
    addOne () { 
      // PayLoad Extra-data can be passed to our Mutations
      // this.$store.commit('increase', {value: 15});
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>