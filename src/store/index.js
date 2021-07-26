import { createStore } from 'vuex'
import * as actionsProducts from './products/actionsProducts'
import * as mutationsProducts from './products/mutationsProducts'
import * as gettersProducts from './products/gettersProducts'

export default createStore({
  state: {
    pageState:false,
    listProducts:[],
  },
  mutations: {
    ...mutationsProducts,
    setStatePage(state,payload){
      state.pageState = payload
    }
  },
  actions: {
    ...actionsProducts,
    onChangeStatePage({commit},payload){ 
      // router.push("/")     
      commit("setStatePage",payload);
    }
  },
  getters:{
    ...gettersProducts,
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
