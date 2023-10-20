import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { mainCore } from "./mainCore.Vue.js";

// tomo el modulo a trabajar y crear la app
const { createApp } = Vue;

// guardo el id en una variable
const mainId = "#main";
// genero el app a montar
const mainApp = createApp(mainCore);
// montado de la app
mainApp.mount(mainId);
