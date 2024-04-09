import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Vue3TouchEvents from "vue3-touch-events";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(Vue3TouchEvents);
app.use(router);

app.mount("#app");
