<template>
  <div class="detail">
    <p>
      Автор:
      <span>{{ book.author }}</span>
    </p>
    <p>
      Жанр: <span>{{ book.genre.join(", ") }}</span>
    </p>
    <p>
      Описание: <span>{{ book.description }}</span>
    </p>
    <p>
      Субьективная оценка: <span>{{ book.rating }}</span>
    </p>
    <p>
      Издательство: <span>{{ book.publisher }}</span>
    </p>
    <p>
      Происхождение: <span>{{ book.origin }}</span>
    </p>
    <p>
      В наличии: <span>{{ book.inStock ? "да" : "нет" }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.detail {
  text-align: left;
}

p {
  margin: 2%;
}

div p {
  font-size: 17px;
  font-weight: 100;
}

div p span {
  font-size: 20px;
  font-weight: 300;
}

@media screen and (max-width: 1350px) {
  div p {
    font-size: 14px;
  }
  div p span {
    font-size: 17px;
  }
}
@media screen and (max-width: 780px) {
  div p {
    font-size: 10px;
  }
  div p span {
    font-size: 13px;
  }
}
</style>
