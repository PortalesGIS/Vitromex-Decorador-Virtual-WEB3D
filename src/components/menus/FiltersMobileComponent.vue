<template>
  <div class="w-full h-full px-2">
        <div class="flex justify-between">
            <div  @click="cerrarFiltro" class="flex items-center">
                <div 
                    class="pl-1 w-4 h-4">
                    <img v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="" >
                    <img v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="" >
                </div>
                <div class="pl-2">
                    <p class="uppercase"
                        :class="getPageState?'text-xl text-black  gotham-light':'text-2xl text-white moserrat-bold'"
                    >filtros</p>
                </div>
            </div>
            <div>
                <button class="bg-btn-filter w-28 h-6 focus:outline-none shadow-btn-filter"
                            :class="getPageState?'text-xs text-black  gotham-light':'text-xs text-white moserrat-bold'" 
                            @click="onDeleteFilters()">
                    Quitar filtros
                </button>
            </div>
        </div>
        <div v-if="getCatalogoSerieProductoSelecte===0" class="overflow-y-auto overflow-x-hidden h-5/6 ">
        <div class="pl-1 pt-6 pr-2">
           <div class="flex justify-between"
                @click="toggleFilterTipologie">
                <div :class="tipologie?'opacity-40':''">
                <p  :class="getPageState?'text-xs text-black gotham-light ':'text-xs text-white moserrat-bold'"
                    >TIPOLOGÍA</p>
                </div>
                <div v-if="tipologie">
                <img class="transform rotate-270 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-270 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                </div>      
                <div v-else>
                <img class="transform rotate-90 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-90 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                    </div>          
           </div>
            <div v-if="!tipologie" class="w-full h-auto flex flex-wrap">
                <div v-for="item in getAllTypologies" :key="item" class="flex-initial pl-1 ">
                    <div class=" py-1"
                    :class="item.length<=10?' w-20':' w-44'"
                    @click="onFilter({camp:'typologies',data:`${item}`})">
                        <p class="py-1  text-center  rounded-md text-xs capitalize truncate"
                            :class="selectedTypologie===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'"
                        >{{item.toLowerCase()}}</p>
                    </div>
                </div>
            </div>
        </div>        
        <div class="pl-1 pt-6 pr-2">
           <div class="flex justify-between"
                @click="toggleFilteformat">
                <div :class="fomat?'opacity-40':''">
                <p  :class="getPageState?'text-xs text-black  gotham-light ':'text-xs text-white moserrat-bold'"
                    >FORMATOS</p>
                </div>
                <div v-if="fomat">
                <img class="transform rotate-270 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-270 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                </div>      
                <div v-else>
                <img class="transform rotate-90 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-90 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                    </div>          
           </div>
           <div v-if="!fomat && selectedTypologie!=''" class="w-full h-auto flex flex-wrap">
                <div v-for="item in formatsLocal" :key="item" class="flex-initial pl-1">
                    <div class="py-1"
                     :class="item.length<=10?' w-20':' w-44'"
                       @click="onFilter({camp:'sized',data:`${item}`})">
                        <p class="py-1  text-center  rounded-md text-xs capitalize truncate "
                         :class="selectFormat===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'">
                         {{item.toLowerCase()}}</p>
                    </div>
                </div>
            </div>
        </div>        
        <div class="pl-1 pt-6 pr-2">
           <div class="flex justify-between"
                @click="toggleFiltercolor">
                <div :class="color?'opacity-40':''">
                <p  :class="getPageState?'text-xs text-black  gotham-light ':'text-xs text-white moserrat-bold'"
                    >COLORES</p>
                </div>
                <div v-if="color">
                <img class="transform rotate-270 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-270 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                </div>      
                <div v-else>
                <img class="transform rotate-90 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-90 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                    </div>          
           </div>
           <div v-if="!color && selectFormat!=''" class="w-full h-auto flex flex-wrap">
                <div v-for="item in colorLocal" :key="item" class="flex-initial pl-1">
                    <div class="py-1"
                     :class="item.length<=10?' w-20':' w-44'"
                      @click="onFilter({camp:'color',data:`${item}`})">
                      <p class="py-1  text-center  rounded-md text-xs capitalize truncate "
                         :class="selectColor===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'">
                         {{item.toLowerCase()}}</p>
                    </div>
                </div>
            </div>
        </div>        
        <div class="pl-1 pt-6 pr-2">
           <div class="flex justify-between"
                @click="toggleFilterfinish">
                <div :class="finish?'opacity-40':''">
                <p  :class="getPageState?'text-xs text-black  gotham-light ':'text-xs text-white moserrat-bold'"
                    >ACABADO</p>
                </div>
                <div v-if="finish">
                <img class="transform rotate-270 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-270 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                </div>      
                <div v-else>
                <img class="transform rotate-90 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-90 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                    </div>          
           </div>
           <div v-if="!finish && selectColor!=''" class="w-full h-auto flex flex-wrap">
                <div v-for="item in finishLocal" :key="item" class="flex-initial pl-1">
                   <div class="py-1"
                     :class="item.length<=10?' w-20':' w-44'"
                      @click="onFilter({camp:'finish',data:`${item}`})">
                       <p class="py-1  text-center  rounded-md text-xs capitalize truncate "
                         :class="selectFinish===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'">
                         {{item.toLowerCase()}}</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    <!-- if secccion serie is active  -->
    <div v-else>
        <div class="pl-1 pt-6 pr-2">
           <div class="flex justify-between"
                @click="toggleFilterTipologie">
                <div :class="tipologie?'opacity-40':''">
                <p  :class="getPageState?'text-xs text-black gotham-light ':'text-xs text-white moserrat-bold'"
                    >TIPOLOGÍA</p>
                </div>
                <div v-if="tipologie">
                <img class="transform rotate-270 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-270 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                </div>      
                <div v-else>
                <img class="transform rotate-90 w-2 opacity-50" v-if="getPageState" src="../../assets/arko/Mobile/cerrar_filtro_catalogo.svg" alt="">
                <img class="transform rotate-90 w-2 opacity-50" v-else src="../../assets/mobile/cerrar_filtro_catalogo.svg" alt="">
                    </div>          
           </div>
            <div v-if="!tipologie" class="w-full h-auto flex flex-wrap">
                <div v-for="item in getAllTypologies" :key="item" class="flex-initial pl-1 ">
                    <div class=" py-1"
                    :class="item.length<=10?' w-20':' w-44'"
                    @click="onfilterSerie({camp:'typologie',data:`${item}`})">
                        <p class="py-1  text-center  rounded-md text-xs capitalize truncate "
                            :class="selectedTypologie===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'"
                        >{{item.toLowerCase()}}</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  </div>
  <div v-if="selectedTypologie!=''" class="fixed bottom-0 mb-16 w-full overflow-x-hidden pr-2  bg-filter-options  flex items-center justify-center py-3 animate__animated animate__fadeIn animate__faster">
       <button class="py-2 px-3 bg-filter-use text-selected-filter moserrat-bold"
       @click="cerrarFiltro">Ver resultados</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            tipologie: false,
            formatsLocal:[],
            colorLocal:[],
            finishLocal:[],
            fomat:true,
            color:true,
            finish:true,
            selectedTypologie:"",
            selectFormat:"",
            selectColor:"",
            selectFinish:"",
        }
    },
    props: {
        cerrarFiltro: {
            type: Function,
            default: ()=>{}
        },
    },
    methods: {
        ...mapActions(["filterProducts","deleteFilters","addFilterAplicates","filterSeries"]),
        toggleFilterTipologie(){
            this.tipologie =!this.tipologie
        },
        onDeleteFilters(){
            this.selectedTypologie=""
            this.selectFormat=""
            this.selectColor=""
            this.selectFinish=""
            this.deleteFilters()
        },
        onFilter(payload){
            this.addFilterAplicates(payload)            
            this.filterProducts()
            if(payload.camp === "typologies"){
                this.selectedTypologie=payload.data
                 this.fomat = false
                 this.formatsLocal= this.getAllFormats
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
            if(payload.camp === "finish"){
                this.selectFinish=payload.data
            }
        },
        onfilterSerie(payload){
          this.selectedTypologie=payload.data
          this.filterSeries(payload)
        },
        toggleFilteformat(){
            this.fomat =!this.fomat
        },
        toggleFiltercolor(){
            this.color =!this.color
        },
        toggleFilterfinish(){
            this.finish =!this.finish
        },
    },
    computed: {
        ...mapGetters(["getPageState",
        "getAllTypologies",
        "getAllFormats",
        "getAllColors",
        "getAllFinish",
        "getCatalogoSerieProductoSelecte",
        ])
    },

}
</script>

<style>

</style>