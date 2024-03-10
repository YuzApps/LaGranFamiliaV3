<script setup lang="ts">
const primaryFeatures = [
  {
    name: "Nuevo Servicio de Ginecología",
    description: "Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.",
    icon: "IconGynecology",
  },
  {
    name: "Atendemos Todo Tipo de Enfermedad",
    description: "Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.",
    icon: "IconHeartPlus",
  },
];

const urlPlayer = ref(
  "https://player.cloudinary.com/embed/?public_id=LaGranFamilia%2Fvideos%2Fvideo_source_11&cloud_name=assetss&player[posterOptions][transformation][startOffset]=14",
);
</script>
<template>
  <div class="bg-transparent mt-1.5">
    <div class="grid grid-cols-2">
      <div>
        <span class="text-[#099541]/45 font-maven uppercase">Sobre Nosotros</span>
        <h2 class="text-tropaz-blue py-2 tracking-wide font-maven text-3xl font-medium leading-7">
          De Qué se Encarga Nuestra Clínica?
        </h2>
      </div>
      <div>
        <p class="font-montserrat text-stratos-blue leading-7 font-normal text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
    <div class="relative mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-4 lg:py-20">
      <div class="px-6 lg:px-0 lg:pt-0 shadow-md">
        <iframe
          :src="urlPlayer"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          class="w-full aspect-video rounded-sm"
        ></iframe>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
          <div v-for="feature in primaryFeatures" :key="feature.icon" class="relative pl-16">
            <dt class="text-[20px] font-semibold leading-7 text-tropaz-blue font-maven">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                <IconFeature size="xl">
                  <template v-slot:icon>
                    <NuxtImg
                      :src="
                        feature.icon === 'IconGynecology' ? '/assets/img/uterus.png' : '/assets/img/health-care.png'
                      "
                      class="w-5 h-5"
                    />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base font-normal font-montserrat leading-7 tracking-wide text-stratos-blue">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="absolute inset-y-0 -z-10">
        <NuxtImg src="/assets/img/Blob.png" alt="Hero Quote" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>
