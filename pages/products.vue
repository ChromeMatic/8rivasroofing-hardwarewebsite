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
    { img:'/roof-14.jpeg' },
    { img:'/roof-15.jpeg' },
    { img:'/roof-16.jpeg' },
    { img:'/roof-17.jpeg' },
    { img:'/roof-18.jpeg' },
    { img:'/roof-19.jpeg' },
    { img:'/roof-19.jpeg' },
    { img:'/roof-20.jpeg' },
    { img:'/roof-21.jpeg' },
    { img:'/roof-22.jpeg' },
    { img:'/roof-23.jpeg' },
  ]
</script>

<template>
  <section
      v-motion="animation"
      class="w-full min-h-full flex flex-grow rounded-md justify-center  font-GeistMono"
      :class="useTheme() ? 'bg-Dark':'bg-white'"
  >
   <section
       class="lg:px-4 px-2 lg:py-8 py-4 flex flex-col items-center space-y-4 w-full min-h-full"
       :class="useTheme() ? '':''"
   >

          <div
              v-motion="stagger_effect(875,-150,0)"
              class="w-full p-0.5 flex justify-center items-center"
          >
            <div
              v-motion="movement"
              class="w-full flex flex-col justify-center items-center space-y-4 lg:py-8 lg:px-6 px-2 py-6 rounded-lg border-2"
              :class="useTheme() ? 'bg-innerDark border-dashed border-teal-900'
              :'bg-yellow-50 shadow-lg border-yellow-50'"
            >
              <h1
                  class="text-3xl leading-tight"
              >
                Our Products
              </h1>
              <p class="text-center">
                Hello there, in this section we will take a look at our different roofing materials.
              </p>
            </div>
          </div>


          <div
              class="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2"
              :class="useTheme() ? 'bg-Dark' : 'bg-white'"
          >
                <div
                 v-motion="stagger_effect(890,25,0)"
                 class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-2 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[22].img"
                      :alt="roofImgs[22].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(685,-25,0)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[21].img"
                      :alt="roofImgs[21].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(775,0,-25)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-1 col-span-2"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[20].img"
                      :alt="roofImgs[20].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(850,25,0)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-3 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[19].img"
                      :alt="roofImgs[19].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(885,-25,0)"
                    class="rounded-md shadow-md h-72 cursor-pointer col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[18].img"
                      :alt="roofImgs[18].img"
                  >
                </div>

                <div
                v-motion="stagger_effect(925,0,-25)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-3 col-span-2"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[17].img"
                      :alt="roofImgs[17].img"
                  >
                </div>

                <div
                  v-motion="stagger_effect(950,-25,0)"
                  class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-1 col-span-1"
              >
                <img
                    class="rounded-md object-cover w-full overflow-hidden h-full"
                    :src="roofImgs[16].img"
                    :alt="roofImgs[16].img"
                >
              </div>

                <div
                v-motion="stagger_effect(975,-25,0)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-1 md:col-span-1 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[15].img"
                      :alt="roofImgs[15].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(1025,0,25)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-1 col-span-2"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[14].img"
                      :alt="roofImgs[14].img"
                  >
                </div>

                <div
                v-motion="stagger_effect(1050,-25,0)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-1 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[13].img"
                      :alt="roofImgs[13].img"
                  >
                </div>

                <div
                 v-motion="stagger_effect(1050,25,0)"
                 class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-1 md:col-span-2 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[12].img"
                      :alt="roofImgs[12].img"
                  >
                </div>

                <div
                v-motion="stagger_effect(1075,25,0)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-1 col-span-2"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[11].img"
                      :alt="roofImgs[11].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(1115,0,-25)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[10].img"
                      :alt="roofImgs[10].img"
                  >
                </div>

                <div
                    v-motion="stagger_effect(1125,25,0)"
                    class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-3 col-span-1"
                >
                  <img
                      class="rounded-md object-cover w-full overflow-hidden h-full"
                      :src="roofImgs[9].img"
                      :alt="roofImgs[9].img"
                  >
                </div>


            <div
                v-motion="stagger_effect(1125,25,0)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-3 col-span-1"
            >
              <img
                  class="rounded-md object-cover w-full overflow-hidden h-full"
                  :src="roofImgs[8].img"
                  :alt="roofImgs[8].img"
              >
            </div>


            <div
                v-motion="stagger_effect(1125,25,0)"
                class="rounded-md shadow-md h-72 cursor-pointer lg:col-span-2 md:col-span-3 col-span-1"
            >
              <img
                  class="rounded-md object-cover w-full overflow-hidden h-full"
                  :src="roofImgs[7].img"
                  :alt="roofImgs[7].img"
              >
            </div>

          </div>

   </section>
  </section>
</template>