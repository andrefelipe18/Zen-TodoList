<script setup lang="ts">

const emits = defineEmits<{
  (event: 'add', todo: string): void;
}>();

const model = defineModel({ type: String, required: true });

const addTodo = (todo: string) => {
  emits('add', todo);
};
</script>
<template>
  <div class="flex w-full gap-4 px-12">
      <input
        class="w-full transition duration-150 border input input-bordered text-neutral-content border-neutral-content input-base-100 focus:border-neutral-content "
        type="text" v-model="model" @keyup.shift.enter="addTodo(model)" placeholder="What needs to be done?" />
      <button
        class="transition duration-500 btn btn-base-100 text-neutral-content hover:bg-neutral hover:border-neutral-content"
        @click="addTodo(model)">Add</button>
    </div>
</template>
<style scoped></style>