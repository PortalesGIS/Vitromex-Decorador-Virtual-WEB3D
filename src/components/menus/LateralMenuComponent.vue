<template>
  <div class="h-full pt-24 ">
    <div class="h-full w-336 bg-base-black ">
      <div class="px-4 pt-4 flex justify-between">
        <div class="text-title text-2xl font-bold moserrat-bold">CATÁLOGO</div>
        <div class="flex justify-center items-center cursor-pointer"
        @click="changeViewFiltesWeb">
          <img  v-if="getPageState" src="../../assets/arko/Web/Filtros.svg" class="w-4 h-4" alt="">
          <img v-else src="../../assets/web/Filtros.svg" class="w-4 h-4" alt="">
        </div>
      </div>
      <div class="fixed h-full w-336  px-2 pb-4 pt-4 bg-base-black">
        <div class='w-full h-5/6 bg-1d pr-1'>
              <MenuSelectedComponentVue  />
              <AplicationsSelectedComponentVue/>
            <div class="pt-5 pb-4 px-2">
              <div class="w-full flex items-center justify-between px-2 bg-6a rounded-full">
                <input type="text" class="bg-transparent h-9 focus:border-none text-title outline-none pl-2" placeholder="Buscar..."
                v-model="stringSearch"
             @input="chngeInput">
                <img class="w-6 h-6" src="../../assets/web/Buscar.svg" alt="">
              </div>
            </div>  
            <div class='px-2 w-full overflow-y-auto pb-80' style="height: 75%;">
              <div v-if="stringSearch===''">
                <div v-if="getCatalogoSerieProductoSelecte===0">
                    <ProductComponentVue :listProducts="getAllProducts" />
              </div>              
              <div v-else>
                       <SerieCardsVue :listSeries="getAllSeries" />
              </div>
              <!-- start filter per string -->
              </div>
              <div v-else>
                <div v-if="getAllSeries.length!=0">
                  <p :class="getPageState?'gotham-light':'gotham text-whadow'" 
                  class="text-title text-xl ">SERIES</p>
                  <div class="w-full h-px mx-2 my-2 bg-white"></div>
                    <SerieCardsVue :listSeries="getAllSeries" />
                </div>
                <div v-if="getAllProducts.length!=0" >
                  <p :class="getPageState?'gotham-light':'gotham text-whadow'" 
                  class="text-title text-xl ">PRODUCTOS</p>
                  <div class="w-full h-px mx-2 my-2 bg-white"></div>
                   <ProductComponentVue :listProducts="getAllProducts"/>
                </div>
                <div class="w-full " v-if="getAllSeries.length===0 && getAllProducts.length===0">
                  <div class="w-full flex justify-center items-center ">
                    <img class="object-cover w-12 h-12" v-if="getPageState" src="../../assets/arko/Web/not_found.png" alt="">
                    <img class="object-cover w-12 h-12" v-else src="../../assets/web/not_found.png" alt="">
                  </div>
                  <p class="py-4 text-sm font-normal text-subtitle text-center">
                  No se ha encontrado el producto que estás buscando, por favor intenta con algo más.</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'
import ProductComponentVue from '../cards/ProductComponent.vue'
import SerieCardsVue from '../cards/SerieCards.vue'
import AplicationsSelectedComponentVue from '../utils/AplicationsSelectedComponent.vue'
import MenuSelectedComponentVue from '../utils/MenuSelectedComponent.vue'
export default {
  components: {
    ProductComponentVue,
    SerieCardsVue,
    AplicationsSelectedComponentVue,
    MenuSelectedComponentVue,
  },
  data() {
    return {
        stringSearch:"",
    }
  },
  methods: {
    ...mapActions(["filterProductsForString","filterSeriesForString","addFilterAplicates","filterProducts","changeViewFiltesWeb"]),
    chngeInput(){
      this.filterProductsForString({word:this.stringSearch})
      this.filterSeriesForString({word:this.stringSearch})
    },
  },
  computed: {
    ...mapGetters(["getPageState","getAllProducts","getAllSeries","getCatalogoSerieProductoSelecte"])
  },
}
</script>

<style scoped>
.text-whadow{
  text-shadow: 2px 2px 5px #000000;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  background-color: #ffffff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #585858;
  background-clip: content-box;
   border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #585858;
   border-radius: 20px;
}
.opacity-fond{
    background: rgba(17, 17, 17, 0.4);
}
</style>