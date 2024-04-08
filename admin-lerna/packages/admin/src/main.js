import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { userName } from "@common/config";
console.log(userName);
import { userNameB } from "@common/config/a/b.js";
console.log(userNameB);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
