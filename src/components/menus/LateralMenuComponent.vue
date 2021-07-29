<template>
  <div class="h-full pt-24 ">
    <div class="h-full w-336 bg-base-black ">
      <div class="px-4 pt-4 flex justify-between">
        <div class="text-title text-xl font-bold">CATÁLOGO</div>
        <div class="flex justify-center items-center">
          <img  v-if="getPageState" src="../../assets/arko/Web/Filtros.svg" class="w-4 h-4" alt="">
          <img v-else src="../../assets/web/Filtros.svg" class="w-4 h-4" alt="">
        </div>
      </div>
      <div class="fixed h-full w-336  px-2 pb-4 pt-4 bg-base-black">
        <div class='w-full h-full bg-1d pr-1'>
            <div class="w-full flex">
              <div 
              @click="changeMenuOption(0)"
              :class="(selected===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-16 flex justify-center items-center cursor-pointer">
               <div >
                  <p :class="(selected===0)?'text-subtitle text-base font-bold':'text-subtitle opacity-30 text-base font-bold'">PRODUCTOS</p>
                  <div v-if="(selected===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeMenuOption(1)"
              :class="(selected===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-16 flex justify-center items-center cursor-pointer">
                <div >
                  <p :class="(selected===1)?'text-subtitle text-base font-bold':'text-subtitle opacity-30 text-base font-bold'">SERIES</p>
                  <div v-if="(selected===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
            </div>
            <div class="pt-5">
              <div class="flex w-full justify-around items-center">
                <div class="flex bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover" alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Piso</p>
                </div>
                <div class="flex bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover transform -rotate-90 " alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Muro</p>
                </div>
              </div>
            </div>  
            <div class="pt-5 px-2">
              <div class="w-full flex items-center justify-between px-2 bg-6a rounded-full">
                <input type="text" class="bg-transparent h-9 focus:border-none text-white outline-none pl-2" placeholder="Buscar...">
                <img class="w-6 h-6" src="../../assets/web/Buscar.svg" alt="">
              </div>
            </div>  
            <div class='px-2 pt-4 w-full max-h-full overflow-y-auto pb-80'>
              <div v-if="selected===0">
                <div class='grid grid-cols-3'>
                  <div v-for="product in getAllProducts" :key="product"
                    class="pb-2">
                    <div @click="selectProductForMap(product)" class="cursor-pointer">
                      <img :src='product.smallPicture' class="object-cover rounded-md" style="width:89px; height:69px" alt="">
                      <p class="text-white font-semibold text-cf" style="font-size:11px;">{{product.name}}</p>
                      <p class="text-white font-semibold text-cf" style="font-size:11px;">{{product.sized}}</p>
                    </div>
                  </div>
              </div>
              </div>              
              <div v-else>
                <div class='grid grid-cols-2'>
                  <div v-for="x in 40" :key="x"
                    class="pb-2 relative cursor-pointer">
                   <div class="relative">
                      <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:140px; height:140px" alt="">   
                     </div>                                                        
                     <div class="absolute top-0 w-full h-full flex justify-center items-center">
                       <p class="text-white font-bold text-base">AIZEN</p>
                     </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Observer, { EVENTS } from '../../three/Observer'
export default {
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    ...mapActions(["getProducts"]),
    changeMenuOption(value) {
      this.selected = value
    },
    selectProductForMap(product){
      Observer.emit(EVENTS.SENDPRODUCT,product);
    }
  },
  computed: {
    ...mapGetters(["getPageState","getAllProducts"])
  },
  created () {
    this.getProducts()
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  background-color: #ffffff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #585858;
  background-clip: content-box;
   border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #585858;
   border-radius: 20px;
}
.opacity-fond{
    background: rgba(17, 17, 17, 0.4);
}
</style>