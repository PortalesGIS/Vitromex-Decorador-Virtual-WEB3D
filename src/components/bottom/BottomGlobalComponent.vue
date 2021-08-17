<template>  
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions(["changeMenuCatalogo","changeAreaSelected"]),
        onSelectArea(nameArea){
            this.changeAreaSelected(nameArea)
        }
    },
    computed: {
        ...mapGetters(["getPageState","getAreaSelected"])
    },
}
</script>

<style>

</style>