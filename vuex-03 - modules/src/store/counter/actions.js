export default {
    increment(context) 
    {
        setTimeout( function() 
        { context.commit('increment'); }, 2000);
    },
    increase(context) 
    {
        console.log(context);
        context.commit('increase', this.payLoad);
    }
}