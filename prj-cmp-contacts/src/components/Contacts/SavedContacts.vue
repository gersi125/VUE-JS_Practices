<template>
  <ul>
    <contacts-view
      v-for="contact in contacts" 
            :key="contact.id" 
            :id="contact.id"
            :name="contact.firstName" 
            :surname="contact.lastName" 
            :birth="contact.birthDate"
            :gender="contact.gender"
            :phone="contact.phoneNumber"
            :email="contact.emailAddress"
    ></contacts-view>
  </ul>
</template>

<script>
import ContactsView from './ContactsView.vue';

export default {
  inject: ['contacts'],
  components: {
      ContactsView
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