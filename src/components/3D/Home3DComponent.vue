<template>
  <!-- <div class=" w-full h-full "> -->
  <div class="absolute top-0 w-screen h-screen">
    <div id="scene" class="bg-gray-600 w-full h-full"></div>
  </div>
</template>

<script>
import { App } from "../../three/App";
import Observer, { EVENTS } from "../../three/Observer";
Observer.on(EVENTS.TEST, (payload) => {
  console.log(payload);
});
export default {
  mounted() {
    const app = new App(document.querySelector("#scene"));
    window.addEventListener("resize", () => {
      app.onResize();
    });
  },
};
</script>

<style>
</style>