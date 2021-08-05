<template>
  <div class="pt-5 h-auto">
              <div class="flex w-full justify-around items-center">
                <div class="flex cursor-pointer bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center"
                  @click="selectAplication(1)"
                      :class="aplicationsSelected===1?'':'opacity-50'">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover" alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Piso</p>
                </div>
                <div class="flex cursor-pointer bg-menu-select-piso-muro rounded-full w-32 h-9 items-center justify-center"
                  @click="selectAplication(0)"
                      :class="aplicationsSelected===0?'':'opacity-50'">
                  <img src="../../assets/web/Piso.svg" class="w-5 h-4 object-cover transform -rotate-90 " alt="">
                  <p class="pl-2 text-white text-sm font-semibold">Muro</p>
                </div>
              </div>
            </div> 
</template>

<script>
export default {
data() {
    return {
        aplicationsSelected:1,
    }
  },
  methods: {
      selectAplication(selected){
      this.aplicationsSelected = selected      
    }
  },
}
</script>

<style>

</style>