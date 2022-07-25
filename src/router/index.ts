import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:user(\\w)?",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/:user(\\w)?",
          name: "mainView",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "/contacts/:user(\\w)?",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/dress-code/:user(\\w)?",
          name: "dress-code",
          component: () => import("@/views/DresscodeView.vue"),
        },
        {
          path: "/gallery/:user(\\w)?",
          name: "gallery",
          component: () => import("@/views/GalleryView.vue"),
        },
      ],
    },
  ],
});

export default router;
