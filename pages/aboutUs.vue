<script setup lang="ts">
let animation = page_animation
definePageMeta({ layout: 'default'})
</script>

<template>
  <section
      v-motion="animation"
      class="w-full flex flex-col space-y-4 flex-grow rounded-md items-center font-GeistMono overflow-hidden "
      :class="useTheme() ? 'bg-Dark':'bg-white'"
  >

  </section>
</template>