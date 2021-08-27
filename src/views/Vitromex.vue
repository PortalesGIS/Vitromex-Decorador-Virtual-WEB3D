<template>
  <div>        
    <HomeVue/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeVue from './Home.vue'
export default {
    components: {
        HomeVue,
    },
    methods: {
        ...mapActions(['onChangeStatePage'])
    },
    created () {
        this.onChangeStatePage(false)
    },
}
</script>

<style>

</style>