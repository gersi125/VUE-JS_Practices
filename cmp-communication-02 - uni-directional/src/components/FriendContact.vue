<template>
  <li>
    <h2>{{ name }} {{ favouriteFriend ==='1' ? '(Favourite)' : '' }}</h2>
    <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
    <button @click="toggleFavourite"> Toggle Fav Friend </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [
    'name',
    'phoneNumber', 
    'emailAddress',
    'isFavourite'
  ],
  data() {
    return {
      detailsAreVisible: false,
      favouriteFriend: this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite(){
      if(this.favouriteFriend ==="1")
      {
        this.favouriteFriend="0";
      } else 
      { 
        this.favouriteFriend="1";
      }
    }
  }
};
</script>