import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        //mutation sample
        increment(state) { 
           state.counter= state.counter + 2;
        },
        increase(state, payLoad) {
            state.counter = state.counter + payLoad.value;
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if(finalCounter > 100) {
                return 100;
            } else if(finalCounter < 0) {
                return 0;
            }
            else {
                return finalCounter;
            }
        }  
    },
    actions: {
        // We don't have to use the same name as the mutation above
        // Often jwe use it because we need to put an action between a mutation
        // and a component
        // Actions unlike Mutations, are allowed to run Asynchronous Code
        increment(context) {
            setTimeout( function() {
                context.commit('increment');}, 2000);
        },
        increase(context) {
            context.commit('increase', this.payLoad);
        }
    }
});
const app = createApp(App);

app.use(store);

app.mount('#app');
