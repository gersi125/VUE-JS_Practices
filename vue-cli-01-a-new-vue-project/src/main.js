import { createApp } from 'vue';
// import is used to combine different javascript files
// import ... from './App.vue';

import App from './App.vue';
import Contact from './components/Contacts';
const app = createApp(App);

app.component('contact', Contact);
app.mount('#app');