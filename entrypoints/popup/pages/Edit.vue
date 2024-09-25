<script setup lang="ts">
import TodoInput from '@/components/TodoInput.vue';
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const { todos, editTodo } = useTodos();

const todoValue = ref('')
const todoId = ref(0)

const edit = (todo: string) => {
    editTodo(todoId.value, todo)
    router.push({ name: 'index' })
};

onMounted(() => {
    if (route.params.id) {
      todoId.value = Number(route.params.id)
      todoValue.value = todos.value.find((todo) => todo.id === Number(route.params.id))?.text || ''
    }
})
</script>
<template>
  <TodoInput v-model="todoValue" :edit="true" @edit="edit" />
</template>
<style scoped></style>