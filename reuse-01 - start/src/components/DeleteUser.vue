<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert: UserAlert
  },
    data() {
    return {
      // Vue merges
      // The component opiton overrides the option set by the mixin
      alertTitle: 'You want to delete this user?',
      alertIsVisible: true
    }
  },
  mixins: [alertMixin]
};
</script>