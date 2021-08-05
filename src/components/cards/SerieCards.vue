<template>
  <div v-if="!serieSelected.name">
    <div class="hidden lg:block ">
      <div class='grid grid-cols-2'>
                  <div v-for="serie in listSeries" :key="serie"
                    class="pb-2 relative cursor-pointer">
                    <div @click="onSelectSerie(serie)">
                   <div class="relative">
                      <img :src="serie.img" class="object-cover rounded-md" style="width:140px; height:140px" alt="">   
                     </div>                                                        
                     <div class="absolute top-0 w-full h-full flex justify-center items-center cursor-pointer">
                       <p class="text-white font-bold text-base moserrat-bold">{{serie.name}}</p>
                     </div>
                    </div>
                  </div>
                  </div>
       </div>
       <!-- mobile version -->
    <div class="block lg:hidden w-full">
      <div class='grid grid-cols-2'>
                  <div v-for="serie in listSeries" :key="serie"
                    class="pb-2 relative cursor-pointer">
                   <div @click="onSelectSerie(serie)">
                     <div class="relative flex items-center justify-center">
                      <img :src="serie.img" class="object-cover rounded-md" style="width:140px; height:140px" alt="">   
                     </div>                                                        
                     <div class="absolute top-0 w-full h-full flex justify-center items-center">
                       <p class="text-white font-bold text-base">{{serie.name}}</p>
                     </div>
                   </div>
                  </div>
              </div>
       </div>
                
  </div>
  <div v-else>
    <div class="w-full relative mb-2 "
      @click="onCloseSerieSelected">
      <div class="relative">
          <img :src="serieSelected.render" class="object-cover w-full rounded-md h-24 lg:h-20"  alt="">   
         </div>                                                        
         <div class="absolute top-0 w-full h-full flex justify-center items-center">
           <p class="text-white font-bold text-base moserrat-bold">{{serieSelected.name}}</p>
         </div>
         <div class="absolute top-0 w-full h-full flex justify-end items-start px-1 py-1 ">
           <img src="../../assets/web/Cerrar_B.svg" alt="" class="w-8 cursor-pointer">
         </div>
    </div>
     <ProductComponentVue :listProducts="filterPerSerie(serieSelected.name)"/>
    </div> 
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductComponentVue from './ProductComponent.vue'
export default {
    props: {
        listSeries: {
            default:[] 
        },
    },
    data() {
        return {
        serieSelected:{},

        }
    },
    methods: {
      ...mapActions(["deleteFilters"]),
      onCloseSerieSelected(){
        this.serieSelected={}
      },
        onSelectSerie(payload){
            // this.addFilterAplicates(payload)            
            // this.filterProducts()
            // this.selected=0
            this.serieSelected=payload
        this.deleteFilters()
        },
      filterPerSerie(serie){
      let productsFilterSeries =[]
      this.getAllProducts.forEach(product=>{
        if(product.serie===serie){
          productsFilterSeries.push(product)
        }
      })
      return productsFilterSeries;
    },
    },
    computed: {
        ...mapGetters(["getAllProducts"])
    },
    components: {
        ProductComponentVue,
    },

}
</script>

<style>

</style>