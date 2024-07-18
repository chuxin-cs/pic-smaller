import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "vue",
    component: () => import("@/pages/vue/index.vue"),
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import("@/pages/ref/index.vue"),
  },
  {
    path: "/reactive",
    name: "reactive",
    component: () => import("@/pages/reactive/index.vue"),
  },
];
