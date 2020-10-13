<template>
  <transition name="modal">
    <div class="modal__mask" @click.self="close">
      <el-card class="modal__body" :body-style="{ padding: '0px' }">
        <header class="modal__header">
          <slot name="header" />
          <el-button @click="close" type="text">&#10006;</el-button>
        </header>
        <main class="modal__main">
          <slot />
        </main>
        <footer class="modal__footer">
          <slot name="footer" />
        </footer>
      </el-card>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BookModal",
  methods: {
    close() {
      this.$emit("closeModal");
    },
    hotkeys(e) {
      if (e.key === "Escape") {
        this.close();
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.hotkeys);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.hotkeys);
  }
};
</script>

<style scoped>
.modal__mask {
  background: rgba(62, 62, 62, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.modal__body {
  display: flex;
  margin: 50px auto;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
  width: 60%;
  min-width: 450px;
  z-index: 10;
  transition: all 0.3s ease;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
  text-align: center;
  padding: 8px 12px;
  font-size: 20px;
}

.modal__footer {
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  padding: 4px 12px;
  text-align: left;
  flex-wrap: wrap;
}

.modal__main {
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 20%;
  background-color: #eee;
}

@media screen and (max-width: 500px) {
  .modal__body {
    min-width: 380px;
  }
}

.modal-enter-active,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__body,
.modal-leave-to .modal__body {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
