import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // landing pages
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

    // catalog
    {
      path: "/catalog",
      name: "catalog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Catalog/CatalogView.vue"),
    },
    {
      path: "/catalog-choose/:categoryId",
      name: "catalogChooseCategory",
      component: () => import("../views/Catalog/CatalogChooseCategoryView.vue"),
    },
    {
      path: "/catalog/:categoryId",
      name: "catalogCategory",
      component: () => import("../views/Catalog/CatalogCategoryView.vue"),
    },
    {
      path: "/catalog/:categoryId/:productId",
      name: "product",
      component: () => import("../views/Catalog/ProductView.vue"),
    },

    // search
    {
      path: "/search/:productId",
      name: "productSearch",
      component: () => import("../views/ProductSearch.vue"),
    },
    {
      path: "/search-brand/",
      name: "brandSearch",
      component: () => import("../views/BrandSearch/ChooseBrandView.vue"),
    },
    {
      path: "/search-brand/:brandName",
      name: "brandNameSearch",
      component: () => import("../views/BrandSearch/CustomiseBrandView.vue"),
    },
    {
      path: "/search-brand/:brandName/:type",
      name: "brandNameTypeSearch",
      component: () => import("../views/BrandSearch/CustomerBrandTypeView.vue"),
    },
    {
      path: "/search-brand/:brandName/:type/:model",
      name: "brandNameTypeModelSearch",
      component: () =>
        import("../views/BrandSearch/CustomerBrandTypeModel.vue"),
    },
    {
      path: "/search-brand/:brandName/:type/:model/:productId",
      name: "brandSearchProduct",
      component: () =>
        import("../views/BrandSearch/CustomerBrandProductView.vue"),
    },

    // cart
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart/CartView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/Cart/OrderView.vue"),
    },

    // authorisation
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Profile/RegistrationView.vue"),
    },
    {
      path: "/recover",
      name: "recover",
      component: () => import("../views/PassView.vue"),
    },

    // profile
    {
      path: "/balance",
      name: "balance",
      component: () => import("../views/Profile/BalanceView.vue"),
    },
    {
      path: "/park",
      name: "park",
      component: () => import("../views/Profile/GarageView.vue"),
    },
    {
      path: "/favourites",
      name: "favourites",
      component: () => import("../views/Profile/FavouritesView.vue"),
    },
    {
      path: "/dealers",
      name: "dealers",
      component: () => import("../views/Profile/DealersView.vue"),
    },
    {
      path: "/confirm/orders",
      name: "orders",
      component: () => import("../views/Profile/OrdersView.vue"),
    },
    {
      path: "/appeals",
      name: "appeals",
      component: () => import("../views/Profile/AppealsView.vue"),
    },
    {
      path: "/appeals/:appealId",
      name: "appealsDetails",
      component: () => import("../views/Profile/AppealsChat.vue"),
    },
    {
      path: "/sessions",
      name: "sessions",
      component: () => import("../views/Profile/WebServicesView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Profile/SettingsView.vue"),
    },

    // misc
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
      path: "/console",
      name: "console",
      component: () => import("../views/Console/Console.vue"),
    },
  ],
});

export default router;
