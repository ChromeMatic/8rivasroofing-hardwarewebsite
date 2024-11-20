<script lang="ts" setup>
  let animation = page_animation

  definePageMeta({ layout: 'default'})

  useHead({
    title:'8 Rivas Roofing & Hardware',
    meta:[
      {
        name:'description',
        content:'"Welcome to 8 Rivas Roofing & Hardware, your trusted partner for high-quality roofing materials and hardware supplies. Whether you\'re building from the ground up or tackling a renovation, we provide durable products to meet all your construction and repair needs. At 8 Rivas, we combine quality, reliability, and exceptional customer service to ensure your projects are built to last.'
      }
    ]
  })
</script>

<template>
  <section
    v-motion="animation"
    class="w-full flex flex-grow rounded-md justify-center items-center font-GeistMono overflow-hidden "
    :class="useTheme() ? ''
    :'bg-teal-100'"
  >
      <h2 class="font-[400] text-4xl">
        Website
      </h2>
  </section>
</template>