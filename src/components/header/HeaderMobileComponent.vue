<template>
  <div class="block lg:hidden">
    <div class="h-20 lg:h-24 w-screen bg-white">
    <div  @click="toggleMenuMobile">
      <img v-if="getPageState" class="w-full h-20 lg:h-24 object-cover" src="../../assets/arko/Web/Header.png" alt="">
      <img v-else class="w-full h-20 lg:h-24 object-cover" src="../../assets/web/Header.png" alt="">
    </div>
    <div 
    @click="toggleMenuMobile"
    class="absolute top-0 h-20 px-6  w-screen  flex justify-between items-center">
      <div>
         <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:149px; height:34px" alt="">
         <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:149px; height:34px" alt="">
      </div>
      <div  v-if="menuMobile" class="h-10 w-10 ">
        <img v-if="getPageState" class="object-contain" src="../../assets/arko/Mobile/cerrar_menu.svg" alt="">
        <img v-else class="object-contain" src="../../assets/mobile/cerrar_dropdown.svg" alt="">
      </div>
      <div v-else class="h-10 w-10 ">
        <img v-if="getPageState" class="object-contain" src="../../assets/mobile/Menu.svg" alt="">
        <img v-else class="object-contain" src="../../assets/mobile/Menu_B.svg" alt="">
      </div>
    </div>
  </div>
  <div class="fixed right-0 px-2 pt-6 ">
        <div class="w-11 h-11" @click="changeMenuAplicates">
            <img src="../../assets/mobile/Productos.svg" alt="">
        </div>
  </div> 
  <div 
  @click="openTutorial"
  class="fixed left-0 px-2 pt-6 ">
        <div class="w-9 h-9">
            <img src="../../assets/mobile/tutorial_icon.svg" alt="">
        </div>
  </div>  
  <div class="fixed left-0 px-2 py-4">
        <TutorialAlertscomponentVue
         ref="tutorial"/>
  </div> 
  <div v-if="menuMobile" class="fixed bg-mobile-0a h-auto z-100 w-full animate__animated animate__fadeInDown animate__faster">
   <div class="w-full">
     <p 
      @click="clickMenuTop('https://www.vitromex.com.mx/contacto')"     
     class="text-right py-1 px-4 w-full text-title uppercase">contacto</p>
     <p 
      @click="clickMenuTop('https://www.vitromex.com.mx/aboutus')"     
     class="text-right py-1 px-4 w-full text-title uppercase">NOSOTROS </p>
     <p 
      @click="clickMenuTop('https://www.vitromex.com.mx/cercadeti')"     
     class="text-right py-1 px-4 w-full text-title uppercase">CERCA DE MÍ</p>
     <p 
      @click="clickMenuTop('https://www.vitromex.com.mx/blog')"     
     class="text-right py-1 px-4 w-full text-title uppercase">BLOG</p>
   </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TutorialAlertscomponentVue from '../alerts/TutorialAlertscomponent.vue'
export default {
    components: {
        TutorialAlertscomponentVue,
    },
  data() {
    return {
      menuMobile: false
    }
  },
  methods: {
      ...mapActions(["changeMenuAplicates"]),
      openTutorial() {
       this.$refs.tutorial.open();
    },
    clickMenuTop(url){
      window.open(url, '_blank').focus();
    },
    toggleMenuMobile(){
      this.menuMobile=!this.menuMobile
    },
  },
  computed: {
    ...mapGetters(["getPageState"])
  },
}
</script>

<style>

</style>