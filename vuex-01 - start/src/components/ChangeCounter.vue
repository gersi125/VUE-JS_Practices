<template>
    <button @click="addOne">Add 1</button>
</template>

<script>
export default {
    methods: {
        addOne() {
             // takes the name of the mutation you want to perform
             // this.$store.commit('increment');
             // We dispatch actions just like we commit mutations
             this.$store.dispatch('increment');
        }
    }
}
</script>