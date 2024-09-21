<script setup lang="ts">
import { Todo } from '@/types/Todo';
import formatDate from '@/utils/formatDate';

defineProps<{
  todos: Todo[];
}>();
</script>
<template>
  <div class="w-full px-12">
      <div v-for="(todos, date) in todos" :key="date" class="mt-4">
        <h2 class="text-xl font-bold text-neutral-content">{{ formatDate(date.toString()) }}</h2>
        <ul class="w-full">
          <slot/>
        </ul>
      </div>
    </div>
</template>
<style scoped></style>