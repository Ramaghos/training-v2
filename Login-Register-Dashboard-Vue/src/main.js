import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
// import Signin from "./components/Signin.vue";
// import Dashboard from "./components/Dashboard.vue";
// import AddTask from "./components/AddTask.vue";
// import AllTask from "./components/AllTask.vue";
// import ViewTask from "./components/ViewTask.vue";
import PulseLoader from "./components/PulseLoader.vue";

import router from "./route";

import store from "./store";

// const store = createStore({
//   state() {
//     return {
//       isLoggedIn: false,
//       userDetails: {},
//     };
//   },
//   actions: {},
//   mutations: {
//     setAuth(state, payload) {
//       state.isLoggedIn = payload;
//     },

//     addUserDetail(state, payload) {
//       state.userDetails = payload;
//     },
//   },
//   getters: {
//     userUsAuthenticated(user) {
//       return user.isLoggedIn;
//     },
//     getUserDetails(user) {
//       return user.userDetails;
//     },
//   },
// });

// const router = createRouter({
//   history: createWebHistory(),

//   // Defination
//   routes: [
//     {
//       path: "",
//       redirect: "/Signin-page",
//     },
//     {
//       path: "/dashboard-page",
//       component: Dashboard,
//       meta: { auth: false },
//       children: [
//         {
//           path: "/tasks/add",
//           component: AddTask,
//           meta: { auth: false },
//         },
//         {
//           path: "/tasks/:id",
//           component: ViewTask,
//         },
//         {
//           path: "/tasks",
//           component: AllTask,
//           meta: { auth: false },
//         },
//       ],
//     },
//     {
//       name: "signin",
//       path: "/Signin-page",
//       component: Signin,
//       meta: { auth: true },
//     },
//     // {
//     //   path: "/auto-logout",
//     //   component: AutoLogout,
//     // },
//     {
//       path: "/dashboard-page/:username",
//       component: Dashboard,
//       meta: { auth: false },
//     },
//     // {
//     //   path: "/tasks/add",
//     //   component: AddTask,
//     //   meta: { auth: false },
//     // },
//     // {
//     //   path: "/tasks/:id",
//     //   component: ViewTask,
//     // },
//     // {
//     //   path: "/tasks",
//     //   component: AllTask,
//     //   meta: { auth: false },
//     // },
//   ],
// });

// router.beforeEach((to, from, next) => {
//   if (to.path !== "/Signin-page") {
//     if (store.getters.userUsAuthenticated) {
//       next();
//     } else {
//       next("/Signin-page");
//     }
//   } else {
//     next();
//   }
// });

const app = createApp(App);
app.use(router);
app.component("PulseLoader", PulseLoader);
//app.component('Signin-details', Signin );
app.use(store);
app.mount("#app");
