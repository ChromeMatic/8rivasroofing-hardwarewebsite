// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt'
  ],

  imports:{
    dirs:["./stores"]
  },

  googleFonts:{
    families:{
      'Geist Mono': [100,200,300,400,500,600,700,800,900]
    }
  }
})