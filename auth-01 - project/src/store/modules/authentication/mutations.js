import { set } from "core-js/fn/dict";

export default {
    setUser(state, payLoad) { 
        state.token = payLoad.token;
        state.userId = payLoad.userId;
        state.didAutoLogout = false;
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
};