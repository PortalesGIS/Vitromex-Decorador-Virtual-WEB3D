<template>
  <!-- <div class=" w-full h-full "> -->
  <div class="fixed top-0 w-full h-full">
    <div id="scene" class="fixed bg-purple-600 w-full h-full"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { App } from "../../three/App";
import Observer, { EVENTS } from "../../three/Observer";
Observer.on(EVENTS.TEST, (payload) => {
  console.log(payload);
});
export default {
  methods: {
    ...mapActions(["changeAreaSelected","onChnageMuroAplication"])
  },
  mounted() {
    const app = new App(document.querySelector("#scene"));
    window.addEventListener("resize", () => {
      app.onResize();
    });
    Observer.on(EVENTS.MOVETOAREA, (nameToMoveArea) => {
      this.changeAreaSelected(nameToMoveArea)
    });
    Observer.on(EVENTS.SELECTMURO, (nameOfMuroToAplicate) => {
      this.onChnageMuroAplication(nameOfMuroToAplicate)
    });
  },
};
</script>

<style>
</style>