import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],

  manifest: {
    name: 'Min ToDoList',
    version: '0.0.1',
    description: 'Minimal ToDo List Extension inspired by Zen Browser',
    permissions: ['storage'],
  },

  manifestVersion: 2,
});
