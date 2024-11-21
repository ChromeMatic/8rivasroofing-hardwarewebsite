<script setup lang="ts">

import {useTheme} from "~/composables/themeComposable";
</script>

<template>
  <section
    class="flex flex-col flex-grow w-full min-h-svh lg:overflow-hidden"
    :class="useTheme() ? ''
    :'bg-yellow-50'"
  >

   <section class="flex flex-grow flex-col w-full min-h-full space-y-1 p-1">
     <navbar/>

     <slot/>
   </section>

    <div class="space-y-2 hidden lg:flex ">
      <soialMedia/>
    </div>

  </section>
</template>