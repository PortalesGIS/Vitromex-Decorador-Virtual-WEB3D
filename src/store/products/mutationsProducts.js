
export const setProductsList =(state,payload)=>{
    state.listProducts = payload
    state.listProductsFilter = payload
    console.log("setedao")
}

export const setProductsFilter =(state,payload)=>{
    state.listProductsFilter = payload
}