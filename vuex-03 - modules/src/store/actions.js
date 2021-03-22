export default {

    authorizeIn(context) 
    {
        context.commit('authorizeIn');
    },
    authorizeOut(context) 
    {
        context.commit('authorizeOut');
    }
}