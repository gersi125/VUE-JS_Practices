import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

// Mutations, Actions and Getters are global to the store
// State is local to the module

export  default {
    // By seeting the "namespaced" to TRUE we say that the entire module
    // get detached from the store
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};
