<template>
    <button @click="inc">Increment Button</button>
    <button @click="raise({value: 10})">Raise Button</button>
</template>

<script>
import { mapActions} from 'vuex';

export default {
    methods: {
        //addOne() 
        //{ this.$store.dispatch('increment'); }
        ...mapActions({
            inc: 'increment', 
            raise: 'increase'})
    }
}
</script>