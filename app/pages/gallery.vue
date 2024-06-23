<script lang="ts" setup>
  const { data: page } = await useAsyncData('gallery', () => queryContent('gallery').findOne());

  console.log('%c 🚀: page ', 'font-size:16px;background-color:#7F2B82;color:white;', page);

  const seo = computed(() => page?.value?.seo);

  useSeoMeta({
    title: seo.value.title,
    description: seo.value.description,
    ogTitle: seo.value.ogTitle,
    ogDescription: seo.value.description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
</script>

<template>
  <div>
    <UContainer class="pb-5 pt-10">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="font-maven text-base font-semibold uppercase leading-7 text-[#099541]/45">
          {{ page.title }}
        </h1>
        <h2
          class="mt-2 font-maven text-3xl font-medium tracking-tight text-tropaz-blue sm:text-4xl"
        >
          {{ page.description }}
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="px-6 lg:px-0 lg:pt-8">
          <iframe
            src="https://www.youtube.com/embed/f6K-321wef4"
            class="aspect-video w-full rounded-lg shadow-lg"
          />
          <div class="mt-2 flex space-x-2">
            <div class="py-2">
              <IconFeature size="xl">
                <template #icon>
                  <NuxtImg src="/assets/img/uterus1.png" class="h-5 w-5" />
                </template>
              </IconFeature>
            </div>
            <div class="flex flex-col">
              <h3 class="title-video">Vacunación contra el COVID-19</h3>
              <p class="mt-2 font-montserrat text-base leading-7 text-gray-600">
                Clínica General la Gran Familia, 3035 S Shiloh RD, Grandland Texas, 75041
              </p>
            </div>
          </div>
        </div>
        <div class="px-6 lg:px-0 lg:pt-8">
          <iframe
            src="https://www.youtube.com/embed/v5O2md6KC9Q"
            class="aspect-video w-full rounded-lg shadow-lg"
          />
          <div class="mt-2 flex space-x-2">
            <div class="py-2">
              <IconFeature size="xl">
                <template #icon>
                  <NuxtImg src="/assets/img/disease1.png" class="h-5 w-5" />
                </template>
              </IconFeature>
            </div>
            <div class="flex flex-col">
              <h3 class="title-video">Protégete contra la Influeza</h3>
              <p class="mt-2 font-montserrat text-base leading-7 text-gray-600">
                Clínica General la Gran Familia, 3035 S Shiloh RD, Grandland Texas, 75041
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="font-maven text-base font-semibold uppercase leading-7 text-[#099541]/45">
          Galería
        </h2>
        <h3 class="mt-2 font-maven text-xl font-medium tracking-tight text-tropaz-blue sm:text-4xl">
          Nuestro Centro Médico
        </h3>
      </div>
      <div class="grid grid-cols-2 gap-6 py-10">
        <div class="col-span-1 w-full">
          <div class="col-span-2 grid gap-6">
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_XtUd5SiX464.png"
              class="img-gallery-effect col-span-2 w-full rounded shadow-lg"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_pxoZSTdAzeU.png"
              class="img-gallery-effect col-span-1 w-full rounded shadow-lg"
              height="169"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_d2zvqp3fpro.png"
              height="269"
              class="img-gallery-effect w-full rounded shadow-lg"
            />
          </div>
        </div>
        <div class="col-span-1">
          <div class="col-span-2 grid gap-6">
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/e1b20qxblgud2bu3gm7y.png"
              class="img-gallery-effect col-span-1 w-full rounded shadow-lg"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/pv5rcpo156s164gkjg1j.png"
              class="img-gallery-effect col-span-1 w-full rounded shadow-lg"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_9IcKPSQ9G5Q.png"
              height="269"
              class="img-gallery-effect col-span-2 w-full rounded shadow-lg"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/ub1yzpc0apr7zeny5ziv.png"
              class="img-gallery-effect col-span-1 w-full rounded shadow-lg"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/vsj6pkyppyidog37ejfw.png"
              class="img-gallery-effect col-span-1 w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped lang="scss">
  .img-gallery-effect {
    @apply cursor-pointer object-cover transition duration-500 hover:scale-105;
  }
</style>
