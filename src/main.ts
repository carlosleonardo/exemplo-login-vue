import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Material from "@primeuix/themes/material";

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Material,
    },
});
app.mount("#app");
