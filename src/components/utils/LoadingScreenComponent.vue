<template>
  <div 
  id="loadingScreen"
  class=" absolute h-screen w-screen bg-black z-100"
  :class="getPageState?'img-fondo-arko':'img-fondo-vitromex'"
  >
    <div class='w-full h-full flex justify-center items-center'>
        <!-- version desktop -->
        <div class="">
        <div class="flex justify-center  ">
            <img  v-if="getPageState" src="../../assets/arko/Web/ARKO_Logo.svg" style="width:223px; height:52px" alt="">
            <img v-else src="../../assets/web/Logo_Vitromex.svg" style="width:223px; height:52px" alt=""> 
        </div>
            <div class='flex justify-center items-center'>
            <div>
                <div class='flex justify-center items-center'>
                    <div>
                        <div class="w-60 h-2 bg-white rounded-xl mt-4">
                <div 
                id="bar"
                :style="`width:${progress}%`"
                class="h-full bg-gray-900 rounded-xl"
                ></div>
            </div>
                    </div>
                </div>
            <div class="text-title w-80 text-center pt-2 text-white text-monserrat text-xl">
                <p
                >{{Math.round(progress)}}%</p>
                
            </div>
            </div>
            
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap/src'
import { mapGetters } from 'vuex'
import Observer, { EVENTS } from '../../three/Observer'
export default {
    data() {
        return {
            nameFile: "nombre de archivo",
            progress:"0"
        }
    },
    computed: {
        ...mapGetters(['getPageState'])
    },
    methods: {
    },
    mounted () {
        Observer.on(EVENTS.LOADING,(progress,fileURL)=>{
            this.progress = `${progress*100}`
            document.getElementById('bar').style.width=`${Math.round(progress*100)}%`;
            this.nameFile = fileURL;
        })
        Observer.on(EVENTS.LOADINGFFINISH,()=>{
            gsap.to('#loadingScreen',{
                duration:1,
                opacity:1,
                onComplete:()=>{
                     document.getElementById('loadingScreen').classList.add('hidden')
                }
            })
        })
    },
}
</script>

<style>
.img-fondo-vitromex{    
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url('../../assets/web/Fondo.png');
}
.img-fondo-arko{    
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url('../../assets/arko/Web/splashfondo.png');
}
</style>