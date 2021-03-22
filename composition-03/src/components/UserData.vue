<template>
    <div>
        <h2>{{ userName }}</h2>
        <h2>{{ age }}</h2> 
    </div>
</template>

<script>
import { computed } from 'vue';
import { inject } from 'vue';

export default {

    props: ['firstName', 'lastName'],
    setup(props) {
        const uName = computed( function() {
            return props.firstName + ' ' + props.lastName;
        });

        const age = inject('userAge');
        //context.emit('save-data')

        return {
            userName: uName,
            age: age
        }
    },
    /*computed: {
        userName() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    setup() {
        
    },*/
}
</script>
