<template>
  <transition name="modal">
    <div class="modal__mask" @click.self="close">
      <div class="modal__body">
        <el-button @click="close" type="text" class="modal__close">
          &#10006;
        </el-button>
        <header class="modal__header">
          <slot name="header" />
        </header>
        <main class="modal__main">
          <slot />
        </main>
        <footer class="modal__footer">
          <slot name="footer" />
        </footer>
      </div>
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
  padding: 5px;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  margin: 50px auto;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
  width: 60%;
  min-width: 450px;
  transition: all 0.3s ease;
  position: relative;
}

.modal__close {
  position: absolute;
  top: -5px;
  right: 10px;
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
  width: 100%;
  min-width: 300px;
}

@media screen and (max-width: 800px) {
  .modal__body {
    width: 80%;
  }
  .modal__header {
    font-size: 15px;
  }
}

@media screen and (max-width: 500px) {
  .modal__body {
    flex-direction: column;
    min-width: 350px;
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
