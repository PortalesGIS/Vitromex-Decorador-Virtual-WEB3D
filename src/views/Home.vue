<template>
  <div class="h-screen w-screen">
    <div class="absolute z-50">
    <HeaderGlobalComponentVue/>
    
    </div>
    <div class="w-screen hidden md:block absolute z-30">
        <FiltersMenuWebVue/>
        
    </div>    
    <div class="z-50  absolute top-0">
      <RightMenuDesktopComponentVue/> 
      
    </div>
    <div class="z-40 hidden md:block  absolute top-0 h-full">
      <LateralMenuComponentVue/>    
        
    </div>
    <div class="z-20 block fixed inset-x-0 bottom-0 ">      
      <BottomGlobalComponentVue/>
      
    </div> 
  </div>
  <div class="z-10 absolute top-0 h-screen w-screen">
    <div class="absolute w-full h-full">
      <Home3DComponentVue/>
    </div>
    </div>    
</template>

<script>
import Home3DComponentVue from '../components/3D/Home3DComponent.vue'
import BottomGlobalComponentVue from '../components/bottom/BottomGlobalComponent.vue'
import HeaderGlobalComponentVue from '../components/header/HeaderGlobalComponent.vue'
import FiltersMenuWebVue from '../components/menus/FiltersMenuWeb.vue'
import LateralMenuComponentVue from '../components/menus/LateralMenuComponent.vue'
import RightMenuDesktopComponentVue from '../components/menus/RightMenuDesktopComponent.vue'
export default {
  components: {
    HeaderGlobalComponentVue,
    LateralMenuComponentVue,
    Home3DComponentVue,
    BottomGlobalComponentVue,
    FiltersMenuWebVue,
    RightMenuDesktopComponentVue
  },
}
</script>
