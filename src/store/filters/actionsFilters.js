
export const addFilterAplicates = ({commit,getters},payload)=>{
    let aplicates=[]
    if(payload.camp === "typologies" ||payload.camp === "serie" ){
        aplicates = [payload];
    }
    else{
        aplicates = [...getters.getFiltersAplicates]
        aplicates.push(payload)
    }
    commit("setFilterAplicates",aplicates)
}

export const deleteFilters=({commit,getters}) =>{
    commit("setProductsFilter",getters.getAllProductsComplete)  
    commit("setFilterAplicates",[])
  }

export const deleteOneFilter = ({commit,getters},payload)=>{
    const filtes =[]
     getters.getFiltersAplicates.forEach(element => {
        if(element.camp !== payload.camp){
            filtes.push(element)
        }        
    });
    commit("setFilterAplicates",filtes)
}