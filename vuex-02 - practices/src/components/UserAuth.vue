<template>
    <button @click="authIn">Log In</button>
    <button @click="authOut">Log Out</button>
    <p v-if="userAuthorization === true">User is logged in</p>
    <p></p>
    <p v-if="userAuthorization === false">User is logged out</p>
    
</template>


<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['userAuthorization'])
    },
    methods: {
        ...mapActions({ 
            authIn:'authorizeIn',
            authOut: 'authorizeOut'})
    }
}
</script>