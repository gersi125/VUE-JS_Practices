<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
       // counter() {
       //    return this.$store.getters.normalizedCounter;
       // }
       //
       // mapGetters gives you an object which you merge
       // into the Computed properties objects
       ...mapGetters(['finalCounter'])
    }
}
</script>