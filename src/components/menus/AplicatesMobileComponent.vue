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
              <p class="px-3 py-1 text-force-cf text-xs">FACHADA</p>
          </div>
      </div>
      <div class="pt-2 px-2">
          <div>
              <p :class="getPageState?' text-xs text-black gotham-light':'text-xs moserrat-bold text-force-cf'">Muro</p>
          </div>
          <div class="py-2 h-16 w-24">
              <img class="h-16 w-24 object-cover rounded-lg" src="https://random.imagecdn.app/300/300" alt="">
          </div>
          <div class="pt-2">
              <p class="text-white font-semibold text-cf" style="font-size:12px;">lorem</p>
              <p class="text-white font-semibold text-cf" style="font-size:12px;">50x100</p>
          </div>
      </div>
      <div class="pt-8 px-2">
          <div>
              <p :class="getPageState?' text-xs text-black gotham-light':'text-xs moserrat-bold text-force-cf'">Piso</p>
          </div>
          <div class="py-2 h-16 w-24">
              <img class="h-16 w-24 object-cover rounded-lg" src="https://random.imagecdn.app/300/300" alt="">
          </div>
          <div class="pt-2">
              <p class="text-white font-semibold text-cf" style="font-size:12px;">lorem</p>
              <p class="text-white font-semibold text-cf" style="font-size:12px;">50x100</p>
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
    ...mapGetters(["getPageState"])
  },
}
</script>

<style>

</style>