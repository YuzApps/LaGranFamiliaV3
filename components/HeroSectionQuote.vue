<script setup lang="ts">
import { IconGynecology, IconHeartPlus } from "#components";

const uiCard = {
  base: "text-stratos-blue",
  divider: "divide-y-0 divide-gray-50",
  ring: "ring-0",
};

const primaryFeatures = [
  {
    name: "Servicios de Laboratorio",
    description:
      "Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.",
    href: "/services",
    icon: "IconGynecology",
  },
  {
    name: "Servicios de Rayos X",
    description:
      "Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.",
    icon: "IconHeartPlus",
  },
];
</script>
<template>
  <div class="bg-white mt-1.5">
    <div class="relative">
      <div
        class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:px-4 lg:py-20"
      >
        <div class="px-6 lg:px-0 lg:pt-0">
          <iframe
            src="https://www.youtube.com/embed/rP0fZc_jwAE"
            class="w-full aspect-video rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16"
          >
            <div
              v-for="feature in primaryFeatures"
              :key="feature.name"
              class="relative pl-16"
            >
              <dt class="text-base font-semibold leading-7 text-stratos-blue">
                <div
                  class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
                >
                  <component :is="feature.icon" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
      />
    </div>
  </div>
</template>
