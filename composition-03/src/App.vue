<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <br><br>
    <div>
      <input type="text" placeholder="First Name" ref="firstNameInput"/>
      <button @click="setFirstName">Set First Name</button>
      <br><br>
      <input type="text" placeholder="Last Name" ref="lastNameInput"/>
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
import { provide } from 'vue';
import UserData from './components/UserData.vue';

export default {

  components: {
    UserData
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const firstNameInput = ref(null);
    const lastNameInput = ref(null);
    const age = ref(28);
    
    provide('userAge', age);
  watch([age, username], function(newValue, oldValue) {
    console.log('Old age: ' + oldValue[0]);
    console.log('New age: ' + newValue[0]);
    console.log('Old name: ' + oldValue[1]);
    console.log('New name: ' + newValue[1]);
    });

    const user = reactive({
      name: "Gersi",
      surname: "Veshi",
      age: 28,
      gender: "male"
    });

    const username = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    // We can create functions inside of functions
    function setNewAge() {
      age.value += 1;
    }

    function setFirstName() {
      firstName.value = firstNameInput.value.value;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    
    return { user: user,
             username: username,
             setAge: setNewAge,
             setFirstName: setFirstName,
             setLastName: setLastName,
             firstName,
             lastName,
             age,  
             firstNameInput,
             lastNameInput };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>