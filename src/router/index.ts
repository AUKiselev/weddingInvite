import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "mainView",
          component: () => import("@/views/MainView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/views/ContactsView.vue"),
        },
        {
          path: "/dress-code",
          name: "dress-code",
          component: () => import("@/views/DresscodeView.vue"),
        },
        {
          path: "/gallery",
          name: "gallery",
          component: () => import("@/views/GalleryView.vue"),
        },
      ],
    },
  ],
});

export default router;
