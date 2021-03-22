<template>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
      </transition-group>
    <div>
        <input type="text" ref="userInput"/>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Bella', 'Dua', 'Gigi', 'Abel', 'Chris', 'Enzo'],
        }
    },
    methods: {
        addUser(){
            const enteredUser = this.$refs.userInput.value;
            this.users.unshift(enteredUser);
        },
        removeUser(user) 
        {
            this.users = this.users.filter( usr => usr !== user)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-40px);
}

.user-list-enter-active {
    transition: all 0.5s ease-out;
}

.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-from {
    opacity: 1;
    transform: translateX(0) ;
}

.user-list-leave-active {
    transition: all 0.5s ease-in;
    position: absolute;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(40px);
}

.user-list-move {
    transition: transform 0.5s ease;
}


</style>