<script lang="ts" setup>
  let animation = page_animation

  definePageMeta({
    layout: 'default'
  })
</script>

<template>
  <section
    v-motion="animation"
    class="w-full flex justify-center items-center font-GeistMono overflow-hidden"
    :class="useTheme() ? ''
    :''"
  >
      <h2 class="font-[400] text-4xl">
        Website
      </h2>
  </section>
</template>