<script setup lang="ts">
import { Todo } from '@/types/Todo';
import EditIcon from '@/components/EditIcon.vue';

const props = defineProps<{
  todo: Todo;
}>();

const emits = defineEmits<{
  (event: 'complete', id: number): void;
  (event: 'remove', id: number): void;
}>();

const completeTodo = (id: number) => {
  emits('complete', id);
};

const removeTodo = (id: number) => {
  emits('remove', id);
};
</script>
<template>
  <li class="flex items-center justify-between gap-2 p-2 border-b border-neutral-content">
    <div class="flex items-center">
      <input type="checkbox"
        class="w-5 h-5 transition duration-150 checkbox text-neutral-content border-neutral-content"
        @change="completeTodo(todo.id)" />
      <div class="flex items-center gap-4">
        <span class="ml-2 text-sm font-normal text-neutral-content" :class="{ 'line-through': todo.done }">{{
          todo.text }}</span>
        <button class="cursor-pointer">
          <EditIcon />
        </button>
      </div>
    </div>
    <button class="btn-default" @click="removeTodo(todo.id)">Remove</button>
  </li>
</template>
<style scoped></style>