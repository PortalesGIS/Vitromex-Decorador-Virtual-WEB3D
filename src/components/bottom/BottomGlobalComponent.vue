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
                :class="(true)?'bg-base-black-opacity':''" 
                class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class="pl-2 lg:pl-0 w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl ">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">FACHADA</p>
                        <p v-else class="gotham text-center">FACHADA</p>
                        <div class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">SALA</p>
                        <p v-else class="gotham text-center">SALA</p>
                        <!-- <div class="h-px w-16 xl:w-24 bg-base-white"></div> -->
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">COCINA</p>
                        <p v-else class="gotham text-center">COCINA</p>
                        <!-- <div class="h-px w-16 xl:w-24 bg-base-white"></div> -->
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">COMEDOR</p>
                        <p v-else class="gotham text-center">COMEDOR</p>
                        <!-- <div class="h-px w-16 xl:w-24 bg-base-white"></div> -->
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full cursor-pointer items-center hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p v-if="getPageState" class="gotham-light text-center">BAÑO</p>
                        <p v-else class="gotham text-center">BAÑO</p>
                        <!-- <div class="h-px w-16 xl:w-24 bg-base-white"></div> -->
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
        ...mapActions(["changeMenuCatalogo"])
    },
    computed: {
        ...mapGetters(["getPageState"])
    },
}
</script>

<style>

</style>