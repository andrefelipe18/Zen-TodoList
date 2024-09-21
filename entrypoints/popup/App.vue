<script lang="ts" setup>
import TodoList from '@/components/TodoList.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import AppTitle from '@/components/AppTitle.vue';
import useTodos from '@/composables/useTodos';
import formatDate from '@/utils/formatDate';
import { ref } from 'vue';

const newTodo = ref('');

const { todos, addTodo, removeTodo, completeTodo, todosGroupedByDate } = useTodos();
</script>

<template>
  <div class="w-full">
    <AppTitle title="Min ToDo" />
    <TodoInput v-model="newTodo" @add="addTodo" />
    <TodoList :todos="todos" >
      <TodoItem v-for="todo in todos" :key="todo.id" :todo  @complete="completeTodo" @remove="removeTodo"  />
    </TodoList>
  </div>
</template>
<style scoped></style>