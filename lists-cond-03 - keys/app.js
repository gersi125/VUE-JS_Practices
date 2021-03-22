const app = Vue.createApp({
  data() {
    return { 
      enteredGoals: '',
      goals: []
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoals);
    },
    removeGoals(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
