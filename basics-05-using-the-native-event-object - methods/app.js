const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',

    };
  },
  computed:{
    // For performance it is better to use Computed Properties rather than Methods 
    // for outputting values
    fullName() {
      if(this.name=== ''){
        return '';
      }
      return this.name + ' ' + 'Veshi';
    } 

  },
  methods: {
    outputFullName(){
      if(this.name === '')
      {
        return '';
      } else 
      return this.name + ' ' + 'Veshi'
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName()
    {
      this.name = '';
    }
  }
});

app.mount('#events');
