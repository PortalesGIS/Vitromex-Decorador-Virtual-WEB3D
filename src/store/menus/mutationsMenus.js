

export const setMenuCatalogo = (state,payload)=>{    
   
    state.menuCatalogo = payload
}


export const setMenuAplicates = (state,payload)=>{
    
    state.menuAplicates = payload
}


export const setFiltesWeb = (state,payload)=>{
    
    state.isOpenfiltersWeb = payload
}

export const setCatalogoSerieProductoSelecte = (state,payload)=>{
    
    state.catalogoSerieProductoSelecte = payload
}

export const setAreaSalected =(state,payload)=>{
    state.areaSelected = payload
}

export const setAplicationSelected=(state,payload)=>{
    state.aplicationSelected = payload
}

export const setProductsAplicatesInAreas=(state,payload)=>{
    state.productsAplicatesInAreas = payload
}

export const setisLoadingProductToAplicate=(state,payload)=>{
    state.isLoadingProductToAplicate= payload
}