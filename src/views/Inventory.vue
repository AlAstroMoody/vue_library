<template>
  <div class="inventory">
    <span v-if="notFoundBooks.length === 0">*Отмечаем найденные</span>
    <template v-else>
      <span>Не найдены:</span>
      <transition-group name="boom">
        <ul v-for="book in notFoundBooks" :key="book">
          <li>{{ book }}</li>
        </ul>
      </transition-group>
    </template>
    <el-table
      ref="multipleTable"
      :data="books"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="Название" min-width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column property="author" label="Автор" min-width="120">
      </el-table-column>
      <el-table-column
        property="publisher"
        label="Издательство"
        show-overflow-tooltip
        width="120"
      >
      </el-table-column>
    </el-table>
    <div>
      <el-button @click="toggleSelection">Очистить</el-button>
      <el-button @click="endInventory">Закончить инвентаризацию</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  data() {
    return {
      multipleSelection: [],
      notFoundBooks: []
    };
  },
  computed: {
    books() {
      return this.$store.getters["books/books"];
    }
  },
  methods: {
    toggleSelection() {
      this.$refs.multipleTable.clearSelection();
      this.notFoundBooks = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    endInventory() {
      this.notFoundBooks = [];
      this.books.filter(book => {
        if (!this.multipleSelection.includes(book)) {
          this.notFoundBooks.push(book.name);
          return book.name;
        }
      });
      if (this.notFoundBooks.length === 0) {
        this.$notify.success({
          message: "Все книги найдены!",
          type: "success"
        });
      }
    }
  }
};
</script>

<style scoped>
.inventory {
  margin-top: 20px;
  width: 50%;
}

ul li {
  width: 200px;
  text-align: left;
}

.boom-enter-active {
  animation: slideIn 1s;
}

@keyframes slideIn {
  from {
    transform: translate(-800px);
  }
  to {
    transform: translate(0px);
  }
}
</style>
