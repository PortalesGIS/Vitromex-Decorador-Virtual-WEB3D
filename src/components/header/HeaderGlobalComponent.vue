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
         <div class="col-span-1 xl:col-span-1 flex items-center justify-center h-full"></div>
          <div  @click="clickMenuTop('https://www.vitromex.com.mx')"
          class="col-span-2 xl:col-span-2 flex items-center justify-center h-full cursor-pointer">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">
            </div>
          <div class="col-span-2 xl:col-span-2 flex items-center justify-center h-full">
            <p class="text-title text-2xl xl:text-3xl font-bold">MI PROYECTO</p>
            </div>
            <div class="col-span-3 xl:col-span-3">              
            </div>
            <div class="col-span-5 xl:col-span-4 h-full">
              <div class="pr-28 flex items-center h-full justify-around ">
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/contacto')"
                class="focus:outline-none text-lg text-title cursor-pointer moserrat-semibold ">Contacto</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/aboutus')"
                class="focus:outline-none text-lg text-title cursor-pointer moserrat-semibold ">Nosotros</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/cercadeti')"
                class="focus:outline-none text-lg text-title cursor-pointer moserrat-semibold ">Cerca de mí</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/blog')"
                class="focus:outline-none text-lg text-title cursor-pointer moserrat-semibold ">Blog</button>
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
    clickMenuTop(url){
      window.open(url, '_blank').focus();
      
    }
  },
  computed: {
    ...mapGetters(["getPageState"])
  },

}
</script>

<style>

</style>