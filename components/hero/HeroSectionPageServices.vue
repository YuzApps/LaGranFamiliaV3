<script setup lang="ts">
import { serviceCollection } from "~/data/dataSeeder";
</script>
<template>
  <div>
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <NuxtImg
        src="/assets/banner/hero-services.png"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-4xl text-center">
        <span class="uppercase text-[16px] font-maven text-gray-600">Servicios</span>
        <h2 class="text-[47px] font-maven font-semibold tracking-tight text-white sm:text-6xl">¿Qué Ofrecemos?</h2>
        <p class="mt-6 text-[18px] leading-8 text-gray-300 font-montserrat">
          Brindamos consultas médicas, exámenes, evaluaciones y tratamientos. Siempre estamos listos para satisfacer sus
          necesidades y mejorar su salud. Si busca soluciones para sus inquietudes médicas, contáctenos hoy para
          programar una cita. Estamos abiertos los 7 días de la semana.
        </p>
      </div>
    </div>

    <!-- Pricing section -->
    <div class="mx-auto mt-8 max-w-7xl px-6 sm:mt-10 lg:px-8 pt-10 pb-5">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-base font-semibold leading-7 text-[#099541]/45">SERVICIOS</h1>
        <p class="mt-2 text-4xl font-medium font-maven text-tropaz-blue tracking-tight sm:text-5xl">
          Nuestros Servicios
        </p>
      </div>
      <p class="mx-auto mt-6 max-w-5xl text-center font-montserrat text-lg leading-8 text-stratos-blue">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>

      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-10 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3"
      >
        <div
          v-for="service in serviceCollection"
          :key="service.id"
          class="drop-shadow-[0_10px_10px_rgba(71,84,170,0.25)] bg-white rounded-3xl p-8"
          :class="['ring-1 ring-gray-200', 'rounded-3xl p-8']"
        >
          <div class="text-center -mt-1.5 mb-5">
            <IconFeature size="2xl" container-class="size-10">
              <template v-slot:icon>
                <NuxtImg :src="service.icon" class="size-8" />
              </template>
            </IconFeature>
          </div>
          <h2 :id="useId" class="font-maven text-tropaz-blue font-semibold text-center capitalize">
            {{ service.name }}
          </h2>

          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
            <li v-for="feature in service.items" :key="feature" class="flex gap-x-3 font-montserrat text-sm">
              <div class="rounded-full bg-[#D8DFF3] size-7 flex flex-shrink-0 items-center justify-center">
                <UIcon name="i-heroicons-check" class="h-5 w-5 flex-none text-[#4754AA]" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
