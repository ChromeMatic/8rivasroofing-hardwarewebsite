<script setup lang="ts">
    let links = [
      {
        name:"facebook",
        link:"https://www.facebook.com/people/Ermine-Bryan/pfbid02QMZQ1YBa1MjAy6uadezhfponsqer8EdFqnNzPTfbKTzBJeymYDvqAgnLeXv43wE5l/?mibextid=LQQJ4d&rdid=MMSpVd9pe1tnW6hi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15a35BK6No%2F%3Fmibextid%3DLQQJ4d"
      },
      {
        name:"TikTok",
        link:"https://www.tiktok.com/@8rivasroofing?_t=8rJLkYBcO2S&_r=1"
      },
      {
        name:"Instagram",
        link:"https://www.instagram.com/8rivasroof/profilecard/"
      },
      {
        name:"Email",
        link:"mailto:8riverwholesale@gmail.com"
      }
    ]
</script>

<template>
  <section
      v-motion="stagger_effect(175,5,0)"
    class="w-full px-4 py-1.5 flex lg:flex-row md:flex-row sm:flex-row flex-col lg:space-x-4 space-x-0 space-y-2 lg:space-y-0 justify-center items-center"
    :class="useTheme() ? 'bg-Dark':'bg-white text-teal-700'"
  >
    <a
        v-for="(link,index) in links"
        v-motion="stagger_effect(10*2^index*75,-5,0)"
        :href="link.link"
        class="flex justify-center space-x-1 border-2 items-center rounded-md px-2 border-none lg:w-[8rem] transition-all ease-in-out duration-700 hover:scale-110"
        :class="useTheme() ? '':' hover:bg-yellow-50 hover:text-teal-700 hover:border-teal-50'"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img class="lg:size-12 size-6" v-if="link.name === 'Email'" src="/icons8-email-100.png" alt="Email Address" />
        <img class="lg:size-12 size-6" v-if="link.name === 'facebook'" src="/icons8-facebook.svg" alt="Facebook">
        <img class="lg:size-12 size-6" v-if="link.name === 'TikTok'" src="/icons8-tiktok.svg" alt="TikTok">
        <img class="lg:size-12 size-6" v-if="link.name === 'Instagram'" src="/icons8-instagram.svg" alt="Facebook">

        <h2 class="capitalize font-[600] text-center">{{ link.name }}</h2>
    </a>
  </section>
</template>
