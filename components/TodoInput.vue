<script setup lang="ts">
import AddButton from '@/components/AddButton.vue';
import EditButton from '@/components/EditButton.vue';
const props = defineProps<{
  edit?: boolean | null;
}>();

const emits = defineEmits<{
  (event: 'add', todo: string): void;
  (event: 'edit', todo: string): void;
}>();

const model = defineModel({ type: String, required: true });

const addTodo = (todo: string) => {
  emits('add', todo);
};

const editTodo = (todo: string) => {
  emits('edit', todo);
};

const emitOnEnter = () => {
  if (props.edit) {
    editTodo(model.value);
  } else {
    addTodo(model.value);
  }
};
</script>
<template>
  <div class="flex w-full gap-4 px-12">
    <input
      class="w-full transition duration-150 border input input-bordered text-neutral-content border-neutral-content input-base-100 focus:border-neutral-content "
      type="text" v-model="model" @keyup.shift.enter="emitOnEnter" placeholder="What needs to be done?" />
    <AddButton v-if="!props.edit" @add="addTodo(model)" />
    <EditButton v-if="props.edit" @edit="editTodo(model)" />
  </div>
</template>
<style scoped></style>