<script setup lang="ts">
let animation = page_animation
definePageMeta({ layout: 'default'})
</script>

<template>
  <section
      v-motion="animation"
      class="w-full flex flex-col  space-y-8 flex-grow rounded-md items-center font-GeistMono overflow-hidden lg:p-4 p-1"
      :class="useTheme() ? 'bg-Dark':'bg-white text-teal-700'"
  >
          <h1
              v-motion="stagger_effect(675,-15,0)"
              class="text-5xl"
          >
            About Us
          </h1>

        <div
            class="flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-1 space-x-0 w-full border-2 h-full p-1 rounded-lg flex-grow overflow-hidden"
            :class="useTheme() ? 'bg-innerDark border-dashed border-teal-900'
            : 'bg-yellow-200 border-yellow-200 border-dashed'"
        >

          <div
              v-motion="stagger_effect(875,25,50)"
              class="lg:w-1/2 w-full lg:h-auto h-[24rem] lg:p-4 p-2 rounded-lg flex flex-col  justify-between lg:items-start items-center"
              :class="useTheme() ? 'bg-Dark':'bg-white'"
          >


            <div class="w-ful flex lg:justify-start justify-center space-x-1 items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-12 transition-all ease-in-out duration-700 animate-pulse"
              >
                <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
              </svg>

              <h2 class="text-3xl font-medium">
                Our Location
              </h2>
            </div>

            <div class="w-ful flex lg:justify-start justify-center space-x-1 items-center">

              <p class="leading-loose">
                At 8 Rivas Roofing & Hardware, located at 3 Milford Rd, Ocho Rios, St. Ann, Jamaica, our goal is to be the leading provider of roofing solutions.
                We are dedicated to meeting all your roofing needs with exceptional service, quality products, and competitive pricing. Our tailored solutions
                and commitment to outstanding value ensure your trust as your roofing partner. We are open Monday to Friday, 9:00 AM to 6:00 PM,
                ready to serve you with excellence.
              </p>

            </div>

            <div></div>
          </div>

          <iframe
              v-motion="stagger_effect(825,-25,-50)"
              class="lg:w-1/2 w-full lg:h-auto h-[24rem] overflow-hidden rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4520.20969625585!2d-77.1036754!3d18.4048063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edafe78be40f261%3A0x455a8a3bbaeb98f3!2s3%20Milford%20Rd%2C%20Ocho%20Rios!5e1!3m2!1sen!2sjm!4v1734054562521!5m2!1sen!2sjm"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
  </section>
</template>