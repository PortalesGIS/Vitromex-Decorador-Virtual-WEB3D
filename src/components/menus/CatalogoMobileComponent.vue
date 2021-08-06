<template>
  <div class="w-screen h-full bg-back-catalogo shadow-2xl rounded-xl overflow-y-hidden animate__animated animate__fadeInUp animate__faster">
    <div class="h-9 w-full">
        <div 
        @click="onChangeMenuCatalogo()"
        class="w-full h-full flex justify-center items-center">
            <img v-if="getPageState" src="../../assets/arko/Mobile/Cerrar_Dropdown.svg" alt="">
            <img v-else src="../../assets/mobile/Cerrar_overlay.svg" alt="">
        </div>
    </div>
    <div v-if="!isFiltersOpen" class="bg-base-black w-full h-full px-2 pt-5">
        <div v-if="!isActiveBuscar" class="w-full flex justify-between">
            <p class="font-bold moserrat-bold text-2xl text-title">CATÁLOGO</p>
            <div class="flex">
                <div class="pr-5"
                @click="toggleActiveBuscar">
                    <img v-if="getPageState" src="../../assets/arko/Mobile/Buscar.svg" class="w-6" alt="">
                    <img v-else src="../../assets/web/Buscar.svg" class="w-6" alt="">
                </div>
                <div @click="openFiltersMenu">
                    <img v-if="getPageState" src="../../assets/arko/Web/Filtros.svg" class="w-6" alt="">
                    <img v-else src="../../assets/web/Filtros.svg" class="w-6" alt="">
                </div>
            </div>
        </div>  
        <div v-else class="w-full flex py-1 justify-between">
          <div class="flex w-full mx-2 px-4 rounded-full bg-6a border border-buscar-dorado ">
            <input type="text" class="w-full bg-6a focus:outline-none text-title" placeholder="Buscar..."
             v-model="stringSearch"
             @input="chngeInput">
            <div v-if="stringSearch===''" class="flex items-center">
                    <img v-if="getPageState" src="../../assets/arko/Mobile/Buscar.svg" class="w-6" alt="">
                    <img v-else src="../../assets/web/Buscar.svg" class="w-6" alt="">
            </div>
            <div v-else class="flex items-center"
                  @click="onClearStringSearch">
                    <img v-if="getPageState" src="../../assets/arko/Mobile/cerrar_menu.svg" class=" w-5" alt="">
                    <img v-else src="../../assets/web/Cerrar.svg" class=" w-5" alt="">
            </div>
          </div>
            <div class="flex">
                <div @click="openFiltersMenu">
                    <img v-if="getPageState" src="../../assets/arko/Web/Filtros.svg" class="w-6" alt="">
                    <img v-else src="../../assets/web/Filtros.svg" class="w-6" alt="">
                </div>
            </div>
        </div> 
        <div v-if="getFiltersAplicates.length>0" class="pt-5">
            <div class="w-full bg-line-catalogo" style="height:1px;"></div>
            <div class="flex flex-wrap pt-2">
              <div v-for="item in getFiltersAplicates" :key="item">
                <div class="bg-filter-use text-xs px-1 my-1 py-1 mx-2 moserrat-semibold flex items-center rounded-sm text-filter-aplicate"
                @click="onDeleteFilter(item)">
                  <p>{{item.data}}</p>
                  <p class="pl-3">x</p>
                </div>
              </div>
            </div>
        </div>
        <div v-if="stringSearch===''" class="w-full flex pt-5">
              <MenuSelectedComponentVue />
        </div> 
         <div class="py-5 bg-1d">
              <div class="flex w-full justify-around items-center">
                <div class="flex bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center"
                      @click="selectAplication(1)"
                      :class="aplicationsSelected===1?'':'opacity-50'">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover" alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Piso</p>
                </div>
                <div class="flex bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center"
                 @click="selectAplication(0)"
                   :class="aplicationsSelected===0?'':'opacity-50'">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover transform -rotate-90 " alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Muro</p>
                </div>
              </div>
            </div> 
            <div class='px-2 bg-1d  w-full h-5/6 overflow-y-auto pb-20'>
              <div v-if="stringSearch===''">
                <div v-if="getCatalogoSerieProductoSelecte===0">
                  <ProductComponentVue :listProducts="getAllProducts"/>
              </div>              
              <div v-else>
                 <SerieCardsVue :listSeries="getAllSeries" />
              </div>
              </div>
                <div v-else>
                <div v-if="getAllSeries.length!=0">
                  <p :class="getPageState?'gotham-light':'gotham text-whadow'" 
                  class="text-title text-xl ">SERIES</p>
                  <div class="w-full h-px  my-2 bg-white"></div>
                    <SerieCardsVue :listSeries="getAllSeries" />
                </div>
                <div v-if="getAllProducts.length!=0" >
                  <p :class="getPageState?'gotham-light':'gotham text-whadow'" 
                  class="text-title text-xl ">PRODUCTOS</p>
                  <div class="w-full h-px  my-2 bg-white"></div>
                   <ProductComponentVue :listProducts="getAllProducts"/>
                </div>
                <div class="w-full " v-if="getAllSeries.length===0 && getAllProducts.length===0">
                  <div class="w-full flex justify-center items-center ">
                    <img class="object-cover w-8 h-8" v-if="getPageState" src="../../assets/arko/Web/not_found.png" alt="">
                    <img class="object-cover w-8 h-8" v-else src="../../assets/web/not_found.png" alt="">
                  </div>
                  <p class="py-4 text-sm font-normal text-subtitle text-center">
                  No se ha encontrado el producto que estás buscando, por favor intenta con algo más.</p>
                  </div>
              </div>
            </div>
    </div>
    <div v-else class="bg-base-black w-full h-full pt-5 animate__animated animate__fadeInRight animate__faster">
        <FiltersMobileComponentVue
        :cerrarFiltro="cerrarFiltro"
        />
    </div>    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Observer, { EVENTS } from '../../three/Observer'
import ProductComponentVue from '../cards/ProductComponent.vue'
import SerieCardsVue from '../cards/SerieCards.vue'
import MenuSelectedComponentVue from '../utils/MenuSelectedComponent.vue'
import FiltersMobileComponentVue from './FiltersMobileComponent.vue'
export default {
  components: {
    FiltersMobileComponentVue,
      MenuSelectedComponentVue,
    ProductComponentVue,
    SerieCardsVue
    },
    data() {
        return {
             aplicationsSelected:1,
             isFiltersOpen:false,
             isActiveBuscar:false,
             stringSearch:""
        }
    },
    methods: {
    ...mapActions(["changeMenuCatalogo","filterProductsForString","filterSeriesForString",
                  "deleteFilters","deleteFiltersSeries","deleteOneFilter","filterProducts","addFilterAplicates"]),
    chngeInput(){
      this.filterProductsForString({word:this.stringSearch})
       this.filterSeriesForString({word:this.stringSearch})
    },
    onDeleteFilter(item){
      if(item.camp==="typologies" || item.camp==="serie"){
        this.deleteFilters()
      }
      else{
        this.deleteOneFilter(item)
        this.filterProducts()
      }
    },
    onSelectSerie(payload){
      this.addFilterAplicates(payload)            
      this.filterProducts()
      this.selected=0
    },
    onChangeMenuCatalogo(){
      this.changeMenuCatalogo()
      this.stringSearch=""
       this.filterProductsForString({word:""})
    },
    onClearStringSearch(){
      this.stringSearch=""
       this.deleteFilters()
       this.deleteFiltersSeries()
    },
    selectProductForMap(product){
      Observer.emit(EVENTS.SENDPRODUCT,product);
    },
    openFiltersMenu(){
        this.isFiltersOpen=true;
    },
    toggleActiveBuscar(){
      this.isActiveBuscar = !this.isActiveBuscar;
    },
    cerrarFiltro(){
        this.isFiltersOpen=false;
    },
    selectAplication(selected){
      this.aplicationsSelected = selected
    }
    },
computed: {
    ...mapGetters(["getPageState","getAllProducts",
    "getFiltersAplicates","getAllSeries","getCatalogoSerieProductoSelecte"])
  },
}
</script>

<style>

</style>