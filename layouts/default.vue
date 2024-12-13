<script setup lang="ts">

</script>

<template>
  <section
    class="flex flex-col flex-grow w-full min-h-svh  transition-all ease-in-out duration-700"
    :class="useTheme() ? 'bg-innerDark text-white dark'
    :'bg-yellow-200 light'"
  >

   <section class="flex flex-grow flex-col w-full min-h-full space-y-1 p-1">
     <div class="flex w-full sticky top-0 z-50 px-2 py-0.5">
       <navbar/>
     </div>

     <slot/>
   </section>

    <div class="space-y-2">
      <soialMedia/>
    </div>

    <footerComponent/>

  </section>
</template>