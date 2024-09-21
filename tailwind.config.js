import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "assets/**",
    "entrypoints/**",
    "components/**",
    "entrypoints/popup/App.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        todoTheme: {
          neutral: "#0d0c0c",
          "neutral-content": "#f3f4f6",
          "base-100": "#171717",
        },
      },
    ],
  },
};
