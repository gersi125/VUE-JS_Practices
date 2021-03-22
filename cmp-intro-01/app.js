const app = Vue.createApp({
    data() {
        return {
            friends: 
            [
                {
                    id:      'eva01',
                    name:    'Eva',
                    surname: 'Mendez',
                    gender:  'female',
                    phone:   '+4766 6688 8895',
                    email:   'eva-mendez@hotmail.com'
                },
                {
                    id:      'bellaa',
                    name:    'Bella',
                    surname: 'Hadid',
                    gender:  'female',
                    phone:   '+4777 6058 8895',
                    email:   'b.hadid@hotmail.com'
                },
                {
                    id:      'abelweeknd',
                    name:    'Abel',
                    surname: 'Tesfaye',
                    gender:  'male',
                    phone:   '+4467 6688 8995',
                    email:   'abel01@hotmail.com'
                }
            ]
        }
    }
});

app.component('people-contact', {
    template: ` 
    <li>
     <h2> {{ people.name}} {{ people.surname}}</h2>
      <button @click="toggleDetails()">{{ detailsVisible ? 'Hide Details' : 'Show Details' }}</button>
      <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ people.phone}}</li>
      <li><strong>E-Mail:</strong> {{ people.email}}</li>   
      </ul>
    </li>`,
    data() {
        return {
            people: {
                id:      'abelweeknd',
                    name:    'Abel',
                    surname: 'Tesfaye',
                    gender:  'male',
                    phone:   '+4467 6688 8995',
                    email:   'abel01@hotmail.com'
            } ,
            detailsVisible: false
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.mount('#app');