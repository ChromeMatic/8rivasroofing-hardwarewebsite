<script setup lang="ts">
  let animation = page_animation
  definePageMeta({ layout: 'default'})
</script>

<template>
  <section
      v-motion="animation"
      class="w-full flex flex-grow rounded-md justify-center items-center font-GeistMono overflow-hidden "
      :class="useTheme() ? 'bg-Dark':'bg-white'"
  >
    <h2 class="font-[400] text-4xl">
      Products Page
    </h2>
  </section>
</template>