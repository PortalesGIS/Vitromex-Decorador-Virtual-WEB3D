<template>

<!-- < div :class="getPageState?'theme-arko':''" class=""> -->
  <div class="noselect">
  <LoadingScreenComponentVue/>  
  <div class="h-screen w-screen">
    <div class="fixed z-50 w-full">
    <HeaderGlobalComponentVue/>
    </div>
    <div v-if="getAllProductsComplete!=''" class="w-screen hidden lg:block absolute z-30">
      
        <FiltersMenuWebVue/>
        
    </div>    
    <div class="z-40  absolute top-0 hidden lg:block ">
      <RightMenuDesktopComponentVue/> 
      
    </div>
    <div class="z-40 hidden lg:block  absolute top-0 h-full">
      <LateralMenuComponentVue/>
    </div>
    <!-- menus mobile -->
    <div 
    v-if="getMenuCatalogo"
    class="z-75 block lg:hidden fixed top-0 pt-16 h-full bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster" >
      <CatalogoMobileComponentVue/>
    </div>
    <div v-if="getMenuAplicates">
       <AplicatesMobileComponentVue/>
    </div>
    <!--ENDs menus mobile -->
    <div class="z-20 block fixed inset-x-0 bottom-0 ">      
      <BottomGlobalComponentVue/>
    </div>  
  </div>
  <div class="fixed top-0">
    <div class="fixed w-full h-full">
      <Home3DComponentVue/>
    </div>
    </div>    
</div>
</template>

<script>
import  { mapGetters,mapActions } from 'vuex'
import Home3DComponentVue from '../components/3D/Home3DComponent.vue'
import BottomGlobalComponentVue from '../components/bottom/BottomGlobalComponent.vue'
import HeaderGlobalComponentVue from '../components/header/HeaderGlobalComponent.vue'
import AplicatesMobileComponentVue from '../components/menus/AplicatesMobileComponent.vue'
import CatalogoMobileComponentVue from '../components/menus/CatalogoMobileComponent.vue'
import FiltersMenuWebVue from '../components/menus/FiltersMenuWeb.vue'
import LateralMenuComponentVue from '../components/menus/LateralMenuComponent.vue'
import RightMenuDesktopComponentVue from '../components/menus/RightMenuDesktopComponent.vue'
import LoadingScreenComponentVue from '../components/utils/LoadingScreenComponent.vue'
export default {
  components: {
    AplicatesMobileComponentVue,
    HeaderGlobalComponentVue,
    LoadingScreenComponentVue,
    LateralMenuComponentVue,
    Home3DComponentVue,
    BottomGlobalComponentVue,
    FiltersMenuWebVue,
    RightMenuDesktopComponentVue,
    CatalogoMobileComponentVue,
  },
  methods: {
    ...mapActions(["getProducts","getSeries"]),
    async charge (){
      await this.getProducts()
      await this.getSeries()
    }
  },
  computed: {
    ...mapGetters(["getPageState","getMenuCatalogo","getMenuAplicates","getAllProductsComplete"])
  },
  mounted () {
    this.charge()
  },
    
}
</script>
<style >
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>