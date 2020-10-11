import firebase from "firebase/app";

import Genre from "./genre_help";

export default {
  namespaced: true,
  state: {
    genres: []
  },
  mutations: {
    setGenres(state, payload) {
      state.genres = payload;
    },
    newGenre(state, payload) {
      state.genres.push(payload);
    }
  },
  actions: {
    async setGenres({ commit }) {
      const info = await firebase
        .database()
        .ref("genres")
        .once("value");
      const genres = info.val();
      const genreArray = [];
      Object.keys(genres).forEach(key => {
        genreArray.push(new Genre(genres[key], key));
      });
      commit("setGenres", genreArray);
    },
    async newGenre({ commit }, payload) {
      const result = await firebase
        .database()
        .ref("genres")
        .push(payload);
      commit("newGenre", result);
    }
  },
  getters: {
    genres: state => {
      return state.genres;
    },
    genresArray: state => {
      const genreArray = [];
      for (let genre of state.genres) {
        genreArray.push(genre.name);
      }
      return genreArray;
    }
  }
};
