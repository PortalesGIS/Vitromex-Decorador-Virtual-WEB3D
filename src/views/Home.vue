<template>
<div class="absolute top-0 z-100 bg-red-400" @click="onChangeStatePage(!getPageState)">
  change
</div>
<div :class="getPageState?'theme-arko':''">
  <div class="h-screen w-screen">
    <div class="absolute z-50">
    <HeaderGlobalComponentVue/>
    
    </div>
    <div class="w-screen hidden lg:block absolute z-30">
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
  <div class="z-10 absolute top-0 h-screen w-screen">
    <div class="absolute w-full h-full">
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
export default {
  components: {
    AplicatesMobileComponentVue,
    HeaderGlobalComponentVue,
    LateralMenuComponentVue,
    Home3DComponentVue,
    BottomGlobalComponentVue,
    FiltersMenuWebVue,
    RightMenuDesktopComponentVue,
    CatalogoMobileComponentVue,
  },
  data() {
  },  
  methods: {
    ...mapActions(["onChangeStatePage","getProducts"]),
  },
  computed: {
    ...mapGetters(["getPageState","getMenuCatalogo","getMenuAplicates"])
  },
  created () {
    this.getProducts()
  },
    
}
</script>
