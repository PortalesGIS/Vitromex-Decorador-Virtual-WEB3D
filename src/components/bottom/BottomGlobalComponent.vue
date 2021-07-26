<template>  
    <div class="h-16 lg:h-24 w-full bg-base-black-opacity">
        <div class="w-full h-full flex justify-center items-center">
            <div
                :class="(true)?'bg-base-black-opacity':''" 
                class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class="pl-2 lg:pl-0 w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl ">
                    <div>
                        <p class=" text-center">FACHADA</p>
                        <div class=" h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p class="text-center">SALA</p>
                        <div class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p class="text-center">COCINA</p>
                        <div class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center cursor-pointer  hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p class="text-center">COMEDOR</p>
                        <div class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
                <div class=" h-8 xl:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full cursor-pointer items-center hover:bg-base-black-opacity hover:bg-opacity-50">
                <div class=" w-20 xl:w-44 text-subtitle flex justify-center text-xs lg:text-sm xl:text-xl">
                    <div>
                        <p class="text-center">BAÑO</p>
                        <div class="h-px w-16 xl:w-24 bg-base-white"></div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>