<script lang="ts" setup>
const primaryFeatures = [
  {
    name: "Por Qué Nosotros?",
    description:
      "Ofrecemos servicios médicos de alta calidad mediante tecnología avanzada, enfocados en la salud y bienestar de tu familia.",
    href: "#",
    icon: resolveComponent("IconLightbulbQuestion"),
  },
  {
    name: "Cómo Empezamos",
    description:
      "Nuestra compañía médica nació con el compromiso de calidad y atención a las necesidades de los pacientes.",
    icon: resolveComponent("IconDiamond"),
  },
  {
    name: "Nuestra Misión",
    description:
      "Promover y mejorar la salud con prevención y tratamiento de enfermedades, enfocándonos en el cuidado humano y personalizado.",
    icon: resolveComponent("IconFlag"),
  },
  {
    name: "Biografía",
    description:
      'La Clínica General "La Gran Familia" ofrece servicios de salud respetuosos y cercanos, asegurando inclusión y consejos para una vida saludable.',
    icon: resolveComponent("IconBookAlt"),
  },
];
</script>

<template>
  <!-- Feature section -->
  <div class="mx-auto mt-10 max-w-7xl px-6 sm:mt-4 lg:px-8 mb-10 sm:mb-12">
    <div class="flex items-center justify-center text-center">
      <div class="leading-7">
        <span class="text-[#099541]/45 font-maven uppercase">Sobre Nosotros</span>
        <h2 class="text-tropaz-blue py-3 tracking-wide font-maven text-3xl font-medium leading-7">
          Descubre Nuestros Valores y Compromiso con tu Salud
        </h2>
        <p class="font-montserrat text-stratos-blue mt-2 text-[18px]">
          Explora lo esencial de nuestra atención médica personalizada y nuestro dedicado servicio a la comunidad.
        </p>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-16 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3">
        <div class="col-span-1 flex flex-col space-y-10">
          <div v-for="feature in primaryFeatures.slice(0, 2)" :key="feature.name" class="flex flex-col text-center">
            <dt class="text-base font-semibold leading-7 text-bahama-blue">
              <div class="mb-6 w-full flex h-10 items-center justify-center rounded-lg">
                <IconFeature size="xl">
                  <template v-slot:icon>
                    <Component :is="feature.icon" class="w-5 h-5 text-bahama-blue" />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col font-montserrat font-normal text-base leading-7 text-[#475467]">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </div>
        <div>
          <NuxtImg src="/svg/TV_M213_04_1.svg" alt="TV" class="mx-auto h-full w-auto" />
        </div>
        <div class="col-span-1 flex flex-col space-y-10">
          <div v-for="feature in primaryFeatures.slice(2, 4)" :key="feature.name" class="flex flex-col text-center">
            <dt class="text-base font-semibold leading-7 text-bahama-blue">
              <div class="mb-6 w-full flex h-10 items-center justify-center rounded-lg">
                <IconFeature size="xl">
                  <template v-slot:icon>
                    <Component :is="feature.icon" class="w-5 h-5 text-bahama-blue" />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col font-montserrat font-normal text-base leading-7 text-[#475467]">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped></style>
