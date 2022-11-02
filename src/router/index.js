import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts/signup/:role",
    name: "Sign Up",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/accounts/signup",
    name: "SignUp Prompt",
    component: () => import("../views/auth/RegisterPrompt.vue"),
  },
  {
    path: "/accounts/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () => import("../views/Modules.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
