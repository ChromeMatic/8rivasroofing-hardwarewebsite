<script setup lang="ts">
  let animation = page_animation
  definePageMeta({ layout: 'default'})

  let roofImgs = [
    { img:'/roof-1.jpeg' },
    { img:'/roof-2.jpeg' },
    { img:'/roof-3.jpeg' },
    { img:'/roof-4.jpeg' },
    { img:'/roof-5.jpeg' },
    { img:'/roof-6.jpeg' },
    { img:'/roof-7.jpeg' },
    { img:'/roof-8.jpeg' },
    { img:'/roof-9.jpeg' },
    { img:'/roof-10.jpeg' },
    { img:'/roof-11.jpeg' },
    { img:'/roof-12.jpeg' },
    { img:'/roof-13.jpeg' },
  ]
</script>

<template>
  <section
      v-motion="animation"
      class="w-full min-h-full flex flex-grow rounded-md justify-center  font-GeistMono"
      :class="useTheme() ? 'bg-Dark':'bg-white'"
  >
   <section
       class="px-4 py-8 flex flex-col items-center space-y-4 w-full min-h-full"
       :class="useTheme() ? '':''"
   >
          <h1
              v-motion="stagger_effect(775,75,0)"
              class="text-4xl leading-tight overline p-4 rounded-md"
              :class="useTheme() ? 'bg-innerDark'
              :'bg-yellow-50 shadow-lg'"
          >
            Our Products
          </h1>

          <div
              v-motion="stagger_effect(875,0,75)"
              class="w-full flex flex-col justify-center items-center space-y-5 lg:py-8 py-6 rounded-lg border-2"
              :class="useTheme() ? 'bg-innerDark border-dashed border-teal-900'
              :'bg-yellow-50 shadow-lg border-yellow-50'"
          >
            <p class="text-center">
              Hello there, in this section we will look at the all our different roofing material
            </p>
          </div>

          <div
              class="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"
              :class="useTheme() ? 'bg-Dark' : 'bg-white'"
          >
                <div
                 v-for="(img,index) in roofImgs"
                 :key="img.img"
                 v-motion="stagger_effect(475*2^index*75,25,0)"
                 class="rounded-md shadow-md h-72 cursor-pointer hover:scale-125"
                 :class="index===roofImgs.length-1 ? 'lg:col-span-4' : ''"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="img.img"
                      :alt="img.img"
                  >
                </div>
          </div>
   </section>
  </section>
</template>