<script setup>
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());
  const header = computed(() => page?.value?.heading);
  const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="z-20 bg-white font-montserrat shadow-md">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 sm:max-w-7xl lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink href="/" class="logo -m-1.5 p-1.5">
          <span class="sr-only">La Gran Familia</span>
          <img class="h-12 w-auto" src="/logo.svg" alt="La gran familia" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <UIcon name="i-heroicons-bars-3-solid" class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in header.links"
          :key="item.name"
          :to="item.url"
          class="router-link"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink to="/contact" class="contact-link">Contacto</NuxtLink>
      </div>
    </nav>

    <USlideover v-model="mobileMenuOpen">
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-10" />
        <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <UButton color="gray" variant="ghost" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <IconCloseMenu />
            </UButton>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink
                  v-for="item in header.links"
                  :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                  >{{ item.name }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
  </header>
</template>

<style scoped lang="scss">
  .router-link {
    @apply text-[18px] font-normal leading-6 tracking-wide text-gray-900;

    &.router-link-active,
    .router-link-exact-active {
      @apply border-b-2 border-b-[#099343] font-semibold text-zinc-900 #{!important};
    }
  }

  .vertical-router-link {
    @apply text-[18px] font-normal leading-6 tracking-wide text-gray-900;
  }

  .logo {
    &.router-link-exact-active {
      @apply border-b-0 #{!important};
    }
  }
</style>
