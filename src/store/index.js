import { createStore } from 'vuex'
import * as actionsProducts from './products/actionsProducts'
import * as mutationsProducts from './products/mutationsProducts'
import * as gettersProducts from './products/gettersProducts'
import * as actionsMenus from './menus/actionsMenus'
import * as gettersMenus from './menus/gettersMenus'
import * as mutationsMenus from './menus/mutationsMenus'
import * as actionsFilters from './filters/actionsFilters'
import * as gettersFilters from './filters/gettersFilters'
import * as mutationsFilters from './filters/mutationsFilters'
import * as actionsSeries from './series/actionsSeries'
import * as gettersSeries from './series/gettersSeries'
import * as mutationsSeries from './series/mutationsSeries'

export default createStore({
  state: {
    pageState:false,
    listProducts:[],
    listProductsFilter:[],
    listSeries:[],
    listSeriesFilter:[],
    menuAplicates:false,
    menuCatalogo:false,
    isOpenfiltersWeb:false,
    filtersAplicates:[]
  },
  mutations: {
    ...mutationsProducts,
    ...mutationsMenus,
    ...mutationsFilters,
    ...mutationsSeries,
    setStatePage(state,payload){
      state.pageState = payload
    }
  },
  actions: {
    ...actionsProducts,
    ...actionsMenus,
    ...actionsFilters,
    ...actionsSeries,
    onChangeStatePage({commit},payload){ 
      // router.push("/")     
      commit("setStatePage",payload);
    }
  },
  getters:{
    ...gettersProducts,
    ...gettersMenus,
    ...gettersFilters,
    ...gettersSeries,
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
