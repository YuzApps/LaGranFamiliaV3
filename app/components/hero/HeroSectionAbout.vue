<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());

  interface PrimaryFeatures {
    name: string;
    description: string;
    imageUrl: string;
    icon: string;
  }

  const hero = computed(() => page?.value?.heroSection);
  const primaryFeatures = computed<PrimaryFeatures[]>(() => hero?.value.primaryFeatures);

  const urlPlayer = ref(
    'https://player.cloudinary.com/embed/?public_id=LaGranFamilia%2Fvideos%2Fvideo_source_11&cloud_name=assetss&player[posterOptions][transformation][startOffset]=14'
  );
</script>
<template>
  <div class="mt-1.5 bg-transparent">
    <div class="grid grid-cols-2">
      <div>
        <span class="font-maven uppercase text-[#099541]/45">{{ hero?.title }}</span>
        <h2 class="py-2 font-maven text-3xl font-medium leading-7 tracking-wide text-tropaz-blue">
          {{ hero.about.title }}
        </h2>
      </div>
      <div>
        <p class="font-montserrat text-[16px] font-normal leading-7 text-stratos-blue">
          {{ hero.about.description }}
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
        />
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-2 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16"
        >
          <div v-for="feature in primaryFeatures" :key="feature.icon" class="relative pl-16">
            <dt class="font-maven text-[20px] font-semibold leading-7 text-tropaz-blue">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
              >
                <IconFeature size="xl">
                  <template #icon>
                    <NuxtImg :src="feature.imageUrl" class="h-5 w-5" />
                  </template>
                </IconFeature>
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="mt-2 font-montserrat text-base font-normal leading-7 tracking-wide text-stratos-blue"
            >
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="absolute inset-y-0 -z-10">
        <NuxtImg :src="hero.backgroundUrl" alt="Hero Quote" class="h-full w-full" />
      </div>
    </div>
  </div>
</template>
