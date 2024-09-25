<script lang="ts" setup>
import { RouterView } from 'vue-router';
import AppTitle from '@/components/AppTitle.vue';
import useTodos from '@/composables/useTodos';
</script>

<template>
  <div class="w-full">
    <AppTitle title="Min ToDo" />
    
    <RouterView />
  </div>
</template>
<style scoped></style>