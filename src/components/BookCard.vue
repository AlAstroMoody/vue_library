<template>
  <div @click="openModal">
    <div class="book">
      <div class="book__header">
        <img :src="image" class="book__image" />
      </div>
    </div>
    <div class="book__footer">
      {{ book.author }}
    </div>
    <el-button type="text" class="book__title">
      {{ book.name }}
    </el-button>
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
      </svg>
    </div>
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
  justify-content: center;
}

.book__header {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.book__image {
  margin: auto;
  height: 180px;
  width: 100%;
}

.book__footer {
  min-height: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.book__title {
  font-size: 25px;
  font-weight: lighter;
  padding: 5px;
  color: orange;
  display: flex;
  justify-content: center;
  margin-bottom: -2%;
  width: 100%;
  z-index: 500;
}

.svg-wrapper {
  min-height: 40px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 320px;
}

.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: #19f6e8;
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}

.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}
</style>
