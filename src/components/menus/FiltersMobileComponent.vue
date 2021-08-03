<template>
  <div class="w-full h-full">
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
        <div class="overflow-y-auto overflow-x-hidden h-5/6">
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
                <div v-for="item in getAllTypologies" :key="item" class="flex-auto">
                    <div class="px-2 py-1"
                    @click="onFilter({camp:'typologies',data:`${item}`})">
                        <p class="py-1 px-4 text-center  rounded-md text-xs "
                            :class="selectedTypologie===item?'bg-filter-use text-selected-filter':'text-text-filter bg-filter-options'"
                        >{{item}}</p>
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
                <div v-for="item in getAllFormats" :key="item" class="flex-auto">
                    <div class="px-2 py-1"
                       @click="onFilter({camp:'sized',data:`${item}`})">
                        <p class="py-1 px-4 text-center bg-filter-options rounded-md text-xs text-text-filter">{{item}}</p>
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
                <div v-for="item in getAllColors" :key="item" class="flex-auto">
                    <div class="px-2 py-1"
                      @click="onFilter({camp:'color',data:`${item}`})">
                        <p class="py-1 px-4 text-center bg-filter-options rounded-md text-xs text-text-filter">{{item}}</p>
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
                <div v-for="item in getAllFinish" :key="item" class="flex-auto">
                    <div class="px-2 py-1"
                      @click="onFilter({camp:'finish',data:`${item}`})">
                        <p class="py-1 px-4 text-center bg-filter-options rounded-md text-xs text-text-filter">{{item}}</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    <div v-if="selectedTypologie!=''" class="w-full bg-filter-options  flex items-center justify-center py-3 animate__animated animate__fadeIn animate__faster">
       <button class="py-2 px-3 bg-filter-use text-selected-filter moserrat-bold"
       @click="cerrarFiltro">Ver resultados</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            tipologie: false,
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
        ...mapActions(["filterProducts","deleteFilters","addFilterAplicates"]),
        toggleFilterTipologie(){
            this.tipologie =!this.tipologie
        },
        onDeleteFilters(){
            this.selectedTypologie=""
            this.deleteFilters()
        },
        onFilter(payload){
            this.addFilterAplicates(payload)            
            this.filterProducts()
            if(payload.camp === "typologies"){
                this.selectedTypologie=payload.data
                 this.fomat = false
            }
            if(payload.camp === "sized"){
                this.selectFormat=payload.data
                 this.color = false
            }
            if(payload.camp === "color"){
                this.selectColor=payload.data
                 this.finish = false
            }
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
        ])
    },

}
</script>

<style>

</style>