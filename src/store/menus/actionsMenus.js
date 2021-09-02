import Observer, { EVENTS } from "../../three/Observer";

export const changeMenuAplicates = ({commit,getters})=>{
   
    commit("setMenuAplicates",!getters.getMenuAplicates)
}

export const changeMenuCatalogo = ({commit,getters}) =>{
    commit("setMenuCatalogo",!getters.getMenuCatalogo)
}
export const changeViewFiltesWeb = ({commit,getters})=>{
    commit("setFiltesWeb",!getters.getisOpenfiltersWeb)
}

export const changeCatalogoSerieProductoSelecte = ({commit},payload)=>{
    commit("setCatalogoSerieProductoSelecte",payload)
}

export const changeAreaSelected=({commit},payload)=>{
    Observer.emit(EVENTS.MOVETOAREASELECTMENU,payload);
    commit("setAreaSalected",payload)
}
export const changeNameAreaSelected=({commit},payload)=>{
    commit("setAreaSalected",payload)
}

export const onChangeAplicationSelected=({commit},payload)=>{
    commit("setAplicationSelected",payload)
}
// payload:
// {
//     area:"sala",
//     aplication:{},
//     product:{},
// }
export const changeProductsAplicatesInAreas=({commit,getters},payload)=>{
    const updateObject = getters.getProductsAplicatesInAreas
    if(payload.aplication===1){
        updateObject[payload.area].muros=[...updateObject[payload.area].muros,payload.product]
    }
    else{
        updateObject[payload.area].piso = payload.product
    }
    commit("setProductsAplicatesInAreas",updateObject)
}

export const changeisLoadingProductToAplicate=({commit},payload)=>{
    commit("setisLoadingProductToAplicate",payload)
}

