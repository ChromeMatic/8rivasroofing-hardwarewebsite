<script lang="ts" setup>

  const animation = navigation_animation
  const theme = useThemeStore()
  const motions = useMotions()

  let show = ref<boolean>(false)

  let options = [
    {
      route:'/',
      route_name:'Home'
    },
    {
      route:'/products',
      route_name:'Products'
    },
    {
      route:'/aboutUs',
      route_name:'About Us'
    }
  ]

  function change_theme(){ theme.changeTheme(); }
</script>

<template>
  <section
    v-motion="animation"
    class="w-full flex flex-col space-y-1 p-1 rounded-md"
    :class="useTheme() ? 'bg-Dark'
    :'bg-white text-teal-800'"
  >

     <div
         class="flex w-full justify-between items-center space-x-6 py-2 lg:px-16 px-4 rounded-md"
         :class="useTheme() ? 'bg-innerDark':''"
     >
       <button
           @click="show = !show"
           class="flex lg:hidden border-2 p-1.5 rounded-md"
           :class="useTheme() ? 'bg-innerDark border-teal-950':''"
       >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
       </button>

       <h2 class="flex lg:hidden text-center font-[700] text-sm">
         8 Rivas Roofing & Hardware
       </h2>

       <div class="hidden lg:flex justify-center items-center space-x-2 font-[400]">
         <img
             src="/logo.jpeg"
             class="h-[3rem] rounded-tl-2xl rounded-br-2xl transition-all ease-in-out
          duration-700 border border-gray-200 cursor-pointer
          hover:scale-105"
             alt="logo"
         >
         <h2>
           8 Rivas Roofing & Hardware
         </h2>
       </div>

       <div class="hidden lg:flex space-x-4 transition-all ease-in-out duration-700">

         <NuxtLink
             v-for="option in options"
             :key="option.route_name"
             :to="option.route"
             class="flex items-center justify-center space-x-1 border-2 rounded-tl-2xl rounded-br-2xl rounded-sm px-4 py-1.5
              transition-all ease-in-out duration-500 hover:scale-110"
             :class="useTheme() ? 'bg-innerDark border-teal-950 hover:border-indigo-500 hover:text-indigo-500'
              :'bg-gray-100 hover:border-green-400 hover:bg-green-50 hover:text-green-500 border-white'"
         >
           <svg
               v-if="option.route_name === 'Home'"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               class="size-5"
           >
             <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
           </svg>

           <svg
               v-if="option.route_name === 'About Us'"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               class="size-5"
           >
             <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
           </svg>

           <svg
               v-if="option.route_name ==='Products'"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               class="size-5"
           >
             <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
           </svg>


           <h2>{{ option.route_name }}</h2>

         </NuxtLink>

       </div>

       <button
           @click="change_theme()"
           class="flex justify-center items-center border-2 rounded-md p-2.5 transition-all ease-in-out duration-700"
           :class="useTheme() ? 'text-teal-800 border-teal-950 bg-innerDark hover:bg-yellow-500/30 hover:border-yellow-500 hover:text-yellow-500':''"
       >
         <svg
             v-if="useTheme() === true"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
             class="size-5"
         >
           <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
         </svg>

         <svg
             v-if="useTheme() === false"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
             class="size-5"
         >
           <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
         </svg>

       </button>
     </div>

    <Transition
        :css="false"
        @leave="(_: any,done: any) => motions.div.leave(done)"
    >
      <div
          v-if="show === true"
          v-motion="'div'"
          :initial="leave_animation.initial"
          :enter="leave_animation.enter"
          :leave="leave_animation.leave"
          class="w-full flex flex-col space-y-2.5 p-2 shadow-md rounded-md"
          :class="useTheme() ? 'bg-innerDark'
          :'bg-Daisy'"
      >
        <NuxtLink
            v-for="item in options"
            :key="item.route_name"
            :to="item.route"
            class="w-full flex justify-center items-center border-2 rounded-md p-2"
            :class="useTheme() ? 'bg-Dark border-teal-950':''"
        >
              <h2>{{ item.route_name }}</h2>
        </NuxtLink>
      </div>
    </Transition>

  </section>
</template>