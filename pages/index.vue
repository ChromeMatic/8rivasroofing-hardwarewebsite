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
    class="w-full flex flex-grow rounded-md font-GeistMono overflow-hidden "
    :class="useTheme() ? '':'bg-white'"
  >
     <div class="w-full min-h-96 bg-homepageImg bg-cover bg-center rounded-md flex justify-center items-center lg:p-1">
        <div
            class="w-full h-full text-white  flex justify-center items-center rounded-md"
            :class="useTheme() ? 'bg-innerDark/75'
            :'lg:bg-yellow-950/60 bg-yellow-950/70'"
        >
              <h2 class="lg:text-6xl text-3xl text-center">
                Welcome to 8 Rivas Roofing & Hardware
              </h2>
        </div>
     </div>

  </section>
</template>