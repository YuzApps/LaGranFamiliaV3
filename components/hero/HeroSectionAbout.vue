<script setup lang="ts">
  const primaryFeatures = [
    {
      name: 'Nuevo Servicio de Ginecología',
      description:
        'Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.',
      icon: 'IconGynecology',
    },
    {
      name: 'Atendemos Todo Tipo de Enfermedad',
      description:
        'Contamos con un laboratorio de análisis clínicos para la detección de enfermedades.',
      icon: 'IconHeartPlus',
    },
  ];

  const urlPlayer = ref(
    'https://player.cloudinary.com/embed/?public_id=LaGranFamilia%2Fvideos%2Fvideo_source_11&cloud_name=assetss&player[posterOptions][transformation][startOffset]=14'
  );
</script>
<template>
  <div class="mt-1.5 bg-transparent">
    <div class="grid grid-cols-2">
      <div>
        <span class="font-maven uppercase text-[#099541]/45">Sobre Nosotros</span>
        <h2 class="text-tropaz-blue font-maven py-2 text-3xl font-medium leading-7 tracking-wide">
          De Qué se Encarga Nuestra Clínica?
        </h2>
      </div>
      <div>
        <p class="font-montserrat text-stratos-blue text-[16px] font-normal leading-7">
          Nos dedicamos a proporcionar atención médica de calidad y compasiva a nuestros pacientes.
          Con un equipo multidisciplinario de profesionales altamente capacitados y tecnología de
          vanguardia, estamos comprometidos a brindarle la mejor atención posible para mejorar su
          bienestar y calidad de vida.
        </p>
      </div>
    </div>
    <div
      class="relative mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-4 lg:py-20"
    >
      <div class="px-6 shadow-md lg:px-0 lg:pt-0">
        <iframe
          :src="urlPlayer"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          class="aspect-video w-full rounded-sm"
        ></iframe>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16"
        >
          <div v-for="feature in primaryFeatures" :key="feature.icon" class="relative pl-16">
            <dt class="text-tropaz-blue font-maven text-[20px] font-semibold leading-7">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
              >
                <IconFeature size="xl">
                  <template v-slot:icon>
                    <NuxtImg
                      :src="
                        feature.icon === 'IconGynecology'
                          ? '/assets/img/uterus.png'
                          : '/assets/img/health-care.png'
                      "
                      class="h-5 w-5"
                    />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="font-montserrat text-stratos-blue mt-2 text-base font-normal leading-7 tracking-wide"
            >
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="absolute inset-y-0 -z-10">
        <NuxtImg src="/assets/img/Blob.png" alt="Hero Quote" class="h-full w-full" />
      </div>
    </div>
  </div>
</template>
