<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

</script>

<template>
  <div>
    Layout: default
    <slot />
    <SpeedInsights />
  </div>
</template>

<style scoped></style>
