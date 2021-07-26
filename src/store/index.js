import { createStore } from 'vuex'

export default createStore({
  state: {
    pageState:true,
  },
  mutations: {
    
    setStatePage(state,payload){
      state.pageState = payload
    }
  },
  actions: {
    onChangeStatePage({commit},payload){ 
      // router.push("/")     
      commit("setStatePage",payload);
    }
  },
  getters:{
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
