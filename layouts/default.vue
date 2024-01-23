<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"

</script>

<template>
  <div>
    Layout: default
    <slot />
    <SpeedInsights />
  </div>
</template>

<style scoped></style>
