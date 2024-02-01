<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-center text-center">
    <div class="leading-7">
      <span class="text-[#099541]/45 font-maven uppercase">
        <slot name="title"></slot>
      </span>
      <h2 class="text-tropaz-blue py-3 tracking-normal font-maven text-3xl font-medium leading-7">
        <slot name="subtitle"></slot>
      </h2>
      <p class="font-montserrat text-stratos-blue mt-2 text-[18px]">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
