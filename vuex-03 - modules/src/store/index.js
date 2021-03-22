import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import counterModule from './counter/index.js';

// This file  contains the main Store creation logic
const store = createStore({
    modules: {
        counterNr: counterModule
    },
    state() {
        return {
            logged: false
        };
    },
    mutations: mutations,
    getters: getters,
    actions: actions
});

export default store;