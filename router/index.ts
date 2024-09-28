import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { 
    path: "/", 
    name: 'index',
    component: () => import("@/entrypoints/popup/pages/Index.vue") 
  },
  { 
    path: "/edit/:id", 
    name: 'edit',
    component: () => import("@/entrypoints/popup/pages/Edit.vue"), 
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});