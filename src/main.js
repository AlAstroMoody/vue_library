import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ru-RU";
import "element-ui/lib/theme-chalk/index.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "firebase/storage";
import VueGoodTable from "vue-good-table";

Vue.use(VueGoodTable);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

firebase.initializeApp({
  apiKey: "AIzaSyDtflI4eNq7r9LEnHL8IgkWslHVbbiKXcc",
  authDomain: "apiforlibrary.firebaseapp.com",
  databaseURL: "https://apiforlibrary.firebaseio.com",
  projectId: "apiforlibrary",
  storageBucket: "apiforlibrary.appspot.com",
  messagingSenderId: "1078259620321",
  appId: "1:1078259620321:web:f0e2ba80bd977894fbdaa0"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
