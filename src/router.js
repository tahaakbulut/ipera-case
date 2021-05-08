import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "./components/page/Dashboard";
import Filter from "./components/page/Filter";
import Base from "./components/page/Base";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Base,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/filter",
    component: Filter,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
