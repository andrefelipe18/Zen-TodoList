import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],

  manifest: {
    name: 'Min ToDo List',
    version: '0.0.1',
    description: 'Minimal ToDo List',
    permissions: ['storage'],
  },
});
