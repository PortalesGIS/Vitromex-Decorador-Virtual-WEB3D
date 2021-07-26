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
  data() {
  },  
  methods: {
    ...mapActions(["onChangeStatePage"]),
  },
  computed: {
    ...mapGetters(["getPageState"])
  },
    
}
</script>
