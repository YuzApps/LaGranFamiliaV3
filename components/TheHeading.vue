<script setup>
  const { header } = useAppConfig();
  const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="font-montserrat z-20 bg-white shadow-md">
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
          :to="item.href"
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
        <div class="fixed inset-0 z-10"></div>
        <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <button
              type="button"
              @click="mobileMenuOpen = false"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink
                  v-for="item in header.links"
                  :key="item.name"
                  :to="item.href"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
  .vertical-router-link {
    @apply text-[18px] font-normal leading-6 tracking-wide text-gray-900;
  }

  .router-link {
    @apply text-[18px] font-normal leading-6 tracking-wide text-gray-900;

    &.router-link-active,
    .router-link-exact-active {
      @apply border-b-salem-green border-b-2 font-semibold text-zinc-900 #{!important};
    }
  }

  .contact-link {
    @apply bg-curious-blue font-montserrat hover:bg-bahama-blue rounded-full px-4 py-1.5 text-base font-normal tracking-wide text-white transition duration-150 ease-in-out hover:shadow-md;

    &.router-link-exact-active {
      @apply border-b-0 text-white #{!important};
    }
  }

  .logo {
    &.router-link-exact-active {
      @apply border-b-0 #{!important};
    }
  }
</style>
