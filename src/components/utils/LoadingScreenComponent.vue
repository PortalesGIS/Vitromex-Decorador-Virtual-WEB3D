<template>
  <div 
  id="loadingScreen"
  class="hidden absolute h-screen w-screen bg-black z-100 img-fondo">
    <div class='w-full h-full flex justify-center items-center'>
        <div class="ml-16 hidden lg:block ">
        <div class="flex justify-center">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt="">            
        </div>        
        <div class=" block lg:hidden ">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt=""> 
        </div>
            <div class="w-80 h-2 bg-white rounded-xl mt-4">
                <div 
                id="bar"
                class=" h-full bg-gray-700 rounded-xl"
                ></div>
            </div>
            <div class="w-80 text-center pt-2 text-white text-monserrat text-xl">
                <p
                id="percentageText"
                >Cargando...</p>
                <p 
                class="text-sm"
                id="nameFile"
                >nombre de archivo</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap/src'
import { mapActions, mapGetters } from 'vuex'
import Observer, { EVENTS } from '../../three/Observer'
export default {
    computed: {
        ...mapGetters(['getPageState'])
    },
    methods: {
        ...mapActions(['getProducts','getSeries']),
         charge (){
            this.getProducts()
            this.getSeries()
            }
    },
    mounted () {
        Observer.on(EVENTS.LOADING,(progress,fileURL)=>{
            document.getElementById('bar').style.width=`${Math.round(progress*100)}%`;
            document.getElementById('percentageText').innerText = `Cargando... ${Math.round(progress*100)}%`;
            document.getElementById('nameFile').innerText = fileURL;
        })
        Observer.on(EVENTS.LOADINGFFINISH,()=>{
           
            gsap.to('#loadingScreen',{
                onStart:()=>{
                    this.charge()
                },
                duration:1,
                opacity:0,
                onComplete:()=>{
                    document.getElementById('loadingScreen').classList.add('hidden')
                }
            })
        })
    },
}
</script>

<style>
.img-fondo{    
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url('../../assets/web/Fondo.png');
}
</style>