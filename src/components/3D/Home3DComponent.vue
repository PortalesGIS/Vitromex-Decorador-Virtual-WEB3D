<template>
  <!-- <div class=" w-full h-full "> -->
    <div v-if="getisLoadingProductToAplicate" class="z-100 absolute top-0 w-screen h-screen bg-black bg-opacity-80">
      <div class='flex justify-center items-center w-full h-full'>
        <div class="text-force-cf text-base lg:text-4xl">Cargando...</div>
      </div>
    </div>
  <div class="fixed top-0 w-full h-full">
    <div
     id="scene" class="fixed bg-purple-600 w-full h-full"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { App } from "../../three/App";
import Observer, { EVENTS } from "../../three/Observer";
export default {
  methods: {
    ...mapActions(["changeAreaSelected","onChnageMuroAplication","changeisLoadingProductToAplicate",'onChangeAplicationSelected'])
  },
  computed: {
    ...mapGetters(["getisLoadingProductToAplicate"])
  },
  mounted() {
    const app = new App(document.querySelector("#scene"));
    window.addEventListener("resize", () => {
      app.onResize();
    });
    Observer.on(EVENTS.MOVETOAREA, (nameToMoveArea) => {
      this.changeAreaSelected(nameToMoveArea)
    });
    Observer.on(EVENTS.CHANGEAREATOAPLICATEPRODUCT, (aplicationType) => {
      this.onChangeAplicationSelected(aplicationType)
    });
    Observer.on(EVENTS.SELECTMURO, (nameOfMuroToAplicate) => {
      this.onChnageMuroAplication(nameOfMuroToAplicate)
    });
    Observer.on(EVENTS.TEST, (payload) => {
      console.log(payload);
    });
    Observer.on(EVENTS.ENDCHARGINPRODUCT, () => {
      this.changeisLoadingProductToAplicate(false)
    });
  },
};
</script>

<style>
</style>