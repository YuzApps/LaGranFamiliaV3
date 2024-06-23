<script lang="ts" setup>
interface EHtmlProps {
  url?: string;
}
withDefaults(defineProps<EHtmlProps>(), {
  url: "",
});
</script>

<template>
  <EHtml lang="en">
    <EButton :href="url"> View on GitHub </EButton>
  </EHtml>
</template>
