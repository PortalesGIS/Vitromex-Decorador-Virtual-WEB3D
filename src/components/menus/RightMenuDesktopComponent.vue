<template>
  <div class="pt-24 fixed top-0 right-0 w-212 h-full">
      <div class="bg-1d w-full h-full">
          <div class="pt-8 px-5">
              <p class="uppercase moserrat-bold text-subtitle text-xl font-bold">Productos aplicados</p>
          </div>
          <div class="pt-4 px-5">
              <p class="text-sm font-normal text-subtitle" >
                  Aquí podrás ver los productos aplicados en el espacio en el que te encuentres</p>
          </div>
          <div class="pt-10">
              <div class="bg-67 h-11 flex items-center">
                  <p class="px-5 text-sm moserrat-bold font-bold" style="color:#CFCFCF">FACHADA</p>
              </div>
          </div>
          <div class="pt-4 pb-64 overflow-y-auto h-full">
              <div class="px-5">
                  <p class="text-sm moserrat-bold font-bold text-subtitle" >Muro</p>
              </div>
              <div class="pt-4 px-4">
                   <div v-if="false">
                    <div class='grid grid-cols-2 '>
                          <div v-for="x in 3" :key="x"
                            class="pb-2">
                            <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:81px; height:69px" alt="">
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">Coliseo Cream</p>
                            <p class="text-white font-semibold text-cf" style="font-size:11px;">00x00</p>
                            </div>
                        </div>                      
                  </div>
                  <div v-else class="w-44 h-36 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                              <img v-if="getPageState" src="../../assets/arko/Web/Piso.svg" class=" w-8 h-6 object-cover transform -rotate-90" alt="">
                              <img v-else src="../../assets/web/Piso.svg" class=" w-8 h-6 object-cover transform -rotate-90" alt="">
                         </div>
                          <p class="text-center text-sm font-normal pt-4 px-6  text-cf2">
                              Selecciona algún producto para el Muro</p>
                      </div>
                  </div>
              </div>
              <div class="px-5 pt-7">
                  <p class="text-sm moserrat-bold font-bold text-subtitle">Piso</p>
              </div>
              <div class="pt-4 px-4">
                  <div v-if="false" class='grid grid-cols-2 '>
                        <div>
                            <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:81px; height:69px" alt="">
                        <p class="text-white font-semibold text-cf" style="font-size:11px;" >Coliseo Cream</p>
                        <p class="text-white font-semibold text-cf" style="font-size:11px;" >00x00</p>
                 
                        </div>
                  </div>
                  <div v-else class="w-44 h-36 bg-2e flex justify-center items-center rounded-lg">
                      <div class="w-full">
                         <div class="flex justify-center">
                              <img  v-if="getPageState" src="../../assets/arko/Web/Piso.svg" class=" w-8 h-6 object-cover" alt="">
                              <img v-else src="../../assets/web/Piso.svg" class=" w-8 h-6 object-cover" alt="">
                         </div>
                          <p class="text-center text-sm font-normal pt-4 px-6 text-cf2">Selecciona algún producto para el piso</p>
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
     ...mapGetters(["getPageState"])
 },
}
</script>

<style>

</style>