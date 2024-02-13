<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
useSeoMeta({
  ogType: "website",
});
</script>

<template>
  <div>
    <TheHeading />
    <UContainer class="lg:px-6">
      <slot />
    </UContainer>
    <TheFooter />
    <SpeedInsights />
  </div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
