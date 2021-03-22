const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },

  methods:{
    submitForm(event)
    {
      event.preventDefault();
      alert("Submission Successful!");
    },
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
