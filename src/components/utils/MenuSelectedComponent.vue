<template>
  <div class="hidden lg:block ">
    <div class="w-full flex ">
              <div 
              @click="changeView(0)"
              :class="(getCatalogoSerieProductoSelecte===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-16 flex justify-center items-center cursor-pointer">
               <div >
                  <p :class="(getCatalogoSerieProductoSelecte===0)?'text-subtitle moserrat-bold text-base font-bold':'text-subtitle opacity-30 text-base moserrat-bold font-bold'">PRODUCTOS</p>
                  <div v-if="(getCatalogoSerieProductoSelecte===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeView(1)"
              :class="(getCatalogoSerieProductoSelecte===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-16 flex justify-center items-center cursor-pointer">
                <div >
                  <p :class="(getCatalogoSerieProductoSelecte===1)?'text-subtitle moserrat-bold text-base font-bold':'text-subtitle opacity-30 text-base moserrat-bold font-bold'">SERIES</p>
                  <div v-if="(getCatalogoSerieProductoSelecte===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
            </div>
            </div>
            <!-- version mobile -->
            <div class="block lg:hidden w-full">
            <div class="flex">
              <div 
              @click="changeView(0)"
              :class="(getCatalogoSerieProductoSelecte===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
               <div >
                  <p v-if="getPageState" :class="(getCatalogoSerieProductoSelecte===0)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light font-bold'">PRODUCTOS</p>
                  <p v-else :class="(getCatalogoSerieProductoSelecte===0)?'text-subtitle text-lg  moserrat-bold':
                  'text-subtitle opacity-30 text-lg moserrat-bold font-bold'">PRODUCTOS</p>
                  <div v-if="(getCatalogoSerieProductoSelecte===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeView(1)"
              :class="(getCatalogoSerieProductoSelecte===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
                <div >
                  <p v-if="getPageState" :class="(getCatalogoSerieProductoSelecte===1)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light'">SERIES</p>
                  <p v-else :class="(getCatalogoSerieProductoSelecte===1)?'text-subtitle text-lg font-bold moserrat-bold':
                  'text-subtitle opacity-30 text-lg font-bold moserrat-bold'">SERIES</p>
                  <div v-if="(getCatalogoSerieProductoSelecte===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
            </div>
            </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    
    methods: {
      ...mapActions(["changeCatalogoSerieProductoSelecte","deleteFilters","deleteFiltersSeries"]),
      changeView(payload){
        this.deleteFilters()
        this.deleteFiltersSeries()
        this.changeCatalogoSerieProductoSelecte(payload)
      }
    },
    computed: {
      ...mapGetters(["getPageState","getCatalogoSerieProductoSelecte"])
    },
}
</script>

<style>

</style>