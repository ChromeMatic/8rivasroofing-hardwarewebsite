<script setup lang="ts"></script>

<template>
  <section
    v-motion="stagger_effect(875,-25,0)"
    class="flex items-center justify-center w-full p-2 font-medium text-sm"
    :class="useTheme() ? 'bg-innerDark':' bg-white'"
  >

      <div
          class="w-full p-1 flex justify-center items-center rounded-md"
          :class="useTheme() ? 'bg-Dark':'bg-yellow-50'"
      >
        <h2 class="text-center">
          © 2024 8 Rivas Roofing & Hardware. Built by
          <a
              class="transition-all ease-in-out duration-500 hover:text-indigo-500 underline"
              href="https://dev-main.tech/"
              target="_blank"
              rel="noopener noreferrer"
          >
            Armani Brown
          </a>
        </h2>
      </div>

  </section>
</template>
