import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { mainCore } from "./mainCore.Vue.js";

const { createApp } = Vue;

const mainId = "#main";
const mainApp = createApp(mainCore);

mainApp.mount(mainId);
