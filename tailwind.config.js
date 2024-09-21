import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["assets/**", "entrypoints/**", "components/**", "entrypoints/popup/App.vue"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],

  daisyui: {
    themes: ["sunset"],
  },
};