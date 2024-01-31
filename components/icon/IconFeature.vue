<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  size: {
    type: String,
    default: "md",
  },

  containerClass: {
    type: String,
    default: "w-8 h-8",
  },
});

const sizeClasses = computed(() => {
  return {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
    "2xl": "w-14 h-14",
  }[props.size];
});

const containerClasses = computed(() => {
  return props.containerClass;
});
</script>

<template>
  <div class="relative inline-block">
    <div
      class="hover:animate-pulse rounded-full bg-[#EEF2FF] w-10 h-10 flex items-center content-center justify-center"
      :class="sizeClasses"
    >
      <div class="flex items-center justify-center rounded-full bg-[#D8DFF3]" :class="containerClasses">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
