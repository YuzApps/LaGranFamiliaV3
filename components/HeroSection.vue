<script setup lang="ts">
//import { ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>
<template>
  <div class="bg-white mt-1.5">
    <div class="relative">
      <div
        class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-4 lg:py-20"
      >
        <div class="px-6 lg:px-0 lg:pt-4">
          <div class="mx-auto max-w-2xl">
            <div class="max-w-lg">
              <div class="mt-10 sm:mt-32 lg:mt-6">
                <a href="#" class="inline-flex space-x-6">
                  <span
                    class="inline-flex items-center uppercase space-x-2 text-sm font-medium leading-6 text-[#2B5895]/40"
                  >
                    <span>Clínica General La Gran Familia</span>
                    <UIcon name="i-heroicons-chevron-right" />
                  </span>
                </a>
              </div>
              <h1
                class="mt-4 text-lg font-semibold tracking-tight text-[#2B5895] sm:text-2xl"
              >
                Comprometidos con el
                <span class="text-salem-green capitalize">bienestar</span> de
                nuestros pacientes
              </h1>
              <p class="mt-6 text-lg leading-6 text-gray-600">
                Ya sea que busque consulta o evaluaciones, contamos con el
                equipo y los conocimientos necesarios para brindarle servicios
                de calidad.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  class="rounded-full bg-curious-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Llamanos</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
        >
          <img src="/hero.svg" alt="Hero" />
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
      />
    </div>
  </div>
</template>
