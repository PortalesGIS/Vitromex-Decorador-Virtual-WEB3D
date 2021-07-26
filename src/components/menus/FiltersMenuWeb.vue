<template>
  <div class="w-full h-77 mt-24 " style="padding-left:336px; padding-right:212px">
      <div class="bg-base-black-opacity w-full h-full">
        <div class='grid grid-cols-6 w-full h-full'>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none">
                  <option disabled selected> Tipología </option>
                  <option value="1">lorem</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none ">
                  <option disabled selected> Serie </option>
                  <option value="1">lorem</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none">
                  <option disabled selected> Formatos </option>
                  <option value="1">lorem</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none">
                  <option disabled selected> Colores </option>
                  <option value="1">lorem</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none">
                  <option disabled selected> Acabado </option>
                  <option value="1">lorem</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <button class="bg-black text-white w-11/12 xl:w-5/6 h-9 px-2">Borrar filtros</button>
              </div>
            </div>
        </div>
      </div>
      <div class="fixed right-0 py-2  flex justify-end" style=" padding-right:212px">
        <div class="pr-1">
          <img v-if="getPageState" class="w-12 h-12" src="../../assets/arko/Web/Info.svg" alt="">
          <img v-else class="w-12 h-12" src="../../assets/web/Info_B.svg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
computed: {
    ...mapGetters(["getPageState"])
  },
}
</script>

<style>

</style>