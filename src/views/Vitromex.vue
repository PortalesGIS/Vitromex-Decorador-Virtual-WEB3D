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
        ...mapActions(['onChangeStatePage','entryWebAnalytics'])
    },
    created () {
        this.onChangeStatePage(false)
         this.entryWebAnalytics()
    },
}
</script>

<style>

</style>