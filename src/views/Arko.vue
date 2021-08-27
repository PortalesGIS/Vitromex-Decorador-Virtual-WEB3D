<template>
  <div class="theme-arko">
      <HomeVue/>      
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeVue from './Home.vue'
export default {
    components: {
        HomeVue
    },
    methods: {
        ...mapActions(['onChangeStatePage'])
    },
    created () {
        this.onChangeStatePage(true)
    },
}
</script>

<style>

</style>