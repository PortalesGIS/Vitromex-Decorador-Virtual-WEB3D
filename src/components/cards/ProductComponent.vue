<template>
  <div class="grid grid-cols-3">
    <div v-for="product in listProducts" :key="product" class="pb-2">
      <div @click="selectProductForMap(product)" class="cursor-pointer">
        <img
          :src="product.smallPicture"
          class="object-cover rounded-md"
          style="width: 89px; height: 69px"
          alt=""
        />
        <p class="text-white font-semibold text-cf" style="font-size: 11px">
          {{ product.name }}
        </p>
        <p class="text-white font-semibold text-cf" style="font-size: 11px">
          {{ product.sized }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Observer, { EVENTS } from "../../three/Observer";
export default {
  props: {
    listProducts: {
      default: [],
    },
  },
  methods: {
    selectProductForMap(product) {
      Observer.emit(EVENTS.SENDPRODUCT, product);
    },
  },
};
</script>

<style>
</style>