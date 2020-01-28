import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/drop-pin",
    name: "droppin",
    component: () =>
      import("../views/DropPin.vue")
  },
  {
    path: "/project-info",
    name: "projectinfo",
    component: () =>
      import("../views/ProjectInfo.vue")
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import("../views/Calendar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
