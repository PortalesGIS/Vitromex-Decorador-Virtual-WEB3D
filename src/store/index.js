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
import * as dactions from "./3dComunication/3dactions"
import * as dgetters from "./3dComunication/3dgetters"
import * as dmutations from "./3dComunication/3dmutations"


export default createStore({
  state: {
    pageState:false,
    listProducts:[],
    listProductsFilter:[],
    listSeries:[],
    listSeriesFilter:[],
    menuAplicates:false,
    catalogoSerieProductoSelecte:0,
    menuCatalogo:false,
    isOpenfiltersWeb:false,
    filtersAplicates:[],
    areaSelected:"sala",
    aplicationSelected:0,
    muroSelected:"",
    isLoadingProductToAplicate:false,
    productsAplicatesInAreas:{
      sala:{
        muros:[],
        piso:{}
      },
      comedor:{
        muros:[],
        piso:{}
      },
      cocina:{
        muros:[],
        piso:{}
      },
      banio:{
        muros:[],
        piso:{}
      },
      fachada:{
        muros:[],
        piso:{}
      },
    }
  },
  mutations: {
    ...mutationsProducts,
    ...mutationsMenus,
    ...mutationsFilters,
    ...dmutations,
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
    ...dactions,
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
    ...dgetters,
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
