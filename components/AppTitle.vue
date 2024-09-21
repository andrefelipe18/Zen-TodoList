<script setup lang="ts">
defineProps<{
title: string;
}>();
</script>
<template>
  <div class="flex justify-center w-full my-2">
      <h1 class="text-2xl font-bold text-center text-neutral-content">
        {{ title }}
      </h1>
    </div>
</template>
<style scoped></style>