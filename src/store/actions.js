export const actions={
    addCart(context,payload){
        return new Promise((resolve,reject) => {
            let index = context.state.cartlist.findIndex((item) => {
                return item.iid === payload.iid ;
            });
            if( index != -1){
                context.commit("addCounter",index);
                resolve("数量加1");
            }else{
                context.commit("addToCart",payload);
                resolve("新加商品");
            }
        })
    }
}