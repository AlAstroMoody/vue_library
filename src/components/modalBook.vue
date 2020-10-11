<template>
  <div class="modal" @click.self="close">
    <el-card class="modal__body" :body-style="{ padding: '0px' }">
      <header class="modal__header">
        <slot name="header"></slot>
        <el-button @click="close" type="text">&#10006;</el-button>
      </header>
      <main class="modal__main">
        <slot></slot>
      </main>
      <footer class="modal__footer">
        <slot name="footer"></slot>
      </footer>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "modalBook",
  methods: {
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
  background: rgba(62, 62, 62, 0.4);
}

.modal__body {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
  width: 60%;
  min-width: 450px;
  z-index: 10;
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
</style>
