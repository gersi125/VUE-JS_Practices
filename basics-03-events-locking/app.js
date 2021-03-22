const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },

  methods:{
    confirmInput()
    {
      this.confirmName = this.name;
    },
    setName(event, lastName)
    {
      this.name = event.target.value + " " + lastName;
    },
    addEvent(n)
    { 
      this.counter = this.counter + n;
    },
    substractEvent(n)
    {
      this.counter = this.counter - n;
    }
  }
});

app.mount('#events');
