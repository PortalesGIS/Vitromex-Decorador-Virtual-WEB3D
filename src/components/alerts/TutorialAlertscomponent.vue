<template>
  <div v-if="tutorialText">
          <div class="flex top-0 bg-black bg-opacity-90 w-80 h-auto xl:w-471 xl:h-52 animate__animated animate__fadeIn animate__faster" >
            <div class="w-full h-full py-3 px-5">
              <div class="flex justify-between">
                <p class="text-base moserrat-bold text-white font-bold py-2 uppercase">{{text[tutorialTextPage].title}}</p>
                <img  
                @click="close"
                class="h-4 w-4 cursor-pointer" src="../../assets/web/Cerrar.svg" alt="">
              </div>
              <div class="py-2">
                <p class="text-sm text-white monserrat">{{text[tutorialTextPage].parr}} <br>{{text[tutorialTextPage].parrTW}} </p>
              </div>
              <div class="py-2 w-full flex justify-end">
                <button 
                @click="nextTutorialPage"
                class="text-base noselect text-white moserrat-bold py-2 focus:outline-none">{{tutorialTextPage===4?'ENTENDIDO':'SIGUIENTE'}}</button>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    
data() {
    return {
      tutorialText: false,
      tutorialTextPage:0,
      text:[
          {
              title: "¿CÓMO ME DESPLAZO?",
              parr:"Para desplazarte, posiciona el cursor sobre el piso y da clic en la dirección a la que deseas avanzar. ",
              parrTW:"Para girar haz clic sostenido sobre la pantalla y arrastra el cursor hacia la izquierda o derecha. ",
          },
          {
              title: "¿CÓMO DECORO EL PISO?",
              parr:'Para modificar el producto aplicado en el piso, da clic en la opción "Piso" ubicado dentro del catálogo y selecciona el producto que deseas aplicar.',
          },
          {
              title: "¿CÓMO DECORO LOS MUROS?",
              parr:'Para modificar el producto aplicado en los muros, da clic en la opción "Muro" ubicado dentro del catálogo y selecciona el producto que deseas aplicar.',
          },
          {
              title: "¿CÓMO DECORO MUROS INDIVIDUALMENTE?",
              parr:'Para modificar un muro individualmente, da clic en la opción "Muro" dentro del catálogo y selecciona con el cursor el muro que deseas cambiar. Una vez seleccionado, elige el producto que deseas aplicar.',
          },
          {
              title: "¿En dónde consulto qué producto apliqué?",
              parr:"En el menú derecho podrás ver los productos que están siendo aplicados en el muro o piso de la habitación en la que te encuentras.",
          }
      ]    
    }
  },
  methods: {
      open(){
          this.tutorialText=true;
      },
      close(){
          this.tutorialText=false;
           this.tutorialTextPage=0
      },
    nextTutorialPage(){
       this.tutorialTextPage +=1 
      if(this.tutorialTextPage>4){
        this.tutorialText=false
       this.tutorialTextPage =0
      }
    }
  },
}
</script>

<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>