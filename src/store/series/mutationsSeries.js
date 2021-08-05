
export const setSeriesList = (state,payload)=>{
    state.listSeries = payload
    state.listSeriesFilter = payload
}

export const setSeriesFilter = (state,payload)=>{
    state.listSeriesFilter =payload
}