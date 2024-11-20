<script lang="ts" setup>
  let animation = navigation_animation

  type Link = { route:string, route_name:string }
  let options:Link[] = [
    {
      route:'/',
      route_name:'Home'
    }
  ]
</script>

<template>
  <div
    v-motion="animation"
    class="w-full flex py-1 px-12 justify-between items-center space-x-6 rounded-md bg-teal-100"
  >
      <img
          src="/logo.jpeg"
          class="hidden lg:flex h-[3rem] rounded-tl-2xl rounded-br-2xl transition-all ease-in-out
          duration-700 border border-gray-200 cursor-pointer
          hover:scale-105"
          alt="logo"
      >

      <div class="hidden lg:flex space-x-12 transition-all ease-in-out duration-700">

      </div>
  </div>
</template>