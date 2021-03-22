<template>
    <h3>{{ counter }}</h3>
    <p>We do additional stuff</p>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['counterNr/normalizedCounter'];
        }
    }
}
</script>