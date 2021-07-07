<template>
  <div class="pt-24 fixed top-0 right-0 w-212 h-full">
      <div class="bg-1d w-full h-full">
          <div class="pt-8 px-5">
              <p class="uppercase text-white text-xl font-bold">Productos aplicados</p>
          </div>
          <div class="pt-4 px-5">
              <p class="text-sm font-normal" style="color:#CFCFCF">
                  Aquí podrás ver los productos aplicados en el espacio en el que te encuentres</p>
          </div>
          <div class="pt-10">
              <div class="bg-black h-11 flex items-center">
                  <p class="px-5 text-sm font-bold" style="color:#CFCFCF">FACHADA</p>
              </div>
          </div>
          <div class="pt-4 pb-64 overflow-y-auto h-full">
              <div class="px-5">
                  <p class="text-sm font-bold" style="color:#CFCFCF">Muro</p>
              </div>
              <div class="pt-4 px-4">
                  <div class='grid grid-cols-2 '>
                      <div v-for="x in 3" :key="x"
                        class="pb-2">
                        <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:81px; height:69px" alt="">
                        <p class="text-white font-semibold" style="font-size:11px; color:#CFCFCF">Coliseo Cream</p>
                        <p class="text-white font-semibold" style="font-size:11px; color:#CFCFCF">00x00</p>
                  </div>
                  </div>
              </div>
              <div class="px-5 pt-7">
                  <p class="text-sm font-bold" style="color:#CFCFCF">Piso</p>
              </div>
              <div class="pt-4 px-4">
                  <div class='grid grid-cols-2 '>
                      <div v-for="x in 4" :key="x"
                        class="pb-2">
                        <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:81px; height:69px" alt="">
                        <p class="text-white font-semibold" style="font-size:11px; color:#CFCFCF">Coliseo Cream</p>
                        <p class="text-white font-semibold" style="font-size:11px; color:#CFCFCF">{{x}}</p>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>