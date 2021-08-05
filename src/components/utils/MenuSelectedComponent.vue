<template>
  <div class="hidden lg:block ">
    <div class="w-full flex ">
              <div 
              @click="changeMenuOption(0)"
              :class="(selected===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-16 flex justify-center items-center cursor-pointer">
               <div >
                  <p :class="(selected===0)?'text-subtitle moserrat-bold text-base font-bold':'text-subtitle opacity-30 text-base moserrat-bold font-bold'">PRODUCTOS</p>
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
                  <p :class="(selected===1)?'text-subtitle moserrat-bold text-base font-bold':'text-subtitle opacity-30 text-base moserrat-bold font-bold'">SERIES</p>
                  <div v-if="(selected===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
            </div>
            </div>
            <!-- version mobile -->
            <div class="block lg:hidden w-full">
            <div class="flex">
              <div 
              @click="changeMenuOption(0)"
              :class="(selected===0)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
               <div >
                  <p v-if="getPageState" :class="(selected===0)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light font-bold'">PRODUCTOS</p>
                  <p v-else :class="(selected===0)?'text-subtitle text-lg  moserrat-bold':
                  'text-subtitle opacity-30 text-lg moserrat-bold font-bold'">PRODUCTOS</p>
                  <div v-if="(selected===0)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
              <div 
               @click="changeMenuOption(1)"
              :class="(selected===1)?'bg-1d':'bg-0a'"
              class="w-1/2 h-11 flex justify-center items-center cursor-pointer">
                <div >
                  <p v-if="getPageState" :class="(selected===1)?'text-subtitle text-lg monserrat-light':
                  'text-subtitle opacity-30 text-lg monserrat-light'">SERIES</p>
                  <p v-else :class="(selected===1)?'text-subtitle text-lg font-bold moserrat-bold':
                  'text-subtitle opacity-30 text-lg font-bold moserrat-bold'">SERIES</p>
                  <div v-if="(selected===1)" class="pt-1  flex justify-center">
                    <div class="w-2/3 border border-menu-bar-select"></div>
                  </div>
               </div>
              </div>
            </div>
            </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        changeMenuOption: {            
            default: ()=>{}
        },
        selected:{
            default:0
        }
    },
    computed: {
      ...mapGetters(["getPageState"])
    },
}
</script>

<style>

</style>