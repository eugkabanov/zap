import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/catalog",
      name: "catalog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Catalog/CatalogView.vue"),
    },
    {
      path: "/catalog/:categoryId",
      name: "catalogCategory",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/catalog/:categoryId/:productId",
      name: "product",
      component: () => import("../views/PassView.vue"),
    },

    {
      path: "/work",
      name: "work",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/sources",
      name: "sources",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/return",
      name: "return",
      component: () => import("../views/PassView.vue"),
    },
    {
      path: "/components",
      name: "components",
      component: () => import("../views/ComponentsView.vue"),
    },
  ],
});

export default router;
