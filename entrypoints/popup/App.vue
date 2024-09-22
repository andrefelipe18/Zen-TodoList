<script lang="ts" setup>
import TodoList from '@/components/TodoList.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import AppTitle from '@/components/AppTitle.vue';
import useTodos from '@/composables/useTodos';
import { ref } from 'vue';
import AppFooter from '@/components/AppFooter.vue';

const newTodo = ref('');

const { todos, addTodo, removeTodo, removeAll, completeTodo, todosGroupedByDate } = useTodos();

const add = (todo: string) => {
  addTodo(todo);
  newTodo.value = '';
};
</script>

<template>
  <div class="w-full">
    <AppTitle title="Min ToDo" />
    <TodoInput v-model="newTodo" @add="add" />

    <section class="min-h-[420px] max-h-[420px]">
      <TodoList v-for="(todos, date) in todosGroupedByDate" :key="date" :date>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo @complete="completeTodo" @remove="removeTodo" />
      </TodoList>
    </section>

    <AppFooter @removeAll="removeAll" />
  </div>
</template>
<style scoped></style>