<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div>
    <TheHeading />
    <UContainer>
      <slot />
    </UContainer>
    <SpeedInsights />
  </div>
</template>

<style scoped></style>
