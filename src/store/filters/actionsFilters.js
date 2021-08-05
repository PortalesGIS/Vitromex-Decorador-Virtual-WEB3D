
export const addFilterAplicates = ({commit,getters},payload)=>{
    let aplicates=[]
    const oldAplicates = getters.getFiltersAplicates
    if(payload.camp === "typologies" || payload.camp === "serie" ){
        aplicates = [payload];
    }
    else{
        let exist =  oldAplicates.find(aplicates=>aplicates.camp ===payload.camp)
        if(exist){
            for (let index = 0; index < oldAplicates.length; index++) {
                if(oldAplicates[index].camp===payload.camp){
                    aplicates.push(payload)
                    break
                }
                else{
                    aplicates.push(oldAplicates[index])
                }
            }
        }
        else{
            aplicates= [...oldAplicates]
            aplicates.push(payload)
        }
    }
    commit("setFilterAplicates",aplicates)
}
export const addFilterAplicatesVersionDesktop = ({commit,getters},payload)=>{
    let aplicates=[]
    const oldAplicates = getters.getFiltersAplicates
        let exist =  oldAplicates.find(aplicates=>aplicates.camp ===payload.camp)
        if(exist){
            for (let index = 0; index < oldAplicates.length; index++) {
                if(oldAplicates[index].camp===payload.camp){
                    aplicates.push(payload)
                    break
                }
                else{
                    aplicates.push(oldAplicates[index])
                }
            }
        }
        else{
            aplicates= [...oldAplicates]
            aplicates.push(payload)
        }
    commit("setFilterAplicates",aplicates)
}

export const deleteFilters=({commit,getters}) =>{
    commit("setProductsFilter",getters.getAllProductsComplete)  
    commit("setFilterAplicates",[])
  }

export const deleteFiltersSeries=({commit,getters}) =>{
    commit("setSeriesFilter",getters.getAllSeriesComplete) 
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