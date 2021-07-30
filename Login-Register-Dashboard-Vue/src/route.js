import { createRouter, createWebHistory } from "vue-router";
import Signin from "./components/Signin.vue";
import Dashboard from "./components/Dashboard.vue";

import store from "./store";

const router = createRouter({
  history: createWebHistory(),

  // Defination
  routes: [
    {
      path: "",
      redirect: "/Signin-page",
    },
    {
      path: "/dashboard-page",
      component: Dashboard,
      meta: { auth: false },
    },
    {
      name: "signin",
      path: "/Signin-page",
      component: Signin,
      meta: { auth: true },
    },

    {
      path: "/dashboard-page/:username",
      component: Dashboard,
      meta: { auth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/Signin-page") {
    if (store.getters.userUsAuthenticated) {
      next();
    } else {
      next("/Signin-page");
    }
  } else {
    next();
  }
});
export default router;
