<template>
  <div  v-if="getisOpenfiltersWeb"  class="w-full h-77 mt-24 animate__animated animate__fadeInDown animate__faster" style="padding-left:336px; padding-right:212px">
      <div class="bg-base-black-opacity w-full h-full">
        <div class='grid grid-cols-6 w-full h-full'>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id=""  v-model="typogra"
                 @change="getCatalogoSerieProductoSelecte===0?onFilter({camp:'typologies',data:`${typogra}`}):onfilterSerie({camp:'typologie',data:`${typogra}`})" 
                 class="appearance-none bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none"
                 :class="getPageState?'arrow-drop-down-black':'arrow-drop-down'">
                  <option disabled selected> Tipología </option>
                  <option v-for="typo in getAllTypologies" :key="typo" :value="typo">{{typo}}</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select name="" id="" class="appearance-none bg-1d  text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none "
                 :class="getPageState?'arrow-drop-down-black':'arrow-drop-down'"
                @change="getCatalogoSerieProductoSelecte===0?onFilter({camp:'serie',data:`${ser}`}):onfilterSerie({camp:'name',data:`${ser}`})" v-model="ser">
                  <option disabled selected> {{ser}} </option>
                  <option v-for="serie in serieLocal" :key="serie" :value="serie">{{serie}}</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select :disabled="getCatalogoSerieProductoSelecte!=0"
                 name="" id="" class="appearance-none bg-1d  text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none "
                 :class="getPageState?'arrow-drop-down-black':'arrow-drop-down'"
                @change="onFilter({camp:'sized',data:`${forma}`})" v-model="forma">
                  <option disabled selected> Formatos </option>
                  <option v-for="format in formatsLocal" :key="format" :value="format">{{format}}</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select :disabled="getCatalogoSerieProductoSelecte!=0"
                 name="" id="" class="appearance-none bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none "
                 :class="getPageState?'arrow-drop-down-black':'arrow-drop-down'"
                  @change="onFilter({camp:'color',data:`${col}`})" v-model="col">
                  <option disabled selected> Colores </option>
                 <option v-for="color in colorLocal" :key="color" :value="color">{{color}}</option>
                </select>
              </div>
            </div>
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <select :disabled="getCatalogoSerieProductoSelecte!=0"
                name="" id="" class="appearance-none bg-1d text-subtitle w-11/12 xl:w-5/6 h-9 px-2 outline-none "
                 :class="getPageState?'arrow-drop-down-black':'arrow-drop-down'"
                  @change="onFilter({camp:'finish',data:`${fini}`})" v-model="fini">
                  <option disabled selected> Acabado </option>
                 <option v-for="finish in finishLocal" :key="finish" :value="finish">{{finish}}</option>                  
                </select>
              </div>
            </div>
            
            <div class="w-full h-full flex items-center justify-center">
              <div class=" flex w-full justify-center">
                <button @click="onDeleteFilters" class="bg-black text-white w-11/12 xl:w-5/6 h-9 px-2">Borrar filtros</button>
              </div>
            </div>
        </div>
      </div>
  </div>
  <div  class="fixed right-0  flex justify-end" style=" padding-right:212px"
        :class="getisOpenfiltersWeb?'py-2':'py-28'">
        <div class="pr-1 cursor-pointer" @click="openTutorial">
          <img v-if="getPageState" class="w-12 h-12" src="../../assets/arko/Web/Info.svg" alt="">
          <img v-else class="w-12 h-12" src="../../assets/web/Info_B.svg" alt="">
        </div>
      </div>
      <div class="fixed right-0 flex justify-end" style=" padding-right:212px"
       :class="getisOpenfiltersWeb?'':'py-24'">
        <TutorialAlertscomponentVue
        ref="tutorial"/>    
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TutorialAlertscomponentVue from '../alerts/TutorialAlertscomponent.vue'
export default {
  components: {
    TutorialAlertscomponentVue,
  },
  data() {
    return {
      formatsLocal:[],
      colorLocal:[],
      finishLocal:[],
      serieLocal:[],
      ser:"Serie",
      typogra: "Tipología",
      forma:"Formatos",
      col:"Colores",
      fini:"Acabado"
    }
  },
  methods: {
    ...mapActions(["deleteFilters","deleteFiltersSeries","filterProducts","filterSeries","addFilterAplicatesVersionDesktop"]),
    onDeleteFilters(){
            this.selectedTypologie=""
            this.deleteFilters()
            this.deleteFiltersSeries()
            this.onInit()
            this.ser="Serie"
            this.typogra= "Tipología"
            this.forma="Formatos"
            this.col="Colores"
            this.fini="Acabado"
        },
        onFilter(payload){
            this.addFilterAplicatesVersionDesktop(payload)            
            this.filterProducts()
            if(payload.camp === "typologies"){
                this.selectedTypologie=payload.data
                 this.fomat = false
                 this.formatsLocal = this.getAllFormats
            }
            if(payload.camp === "sized"){
                this.selectFormat=payload.data
                 this.color = false
                  this.colorLocal = this.getAllColors
            }
            if(payload.camp === "color"){
                this.selectColor=payload.data
                 this.finish = false
                  this.finishLocal = this.getAllFinish
            }
        },
        onfilterSerie(payload){
          this.filterSeries(payload)
        },
    openTutorial() {
       this.$refs.tutorial.open();
    },
     async onInit(){
      this.formatsLocal = this.getAllFormats
      this.colorLocal = this.getAllColors
      this.finishLocal = this.getAllFinish
      this.serieLocal = this.getAllSeriesForFilter
    }
  },
computed: {
    ...mapGetters(["getPageState","getAllTypologies",
        "getAllFormats",
        "getAllColors",
        "getAllFinish",
        "getCatalogoSerieProductoSelecte",
        "getAllSeriesForFilter",
        "getisOpenfiltersWeb",
        ])
  },
  mounted () {
    this.onInit();
  },
}
</script>

<style>

</style>