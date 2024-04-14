import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Vue3TouchEvents from "vue3-touch-events";
import router from "./router";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";

const app = createApp(App);

app.use(PrimeVue);
app.component("Dialog", Dialog);
app.component("FileUpload", FileUpload);
app.use(createPinia());
app.use(Vue3TouchEvents);
app.use(router);

app.mount("#app");
