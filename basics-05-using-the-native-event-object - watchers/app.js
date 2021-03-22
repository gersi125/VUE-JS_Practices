const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  
  computed: {
    fullName: function(){
      if(this.name === '')
      {
        return '';
      }
      return this.name + ' ' + 'Veshi';
    }
    
  },
  watch:{
    // Watch porperty would not be efficient if we were to watch also 
    // the changes of another surname variable
    // this case would need too much code to write and would not be efficient
    // name(value) {
    //   if(value === '')
    //   {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + 'Veshi';
    //    }
    //  }

    counter(value)
    {
      if(value > 50)
      {
        this.counter = 0;
      }
    }
  },
  methods: {
    //Methods are not advisable to be used when you need to re-evalute data
    //because they will be executed for  every re-rendering cacyle
    //outputFullName(){
    //  if(this.name === '')
    //  {
    //    return '';
    //  } else 
    //  return this.name + ' ' + 'Veshi'
    ///},
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
