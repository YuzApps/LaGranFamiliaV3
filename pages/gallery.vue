<script lang="ts" setup>
useSeoMeta({
  title: "Galería",
  description: "Vídeos importantes de la clínica.",
  ogTitle: "Vídeos importantes de la clínica.",
  ogDescription: "Vídeos importantes de la clínica.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <UContainer class="pt-10 pb-5">
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-base font-semibold leading-7 text-[#099541]/45 uppercase font-maven">Galería</h1>
        <h2 class="mt-2 text-3xl font-medium font-maven text-tropaz-blue tracking-tight sm:text-4xl">
          Vídeos importantes
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="px-6 lg:px-0 lg:pt-8">
          <iframe
            src="https://www.youtube.com/embed/f6K-321wef4"
            class="w-full aspect-video rounded-lg shadow-lg"
          ></iframe>
          <div class="flex space-x-2 mt-2">
            <div class="py-2">
              <IconFeature size="xl">
                <template v-slot:icon>
                  <NuxtImg src="/assets/img/uterus1.png" class="w-5 h-5" />
                </template>
              </IconFeature>
            </div>
            <div class="flex flex-col">
              <h3 class="title-video">Vacunación contra el COVID-19</h3>
              <p class="mt-2 text-base leading-7 text-gray-600 font-montserrat">
                Clínica General la Gran Familia, 3035 S Shiloh RD, Grandland Texas, 75041
              </p>
            </div>
          </div>
        </div>
        <div class="px-6 lg:px-0 lg:pt-8">
          <iframe
            src="https://www.youtube.com/embed/v5O2md6KC9Q"
            class="w-full aspect-video rounded-lg shadow-lg"
          ></iframe>
          <div class="flex space-x-2 mt-2">
            <div class="py-2">
              <IconFeature size="xl">
                <template v-slot:icon>
                  <NuxtImg src="/assets/img/disease1.png" class="w-5 h-5" />
                </template>
              </IconFeature>
            </div>
            <div class="flex flex-col">
              <h3 class="title-video">Protégete contra la Influeza</h3>
              <p class="mt-2 text-base leading-7 text-gray-600 font-montserrat">
                Clínica General la Gran Familia, 3035 S Shiloh RD, Grandland Texas, 75041
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-[#099541]/45 uppercase font-maven">Galería</h2>
        <h3 class="mt-2 text-xl font-medium font-maven text-tropaz-blue tracking-tight sm:text-4xl">
          Nuestro Centro Médico
        </h3>
      </div>
      <div class="grid grid-cols-2 gap-6 py-10">
        <div class="w-full col-span-1">
          <div class="grid col-span-2 gap-6">
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_XtUd5SiX464.png"
              class="col-span-2 w-full rounded shadow-lg img-gallery-effect"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_pxoZSTdAzeU.png"
              class="w-full col-span-1 rounded shadow-lg img-gallery-effect"
              height="169"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_d2zvqp3fpro.png"
              height="269"
              class="w-full rounded shadow-lg img-gallery-effect"
            />
          </div>
        </div>
        <div class="col-span-1">
          <div class="grid col-span-2 gap-6">
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/e1b20qxblgud2bu3gm7y.png"
              class="col-span-1 w-full rounded shadow-lg img-gallery-effect"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/pv5rcpo156s164gkjg1j.png"
              class="w-full col-span-1 rounded shadow-lg img-gallery-effect"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/unsplash_9IcKPSQ9G5Q.png"
              height="269"
              class="w-full col-span-2 rounded shadow-lg img-gallery-effect"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/ub1yzpc0apr7zeny5ziv.png"
              class="w-full col-span-1 rounded shadow-lg img-gallery-effect"
            />
            <NuxtImg
              provider="cloudinary"
              src="/LaGranFamilia/img/vsj6pkyppyidog37ejfw.png"
              class="w-full col-span-1 rounded shadow-lg img-gallery-effect"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped lang="scss">
.title-video {
  @apply mt-4 text-lg font-semibold font-maven text-tropaz-blue tracking-tight sm:text-[20px];
}
.img-gallery-effect {
  @apply hover:scale-105 transition duration-500 cursor-pointer object-cover;
}
</style>
