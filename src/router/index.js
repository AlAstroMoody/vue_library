import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Inventory from "../views/Inventory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home/",
    name: "Home",
    component: Home
  },
  {
    path: "/library/",
    name: "Library",
    component: Library
  },
  {
    path: "/inventory/",
    name: "Inventory",
    component: Inventory
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
