<template>
  <div @click="openModal" class="book">
    <div class="book__header">
      <img :src="image" class="book__image" />
    </div>

    <div class="book__footer">
      {{ book.author }}
    </div>
    <el-button type="text" class="book__title">
      {{ book.name }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      default: () => {}
    },
    image: {
      type: String,
      default: ""
    }
  },
  methods: {
    openModal() {
      this.$emit("openModal");
    }
  }
};
</script>

<style scoped>
.book {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 5px;
}

.book__header {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.book__image {
  margin: auto;
  height: 180px;
  width: 100%;
}

.book__footer {
  min-height: 30px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.book__title {
  font-size: 25px;
  min-height: 50px;
  font-weight: lighter;
  padding: 5px;
  color: orange;
  display: flex;
  justify-content: center;
  margin-bottom: -2%;
  width: 100%;
}
.book__title:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
</style>
