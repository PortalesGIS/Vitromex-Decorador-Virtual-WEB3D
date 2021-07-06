<template>
  <div class="h-full pt-14 ">
    <div class="h-full w-56 bg-black ">
      <div class="px-4 pt-2 flex justify-between">
        <div class="text-white text-xl font-bold">CATÁLOGO</div>
        <div class="flex justify-center items-center">
          <img src="../../assets/web/Filtros.svg" class="w-4 h-4" alt="">
        </div>
      </div>
      <div class="fixed h-full w-56  px-2 pb-4 pt-2 bg-black">
        <div class='w-full h-full bg-1d '>
            <div class="w-full flex">
              <div 
              @click="changeMenuOption(0)"
              :class="(selected===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-10 flex justify-center items-center cursor-pointer">
               <div >
                  <p :class="(selected===0)?'text-white text-xs font-bold':'text-white opacity-30 text-xs font-bold'">PRODUCTOS</p>
                  <div v-if="(selected===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-white"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeMenuOption(1)"
              :class="(selected===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-10 flex justify-center items-center cursor-pointer">
                <div >
                  <p :class="(selected===1)?'text-white text-xs font-bold':'text-white opacity-30 text-xs font-bold'">SERIES</p>
                  <div v-if="(selected===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-white"></div>
                  </div>
               </div>
              </div>
            </div>
            <div class="pt-5">
              <div class="flex w-full justify-around items-center">
                <div class="flex bg-black rounded-full w-24 h-6 items-center justify-center">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover" alt="">
                  <p class="pl-2 text-white text-xs font-semibold">Piso</p>
                </div>
                <div class="flex bg-black rounded-full w-24 h-6 items-center justify-center">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover transform -rotate-90 " alt="">
                  <p class="pl-2 text-white text-xs font-semibold">Muro</p>
                </div>
              </div>
            </div>  
            <div class="pt-5 px-2">
              <div class="w-full flex items-center bg-6a rounded-full">
                <input type="text" class="bg-transparent h-6 focus:border-none text-white outline-none pl-2" placeholder="Buscar...">
                <img class="-ml-2" src="../../assets/web/Buscar.svg" alt="">
              </div>
            </div>  
            <div class='px-2 pt-4 w-full h-full overflow-y-auto pb-56'>
              <div class='grid grid-cols-3'>
                  <div v-for="x in 60" :key="x"
                    class="pb-2">
                    <img src="https://random.imagecdn.app/300/300" class="object-cover rounded-md" style="width:53px; height:45px" alt="">
                    <p class="text-white font-semibold" style="font-size:8px; color:#CFCFCF">Coliseo Cream</p>
                    <p class="text-white font-semibold" style="font-size:8px; color:#CFCFCF">00x00</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    changeMenuOption(value) {
      this.selected = value
    }
  },
}
</script>

<style >
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