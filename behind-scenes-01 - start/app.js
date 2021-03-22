const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

//...

let message = 'Hello!!!';

let longMsg = message + " everybody!!!!";

console.log(longMsg);

//...

const data = {
  msg: 'Greetings!',
  msg2: 'Greetings! Everybody!!'
};
const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  }
}
const proxy = new Proxy(data, handler);

proxy.msg = 'Greetings!!!!';

const handler2 = {
  set(target, key, value) {
    if(key === 'msg'){
      target.msg2 = value + ' Everybody!!';
    }
    target.msg = value;
  }
}

const proxy2 = new Proxy(data, handler2);

proxy2.msg = 'Greetings!!!!';