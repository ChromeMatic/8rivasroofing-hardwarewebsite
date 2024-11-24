<script lang="ts" setup>
import {image_movement, image_movement2, image_movement3, movement, stagger_effect} from "~/utils/animations";

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
            class="w-full h-full text-white  flex flex-col space-y-6 justify-center items-center rounded-md px-2 lg:px-4"
            :class="useTheme() ? 'bg-innerDark/75'
            :'lg:bg-yellow-950/60 bg-yellow-950/70'"
        >

          <img
              v-motion="stagger_effect(575,-75,0)"
              class="lg:h-[12rem] h-[8rem] lg:w-[18rem] w-[9rem] rounded-xl border-2"
              src="/logo.jpeg"
              alt="logo"
          >
          
          <h2
              v-motion="stagger_effect(600,75,0)"
              class="lg:text-6xl text-3xl text-center font-[500]"
          >
            Welcome to 8 Rivas Roofing & Hardware
          </h2>

          <p
              v-motion="stagger_effect(625,75,0)"
              class="font-[600] text-center"
          >
            Your one stop store for your hardware and roofing needs
          </p>
          
        </div>
      </div>
    </section>

    <div
        class="w-full  flex lg:flex-row flex-col justify-center items-center  py-2 px-8 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0"
        :class="useTheme() ? '':'bg-Daisy'"
    >
        <div
            v-motion="stagger_effect(650,0,-75)"
            class="w-full flex"
        >
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
            class="w-full"
            v-motion="stagger_effect(700,0,75)"
        >
          <div
              v-motion="movement"
              class="w-full border min-h-full flex flex-col justify-center space-y-8 items-start p-4 rounded-2xl"
              :class="useTheme() ? 'border-2 bg-Dark border-teal-950' : 'bg-Lace shadow-lg'"
          >
            <h1 class="text-3xl"> About Us</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis dolorem ducimus eaque eius esse fuga
              in iste itaque nostrum, officia optio quas, quo reiciendis saepe similique sit vero voluptatem? Excepturi
              facere illum labore magnam, nobis pariatur quae recusandae tenetur unde voluptas. Odio, quisquam!
            </p>

            <NuxtLink
                to="/aboutUs"
                class="flex items-center justify-center w-full border-2 p-2 text-lg rounded-md
              transition-all ease-in-out duration-700 rounded-tl-3xl rounded-br-3xl hover:-translate-y-2 hover:scale-105"
                :class="useTheme() ? 'bg-innerDark border-Dark text-teal-500 hover:text-indigo-500 hover:border-indigo-500 hover:shadow-5xl'
              :'bg-gray-100 hover:border-green-400 hover:bg-green-50 hover:text-green-500 border-white hover:shadow-4xl'"
            >
              Read More
            </NuxtLink>
          </div>
        </div>



    </div>

    <section
        class="w-full flex lg:flex-row flex-col justify-center items-center py-3 px-8 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0"
        :class="useTheme() ? '':'bg-white'"
    >
        <div
            class="w-full rounded-md p-2 border shadow-md lg:h-full"
            :class="useTheme() ? 'bg-Dark border-teal-950':'bg-white'"
        >

        </div>

        <div
            class="w-full rounded-md p-2 border shadow-md lg:h-full"
            :class="useTheme() ? 'bg-Dark border-teal-950':'bg-white'"
        >

        </div>
    </section>


  </section>
</template>