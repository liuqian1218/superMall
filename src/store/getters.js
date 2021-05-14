export const getters = {
    cartListLen(state){
        return state.cartlist.length ;
    },
    cartList(state){
        return state.cartlist;
    },
    cartCount(state){
        return state.cartlist.filter(item => {return item.checked}).length 
    },
}