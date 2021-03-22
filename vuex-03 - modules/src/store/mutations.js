export default {

    authorizeIn(state) 
    {
        state.logged = true;
    },
    authorizeOut(state)
    {
        state.logged = false;
    }
}