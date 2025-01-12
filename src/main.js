import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/routes";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");

router.afterEach(() => {
  AOS.refresh();
});
