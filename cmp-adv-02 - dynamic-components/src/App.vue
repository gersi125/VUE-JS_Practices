<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--<active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <!--<manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!-- Vue offers a special feature called "Component"
         We can define which component we will be using 
         by providing the component with our component's 
         name value -->
         <keep-alive>
    <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader   from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals';
import ManageGoals from './components/ManageGoals';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Gersi Veshi',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>