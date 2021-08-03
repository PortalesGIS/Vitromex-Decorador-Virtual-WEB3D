import { createStore } from 'vuex'
import * as actionsProducts from './products/actionsProducts'
import * as mutationsProducts from './products/mutationsProducts'
import * as gettersProducts from './products/gettersProducts'
import * as actionsMenus from './menus/actionsMenus'
import * as gettersMenus from './menus/gettersMenus'
import * as mutationsMenus from './menus/mutationsMenus'

export default createStore({
  state: {
    pageState:false,
    listProducts:[],
    listProductsFilter:[],
    menuAplicates:false,
    menuCatalogo:false
  },
  mutations: {
    ...mutationsProducts,
    ...mutationsMenus,
    setStatePage(state,payload){
      state.pageState = payload
    }
  },
  actions: {
    ...actionsProducts,
    ...actionsMenus,
    onChangeStatePage({commit},payload){ 
      // router.push("/")     
      commit("setStatePage",payload);
    }
  },
  getters:{
    ...gettersProducts,
    ...gettersMenus,
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
