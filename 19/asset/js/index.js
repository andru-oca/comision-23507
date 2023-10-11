// import { createApp } from "vue";
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { appCore } from "./appCore.vue.js";

// const { createApp } = Vue;

const idApp = "#app";

const app = createApp(appCore);

// montado o renderizado del elemento
app.mount(idApp);

// createApp({
//   data() {
//     return {
//       count: 0,
//     };
//   },
// }).mount("#app");
