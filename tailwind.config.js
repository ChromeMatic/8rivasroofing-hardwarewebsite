/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        GeistMono:'"Geist Mono", serif'
      },
      colors:{
        Dark: '#202124',
        innerDark: '#191919',
        Snow:'#F5FEFD',
        Daisy:'#FAFAFA',
        Lace:'F8F2ED'
      },
      backgroundImage:{
        'homepageImg': "url('/public/joshua-tsu-7feYPJMf_Ss-unsplash.jpg')",
        'tools':"url('/public/julie-molliver-Z3vFp7szCAY-unsplash.jpg')",
        'screws':"url('/public/swers.jpg')",
        'toolWall':"url('/public/toolsWall.jpg')"
      }
    },
  },
  plugins: [],
}

