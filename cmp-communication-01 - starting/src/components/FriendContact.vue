<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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
    'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false
     // After defininf the properties in the 'Props' section
     // we don't need anymore the code below
     //
     // friend: {
     //   id: "manuel",
     //   name: "Manuel Lorenz",
     //   "phone-number": "0123 45678 90",
     //   "email-address": "manuel@localhost.com",
     // }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>