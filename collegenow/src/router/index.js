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
    ,
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/node",
      name: "node",
      component: () => import("../views/NodeView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
