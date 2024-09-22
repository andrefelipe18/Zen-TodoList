<script setup lang="ts">
const emits = defineEmits<{
  (event: 'removeAll'): void;
}>();

const removeAll = () => {
  emits('removeAll');
};
</script>
<template>
  <footer class="flex items-center justify-center w-full gap-4 my-2">
    <p class="text-sm text-neutral-content">
      Made with ❤️ by <a href="https://github.com/andrefelipe18/">André Domingues</a>
    </p>
    <button @click="removeAll" class="btn-default">
      Remove All
    </button>
  </footer>
</template>
<style scoped></style>