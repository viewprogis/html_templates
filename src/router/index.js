import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../views/Home.vue")
  },
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
  },
  {
    path: "/buffer",
    name: "buffer",
    component: () =>
      import("../views/Buffer.vue")
  },
  {
    path: "/legend",
    name: "legend",
    component: () =>
      import("../views/Legend.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import("../views/Settings.vue")
  },
  {
    path: "/draw",
    name: "draw",
    component: () =>
      import("../views/Draw.vue")
  },
  {
    path: "/measure",
    name: "measure",
    component: () =>
      import("../views/Measure.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
