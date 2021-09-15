<template>
<div class="fixed top-0 right-0" style="z-index:60">
   <!-- Active Breakpoint Indicator -->
<div class="fixed top-0 right-0  mt-5 mx-1 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-purple-500 lg:bg-green-500 xl:bg-blue-500">
  <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
  <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
  <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
  <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
  <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
</div>
<!-- /Active Breakpoint Indicator -->
  <p class="bg-red-400 text-sm">
    V 0.9.99
  </p>
  </div>
  <router-view/>
</template>

<style>
</style>
