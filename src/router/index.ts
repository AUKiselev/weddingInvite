import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id(\\d+)",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/:id(\\d+)",
          name: "mainView",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "/:id(\\d+)/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/:id(\\d+)/dress-code",
          name: "dress-code",
          component: () => import("@/views/DresscodeView.vue"),
        },
        {
          path: "/:id(\\d+)/gallery",
          name: "gallery",
          component: () => import("@/views/GalleryView.vue"),
        },
      ],
    },
  ],
});

export default router;
