<template>
  <div id="app">
    <header-library />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f2f2f2;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100%;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.el-icon-top {
  position: absolute;
  top: 150px;
  left: 5%;
  font-size: 20px;
}
</style>
<script>
import HeaderLibrary from "@/components/Header";
export default {
  components: { HeaderLibrary },
  async created() {
    await this.$store.dispatch("books/setBooks");
    await this.$store.dispatch("genres/setGenres");
  }
};
</script>
