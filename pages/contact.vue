<script lang="ts" setup>
import { useGeolocation } from "~/composables/useGeolocation";
import type { Ref } from "vue";

const mapDiv: Ref<HTMLElement | null> = ref(null);

useSeoMeta({
  title: "Contacto",
  ogTitle: "Contacto",
  description:
    "Póngase en contacto con nosotros para obtener más información sobre nuestras consultas médicas, evaluaciones y más.",
  ogDescription:
    "Póngase en contacto con nosotros para obtener más información sobre nuestras consultas médicas, evaluaciones y más.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

useGeolocation(mapDiv);

const primaryFeatures = [
  {
    name: "Correo Electrónico",
    description: "Nuestro equipo está aquí para ayudaros.",
    icon: "sms.svg",
    data: [
      {
        type: "email",
        value: "clinicagenerallagranfamilia@gmail.com",
      },
    ],
  },
  {
    name: "Teléfono",
    description: "Lunes - Viernes de 8am a 5pm.",
    icon: "call-calling.svg",
    data: [
      {
        type: "phone",
        value: "Tel: (469) 786-0199",
      },
      {
        type: "fax",
        value: "Fax: (214) 440-2605",
      },
    ],
  },
  {
    name: "Dirección",
    description: "Vengan a visitarnos!",
    icon: "location.svg",
    data: [
      {
        type: "address",
        value: "Clínica General La Gran Familia\n" + "3035 S Shiloh Rd\n" + "Garland, Texas 75041",
      },
    ],
  },
];
</script>

<template>
  <div class="py-10">
    <CommonTitleHeader>
      <template #title>Contacto</template>
      <template #subtitle>Póngase en Contacto con Nosotros</template>
      <template #default>
        Asegúrese de recibir servicios médicos de calidad acudiendo a la Clínica General La Gran Familia. Llámenos o
        envíenos un correo electrónico para obtener más información sobre nuestras consultas médicas, evaluaciones y
        más. Esperamos poder servirle.
      </template>
    </CommonTitleHeader>

    <div class="relative mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-4 lg:py-20">
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
          <div v-for="feature in primaryFeatures" :key="feature.icon" class="relative pl-16">
            <dt class="text-[20px] font-semibold leading-7 text-tropaz-blue font-maven">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                <IconFeature size="xl">
                  <template v-slot:icon>
                    <NuxtImg :src="`/svg/${feature.icon}`" class="w-6 h-6" />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base font-normal font-montserrat leading-7 tracking-wide text-stratos-blue">
              {{ feature.description }}
            </dd>
            <div>
              <ul role="list" class="mt-1 space-y-3 text-sm leading-6 text-gray-600">
                <li
                  v-for="item in feature.data"
                  :key="item.type"
                  class="flex gap-x-3 font-montserrat text-base text-bahama-blue font-semibold"
                >
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </dl>
      </div>
      <div class="px-6 lg:px-0 lg:pt-0">
        <div class="border border-transparent">
          <div class="w-full h-[375px]" ref="mapDiv"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
