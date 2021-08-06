

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