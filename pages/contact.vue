<script lang="ts" setup>
import { Loader } from "@googlemaps/js-api-loader";

const config = useRuntimeConfig();

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

const mapDiv = ref(null);
const currPosition = ref({
  lat: 32.879699,
  lng: -96.666299,
});

const loader = new Loader({
  apiKey: config.public.googleMapsApiKey,
});

onMounted(async () => {
  loader.load().then(() => {
    useGeoPosition();
  });
});

function useGeoPosition() {
  const map = new google.maps.Map(mapDiv.value, {
    center: { lat: 32.88001, lng: -96.6674 },
    zoom: 17,
    zoomControl: true,
    rotateControl: true,
    mapTypeControl: true,
    fullscreenControl: true,
    disableDefaultUI: true,
    mapTypeId: "satellite",
    title: "My Map",
  });

  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "red",
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  const contentString =
    `<strong>Clinica general La Gran Familia</strong> <br/>` + `3035 S Shiloh Rd <br/> Garland, TX 75041`;

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: currPosition.value,
    map,
    icon: svgMarker,
    title: "Clinica general La Gran Familia",
  });

  marker.setMap(map);

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}

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
