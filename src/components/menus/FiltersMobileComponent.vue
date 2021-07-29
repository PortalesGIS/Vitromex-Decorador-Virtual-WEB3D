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
                        :class="getPageState?'text-xl text-black font-light':'text-2xl text-white font-bold'"
                    >filtros</p>
                </div>
            </div>
            <div>
                <button class="bg-btn-filter w-28 h-6 focus:outline-none shadow-btn-filter"
                            :class="getPageState?'text-xs text-black font-light ':'text-xs text-white font-bold'" >
                    Quitar filtros
                </button>
            </div>
        </div>
        <div class="pl-1 pt-6">
           <div class="flex justify-between"
                @click="toggleFilterTipologie">
                <div :class="tipologie?'opacity-30':''">
                <p  :class="getPageState?'text-xs text-black font-light ':'text-xs text-white font-bold'"
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
            <!-- <div class="w-full h-20 bg-red-600"></div> -->
        </div>        
        <div class="pl-1 pt-6">
           <div class="flex justify-between"
                @click="toggleFilteformat">
                <div :class="fomat?'opacity-30':''">
                <p  :class="getPageState?'text-xs text-black font-light ':'text-xs text-white font-bold'"
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
            <!-- <div class="w-full h-20 bg-red-600"></div> -->
        </div>        
        <div class="pl-1 pt-6">
           <div class="flex justify-between"
                @click="toggleFiltercolor">
                <div :class="color?'opacity-30':''">
                <p  :class="getPageState?'text-xs text-black font-light ':'text-xs text-white font-bold'"
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
            <!-- <div class="w-full h-20 bg-red-600"></div> -->
        </div>        
        <div class="pl-1 pt-6">
           <div class="flex justify-between"
                @click="toggleFilterfinish">
                <div :class="finish?'opacity-30':''">
                <p  :class="getPageState?'text-xs text-black font-light ':'text-xs text-white font-bold'"
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
            <!-- <div class="w-full h-20 bg-red-600"></div> -->
        </div>        
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            tipologie: true,
            fomat:true,
            color:true,
            finish:true,
        }
    },
    props: {
        cerrarFiltro: {
            type: Function,
            default: ()=>{}
        },
    },
    methods: {
        toggleFilterTipologie(){
            this.tipologie =!this.tipologie
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
        ...mapGetters(["getPageState"])
    },

}
</script>

<style>

</style>