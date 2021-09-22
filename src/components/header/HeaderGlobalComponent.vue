<template>
<!-- desktop -->
  <div class="hidden lg:block w-full ">
    <div class="h-20 lg:h-24  bg-white">
    <div>
      <img v-if="getPageState" class="w-full h-20 lg:h-24 object-cover" src="../../assets/arko/Web/Header.png" alt="">
      <img v-else class="w-full h-20 lg:h-24 object-cover" src="../../assets/web/Header.png" alt="">
    </div>
    <div class="w-screen absolute top-0 h-20 lg:h-24  ">
      <div class=' flex h-full'>
         <!-- <div class="col-span-1 xl:col-span-1 flex items-center justify-center h-full"></div> -->
          <div  @click="clickMenuTop('https://www.vitromex.com.mx')"
          class="w-336  pl-4 flex items-center justify-start h-full cursor-pointer">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:170px; height:48px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:170px; height:48px" alt="">
            </div>
          <div class="flex  items-center justify-center h-full ">
            <p class="text-title text-2xl xl:text-3xl font-bold gotham">MI PROYECTO</p>
            </div>
            <div class="fixed h-20 lg:h-24  right-0 ">
              <div class=" flex items-center h-full justify-end">
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/contacto')"
                class="focus:outline-none text-sm xl:text-lg text-title cursor-pointer moserrat-semibold px-4 ">Contacto</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/aboutus')"
                class="focus:outline-none text-sm xl:text-lg text-title cursor-pointer moserrat-semibold px-4 ">Nosotros</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/cercadeti')"
                class="focus:outline-none text-sm xl:text-lg text-title cursor-pointer moserrat-semibold px-4 ">Cerca de mí</button>
                <button 
                @click="clickMenuTop('https://www.vitromex.com.mx/blog')"
                class="focus:outline-none text-sm xl:text-lg text-title cursor-pointer moserrat-semibold px-4 ">Blog</button>
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