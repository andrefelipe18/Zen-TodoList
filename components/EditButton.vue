<script setup lang="ts">
const emit = defineEmits<{
  (event: 'edit'): void;
}>();

const edit = () => {
  emit('edit')
};
</script>
<template>
  <button class="btn-default !border-neutral-content text-neutral-content" @click="edit">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
      <path fill="currentColor"
        d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.39 1.39 0 0 1 .27-1.951a1.39 1.39 0 0 1 1.953.27l2.351 3.104l5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656z" />
    </svg>
  </button>
</template>
<style scoped></style>