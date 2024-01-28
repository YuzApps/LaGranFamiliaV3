<script setup>
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Galería", href: "/gallery" },
  { name: "Citas", href: "/appointment" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-white font-sans shadow-md z-10">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
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
          <!--Bars3Icon class="h-6 w-6" aria-hidden="true" /-->
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-normal tracking-wide leading-6 text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          class="text-sm bg-curious-blue font-normal tracking-wide text-white rounded-full px-4 py-1.5 hover:bg-curious-blue-dark hover:shadow-md transition ease-in-out duration-150"
          >Contacto
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
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
