<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
});

const sizeClasses = computed(() => {
  return {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  }[props.size];
});
</script>

<template>
  <div class="relative inline-block">
    <div
      class="hover:animate-pulse rounded-full bg-[#EEF2FF] w-10 h-10 flex items-center content-center justify-center"
      :class="sizeClasses"
    >
      <div class="flex items-center justify-center rounded-full bg-[#D8DFF3] w-8 h-8">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
