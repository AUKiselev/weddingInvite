import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:user(\\d+)?",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/:user(\\d+)?",
          name: "mainView",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "/contacts/:user(\\d+)?",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/dress-code/:user(\\d+)?",
          name: "dress-code",
          component: () => import("@/views/DresscodeView.vue"),
        },
        {
          path: "/gallery/:user(\\d+)?",
          name: "gallery",
          component: () => import("@/views/GalleryView.vue"),
        },
      ],
    },
  ],
});

export default router;
