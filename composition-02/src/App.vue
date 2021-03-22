<template>
  <section class="container">
    <h2>Current user: {{ username }}</h2>
    <h2>Current user's age: {{ age }}</h2>
    <button @click="setAge">Change Age</button>
    <br><br>
    <div>
      <!--input type="text" placeholder="First Name" @input="setFirstName"/>
      <input type="text" placeholder="Last Name" @input="setLastName"/-->
      <!-- v-model also accepts reactive values -->
      <!-- Vue will automatically recognize that "firstName" and "lastName" are refs -->
      <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" v-model="lastName"/>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';

export default {
  
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(28);
    
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

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }
    
    return { user: user,
             username: username,
             setAge: setNewAge,
             setFirstName: setFirstName,
             setLastName: setLastName,
             age,
             firstName,
             lastName };
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