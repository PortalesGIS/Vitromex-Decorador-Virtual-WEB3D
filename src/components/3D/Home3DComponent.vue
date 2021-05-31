<template>
  <div class="w-full h-full pt-14 pl-56">
      <div 
      id="scene"
      class="bg-gray-200 w-full h-full">

      </div>
  </div>
</template>

<script>
import { App } from '../../three/App';

export default {
    mounted () {

    const app = new App(document.querySelector('#scene'));
    window.addEventListener('resize', () => {
	app.onResize();
    });

    },
}
</script>

<style>

</style>