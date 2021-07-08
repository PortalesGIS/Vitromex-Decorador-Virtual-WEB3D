<template>
<!-- desktop -->
  <div class="hidden lg:block">
    <div class="h-20 lg:h-24 w-screen bg-white">
    <div>
      <img class="w-full h-20 lg:h-24 object-cover" src="../../assets/web/Header.png" alt="">
    </div>
    <div class=" absolute top-0 h-20 lg:h-24 w-screen ">
      <div class='grid grid-cols-12 gap-1 h-full'>
          <div class="col-span-2 flex items-center justify-center h-full">
            <img src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">
            </div>
          <div class="col-span-2 flex items-center justify-center h-full">
            <p class="text-white text-3xl font-bold">MI PROYECTO</p>
            </div>
            <div class="col-span-4">              
            </div>
            <div class="col-span-4 h-full">
              <div class="pr-28 flex items-center h-full justify-around ">
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-white cursor-pointer">Contacto</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-white cursor-pointer">Nosotros</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-white cursor-pointer">Cerca de mi</button>
                <button 
                @click="clickMenuTop"
                class="focus:outline-none text-lg text-white cursor-pointer">Blog</button>
              </div>
            </div>
      </div>
    </div>
  </div>
  </div>
  <!-- mobile -->
  <div class="block lg:hidden">
    <div class="h-20 lg:h-24 w-screen bg-white">
    <div>
      <img class="w-full h-20 lg:h-24 object-cover" src="../../assets/web/Header.png" alt="">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickMenuTop() {
        console.log("click")
    }
  },

}
</script>

<style>

</style>