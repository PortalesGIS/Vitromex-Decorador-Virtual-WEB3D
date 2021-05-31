<template>
  <div class="w-screen h-screen">
    <div class="z-40">
    <HeaderGlobalComponentVue/>
    </div>
    <div class="z-30 absolute top-0 h-full">
      <LateralMenuComponentVue/>
    </div>
    <div class="absolute top-0 h-full w-full flex items-end">      
      <BottomGlobalComponentVue/>
      </div>    
  </div>
</template>

<script>
import BottomGlobalComponentVue from '../components/bottom/BottomGlobalComponent.vue'
import HeaderGlobalComponentVue from '../components/header/HeaderGlobalComponent.vue'
import LateralMenuComponentVue from '../components/menus/LateralMenuComponent.vue'
export default {
  components: {
    HeaderGlobalComponentVue,
    LateralMenuComponentVue,
    BottomGlobalComponentVue
  },
}
</script>
