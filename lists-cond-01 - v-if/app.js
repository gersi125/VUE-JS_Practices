const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoals: ''
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoals);
    }
  }
});

app.mount('#user-goals');
