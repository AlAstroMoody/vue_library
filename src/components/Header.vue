<template>
  <header>
    <section class="header__aligned">
      <img :src="cat" class="header__image" />
      <h2>Картотека домашней библиотеки</h2>
      <br />
      <div class="header__links">
        <router-link :to="{ name: 'Home' }" class="header__button">
          Главная
        </router-link>
        <router-link :to="{ name: 'Inventory' }" class="header__button">
          Инвентаризация
        </router-link>
        <router-link :to="{ name: 'Library' }" class="header__button">
          В библиотеку
        </router-link>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "headerLibrary",
  data() {
    return {
      cat: require("../assets/cat.png")
    };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 104px;
  text-align: center;
  background: lightblue;
  position: relative;
  transform: skewY(1deg);
  transform-origin: top right;
  margin-top: -30px;
  transition-duration: 1s;
  overflow: hidden;
}

.header__aligned {
  transform: skewY(-1deg);
  margin-top: 50px;
}

header:hover {
  height: 170px;
  transition-duration: 1s;
}
.header__button {
  margin: 20px;
}
.header__links {
  margin: 0 auto;
  min-width: 350px;
  display: flex;
  justify-content: center;
}

.header__button {
  padding: 10px;
  background-color: #697679;
  border-radius: 10px;
  color: white;
  margin: 5px;
}

.header__image {
  width: 150px;
  position: absolute;
  top: 20px;
  left: 5%;
}

@media screen and (max-width: 800px) {
  .header__image {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .header__button {
    font-size: 12px;
  }
}

@media screen and (max-width: 450px) {
  .header__button {
    margin: -15px auto;
  }
}
</style>
