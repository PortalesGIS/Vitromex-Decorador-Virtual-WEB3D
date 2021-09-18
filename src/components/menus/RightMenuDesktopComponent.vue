<template>
  <div class="pt-24 fixed top-0 right-0 w-212 h-full">
      <div class="bg-1d w-full h-full">
          <div class="pt-8 px-5">
              <p class="uppercase moserrat-bold text-subtitle text-xl font-bold">Productos aplicados</p>
          </div>
          <div class="pt-4 px-5">
              <p class="text-sm font-normal text-subtitle monserrat" >
                  Aquí podrás ver los productos aplicados en el espacio en el que te encuentres</p>
          </div>
          <div class="pt-10">
              <div class="bg-67 h-11 flex items-center">
                  <p class="px-5 text-sm moserrat-bold font-bold uppercase" style="color:#CFCFCF">
                      {{(getAreaSelected==="banio")?'baño':getAreaSelected}}</p>
              </div>
          </div>
          <div class="pt-4 pb-64 overflow-y-auto h-full">
              <div class="px-5 ">
                  <p class="text-sm moserrat-bold font-bold text-subtitle">Piso</p>
              </div>
              <div class="pt-4 px-4 ">
                  <div v-if="getProductsAplicatesInAreas[getAreaSelected].piso.name" class=''>
                        <div class="flex">
                            <img :src="getProductsAplicatesInAreas[getAreaSelected].piso.smallPicture"
                             class="object-cover rounded-full " style="width:31px; height:31px" alt="">
                        <div class="ml-2">
                        <p class="font-semibold text-cf" style="font-size:11px;" >{{getProductsAplicatesInAreas[getAreaSelected].piso.name}}</p>
                        <p class="font-semibold text-cf" style="font-size:11px;" >{{getProductsAplicatesInAreas[getAreaSelected].piso.sized}}</p>
                        </div>
                 
                        </div>
                  </div>
                  <div v-else class="w-44 h-36 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                         </div>
                      </div>
                  </div>
              </div>
              <div class="px-5 pt-7">
                  <p class="text-sm moserrat-bold font-bold text-subtitle" >Muro</p>
              </div>
              <div class="pt-4 px-4">
                   <div v-if="getProductsAplicatesInAreas[getAreaSelected].muros.length!=0">
                    <div class=''>
                          <div v-for="muro in getProductsAplicatesInAreas[getAreaSelected].muros" :key="muro"
                            class="pb-2">
                            <div class="flex">
                                <img :src="muro.smallPicture" 
                            class="object-cover rounded-full " style="width:31px; height:31px" alt="">
                            <div class="ml-2">
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">{{muro.name}}</p>
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">{{muro.sized}}</p>
                            </div>
                            </div>
                            </div>
                        </div>                      
                  </div>
                  <div v-else class="w-44 h-36 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 computed: {
     ...mapGetters(["getPageState","getProductsAplicatesInAreas","getAreaSelected"])
 },
}
</script>

<style>

</style>