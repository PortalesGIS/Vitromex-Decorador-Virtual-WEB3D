<template>
  <div  class="z-75 block lg:hidden fixed top-0 right-0 mt-20 h-full w-40
   bg-base-menu-aplications animate__animated animate__fadeInRight animate__faster">
      <div class="w-full pt-3 pl-2 pr-3 flex items-center"
            @click="changeMenuAplicates">
          <div>
              <p :class="getPageState?
              'gotham-light text-base text-subtitle':
              'moserrat-bold text-base text-subtitle'
              ">Productos aplicados</p>
          </div>
          <div>
              <img v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="" class="transform rotate-180">
              <img v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="" class="transform rotate-180">
          </div>
      </div>
      <div class="px-3 pt-2">
          <p class="monserrat text-xs text-cf-aplicates">Aquí podrás ver los productos aplicados en el espacio en el que te encuentres</p>
      </div>
      <div class="pt-2">
          <div class="bg-67 w-full">
              <p class="px-3 py-1 text-force-cf text-xs uppercase">{{(getAreaSelected==="banio")?'baño':getAreaSelected}}</p>
          </div>
      </div>
      
      <div class="pt-2 px-2">
          <div>
              <p :class="getPageState?' text-xs text-black gotham-light':'text-xs moserrat-bold text-force-cf'">Piso</p>
          </div>
          <div class="pt-1">
                  <div v-if="getProductsAplicatesInAreas[getAreaSelected].piso.name" class=''>
                        <div class="flex">
                            <img :src="getProductsAplicatesInAreas[getAreaSelected].piso.smallPicture" 
                            class="object-cover rounded-full" style="width:31px; height:31px" alt="">
                        <div class=' ml-2'>
                        <p class="text-white font-semibold text-cf" style="font-size:11px;" >{{getProductsAplicatesInAreas[getAreaSelected].piso.name}}</p>
                        <p class="text-white font-semibold text-cf" style="font-size:11px;" >{{getProductsAplicatesInAreas[getAreaSelected].piso.sized}}</p>                                         
                        </div>
                        </div>
                  </div>
                  <div v-else class="w-full h-20 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                         </div>
                      </div>
                  </div>
              </div>
      </div>
      <div class="pt-8 px-2">
          <div>
              <p :class="getPageState?' text-xs text-black gotham-light':'text-xs moserrat-bold text-force-cf'">Muro</p>
          </div>
          <div class="pt-1 ">
                   <div v-if="getProductsAplicatesInAreas[getAreaSelected].muros.length!=0">
                    <div class=''>
                          <div v-for="muro in getProductsAplicatesInAreas[getAreaSelected].muros" :key="muro"
                            class="pb-2 pr-1">
                            <div class="flex">
                                <img :src="muro.smallPicture" 
                            class="object-cover rounded-full" style="width:31px; height:31px" alt="">
                            <div class="ml-2">
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">{{muro.name}}</p>
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">{{muro.sized}}</p>
                            </div>
                            </div>
                            </div>
                        </div>                      
                  </div>
                  <div v-else class="w-full h-20 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                         </div>
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
        ...mapActions(["changeMenuAplicates"])
    },
computed: {
    ...mapGetters(["getPageState","getProductsAplicatesInAreas","getAreaSelected"])
  },
}
</script>

<style>

</style>