import Book from "./book_help";

import firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    books: []
  },
  mutations: {
    addNewBook: (state, payload) => {
      state.books.push(payload);
    },
    removeBook: (state, id) => {
      const index = state.books.findIndex(original => original["id"] === id);
      state.books.splice(index, 1);
    },
    updateBook: (state, payload) => {
      const index = state.books.findIndex(
        original => original.id === payload.id
      );
      state.books.splice(index, 1, payload);
    },
    setBooks: (state, payload) => {
      state.books = payload;
    }
  },
  getters: {
    books: state => {
      return state.books;
    },
    lastBooks: state => {
      return [
        state.books[state.books.length - 1],
        state.books[state.books.length - 2],
        state.books[state.books.length - 3]
      ];
    }
  },
  actions: {
    async removeBook({ commit }, id) {
      await firebase
        .database()
        .ref("books")
        .child(id)
        .remove();
      commit("removeBook", id);
    },
    async updateBook({ commit }, payload) {
      await firebase
        .database()
        .ref("books")
        .child(payload.id)
        .update({
          name: payload.name,
          author: payload.author,
          genre: payload.genre,
          description: payload.description,
          rating: payload.rating,
          publisher: payload.publisher,
          origin: payload.origin,
          inStock: payload.inStock
        });
      commit("updateBook", payload);
    },
    async addNewBook({ commit }, payload) {
      const newBook = new Book(
        payload.name,
        payload.author,
        payload.genre,
        payload.description,
        payload.rating,
        payload.publisher,
        payload.origin,
        payload.inStock
      );
      const book = await firebase
        .database()
        .ref("books")
        .push(newBook);
      commit("addNewBook", { ...newBook, id: book.key });
    },
    async setBooks({ commit }) {
      const info = await firebase
        .database()
        .ref("books")
        .once("value");
      const books = info.val();
      const booksArray = [];
      Object.keys(books).forEach(key => {
        const b = books[key];
        booksArray.push(
          new Book(
            b.name,
            b.author,
            b.genre,
            b.description,
            b.rating,
            b.publisher,
            b.origin,
            b.inStock,
            key
          )
        );
      });
      let changeArray = Object.values(booksArray);
      commit("setBooks", changeArray);
    }
  }
};
