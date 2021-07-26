<template>
<!-- desktop -->
  <div class="hidden lg:block">
    <div class="h-20 lg:h-24 w-screen bg-white">
    <div>
      <img v-if="getPageState" class="w-full h-20 lg:h-24 object-cover" src="../../assets/arko/Web/Header.png" alt="">
      <img v-else class="w-full h-20 lg:h-24 object-cover" src="../../assets/web/Header.png" alt="">
    </div>
    <div class=" absolute top-0 h-20 lg:h-24 w-screen ">
      <div class='grid grid-cols-12 gap-1 h-full'>
          <div class="col-span-2 xl:col-span-2 flex items-center justify-center h-full">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">
            </div>
          <div class="col-span-2 xl:col-span-2 flex items-center justify-center h-full">
            <p class="text-title text-2xl xl:text-3xl font-bold">MI PROYECTO</p>
            </div>
            <div class="col-span-3 xl:col-span-4">              
            </div>
            <div class="col-span-5 xl:col-span-4 h-full">
              <div class="pr-28 flex items-center h-full justify-around ">
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-title cursor-pointer">Contacto</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-title cursor-pointer">Nosotros</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-title cursor-pointer">Cerca de mi</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-title cursor-pointer">Blog</button>
              </div>
            </div>
      </div>
    </div>
  </div>
  </div>
  <!-- mobile -->
  <HeaderMobileComponentVue/>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMobileComponentVue from './HeaderMobileComponent.vue'
export default {
  components: {
    HeaderMobileComponentVue,
  },
  data() {
    return {
     
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters(["getPageState"])
  },

}
</script>

<style>

</style>