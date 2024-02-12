<script setup>
const { header } = useAppConfig();
const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-white font-montserrat shadow-md z-20">
    <nav class="mx-auto flex max-w-7xl sm:max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
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
        <NuxtLink v-for="item in header.links" :key="item.name" :to="item.href" class="router-link">{{
          item.name
        }}</NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink to="/contact" class="contact-link">Contacto</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.router-link {
  @apply text-[18px] font-normal tracking-wide leading-6 text-gray-900;
}

.contact-link {
  @apply text-base bg-curious-blue font-normal font-montserrat tracking-wide text-white rounded-full px-4 py-1.5 hover:bg-bahama-blue hover:shadow-md transition ease-in-out duration-150;

  &.router-link-exact-active {
    @apply border-b-0 text-white #{!important};
  }
}
.logo {
  &.router-link-exact-active {
    @apply border-b-0 #{!important};
  }
}
.router-link-active,
.router-link-exact-active {
  @apply text-zinc-900 font-semibold border-b-2 border-b-salem-green #{!important};
}
</style>
