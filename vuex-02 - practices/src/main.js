import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            logged: false
        };
    },
    mutations: {
        increment(state) 
        { 
            state.counter= state.counter + 2;
        },
        increase(state, payLoad) 
        {
            state.counter = state.counter + payLoad.value;
        },
        authorizeIn(state) {
            state.logged = true;
        },
        authorizeOut(state){
            state.logged = false;
        }
    },
    getters: {
        finalCounter(state) 
        {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) 
        {
            const finalCounter = getters.finalCounter;
            if(finalCounter > 100) {
                return 100;
            } else if(finalCounter < 0) {
                return 0;
            }
            else {
                return finalCounter;
            }
        },
        userAuthorization(state) {
            return state.logged;
        }

    },
    actions: {
        // We should not manipulate the state from inside an Action
        // Always use a Mutation
        increment(context) 
        {
            setTimeout( function() 
            { context.commit('increment'); }, 2000);
        },
        increase(context) 
        {
            console.log(context);
            context.commit('increase', this.payLoad);
        },
        authorizeIn(context) {
            context.commit('authorizeIn');
        },
        authorizeOut(context) {
            context.commit('authorizeOut');
        }
    }
});
const app = createApp(App);

app.use(store);

app.mount('#app');
