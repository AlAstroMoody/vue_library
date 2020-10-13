<template>
  <div class="book">
    <div class="book__left">
      <label class="book__label">
        <span>Название</span>
        <el-input class="book__input" v-model="obj.name" />
      </label>
      <label class="book__label">
        <span>Автор</span>
        <el-input class="book__input" v-model="obj.author" />
      </label>
      <label class="book__label">
        <span>Субьективная оценка</span>
        <el-rate
          v-model="obj.rating"
          :texts="['Провал', 'Разочарование', 'Нормально', 'Хорошо', 'Отлично']"
          show-text
          class="book__input"
        >
        </el-rate>
      </label>
      <label class="book__label">
        <span>Издательство</span>
        <el-input class="book__input" v-model="obj.publisher" />
      </label>
    </div>
    <div class="book__right">
      <label class="book__label">
        <span>Происхождение</span>
        <el-input class="book__input" v-model="obj.origin" />
      </label>
      <label class="book__label">
        <span>Жанр</span>
        <el-select
          v-model="obj.genre"
          multiple
          filterable
          allow-create
          default-first-option
          class="book__input"
          placeholder="Choose tags for your article"
        >
          <el-option v-for="item in genres" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
      </label>
      <label class="book__label-checkbox">
        <input type="checkbox" v-model="obj.inStock" />
        В наличии
      </label>
    </div>
    <label class="book__description">
      <span>Описание</span>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5 }"
        v-model="obj.description"
      />
    </label>
    <el-button @click="saveBook" round class="book__button">
      Сохранить
    </el-button>
  </div>
</template>

<script>
export default {
  name: "BookEdit",
  data() {
    return {
      obj: this.book
    };
  },
  props: {
    book: {
      type: Object,
      default: () => {
        return {
          name: "",
          author: "",
          genre: [],
          description: "",
          rating: "",
          publisher: "",
          origin: "",
          inStock: true
        };
      }
    },
    genres: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    saveBook() {
      this.$emit("saveBook", this.obj);
    }
  }
};
</script>

<style scoped>
.book {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  min-width: 380px;
}

.book__left {
  width: 45%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto auto 4%;
}

.book__right {
  width: 45%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto auto 4%;
}
.book__label {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
.book__label-checkbox {
  margin: 5px;
}

label span {
  width: 25%;
  min-width: 120px;
  padding: 5px;
}

.book__input {
  width: 70%;
  min-width: 190px;
}

.book__description {
  min-width: 400px;
  width: 60%;
  margin: 0 auto auto 4%;
}

.book__button {
  margin: auto;
}

@media screen and (max-width: 780px) {
  .book__description {
    min-width: 370px;
  }
}
@media screen and (max-width: 500px) {
  .book__description {
    min-width: 320px;
  }
  .book {
    min-width: 350px;
  }
  .book__left {
    margin: 0;
    min-width: 320px;
  }
  .book__right {
    margin: 0;
    min-width: 320px;
  }
  .book__input {
    max-width: 150px;
    margin: 1px 5px 1px 1px;
    padding: 0;
  }
  .label span {
    max-width: 80px;
  }
  .book__label {
    margin: 0;
  }
}
</style>
