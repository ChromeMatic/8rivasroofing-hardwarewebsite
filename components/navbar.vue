<script lang="ts" setup>
  let animation = navigation_animation
</script>

<template>
  <div
    v-motion="animation"
    class="w-full flex py-1 px-12 justify-between items-center space-x-6 rounded-md bg-teal-100"
  >
      <img
          src="/logo.jpeg"
          class="h-[3rem] rounded-tl-2xl rounded-br-2xl transition-all ease-in-out duration-700 border border-gray-200
          hover:scale-105"
          alt="logo"
      >

      <div class="flex space-x-12">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Project</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </div>
  </div>
</template>