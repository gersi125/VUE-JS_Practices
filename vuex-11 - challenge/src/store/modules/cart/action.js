export default {
    addToCart(context, payLoad) 
    {
        const prodId = payLoad.id;
        context.rootGetters['prods/products'];
        const product = products.find( prod => prod.id === prodId);
        context.commit('addProductToCart', product);
    },
    removeFromCart(context) 
    {
        context.commit('removeProductFromCart', payLoad);
    }
}