<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavorite"> Toggle Fav Friend </button>
    <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Gender:</strong>
        {{ gender }}
      </li>
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>E-mail:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Remove Contact</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: 
    {
      type: String,
      required: true
    },
    gender:
    {
      type: String,
      required: true,
      validator(value) 
      {
        return value === 'Male' || value === 'Female';
      }
    },
    phoneNumber:
    {
      type: String,
      required: true
    },
    emailAddress: 
    {
      type: String,
      required: true
    }, 
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // emits is the counter-part of props
  // it makes it easier to understand your component
  emits: ['toggle-favorite', 'delete'],

  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    }
  }
};
</script>