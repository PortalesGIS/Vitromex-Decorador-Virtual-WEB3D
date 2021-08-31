<template>  

<div
    id="screenblack"
    class=" fixed z-20  top-0  hidden opacity-0  bg-base-black h-screen w-screen">
    <div class='w-full h-full flex justify-center items-center'>
        <div class="ml-16 hidden lg:block">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">            
        </div>        
        <div class=" block lg:hidden ">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">            

        </div>
    </div>
</div>
<div class="z-25"> 
    <div class= "fixed right-0 -mt-16 pr-2">
    <div class="w-11 h-11"
        @click="changeMenuCatalogo">
        <img src="../../assets/mobile/menu_catalogo.png" alt="">
    </div>
</div>
    <div class="h-16 lg:h-24 w-full bg-base-black-opacity">
        <div class="w-full h-full flex justify-center items-center">
            <div
                :class="(getAreaSelected==='fachada')?'bg-base-black-opacity':''" 
                @click="onSelectArea('fachada')"
                class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class="pl-2 lg:pl-0 w-18 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl ">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">FACHADA</p>
                        <p v-else class=" gotham text-center">FACHADA</p>
                        <div v-if="getAreaSelected==='fachada'" class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
            </div>
            <div class=" h-8 xl:h-16 w-px bg-separatedBar "></div>
            <div 
             :class="(getAreaSelected==='sala')?'bg-base-black-opacity':''"
             @click="onSelectArea('sala')"
            class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class="w-18 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">SALA</p>
                        <p v-else class="gotham text-center">SALA</p>
                        <div v-if="getAreaSelected==='sala'" class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
            </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            <div 
             :class="(getAreaSelected==='cocina')?'bg-base-black-opacity':''"
             @click="onSelectArea('cocina')"
            class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-18 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">COCINA</p>
                        <p v-else class=" gotham text-center">COCINA</p>
                        <div v-if="getAreaSelected==='cocina'" class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
            </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            <div 
             :class="(getAreaSelected==='comedor')?'bg-base-black-opacity':''"
             @click="onSelectArea('comedor')"
            class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-18 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">COMEDOR</p>
                        <p v-else class=" gotham text-center">COMEDOR</p>
                        <div v-if="getAreaSelected==='comedor'" class="h-px w-16 xl:w-28 bg-base-white"></div>
                    </div>
                    </div>
            </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            <div 
             :class="(getAreaSelected==='banio')?'bg-base-black-opacity':''"
             @click="onSelectArea('banio')"
            class="flex h-full cursor-pointer items-center hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-18 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">BAÑO</p>
                        <p v-else class=" gotham text-center">BAÑO</p>
                        <div v-if="getAreaSelected==='banio'" class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
            </div>
        </div>
        
    </div>
</div>

</template>
 
<script>
import { mapActions, mapGetters } from 'vuex'
import gsap from 'gsap';
export default {
    methods: {
        ...mapActions(["changeMenuCatalogo","changeAreaSelected",'addPointToSpaceSlectedAnalytics']),
        onSelectArea(nameArea){
            this.addPointToSpaceSlectedAnalytics(nameArea)
            gsap.to('#screenblack',{
                onStart:()=>{
                    document.getElementById('screenblack').classList.remove('hidden')
                    },
                duration:0.4,
                opacity:1,
                onComplete:()=>{
                    this.changeAreaSelected(nameArea)
                    gsap.to('#screenblack',{
                        duration:0.4,
                         opacity:0,
                         onComplete:()=>{
                             document.getElementById('screenblack').classList.add('hidden')
                         }
                     }) 
                }
            })
        }
    },
    computed: {
        ...mapGetters(["getPageState","getAreaSelected"])
    },
}
</script>

<style>

</style>