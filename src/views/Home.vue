<template>
  <div class="w-screen h-screen">
    <div class="absolute z-40">
    <HeaderGlobalComponentVue/>
    </div>
    <div class="z-30 absolute top-0 h-full">
      <LateralMenuComponentVue/>
    </div>
    <div class="z-30 absolute top-0 h-full w-full flex items-end">      
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
import LateralMenuComponentVue from '../components/menus/LateralMenuComponent.vue'
export default {
  components: {
    HeaderGlobalComponentVue,
    LateralMenuComponentVue,
    Home3DComponentVue,
    BottomGlobalComponentVue,
  },
}
</script>
