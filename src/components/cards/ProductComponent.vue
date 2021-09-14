<template>
<div class="hidden lg:block ">
  <div class="grid grid-cols-3">
    <div v-for="product in listProducts" :key="product" class="pb-2">
      <div @click="selectProductForMap(product)" class="cursor-pointer">
        <img
          :src="product.smallPicture"
          class="object-cover rounded-md"
          style="width: 89px; height: 69px"
          alt=""
        />
        <p class="text-white font-semibold text-cf" style="font-size: 11px">
          {{ product.name }}
        </p>
        <p class="text-white font-semibold text-cf" style="font-size: 11px">
          {{ product.sized }}
        </p>
      </div>
    </div>
  </div>
  <div v-if="listProducts.length=== 0" class="w-full">
      <div class="w-full " >
                  <div class="w-full flex justify-center items-center ">
                    <img class="object-cover w-8 h-8" v-if="getPageState" src="../../assets/arko/Web/not_found.png" alt="">
                    <img class="object-cover w-8 h-8" v-else src="../../assets/web/not_found.png" alt="">
                  </div>
                  <p class="py-4 text-sm font-normal text-subtitle text-center">
                  No se ha encontrado el producto que estás buscando, por favor intenta con algo más.</p>
                  </div>
    </div>
</div>
<!-- mobile version -->
  <div class="block lg:hidden w-full">
    <div class='grid grid-cols-3 sm:grid-cols-4'>
                  <div v-for="(product) in listProducts" :key="product"
                    class="pb-2">
                    <div  @click="selectProductForMap(product)" class="cursor-pointer px-1">
                      <img :src='product.smallPicture' class="object-cover rounded-md w-full h-full" style="max-height:80px; max-width:119px" alt="">
                      <p class="text-white font-semibold text-cf" style="font-size:11px;">{{product.name}}</p>
                      <p class="text-white monserrat-light text-cf" style="font-size:11px;">{{product.sized}}</p>
                    </div>
                  </div>
              </div>
 </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Observer, { EVENTS } from "../../three/Observer";
export default {
  props: {
    listProducts: {
      default: [],
    },
  },
  methods: {
    ...mapActions(["changeMenuCatalogo","changeProductsAplicatesInAreas","changeisLoadingProductToAplicate","addPointToClickProduct"]),
    selectProductForMap(product) {
      this.changeMenuCatalogo();
      this.addPointToClickProduct(product._id)
      Observer.emit(EVENTS.SENDPRODUCT, product,this.getAreaSelected,this.getAplicationSeletec,this.getMuroAplication);
      this.changeisLoadingProductToAplicate(true)
      // funcion de abajo para mandar al producto para mostrar en el menu izquierdo :solo desk
      if(this.getAplicationSeletec===1){
        this.changeProductsAplicatesInAreas({
          nameMuro: this.getMuroAplication,
          area:this.getAreaToAplicateProduct(this.getMuroAplication),
          aplication:this.getAplicationSeletec,
          product:product
        })
      }
      else{
        this.changeProductsAplicatesInAreas({
          area:this.getAreaSelected,
          aplication:this.getAplicationSeletec,
          product:product
        })
      }
    },
    getAreaToAplicateProduct(muroAplication){
      if(muroAplication.includes("Sala")){
        return "sala"
      }
      else if(muroAplication.includes("Comedor")){
        return "comedor"
      }
      else if(muroAplication.includes("Cocina")){
        return "cocina"
      }
      else if (muroAplication.includes("Banio")){
        return "banio"
      }
      else if (muroAplication.includes("Ext_Patio")){
        return "fachada"
      }
    }
  },
  computed: {
    ...mapGetters(["getPageState","getAreaSelected","getAplicationSeletec","getMuroAplication"])
  },
};
</script>

<style>
</style>