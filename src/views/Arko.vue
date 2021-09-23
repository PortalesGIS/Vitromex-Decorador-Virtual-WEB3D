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
        ...mapActions(['onChangeStatePage','entryWebAnalytics'])
    },
    created () {
    document.title = "Mi proyecto Arko"
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/faviconark.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
        this.onChangeStatePage(true)
        this.entryWebAnalytics()
    },
}
</script>

<style>

</style>