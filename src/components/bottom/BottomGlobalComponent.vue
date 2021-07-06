<template>  
    <div class="h-16 md:h-24 w-full bg-black bg-opacity-50">
        <div class="w-full h-full flex justify-center items-center">
            <div
                :class="(true)?'bg-black bg-opacity-50':''" 
                class="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                <div class="pl-2 md:pl-0 w-20 md:w-44 text-white flex justify-center text-xs md:text-lg ">
                    <div>
                        <p class=" text-center">FACHADA</p>
                        <div class=" h-px w-16 md:w-24 bg-white"></div>
                    </div>
                    </div>
                <div class=" h-8 md:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                <div class=" w-20 md:w-44 text-white flex justify-center text-xs md:text-lg">
                    <div>
                        <p class="text-center">SALA</p>
                        <div class="h-px w-16 md:w-24 bg-white"></div>
                    </div>
                    </div>
                <div class=" h-8 md:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                <div class=" w-20 md:w-44 text-white flex justify-center text-xs md:text-lg">
                    <div>
                        <p class="text-center">COCINA</p>
                        <div class="h-px w-16 md:w-24 bg-white"></div>
                    </div>
                    </div>
                <div class=" h-8 md:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full items-center  hover:bg-black hover:bg-opacity-50">
                <div class=" w-20 md:w-44 text-white flex justify-center text-xs md:text-lg">
                    <div>
                        <p class="text-center">COMEDOR</p>
                        <div class="h-px w-16 md:w-24 bg-white"></div>
                    </div>
                    </div>
                <div class=" h-8 md:h-16 w-px bg-separatedBar"></div>
            </div>
            <div class="flex h-full  items-center hover:bg-black hover:bg-opacity-50">
                <div class=" w-20 md:w-44 text-white flex justify-center text-xs md:text-lg">
                    <div>
                        <p class="text-center">BAÑO</p>
                        <div class="h-px w-16 md:w-24 bg-white"></div>
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