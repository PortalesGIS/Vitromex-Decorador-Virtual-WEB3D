<template>
  <div class="w-screen h-full bg-back-catalogo shadow-2xl rounded-xl overflow-y-hidden animate__animated animate__fadeInUp animate__faster">
    <div class="h-9 w-full">
        <div 
        @click="changeMenuCatalogo"
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
            <div class="flex items-center">
                    <img v-if="getPageState" src="../../assets/arko/Mobile/Buscar.svg" class="w-6" alt="">
                    <img v-else src="../../assets/web/Buscar.svg" class="w-6" alt="">
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
        <div class="w-full flex pt-5">
              <div 
              @click="changeMenuOption(0)"
              :class="(selected===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
               <div >
                  <p v-if="getPageState" :class="(selected===0)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light font-bold'">PRODUCTOS</p>
                  <p v-else :class="(selected===0)?'text-subtitle text-lg  moserrat-bold':
                  'text-subtitle opacity-30 text-lg moserrat-bold font-bold'">PRODUCTOS</p>
                  <div v-if="(selected===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeMenuOption(1)"
              :class="(selected===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
                <div >
                  <p v-if="getPageState" :class="(selected===1)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light'">SERIES</p>
                  <p v-else :class="(selected===1)?'text-subtitle text-lg font-bold moserrat-bold':
                  'text-subtitle opacity-30 text-lg font-bold moserrat-bold'">SERIES</p>
                  <div v-if="(selected===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
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
              <div v-if="selected===0">
                <div class='grid grid-cols-3 sm:grid-cols-4'>
                  <div v-for="(product) in getAllProducts" :key="product"
                    class="pb-2">
                    <div  @click="selectProductForMap(product)" class="cursor-pointer px-1">
                      <img :src='product.smallPicture' class="object-cover rounded-md w-full h-full" style="max-height:80px; max-width:119px" alt="">
                      <p class="text-white font-semibold text-cf" style="font-size:11px;">{{product.name}}</p>
                      <p class="text-white monserrat-light text-cf" style="font-size:11px;">{{product.sized}}</p>
                    </div>
                  </div>
              </div>
              </div>              
              <div v-else>
                <div class='grid grid-cols-2'>
                  <div v-for="serie in getAllSeries" :key="serie"
                    class="pb-2 relative cursor-pointer">
                   <div @click="onSelectSerie({camp:'serie',data:`${serie.name}`})">
                     <div class="relative flex items-center justify-center">
                      <img :src="serie.img" class="object-cover rounded-md" style="width:140px; height:140px" alt="">   
                     </div>                                                        
                     <div class="absolute top-0 w-full h-full flex justify-center items-center">
                       <p class="text-white font-bold text-base">{{serie.name}}</p>
                     </div>
                   </div>
                  </div>
              </div>
              </div>
            </div>
    </div>
    <div v-else class="bg-base-black w-full h-full px-2 pt-5 animate__animated animate__fadeInRight animate__faster">
        <FiltersMobileComponentVue
        :cerrarFiltro="cerrarFiltro"
        />
    </div>    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Observer, { EVENTS } from '../../three/Observer'
import FiltersMobileComponentVue from './FiltersMobileComponent.vue'
export default {
    components: {
        FiltersMobileComponentVue,
    },
    data() {
        return {
             selected: 0,
             aplicationsSelected:1,
             isFiltersOpen:false,
             isActiveBuscar:false,
             stringSearch:""
        }
    },
    methods: {
    ...mapActions(["changeMenuCatalogo","filterProductsForString",
                  "deleteFilters","deleteOneFilter","filterProducts","addFilterAplicates"]),
        changeMenuOption(value) {
      this.selected = value
    },
    chngeInput(){
      this.filterProductsForString({word:this.stringSearch})
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
    "getFiltersAplicates","getAllSeries"])
  },
}
</script>

<style>

</style>