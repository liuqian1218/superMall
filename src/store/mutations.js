export const mutations={
    addCounter(state,payload){
        state.cartlist[payload].count += 1;
    },
    addToCart(state,payload){
        payload.count = 1;
        payload.checked = false ;
        state.cartlist.push(payload);
    },
    cartSelItem(state,payload){
        state.cartlist[payload.index].checked = !state.cartlist[payload.index].checked;
    },
    cartSelAll(state){
        state.cartlist.forEach(item => {return item.checked = true});
    },
    cartSelNothing(state){
        state.cartlist.forEach(item => {return item.checked = false});
    }
}