export const getAllProducts = (state)=>{
    return state.listProductsFilter
}

export const getAllProductsComplete = (state)=>{
    return state.listProducts
}

export const getAllTypologies = (state)=>{
   return dontRepeatData(state.listProducts,"typologies")
}

export const getAllSeriesForFilter = (state)=>{
   return dontRepeatData(state.listProducts,"serie")
}

export const getAllFormats = (state)=>{
    return dontRepeatData(state.listProductsFilter,"sized")
}

export const getAllColors = (state)=>{
    return dontRepeatData(state.listProductsFilter,"color")
}
export const getAllFinish = (state)=>{
    return dontRepeatData(state.listProductsFilter,"finish")
}

const dontRepeatData = (data,camp) => {
    const  typo = []
   data.forEach(element => {
       typo.push(element[camp])
    });
    const result = new Set(typo)
    return  [...result]
}