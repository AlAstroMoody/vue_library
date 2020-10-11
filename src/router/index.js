import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Inventory from "../views/Inventory.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/library/",
    name: "Library",
    component: Library,
    beforeEnter(from, to, next) {
      store.dispatch("books/setBooks");
      store.dispatch("genres/setGenres");
      next();
    }
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
