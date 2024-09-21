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
    <div class="my-2 flex w-full justify-center">
      <h1 class="text-2xl text-center font-bold">Min ToDo</h1>
    </div>

    <div class="w-full px-12">
      <input class="input input-secondary w-full" type="text" v-model="newTodo" @keyup.shift.enter="addTodo"
        placeholder="What needs to be done?" />
    </div>

    <div class="w-full px-12">
      <div v-for="(todos, date) in groupedTodos" :key="date" class="mt-4">
        <h2 class="text-xl font-bold">{{ formatDate(date) }}</h2>
        <ul class="w-full">
          <li v-for="todo in todos" :key="todo.id" class="flex items-center justify-between p-2 gap-2 border-b border-secondary">
            <div class="flex items-center">
              <input type="checkbox" class="checkbox checkbox-secondary" @change="completeTodo(todo.id)" />
              <span class="ml-2 font-normal text-sm" :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
            </div>
            <button class="btn btn-accent" @click="removeTodo(todo.id)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>