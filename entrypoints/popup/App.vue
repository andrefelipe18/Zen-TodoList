<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
import { ref, computed } from 'vue';

type Todo = {
  id: number;
  text: string;
  done: boolean;
  doneAt: string;
  date: string;
};

const todos = useStorage<Todo[]>('todos', []);

const newTodo = ref('');

const addTodo = () => {
  if (!newTodo.value.trim()) return;
  const now = new Date();
  todos.value.push({
    id: now.getTime(),
    text: newTodo.value,
    done: false,
    doneAt: '',
    date: now.toISOString().split('T')[0], // YYYY-MM-DD
  });
  newTodo.value = '';
};

const removeTodo = (id: number) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1) todos.value.splice(index, 1);
};

const completeTodo = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
    todo.doneAt = todo.done ? new Date().toISOString() : '';
  }
};

const groupedTodos = computed(() => {
  return todos.value.reduce((groups, todo) => {
    const date = todo.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(todo);
    return groups;
  }, {} as Record<string, Todo[]>);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center w-full my-2">
      <h1 class="text-2xl text-center font-bold text-[#f3f4f6]">Min ToDo</h1>
    </div>

    <div class="w-full px-12">
      <input
        class="input input-bordered w-full text-[#f3f4f6] border border-[#f3f4f6] bg-[#171717] focus:border-[#ffffff] transition duration-150"
        type="text" v-model="newTodo" @keyup.shift.enter="addTodo" placeholder="What needs to be done?" />
    </div>

    <div class="w-full px-12">
      <div v-for="(todos, date) in groupedTodos" :key="date" class="mt-4">
        <h2 class="text-xl font-bold text-[#f3f4f6]">{{ formatDate(date) }}</h2>
        <ul class="w-full">
          <li v-for="todo in todos" :key="todo.id"
            class="flex items-center justify-between gap-2 p-2 border-b border-[#f3f4f6] ">
            <div class="flex items-center">
              <input type="checkbox" 
              class="checkbox h-5 w-5 text-[#f3f4f6] border-[#f3f4f6] focus:border-[#ffffff] transition duration-150"
              @change="completeTodo(todo.id)" />
              <span class="ml-2 text-sm font-normal" :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
            </div>
            <button
              class="btn bg-[#171717] text-[#f3f4f6] hover:bg-[#0d0c0c] hover:border-[#f3f4f6] transition duration-500"
              @click="removeTodo(todo.id)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.checkbox:checked {
  background-color: #f3f4f6 !important;
  color: #171717 !important;
}
</style>