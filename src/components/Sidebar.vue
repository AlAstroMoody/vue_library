<template>
  <div class="sidebar">
    <img src="../assets/shelf.png" alt="shelf" class="sidebar__image" />
    <el-button>Библиотека</el-button>
    <el-button>Таблица</el-button>
    <el-button>Инвентаризация</el-button>
    <el-input placeholder="поиск" v-model="search"></el-input>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.sidebar__image {
  width: 100%;
  margin-bottom: -50px;
}
</style>
