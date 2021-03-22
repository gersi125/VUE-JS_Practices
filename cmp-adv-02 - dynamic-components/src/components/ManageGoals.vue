<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Add Goal!</button>
        <teleport to="body">
        <error-alert v-if="inputInvalid">
            <h2>Input is Invalid!!!</h2>
            <p>Please enter some text! </p>
            <button @click="confirmErr">OK</button>
        </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert  from './ErrorAlert.vue';
export default {
    data() {
        return {
            inputInvalid: false
        }
    },
    components: {
        ErrorAlert
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === '')
            {
                this.inputInvalid = true;
            }
        },
        confirmErr() {
            this.inputInvalid = !this.inputInvalid;
        }
    }
}
</script>