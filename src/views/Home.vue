<template>
  <div class="home">
    <h2>Последние добавленные книги</h2>
    <section class="home__main">
      <div class="home__card" v-for="(book, index) in lastBooks" :key="book.id">
        <book-card
          :book="book"
          :image="images[index]"
          @openModal="detailBook(book)"
        />
      </div>
    </section>
    <transition name="fade" mode="out-in">
      <book-detail
        v-if="modalVisible"
        @closeModal="modalVisible = !modalVisible"
        :book="book"
        class="home__modal"
      />
    </transition>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard";
import BookDetail from "@/components/BookDetail";
export default {
  name: "Home",
  data() {
    return {
      images: [
        require("../assets/book1.jpg"),
        require("../assets/book2.jpg"),
        require("../assets/book3.jpg")
      ],
      modalVisible: false,
      book: {}
    };
  },
  components: { BookDetail, BookCard },
  computed: {
    lastBooks() {
      return this.$store.getters["books/lastBooks"];
    }
  },
  methods: {
    detailBook(book) {
      this.book = book;
      this.modalVisible = true;
    }
  }
};
</script>

<style>
.home {
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.home__main {
  width: 80%;
  min-width: 800px;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
}

.home__card {
  min-width: 320px;
  max-width: 370px;
  width: 32%;
  padding-top: 10px;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 5px;
  text-align: center;
}

.home__card:hover {
  box-shadow: 0 0 5px #000;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.home__modal {
  margin: auto;
}
</style>
