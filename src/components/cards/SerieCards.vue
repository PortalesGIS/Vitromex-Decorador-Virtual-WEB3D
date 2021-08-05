<template>
  <div v-if="!serieSelected.name">
                <div class='grid grid-cols-2'>
                  <div v-for="serie in listSeries" :key="serie"
                    class="pb-2 relative cursor-pointer">
                    <div @click="onSelectSerie(serie)">
                   <div class="relative">
                      <img :src="serie.img" class="object-cover rounded-md" style="width:140px; height:140px" alt="">   
                     </div>                                                        
                     <div class="absolute top-0 w-full h-full flex justify-center items-center">
                       <p class="text-white font-bold text-base moserrat-bold">{{serie.name}}</p>
                     </div>
                    </div>
                  </div>
                  </div>
              </div>
  <div v-else>
    <div class="w-full relative mb-2">
      <div class="relative">
          <img :src="serieSelected.render" class="object-cover w-full rounded-md" style=" height:70px" alt="">   
         </div>                                                        
         <div class="absolute top-0 w-full h-full flex justify-center items-center">
           <p class="text-white font-bold text-base moserrat-bold">{{serieSelected.name}}</p>
         </div>
    </div>
     <ProductComponentVue :listProducts="filterPerSerie(serieSelected.name)"/>
    </div> 
</template>
<script>
import { mapGetters } from 'vuex'
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
        onSelectSerie(payload){
            // this.addFilterAplicates(payload)            
            // this.filterProducts()
            // this.selected=0
            this.serieSelected=payload
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