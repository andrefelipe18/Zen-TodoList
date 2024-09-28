<script setup lang="ts">
import formatDate from '@/utils/formatDate';

defineProps<{
  date: string;
}>();
</script>
<template>
  <div class="w-full px-12 overflow-auto">
      <div  class="mt-4">
        <h2 class="text-xl font-bold text-neutral-content">{{ formatDate(date) }}</h2>
        <ul id="todo-list-items" class="w-full">
          <slot/>
        </ul>
      </div>
    </div>
</template>
<style scoped></style>