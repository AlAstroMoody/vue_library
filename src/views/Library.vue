<template>
  <div class="library">
    <el-input
      placeholder="Поиск по названию или автору"
      v-model="search"
      clearable
      class="library__search"
    >
    </el-input>
    <modal-book
      v-if="modalVisible === 'detail'"
      @closeModal="modalVisible = false"
      class="library__modal"
      :key="modalVisible"
    >
      <template v-slot:header>
        <h2>{{ book.name }}</h2>
      </template>
      <book-detail :book="book" />
    </modal-book>
    <modal-book
      v-if="modalVisible === 'edit' || modalVisible === 'new'"
      @closeModal="modalVisible = false"
      class="library__modal"
      :key="modalVisible"
    >
      <book-edit
        :genres="genres"
        @saveBook="saveBook"
        v-if="modalVisible === 'new'"
      />
      <book-edit :book="book" :genres="genres" @saveBook="saveBook" v-else />
    </modal-book>
    <div class="library__table">
      <el-button
        @click="openModalAdd"
        type="success"
        icon="el-icon-circle-plus-outline"
        circle
        class="library__table-add"
      />
      <el-table :data="filteredBooks" border>
        <el-table-column prop="name" label="Название" fixed min-width="100">
          <template slot-scope="scope">
            <el-button @click="detailBook(scope.row)" type="text">
              {{ scope.row.name }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="author"
          label="Автор"
          min-width="100"
          show-overflow-tooltip
        />
        <el-table-column label="Жанр" min-width="70" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ joinGenre(scope.row.genre) }}
          </template>
        </el-table-column>

        <el-table-column type="expand" label="Описание" width="100">
          <template slot-scope="props">
            <p>{{ props.row.description }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="rating" label="Оценка" width="75" />
        <el-table-column
          prop="publisher"
          label="Издательство"
          min-width="100"
        />
        <el-table-column
          prop="origin"
          label="Происхождение"
          min-width="100"
          show-overflow-tooltip
        />
        <el-table-column prop="inStock" label="Наличие" width="90">
          <template slot-scope="scope">
            <i class="el-icon-check" v-if="scope.row.inStock" />
            <i class="el-icon-close" v-if="!scope.row.inStock" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Действия" width="120">
          <template slot-scope="scope">
            <el-button
              @click="openModalEdit(scope.row)"
              type="text"
              size="small"
            >
              Edit
            </el-button>
            <el-button @click="deleteBook(scope.row)" type="text" size="small">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ModalBook from "@/components/modalBook";
import BookDetail from "@/components/BookDetail";
import { mapActions } from "vuex";
import BookEdit from "@/components/BookEdit";

export default {
  name: "Library",
  components: { BookEdit, BookDetail, ModalBook },
  data() {
    return {
      book: {},
      modalVisible: false,
      search: ""
    };
  },
  computed: {
    books() {
      return this.$store.getters["books/books"];
    },
    genres() {
      return this.$store.getters["genres/genres"];
    },
    filteredBooks() {
      return this.books.filter(
        data =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase()) ||
          data.author.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(["books/removeBook", "books/addNewBook", "books/updateBook"]),
    joinGenre(array) {
      return array.join(", ");
    },
    detailBook(book) {
      this.book = book;
      this.modalVisible = "detail";
    },
    openModalEdit(book) {
      this.book = book;
      this.modalVisible = "edit";
    },
    openModalAdd() {
      this.book = {};
      this.modalVisible = "new";
    },
    saveBook(book) {
      for (let genre of book.genre) {
        if (!this.$store.getters["genres/genresArray"].includes(genre)) {
          this.$store.dispatch("books/newGenre", genre);
        }
      }
      if (book.id) {
        this.$store.dispatch("books/updateBook", book);
      } else {
        this.$store.dispatch("books/addNewBook", book);
      }
      this.modalVisible = false;
    },
    deleteBook(book) {
      this.$confirm(
        `Книга ${book.name} будет удалена, продолжить?`,
        "Warning",
        {
          confirmButtonText: "Удалить",
          cancelButtonText: "Отмена",
          type: "warning"
        }
      )
        .then(() => {
          this.$store.dispatch("books/removeBook", book.id);
          this.$message({
            type: "success",
            message: "Удалено!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Отмена"
          });
        });
    }
  }
};
</script>

<style scoped>
.library {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.library__table {
  margin: 1%;
  display: flex;
  width: 80%;
  position: relative;
  z-index: 1;
}

.el-table th > .cell {
  text-align: center;
}
.library__search {
  width: 30%;
  max-width: 300px;
  min-width: 200px;
}

.el-table {
  border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.library__table-add {
  position: absolute;
  top: -25px;
  left: -25px;
  font-size: 20px;
}
</style>
