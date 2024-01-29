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
    name: "Collaborate",
    description:
      "Ofrecemos servicios médicos de alta calidad mediante tecnología avanzada, enfocados en la salud y bienestar de tu familia.",
    icon: resolveComponent("IconBookAlt"),
  },
  {
    name: "Task scheduling",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    icon: resolveComponent("IconFlag"),
  },
  {
    name: "Task scheduling",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    icon: resolveComponent("IconDiamond"),
  },
];
</script>

<template>
  <!-- Feature section -->
  <div class="mx-auto mt-10 max-w-7xl px-6 sm:mt-4 lg:px-8 mb-10 sm:mb-12">
    <div class="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-20 lg:max-w-none">
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
