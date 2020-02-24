import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/drop-pin",
    name: "droppin",
    component: () => import("../views/DropPin.vue")
  },
  {
    path: "/drop-pin/add",
    name: "adddroppin",
    component: () => import("../views/AddDropPin.vue")
  },
  {
    path: "/drop-pin/comments",
    name: "adddroppin",
    component: () => import("../views/ViewAllComments.vue")
  },
  {
    path: "/project-info",
    name: "projectinfo",
    component: () => import("../views/ProjectInfo.vue")
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar.vue")
  },
  {
    path: "/buffer",
    name: "buffer",
    component: () => import("../views/Buffer.vue")
  },
  {
    path: "/legend",
    name: "legend",
    component: () => import("../views/Legend.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/draw",
    name: "draw",
    component: () => import("../views/Draw.vue")
  },
  {
    path: "/measure",
    name: "measure",
    component: () => import("../views/Measure.vue")
  },
  {
    path: "/address-mapping",
    name: "addressmapping",
    component: () => import("../views/AddressMapping.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue")
  },
  {
    path: "/print",
    name: "print",
    component: () => import("../views/Print.vue")
  },
  {
    path: "/mls-listings",
    name: "mlslistings",
    component: () => import("../views/MLSlistings.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
