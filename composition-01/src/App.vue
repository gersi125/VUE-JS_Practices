<template>
  <section class="container">
    <!--h2>{{ userName + userSurname }}</h2>
    <h2>{{ userAge }}</h2-->
    <h2>{{ user.name + ' ' + user.surname }}</h2>
    <h2>{{ user.age}}</h2>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
//import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  /*data() {
    return {
      userName: 'Maximilian',
    };
  },*/
  setup() {
    // ref is a function that creates a reference to a value which we can use in our template
    // creates a reactive value

    //let usrName = ref('Gersi');
    //const usrSurname = ' Veshi';
    //const usrAge = 28;

    //reactive is a bit like ref but it is built explicitly for objects
    const user = reactive({
      name: "Gersi",
      surname: "Veshi",
      age: 28,
      gender: "male"
    });

    // We can create functions inside of functions
    function setNewAge() {
      user.age=34;
    }

    //setTimeout(function() { usrName.value ='G.'}, 2000);

    setTimeout(function() { user.name = "Redi",
                            user.age = 32 }, 2000 );

    /*return { userName: usrName,
             userSurname: usrSurname, 
             userAge: usrAge };*/
    return { user: user,
             setAge: setNewAge };
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