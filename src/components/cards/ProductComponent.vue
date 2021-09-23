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
    ...mapActions(["changeMenuCatalogo","changeProductsAplicatesInAreas","changeisLoadingProductToAplicate","addPointToClickProduct",'onChnageMuroAplication']),
    selectProductForMap(product) {      
      this.changeMenuCatalogo();
      this.addPointToClickProduct(product._id)
      Observer.emit(EVENTS.SENDPRODUCT, product,this.getAreaSelected,this.getAplicationSeletec,this.getMuroAplication);
      this.changeisLoadingProductToAplicate(true)
      // funcion de abajo para mandar al producto para mostrar en el menu izquierdo :solo desk
      if(this.getAplicationSeletec===1){
        if(this.getMuroAplication !== ''){
          this.changeProductsAplicatesInAreas({
            nameMuro: this.getMuroAplication,
          area:this.getAreaToAplicateProduct(this.getMuroAplication),
          aplication:this.getAplicationSeletec,
          product:product
        })
        this.onChnageMuroAplication('')
          }
          else{
            this.setAllMurosToAreaAplicate(product)
          }
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
      else if(muroAplication.includes("Pasillo")){
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
    },
    setAllMurosToAreaAplicate(product){
      switch (this.getAreaSelected) {
            case "sala":
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                break;
            case "fachada":
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                break;
            case "comedor":
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                break;
            case "cocina":
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                break;
            case "banio":
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                this.changeProductsAplicatesInAreas({nameMuro:"Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0",
                                                    area:this.getAreaToAplicateProduct("Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0"),
                                                    aplication:this.getAplicationSeletec,
                                                    product:product
                                                    })
                break;
            default:
                break;
        }
      // this.changeProductsAplicatesInAreas({
      //     nameMuro: this.getMuroAplication,
      //     area:this.getAreaToAplicateProduct(this.getMuroAplication),
      //     aplication:this.getAplicationSeletec,
      //     product:product
      //   })
    }
  },
  computed: {
    ...mapGetters(["getPageState","getAreaSelected","getAplicationSeletec","getMuroAplication"])
  },
};
</script>

<style>
</style>