

export const changeMenuAplicates = ({commit,getters})=>{
   
    commit("setMenuAplicates",!getters.getMenuAplicates)
}

export const changeMenuCatalogo = ({commit,getters}) =>{
    commit("setMenuCatalogo",!getters.getMenuCatalogo)
}