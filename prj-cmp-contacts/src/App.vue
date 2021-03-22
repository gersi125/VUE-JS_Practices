<template>
<the-header title="My Contacts"></the-header>
<the-contacts></the-contacts>
</template>

<script>
import TheHeader   from './components/Layouts/TheHeader.vue';
import TheContacts from './components/Contacts/TheContacts.vue';

export default {
  components: {
    TheHeader,
    TheContacts
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>