import { createRouter, createWebHistory } from "vue-router";
import Signin from "./components/Signin.vue";
import Dashboard from "./components/Dashboard.vue";
import AddTask from "./components/AddTask.vue";
import AllTask from "./components/AllTask.vue";
import ViewTask from "./components/ViewTask.vue";
import store from "./store";
import LoggedInDetails from "./components/LoggedInDetails";

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
      children: [
        {
          path: "/LoggedInDetails",
          component: LoggedInDetails,
        },
        {
          path: "/LoggedInDetails/:username",
          component: LoggedInDetails,
        },
        {
          path: "/tasks/add",
          component: AddTask,
          meta: { auth: false },
        },
        {
          path: "/tasks/add/:id",
          component: AddTask,
        },
        {
          path: "/tasks/:id",
          component: ViewTask,
        },
        {
          path: "/tasks",
          component: AllTask,
          meta: { auth: false },
        },
      ],
    },
    {
      name: "signin",
      path: "/Signin-page",
      component: Signin,
      meta: { auth: true },
    },
    // {
    //   path: "/auto-logout",
    //   component: AutoLogout,
    // },
    {
      path: "/dashboard-page/:username",
      component: Dashboard,
      meta: { auth: false },
    },
    // {
    //   path: "/tasks/add",
    //   component: AddTask,
    //   meta: { auth: false },
    // },
    // {
    //   path: "/tasks/:id",
    //   component: ViewTask,
    // },
    // {
    //   path: "/tasks",
    //   component: AllTask,
    //   meta: { auth: false },
    // },
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
