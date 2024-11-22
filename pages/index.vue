<script lang="ts" setup>
import {image_movement, image_movement2, image_movement3, movement} from "~/utils/animations";

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
      v-motion="page_animation"
      class="w-full flex flex-col space-y-2 rounded-md font-GeistMono overflow-hidden"
      :class="useTheme() ? '':''"
  >
    <section
        class="w-full flex flex-grow"
    >
      <div class="w-full min-h-[50vh] bg-homepageImg bg-cover bg-center rounded-md flex justify-center items-center">
        <div
            class="w-full h-full text-white  flex justify-center items-center rounded-md px-2 lg:px-4"
            :class="useTheme() ? 'bg-innerDark/75'
            :'lg:bg-yellow-950/60 bg-yellow-950/70'"
        >
          <h2 class="lg:text-6xl text-3xl text-center">
            Welcome to 8 Rivas Roofing & Hardware
          </h2>
        </div>
      </div>
    </section>

    <div
        class="w-full  flex lg:flex-row flex-col justify-center items-center  py-2 px-8 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0"
        :class="useTheme() ? '':'bg-Daisy'"
    >
        <div class="w-full flex">
          <div
              v-motion="image_movement"
              class="bg-tools  bg-cover h-96 w-80 border-2 rounded-md z-10 shadow-md "
              :class="useTheme() ? 'border-teal-900' : 'bg-Daisy'"
          ></div>
          <div
              v-motion="image_movement2"
              class="bg-screws bg-cover h-72 w-72 rounded-md mt-12 -ml-16 z-20 shadow-lg"
          ></div>
          <div
              v-motion="image_movement3"
              class="bg-toolWall bg-cover h-96 w-96 rounded-md mt-4 -ml-4 z-10 shadow-lg"
          ></div>
        </div>

        <div
            v-motion="movement"
            class="w-full border-none h-full flex flex-col justify-center space-y-8 items-start bg-Lace p-4 rounded-md "
            :class="useTheme() ? 'bg-Dark' : 'bg-white shadow-lg'"
        >
          <h1 class="text-3xl"> About Us</h1>

          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis dolorem ducimus eaque eius esse fuga
            in iste itaque nostrum, officia optio quas, quo reiciendis saepe similique sit vero voluptatem? Excepturi
            facere illum labore magnam, nobis pariatur quae recusandae tenetur unde voluptas. Odio, quisquam!
          </p>
        </div>

    </div>


  </section>
</template>