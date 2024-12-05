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
        Lace:'#F8F2ED'
      },
      backgroundImage:{
        'homepageImg': "url('/public/joshua-tsu-7feYPJMf_Ss-unsplash.jpg')",
        'hardware':"url('/public/avi-werde-MBPcedDvYzU-unsplash.jpg')",
        'tools':"url('/public/julie-molliver-Z3vFp7szCAY-unsplash.jpg')",
        'screws':"url('/public/swers.jpg')",
        'toolWall':"url('/public/toolsWall.jpg')"
      },
      boxShadow:{
        '4xl': '-2px 2px #22c55e, -4px 4px #4ade80, -6px 6px #86efac',
        'org': '-2px 2px #f97316, -4px 4px #fb923c, -6px 6px #fdba74',
        '5xl': '-2px 2px #6366f1, -4px 4px #38bdf8',
        'opt': '2px 2px #6366f1, 4px 4px #38bdf8',
        '6xl': '-2px 2px #d1d5db',
        '7xl': '-2px 2px #22c55e, -4px 4px #4ade80',
        'glow': '0px 8px 6px -4px #22c55e, 0px 10px 5px -9px #22c55e',
        'red_sh': '2px 2px #dc2626, 4px 4px #ef4444, 6px 6px #f87171'
      }
    },
  },
  plugins: [],
}

