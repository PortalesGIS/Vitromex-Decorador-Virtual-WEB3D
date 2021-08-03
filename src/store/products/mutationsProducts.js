
export const setProductsList =(state,payload)=>{
    state.listProducts = payload
    state.listProductsFilter = payload
}

export const setProductsFilter =(state,payload)=>{
    state.listProductsFilter = payload
}