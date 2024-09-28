<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import AppTitle from '@/components/AppTitle.vue';
import TodoList from '@/components/TodoList.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import useTodos from '@/composables/useTodos';
import AppFooter from '@/components/AppFooter.vue';

const router = useRouter()

const newTodo = ref('');

const { todos, addTodo, removeTodo, removeAll, completeTodo, todosGroupedByDate } = useTodos();

const add = (todo: string) => {
    addTodo(todo);
    newTodo.value = '';
};

const editTodo = (id: number) => {
    router.push({ name: 'edit', params: { id } });
};
</script>
<template>
    <AppTitle title="Min ToDo" />

    <TodoInput v-model="newTodo" @add="add" />

    <section class="min-h-[420px] max-h-[420px]">
        <TodoList v-for="(todos, date) in todosGroupedByDate" :key="date" :date>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo @complete="completeTodo" @remove="removeTodo"
                @edit="editTodo" />
        </TodoList>
    </section>

    <AppFooter @removeAll="removeAll" />
</template>
<style scoped></style>