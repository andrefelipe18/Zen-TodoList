<script setup lang="ts">
import { Todo } from '@/types/Todo';

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
  <!-- 
  <li v-for="todo in todos" :key="todo.id"
            class="flex items-center justify-between gap-2 p-2 border-b border-neutral-content ">
            <div class="flex items-center">
              <input type="checkbox"
                class="w-5 h-5 transition duration-150 checkbox text-neutral-content border-neutral-content"
                @change="completeTodo(todo.id)" />
              <span class="ml-2 text-sm font-normal text-neutral-content" :class="{ 'line-through': todo.done }">{{
                todo.text }}</span>
            </div>
            <button
              class="transition duration-500 btn btn-base-100 text-neutral-content hover:bg-neutral hover:border-neutral-content"
              @click="removeTodo(todo.id)">Remove</button>
          </li>
  -->
  <li class="flex items-center justify-between gap-2 p-2 border-b border-neutral-content ">
    <div class="flex items-center">
      <input type="checkbox"
        class="w-5 h-5 transition duration-150 checkbox text-neutral-content border-neutral-content"
        @change="completeTodo(todo.id)" />
      <span class="ml-2 text-sm font-normal text-neutral-content" :class="{ 'line-through': todo.done }">{{
        todo.text }}</span>
    </div>
    <button
      class="transition duration-500 btn btn-base-100 text-neutral-content hover:bg-neutral hover:border-neutral-content"
      @click="removeTodo(todo.id)">Remove</button>
  </li>
</template>
<style scoped></style>