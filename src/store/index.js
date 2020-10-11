import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import genres from "./genres";
import books from "./books";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    genres,
    books
  },
  plugins: [createPersistedState()]
});
