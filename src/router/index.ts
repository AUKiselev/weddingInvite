import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:user(\\w+)",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/:user(\\w+)",
          name: "mainView",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "/:user(\\w+)/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/:user(\\w+)/dress-code",
          name: "dress-code",
          component: () => import("@/views/DresscodeView.vue"),
        },
        {
          path: "/:user(\\w+)/gallery",
          name: "gallery",
          component: () => import("@/views/GalleryView.vue"),
        },
      ],
    },
  ],
});

export default router;
