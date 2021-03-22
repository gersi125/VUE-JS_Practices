<template>
  <li>
    <h2>{{ contact.firstName}} {{ contact.lastName }}</h2>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show'}} Contact Details</button>
    <br><br>
    <ul v-if="detailsVisible">
        <li><strong>Gender:</strong> {{ contact.gender }}</li>
        <li><strong>Phone: </strong> {{ contact.phone }} </li>
        <li><strong>E-Mail:</strong> {{ contact.email }} </li>
    </ul> 
 </li> 
</template>

<script>
export default {
    data() {
        return {
            detailsVisible: false,
            contact: {
                 id:        'Abel01',
                 firstName: 'Abel',
                 lastName:  'Tesfaye',
                 gender:    'Male',
                 phone:     '+4766 444 8888',
                 email:     'abel.tesfaye@weeknd.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
};
</script>


